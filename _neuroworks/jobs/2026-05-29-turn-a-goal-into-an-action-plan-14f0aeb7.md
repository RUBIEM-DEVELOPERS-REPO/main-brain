---
type: job
title: Turn a goal into an action plan
slug: turn-a-goal-into-an-action-plan-14f0aeb7
created: 2026-05-29T20:37:25.746Z
jobId: 14f0aeb7-cb6a-4da8-9ecc-78440f78a965
status: succeeded
template: custom-operations-coordinator-turn-a-goal-into-an-action-plan
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:32:53.446Z
finishedAt: 2026-05-29T20:37:25.746Z
---

# Turn a goal into an action plan

- **Status:** succeeded
- **Template:** custom-operations-coordinator-turn-a-goal-into-an-action-plan
- **Started:** 2026-05-29T20:32:53.446Z
- **Finished:** 2026-05-29T20:37:25.746Z
- **Title:** Turn a goal into an action plan

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Turn a goal into an action plan\nDescription: Convert an ambiguous goal into a numbered plan — each step with owner, by-when, and done-means."
}
```

## Plan
Default research plan for: Turn the following goal into an executable action plan. Output a numbered list. Each step has: Step / Owner / By when (specific date or N days from today) / Done means (the verification). End with 'Inputs still needed' — list what's unclear that's blocking execution.

Context: Role: Custom
Title: Turn a goal into an action plan
Description: Convert an ambiguous goal into a numbered plan — each ste

### Steps
1. ✓ Researching "Turn the following goal into an executable action plan. Output a numbered list. …" — vault + web — `research.deep` (41.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (171.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.2s)
    > auto-injected: quality score=0.63 (pass=false) — peer review for a second opinion

## Answer
## Action Plan – Turning an Ambiguous Goal into a Concrete Execution Road‑Map

| # | Step (What) | Owner | By When (date or “N days from today”) | Done Means (Verification) |
|---|-------------|-------|--------------------------------------|----------------------------|
| 1 | **Clarify the goal** – Draft a one‑sentence statement of the desired outcome and define measurable success criteria. | Goal Owner (you) | 3 days from today → **2026‑06‑01** | Documented goal statement saved in the project folder and approved by the sponsor. |
| 2 | **Identify stakeholders & resources** – List all people, teams, tools, data, and budget needed. | Project Lead | 5 days from today → **2026‑06‑03** | Stakeholder‑resource matrix (Excel/Notion) shared with the team. |
| 3 | **Break down into deliverables** – Convert the goal into 3‑5 concrete deliverables (e.g., prototype, test report). | Subject‑Matter Expert | 8 days from today → **2026‑06‑06** | Deliverable list with brief descriptions stored in the project repository. |
| 4 | **Create work packages & assign tasks** – For each deliverable, define tasks, dependencies, and owners. | Project Scheduler | 10 days from today → **2026‑06‑08** | Gantt chart or Kanban board showing tasks, owners, start/end dates. |
| 5 | **Set milestones & deadlines** – Choose key dates (e.g., “prototype ready”, “review meeting”). | Project Lead | 12 days from today → **2026‑06‑10** | Milestone calendar added to the shared calendar with notifications. |

**Inputs still needed**

- Precise definition of the overarching goal (desired outcome).  
- Complete list of stakeholders and their roles.  
- Available budget and any resource constraints.  
- Preferred project‑management tool (Gantt, Kanban, etc.).  
- Approval workflow for the final deliverables.  

*Sources: derived from the research output in evidence [1] and the security‑scanned note in evidence [3].*

<details><summary>Log</summary>

```
[2026-05-29T20:32:53.470Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:32:53.479Z] Thinking about the best approach…
[2026-05-29T20:32:53.592Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:32:56.739Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:32:56.739Z] Plan ready: 1 step — Default research plan for: Turn the following goal into an executable action plan. Output a numbered list. Each step has: Step / Owner / By when (specific date or N days from today) / Done means (the verification). End with 'Inputs still needed' — list what's unclear that's blocking execution.

Context: Role: Custom
Title: Turn a goal into an action plan
Description: Convert an ambiguous goal into a numbered plan — each ste.
[2026-05-29T20:32:56.747Z] Step 1 of 1: Researching "Turn the following goal into an executable action plan. Output a numbered list. …" — vault + web
[2026-05-29T20:33:38.208Z] All sub-agents finished in 41.5s.
[2026-05-29T20:33:38.213Z] Thinking with openai/gpt-oss-20b:free (~2 931 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:34:01.500Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:34:01.512Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:34:01.512Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:34:01.512Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:36:52.629Z] Wave 1 finished in 171.1s.
[2026-05-29T20:36:52.629Z] All sub-agents finished in 171.1s.
[2026-05-29T20:36:52.634Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:36:55.883Z] All sub-agents finished in 3.2s.
[2026-05-29T20:36:55.889Z] quality.check failed (score=0.63, issues: The citation for the sources list is incomplete and should include inline citations or references to evidence.; There are no specific dates provided for setting milestones, which could be seen as a gap in detail.) — re-synthesising with the large model
[2026-05-29T20:36:55.896Z] Thinking with openai/gpt-oss-120b:free (~3 564 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:37:25.391Z] quality rescue improved score: 0.63 → 0.93; using the rescued draft
[2026-05-29T20:37:25.391Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:37:25.746Z] Vault commit: done.
```
</details>
