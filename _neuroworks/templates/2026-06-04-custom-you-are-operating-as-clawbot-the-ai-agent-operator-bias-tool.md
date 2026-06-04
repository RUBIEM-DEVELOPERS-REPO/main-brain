---
type: template
title: Default research plan for: Hello, I want you to summarize what is in the ZBC letter (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-04T15:21:31.750Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Hello, I want you to summarize what is in the ZBC letter.
---

# Default research plan for: Hello, I want you to summarize what is in the ZBC letter (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Hello, I want you to summarize what is in the ZBC letter."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Hello, I want you to summarize what is in the ZBC letter.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "Hello, I want you to summarize what is in the ZBC letter",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"Hello, I want you to summarize what is in the ZBC letter\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nHello, I want you to summarize what is in the ZBC letter.",
        "answer": "I’m sorry, but the vault notes you provided only contain the title of the request (“Hello, I want you to summarize what is in the ZBC letter”) and do not include the actual text of the ZBC letter itself. Without the letter’s contents, I can’t produce a summary. If you can share the letter or its key points, I’ll be happy to synthesize a concise summary for you.",
        "sources": "[1] research.deep (query=\"Hello, I want you to summarize what is in the ZBC letter\")\nI’m sorry, but the vault notes you provided only contain the title of the request (“Hello, I want you to summarize what is in the ZBC letter”) and do not include the actual text of the ZBC letter itself. Without the letter’s contents, I can’t produce a summary. If you can share the letter or its key points, I’ll be happy to synthesize a concise summary for you."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "I’m sorry, but the vault notes you provided only contain the title of the request (“Hello, I want you to summarize what is in the ZBC letter”) and do not include the actual text of the ZBC letter itself. Without the letter’s contents, I can’t produce a summary. If you can share the letter or its key points, I’ll be happy to synthesize a concise summary for you.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Default research plan for: Hello, I want you to summarize what is in the ZBC letter",
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
