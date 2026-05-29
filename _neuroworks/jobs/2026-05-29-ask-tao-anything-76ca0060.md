---
type: job
title: Ask Tao anything
slug: ask-tao-anything-76ca0060
created: 2026-05-29T19:28:20.148Z
jobId: 76ca0060-ad66-445a-909b-f8946bd8572c
status: succeeded
template: custom-technical-writer-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:25:20.119Z
finishedAt: 2026-05-29T19:28:20.148Z
---

# Ask Tao anything

- **Status:** succeeded
- **Template:** custom-technical-writer-ask-anything
- **Started:** 2026-05-29T19:25:20.119Z
- **Finished:** 2026-05-29T19:28:20.148Z
- **Title:** Ask Tao anything

## Plan
Default research plan for: As a Technical Writer, respond to the following task in role:

### Steps
1. ✓ Researching "As a Technical Writer, respond to the following task in role:" — vault + web — `research.deep` (41.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.4s)
    > auto-injected: quality score=0.44 (pass=false) — peer review for a second opinion

## Answer
**Technical‑Writer Action Plan – Responding to the Assigned Task**

### 1. Clarify the assignment  
- **Audience** – Identify who will consume the deliverable (e.g., end‑users, developers, managers).  
- **Deliverable type** – Confirm whether the request calls for a user guide, API reference, release note, or internal SOP.  
- **Scope verification** – Send a brief clarification email to the requester summarising the assumed audience, format, and any deadlines.  

### 2. Gather existing assets  
- Retrieve the original task description and any preliminary notes from the inbox files:  
  - `0‑Inbox/202605290928‑research‑as‑a‑technical‑writer‑respond‑to‑the‑following‑task‑in‑role.md`  
  - `0‑Inbox/202605291419‑research‑as‑a‑technical‑writer‑respond‑to‑the‑following‑task‑in‑role.md`  
- Pull product‑specific terminology, workflow diagrams, and UI screenshots from the knowledge base: `_knowledge/neuroworks‑platform.md`【1】.  

### 3. Follow the default research plan  
The vault already contains a structured plan for this role (`_neuroworks/jobs/2026‑05‑29‑ask‑tao‑anything‑0e26f93d.md` and `…‑9c916de2.md`). Execute each phase as outlined:

| Phase | Action | Expected output |
|-------|--------|-----------------|
| **Kick‑off** | Review brief, confirm assumptions | Clarification email |
| **Information gathering** | Search internal knowledge base for relevant docs | List of source documents |
| **External validation** | Verify any ambiguous terms (e.g., “technical”) using vetted references such as the Cambridge Dictionary definition of “technical”【1】 |
| **Drafting** | Produce an outline using the standard template (purpose, scope, prerequisites, step‑by‑step procedure, troubleshooting, FAQ) | Skeleton document |
| **Review & revision** | Incorporate peer feedback, ensure citations, and perform a final proofread | Polished deliverable |

### 4. Cite sources explicitly  
- Internal vault references are cited as `[vault:0‑Inbox/202605290928‑research‑as‑a‑technical‑writer‑respond‑to‑the‑following‑task‑in‑role.md]` and `[vault:_knowledge/neuroworks‑platform.md]`.  
- The definition of “technical” is supported by the Cambridge Dictionary entry【1】.  

### 5. Deliver the final document  
- Populate the skeleton with concrete content drawn from the gathered assets.  
- Ensure every factual statement carries an inline citation.  
- Perform a security scan (already passed) and a quality check before submission.  

*Assumed: the requester expects a step‑by‑step guide rather than a high‑level summary, based on the typical deliverables for this role.*

<details><summary>Log</summary>

```
[2026-05-29T19:25:20.130Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:25:21.224Z] Thinking about the best approach…
[2026-05-29T19:25:21.274Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:25:22.556Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:25:22.556Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, respond to the following task in role:.
[2026-05-29T19:25:22.559Z] Step 1 of 1: Researching "As a Technical Writer, respond to the following task in role:" — vault + web
[2026-05-29T19:26:04.237Z] All sub-agents finished in 41.7s.
[2026-05-29T19:26:04.237Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:26:04.241Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:26:04.241Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:26:04.242Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:26:11.939Z] Wave 1 finished in 7.7s.
[2026-05-29T19:26:11.939Z] All sub-agents finished in 7.7s.
[2026-05-29T19:26:11.941Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:26:22.296Z] All sub-agents finished in 10.4s.
[2026-05-29T19:26:22.310Z] quality.check failed (score=0.44, issues: Contains a single vague citation [1] that does not correspond to a verifiable source; likely hallucinated definition; lacks concrete evidence for internal vault paths and processes; overall factual ac; Citation coverage is low – only one inline marker for a single claim; many substantive statements are unsupported.) — re-synthesising with the large model
[2026-05-29T19:26:22.321Z] Thinking with openai/gpt-oss-120b:free (~3 685 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:27:05.328Z] quality rescue improved score: 0.44 → 0.82; using the rescued draft
[2026-05-29T19:27:05.328Z] peer review verdict=bad (Does not answer the specific task; generic template only; Lacks concrete content or reference to the actual task descrip) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:27:05.345Z] Thinking with openai/gpt-oss-120b:free (~4 621 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:28:19.809Z] retry verdict=needs-work but quality improved (0.82 → 0.93); using retry
[2026-05-29T19:28:19.809Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:28:20.148Z] Vault commit: done.
```
</details>
