---
type: job
title: Job description → role workflow
slug: job-description-role-workflow-7a9b0937
created: 2026-05-29T23:22:48.610Z
jobId: 7a9b0937-e191-41b2-a3b1-2d63ef216684
status: succeeded
template: custom-emp-jd-to-task-workflow
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:21:18.175Z
finishedAt: 2026-05-29T23:22:48.610Z
---

# Job description → role workflow

- **Status:** succeeded
- **Template:** custom-emp-jd-to-task-workflow
- **Started:** 2026-05-29T23:21:18.175Z
- **Finished:** 2026-05-29T23:22:48.610Z
- **Title:** Job description → role workflow

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Job description → role workflow\nDescription: Convert a JD into the recurring tasks this role actually owns, grouped by cadence."
}
```

## Plan
Default research plan for: task list from this job description. Identify the role's primary deliverables, then list the recurring tasks that produce them — grouped by cadence (daily / weekly / monthly / quarterly). Mark which can be AI-assisted vs human-only, and name which skill or persona to use for the AI-assisted ones.

Context: Role: Custom
Title: Job description → role workflow
Description: Convert a JD into

### Steps
1. ✓ Researching "task list from this job description. Identify the role's primary deliverables, t…" — vault + web — `research.deep` (14.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (13.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.2s)
    > auto-injected: quality score=0.54 (pass=false) — peer review for a second opinion

## Answer
## Role workflow – *Job description required*

**Status:** Insufficient source material to generate the requested deliverables and task list.

### Findings
- The evidence catalog contains only unrelated web pages about “2 + 2 = 5” and generic calculators [1].  
- No job description, role responsibilities, or performance criteria are present in the vault or web sources.

### Implication
Without the actual job description (or a vault note that captures it), it is impossible to:
1. Identify the role’s primary deliverables.  
2. Enumerate the recurring tasks that produce those deliverables.  
3. Group tasks by cadence (daily, weekly, monthly, quarterly).  
4. Determine which tasks can be AI‑assisted, nor assign the appropriate skill or persona.

### Recommended next steps
1. Provide the full text of the job description, preferably as a vault note (e.g., `_knowledge/role-jd.md`).  
2. Include any supplemental information on key performance indicators, reporting structures, or tooling that the role uses.  
3. Once the JD is available, a complete workflow—including primary deliverables, cadence‑grouped tasks, AI‑assist annotations, and skill/persona mappings—can be produced as specified.

<details><summary>Log</summary>

```
[2026-05-29T23:21:18.184Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:21:18.190Z] Thinking about the best approach…
[2026-05-29T23:21:18.281Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:21:19.379Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:21:19.379Z] Plan ready: 1 step — Default research plan for: task list from this job description. Identify the role's primary deliverables, then list the recurring tasks that produce them — grouped by cadence (daily / weekly / monthly / quarterly). Mark which can be AI-assisted vs human-only, and name which skill or persona to use for the AI-assisted ones.

Context: Role: Custom
Title: Job description → role workflow
Description: Convert a JD into.
[2026-05-29T23:21:19.383Z] Step 1 of 1: Researching "task list from this job description. Identify the role's primary deliverables, t…" — vault + web
[2026-05-29T23:21:33.736Z] All sub-agents finished in 14.4s.
[2026-05-29T23:21:33.753Z] Thinking with openai/gpt-oss-20b:free (~3 475 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:21:43.994Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:21:44.015Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:21:44.015Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:21:44.015Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:21:57.554Z] Wave 1 finished in 13.5s.
[2026-05-29T23:21:57.554Z] All sub-agents finished in 13.5s.
[2026-05-29T23:21:57.561Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:22:03.794Z] All sub-agents finished in 6.2s.
[2026-05-29T23:22:03.829Z] quality.check failed (score=0.54, issues: No job description provided; Citations refer to unrelated content) — re-synthesising with the large model
[2026-05-29T23:22:03.867Z] Thinking with openai/gpt-oss-120b:free (~4 014 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:22:35.374Z] quality rescue improved score: 0.54 → 0.71; using the rescued draft
[2026-05-29T23:22:35.374Z] peer review verdict=needs-work (No job description provided, so cannot produce deliverables or tasks; Answer does not address the core task of generatin) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T23:22:35.413Z] Thinking with openai/gpt-oss-120b:free (~4 186 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:22:45.760Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T23:22:45.760Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:22:48.610Z] Vault commit: done.
```
</details>
