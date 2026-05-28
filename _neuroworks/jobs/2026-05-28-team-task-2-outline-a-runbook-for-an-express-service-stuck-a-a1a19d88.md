---
type: job
title: Team task #2: Outline a runbook for an Express service stuck at high memor
slug: team-task-2-outline-a-runbook-for-an-express-service-stuck-a-a1a19d88
created: 2026-05-28T14:55:20.091Z
jobId: a1a19d88-6745-422c-8f8f-a8b7721bb67e
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T14:54:55.331Z
finishedAt: 2026-05-28T14:55:20.091Z
---

# Team task #2: Outline a runbook for an Express service stuck at high memor

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T14:54:55.331Z
- **Finished:** 2026-05-28T14:55:20.091Z
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

| Item | Detail |
|------|--------|
| **Symptom** | Alert from monitoring (e.g., Datadog/Prometheus) reports **process RSS > 80 % of container memory limit** for the Express service. |
| **Severity** | **P2 – Degraded performance** – requests begin timing‑out, error‑rate climbs > 5 %. |
| **First 5 minutes (Immediate actions)** | 1. **Acknowledge the alert** in the on‑call pager. <br>2. **Run a quick health check**: `kubectl exec <pod> -- curl -s http://localhost:3000/health` (or equivalent endpoint). <br>3. **Collect current memory metrics**: `kubectl top pod <pod> --containers` and `kubectl logs <pod> -c <container> --since=5m`. |
| **Diagnostic tree** | 1. **Is memory growth steady or spiking?** <br> • `kubectl exec <pod> -- node -e "console.log(process.memoryUsage())"` every 30 s for 2 min. <br>2. **Identify hot endpoints**: enable request‑level tracing (e.g., `express-status-monitor`) and look for routes with unusually long runtimes. <br>3. **Check recent deployments**: `kubectl rollout history deployment/<express‑svc>`; compare the version that triggered the alert with the previous stable version. <br>4. **Inspect heap snapshots** (if enabled): `kubectl exec <pod> -- node --inspect-brk` and capture a heap snapshot via Chrome DevTools. |
| **Escalation** | If memory usage exceeds **90 %** and does not recede after 5 min of diagnostics, **escalate to the senior SRE** (Slack #sre‑oncall) and **notify the product owner** (via the incident channel). |
| **Mitigation (Step 5)** | **Roll back the offending version** (or scale the deployment temporarily): <br>```bash\nkubectl rollout undo deployment/<express‑svc> --to-revision=<last‑good‑rev>\nkubectl scale deployment/<express‑svc> --replicas=5   # add headroom\n```<br>Verify memory stabilises (< 70 % of limit) for 10 min, then re‑enable the newer version after a targeted fix (e.g., memory‑leak patch). |

*Assumed: the service runs in Kubernetes with standard observability (Prometheus/Dashboards, Datadog alerts) and the team uses `kubectl` for operational tasks.*

<details><summary>Log</summary>

```
[2026-05-28T14:54:55.331Z] team-task #2 · persona=devops-sre · route=explicit
[2026-05-28T14:54:55.331Z] **Devon** (DevOps / SRE) is on this team-task.
[2026-05-28T14:54:55.392Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-28T14:54:55.393Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
