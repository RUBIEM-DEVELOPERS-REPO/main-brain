---
type: job
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing
slug: default-research-plan-for-turn-this-support-ticket-into-a-kb-5c365ab0
created: 2026-06-01T09:19:52.183Z
jobId: 5c365ab0-cd3c-4176-9ac6-677f7fbe859e
status: succeeded
template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:18:19.063Z
finishedAt: 2026-06-01T09:19:52.183Z
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
- **Started:** 2026-06-01T09:18:19.063Z
- **Finished:** 2026-06-01T09:19:52.183Z
- **Title:** Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

## Plan
Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

### Steps
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (33.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (38.5s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
---
title: Customer cannot log in after MFA reset – session token lost on Safari
slug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari
last-updated: 2026-06-01
audience: Free / Pro / All
tags: [login, MFA, Safari, session-token]
---

# Customer cannot log in after MFA reset – session token lost on Safari

## Symptoms
- User receives an MFA‑reset link and clicks it in Safari.  
- After completing the reset flow, the browser redirects back to the sign‑in page **without a valid session token**.  
- The user remains on the login screen and cannot access the application.

## Root Cause
Safari’s handling of third‑party redirects can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. The authentication cookie is therefore not persisted, so the final redirect arrives with no session token attached.

## Resolution Steps
1. **Retry the MFA reset in Google Chrome** – Chrome preserves the authentication cookie across the redirect, allowing the session token to be delivered correctly.  
2. **Or clear Safari cookies for our domain** –  
   - Open **Safari → Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.  
3. **Verify successful login** – confirm the user lands on the application home page without being prompted for credentials again.

## Prevention
- Recommend using a Chromium‑based browser (Chrome, Edge) for MFA‑reset links in the email.  
- Include a brief note in the MFA‑reset email: *“If you’re using Safari, clear cookies for our domain before clicking the link.”*  
- Monitor incident logs for repeated Safari‑related MFA reset failures and update the article accordingly.

<details><summary>Log</summary>

```
[2026-06-01T09:18:19.084Z] Replaying a saved plan — 4 steps.
[2026-06-01T09:18:19.095Z] Step 1 of 4: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-06-01T09:18:52.510Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:18:52.510Z] Step 3 of 4: Security-scanning the note
[2026-06-01T09:18:52.510Z] Step 2 of 4: Quality-checking the draft
[2026-06-01T09:18:58.367Z] Wave 2 finished in 5.9s.
[2026-06-01T09:18:58.367Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:19:36.861Z] All sub-agents finished in 77.8s.
[2026-06-01T09:19:36.874Z] Thinking with openai/gpt-oss-20b:free (~4 805 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
