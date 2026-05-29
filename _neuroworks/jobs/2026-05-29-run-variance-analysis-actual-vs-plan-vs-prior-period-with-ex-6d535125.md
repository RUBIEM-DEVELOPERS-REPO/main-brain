---
type: job
title: Run variance analysis: actual vs plan vs prior period, with explanations
slug: run-variance-analysis-actual-vs-plan-vs-prior-period-with-ex-6d535125
created: 2026-05-29T14:45:58.315Z
jobId: 6d535125-51c4-47f7-9d78-615f96e21391
status: succeeded
template: custom-financial-analyst-run-variance-analysis-actual-vs-plan-vs-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:43:17.250Z
finishedAt: 2026-05-29T14:45:58.315Z
---

# Run variance analysis: actual vs plan vs prior period, with explanations

- **Status:** succeeded
- **Template:** custom-financial-analyst-run-variance-analysis-actual-vs-plan-vs-
- **Started:** 2026-05-29T14:43:17.250Z
- **Finished:** 2026-05-29T14:45:58.315Z
- **Title:** Run variance analysis: actual vs plan vs prior period, with explanations

## Plan
Default research plan for: As a Financial Analyst, run variance analysis: actual vs plan vs prior period, with explanations

### Steps
1. ✓ Researching "As a Financial Analyst, run variance analysis: actual vs plan vs prior period, w…" — vault + web — `research.deep` (69.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (10.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.4s)
    > auto-injected: quality score=0.61 (pass=false) — peer review for a second opinion

## Answer
## Variance Analysis – Actual vs. Plan vs. Prior Period  

| **Metric** | **Prior Period** | **Plan (Budget/Forecast)** | **Actual** | **Δ Actual‑Plan** | **Δ Actual‑Prior** | **Explanation / Drivers** |
|------------|------------------|----------------------------|------------|-------------------|--------------------|----------------------------|
| Revenue | $ X M | $ Y M | $ Z M | **$ Z‑Y M** ( %Δ = (Z‑Y)/Y × 100 %) | **$ Z‑X M** ( %Δ = (Z‑X)/X × 100 %) | • Market‑demand shift (new product launch, price changes)  <br>• Volume vs. price variance  <br>• Currency effects (if applicable) |
| Cost of Goods Sold (COGS) | $ A M | $ B M | $ C M | **$ C‑B M** ( %Δ = (C‑B)/B × 100 %) | **$ C‑A M** ( %Δ = (C‑A)/A × 100 %) | • Material‑price changes (raw‑material index)  <br>• Production efficiency (yield, waste)  <br>• Supplier‑contract renegotiations |
| Gross Profit | $ G M | $ H M | $ I M | **$ I‑H M** ( %Δ = (I‑H)/H × 100 %) | **$ I‑G M** ( %Δ = (I‑G)/G × 100 %) | • Combined effect of revenue and COGS variances  <br>• Mix‑shift toward higher‑margin SKUs |
| Operating Expenses (OPEX) | $ J M | $ K M | $ L M | **$ L‑K M** ( %Δ = (L‑K)/K × 100 %) | **$ L‑J M** ( %Δ = (L‑J)/J × 100 %) | • Staffing changes (hiring, overtime)  <br>• Marketing‑spend variance (campaigns, media mix)  <br>• Depreciation/amortisation schedule updates |
| EBITDA | $ M M | $ N M | $ O M | **$ O‑N M** ( %Δ = (O‑N)/N × 100 %) | **$ O‑M M** ( %Δ = (O‑M)/M × 100 %) | • Result of gross‑profit and OPEX variances  <br>• One‑time items (e.g., asset disposals, restructuring costs) |

**Key Take‑aways**  
- Positive Δ Actual‑Plan indicates performance above budget; negative indicates shortfall.  
- Δ Actual‑Prior highlights trend direction compared with the previous period, useful for assessing momentum.  
- Drivers listed per line item help focus investigative follow‑up (e.g., price vs. volume analysis for revenue, material‑price index for COGS).  

*Source: variance‑analysis template extracted from internal research note [1].*

<details><summary>Log</summary>

```
[2026-05-29T14:43:17.257Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:43:18.197Z] Thinking about the best approach…
[2026-05-29T14:43:18.224Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:43:19.927Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:43:19.927Z] Plan ready: 1 step — Default research plan for: As a Financial Analyst, run variance analysis: actual vs plan vs prior period, with explanations.
[2026-05-29T14:43:19.931Z] Step 1 of 1: Researching "As a Financial Analyst, run variance analysis: actual vs plan vs prior period, w…" — vault + web
[2026-05-29T14:44:29.827Z] All sub-agents finished in 69.9s.
[2026-05-29T14:44:29.827Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:44:29.833Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:44:29.833Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:44:29.833Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:44:40.036Z] Wave 1 finished in 10.2s.
[2026-05-29T14:44:40.036Z] All sub-agents finished in 10.2s.
[2026-05-29T14:44:40.040Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:44:43.483Z] All sub-agents finished in 3.4s.
[2026-05-29T14:44:43.487Z] quality.check failed (score=0.61, issues: No inline citations for substantive claims; generic template may lack specific evidence) — re-synthesising with the large model
[2026-05-29T14:44:43.492Z] Thinking with openai/gpt-oss-120b:free (~3 322 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:45:58.063Z] quality rescue improved score: 0.61 → 0.86; using the rescued draft
[2026-05-29T14:45:58.063Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:45:58.315Z] Vault commit: done.
```
</details>
