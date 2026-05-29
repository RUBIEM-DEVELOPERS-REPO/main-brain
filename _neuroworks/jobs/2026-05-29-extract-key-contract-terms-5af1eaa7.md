---
type: job
title: Extract key contract terms
slug: extract-key-contract-terms-5af1eaa7
created: 2026-05-29T15:03:59.922Z
jobId: 5af1eaa7-c806-4e5c-809a-f4cf2ffd5167
status: succeeded
template: custom-emp-contract-terms-extract
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:02:49.819Z
finishedAt: 2026-05-29T15:03:59.922Z
---

# Extract key contract terms

- **Status:** succeeded
- **Template:** custom-emp-contract-terms-extract
- **Started:** 2026-05-29T15:02:49.819Z
- **Finished:** 2026-05-29T15:03:59.922Z
- **Title:** Extract key contract terms

## Plan
Default research plan for: Extract key terms from this contract. Output as a table: term, our obligation, their obligation, deadline / date, risk (low/med/high), approval needed (legal / finance / exec). Then a ## Watch list of any clause that could bite us. Standard not-legal-advice caveat

### Steps
1. ✓ Researching "Extract key terms from this contract. Output as a table: term, our obligation, t…" — vault + web — `research.deep` (23.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.5s)
    > auto-injected: quality score=0.69 (pass=true) — peer review for a second opinion

## Answer
**Caveat:** This document is a reading aid only and does not constitute legal advice.

---

### Key Terms Extraction – Current Status

| Term | Our Obligation | Their Obligation | Deadline / Date | Risk | Approval Needed |
|------|----------------|------------------|-----------------|------|-----------------|
| – | – | – | – | – | – |

*No contract text was supplied, so specific clauses, obligations, dates, risk levels, or approval requirements cannot be identified.*  

*Evidence:* The request contained no contract content; the only sources retrieved were dictionary definitions and an unrelated download page, which do not contain contractual language [1][3].

---

## Watch List

| Clause | Potential Issue | Why It Could Bite Us |
|--------|-----------------|----------------------|
| – | – | – |

*Without the contract, no clauses can be flagged. Once the document is provided, a watch list will be generated based on typical risk factors such as non‑compete durations, indemnification scopes, data ownership, and termination rights.*  

*Evidence:* Absence of contract content in the provided material [1][3].

---

*Assumed: The user expects a populated table, but the contract text was not included in the prompt or vault, so extraction is not possible at this time.*

<details><summary>Log</summary>

```
[2026-05-29T15:02:49.829Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:02:49.830Z] Thinking about the best approach…
[2026-05-29T15:02:49.871Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:02:52.811Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T15:02:52.811Z] Plan ready: 1 step — Default research plan for: Extract key terms from this contract. Output as a table: term, our obligation, their obligation, deadline / date, risk (low/med/high), approval needed (legal / finance / exec). Then a ## Watch list of any clause that could bite us. Standard not-legal-advice caveat.
[2026-05-29T15:02:52.815Z] Step 1 of 1: Researching "Extract key terms from this contract. Output as a table: term, our obligation, t…" — vault + web
[2026-05-29T15:03:15.790Z] All sub-agents finished in 23.0s.
[2026-05-29T15:03:15.802Z] Thinking with openai/gpt-oss-20b:free (~3 535 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:03:27.163Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:03:27.167Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:03:27.167Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:03:27.167Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:03:35.917Z] Wave 1 finished in 8.8s.
[2026-05-29T15:03:35.917Z] All sub-agents finished in 8.8s.
[2026-05-29T15:03:35.922Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T15:03:41.409Z] All sub-agents finished in 5.5s.
[2026-05-29T15:03:41.409Z] peer review verdict=needs-work (Answer does not provide any extracted terms because no contract was supplied; it merely states a placeholder and watch l) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T15:03:41.420Z] Thinking with openai/gpt-oss-120b:free (~4 222 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:03:59.668Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T15:03:59.668Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:03:59.922Z] Vault commit: done.
```
</details>
