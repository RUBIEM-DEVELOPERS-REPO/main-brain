---
title: "Research: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.

Context: Role: Custom
Title: Read A/B "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.

Context: Role: Custom
Title: Read A/B tests honestly — name CIs, MDE, and p-hacking risks
Description: Persona-derived starter task for "Dale"

**Reading an A/B test “honestly” – what you need to look for**

| Concept | What it means | Why it matters for an honest interpretation |
|---------|---------------|---------------------------------------------|
| **Confidence interval (CI)** | A range of values that, given the data and a chosen confidence level (usually 95 %), is expected to contain the true effect size (e.g., lift in conversion). | A CI tells you *how precise* the estimate is. A statistically significant result with a very wide CI may be practically meaningless, while a non‑significant result with a narrow CI that excludes a meaningful effect is also informative. |
| **Minimum Detectable Effect (MDE)** | The smallest lift (absolute or relative) that the test was powered to detect with a pre‑specified statistical power (commonly 80 % or 90 %). It is set during experiment design based on business relevance, traffic, and variance. | If the observed lift is smaller than the MDE, the test likely lacked enough power to reliably detect it, even if the effect is real. Reporting a “no‑difference” conclusion without referencing the MDE can be misleading. |
| **p‑hacking risks** | Practices that inflate the chance of finding a “significant” p‑value, such as: <br>• **Multiple looks** (checking results before the planned sample size is reached). <br>• **Selective reporting** (showing only metrics that look good). <br>• **Post‑hoc subgroup digging** (splitting users after the fact). <br>• **Changing the analysis plan** (e.g., switching from a two‑tailed to a one‑tailed test). | p‑hacking turns random noise into apparently meaningful findings, increasing false‑positive risk. An honest read flags any deviation from the pre‑registered analysis plan, notes whether the test was stopped early, and checks whether multiple metrics or sub‑groups were examined without proper correction. |

### A quick checklist for the analyst

1. **Pre‑experiment design**  
   * Was an MDE defined and justified?  
   * Was the sample‑size calculation documented (power = 80 %/90 % at α = 0.05)?

2. **During the test**  
   * Did the test run until the pre‑planned sample size or duration?  
   * Were any interim looks performed? If so, were they accounted for (e.g., using O’Brien‑Fleming boundaries)?

3. **Result reporting**  
   * Report the point estimate **and** its 95 % CI.  
   * Compare the CI to the MDE: does the CI exclude effects that matter to the business?  
   * State the p‑value **and** the test’s direction (one‑ vs two‑tailed).  

4. **Guard against p‑hacking**  
   * Keep the analysis plan immutable; any post‑hoc explorations must be labeled as such and, if possible, validated on a hold‑out sample.  
   * Apply a multiple‑testing correction (e.g., Bonferroni, Benjamini‑Hochberg) when looking at many metrics or sub‑segments.  

### Bottom line

- **CIs** give you the *range* of plausible effects; a narrow CI that excludes the MDE is strong evidence, while a wide CI signals uncertainty.  
- **MDE** is the benchmark for *practical* significance; if the observed effect is smaller, the test may be under‑powered.  
- **p‑hacking** undermines trust; watch for early stopping, cherry‑picking, or unplanned subgroup analysis, and always reference the original analysis plan.

By systematically checking these three pillars—CI, MDE, and p‑hacking safeguards—you can present A/B test results that are both statistically sound and honest to stakeholders.

## Web sources
1. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_
2. [Oficiālās statistikas portāls](https://stat.gov.lv/lv) _(relevance 1, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
