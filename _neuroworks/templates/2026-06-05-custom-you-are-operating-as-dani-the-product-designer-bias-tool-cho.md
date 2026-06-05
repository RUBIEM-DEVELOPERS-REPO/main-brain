---
type: template
title: Scan the ZMC website docs folder and summarise the collected markdown files. (custom-you-are-operating-as-dani-the-product-designer-bias-tool-cho)
slug: custom-you-are-operating-as-dani-the-product-designer-bias-tool-cho
created: 2026-06-05T13:09:25.060Z
templateId: custom-you-are-operating-as-dani-the-product-designer-bias-tool-cho
role: Custom
originTask: (You are operating as Dani, the Product Designer. Bias tool choices, output shape, and depth toward this role's conventions.)  Recent conversation (chronological):   User: "send an email to arthurmagaya29@gmail.com of all the tasks done yesterday"   You (assistant): "**Neuro** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."  Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): I want you to summarize everything in the ZMC website docs folder.
---

# Scan the ZMC website docs folder and summarise the collected markdown files. (custom-you-are-operating-as-dani-the-product-designer-bias-tool-cho)

Saved from chat: "(You are operating as Dani, the Product Designer. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "send an email to arthurmagaya29@gmail.com of all the tasks done yesterday"
  You (assistant): "**Neuro** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): I want you to summarize everything in the ZMC website docs folder."

**Origin task:** (You are operating as Dani, the Product Designer. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "send an email to arthurmagaya29@gmail.com of all the tasks done yesterday"
  You (assistant): "**Neuro** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): I want you to summarize everything in the ZMC website docs folder.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "vault.scan_docs",
      "args": {
        "folder": "ZMC/website/docs",
        "max": null,
        "extensions": [
          "md"
        ]
      },
      "rationale": "Collect all markdown docs in the ZMC website docs folder.",
      "label": "Scanning docs in ZMC/website/docs"
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Summarise the following documents:\n\n$step_0.content",
        "system": "Produce a concise, structured summary of the ZMC website documentation, highlighting key sections, features, and any important details."
      },
      "rationale": "Generate a summary from the collected content.",
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Dani, the Product Designer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"send an email to arthurmagaya29@gmail.com of all the tasks done yesterday\"\n  You (assistant): \"**Neuro** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): I want you to summarize everything in the ZMC website docs folder.",
        "answer": "I searched the `ZMC/website/docs` folder for Markdown files, but no documents were found. To create a summary, I would need the content of those files. If you can provide the Markdown files or paste the relevant sections, I can produce a concise, structured summary highlighting key sections, features, and important details.",
        "sources": "[1] vault.scan_docs\n{\"folder\":\"ZMC/website/docs\",\"scanned\":0,\"docs\":[],\"message\":\"No matching docs in \\\"ZMC/website/docs\\\". Allowed extensions: md\"}\n\n[2] ollama.generate\nI’m ready to help! Please provide the documents (or the text you’d like summarized) and I’ll create a concise, structured summary highlighting key sections, features, and important details."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "I searched the `ZMC/website/docs` folder for Markdown files, but no documents were found. To create a summary, I would need the content of those files. If you can provide the Markdown files or paste the relevant sections, I can produce a concise, structured summary highlighting key sections, features, and important details.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Scan the ZMC website docs folder and summarise the collected markdown files.",
  "waves": [
    [
      0
    ],
    [
      1
    ],
    [
      2,
      3
    ]
  ]
}
```
