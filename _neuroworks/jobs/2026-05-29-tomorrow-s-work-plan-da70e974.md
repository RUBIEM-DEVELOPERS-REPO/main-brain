---
type: job
title: Tomorrow's work plan
slug: tomorrow-s-work-plan-da70e974
created: 2026-05-29T23:40:45.559Z
jobId: da70e974-5c12-4781-80c7-1f56b07bff8c
status: succeeded
template: custom-emp-tomorrow-work-plan
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:37:27.579Z
finishedAt: 2026-05-29T23:40:45.559Z
---

# Tomorrow's work plan

- **Status:** succeeded
- **Template:** custom-emp-tomorrow-work-plan
- **Started:** 2026-05-29T23:37:27.579Z
- **Finished:** 2026-05-29T23:40:45.559Z
- **Title:** Tomorrow's work plan

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Tomorrow's work plan\nDescription: Capacity-honest, prioritised, time-boxed."
}
```

## Plan
Default research plan for: my tomorrow work plan from today's unfinished tasks. Compute available focus time (subtract meetings + 15-min prep before each). Identify the ONE thing for the protected morning slot. Group by energy (deep / shallow). Explicit 'deferred' section with reasons. End with end-of-day verification — concrete shipped artifacts that define 'done'.

Context: Role: Custom
Title: Tomorrow's work plan

### Steps
1. ✓ Researching "my tomorrow work plan from today's unfinished tasks. Compute available focus tim…" — vault + web — `research.deep` (58.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (30.2s)
    > auto-injected: quality score=0.68 (pass=true) — peer review for a second opinion

## Answer
## Tomorrow’s Work Plan – 2026‑05‑30

### 1. Compute Available Focus Time
1. List all meetings with start/end times.
2. Add 15 min prep before each meeting.
3. Subtract total meeting + prep time from 08:00‑17:00 (9 h) to get focus time.

### 2. Identify the ONE Thing
- Pick the earliest deep‑work block (e.g., 08:00‑11:30).
- Assign the highest‑impact unfinished task to this slot.

### 3. Schedule Tasks by Energy
| Time | Energy | Task | Prep | Meeting? | Deferred? | Reason |
|------|--------|------|------|----------|-----------|--------|
| 08:00‑11:30 | Deep | **ONE Thing** | – | N | N | – |
| 11:30‑12:00 | Shallow | Email triage | – | N | N | – |
| 12:00‑13:00 | — | Lunch | – | – | – | – |
| 13:00‑15:30 | Deep | Remaining unfinished tasks (prioritized) | – | N | – | – |
| 15:30‑16:00 | — | Prep for next meeting | 15 min | Y | N | – |
| 16:00‑17:00 | Shallow | Wrap‑up / buffer | – | N | N | – |

*Fill in the table with specific tasks, times, and reasons once you have the data.*

### 4. Deferred Section
| Task | Reason |
|------|--------|
| – | – |

*Add any task that cannot be scheduled and explain why.*

### 5. End‑of‑Day Verification
By 17:00, the following artifacts must exist to consider the day “done”:
1. **Deliverable** – e.g., PRD v2 sent to stakeholder X.
2. **Decision** – e.g., Vendor comparison finalized.
3. **Outcome** – e.g., Inbox cleared of P1 customer threads.

*Update this list with concrete items after the day’s work.*

<details><summary>Log</summary>

```
[2026-05-29T23:37:27.597Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:37:27.609Z] Thinking about the best approach…
[2026-05-29T23:37:27.743Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:37:45.752Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:37:45.752Z] Plan ready: 1 step — Default research plan for: my tomorrow work plan from today's unfinished tasks. Compute available focus time (subtract meetings + 15-min prep before each). Identify the ONE thing for the protected morning slot. Group by energy (deep / shallow). Explicit 'deferred' section with reasons. End with end-of-day verification — concrete shipped artifacts that define 'done'.

Context: Role: Custom
Title: Tomorrow's work plan.
[2026-05-29T23:37:45.757Z] Step 1 of 1: Researching "my tomorrow work plan from today's unfinished tasks. Compute available focus tim…" — vault + web
[2026-05-29T23:38:44.192Z] All sub-agents finished in 58.4s.
[2026-05-29T23:38:44.207Z] Thinking with openai/gpt-oss-20b:free (~3 659 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:38:46.466Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T23:39:16.459Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T23:39:16.459Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:39:16.474Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:39:16.475Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:39:16.475Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:39:24.312Z] Wave 1 finished in 7.8s.
[2026-05-29T23:39:24.312Z] All sub-agents finished in 7.8s.
[2026-05-29T23:39:25.183Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:39:26.146Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T23:39:28.762Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T23:39:55.339Z] All sub-agents finished in 30.2s.
[2026-05-29T23:39:55.339Z] peer review verdict=needs-work (Missing concrete data prevents actual focus‑time calculation and ONE‑thing selection; Template is verbose and contains f) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T23:39:55.351Z] Thinking with openai/gpt-oss-120b:free (~4 847 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:40:37.476Z] retry verdict=needs-work and quality not improved (0.56 ≤ 0.68); keeping the rescued/original draft
[2026-05-29T23:40:37.476Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:40:45.559Z] Vault commit: done.
```
</details>
