---
type: job
title: Frame the hypothesis BEFORE pulling data — never the other way around
slug: frame-the-hypothesis-before-pulling-data-never-the-other-way-c80ecee4
created: 2026-06-01T09:42:56.041Z
jobId: c80ecee4-c977-47f0-b03c-ef972f508cbc
status: succeeded
template: custom-data-analyst-frame-the-hypothesis-before-pulling-data
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:40:51.913Z
finishedAt: 2026-06-01T09:42:56.041Z
---

# Frame the hypothesis BEFORE pulling data — never the other way around

- **Status:** succeeded
- **Template:** custom-data-analyst-frame-the-hypothesis-before-pulling-data
- **Started:** 2026-06-01T09:40:51.913Z
- **Finished:** 2026-06-01T09:42:56.041Z
- **Title:** Frame the hypothesis BEFORE pulling data — never the other way around

## Plan
Default research plan for: As a Data Analyst, frame the hypothesis before pulling data — never the other way around

### Steps
1. ✓ Researching "As a Data Analyst, frame the hypothesis before pulling data — never the other wa…" — vault + web — `research.deep` (46.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (19.9s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Why a Data Analyst Should Frame the Hypothesis Before Pulling Data  

1. **Guides data collection** – A clear hypothesis tells the analyst *what* variables must be measured, allowing the extraction of only those data points that can test the claim. This avoids gathering irrelevant or excessive data, which inflates cost and adds noise.  

2. **Prevents “data‑driven” storytelling** – Starting with data often leads to retro‑fitting a narrative to whatever patterns appear (p‑hacking). A pre‑defined hypothesis forces results to be evaluated against a specific, testable expectation, reducing bias.  

3. **Improves data quality and relevance** – Knowing the question up‑front lets the analyst choose the appropriate data type (quantitative vs. qualitative, structured vs. unstructured) and collection method, directly affecting accuracy and validity [1].  

4. **Streamlines the analysis workflow** – The data‑analysis life‑cycle (collection → cleaning → analysis → interpretation) becomes more efficient when the end goal is already set. Statistical tests or models can be designed to match the hypothesis rather than being chosen ad‑hoc.  

5. **Supports reproducibility** – Documented hypotheses act as a “research contract” that others can verify. Recording the hypothesis before data extraction enables the entire process—from source selection to transformation—to be audited and repeated.  

### Practical Steps for a Data Analyst  

| Step | Action |
|------|--------|
| **1. Define the hypothesis** | Write a concise, testable statement (e.g., “Customers who receive a personalized email have a 15 % higher conversion rate than those who do not”). |
| **2. Identify required variables** | List the exact metrics needed to test the hypothesis. |
| **3. Select data sources** | Choose sources that reliably provide those metrics. |
| **4. Document the plan** | Record the hypothesis, variables, and sources before extraction. |
| **5. Execute extraction & analysis** | Pull only the identified data and apply the pre‑selected analytical methods. |

_This report synthesizes the key reasons and actionable steps for placing hypothesis formulation ahead of data extraction, ensuring focused, unbiased, and reproducible analyses._

<details><summary>Log</summary>

```
[2026-06-01T09:40:51.926Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:40:53.331Z] Thinking about the best approach…
[2026-06-01T09:40:53.442Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:40:55.054Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:40:55.054Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, frame the hypothesis before pulling data — never the other way around.
[2026-06-01T09:40:55.063Z] Step 1 of 1: Researching "As a Data Analyst, frame the hypothesis before pulling data — never the other wa…" — vault + web
[2026-06-01T09:41:41.582Z] All sub-agents finished in 46.5s.
[2026-06-01T09:41:41.582Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:41:41.588Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:41:41.588Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:41:41.588Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:41:47.832Z] Wave 1 finished in 6.2s.
[2026-06-01T09:41:47.832Z] All sub-agents finished in 6.2s.
[2026-06-01T09:41:47.836Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:42:07.693Z] All sub-agents finished in 19.9s.
[2026-06-01T09:42:07.698Z] quality.check failed (score=0.57, issues: Some claims lack citations or evidence; Citation coverage is low relative to content) — re-synthesising with the large model
[2026-06-01T09:42:07.703Z] Thinking with openai/gpt-oss-120b:free (~3 531 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:42:55.685Z] quality rescue improved score: 0.57 → 0.9; using the rescued draft
[2026-06-01T09:42:55.685Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:42:56.041Z] Vault commit: done.
```
</details>
