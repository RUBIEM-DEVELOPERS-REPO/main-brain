---
type: job
title: Screen CVs against a JD
slug: screen-cvs-against-a-jd-1929065d
created: 2026-05-29T09:50:33.998Z
jobId: 1929065d-60a8-49cc-8d91-af29e317b544
status: succeeded
template: custom-emp-cv-screening
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:48:38.415Z
finishedAt: 2026-05-29T09:50:33.998Z
---

# Screen CVs against a JD

- **Status:** succeeded
- **Template:** custom-emp-cv-screening
- **Started:** 2026-05-29T09:48:38.415Z
- **Finished:** 2026-05-29T09:50:33.998Z
- **Title:** Screen CVs against a JD

## Plan
Default research plan for: Screen these CVs against this job description. Pull 3 must-haves from the JD; rank candidates as SCREEN / MAYBE / PASS with one-sentence reasons. For SCREEN candidates, list 2-3 standout signals + 1-2 questions to probe at the call. Note any pipeline gaps. Reasons must be job-related (no proxy for protected class)

### Steps
1. ✓ Researching "Screen these CVs against this job description. Pull 3 must-haves from the JD; ra…" — vault + web — `research.deep` (25.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.1s)
    > auto-injected: quality score=0.19 (pass=false) — peer review for a second opinion

## Answer
## CV screening – Event‑Tech Workshop Engineer · 2026‑05‑29

**Must‑haves (derived from the available job description excerpt)**  
1. Experience designing, facilitating, or moderating interactive digital workshops / audience‑participation tools (e.g., live Q&A, polls, strategic workshops).  
2. Ability to configure and manage multi‑room virtual environments with multiple administrators and custom branding.  
3. Proven track record delivering end‑to‑end event‑tech solutions, including consulting, content design, and post‑event analytics. [1]

### Screening outcome  

| Candidate | Verdict | One‑sentence justification |
|-----------|---------|----------------------------|
| **No CVs supplied** | **PASS** | Without résumé data, no candidate can be evaluated against the three must‑haves. |

### Notes for the hiring manager  
- **Pipeline gaps**  
  * **Missing candidate data** – No CVs or résumé summaries were provided, preventing any meaningful assessment.  
  * **Incomplete job description** – Only three inferred must‑haves are available; seniority level, required tools, language proficiency, and nice‑to‑have criteria are unknown, limiting the depth of screening.  

**Next steps**  
1. Provide the CVs (or at least bullet‑point career highlights) for each applicant.  
2. Supply the complete job description so that must‑haves and nice‑to‑haves can be clearly identified.  
3. Once the data is available, apply the screening process to rank candidates as **SCREEN / MAYBE / PASS**, list standout signals for SCREEN candidates, and note any additional pipeline gaps.

<details><summary>Log</summary>

```
[2026-05-29T09:48:38.421Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:48:38.422Z] Thinking about the best approach…
[2026-05-29T09:48:38.450Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:48:42.015Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:48:42.015Z] Plan ready: 1 step — Default research plan for: Screen these CVs against this job description. Pull 3 must-haves from the JD; rank candidates as SCREEN / MAYBE / PASS with one-sentence reasons. For SCREEN candidates, list 2-3 standout signals + 1-2 questions to probe at the call. Note any pipeline gaps. Reasons must be job-related (no proxy for protected class).
[2026-05-29T09:48:42.020Z] Step 1 of 1: Researching "Screen these CVs against this job description. Pull 3 must-haves from the JD; ra…" — vault + web
[2026-05-29T09:49:07.549Z] All sub-agents finished in 25.5s.
[2026-05-29T09:49:07.560Z] Thinking with openai/gpt-oss-20b:free (~3 649 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:49:17.448Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:49:17.451Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:49:17.452Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:49:17.452Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:49:22.840Z] Wave 1 finished in 5.4s.
[2026-05-29T09:49:22.840Z] All sub-agents finished in 5.4s.
[2026-05-29T09:49:22.844Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:49:25.954Z] All sub-agents finished in 3.1s.
[2026-05-29T09:49:25.958Z] quality.check failed (score=0.19, issues: Overly generic and does not actually screen any CVs; claims about must‑haves are inferred without evidence; lacks required structure (SCREEN/MAYBE/PASS with reasons); no inline citations to support st; citation_coverage adjusted from 0.10 to 0.30 (found 1 citation markers in 10 substantive sentences)) — re-synthesising with the large model
[2026-05-29T09:49:25.968Z] Thinking with openai/gpt-oss-120b:free (~4 325 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:49:52.944Z] quality rescue improved score: 0.19 → 0.87; using the rescued draft
[2026-05-29T09:49:52.944Z] peer review verdict=bad (No CVs provided, so cannot screen candidates; Answer does not fulfill task requirements) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:49:52.957Z] Thinking with openai/gpt-oss-120b:free (~4 475 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:50:33.733Z] retry verdict=needs-work and quality not improved (0.55 ≤ 0.87); keeping the rescued/original draft
[2026-05-29T09:50:33.733Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:50:33.998Z] Vault commit: done.
```
</details>
