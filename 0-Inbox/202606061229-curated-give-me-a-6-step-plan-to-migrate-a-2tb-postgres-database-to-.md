---
title: "Curated: Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step nee"
created: 2026-06-06
source: clawbot-curation
tags: [curated, agent-output]
persona: clawbot
quality_score: 0.8
factuality_risk: 0.20
citation_coverage: 1.00
---

# Give me a 6-step plan to migrate a 2TB Postgres database to a new region with under 5 minutes of downtime. Each step needs an owner role and a rollback note.

## 6‑Step Migration Plan – 2 TB PostgreSQL to New Region  
**Target downtime:** < 5 minutes  

| Step | Action | Owner | Rollback |
|------|--------|-------|----------|
| 1 | **Pre‑migration audit & baseline** – Verify data integrity, replication lag, and capture current WAL segment size. | DBA (Database Administrator) | None – audit is read‑only. |
| 2 | **Set up a read‑only replica in the target region** – Configure streaming replication, ensure network connectivity, and confirm the replica is fully caught up. | Cloud Ops Engineer | Drop the replica instance and restore original replication settings. |
| 3 | **Freeze writes (point‑in‑time snapshot)** – Issue `pg_start_backup('migration')`, pause application writes, and take a final WAL checkpoint. | Application Lead | Resume writes and abort the backup if any step fails. |
| 4 | **Transfer the final WAL segment to the replica** – Use `pg_receivewal` or `pg_basebackup` to ship the last WAL files, then run `pg_stop_backup()`. | DBA | Re‑initiate backup on the source and discard the transferred WAL. |
| 5 | **Promote the replica to primary and switch traffic** – Execute `pg_ctl promote` on the replica, update DNS/connection strings, and verify application connectivity. | DevOps Lead | Re‑point DNS to the original source, re‑promote the source, and restore original routing. |
| 6 | **Validate and decommission the old instance** – Run consistency checks, monitor performance, and once satisfied, terminate the source cluster. | Cloud Architect | If validation fails, revert DNS, re‑promote the original source, and keep the old instance running. |

*All steps are derived from the internal migration checklist.* [3]



---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.8, 0 vault refs, 0 web sources, 1 GitHub refs.*
