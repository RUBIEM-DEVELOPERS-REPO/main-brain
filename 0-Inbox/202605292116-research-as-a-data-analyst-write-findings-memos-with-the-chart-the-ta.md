---
title: "Research: As a Data Analyst, write findings memos with the chart, the takeaway, and the recommended action.

Context: Role: Custom"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, write findings memos with the chart, the takeaway, and the recommended action.

Context: Role: Custom
Title: Write findings memos with the chart, the takeaway, and the recommended action
Description: Persona-derived starter task for "Dale"

**Findings Memo – Sample Template**  

*Prepared by:* Data Analyst (Dale)  
*Date:* [Insert date]  

---

### 1. Objective  
Briefly restate the business question or hypothesis that the analysis was intended to address (e.g., “Assess quarterly sales growth by product line to inform inventory planning.”).

---

### 2. Key Chart  

| **Chart Type** | **What It Shows** | **Why It Matters** |
|----------------|-------------------|--------------------|
| Bar chart (sales by product) | Total sales for each product in Q1‑Q4 2023 | Highlights which SKUs are driving revenue and where under‑performance exists. |
| Line chart (trend) | Monthly revenue trend over the past 12 months | Reveals seasonality and the direction of growth/decline. |
| Scatter plot (price vs. volume) | Relationship between average selling price and units sold | Indicates price elasticity for each category. |

*Insert the chosen chart(s) here – use a clear title, labeled axes, and a legend if needed.*  

> **Tip:** Keep the visual simple (no more than three series) and use the corporate colour palette for consistency.

---

### 3. Takeaway (Interpretation)  

- **Primary insight:** Summarise the most important pattern the chart reveals.  
  *Example:* “Product A accounts for **45 %** of total revenue but grew only **2 %** YoY, whereas Product B grew **18 %** despite representing only **12 %** of sales, indicating a high‑growth opportunity.”  

- **Supporting points:** List 1‑2 secondary observations that add context.  
  *Example:* “The price‑elasticity scatter shows that products priced above €150 have a negative correlation with volume, suggesting price reductions could boost sales.”  

- **Confidence level:** Note any data quality issues, sample size limits, or assumptions that affect certainty.  

---

### 4. Recommended Action  

| **Action** | **Rationale** | **Owner** | **Timeline** |
|------------|---------------|-----------|--------------|
| Re‑allocate inventory budget toward Product B (increase stock by 20 %). | High growth rate and strong demand signal. | Supply‑Chain Manager | Q3 2024 |
| Pilot a 10 % price discount on Product A in the next promotional cycle. | Low growth despite high revenue; price sensitivity indicated by scatter plot. | Marketing Lead | 6 weeks |
| Conduct a deeper cohort analysis on customers purchasing > €150 items. | Validate price‑elasticity finding before broader pricing changes. | Business Analyst | End of Q2 2024 |

*Add any required resources, risk considerations, or follow‑up metrics (e.g., “track weekly sales lift post‑discount”).*

---

### 5. Next Steps  

1. **Data validation:** Verify the underlying sales data for the last two quarters (source: internal ERP).  
2. **Stakeholder review:** Schedule a 30‑minute walkthrough with product, finance, and ops leads.  
3. **Implementation plan:** Draft a detailed execution timeline for the approved actions.

---

**Prepared in NeuroWorks (clawbot) – the AI‑workforce platform that automates memo generation and chart rendering.**  

*If you need the chart generated automatically, invoke the `chart‑builder` persona with the relevant dataset, and the memo will be populated with the visual.*

## Web sources
1. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_
2. [Oficiālās statistikas portāls](https://stat.gov.lv/lv) _(relevance 2, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
