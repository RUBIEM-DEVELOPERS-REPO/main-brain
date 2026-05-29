---
type: job
title: Build forecasts and models with assumptions stated upfront
slug: build-forecasts-and-models-with-assumptions-stated-upfront-6bb815d9
created: 2026-05-29T14:45:48.034Z
jobId: 6bb815d9-6b9e-4173-9b5b-788601688c76
status: succeeded
template: custom-financial-analyst-build-forecasts-and-models-with-assumpti
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:43:12.751Z
finishedAt: 2026-05-29T14:45:48.034Z
---

# Build forecasts and models with assumptions stated upfront

- **Status:** succeeded
- **Template:** custom-financial-analyst-build-forecasts-and-models-with-assumpti
- **Started:** 2026-05-29T14:43:12.751Z
- **Finished:** 2026-05-29T14:45:48.034Z
- **Title:** Build forecasts and models with assumptions stated upfront

## Plan
Conduct deep research on financial forecasting methods and assumptions to build models.

### Steps
1. ✓ Researching "financial forecasting models and assumptions best practices" — vault + web — `research.deep` (23.9s)
2. ✓ Quality-checking the draft — `quality.check` (7.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (16.8s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
## Financial Forecasting – Preliminary Outline  

**Purpose** – To establish a structured approach for building financial forecasts and models, with all key assumptions documented at the outset.

### 1. Core Modeling Framework  
- Select a forecasting horizon (e.g., 12‑month rolling, 3‑year strategic).  
- Choose a model type that aligns with data availability and business context (trend‑extrapolation, regression, discounted cash‑flow, scenario analysis).  

### 2. Required Input Data  
| Data Category | Typical Sources | Frequency | Notes |
|---|---|---|---|
| Historical revenue & expense statements | ERP / accounting system | Monthly/Quarterly | Must be cleaned for one‑off items |
| Market growth rates | Industry reports, analyst estimates | Annual | Use consensus where possible |
| Operational drivers (e.g., unit sales, pricing, headcount) | Sales CRM, HR system | Monthly/Quarterly | Link to revenue/expense line items |
| Capital structure & cost of capital | Treasury, market data | Quarterly | Needed for DCF valuations |

### 3. Key Assumptions to Define Up‑Front  
1. **Growth drivers** – assumptions on sales volume, price elasticity, and market share changes.  
2. **Cost behavior** – fixed vs. variable cost split, inflation assumptions for COGS and SG&A.  
3. **Capital expenditures** – timing and magnitude of asset purchases or disposals.  
4. **Working‑capital ratios** – days sales outstanding, inventory turnover, days payable outstanding.  
5. **Discount rate** – weighted average cost of capital (WACC) or hurdle rate.  

### 4. Suggested Modeling Steps  
1. **Data preparation** – normalize historical figures, adjust for seasonality.  
2. **Driver‑based projection** – build revenue model from volume × price, then apply cost assumptions.  
3. **Scenario analysis** – create base, optimistic, and pessimistic cases by varying the assumptions above.  
4. **Validation** – compare model outputs against consensus forecasts or prior periods for reasonableness.  

### 5. Information Needed to Proceed  
- Historical financial statements for the past 3‑5 years (income statement, balance sheet, cash flow).  
- Identified primary revenue and cost drivers specific to the business.  
- Target forecasting horizon and reporting frequency.  
- Any external market forecasts or benchmarks the organization relies on.  
- Preferred scenario definitions (e.g., what constitutes “optimistic”).  

*Assumed: the analyst will work with the finance team to gather the listed data and confirm the scenario parameters before model construction.*

<details><summary>Log</summary>

```
[2026-05-29T14:43:12.758Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:43:13.859Z] Thinking about the best approach…
[2026-05-29T14:43:13.885Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:43:29.648Z] Plan ready: 1 step — Conduct deep research on financial forecasting methods and assumptions to build models..
[2026-05-29T14:43:29.652Z] Step 1 of 1: Researching "financial forecasting models and assumptions best practices" — vault + web
[2026-05-29T14:43:53.512Z] All sub-agents finished in 23.9s.
[2026-05-29T14:43:53.512Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:43:53.517Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:43:53.517Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:43:53.517Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:44:00.749Z] Wave 1 finished in 7.2s.
[2026-05-29T14:44:00.749Z] All sub-agents finished in 7.2s.
[2026-05-29T14:44:00.753Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:44:01.797Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T14:44:17.583Z] All sub-agents finished in 16.8s.
[2026-05-29T14:44:17.588Z] quality.check failed (score=0.42, issues: Does not address the task; No substantive claims backed by citations) — re-synthesising with the large model
[2026-05-29T14:44:17.592Z] Thinking with openai/gpt-oss-120b:free (~2 769 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:45:14.486Z] quality rescue improved score: 0.42 → 0.86; using the rescued draft
[2026-05-29T14:45:14.486Z] peer review verdict=bad (Does not provide any forecast or model; Fails to state assumptions) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:45:14.491Z] Thinking with openai/gpt-oss-120b:free (~2 907 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:45:47.796Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T14:45:47.796Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:45:48.034Z] Vault commit: done.
```
</details>
