---
type: job
title: Team task #2: Outline a runbook for an Express service stuck at high memor
slug: team-task-2-outline-a-runbook-for-an-express-service-stuck-a-ca4c8ec4
created: 2026-05-28T15:29:08.455Z
jobId: ca4c8ec4-0b2f-4c29-9a3f-8490fcc5c9ad
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T15:28:30.723Z
finishedAt: 2026-05-28T15:29:08.455Z
---

# Team task #2: Outline a runbook for an Express service stuck at high memor

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T15:28:30.723Z
- **Finished:** 2026-05-28T15:29:08.455Z
- **Title:** Team task #2: Outline a runbook for an Express service stuck at high memor

## Inputs
```json
{
  "task": "(You are operating as Devon, the DevOps / SRE. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nOutline a runbook for an Express service stuck at high memory in production. Give 5 ordered steps from triage to mitigation.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Outline a runbook for an Express service stuck at high memory in production. Give 5 ordered steps from triage to mitigation.",
  "teamTask": {
    "taskIndex": 1,
    "persona": "devops-sre",
    "route": "explicit"
  },
  "personaId": "devops-sre"
}
```

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
**Runbook – Express Service Experiencing High Memory Usage (Production)**  

| **Step** | **Action (what to do, when, and how)** |
|----------|----------------------------------------|
| **1 – Identify the alert & gather context** | • Alert source: Prometheus/Datadog memory‑usage metric crossing the “high‑memory” threshold (e.g., > 80 % of pod limit) for the `express‑api` service.<br>• Pull the latest logs: `kubectl logs -l app=express-api -c server --tail=2000 > /tmp/express.log`.<br>• Capture a snapshot of the pod’s resource usage: `kubectl top pod -l app=express-api` and store the output. |
| **2 – Verify the scope & severity** | • Confirm whether the issue is isolated to a single pod, a node, or the entire deployment (run `kubectl get pods -l app=express-api -o wide`).<br>• If > 2 pods are over the memory limit, classify as **Severity 2** (service degradation, possible OOM kill). |
| **3 – Collect a memory profile** | • Exec into the affected pod: `kubectl exec -it <pod‑name> -- /bin/bash`.<br>• Install `heapdump` (if not present) and trigger a heap snapshot: `node --inspect-brk app.js & sleep 5 && kill -SIGUSR2 $(pgrep node)` → snapshot saved as `heapdump-<timestamp>.heapsnapshot` in `/tmp`.<br>• Pull the snapshot for offline analysis: `kubectl cp <pod‑name>:/tmp/heapdump-*.heapsnapshot ./` and hand off to the dev team. |
| **4 – Apply immediate mitigation** | • **Option A – Restart the offending pod(s):** `kubectl rollout restart deployment/express-api` (will cause a brief warm‑up period).<br>• **Option B – Scale up memory limit temporarily:** `kubectl set resources deployment/express-api --limits=memory=1Gi --requests=memory=800Mi` and monitor for 10 min.<br>• Record which option was chosen and why in the incident log. |
| **5 – Hand‑off & post‑mortem trigger** | • Notify the on‑call developer via the #incidents Slack channel with the link to the heap snapshot and mitigation steps taken.<br>• Create a post‑mortem ticket (e.g., JIRA EXP‑MM‑####) tagging SRE, Dev, and Product owners; include the alert details, memory profile findings, and any configuration changes made.<br>• Schedule a follow‑up meeting within 48 h to discuss root‑cause analysis and permanent fixes (e.g., request‑limit tuning, code‑level memory leak remediation). |

*Assumed: the service runs on Kubernetes with Prometheus/Datadog alerts and the team has `kubectl` access to the cluster.*

<details><summary>Log</summary>

```
[2026-05-28T15:28:30.723Z] team-task #2 · persona=devops-sre · route=explicit
[2026-05-28T15:28:30.723Z] **Devon** (DevOps / SRE) is on this team-task.
[2026-05-28T15:28:30.728Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-28T15:28:30.728Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
