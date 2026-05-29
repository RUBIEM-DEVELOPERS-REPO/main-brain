---
title: "Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation

**Incident Runbook – DevOps / SRE**  
*(Based on standard DevOps principles – shared ownership, automation, rapid feedback [1])*  

---

## 1. Triggers (when to open the runbook)

| Trigger | Description | Typical Metric / Alert |
|---------|-------------|------------------------|
| **Service‑level outage** | End‑user cannot reach the service (HTTP 5xx, DNS failures). | Health‑check failure, synthetic test error. |
| **Performance degradation** | Latency or error‑rate exceeds SLA threshold. | 95th‑percentile latency > X ms, error > Y %. |
| **Deployment failure** | New release causes a rollback or crash loop. | CI/CD pipeline “failed deployment” alert, change‑failure‑rate spike. |
| **Infrastructure alarm** | Node, DB, or network component reports critical state. | CPU > 90 % for >5 min, disk < 10 % free, network packet loss. |
| **Security breach** | Unexpected traffic, credential leak, or vulnerability scan hit. | IDS/IPS alert, anomalous login pattern. |

---

## 2. Immediate Actions (first 15 min)

| Step | Action | Owner | Why |
|------|--------|-------|-----|
| **Acknowledge & page** | Confirm alert, notify on‑call via paging system. | On‑call SRE | Guarantees rapid response (shared ownership). |
| **Gather context** | Pull latest runbook, incident ticket, recent deploy list, and monitoring dashboards. | On‑call SRE | Provides situational awareness. |
| **Stabilise** | If possible, route traffic away (feature flag, load‑balancer cut‑over) or roll back the last change. | On‑call SRE / Platform Engineer | Reduces user impact while investigation continues. |
| **Collect logs & metrics** | Export logs (e.g., Loki, ELK), metrics (Prometheus), and trace data for the affected time window. | On‑call SRE | Evidence for root‑cause analysis. |
| **Communicate status** | Post a brief “Incident started – investigation in progress” note to the status channel. | On‑call SRE | Keeps stakeholders informed (rapid feedback). |

---

## 3. Decision Tree (core logic)

```mermaid
flowchart TD
    A[Alert received] --> B{Is service down?}
    B -- Yes --> C[Attempt automated rollback / traffic shift]
    C --> D{Rollback succeeded?}
    D -- Yes --> E[Monitor for recovery] --> F[Close incident]
    D -- No --> G[Escalate to Tier‑2]
    B -- No --> H{Is latency > SLA?}
    H -- Yes --> I[Throttle traffic / scale out]
    I --> J[Re‑measure] --> K{Improved?}
    K -- Yes --> L[Monitor] --> F
    K -- No --> G
    G --> M[Engage specialist (DB, Network, Security)]
    M --> N[Root‑cause analysis] --> O[Permanent fix]
    O --> F
```

*Key decision points*  

* **Rollback/traffic shift** – use automated CI/CD or load‑balancer scripts.  
* **Scale‑out** – trigger auto‑scaling if metric‑based thresholds breached.  
* **Escalation** – move to Tier‑2 (subject‑matter experts) when automated remediation fails.

---

## 4. Escalation Path

| Level | Who | When to Escalate | Contact Method |
|-------|-----|------------------|----------------|
| **Tier 1** | On‑call SRE | Initial response, simple mitigations. | PagerDuty / Slack. |
| **Tier 2** | Platform/DB/Network specialist | Automated actions fail, or root‑cause requires deep domain knowledge. | Direct call + incident bridge. |
| **Tier 3** | Architecture lead / VP of Engineering | Major outage > 30 min, multiple services impacted, or security incident. | Executive paging, email summary. |
| **External** | Vendor support (cloud provider, SaaS) | Service‑provider outage confirmed or SLA breach. | Support ticket with priority P1. |

Escalation should include: current status, steps taken, metrics, and next recommended action.

---

## 5. Post‑Incident Activities

1. **Post‑mortem (within 24 h)** – Write a blameless report, include timeline, root cause, and “action items”.  
2. **Update runbooks** – Incorporate any new triggers or mitigation steps discovered.  
3. **Metric review** – Verify DORA‑style metrics (MTTR, change‑failure‑rate) reflect the incident outcome.  
4. **Retrospective** – Team discussion on automation gaps, communication, and on‑call load.

---

### References
* DevOps definition and core principles – shared ownership, automation, rapid feedback [1].  

* The vault only contains the research title and a generic job plan; no additional details were available, so the runbook is built from the established DevOps framework.

## Web sources
1. [DevOps - Wikipedia](https://en.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [Što je Devops? Primjeri i karakteristike](https://informatecdigital.com/hr/%C5%A0to-je-devops-primjeri-i-zna%C4%8Dajke/) _(relevance 6, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=25713d3ca7c1679f23372a54a63466a0)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
- [[0-Inbox/202605290928-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[_neuroworks/jobs/2026-05-29-write-incident-runbooks-triggers-immediate-actions-decision--5091213c.md]] (line 24)
