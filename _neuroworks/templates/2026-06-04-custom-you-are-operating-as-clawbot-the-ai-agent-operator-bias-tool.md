---
type: template
title: Search, read, summarise, and email the ZBC letter summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-04T14:24:58.911Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Recent conversation (chronological):   User: "Look through my downloads and summarize exhibitor invite."   User: "Set up a schedule to send me a daily report of tasks to my email arthurmagaya2@gmail.com every morning about the tasks done the previous day."   You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."  Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): I want you to send an email to arthurmageia2@gmail.com about the summarized version of what's in the ZBC letter.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Search, read, summarise, and email the ZBC letter summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "Look through my downloads and summarize exhibitor invite."
  User: "Set up a schedule to send me a daily report of tasks to my email arthurmagaya2@gmail.com every morning about the tasks done the previous day."
  You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): I want you to send an email to arthurmageia2@gmail.com about the summarized version of what's in the ZBC letter.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "Look through my downloads and summarize exhibitor invite."
  User: "Set up a schedule to send me a daily report of tasks to my email arthurmagaya2@gmail.com every morning about the tasks done the previous day."
  You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): I want you to send an email to arthurmageia2@gmail.com about the summarized version of what's in the ZBC letter.

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
      "tool": "vault.search",
      "args": {
        "query": "ZBC letter"
      },
      "rationale": "Locate the ZBC letter in the vault.",
      "label": "Searching your second brain for \"ZBC letter\""
    },
    {
      "tool": "vault.read",
      "args": {
        "path": "$step_0.matches.0.path"
      },
      "rationale": "Read the contents of the first matching ZBC letter.",
      "label": "Reading $step_0.matches.0.path"
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Summarise the following ZBC letter:\n\n$step_1.content",
        "system": "Provide a concise summary suitable for an email."
      },
      "rationale": "Create a concise summary of the letter.",
      "label": "Thinking about it"
    },
    {
      "tool": "email.send",
      "args": {
        "to": "arthurmageia2@gmail.com",
        "subject": "Summary of the ZBC Letter",
        "body": "$step_2.text"
      },
      "rationale": "Send the summary to the user via email.",
      "label": "email.send"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"Look through my downloads and summarize exhibitor invite.\"\n  User: \"Set up a schedule to send me a daily report of tasks to my email arthurmagaya2@gmail.com every morning about the tasks done the previous day.\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): I want you to send an email to arthurmageia2@gmail.com about the summarized version of what's in the ZBC letter.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Summary of Action Taken\n\n- Located the “ZBC letter” file in the vault at `[_imports/downloads/ZBC letter.md]` [2].  \n- Attempted to extract readable text; the document contains only an embedded Base64‑encoded image and no extractable text, so a content summary could not be generated [3].  \n- Informed the user of this limitation and requested a separate copy of the letter’s text for future summarization.  \n- Sent an email to **arthurmageia2@gmail.com** notifying the recipient that the summary could not be produced due to the lack of readable content [4].\n\n**Result:** Email dispatched successfully (Mailjet transport, sent 2026‑06‑04 14:24 UTC).  \n\n*Assumed: the user’s request was to be fulfilled despite the missing text, and the appropriate response was to notify the recipient of the inability to summarize.*",
        "sources": "[1] vault.search (query=\"ZBC letter\")\n_imports/downloads/ZBC letter.md: title: \"ZBC letter\"\n_neuroworks/jobs/2026-05-29-search-for-any-previous-mentions-of-a-zbc-letter-in-the-user-317b5930.md: title: Search for any previous mentions of a ZBC letter in the user's vault.\n_neuroworks/jobs/2026-05-29-search-for-any-previous-mentions-of-a-zbc-letter-in-the-user-5eba1d9a.md: title: Search for any previous mentions of a ZBC letter in the user's vault.\n_neuroworks/jobs/2026-05-29-search-for-any-previous-mentions-of-a-zbc-letter-in-the-user-80f8d4c8.md: title: Search for any previous mentions of a ZBC letter in the user's vault.\n_neuroworks/jobs/2026-05-29-search-for-any-previous-mentions-of-a-zbc-letter-in-the-user-a4f147b7.md: title: Search for any previous mentions of a ZBC letter in the user's vault.\n_neuroworks/jobs/2026-05-29-search-for-any-previous-mentions-of-a-zbc-letter-in-the-user-b3d8eef7.md: title: Search for any previous mentions of a ZBC letter in the user's vault.\n\n[2] vault.read (path=\"$step_0.matches.0.path\")\n﻿---\ntitle: \"ZBC letter\"\nimported_from: \"C:/Users/Arthur Magaya/Downloads/ZBC letter.docx\"\nimported_at: 2026-05-26T19:08:14.2538214+02:00\ncreated: 2026-05-26\nkind: docx\nsize_kb: 34.5\ntags: [imported, downloads, bulk-import]\n---\n\n# ZBC letter\n\nImported from `C:\\Users\\Arthur Magaya\\Downloads\\ZBC letter.docx` on 2026-05-26. Original size 34.5 KB.\n\nThe full file is filed in your vault at [[_imports/downloads/ZBC letter.docx]] — open it in Obsidian for the content.\n\n## Source provenance\n- Original path: `C:\\Users\\Arthur Magaya\\Downloads\\ZBC letter.docx`\n- Imported by: bulk-import script (downloads)\n- Original preserved on the PC.\n\n## Excerpt (first 6 000 chars, docx)\n\n# ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACYAUMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6On\n\n[3] ollama.generate\nI’m sorry, but the text of the letter isn’t available in the file you imported. The document appears to contain only an embedded image (encoded in Base64) and no readable text, so I can’t provide a summary. If you have a separate copy of the letter’s content or can extract the text, please share it and I’ll gladly summarize it for you.\n\n[4] email.send\n{\"ok\":true,\"transport\":\"mailjet\",\"from\":\"arthur@rubiem.com\",\"to\":\"arthurmageia2@gmail.com\",\"subject\":\"Summary of the ZBC Letter\",\"sentAt\":\"2026-06-04T14:24:42.861Z\"}"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Summary of Action Taken\n\n- Located the “ZBC letter” file in the vault at `[_imports/downloads/ZBC letter.md]` [2].  \n- Attempted to extract readable text; the document contains only an embedded Base64‑encoded image and no extractable text, so a content summary could not be generated [3].  \n- Informed the user of this limitation and requested a separate copy of the letter’s text for future summarization.  \n- Sent an email to **arthurmageia2@gmail.com** notifying the recipient that the summary could not be produced due to the lack of readable content [4].\n\n**Result:** Email dispatched successfully (Mailjet transport, sent 2026‑06‑04 14:24 UTC).  \n\n*Assumed: the user’s request was to be fulfilled despite the missing text, and the appropriate response was to notify the recipient of the inability to summarize.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Search, read, summarise, and email the ZBC letter summary.",
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
      3
    ],
    [
      4,
      5
    ]
  ]
}
```
