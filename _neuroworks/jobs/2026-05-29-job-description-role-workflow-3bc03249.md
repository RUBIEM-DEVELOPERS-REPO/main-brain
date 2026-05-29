---
type: job
title: Job description → role workflow
slug: job-description-role-workflow-3bc03249
created: 2026-05-29T09:49:54.726Z
jobId: 3bc03249-c6ca-4011-8ffa-5bc07648658b
status: succeeded
template: custom-emp-jd-to-task-workflow
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:48:15.885Z
finishedAt: 2026-05-29T09:49:54.725Z
---

# Job description → role workflow

- **Status:** succeeded
- **Template:** custom-emp-jd-to-task-workflow
- **Started:** 2026-05-29T09:48:15.885Z
- **Finished:** 2026-05-29T09:49:54.725Z
- **Title:** Job description → role workflow

## Plan
Default research plan for: task list from this job description. Identify the role's primary deliverables, then list the recurring tasks that produce them — grouped by cadence (daily / weekly / monthly / quarterly). Mark which can be AI-assisted vs human-only, and name which skill or persona to use for the AI-assisted ones

### Steps
1. ✓ Researching "task list from this job description. Identify the role's primary deliverables, t…" — vault + web — `research.deep` (17.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.7s)
    > auto-injected: quality score=0.39 (pass=false) — peer review for a second opinion

## Answer
## Task List Creation – Current Status

I reviewed the available evidence and could not locate a job description or any related documentation that specifies the role’s responsibilities, primary deliverables, or cadence of activities. Consequently, I cannot identify the role’s primary deliverables nor enumerate the recurring tasks that produce them, nor determine which tasks could be AI‑assisted or require human judgment.

### What Is Needed to Proceed

1. **Full Job Description** – The text that outlines responsibilities, success metrics, and any cadence references (daily, weekly, monthly, quarterly).  
2. **Contextual Materials** – Any existing workflow diagrams, SOPs, or role‑specific skill inventories that accompany the JD.  
3. **Preferred AI Skill Set** – Confirmation of which AI personas or skills (e.g., report‑writing, data extraction, slide creation) are available for assistance.

Providing these items will enable the generation of a structured workflow table, marking AI‑assisted steps and assigning appropriate personas.  

*Assumed: the user expects a detailed workflow once the JD is supplied; without it, only a request for missing information can be delivered.*

<details><summary>Log</summary>

```
[2026-05-29T09:48:15.896Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:48:15.897Z] Thinking about the best approach…
[2026-05-29T09:48:15.922Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:48:19.000Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:48:19.001Z] Plan ready: 1 step — Default research plan for: task list from this job description. Identify the role's primary deliverables, then list the recurring tasks that produce them — grouped by cadence (daily / weekly / monthly / quarterly). Mark which can be AI-assisted vs human-only, and name which skill or persona to use for the AI-assisted ones.
[2026-05-29T09:48:19.005Z] Step 1 of 1: Researching "task list from this job description. Identify the role's primary deliverables, t…" — vault + web
[2026-05-29T09:48:35.966Z] All sub-agents finished in 17.0s.
[2026-05-29T09:48:35.978Z] Thinking with openai/gpt-oss-20b:free (~3 270 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:48:42.544Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:48:42.546Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:48:42.547Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:48:42.547Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:48:47.728Z] Wave 1 finished in 5.2s.
[2026-05-29T09:48:47.728Z] All sub-agents finished in 5.2s.
[2026-05-29T09:48:47.733Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:48:51.456Z] All sub-agents finished in 3.7s.
[2026-05-29T09:48:51.462Z] quality.check failed (score=0.39, issues: No job description provided; Answer does not fulfill task) — re-synthesising with the large model
[2026-05-29T09:48:51.469Z] Thinking with openai/gpt-oss-120b:free (~3 785 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:49:08.253Z] quality rescue improved score: 0.39 → 0.75; using the rescued draft
[2026-05-29T09:49:08.253Z] peer review verdict=bad (Does not provide any task list or deliverables; claims lack of job description despite task requiring it; Fails to addre) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:49:08.264Z] Thinking with openai/gpt-oss-120b:free (~3 943 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:49:54.470Z] retry verdict=bad and quality not improved (0.75 ≤ 0.75); keeping the rescued/original draft
[2026-05-29T09:49:54.470Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:49:54.725Z] Vault commit: done.
```
</details>
