---
type: job
title: Write a runbook
slug: write-a-runbook-cca7cd00
created: 2026-05-29T20:35:07.464Z
jobId: cca7cd00-3760-4d0b-86e3-d11d8164ebc3
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:34:41.481Z
finishedAt: 2026-05-29T20:35:07.464Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-05-29T20:34:41.481Z
- **Finished:** 2026-05-29T20:35:07.464Z
- **Title:** Write a runbook

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write a runbook\nDescription: Produce a runbook for a recurring operation — trigger, preconditions, numbered steps, verification, rollback."
}
```

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Runbook: **[Custom Operation]**  

### Trigger  
- Scheduled daily at 02:00 UTC via the organization’s cron orchestrator.  
- Manual execution requested through the internal ticketing system (e.g., ServiceNow) with the “Runbook: Custom Operation” task type.  

### Preconditions  
1. The target server **srv‑app‑01** is powered on and reachable on the management network (ping succeeds).  
2. The service account **svc‑runbook** has valid SSH keys installed on the control workstation and on **srv‑app‑01**.  
3. The required script **/opt/custom/run_task.sh** exists on **srv‑app‑01** and is executable (`chmod +x`).  
4. Disk space on **/var/log/custom** is ≥ 1 GB (`df -h /var/log/custom`).  
5. No other instance of the script is currently running (`pgrep -f run_task.sh` returns no PID).  

### Steps  
1. **Connect to the target server**  
   ```bash
   ssh -i ~/.ssh/svc-runbook.key svc-runbook@srv-app-01
   ```  
2. **Navigate to the script directory**  
   ```bash
   cd /opt/custom
   ```  
3. **Validate script checksum** (SHA‑256) against the stored reference in `/opt/custom/run_task.sha256`  
   ```bash
   sha256sum -c run_task.sha256
   ```  
4. **Execute the script with the required arguments**  
   ```bash
   ./run_task.sh --mode=full --output=/var/log/custom/run_$(date +%Y%m%d%H%M).log
   ```  
5. **Capture the exit code** and write it to a status file  
   ```bash
   echo $? > /var/log/custom/run_status.txt
   ```  
6. **Archive the log file** to the central log repository via rsync  
   ```bash
   rsync -avz /var/log/custom/run_*.log logs.example.com:/archive/custom/
   ```  
7. **Clean up old logs** older than 30 days on the server  
   ```bash
   find /var/log/custom -type f -name "run_*.log" -mtime +30 -delete
   ```  
8. **Close the SSH session**  
   ```bash
   exit
   ```  

### Verification  
- Confirm the status file contains `0` (success).  
- Verify the newly created log file is present in the central repository (`ssh logs.example.com "ls -l /archive/custom/run_$(date +%Y%m%d%H%M).log"`).  
- Check that the number of log files on **srv‑app‑01** under `/var/log/custom` is ≤ 30 (ensuring cleanup succeeded).  

### Rollback  
1. **Stop any lingering script processes** (if step 4 failed)  
   ```bash
   pkill -f run_task.sh
   ```  
2. **Restore the previous script version** from backup (`/opt/custom/run_task.sh.bak`)  
   ```bash
   cp /opt/custom/run_task.sh.bak /opt/custom/run_task.sh
   chmod +x /opt/custom/run_task.sh
   ```  
3. **Remove the partially created log file** on the server  
   ```bash
   rm -f /var/log/custom/run_$(date +%Y%m%d%H%M).log
   ```  
4. **Delete the uploaded log** from the central repository (if it exists)  
   ```bash
   ssh logs.example.com "rm -f /archive/custom/run_$(date +%Y%m%d%H%M).log"
   ```  
5. **Document the rollback** in the ticketing system, noting the error code and actions taken.

<details><summary>Log</summary>

```
[2026-05-29T20:34:41.493Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:34:41.520Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-29T20:34:41.520Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
