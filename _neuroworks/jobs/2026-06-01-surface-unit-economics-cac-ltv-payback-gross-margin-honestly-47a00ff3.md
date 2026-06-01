---
type: job
title: Surface unit economics (CAC, LTV, payback, gross margin) honestly
slug: surface-unit-economics-cac-ltv-payback-gross-margin-honestly-47a00ff3
created: 2026-06-01T10:10:14.519Z
jobId: 47a00ff3-15bc-498d-a23c-fbaeffcdafb7
status: succeeded
template: custom-financial-analyst-surface-unit-economics-cac-ltv-payback-g
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:58:58.278Z
finishedAt: 2026-06-01T10:10:14.519Z
---

# Surface unit economics (CAC, LTV, payback, gross margin) honestly

- **Status:** succeeded
- **Template:** custom-financial-analyst-surface-unit-economics-cac-ltv-payback-g
- **Started:** 2026-06-01T09:58:58.278Z
- **Finished:** 2026-06-01T10:10:14.519Z
- **Title:** Surface unit economics (CAC, LTV, payback, gross margin) honestly

## Plan
Conduct deep research on unit economics metrics and capture findings.

### Steps
1. ✓ Researching "unit economics cac ltv payback gross margin financial analyst perspective" — vault + web — `research.deep` (11.5s)
2. ✓ Quality-checking the draft — `quality.check` (7.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (310.9s)
    > auto-injected: quality score=0.72 (pass=false) — peer review for a second opinion

## Answer
## Unit‑Economics Overview – Analyst Perspective  

### Current Data Availability  
The vault and web sources contain no specific figures for CAC, LTV, payback period, or gross margin for the company in question. The research query returned a “no relevant information” response, confirming that the required metrics are unavailable at this time【1】.  

### Generic Framework for Unit‑Economics Analysis  

| Metric | Definition | Typical Calculation | Key Insight |
|---|---|---|---|
| **Customer Acquisition Cost (CAC)** | Total cost to acquire a new paying customer. | (Sales + Marketing + Tools + On‑boarding) ÷ Number of new customers acquired in the period. | Reveals efficiency of go‑to‑market spend; must be defined clearly (fully‑loaded vs. paid‑only). |
| **Lifetime Value (LTV)** | Gross profit expected from a customer over the entire relationship. | (Average Revenue per Account × Gross margin %) ÷ Monthly churn rate. | Shows the revenue upside of each acquisition; higher LTV justifies higher CAC. |
| **Payback Period** | Time required for CAC to be recovered from net cash flow. | CAC ÷ (Monthly recurring revenue × Gross margin %). | Shorter payback (<12 mo for SMB, <18 mo for mid‑market) indicates healthier cash flow. |
| **Gross Margin** | Percentage of revenue remaining after direct costs. | (Revenue − Cost of Goods Sold) ÷ Revenue × 100%. | Benchmark range for SaaS is 75‑85 %; drives LTV and overall profitability. |

### Recommended Analytic Steps  
1. **Gather Source Data** – Pull the latest financial statements, sales‑ops reports, and marketing spend logs.  
2. **Define Cohorts** – Use 12‑month rolling cohorts to calculate churn, expansion, and revenue per account.  
3. **Apply the Framework** – Populate the table above with actual numbers, then compute LTV, CAC payback, and LTV/CAC ratio.  
4. **Scenario Modeling** – Build base, bull, and bear cases by varying churn (±1 pp) and CAC (±10 %).  
5. **Sensitivity Review** – Identify which assumption (e.g., churn, CAC, gross margin) most impacts LTV and payback, and prioritize actions accordingly.  

### Next Steps  
- Provide the relevant financial datasets (e.g., monthly revenue, marketing spend, churn logs).  
- Confirm the CAC definition your organization uses (fully‑loaded vs. paid‑only).  

*Assumed: the requester seeks a reusable template for unit‑economics analysis in the absence of company‑specific data.*

<details><summary>Log</summary>

```
[2026-06-01T09:58:58.286Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:58:59.080Z] Thinking about the best approach…
[2026-06-01T09:58:59.123Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:59:02.717Z] Plan ready: 1 step — Conduct deep research on unit economics metrics and capture findings..
[2026-06-01T09:59:02.719Z] Step 1 of 1: Researching "unit economics cac ltv payback gross margin financial analyst perspective" — vault + web
[2026-06-01T09:59:14.201Z] All sub-agents finished in 11.5s.
[2026-06-01T09:59:14.202Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:59:14.206Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:59:14.206Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:59:14.206Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:59:21.979Z] Wave 1 finished in 7.8s.
[2026-06-01T09:59:21.979Z] All sub-agents finished in 7.8s.
[2026-06-01T09:59:21.983Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T10:04:21.999Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-06-01T10:04:32.890Z] All sub-agents finished in 310.9s.
[2026-06-01T10:04:32.900Z] quality.check failed (score=0.72, issues: Answer does not provide requested unit economics information; lacks substantive content) — re-synthesising with the large model
[2026-06-01T10:04:32.923Z] Thinking with openai/gpt-oss-120b:free (~3 633 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T10:09:49.350Z] quality rescue produced score 0 (not better than 0.72); keeping the original
[2026-06-01T10:09:49.350Z] peer review verdict=needs-work (Does not provide any unit economics data or analysis; Lacks direct response to the task) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T10:09:49.364Z] Thinking with openai/gpt-oss-120b:free (~3 795 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T10:10:14.138Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-06-01T10:10:14.138Z] Wrote to your second brain — committing the changes.
[2026-06-01T10:10:14.519Z] Vault commit: done.
```
</details>
