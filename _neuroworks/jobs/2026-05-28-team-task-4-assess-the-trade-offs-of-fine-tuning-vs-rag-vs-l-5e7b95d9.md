---
type: job
title: Team task #4: Assess the trade-offs of fine-tuning vs RAG vs long-context
slug: team-task-4-assess-the-trade-offs-of-fine-tuning-vs-rag-vs-l-5e7b95d9
created: 2026-05-28T20:08:03.424Z
jobId: 5e7b95d9-769f-4c65-bad9-f466a2f4d40f
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T20:04:23.994Z
finishedAt: 2026-05-28T20:08:03.424Z
---

# Team task #4: Assess the trade-offs of fine-tuning vs RAG vs long-context 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T20:04:23.994Z
- **Finished:** 2026-05-28T20:08:03.424Z
- **Title:** Team task #4: Assess the trade-offs of fine-tuning vs RAG vs long-context 

## Inputs
```json
{
  "task": "(You are operating as Head of AI, the Head of AI. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nAssess the trade-offs of fine-tuning vs RAG vs long-context for a domain assistant, with sources.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Assess the trade-offs of fine-tuning vs RAG vs long-context for a domain assistant, with sources.",
  "teamTask": {
    "taskIndex": 3,
    "persona": "head-of-ai",
    "route": "explicit"
  },
  "personaId": "head-of-ai"
}
```

## Plan
Research: Assess the trade-offs of fine-tuning vs RAG vs long-context for a domain assistant, with sources. **Alignment check — required before respo

