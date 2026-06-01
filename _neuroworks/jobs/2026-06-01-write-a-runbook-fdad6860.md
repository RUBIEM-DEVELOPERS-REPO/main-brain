---
type: job
title: Write a runbook
slug: write-a-runbook-fdad6860
created: 2026-06-01T13:50:09.270Z
jobId: fdad6860-2b46-446d-a9a6-9267c0ec109d
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:49:28.674Z
finishedAt: 2026-06-01T13:50:09.270Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-06-01T13:49:28.674Z
- **Finished:** 2026-06-01T13:50:09.270Z
- **Title:** Write a runbook

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Trigger
The runbook is initiated when a scheduled nightly backup of the **NeuroWorks** production database fails, as indicated by an error alert in the monitoring system (e.g., PagerDuty or Grafana Alertmanager).

## Preconditions
1. Access to the **NeuroWorks** server via SSH with a user that has `sudo` privileges.  
2. The primary database service (`postgresql`) is currently stopped or in a failed state.  
3. Sufficient free disk space (≥ 20 GB) on the backup volume `/mnt/backup`.  
4. The most recent successful backup file (`/mnt/backup/neuroworks_prod_YYYYMMDD.tar.gz`) is present.  
5. The `pg_dump` utility is installed and its version matches the production PostgreSQL version.  

## Steps
1. **Log in to the server**  
   ```bash
   ssh admin@neuroworks-prod.internal
   ```
2. **Elevate to root**  
   ```bash
   sudo -i
   ```
3. **Verify the failed backup log**  
   ```bash
   cat /var/log/neuroworks/backup.log | grep -i "ERROR"
   ```
4. **Stop the PostgreSQL service** (if still running)  
   ```bash
   systemctl stop postgresql
   ```
5. **Create a temporary directory for the new dump**  
   ```bash
   mkdir -p /tmp/neuroworks_dump
   ```
6. **Run a fresh logical dump of the production database**  
   ```bash
   pg_dump -U neuroworks -Fc neuroworks_prod > /tmp/neuroworks_dump/neuroworks_prod_$(date +%Y%m%d).dump
   ```
7. **Compress the dump file**  
   ```bash
   tar -czvf /mnt/backup/neuroworks_prod_$(date +%Y%m%d).tar.gz -C /tmp/neuroworks_dump .
   ```
8. **Set correct ownership and permissions on the backup file**  
   ```bash
   chown backup:backup /mnt/backup/neuroworks_prod_$(date +%Y%m%d).tar.gz
   chmod 640 /mnt/backup/neuroworks_prod_$(date +%Y%m%d).tar.gz
   ```
9. **Remove the temporary dump directory**  
   ```bash
   rm -rf /tmp/neuroworks_dump
   ```
10. **Start the PostgreSQL service**  
    ```bash
    systemctl start postgresql
    ```
11. **Record the successful backup in the log**  
    ```bash
    echo "$(date '+%Y-%m-%d %H:%M:%S') INFO Backup succeeded: neuroworks_prod_$(date +%Y%m%d).tar.gz" >> /var/log/neuroworks/backup.log
    ```

## Verification
- Confirm the PostgreSQL service is active: `systemctl status postgresql` should show `active (running)`.  
- Verify the new backup file exists and is larger than 1 GB:  
  ```bash
  ls -lh /mnt/backup/neuroworks_prod_$(date +%Y%m%d).tar.gz
  ```
- Test restoreability by performing a quick dump‑restore on a staging instance:  
  ```bash
  pg_restore -U neuroworks -d neuroworks_test /mnt/backup/neuroworks_prod_$(date +%Y%m%d).tar.gz
  ```
  The command should complete without errors.  

## Rollback
If any step fails after the dump is created:

1. **Stop PostgreSQL** (if running): `systemctl stop postgresql`.  
2. **Restore the most recent known‑good backup**:  
   ```bash
   tar -xzvf /mnt/backup/neuroworks_prod_$(date -d "yesterday" +%Y%m%d).tar.gz -C /tmp/restore
   pg_restore -U neuroworks -d neuroworks_prod /tmp/restore/neuroworks_prod_$(date -d "yesterday" +%Y%m%d).dump
   ```
3. **Remove any partially created files** from the current attempt:  
   ```bash
   rm -f /mnt/backup/neuroworks_prod_$(date +%Y%m%d).tar.gz
   rm -rf /tmp/neuroworks_dump
   ```
4. **Start PostgreSQL**: `systemctl start postgresql`.  
5. **Log the rollback**:  
   ```bash
   echo "$(date '+%Y-%m-%d %H:%M:%S') WARN Backup failed; rolled back to previous snapshot." >> /var/log/neuroworks/backup.log
   ```

---  
*Assumed: the backup process uses PostgreSQL logical dumps and stores archives on `/mnt/backup` as per the NeuroWorks platform conventions.*

<details><summary>Log</summary>

```
[2026-06-01T13:49:28.686Z] Working as Clawbot — AI agent operator.
[2026-06-01T13:49:28.777Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-06-01T13:49:28.777Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
