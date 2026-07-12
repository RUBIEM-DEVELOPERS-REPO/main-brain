---
type: template
title: Default research plan for: Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-07-12T19:51:08.191Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary.  Interpretation: intent=answer, scope=short.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Default research plan for: Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary.

Interpretation: intent=answer, scope=short.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary.

Interpretation: intent=answer, scope=short.

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
        "query": "Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"Query the Neon Cloud DB company data source and summarize the findings: what tab…\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nQuery the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary.\n\nInterpretation: intent=answer, scope=short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Neon Cloud DB — company data query\n\n**I cannot complete this task.** The evidence catalog contains no actual query results from your Neon Cloud DB data source — only a research note describing how to *connect* Amazon Q Business to Neon Postgres, not your organization's data.\n\nTo deliver the summary you've asked for, I need:\n\n1. **Direct database access or query results** — either a live connection to your Neon instance, or the output of a `SELECT` query against your schema\n2. **Table schema** — what tables hold requisitions, budgets, and related data\n3. **Actual records** — rows from those tables so I can count, total, and summarize\n\n**What I can't infer:**\n- Table names or structure\n- Requisition and budget record counts\n- Recent requisition subjects or dates\n- Total requested amounts\n\n**Next step:** If you have a database connector configured (db.query tool), I can run the query directly. Otherwise, please provide either:\n- A CSV or JSON export of your requisitions and budgets tables, or\n- The connection details so I can query Neon on your behalf\n\nOnce I have the actual data, I'll deliver the four-part summary (tables, counts, recent topics, total amount) in under 150 words.",
        "sources": "[1] research.deep (query=\"Query the Neon Cloud DB company data source and summarize th\")\n## Neon Cloud DB — company data source query\n\n**I can't answer this from the available evidence.** No actual query results from the Neon Cloud DB data source were supplied, so I have no data to summarize.\n\n**What's missing:**\n\n- **Tables:** No schema listing or table inventory was returned — I can't say what tables exist.\n- **Requisition & budget counts:** No row counts or records were retrieved.\n- **Recent requisitions:** No requisition records (titles, dates, descriptions) are present in the evidence.\n- **Total requested amount:** No financial figures were returned, and I won't invent one.\n\n**Why the web sources don't help:**\n\n- Source [1] is a general how-to guide for connecting Amazon Q Business to a Neon Postgres database via natural language — it describes setup steps (AWS account, IAM Identity Center, indexing), not your company's data [1].\n- Source [2] is a YouTube page about Neon's serverless Postgres product with no usable content.\n\nNeither source contains any records from your organization's actual database.\n\n**Suggested next steps:**\n\n1. Run the query directly against the Neon data source (e.g., via a configured database connector/tool",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Neon Cloud DB — company data query\n\n**I cannot complete this task.** The evidence catalog contains no actual query results from your Neon Cloud DB data source — only a research note describing how to *connect* Amazon Q Business to Neon Postgres, not your organization's data.\n\nTo deliver the summary you've asked for, I need:\n\n1. **Direct database access or query results** — either a live connection to your Neon instance, or the output of a `SELECT` query against your schema\n2. **Table schema** — what tables hold requisitions, budgets, and related data\n3. **Actual records** — rows from those tables so I can count, total, and summarize\n\n**What I can't infer:**\n- Table names or structure\n- Requisition and budget record counts\n- Recent requisition subjects or dates\n- Total requested amounts\n\n**Next step:** If you have a database connector configured (db.query tool), I can run the query directly. Otherwise, please provide either:\n- A CSV or JSON export of your requisitions and budgets tables, or\n- The connection details so I can query Neon on your behalf\n\nOnce I have the actual data, I'll deliver the four-part summary (tables, counts, recent topics, total amount) in under 150 words.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nQuery the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary.\n\nInterpretation: intent=answer, scope=short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Neon Cloud DB — company data query\n\n**I cannot complete this task.** The evidence catalog contains no actual query results from your Neon Cloud DB data source — only a research note describing how to *connect* Amazon Q Business to Neon Postgres, not your organization's data.\n\nTo deliver the summary you've asked for, I need:\n\n1. **Direct database access or query results** — either a live connection to your Neon instance, or the output of a `SELECT` query against your schema\n2. **Table schema** — what tables hold requisitions, budgets, and related data\n3. **Actual records** — rows from those tables so I can count, total, and summarize\n\n**What I can't infer:**\n- Table names or structure\n- Requisition and budget record counts\n- Recent requisition subjects or dates\n- Total requested amounts\n\n**Next step:** If you have a database connector configured (db.query tool), I can run the query directly. Otherwise, please provide either:\n- A CSV or JSON export of your requisitions and budgets tables, or\n- The connection details so I can query Neon on your behalf\n\nOnce I have the actual data, I'll deliver the four-part summary (tables, counts, recent topics, total amount) in under 150 words."
      },
      "rationale": "auto-injected: quality score=0.60 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Default research plan for: Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary",
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
