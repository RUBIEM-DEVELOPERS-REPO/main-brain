---
type: job
title: Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…
slug: read-contracts-and-flag-the-high-risk-clauses-cap-indemnity--c90f2457
created: 2026-05-29T09:33:52.131Z
jobId: c90f2457-876b-44ea-9415-1b4342535d5b
status: succeeded
template: custom-contracts-reviewer-read-contracts-and-flag-the-high-risk-cl
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:32:47.372Z
finishedAt: 2026-05-29T09:33:52.131Z
---

# Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-read-contracts-and-flag-the-high-risk-cl
- **Started:** 2026-05-29T09:32:47.372Z
- **Finished:** 2026-05-29T09:33:52.131Z
- **Title:** Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…

## Plan
Default research plan for: As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, indemnity, ip, auto-renewal, term)

### Steps
1. ✓ Researching "As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, ind…" — vault + web — `research.deep` (21.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.5s)
    > auto-injected: quality score=0.72 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – High‑Risk Clause Identification  

**Scope:** Flagging of high‑risk clauses within contracts, specifically:  
- Limitation of liability (cap)  
- Indemnification  
- Intellectual property (IP) ownership / licensing  
- Auto‑renewal provisions  
- Term and termination  

**Findings:**  
The available evidence consists solely of instructions for inserting symbols and section breaks in Microsoft Word and does not contain any material on contract‑review methodology, typical high‑risk clauses, or relevant legal guidance. Consequently, an evidence‑based analysis cannot be produced at this time.

**Requested Information to Proceed:**  
1. Copies or excerpts of the contracts to be reviewed.  
2. Any internal guidelines or checklists your organization uses for identifying high‑risk clauses.  
3. Definitions or thresholds your team applies to “cap” amounts, indemnity scope, IP rights, auto‑renewal triggers, and term lengths.  
4. Preferred format for the final report (e.g., tabular summary, narrative memo).  

_Assumed: The user seeks a concise, evidence‑based report; however, without relevant source material, the report must request additional inputs._

<details><summary>Log</summary>

```
[2026-05-29T09:32:47.382Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:32:47.991Z] Thinking about the best approach…
[2026-05-29T09:32:48.010Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:32:50.776Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:32:50.776Z] Plan ready: 1 step — Default research plan for: As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, indemnity, ip, auto-renewal, term).
[2026-05-29T09:32:50.781Z] Step 1 of 1: Researching "As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, ind…" — vault + web
[2026-05-29T09:33:11.865Z] All sub-agents finished in 21.1s.
[2026-05-29T09:33:11.865Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:33:11.872Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:33:11.872Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:33:11.872Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:33:19.419Z] Wave 1 finished in 7.5s.
[2026-05-29T09:33:19.419Z] All sub-agents finished in 7.5s.
[2026-05-29T09:33:19.423Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:33:22.935Z] All sub-agents finished in 3.5s.
[2026-05-29T09:33:22.940Z] quality.check failed (score=0.72, issues: does not address the requested task; provides a citation that does not support any substantive claim) — re-synthesising with the large model
[2026-05-29T09:33:22.945Z] Thinking with openai/gpt-oss-120b:free (~2 806 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:33:49.565Z] quality rescue improved score: 0.72 → 0.87; using the rescued draft
[2026-05-29T09:33:49.565Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:33:52.131Z] Vault commit: done.
```
</details>
