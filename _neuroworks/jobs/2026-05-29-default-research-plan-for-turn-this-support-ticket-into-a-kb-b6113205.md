---
type: job
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing
slug: default-research-plan-for-turn-this-support-ticket-into-a-kb-b6113205
created: 2026-05-29T09:27:24.503Z
jobId: b6113205-c3bd-4d6d-96b8-164dc5c61180
status: succeeded
template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:26:36.049Z
finishedAt: 2026-05-29T09:27:24.503Z
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
- **Started:** 2026-05-29T09:26:36.049Z
- **Finished:** 2026-05-29T09:27:24.503Z
- **Title:** Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

## Plan
Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

### Steps
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (21.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (13.2s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
**Title**  
Customer cannot log in after MFA reset – session token lost in Safari  

**Symptoms**  
- User receives an MFA‑reset link and clicks it in Safari.  
- After completing the reset, the redirect back to the login page drops the session token, leaving the user unable to sign in.  

**Root cause**  
Safari’s handling of cookies during the MFA‑reset redirect can clear or block the authentication session cookie for our domain, causing the token to be lost.  

**Resolution steps**  
1. **Retry the MFA reset in Google Chrome** – Chrome preserves the session token across the redirect.  
2. **If Chrome is unavailable, clear Safari cookies for our domain**:  
   - Open **Settings → Safari → Advanced → Website Data** (or **Preferences → Privacy → Manage Website Data** on macOS).  
   - Locate our domain (e.g., `example.com`) and delete its data.  
   - Close and reopen Safari, then repeat the MFA‑reset link.  

**Prevention**  
- Include a note in the MFA‑reset email recommending Chrome for the reset flow or advising that Safari may require cookie clearing.  
- Update internal documentation to flag Safari as a potential issue for MFA‑reset redirects, prompting support agents to suggest Chrome or cookie clearing as the first‑line fix.

<details><summary>Log</summary>

```
[2026-05-29T09:26:36.059Z] Replaying a saved plan — 4 steps.
[2026-05-29T09:26:36.065Z] Step 1 of 4: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-05-29T09:26:57.168Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:26:57.168Z] Step 3 of 4: Security-scanning the note
[2026-05-29T09:26:57.168Z] Step 2 of 4: Quality-checking the draft
[2026-05-29T09:27:01.242Z] Wave 2 finished in 4.1s.
[2026-05-29T09:27:01.242Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:27:14.455Z] All sub-agents finished in 38.4s.
[2026-05-29T09:27:14.470Z] Thinking with openai/gpt-oss-20b:free (~4 802 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
