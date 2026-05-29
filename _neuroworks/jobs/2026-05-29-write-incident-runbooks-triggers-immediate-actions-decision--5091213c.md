---
type: job
title: Write incident runbooks: triggers, immediate actions, decision tree, escalation
slug: write-incident-runbooks-triggers-immediate-actions-decision--5091213c
created: 2026-05-29T09:29:40.281Z
jobId: 5091213c-4c44-4a08-b294-90a4e7b4ef84
status: succeeded
template: custom-devops-sre-write-incident-runbooks-triggers-immedia
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:28:02.482Z
finishedAt: 2026-05-29T09:29:40.281Z
---

# Write incident runbooks: triggers, immediate actions, decision tree, escalation

- **Status:** succeeded
- **Template:** custom-devops-sre-write-incident-runbooks-triggers-immedia
- **Started:** 2026-05-29T09:28:02.482Z
- **Finished:** 2026-05-29T09:29:40.281Z
- **Title:** Write incident runbooks: triggers, immediate actions, decision tree, escalation

## Plan
Default research plan for: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation

### Steps
1. ✓ Researching "As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decisio…" — vault + web — `research.deep` (49.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.4s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion

## Answer
## Incident‑Response Runbook (DevOps / SRE)

### 1. Triggers / Alert Conditions
- **Metric thresholds** – e.g., CPU > 90 % for 5 min, latency > 2 × baseline, error‑rate > 5 %【1】.  
- **Log‑pattern alerts** – e.g., “OutOfMemory”, “CircuitBreakerOpen”【1】.  
- **Synthetic‑test failures** or **user‑reported incidents**【1】.  

These conditions provide rapid feedback and surface problems early, aligning with the DevOps “bring the pain forward” principle【1】.

### 2. Immediate Actions (First 30 min)
1. **Acknowledge** the alert in the incident‑tracker (PagerDuty, Opsgenie).  
2. **Gather context** – pull the latest dashboards (Grafana, Azure Monitor) and recent deployment history.  
3. **Validate** the alert to rule out false positives.  
4. **Apply a safe‑kill switch** if a runaway process is identified (e.g., scale‑down pod, disable traffic via feature flag)【1】.  

Automation and repeatability reduce manual error, a core DevOps practice【1】.

### 3. Decision Tree
```
Start
 └─ Is alert a metric breach? ── Yes ──► Check recent deploy?
        │                         └─ Yes ──► Rollback?
        │                         └─ No  ──► Investigate config change
        └─ No ──► Is it a log‑pattern alert?
                │
                └─ Yes ──► Correlate with recent code change
                └─ No  ──► Escalate to on‑call lead
```
The tree guides the on‑call engineer through a deterministic set of checks before escalation.

### 4. Escalation Path
| Level | Owner | Trigger | Action |
|-------|-------|---------|--------|
| **L1** | On‑call SRE | Any alert acknowledged | Follow immediate actions; attempt remediation. |
| **L2** | Service Owner / Senior SRE | Issue not resolved within 30 min or requires code rollback | Conduct deeper analysis; coordinate with development. |
| **L3** | Incident Manager / Architecture Lead | Outage > 1 hour or cross‑service impact | Initiate post‑mortem process; notify stakeholders. |
| **L4** | Executive Sponsor | Business‑critical impact or regulatory breach | Activate communication plan; engage legal/compliance. |

Each escalation includes a mandatory hand‑off note in the incident tracker, timestamps, and a concise status summary.

<details><summary>Log</summary>

```
[2026-05-29T09:28:02.490Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:28:03.259Z] Thinking about the best approach…
[2026-05-29T09:28:03.286Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:28:07.567Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:28:07.567Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation.
[2026-05-29T09:28:07.572Z] Step 1 of 1: Researching "As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decisio…" — vault + web
[2026-05-29T09:28:56.799Z] All sub-agents finished in 49.2s.
[2026-05-29T09:28:56.799Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:28:56.804Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:28:56.804Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:28:56.804Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:29:01.530Z] Wave 1 finished in 4.7s.
[2026-05-29T09:29:01.530Z] All sub-agents finished in 4.7s.
[2026-05-29T09:29:01.535Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:29:03.888Z] All sub-agents finished in 2.4s.
[2026-05-29T09:29:03.892Z] quality.check failed (score=0.62, issues: No inline citations provided for claims; Citation markers [1][2] are not linked to evidence) — re-synthesising with the large model
[2026-05-29T09:29:03.897Z] Thinking with openai/gpt-oss-120b:free (~3 382 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:29:40.003Z] quality rescue improved score: 0.62 → 0.74; using the rescued draft
[2026-05-29T09:29:40.003Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:29:40.281Z] Vault commit: done.
```
</details>
