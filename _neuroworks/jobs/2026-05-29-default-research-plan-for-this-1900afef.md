---
type: job
title: Default research plan for: this
slug: default-research-plan-for-this-1900afef
created: 2026-05-29T09:46:33.774Z
jobId: 1900afef-573e-40bf-90f5-5580fb274f59
status: succeeded
template: custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:45:38.417Z
finishedAt: 2026-05-29T09:46:33.774Z
---

# Default research plan for: this

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
- **Started:** 2026-05-29T09:45:38.417Z
- **Finished:** 2026-05-29T09:46:33.774Z
- **Title:** Default research plan for: this

## Plan
Default research plan for: this

### Steps
1. ✓ Researching "this" — vault + web — `research.deep` (35.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/

## Answer
**Bottom line:** NeuroWorks is an AI‑agent operating system that routes tasks to 17 specialist personas, recently adding bulk‑import, a source‑validator, Firecrawl integration, and parallel multi‑persona execution while filtering out authentication walls, captchas, and low‑quality results.  

## Key points
- **Task routing:** 17 specialist personas are kept within their swim lanes; lane‑gating prevents cross‑persona interference.  
- **Bulk‑import:** New path from Downloads to vault for large data ingestion.  
- **Source‑validator:** Scores web evidence by query‑term density; drops auth walls, captchas, 4xx‑5xx responses, sub‑200‑char extractions, and off‑topic SERP results.  
- **Firecrawl integration:** Serves as the primary search/scrape tier for gathering web content.  
- **Continuation flow:** Enables tasks that need more context to be carried forward.  
- **Parallel execution:** Team‑task dispatch runs multi‑persona tasks in parallel, improving throughput.  

## Sources
- neuroworks.txt (attached)

<details><summary>Log</summary>

```
[2026-05-29T09:45:38.427Z] Replaying a saved plan — 1 step.
[2026-05-29T09:45:38.431Z] Step 1 of 1: Researching "this" — vault + web
[2026-05-29T09:46:13.610Z] All sub-agents finished in 35.2s.
[2026-05-29T09:46:13.622Z] Thinking with openai/gpt-oss-20b:free (~3 828 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:46:14.764Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Rate limit exceeded: @ratelimit/too-many-re) — retrying once in 5s.
[2026-05-29T09:46:33.774Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
