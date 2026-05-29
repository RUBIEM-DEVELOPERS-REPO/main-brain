---
type: job
title: Screen CVs against a JD
slug: screen-cvs-against-a-jd-358ecabb
created: 2026-05-29T15:03:00.411Z
jobId: 358ecabb-6436-4653-adfc-92dd516c5c65
status: succeeded
template: custom-emp-cv-screening
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:00:36.372Z
finishedAt: 2026-05-29T15:03:00.411Z
---

# Screen CVs against a JD

- **Status:** succeeded
- **Template:** custom-emp-cv-screening
- **Started:** 2026-05-29T15:00:36.372Z
- **Finished:** 2026-05-29T15:03:00.411Z
- **Title:** Screen CVs against a JD

## Plan
Default research plan for: Screen these CVs against this job description. Pull 3 must-haves from the JD; rank candidates as SCREEN / MAYBE / PASS with one-sentence reasons. For SCREEN candidates, list 2-3 standout signals + 1-2 questions to probe at the call. Note any pipeline gaps. Reasons must be job-related (no proxy for protected class)

### Steps
1. ✓ Researching "Screen these CVs against this job description. Pull 3 must-haves from the JD; ra…" — vault + web — `research.deep` (56.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (15.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.8s)
    > auto-injected: quality score=0.46 (pass=false) — peer review for a second opinion

## Answer
## CV Screening – [Role] · 2026‑05‑29  

**Current status:** The job description and candidate CVs have not been provided in the available evidence. Consequently, the three must‑have qualifications, candidate evaluations, and pipeline‑gap analysis cannot be performed at this time.

**Next steps required to complete the screening**  
1. **Job description (JD)** – to extract the three must‑have qualifications and any preferred criteria.  
2. **Candidate CVs** – full resumes or relevant excerpts for each applicant.

Once these documents are supplied, I will deliver a concise, evidence‑grounded matrix that includes:  
- The three must‑haves drawn from the JD.  
- A ranked shortlist with SCREEN / MAYBE / PASS designations and one‑sentence reasons.  
- For each SCREEN candidate: 2–3 standout signals and 1–2 probing questions.  
- Identification of any pipeline gaps.

*From general knowledge — the search step didn’t return the JD or CVs; please provide the missing documents to proceed.*

<details><summary>Log</summary>

```
[2026-05-29T15:00:36.381Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:00:36.384Z] Thinking about the best approach…
[2026-05-29T15:00:36.413Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:00:37.699Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T15:00:37.699Z] Plan ready: 1 step — Default research plan for: Screen these CVs against this job description. Pull 3 must-haves from the JD; rank candidates as SCREEN / MAYBE / PASS with one-sentence reasons. For SCREEN candidates, list 2-3 standout signals + 1-2 questions to probe at the call. Note any pipeline gaps. Reasons must be job-related (no proxy for protected class).
[2026-05-29T15:00:37.703Z] Step 1 of 1: Researching "Screen these CVs against this job description. Pull 3 must-haves from the JD; ra…" — vault + web
[2026-05-29T15:01:33.856Z] All sub-agents finished in 56.2s.
[2026-05-29T15:01:33.866Z] Thinking with openai/gpt-oss-20b:free (~3 617 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:01:35.887Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T15:01:49.109Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T15:01:49.109Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:01:49.112Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:01:49.112Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:01:49.112Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:02:04.116Z] Wave 1 finished in 15.0s.
[2026-05-29T15:02:04.116Z] All sub-agents finished in 15.0s.
[2026-05-29T15:02:04.120Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T15:02:08.906Z] All sub-agents finished in 4.8s.
[2026-05-29T15:02:08.911Z] quality.check failed (score=0.46, issues: No screening performed; answer requests missing documents rather than providing analysis; Citation [1] is placeholder and not linked to evidence) — re-synthesising with the large model
[2026-05-29T15:02:08.921Z] Thinking with openai/gpt-oss-120b:free (~4 091 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:02:18.969Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-29T15:02:18.969Z] peer review verdict=bad (Does not perform the requested screening; instead requests missing documents; Fails to provide any analysis or ranking) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T15:02:18.978Z] Thinking with openai/gpt-oss-120b:free (~4 239 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:03:00.162Z] retry verdict=bad but quality improved (0.46 → 0.84); using retry
[2026-05-29T15:03:00.162Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:03:00.411Z] Vault commit: done.
```
</details>
