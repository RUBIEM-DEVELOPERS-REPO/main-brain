---
type: job
title: Screen resumes for signal (impact + scope), not pedigree
slug: screen-resumes-for-signal-impact-scope-not-pedigree-118647c6
created: 2026-05-29T14:49:28.047Z
jobId: 118647c6-e94d-4cb8-b0ad-b00e3e1f573f
status: succeeded
template: custom-recruiter-screen-resumes-for-signal-impact-scope-n
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:46:51.547Z
finishedAt: 2026-05-29T14:49:28.047Z
---

# Screen resumes for signal (impact + scope), not pedigree

- **Status:** succeeded
- **Template:** custom-recruiter-screen-resumes-for-signal-impact-scope-n
- **Started:** 2026-05-29T14:46:51.547Z
- **Finished:** 2026-05-29T14:49:28.047Z
- **Title:** Screen resumes for signal (impact + scope), not pedigree

## Plan
Conduct focused web research on resume screening criteria emphasizing impact and scope over pedigree.

### Steps
1. ✓ Researching "screen resumes for signal impact scope talent recruiting best practices" — vault + web — `research.deep` (28.0s)
2. ✓ Quality-checking the draft — `quality.check` (9.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (15.5s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Resume‑Screening Guidance – Signal (Impact + Scope) Focus  
**Prepared for:** Talent Recruiting Team  
**Date:** 2026‑05‑29  

### Objective  
Identify candidates whose demonstrated results and breadth of responsibility indicate high impact, while de‑emphasizing pedigree such as school brand or past employer prestige.

### Core Framework  

1. **Define “Signal” Criteria**  
   - **Impact:** Quantifiable outcomes (e.g., revenue growth, cost reduction, user acquisition, product launches).  
   - **Scope:** Size of the team, budget, geographic reach, or cross‑functional influence.  
   - **Depth:** Level of ownership (end‑to‑end delivery vs. narrow task execution).  

2. **Extract Evidence from the Resume**  
   - Look for **metrics** (percentages, dollar amounts, user counts).  
   - Note **role‑level descriptors** (e.g., “led a 12‑person squad”, “managed a $5 M budget”).  
   - Identify **cross‑functional projects** (collaboration with product, design, ops).  

3. **Scoring Template (0‑3 per dimension)**  

| Dimension | 0 – None | 1 – Minimal | 2 – Moderate | 3 – Strong |
|-----------|----------|------------|--------------|-----------|
| **Impact** | No measurable result | Small‑scale metric (e.g., “improved load time by 5 %”) | Mid‑scale metric (e.g., “increased sales by $200 k”) | Large‑scale metric (e.g., “drove $10 M revenue growth”) |
| **Scope** | Individual contributor only | Managed ≤3 people or ≤$100 k budget | Managed 4‑12 people or $100 k‑$1 M budget | Managed >12 people or >$1 M budget, multi‑region or enterprise‑wide impact |
| **Depth** | Task execution | End‑to‑end ownership of a feature | Full product/module ownership | Portfolio or business‑unit ownership |

4. **Prioritisation Rules**  
   - **Screen first** candidates with a total score ≥ 7 (out of 9).  
   - **MAYBE** those scoring 5‑6; probe for missing metrics in the interview.  
   - **PASS** any candidate with a total score ≤ 4, unless the role requires niche expertise not captured by the signal framework.  

5. **Interview Probes** (to validate signals)  
   - “Can you walk me through the most significant business outcome you owned?”  
   - “What was the size of the team and budget you were responsible for?”  
   - “How did you influence stakeholders outside your immediate group?”  

### Implementation Tips  

- **Standardise resume parsing**: Use a simple keyword‑plus‑number regex to pull out figures (e.g., “$[0-9]+M”, “%”, “×”).  
- **Create a shared spreadsheet** with columns for Impact, Scope, Depth, Total, and Recommendation.  
- **Blind review**: Remove school and company names during the initial signal assessment to keep focus on results.  

### Expected Benefits  

- Faster identification of high‑potential talent with proven results.  
- Reduced bias toward elite institutions or marquee employers.  
- Clear, auditable criteria that satisfy EEO compliance.  

*Assumed: The recruiting team will apply this framework to a batch of 20‑30 resumes per hiring cycle.*

<details><summary>Log</summary>

```
[2026-05-29T14:46:51.555Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:46:52.602Z] Thinking about the best approach…
[2026-05-29T14:46:52.632Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:46:57.751Z] Plan ready: 1 step — Conduct focused web research on resume screening criteria emphasizing impact and scope over pedigree..
[2026-05-29T14:46:57.754Z] Step 1 of 1: Researching "screen resumes for signal impact scope talent recruiting best practices" — vault + web
[2026-05-29T14:47:25.734Z] All sub-agents finished in 28.0s.
[2026-05-29T14:47:25.735Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:47:25.740Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:47:25.740Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:47:25.741Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:47:26.904Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T14:47:35.656Z] Wave 1 finished in 9.9s.
[2026-05-29T14:47:35.656Z] All sub-agents finished in 9.9s.
[2026-05-29T14:47:35.660Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:47:37.053Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T14:47:51.121Z] All sub-agents finished in 15.5s.
[2026-05-29T14:47:51.126Z] quality.check failed (score=0.57, issues: No substantive answer provided; answer merely states lack of evidence and repeats the same text; citation [1] is irrelevant to the question; tone does not match the requested concise synthesis) — re-synthesising with the large model
[2026-05-29T14:47:51.136Z] Thinking with openai/gpt-oss-120b:free (~3 595 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:48:47.575Z] quality rescue improved score: 0.57 → 0.93; using the rescued draft
[2026-05-29T14:48:47.575Z] peer review verdict=bad (Answer does not address the task; it claims lack of evidence but the task is to provide guidance, not to request sources) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:48:47.586Z] Thinking with openai/gpt-oss-120b:free (~3 743 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:49:27.783Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T14:49:27.783Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:49:28.047Z] Vault commit: done.
```
</details>
