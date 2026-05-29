---
type: job
title: Frame the hypothesis BEFORE pulling data — never the other way around
slug: frame-the-hypothesis-before-pulling-data-never-the-other-way-7e546430
created: 2026-05-29T09:35:40.567Z
jobId: 7e546430-8c7d-465b-aae4-058b4ee23fcf
status: succeeded
template: custom-data-analyst-frame-the-hypothesis-before-pulling-data
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:34:31.909Z
finishedAt: 2026-05-29T09:35:40.566Z
---

# Frame the hypothesis BEFORE pulling data — never the other way around

- **Status:** succeeded
- **Template:** custom-data-analyst-frame-the-hypothesis-before-pulling-data
- **Started:** 2026-05-29T09:34:31.909Z
- **Finished:** 2026-05-29T09:35:40.566Z
- **Title:** Frame the hypothesis BEFORE pulling data — never the other way around

## Plan
Conduct focused research on hypothesis framing best practices and capture findings.

### Steps
1. ✓ Researching "best practices for framing hypotheses before data collection in data analysis" — vault + web — `research.deep` (9.6s)
2. ✓ Quality-checking the draft — `quality.check` (5.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.8s)
    > auto-injected: quality score=0.73 (pass=false) — peer review for a second opinion

## Answer
## Framing a Hypothesis Before Data Collection

1. **Define the business problem** – Clearly articulate the question or decision that the analysis must support (e.g., “How does email frequency affect click‑through rates?”).  
2. **Formulate a testable hypothesis** – State a specific, measurable prediction that can be confirmed or refuted (e.g., “Increasing email frequency from once to twice per week will raise click‑through rates by at least 10 %.”).  
3. **Identify variables and metrics** – List the dependent variable (click‑through rate), independent variable (email frequency), and any control variables (segment, time of day).  
4. **Determine data requirements** – Specify the data sources, granularity, and time frame needed to evaluate the hypothesis.  
5. **Design the collection plan** – Choose sampling methods, collection tools, and timing that align with the hypothesis’s scope and ensure data quality.  

By establishing the hypothesis first, the analyst guarantees that subsequent data gathering is purposeful, reduces wasted effort, and enhances the validity and relevance of the final insights.

<details><summary>Log</summary>

```
[2026-05-29T09:34:31.918Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:34:32.959Z] Thinking about the best approach…
[2026-05-29T09:34:32.981Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:34:36.763Z] Plan ready: 1 step — Conduct focused research on hypothesis framing best practices and capture findings..
[2026-05-29T09:34:36.768Z] Step 1 of 1: Researching "best practices for framing hypotheses before data collection in data analysis" — vault + web
[2026-05-29T09:34:46.398Z] All sub-agents finished in 9.6s.
[2026-05-29T09:34:46.399Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:34:46.402Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:34:46.402Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:34:46.402Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:34:51.662Z] Wave 1 finished in 5.3s.
[2026-05-29T09:34:51.662Z] All sub-agents finished in 5.3s.
[2026-05-29T09:34:51.667Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:34:58.487Z] All sub-agents finished in 6.8s.
[2026-05-29T09:34:58.492Z] quality.check failed (score=0.73, issues: does not address the task, lacks substantive content; fails to provide a hypothesis framework) — re-synthesising with the large model
[2026-05-29T09:34:58.497Z] Thinking with openai/gpt-oss-120b:free (~2 989 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:35:21.688Z] quality rescue improved score: 0.73 → 0.9; using the rescued draft
[2026-05-29T09:35:21.688Z] peer review verdict=bad (Does not address the task; provides a refusal instead of explaining hypothesis framing; Lacks factual content; no eviden) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:35:21.692Z] Thinking with openai/gpt-oss-120b:free (~3 154 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:35:40.294Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T09:35:40.294Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:35:40.566Z] Vault commit: done.
```
</details>
