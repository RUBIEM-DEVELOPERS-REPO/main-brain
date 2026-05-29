---
type: job
title: Write a runbook
slug: write-a-runbook-13c65de7
created: 2026-05-29T09:23:13.828Z
jobId: 13c65de7-4fc0-4e30-b9e4-271f3a8204f0
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:22:51.556Z
finishedAt: 2026-05-29T09:23:13.828Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-05-29T09:22:51.556Z
- **Finished:** 2026-05-29T09:23:13.828Z
- **Title:** Write a runbook

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Trigger  
- Scheduled daily backup of the **/data** directory fails three consecutive times, as reported by the monitoring alert `backup_failure_daily`.

## Preconditions  
1. Access to the backup server `backup01` with administrative privileges.  
2. SSH key for `admin` user is loaded in the local SSH agent.  
3. Current disk usage on `backup01:/backups` is below 85 % (`df -h /backups`).  
4. The primary data server `datasrv01` is reachable (`ping -c 3 datasrv01`).  
5. The `rsync` binary is installed on both `datasrv01` and `backup01` (`which rsync`).  

## Steps  
1. **Log into the primary data server**  
   ```bash
   ssh admin@datasrv01
   ```
2. **Stop the automatic backup cron job** to prevent interference  
   ```bash
   sudo systemctl stop backup-cron.service
   ```
3. **Create a temporary snapshot of the source directory**  
   ```bash
   sudo cp -al /data /data_snapshot_$(date +%Y%m%d%H%M)
   ```
4. **Log into the backup server** (open a new terminal)  
   ```bash
   ssh admin@backup01
   ```
5. **Verify free space on the backup target**  
   ```bash
   df -h /backups
   ```
   *If free space < 10 GB, abort and request storage expansion.*  
6. **Run rsync to copy the snapshot**  
   ```bash
   rsync -a --delete /data_snapshot_$(date +%Y%m%d%H%M) admin@backup01:/backups/daily/$(date +%Y%m%d)
   ```
7. **Check rsync exit code**; if non‑zero, proceed to *Rollback* (step 12).  
8. **Remove the temporary snapshot on the primary server**  
   ```bash
   sudo rm -rf /data_snapshot_$(date +%Y%m%d%H%M)
   ```
9. **Restart the automatic backup cron job**  
   ```bash
   sudo systemctl start backup-cron.service
   ```
10. **Clear the failure alert** in the monitoring system (e.g., via the UI or API).  
11. **Log out of both servers**  
    ```bash
    exit
    ```

## Verification  
- On `backup01`, list the newly created backup directory and confirm file count matches the source:  
  ```bash
  ls -lR /backups/daily/$(date +%Y%m%d) | wc -l
  ssh admin@datasrv01 "find /data | wc -l"
  ```  
- Verify the monitoring system shows the backup job as **healthy** for the next three scheduled runs.  
- Ensure the `backup-cron.service` status is **active (running)** on `datasrv01`:  
  ```bash
  sudo systemctl status backup-cron.service
  ```

## Rollback  
1. **Stop the backup cron job** (step 2) if still running.  
2. **Delete the incomplete backup directory** on `backup01`:  
   ```bash
   sudo rm -rf /backups/daily/$(date +%Y%m%d)
   ```  
3. **Restore the original `/data` directory from the snapshot** (if snapshot still exists):  
   ```bash
   sudo rm -rf /data
   sudo cp -a /data_snapshot_$(date +%Y%m%d%H%M) /data
   sudo rm -rf /data_snapshot_$(date +%Y%m%d%H%M)
   ```  
4. **Restart the automatic backup cron job** (step 9).  
5. **Re‑enable the failure alert** in the monitoring system to resume notifications.

<details><summary>Log</summary>

```
[2026-05-29T09:22:51.564Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:22:51.567Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-29T09:22:51.567Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
