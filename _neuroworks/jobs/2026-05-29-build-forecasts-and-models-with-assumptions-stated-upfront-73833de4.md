---
type: job
title: Build forecasts and models with assumptions stated upfront
slug: build-forecasts-and-models-with-assumptions-stated-upfront-73833de4
created: 2026-05-29T22:58:39.339Z
jobId: 73833de4-55cf-42d6-af9c-b2ef647ff0df
status: succeeded
template: custom-financial-analyst-build-forecasts-and-models-with-assumpti
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T22:52:53.379Z
finishedAt: 2026-05-29T22:58:39.339Z
---

# Build forecasts and models with assumptions stated upfront

- **Status:** succeeded
- **Template:** custom-financial-analyst-build-forecasts-and-models-with-assumpti
- **Started:** 2026-05-29T22:52:53.379Z
- **Finished:** 2026-05-29T22:58:39.339Z
- **Title:** Build forecasts and models with assumptions stated upfront

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Build forecasts and models with assumptions stated upfront\nDescription: Persona-derived starter task for \"Fiona\"."
}
```

## Plan
Default research plan for: As a Financial Analyst, build forecasts and models with assumptions stated upfront.

Context: Role: Custom
Title: Build forecasts and models with assumptions stated upfront
Description: Persona-derived starter task for "Fiona"

### Steps
1. ✓ Researching "As a Financial Analyst, build forecasts and models with assumptions stated upfro…" — vault + web — `research.deep` (101.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.5s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion

## Answer
## Financial‑Analyst Forecast Framework – Assumptions First  

### 1. Objective  
State the purpose of the model clearly.  
**Example:** *Project FY2027‑FY2031 top‑line revenue for Company X under a base‑case scenario.*  

### 2. Historical Data  
Collect at least 3‑5 years of actuals for revenue, COGS, SG&A, capex, and working‑capital items.  
**Example entry:** *Historical FY2022‑FY2024 revenue: $120 M, $138 M, $155 M (source: Company X 10‑K).*  

### 3. Key Drivers  
Identify the variables that most influence the line item being forecast.  

| Driver | Typical Sources | Assumption Example |
|--------|-----------------|--------------------|
| Unit volume growth | Management commentary, industry reports | *Assumption A – Unit volume growth = 8 % YoY (based on management’s 2025 market‑share plan).* |
| Price per unit | Historical pricing, competitor analysis | *Assumption B – Average selling price increases 2 % annually.* |
| Inflation | Macro‑economic data | *Assumption C – CPI growth 3 % per year.* |

### 4. Assumption Documentation  
For every assumption record:  

- **What** – the variable being assumed.  
- **Value** – numeric or descriptive figure.  
- **Source** – origin of the assumption.  
- **Rationale** – brief justification.  

**Template:**  
```
Assumption X – <Variable> = <Value> (source: <Source>; rationale: <Reason>).
```  

### 5. Model Construction  
Build the forecast model using the documented assumptions.  

- Structure the model in logical sections (Revenue, Expenses, Capex, Working‑capital).  
- Link each forecast cell to its underlying assumption cell to maintain traceability.  
- Perform sensitivity analysis by varying key assumptions (e.g., ±1 % volume growth, ±0.5 % price change).  

### 6. Review & Validation  
- Cross‑check model outputs against independent benchmarks (industry averages, analyst estimates).  
- Document any deviations and provide explanatory notes.  

### 7. Presentation  
- Summarize results in a concise executive summary.  
- Include a table of assumptions, a sensitivity tornado chart, and a brief commentary on risk factors.  

*Source: Financial‑Analyst Forecast Framework (Assumptions First) extracted from research.deep [1].*

<details><summary>Log</summary>

```
[2026-05-29T22:52:53.457Z] Working as Clawbot — AI agent operator.
[2026-05-29T22:52:53.585Z] Thinking about the best approach…
[2026-05-29T22:52:54.292Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T22:52:55.810Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T22:52:55.810Z] Plan ready: 1 step — Default research plan for: As a Financial Analyst, build forecasts and models with assumptions stated upfront.

Context: Role: Custom
Title: Build forecasts and models with assumptions stated upfront
Description: Persona-derived starter task for "Fiona".
[2026-05-29T22:52:57.880Z] Step 1 of 1: Researching "As a Financial Analyst, build forecasts and models with assumptions stated upfro…" — vault + web
[2026-05-29T22:54:39.279Z] All sub-agents finished in 101.4s.
[2026-05-29T22:54:39.291Z] Thinking with openai/gpt-oss-20b:free (~2 781 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T22:55:00.710Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T22:55:00.715Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T22:55:00.715Z] Step 3 of 3: Security-scanning the note
[2026-05-29T22:55:00.715Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T22:55:06.053Z] Wave 1 finished in 5.3s.
[2026-05-29T22:55:06.053Z] All sub-agents finished in 5.3s.
[2026-05-29T22:55:06.057Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T22:55:07.326Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T22:55:11.605Z] All sub-agents finished in 5.5s.
[2026-05-29T22:55:11.647Z] quality.check failed (score=0.62, issues: Low citation coverage – only one source cited for many statements) — re-synthesising with the large model
[2026-05-29T22:55:11.698Z] Thinking with openai/gpt-oss-120b:free (~3 379 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T22:58:38.794Z] quality rescue improved score: 0.62 → 0.81; using the rescued draft
[2026-05-29T22:58:38.794Z] Wrote to your second brain — committing the changes.
[2026-05-29T22:58:39.339Z] Vault commit: done.
```
</details>
