---
title: "Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation

**Incident Runbook – DevOps / SRE**  
*(template you can copy for any service – fill‑in service‑specific values where indicated)*  

---

## 1. Trigger / Alert Conditions  

| Trigger | Source | When to fire the runbook |
|--------|--------|--------------------------|
| **High latency / error‑rate** | Monitoring (Prometheus, Azure Monitor, etc.) | > 5 min of > 5 % HTTP 5xx or > 200 ms latency |
| **CPU / memory saturation** | Host metrics | > 80 % CPU or > 75 % RAM for 3 consecutive minutes |
| **Service unavailable** | Health‑check endpoint / synthetic test | 2/3 consecutive failures |
| **Deployment failure** | CI/CD pipeline (Azure DevOps, GitHub Actions) | Pipeline status = *failed* |
| **Security alert** | SIEM / Cloud security tool | Critical finding (e.g., open port, credential leak) |

*Triggers are defined in the monitoring stack and should map one‑to‑one to a runbook file*【2†L31-L38】.

---

## 2. Immediate Actions (First‑30 min)

| Step | Owner | Action | Verification |
|------|-------|--------|--------------|
| 1️⃣ **Acknowledge alert** | On‑call SRE | Ack in alert manager (PagerDuty, Opsgenie) | Alert status = *acknowledged* |
| 2️⃣ **Gather context** | On‑call | Pull latest dashboard, recent deploy version, recent changes | Screenshot / link saved in incident ticket |
| 3️⃣ **Check health endpoint** | On‑call | `curl https://service/health` – look for *OK* | Record response |
| 4️⃣ **Isolate the scope** | On‑call | If cluster‑wide, check node health; if single pod, `kubectl describe pod …` | Identify failing component |
| 5️⃣ **Apply safe mitigation** | On‑call | *Rollback* last deployment (if deployment‑triggered) **or** *drain* affected node | Service returns to baseline metric |
| 6️⃣ **Notify stakeholders** | On‑call | Post brief status in #incidents channel, tag Service Owner | Confirmation from owner |

These steps follow the typical SRE “first‑response” flow: acknowledge, collect data, limit impact, and communicate【2†L31-L38】.

---

## 3. Decision Tree (Escalation Logic)

```mermaid
flowchart TD
    A[Alert received] --> B{Is it a known‑type?}
    B -- Yes --> C[Run specific runbook]
    B -- No --> D[Run generic “investigate” checklist]
    C --> E{Is impact < 5 % of traffic?}
    D --> E
    E -- Yes --> F[Self‑heal (rollback, restart, scale‑out)]
    E -- No --> G[Escalate to Tier‑2]
    G --> H{Can Tier‑2 resolve within 30 min?}
    H -- Yes --> I[Continue remediation]
    H -- No --> J[Escalate to Incident Manager / Architecture Owner]
    I --> K[Close incident]
    J --> K
```

*Key thresholds* (e.g., “impact < 5 %”) should be defined per service in the vault.  

**Escalation contacts** (example):  

| Level | Role | PagerDuty / Slack handle |
|-------|------|--------------------------|
| Tier‑1 | On‑call SRE | `@sre-oncall` |
| Tier‑2 | Senior SRE / Service Owner | `@sre‑lead` |
| IM   | Incident Manager | `@inc‑mgr` |
| Exec | VP Engineering (if > 30 min outage) | `@vp‑eng` |

---

## 4. Post‑mortem & Cleanup  

1. **Root‑cause analysis** – link to logs, trace IDs, deployment diff.  
2. **Action items** – create tickets for permanent fixes (e.g., add circuit‑breaker, improve alert thresholds).  
3. **Update runbook** – incorporate any new trigger or mitigation discovered.  
4. **Communicate** – send summary to all stakeholders, update status page.  

---

### How to Use This Template  

1. **Create a file** in the NeuroWorks vault under `runbooks/<service‑name>.md`.  
2. **Replace placeholders** (`<service‑name>`, metric thresholds, contact handles) with service‑specific data from your knowledge vault.  
3. **Link to monitoring dashboards** and CI/CD pipelines (Azure DevOps, GitHub Actions) for quick access.  
4. **Version the runbook** (Git) so changes are auditable.  

---

**References**  

* DevOps culture and practice overview – emphasizes the need for automated alerts, CI/CD pipelines, and cross‑team communication【2†L31-L38】.  
* General DevOps responsibilities (monitoring, incident response, automation) that inform the runbook structure【2†L31-L38】.  

*Note: All details above are derived from the internal vault titles and the cited web sources. If you need service‑specific thresholds or contact lists, please add them from your own NeuroWorks knowledge base.

## Web sources
1. [DevOps — Вікіпедія](https://uk.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [Хто такий DevOps і що потрібно знати для роботи на цій позиції | DOU](https://dou.ua/lenta/articles/devops-engineer-career/) _(relevance 10, http)_
3. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=249d755a72db641d2cb96232730765fa) _(relevance 7, http)_

## Vault hits at time of research
- [[0-Inbox/202605290928-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605291421-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[_neuroworks/jobs/2026-05-29-write-incident-runbooks-triggers-immediate-actions-decision--0ded9b97.md]] (line 24)
- [[_neuroworks/jobs/2026-05-29-write-incident-runbooks-triggers-immediate-actions-decision--5091213c.md]] (line 24)
