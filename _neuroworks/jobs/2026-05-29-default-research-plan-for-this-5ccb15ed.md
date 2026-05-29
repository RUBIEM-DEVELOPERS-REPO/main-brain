---
type: job
title: Default research plan for: this
slug: default-research-plan-for-this-5ccb15ed
created: 2026-05-29T23:12:01.945Z
jobId: 5ccb15ed-bfe7-4ee0-9f61-2daf416e8a70
status: succeeded
template: custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:11:04.693Z
finishedAt: 2026-05-29T23:12:01.945Z
---

# Default research plan for: this

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
- **Started:** 2026-05-29T23:11:04.693Z
- **Finished:** 2026-05-29T23:12:01.945Z
- **Title:** Default research plan for: this

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Default research plan for: this\nDescription: Saved from chat: \"(You are operating as Fiona, the Financial Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nsummarize this\n\nInterpretation: intent=summarize, target=\"the attached document(s) below\".\n\n**Source-of-truth notice.** Attached documents follow this block. They are the SOURCE for this task. Do NOT plan vault.search / vault.read / fs.find_in / fs.read_text — the content is already inline below. Operate directly on the attached text.\n\nDeliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading \"TL;DR\" — say what it actually IS. No preamble.\n\nAttached documents (user uploaded as context for THIS task — read them carefully and use them as primary evidence):\n[Attachment 1: neuroworks.txt]\nNeuroWorks is an AI-agent operating system. It routes tasks to 17 specialist personas. Recently shipped: bulk-import path from Downloads to vault, strict source-validator that scores web evidence by query-term density, Firecrawl integration as the primary search/scrape tier, continuation flow for tasks that need more context. Lane-gating keeps personas inside their swim lane. Team-task dispatch runs parallel multi-persona execution. The validator drops auth walls, captcha pages, 4xx-5xx responses, sub-200-char extractions, and off-topic SERP results.\""
}
```

## Plan
Default research plan for: this

### Steps
1. ✓ Researching "this" — vault + web — `research.deep` (40.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/

## Answer
**Bottom line:** NeuroWorks is an AI‑agent operating system that orchestrates 17 specialist personas, recently adding bulk‑import, a strict source‑validator, Firecrawl integration, and parallel multi‑persona task dispatch while filtering out authentication walls, captchas, error pages, short extractions, and off‑topic results.  

## Key points
- Routes tasks to 17 specialist personas.  
- New features: bulk‑import path from Downloads to vault; strict source‑validator scoring web evidence by query‑term density; Firecrawl as primary search/scrape tier; continuation flow for context‑heavy tasks.  
- Lane‑gating keeps personas within their designated swim lanes.  
- Team‑task dispatch enables parallel execution across multiple personas.  
- Validator drops auth walls, captchas, 4xx‑5xx responses, sub‑200‑char extractions, and off‑topic SERP results.  

## Sources  
- neuroworks.txt (attached)

<details><summary>Log</summary>

```
[2026-05-29T23:11:04.715Z] Replaying a saved plan — 1 step.
[2026-05-29T23:11:04.723Z] Step 1 of 1: Researching "this" — vault + web
[2026-05-29T23:11:45.578Z] All sub-agents finished in 40.9s.
[2026-05-29T23:11:45.708Z] Thinking with openai/gpt-oss-20b:free (~4 217 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:11:46.995Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T23:12:01.945Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
