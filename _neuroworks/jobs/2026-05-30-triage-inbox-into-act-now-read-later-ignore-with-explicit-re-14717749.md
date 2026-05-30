---
type: job
title: Triage inbox into act-now / read-later / ignore — with explicit reasoning
slug: triage-inbox-into-act-now-read-later-ignore-with-explicit-re-14717749
created: 2026-05-30T18:23:31.814Z
jobId: 14717749-6e49-46c5-80f8-1758b0f8aa17
status: succeeded
template: custom-executive-assistant-triage-inbox-into-act-now-read-later-ign
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:11:30.510Z
finishedAt: 2026-05-30T18:23:31.814Z
---

# Triage inbox into act-now / read-later / ignore — with explicit reasoning

- **Status:** succeeded
- **Template:** custom-executive-assistant-triage-inbox-into-act-now-read-later-ign
- **Started:** 2026-05-30T18:11:30.510Z
- **Finished:** 2026-05-30T18:23:31.814Z
- **Title:** Triage inbox into act-now / read-later / ignore — with explicit reasoning

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Triage inbox into act-now / read-later / ignore — with explicit reasoning\nDescription: Persona-derived starter task for \"Evie\"."
}
```

## Plan
Default research plan for: As a Executive Assistant, triage inbox into act-now / read-later / ignore — with explicit reasoning

### Steps
1. ✓ Researching "As a Executive Assistant, triage inbox into act-now / read-later / ignore — with…" — vault + web — `research.deep` (13.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (13.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (318.7s)
    > auto-injected: quality score=0.60 (pass=false) — peer review for a second opinion

## Answer
## Inbox Triage Framework for an Executive Assistant  

| Category | When to place an email here | Core reasoning |
|----------|----------------------------|----------------|
| **Act‑Now** | • Contains a deadline ≤ 24 hours or a time‑sensitive request.<br>• Sent by the executive, senior leadership, or a key stakeholder whose approval is required.<br>• Requests an immediate decision, data provision, or meeting coordination. | These messages affect daily operations or strategic decisions; delaying them risks missed deadlines, reputational impact, or loss of opportunity. |
| **Read‑Later** | • Provides background information, updates, or reports with no explicit deadline.<br>• Sent by regular team members, external partners, or newsletters that are relevant but not urgent.<br>• Includes items that can be scheduled for review during a designated “processing block” (e.g., the executive’s 30‑minute inbox window each morning). | The content is valuable for context or future planning but does not require immediate action; batching them preserves focus for high‑priority work. |
| **Ignore** | • Spam, unsolicited marketing, or bulk notifications that do not pertain to the executive’s responsibilities.<br>• Duplicate messages that have already been addressed.<br>• Requests that fall outside the scope of the executive’s role and have no clear escalation path. | Removing noise prevents distraction and keeps the executive’s attention on matters that truly matter. |

### Reasoning Checklist (apply to each incoming email)

1. **Identify the sender’s role** – Is the sender a senior leader, direct report, or external partner with decision‑making authority?  
2. **Detect explicit time constraints** – Look for dates, “by EOD,” “ASAP,” or calendar invites.  
3. **Determine required action** – Does the email ask for a reply, data, scheduling, or approval?  
4. **Assess relevance** – Is the topic aligned with the executive’s current priorities or projects?  
5. **Check for duplication or spam cues** – Repeated subject lines, unsubscribe links, or promotional language.

- If steps 1 and 2 are positive, route to **Act‑Now**.  
- If step 3 is present but no urgent deadline, place in **Read‑Later** for scheduled processing.  
- If step 5 flags the message, move to **Ignore**.

### Quick‑Apply Template (copy‑paste for each email)

```
[ ] Sender: ______________________
[ ] Deadline / Time‑sensitive? (Y/N) __________
[ ] Action Required? (Reply / Data / Schedule) __________
[ ] Relevance to current priorities? (Y/N) __________
[ ] Spam / Duplicate? (Y/N) __________

→ Category: Act‑Now / Read‑Later / Ignore
→ Reason: ________________________________________
```

Using this structured approach ensures every email is evaluated consistently, the executive’s time is protected, and follow‑up actions are clearly documented.

<details><summary>Log</summary>

```
[2026-05-30T18:11:30.529Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:11:31.363Z] Thinking about the best approach…
[2026-05-30T18:11:31.426Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:11:49.434Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:11:49.434Z] Plan ready: 1 step — Default research plan for: As a Executive Assistant, triage inbox into act-now / read-later / ignore — with explicit reasoning.
[2026-05-30T18:11:49.437Z] Step 1 of 1: Researching "As a Executive Assistant, triage inbox into act-now / read-later / ignore — with…" — vault + web
[2026-05-30T18:12:02.743Z] All sub-agents finished in 13.3s.
[2026-05-30T18:12:02.743Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:12:02.752Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:12:02.752Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:12:02.752Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:12:16.594Z] Wave 1 finished in 13.8s.
[2026-05-30T18:12:16.594Z] All sub-agents finished in 13.8s.
[2026-05-30T18:12:16.622Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:17:16.645Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T18:17:35.368Z] All sub-agents finished in 318.7s.
[2026-05-30T18:17:35.375Z] quality.check failed (score=0.6, issues: Low citation coverage – only a placeholder reference; no concrete triage framework provided; Answer acknowledges lack of data but does not offer any actionable guidance) — re-synthesising with the large model
[2026-05-30T18:17:35.401Z] Thinking with openai/gpt-oss-120b:free (~3 341 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:22:54.410Z] quality rescue produced score 0 (not better than 0.6); keeping the original
[2026-05-30T18:22:54.410Z] peer review verdict=bad (Does not provide a triage framework or explicit reasoning; Fails to address the task directly) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:22:54.420Z] Thinking with openai/gpt-oss-120b:free (~3 495 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:23:31.357Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-30T18:23:31.357Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:23:31.814Z] Vault commit: done.
```
</details>
