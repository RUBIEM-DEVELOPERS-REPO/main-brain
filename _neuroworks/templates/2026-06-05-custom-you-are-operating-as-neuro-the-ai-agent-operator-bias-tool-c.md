---
type: template
title: Find "Chat" in downloads, read it, summarise (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-05T19:27:28.032Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Chat  Send an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in my downloads  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Find "Chat" in downloads, read it, summarise (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Chat

Send an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in
my downloads

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Chat

Send an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in
my downloads

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
        "name": "Chat"
      },
      "rationale": "default fallback: task mentions downloads — search the user's PC instead of the web",
      "label": "Looking in your downloads for \"Chat\""
    },
    {
      "tool": "fs.read_external",
      "args": {
        "path": "$step_0.matches.0.path"
      },
      "rationale": "task asks for content — read the top match",
      "label": "Reading Chat"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nChat\n\nSend an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in\nmy downloads\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Partial result\n\nThe synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **Chat\n\nSend an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in\nmy downloads\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's req**\n\n### What worked\n\n**Step 1 — Looking in your downloads for \"Chat\"**\n```\n{\"folder\":\"downloads\",\"resolvedRoots\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\"],\"resolvedRoot\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"query\":\"Chat\",\"count\":9,\"matches\":[{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\",\"name\":\"~$bsite Content for The Chat Bot.docx\",\"ext\":\".docx\",\"size\":162,\"modified\":\"2026-06-05T09:05:11.035Z\",\"folder\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"type\":\"file\"},{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\Website Content for The Chat B…\n```\n\n**Step 2 — Reading Chat**\n```\n{\"content\":\"(DOCX extraction failed: Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html)\",\"kind\":\"docx\",\"size\":162,\"ext\":\".docx\",\"name\":\"~$bsite Content for The Chat Bot.docx\",\"resolvedFrom\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\",\"resolvedTo\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\"}\n```\n\n---\n_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._",
        "sources": "[1] fs.find_in (name=\"Chat\")\nC:\\Users\\Arthur Magaya\\Downloads\\~$bsite Content for The Chat Bot.docx: \nC:\\Users\\Arthur Magaya\\Downloads\\Website Content for The Chat Bot.docx: \nC:\\Users\\Arthur Magaya\\Downloads\\ZMC WEBSITE DOCS\\Website Content for The Chat Bot.docx: \nC:\\Users\\Arthur Magaya\\Downloads\\ChatGPT Image May 28, 2026, 08_53_13 AM.png: \nC:\\Users\\Arthur Magaya\\Downloads\\ChatGPT Image May 15, 2026, 03_47_47 PM.png: \nC:\\Users\\Arthur Magaya\\Downloads\\ChatGPT Image May 15, 2026, 09_26_41 AM.png: \n\n[2] fs.read_external (path=\"$step_0.matches.0.path\")\n(DOCX extraction failed: Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html)"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Partial result\n\nThe synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **Chat\n\nSend an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in\nmy downloads\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's req**\n\n### What worked\n\n**Step 1 — Looking in your downloads for \"Chat\"**\n```\n{\"folder\":\"downloads\",\"resolvedRoots\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\"],\"resolvedRoot\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"query\":\"Chat\",\"count\":9,\"matches\":[{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\",\"name\":\"~$bsite Content for The Chat Bot.docx\",\"ext\":\".docx\",\"size\":162,\"modified\":\"2026-06-05T09:05:11.035Z\",\"folder\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"type\":\"file\"},{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\Website Content for The Chat B…\n```\n\n**Step 2 — Reading Chat**\n```\n{\"content\":\"(DOCX extraction failed: Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html)\",\"kind\":\"docx\",\"size\":162,\"ext\":\".docx\",\"name\":\"~$bsite Content for The Chat Bot.docx\",\"resolvedFrom\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\",\"resolvedTo\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\"}\n```\n\n---\n_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nChat\n\nSend an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in\nmy downloads\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Partial result\n\nThe synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **Chat\n\nSend an email to arthurmagaya29@gmail.com of a summary of the ZMC letter in\nmy downloads\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's req**\n\n### What worked\n\n**Step 1 — Looking in your downloads for \"Chat\"**\n```\n{\"folder\":\"downloads\",\"resolvedRoots\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\"],\"resolvedRoot\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"query\":\"Chat\",\"count\":9,\"matches\":[{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\",\"name\":\"~$bsite Content for The Chat Bot.docx\",\"ext\":\".docx\",\"size\":162,\"modified\":\"2026-06-05T09:05:11.035Z\",\"folder\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"type\":\"file\"},{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\Website Content for The Chat B…\n```\n\n**Step 2 — Reading Chat**\n```\n{\"content\":\"(DOCX extraction failed: Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html)\",\"kind\":\"docx\",\"size\":162,\"ext\":\".docx\",\"name\":\"~$bsite Content for The Chat Bot.docx\",\"resolvedFrom\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\",\"resolvedTo\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\\\\~$bsite Content for The Chat Bot.docx\"}\n```\n\n---\n_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._"
      },
      "rationale": "auto-injected: quality score=0.40 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find \"Chat\" in downloads, read it, summarise",
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
    ],
    [
      4
    ]
  ]
}
```
