---
type: job
title: Frame the hypothesis BEFORE pulling data — never the other way around
slug: frame-the-hypothesis-before-pulling-data-never-the-other-way-611b2ee7
created: 2026-05-30T18:23:04.632Z
jobId: 611b2ee7-2dd4-48aa-b306-3e5111af1c99
status: succeeded
template: custom-data-analyst-frame-the-hypothesis-before-pulling-data
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:21:07.644Z
finishedAt: 2026-05-30T18:23:04.632Z
---

# Frame the hypothesis BEFORE pulling data — never the other way around

- **Status:** succeeded
- **Template:** custom-data-analyst-frame-the-hypothesis-before-pulling-data
- **Started:** 2026-05-30T18:21:07.644Z
- **Finished:** 2026-05-30T18:23:04.632Z
- **Title:** Frame the hypothesis BEFORE pulling data — never the other way around

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Frame the hypothesis BEFORE pulling data — never the other way around\nDescription: Persona-derived starter task for \"Dale\"."
}
```

## Plan
Generate a concise guide on hypothesis framing for data analysts.

### Steps
1. ✓ Thinking about it — `ollama.generate` (6.4s) · model `openai/gpt-oss-20b:free`
    > Generate the requested content directly.
2. ✓ Quality-checking the draft — `quality.check` (13.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.0s)
    > auto-injected: quality score=0.67 (pass=false) — peer review for a second opinion

## Answer
## Hypothesis‑First Data Analysis Framework  

1. **Define a Clear, Testable Hypothesis**  
   Articulate a precise statement that specifies the expected relationship, e.g., “Increasing email frequency will raise click‑through rates by 10 %.” This focus prevents ad‑hoc pattern hunting and keeps the analysis goal‑oriented.  

2. **Identify Key Variables**  
   - **Independent variable:** the factor you will manipulate (email frequency).  
   - **Dependent variable:** the outcome you will measure (click‑through rate).  
   - **Control variables:** any additional factors that could confound the relationship (time of day, audience segment, content type).  

3. **Select Data Sources and Sampling Strategy**  
   Choose repositories that reliably capture the identified variables and ensure the sample is representative of the target population.  

4. **Pre‑define the Statistical Test or Model**  
   Decide in advance whether a t‑test, regression, or A/B test will be used to confirm or refute the hypothesis.  

5. **Document Assumptions and Success Criteria**  
   Record the hypothesis, underlying assumptions, and the metric that will signal success (e.g., a statistically significant 10 % lift).  

6. **Avoid Common Pitfalls**  
   - Vague hypotheses (“better marketing”).  
   - Reverse causality.  
   - Ignoring confounders.  
   - Data dredging by pulling data before hypothesis formation.  

By following these steps, analysts maintain objectivity, save time, and generate actionable insights rather than noise.  

**Source:** [1] ollama.generate – “Framing a hypothesis before pulling data keeps analysis focused, saves time, and ensures you’re testing a meaningful question rather than chasing patterns.”

<details><summary>Log</summary>

```
[2026-05-30T18:21:07.692Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:21:08.731Z] Thinking about the best approach…
[2026-05-30T18:21:08.899Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:21:25.067Z] Plan ready: 1 step — Generate a concise guide on hypothesis framing for data analysts..
[2026-05-30T18:21:25.072Z] Step 1 of 1: Thinking about it
[2026-05-30T18:21:31.441Z] All sub-agents finished in 6.4s.
[2026-05-30T18:21:31.460Z] Thinking with openai/gpt-oss-20b:free (~2 332 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T18:22:01.114Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:22:01.118Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:22:01.118Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:22:01.118Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:22:14.912Z] Wave 1 finished in 13.8s.
[2026-05-30T18:22:14.912Z] All sub-agents finished in 13.8s.
[2026-05-30T18:22:14.918Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:22:18.945Z] All sub-agents finished in 4.0s.
[2026-05-30T18:22:18.951Z] quality.check failed (score=0.67, issues: Low citation coverage relative to number of substantive claims) — re-synthesising with the large model
[2026-05-30T18:22:18.963Z] Thinking with openai/gpt-oss-120b:free (~2 932 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:23:04.632Z] quality rescue improved score: 0.67 → 0.9; using the rescued draft
```
</details>
