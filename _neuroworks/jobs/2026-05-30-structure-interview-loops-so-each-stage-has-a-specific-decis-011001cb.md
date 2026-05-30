---
type: job
title: Structure interview loops so each stage has a specific decision
slug: structure-interview-loops-so-each-stage-has-a-specific-decis-011001cb
created: 2026-05-30T18:44:15.255Z
jobId: 011001cb-4064-48a1-9876-561208050015
status: succeeded
template: custom-recruiter-structure-interview-loops-so-each-stage-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:43:12.317Z
finishedAt: 2026-05-30T18:44:15.254Z
---

# Structure interview loops so each stage has a specific decision

- **Status:** succeeded
- **Template:** custom-recruiter-structure-interview-loops-so-each-stage-
- **Started:** 2026-05-30T18:43:12.317Z
- **Finished:** 2026-05-30T18:44:15.254Z
- **Title:** Structure interview loops so each stage has a specific decision

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Structure interview loops so each stage has a specific decision\nDescription: Persona-derived starter task for \"Riley\"."
}
```

## Plan
Default research plan for: As a Talent Recruiter, structure interview loops so each stage has a specific decision

### Steps
1. ✓ Researching "As a Talent Recruiter, structure interview loops so each stage has a specific de…" — vault + web — `research.deep` (50.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Interview‑loop design – one decision per stage**

| Stage | Primary Decision | Typical Participants | Goal / Output |
|-------|------------------|----------------------|---------------|
| **1️⃣ Recruiter screen** | **Proceed vs. reject** – does the candidate meet the minimum role criteria (experience, skills, cultural fit)? | Recruiter (you) + optional hiring‑manager “quick‑check” | Short list of viable candidates; schedule next interview. |
| **2️⃣ Hiring‑manager deep dive** | **Move to team interview vs. reject** – does the candidate demonstrate the functional expertise needed for the role? | Hiring manager + senior IC(s) | Detailed assessment of role‑specific competencies; decide if the candidate is ready for peer evaluation. |
| **3️⃣ Peer/technical interview** | **Pass technical bar vs. fail** – can the candidate solve the problems and work at the expected level? | 1‑2 senior engineers or subject‑matter experts | Technical scorecard; recommendation to advance or stop. |
| **4️⃣ Cross‑functional interview** | **Fit with broader organization vs. reject** – does the candidate collaborate well with other functions (product, design, ops) and align with company values? | Representatives from product, design, ops, or other relevant teams | Behavioral feedback; decision to move to final review. |
| **5️⃣ Final leadership interview** | **Hire vs. no‑hire** – does senior leadership endorse the candidate after seeing all prior data? | VP/Director + senior leader(s) | Consolidated scorecard; final hiring decision and compensation discussion. |
| **6️⃣ Offer & acceptance** | **Extend offer vs. re‑open search** – based on the final decision, issue an offer or restart the loop. | Recruiter (offer creation) + HR | Formal offer letter; acceptance tracking. |

### How to implement the “one decision per stage” rule

1. **Define a single binary outcome** for each interview (e.g., *Advance* / *Reject*).  
2. **Use a standardized scorecard** that forces interviewers to answer that binary question and provide brief justification.  
3. **Gate the next stage**: the loop only moves forward when the required decision is “Advance.”  
4. **Document the decision** in the candidate’s record (NeuroWorks vault entry) so the next interviewer sees the rationale without re‑evaluating the same criteria.  
5. **Review at the final stage**: senior leadership looks at the accumulated decisions rather than re‑interviewing.

### Why this works for talent recruiters

* **Clarity** – each participant knows exactly what they are judging, reducing scope creep.  
* **Speed** – binary decisions keep the loop moving quickly; bottlenecks are visible.  
* **Data‑driven** – aggregated decisions create a clear audit trail for future hiring analytics.  
* **Consistency** – the same decision framework is applied to every candidate, improving fairness.

> *Source:* The two research notes in the vault titled “Research: As a Talent Recruiter, structure interview loops so each stage has a specific decision” outline the need for a single decision point per interview stage. [0‑Inbox/202605291448‑research‑as‑a‑talent‑recruiter‑structure‑interview‑loops‑so‑each‑stag.md] and [0‑Inbox/202605292259‑research‑as‑a‑talent‑recruiter‑structure‑interview‑loops‑so‑each‑stag.md] provide the conceptual basis for the structure above.

<details><summary>Log</summary>

```
[2026-05-30T18:43:12.329Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:43:13.618Z] Thinking about the best approach…
[2026-05-30T18:43:13.689Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:43:15.290Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:43:15.291Z] Plan ready: 1 step — Default research plan for: As a Talent Recruiter, structure interview loops so each stage has a specific decision.
[2026-05-30T18:43:15.295Z] Step 1 of 1: Researching "As a Talent Recruiter, structure interview loops so each stage has a specific de…" — vault + web
[2026-05-30T18:44:06.171Z] All sub-agents finished in 50.9s.
[2026-05-30T18:44:06.171Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:44:06.197Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:44:06.197Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:44:06.197Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:44:10.605Z] Wave 1 finished in 4.4s.
[2026-05-30T18:44:10.605Z] All sub-agents finished in 4.4s.
[2026-05-30T18:44:10.605Z] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-30T18:44:10.605Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:44:15.254Z] Vault commit: done.
```
</details>
