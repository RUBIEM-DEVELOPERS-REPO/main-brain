---
title: "Research: As a Financial Analyst, build forecasts and models with assumptions stated upfront.

Context: Role: Custom
Title: Build "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: As a Financial Analyst, build forecasts and models with assumptions stated upfront.

Context: Role: Custom
Title: Build forecasts and models with assumptions stated upfront
Description: Persona-derived starter task for "Fiona"

**Financial‑Analyst Forecast Framework (Assumptions First)**  

Below is a concise, step‑by‑step template you can use to build any quantitative forecast or valuation model.  Because the vault contains no sector‑specific data, the guidance is generic and can be populated with the numbers you gather (e.g., revenue history, cost structure, macro‑economic inputs).  All assumptions are listed **up‑front** so that anyone reviewing the model can see exactly what drives the results.

| Step | What to Do | Typical Sources | How to Document the Assumption |
|------|------------|-----------------|--------------------------------|
| **1. Define the objective** | State the purpose (e.g., 5‑year revenue forecast, DCF valuation, scenario analysis). | Project brief, stakeholder request. | `Objective: Project FY2027‑FY2031 top‑line revenue for Company X under a base‑case scenario.` |
| **2. Gather historical data** | Pull at least 3‑5 years of actuals for revenue, COGS, SG&A, capex, working‑capital items. | Company filings, Bloomberg, internal ERP. | `Historical FY2022‑FY2024 revenue: $120 M, $138 M, $155 M (source: Company X 10‑K).` |
| **3. List key drivers** | Identify the variables that most affect the line‑item you are forecasting (e.g., unit volume, price per unit, market‑share growth, inflation). | Management commentary, industry reports (e.g., Financial Nigeria news feed for macro trends)【1】. | `Assumption A – Unit volume growth = 8 % YoY (based on management’s 2025 market‑share plan).` |
| **4. State every assumption explicitly** | For each driver, write the numeric value, the time horizon, and the source. | Internal strategy docs, external research, analyst consensus. | `Assumption B – Average selling price (ASP) growth = 3 % per year, reflecting inflation of 2 % + product‑mix uplift of 1 % (source: Financial Nigeria article on African pricing trends【1】).` |
| **5. Build the calculation logic** | Translate drivers into formulas (e.g., Revenue = Units × ASP). Use separate sheets for inputs, calculations, and outputs. | Excel/Sheets, Python, R. | `Revenue FY2025 = Units FY2025 × ASP FY2025` – both inputs are linked to the assumption table. |
| **6. Run base‑case model** | Populate the model with the “most likely” assumptions and generate the forecast. | – | `Base‑case FY2027 revenue = $210 M (see Output sheet).` |
| **7. Create scenario overlays** | Define at least two alternative sets: **Optimistic** (e.g., higher volume, lower cost) and **Pessimistic** (e.g., slower growth, higher expense). | Sensitivity analysis, Monte‑Carlo if appropriate. | `Optimistic scenario assumes 12 % volume growth and 1 % cost‑of‑goods reduction. Pessimistic assumes 4 % volume growth and 2 % cost increase.` |
| **8. Document the rationale** | For each scenario, explain *why* the numbers differ (e.g., regulatory change, new product launch, macro‑economic shock). | News articles, policy updates. | `Rationale: Optimistic scenario incorporates expected AfCFTA trade‑facilitation effects (Financial Nigeria report on digital trade infrastructure rollout【1】).` |
| **9. Validate & stress‑test** | Compare model outputs to analyst consensus, peer performance, or back‑test against prior years. Adjust assumptions if errors exceed a tolerance (e.g., ±5 %). | Bloomberg consensus, industry benchmarks. | `Back‑test FY2024 forecast vs actual: 2 % variance → acceptable.` |
| **10. Present results** | Use a clean slide or dashboard: headline numbers, key assumptions table, and a waterfall/graph of scenario outcomes. | PowerPoint, Tableau. | `Slide 1 – Forecast Summary; Slide 2 – Assumptions Table; Slide 3 – Scenario Sensitivity Chart.` |

### Quick Example (Illustrative Numbers)

| Year | Units (millions) | ASP ($) | Revenue ($ M) |
|------|------------------|--------|---------------|
| 2025 (base) | 10.0 | 15.0 | 150 |
| 2026 (base) | 10.8 (+8 %) | 15.5 (+3 %) | 167 |
| 2027 (base) | 11.7 (+8 %) | 16.0 (+3 %) | 187 |

*Assumptions*:  
- **Volume growth** = 8 % YoY (management plan).  
- **ASP growth** = 3 % YoY (inflation + mix).  
- **Cost‑of‑goods** = 60 % of revenue, stable.  

**Optimistic**: Volume 12 %, ASP 4 % → FY2027 revenue ≈ $210 M.  
**Pessimistic**: Volume 4 %, ASP 2 % → FY2027 revenue ≈ $165 M.

---

### How to Use This Template

1. **Replace the placeholder numbers** with your actual data.  
2. **Add any sector‑specific drivers** (e.g., commodity price, regulatory caps).  
3. **Link every figure** to a source line in the assumptions table—this satisfies the “assumptions stated upfront” requirement.  
4. **Iterate**: after stakeholder review, adjust assumptions and re‑run the model.

*Note*: The only external evidence available in the current knowledge set is the Financial Nigeria news portal, which provides macro‑level context (e.g., AfCFTA digital‑trade rollout) that can be cited as a driver rationale【1】. If you need more granular industry data, you’ll have to import it from your internal vault or a subscription database.

## Web sources
1. [Financial Nigeria - Development and Finance](https://www.financialnigeria.com/) _(relevance 7, http)_

## Filtered sources _(2 dropped by validator)_
- ~~[Security Verification](https://www.ft.com/)~~ — bad-status (HTTP 403)
- ~~[Simple Page](https://www.investopedia.com/terms/f/finance.asp)~~ — bad-status (HTTP 403)

## Vault hits at time of research
_(none)_
