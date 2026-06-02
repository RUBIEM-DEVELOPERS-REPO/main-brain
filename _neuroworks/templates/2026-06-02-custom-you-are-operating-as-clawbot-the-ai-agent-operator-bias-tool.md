---
type: template
title: Find the invoice in downloads, read it, and generate a concise summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-02T13:03:07.078Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Find the invoice in downloads, read it, and generate a concise summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "fs.find_in",
      "args": {
        "folder": "downloads",
        "name": "Hon. P. Mavunga-ZIMRA-Invoice (1)",
        "limit": 1,
        "depth": 1
      },
      "label": "Looking in your downloads for \"Hon. P. Mavunga-ZIMRA-Invoice (1)\""
    },
    {
      "tool": "fs.read_external",
      "args": {
        "path": "$step_0.matches.0.path"
      },
      "label": "Reading $step_0.matches.0.path"
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Summarise the invoice document:\n\n$step_1.content",
        "system": "Provide a concise summary of the invoice, including key details such as invoice number, date, vendor, amounts, and any notable terms."
      },
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nfind Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Invoice Summary – Hon. P. Mavunga‑ZIMRA‑Invoice (1)**  \n\nI located the file *Hon. P. Mavunga‑ZIMRA‑Invoice (1).pdf* in the Downloads folder (C:\\Users\\Arthur Magaya\\Downloads) and opened it. The PDF contains a single page but no extractable text was returned by the file reader; the document appears to be image‑only or otherwise non‑textual. Consequently, I cannot provide a content summary or extract invoice details such as vendor, amounts, or dates.  \n\nIf you can provide the invoice text (e.g., by OCR or manual transcription), I can generate a concise summary for you.",
        "sources": "[1] fs.find_in (name=\"Hon. P. Mavunga-ZIMRA-Invoice (1)\")\nC:\\Users\\Arthur Magaya\\Downloads\\Hon. P. Mavunga-ZIMRA-Invoice (1).pdf: \n\n[3] ollama.generate\nI’m ready to help! Could you please paste the invoice text or key details (invoice number, date, vendor, amounts, and any special terms) so I can create a concise summary for you?"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**Invoice Summary – Hon. P. Mavunga‑ZIMRA‑Invoice (1)**  \n\nI located the file *Hon. P. Mavunga‑ZIMRA‑Invoice (1).pdf* in the Downloads folder (C:\\Users\\Arthur Magaya\\Downloads) and opened it. The PDF contains a single page but no extractable text was returned by the file reader; the document appears to be image‑only or otherwise non‑textual. Consequently, I cannot provide a content summary or extract invoice details such as vendor, amounts, or dates.  \n\nIf you can provide the invoice text (e.g., by OCR or manual transcription), I can generate a concise summary for you.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nfind Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Invoice Summary – Hon. P. Mavunga‑ZIMRA‑Invoice (1)**  \n\nI located the file *Hon. P. Mavunga‑ZIMRA‑Invoice (1).pdf* in the Downloads folder (C:\\Users\\Arthur Magaya\\Downloads) and opened it. The PDF contains a single page but no extractable text was returned by the file reader; the document appears to be image‑only or otherwise non‑textual. Consequently, I cannot provide a content summary or extract invoice details such as vendor, amounts, or dates.  \n\nIf you can provide the invoice text (e.g., by OCR or manual transcription), I can generate a concise summary for you."
      },
      "rationale": "auto-injected: quality score=0.71 (pass=true) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find the invoice in downloads, read it, and generate a concise summary.",
  "waves": [
    [
      0
    ],
    [
      1
    ],
    [
      2
    ],
    [
      3,
      4
    ],
    [
      5
    ]
  ]
}
```
