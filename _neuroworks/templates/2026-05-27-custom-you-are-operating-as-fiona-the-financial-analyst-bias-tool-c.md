---
type: template
title: Default research plan for: this (custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c)
slug: custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
created: 2026-05-27T08:46:52.691Z
templateId: custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c
role: Custom
originTask: (You are operating as Fiona, the Financial Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)  summarize this  Interpretation: intent=summarize, target="the attached document(s) below".  **Source-of-truth notice.** Attached documents follow this block. They are the SOURCE for this task. Do NOT plan vault.search / vault.read / fs.find_in / fs.read_text — the content is already inline below. Operate directly on the attached text.  Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.  Attached documents (user uploaded as context for THIS task — read them carefully and use them as primary evidence): [Attachment 1: neuroworks.txt] NeuroWorks is an AI-agent operating system. It routes tasks to 17 specialist personas. Recently shipped: bulk-import path from Downloads to vault, strict source-validator that scores web evidence by query-term density, Firecrawl integration as the primary search/scrape tier, continuation flow for tasks that need more context. Lane-gating keeps personas inside their swim lane. Team-task dispatch runs parallel multi-persona execution. The validator drops auth walls, captcha pages, 4xx-5xx responses, sub-200-char extractions, and off-topic SERP results.
---

# Default research plan for: this (custom-you-are-operating-as-fiona-the-financial-analyst-bias-tool-c)

Saved from chat: "(You are operating as Fiona, the Financial Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)

summarize this

Interpretation: intent=summarize, target="the attached document(s) below".

**Source-of-truth notice.** Attached documents follow this block. They are the SOURCE for this task. Do NOT plan vault.search / vault.read / fs.find_in / fs.read_text — the content is already inline below. Operate directly on the attached text.

Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.

Attached documents (user uploaded as context for THIS task — read them carefully and use them as primary evidence):
[Attachment 1: neuroworks.txt]
NeuroWorks is an AI-agent operating system. It routes tasks to 17 specialist personas. Recently shipped: bulk-import path from Downloads to vault, strict source-validator that scores web evidence by query-term density, Firecrawl integration as the primary search/scrape tier, continuation flow for tasks that need more context. Lane-gating keeps personas inside their swim lane. Team-task dispatch runs parallel multi-persona execution. The validator drops auth walls, captcha pages, 4xx-5xx responses, sub-200-char extractions, and off-topic SERP results."

**Origin task:** (You are operating as Fiona, the Financial Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)

summarize this

Interpretation: intent=summarize, target="the attached document(s) below".

**Source-of-truth notice.** Attached documents follow this block. They are the SOURCE for this task. Do NOT plan vault.search / vault.read / fs.find_in / fs.read_text — the content is already inline below. Operate directly on the attached text.

Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.

Attached documents (user uploaded as context for THIS task — read them carefully and use them as primary evidence):
[Attachment 1: neuroworks.txt]
NeuroWorks is an AI-agent operating system. It routes tasks to 17 specialist personas. Recently shipped: bulk-import path from Downloads to vault, strict source-validator that scores web evidence by query-term density, Firecrawl integration as the primary search/scrape tier, continuation flow for tasks that need more context. Lane-gating keeps personas inside their swim lane. Team-task dispatch runs parallel multi-persona execution. The validator drops auth walls, captcha pages, 4xx-5xx responses, sub-200-char extractions, and off-topic SERP results.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "this",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"this\" — vault + web"
    }
  ],
  "summary": "Default research plan for: this",
  "waves": [
    [
      0
    ]
  ]
}
```
