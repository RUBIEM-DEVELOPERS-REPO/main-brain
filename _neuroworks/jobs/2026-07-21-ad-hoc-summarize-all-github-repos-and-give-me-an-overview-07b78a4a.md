---
type: job
title: Ad-hoc: summarize all github repos and give me an overview
slug: ad-hoc-summarize-all-github-repos-and-give-me-an-overview-07b78a4a
created: 2026-07-21T08:22:12.852Z
jobId: 07b78a4a-a00a-47f8-940b-abfc5a0148af
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-07-21T08:18:05.463Z
finishedAt: 2026-07-21T08:22:12.851Z
---

# Ad-hoc: summarize all github repos and give me an overview

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-07-21T08:18:05.463Z
- **Finished:** 2026-07-21T08:22:12.851Z
- **Title:** Ad-hoc: summarize all github repos and give me an overview

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"summarize all github repos and give me an overview\"\n  User: \"summarize all github repos and give me an overview\"\n  You (assistant): \"**Nova** (Innovation Research Analyst) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): summarize all github repos and give me an overview\n\nInterpretation: intent=summarize, target=\"all github repos and give me an overview\".\n\nDeliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading \"TL;DR\" — say what it actually IS. No preamble.",
  "userText": "summarize all github repos and give me an overview",
  "save_as_template": true,
  "threadContextUsed": true,
  "priorTurnsUsed": 2,
  "assistantTurnUsed": true,
  "intent": "summarize",
  "intentTarget": "all github repos and give me an overview",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaId": "clawbot"
}
```

## Plan
List all GitHub repos, then write a per-repo overview.

### Steps
1. ✓ Listing your GitHub repos — `github.list_repos` (1.8s)
    > enumerate every GitHub repo the user can access
2. ✓ Thinking about it — `ollama.generate` (13.5s) · model `nvidia/nemotron-3-super-120b-a12b:free`
    > summarise the repo list into an overview
3. ✓ Quality-checking the draft — `quality.check` (41.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
5. ✓ Checking against governance policies — `governance.check` (0.0s)
    > auto-injected: check answer against accepted hard governance constraints
6. ✓ Asking a peer to review the draft — `peer.review` (22.0s)
    > auto-injected: quality score=0.77 (pass=false) — peer review for a second opinion

## Answer
**Bottom line:** The organization's GitHub portfolio consists of eight public and two private repositories focused on AI orchestration, workforce intelligence, data readiness, and educational forecasting, with peak development activity concentrated in three repositories updated on July 21, 2026 [1][2].

- The most active repositories, all updated on July 21, 2026, include the core AI logic repository `main-brain` written in Python, the educational forecasting tool `ChiedzaAI_Zivadzidzo` written in JavaScript, and the bank workforce intelligence prototype `ZivaBasa-MVP` [1][2].
- Data engineering and user interface projects include the contract-driven `AI-DATA-READINESS-SYSTEM-ADRS-` pipeline and the `zim-compare-ui-redesign-2-` interface, both written in TypeScript and updated on July 20, 2026 [1][2].
- The private repository `neuroworks` serves as a local-first AI workforce platform that orchestrates agents and integrates financial connectors, while `cognify` acts as a private cognition utility [1][2].
- Additional active utilities include the `AIIA-Website--Invoice-and-Receipt-Generator` in TypeScript and two intelligence data fetchers, `omnis-signal` and `Omnis_Signal_Updated` [1][2].
- TypeScript and JavaScript are the dominant languages for interface and integration work, while Python is utilized for core AI and data fetching logic [1][2].

## Sources
- [1] GitHub Repository List (RUBIEM-DEVELOPERS-REPO)
- [2] LLM Analysis of Repository Activity (Ollama)

<details><summary>Log</summary>

```
[2026-07-21T08:18:05.474Z] DELEGATE_ALL → lightest worker managed-worker-7473 (effective load 1)
[2026-07-21T08:18:05.474Z] Why I delegated: worker.
[2026-07-21T08:18:06.504Z] [peer] hired employee "Neuro" (AI agent operator) for this task — scoped to this run only
[2026-07-21T08:18:26.665Z] [peer] Recognised the shape — Direct tool use, 2 steps.
[2026-07-21T08:18:26.665Z] [peer] Plan ready: 2 steps — List all GitHub repos, then write a per-repo overview..
[2026-07-21T08:18:26.665Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-21T08:18:26.665Z] [peer] Step 1 of 2: Listing your GitHub repos
[2026-07-21T08:18:29.684Z] [peer] Step 2 of 2: Thinking about it
[2026-07-21T08:18:41.737Z] [peer] All sub-agents finished in 15.3s.
[2026-07-21T08:18:41.737Z] [peer] Thinking with nvidia/nemotron-3-super-120b-a12b:free (~5 692 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-07-21T08:18:53.802Z] [peer] Reviewing the draft — running quality, security, and governance checks in parallel.
[2026-07-21T08:18:53.802Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-21T08:18:53.802Z] [peer] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-07-21T08:18:53.802Z] [peer] Step 4 of 5: Security-scanning the note
[2026-07-21T08:18:53.802Z] [peer] Step 5 of 5: Checking against governance policies
[2026-07-21T08:18:53.802Z] [peer] Step 3 of 5: Quality-checking the draft
[2026-07-21T08:19:36.033Z] [peer] Wave 1 finished in 41.3s.
[2026-07-21T08:19:36.033Z] [peer] All sub-agents finished in 41.3s.
[2026-07-21T08:19:36.033Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-21T08:19:36.033Z] [peer] Step 6 of 6: Asking a peer to review the draft
[2026-07-21T08:19:57.148Z] [peer] All sub-agents finished in 22.0s.
[2026-07-21T08:19:57.148Z] [peer] quality.check failed (score=0.77, issues: Bottom line incorrectly states nine public repos (actual eight); Bottom line lacks inline citation) — re-synthesising with the large model
[2026-07-21T08:19:57.148Z] [peer] Thinking with google/gemini-3.5-flash (~6 564 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-21T08:20:57.454Z] [peer] quality rescue improved score: 0.77 → 0.91; using the rescued draft
[2026-07-21T08:20:57.454Z] [peer] peer review verdict=bad (Factual claims about specific repositories, languages, and dates are likely hallucinated (no evidence provided).; Format) — retrying with reviewer's issues as guidance before returning to user
[2026-07-21T08:20:57.454Z] [peer] Thinking with google/gemini-3.5-flash (~6 767 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-21T08:22:12.849Z] [peer] retry verdict=needs-work but quality improved (0.91 → 0.93); using retry
[2026-07-21T08:22:12.849Z] managed-worker-7473 returned in 247.4s — succeeded.
[2026-07-21T08:22:12.849Z] Worker confirmed it operated as "Neuro".
[2026-07-21T08:22:12.849Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-07-21T08:22:12.851Z] Not filed to the vault — not context-rooted — no vault, web, or GitHub references found.
```
</details>
