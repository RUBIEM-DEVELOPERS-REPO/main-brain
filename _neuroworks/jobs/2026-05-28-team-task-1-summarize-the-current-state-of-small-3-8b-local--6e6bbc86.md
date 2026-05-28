---
type: job
title: Team task #1: Summarize the current state of small (3-8B) local LLMs for c
slug: team-task-1-summarize-the-current-state-of-small-3-8b-local--6e6bbc86
created: 2026-05-28T13:37:40.796Z
jobId: 6e6bbc86-30f0-4206-8fbc-c0bb636961ae
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T13:35:19.177Z
finishedAt: 2026-05-28T13:37:40.796Z
---

# Team task #1: Summarize the current state of small (3-8B) local LLMs for c

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:35:19.177Z
- **Finished:** 2026-05-28T13:37:40.796Z
- **Title:** Team task #1: Summarize the current state of small (3-8B) local LLMs for c

## Inputs
```json
{
  "task": "(You are operating as Researcher, the Investigative analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSummarize the current state of small (3-8B) local LLMs for coding tasks as of 2025. Give your top 3 picks and one sentence on why each, with sources.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Summarize the current state of small (3-8B) local LLMs for coding tasks as of 2025. Give your top 3 picks and one sentence on why each, with sources.",
  "teamTask": {
    "taskIndex": 0,
    "persona": "researcher",
    "route": "explicit"
  },
  "personaId": "researcher"
}
```

## Plan
Research: small (3-8B) local LLMs for coding tasks as of 2025

### Steps
1. ✓ Researching "small (3-8B) local LLMs for coding tasks as of 2025" — vault + web — `research.deep` (31.3s)
    > research signal detected ("as of 2025") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (6.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (35.4s)
    > auto-injected: quality score=0.66 (pass=false) — peer review for a second opinion

## Answer
**Topic statement**  
The request is for a concise, evidence‑backed summary of the 2025 landscape of small (3‑8 B parameter) locally‑run LLMs used for coding, plus the top three models with a one‑sentence justification for each.

**What the evidence shows**  
The supplied evidence set contains no substantive sources describing any of these models, their performance, or recent developments in 2025. All retrieved web links were either thin, failed to fetch, or returned errors, and the vault entry is only a title without content. Consequently, no verifiable claims can be made about the current state or specific model rankings.

**What is needed to fulfill the request**  
1. Access to recent benchmark reports (e.g., OpenAI Eval, Code‑Alpaca Eval, or HumanEval 2025) that include 3‑8 B parameter models.  
2. Links or excerpts from community‑maintained model cards (e.g., Hugging Face, Model Zoo) that detail architecture, training data, and coding‑specific evaluation scores for models released in 2024‑2025.  
3. Any internal performance logs or user surveys that compare these models on coding tasks (completion accuracy, latency, resource usage).  
4. Clarification on whether the “top 3 picks” should prioritize open‑source availability, coding accuracy, or overall efficiency.

**Skeleton of the requested report (to be populated once sources are provided)**  

| Rank | Model (size) | One‑sentence justification |
|------|--------------|----------------------------|
| 1 | <Model A (3 B)> | <Brief reason based on coding benchmark score, e.g., “Achieves the highest HumanEval pass@1 among 3‑8 B models while running under 8 GB VRAM.”> |
| 2 | <Model B (6 B)> | <Reason, e.g., “Offers the best trade‑off between latency and accuracy, with 15 % lower inference time than peers.”> |
| 3 | <Model C (8 B)> | <Reason, e.g., “Provides the most extensive open‑source tooling ecosystem for code generation.”> |

*Assumed: the user wants a brief tabular list with a single justification per model, based on publicly available benchmark data.*

<details><summary>Log</summary>

```
[2026-05-28T13:35:19.177Z] team-task #1 · persona=researcher · route=explicit
[2026-05-28T13:35:19.178Z] **Researcher** (Investigative analyst) is on this team-task.
[2026-05-28T13:35:19.220Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-28T13:35:19.220Z] Plan ready: 1 step — Research: small (3-8B) local LLMs for coding tasks as of 2025.
[2026-05-28T13:35:19.527Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:35:19.527Z] Step 1 of 1: Researching "small (3-8B) local LLMs for coding tasks as of 2025" — vault + web
[2026-05-28T13:35:50.830Z] All sub-agents finished in 31.3s.
[2026-05-28T13:35:50.992Z] Thinking with openai/gpt-oss-20b:free (~3 020 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:36:07.691Z] Synth produced empty output — falling back to the raw research result.
[2026-05-28T13:36:07.692Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:36:07.693Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:36:07.693Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:36:07.694Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:36:14.552Z] Wave 1 finished in 6.9s.
[2026-05-28T13:36:14.552Z] All sub-agents finished in 6.9s.
[2026-05-28T13:36:14.552Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-28T13:36:15.948Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-28T13:36:18.418Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-28T13:36:49.935Z] All sub-agents finished in 35.4s.
[2026-05-28T13:36:49.939Z] quality.check failed (score=0.66, issues: refusal to provide requested information; does not meet user’s request for summary and top picks) — re-synthesising with the large model
[2026-05-28T13:36:49.944Z] Thinking with openai/gpt-oss-120b:free (~3 336 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-28T13:37:26.074Z] quality rescue improved score: 0.66 → 0.74; using the rescued draft
[2026-05-28T13:37:26.074Z] peer review verdict=bad (Does not answer the question; Fails to provide summary, picks, or sources) — retrying with reviewer's issues as guidance before returning to user
[2026-05-28T13:37:26.079Z] Thinking with openai/gpt-oss-120b:free (~3 487 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-28T13:37:40.796Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
```
</details>
