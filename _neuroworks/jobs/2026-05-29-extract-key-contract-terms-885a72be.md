---
type: job
title: Extract key contract terms
slug: extract-key-contract-terms-885a72be
created: 2026-05-29T23:31:43.440Z
jobId: 885a72be-e566-4e11-8f27-3b4c45756bd2
status: succeeded
template: custom-emp-contract-terms-extract
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:26:11.771Z
finishedAt: 2026-05-29T23:31:43.430Z
---

# Extract key contract terms

- **Status:** succeeded
- **Template:** custom-emp-contract-terms-extract
- **Started:** 2026-05-29T23:26:11.771Z
- **Finished:** 2026-05-29T23:31:43.430Z
- **Title:** Extract key contract terms

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Extract key contract terms\nDescription: Obligations, deadlines, risks, approval flags."
}
```

## Plan
Default research plan for: Extract key terms from this contract. Output as a table: term, our obligation, their obligation, deadline / date, risk (low/med/high), approval needed (legal / finance / exec). Then a ## Watch list of any clause that could bite us. Standard not-legal-advice caveat.

Context: Role: Custom
Title: Extract key contract terms
Description: Obligations, deadlines, risks, approval flags

### Steps
1. ✓ Researching "Extract key terms from this contract. Output as a table: term, our obligation, t…" — vault + web — `research.deep` (26.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (251.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.5s)
    > auto-injected: quality score=0.49 (pass=false) — peer review for a second opinion

## Answer
**Contract‑terms extraction – pending source**

| Term | Our obligation | Their obligation | Deadline / Date | Risk | Approval needed |
|------|----------------|------------------|-----------------|------|-----------------|
| <TERM 1> | <our obligation> | <their obligation> | <date or period> | Low / Med / High | Legal / Finance / Exec |
| <TERM 2> | <our obligation> | <their obligation> | <date or period> | Low / Med / High | Legal / Finance / Exec |
| <TERM 3> | <our obligation> | <their obligation> | <date or period> | Low / Med / High | Legal / Finance / Exec |
| … | … | … | … | … | … |

## Watch list
- Any clause that imposes **unlimited liability**, **automatic renewal without clear notice**, **broad indemnification**, or **restrictive non‑compete / non‑solicitation** terms could pose significant exposure.  
- Look for **termination penalties** that trigger upon short‑notice exits, and **data‑retention or deletion** requirements that may conflict with our policies.  
- Verify that **payment schedules**, **interest on late fees**, and **audit rights** are clearly defined; vague language can create enforcement risk.

> **⚠ This is a reading‑aid, not legal advice. Have a qualified lawyer review the agreement before any commitment.**

---

*I cannot populate the table without the contract text. Please provide the relevant clauses or upload the document so the key terms, obligations, dates, risk assessments, and approval flags can be extracted accurately.* [1]

<details><summary>Log</summary>

```
[2026-05-29T23:26:11.784Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:26:11.789Z] Thinking about the best approach…
[2026-05-29T23:26:11.859Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:26:13.021Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:26:13.021Z] Plan ready: 1 step — Default research plan for: Extract key terms from this contract. Output as a table: term, our obligation, their obligation, deadline / date, risk (low/med/high), approval needed (legal / finance / exec). Then a ## Watch list of any clause that could bite us. Standard not-legal-advice caveat.

Context: Role: Custom
Title: Extract key contract terms
Description: Obligations, deadlines, risks, approval flags.
[2026-05-29T23:26:13.030Z] Step 1 of 1: Researching "Extract key terms from this contract. Output as a table: term, our obligation, t…" — vault + web
[2026-05-29T23:26:39.930Z] All sub-agents finished in 26.9s.
[2026-05-29T23:26:40.012Z] Thinking with openai/gpt-oss-20b:free (~3 384 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:26:41.591Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T23:26:48.178Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-29T23:26:48.178Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:26:48.246Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:26:48.246Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:26:48.246Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:30:59.773Z] Wave 1 finished in 251.5s.
[2026-05-29T23:30:59.773Z] All sub-agents finished in 251.5s.
[2026-05-29T23:30:59.778Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:31:03.279Z] All sub-agents finished in 3.5s.
[2026-05-29T23:31:03.290Z] quality.check failed (score=0.49, issues: The answer is unable to extract key terms due to lack of contract text.) — re-synthesising with the large model
[2026-05-29T23:31:03.314Z] Thinking with openai/gpt-oss-120b:free (~3 707 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:31:41.981Z] quality rescue improved score: 0.49 → 0.87; using the rescued draft
[2026-05-29T23:31:41.981Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:31:43.429Z] Vault commit: done.
```
</details>
