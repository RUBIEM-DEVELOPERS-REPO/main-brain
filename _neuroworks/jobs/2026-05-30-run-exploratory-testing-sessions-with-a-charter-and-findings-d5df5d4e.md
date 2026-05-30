---
type: job
title: Run exploratory testing sessions with a charter and findings log
slug: run-exploratory-testing-sessions-with-a-charter-and-findings-d5df5d4e
created: 2026-05-30T18:09:32.840Z
jobId: d5df5d4e-2751-40f3-8f12-40dd4dae8837
status: succeeded
template: custom-qa-engineer-run-exploratory-testing-sessions-with-a-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:07:29.943Z
finishedAt: 2026-05-30T18:09:32.840Z
---

# Run exploratory testing sessions with a charter and findings log

- **Status:** succeeded
- **Template:** custom-qa-engineer-run-exploratory-testing-sessions-with-a-
- **Started:** 2026-05-30T18:07:29.943Z
- **Finished:** 2026-05-30T18:09:32.840Z
- **Title:** Run exploratory testing sessions with a charter and findings log

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Run exploratory testing sessions with a charter and findings log\nDescription: Persona-derived starter task for \"Quinn\"."
}
```

## Plan
Default research plan for: As a QA Engineer, run exploratory testing sessions with a charter and findings log

### Steps
1. ✓ Researching "As a QA Engineer, run exploratory testing sessions with a charter and findings l…" — vault + web — `research.deep` (13.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (19.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.1s)
    > auto-injected: quality score=0.39 (pass=false) — peer review for a second opinion

## Answer
## Exploratory‑Testing Charter  

1. **Mission Statement** – Briefly describe the product area or feature under test and the overall goal (e.g., “Validate the checkout flow for usability and error handling”).  
2. **Scope** – List the functional boundaries, platforms, browsers, or configurations to be covered. Exclude out‑of‑scope items to keep the session focused.  
3. **Charter Title** – Give each session a concise name that reflects the hypothesis (e.g., “Cart‑Quantity Edge Cases”).  
4. **Timebox** – Define the duration (commonly 45–90 minutes) and the start/end times.  
5. **Test Ideas / Hypotheses** – Enumerate the specific questions you want to answer (e.g., “What happens when a user enters a negative quantity?”). Use techniques such as pair‑wise, boundary analysis, or user‑story mapping to generate ideas.  
6. **Resources** – Identify required test data, accounts, devices, and any supporting tools (screen recorder, bug tracker).  
7. **Success Criteria** – State what constitutes a “pass” for the session (e.g., no critical crashes, all high‑priority bugs logged).  

## Conducting the Session  

- **Kick‑off (5 min):** Review the charter, confirm scope, and ensure all participants have access to required resources.  
- **Exploration (timebox):** Follow the test ideas, but remain flexible—allow new ideas to emerge. Record observations in real time.  
- **Debrief (5–10 min):** Summarize findings, note any gaps, and decide on follow‑up actions.  

## Findings Log Template  

| # | Observation | Severity (P / M / L) | Repro Steps | Evidence (screenshot / video) | Owner | Status |
|---|-------------|----------------------|-------------|-------------------------------|-------|--------|
| 1 | Description of the issue or insight | P = Critical, M = Major, L = Minor | Step‑by‑step actions that reproduce the behavior | Attach file or link | Assigned engineer | Open / Fixed / Won’t‑Fix |

- **Add entries immediately** during the session to avoid loss of detail.  
- **Prioritize** based on severity and impact on the mission statement.  
- **Link** each finding to the corresponding charter title for traceability.  

## Post‑Session Activities  

1. Review the log with the development team to confirm understanding.  
2. Create formal defect tickets for high‑severity items.  
3. Update the test charter repository with any new test ideas that emerged.  
4. Archive the session recording and findings log for future regression testing.  

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-05-30T18:07:29.952Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:07:30.648Z] Thinking about the best approach…
[2026-05-30T18:07:30.703Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:07:31.949Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:07:31.949Z] Plan ready: 1 step — Default research plan for: As a QA Engineer, run exploratory testing sessions with a charter and findings log.
[2026-05-30T18:07:31.957Z] Step 1 of 1: Researching "As a QA Engineer, run exploratory testing sessions with a charter and findings l…" — vault + web
[2026-05-30T18:07:45.777Z] All sub-agents finished in 13.8s.
[2026-05-30T18:07:45.778Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:07:45.795Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:07:45.795Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:07:45.795Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:08:04.801Z] Wave 1 finished in 19.0s.
[2026-05-30T18:08:04.801Z] All sub-agents finished in 19.0s.
[2026-05-30T18:08:04.810Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:08:09.905Z] All sub-agents finished in 5.1s.
[2026-05-30T18:08:09.913Z] quality.check failed (score=0.39, issues: does not provide requested guidance; fails to address exploratory testing charter and findings log) — re-synthesising with the large model
[2026-05-30T18:08:09.926Z] Thinking with openai/gpt-oss-120b:free (~2 977 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:08:40.154Z] quality rescue improved score: 0.39 → 0.59; using the rescued draft
[2026-05-30T18:08:40.154Z] peer review verdict=bad (Does not provide any guidance on how to run exploratory testing sessions, create a charter, or maintain a findings log; ) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:08:40.160Z] Thinking with openai/gpt-oss-120b:free (~3 140 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:09:32.394Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-30T18:09:32.394Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:09:32.839Z] Vault commit: done.
```
</details>
