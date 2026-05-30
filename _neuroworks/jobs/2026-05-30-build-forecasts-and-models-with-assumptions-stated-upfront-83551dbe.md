---
type: job
title: Build forecasts and models with assumptions stated upfront
slug: build-forecasts-and-models-with-assumptions-stated-upfront-83551dbe
created: 2026-05-30T18:43:00.916Z
jobId: 83551dbe-3d73-4616-b037-e9bc13f1e429
status: succeeded
template: custom-financial-analyst-build-forecasts-and-models-with-assumpti
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:35:31.674Z
finishedAt: 2026-05-30T18:43:00.916Z
---

# Build forecasts and models with assumptions stated upfront

- **Status:** succeeded
- **Template:** custom-financial-analyst-build-forecasts-and-models-with-assumpti
- **Started:** 2026-05-30T18:35:31.674Z
- **Finished:** 2026-05-30T18:43:00.916Z
- **Title:** Build forecasts and models with assumptions stated upfront

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Build forecasts and models with assumptions stated upfront\nDescription: Persona-derived starter task for \"Fiona\"."
}
```

## Plan
Default research plan for: As a Financial Analyst, build forecasts and models with assumptions stated upfront

### Steps
1. ✓ Researching "As a Financial Analyst, build forecasts and models with assumptions stated upfro…" — vault + web — `research.deep` (50.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (10.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (35.0s)
    > auto-injected: quality score=0.65 (pass=false) — peer review for a second opinion

## Answer
## Financial‑Analysis Forecasting Framework – Assumptions First  

| Step | Action | Rationale (Assumption Focus) |
|------|--------|------------------------------|
| 1️⃣ | **Define the business question** – e.g., “What will net revenue be in FY 2027 if we launch Product X?” | Sets the scope and forces explicit identification of the key drivers that will become assumptions. |
| 2️⃣ | **List all quantitative inputs** – revenue streams, cost categories, growth rates, pricing, volume, churn, tax rates, CAPEX, etc. | Each input is an assumption that must be documented up‑front. |
| 3️⃣ | **Gather historical data** – collect 3‑5 years of actuals (or the longest reliable series) for every input. | Historical trends provide the baseline from which forward‑looking assumptions are justified. |
| 4️⃣ | **Build the base‑case model** – link inputs to outputs (e.g., revenue = price × units; EBITDA = revenue – COGS – SG&A). | The base case reflects the “most likely” scenario; formulas should be transparent. |
| 5️⃣ | **Document every assumption** – create an “Assumptions” tab that lists: <br>• Variable name <br>• Base‑case value <br>• Source (historical trend, market research, management guidance) <br>• Reasoning / confidence level | Guarantees that assumptions are stated upfront and the model is auditable. |
| 6️⃣ | **Develop scenario variants** – optimistic, pessimistic, stress; adjust key assumptions to show a range of outcomes. |
| 7️⃣ | **Run sensitivity analysis** – data‑tables or tornado charts to illustrate the impact of ±5‑10 % changes on critical metrics. |
| 8️⃣ | **Validate & iterate** – compare interim actuals, gather stakeholder feedback, and refine assumptions as new information arrives. |
| 9️⃣ | **Communicate results** – concise deck with executive summary, front‑page assumptions table, scenario outcomes, and sensitivity highlights. |
| 🔟 | **Archive for future use** – store the model and assumptions in a version‑controlled repository (e.g., NeuroWorks vault) for quick updates and audit trails. |

### Key Take‑aways  
- **Assumptions are listed before any calculations.**  
- **Every number traces back to a documented source and confidence level.**  
- **Scenarios and sensitivity analyses illustrate risk and uncertainty.**  
- **Iterative validation ensures the model stays aligned with actual performance.**  

*Source: internal research note “Financial‑analysis forecasting framework – assumptions first” captured in the vault at `0-Inbox/202605292254-research-as-a-financial-analyst-build-forecasts-and-models-with-assum.md`.*

<details><summary>Log</summary>

```
[2026-05-30T18:35:31.689Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:35:33.908Z] Thinking about the best approach…
[2026-05-30T18:35:33.966Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:35:35.277Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:35:35.277Z] Plan ready: 1 step — Default research plan for: As a Financial Analyst, build forecasts and models with assumptions stated upfront.
[2026-05-30T18:35:35.282Z] Step 1 of 1: Researching "As a Financial Analyst, build forecasts and models with assumptions stated upfro…" — vault + web
[2026-05-30T18:36:25.375Z] All sub-agents finished in 50.1s.
[2026-05-30T18:36:25.375Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:36:25.389Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:36:25.389Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:36:25.390Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:36:35.661Z] Wave 1 finished in 10.3s.
[2026-05-30T18:36:35.661Z] All sub-agents finished in 10.3s.
[2026-05-30T18:36:35.665Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:37:10.615Z] All sub-agents finished in 35.0s.
[2026-05-30T18:37:10.621Z] quality.check failed (score=0.65, issues: Low citation coverage – only one vault path and a single [1] reference, but many substantive claims lack inline citations.; No evidence of hallucinated facts; content is generic and likely accurate.) — re-synthesising with the large model
[2026-05-30T18:37:10.627Z] Thinking with openai/gpt-oss-120b:free (~3 828 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:37:46.133Z] quality rescue improved score: 0.65 → 0.93; using the rescued draft
[2026-05-30T18:37:46.133Z] peer review verdict=needs-work (Slightly verbose; could be more concise; Redundant phrasing in some steps) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:37:46.140Z] Thinking with openai/gpt-oss-120b:free (~3 971 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:43:00.518Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-30T18:43:00.519Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:43:00.916Z] Vault commit: done.
```
</details>
