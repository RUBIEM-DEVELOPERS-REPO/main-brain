---
type: template
title: Find context for "30-second voiceover for our new mobile app launch — energetic, friendly, ends on" then draft it (custom-you-are-operating-as-vera-the-voice-producer-bias-tool-choic)
slug: custom-you-are-operating-as-vera-the-voice-producer-bias-tool-choic
created: 2026-06-06T12:42:15.159Z
templateId: custom-you-are-operating-as-vera-the-voice-producer-bias-tool-choic
role: Custom
originTask: (You are operating as Vera, the Voice Producer. Bias tool choices, output shape, and depth toward this role's conventions.)  Create a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.  Interpretation: intent=draft-other, target="'download today.' give me the spoken script and produce the audio.", tone=friendly.  Deliverable shape: Direct, finished prose. No "Here's the draft" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.  Tone: friendly.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Find context for "30-second voiceover for our new mobile app launch — energetic, friendly, ends on" then draft it (custom-you-are-operating-as-vera-the-voice-producer-bias-tool-choic)

Saved from chat: "(You are operating as Vera, the Voice Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Create a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.

Interpretation: intent=draft-other, target="'download today.' give me the spoken script and produce the audio.", tone=friendly.

Deliverable shape: Direct, finished prose. No "Here's the draft" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.

Tone: friendly.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Vera, the Voice Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Create a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.

Interpretation: intent=draft-other, target="'download today.' give me the spoken script and produce the audio.", tone=friendly.

Deliverable shape: Direct, finished prose. No "Here's the draft" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.

Tone: friendly.

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
        "query": "30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio."
      },
      "rationale": "ground the draft in any prior context in the user's second brain — avoid fabricating meaning for unfamiliar terms",
      "label": "Searching your second brain for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\""
    },
    {
      "tool": "fs.find_in",
      "args": {
        "folder": "all",
        "name": "30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.",
        "limit": 3
      },
      "rationale": "check the user's PC (Downloads + Desktop + Documents + Inbox) for prior versions of this doc — runs in parallel with the vault search",
      "label": "Looking in your Downloads, Desktop, Documents, and vault Inbox for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\""
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Vera, the Voice Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nCreate a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\n\nInterpretation: intent=draft-other, target=\"'download today.' give me the spoken script and produce the audio.\", tone=friendly.\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\nTone: friendly.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Partial result\n\nThe synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **Create a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.**\n\n### What worked\n\n**Step 1 — Searching your second brain for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\"**\n```\n{\"matches\":[]}\n```\n\n**Step 2 — Looking in your Downloads, Desktop, Documents, and vault Inbox for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\"**\n```\n{\"folder\":\"all\",\"resolvedRoots\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"C:\\\\Users\\\\Arthur Magaya\\\\Desktop\",\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\",\"D:\\\\Main brain\\\\0-Inbox\"],\"resolvedRoot\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"query\":\"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\",\"count\":0,\"matches\":[]}\n```\n\n---\n_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._",
        "sources": ""
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Partial result\n\nThe synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **Create a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.**\n\n### What worked\n\n**Step 1 — Searching your second brain for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\"**\n```\n{\"matches\":[]}\n```\n\n**Step 2 — Looking in your Downloads, Desktop, Documents, and vault Inbox for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\"**\n```\n{\"folder\":\"all\",\"resolvedRoots\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"C:\\\\Users\\\\Arthur Magaya\\\\Desktop\",\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\",\"D:\\\\Main brain\\\\0-Inbox\"],\"resolvedRoot\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"query\":\"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\",\"count\":0,\"matches\":[]}\n```\n\n---\n_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Vera, the Voice Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nCreate a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\n\nInterpretation: intent=draft-other, target=\"'download today.' give me the spoken script and produce the audio.\", tone=friendly.\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\nTone: friendly.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Partial result\n\nThe synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **Create a 30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.**\n\n### What worked\n\n**Step 1 — Searching your second brain for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\"**\n```\n{\"matches\":[]}\n```\n\n**Step 2 — Looking in your Downloads, Desktop, Documents, and vault Inbox for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\"**\n```\n{\"folder\":\"all\",\"resolvedRoots\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"C:\\\\Users\\\\Arthur Magaya\\\\Desktop\",\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\",\"D:\\\\Main brain\\\\0-Inbox\"],\"resolvedRoot\":\"C:\\\\Users\\\\Arthur Magaya\\\\Downloads\",\"query\":\"30-second voiceover for our new mobile app launch — energetic, friendly, ends on 'Download today.' Give me the spoken script and produce the audio.\",\"count\":0,\"matches\":[]}\n```\n\n---\n_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._"
      },
      "rationale": "auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find context for \"30-second voiceover for our new mobile app launch — energetic, friendly, ends on\" then draft it",
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
