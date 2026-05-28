---
title: "Research: Outline a runbook for an Express service stuck at high memory in production. Give 5 ordered steps from triage to mitigat"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Outline a runbook for an Express service stuck at high memory in production. Give 5 ordered steps from triage to mitigation.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are nam

**Runbook – Express service “high‑memory” incident (5 ordered steps)**  

| # | Phase & Action | What to do (concise commands / checks) | Why it matters |
|---|----------------|------------------------------------------|----------------|
| 1️⃣ | **Triage – alert capture & context** | • Confirm the alert (Datadog/Prometheus) that shows **process RSS > 80 %** or a “memory‑throttling” alarm.<br>• Open a dedicated incident channel (or PagerDuty incident) and page the on‑call engineer and the service‑owner team.<br>• Pull the latest **deployment tag** and recent **release notes** for the Express app. | Gives the responder all the “who/what/when” up front and eliminates the coordination tax that wastes 10‑15 min of MTTR [2]. |
| 2️⃣ | **Diagnostics – read phase** | • Run a quick heap snapshot: `node --inspect-brk <pid>` → open Chrome DevTools → **Heap Profiler → Take snapshot**.<br>• Query the service’s **memory‑usage metrics** (e.g., `process.memoryUsage()` via a health endpoint) and compare to baseline.<br>• List recent **GC cycles** (`node --trace-gc`) to see if GC is thrashing.<br>• Check for **recent code changes** that introduced large in‑memory caches or un‑released timers. | Identifies whether the leak is code‑level, a runaway request, or a platform issue before any remediation is attempted. |
| 3️⃣ | **Containment – stop further growth** | • If the service is behind a load‑balancer, **drain traffic**: `kubectl rollout pause deployment/<svc>` or set the pod’s readiness gate to *false*.<br>• Optionally **scale up** a replica to keep traffic alive while you work. | Prevents the memory pressure from crashing the pod and buying time for a safe fix. |
| 4️⃣ | **Remediation – write phase** | • **Restart** the offending pod/container (`kubectl rollout restart deployment/<svc>`).<br>• If a specific request pattern is the culprit, add a **rate‑limit / request‑size guard** in the Express middleware.<br>• Deploy a **hot‑fix** that clears the offending cache on start‑up or adds explicit `global.gc()` calls where appropriate.<br>• Verify post‑restart memory stabilises (RSS stays < 70 %). | Clears the leaked memory and adds a short‑term guard to stop immediate recurrence. |
| 5️⃣ | **Post‑mortem & mitigation** | • Record the incident timeline, root cause, and the fix in the runbook log.<br>• Add the discovered **diagnostic commands** (heap snapshot, GC trace) to the runbook’s “Diagnostics” section so future responders can repeat them quickly.<br>• Create a **permanent mitigation**: refactor the leaking module, add automated memory‑leak tests, or adjust the service’s **resource limits** (e.g., `resources.limits.memory`).<br>• Close the incident channel and notify stakeholders. | Turns a one‑off fire‑fight into a living, improved runbook and reduces future MTTR, matching the “living document” principle of effective runbooks [1]. |

*All steps are written as actionable, ordered instructions that any engineer (even without deep domain knowledge) can follow, satisfying the core elements of a well‑structured runbook [1].*

## Web sources
1. [What is a Runbook? Improve Efficiency and Incident Response | Cortex](https://www.cortex.io/post/keep-calm-and-use-the-runbook) _(relevance 15, browser)_
2. [How to build automated runbooks that reduce MTTR by 50% | Blog | incident.io](https://incident.io/blog/automated-runbook-guide) _(relevance 10, http)_
3. [How to Create Effective Runbooks](https://oneuptime.com/blog/post/2026-02-02-effective-runbooks/view) _(relevance 8, http)_

## Vault hits at time of research
_(none)_
