---
type: template
title: Research: Extract action items (owner + by-when) from this standup: 'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-06T12:36:54.322Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Extract action items (owner + by-when) from this standup: 'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm. Tom, you're writing the changelog — needs to be done by Thursday. FYI Nadia is out sick so the dashboard work slips to next sprint.'  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Research: Extract action items (owner + by-when) from this standup:
'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Extract action items (owner + by-when) from this standup:
'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm. Tom, you're writing the changelog — needs to be done by Thursday. FYI Nadia is out sick so the dashboard work slips to next sprint.'

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Extract action items (owner + by-when) from this standup:
'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm. Tom, you're writing the changelog — needs to be done by Thursday. FYI Nadia is out sick so the dashboard work slips to next sprint.'

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
      "tool": "research.deep",
      "args": {
        "query": "Extract action items (owner + by-when) from this standup:\n'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm",
        "depth": 3,
        "capture": true
      },
      "rationale": "research signal detected (\"changelog\") — fetching external sources before synth so the persona answer is grounded, not memory-only",
      "label": "Researching \"Extract action items (owner + by-when) from this standup:\n'Lead: We ship the bil…\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nExtract action items (owner + by-when) from this standup:\n'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm. Tom, you're writing the changelog — needs to be done by Thursday. FYI Nadia is out sick so the dashboard work slips to next sprint.'\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Action items — Standup · 2026-06-06\n\n| # | Owner | Action | Deadline | Priority |\n|---|-------|--------|----------|----------|\n| 1 | Lead | Ship the billing fix | 2026-06-06 (today) | P0 |\n| 2 | Aisha | Run the regression suite | 2026-06-06 14:00 | P1 |\n| 3 | Tom | Write the changelog | 2026-06-09 (Thursday) | P2 |\n\n### Notes\n- Nadia’s dashboard work has been deferred to the next sprint. No owner assigned yet.  \n- No additional owners or deadlines were mentioned in the transcript.",
        "sources": "[1] research.deep (query=\"Extract action items (owner + by-when) from this standup:\n'L\")\n**Action Items**\n\n| Owner | Action | Due |\n|-------|--------|-----|\n| **Lead** | Ship the billing fix | **Today** (by end of day) |\n| **Aisha** | Run the regression suite | **Before 2 PM** today |"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Action items — Standup · 2026-06-06\n\n| # | Owner | Action | Deadline | Priority |\n|---|-------|--------|----------|----------|\n| 1 | Lead | Ship the billing fix | 2026-06-06 (today) | P0 |\n| 2 | Aisha | Run the regression suite | 2026-06-06 14:00 | P1 |\n| 3 | Tom | Write the changelog | 2026-06-09 (Thursday) | P2 |\n\n### Notes\n- Nadia’s dashboard work has been deferred to the next sprint. No owner assigned yet.  \n- No additional owners or deadlines were mentioned in the transcript.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Research: Extract action items (owner + by-when) from this standup:\n'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm",
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
