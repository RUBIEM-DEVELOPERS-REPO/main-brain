---
type: job
title: Ask Evie anything
slug: ask-evie-anything-875fcfc8
created: 2026-05-29T19:39:09.049Z
jobId: 875fcfc8-a839-48c6-9853-dddd1eecf65f
status: succeeded
template: custom-executive-assistant-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:38:11.897Z
finishedAt: 2026-05-29T19:39:09.049Z
---

# Ask Evie anything

- **Status:** succeeded
- **Template:** custom-executive-assistant-ask-anything
- **Started:** 2026-05-29T19:38:11.897Z
- **Finished:** 2026-05-29T19:39:09.049Z
- **Title:** Ask Evie anything

## Plan
Default research plan for: As a Executive Assistant, respond to the following task in role:

### Steps
1. ✓ Researching "As a Executive Assistant, respond to the following task in role:" — vault + web — `research.deep` (27.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (9.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Executive‑Assistant Response Template**

Below is a concise, ready‑to‑use reply you can copy‑paste when you receive a request that requires you to act “as an Executive Assistant.” It follows the typical expectations for the role and is grounded in the authoritative definitions of *executive* from reputable sources.

---

### 1. Acknowledge the Request  
> *“Thank you for reaching out, [Name]. I’ve received your request and will take care of it promptly.”*  

### 2. Clarify Scope (if needed)  
> *“To ensure I meet your expectations, could you confirm the following details…?”*  

### 3. Outline the Action Plan  
| Step | What I’ll Do | Timeline |
|------|--------------|----------|
| 1 | Gather required information/documents | By [time] |
| 2 | Draft the needed communication (email, memo, agenda) | By [time] |
| 3 | Review with you for any final tweaks | By [time] |
| 4 | Deliver the final product / schedule the meeting | By [time] |

### 4. Provide a Status Update (mid‑process)  
> *“I’m currently [status] and expect to have the next deliverable ready by [time]. Please let me know if any priorities shift.”*  

### 5. Deliver the Final Output  
> *“Please find attached [document/summary] as requested. Let me know if any further adjustments are needed.”*  

### 6. Close Politely  
> *“Thank you, [Name]. I’m happy to assist with anything else you may need.”*  

---

#### Why This Works  

- **Executive definition** – An executive is “someone in a high position … who makes decisions and puts them into action”【1】. Your response shows you are taking decisive, organized action on behalf of the executive.  
- **Government executive role** – The executive branch “oversees administration of the state”【2】, mirroring how an EA administers the executive’s schedule, communications, and projects.  
- **Merriam‑Webster** emphasizes the executive as a “person who has the authority to make decisions and enforce them”【3】, which is reflected in the clear, deadline‑driven plan above.

Feel free to adjust the wording, timelines, or table rows to fit the specific request you receive. This structure ensures professionalism, clarity, and alignment with the core responsibilities of an Executive Assistant.

<details><summary>Log</summary>

```
[2026-05-29T19:38:11.916Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:38:12.721Z] Thinking about the best approach…
[2026-05-29T19:38:12.819Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:38:30.836Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:38:30.836Z] Plan ready: 1 step — Default research plan for: As a Executive Assistant, respond to the following task in role:.
[2026-05-29T19:38:30.855Z] Step 1 of 1: Researching "As a Executive Assistant, respond to the following task in role:" — vault + web
[2026-05-29T19:38:58.292Z] All sub-agents finished in 27.4s.
[2026-05-29T19:38:58.292Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:38:58.733Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:38:58.733Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:38:58.733Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:39:08.631Z] Wave 1 finished in 9.9s.
[2026-05-29T19:39:08.631Z] All sub-agents finished in 9.9s.
[2026-05-29T19:39:08.631Z] Quality check passed (85%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T19:39:08.631Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:39:09.049Z] Vault commit: done.
```
</details>
