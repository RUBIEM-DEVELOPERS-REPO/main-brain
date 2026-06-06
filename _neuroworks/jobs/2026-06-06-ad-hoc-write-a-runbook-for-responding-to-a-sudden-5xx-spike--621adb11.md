---
type: job
title: Ad-hoc: Write a runbook for responding to a sudden 5xx spike on our
slug: ad-hoc-write-a-runbook-for-responding-to-a-sudden-5xx-spike--621adb11
created: 2026-06-06T13:19:32.340Z
jobId: 621adb11-04f6-40f7-a45c-851d6c86f438
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-06T13:18:34.813Z
finishedAt: 2026-06-06T13:19:32.340Z
---

# Ad-hoc: Write a runbook for responding to a sudden 5xx spike on our 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-06T13:18:34.813Z
- **Finished:** 2026-06-06T13:19:32.340Z
- **Title:** Ad-hoc: Write a runbook for responding to a sudden 5xx spike on our 

## Inputs
```json
{
  "task": "(You are operating as Devon, the DevOps / SRE. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite a runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role.\n\nInterpretation: intent=draft-other, target=\"runbook for responding to a sudden 5xx spike on our api gateway: detection, first triage, likely causes, mitigation, esc\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Write a runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "draft-other",
  "intentTarget": "runbook for responding to a sudden 5xx spike on our api gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. each step needs an owner role.",
  "personaAutoRouted": "devops-sre",
  "autoRouteMatches": [
    "Write a runbook",
    "runbook"
  ],
  "personaId": "devops-sre"
}
```

## Plan
Find context for "runbook for responding to a sudden 5xx spike on our API gateway: detection, firs" then draft it

### Steps
1. ✓ Searching your second brain for "runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role." — `vault.search` (1.4s)
    > ground the draft in any prior context in the user's second brain — avoid fabricating meaning for unfamiliar terms
2. ✓ Looking in your Downloads, Desktop, Documents, and vault Inbox for "runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role." — `fs.find_in` (0.2s)
    > check the user's PC (Downloads + Desktop + Documents + Inbox) for prior versions of this doc — runs in parallel with the vault search
