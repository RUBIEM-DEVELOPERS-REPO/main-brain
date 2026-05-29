---
type: job
title: Competitor summary
slug: competitor-summary-19bd49cf
created: 2026-05-29T23:36:44.057Z
jobId: 19bd49cf-9f30-4951-b319-28394aebafa4
status: succeeded
template: custom-emp-competitor-summary
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:34:15.608Z
finishedAt: 2026-05-29T23:36:44.057Z
---

# Competitor summary

- **Status:** succeeded
- **Template:** custom-emp-competitor-summary
- **Started:** 2026-05-29T23:34:15.608Z
- **Finished:** 2026-05-29T23:36:44.057Z
- **Title:** Competitor summary

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Competitor summary\nDescription: Who they are, what they do better, what we do better, sales talking point."
}
```

## Plan
Research: competitors and summarise differences

### Steps
1. ✓ Researching "competitors and summarise differences" — vault + web — `research.deep` (32.6s)
    > research signal detected ("Research competitors") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (25.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (11.4s)
    > auto-injected: quality score=0.60 (pass=false) — peer review for a second opinion

## Answer
# Competitor Summary – NeuroWorks AI‑Workforce Platform  

**Date:** 2026‑05‑29 · **Author:** Clawbot  

## Current State of Knowledge  
The vault contains only task titles (e.g., “Research: competitors and summarise differences”) and no completed research notes that identify specific competitors, their positioning statements, feature comparisons, pricing, or sales talking points. The web sources retrieved during the prior search relate to IOSH safety training and are unrelated to the NeuroWorks AI‑workforce platform. Consequently, no substantive competitor data can be provided at this time.  

## Requested Deliverable (as specified)  
| Element | Status |
|---|---|
| Literal positioning (quoted) | Not available |
| 2‑3 things competitors do better than us | Not available |
| 2‑3 things we do better than competitors | Not available |
| Pricing (if available) | Not available |
| Sales talking point (ends with a customer question) | Not available |
| Unknowns (what we still need to learn) | Not available |
| Source dates | No relevant sources found |

## What Is Needed to Complete the Analysis  
1. **List of target competitors** – direct, adjacent, and substitute players in the AI‑task‑automation / AI‑augmented workforce market.  
2. **Quoted positioning statements** – exact wording from each competitor’s marketing or product pages.  
3. **Feature‑level comparisons** – documentation of at least two areas where each competitor outperforms NeuroWorks and two areas where NeuroWorks has an advantage.  
4. **Pricing information** – current starter‑plan prices or a note if pricing is “contact sales.” Include the date the pricing was captured.  
5. **Sales talking points** – existing or draft one‑sentence pitches that conclude with a customer‑question (e.g., “Would you like to see how our zero‑code orchestration reduces onboarding time by 80 %?”).  
6. **Any known gaps** – items such as undocumented integrations, upcoming product releases, or market signals that are currently unknown.  

Once the above information is supplied, a structured competitor comparison can be generated that meets the requested format.  

*Assumed: The analysis will focus on the NeuroWorks AI‑workforce platform and its competitors in the AI‑task‑automation space.*

<details><summary>Log</summary>

```
[2026-05-29T23:34:15.639Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:34:15.663Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T23:34:15.663Z] Plan ready: 1 step — Research: competitors and summarise differences.
[2026-05-29T23:34:15.694Z] Step 1 of 1: Researching "competitors and summarise differences" — vault + web
[2026-05-29T23:34:48.254Z] All sub-agents finished in 32.6s.
[2026-05-29T23:34:48.281Z] Thinking with openai/gpt-oss-20b:free (~3 584 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:35:13.467Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:35:13.476Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:35:13.477Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:35:13.477Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:35:39.205Z] Wave 1 finished in 25.7s.
[2026-05-29T23:35:39.205Z] All sub-agents finished in 25.7s.
[2026-05-29T23:35:39.212Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:35:40.173Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T23:35:50.614Z] All sub-agents finished in 11.4s.
[2026-05-29T23:35:50.620Z] quality.check failed (score=0.6, issues: No substantive competitor data provided; Citation [1] does not support any claims) — re-synthesising with the large model
[2026-05-29T23:35:50.631Z] Thinking with openai/gpt-oss-120b:free (~4 214 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:36:20.618Z] quality rescue improved score: 0.6 → 0.78; using the rescued draft
[2026-05-29T23:36:20.618Z] peer review verdict=needs-work (Does not provide any competitor analysis as requested; Fails to include positioning quotes, feature comparisons, pricing) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T23:36:20.858Z] Thinking with openai/gpt-oss-120b:free (~4 389 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:36:43.659Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T23:36:43.659Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:36:44.057Z] Vault commit: done.
```
</details>
