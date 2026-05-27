---
type: template
title: Research: In one paragraph, who is Dario Amodei? Cite sources where possible (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-05-27T21:08:46.918Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  In one paragraph, who is Dario Amodei? Cite sources where possible.
---

# Research: In one paragraph, who is Dario Amodei? Cite sources where possible (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

In one paragraph, who is Dario Amodei? Cite sources where possible."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

In one paragraph, who is Dario Amodei? Cite sources where possible.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "In one paragraph, who is Dario Amodei? Cite sources where possible",
        "depth": 3,
        "capture": true
      },
      "rationale": "research signal detected (\"Cite sources\") — fetching external sources before synth so the persona answer is grounded, not memory-only",
      "label": "Researching \"In one paragraph, who is Dario Amodei? Cite sources where possible\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nIn one paragraph, who is Dario Amodei? Cite sources where possible.",
        "answer": "Dario Amodei is a computer‑science researcher and entrepreneur who co‑founded the AI safety‑focused company Anthropic and serves as its chief executive officer; before that he was vice‑president of research at OpenAI, where he helped develop the GPT‑2 and GPT‑3 language models, and earlier a senior research scientist at Google Brain [1].",
        "sources": "[1] research.deep (query=\"In one paragraph, who is Dario Amodei? Cite sources where po\")\nDario Amodei is a computer‑science researcher and entrepreneur who co‑founded the AI safety‑focused company Anthropic and serves as its chief executive officer; before that he was vice‑president of research at OpenAI, where he helped develop the GPT‑2 and GPT‑3 language models, and earlier a senior research scientist at Google Brain [1]."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "Dario Amodei is a computer‑science researcher and entrepreneur who co‑founded the AI safety‑focused company Anthropic and serves as its chief executive officer; before that he was vice‑president of research at OpenAI, where he helped develop the GPT‑2 and GPT‑3 language models, and earlier a senior research scientist at Google Brain [1].",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Research: In one paragraph, who is Dario Amodei? Cite sources where possible",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ]
  ]
}
```