3. ✓ Quality-checking the draft — `quality.check` (3.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
# Runbook: Sudden 5xx Spike on API Gateway

## When to Run  
An alert from the API gateway monitoring system (e.g., Prometheus rule `api_gateway_5xx_rate > 5%`) or a spike in the Grafana dashboard exceeding the 5xx threshold.

## Severity  
P0 – Service degradation affecting all external consumers; must be addressed within 5 minutes.

## Preconditions  
- On‑call DevOps/SRE (Devon) is available.  
- Access to the API gateway configuration (NGINX/Envoy) and load‑balancer logs.  
- Slack channel `#api-alerts` and PagerDuty integration configured.  
- Ability to run `kubectl` and `aws` CLI commands.

## First 5 Minutes – Immediate Actions (Owner: Devon)  
1. **Acknowledge alert** in PagerDuty and post a status update to `#api-alerts`.  
   ```bash
   pagerduty ack <incident_id>
   slack post -c #api-alerts "5xx spike detected – investigating."
   ```  
2. **Check gateway health**:  
   ```bash
   kubectl get pods -n prod -l app=api-gateway
   kubectl logs -n prod -l app=api-gateway --tail=50 | grep -i error
   ```  
3. **Verify traffic patterns**:  
   ```bash
   aws cloudwatch get-metric-statistics --metric-name HTTP5XXCount --namespace AWS/ApiGateway --statistics Sum --period 60 --start-time $(date -u -d '5 min ago' +%FT%TZ) --end-time $(date -u +%FT%TZ)
   ```  
4. **Inspect recent deployments**:  
   ```bash
   git log -n 5 --oneline
   ```  
5. **Ping the gateway** from a control node:  
   ```bash
   curl -I https://api.example.com/health
   ```

## Likely Causes (Owner: Devon)  
| # | Cause | Quick Check | Mitigation |
|---|-------|-------------|------------|
| 1 | **Configuration drift** (e.g., increased timeout, wrong upstream) | `kubectl describe svc api-gateway` | Revert to last known good config or apply corrected config |
| 2 | **Backend service failure** (e.g., microservice crash) | `kubectl get pods -n prod -l app=backend` | Restart failed pods or roll back recent deployment |
| 3 | **Rate limiting / throttling** (e.g., sudden traffic surge) | `aws cloudwatch get-metric-statistics --metric-name Throttles` | Temporarily increase quota or enable request queuing |
| 4 | **Network partition** (e.g., VPC peering issue) | `traceroute api-backend.internal` | Verify VPC route tables and security groups |
| 5 | **Hardware/resource exhaustion** (CPU/memory) | `kubectl top pod -n prod | grep api-gateway` | Scale up replicas or increase node size |

## Mitigation Steps (Owner: Devon)  
1. **Apply a quick rollback** if a recent deployment is suspected:  
   ```bash
   kubectl rollout undo deployment/api-gateway
   ```  
2. **Patch gateway config** to increase timeout or disable aggressive caching:  
   ```bash
   kubectl patch svc api-gateway -p '{"spec":{"externalTrafficPolicy":"Local"}}'
   ```  
3. **Scale replicas** to absorb traffic:  
   ```bash
   kubectl scale deployment/api-gateway --replicas=10
   ```  
4. **Clear load‑balancer cache** (if applicable):  
   ```bash
   aws elbv2 delete-target-group --target-group-arn <arn>
   aws elbv2 create-target-group --name api-gateway --protocol HTTP --port 80 --vpc-id <vpc-id>
   ```  
5. **Deploy a health‑check patch** to the backend to return 200 for `/health` route if not already present.

## Escalation (Owner: Devon → On‑call SRE Lead)  
- If the spike persists after 10 minutes of mitigation, **escalate to the SRE Lead (Sam)** via PagerDuty.  
- Notify the **Product Manager (Priya)** about potential impact on user experience.  
- Update the incident status page with a brief description and ETA.

## All‑Clear Check (Owner: Devon)  
1. **Verify 5xx rate** has dropped below 1% for 5 consecutive minutes.  
   ```bash
   aws cloudwatch get-metric-statistics --metric-name HTTP5XXCount --statistics Sum --period 60 --start-time $(date -u -d '5 min ago' +%FT%TZ) --end-time $(date -u +%FT%TZ)
   ```  
2. **Confirm backend health**: all pods in `Running` state, no crash loops.  
3. **Check logs** for any lingering errors.  
4. **Post resolution** to `#api-alerts` and close the PagerDuty incident.  

## Post‑Mortem (Owner: Devon)  
- Draft a concise post‑mortem within 24 hours.  
- Include root cause, actions taken, and preventive measures.  
- Share with the SRE team and relevant product stakeholders.  

---  
Devon

<details><summary>Log</summary>

```
[2026-06-06T13:18:34.813Z] auto-routed to persona "devops-sre" (score=3, matched=Write a runbook, runbook)
[2026-06-06T13:18:34.814Z] Handling this myself — I'm at least as free as my peers (0 vs 0 jobs in progress).
[2026-06-06T13:18:34.814Z] Working as Neuro — AI agent operator.
[2026-06-06T13:18:52.078Z] Recognised the shape — Tier 2 — your second brain, 2 steps.
[2026-06-06T13:18:52.078Z] Plan ready: 2 steps — Find context for "runbook for responding to a sudden 5xx spike on our API gateway: detection, firs" then draft it.
[2026-06-06T13:18:52.081Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-06-06T13:18:52.081Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-06-06T13:18:52.081Z] Step 1 of 2: Searching your second brain for "runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role."
[2026-06-06T13:18:53.439Z] Step 2 of 2: Looking in your Downloads, Desktop, Documents, and vault Inbox for "runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role."
[2026-06-06T13:18:53.648Z] Wave 1 finished in 1.6s.
[2026-06-06T13:18:53.648Z] All sub-agents finished in 1.6s.
[2026-06-06T13:18:53.661Z] Thinking with openai/gpt-oss-20b:free (~5 510 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-06T13:19:28.418Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-06T13:19:28.422Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-06-06T13:19:28.422Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-06T13:19:28.422Z] Step 4 of 4: Security-scanning the note
[2026-06-06T13:19:28.422Z] Step 3 of 4: Quality-checking the draft
[2026-06-06T13:19:32.315Z] Wave 1 finished in 3.9s.
[2026-06-06T13:19:32.315Z] All sub-agents finished in 3.9s.
[2026-06-06T13:19:32.315Z] Quality check passed (96%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-06T13:19:32.338Z] Saved this workflow as a reusable template: custom-you-are-operating-as-devon-the-devops-sre-bias-tool-choices-.
[2026-06-06T13:19:32.338Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-06-06T13:19:32.340Z] Filed to your second brain → 0-Inbox/202606061319-curated-write-a-runbook-for-responding-to-a-sudden-5xx-spike-on-our-.md.
```
</details>
