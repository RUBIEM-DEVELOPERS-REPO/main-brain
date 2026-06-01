---
type: job
title: Write blameless postmortems that find the system cause, not the human
slug: write-blameless-postmortems-that-find-the-system-cause-not-t-d7a9c62c
created: 2026-06-01T09:29:16.043Z
jobId: d7a9c62c-392c-4374-aca6-6db2ad4e8155
status: succeeded
template: custom-devops-sre-write-blameless-postmortems-that-find-th
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:27:47.266Z
finishedAt: 2026-06-01T09:29:16.043Z
---

# Write blameless postmortems that find the system cause, not the human

- **Status:** succeeded
- **Template:** custom-devops-sre-write-blameless-postmortems-that-find-th
- **Started:** 2026-06-01T09:27:47.266Z
- **Finished:** 2026-06-01T09:29:16.043Z
- **Title:** Write blameless postmortems that find the system cause, not the human

## Plan
Default research plan for: As a DevOps / SRE, write blameless postmortems that find the system cause, not the human

### Steps
1. ✓ Researching "As a DevOps / SRE, write blameless postmortems that find the system cause, not t…" — vault + web — `research.deep` (76.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (9.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**How to Write a Blameless Post‑mortem that Finds the System Cause (Not the Human)**  

| Step | What to do | Why it matters (system‑focus) | Evidence |
|------|------------|------------------------------|----------|
| **1. Gather immutable data first** | Pull logs, metrics, traces, alerts, and configuration snapshots from the time window of the incident. Use tools that store data in write‑once storage (e.g., Prometheus, Grafana, cloud‑provider audit logs). | Raw data shows *what* actually happened, removing reliance on memory or anecdote. | [1] “Monitoring helps track system performance and detect issues early using metrics, logs and alerts.” |
| **2. Re‑create the timeline automatically** | Build a timeline from timestamps in the collected data (deployment events, scaling actions, network changes). Prefer scripts or CI/CD pipelines that can generate this timeline without manual entry. | An objective timeline highlights the sequence of system events that led to failure. | [1] “Automation is a core principle for achieving DevOps success.” |
| **3. Identify the *system* trigger** | Look for the first abnormal metric or alert that deviated from the baseline (e.g., sudden CPU spike, failed health‑check, config drift). Ask: *Which component behaved unexpectedly?* | The “first abnormal signal” is the technical root cause; human actions are only relevant insofar as they produced that signal. | [2] DevOps emphasizes “shared ownership” and “rapid feedback” rather than blame. |
| **4. Trace the causal chain** | Use “five whys” on the system trigger, but each “why” must be answered with a technical artifact (e.g., “Why did CPU spike?” → “Because autoscaler launched 20 pods with a memory leak”). | This keeps the analysis grounded in system behavior, not intent. | [1] “System Monitoring … detect issues early using metrics, logs and alerts.” |
| **5. Isolate the *human* contribution to the *system* change** | If a human‑initiated change (code push, config edit) appears in the chain, describe it as a *change* rather than a *mistake*: *“A deployment introduced version X of service Y, which lacked a circuit‑breaker.”* | Framing the change as a design/implementation decision encourages learning and future safeguards. | [2] DevOps culture promotes “shared ownership” and avoids “top‑down prescriptive” blame. |
| **6. Recommend concrete system fixes** | For each root‑cause node, propose a measurable improvement (e.g., add latency‑based health‑checks, enforce canary deployments, tighten IaC validation). Include a **definition of done** for the fix. | Actionable, system‑level fixes reduce recurrence without targeting individuals. | [1] “Automation … reduces manual errors and improves reliability.” |
| **7. Publish the post‑mortem in a blameless format** | Use a template that separates *What Happened*, *Root Cause (System)*, *Contributing Factors (System)*, *Action Items*, and *Learnings*. Highlight the system cause in the headline. | A consistent, neutral format reinforces the cultural norm of blamelessness. | [2] “Shared ownership, workflow automation, and rapid feedback” are core DevOps principles. |
| **8. Close the loop** | Verify that each action item is implemented, tested, and reflected in monitoring/alerting. Add the new checks to the automated pipeline so the same failure is caught early next time. | Closing the loop turns the post‑mortem into a preventive system improvement. | [1] “CI/CD automates the process of building, testing, and deploying… making releases faster and more reliable.” |

### Quick Template (Markdown)

```markdown
## Incident Summary
- **Date/Time:** …
- **Service(s) impacted:** …
- **Customer impact:** …

## Timeline (auto‑generated)
| Time | Event | Source |
|------|-------|--------|
| …    | …     | …      |

## System Root Cause
- **Trigger:** <metric/alert that first deviated>
- **Causal chain:** <bullet list of system events>

## Contributing System Factors
- Lack of X guardrail
- Missing health‑check for Y
- Configuration drift in Z

## Human‑initiated Changes (as *changes*, not blame)
- Deployment of version X (missing circuit‑breaker)

## Action Items
| Owner | Fix | Due |
|-------|-----|-----|
| …     | …   | …   |

## Learnings & Preventive Measures
- Add automated test for …  
- Enforce IaC validation for …
```

Following these steps keeps the focus on **system behavior**, leverages **automation and monitoring**, and aligns with the **blameless, shared‑ownership culture** described in DevOps literature.

<details><summary>Log</summary>

```
[2026-06-01T09:27:47.273Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:27:47.996Z] Thinking about the best approach…
[2026-06-01T09:27:48.036Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:27:49.155Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:27:49.155Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, write blameless postmortems that find the system cause, not the human.
[2026-06-01T09:27:49.184Z] Step 1 of 1: Researching "As a DevOps / SRE, write blameless postmortems that find the system cause, not t…" — vault + web
[2026-06-01T09:29:05.857Z] All sub-agents finished in 76.7s.
[2026-06-01T09:29:05.857Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:29:05.862Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:29:05.862Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:29:05.863Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:29:15.698Z] Wave 1 finished in 9.8s.
[2026-06-01T09:29:15.698Z] All sub-agents finished in 9.8s.
[2026-06-01T09:29:15.698Z] Quality check passed (80%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-01T09:29:15.698Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:29:16.043Z] Vault commit: done.
```
</details>
