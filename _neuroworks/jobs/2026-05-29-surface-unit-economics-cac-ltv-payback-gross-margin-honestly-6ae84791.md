---
type: job
title: Surface unit economics (CAC, LTV, payback, gross margin) honestly
slug: surface-unit-economics-cac-ltv-payback-gross-margin-honestly-6ae84791
created: 2026-05-29T23:01:54.983Z
jobId: 6ae84791-0236-479e-95bf-49f0ad4bd1da
status: succeeded
template: custom-financial-analyst-surface-unit-economics-cac-ltv-payback-g
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T22:54:55.820Z
finishedAt: 2026-05-29T23:01:54.983Z
---

# Surface unit economics (CAC, LTV, payback, gross margin) honestly

- **Status:** succeeded
- **Template:** custom-financial-analyst-surface-unit-economics-cac-ltv-payback-g
- **Started:** 2026-05-29T22:54:55.820Z
- **Finished:** 2026-05-29T23:01:54.983Z
- **Title:** Surface unit economics (CAC, LTV, payback, gross margin) honestly

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Surface unit economics (CAC, LTV, payback, gross margin) honestly\nDescription: Persona-derived starter task for \"Fiona\"."
}
```

## Plan
Conduct deep research on unit economics metrics for a financial analyst.

### Steps
1. ✓ Researching "unit economics CAC LTV payback gross margin financial analyst best practices" — vault + web — `research.deep` (16.2s)
2. ✓ Quality-checking the draft — `quality.check` (126.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (13.2s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
## Unit‑Economics Assessment – Current State  

| Metric | Current Value | Benchmark / Target |
|--------|---------------|--------------------|
| **Customer‑Acquisition Cost (CAC)** | Not available | 12‑24 months payback (SMB‑mid‑market) |
| **Gross Margin** | Not available | 75‑85 % |
| **Lifetime Value (LTV)** | Not available | LTV / CAC > 3 |
| **Payback Period** | Not available | < 12 months (SMB) |

### Findings  
No internal vault notes or external references provide the required figures for CAC, LTV, payback period, or gross margin. The only material retrieved is a generic dictionary entry for “unit” and unrelated web pages, which do not contain financial‑metric data. Consequently, a quantitative analysis cannot be produced at this time. [3]

### Data Required to Complete the Analysis  
1. **Total CAC** – sales, marketing, tooling, and related expenses attributable to each new customer.  
2. **Gross‑margin definition** – revenue less cost of goods sold, hosting, support, payment‑processing fees, etc., expressed as a percentage.  
3. **LTV calculation inputs** – average revenue per customer, expected customer lifespan, churn rate, and any expansion revenue assumptions.  
4. **Payback period** – time required for the contribution margin from a new customer to cover its CAC.  
5. **Churn and expansion rates** – monthly logo churn and average expansion revenue per cohort.  
6. **Cohort window** – period over which LTV and churn are measured (e.g., 12‑month cohorts).  

### Next Steps  
Provide the six data points above, preferably in a spreadsheet or structured note, so a full unit‑economics report—including baseline, bull, and bear scenarios, sensitivity analysis, and actionable recommendations—can be generated.

*Assumed: the requester needs a concise snapshot to decide what data to collect before a detailed analysis.*

<details><summary>Log</summary>

```
[2026-05-29T22:54:55.852Z] Working as Clawbot — AI agent operator.
[2026-05-29T22:54:55.868Z] Thinking about the best approach…
[2026-05-29T22:54:56.127Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T22:55:00.725Z] Plan ready: 1 step — Conduct deep research on unit economics metrics for a financial analyst..
[2026-05-29T22:55:00.727Z] Step 1 of 1: Researching "unit economics CAC LTV payback gross margin financial analyst best practices" — vault + web
[2026-05-29T22:55:16.904Z] All sub-agents finished in 16.2s.
[2026-05-29T22:55:17.127Z] Thinking with openai/gpt-oss-20b:free (~3 268 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T22:55:18.150Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T22:55:34.410Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T22:55:34.410Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T22:55:34.415Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T22:55:34.415Z] Step 3 of 3: Security-scanning the note
[2026-05-29T22:55:34.415Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T22:57:41.284Z] Wave 1 finished in 126.9s.
[2026-05-29T22:57:41.284Z] All sub-agents finished in 126.9s.
[2026-05-29T22:57:41.292Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T22:57:54.494Z] All sub-agents finished in 13.2s.
[2026-05-29T22:57:54.532Z] quality.check failed (score=0.58, issues: The provided sources do not contain the required financial metrics and benchmarks.) — re-synthesising with the large model
[2026-05-29T22:57:54.594Z] Thinking with openai/gpt-oss-120b:free (~3 865 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:01:51.311Z] quality rescue improved score: 0.58 → 0.6; using the rescued draft
[2026-05-29T23:01:51.311Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:01:54.983Z] Vault commit: done.
```
</details>
