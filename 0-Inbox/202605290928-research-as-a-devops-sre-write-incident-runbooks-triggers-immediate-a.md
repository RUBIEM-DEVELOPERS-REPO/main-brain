---
title: "Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation

**Incident‑Response Runbook (DevOps / SRE)**  

| Section | What to include | Why it matters (evidence) |
|---------|----------------|---------------------------|
| **1. Triggers / Alert Conditions** | • Metric thresholds (e.g., CPU > 90 % for 5 min, latency > 2 × baseline, error‑rate > 5 %).  <br>• Log‑pattern alerts (e.g., “OutOfMemory”, “CircuitBreakerOpen”).  <br>• Synthetic‑test failures or user‑reported incidents. | DevOps stresses **rapid feedback** and automation to detect problems early — the “bring the pain forward” principle [1]. |
| **2. Immediate Actions (First‑30 min)** | 1. **Acknowledge** alert in the incident‑tracker (PagerDuty, Opsgenie).  <br>2. **Gather context** – pull latest dashboards (Grafana, Azure Monitor) and recent deploy history.  <br>3. **Validate** the alert (check if it’s a false positive).  <br>4. **Apply safe‑kill switch** if a runaway process is identified (e.g., scale‑down pod, stop traffic via feature flag). | The first response must be **automated and repeatable** to reduce manual error, a core DevOps practice [2]. |
| **3. Decision Tree** | ```text                                                                                 \nStart → Is alert a metric breach? ──Yes──► Check recent deploy? ──Yes──► Rollback? \n                         │                         │                         │                         │ \n                         No                      No                        No \n                         │                         │                         │                         │ \n   Is it a log‑pattern? ──Yes──► Is service healthy in prod? ──No──► Restart service? \n                         │                         │                         │ \n                         No                      Yes──► Open ticket for deeper analysis \n``` | A **clear branching logic** prevents “analysis paralysis” and aligns with the DevOps principle of shared ownership and rapid decision‑making [1]. |
| **4. Escalation Matrix** | • **Level 1 (SRE on‑call)** – performs steps 1‑3, attempts automated remediation. <br>• **Level 2 (Service Owner / Senior Engineer)** – if remediation fails or impact > X users, approve rollback or infrastructure change. <br>• **Level 3 (Architecture / Incident Commander)** – for multi‑service outages, regulatory impact, or when MTTR exceeds SLA. <br>• **Level 4 (Management / Communications)** – if public‑facing outage > 30 min, trigger status page & stakeholder notification. | Escalation reflects the **shared‑ownership** model and ensures the right expertise is applied at the right time [1]. |
| **5. Post‑mortem & Continuous Improvement** | 1. Record timeline, root‑cause, actions taken, and metrics (MTTR, change‑failure rate).  <br>2. Update runbook with any new triggers or remediation steps.  <br>3. Feed findings into **DORA** metrics (e.g., change‑failure rate, failed‑deployment recovery time) to track reliability improvements [1]. | DevOps treats incidents as learning opportunities; measuring **Mean Time to Recover** (now “Failed Deployment Recovery Time”) is a standard reliability metric [1]. |

### Quick‑Reference Checklist (First 15 min)

1. **Acknowledge** alert → set status “Investigating”.  
2. **Pull** latest dashboards (CPU, latency, error‑rate).  
3. **Check** if a deployment occurred in the last 30 min.  
4. **Run** health‑check script (`/usr/local/bin/healthcheck.sh`).  
5. **If** unhealthy → **restart** pod/service or **enable** feature‑flag rollback.  
6. **Document** each step in the incident ticket.  

### How to Keep the Runbook Fresh

- Schedule a **monthly review** aligned with sprint retrospectives.  
- Automate **linking** of incident tickets to DORA dashboards so that any increase in change‑failure rate automatically flags the runbook for revision.  

*All recommendations are grounded in core DevOps principles of automation, shared ownership, rapid feedback, and measurable reliability (e.g., DORA metrics) as described in the literature [1][2].*

## Web sources
1. [DevOps - Wikipedia](https://en.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [DevOps Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/devops/devops-tutorial/) _(relevance 10, http)_
3. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=1dcce57ce041662f2af2f214e1d267a6) _(relevance 7, http)_

## Vault hits at time of research
_(none)_
