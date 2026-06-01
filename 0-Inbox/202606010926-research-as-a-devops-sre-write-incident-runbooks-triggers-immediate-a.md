---
title: "Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation

**Incident Runbook – DevOps / SRE**  
*(Designed for the NeuroWorks AI‑Workforce platform; all guidance follows internal best‑practice concepts rather than external medical‑EEG products.)*  

---

## 1. Triggers / Alert Conditions  

| Trigger | Typical Source | When to Open Runbook |
|--------|----------------|----------------------|
| **Service‑level health check failure** (HTTP 5xx, latency > 2× SLA) | Prometheus / Azure Monitor alerts | Immediate |
| **Infrastructure alarm** (CPU > 90 % for > 5 min, disk > 85 % full, node‑down) | Azure Monitor, Grafana | Immediate |
| **Deployment error** (failed CI/CD pipeline, change‑failure‑rate spike) | Azure DevOps, GitHub Actions | Immediate |
| **Security event** (unusual login, secret leakage) | Azure Sentinel, Microsoft Defender | Immediate |
| **Customer‑impact report** (support ticket, SLA breach) | Service desk, email bridge | Immediate |

> *Alert routing should use the platform’s built‑in “clawbot” escalation matrix so the first responder is automatically paged.*  

---

## 2. Immediate Actions (First‑30 min)

| Step | Action | Owner | Evidence |
|------|--------|-------|----------|
| **A1 – Acknowledge** | Confirm receipt of alert in the incident channel; add incident ID. | On‑call SRE | – |
| **A2 – Triage** | Verify scope (single node vs. whole service) using dashboards (Prometheus, Grafana). | On‑call SRE | – |
| **A3 – Mitigate** | If possible, apply a quick mitigation: *restart pod*, *scale‑out replica set*, *roll back last deployment*. | On‑call SRE | – |
| **A4 – Gather data** | Pull recent logs, metrics, and recent commits (last 30 min). Store in the incident wiki. | On‑call SRE | – |
| **A5 – Communicate** | Post status update to the stakeholder channel (dev, product, support). | On‑call SRE | – |

*These actions reflect the DevOps principle of rapid feedback and automation (see DevOps overview [1]).*  

---

## 3. Decision Tree (30 min – 2 h)

```mermaid
flowchart TD
    Start[Start – Alert acknowledged] --> T1{Is the service down?}
    T1 -- Yes --> M1[Apply mitigation (restart/scale/rollback)]
    M1 --> R1{Did it restore?}
    R1 -- Yes --> End[Close incident, post‑mortem]
    R1 -- No --> Esc1[Escalate to Tier‑2]
    T1 -- No --> T2{Is metric trending?}
    T2 -- Degrading --> M2[Increase resources / throttle traffic]
    M2 --> R2{Stabilized?}
    R2 -- Yes --> End
    R2 -- No --> Esc1
    Esc1 --> TL[Tier‑2 SRE / Architecture lead]
    TL --> D1{Root cause known?}
    D1 -- Yes --> Fix[Implement permanent fix, test, promote]
    D1 -- No --> D2[Deep dive (trace, heap dump, query logs)]
    D2 --> Fix
```

*Escalation paths follow the platform’s “clawbot” hierarchy (on‑call → Tier‑2 → Architecture lead → Management).*

---

## 4. Escalation Matrix  

| Level | Role | When to Escalate | Contact Method |
|-------|------|------------------|----------------|
| **L1** | On‑call SRE | After 30 min of mitigation attempts without restoration. | PagerDuty / Teams |
| **L2** | Tier‑2 SRE / Platform Engineer | After 1 h of unresolved issue or if root‑cause analysis required. | PagerDuty / direct call |
| **L3** | Architecture Lead / Product Owner | If incident impacts > 5 % of customers or SLA breach > 15 min. | Email bridge + Teams |
| **L4** | Executive / Incident Commander | If outage > 2 h or regulatory impact. | Phone + incident war‑room |

All escalations must be logged in the incident record with timestamps.

---

## 5. Post‑Incident Activities  

1. **Resolution Summary** – What was fixed, why it happened, metrics before/after.  
2. **Root‑Cause Analysis (RCA)** – Use the data collected in A4; link to relevant commit/PR.  
3. **Action Items** –  
   * Automation gaps → add a health‑check or circuit‑breaker.  
   * Documentation → update runbook if new steps were needed.  
   * Monitoring → adjust alert thresholds if false‑positive/negative.  
4. **Review Meeting** – 24 h after closure; include dev, ops, and product leads.  

---

### References  

* DevOps fundamentals – integration, automation, rapid feedback [1].  
* Practical DevOps tooling (CI/CD, monitoring, IaC) described in GeeksforGeeks tutorial [2].  

*All guidance is based on internal NeuroWorks platform conventions and the cited public DevOps sources; no external “NeuroWorks” EEG product information was used.*

## Web sources
1. [DevOps - Wikipedia](https://en.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [DevOps Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/devops/devops-tutorial/) _(relevance 10, http)_
3. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=0601435d6f6963753b8d54366e9562d5) _(relevance 7, http)_

## Vault hits at time of research
- [[0-Inbox/202605290928-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605291421-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605291927-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605292052-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605301800-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
