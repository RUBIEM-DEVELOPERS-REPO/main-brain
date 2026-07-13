---
type: template
title: Find context for "$12 requisition in the finance flow for a test mop, low priority" then draft it (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-07-13T08:22:17.865Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  create a $12 requisition in the finance flow for a test mop, low priority  Interpretation: intent=draft-other, target="$12 requisition in the finance flow for a test mop, low priority".  Deliverable shape: Direct, finished prose. No "Here's the draft" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.
---

# Find context for "$12 requisition in the finance flow for a test mop, low priority" then draft it (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

create a $12 requisition in the finance flow for a test mop, low priority

Interpretation: intent=draft-other, target="$12 requisition in the finance flow for a test mop, low priority".

Deliverable shape: Direct, finished prose. No "Here's the draft" preamble — output the content itself. Sign off with the persona's first name if it's correspondence."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

create a $12 requisition in the finance flow for a test mop, low priority

Interpretation: intent=draft-other, target="$12 requisition in the finance flow for a test mop, low priority".

Deliverable shape: Direct, finished prose. No "Here's the draft" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "vault.search",
      "args": {
        "query": "$12 requisition in the finance flow for a test mop, low priority"
      },
      "rationale": "ground the draft in any prior context in the user's second brain — avoid fabricating meaning for unfamiliar terms",
      "label": "Searching your second brain for \"$12 requisition in the finance flow for a test mop, low priority\""
    },
    {
      "tool": "fs.find_in",
      "args": {
        "folder": "all",
        "name": "$12 requisition in the finance flow for a test mop, low priority",
        "limit": 3
      },
      "rationale": "check the user's PC (Downloads + Desktop + Documents + Inbox) for prior versions of this doc — runs in parallel with the vault search",
      "label": "Looking in your Downloads, Desktop, Documents, and vault Inbox for \"$12 requisition in the finance flow for a test mop, low priority\""
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\ncreate a $12 requisition in the finance flow for a test mop, low priority\n\nInterpretation: intent=draft-other, target=\"$12 requisition in the finance flow for a test mop, low priority\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.",
        "answer": "Requisition for test mop: one unit at $12.00, total $12.00. Priority: Low. Requested by Neuro. Approval required per finance flow.\n\nNeuro",
        "sources": "",
        "grounded": false
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "Requisition for test mop: one unit at $12.00, total $12.00. Priority: Low. Requested by Neuro. Approval required per finance flow.\n\nNeuro",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\ncreate a $12 requisition in the finance flow for a test mop, low priority\n\nInterpretation: intent=draft-other, target=\"$12 requisition in the finance flow for a test mop, low priority\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.",
        "answer": "Requisition for test mop: one unit at $12.00, total $12.00. Priority: Low. Requested by Neuro. Approval required per finance flow.\n\nNeuro"
      },
      "rationale": "auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find context for \"$12 requisition in the finance flow for a test mop, low priority\" then draft it",
  "waves": [
    [
      0,
      1
    ],
    [
      2,
      3
    ],
    [
      4
    ]
  ]
}
```
