---
title: "Curated: Write a runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigat"
created: 2026-06-06
source: clawbot-curation
tags: [curated, agent-output]
persona: devops-sre
quality_score: 0.96
factuality_risk: 0.05
citation_coverage: 1.00
---

# Write a runbook for responding to a sudden 5xx spike on our API gateway: detection, first triage, likely causes, mitigation, escalation, and the all-clear check. Each step needs an owner role.

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



---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.96, 0 vault refs, 1 web sources, 8 GitHub refs.*
