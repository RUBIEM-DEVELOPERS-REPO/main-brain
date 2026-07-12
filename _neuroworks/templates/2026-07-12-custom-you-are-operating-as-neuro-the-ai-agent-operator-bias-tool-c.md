---
type: template
title: Default research plan for: Query the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-07-12T21:06:24.019Z
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
        "answer": "## Neon Cloud DB — Company Data Summary\n\nI found two vault notes with matching titles ([vault:0-Inbox/202607121950-research-query-the-neon-cloud-db-company-data-source-and-summarize-th.md] and [vault:0-Inbox/202607121951-curated-query-the-neon-cloud-db-company-data-source-and-summarize-th.md]), but the evidence catalog supplied only their titles, not their contents. To deliver the summary you asked for — table names, requisition count, budget count, recent requisition topics, and total requested amount — I need to read those notes.\n\n**What I need:** permission to open those two inbox files. Once I do, I can extract the actual query results and produce the short summary you're after.\n\nAlternatively, if you have the raw query output (SQL results or a CSV export), paste it here and I'll synthesize it into the four-point summary immediately.",
        "sources": "[1] research.deep (query=\"Query the Neon Cloud DB company data source and summarize th\")\n## Neon Cloud DB — findings summary\n\n**Short answer: I don't have the actual query results, so I can't report table names, counts, recent requisitions, or a total requested amount.** This synthesis step works only from supplied evidence, and none of it contains real data from your Neon database.\n\n### What the evidence actually contains\n\n**Vault notes (3):** Two inbox notes exist with matching titles — a \"Research\" note and a \"Curated\" note about this exact query [vault:0-Inbox/202607121950-research-query-the-neon-cloud-db...md] [vault:0-Inbox/202607121951-curated-query-the-neon-cloud-db...md] — plus a related template [vault:_neuroworks/templates/2026-07-12-custom-you-are-operating-as-neuro...md]. However, only their titles were supplied here, not their contents. If a previous run already pulled the requisition/budget data, it may be inside those two inbox notes.\n\n**Web sources (3):** None are usable for this question:\n- [1] is a general Neon guide about querying Postgres via Amazon Q",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Neon Cloud DB — Company Data Summary\n\nI found two vault notes with matching titles ([vault:0-Inbox/202607121950-research-query-the-neon-cloud-db-company-data-source-and-summarize-th.md] and [vault:0-Inbox/202607121951-curated-query-the-neon-cloud-db-company-data-source-and-summarize-th.md]), but the evidence catalog supplied only their titles, not their contents. To deliver the summary you asked for — table names, requisition count, budget count, recent requisition topics, and total requested amount — I need to read those notes.\n\n**What I need:** permission to open those two inbox files. Once I do, I can extract the actual query results and produce the short summary you're after.\n\nAlternatively, if you have the raw query output (SQL results or a CSV export), paste it here and I'll synthesize it into the four-point summary immediately.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nQuery the Neon Cloud DB company data source and summarize the findings: what tables exist, how many requisitions and budgets are there, what are the most recent requisitions about, and what is the total requested amount. Give a short readable summary.\n\nInterpretation: intent=answer, scope=short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Neon Cloud DB — Company Data Summary\n\nI found two vault notes with matching titles ([vault:0-Inbox/202607121950-research-query-the-neon-cloud-db-company-data-source-and-summarize-th.md] and [vault:0-Inbox/202607121951-curated-query-the-neon-cloud-db-company-data-source-and-summarize-th.md]), but the evidence catalog supplied only their titles, not their contents. To deliver the summary you asked for — table names, requisition count, budget count, recent requisition topics, and total requested amount — I need to read those notes.\n\n**What I need:** permission to open those two inbox files. Once I do, I can extract the actual query results and produce the short summary you're after.\n\nAlternatively, if you have the raw query output (SQL results or a CSV export), paste it here and I'll synthesize it into the four-point summary immediately."
      },
      "rationale": "auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion",
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
