---
title: "Research: As a Financial Analyst, stress-test scenarios (base / bull / bear) before presenting a recommendation.

Context: Role: C"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: As a Financial Analyst, stress-test scenarios (base / bull / bear) before presenting a recommendation.

Context: Role: Custom
Title: Stress-test scenarios (base / bull / bear) before presenting a recommendation
Description: Persona-derived starter task for "Fiona"

**Answer**

I’m unable to locate any specific guidance on building base‑/bull‑/bear stress‑test scenarios in the evidence you provided. The only source supplied is a general news portal (Financial Nigeria) that does not contain methodology or examples for financial‑analysis stress testing.

Because the vault has no notes on this topic and the web source does not address it, I can only give a high‑level outline of a typical approach that analysts use. If you need a more detailed, evidence‑backed workflow, please add relevant vault documents or point me to a source that covers stress‑testing frameworks.

---

### Typical three‑scenario stress‑test framework

| Scenario | Purpose | Key Drivers to Vary | Typical Adjustments |
|----------|---------|----------------------|---------------------|
| **Base (or “most likely”)** | Represents the current consensus outlook. | Macro‑economic growth, interest rates, commodity prices, exchange rates, sector‑specific trends. | Use the latest consensus forecasts (e.g., IMF, World Bank) with modest deviations (±0‑5 %). |
| **Bull (optimistic)** | Tests performance if conditions improve beyond expectations. | Higher GDP growth, lower inflation, favorable policy changes, strong demand, lower financing costs. | Raise revenue growth rates, improve margins, reduce cost‑of‑capital assumptions (e.g., WACC ↓ 0.5‑1 %). |
| **Bear (pessimistic)** | Evaluates resilience under adverse conditions. | Slower growth, higher inflation, tighter credit, commodity price drops, regulatory setbacks. | Decrease revenue growth, compress margins, increase cost‑of‑capital (WACC ↑ 0.5‑1 %), add higher default or loss‑given‑default rates. |

#### Steps to build the scenarios

1. **Define the baseline model** – a full financial model (income statement, balance sheet, cash flow) built on the most recent consensus assumptions.
2. **Identify sensitivity levers** – the variables that most affect valuation (e.g., sales growth, operating margin, tax rate, capex, working‑capital turnover).
3. **Set quantitative ranges** – for each lever, decide realistic high/low values (often ±10‑20 % for revenue, ±5 % for margins, etc.). Use historical volatility or analyst forecasts as guides.
4. **Apply the ranges** – create three model runs:
   - **Base:** central values.
   - **Bull:** apply the high end of each lever (or a subset that drives upside).
   - **Bear:** apply the low end (or a subset that drives downside).
5. **Re‑calculate key outputs** – e.g., EBITDA, free cash flow, net present value, key ratios (ROE, debt‑to‑EBITDA).
6. **Analyze results** – compare valuation ranges, identify break‑points (e.g., debt covenant breaches), and assess the probability of each scenario if you have a view on macro‑risk.
7. **Document assumptions** – keep a clear table of all driver changes for transparency when presenting to stakeholders.

#### Presentation tips

- **Visualise** the three outcomes side‑by‑side (e.g., waterfall chart or scenario‑range chart).
- **Explain drivers** succinctly: “In the bear case, we assume a 2 % slowdown in GDP and a 150 bps increase in the policy rate, which cuts revenue growth by 8 %.”
- **Quantify risk** if possible: attach probabilities or a Monte‑Carlo simulation to show the distribution of outcomes.
- **Link to recommendations** – state how the stress‑test informs your recommendation (e.g., “Even under the bear case, the company maintains a debt‑to‑EBITDA of 2.5×, supporting a ‘Buy’ with a 12 % target upside.”).

---

**Next steps**

If you can provide vault notes, a specific industry focus, or a source that outlines a preferred stress‑testing methodology, I can tailor the framework, add concrete numbers, and cite the evidence directly.

## Web sources
1. [Financial Nigeria - Development and Finance](https://www.financialnigeria.com/) _(relevance 7, http)_

## Filtered sources _(2 dropped by validator)_
- ~~[Security Verification](https://www.ft.com/)~~ — bad-status (HTTP 403)
- ~~[Simple Page](https://www.investopedia.com/terms/f/finance.asp)~~ — bad-status (HTTP 403)

## Vault hits at time of research
_(none)_
