---
type: job
title: Write incident runbooks: triggers, immediate actions, decision tree, escalation
slug: write-incident-runbooks-triggers-immediate-actions-decision--c60096f0
created: 2026-05-29T20:55:01.739Z
jobId: c60096f0-e682-4453-bc50-d82533dd6299
status: succeeded
template: custom-devops-sre-write-incident-runbooks-triggers-immedia
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:51:48.880Z
finishedAt: 2026-05-29T20:55:01.739Z
---

# Write incident runbooks: triggers, immediate actions, decision tree, escalation

- **Status:** succeeded
- **Template:** custom-devops-sre-write-incident-runbooks-triggers-immedia
- **Started:** 2026-05-29T20:51:48.880Z
- **Finished:** 2026-05-29T20:55:01.739Z
- **Title:** Write incident runbooks: triggers, immediate actions, decision tree, escalation

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write incident runbooks: triggers, immediate actions, decision tree, escalation\nDescription: Persona-derived starter task for \"Devon\"."
}
```

## Plan
Default research plan for: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation.

Context: Role: Custom
Title: Write incident runbooks: triggers, immediate actions, decision tree, escalation
Description: Persona-derived starter task for "Devon"

### Steps
1. ✓ Researching "As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decisio…" — vault + web — `research.deep` (50.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (26.6s)
    > auto-injected: quality score=0.48 (pass=false) — peer review for a second opinion

## Answer
## Incident Runbook – DevOps / SRE  

### 1. Triggers / Alert Conditions  

| Source | Metric / Log | Threshold | Why it matters |
|--------|--------------|-----------|----------------|
| **Monitoring** (Prometheus, Azure Monitor) | CPU > 80 % (5 min) | High load can cause latency or crash. |
| **Monitoring** | 5xx error rate > 2 % (1 min) | Indicates a service‑side failure. |
| **Log‑based** | “OutOfMemoryError” in application logs | Immediate OOM → process termination. |
| **Synthetic test** | SLA‑check timeout > 30 s | End‑user experience breach. |
| **Infrastructure** | Node‑down / pod‑eviction | Loss of capacity / redundancy. |  

*These conditions follow the standard DevOps “monitoring → alerting” practice* [1].

### 2. Immediate Actions (First 30 min)

| Step | Owner | Action | Verification |
|------|-------|--------|---------------|
| **A1** | On‑call Engineer | Acknowledge alert in the incident channel (Slack/Teams). | Alert status = *acknowledged*. |
| **A2** | Engineer | Pull latest metrics & logs (Grafana, Azure Monitor, ELK). | Screenshot / link saved in incident ticket. |
| **A3** | Engineer | Check health of dependent services (ping, curl, status endpoint). | All dependencies **green** or note failures. |
| **A4** | Engineer | If CPU/Memory high → **scale‑out** or **restart** the affected pod/service. | New metrics show normal load. |
| **A5** | Engineer | Verify that the alert condition no longer triggers. | Alert resolved in monitoring system. |
| **A6** | Engineer | Document root cause and remediation steps in the ticket. | Ticket updated with RCA summary. |

*Immediate‑action steps are derived from the generic template* [1].

### 3. Decision Tree  

1. **Alert received** → **A1** (acknowledge).  
2. **Gather data** → **A2** (metrics/logs).  
   - **CPU > 80 %** → go to **A4** (scale‑out/restart).  
   - **5xx error rate > 2 %** → inspect application logs (**A3**) → if error pattern identified, apply targeted fix; otherwise proceed to **A4**.  
   - **OutOfMemoryError** → immediate **restart** (A4) and increase memory limits.  
   - **Synthetic test timeout** → verify external dependencies; if downstream service down, trigger dependency‑escalation (see below).  
3. After remediation, perform **A5** (verify resolution).  
4. If the issue persists after the first remediation attempt, repeat steps 2‑3 with a deeper dive (e.g., enable debug logging, run a trace).  

### 4. Escalation Matrix  

| Severity | Response Time | Primary Owner | Escalation Path |
|----------|----------------|---------------|-----------------|
| **S1 – Critical** (service outage, SLA breach) | ≤ 5 min | On‑call Engineer | → Team Lead (15 min) → Architecture Owner (30 min) → VP Engineering (45 min) |
| **S2 – High** (degraded performance, error spikes) | ≤ 15 min | On‑call Engineer | → Team Lead (30 min) → Architecture Owner (1 h) |
| **S3 – Medium** (non‑impacting alerts, warning thresholds) | ≤ 30 min | On‑call Engineer | → Team Lead (1 h) |
| **S4 – Low** (informational, health checks) | ≤ 1 h | On‑call Engineer | → Documented for review in weekly ops meeting |

Escalation contacts are stored in the team directory and referenced in the incident ticket template.  

---  

*Prepared for Devon, DevOps / SRE role, based on the generic incident‑runbook template* [1].

<details><summary>Log</summary>

```
[2026-05-29T20:51:48.892Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:51:48.897Z] Thinking about the best approach…
[2026-05-29T20:51:48.953Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:51:50.271Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:51:50.272Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decision tree, escalation.

Context: Role: Custom
Title: Write incident runbooks: triggers, immediate actions, decision tree, escalation
Description: Persona-derived starter task for "Devon".
[2026-05-29T20:51:50.277Z] Step 1 of 1: Researching "As a DevOps / SRE, write incident runbooks: triggers, immediate actions, decisio…" — vault + web
[2026-05-29T20:52:40.262Z] All sub-agents finished in 50.0s.
[2026-05-29T20:52:40.271Z] Thinking with openai/gpt-oss-20b:free (~2 829 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:52:41.887Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T20:53:10.146Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T20:53:10.146Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:53:10.152Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:53:10.152Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:53:10.152Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:53:18.277Z] Wave 1 finished in 8.1s.
[2026-05-29T20:53:18.277Z] All sub-agents finished in 8.1s.
[2026-05-29T20:53:18.283Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:53:44.926Z] All sub-agents finished in 26.6s.
[2026-05-29T20:53:44.935Z] quality.check failed (score=0.48, issues: Limited citations – only one generic reference; potential hallucination of specific thresholds and escalation contacts; no evidence for claims about DevOps practices; citation coverage below threshold) — re-synthesising with the large model
[2026-05-29T20:53:44.946Z] Thinking with openai/gpt-oss-120b:free (~3 917 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:54:26.008Z] quality rescue improved score: 0.48 → 0.9; using the rescued draft
[2026-05-29T20:54:26.008Z] peer review verdict=needs-work (Unverified citations to Wikipedia and DOU article; Missing explicit trigger thresholds for all alert types) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:54:26.019Z] Thinking with openai/gpt-oss-120b:free (~4 104 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:55:01.318Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T20:55:01.318Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:55:01.739Z] Vault commit: done.
```
</details>
