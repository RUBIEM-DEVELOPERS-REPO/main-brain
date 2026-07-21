---
type: progress
date: 2026-07-21
scope: github-repos routing fix + db.query bottleneck + peer timeout raise + Cancel Run button
author: claude-code session
---

# GitHub routing, db.query, delegation timeout, Cancel Run

## 1. Agents couldn't "summarize all GitHub repos"
Reported: "No specific list or overview of GitHub repositories could be provided" — the agent web-searched generic GitHub docs instead of calling github.list_repos.
- Root cause: the github plan() hint AND all heuristicPlan branches required a POSSESSIVE ("my/our repos"). "Summarize all GitHub repos" (no "my") matched neither → fell to research.deep (web). The github primitives + token were fine (verified: github.list_repos returns 5+ real repos).
- Fix: new deterministic heuristicPlan branch (ghAllReposMatch) — "summarize/list/overview all [github] repos" (possessive OPTIONAL) → github.list_repos → ollama.generate overview. Broadened the plan() githubContext hint regex to fire on "github repos" / "all|list|summarize ... repos" without a possessive. Ordered before the per-repo lookup.
- Live-verified: "Summarize all GitHub repos and give me an overview" → github.list_repos + ollama.generate, real per-repo overview (neuroworks, main-brain, ADRS, ZivaBasa, etc.).

## 2. db.query 31.5s bottleneck — investigated
Journal showed question-mode db.query at 31.5s / 51s / 90s.
- Attributed cost: the LLM SQL-generation step (complexity:"high" → large OpenRouter model) is the dominant, IRREDUCIBLE cost — tried dropping to the fast small model and it BOTH failed ("no executable SQL") AND got slower (187s via free-tier failover retries), reconfirming the 2026-07-12 finding that small models can't write SQL from an unseen schema. Reverted.
- Real safe win: describeSource ran a full information_schema scan on EVERY question-mode call (a network round-trip; Neon serverless cold-start adds seconds). Added a per-source schema cache (5-min TTL, NEUROWORKS_DB_SCHEMA_CACHE_MS, invalidated on removeSource). Live-verified: cold 15s → warm 10s (saved the ~5s Neon schema round-trip). Added timing log ([db.query] schema=Xms sqlgen=Yms).
- Honest finding: the user's framing ("schema or indexing") wasn't the bottleneck — it's the LLM SQL-gen. Not tunable further without breaking SQL correctness.

## 3. Peer delegation timeout raised
12min still timed out a real delegated general-task (2026-07-20 journal: research fan-out hit the 12min ceiling). Raised default 12→20min (NEUROWORKS_PEER_DELEGATE_TIMEOUT_MS), both delegateToPeer + delegateToBestPeer. (Note: the ONE real timeout I found was actually the github-routing bug falling to a slow research.deep — now fixed — but the raise is honored per the explicit ask.)

## 4. Cancel Run button (new)
Cooperative cancellation end-to-end:
- jobs.ts: per-job AbortController registry (jobAborts). `cancelJob(id)` aborts the signal, marks the job failed ("Cancelled by the operator"), emits "done" (UI flips immediately), persists. `getJobAbortSignal(id)` exposes it. runJob registers/cleans up the controller; guarded BOTH the success path and the catch so a delegate/agent path returning normally after cancel can't flip the job back to "succeeded" (caught live: status=succeeded + error=Cancelled → fixed).
- Cooperative abort points: executePlan checks signal at each wave boundary (returns cancelled:true → planAndExecute skips synth/QA); runStep bails if aborted; delegateToPeer poll loop checks the signal, stops waiting, and best-effort POSTs /cancel to the WORKER so it stops too.
- Signal threaded via planAndExecute opts.signal (local path through runFromChat inputs._signal, delegate path through delegateToPeer args.signal).
- Route: POST /api/tasks/jobs/:id/cancel (per-user visibility slice, 404 not 403, 409 on terminal jobs).
- UI: api.cancelJob; "Cancel run" button on each Tasks live-activity card; "cancel" link in the Chat InlineJob running pill.
- Live-verified: mid-run cancel of a delegated research task → status stays failed/Cancelled, worker told to cancel; normal task still succeeds; double-cancel of a terminal job → 409.

## State
server tsc clean, web rebuilt, server+workers bounced, all four live-verified. NOT committed (this batch + all prior uncommitted work since ccfaea6).
