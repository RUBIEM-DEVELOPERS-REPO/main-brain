---
type: job
title: Ad-hoc: In 4 bullet points, compare REST and GraphQL for a public AP
slug: ad-hoc-in-4-bullet-points-compare-rest-and-graphql-for-a-pub-f5d952d0
created: 2026-06-08T10:23:13.128Z
jobId: f5d952d0-8bfd-465f-8ddf-cff41e23f285
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-08T10:21:21.697Z
finishedAt: 2026-06-08T10:23:13.128Z
---

# Ad-hoc: In 4 bullet points, compare REST and GraphQL for a public AP

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-08T10:21:21.697Z
- **Finished:** 2026-06-08T10:23:13.128Z
- **Title:** Ad-hoc: In 4 bullet points, compare REST and GraphQL for a public AP

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nIn 4 bullet points, compare REST and GraphQL for a public API.\n\nInterpretation: intent=answer, scope=in 4 bullet.",
  "userText": "In 4 bullet points, compare REST and GraphQL for a public API.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "intentScope": "in 4 bullet",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaId": "clawbot"
}
```

## Plan
Multi-perspective: In 4 bullet points, compare REST and GraphQL for a public API.

### Steps
1. ✓ Multi-perspective research: "In 4 bullet points, compare REST and GraphQL for a public API." — `research.multiperspective` (21.5s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (16.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.3s)
    > auto-injected: quality score=0.49 (pass=false) — peer review for a second opinion

## Answer
## Comparison of REST and GraphQL for a Public API

- **Endpoint structure** – REST relies on a fixed set of URLs that map to resources, which simplifies versioning and cache control; GraphQL uses a single endpoint where clients define the exact data shape, reducing the number of URLs but making cache granularity more complex. [3]  
- **Data‑fetching flexibility** – REST endpoints return predetermined payloads, often leading to over‑fetching or under‑fetching; GraphQL lets clients request precisely the fields they need, eliminating over‑fetching but potentially increasing query complexity. [3]  
- **Tooling and ecosystem maturity** – REST benefits from a long‑standing ecosystem with mature tools for documentation (OpenAPI), testing, and monitoring; GraphQL’s ecosystem is rapidly growing (Apollo, GraphiQL) but still trails in areas such as automated API documentation and legacy system integration. [3]  
- **Security and versioning** – REST versioning is explicit (e.g., `/v1/`, `/v2/`) and straightforward to deprecate; GraphQL requires careful schema evolution (deprecation directives) to avoid breaking clients, offering backward‑compatible changes within the same endpoint but making versioning less obvious. [3]

<details><summary>Log</summary>

```
[2026-06-08T10:21:21.698Z] DELEGATE_ALL → lightest worker managed-worker-7473 (effective load 1)
[2026-06-08T10:21:21.699Z] Why I delegated: worker.
[2026-06-08T10:21:22.717Z] [peer] hired employee "Neuro" (AI agent operator) for this task — scoped to this run only
[2026-06-08T10:21:48.841Z] [peer] Recognised the shape — Tier 3 — the web, 1 step.
[2026-06-08T10:21:48.841Z] [peer] Plan ready: 1 step — Multi-perspective: In 4 bullet points, compare REST and GraphQL for a public API..
[2026-06-08T10:21:48.841Z] [peer] Running with help from 1 peer worker (capacity 6 thinking + 9 I/O sub-agents).
[2026-06-08T10:21:48.841Z] [peer] Step 1 of 1: Multi-perspective research: "In 4 bullet points, compare REST and GraphQL for a public API."
[2026-06-08T10:22:09.911Z] [peer] All sub-agents finished in 21.5s.
[2026-06-08T10:22:09.911Z] [peer] Thinking with openai/gpt-oss-20b:free (~5 623 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-08T10:22:27.978Z] [peer] Reviewing the draft — running quality and security checks in parallel.
[2026-06-08T10:22:27.978Z] [peer] Running with help from 1 peer worker (capacity 6 thinking + 9 I/O sub-agents).
[2026-06-08T10:22:27.978Z] [peer] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-08T10:22:27.978Z] [peer] Step 3 of 3: Security-scanning the note
[2026-06-08T10:22:27.978Z] [peer] Step 2 of 3: Quality-checking the draft
[2026-06-08T10:22:43.033Z] [peer] Wave 1 finished in 16.3s.
[2026-06-08T10:22:43.033Z] [peer] All sub-agents finished in 16.3s.
[2026-06-08T10:22:43.033Z] [peer] Running with help from 1 peer worker (capacity 6 thinking + 9 I/O sub-agents).
[2026-06-08T10:22:43.033Z] [peer] Step 4 of 4: Asking a peer to review the draft
[2026-06-08T10:22:46.036Z] [peer] All sub-agents finished in 3.3s.
[2026-06-08T10:22:46.036Z] [peer] quality.check failed (score=0.49, issues: No inline citations for substantive claims; Excessive explanatory text beyond the requested 4 bullets) — re-synthesising with the large model
[2026-06-08T10:22:46.036Z] [peer] Thinking with openai/gpt-oss-120b:free (~6 179 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-08T10:23:13.127Z] [peer] quality rescue improved score: 0.49 → 0.93; using the rescued draft
[2026-06-08T10:23:13.127Z] managed-worker-7473 returned in 111.4s — succeeded.
[2026-06-08T10:23:13.127Z] Worker confirmed it operated as "Neuro".
[2026-06-08T10:23:13.127Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-06-08T10:23:13.128Z] Not filed to the vault — not context-rooted — no vault, web, or GitHub references found.
```
</details>
