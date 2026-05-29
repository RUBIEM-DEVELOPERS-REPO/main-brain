---
type: job
title: Triage inbox into act-now / read-later / ignore — with explicit reasoning
slug: triage-inbox-into-act-now-read-later-ignore-with-explicit-re-a8acef2c
created: 2026-05-29T09:33:11.664Z
jobId: a8acef2c-ad67-4997-9aae-1d6c0caf9e5f
status: succeeded
template: custom-executive-assistant-triage-inbox-into-act-now-read-later-ign
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:31:32.589Z
finishedAt: 2026-05-29T09:33:11.664Z
---

# Triage inbox into act-now / read-later / ignore — with explicit reasoning

- **Status:** succeeded
- **Template:** custom-executive-assistant-triage-inbox-into-act-now-read-later-ign
- **Started:** 2026-05-29T09:31:32.589Z
- **Finished:** 2026-05-29T09:33:11.664Z
- **Title:** Triage inbox into act-now / read-later / ignore — with explicit reasoning

## Plan
Default research plan for: As a Executive Assistant, triage inbox into act-now / read-later / ignore — with explicit reasoning

### Steps
1. ✓ Researching "As a Executive Assistant, triage inbox into act-now / read-later / ignore — with…" — vault + web — `research.deep` (15.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.0s)
    > auto-injected: quality score=0.75 (pass=false) — peer review for a second opinion

## Answer
## Executive Assistant Inbox Triage Framework  

**Objective** – Provide a clear, actionable method for sorting incoming email into three buckets:  

1. **Act‑Now** – Requires immediate attention or a time‑critical response.  
2. **Read‑Later** – Important but not urgent; can be scheduled for later review.  
3. **Ignore** – Spam, irrelevant, or informational messages that do not require a response.

### Proposed Triage Process  

| Step | Action | Reasoning |
|------|--------|-----------|
| 1. Scan Subject & Sender | Identify high‑priority senders (e.g., CEO, key clients) and keywords such as “Urgent,” “Deadline,” “ASAP.” | Directly signals time‑sensitivity; reduces risk of missing critical items. |
| 2. Evaluate Content Quickly | Open the email and look for actionable items, dates, or requests. | Determines whether the email demands an immediate reply or can be deferred. |
| 3. Categorize | • **Act‑Now**: Requires response within ≤ 2 hours or contains a deadline within 24 hours.<br>• **Read‑Later**: Valuable information or tasks with a deadline beyond 24 hours.<br>• **Ignore**: Purely informational, newsletters, or obvious spam. | Aligns triage with the Eisenhower matrix principle (urgent vs. important). |
| 4. Flag & Schedule | Use the email client’s flag or label system: red for **Act‑Now**, yellow for **Read‑Later**, gray for **Ignore**. Then add **Act‑Now** items to the day’s task list; schedule **Read‑Later** items in the calendar. | Provides visual cues and integrates with existing workflow tools. |
| 5. Review Daily | At the start of each workday, process all **Act‑Now** items; at midday, reassess **Read‑Later** items; periodically purge **Ignore** folder. | Ensures nothing falls through the cracks and maintains inbox hygiene. |

### Rationale  

- **Time‑sensitivity** is the primary driver for the **Act‑Now** bucket; immediate responses protect executive reputation and keep projects on schedule.  
- **Strategic importance** without urgency belongs in **Read‑Later**, allowing the assistant to allocate focused time later.  
- **Noise reduction** via the **Ignore** bucket prevents distraction and conserves cognitive bandwidth.

---

*No evidence in the provided sources describes an executive‑assistant inbox‑triage method or the three categories requested. Additional references on email‑management best practices (e.g., Eisenhower matrix, GTD) would enable a more evidence‑grounded recommendation.*

<details><summary>Log</summary>

```
[2026-05-29T09:31:32.599Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:31:33.489Z] Thinking about the best approach…
[2026-05-29T09:31:33.519Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:31:36.442Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:31:36.443Z] Plan ready: 1 step — Default research plan for: As a Executive Assistant, triage inbox into act-now / read-later / ignore — with explicit reasoning.
[2026-05-29T09:31:36.448Z] Step 1 of 1: Researching "As a Executive Assistant, triage inbox into act-now / read-later / ignore — with…" — vault + web
[2026-05-29T09:31:51.854Z] All sub-agents finished in 15.4s.
[2026-05-29T09:31:51.854Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:31:51.861Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:31:51.861Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:31:51.861Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:31:56.621Z] Wave 1 finished in 4.8s.
[2026-05-29T09:31:56.621Z] All sub-agents finished in 4.8s.
[2026-05-29T09:31:56.624Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:32:00.670Z] All sub-agents finished in 4.0s.
[2026-05-29T09:32:00.677Z] quality.check failed (score=0.75, issues: does not provide requested triage method or reasoning; does not match task expectation of actionable guidance) — re-synthesising with the large model
[2026-05-29T09:32:00.685Z] Thinking with openai/gpt-oss-120b:free (~2 963 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:32:29.763Z] quality rescue improved score: 0.75 → 0.89; using the rescued draft
[2026-05-29T09:32:29.763Z] peer review verdict=bad (Does not provide a triage method as requested; Fails to address the task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:32:29.770Z] Thinking with openai/gpt-oss-120b:free (~3 113 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:33:09.113Z] retry verdict=bad and quality not improved (0.84 ≤ 0.89); keeping the rescued/original draft
[2026-05-29T09:33:09.113Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:33:11.664Z] Vault commit: done.
```
</details>
