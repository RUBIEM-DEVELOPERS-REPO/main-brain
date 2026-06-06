---
type: template
title: Default research plan for: a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", " (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-06T13:41:46.499Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Default research plan for: a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", " (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.

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
        "query": "a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 mi…\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## 6‑Step Migration Plan for a 2 TB PostgreSQL Database  \n**Goal:** Move the production database to a new region with < 5 minutes of downtime.  \n\n| Step | Action | Owner Role | Rollback Note |\n|------|--------|------------|---------------|\n| 1 | **Pre‑migration audit** – Verify schema compatibility, extensions, and data size; create a full backup and a point‑in‑time snapshot. | Lead DBA (e.g., *Maria*) | If audit fails, abort and restore from the latest backup. |\n| 2 | **Set up target cluster** – Provision a new PostgreSQL instance in the target region, configure identical parameters, and enable streaming replication. | Cloud Ops Engineer (e.g., *Raj*) | If provisioning fails, tear down the target instance and keep the source untouched. |\n| 3 | **Initial data sync** – Use `pg_basebackup` or `pg_dump/pg_restore` to copy the current database to the target; verify integrity with checksums. | DBA (e.g., *Maria*) | If checksum mismatch, roll back to the source and retry the sync. |\n| 4 | **Enable logical replication** – Create publication on source and subscription on target; start streaming changes. | DBA (e.g., *Maria*) | If replication lags > 5 min, pause the subscription, revert to the source, and restart the sync. |\n| 5 | **Cut‑over window** – At a low‑traffic moment, put the source into read‑only, drain connections, and apply the final WAL segment to the target. | On‑call Engineer (e.g., *Liu*) | If the final WAL application fails, roll back by restoring the source from the last successful snapshot. |\n| 6 | **Post‑cut‑over validation** – Run health checks, update DNS to point to the target, and monitor performance. | Site Reliability Lead (e.g., *Ana*) | If validation fails, switch DNS back to the source and initiate a rollback to the last stable state. |\n\n*All steps include automated alerts and a run‑book checklist. The rollback notes assume a recent, consistent backup exists; if not, the migration must be aborted before proceeding.*",
        "sources": "[1] research.deep (query=\"a 6-step plan to migrate a 2TB Postgres database to a new re\")\nI’m unable to provide a concrete 6‑step migration plan with owners and rollback notes because the supplied evidence does not contain any information about PostgreSQL migration strategies, role responsibilities, or downtime‑reduction techniques. If you can share relevant internal documentation or links to reliable sources that cover this topic, I’ll be happy to synthesize a detailed plan for you."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## 6‑Step Migration Plan for a 2 TB PostgreSQL Database  \n**Goal:** Move the production database to a new region with < 5 minutes of downtime.  \n\n| Step | Action | Owner Role | Rollback Note |\n|------|--------|------------|---------------|\n| 1 | **Pre‑migration audit** – Verify schema compatibility, extensions, and data size; create a full backup and a point‑in‑time snapshot. | Lead DBA (e.g., *Maria*) | If audit fails, abort and restore from the latest backup. |\n| 2 | **Set up target cluster** – Provision a new PostgreSQL instance in the target region, configure identical parameters, and enable streaming replication. | Cloud Ops Engineer (e.g., *Raj*) | If provisioning fails, tear down the target instance and keep the source untouched. |\n| 3 | **Initial data sync** – Use `pg_basebackup` or `pg_dump/pg_restore` to copy the current database to the target; verify integrity with checksums. | DBA (e.g., *Maria*) | If checksum mismatch, roll back to the source and retry the sync. |\n| 4 | **Enable logical replication** – Create publication on source and subscription on target; start streaming changes. | DBA (e.g., *Maria*) | If replication lags > 5 min, pause the subscription, revert to the source, and restart the sync. |\n| 5 | **Cut‑over window** – At a low‑traffic moment, put the source into read‑only, drain connections, and apply the final WAL segment to the target. | On‑call Engineer (e.g., *Liu*) | If the final WAL application fails, roll back by restoring the source from the last successful snapshot. |\n| 6 | **Post‑cut‑over validation** – Run health checks, update DNS to point to the target, and monitor performance. | Site Reliability Lead (e.g., *Ana*) | If validation fails, switch DNS back to the source and initiate a rollback to the last stable state. |\n\n*All steps include automated alerts and a run‑book checklist. The rollback notes assume a recent, consistent backup exists; if not, the migration must be aborted before proceeding.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## 6‑Step Migration Plan for a 2 TB PostgreSQL Database  \n**Goal:** Move the production database to a new region with < 5 minutes of downtime.  \n\n| Step | Action | Owner Role | Rollback Note |\n|------|--------|------------|---------------|\n| 1 | **Pre‑migration audit** – Verify schema compatibility, extensions, and data size; create a full backup and a point‑in‑time snapshot. | Lead DBA (e.g., *Maria*) | If audit fails, abort and restore from the latest backup. |\n| 2 | **Set up target cluster** – Provision a new PostgreSQL instance in the target region, configure identical parameters, and enable streaming replication. | Cloud Ops Engineer (e.g., *Raj*) | If provisioning fails, tear down the target instance and keep the source untouched. |\n| 3 | **Initial data sync** – Use `pg_basebackup` or `pg_dump/pg_restore` to copy the current database to the target; verify integrity with checksums. | DBA (e.g., *Maria*) | If checksum mismatch, roll back to the source and retry the sync. |\n| 4 | **Enable logical replication** – Create publication on source and subscription on target; start streaming changes. | DBA (e.g., *Maria*) | If replication lags > 5 min, pause the subscription, revert to the source, and restart the sync. |\n| 5 | **Cut‑over window** – At a low‑traffic moment, put the source into read‑only, drain connections, and apply the final WAL segment to the target. | On‑call Engineer (e.g., *Liu*) | If the final WAL application fails, roll back by restoring the source from the last successful snapshot. |\n| 6 | **Post‑cut‑over validation** – Run health checks, update DNS to point to the target, and monitor performance. | Site Reliability Lead (e.g., *Ana*) | If validation fails, switch DNS back to the source and initiate a rollback to the last stable state. |\n\n*All steps include automated alerts and a run‑book checklist. The rollback notes assume a recent, consistent backup exists; if not, the migration must be aborted before proceeding.*"
      },
      "rationale": "auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Default research plan for: a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"",
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
