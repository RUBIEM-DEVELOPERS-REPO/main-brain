---
type: job
title: Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…
slug: read-contracts-and-flag-the-high-risk-clauses-cap-indemnity--6000484a
created: 2026-05-29T19:40:14.621Z
jobId: 6000484a-34f5-4598-bc53-04b09cad4343
status: succeeded
template: custom-contracts-reviewer-read-contracts-and-flag-the-high-risk-cl
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:38:55.915Z
finishedAt: 2026-05-29T19:40:14.621Z
---

# Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-read-contracts-and-flag-the-high-risk-cl
- **Started:** 2026-05-29T19:38:55.915Z
- **Finished:** 2026-05-29T19:40:14.621Z
- **Title:** Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…

## Plan
Default research plan for: As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, indemnity, ip, auto-renewal, term)

### Steps
1. ✓ Researching "As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, ind…" — vault + web — `research.deep` (22.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.8s)
    > auto-injected: quality score=0.45 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – High‑Risk Clause Identification  

**Prepared by:** Contracts Reviewer (Clawbot)  
**Date:** 2026‑05‑29  

### Summary  
The vault does not contain any contract documents nor a detailed checklist that defines the criteria for flagging high‑risk clauses such as caps, indemnities, intellectual‑property (IP) provisions, auto‑renewal terms, or overall term provisions. Consequently, a substantive analysis of specific clauses cannot be performed at this time.  

### Findings  
- The only items present are a research request and a default research plan referencing the task (see vault entries `0‑Inbox/202605290933‑research‑as‑a‑contracts‑reviewer‑read‑contracts‑and‑flag‑the‑high‑risk‑clauses.md` and `_neuroworks/jobs/2026‑05‑29‑read‑contracts‑and‑flag‑the‑high‑risk‑clauses‑cap‑indemnity‑…md`) — no contract text or review guidelines are available [1].  

### Recommended Next Steps  
1. **Provide the contract(s) to be reviewed.** Upload the full text (or a secure link) so the reviewer can scan for the target clause types.  
2. **Locate or create a review checklist** in the vault (e.g., `contracts/review‑checklist.md` or `legal/high‑risk‑clauses.md`). The checklist should outline:  
   - **Cap:** maximum liability limits, carve‑outs, and applicability.  
   - **Indemnity:** scope, trigger events, third‑party vs. direct claims, reciprocity.  
   - **IP:** ownership of pre‑existing IP, license scope, assignment of improvements, confidentiality.  
   - **Auto‑renewal:** renewal notice periods, automatic extensions, termination rights.  
   - **Term:** duration, renewal options, early‑termination provisions.  
3. **Once the contract and checklist are available**, the reviewer will:  
   - Extract each clause of the five categories.  
   - Evaluate language against the checklist criteria.  
   - Flag any clause that deviates from standard risk tolerances (e.g., unlimited caps, broad indemnities, ambiguous IP ownership, automatic renewals without notice, or overly long terms).  

### Conclusion  
Without the underlying contract documents or a defined review framework, the reviewer cannot flag high‑risk clauses. Supplying the necessary materials will enable a precise, evidence‑backed analysis.  

*Assumed: the user expects a concise professional report outlining the current limitation and the steps required to proceed.*

<details><summary>Log</summary>

```
[2026-05-29T19:38:55.925Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:38:56.619Z] Thinking about the best approach…
[2026-05-29T19:38:56.657Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:38:57.861Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:38:57.861Z] Plan ready: 1 step — Default research plan for: As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, indemnity, ip, auto-renewal, term).
[2026-05-29T19:38:57.865Z] Step 1 of 1: Researching "As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, ind…" — vault + web
[2026-05-29T19:39:20.162Z] All sub-agents finished in 22.3s.
[2026-05-29T19:39:20.163Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:39:20.170Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:39:20.170Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:39:20.170Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:39:25.392Z] Wave 1 finished in 5.2s.
[2026-05-29T19:39:25.392Z] All sub-agents finished in 5.2s.
[2026-05-29T19:39:25.396Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:39:31.241Z] All sub-agents finished in 5.8s.
[2026-05-29T19:39:31.249Z] quality.check failed (score=0.45, issues: No substantive analysis of high‑risk clauses provided; Insufficient citations (only placeholder [1] present)) — re-synthesising with the large model
[2026-05-29T19:39:31.256Z] Thinking with openai/gpt-oss-120b:free (~3 652 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:39:59.705Z] quality rescue improved score: 0.45 → 0.73; using the rescued draft
[2026-05-29T19:39:59.705Z] peer review verdict=needs-work (Not addressing the task – no clauses flagged; Potential hallucination of file names) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:39:59.712Z] Thinking with openai/gpt-oss-120b:free (~3 798 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:40:14.259Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T19:40:14.259Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:40:14.621Z] Vault commit: done.
```
</details>
