---
type: job
title: Design on-call rotation that respects sleep, fairness, and skills coverage
slug: design-on-call-rotation-that-respects-sleep-fairness-and-ski-6e62fe1e
created: 2026-06-01T09:27:44.965Z
jobId: 6e62fe1e-1ec5-47d7-88d0-c82f2e79de0c
status: succeeded
template: custom-devops-sre-design-on-call-rotation-that-respects-sl
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:25:23.867Z
finishedAt: 2026-06-01T09:27:44.964Z
---

# Design on-call rotation that respects sleep, fairness, and skills coverage

- **Status:** succeeded
- **Template:** custom-devops-sre-design-on-call-rotation-that-respects-sl
- **Started:** 2026-06-01T09:25:23.867Z
- **Finished:** 2026-06-01T09:27:44.964Z
- **Title:** Design on-call rotation that respects sleep, fairness, and skills coverage

## Plan
Default research plan for: As a DevOps / SRE, design on-call rotation that respects sleep, fairness, and skills coverage

### Steps
1. ✓ Researching "As a DevOps / SRE, design on-call rotation that respects sleep, fairness, and sk…" — vault + web — `research.deep` (51.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (16.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (34.1s)
    > auto-injected: quality score=0.70 (pass=true) — peer review for a second opinion

## Answer
## On‑Call Rotation Design – Sleep, Fairness, and Skills Coverage  

**1. Core principles**  
- **Sleep protection** – Include a “quiet window” after a shift (e.g., 12 h) before the next on‑call assignment to allow rest. Implement this via the scheduling tool’s blackout feature.  
- **Fairness** – Distribute primary and secondary shifts evenly across engineers within a fixed cycle (commonly 4‑ or 6‑week). Record assignments in a shared calendar or on‑call platform to monitor balance.  
- **Skills coverage** – Maintain a matrix that maps each service/component to required expertise (Kubernetes, Terraform, monitoring, etc.). Assign at least one primary and one secondary engineer whose skill‑sets complement each other for every shift.  
- **Fatigue mitigation** – Limit the number of consecutive on‑call weeks (often ≤ 2) and schedule a recovery day after a high‑severity incident.  

**2. Practical blueprint**  
- **Cycle definition** – Example: a 4‑week cycle with one primary week, one secondary week, and two off weeks.  
- **Skill matrix** – List services, required skills, and engineer ownership; update quarterly.  
- **Scheduling tool** – Use PagerDuty, Opsgenie, or a custom script that enforces the quiet window and max‑consecutive‑week rule.  
- **Shift hand‑off** – Auto‑generate a run‑book checklist at shift start; require a brief post‑mortem at shift end.  
- **Metrics** – Track on‑call hours, incident count, MTTR, and fairness variance (target ±10 %). Review these metrics each quarter.  

**3. Sample layout (4‑engineer team)**  

| Week | Primary | Secondary |
|------|---------|-----------|
| 1 | Engineer A | Engineer B |
| 2 | Engineer B | Engineer C |
| 3 | Engineer C | Engineer D |
| 4 | Engineer D | Engineer A |

*Adapt the matrix and cycle length to match team size and service complexity.*  

[1] (research.deep) – provides the overarching framework for sleep protection, fairness, and skills coverage.

<details><summary>Log</summary>

```
[2026-06-01T09:25:23.873Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:25:24.569Z] Thinking about the best approach…
[2026-06-01T09:25:24.606Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:25:26.603Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:25:26.604Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, design on-call rotation that respects sleep, fairness, and skills coverage.
[2026-06-01T09:25:26.608Z] Step 1 of 1: Researching "As a DevOps / SRE, design on-call rotation that respects sleep, fairness, and sk…" — vault + web
[2026-06-01T09:26:17.925Z] All sub-agents finished in 51.3s.
[2026-06-01T09:26:17.925Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:26:17.936Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:26:17.936Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:26:17.937Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:26:34.490Z] Wave 1 finished in 16.6s.
[2026-06-01T09:26:34.490Z] All sub-agents finished in 16.6s.
[2026-06-01T09:26:34.503Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:27:08.597Z] All sub-agents finished in 34.1s.
[2026-06-01T09:27:08.597Z] peer review verdict=needs-work (Possible hallucination of specific buffer rules and source citations; Answer is longer than necessary) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T09:27:08.608Z] Thinking with openai/gpt-oss-120b:free (~4 080 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:27:44.598Z] retry cleared peer review (verdict=good, confidence=0.95); using retry as final answer
[2026-06-01T09:27:44.598Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:27:44.964Z] Vault commit: done.
```
</details>
