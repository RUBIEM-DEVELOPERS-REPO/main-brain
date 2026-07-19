---
type: template
title: Query Neon Cloud DB and summarize the findings (custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o)
slug: custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o
created: 2026-07-19T03:48:55.454Z
templateId: custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o
role: Custom
originTask: (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)  Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan  Interpretation: intent=summarize, target="our organizational structure and how it aligns with the Aiia 2026 strategic plan".  Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Query Neon Cloud DB and summarize the findings (custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o)

Saved from chat: "(You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)

Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan

Interpretation: intent=summarize, target="our organizational structure and how it aligns with the Aiia 2026 strategic plan".

Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)

Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan

Interpretation: intent=summarize, target="our organizational structure and how it aligns with the Aiia 2026 strategic plan".

Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.

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
      "tool": "db.query",
      "args": {
        "source": "Neon Cloud DB",
        "question": "Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan"
      },
      "rationale": "task asks about a registered company data source — schema-aware question-mode query instead of web research",
      "label": "Querying Neon Cloud DB"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSummarize our organizational structure and how it aligns with the Aiia 2026 strategic plan\n\nInterpretation: intent=summarize, target=\"our organizational structure and how it aligns with the Aiia 2026 strategic plan\".\n\nDeliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading \"TL;DR\" — say what it actually IS. No preamble.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Bottom line:** The current workforce is organized into three role tiers—limited (6 members), admin (2 members), and superadmin (1 member)—with no explicit linkage to the Aiia 2026 strategic plan found in the system records.\n\n## Key points\n- Limited role includes Antony Magaya, Godswill Ndlovu, Marcia Magaya, Takudzwa Chakanyuka, Anesu Gore, and Patience Mupikeni (6 members) [1].\n- Admin role consists of Dennis and NeuroWorks (2 members); superadmin role is held solely by Arthur Magaya [1].\n- Queries for budgets, documents, and requisitions referencing “2026” or “strategic” returned zero results, indicating no documented alignment of resources to the Aiia 2026 strategic plan [1].\n\n## Sources\n- [1] db.query results showing organizational structure and lack of 2026/strategic matches.",
        "sources": "[1] db.query\n{\"source\":\"Neon Cloud DB\",\"kind\":\"postgres\",\"question\":\"Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan\",\"queries\":[{\"label\":\"Organizational structure by user roles\",\"sql\":\"SELECT role, COUNT(*) AS member_count, STRING_AGG(name, ', ') AS members FROM public.users GROUP BY role ORDER BY member_count DESC;\",\"columns\":[\"role\",\"member_count\",\"members\"],\"rows\":[{\"role\":\"limited\",\"member_count\":\"6\",\"members\":\"Antony Magaya, Godswill Ndlovu, Marcia Magaya, Takudzwa Chakanyuka, Anesu Gore, Patience Mupikeni\"},{\"role\":\"admin\",\"member_count\":\"2\",\"members\":\"Dennis, NeuroWorks \"},{\"role\":\"superadmin\",\"member_count\":\"1\",\"members\":\"Arthur Magaya\"}],\"rowCount\":3},{\"label\":\"Budgets aligned with 2026 or strategic plans\",\"sql\":\"SELECT id, name, category, amount, period, start_date, end_date, description FROM public.budgets WHERE name ILIKE '%2026%' OR description ILIKE '%2026%' OR name ILIKE '%strategic%' OR description ILIKE '%strategic%' ORDER BY amount DESC;\",\"columns\":[\"id\",\"name\",\"category\",\"amount\",\"period\",\"start_date\",\"end_date\",\"description\"],\"rows\":[],\"rowCount\":0},{\"label\":\"Documents referencing 2026 or strategic plans\",\"sql\":\"SELECT id, file_name, original_name, category, entity_type, status, created_at FROM public.documents WHERE file_name ILIKE '%2026%' OR original_name ILIKE '%2026%' OR file_name ILIKE '%strategic%' OR original_name ILIKE '%strategic%';\",\"columns\":[\"id\",\"file_name\",\"original_name\",\"category\",\"entity_type\",\"status\",\"crea",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**Bottom line:** The current workforce is organized into three role tiers—limited (6 members), admin (2 members), and superadmin (1 member)—with no explicit linkage to the Aiia 2026 strategic plan found in the system records.\n\n## Key points\n- Limited role includes Antony Magaya, Godswill Ndlovu, Marcia Magaya, Takudzwa Chakanyuka, Anesu Gore, and Patience Mupikeni (6 members) [1].\n- Admin role consists of Dennis and NeuroWorks (2 members); superadmin role is held solely by Arthur Magaya [1].\n- Queries for budgets, documents, and requisitions referencing “2026” or “strategic” returned zero results, indicating no documented alignment of resources to the Aiia 2026 strategic plan [1].\n\n## Sources\n- [1] db.query results showing organizational structure and lack of 2026/strategic matches.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "governance.check",
      "args": {
        "content": "**Bottom line:** The current workforce is organized into three role tiers—limited (6 members), admin (2 members), and superadmin (1 member)—with no explicit linkage to the Aiia 2026 strategic plan found in the system records.\n\n## Key points\n- Limited role includes Antony Magaya, Godswill Ndlovu, Marcia Magaya, Takudzwa Chakanyuka, Anesu Gore, and Patience Mupikeni (6 members) [1].\n- Admin role consists of Dennis and NeuroWorks (2 members); superadmin role is held solely by Arthur Magaya [1].\n- Queries for budgets, documents, and requisitions referencing “2026” or “strategic” returned zero results, indicating no documented alignment of resources to the Aiia 2026 strategic plan [1].\n\n## Sources\n- [1] db.query results showing organizational structure and lack of 2026/strategic matches."
      },
      "rationale": "auto-injected: check answer against accepted hard governance constraints",
      "label": "Checking against governance policies"
    }
  ],
  "summary": "Query Neon Cloud DB and summarize the findings",
  "waves": [
    [
      0
    ],
    [
      1,
      2,
      3
    ]
  ]
}
```
