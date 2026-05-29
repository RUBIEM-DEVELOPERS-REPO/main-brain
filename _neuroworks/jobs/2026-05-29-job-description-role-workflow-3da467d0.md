---
type: job
title: Job description → role workflow
slug: job-description-role-workflow-3da467d0
created: 2026-05-29T15:02:01.138Z
jobId: 3da467d0-44d4-4d42-bd9b-1b221415b00b
status: succeeded
template: custom-emp-jd-to-task-workflow
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:00:13.090Z
finishedAt: 2026-05-29T15:02:01.138Z
---

# Job description → role workflow

- **Status:** succeeded
- **Template:** custom-emp-jd-to-task-workflow
- **Started:** 2026-05-29T15:00:13.090Z
- **Finished:** 2026-05-29T15:02:01.138Z
- **Title:** Job description → role workflow

## Plan
Default research plan for: task list from this job description. Identify the role's primary deliverables, then list the recurring tasks that produce them — grouped by cadence (daily / weekly / monthly / quarterly). Mark which can be AI-assisted vs human-only, and name which skill or persona to use for the AI-assisted ones

### Steps
1. ✓ Researching "task list from this job description. Identify the role's primary deliverables, t…" — vault + web — `research.deep` (23.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (19.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (9.0s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
## Request for Required Input

The job description needed to extract primary deliverables and map recurring tasks (daily, weekly, monthly, quarterly) is not present in the available vault entries or web sources [1].  

To produce the requested workflow report, please provide the full text of the job description (or point to the exact vault file containing it). Once the description is available, I can:

1. Identify the role’s primary deliverables.  
2. List the recurring tasks that generate those deliverables, grouped by cadence.  
3. Mark each task as AI‑assisted or human‑only and specify the appropriate skill or persona for AI assistance.  

_Assumed: the user will supply the job description text so the analysis can be completed._

<details><summary>Log</summary>

```
[2026-05-29T15:00:13.097Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:00:13.099Z] Thinking about the best approach…
[2026-05-29T15:00:13.126Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:00:14.444Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T15:00:14.444Z] Plan ready: 1 step — Default research plan for: task list from this job description. Identify the role's primary deliverables, then list the recurring tasks that produce them — grouped by cadence (daily / weekly / monthly / quarterly). Mark which can be AI-assisted vs human-only, and name which skill or persona to use for the AI-assisted ones.
[2026-05-29T15:00:14.447Z] Step 1 of 1: Researching "task list from this job description. Identify the role's primary deliverables, t…" — vault + web
[2026-05-29T15:00:38.201Z] All sub-agents finished in 23.8s.
[2026-05-29T15:00:38.211Z] Thinking with openai/gpt-oss-20b:free (~3 603 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:00:39.278Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T15:00:45.632Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-29T15:00:45.633Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:00:45.639Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:00:45.639Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:00:45.639Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:00:46.672Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T15:00:49.324Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T15:01:04.814Z] Wave 1 finished in 19.2s.
[2026-05-29T15:01:04.814Z] All sub-agents finished in 19.2s.
[2026-05-29T15:01:04.816Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T15:01:05.950Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T15:01:13.820Z] All sub-agents finished in 9.0s.
[2026-05-29T15:01:13.824Z] quality.check failed (score=0.42, issues: does not provide requested task list; citation marker is not linked to real evidence) — re-synthesising with the large model
[2026-05-29T15:01:13.831Z] Thinking with openai/gpt-oss-120b:free (~4 083 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:01:44.812Z] quality rescue improved score: 0.42 → 0.72; using the rescued draft
[2026-05-29T15:01:44.812Z] peer review verdict=bad (Does not provide requested task list; fails to address task; No attempt to extract deliverables or cadence) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T15:01:44.820Z] Thinking with openai/gpt-oss-120b:free (~4 228 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:02:00.889Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T15:02:00.889Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:02:01.138Z] Vault commit: done.
```
</details>