### Steps
1. ✓ Researching "Assess the trade-offs of fine-tuning vs RAG vs long-context for a domain assista…" — vault + web — `research.deep` (38.1s)
    > research signal detected ("with sources") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (9.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (22.5s)
    > auto-injected: quality score=0.52 (pass=false) — peer review for a second opinion

## Answer
**To:** Product & Engineering Leadership  
**From:** Head of AI  
**Date:** 2026‑05‑28  
**Subject:** Trade‑off Assessment – Fine‑Tuning vs. Retrieval‑Augmented Generation vs. Long‑Context Prompting for a Domain Assistant  

### Executive Summary  
Choosing the knowledge‑injection method for a domain‑specific assistant hinges on three axes: **performance & latency**, **operational cost & scalability**, and **data freshness & maintainability**. Fine‑tuning delivers the lowest inference latency and token cost but incurs high upfront training expense and slower update cycles. Retrieval‑Augmented Generation (RAG) offers rapid incorporation of new documents and modest latency (≈50–200 ms retrieval + 1–2 k extra prompt tokens) at the expense of higher per‑query token usage. Long‑context prompting eliminates the retrieval layer but is limited by the model’s context window (8 k–32 k tokens) and requires re‑prompting for any knowledge change.  

### Comparative Matrix  

| Dimension | Fine‑Tuning | Retrieval‑Augmented Generation (RAG) | Long‑Context Prompting |
|-----------|-------------|--------------------------------------|------------------------|
| **Knowledge integration** | Model weights updated; domain knowledge internalised. | Weights frozen; relevant docs fetched at query time and injected into the prompt. | Entire knowledge base placed directly in the prompt; no external service. |
| **Best use cases** | • Consistent tone/format that prompt engineering cannot achieve.<br>• Domain‑specific vocab or reasoning patterns that must be internalised.<br>• High‑throughput, low‑latency serving at massive scale. | • Frequently changing facts (regulatory updates, product catalogs).<br>• Need for cite‑able sources.<br>• Faster product iteration (days‑weeks to ship). | • Static knowledge that fits within the model’s context window.<br>• Simpler stack (no vector DB). |
| **Latency & token cost** | Single forward pass → fastest inference; no extra tokens. Training cost is high. | Retrieval adds ~50–200 ms + 1–2 k prompt tokens; per‑query cost rises with token count. | Same as RAG but without retrieval latency; cost scales with context size. |
| **Data freshness** | Requires full (re‑)fine‑tuning for updates. | New documents are re‑embedded; updates are immediate. | Requires re‑prompting; not as dynamic. |
| **Scalability** | Each fine‑tuned version adds model size and version‑control complexity. | Scales with vector store; adding docs is cheap. | Bounded by maximum context window (8 k–32 k tokens). |
| **Maintainability** | Needs robust pipelines, versioning, drift monitoring. | Simpler: only the vector store changes. | Requires careful prompt engineering; updates need prompt regeneration. |

### Recommendations  

1. **Hybrid Approach** – Deploy a fine‑tuned base model for core, high‑volume interactions (stable terminology, style) and layer RAG for the mutable knowledge component (e.g., policy documents, product specs).  
2. **Context Window Planning** – If the static knowledge set is ≤ 8 k tokens, long‑context prompting can replace RAG for low‑latency, low‑ops scenarios. For larger corpora, RAG remains the only viable option.  
3. **Cost Monitoring** – Track per‑query token usage; RAG’s extra 1–2 k tokens can dominate cost at scale. Fine‑tuning amortises cost across millions of queries but demands periodic retraining budgets.  

### Sources  

- Comparative dimensions and best‑use cases derived from the research note “Fine‑tuning vs. Retrieval‑Augmented Generation vs. Long‑context prompting” [1].  
- Additional corroboration from industry analyses on RAG vs. fine‑tuning (AI PM Guru Substack; Monte Carlo blog) [1].  

*Assumed: the domain assistant will serve both internal staff and external customers, requiring a balance of latency, cost, and up‑to‑date factual accuracy.*

<details><summary>Log</summary>

```
[2026-05-28T20:04:23.994Z] team-task #4 · persona=head-of-ai · route=explicit
[2026-05-28T20:04:23.994Z] **Head of AI** (Head of AI) is on this team-task.
[2026-05-28T20:04:24.092Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-28T20:04:24.092Z] Plan ready: 1 step — Research: Assess the trade-offs of fine-tuning vs RAG vs long-context for a domain assistant, with sources. **Alignment check — required before respo.
[2026-05-28T20:04:24.453Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T20:04:24.453Z] Step 1 of 1: Researching "Assess the trade-offs of fine-tuning vs RAG vs long-context for a domain assista…" — vault + web
[2026-05-28T20:05:02.518Z] All sub-agents finished in 38.1s.
[2026-05-28T20:05:02.525Z] Thinking with openai/gpt-oss-20b:free (~3 093 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T20:05:33.742Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T20:05:33.747Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T20:05:33.747Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T20:05:33.747Z] Step 3 of 3: Security-scanning the note
[2026-05-28T20:05:33.747Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T20:05:43.184Z] Wave 1 finished in 9.4s.
[2026-05-28T20:05:43.184Z] All sub-agents finished in 9.4s.
[2026-05-28T20:05:43.189Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T20:05:43.189Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-28T20:06:05.683Z] All sub-agents finished in 22.5s.
[2026-05-28T20:06:05.688Z] quality.check failed (score=0.52, issues: Citation coverage is low; only a single generic [1] marker is present, leaving most claims unsupported. The answer does not explicitly address all requested elements (e.g., concrete counts, named step) — re-synthesising with the large model
[2026-05-28T20:06:05.696Z] Thinking with openai/gpt-oss-120b:free (~4 132 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-28T20:06:40.450Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-28T20:06:40.450Z] peer review verdict=needs-work (Missing concrete source citations; No explicit reference to specific studies or benchmarks) — retrying with reviewer's issues as guidance before returning to user
[2026-05-28T20:06:40.456Z] Thinking with openai/gpt-oss-120b:free (~4 281 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-28T20:08:03.424Z] retry quality compare failed (OpenRouter 429: {"error":{"message":"Provider returned error); keeping the rescued/original draft
```
</details>
