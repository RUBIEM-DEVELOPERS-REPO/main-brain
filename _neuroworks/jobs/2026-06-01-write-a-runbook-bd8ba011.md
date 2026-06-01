---
type: job
title: Write a runbook
slug: write-a-runbook-bd8ba011
created: 2026-06-01T09:05:21.144Z
jobId: bd8ba011-1649-4d2a-ac50-bf94dd90cf3a
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:04:56.483Z
finishedAt: 2026-06-01T09:05:21.144Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-06-01T09:04:56.483Z
- **Finished:** 2026-06-01T09:05:21.144Z
- **Title:** Write a runbook

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Trigger
- Scheduled nightly maintenance window at 02:00 AM local time **or**  
- Alert from monitoring system indicating that the **NeuroWorks** background job queue length exceeds 10,000 items.

## Preconditions
1. Administrator is logged into the NeuroWorks host machine with a user account that has sudo privileges.  
2. The NeuroWorks service (`neuroworks`) is currently running.  
3. A recent backup of the NeuroWorks database (`/var/lib/neuroworks/db.backup`) exists and is stored on the backup server (`backup.neuroworks.local`).  
4. SSH access to the backup server is functional (`ssh backup.neuroworks.local`).  
5. Sufficient disk space (> 20 GB) is available on `/var/lib/neuroworks` for temporary files.

## Steps
1. **Stop the NeuroWorks service**  
   ```bash
   sudo systemctl stop neuroworks
   ```
2. **Create a temporary working directory**  
   ```bash
   mkdir -p /tmp/neuroworks_cleanup
   cd /tmp/neuroworks_cleanup
   ```
3. **Export the current job queue to a CSV file**  
   ```bash
   /opt/neuroworks/bin/queue_export --output queue_before.csv
   ```
4. **Delete jobs older than 30 days**  
   ```bash
   /opt/neuroworks/bin/queue_prune --age 30d
   ```
5. **Compact the SQLite database** (if NeuroWorks uses SQLite)  
   ```bash
   sqlite3 /var/lib/neuroworks/neuroworks.db "VACUUM;"
   ```
6. **Verify that the queue size is now below the threshold**  
   ```bash
   /opt/neuroworks/bin/queue_status | grep "Pending jobs:" 
   ```
7. **Start the NeuroWorks service**  
   ```bash
   sudo systemctl start neuroworks
   ```
8. **Check service health**  
   ```bash
   sudo systemctl status neuroworks
   curl -s http://localhost:8080/health | grep "status\":\"OK"
   ```
9. **Remove temporary files**  
   ```bash
   rm -rf /tmp/neuroworks_cleanup
   ```

## Verification
- `systemctl status neuroworks` shows **active (running)**.  
- `curl http://localhost:8080/health` returns JSON containing `"status":"OK"`.  
- `queue_status` reports **Pending jobs < 5,000**.  
- No error messages appear in `/var/log/neuroworks/neuroworks.log` within the last 5 minutes.

## Rollback
1. **Stop the NeuroWorks service**  
   ```bash
   sudo systemctl stop neuroworks
   ```
2. **Restore the database from the latest backup**  
   ```bash
   scp backup.neuroworks.local:/backups/neuroworks/db.backup /var/lib/neuroworks/neuroworks.db
   ```
3. **Start the NeuroWorks service**  
   ```bash
   sudo systemctl start neuroworks
   ```
4. **Confirm restoration**  
   ```bash
   /opt/neuroworks/bin/queue_status
   curl -s http://localhost:8080/health | grep "status\":\"OK"
   ```

<details><summary>Log</summary>

```
[2026-06-01T09:04:56.493Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:04:56.494Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-06-01T09:04:56.495Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
