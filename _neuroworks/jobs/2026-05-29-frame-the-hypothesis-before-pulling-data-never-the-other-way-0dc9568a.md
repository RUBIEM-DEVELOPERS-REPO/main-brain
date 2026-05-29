---
type: job
title: Frame the hypothesis BEFORE pulling data — never the other way around
slug: frame-the-hypothesis-before-pulling-data-never-the-other-way-0dc9568a
created: 2026-05-29T19:44:21.443Z
jobId: 0dc9568a-ab9d-41da-b9c7-752c538f7a71
status: succeeded
template: custom-data-analyst-frame-the-hypothesis-before-pulling-data
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:43:15.804Z
finishedAt: 2026-05-29T19:44:21.443Z
---

# Frame the hypothesis BEFORE pulling data — never the other way around

- **Status:** succeeded
- **Template:** custom-data-analyst-frame-the-hypothesis-before-pulling-data
- **Started:** 2026-05-29T19:43:15.804Z
- **Finished:** 2026-05-29T19:44:21.443Z
- **Title:** Frame the hypothesis BEFORE pulling data — never the other way around

## Plan
Default research plan for: As a Data Analyst, frame the hypothesis before pulling data — never the other way around

### Steps
1. ✓ Researching "As a Data Analyst, frame the hypothesis before pulling data — never the other wa…" — vault + web — `research.deep` (36.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (20.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Why a Data Analyst Should Frame the Hypothesis Before Pulling Data**

| Reason | Explanation |
|--------|--------------|
| **Guides data‑collection effort** – A clear hypothesis tells you *what* you need to measure, so you only gather the variables that are relevant, avoiding wasteful extraction of unnecessary rows or columns. |
| **Prevents “data‑dredging”** – Without a hypothesis, analysts are tempted to explore every available field until something “interesting” appears, which inflates the risk of false‑positive findings. |
| **Shapes the analytical method** – The type of hypothesis (e.g., difference, correlation, causal) determines whether you’ll use t‑tests, regression, ANOVA, etc., and therefore which data transformations and statistical assumptions are required. |
| **Improves reproducibility** – Documented hypotheses act as a contract for the analysis pipeline; anyone reviewing the work can see why each dataset was selected and how the results answer the original question. |
| **Facilitates stakeholder communication** – Stakeholders can evaluate whether the proposed hypothesis aligns with business goals before any time‑consuming data work begins. |
| **Enables early feasibility checks** – By stating the hypothesis first, you can quickly assess whether the needed data exist, are of sufficient quality, or require additional collection effort. |

### Practical Steps (derived from the default research plan)

1. **Write the hypothesis** in a concise, testable statement (e.g., “Customers who receive a personalized email have a 10 % higher conversion rate than those who receive a generic email”).  
2. **Identify required variables** (e.g., email type, conversion flag, timestamp).  
3. **Check data availability** in your vault or source systems; if gaps exist, decide whether to collect new data or refine the hypothesis.  
4. **Design the analysis** (choose statistical tests, define success metrics) *before* extracting the raw tables.  
5. **Document the hypothesis and analysis plan** in the project’s knowledge base (e.g., `_knowledge/neuroworks-platform.md`) so the whole team can review it.

> *Evidence*: The vault entry “Research: As a Data Analyst, frame the hypothesis before pulling data — never the other way around” and the associated default research plan explicitly prescribe this workflow for analysts [0‑Inbox/202605291433-research-as-a-data-analyst-frame-the-hypothesis-before-pulling-data-n.md] [ _neuroworks/jobs/2026-05-29-frame-the-hypothesis-before-pulling-data-never-the-other-way-d6659214.md].

### Bottom Line
Framing the hypothesis first creates a focused, efficient, and defensible analytical process. It ensures that data extraction serves a clear purpose, reduces the temptation to chase spurious patterns, and makes the entire workflow transparent to both technical and non‑technical stakeholders.

<details><summary>Log</summary>

```
[2026-05-29T19:43:15.824Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:43:16.966Z] Thinking about the best approach…
[2026-05-29T19:43:17.043Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:43:23.756Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:43:23.756Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, frame the hypothesis before pulling data — never the other way around.
[2026-05-29T19:43:23.760Z] Step 1 of 1: Researching "As a Data Analyst, frame the hypothesis before pulling data — never the other wa…" — vault + web
[2026-05-29T19:44:00.439Z] All sub-agents finished in 36.7s.
[2026-05-29T19:44:00.439Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:44:00.444Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:44:00.444Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:44:00.445Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:44:21.099Z] Wave 1 finished in 20.7s.
[2026-05-29T19:44:21.099Z] All sub-agents finished in 20.7s.
[2026-05-29T19:44:21.099Z] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T19:44:21.099Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:44:21.443Z] Vault commit: done.
```
</details>
