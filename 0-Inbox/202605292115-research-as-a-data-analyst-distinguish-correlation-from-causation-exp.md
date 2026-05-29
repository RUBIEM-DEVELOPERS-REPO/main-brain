---
title: "Research: As a Data Analyst, distinguish correlation from causation explicitly.

Context: Role: Custom
Title: Distinguish correlat"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, distinguish correlation from causation explicitly.

Context: Role: Custom
Title: Distinguish correlation from causation explicitly
Description: Persona-derived starter task for "Dale"

**Correlation vs Causation – a quick guide for a Data Analyst**

| Aspect | Correlation | Causation |
|--------|-------------|-----------|
| **What it means** | Two variables move together (positively or negatively). The relationship is *statistical*; it tells you that when one variable changes, the other tends to change in a predictable way. | One variable *directly influences* the other. A change in the cause produces a change in the effect. |
| **Typical statement** | “*X* is correlated with *Y* (r = 0.68, p < 0.01).” | “*X* causes *Y*; manipulating *X* will change *Y*.” |
| **How it’s measured** | Correlation coefficient (Pearson, Spearman, Kendall), covariance, scatter‑plot patterns. | Experimental or quasi‑experimental designs, randomized control trials, instrumental variables, difference‑in‑differences, regression with proper controls, Granger‑causality tests, etc. |
| **Key assumptions** | Linear (or monotonic) relationship, no requirement of temporal ordering. | Temporal precedence (cause precedes effect), no omitted confounders, a plausible mechanism, and the relationship holds when other variables are held constant. |
| **Common pitfalls** | • **Spurious correlation** – two variables appear linked due to a third hidden factor.<br>• **Reverse causality** – the direction of influence is opposite to what is assumed.<br>• **Ecological fallacy** – inferring individual‑level causation from aggregate data. | • **Confounding** – an unobserved variable drives both X and Y.<br>• **Selection bias** – the sample is not representative of the population of interest.<br>• **Over‑interpreting observational data** without experimental control. |
| **How to test** | • Compute correlation coefficient and test significance.<br>• Visualize with scatter plots and trend lines. | • Design an experiment or use natural experiments.<br>• Apply causal inference methods (e.g., propensity‑score matching, instrumental variables).<br>• Perform robustness checks (sensitivity analysis, falsification tests). |
| **Interpretation** | “X and Y are associated; they move together, but we cannot say why.” | “There is evidence that changing X will change Y, subject to the validity of the causal assumptions.” |

### Practical checklist for analysts

1. **Start with correlation** – explore pairwise relationships, note strength and direction.  
2. **Ask causal questions** – does X *precede* Y? Is there a plausible mechanism?  
3. **Control for confounders** – include relevant covariates in regression or use matching.  
4. **Seek experimental evidence** – if possible, run A/B tests or randomized trials.  
5. **Use causal‑inference tools** – instrumental variables, regression discontinuity, difference‑in‑differences, etc.  
6. **Validate** – test the result on a hold‑out sample or via external data.  

### Bottom line
- **Correlation** ≠ **Causation**. Correlation tells you *what* moves together; causation tells you *why* one variable changes because of another. Demonstrating causation requires more rigorous design and analysis than simply reporting a correlation coefficient.

## Web sources
1. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_
2. [Oficiālās statistikas portāls](https://stat.gov.lv/lv) _(relevance 1, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
