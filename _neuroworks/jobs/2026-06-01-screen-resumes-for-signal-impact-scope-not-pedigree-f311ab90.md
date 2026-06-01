---
type: job
title: Screen resumes for signal (impact + scope), not pedigree
slug: screen-resumes-for-signal-impact-scope-not-pedigree-f311ab90
created: 2026-06-01T10:08:31.051Z
jobId: f311ab90-1a3a-45f7-92b7-600187adc81f
status: succeeded
template: custom-recruiter-screen-resumes-for-signal-impact-scope-n
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T10:02:08.158Z
finishedAt: 2026-06-01T10:08:31.051Z
---

# Screen resumes for signal (impact + scope), not pedigree

- **Status:** succeeded
- **Template:** custom-recruiter-screen-resumes-for-signal-impact-scope-n
- **Started:** 2026-06-01T10:02:08.158Z
- **Finished:** 2026-06-01T10:08:31.051Z
- **Title:** Screen resumes for signal (impact + scope), not pedigree

## Plan
Default research plan for: As a Talent Recruiter, screen resumes for signal (impact + scope), not pedigree

### Steps
1. ✓ Researching "As a Talent Recruiter, screen resumes for signal (impact + scope), not pedigree" — vault + web — `research.deep` (33.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (1.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (8.1s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Guidance for Talent Recruiters – Screening Resumes for Signal (Impact + Scope) Rather Than Pedigree  

**Purpose** – Shift the evaluation focus from the prestige of schools or past employers to concrete evidence of what candidates have actually delivered and the breadth of responsibility they have handled.

### 1. Define the signal criteria  
- **Impact** – Measurable outcomes the candidate drove (e.g., revenue growth, cost reduction, product launches, user adoption). Look for quantified results, awards, or published case studies.  
- **Scope** – The size and complexity of the problems tackled (team size led, budget managed, cross‑functional initiatives, geographic reach, or technical breadth).  

### 2. Structure the resume review workflow  
1. **Pre‑screen checklist** – For each application, verify that the resume contains at least one bullet with a quantified result and one bullet describing the scope of responsibility.  
2. **Signal extraction** – Highlight the impact and scope statements; ignore brand names unless they are directly tied to a measurable achievement.  
3. **Scoring rubric** (example):  
   - **Impact (0‑5)** – 0 = no quantifiable outcome; 5 = multi‑million‑dollar effect or industry‑wide change.  
   - **Scope (0‑5)** – 0 = individual contributor on a tiny project; 5 = lead of multi‑team, multi‑region program.  
   - **Total score ≥ 8** – advance to the next stage.  

### 3. Interview preparation  
- Convert each high‑scoring bullet into a behavioral question: “Tell me about the project where you increased X by Y%—what was your role, who did you collaborate with, and how did you measure success?”  
- Probe for depth: ask for the decision‑making process, obstacles overcome, and how the outcome was sustained.  

### 4. Bias mitigation  
- **Blind the pedigree** – Remove school and company names from the initial screen; keep them only for later verification if needed.  
- **Standardize language** – Use the same impact/scope rubric for every candidate to ensure consistent comparison.  

### 5. Documentation  
- Record the extracted impact and scope bullets and the rubric scores in the applicant tracking system.  
- Summarize the top three signals per candidate in a one‑page reviewer note to aid quick decision‑making.  

---

*Assumed: The recruiter has access to full resumes and can edit the ATS view to hide pedigree information.*

<details><summary>Log</summary>

```
[2026-06-01T10:02:08.167Z] Working as Clawbot — AI agent operator.
[2026-06-01T10:02:08.972Z] Thinking about the best approach…
[2026-06-01T10:02:09.018Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T10:02:13.503Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T10:02:13.503Z] Plan ready: 1 step — Default research plan for: As a Talent Recruiter, screen resumes for signal (impact + scope), not pedigree.
[2026-06-01T10:02:13.506Z] Step 1 of 1: Researching "As a Talent Recruiter, screen resumes for signal (impact + scope), not pedigree" — vault + web
[2026-06-01T10:02:47.181Z] All sub-agents finished in 33.7s.
[2026-06-01T10:02:47.181Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T10:02:47.185Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T10:02:47.185Z] Step 3 of 3: Security-scanning the note
[2026-06-01T10:02:47.185Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T10:02:48.308Z] Wave 1 finished in 1.1s.
[2026-06-01T10:02:48.308Z] All sub-agents finished in 1.1s.
[2026-06-01T10:02:48.311Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T10:02:56.365Z] All sub-agents finished in 8.1s.
[2026-06-01T10:02:56.371Z] quality.check failed (score=0, issues: scorer failed: OpenRouter 503: {"error":{"message":"Provider returned error","code":503,"metadata":{"raw":"{\"error\":{\"message\":\"No backends available\",\"type\":\"capacit) — re-synthesising with the large model
[2026-06-01T10:02:56.383Z] Thinking with openai/gpt-oss-120b:free (~3 811 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T10:08:05.845Z] quality rescue improved score: 0 → 0.67; using the rescued draft
[2026-06-01T10:08:05.845Z] peer review verdict=bad (Does not provide guidance on screening resumes for signal; merely states lack of information and requests more content) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T10:08:05.858Z] Thinking with openai/gpt-oss-120b:free (~3 958 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T10:08:26.926Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-06-01T10:08:26.926Z] Wrote to your second brain — committing the changes.
[2026-06-01T10:08:31.050Z] Vault commit: done.
```
</details>
