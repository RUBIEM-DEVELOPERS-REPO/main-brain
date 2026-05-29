---
type: job
title: Compare proposed terms against industry-typical positions
slug: compare-proposed-terms-against-industry-typical-positions-dd004b97
created: 2026-05-29T21:10:05.126Z
jobId: dd004b97-291a-49a0-ac02-9a1ed6c029f5
status: succeeded
template: custom-contracts-reviewer-compare-proposed-terms-against-industry-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:08:06.847Z
finishedAt: 2026-05-29T21:10:05.126Z
---

# Compare proposed terms against industry-typical positions

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-compare-proposed-terms-against-industry-
- **Started:** 2026-05-29T21:08:06.847Z
- **Finished:** 2026-05-29T21:10:05.126Z
- **Title:** Compare proposed terms against industry-typical positions

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Compare proposed terms against industry-typical positions\nDescription: Persona-derived starter task for \"Logan\"."
}
```

## Plan
Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions. Context: Role: Custom
Title: Compare proposed terms aga

### Steps
1. ✓ Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web — `research.deep` (29.4s)
    > research signal detected ("industry-typical") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (20.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (7.7s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Comparison of Proposed Contract Terms to Industry‑Typical Positions  

I was unable to locate any internal notes or external references that describe standard contract‑review benchmarks or typical negotiation positions for the clauses you are evaluating. The only web results returned are unrelated to contract analysis, and the vault contains no relevant documents ([1]).  

### What is needed to complete the analysis  

1. **Full text of the proposed clauses** (or a summary of the key provisions).  
2. **Any internal policy or precedent documents** that capture your organization’s preferred positions (e.g., `_knowledge/contracts-review.md`).  
3. **Industry or sector context** (e.g., SaaS, professional services, hardware) so that appropriate benchmark data can be sourced.  

### Next steps  

Provide the items above, and I will synthesize a side‑by‑side comparison that highlights where the proposed language aligns with, exceeds, or falls short of typical industry positions, and flag any negotiation opportunities.  

*Assumed: the user seeks a concise professional report; the request cannot be fulfilled without the missing contract details.*

<details><summary>Log</summary>

```
[2026-05-29T21:08:06.859Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:08:06.863Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T21:08:06.863Z] Plan ready: 1 step — Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions. Context: Role: Custom
Title: Compare proposed terms aga.
[2026-05-29T21:08:06.868Z] Step 1 of 1: Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web
[2026-05-29T21:08:36.262Z] All sub-agents finished in 29.4s.
[2026-05-29T21:08:36.278Z] Thinking with openai/gpt-oss-20b:free (~3 307 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:08:43.101Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:08:43.107Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:08:43.107Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:08:43.107Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T21:09:03.189Z] Wave 1 finished in 20.1s.
[2026-05-29T21:09:03.189Z] All sub-agents finished in 20.1s.
[2026-05-29T21:09:03.195Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T21:09:04.241Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T21:09:10.941Z] All sub-agents finished in 7.7s.
[2026-05-29T21:09:10.951Z] quality.check failed (score=0.57, issues: No substantive citations provided for claims; Unnecessary mention of unrelated adult content sources) — re-synthesising with the large model
[2026-05-29T21:09:10.971Z] Thinking with openai/gpt-oss-120b:free (~3 770 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T21:09:36.588Z] quality rescue improved score: 0.57 → 0.9; using the rescued draft
[2026-05-29T21:09:36.588Z] peer review verdict=bad (Does not provide a comparison of proposed terms to industry-typical positions; merely requests more information) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T21:09:36.598Z] Thinking with openai/gpt-oss-120b:free (~3 916 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T21:10:04.748Z] retry verdict=needs-work and quality not improved (0.73 ≤ 0.9); keeping the rescued/original draft
[2026-05-29T21:10:04.748Z] Wrote to your second brain — committing the changes.
[2026-05-29T21:10:05.126Z] Vault commit: done.
```
</details>
