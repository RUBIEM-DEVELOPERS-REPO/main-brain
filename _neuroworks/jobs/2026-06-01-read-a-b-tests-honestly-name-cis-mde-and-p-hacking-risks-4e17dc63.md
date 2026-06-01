---
type: job
title: Read A/B tests honestly — name CIs, MDE, and p-hacking risks
slug: read-a-b-tests-honestly-name-cis-mde-and-p-hacking-risks-4e17dc63
created: 2026-06-01T09:45:28.876Z
jobId: 4e17dc63-5f2e-4650-9d1a-01fa0dc6c8ed
status: succeeded
template: custom-data-analyst-read-a-b-tests-honestly-name-cis-mde-and
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:43:05.742Z
finishedAt: 2026-06-01T09:45:28.876Z
---

# Read A/B tests honestly — name CIs, MDE, and p-hacking risks

- **Status:** succeeded
- **Template:** custom-data-analyst-read-a-b-tests-honestly-name-cis-mde-and
- **Started:** 2026-06-01T09:43:05.742Z
- **Finished:** 2026-06-01T09:45:28.876Z
- **Title:** Read A/B tests honestly — name CIs, MDE, and p-hacking risks

## Plan
Conduct deep web research on A/B testing concepts and risks.

### Steps
1. ✓ Researching "A/B testing cis MDE p-hacking risks" — vault + web — `research.deep` (34.6s)
2. ✓ Quality-checking the draft — `quality.check` (19.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (19.3s)
    > auto-injected: quality score=0.70 (pass=false) — peer review for a second opinion

## Answer
**A/B‑Test Evaluation – Key Concepts and Risks**

- **Confidence Intervals (CIs)** – statistical ranges that, with a chosen confidence level (e.g., 95 %), are expected to contain the true effect size of a variant. They convey the precision of the estimated lift and help decide whether observed differences are practically meaningful.  
- **Minimum Detectable Effect (MDE)** – the smallest true lift that the test is powered to detect given the sample size, significance level, and desired statistical power. Setting an appropriate MDE ensures the test is neither under‑powered (missing real effects) nor over‑powered (wasting traffic).  
- **p‑hacking Risks** – practices that inflate the chance of false‑positive findings, such as repeatedly peeking at interim results, testing many variants without correction, or selectively reporting only favorable outcomes. In A/B testing, p‑hacking can arise from flexible stopping rules, post‑hoc subgroup analyses, or adjusting the metric after seeing the data.

**Observed Gaps**  
The current evidence catalog contains no substantive material on CIs, MDE, or p‑hacking in the context of A/B testing. Consequently, no factual claims can be substantiated from the vault or web sources.

**Information Needed to Complete the Report**  
1. Internal documentation or guidelines that define the confidence level and CI calculation method used in your experiments.  
2. The formula or tool (e.g., power analysis calculator) employed to set the MDE for your tests.  
3. Any existing policies on interim analysis, multiple‑testing correction, or result reporting that address p‑hacking concerns.  
4. Sample size and traffic allocation details for a recent A/B test you would like analyzed.

Providing these items will enable a precise, evidence‑backed assessment of your A/B‑testing framework.

<details><summary>Log</summary>

```
[2026-06-01T09:43:05.755Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:43:06.717Z] Thinking about the best approach…
[2026-06-01T09:43:06.770Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:43:15.217Z] Plan ready: 1 step — Conduct deep web research on A/B testing concepts and risks..
[2026-06-01T09:43:15.221Z] Step 1 of 1: Researching "A/B testing cis MDE p-hacking risks" — vault + web
[2026-06-01T09:43:49.802Z] All sub-agents finished in 34.6s.
[2026-06-01T09:43:49.802Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:43:49.806Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:43:49.806Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:43:49.806Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:44:09.335Z] Wave 1 finished in 19.5s.
[2026-06-01T09:44:09.335Z] All sub-agents finished in 19.5s.
[2026-06-01T09:44:09.338Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:44:28.611Z] All sub-agents finished in 19.3s.
[2026-06-01T09:44:28.616Z] quality.check failed (score=0.7, issues: does not address the requested content; fails to provide any explanation of cis, MDE, or p‑hacking risks) — re-synthesising with the large model
[2026-06-01T09:44:28.622Z] Thinking with openai/gpt-oss-120b:free (~2 755 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:45:05.471Z] quality rescue improved score: 0.7 → 0.89; using the rescued draft
[2026-06-01T09:45:05.471Z] peer review verdict=bad (Does not address the task; provides no explanation of cis, mde, or p-hacking risks; irrelevant apology; Factual: no clai) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T09:45:05.484Z] Thinking with openai/gpt-oss-120b:free (~2 914 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:45:28.049Z] retry cleared peer review (verdict=good, confidence=0.95); using retry as final answer
[2026-06-01T09:45:28.049Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:45:28.876Z] Vault commit: done.
```
</details>
