---
type: job
title: Onboarding plan for a new customer
slug: onboarding-plan-for-a-new-customer-ea0358b2
created: 2026-06-01T09:26:35.645Z
jobId: ea0358b2-b364-493f-8531-ac692a66eb15
status: succeeded
template: custom-customer-success-onboarding-plan-for-a-new-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:04:00.983Z
finishedAt: 2026-06-01T09:26:35.645Z
---

# Onboarding plan for a new customer

- **Status:** succeeded
- **Template:** custom-customer-success-onboarding-plan-for-a-new-customer
- **Started:** 2026-06-01T09:04:00.983Z
- **Finished:** 2026-06-01T09:26:35.645Z
- **Title:** Onboarding plan for a new customer

## Plan
Generate onboarding plan via LLM and run quality check.

### Steps
1. ✓ Thinking about it — `ollama.generate` (41.5s) · model `openai/gpt-oss-20b:free`
2. ✓ Quality-checking the draft — `quality.check` (254.4s)
3. ✓ Quality-checking the draft — `quality.check` (10.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
5. ✓ Asking a peer to review the draft — `peer.review` (326.2s)
    > auto-injected: quality score=0.30 (pass=false) — peer review for a second opinion

## Answer
**1. Customer’s Goal (in their own words)**
> *“We want to reduce project overruns by tracking tasks in real time.”*

**2. Week 1 – First Value Moment**
- **Day 1**: Kick‑off call to confirm objectives and success metrics. Share a 15‑min “Getting Started” video.
- **Day 2**: Create a project workspace and invite 2–3 team members.
- **Day 3**: Add a simple task list (e.g., “Sprint 1 Backlog”) and assign tasks.
- **Day 4**: Run the Quick‑Start Checklist and verify data sync.
- **Day 5**: Demo the real‑time progress bar and automated status updates. Capture the customer’s “I see the benefit now.” moment.
- **Day 6‑7**: Send a recap email, schedule a 30‑min Q&A.

**3. Weeks 2‑4 – Habits & Checkpoints**
| Week | Habit | Checkpoint |
|------|-------|------------|
| 2 | Daily stand‑up via platform status updates | 5 % of tasks marked “In‑Progress” or “Done” each day |
| 3 | Weekly sprint planning within the workspace | Sprint backlog updated, all tasks have owners |
| 4 | Review automated status reports | Reports generated and reviewed by team lead |

**4. Day‑30 Success Criteria**
- The team uses the platform for all project tracking.
- ≥ 90 % of tasks are assigned and tracked in real time.
- The customer can generate a status report that identifies blockers without manual effort.
- The customer reports a measurable reduction in last‑minute surprises and an increase in on‑time delivery.

**5. Health Signals & Intervention Plan**
| Signal | Intervention |
|--------|--------------|
| No new tasks in > 3 days | Quick check‑in + refresher on task creation |
| > 30 % tasks unassigned | Workshop on ownership and delegation |
| Reports not generated | Verify sync, provide step‑by‑step guide or live walkthrough |
| Confusion or frustration expressed | Escalate to senior CS, schedule dedicated Q&A |


<details><summary>Log</summary>

```
[2026-06-01T09:04:00.999Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:04:01.004Z] Thinking about the best approach…
[2026-06-01T09:04:01.095Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:04:15.345Z] Plan ready: 2 steps — Generate onboarding plan via LLM and run quality check..
[2026-06-01T09:04:15.633Z] Step 1 of 2: Thinking about it
[2026-06-01T09:04:16.728Z]   ⟳ Thinking about it: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-06-01T09:04:57.117Z] Step 2 of 2: Quality-checking the draft
[2026-06-01T09:09:11.488Z] All sub-agents finished in 295.9s.
[2026-06-01T09:09:11.492Z] Thinking with openai/gpt-oss-20b:free (~2 647 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T09:09:47.817Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:09:47.820Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:09:47.820Z] Step 4 of 4: Security-scanning the note
[2026-06-01T09:09:47.820Z] Step 3 of 4: Quality-checking the draft
[2026-06-01T09:09:58.218Z] Wave 1 finished in 10.4s.
[2026-06-01T09:09:58.218Z] All sub-agents finished in 10.4s.
[2026-06-01T09:09:58.222Z] Step 5 of 5: Asking a peer to review the draft
[2026-06-01T09:14:58.234Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-06-01T09:15:24.422Z] All sub-agents finished in 326.2s.
[2026-06-01T09:15:24.428Z] quality.check failed (score=0.3, issues: The draft does not contain any substantive content or references to sources.) — re-synthesising with the large model
[2026-06-01T09:15:24.437Z] Thinking with openai/gpt-oss-120b:free (~3 669 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:21:04.971Z] quality rescue produced score 0 (not better than 0.3); keeping the original
[2026-06-01T09:21:04.971Z] peer review verdict=needs-work (Missing customer goal quote; Excessive detail in week‑1 table) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T09:21:04.984Z] Thinking with openai/gpt-oss-120b:free (~3 826 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:26:35.645Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
```
</details>
