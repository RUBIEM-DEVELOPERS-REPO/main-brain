---
type: job
title: Compare proposed terms against industry-typical positions
slug: compare-proposed-terms-against-industry-typical-positions-0d86740a
created: 2026-05-29T14:32:44.344Z
jobId: 0d86740a-ff1c-42df-bedf-13411208ba62
status: succeeded
template: custom-contracts-reviewer-compare-proposed-terms-against-industry-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:30:53.957Z
finishedAt: 2026-05-29T14:32:44.344Z
---

# Compare proposed terms against industry-typical positions

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-compare-proposed-terms-against-industry-
- **Started:** 2026-05-29T14:30:53.957Z
- **Finished:** 2026-05-29T14:32:44.344Z
- **Title:** Compare proposed terms against industry-typical positions

## Plan
Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions

### Steps
1. ✓ Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web — `research.deep` (30.1s)
    > research signal detected ("industry-typical") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (33.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (15.6s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – Preliminary Assessment  

The vault entries referenced contain only the titles of research notes and no substantive clause language or benchmark data (see [vault:0-Inbox/202605290934-research-as-a-contracts-reviewer-compare-proposed-terms-against-indus.md] and [_neuroworks/jobs/2026-05-29-compare-proposed-terms-against-industry-typical-positions-6c9e2483.md] [1]). Consequently, a direct comparison of the proposed terms with industry‑typical positions cannot be performed at this stage.

### What is needed to proceed
1. **Specific contract excerpts** – the exact wording of the clauses you wish evaluated (e.g., payment schedule, liability cap, termination rights, IP ownership, confidentiality, indemnification).  
2. **Contextual details** – the type of transaction (SaaS license, services agreement, supply contract), jurisdiction, and the relative bargaining power of the parties.  
3. **Any existing benchmark sources** you already rely on (e.g., OpenView SaaS Benchmarks, DORA State of DevOps) so that the analysis can be aligned with recognized industry data.  

### Next steps
Upon receipt of the above information, the review will:
- Summarize common industry benchmarks for each clause.  
- Highlight where the proposed language aligns with or deviates from those benchmarks.  
- Offer practical negotiation suggestions to bring the terms closer to typical or more favorable positions.  

*Assumed: the user seeks a clause‑by‑clause comparison; clarification is required to deliver a substantive analysis.*

<details><summary>Log</summary>

```
[2026-05-29T14:30:53.965Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:30:54.805Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T14:30:54.805Z] Plan ready: 1 step — Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions.
[2026-05-29T14:30:54.809Z] Step 1 of 1: Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web
[2026-05-29T14:31:24.932Z] All sub-agents finished in 30.1s.
[2026-05-29T14:31:24.932Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:31:24.938Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:31:24.938Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:31:24.938Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:31:26.237Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T14:31:29.578Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T14:31:58.090Z] Wave 1 finished in 33.2s.
[2026-05-29T14:31:58.090Z] All sub-agents finished in 33.2s.
[2026-05-29T14:31:58.094Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:32:13.702Z] All sub-agents finished in 15.6s.
[2026-05-29T14:32:13.707Z] quality.check failed (score=0.57, issues: No substantive comparison provided; Citation marker present but no real source) — re-synthesising with the large model
[2026-05-29T14:32:13.715Z] Thinking with openai/gpt-oss-120b:free (~3 877 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:32:44.083Z] quality rescue improved score: 0.57 → 0.76; using the rescued draft
[2026-05-29T14:32:44.083Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:32:44.344Z] Vault commit: done.
```
</details>
