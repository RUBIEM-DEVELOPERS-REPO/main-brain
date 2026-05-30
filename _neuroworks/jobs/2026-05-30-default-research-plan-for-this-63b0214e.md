---
type: job
title: Default research plan for: this
slug: default-research-plan-for-this-63b0214e
created: 2026-05-30T18:51:33.784Z
jobId: 63b0214e-7b65-4214-8a5f-4983588f4b73
status: succeeded
template: custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:50:59.623Z
finishedAt: 2026-05-30T18:51:33.783Z
---

# Default research plan for: this

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
- **Started:** 2026-05-30T18:50:59.623Z
- **Finished:** 2026-05-30T18:51:33.783Z
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
1. ✓ Researching "this" — vault + web — `research.deep` (26.6s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/

## Answer
**Bottom line:** NeuroWorks is an AI‑agent operating system that orchestrates 17 specialist personas, recently adding bulk‑import, a source‑validator, Firecrawl search, and parallel multi‑persona task dispatch while filtering out low‑quality or off‑topic web content.  

## Key points
- Routes tasks to 17 specialist personas.  
- New bulk‑import path from Downloads to vault.  
- Strict source‑validator scores web evidence by query‑term density.  
- Firecrawl integration serves as the primary search/scrape tier.  
- Continuation flow supports tasks requiring additional context.  
- Lane‑gating keeps personas within their designated swim lanes.  
- Team‑task dispatch enables parallel execution across multiple personas.  
- Validator drops auth walls, captchas, 4xx‑5xx responses, sub‑200‑char extractions, and off‑topic SERP results.  

## Sources  
- neuroworks.txt (attached)

<details><summary>Log</summary>

```
[2026-05-30T18:50:59.655Z] Replaying a saved plan — 1 step.
[2026-05-30T18:50:59.665Z] Step 1 of 1: Researching "this" — vault + web
[2026-05-30T18:51:26.223Z] All sub-agents finished in 26.6s.
[2026-05-30T18:51:26.241Z] Thinking with openai/gpt-oss-20b:free (~4 217 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
