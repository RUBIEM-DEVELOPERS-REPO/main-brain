---
type: job
title: Screen CVs against a JD
slug: screen-cvs-against-a-jd-e1d02a51
created: 2026-05-29T23:30:05.481Z
jobId: e1d02a51-b7af-47da-af22-d3be5ee67aa4
status: succeeded
template: custom-emp-cv-screening
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:23:44.307Z
finishedAt: 2026-05-29T23:30:05.481Z
---

# Screen CVs against a JD

- **Status:** succeeded
- **Template:** custom-emp-cv-screening
- **Started:** 2026-05-29T23:23:44.307Z
- **Finished:** 2026-05-29T23:30:05.481Z
- **Title:** Screen CVs against a JD

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Screen CVs against a JD\nDescription: Ranked shortlist with reasons and concerns per candidate."
}
```

## Plan
Default research plan for: Screen these CVs against this job description. Pull 3 must-haves from the JD; rank candidates as SCREEN / MAYBE / PASS with one-sentence reasons. For SCREEN candidates, list 2-3 standout signals + 1-2 questions to probe at the call. Note any pipeline gaps. Reasons must be job-related (no proxy for protected class).

Context: Role: Custom
Title: Screen CVs against a JD
Description: Ranked shortlist

### Steps
1. ✓ Researching "Screen these CVs against this job description. Pull 3 must-haves from the JD; ra…" — vault + web — `research.deep` (16.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (312.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✗ Asking a peer to review the draft — `peer.review` (9.4s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion
    error: review HTTP 503

## Answer
## CV Screening – Custom Role  
**Date:** 2026‑05‑29  

**Status:** Unable to perform screening at this time  

The request requires a comparison of specific candidate CVs against a job description to extract three must‑have qualifications, rank each candidate (SCREEN / MAYBE / PASS), and note pipeline gaps. Neither the job description nor the candidate CVs were supplied, and the vault contains no relevant notes on this task. Consequently, no evidence can be cited to produce the required analysis.

### Required inputs to proceed
1. **Full job description** – at least three “must‑have” qualifications or skills.  
2. **Candidate CVs** – complete resumes or key excerpts for each applicant to be evaluated.  

Once these documents are provided, the deliverable will include:
- Extraction of the three must‑haves from the JD.  
- Ranked shortlist with concise, job‑related reasons for each recommendation.  
- For each SCREEN candidate: 2‑3 standout signals and 1‑2 probing interview questions.  
- Identification of any pipeline gaps (e.g., missing senior‑level experience, lack of required certification).

*Assumed: The user will supply the missing JD and CVs to enable a complete, evidence‑grounded screening.*

<details><summary>Log</summary>

```
[2026-05-29T23:23:44.322Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:23:44.331Z] Thinking about the best approach…
[2026-05-29T23:23:44.444Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:23:45.536Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:23:45.536Z] Plan ready: 1 step — Default research plan for: Screen these CVs against this job description. Pull 3 must-haves from the JD; rank candidates as SCREEN / MAYBE / PASS with one-sentence reasons. For SCREEN candidates, list 2-3 standout signals + 1-2 questions to probe at the call. Note any pipeline gaps. Reasons must be job-related (no proxy for protected class).

Context: Role: Custom
Title: Screen CVs against a JD
Description: Ranked shortlist.
[2026-05-29T23:23:45.545Z] Step 1 of 1: Researching "Screen these CVs against this job description. Pull 3 must-haves from the JD; ra…" — vault + web
[2026-05-29T23:24:02.418Z] All sub-agents finished in 16.9s.
[2026-05-29T23:24:02.441Z] Thinking with openai/gpt-oss-20b:free (~3 585 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:24:03.407Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T23:24:24.211Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T23:24:24.211Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:24:24.217Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:24:24.217Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:24:24.217Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:29:37.080Z] Wave 1 finished in 312.9s.
[2026-05-29T23:29:37.080Z] All sub-agents finished in 312.9s.
[2026-05-29T23:29:37.085Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:29:38.250Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T23:29:40.785Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T23:29:46.522Z]   ✗ Asking a peer to review the draft: review HTTP 503
[2026-05-29T23:29:46.523Z] First wave had no successful sub-agents — stopping early. I'll summarise what was tried and why it didn't land.
[2026-05-29T23:29:46.523Z] All sub-agents finished in 9.4s.
[2026-05-29T23:29:46.530Z] quality.check failed (score=0.57, issues: No job description or candidate CVs provided in the prompt.) — re-synthesising with the large model
[2026-05-29T23:29:46.551Z] Thinking with openai/gpt-oss-120b:free (~3 911 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:30:05.145Z] quality rescue improved score: 0.57 → 0.72; using the rescued draft
[2026-05-29T23:30:05.145Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:30:05.481Z] Vault commit: done.
```
</details>
