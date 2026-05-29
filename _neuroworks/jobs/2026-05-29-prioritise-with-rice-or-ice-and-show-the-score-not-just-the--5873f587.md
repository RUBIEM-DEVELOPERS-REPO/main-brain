---
type: job
title: Prioritise with RICE or ICE — and show the score, not just the verdict
slug: prioritise-with-rice-or-ice-and-show-the-score-not-just-the--5873f587
created: 2026-05-29T09:39:54.072Z
jobId: 5873f587-cf9c-4be8-bb7b-f94cbf2d59e8
status: succeeded
template: custom-product-manager-prioritise-with-rice-or-ice-and-show-the
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:38:09.218Z
finishedAt: 2026-05-29T09:39:54.072Z
---

# Prioritise with RICE or ICE — and show the score, not just the verdict

- **Status:** succeeded
- **Template:** custom-product-manager-prioritise-with-rice-or-ice-and-show-the
- **Started:** 2026-05-29T09:38:09.218Z
- **Finished:** 2026-05-29T09:39:54.072Z
- **Title:** Prioritise with RICE or ICE — and show the score, not just the verdict

## Plan
Research RICE scoring to provide scores and explanation.

### Steps
1. ✓ Researching "RICE scoring method product prioritisation" — vault + web — `research.deep` (11.0s)
2. ✓ Quality-checking the draft — `quality.check` (6.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (14.1s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
## Product Prioritisation Using RICE and ICE Frameworks  

**RICE (Reach × Impact × Confidence ÷ Effort)**  
- **Reach** – estimated number of users or events per period.  
- **Impact** – magnitude of benefit on a 1‑10 scale.  
- **Confidence** – certainty of estimates (0 – 1).  
- **Effort** – total work required (person‑months).  

| Feature | Reach (users / month) | Impact (1‑10) | Confidence (0‑1) | Effort (person‑months) | RICE score |
|---------|-----------------------|--------------|------------------|------------------------|------------|
| A | 10 000 | 8 | 0.9 | 2 | (10 000 × 8 × 0.9) ÷ 2 = 36 000 |
| B | 5 000 | 9 | 0.8 | 3 | (5 000 × 9 × 0.8) ÷ 3 = 12 000 |
| C | 15 000 | 5 | 0.7 | 4 | (15 000 × 5 × 0.7) ÷ 4 = 13 125 |

**Prioritisation (RICE)** – Feature A scores highest (36 000) and should be tackled first, followed by Feature C (13 125) and Feature B (12 000).

---

**ICE (Impact × Confidence ÷ Effort)** – omits Reach, useful when user‑base data are unavailable.

| Feature | Impact (1‑10) | Confidence (0‑1) | Effort (person‑months) | ICE score |
|---------|--------------|------------------|------------------------|-----------|
| A | 8 | 0.9 | 2 | (8 × 0.9) ÷ 2 = 3.6 |
| B | 9 | 0.8 | 3 | (9 × 0.8) ÷ 3 = 2.4 |
| C | 5 | 0.7 | 4 | (5 × 0.7) ÷ 4 = 0.875 |

**Prioritisation (ICE)** – Feature A again leads, then B, then C.

The tables provide both the raw scores and the resulting ordering, enabling clear, data‑driven decision‑making.  

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-05-29T09:38:09.226Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:38:10.031Z] Thinking about the best approach…
[2026-05-29T09:38:10.057Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:38:13.630Z] Plan ready: 1 step — Research RICE scoring to provide scores and explanation..
[2026-05-29T09:38:13.633Z] Step 1 of 1: Researching "RICE scoring method product prioritisation" — vault + web
[2026-05-29T09:38:24.586Z] All sub-agents finished in 11.0s.
[2026-05-29T09:38:24.586Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:38:24.592Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:38:24.592Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:38:24.592Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:38:30.862Z] Wave 1 finished in 6.3s.
[2026-05-29T09:38:30.862Z] All sub-agents finished in 6.3s.
[2026-05-29T09:38:30.865Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:38:44.960Z] All sub-agents finished in 14.1s.
[2026-05-29T09:38:44.966Z] quality.check failed (score=0.42, issues: refusal to answer; no inline citations) — re-synthesising with the large model
[2026-05-29T09:38:44.972Z] Thinking with openai/gpt-oss-120b:free (~2 980 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:39:21.095Z] quality rescue improved score: 0.42 → 0.86; using the rescued draft
[2026-05-29T09:39:21.095Z] peer review verdict=needs-work (Does not address the task of prioritising with RICE or ICE and showing a score; Lacks an example calculation) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:39:21.100Z] Thinking with openai/gpt-oss-120b:free (~3 133 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:39:53.823Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T09:39:53.823Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:39:54.072Z] Vault commit: done.
```
</details>
