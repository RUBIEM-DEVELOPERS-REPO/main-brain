---
type: job
title: Compare proposed terms against industry-typical positions
slug: compare-proposed-terms-against-industry-typical-positions-078f7117
created: 2026-05-29T19:47:15.259Z
jobId: 078f7117-e902-4082-b360-48b516f9850d
status: succeeded
template: custom-contracts-reviewer-compare-proposed-terms-against-industry-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:40:57.674Z
finishedAt: 2026-05-29T19:47:15.259Z
---

# Compare proposed terms against industry-typical positions

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-compare-proposed-terms-against-industry-
- **Started:** 2026-05-29T19:40:57.674Z
- **Finished:** 2026-05-29T19:47:15.259Z
- **Title:** Compare proposed terms against industry-typical positions

## Plan
Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions

### Steps
1. ✓ Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web — `research.deep` (25.2s)
    > research signal detected ("industry-typical") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (282.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (7.3s)
    > auto-injected: quality score=0.21 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – Guidance on Comparing Proposed Terms

**Current evidence:** The vault contains only task titles referencing this review; no contract excerpts or industry benchmark data are present. Web results returned unrelated hotel pages. Consequently, there is no source material from which to draw a direct term‑by‑term comparison. [1]

### What can be offered now
- **Framework for comparison:** Even without the specific language, a reviewer can assess a contract by checking the following common clauses against typical industry positions:
  1. **Scope of work / deliverables** – ensure definitions are precise and include measurable milestones.  
  2. **Payment terms** – look for net‑30/45 days, milestone‑based invoicing, and reasonable late‑payment penalties.  
  3. **Limitation of liability** – industry norm caps liability at 1–2 × the contract value, with exclusions for gross negligence.  
  4. **Termination rights** – standard practice includes a 30‑day notice clause and cure periods for breach.  
  5. **Confidentiality / data protection** – align with applicable regulations (e.g., GDPR, CCPA) and include standard “survival” periods (typically 3–5 years).  
  6. **Intellectual property** – typical positions grant the client a perpetual, worldwide, royalty‑free license to use deliverables, while the provider retains background IP.

These points reflect broadly accepted contract drafting norms and can serve as a checklist while awaiting the actual term text.

### Recommended next steps
1. **Locate the contract draft or a summary of key clauses** in the vault (e.g., `contracts/…/draft.md` or a note titled “Proposed Terms”).  
2. **Provide the excerpts** for the clauses listed above (or any others of concern).  
3. **Specify the industry or sector** (e.g., SaaS, professional services, manufacturing) so that any sector‑specific benchmarks can be applied.  
4. Once the excerpts are supplied, a detailed side‑by‑side comparison against the typical positions outlined here can be performed.

*Assumed: the user needs a practical checklist to prepare for the detailed review once the contract text is available.*

<details><summary>Log</summary>

```
[2026-05-29T19:40:57.692Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:40:59.563Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T19:40:59.563Z] Plan ready: 1 step — Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions.
[2026-05-29T19:40:59.570Z] Step 1 of 1: Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web
[2026-05-29T19:41:24.811Z] All sub-agents finished in 25.2s.
[2026-05-29T19:41:24.811Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:41:24.874Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:41:24.875Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:41:24.875Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:46:07.073Z] Wave 1 finished in 282.2s.
[2026-05-29T19:46:07.073Z] All sub-agents finished in 282.2s.
[2026-05-29T19:46:07.078Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:46:14.425Z] All sub-agents finished in 7.3s.
[2026-05-29T19:46:14.440Z] quality.check failed (score=0.21, issues: Lacks substantive claims without inline citations; Unclear next steps for the reviewer) — re-synthesising with the large model
[2026-05-29T19:46:14.553Z] Thinking with openai/gpt-oss-120b:free (~4 344 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:46:47.344Z] quality rescue improved score: 0.21 → 0.74; using the rescued draft
[2026-05-29T19:46:47.344Z] peer review verdict=needs-work (No attempt to provide any partial comparison or guidance; Could be more helpful by suggesting next steps or asking for s) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:46:47.368Z] Thinking with openai/gpt-oss-120b:free (~4 497 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:47:14.920Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T19:47:14.920Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:47:15.259Z] Vault commit: done.
```
</details>
