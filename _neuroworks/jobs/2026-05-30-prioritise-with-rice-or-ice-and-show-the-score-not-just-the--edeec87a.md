---
type: job
title: Prioritise with RICE or ICE — and show the score, not just the verdict
slug: prioritise-with-rice-or-ice-and-show-the-score-not-just-the--edeec87a
created: 2026-05-30T18:38:52.815Z
jobId: edeec87a-f494-4ff6-a79e-4aba0f9bfac2
status: succeeded
template: custom-product-manager-prioritise-with-rice-or-ice-and-show-the
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:31:30.608Z
finishedAt: 2026-05-30T18:38:52.815Z
---

# Prioritise with RICE or ICE — and show the score, not just the verdict

- **Status:** succeeded
- **Template:** custom-product-manager-prioritise-with-rice-or-ice-and-show-the
- **Started:** 2026-05-30T18:31:30.608Z
- **Finished:** 2026-05-30T18:38:52.815Z
- **Title:** Prioritise with RICE or ICE — and show the score, not just the verdict

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Prioritise with RICE or ICE — and show the score, not just the verdict\nDescription: Persona-derived starter task for \"Priya\"."
}
```

## Plan
Research RICE/ICE scoring to provide a score table.

### Steps
1. ✓ Researching "RICE scoring method product prioritisation" — vault + web — `research.deep` (13.4s)
2. ✓ Quality-checking the draft — `quality.check` (19.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (30.4s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
## Product Prioritisation Using the RICE Framework  

**Purpose**  
Provide a quantitative basis for ordering product features, ensuring that limited development capacity is allocated to the initiatives that deliver the greatest value.

**RICE Components**  

| Component | Definition | Typical Scale |
|-----------|------------|---------------|
| **Reach (R)** | Number of users or customers impacted within a given time frame (e.g., per quarter). | Absolute count or estimate (e.g., 5 k users). |
| **Impact (I)** | Expected effect on the target metric per user. Often expressed as a multiplier (e.g., 1 × , 2 × , 3 × ) or points (1‑5). | 1 – 5 points. |
| **Confidence (C)** | Certainty of the Reach, Impact, and Effort estimates. | Percentage (0 %–100 %). |
| **Effort (E)** | Total work required, measured in person‑weeks, person‑months, or similar units. | Person‑weeks/months. |

**Scoring Formula**  

\[
\text{RICE Score} = \frac{R \times I \times C}{E}
\]

(Reach × Impact × Confidence) divided by Effort. Higher scores indicate higher priority.

### Example Prioritisation Table

| Feature | Reach (R) | Impact (I) | Confidence (C) | Effort (E) | RICE Score |
|---------|-----------|------------|----------------|------------|------------|
| **Feature A** | 10 k users | 5 pts | 80 % | 4 person‑weeks | (10 000 × 5 × 0.8) / 4 = 10 000 |
| **Feature B** | 5 k users | 8 pts | 60 % | 2 person‑weeks | (5 000 × 8 × 0.6) / 2 = 9 600 |
| **Feature C** | 8 k users | 3 pts | 90 % | 6 person‑weeks | (8 000 × 3 × 0.9) / 6 = 3 600 |

**Decision**  
- **Feature A** attains the highest RICE score (10 000) and should be implemented first.  
- **Feature B** follows closely (9 600) and is the second priority.  
- **Feature C** scores substantially lower (3 600) and is placed third.

**Next Steps**  
1. Validate the underlying assumptions for each metric with stakeholder data.  
2. Refine estimates as more information becomes available.  
3. Re‑run the RICE calculation periodically to reflect changing market conditions.

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-05-30T18:31:30.693Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:31:31.725Z] Thinking about the best approach…
[2026-05-30T18:31:31.885Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:31:37.436Z] Plan ready: 1 step — Research RICE/ICE scoring to provide a score table..
[2026-05-30T18:31:37.441Z] Step 1 of 1: Researching "RICE scoring method product prioritisation" — vault + web
[2026-05-30T18:31:50.808Z] All sub-agents finished in 13.4s.
[2026-05-30T18:31:50.808Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:31:50.816Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:31:50.816Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:31:50.816Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:32:10.663Z] Wave 1 finished in 19.8s.
[2026-05-30T18:32:10.663Z] All sub-agents finished in 19.8s.
[2026-05-30T18:32:10.815Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:32:41.195Z] All sub-agents finished in 30.4s.
[2026-05-30T18:32:41.209Z] quality.check failed (score=0.42, issues: Answer does not provide any substantive information or RICE scoring details; it merely states lack of data and requests the note content; no inline citations support any claims; tone and structure do ) — re-synthesising with the large model
[2026-05-30T18:32:41.218Z] Thinking with openai/gpt-oss-120b:free (~3 059 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:33:22.620Z] quality rescue improved score: 0.42 → 0.93; using the rescued draft
[2026-05-30T18:33:22.620Z] peer review verdict=bad (Does not provide a RICE or ICE score; Fails to address the task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:33:22.649Z] Thinking with openai/gpt-oss-120b:free (~3 202 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:38:52.366Z] retry verdict=needs-work and quality not improved (0 ≤ 0.93); keeping the rescued/original draft
[2026-05-30T18:38:52.366Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:38:52.815Z] Vault commit: done.
```
</details>
