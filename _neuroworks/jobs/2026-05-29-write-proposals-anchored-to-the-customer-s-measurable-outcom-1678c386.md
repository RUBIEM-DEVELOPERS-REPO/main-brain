---
type: job
title: Write proposals anchored to the customer's measurable outcome, not feature lists
slug: write-proposals-anchored-to-the-customer-s-measurable-outcom-1678c386
created: 2026-05-29T23:14:25.638Z
jobId: 1678c386-1e31-40a6-87c5-8f3b0a044cfe
status: succeeded
template: custom-account-executive-write-proposals-anchored-to-the-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:07:02.040Z
finishedAt: 2026-05-29T23:14:25.638Z
---

# Write proposals anchored to the customer's measurable outcome, not feature lists

- **Status:** succeeded
- **Template:** custom-account-executive-write-proposals-anchored-to-the-customer
- **Started:** 2026-05-29T23:07:02.040Z
- **Finished:** 2026-05-29T23:14:25.638Z
- **Title:** Write proposals anchored to the customer's measurable outcome, not feature lists

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write proposals anchored to the customer's measurable outcome, not feature lists\nDescription: Persona-derived starter task for \"Drew\"."
}
```

## Plan
Default research plan for: As a Account Executive, write proposals anchored to the customer's measurable outcome, not feature lists.

Context: Role: Custom
Title: Write proposals anchored to the customer's measurable outcome, not feature lists
Description: Persona-derived starter task for "Drew"

### Steps
1. ✓ Researching "As a Account Executive, write proposals anchored to the customer's measurable ou…" — vault + web — `research.deep` (55.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (319.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✗ Asking a peer to review the draft — `peer.review` (8.9s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion
    error: review HTTP 503

## Answer
## Outcome‑Focused Proposal Framework  

### 1. Diagnose the Business Problem  
Begin with a succinct statement of the customer’s pain point, using the buyer’s own terminology.  
*Example:* “Your team currently loses X hours per week on Y, which translates to $Z in missed revenue.” This establishes that you understand the *why* behind the purchase and sets the stage for a results‑based value story.  

### 2. Define Target Metrics  
Agree on 1‑3 key performance indicators (KPIs) that the buyer will track after implementation.  
*Example:* “Goal: lift win‑rate by 7 percentage points (≈ 45 % relative improvement) within 6 months.” Concrete numbers give both parties a clear success yardstick and make the proposal testable.  

### 3. Quantify the Financial Impact  
Translate each KPI into dollar impact (revenue uplift, cost avoidance, productivity gain) using the buyer’s data whenever possible.  
*Example:* “A 7 pp win‑rate lift on a $5 M pipeline equals $350 k incremental revenue.” Demonstrating ROI in the buyer’s language justifies the spend.  

### 4. Map Solution to Outcomes  
Instead of enumerating features, describe how the solution directly enables the defined metrics.  
*Example:* “By automating data entry, the platform frees 30 % of reps’ time, allowing them to focus on high‑value activities that drive the win‑rate increase.”  

### 5. Provide a Success Roadmap  
Outline milestones, measurement checkpoints, and support mechanisms that ensure the outcomes are achieved and sustained.  

**Key Benefit:** By anchoring every section of the proposal to measurable outcomes rather than feature lists, the Account Executive creates a compelling, testable value narrative that aligns with the buyer’s objectives and accelerates decision‑making.  

*Source: [1]*

<details><summary>Log</summary>

```
[2026-05-29T23:07:02.070Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:07:02.083Z] Thinking about the best approach…
[2026-05-29T23:07:02.161Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:07:03.139Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:07:03.139Z] Plan ready: 1 step — Default research plan for: As a Account Executive, write proposals anchored to the customer's measurable outcome, not feature lists.

Context: Role: Custom
Title: Write proposals anchored to the customer's measurable outcome, not feature lists
Description: Persona-derived starter task for "Drew".
[2026-05-29T23:07:03.147Z] Step 1 of 1: Researching "As a Account Executive, write proposals anchored to the customer's measurable ou…" — vault + web
[2026-05-29T23:07:58.914Z] All sub-agents finished in 55.8s.
[2026-05-29T23:07:58.938Z] Thinking with openai/gpt-oss-20b:free (~2 805 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:08:00.200Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T23:08:31.700Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T23:08:31.700Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:08:31.713Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:08:31.713Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:08:31.713Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:13:42.853Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — fetch failed
[2026-05-29T23:13:50.757Z] Wave 1 finished in 319.0s.
[2026-05-29T23:13:50.757Z] All sub-agents finished in 319.0s.
[2026-05-29T23:13:50.763Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:13:52.029Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T23:13:54.524Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T23:13:59.633Z]   ✗ Asking a peer to review the draft: review HTTP 503
[2026-05-29T23:13:59.633Z] First wave had no successful sub-agents — stopping early. I'll summarise what was tried and why it didn't land.
[2026-05-29T23:13:59.633Z] All sub-agents finished in 8.9s.
[2026-05-29T23:13:59.640Z] quality.check failed (score=0.62, issues: Low citation coverage – only a single [1] marker, no inline citations for specific claims) — re-synthesising with the large model
[2026-05-29T23:13:59.649Z] Thinking with openai/gpt-oss-120b:free (~3 325 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:14:18.801Z] quality rescue improved score: 0.62 → 0.82; using the rescued draft
[2026-05-29T23:14:18.801Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:14:25.638Z] Vault commit: done.
```
</details>
