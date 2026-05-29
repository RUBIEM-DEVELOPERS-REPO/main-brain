---
title: "Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation.

Context: Role: Cust"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation.

Context: Role: Custom
Title: Write incident runbooks: triggers, immediate actions, decision tree, escalation
Description: Persona-derived starter task for "Devon"

**Incident Runbook – DevOps / SRE**  
*(generic template you can copy‑paste and adapt for any service)*  

---

## 1. Triggers / Alert Conditions  

| Source | Metric / Log | Threshold | Why it matters |
|--------|--------------|-----------|----------------|
| **Monitoring** (e.g., Azure Monitor, Prometheus) | CPU > 80 % (5 min) | High load can cause latency or crash. |
| **Monitoring** | 5xx error rate > 2 % (1 min) | Indicates service‑side failure. |
| **Log‑based** | “OutOfMemoryError” in app logs | Immediate OOM → process termination. |
| **Synthetic test** | SLA‑check timeout > 30 s | End‑user experience breach. |
| **Infrastructure** | Node‑down / pod‑eviction | Loss of capacity / redundancy. |

*(The list follows the typical DevOps practice of “monitoring → alerting” described in the Wikipedia overview of DevOps tooling [1] and the DOU article on SRE responsibilities [2].)*  

---

## 2. Immediate Actions (First‑30 min)

| Step | Owner | Action | Verification |
|------|-------|--------|---------------|
| **A1** | On‑call Engineer | Acknowledge alert in the incident channel (Slack/Teams). | Alert status = *acknowledged*. |
| **A2** | Engineer | Pull latest metrics & logs (Grafana, Azure Monitor, ELK). | Screenshot / link saved in incident ticket. |
| **A3** | Engineer | Check health of dependent services (ping, curl, status endpoint). | All dependencies **green** or note failures. |
| **A4** | Engineer | If resource‑saturation (CPU/Memory) → **scale‑out** or **restart** offending pod/VM. | Service returns 200 OK. |
| **A5** | Engineer | If 5xx surge → **rollback** last deployment (GitLab CI/CD, Azure DevOps pipeline). | Version tag reverted, error rate drops. |
| **A6** | Engineer | Document every command & output in the incident ticket. | Audit trail complete. |

*(These actions reflect the “first‑line response” duties of a DevOps engineer – monitoring, quick mitigation, and rollback – as described in the DOU profile of DevOps responsibilities [2].)*  

---

## 3. Decision Tree (Escalation Logic)

```mermaid
flowchart TD
    Start[Alert Received] --> A{Is metric > critical?}
    A -- No --> B[Monitor, no action]
    A -- Yes --> C{Can we self‑remediate?}
    C -- Yes --> D[Apply Immediate Action (A4‑A5)]
    D --> E{Issue resolved?}
    E -- Yes --> F[Close Incident]
    E -- No --> G[Escalate to Tier‑2]
    C -- No --> G
    G --> H[Engage SRE lead / Architecture owner]
    H --> I{Need vendor / infra team?}
    I -- Yes --> J[Create ticket with Cloud/Infra team]
    I -- No --> K[Continue troubleshooting]
    K --> L[Apply deeper fixes (e.g., DB restore, network ACL change)]
    L --> E
```

*Key points*  

* **Tier‑1** (on‑call) handles automated scaling, simple rollbacks.  
* **Tier‑2** (SRE lead) takes over when the issue persists or requires code changes, database restores, or cross‑team coordination.  
* **Tier‑3** (vendor / cloud provider) is involved for platform‑level outages (e.g., Azure region failure).  

---

## 4. Escalation Matrix  

| Severity | Owner (Primary) | Secondary | SLA (Target) |
|----------|----------------|-----------|--------------|
| **P1 – Service‑wide outage** | On‑call SRE | SRE Lead | 15 min acknowledgement, 45 min resolution. |
| **P2 – Degraded performance** | On‑call SRE | Platform Engineer | 30 min ack, 2 h resolution. |
| **P3 – Minor bug / false alarm** | On‑call Engineer | Team Lead | 1 h ack, 4 h resolution. |
| **P4 – Info / maintenance** | Service Owner | N/A | Acknowledge within 4 h. |

*(Severity definitions follow the common DevOps/ITIL practice of aligning response times with impact, as noted in the DevOps methodology overview [1].)*  

---

## 5. Post‑mortem Checklist  

1. **Timeline** – Build a minute‑by‑minute chronology from alert to closure.  
2. **Root Cause** – Identify the single point of failure (code bug, config drift, capacity limit).  
3. **Mitigation** – What was done to stop the incident?  
4. **Prevent‑Future** –  
   * Add alert rule / adjust threshold.  
   * Automate rollback or auto‑scaling if not already.  
   * Update runbook with new steps.  
5. **Communication** – Summarize for stakeholders; publish incident report.  

---

### How to Use This Template  

1. **Copy** the sections into a Confluence / Notion page for the specific service.  
2. **Replace** the generic metrics (CPU, 5xx) with service‑specific KPIs (e.g., queue depth, latency SLA).  
3. **Link** the monitoring dashboards and CI/CD pipelines (Azure DevOps, GitHub Actions) referenced in your environment.  
4. **Assign** owners according to your on‑call rotation.  

---

**References**  

* DevOps definition and tooling categories (monitoring, CI/CD, IaC) – Wikipedia [1].  
* Typical DevOps engineer duties, incident handling, and automation focus – DOU article [2].  

*No vault notes existed for this topic, so the answer relies on the validated web sources above.*

## Web sources
1. [DevOps — Вікіпедія](https://uk.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [Хто такий DevOps і що потрібно знати для роботи на цій позиції | DOU](https://dou.ua/lenta/articles/devops-engineer-career/) _(relevance 10, http)_
3. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=3c9890bdad4a6214151887d5ac806396) _(relevance 7, http)_

## Vault hits at time of research
_(none)_
