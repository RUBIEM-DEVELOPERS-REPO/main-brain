---
type: template
title: Default research plan for: Prep me for a discovery call with a fintech CFO (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-10T18:28:08.659Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Prep me for a discovery call with a fintech CFO.
---

# Default research plan for: Prep me for a discovery call with a fintech CFO (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Prep me for a discovery call with a fintech CFO."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Prep me for a discovery call with a fintech CFO.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "Prep me for a discovery call with a fintech CFO",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"Prep me for a discovery call with a fintech CFO\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nPrep me for a discovery call with a fintech CFO.",
        "answer": "I’m sorry—I don’t have any relevant information in the vault about preparing for a discovery call with a fintech CFO, and the web sources you provided are about HIV pre‑exposure prophylaxis (PrEP), which is unrelated to your request. If you can share any internal notes or context (e.g., the CFO’s priorities, your product’s value proposition, or specific fintech challenges you want to explore), I can help you craft a focused call agenda and question guide.",
        "sources": "[1] research.deep (query=\"Prep me for a discovery call with a fintech CFO\")\nI’m sorry—I don’t have any relevant information in the vault about preparing for a discovery call with a fintech CFO, and the web sources you provided are about HIV pre‑exposure prophylaxis (PrEP), which is unrelated to your request. If you can share any internal notes or context (e.g., the CFO’s priorities, your product’s value proposition, or specific fintech challenges you want to explore), I can help you craft a focused call agenda and question guide."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "I’m sorry—I don’t have any relevant information in the vault about preparing for a discovery call with a fintech CFO, and the web sources you provided are about HIV pre‑exposure prophylaxis (PrEP), which is unrelated to your request. If you can share any internal notes or context (e.g., the CFO’s priorities, your product’s value proposition, or specific fintech challenges you want to explore), I can help you craft a focused call agenda and question guide.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nPrep me for a discovery call with a fintech CFO.",
        "answer": "I’m sorry—I don’t have any relevant information in the vault about preparing for a discovery call with a fintech CFO, and the web sources you provided are about HIV pre‑exposure prophylaxis (PrEP), which is unrelated to your request. If you can share any internal notes or context (e.g., the CFO’s priorities, your product’s value proposition, or specific fintech challenges you want to explore), I can help you craft a focused call agenda and question guide."
      },
      "rationale": "auto-injected: quality score=0.60 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Default research plan for: Prep me for a discovery call with a fintech CFO",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ],
    [
      3
    ]
  ]
}
```
