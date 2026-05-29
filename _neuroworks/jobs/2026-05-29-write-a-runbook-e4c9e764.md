---
type: job
title: Write a runbook
slug: write-a-runbook-e4c9e764
created: 2026-05-29T09:03:45.679Z
jobId: e4c9e764-6c4f-4baa-b9ed-65651c0a39bc
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:02:57.367Z
finishedAt: 2026-05-29T09:03:45.679Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-05-29T09:02:57.367Z
- **Finished:** 2026-05-29T09:03:45.679Z
- **Title:** Write a runbook

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Trigger
The runbook is initiated when a scheduled nightly backup of the **NeuroWorks** PostgreSQL database fails, as indicated by an error entry in the backup log (`/var/log/neuroworks/backup.log`) or an alert from the monitoring system (e.g., Prometheus alert `BackupFailure`).

## Preconditions
1. Access to the **NeuroWorks** application server with sudo privileges.  
2. The PostgreSQL service (`postgresql`) is running.  
3. Sufficient free space (> 2 × database size) on the backup destination filesystem (`/mnt/backup`).  
4. The backup script located at `/opt/neuroworks/scripts/backup.sh` is present and executable.  
5. Network connectivity to the remote backup repository (if used) is verified (`ping -c 3 backup.example.com`).  

## Steps
1. **Log into the server**  
   ```bash
   ssh admin@neuroworks-prod.example.com
   ```
2. **Switch to the backup user**  
   ```bash
   sudo su - backup
   ```
3. **Stop any running backup jobs** (prevent overlap)  
   ```bash
   pkill -f backup.sh || true
   ```
4. **Verify PostgreSQL is healthy**  
   ```bash
   sudo -u postgres pg_isready
   ```
   If the command returns `accepting connections`, continue; otherwise, restart PostgreSQL (see rollback).  
5. **Create a temporary dump directory**  
   ```bash
   mkdir -p /tmp/neuroworks_backup_tmp
   ```
6. **Run a manual pg_dump**  
   ```bash
   pg_dumpall -U postgres -f /tmp/neuroworks_backup_tmp/full_dump.sql
   ```
7. **Compress the dump**  
   ```bash
   tar -czf /tmp/neuroworks_backup_tmp/full_dump_$(date +%F).tar.gz -C /tmp/neuroworks_backup_tmp full_dump.sql
   ```
8. **Copy the archive to the backup destination**  
   ```bash
   cp /tmp/neuroworks_backup_tmp/full_dump_$(date +%F).tar.gz /mnt/backup/
   ```
9. **Set correct ownership and permissions**  
   ```bash
   chown backup:backup /mnt/backup/full_dump_$(date +%F).tar.gz
   chmod 640 /mnt/backup/full_dump_$(date +%F).tar.gz
   ```
10. **Remove the temporary dump directory**  
    ```bash
    rm -rf /tmp/neuroworks_backup_tmp
    ```
11. **Log the successful manual backup**  
    ```bash
    echo "$(date '+%Y-%m-%d %H:%M:%S') Manual backup completed successfully" >> /var/log/neuroworks/backup.log
    ```
12. **Restart the scheduled backup service** (if it was stopped)  
    ```bash
    sudo systemctl start neuroworks-backup.timer
    ```

## Verification
- Confirm the new archive exists and is non‑empty:  
  ```bash
  ls -lh /mnt/backup/full_dump_$(date +%F).tar.gz
  ```
- Verify the archive can be decompressed without error:  
  ```bash
  tar -tzf /mnt/backup/full_dump_$(date +%F).tar.gz
  ```
- Check the backup log for the success entry added in step 11.  
- Ensure the monitoring alert `BackupFailure` clears within 5 minutes.

## Rollback
1. **If PostgreSQL was restarted in step 4**, revert to the previous state:  
   ```bash
   sudo systemctl restart postgresql
   ```
2. **Delete the manually created archive** (if it is corrupt or duplicate):  
   ```bash
   rm -f /mnt/backup/full_dump_$(date +%F).tar.gz
   ```
3. **Restore the previous backup file** (if the new file overwrote a valid one):  
   ```bash
   cp /mnt/backup/previous_good_backup.tar.gz /mnt/backup/full_dump_$(date +%F).tar.gz
   ```
4. **Re‑enable the scheduled backup timer** (if it was disabled):  
   ```bash
   sudo systemctl enable neuroworks-backup.timer
   sudo systemctl start neuroworks-backup.timer
   ```
5. **Add a rollback entry to the log**:  
   ```bash
   echo "$(date '+%Y-%m-%d %H:%M:%S') Manual backup rollback executed" >> /var/log/neuroworks/backup.log
   ```

<details><summary>Log</summary>

```
[2026-05-29T09:02:57.375Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:02:57.381Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-29T09:02:57.381Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
