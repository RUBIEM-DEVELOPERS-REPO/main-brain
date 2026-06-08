---
type: job
title: Ad-hoc: Give me a 6-step plan to migrate a 2TB Postgres database to
slug: ad-hoc-give-me-a-6-step-plan-to-migrate-a-2tb-postgres-datab-34cdcc55
created: 2026-06-08T10:51:19.417Z
jobId: 34cdcc55-45ed-447f-8eaf-6c2474fa99f3
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-08T10:50:36.845Z
finishedAt: 2026-06-08T10:51:19.417Z
---

# Ad-hoc: Give me a 6-step plan to migrate a 2TB Postgres database to 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-08T10:50:36.845Z
- **Finished:** 2026-06-08T10:51:19.417Z
- **Title:** Ad-hoc: Give me a 6-step plan to migrate a 2TB Postgres database to 

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Answer
**6‑step migration plan (≤5 min downtime)**  

1. **Set up a new replica cluster in the target region** – *Owner:* Cloud Ops Engineer – *Rollback:* If the replica fails to sync, delete it and keep the original cluster intact.  

2. **Configure logical replication or streaming backup to the new replica** – *Owner:* Database Administrator – *Rollback:* Stop replication and roll back the replica to its initial state (no data) if replication diverges.  

3. **Cut‑over with minimal downtime: stop writes, promote replica, redirect traffic** – *Owner:* Site Reliability Engineer – *Rollback:* Re‑enable writes on the old primary, restore connections to the former master.  

4. **Validate data consistency and run smoke tests against the new cluster** – *Owner:* QA Engineer – *Rollback:* If critical tests fail, trigger a rollback to the old cluster and restart replication.  

5. **Update DNS and load balancers to point to the new region** – *Owner:* DevOps – *Rollback:* Revert DNS records and load‑balancer backends to the original region if latency or errors appear.  

6. **Decommission the old cluster after a safe‑harbor period** – *Owner:* Cloud Ops Engineer – *Rollback:* Keep the old cluster online for at least 24 h then delete; if issues arise, restore connections to it.  

Each step is engineered to keep downtime ≤5 minutes and includes a clear rollback path.

<details><summary>Log</summary>

```
[2026-06-08T10:50:36.845Z] primary executor = hermes — running through the Hermes agent
[2026-06-08T10:50:36.851Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-08T10:51:19.417Z] Hermes responded in 42.6s (1389 chars).
```
</details>
