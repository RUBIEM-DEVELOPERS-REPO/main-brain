---
title: "Research: As a Data Analyst, frame the hypothesis before pulling data — never the other way around"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, frame the hypothesis before pulling data — never the other way around

**Why a Data Analyst Should Form a Hypothesis *Before* Pulling Data**

| Step | What it means | Why it matters for analysis |
|------|----------------|-----------------------------|
| **1. Define the research question** | Turn a vague business need (“What’s happening with sales?”) into a concrete, testable question (e.g., “Did the new pricing tier increase average order value by ≥ 5 % in Q2?”). | Gives direction and prevents endless “data fishing.” |
| **2. State a hypothesis** | Write a **null hypothesis** (H₀) and an **alternative hypothesis** (H₁). Example: H₀ = “The pricing change has no effect on average order value.” H₁ = “The pricing change raises average order value by at least 5 %.” | Provides a clear criterion for statistical testing and later decision‑making. |
| **3. Identify required variables & data sources** | List the exact fields (e.g., order date, price tier, order value) and where they reside (transaction DB, CRM). | Limits the data pull to what is needed, saving time, storage, and compliance effort. |
| **4. Determine analysis plan** | Choose the method (t‑test, regression, A/B‑test) and the sample size needed for adequate power. | Guides how much data you must collect and how it should be cleaned/structured. |
| **5. Pull the data** | Extract only the columns and rows that satisfy the plan (e.g., Q2 orders, relevant price tiers). | Reduces noise, speeds up processing, and avoids privacy over‑collection. |
| **6. Clean & explore** | Apply the cleaning steps described in the Wikipedia entry (remove outliers, correct entry errors) [1]. | Ensures the dataset is reliable for hypothesis testing. |
| **7. Test the hypothesis** | Run the pre‑selected statistical test, compare p‑value to α (e.g., 0.05). | Provides an objective answer to the original question. |
| **8. Interpret & communicate** | Translate statistical results into business insights and recommendations. | Closes the loop from hypothesis to actionable decision. |

### Core Benefits of Hypothesis‑First Thinking  

1. **Focus & Efficiency** – By knowing *what* you’re looking for, you avoid pulling massive, irrelevant datasets. The Wikipedia article notes that “raw data … is typically cleaned … before analysis” [1]; starting with a hypothesis reduces the cleaning burden.  
2. **Statistical Rigor** – A pre‑specified hypothesis lets you choose the appropriate test and sample size *a priori*, preventing “p‑hacking” or post‑hoc rationalizations.  
3. **Resource Management** – Limiting data extraction saves compute cycles, storage costs, and compliance overhead (especially with GDPR‑type regulations).  
4. **Clear Communication** – Stakeholders can see the logical chain: question → hypothesis → method → result → recommendation.  

### Quick Checklist for Analysts  

- ☐ Write a concise research question.  
- ☐ Formulate H₀ and H₁.  
- ☐ List needed variables & sources.  
- ☐ Choose analysis method & power calculation.  
- ☐ Extract only the necessary data.  
- ☐ Clean according to standard practices (outlier removal, error correction) [1].  
- ☐ Conduct the test and report results with confidence intervals.  

**Bottom line:** Starting with a hypothesis turns data analysis from a vague “let’s see what we find” into a disciplined, reproducible investigation that saves time, resources, and yields trustworthy insights.

## Web sources
1. [Data - Wikipedia](https://en.wikipedia.org/wiki/Data) _(relevance 20, browser)_
2. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 12, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
