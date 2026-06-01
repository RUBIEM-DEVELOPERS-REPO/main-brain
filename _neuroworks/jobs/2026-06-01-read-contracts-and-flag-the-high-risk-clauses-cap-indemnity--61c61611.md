---
type: job
title: Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…
slug: read-contracts-and-flag-the-high-risk-clauses-cap-indemnity--61c61611
created: 2026-06-01T09:42:30.153Z
jobId: 61c61611-3b60-4f91-abf8-2b9cc009a8c8
status: succeeded
template: custom-contracts-reviewer-read-contracts-and-flag-the-high-risk-cl
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:36:22.776Z
finishedAt: 2026-06-01T09:42:30.153Z
---

# Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-read-contracts-and-flag-the-high-risk-cl
- **Started:** 2026-06-01T09:36:22.776Z
- **Finished:** 2026-06-01T09:42:30.153Z
- **Title:** Read contracts and flag the high-risk clauses (cap, indemnity, IP, auto-renew…

## Plan
Default research plan for: As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, indemnity, ip, auto-renewal, term)

### Steps
1. ✓ Researching "As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, ind…" — vault + web — `research.deep` (68.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (231.4s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – High‑Risk Clause Identification  

**Scope** – Review of contract provisions to flag clauses that typically pose elevated risk:  
1. **Cap** (liability limitation)  
2. **Indemnity**  
3. **Intellectual Property (IP)**  
4. **Auto‑renewal**  
5. **Term / termination**  

### Findings  
The vault entries referenced in the request contain only the titles of research notes and do not include the substantive text of any contracts or analysis of the clauses listed above. Consequently, no specific high‑risk provisions can be extracted or evaluated at this time.  

*Evidence:* The search results show only title lines for four notes (e.g., `0‑Inbox/202605290933‑research‑as‑a‑contracts‑reviewer‑read‑contracts‑and‑flag‑the‑high‑ris.md`) with no body content describing the clauses in question [1]. Peer review and quality‑check feedback confirm the absence of required analysis [2][4].  

### Recommended Next Steps  
1. **Provide the full text** of the contract(s) or the detailed research notes referenced (e.g., the markdown files listed above).  
2. **Specify any particular jurisdiction or industry** that may affect the interpretation of the clauses.  
3. **Indicate priority** among the five clause categories if a focused review is desired.  

Upon receipt of the complete documents, a clause‑by‑clause assessment will be performed, highlighting language that creates material exposure, ambiguous obligations, or unfavorable renewal/termination mechanics.  

---  
*Assumed: The user seeks a concise, evidence‑grounded summary of high‑risk clauses; without source text, the report can only note the lack of data and request the necessary documents.*

<details><summary>Log</summary>

```
[2026-06-01T09:36:22.782Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:36:23.785Z] Thinking about the best approach…
[2026-06-01T09:36:23.833Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:36:25.322Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:36:25.322Z] Plan ready: 1 step — Default research plan for: As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, indemnity, ip, auto-renewal, term).
[2026-06-01T09:36:25.328Z] Step 1 of 1: Researching "As a Contracts Reviewer, read contracts and flag the high-risk clauses (cap, ind…" — vault + web
[2026-06-01T09:37:34.161Z] All sub-agents finished in 68.8s.
[2026-06-01T09:37:34.161Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:37:34.167Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:37:34.167Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:37:34.167Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:37:41.112Z] Wave 1 finished in 6.9s.
[2026-06-01T09:37:41.112Z] All sub-agents finished in 6.9s.
[2026-06-01T09:37:41.121Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:41:32.502Z] All sub-agents finished in 231.4s.
[2026-06-01T09:41:32.506Z] quality.check failed (score=0.57, issues: does not provide requested analysis; insufficient citations) — re-synthesising with the large model
[2026-06-01T09:41:32.509Z] Thinking with openai/gpt-oss-120b:free (~3 243 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:41:54.095Z] quality rescue improved score: 0.57 → 0.85; using the rescued draft
[2026-06-01T09:41:54.095Z] peer review verdict=needs-work (Incomplete or incorrect list of high-risk clauses) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T09:41:54.099Z] Thinking with openai/gpt-oss-120b:free (~3 373 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:42:29.806Z] retry verdict=bad and quality not improved (0.69 ≤ 0.85); keeping the rescued/original draft
[2026-06-01T09:42:29.806Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:42:30.153Z] Vault commit: done.
```
</details>
