---
type: job
title: Write a runbook
slug: write-a-runbook-28ea20fc
created: 2026-05-30T17:43:57.978Z
jobId: 28ea20fc-89f0-422f-99ab-800b04fbca61
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:43:12.253Z
finishedAt: 2026-05-30T17:43:57.978Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-05-30T17:43:12.253Z
- **Finished:** 2026-05-30T17:43:57.978Z
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
## Trigger  
The runbook is initiated when the **NeuroWorks platform fails to start** after a system reboot or when the **clawbot service reports “Service Unavailable”** in the monitoring dashboard.

## Preconditions  
1. Administrator has SSH access to the host running NeuroWorks (default `127.0.0.1`).  
2. The host OS is Ubuntu 22.04 LTS or compatible.  
3. The `clawbot` system user exists and has sudo privileges without a password prompt.  
4. No other maintenance windows are scheduled for the same host.  

## Steps  

1. **Connect to the host**  
   ```bash
   ssh clawbot@127.0.0.1
   ```

2. **Check the clawbot service status**  
   ```bash
   sudo systemctl status clawbot.service
   ```

3. **Stop the service if it is running**  
   ```bash
   sudo systemctl stop clawbot.service
   ```

4. **Verify that the service stopped**  
   ```bash
   sudo systemctl is-active clawbot.service   # should return “inactive”
   ```

5. **Inspect the log file for the last error**  
   ```bash
   sudo journalctl -u clawbot.service -n 20
   ```

6. **If the log shows a corrupted configuration file (`config.yaml`), back it up**  
   ```bash
   sudo cp /opt/neuroworks/config.yaml /opt/neuroworks/config.yaml.bak_$(date +%F_%T)
   ```

7. **Replace the corrupted configuration with the known‑good version from the vault**  
   ```bash
   sudo cp /vault/neuroworks-platform/config.yaml /opt/neuroworks/config.yaml
   ```

8. **Set correct ownership and permissions**  
   ```bash
   sudo chown clawbot:clawbot /opt/neuroworks/config.yaml
   sudo chmod 640 /opt/neuroworks/config.yaml
   ```

9. **Start the clawbot service**  
   ```bash
   sudo systemctl start clawbot.service
   ```

10. **Confirm the service is active**  
    ```bash
    sudo systemctl is-active clawbot.service   # should return “active”
    ```

11. **Run a health‑check request against the local API**  
    ```bash
    curl -s http://127.0.0.1:8000/health | grep '"status":"ok"'
    ```

## Verification  
- `systemctl status clawbot.service` shows **active (running)** with no error lines.  
- The health‑check command returns `{"status":"ok"}`.  
- The monitoring dashboard no longer displays “Service Unavailable”.  

## Rollback  

1. **Stop the service**  
   ```bash
   sudo systemctl stop clawbot.service
   ```

2. **Restore the previous configuration**  
   ```bash
   sudo cp /opt/neuroworks/config.yaml.bak_* /opt/neuroworks/config.yaml
   ```

3. **Reset ownership and permissions** (if altered)  
   ```bash
   sudo chown clawbot:clawbot /opt/neuroworks/config.yaml
   sudo chmod 640 /opt/neuroworks/config.yaml
   ```

4. **Start the service**  
   ```bash
   sudo systemctl start clawbot.service
   ```

5. **Verify the service returns to its prior state** using the same verification steps above.

<details><summary>Log</summary>

```
[2026-05-30T17:43:12.268Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:43:12.276Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-30T17:43:12.276Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
