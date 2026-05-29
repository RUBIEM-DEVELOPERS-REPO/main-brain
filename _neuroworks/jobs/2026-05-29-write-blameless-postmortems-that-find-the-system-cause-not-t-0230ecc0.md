---
type: job
title: Write blameless postmortems that find the system cause, not the human
slug: write-blameless-postmortems-that-find-the-system-cause-not-t-0230ecc0
created: 2026-05-29T21:03:29.291Z
jobId: 0230ecc0-c096-4e1a-aac3-7f5a42485697
status: succeeded
template: custom-devops-sre-write-blameless-postmortems-that-find-th
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:55:45.677Z
finishedAt: 2026-05-29T21:03:29.291Z
---

# Write blameless postmortems that find the system cause, not the human

- **Status:** succeeded
- **Template:** custom-devops-sre-write-blameless-postmortems-that-find-th
- **Started:** 2026-05-29T20:55:45.677Z
- **Finished:** 2026-05-29T21:03:29.291Z
- **Title:** Write blameless postmortems that find the system cause, not the human

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write blameless postmortems that find the system cause, not the human\nDescription: Persona-derived starter task for \"Devon\"."
}
```

## Plan
Generate a blameless postmortem guide via LLM.

### Steps
1. ✓ Thinking about it — `ollama.generate` (42.0s) · model `openai/gpt-oss-20b:free`
    > Generate the requested guide directly.
2. ✓ Quality-checking the draft — `quality.check` (23.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.6s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
## Blameless Post‑Mortem Report  

**Incident ID:** [auto‑generated]  
**Date/Time of Occurrence:** [YYYY‑MM‑DD HH:MM UTC]  
**Reported By:** SRE On‑Call Engineer  

### 1. Summary (What Happened)  
At **[time]**, the primary API gateway returned 5xx errors for a sustained period of **≈ 15 minutes**. Monitoring alerts triggered for latency spikes and error‑rate thresholds, prompting the on‑call response. The outage impacted **≈ 12 %** of user traffic across all regions, with downstream services experiencing cascading timeouts.

### 2. Timeline  

| Time (UTC) | Event |
|------------|-------|
| T‑0 | Alert fired – error‑rate > 5 % on gateway. |
| T + 2 min | On‑call acknowledged, began log inspection. |
| T + 5 min | Identified spike in database connection pool exhaustion. |
| T + 7 min | Restarted affected gateway instances; pool reset. |
| T + 12 min | Service restored to normal error‑rate (< 0.5 %). |
| T + 20 min | Post‑incident review initiated. |

### 3. Root Cause Analysis (Why)  

| Contributing Factor | Description |
|---------------------|-------------|
| **Systemic Resource Saturation** | The gateway’s connection pool configuration allowed **max = 200** concurrent DB connections, but a recent traffic surge pushed usage to **≈ 210**, causing pool exhaustion and request failures. |
| **Insufficient Capacity Guardrails** | Autoscaling rules did not account for sudden spikes in DB connection demand, leaving no safety margin. |
| **Lack of Early Warning** | No metric alert existed for **connection‑pool utilization**, so the issue surfaced only after errors manifested. |

These factors reflect **system design and operational gaps**, not individual mistakes, aligning with the principle of focusing on systems rather than people [1][3].

### 4. Corrective Actions  

1. **Re‑configure connection pool** – Reduce max connections to **150** and enable graceful back‑pressure when the pool reaches 80 % utilization.  
2. **Add monitoring alert** – Deploy a threshold alert for **connection‑pool usage > 70 %** to trigger pre‑emptive scaling.  
3. **Update autoscaling policy** – Incorporate DB connection metrics into scaling decisions, ensuring capacity headroom for traffic spikes.  
4. **Document the incident** – Store this post‑mortem in the searchable knowledge base and reference it during future capacity‑planning reviews.  

### 5. Lessons Learned  

- Systemic resource limits must be continuously validated against real‑world traffic patterns.  
- Early‑warning metrics are essential to prevent cascading failures.  
- A blameless approach encourages transparent reporting and rapid remediation.  

---  

*Assumed: The incident involved a typical API gateway and database stack; placeholders (e.g., timestamps, IDs) should be filled with actual data from the incident logs.*

<details><summary>Log</summary>

```
[2026-05-29T20:55:45.736Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:55:45.827Z] Thinking about the best approach…
[2026-05-29T20:55:46.163Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:56:01.889Z] Plan ready: 1 step — Generate a blameless postmortem guide via LLM..
[2026-05-29T20:56:01.898Z] Step 1 of 1: Thinking about it
[2026-05-29T20:56:43.936Z] All sub-agents finished in 42.0s.
[2026-05-29T20:56:43.943Z] Thinking with openai/gpt-oss-20b:free (~2 516 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:57:16.113Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:57:16.117Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:57:16.117Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:57:16.117Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:57:39.714Z] Wave 1 finished in 23.6s.
[2026-05-29T20:57:39.714Z] All sub-agents finished in 23.6s.
[2026-05-29T20:57:39.716Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:57:40.896Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:57:50.302Z] All sub-agents finished in 10.6s.
[2026-05-29T20:57:50.317Z] quality.check failed (score=0.58, issues: Low citation coverage – only one source cited for many claims; Some statements are generic but likely accurate; no major hallucinations) — re-synthesising with the large model
[2026-05-29T20:57:50.328Z] Thinking with openai/gpt-oss-120b:free (~3 133 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T21:03:29.291Z] quality rescue improved score: 0.58 → 0.7; using the rescued draft
```
</details>
