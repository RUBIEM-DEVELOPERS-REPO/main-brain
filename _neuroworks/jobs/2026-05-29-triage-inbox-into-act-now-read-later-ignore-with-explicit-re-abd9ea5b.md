---
type: job
title: Triage inbox into act-now / read-later / ignore — with explicit reasoning
slug: triage-inbox-into-act-now-read-later-ignore-with-explicit-re-abd9ea5b
created: 2026-05-29T14:27:40.738Z
jobId: abd9ea5b-a9d0-4fab-aaaf-3f39a12d94ea
status: succeeded
template: custom-executive-assistant-triage-inbox-into-act-now-read-later-ign
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:26:50.647Z
finishedAt: 2026-05-29T14:27:40.738Z
---

# Triage inbox into act-now / read-later / ignore — with explicit reasoning

- **Status:** succeeded
- **Template:** custom-executive-assistant-triage-inbox-into-act-now-read-later-ign
- **Started:** 2026-05-29T14:26:50.647Z
- **Finished:** 2026-05-29T14:27:40.738Z
- **Title:** Triage inbox into act-now / read-later / ignore — with explicit reasoning

## Plan
Default research plan for: As a Executive Assistant, triage inbox into act-now / read-later / ignore — with explicit reasoning

### Steps
1. ✓ Researching "As a Executive Assistant, triage inbox into act-now / read-later / ignore — with…" — vault + web — `research.deep` (41.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Executive‑Assistant Inbox Triage Framework**  

| Category | When to place the email here | Explicit Reasoning (why it belongs) |
|----------|-----------------------------|--------------------------------------|
| **Act‑Now** | • Requires a decision, reply, or action that must be completed **today** or within the next few hours (e.g., meeting‑schedule changes, deadline‑driven requests, urgent approvals). <br>• Contains time‑sensitive information that, if delayed, will cause a downstream impact (e.g., a client‑facing issue, a regulatory filing deadline). | • The executive’s role is to **make decisions and put them into action**; delaying these items defeats that purpose [1]. <br>• Acting now prevents bottlenecks and protects the executive’s calendar and commitments. |
| **Read‑Later** | • Informational or reference material that is **useful but not urgent** (e.g., industry reports, newsletters, background on a future project). <br>• Requests that can be scheduled for a later time slot (e.g., “Can you draft a briefing for next week?”). | • The email does not affect any immediate deadline, so it can be **queued for a dedicated reading block**. <br>• Keeping it out of the “Act‑Now” stream reduces cognitive overload and lets the assistant focus on high‑priority actions. |
| **Ignore** | • Spam, obvious phishing, or irrelevant bulk mail. <br>• Duplicate messages that have already been addressed. <br>• Items that fall outside the executive’s scope and have no downstream impact on the organization. | • Ignoring non‑actionable noise preserves bandwidth for the executive and maintains a clean inbox. <br>• The assistant can safely delete or archive these without risking missed obligations. |

### How to Apply the Framework (step‑by‑step)

1. **Scan Subject & Sender** – Quick glance at the sender’s relevance (internal stakeholder, client, vendor) and subject keywords (e.g., “Urgent”, “Deadline”, “Schedule”).  
2. **Identify Time Sensitivity** – Ask: *Does the email require a response or action before the end of the business day?* If yes → **Act‑Now**.  
3. **Assess Actionability** – Determine if the email contains a clear request or decision point. If it’s purely informational → **Read‑Later**.  
4. **Filter Noise** – Use spam filters and duplicate detection; any email that fails relevance or actionability checks → **Ignore**.  
5. **Tag & Move** – Apply the corresponding label/tag in the inbox (e.g., `#act-now`, `#read-later`, `#ignore`) and move the message to the appropriate folder or task list.  

### Rationale Grounded in Role Definition  

The term *executive* denotes “someone in a high position … who makes decisions and puts them into action” [1]. An Executive Assistant’s primary purpose is to **shield the executive from unnecessary interruptions** while ensuring that any decision‑oriented communication reaches the executive promptly. By categorising mail into the three buckets above, the assistant:

* Guarantees that **time‑critical decisions** are surfaced immediately.  
* Allocates **dedicated reading time** for strategic or background material, preserving focus.  
* **Eliminates clutter**, preventing the executive’s attention from being diluted by irrelevant content.

---

**Sources**  
- Definition of “executive” emphasizing decision‑making and action [1] (Cambridge Dictionary).  
- Vault note indicating the research task: *“Research: As a Executive Assistant, triage inbox into act‑now / read‑later / ignore — with explicit reasoning”* [0‑Inbox/202605290931‑research‑as‑a‑executive‑assistant‑triage‑inbox‑into‑act‑now‑read‑late.md].  
- Default research plan for the same task [_neuroworks/jobs/2026‑05‑29‑triage‑inbox‑into‑act‑now‑read‑later‑ignore‑with‑exp‑re‑a8acef2c.md].

<details><summary>Log</summary>

```
[2026-05-29T14:26:50.654Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:26:51.872Z] Thinking about the best approach…
[2026-05-29T14:26:51.897Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:26:55.303Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:26:55.303Z] Plan ready: 1 step — Default research plan for: As a Executive Assistant, triage inbox into act-now / read-later / ignore — with explicit reasoning.
[2026-05-29T14:26:55.307Z] Step 1 of 1: Researching "As a Executive Assistant, triage inbox into act-now / read-later / ignore — with…" — vault + web
[2026-05-29T14:27:36.305Z] All sub-agents finished in 41.0s.
[2026-05-29T14:27:36.305Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:27:36.311Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:27:36.311Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:27:36.311Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:27:40.485Z] Wave 1 finished in 4.2s.
[2026-05-29T14:27:40.485Z] All sub-agents finished in 4.2s.
[2026-05-29T14:27:40.485Z] Quality check passed (92%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T14:27:40.485Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:27:40.738Z] Vault commit: done.
```
</details>
