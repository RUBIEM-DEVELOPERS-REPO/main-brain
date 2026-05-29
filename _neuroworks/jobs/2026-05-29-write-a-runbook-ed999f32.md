---
type: job
title: Write a runbook
slug: write-a-runbook-ed999f32
created: 2026-05-29T14:10:07.887Z
jobId: ed999f32-2b90-4aec-9ca6-0f9623ddedc0
status: succeeded
template: custom-operations-coordinator-write-a-runbook
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:09:26.313Z
finishedAt: 2026-05-29T14:10:07.887Z
---

# Write a runbook

- **Status:** succeeded
- **Template:** custom-operations-coordinator-write-a-runbook
- **Started:** 2026-05-29T14:09:26.313Z
- **Finished:** 2026-05-29T14:10:07.887Z
- **Title:** Write a runbook

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Trigger
The runbook is initiated when the **NeuroWorks platform fails to start** and the service manager reports a status of **`failed`** for `neuroworks.service` on the host machine.

## Preconditions
1. Administrative (root) access to the host where NeuroWorks is installed.  
2. Access to the system journal (`journalctl`) and the NeuroWorks log directory (`/var/log/neuroworks/`).  
3. The latest stable version of NeuroWorks is installed (verify with `neuroworks --version`).  
4. No other maintenance or deployment activities are running on the same host.

## Steps
1. **Check service status**  
   ```bash
   systemctl status neuroworks.service
   ```  
   Confirm the output shows `Active: failed`.

2. **Collect recent logs**  
   ```bash
   journalctl -u neuroworks.service --since "10 minutes ago" > /tmp/neuroworks_service.log
   tail -n 100 /var/log/neuroworks/neuroworks.log >> /tmp/neuroworks_service.log
   ```

3. **Identify the failure reason**  
   Open the combined log file and look for error patterns such as `Port already in use`, `Configuration file missing`, or `Database connection refused`.  

4. **Validate configuration file syntax**  
   ```bash
   neuroworks --validate-config /etc/neuroworks/config.yaml
   ```  
   Ensure the command returns `Configuration OK`.

5. **Confirm required ports are free**  
   ```bash
   ss -ltnp | grep -E ':8080|:8443'
   ```  
   If any process other than `neuroworks` is listening on these ports, note the PID.

6. **Stop any conflicting process** (replace `<PID>` with the actual number)  
   ```bash
   kill -9 <PID>
   ```

7. **Restart the NeuroWorks service**  
   ```bash
   systemctl restart neuroworks.service
   ```

8. **Wait for the service to become active** (max 30 seconds)  
   ```bash
   timeout 30 bash -c 'while ! systemctl is-active --quiet neuroworks.service; do sleep 2; done'
   ```

9. **Verify the web UI is reachable**  
   ```bash
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/health
   ```  
   Expect a `200` response.

## Verification
- `systemctl status neuroworks.service` shows `Active: active (running)`.  
- The health‑check endpoint (`/health`) returns HTTP 200.  
- No error entries appear in `/var/log/neuroworks/neuroworks.log` for the last 5 minutes.  

## Rollback
1. **Stop the NeuroWorks service**  
   ```bash
   systemctl stop neuroworks.service
   ```

2. **Restore the previous configuration** (if a backup exists at `/etc/neuroworks/config.yaml.bak`)  
   ```bash
   cp /etc/neuroworks/config.yaml.bak /etc/neuroworks/config.yaml
   ```

3. **Re‑enable any previously terminated conflicting process** (using its saved PID or service name).  

4. **Start the service with the restored configuration**  
   ```bash
   systemctl start neuroworks.service
   ```

5. **Confirm rollback success** by repeating the Verification steps.

<details><summary>Log</summary>

```
[2026-05-29T14:09:26.320Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:09:26.321Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-29T14:09:26.321Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
