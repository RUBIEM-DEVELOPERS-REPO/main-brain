---
type: job
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing
slug: default-research-plan-for-turn-this-support-ticket-into-a-kb-0791702f
created: 2026-05-29T19:21:23.883Z
jobId: 0791702f-52a1-4ac7-b773-aad0dd07063f
status: succeeded
template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:20:22.970Z
finishedAt: 2026-05-29T19:21:23.883Z
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
- **Started:** 2026-05-29T19:20:22.970Z
- **Finished:** 2026-05-29T19:21:23.883Z
- **Title:** Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

## Plan
Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

### Steps
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (30.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (3.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.6s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
---
title: "Customer cannot log in after MFA reset – session token lost on Safari"
slug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari
last-updated: 2026-05-26
audience: Free / Pro / All
tags: [login, MFA, Safari, session-token]
---

# Customer cannot log in after MFA reset – session token lost on Safari

## Symptoms

- User receives an MFA‑reset link and clicks it in Safari.
- After completing the reset flow, the browser redirects back to the sign‑in page **without a valid session token**.
- The user remains on the sign‑in screen and cannot access the application.

## Root cause

Safari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in. [1]

## Resolution steps

1. **Retry the MFA reset in Google Chrome**  
   Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.

2. **Or clear Safari cookies for our domain**  
   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.

3. **Verify successful login**  
   Confirm the user can access the application and that no further login prompts appear.

## Prevention

- **User‑facing guidance**: Add a note to the MFA‑reset email stating the link works best in Chrome and include a brief Safari‑specific tip about clearing cookies if issues arise.  
- **Technical review**: Evaluate the redirect flow to ensure session cookies are set as first‑party wherever possible, reducing reliance on third‑party cookie handling.  
- **Browser compatibility testing**: Include Safari in the QA matrix for MFA‑reset flows to catch similar issues early.

<details><summary>Log</summary>

```
[2026-05-29T19:20:22.983Z] Replaying a saved plan — 4 steps.
[2026-05-29T19:20:22.989Z] Step 1 of 4: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-05-29T19:20:53.295Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:20:53.296Z] Step 3 of 4: Security-scanning the note
[2026-05-29T19:20:53.296Z] Step 2 of 4: Quality-checking the draft
[2026-05-29T19:20:56.888Z] Wave 2 finished in 3.6s.
[2026-05-29T19:20:56.888Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:21:00.531Z] All sub-agents finished in 37.5s.
[2026-05-29T19:21:00.546Z] Thinking with openai/gpt-oss-20b:free (~4 561 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T19:21:01.658Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T19:21:23.883Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
