---
type: job
title: Team task #4: Outline a rollout + rollback runbook (5 ordered steps) for s
slug: team-task-4-outline-a-rollout-rollback-runbook-5-ordered-ste-345295b9
created: 2026-05-28T19:55:33.813Z
jobId: 345295b9-64ac-4125-bc3b-2a5bbd681cf2
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T19:55:04.421Z
finishedAt: 2026-05-28T19:55:33.813Z
---

# Team task #4: Outline a rollout + rollback runbook (5 ordered steps) for s

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T19:55:04.421Z
- **Finished:** 2026-05-28T19:55:33.813Z
- **Title:** Team task #4: Outline a rollout + rollback runbook (5 ordered steps) for s

## Inputs
```json
{
  "task": "(You are operating as Devon, the DevOps / SRE. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nOutline a rollout + rollback runbook (5 ordered steps) for shipping: an in-app daily digest that summarizes a user's unread notifications\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Outline a rollout + rollback runbook (5 ordered steps) for shipping: an in-app daily digest that summarizes a user's unread notifications",
  "teamTask": {
    "taskIndex": 3,
    "persona": "devops-sre",
    "route": "explicit"
  },
  "personaId": "devops-sre"
}
```

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
**Rollout & Rollback Runbook – Daily‑Digest Feature**  

| # | Action | Details (runnable at 3 am) |
|---|--------|----------------------------|
| 1 | **Deploy feature flag** | `kubectl set env deployment/digest-service DAILY_DIGEST_ENABLED=true --record` <br>Verify flag propagation: `kubectl exec -it $(kubectl get pod -l app=digest-service -o jsonpath="{.items[0].metadata.name}") -- curl -s http://localhost:8080/health | grep DAILY_DIGEST_ENABLED` |
| 2 | **Smoke‑test a single shard** | Target a low‑traffic user segment (e.g., `user_id % 1000 = 0`). <br>Run: `curl -s "https://api.myapp.com/v1/digest?user_id=123456&test=true"` <br>Confirm JSON contains correct unread‑count and no 5xx errors. |
| 3 | **Gradual traffic shift** | Increase rollout by 20 % every 5 min using the feature‑flag service: `featurectl rollout --name daily-digest --step 20` <br>Monitor metrics: <br>• `rate(http_requests_total{handler="digest"}[1m])` <br>• `histogram_quantile(0.95, sum(rate(digest_latency_seconds_bucket[5m])) by (le))` <br>Alert on error‑rate > 0.5 % or latency > 2 s. |
| 4 | **Full enable** | Once metrics stay within SLO (error‑rate < 0.2 %, 95th‑pct latency < 1 s) for 15 min, run: `featurectl enable --name daily-digest --all` |
| 5 | **Rollback (if any alert fires)** | <ul><li>Revert flag: `kubectl set env deployment/digest-service DAILY_DIGEST_ENABLED=false --record`</li><li>Clear rollout state: `featurectl rollback --name daily-digest`</li><li>Flush cache of pre‑computed digests: `redis-cli -n 2 FLUSHDB`</li><li>Confirm rollback: repeat step 1 check, ensure flag is false.</li></ul> |

*Assumed: the service runs in Kubernetes, feature flags are managed via `featurectl`, and observability stacks expose Prometheus metrics as shown.*

<details><summary>Log</summary>

```
[2026-05-28T19:55:04.421Z] team-task #4 · persona=devops-sre · route=explicit
[2026-05-28T19:55:04.421Z] **Devon** (DevOps / SRE) is on this team-task.
[2026-05-28T19:55:04.566Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-05-28T19:55:04.567Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
