---
type: job
title: Ask Evie anything
slug: ask-evie-anything-02f1974e
created: 2026-05-29T14:31:04.483Z
jobId: 02f1974e-7886-4a1b-9186-4c91ecc88f9d
status: succeeded
template: custom-executive-assistant-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:28:25.914Z
finishedAt: 2026-05-29T14:31:04.483Z
---

# Ask Evie anything

- **Status:** succeeded
- **Template:** custom-executive-assistant-ask-anything
- **Started:** 2026-05-29T14:28:25.914Z
- **Finished:** 2026-05-29T14:31:04.483Z
- **Title:** Ask Evie anything

## Plan
Default research plan for: As a Executive Assistant, respond to the following task in role:

### Steps
1. ✓ Researching "As a Executive Assistant, respond to the following task in role:" — vault + web — `research.deep` (40.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (26.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (28.0s)
    > auto-injected: quality score=0.59 (pass=false) — peer review for a second opinion

## Answer
## Executive‑Assistant Response  

**Core Services**  
1. **Calendar & Meeting Management** – schedule, reschedule, and confirm meetings across time zones; prepare agendas, pre‑reads, and post‑meeting action items; protect focus time.  
2. **Communication Hub** – draft, proofread, and send concise emails and memos; filter inbound messages and summarize low‑priority threads.  
3. **Research & Briefing** – conduct rapid, evidence‑based research; deliver bullet‑point briefs with cited sources.  
4. **Travel & Logistics** – book flights, hotels, and ground transport; create contingency‑ready itineraries.  
5. **Project & Task Tracking** – set up task lists in your preferred tool (e.g., Asana, Notion); send reminders and status updates.  
6. **Stakeholder Coordination** – liaise with internal teams, board members, and external partners; prepare briefing packets for high‑stakes meetings.  

**Sample Deliverable for a Board Meeting**  
- **Pre‑Meeting Brief (PDF)** – executive summary, KPI snapshot, risks, decision points.  
- **Agenda (Outlook invite)** – time‑boxed slots, presenters, desired outcomes.  
- **Post‑Meeting Action Log (Spreadsheet)** – action item, owner, due date, status.  

**Working Process**  
1. **15‑min onboarding call** – capture preferences and tools.  
2. **Daily 5‑min check‑in** – urgent items and calendar changes.  
3. **Weekly summary email** – completed tasks, upcoming deadlines, open decisions.  

**Next Steps**  
- Confirm preferred tools (Outlook, Google Calendar, Notion).  
- Share any SOPs or templates you use.

<details><summary>Log</summary>

```
[2026-05-29T14:28:25.920Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:28:27.125Z] Thinking about the best approach…
[2026-05-29T14:28:27.153Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:28:33.928Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:28:33.928Z] Plan ready: 1 step — Default research plan for: As a Executive Assistant, respond to the following task in role:.
[2026-05-29T14:28:33.933Z] Step 1 of 1: Researching "As a Executive Assistant, respond to the following task in role:" — vault + web
[2026-05-29T14:29:14.085Z] All sub-agents finished in 40.2s.
[2026-05-29T14:29:14.085Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:29:14.090Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:29:14.090Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:29:14.090Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:29:40.786Z] Wave 1 finished in 26.7s.
[2026-05-29T14:29:40.786Z] All sub-agents finished in 26.7s.
[2026-05-29T14:29:40.789Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:30:08.779Z] All sub-agents finished in 28.0s.
[2026-05-29T14:30:08.783Z] quality.check failed (score=0.59, issues: Uses placeholder citations that likely do not correspond to real sources; contains unsupported claims about definitions and responsibilities without verifiable evidence) — re-synthesising with the large model
[2026-05-29T14:30:08.788Z] Thinking with openai/gpt-oss-120b:free (~3 869 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:30:37.524Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-29T14:30:37.524Z] peer review verdict=needs-work (Too verbose; includes unnecessary citations and formatting; could be more concise and directly actionable) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:30:37.529Z] Thinking with openai/gpt-oss-120b:free (~4 013 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:31:04.227Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T14:31:04.227Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:31:04.483Z] Vault commit: done.
```
</details>
