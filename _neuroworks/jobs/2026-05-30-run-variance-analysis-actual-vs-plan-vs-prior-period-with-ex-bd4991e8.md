---
type: job
title: Run variance analysis: actual vs plan vs prior period, with explanations
slug: run-variance-analysis-actual-vs-plan-vs-prior-period-with-ex-bd4991e8
created: 2026-05-30T18:47:55.533Z
jobId: bd4991e8-3c24-44f3-87fd-2475f22b85d8
status: succeeded
template: custom-financial-analyst-run-variance-analysis-actual-vs-plan-vs-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:35:44.546Z
finishedAt: 2026-05-30T18:47:55.533Z
---

# Run variance analysis: actual vs plan vs prior period, with explanations

- **Status:** succeeded
- **Template:** custom-financial-analyst-run-variance-analysis-actual-vs-plan-vs-
- **Started:** 2026-05-30T18:35:44.546Z
- **Finished:** 2026-05-30T18:47:55.533Z
- **Title:** Run variance analysis: actual vs plan vs prior period, with explanations

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Run variance analysis: actual vs plan vs prior period, with explanations\nDescription: Persona-derived starter task for \"Fiona\"."
}
```

## Plan
Default research plan for: As a Financial Analyst, run variance analysis: actual vs plan vs prior period, with explanations

### Steps
1. ✓ Researching "As a Financial Analyst, run variance analysis: actual vs plan vs prior period, w…" — vault + web — `research.deep` (51.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (305.8s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Variance Analysis – Actual vs. Plan vs. Prior Period  

| Item | Actual (Period N) | Plan (Budget N) | Prior Period (N‑1) | Variance % vs Plan | Variance % vs Prior | Likely Explanation* |
|------|-------------------|-----------------|--------------------|-------------------|--------------------|----------------------|
| Revenue | $ X | $ Y | $ Z | ((X‑Y)/Y) × 100% | ((X‑Z)/Z) × 100% | • Higher‑than‑expected sales in product A  <br>• Pricing uplift  <br>• Seasonality shift |
| Cost of Goods Sold (COGS) | $ A | $ B | $ C | ((A‑B)/B) × 100% | ((A‑C)/C) × 100% | • Improved supplier terms reduced cost  <br>• Volume increase changed mix |
| Gross Margin | $ G = X‑A | $ H = Y‑B | $ I = Z‑C | ((G‑H)/H) × 100% | ((G‑I)/I) × 100% | • Margin expansion from lower COGS  <br>• Higher‑margin product mix |
| Operating Expenses (OPEX) | $ O | $ P | $ Q | ((O‑P)/P) × 100% | ((O‑Q)/Q) × 100% | • One‑time marketing campaign  <br>• Staffing changes |
| EBITDA | $ E = G‑O | $ F = H‑P | $ J = I‑Q | ((E‑F)/F) × 100% | ((E‑J)/J) × 100% | • Combined effect of revenue upside and cost control |
| Net Income | $ N | $ M | $ L | ((N‑M)/M) × 100% | ((N‑L)/L) × 100% | • Tax‑rate variance  <br>• Interest‑expense shift |

\*Explanations list typical drivers; replace with the specific factors identified in your data (e.g., product‑level performance, market trends, pricing actions, cost‑saving initiatives, one‑off items).

### How to Execute the Analysis  

1. **Collect data** for the three periods (actual results, budgeted plan, prior‑period actuals).  
2. **Populate the table** with monetary values for each line‑item.  
3. **Calculate variance percentages** using the formulas shown in the table.  
4. **Investigate drivers** for each significant variance, documenting qualitative reasons in the “Likely Explanation” column.  
5. **Summarize findings** in a narrative that highlights key performance shifts and actionable insights.

> Source: variance‑analysis template extracted from the research note in the vault [1].

<details><summary>Log</summary>

```
[2026-05-30T18:35:44.556Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:35:48.511Z] Thinking about the best approach…
[2026-05-30T18:35:48.629Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:36:06.633Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:36:06.634Z] Plan ready: 1 step — Default research plan for: As a Financial Analyst, run variance analysis: actual vs plan vs prior period, with explanations.
[2026-05-30T18:36:06.638Z] Step 1 of 1: Researching "As a Financial Analyst, run variance analysis: actual vs plan vs prior period, w…" — vault + web
[2026-05-30T18:36:57.683Z] All sub-agents finished in 51.0s.
[2026-05-30T18:36:57.684Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:36:57.690Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:36:57.691Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:36:57.691Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:41:57.697Z] Wave 1 finished in 300.0s.
[2026-05-30T18:41:57.697Z] All sub-agents finished in 300.0s.
[2026-05-30T18:41:57.706Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:46:57.739Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T18:47:03.497Z] All sub-agents finished in 305.8s.
[2026-05-30T18:47:03.546Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T18:47:03.562Z] Thinking with openai/gpt-oss-120b:free (~3 414 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:47:55.092Z] quality rescue improved score: 0 → 0.86; using the rescued draft
[2026-05-30T18:47:55.092Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:47:55.533Z] Vault commit: done.
```
</details>
