---
type: job
title: Run exploratory testing sessions with a charter and findings log
slug: run-exploratory-testing-sessions-with-a-charter-and-findings-287ec258
created: 2026-05-29T14:26:26.906Z
jobId: 287ec258-4124-4f7f-8388-1dfd1927716d
status: succeeded
template: custom-qa-engineer-run-exploratory-testing-sessions-with-a-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:25:04.751Z
finishedAt: 2026-05-29T14:26:26.906Z
---

# Run exploratory testing sessions with a charter and findings log

- **Status:** succeeded
- **Template:** custom-qa-engineer-run-exploratory-testing-sessions-with-a-
- **Started:** 2026-05-29T14:25:04.751Z
- **Finished:** 2026-05-29T14:26:26.906Z
- **Title:** Run exploratory testing sessions with a charter and findings log

## Plan
Default research plan for: As a QA Engineer, run exploratory testing sessions with a charter and findings log

### Steps
1. ✓ Researching "As a QA Engineer, run exploratory testing sessions with a charter and findings l…" — vault + web — `research.deep` (49.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.6s)
    > auto-injected: quality score=0.70 (pass=true) — peer review for a second opinion

## Answer
**Exploratory‑Testing Session for a QA Engineer**  

Below is a concise, evidence‑based template you can copy‑paste into a notebook, Confluence page, or the NeuroWorks “Findings Log” (the platform’s built‑in note‑taking area). It follows the standard charter‑driven approach that QA teams use to keep sessions focused while still allowing the freedom that makes exploratory testing valuable.

---

## 1. Session Charter  

| Item | Description |
|------|-------------|
| **Mission / Goal** | What you want to learn (e.g., “Validate that the new checkout flow handles edge‑case payment inputs without crashes”). |
| **Scope** | Specific features, pages, or APIs to explore (e.g., “Shopping‑cart page, payment‑method selector, and order‑confirmation API”). |
| **Test Ideas / Heuristics** | Guiding techniques – *boundary analysis, error‑guessing, state‑transition, data‑driven, use‑case walkthroughs* (common exploratory heuristics described in QA literature). |
| **Timebox** | Fixed duration (e.g., 90 min). |
| **Resources** | Test environment, test data, tools (e.g., browser dev tools, API client, NeuroWorks “clawbot” for parallel task dispatch). |
| **Exit Criteria** | When the timebox expires **or** when you have covered all high‑risk ideas, or when a blocker is hit. |

> A charter gives the session a clear purpose while still leaving room for discovery, which is the core of exploratory testing [1](https://www.guru99.com/all-about-quality-assurance.html).

---

## 2. Findings Log (Live Capture)

| Timestamp | Test Step / Action | Observation / Result | Severity / Impact | Evidence (screenshots, logs, URLs) | Follow‑up |
|-----------|-------------------|----------------------|-------------------|-----------------------------------|----------|
| 00:12 | Enter “‑999” as coupon code | UI shows “Invalid coupon” (expected) | – | Screenshot #1 | – |
| 00:27 | Submit payment with expired card | Server returns 500 error, UI freezes | **Critical** – checkout blocked | API response log | Raise defect #1234; add retry handling |
| 00:45 | Rapidly add/remove items (10 × ) | Cart UI lags, occasional duplicate line items | **Major** – data integrity risk | Video clip #2 | Investigate debouncing logic |
| … | … | … | … | … | … |

> Keeping a structured log during the session lets you turn observations into actionable defects later and provides traceability for audit purposes [2](https://cloudqa.io/what-is-qa-testing-the-2025-guide-to-quality-assurance-in-software/).

**Tips for a good log**

* **One line per observation** – makes later triage easy.  
* **Include severity** – use your team’s scale (e.g., Blocker, Critical, Major, Minor).  
* **Attach evidence immediately** – screenshots, console logs, network traces.  
* **Mark “Follow‑up”** with the next action (create ticket, retest, discuss with dev).  

---

## 3. Post‑Session Wrap‑Up  

1. **Review the charter** – Did you meet the goal? Note any gaps.  
2. **Prioritise findings** – Rank by severity & business impact.  
3. **Create tickets** – Export the log rows into your issue tracker (Jira, GitHub, etc.).  
4. **Retrospective note** – What worked well, what needs a different heuristic next time?  

---

### Quick‑Start Checklist (Copy‑Paste)

```markdown
## Exploratory Test Session – Charter
- **Mission:** 
- **Scope:** 
- **Heuristics:** 
- **Timebox:** 
- **Resources:** 
- **Exit Criteria:** 

## Findings Log
| Time | Action | Observation | Severity | Evidence | Follow‑up |
|------|--------|-------------|----------|----------|----------|
|      |        |             |          |          |          |
```

Use this template for every exploratory session. It aligns with industry‑standard QA practice and gives you a repeatable, auditable process for discovering defects quickly.

<details><summary>Log</summary>

```
[2026-05-29T14:25:04.758Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:25:05.854Z] Thinking about the best approach…
[2026-05-29T14:25:05.879Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:25:23.893Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:25:23.893Z] Plan ready: 1 step — Default research plan for: As a QA Engineer, run exploratory testing sessions with a charter and findings log.
[2026-05-29T14:25:23.896Z] Step 1 of 1: Researching "As a QA Engineer, run exploratory testing sessions with a charter and findings l…" — vault + web
[2026-05-29T14:26:13.172Z] All sub-agents finished in 49.3s.
[2026-05-29T14:26:13.172Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:26:13.179Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:26:13.179Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:26:13.179Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:26:22.095Z] Wave 1 finished in 8.9s.
[2026-05-29T14:26:22.095Z] All sub-agents finished in 8.9s.
[2026-05-29T14:26:22.099Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:26:26.651Z] All sub-agents finished in 4.6s.
[2026-05-29T14:26:26.651Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:26:26.906Z] Vault commit: done.
```
</details>
