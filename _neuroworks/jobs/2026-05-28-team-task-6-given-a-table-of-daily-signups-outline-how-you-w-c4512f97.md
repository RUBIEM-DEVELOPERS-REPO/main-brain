---
type: job
title: Team task #6: Given a table of daily signups, outline how you would detect
slug: team-task-6-given-a-table-of-daily-signups-outline-how-you-w-c4512f97
created: 2026-05-28T13:36:35.533Z
jobId: c4512f97-0a36-4c27-a2f3-bf1ffcc97abf
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T13:35:19.189Z
finishedAt: 2026-05-28T13:36:35.533Z
---

# Team task #6: Given a table of daily signups, outline how you would detect

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:35:19.189Z
- **Finished:** 2026-05-28T13:36:35.533Z
- **Title:** Team task #6: Given a table of daily signups, outline how you would detect

## Inputs
```json
{
  "task": "(You are operating as Dale, the Data Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGiven a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold you would use, and one failure mode.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Given a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold you would use, and one failure mode.",
  "teamTask": {
    "taskIndex": 5,
    "persona": "data-analyst",
    "route": "explicit"
  },
  "personaId": "data-analyst"
}
```

## Plan
Default research plan for: Given a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold you would use, and one failure mode.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked fo

### Steps
1. ✓ Researching "Given a table of daily signups, outline how you would detect a week-over-week an…" — vault + web — `research.deep` (48.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Week‑over‑Week Anomaly Detection for Daily Sign‑Ups

**Method**  
Apply a rolling‑week Z‑score (week‑over‑week control chart).  
1. For each day *t*, compute the 7‑day total of sign‑ups (days *t‑6 … t*).  
2. Maintain a running mean μ and standard deviation σ of these weekly totals over a baseline window (e.g., the preceding 4 weeks).  
3. Calculate the Z‑score for the current week:  
   \[
   Z_t = \frac{\text{WeeklyTotal}_t - \mu}{\sigma}
   \]  
4. Flag an anomaly when \(|Z_t| > 2\) (≈ 95 % confidence) or, if stricter control is required, \(|Z_t| > 3\) (≈ 99.7 % confidence).  

**Threshold**  
Use \(|Z_t| > 2\) as the primary alert threshold, with an optional secondary alert at \(|Z_t| > 3\) for high‑impact events.  

**Failure Mode**  
If the baseline window contains a recent surge or dip, the mean μ and standard deviation σ become biased, leading to either missed true anomalies (type II error) or false positives (type I error). This “contaminated baseline” problem occurs when the process is non‑stationary.  

*Evidence:* [1]

<details><summary>Log</summary>

```
[2026-05-28T13:35:19.189Z] team-task #6 · persona=data-analyst · route=explicit
[2026-05-28T13:35:19.189Z] **Dale** (Data Analyst) is on this team-task.
[2026-05-28T13:35:19.365Z] Thinking about the best approach…
[2026-05-28T13:35:19.504Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:35:21.830Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:35:21.830Z] Plan ready: 1 step — Default research plan for: Given a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold you would use, and one failure mode.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked fo.
[2026-05-28T13:35:25.531Z] Step 1 of 1: Researching "Given a table of daily signups, outline how you would detect a week-over-week an…" — vault + web
[2026-05-28T13:36:14.364Z] All sub-agents finished in 48.8s.
[2026-05-28T13:36:14.371Z] Thinking with openai/gpt-oss-20b:free (~3 022 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:36:26.849Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:36:26.851Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:36:26.851Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:36:26.851Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:36:26.851Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:36:28.037Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:36:35.533Z] Wave 1 finished in 8.7s.
[2026-05-28T13:36:35.533Z] All sub-agents finished in 8.7s.
[2026-05-28T13:36:35.533Z] Quality check passed (95%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
