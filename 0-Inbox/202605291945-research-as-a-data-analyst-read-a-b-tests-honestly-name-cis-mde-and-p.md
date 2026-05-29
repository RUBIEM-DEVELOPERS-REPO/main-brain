---
title: "Research: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks

**Reading A/B tests “honestly” – the three key statistical concepts you should keep in mind**

| Concept | What it means for an analyst | Typical red‑flags that suggest a problem |
|---------|------------------------------|------------------------------------------|
| **Confidence interval (CI)** | A range that, under the assumed statistical model, will contain the true effect size (e.g., lift in conversion) a given proportion of the time (usually 95 %). It lets you see *both* the point estimate and the uncertainty around it. | • Reporting only the point estimate (e.g., “+12 % lift”) without the CI.<br>• CI that is extremely wide, indicating insufficient sample size or high variance.<br>• CI that crosses zero but is presented as a “significant win.” |
| **Minimum detectable effect (MDE)** | The smallest true effect size that the test was *powered* to detect with the pre‑specified significance level and power (often 80 %). It is set during test design and determines the required sample size. | • The observed effect is smaller than the pre‑planned MDE but is still declared “significant.”<br>• No MDE was documented before the test, making post‑hoc power claims unreliable.<br>• Sample size far below what the MDE would require, inflating Type I error. |
| **p‑hacking risk** | The practice of repeatedly looking at the data, trying many variations of the analysis, or stopping the test early until a “significant” p‑value (< 0.05) appears. This inflates the false‑positive rate. | • Multiple looks at interim results without a pre‑registered stopping rule.<br>• Trying many different metrics, segmentations, or statistical models and only reporting the one that reaches significance.<br>• Post‑hoc changes to the hypothesis, CI level, or MDE after seeing the data. |

### How to guard against these pitfalls

1. **Always show the CI** (preferably 95 %) alongside the lift. If the CI includes zero, the result is not statistically reliable, even if the p‑value is < 0.05.  
2. **Document the MDE before the test starts** and compute the required sample size. If the final sample falls short, treat the result as exploratory, not conclusive.  
3. **Pre‑register the analysis plan** (metric, segmentation, significance level, stopping rule). Use a sequential testing method (e.g., O’Brien‑Fleming boundaries) if you need interim looks, or apply a Bonferroni correction for multiple comparisons.  
4. **Report all tested variations** and any “negative” results. Transparency reduces the temptation (and impact) of p‑hacking.  

### Quick checklist for a “honest” read

- ☐ Point estimate + 95 % CI displayed?  
- ☐ MDE and power calculation documented and met?  
- ☐ No ad‑hoc metric changes after peeking at the data?  
- ☐ No early stopping without a pre‑approved sequential test?  
- ☐ All variants and subgroup analyses reported, not just the “winner”?

If any of these items are missing, treat the test’s conclusions with caution and consider re‑running the experiment with a proper design.

## Web sources
1. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_
2. [Oficiālās statistikas portāls](https://stat.gov.lv/lv) _(relevance 1, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
