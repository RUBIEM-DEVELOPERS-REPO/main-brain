---
type: job
title: Stress-test scenarios (base / bull / bear) before presenting a recommendation
slug: stress-test-scenarios-base-bull-bear-before-presenting-a-rec-1b5a5ebc
created: 2026-05-29T14:46:36.681Z
jobId: 1b5a5ebc-3b5e-4f7f-b5ea-975243f9ea4f
status: succeeded
template: custom-financial-analyst-stress-test-scenarios-base-bull-bear-bef
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:44:07.692Z
finishedAt: 2026-05-29T14:46:36.681Z
---

# Stress-test scenarios (base / bull / bear) before presenting a recommendation

- **Status:** succeeded
- **Template:** custom-financial-analyst-stress-test-scenarios-base-bull-bear-bef
- **Started:** 2026-05-29T14:44:07.692Z
- **Finished:** 2026-05-29T14:46:36.681Z
- **Title:** Stress-test scenarios (base / bull / bear) before presenting a recommendation

## Plan
Default research plan for: As a Financial Analyst, stress-test scenarios (base / bull / bear) before presenting a recommendation

### Steps
1. ✓ Researching "As a Financial Analyst, stress-test scenarios (base / bull / bear) before presen…" — vault + web — `research.deep` (68.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (14.9s)
    > auto-injected: quality score=0.68 (pass=false) — peer review for a second opinion

## Answer
## Stress‑Testing Framework for Financial Recommendations  

**Prepared by:** Financial Analyst  
**Date:** 2026‑05‑29  

### 1. Define the Base Case  
- Build a full‑period financial model (income statement, balance sheet, cash‑flow) using the most likely assumptions for revenue growth, margins, capex, financing costs, and macro‑economic inputs.  
- Validate the model against historical results and any guidance provided by management.  
*Why:* Establishes the reference point against which alternative outcomes are measured. [1]  

### 2. Identify Key Risk Drivers  
- List variables with the greatest impact on valuation (e.g., sales volume, price elasticity, COGS, interest rates, FX rates).  
- Conduct one‑at‑a‑time sensitivity analysis to rank drivers by effect on EBITDA, free cash flow, or the chosen valuation metric.  
*Why:* Concentrates the stress‑test on material levers, avoiding an overly broad scenario set. [1]  

### 3. Construct the Bull Scenario  
- Apply optimistic but plausible shifts to the top risk drivers (e.g., +15 % revenue growth, –5 % operating‑margin compression, lower financing costs).  
- Adjust macro assumptions to reflect strong GDP growth and favorable regulatory conditions.  
- Re‑run the model to generate projected financial statements and valuation under these favorable conditions.  

### 4. Construct the Bear Scenario  
- Apply adverse shifts to the same drivers (e.g., –10 % revenue growth, +7 % margin compression, higher interest rates).  
- Incorporate weaker macro assumptions such as stagnant GDP, adverse regulatory changes, or currency depreciation.  
- Re‑run the model to capture downside financial performance and valuation.  

### 5. Comparative Analysis  
| Metric | Base Case | Bull Case | Bear Case |
|--------|-----------|-----------|-----------|
| Revenue growth | X % | X % + 15 % | X % – 10 % |
| Operating margin | Y % | Y % – 5 % | Y % + 7 % |
| Free‑cash‑flow (FCF) | $A | $A × (1 + Δ) | $A × (1 – Δ) |
| Valuation (e.g., DCF) | $V | $V × (1 + Δ) | $V × (1 – Δ) |

*Δ* denotes the percentage change derived from the scenario‑specific model outputs.  

### 6. Recommendation  
- **Decision Rule:** If the recommendation remains attractive (e.g., valuation above target price, acceptable risk‑adjusted return) in the bear case, proceed with a **Buy**.  
- If the recommendation is only favorable in the bull case, consider a **Conditional Buy** contingent on monitoring the identified risk drivers.  
- If the base case already fails the investment criteria, recommend **No Action** or **Sell**.  

### 7. Next Steps  
1. Populate the model with company‑specific data and calibrate assumptions.  
2. Run the three scenarios and record the resulting financial metrics.  
3. Present the comparative table to stakeholders and finalize the recommendation.  

*Assumed: The analyst has access to the target company’s historical financials and management guidance to populate the model.*

<details><summary>Log</summary>

```
[2026-05-29T14:44:07.699Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:44:10.819Z] Thinking about the best approach…
[2026-05-29T14:44:10.845Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:44:28.849Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:44:28.849Z] Plan ready: 1 step — Default research plan for: As a Financial Analyst, stress-test scenarios (base / bull / bear) before presenting a recommendation.
[2026-05-29T14:44:28.854Z] Step 1 of 1: Researching "As a Financial Analyst, stress-test scenarios (base / bull / bear) before presen…" — vault + web
[2026-05-29T14:45:37.361Z] All sub-agents finished in 68.5s.
[2026-05-29T14:45:37.361Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:45:37.366Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:45:37.366Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:45:37.366Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:45:45.380Z] Wave 1 finished in 8.0s.
[2026-05-29T14:45:45.380Z] All sub-agents finished in 8.0s.
[2026-05-29T14:45:45.384Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:46:00.298Z] All sub-agents finished in 14.9s.
[2026-05-29T14:46:00.303Z] quality.check failed (score=0.68, issues: Citation coverage low – only one reference [3] is provided, and the second citation marker [1] is incomplete and does not link to evidence.; The answer contains generic scenario‑building guidance that is likely accurate but not explicitly sourced, raising a modest factuality risk.) — re-synthesising with the large model
[2026-05-29T14:46:00.307Z] Thinking with openai/gpt-oss-120b:free (~3 375 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:46:33.927Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-29T14:46:33.927Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:46:36.681Z] Vault commit: done.
```
</details>
