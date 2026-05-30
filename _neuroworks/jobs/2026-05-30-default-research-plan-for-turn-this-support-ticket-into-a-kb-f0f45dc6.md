---
type: job
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing
slug: default-research-plan-for-turn-this-support-ticket-into-a-kb-f0f45dc6
created: 2026-05-30T17:55:06.641Z
jobId: f0f45dc6-323f-444c-9ed8-114806b290ed
status: succeeded
template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:54:11.767Z
finishedAt: 2026-05-30T17:55:06.641Z
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
- **Started:** 2026-05-30T17:54:11.767Z
- **Finished:** 2026-05-30T17:55:06.641Z
- **Title:** Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing\nDescription: Saved from chat: \"(You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nTurn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.\""
}
```

## Plan
Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

### Steps
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (29.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.6s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
---
title: Customer cannot log in after MFA reset – Safari drops session token
slug: customer-cannot-log-in-after-mfa-reset-safari
last-updated: 2026‑05‑26
audience: Free / Pro / All
tags: [login, MFA, Safari, session‑token]
---

# Customer cannot log in after MFA reset – Safari drops session token

## Symptoms

- User receives an MFA‑reset link and clicks it in Safari.  
- After completing the reset flow, the browser redirects back to the sign‑in page **without a valid session token**.  
- The user remains on the sign‑in screen and cannot access the application.

## Root cause

Safari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in.  

## Resolution steps

1. **Retry the MFA reset in Google Chrome**  
   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.  

2. **Or clear Safari cookies for our domain**  
   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.  

## Prevention

- Add a note to the MFA reset email template recommending Chrome for the best experience.  
- Update internal documentation to include the Safari cookie‑clear step for any future similar issues.

<details><summary>Log</summary>

```
[2026-05-30T17:54:11.779Z] Replaying a saved plan — 4 steps.
[2026-05-30T17:54:11.785Z] Step 1 of 4: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-05-30T17:54:41.026Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:54:41.026Z] Step 3 of 4: Security-scanning the note
[2026-05-30T17:54:41.026Z] Step 2 of 4: Quality-checking the draft
[2026-05-30T17:54:47.270Z] Wave 2 finished in 6.2s.
[2026-05-30T17:54:47.271Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:54:52.890Z] All sub-agents finished in 41.1s.
[2026-05-30T17:54:52.909Z] Thinking with openai/gpt-oss-20b:free (~5 011 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
