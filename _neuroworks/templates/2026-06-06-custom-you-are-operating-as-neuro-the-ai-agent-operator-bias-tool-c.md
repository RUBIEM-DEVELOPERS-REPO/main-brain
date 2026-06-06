---
type: template
title: Generate a 6‑step migration plan with owners and rollback notes. (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-06T12:29:35.672Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Generate a 6‑step migration plan with owners and rollback notes. (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

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
      "tool": "ollama.generate",
      "args": {
        "prompt": "Create a 6‑step migration plan for a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step must list an owner role and a rollback note. Output a numbered list with the format:\n\n1. Step description\n   Owner: <role>\n   Rollback: <brief note>\n\nRepeat for steps 2‑6.",
        "system": "You are an experienced database migration specialist. Provide concise, actionable steps."
      },
      "rationale": "Generate the final plan text",
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## 6‑Step Migration Plan – 2 TB PostgreSQL to New Region  \n**Downtime Target:** < 5 minutes  \n\n| Step | Action | Owner | Rollback |\n|------|--------|-------|----------|\n| 1 | **Pre‑migration audit & baseline** – Verify data integrity, replication lag, and capture current WAL segment size. | DBA (Database Administrator) | None – read‑only audit. |\n| 2 | **Set up a read‑only replica in the target region** – Configure streaming replication, ensure network connectivity, and confirm replica is fully caught up. | Cloud Ops Engineer | Drop the replica instance and restore original replication settings. |\n| 3 | **Freeze writes (point‑in‑time snapshot)** – Issue `pg_start_backup('migration')`, pause application writes, and take a final WAL checkpoint. | Application Lead | Resume writes and abort backup if any step fails. |\n| 4 | **Transfer the last WAL segment to the replica** – Use `pg_receivewal` or `pg_basebackup` to ship the final WAL files, then run `pg_stop_backup()`. | DBA | Re‑initiate backup on source and discard transferred WAL. |\n| 5 | **Promote the replica to primary and switch traffic** – Execute `pg_ctl promote` on the replica, update DNS/connection strings, and verify application connectivity. | DevOps Lead | Roll back DNS to source, re‑promote source, and restore original routing. |\n| 6 | **Validate and decommission old instance** – Run consistency checks, monitor performance, and once satisfied, terminate the source cluster. | Cloud Architect | If validation fails, restore source cluster from backup and revert traffic routing. |\n\nAll steps are designed to keep application downtime under five minutes while providing clear rollback paths for each phase.",
        "sources": "[1] ollama.generate\n1. **Pre‑migration audit & baseline**  \n   - Verify data integrity, check replication lag, and capture current WAL segment size.  \n   - Owner: DBA (Database Administrator)  \n   - Rollback: None – purely read‑only audit.\n\n2. **Set up a read‑only replica in the target region**  \n   - Configure streaming replication, ensure network connectivity, and confirm replica is fully caught up.  \n   - Owner: Cloud Ops Engineer  \n   - Rollback: Drop the replica instance and restore original replication settings.\n\n3. **Freeze writes (point‑in‑time snapshot)**  \n   - Issue `pg_start_backup('migration')`, pause application writes, and take a final WAL checkpoint.  \n   - Owner: Application Lead  \n   - Rollback: Resume writes and abort backup if any step fails.\n\n4. **Transfer the last WAL segment to the replica**  \n   - Use `pg_receivewal` or `pg_basebackup` to ship the final WAL files, then run `pg_stop_backup()`.  \n   - Owner: DBA  \n   - Rollback: Re‑initiate backup on source and discard transferred WAL.\n\n5. **Promote the replica to primary and switch traffic**  \n   - Execute `pg_ctl promote` on the replica, update DNS/connection strings, and verify application connectivity.  \n   - Owner: DevOps Lead  \n   - Rollback: Roll back DNS to source, re‑promote source, and restore original routing.\n\n6. **Validate and decommission old instance**  \n   - Run consistency checks, monitor performance, and once satisfied, terminate the source cluster.  \n   - Owner: Cloud Architect  \n   - Rollback: If validat"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## 6‑Step Migration Plan – 2 TB PostgreSQL to New Region  \n**Downtime Target:** < 5 minutes  \n\n| Step | Action | Owner | Rollback |\n|------|--------|-------|----------|\n| 1 | **Pre‑migration audit & baseline** – Verify data integrity, replication lag, and capture current WAL segment size. | DBA (Database Administrator) | None – read‑only audit. |\n| 2 | **Set up a read‑only replica in the target region** – Configure streaming replication, ensure network connectivity, and confirm replica is fully caught up. | Cloud Ops Engineer | Drop the replica instance and restore original replication settings. |\n| 3 | **Freeze writes (point‑in‑time snapshot)** – Issue `pg_start_backup('migration')`, pause application writes, and take a final WAL checkpoint. | Application Lead | Resume writes and abort backup if any step fails. |\n| 4 | **Transfer the last WAL segment to the replica** – Use `pg_receivewal` or `pg_basebackup` to ship the final WAL files, then run `pg_stop_backup()`. | DBA | Re‑initiate backup on source and discard transferred WAL. |\n| 5 | **Promote the replica to primary and switch traffic** – Execute `pg_ctl promote` on the replica, update DNS/connection strings, and verify application connectivity. | DevOps Lead | Roll back DNS to source, re‑promote source, and restore original routing. |\n| 6 | **Validate and decommission old instance** – Run consistency checks, monitor performance, and once satisfied, terminate the source cluster. | Cloud Architect | If validation fails, restore source cluster from backup and revert traffic routing. |\n\nAll steps are designed to keep application downtime under five minutes while providing clear rollback paths for each phase.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## 6‑Step Migration Plan – 2 TB PostgreSQL to New Region  \n**Downtime Target:** < 5 minutes  \n\n| Step | Action | Owner | Rollback |\n|------|--------|-------|----------|\n| 1 | **Pre‑migration audit & baseline** – Verify data integrity, replication lag, and capture current WAL segment size. | DBA (Database Administrator) | None – read‑only audit. |\n| 2 | **Set up a read‑only replica in the target region** – Configure streaming replication, ensure network connectivity, and confirm replica is fully caught up. | Cloud Ops Engineer | Drop the replica instance and restore original replication settings. |\n| 3 | **Freeze writes (point‑in‑time snapshot)** – Issue `pg_start_backup('migration')`, pause application writes, and take a final WAL checkpoint. | Application Lead | Resume writes and abort backup if any step fails. |\n| 4 | **Transfer the last WAL segment to the replica** – Use `pg_receivewal` or `pg_basebackup` to ship the final WAL files, then run `pg_stop_backup()`. | DBA | Re‑initiate backup on source and discard transferred WAL. |\n| 5 | **Promote the replica to primary and switch traffic** – Execute `pg_ctl promote` on the replica, update DNS/connection strings, and verify application connectivity. | DevOps Lead | Roll back DNS to source, re‑promote source, and restore original routing. |\n| 6 | **Validate and decommission old instance** – Run consistency checks, monitor performance, and once satisfied, terminate the source cluster. | Cloud Architect | If validation fails, restore source cluster from backup and revert traffic routing. |\n\nAll steps are designed to keep application downtime under five minutes while providing clear rollback paths for each phase."
      },
      "rationale": "auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Generate a 6‑step migration plan with owners and rollback notes.",
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
