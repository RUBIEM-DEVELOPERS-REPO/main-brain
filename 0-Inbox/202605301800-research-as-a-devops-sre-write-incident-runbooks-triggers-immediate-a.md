---
title: "Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation"
created: 2026-05-30
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation

**Incident Runbook – DevOps / SRE**

Below is a concise, reusable template that you can copy for any service (e.g., API gateway, database, CI/CD pipeline).  It follows the core DevOps principles of **continuous monitoring, rapid response, and shared ownership** described in the Azure and Wikipedia sources [1][2].

| Section | What to include | Why it matters |
|---------|----------------|----------------|
| **1. Incident Trigger** | • Alert type (metric breach, error‑rate spike, latency > X ms, health‑check failure)  <br>• Source (Prometheus, CloudWatch, Sentry, custom script) <br>• Severity level (P1‑P4) | Defines the exact condition that should start the runbook, ensuring no false‑positives are acted on. |
| **2. Immediate Actions** | 1. **Acknowledge** alert in the incident‑management tool (PagerDuty, Opsgenie). <br>2. **Gather context** – open the dashboard, pull recent logs, check recent deploys/changes. <br>3. **Validate** – confirm the problem is real (e.g., run a curl request, query a health endpoint). <br>4. **Mitigate** – if a quick fix exists (restart pod, roll back last release, scale out), apply it. | These steps give you a rapid “first‑look” to avoid escalation when a simple remediation works. |
| **3. Decision Tree** | ```mermaid\nflowchart TD\n    A[Alert received] --> B{Is it a false‑positive?}\n    B -- Yes --> C[Close ticket, document]\n    B -- No --> D{Can we mitigate quickly?}\n    D -- Yes --> E[Apply quick fix, monitor]\n    D -- No --> F[Start detailed investigation]\n    F --> G{Is impact > P2?}\n    G -- Yes --> H[Escalate to Tier‑2]\n    G -- No --> I[Continue investigation, update stakeholders]\n``` | A visual decision tree (Mermaid syntax) lets on‑call engineers follow a deterministic path. |
| **4. Detailed Investigation** | • Identify root cause (recent code change, infra drift, external dependency). <br>• Collect evidence (log snippets, trace IDs, metric snapshots). <br>• Run reproducible test (e.g., `kubectl exec` a pod, replay request). | Aligns with the DevOps emphasis on **telemetry, observability and reproducibility** [1]. |
| **5. Resolution & Recovery** | 1. Implement permanent fix (code patch, config change, infrastructure update). <br>2. Verify service health (run synthetic checks, confirm SLAs). <br>3. Document the fix and any rollback steps. | Guarantees the incident is truly resolved and creates a knowledge base for future incidents. |
| **6. Post‑mortem & Learning** | • Write a short post‑mortem (what happened, why, how we fixed it, action items). <br>• Assign owners for each action item. <br>• Update runbook if new triggers or steps were discovered. | Supports the DevOps culture of **continuous improvement** and shared ownership [2]. |
| **7. Escalation Matrix** | | |
| • **Tier‑1 (On‑call)** – Executes steps 1‑4, escalates if impact > P2. | |
| • **Tier‑2 (SRE Lead)** – Takes over at “Escalate to Tier‑2”, performs deep dive, may involve architects. | |
| • **Tier‑3 (Engineering Manager / Architect)** – Approves major changes (e.g., database schema migration) and coordinates cross‑team communication. | |
| • **Incident Commander (optional)** – Central point for stakeholder updates, status page, and post‑mortem coordination. | |

### How to Use the Template
1. **Copy** the table into a markdown file under `runbooks/` (e.g., `runbooks/api-gateway.md`).  
2. **Fill** the *Incident Trigger* row with service‑specific alerts (thresholds, alert names).  
3. **Add** any service‑specific quick‑fix commands in the *Immediate Actions* section.  
4. **Publish** the Mermaid diagram so the on‑call UI can render it (most incident‑management tools support it).  
5. **Link** the runbook from the alert definition so the responder lands directly on the correct steps.

---

**References**

- Azure definition of DevOps stresses “rich telemetry, alerting with response capability and full visibility of applications” [1].  
- Wikipedia notes that DevOps “maximizes predictability, effectiveness, security and maintainability of operational processes” and that runbooks are a key artifact for incident handling [2].

## Web sources
1. [Co je DevOps? Vysvětlení DevOps | Microsoft Azure](https://azure.microsoft.com/cs-cz/resources/cloud-computing-dictionary/what-is-devops/?msockid=1d7e3a44a8986fc92d722d2da9806eae) _(relevance 10, browser)_
2. [DevOps – Wikipedie](https://cs.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
3. [What is DevOps? | Atlassian](https://www.atlassian.com/devops) _(relevance 6, http)_

## Vault hits at time of research
- [[0-Inbox/202605290928-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605291421-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605291927-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
- [[0-Inbox/202605292052-research-as-a-devops-sre-write-incident-runbooks-triggers-immediate-a.md]] (line 2)
