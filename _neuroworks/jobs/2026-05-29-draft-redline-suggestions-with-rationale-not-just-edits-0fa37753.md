---
type: job
title: Draft redline suggestions with rationale, not just edits
slug: draft-redline-suggestions-with-rationale-not-just-edits-0fa37753
created: 2026-05-29T09:35:02.521Z
jobId: 0fa37753-91f3-43c1-be23-09f612c7de94
status: succeeded
template: custom-contracts-reviewer-draft-redline-suggestions-with-rationale
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:33:07.154Z
finishedAt: 2026-05-29T09:35:02.521Z
---

# Draft redline suggestions with rationale, not just edits

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-draft-redline-suggestions-with-rationale
- **Started:** 2026-05-29T09:33:07.154Z
- **Finished:** 2026-05-29T09:35:02.521Z
- **Title:** Draft redline suggestions with rationale, not just edits

## Plan
Default research plan for: As a Contracts Reviewer, draft redline suggestions with rationale, not just edits

### Steps
1. ✓ Researching "As a Contracts Reviewer, draft redline suggestions with rationale, not just edit…" — vault + web — `research.deep` (13.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.2s)
    > auto-injected: quality score=0.39 (pass=false) — peer review for a second opinion

## Answer
## Contracts Reviewer – Redline Suggestions & Rationale  

**Status:** Insufficient source material to generate concrete redline edits. The evidence catalog contains no validated contract excerpts, dates, contacts, or numerical references that can be verified. Consequently, any specific amendment would be speculative and not evidence‑based.

### What is missing
1. **Contract language** – the exact clauses or sections that require review.  
2. **Reference data** – dates, party names, monetary amounts, or jurisdictional details that appear in the agreement.  
3. **Contextual guidance** – any prior reviewer comments or policy documents that define the desired revision scope.

### Information needed to proceed
| Required Item | Why it matters |
|---------------|----------------|
| Full text of the clause(s) to be revised | Enables line‑by‑line redline suggestions. |
| Relevant governing law or jurisdiction | Determines enforceability and required statutory language. |
| Specific concerns from the requesting party (e.g., liability caps, termination triggers) | Guides the rationale for each amendment. |
| Any existing templates or corporate policy references | Ensures consistency with internal standards. |

### Skeleton of a redline response (to be populated once the above are provided)

```
[Clause X – Current Text]
- Delete: “____”  
  *Rationale:* Removes ambiguous language that could be interpreted against our interests.

- Insert: “____”  
  *Rationale:* Adds a clear limitation of liability to a maximum of $____, aligning with corporate risk policy.

- Modify: “____” → “____”  
  *Rationale:* Aligns the notice period with the statutory minimum of ___ days required in ___ jurisdiction.

[Clause Y – Current Text]
- Delete: “____”  
  *Rationale:* Eliminates an overly broad indemnity that imposes undue burden.

- Insert: “____”  
  *Rationale:* Introduces a reciprocal indemnity provision to balance obligations between parties.
```

*Please supply the contract excerpts and any pertinent details so the reviewer can furnish precise redline edits with supporting rationale.*  

*Assumed: The user seeks a professional, evidence‑grounded redline review; without source material, the response must request the necessary inputs.*

<details><summary>Log</summary>

```
[2026-05-29T09:33:07.162Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:33:07.906Z] Thinking about the best approach…
[2026-05-29T09:33:07.928Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:33:18.505Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:33:18.505Z] Plan ready: 1 step — Default research plan for: As a Contracts Reviewer, draft redline suggestions with rationale, not just edits.
[2026-05-29T09:33:18.511Z] Step 1 of 1: Researching "As a Contracts Reviewer, draft redline suggestions with rationale, not just edit…" — vault + web
[2026-05-29T09:33:32.031Z] All sub-agents finished in 13.5s.
[2026-05-29T09:33:32.031Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:33:32.037Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:33:32.037Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:33:32.038Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:33:39.149Z] Wave 1 finished in 7.1s.
[2026-05-29T09:33:39.149Z] All sub-agents finished in 7.1s.
[2026-05-29T09:33:39.153Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:33:44.359Z] All sub-agents finished in 5.2s.
[2026-05-29T09:33:44.366Z] quality.check failed (score=0.39, issues: does not address user request; lacks substantive content) — re-synthesising with the large model
[2026-05-29T09:33:44.370Z] Thinking with openai/gpt-oss-120b:free (~2 861 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:34:05.327Z] quality rescue improved score: 0.39 → 0.47; using the rescued draft
[2026-05-29T09:34:05.327Z] peer review verdict=bad (Does not provide any redline suggestions or rationale; Refuses to fulfill the task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:34:05.332Z] Thinking with openai/gpt-oss-120b:free (~3 009 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:35:02.249Z] retry verdict=needs-work but quality improved (0.47 → 0.9); using retry
[2026-05-29T09:35:02.249Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:35:02.521Z] Vault commit: done.
```
</details>
