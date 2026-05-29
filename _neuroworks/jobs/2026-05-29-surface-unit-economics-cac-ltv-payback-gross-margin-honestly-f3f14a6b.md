---
type: job
title: Surface unit economics (CAC, LTV, payback, gross margin) honestly
slug: surface-unit-economics-cac-ltv-payback-gross-margin-honestly-f3f14a6b
created: 2026-05-29T14:47:48.103Z
jobId: f3f14a6b-65d1-48d6-904c-43826fc0ae7e
status: succeeded
template: custom-financial-analyst-surface-unit-economics-cac-ltv-payback-g
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:45:53.980Z
finishedAt: 2026-05-29T14:47:48.103Z
---

# Surface unit economics (CAC, LTV, payback, gross margin) honestly

- **Status:** succeeded
- **Template:** custom-financial-analyst-surface-unit-economics-cac-ltv-payback-g
- **Started:** 2026-05-29T14:45:53.980Z
- **Finished:** 2026-05-29T14:47:48.103Z
- **Title:** Surface unit economics (CAC, LTV, payback, gross margin) honestly

## Plan
Conduct deep research on unit economics metrics for a financial analyst.

### Steps
1. ✓ Researching "unit economics metrics cac ltv payback gross margin financial analyst perspectiv…" — vault + web — `research.deep` (23.4s)
2. ✓ Quality-checking the draft — `quality.check` (21.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.2s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
## Unit‑Economics Overview – Preliminary Assessment  

The current vault and indexed sources do not contain any quantitative data or analytical notes on the core SaaS unit‑economics metrics (Customer Acquisition Cost, Lifetime Value, CAC payback period, or gross margin) from a financial‑analyst perspective. The research query returned only unrelated “unit” definitions and no substantive financial content [1]. Consequently, a complete analysis cannot be produced at this time.

### Information Required to Complete the Analysis  
1. **Revenue data** – Monthly or annual recurring revenue (MRR/ARR) by cohort, including new‑logo and expansion revenue.  
2. **Cost data** – Detailed breakdown of sales‑and‑marketing spend (personnel, tools, campaigns) and any other acquisition‑related expenses.  
3. **Customer churn** – Gross and net churn rates (monthly or annual) and the methodology used to calculate them.  
4. **Gross‑margin inputs** – Direct cost components (hosting, support, payment processing, etc.) and the resulting margin percentage.  
5. **Cohort definitions** – Time windows for cohort analysis (e.g., 12‑month rolling cohorts) and any segmentation (SMB, mid‑market, enterprise).

### Suggested Skeleton for the Final Report  

| Metric | Value | Benchmark |
|--------|-------|-----------|
| **CAC** | `<$ X>` | `<$ Y–$ Z>` |
| **CAC Payback** | `<N months>` | `<12 months (SMB), 18 months (mid‑market)>` |
| **LTV (gross)** | `<$ X>` | `<3× CAC>` |
| **LTV / CAC** | `<ratio>` | `≥ 3` |
| **Gross Margin** | `<%>` | `75–85 %` |
| **Net Dollar Retention** | `<%>` | `≥ 100 %` |

*Assumptions* – To be defined once raw data is supplied (e.g., CAC includes fully‑loaded sales‑and‑marketing costs; churn is measured as gross monthly logo churn).

*Scenarios* – Base, bull, and bear cases will be modelled by varying churn, CAC, and margin assumptions.

*Recommendation* – Will be derived from the sensitivity analysis (e.g., focus on churn reduction if it drives the largest LTV impact).

---

*Assumed: the request is for a standard SaaS unit‑economics briefing; the outline follows the internal “unit‑economics” playbook.*

<details><summary>Log</summary>

```
[2026-05-29T14:45:53.987Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:45:54.725Z] Thinking about the best approach…
[2026-05-29T14:45:54.752Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:46:08.575Z] Plan ready: 1 step — Conduct deep research on unit economics metrics for a financial analyst..
[2026-05-29T14:46:08.579Z] Step 1 of 1: Researching "unit economics metrics cac ltv payback gross margin financial analyst perspectiv…" — vault + web
[2026-05-29T14:46:31.967Z] All sub-agents finished in 23.4s.
[2026-05-29T14:46:31.968Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:46:31.973Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:46:31.973Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:46:31.973Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:46:53.910Z] Wave 1 finished in 21.9s.
[2026-05-29T14:46:53.910Z] All sub-agents finished in 21.9s.
[2026-05-29T14:46:53.914Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:46:55.536Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T14:47:04.088Z] All sub-agents finished in 10.2s.
[2026-05-29T14:47:04.093Z] quality.check failed (score=0.58, issues: No inline citations provided; Citation coverage below required threshold) — re-synthesising with the large model
[2026-05-29T14:47:04.100Z] Thinking with openai/gpt-oss-120b:free (~3 519 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:47:45.450Z] quality rescue improved score: 0.58 → 0.86; using the rescued draft
[2026-05-29T14:47:45.450Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:47:48.103Z] Vault commit: done.
```
</details>
