---
type: job
title: Ad-hoc: Summarize all GitHub repos and give me an overview.
slug: ad-hoc-summarize-all-github-repos-and-give-me-an-overview--469c8db9
created: 2026-07-21T06:52:21.802Z
jobId: 469c8db9-75ad-44c7-92fa-511b1b320a91
status: succeeded
template: general-task
persona: nova
personaName: Nova
startedAt: 2026-07-21T06:50:23.396Z
finishedAt: 2026-07-21T06:52:21.800Z
---

# Ad-hoc: Summarize all GitHub repos and give me an overview.

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-07-21T06:50:23.396Z
- **Finished:** 2026-07-21T06:52:21.800Z
- **Title:** Ad-hoc: Summarize all GitHub repos and give me an overview.

## Inputs
```json
{
  "task": "(You are operating as Nova, the Innovation Research Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSummarize all GitHub repos and give me an overview.\n\nInterpretation: intent=summarize, target=\"all GitHub repos and give me an overview\".\n\nDeliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading \"TL;DR\" — say what it actually IS. No preamble.",
  "userText": "Summarize all GitHub repos and give me an overview.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "summarize",
  "intentTarget": "all GitHub repos and give me an overview",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaId": "nova"
}
```

## Plan
List all GitHub repos, then write a per-repo overview.

### Steps
1. ✓ Listing your GitHub repos — `github.list_repos` (4.0s)
    > enumerate every GitHub repo the user can access
2. ✓ Thinking about it — `ollama.generate` (9.6s) · model `nvidia/nemotron-3-super-120b-a12b:free`
    > summarise the repo list into an overview
3. ✓ Quality-checking the draft — `quality.check` (29.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
5. ✓ Checking against governance policies — `governance.check` (0.0s)
    > auto-injected: check answer against accepted hard governance constraints
6. ✓ Asking a peer to review the draft — `peer.review` (13.1s)
    > auto-injected: quality score=0.79 (pass=false) — peer review for a second opinion

## Answer
**Bottom line:** The organization's GitHub ecosystem centers on a local-first AI workforce orchestration platform supported by contract-driven data readiness pipelines, real-time intelligence-gathering tools, and targeted workforce impact simulators [1][2].

* The flagship private repository, `neuroworks`, serves as a local-first AI workforce platform that orchestrates agents, manages governance, and integrates the data pipeline [1][2].
* Core AI logic and real-time data ingestion are driven by the Python-based `main-brain` repository and the `omnis-signal` suite, which functions as an intelligence data fetcher [1][2].
* Enterprise data integration is standardized through the `AI-DATA-READINESS-SYSTEM-ADRS-` repository, which enforces traceable validation and maps raw data into a canonical model [1][2].
* The `ZivaBasa-MVP` repository provides a specialized workforce intelligence platform designed to predict employment and productivity impacts for banking institutions [1][2].
* The technical stack is heavily dominated by TypeScript and Python, with key proprietary systems like `neuroworks` and `cognify` maintained as private repositories [1][2].

## Sources
- [GitHub Repository List](github.list_repos) [1]
- [Ollama Repository Analysis](ollama.generate) [2]

<details><summary>Log</summary>

```
[2026-07-21T06:50:23.399Z] DELEGATE_ALL → lightest worker managed-worker-7473 (effective load 1)
[2026-07-21T06:50:23.399Z] Why I delegated: persona-shifter.
[2026-07-21T06:50:24.528Z] [peer] hired employee "Nova" (Innovation Research Analyst) for this task — scoped to this run only
[2026-07-21T06:50:38.795Z] [peer] Recognised the shape — Direct tool use, 2 steps.
[2026-07-21T06:50:38.795Z] [peer] Plan ready: 2 steps — List all GitHub repos, then write a per-repo overview..
[2026-07-21T06:50:38.795Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-21T06:50:38.795Z] [peer] Step 1 of 2: Listing your GitHub repos
[2026-07-21T06:50:41.820Z] [peer] Step 2 of 2: Thinking about it
[2026-07-21T06:50:51.157Z] [peer] All sub-agents finished in 13.6s.
[2026-07-21T06:50:51.157Z] [peer] Thinking with google/gemini-3.5-flash (~6 213 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-21T06:51:03.222Z] [peer] Reviewing the draft — running quality, security, and governance checks in parallel.
[2026-07-21T06:51:03.222Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-21T06:51:03.222Z] [peer] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-07-21T06:51:03.222Z] [peer] Step 4 of 5: Security-scanning the note
[2026-07-21T06:51:03.222Z] [peer] Step 5 of 5: Checking against governance policies
[2026-07-21T06:51:03.222Z] [peer] Step 3 of 5: Quality-checking the draft
[2026-07-21T06:51:33.386Z] [peer] Wave 1 finished in 29.0s.
[2026-07-21T06:51:33.386Z] [peer] All sub-agents finished in 29.0s.
[2026-07-21T06:51:33.386Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-21T06:51:33.386Z] [peer] Step 6 of 6: Asking a peer to review the draft
[2026-07-21T06:51:45.461Z] [peer] All sub-agents finished in 13.1s.
[2026-07-21T06:51:45.461Z] [peer] quality.check failed (score=0.79, issues: Neuroworks description attributed to wrong source [1]; Claim of 11 repos conflicts with source showing 12 repos) — re-synthesising with the large model
[2026-07-21T06:51:45.461Z] [peer] Thinking with google/gemini-3.5-flash (~6 844 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-21T06:52:21.798Z] [peer] quality rescue improved score: 0.79 → 0.9; using the rescued draft
[2026-07-21T06:52:21.798Z] managed-worker-7473 returned in 118.4s — succeeded.
[2026-07-21T06:52:21.798Z] Worker confirmed it operated as "Nova".
[2026-07-21T06:52:21.798Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-07-21T06:52:21.800Z] Not filed to the vault — not context-rooted — no vault, web, or GitHub references found.
```
</details>
