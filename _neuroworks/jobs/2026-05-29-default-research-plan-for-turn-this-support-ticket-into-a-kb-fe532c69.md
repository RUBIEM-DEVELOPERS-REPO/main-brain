---
type: job
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing
slug: default-research-plan-for-turn-this-support-ticket-into-a-kb-fe532c69
created: 2026-05-29T14:17:38.930Z
jobId: fe532c69-88a7-4403-a25f-8fe17c54a602
status: succeeded
template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:16:02.245Z
finishedAt: 2026-05-29T14:17:38.930Z
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
- **Started:** 2026-05-29T14:16:02.245Z
- **Finished:** 2026-05-29T14:17:38.930Z
- **Title:** Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

## Plan
Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

### Steps
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (41.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (11.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.5s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
---
title: Customer cannot log in after MFA reset – session token lost on Safari
slug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari
last-updated: 2026-05-26
audience: Free / Pro / All
tags: [login, MFA, Safari, session-token]
---

# Customer cannot log in after MFA reset – session token lost on Safari

## Symptoms
- The user receives an MFA‑reset link and clicks it in Safari.  
- After completing the reset flow, the browser redirects back to the sign‑in page **without a valid session token**.  
- The user remains on the sign‑in screen and cannot access the application.  

## Root cause
Safari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in. [1][3]

## Resolution steps
1. **Retry the MFA reset in Google Chrome**  
   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.  
2. **Or clear Safari cookies for our domain**  
   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.  
3. **Verify that the user can now log in successfully**.  

## Prevention
- Add a note to the MFA‑reset email reminding users that the link works best in Chrome or that they may need to clear Safari cookies if they use Safari.  
- Update internal troubleshooting guides to include this Safari‑specific step.  
- Periodically test the MFA reset flow across browsers to catch any future changes in cookie handling.  

---

<details><summary>Log</summary>

```
[2026-05-29T14:16:02.255Z] Replaying a saved plan — 4 steps.
[2026-05-29T14:16:02.258Z] Step 1 of 4: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-05-29T14:16:43.391Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:16:43.391Z] Step 3 of 4: Security-scanning the note
[2026-05-29T14:16:43.391Z] Step 2 of 4: Quality-checking the draft
[2026-05-29T14:16:54.378Z] Wave 2 finished in 11.0s.
[2026-05-29T14:16:54.378Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:16:58.865Z] All sub-agents finished in 56.6s.
[2026-05-29T14:16:58.878Z] Thinking with openai/gpt-oss-20b:free (~4 570 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
