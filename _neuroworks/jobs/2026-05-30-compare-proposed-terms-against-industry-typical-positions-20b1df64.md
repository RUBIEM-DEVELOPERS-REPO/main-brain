---
type: job
title: Compare proposed terms against industry-typical positions
slug: compare-proposed-terms-against-industry-typical-positions-20b1df64
created: 2026-05-30T18:24:14.511Z
jobId: 20b1df64-dc70-4aee-b269-3c3dfb2d1baf
status: succeeded
template: custom-contracts-reviewer-compare-proposed-terms-against-industry-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:18:58.185Z
finishedAt: 2026-05-30T18:24:14.511Z
---

# Compare proposed terms against industry-typical positions

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-compare-proposed-terms-against-industry-
- **Started:** 2026-05-30T18:18:58.185Z
- **Finished:** 2026-05-30T18:24:14.511Z
- **Title:** Compare proposed terms against industry-typical positions

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Compare proposed terms against industry-typical positions\nDescription: Persona-derived starter task for \"Logan\"."
}
```

## Plan
Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions

### Steps
1. ✓ Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web — `research.deep` (17.6s)
    > research signal detected ("industry-typical") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (273.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.7s)
    > auto-injected: quality score=0.77 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – Comparison Request  

**To:** [Requestor]  
**From:** Contracts Reviewer (Clawbot)  
**Date:** 2026‑05‑30  
**Subject:** Assessment of Proposed Contract Terms vs. Industry‑Typical Positions  

### Current Situation  
The vault entries titled “Research: As a Contracts Reviewer, compare proposed terms against industry‑typical positions” contain only the titles of the notes and no substantive language of the contract clauses to be evaluated. The web sources retrieved for this query are unrelated UEFA statistics and do not provide any benchmark data for contract terms. Consequently, there is no available evidence on either the specific proposed terms or the relevant industry standards that would enable a meaningful comparison.  

### Required Information  
To perform a thorough review, please provide one or more of the following:  

1. **Full text of the contract clauses** you wish to benchmark (e.g., termination notice, indemnification, limitation of liability, payment terms).  
2. **Any existing internal benchmark documents** or vault notes that contain industry‑typical ranges or precedent language for the same clauses.  
3. **Contextual details** such as the industry sector, transaction size, and counterpart profile (e.g., SaaS vendor, manufacturing supplier).  

### Next Steps  
Once the above materials are supplied, the review will:  

- Identify deviations from common practice.  
- Highlight risk‑enhancing or risk‑mitigating provisions.  
- Recommend language adjustments aligned with industry‑standard positions.  

*Evidence consulted:* the vault index shows only note titles without content and the web results are off‑topic [vault:0‑Inbox/202605290934-research-as-a-contracts-reviewer-compare-proposed-terms-against-indus.md] [1].

<details><summary>Log</summary>

```
[2026-05-30T18:18:58.202Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:18:59.341Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-30T18:18:59.341Z] Plan ready: 1 step — Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions.
[2026-05-30T18:18:59.348Z] Step 1 of 1: Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web
[2026-05-30T18:19:16.907Z] All sub-agents finished in 17.6s.
[2026-05-30T18:19:16.907Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:19:16.915Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:19:16.915Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:19:16.916Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:23:49.894Z] Wave 1 finished in 273.0s.
[2026-05-30T18:23:49.894Z] All sub-agents finished in 273.0s.
[2026-05-30T18:23:50.450Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:23:57.183Z] All sub-agents finished in 6.7s.
[2026-05-30T18:23:57.228Z] quality.check failed (score=0.77, issues: The answer is incomplete as it does not provide a specific contract language or relevant industry data.) — re-synthesising with the large model
[2026-05-30T18:23:57.268Z] Thinking with openai/gpt-oss-120b:free (~4 030 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:24:14.092Z] quality rescue improved score: 0.77 → 0.93; using the rescued draft
[2026-05-30T18:24:14.092Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:24:14.511Z] Vault commit: done.
```
</details>
