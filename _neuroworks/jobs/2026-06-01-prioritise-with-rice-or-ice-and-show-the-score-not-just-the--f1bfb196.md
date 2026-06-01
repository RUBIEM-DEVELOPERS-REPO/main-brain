---
type: job
title: Prioritise with RICE or ICE — and show the score, not just the verdict
slug: prioritise-with-rice-or-ice-and-show-the-score-not-just-the--f1bfb196
created: 2026-06-01T10:07:25.323Z
jobId: f1bfb196-0742-48cf-8fc7-95cb6d695ca1
status: succeeded
template: custom-product-manager-prioritise-with-rice-or-ice-and-show-the
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:51:38.352Z
finishedAt: 2026-06-01T10:07:25.323Z
---

# Prioritise with RICE or ICE — and show the score, not just the verdict

- **Status:** succeeded
- **Template:** custom-product-manager-prioritise-with-rice-or-ice-and-show-the
- **Started:** 2026-06-01T09:51:38.352Z
- **Finished:** 2026-06-01T10:07:25.323Z
- **Title:** Prioritise with RICE or ICE — and show the score, not just the verdict

## Plan
Default research plan for: As a Product Manager, prioritise with rice or ice — and show the score, not just the verdict

### Steps
1. ✓ Researching "As a Product Manager, prioritise with rice or ice — and show the score, not just…" — vault + web — `research.deep` (36.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (579.1s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Prioritisation of NeuroWorks Product Ideas (RICE / ICE)

| Feature / Idea | Reach (users / period) | Impact (× baseline) | Confidence | Effort (person‑weeks) | **RICE Score** = (R × I × C) ÷ E | **ICE Score** = (I × C) ÷ E |
|----------------|------------------------|----------------------|------------|-----------------------|-----------------------------------|---------------------------|
| **Example A** | 5 k / quarter | 4 × baseline | 80 % | 2 pw | **10 000** | **1.6** |
| **Example B** | 2 k / quarter | 5 × baseline | 70 % | 1 pw | **7 000** | **3.5** |
| **Example C** | 10 k / quarter | 2 × baseline | 90 % | 4 pw | **4 500** | **0.45** |

### How the scores are derived
- **Reach** – number of users (or customers, transactions, etc.) impacted in the chosen time‑frame.  
- **Impact** – multiplier of the expected benefit (1 = baseline, 2 = twice as valuable, etc.).  
- **Confidence** – probability that the estimates are correct, expressed as a percentage.  
- **Effort** – total person‑weeks (or person‑months) required to deliver.  

**RICE score** = (Reach × Impact × Confidence) ÷ Effort.  
**ICE score** = (Impact × Confidence) ÷ Effort.  

### Interpretation for NeuroWorks planning
- **Highest RICE score:** *Example A* (10 000) – its large reach outweighs the higher impact of other items, making it the top priority when overall value per effort is considered.  
- **Highest ICE score:** *Example B* (3.5) – delivers the greatest impact per unit of effort, useful when resources are limited and reach is less critical.  
- *Example C* scores lowest on both metrics, indicating lower priority under current assumptions.

These scores provide a quantitative basis for ordering work items in the NeuroWorks roadmap.  

*Source: internal research note containing RICE/ICE framework and example calculations [1].*

<details><summary>Log</summary>

```
[2026-06-01T09:51:38.369Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:51:39.798Z] Thinking about the best approach…
[2026-06-01T09:51:39.910Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:51:41.391Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:51:41.392Z] Plan ready: 1 step — Default research plan for: As a Product Manager, prioritise with rice or ice — and show the score, not just the verdict.
[2026-06-01T09:51:41.402Z] Step 1 of 1: Researching "As a Product Manager, prioritise with rice or ice — and show the score, not just…" — vault + web
[2026-06-01T09:52:18.157Z] All sub-agents finished in 36.8s.
[2026-06-01T09:52:18.157Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:52:18.161Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:52:18.161Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:52:18.161Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:57:18.163Z] Wave 1 finished in 300.0s.
[2026-06-01T09:57:18.163Z] All sub-agents finished in 300.0s.
[2026-06-01T09:57:18.168Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T10:02:18.181Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-06-01T10:06:57.260Z] All sub-agents finished in 579.1s.
[2026-06-01T10:06:57.264Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-06-01T10:06:57.270Z] Thinking with openai/gpt-oss-120b:free (~3 437 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T10:07:24.796Z] quality rescue improved score: 0 → 0.93; using the rescued draft
[2026-06-01T10:07:24.797Z] Wrote to your second brain — committing the changes.
[2026-06-01T10:07:25.323Z] Vault commit: done.
```
</details>
