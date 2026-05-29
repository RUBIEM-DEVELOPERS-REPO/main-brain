---
type: job
title: Tomorrow's work plan
slug: tomorrow-s-work-plan-1dd086d4
created: 2026-05-29T15:11:22.740Z
jobId: 1dd086d4-0429-4270-a320-ab5c0dd5d65e
status: succeeded
template: custom-emp-tomorrow-work-plan
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:09:44.057Z
finishedAt: 2026-05-29T15:11:22.740Z
---

# Tomorrow's work plan

- **Status:** succeeded
- **Template:** custom-emp-tomorrow-work-plan
- **Started:** 2026-05-29T15:09:44.057Z
- **Finished:** 2026-05-29T15:11:22.740Z
- **Title:** Tomorrow's work plan

## Plan
Default research plan for: my tomorrow work plan from today's unfinished tasks. Compute available focus time (subtract meetings + 15-min prep before each). Identify the ONE thing for the protected morning slot. Group by energy (deep / shallow). Explicit 'deferred' section with reasons. End with end-of-day verification — concrete shipped artifacts that define 'done'

### Steps
1. ✓ Researching "my tomorrow work plan from today's unfinished tasks. Compute available focus tim…" — vault + web — `research.deep` (30.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.0s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
**Tomorrow Work Plan – Information Required**

To generate a complete, capacity‑honest plan that includes:

* **Available focus time** (working hours minus meetings + 15 min prep per meeting)  
* **The ONE thing** (protected morning deep‑work slot)  
* **Deep‑work vs. shallow‑work grouping**  
* **Deferred items** with explicit reasons  
* **End‑of‑day verification** (concrete shipped artifacts)

the following data must be supplied:

| Item | Why it is needed |
|------|------------------|
| **List of today’s unfinished tasks** (title + brief description) | Determines what can be carried over, their priority, and whether they are deep or shallow work. |
| **Tomorrow’s meeting schedule** (start time, end time, meeting title) | Allows calculation of total available focus time and insertion of 15‑minute prep blocks before each meeting. |
| **Estimated duration for each task** (or typical time you allocate for task types) | Enables realistic time‑boxing; prevents over‑scheduling beyond the available capacity. |
| **Priority criteria** for selecting the protected‑morning ONE thing (e.g., highest business impact, blocker removal, deadline proximity) | Guides the choice of the single most important deep‑work item. |
| **Any tasks you already know must be deferred** (title + reason) | Populates the “Deferred” section with explicit justification. |
| **Desired end‑of‑day deliverables** (e.g., PR merged, report sent, data uploaded) | Defines concrete “done” artifacts for the verification block. |

**Next step:** Provide the items above in any convenient format (plain list, table, or brief notes). Once received, a structured one‑page plan will be produced following the prescribed layout.

<details><summary>Log</summary>

```
[2026-05-29T15:09:44.064Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:09:44.066Z] Thinking about the best approach…
[2026-05-29T15:09:44.098Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:10:02.106Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T15:10:02.106Z] Plan ready: 1 step — Default research plan for: my tomorrow work plan from today's unfinished tasks. Compute available focus time (subtract meetings + 15-min prep before each). Identify the ONE thing for the protected morning slot. Group by energy (deep / shallow). Explicit 'deferred' section with reasons. End with end-of-day verification — concrete shipped artifacts that define 'done'.
[2026-05-29T15:10:02.130Z] Step 1 of 1: Researching "my tomorrow work plan from today's unfinished tasks. Compute available focus tim…" — vault + web
[2026-05-29T15:10:32.304Z] All sub-agents finished in 30.2s.
[2026-05-29T15:10:32.316Z] Thinking with openai/gpt-oss-20b:free (~3 607 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:10:45.136Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:10:45.142Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:10:45.142Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:10:45.142Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:10:51.903Z] Wave 1 finished in 6.8s.
[2026-05-29T15:10:51.903Z] All sub-agents finished in 6.8s.
[2026-05-29T15:10:51.907Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T15:10:56.941Z] All sub-agents finished in 5.0s.
[2026-05-29T15:10:56.946Z] quality.check failed (score=0.42, issues: Insufficient data to generate plan; Answer does not fulfill user request) — re-synthesising with the large model
[2026-05-29T15:10:56.955Z] Thinking with openai/gpt-oss-120b:free (~4 217 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:11:22.489Z] quality rescue improved score: 0.42 → 0.91; using the rescued draft
[2026-05-29T15:11:22.489Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:11:22.740Z] Vault commit: done.
```
</details>
