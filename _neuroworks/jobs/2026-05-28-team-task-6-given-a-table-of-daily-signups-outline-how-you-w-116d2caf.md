---
type: job
title: Team task #6: Given a table of daily signups, outline how you would detect
slug: team-task-6-given-a-table-of-daily-signups-outline-how-you-w-116d2caf
created: 2026-05-28T13:27:39.402Z
jobId: 116d2caf-1104-4f89-8650-f8f8785482c5
status: succeeded
template: general-task
persona: none
personaName: 
startedAt: 2026-05-28T13:26:08.880Z
finishedAt: 2026-05-28T13:27:39.402Z
---

# Team task #6: Given a table of daily signups, outline how you would detect

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:26:08.880Z
- **Finished:** 2026-05-28T13:27:39.402Z
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
1. ✓ Researching "Given a table of daily signups, outline how you would detect a week-over-week an…" — vault + web — `research.deep` (57.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (3.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Week‑over‑Week Anomaly Detection for Daily Sign‑Ups

**Method**  
Apply a *Week‑over‑Week Z‑Score* (weekly‑change control chart).  
1. Aggregate daily counts into weekly totals (Mon‑Sun).  
2. Compute the week‑over‑week change Δᵢ = (Wᵢ – Wᵢ₋₁)/Wᵢ₋₁.  
3. Estimate the baseline distribution of Δ over a rolling window of the last 4–8 weeks, obtaining mean μ and standard deviation σ.  
4. Calculate the Z‑score for the current week: Zᵢ = (Δᵢ – μ)/σ.  
5. Flag an anomaly when |Zᵢ| exceeds the chosen threshold.  

**Threshold**  
|Z| > 2 (≈ 95 % confidence) is a common, interpretable rule; a stricter |Z| > 3 can be used for higher‑risk contexts.  

**Failure Mode**  
If recent weeks contain a genuine upward trend (e.g., a marketing campaign), the rolling baseline σ inflates, masking a true spike; the method may miss the anomaly because the change appears “normal” relative to the already‑elevated variance. Detrending or a robust baseline (median absolute deviation) can mitigate this.  

*Evidence: [1]*

<details><summary>Log</summary>

```
[2026-05-28T13:26:08.880Z] team-task #6 · persona=data-analyst · route=explicit
[2026-05-28T13:26:08.881Z] **Dale** (Data Analyst) is on this team-task.
[2026-05-28T13:26:08.997Z] Thinking about the best approach…
[2026-05-28T13:26:09.109Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:26:11.881Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:26:11.881Z] Plan ready: 1 step — Default research plan for: Given a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold you would use, and one failure mode.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked fo.
[2026-05-28T13:26:12.356Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:26:12.356Z] Step 1 of 1: Researching "Given a table of daily signups, outline how you would detect a week-over-week an…" — vault + web
[2026-05-28T13:27:09.882Z] All sub-agents finished in 57.5s.
[2026-05-28T13:27:09.888Z] Thinking with openai/gpt-oss-20b:free (~3 117 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:27:10.955Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T13:27:35.462Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-28T13:27:35.466Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:27:35.471Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:27:35.471Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:27:35.471Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:27:35.471Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:27:39.402Z] Wave 1 finished in 3.9s.
[2026-05-28T13:27:39.402Z] All sub-agents finished in 3.9s.
[2026-05-28T13:27:39.402Z] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
