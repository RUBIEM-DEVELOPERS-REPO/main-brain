---
type: job
title: Read A/B tests honestly — name CIs, MDE, and p-hacking risks
slug: read-a-b-tests-honestly-name-cis-mde-and-p-hacking-risks-3d06e1d3
created: 2026-05-29T19:46:38.710Z
jobId: 3d06e1d3-d71e-4bb4-91f7-3268c0c586cb
status: succeeded
template: custom-data-analyst-read-a-b-tests-honestly-name-cis-mde-and
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:44:40.201Z
finishedAt: 2026-05-29T19:46:38.710Z
---

# Read A/B tests honestly — name CIs, MDE, and p-hacking risks

- **Status:** succeeded
- **Template:** custom-data-analyst-read-a-b-tests-honestly-name-cis-mde-and
- **Started:** 2026-05-29T19:44:40.201Z
- **Finished:** 2026-05-29T19:46:38.710Z
- **Title:** Read A/B tests honestly — name CIs, MDE, and p-hacking risks

## Plan
Default research plan for: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks

### Steps
1. ✓ Researching "As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks" — vault + web — `research.deep` (47.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (23.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (19.3s)
    > auto-injected: quality score=0.59 (pass=false) — peer review for a second opinion

## Answer
## Reading A/B Tests Honestly – Key Statistical Concepts  

| Concept | What it means for an analyst | Typical red‑flags that suggest a problem |
|---------|------------------------------|------------------------------------------|
| **Confidence interval (CI)** | A range that, under the assumed statistical model, will contain the true effect size (e.g., lift in conversion) a given proportion of the time (usually 95 %). It shows both the point estimate and its uncertainty. | • Reporting only the point estimate (e.g., “+12 % lift”) without the CI.<br>• CI that is extremely wide, indicating insufficient sample size or high variance.<br>• CI that crosses zero but is presented as a “significant win.” |
| **Minimum detectable effect (MDE)** | The smallest true effect size that the test was powered to detect with the pre‑specified significance level and power (often 80 %). It is set during test design and determines the required sample size. | • Declaring significance when the observed effect is smaller than the pre‑planned MDE.<br>• No MDE documented before the test, making post‑hoc power claims unreliable.<br>• Sample size far below what the MDE would require, inflating Type I error. |
| **p‑hacking risk** | Repeatedly looking at the data, trying many analysis variations, or stopping the test early until a “significant” p‑value (< 0.05) appears, which inflates the false‑positive rate. | • Frequent interim looks without proper adjustment.<br>• Multiple metric testing without correction.<br>• Post‑hoc selection of favorable sub‑segments. |

**Takeaway:** An honest A/B analysis must present the CI alongside the point estimate, reference a pre‑defined MDE to justify sample size and significance claims, and guard against p‑hacking by limiting peeks, pre‑registering analyses, and applying appropriate statistical corrections.  

*Sources: [1]*

<details><summary>Log</summary>

```
[2026-05-29T19:44:40.223Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:44:41.537Z] Thinking about the best approach…
[2026-05-29T19:44:41.619Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:44:42.861Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:44:42.861Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.
[2026-05-29T19:44:42.984Z] Step 1 of 1: Researching "As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks" — vault + web
[2026-05-29T19:45:30.042Z] All sub-agents finished in 47.1s.
[2026-05-29T19:45:30.042Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:45:30.048Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:45:30.048Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:45:30.048Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:45:53.982Z] Wave 1 finished in 23.9s.
[2026-05-29T19:45:53.982Z] All sub-agents finished in 23.9s.
[2026-05-29T19:45:53.987Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:46:13.290Z] All sub-agents finished in 19.3s.
[2026-05-29T19:46:13.301Z] quality.check failed (score=0.59, issues: No inline citations provided for claims; Lacks evidence references for key concepts) — re-synthesising with the large model
[2026-05-29T19:46:13.310Z] Thinking with openai/gpt-oss-120b:free (~3 305 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:46:38.063Z] quality rescue improved score: 0.59 → 0.89; using the rescued draft
[2026-05-29T19:46:38.063Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:46:38.709Z] Vault commit: done.
```
</details>
