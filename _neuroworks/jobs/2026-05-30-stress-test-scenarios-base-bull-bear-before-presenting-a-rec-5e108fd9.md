---
type: job
title: Stress-test scenarios (base / bull / bear) before presenting a recommendation
slug: stress-test-scenarios-base-bull-bear-before-presenting-a-rec-5e108fd9
created: 2026-05-30T18:45:09.256Z
jobId: 5e108fd9-0db1-4233-91b8-8663d31275fe
status: succeeded
template: custom-financial-analyst-stress-test-scenarios-base-bull-bear-bef
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:37:26.378Z
finishedAt: 2026-05-30T18:45:09.256Z
---

# Stress-test scenarios (base / bull / bear) before presenting a recommendation

- **Status:** succeeded
- **Template:** custom-financial-analyst-stress-test-scenarios-base-bull-bear-bef
- **Started:** 2026-05-30T18:37:26.378Z
- **Finished:** 2026-05-30T18:45:09.256Z
- **Title:** Stress-test scenarios (base / bull / bear) before presenting a recommendation

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Stress-test scenarios (base / bull / bear) before presenting a recommendation\nDescription: Persona-derived starter task for \"Fiona\"."
}
```

## Plan
Conduct deep research on financial stress‑testing scenarios to prepare a recommendation.

### Steps
1. ✓ Researching "financial stress testing scenarios base bull bear analysis methods" — vault + web — `research.deep` (28.1s)
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.0s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Stress‑Testing Framework for Financial Analysis  

**Objective** – Evaluate the resilience of the target investment/portfolio under three distinct outlooks:  

| Scenario | Economic assumptions | Key drivers | Typical adjustments |
|----------|----------------------|-------------|----------------------|
| **Base** | Continuation of current macro trends; inflation near target; moderate growth. | GDP growth ≈ 2‑3 %, interest rates stable, commodity prices flat. | Forecasts use consensus estimates from recent analyst surveys; balance‑sheet items remain unchanged. |
| **Bull** | Accelerated growth and favorable market conditions. | GDP growth ≥ 4 %, lower‑than‑expected inflation, declining rates, strong earnings revisions. | Revenue growth rates are uplifted (e.g., +10‑15 % YoY), cost‑of‑capital reduced, credit spreads tighten. |
| **Bear** | Downturn scenario with heightened stress. | GDP contraction ≤ ‑1 %, rising inflation, higher rates, deteriorating credit quality. | Revenue growth is cut (‑10‑‑20 % YoY), cost‑of‑capital increased, higher default probabilities, liquidity buffers reduced. |

### Methodology  

1. **Define macro‑economic variables** (GDP, inflation, interest rates, FX, commodity prices) for each scenario using reputable sources (e.g., IMF World Economic Outlook, central‑bank projections).  
2. **Map variables to financial statement impacts**:  
   - Revenue → demand elasticity to GDP/FX.  
   - Cost of goods sold → commodity price exposure.  
   - Financing costs → interest‑rate assumptions.  
   - Credit risk → default‑rate adjustments.  
3. **Quantitative modeling**:  
   - Build a deterministic cash‑flow model that incorporates the scenario‑specific assumptions.  
   - Run sensitivity analyses on key levers (e.g., margin compression, working‑capital cycles).  
4. **Risk metrics**: Calculate impact on:  
   - Net income, EPS, and cash flow.  
   - Leverage ratios (Debt/EBITDA, Debt/Equity).  
   - Liquidity ratios (Current, Quick).  
   - Value‑at‑Risk (VaR) or Expected Shortfall if market‑risk exposure is material.  
5. **Stress‑test outcomes**:  
   - Compare each scenario to the base case to quantify upside/downside potential.  
   - Identify thresholds where covenant breaches or liquidity shortfalls occur.  
6. **Recommendation synthesis** – Summarize the range of possible outcomes, highlight the most material risks uncovered in the bear case, and assess whether the investment’s risk‑adjusted return remains acceptable.  

---

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-05-30T18:37:26.401Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:37:27.277Z] Thinking about the best approach…
[2026-05-30T18:37:27.553Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:37:37.428Z] Plan ready: 1 step — Conduct deep research on financial stress‑testing scenarios to prepare a recommendation..
[2026-05-30T18:37:37.443Z] Step 1 of 1: Researching "financial stress testing scenarios base bull bear analysis methods" — vault + web
[2026-05-30T18:38:05.578Z] All sub-agents finished in 28.1s.
[2026-05-30T18:38:05.578Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:38:05.587Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:38:05.587Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:38:05.587Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:43:05.594Z] Wave 1 finished in 300.0s.
[2026-05-30T18:43:05.594Z] All sub-agents finished in 300.0s.
[2026-05-30T18:43:05.606Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:43:10.617Z] All sub-agents finished in 5.0s.
[2026-05-30T18:43:10.623Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T18:43:10.628Z] Thinking with openai/gpt-oss-120b:free (~2 930 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:43:45.571Z] quality rescue improved score: 0 → 0.93; using the rescued draft
[2026-05-30T18:43:45.571Z] peer review verdict=bad (Does not provide requested stress‑testing methodology; Refuses to answer instead of giving content) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:43:45.579Z] Thinking with openai/gpt-oss-120b:free (~3 076 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:43:46.707Z] Synth hiccup (OpenRouter 503: {"error":{"message":"Provider returned error","code":503,"metada) — retrying once in 2s.
[2026-05-30T18:45:04.121Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-30T18:45:06.559Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-30T18:45:06.559Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:45:09.256Z] Vault commit: done.
```
</details>
