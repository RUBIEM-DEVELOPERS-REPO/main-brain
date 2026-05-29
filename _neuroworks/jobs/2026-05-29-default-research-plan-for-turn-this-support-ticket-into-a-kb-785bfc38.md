---
type: job
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing
slug: default-research-plan-for-turn-this-support-ticket-into-a-kb-785bfc38
created: 2026-05-29T20:51:49.004Z
jobId: 785bfc38-6e4a-4d0e-9e94-9d6c696b1192
status: succeeded
template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:45:06.425Z
finishedAt: 2026-05-29T20:51:49.004Z
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

- **Status:** succeeded
- **Template:** custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
- **Started:** 2026-05-29T20:45:06.425Z
- **Finished:** 2026-05-29T20:51:49.004Z
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
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (30.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (337.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (22.2s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
---
title: "Customer cannot log in after MFA reset – Safari session token lost"
slug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari
last-updated: 2026-05-26
audience: Free / Pro / All
tags: [login, MFA, Safari, session-token]
---

# Customer cannot log in after MFA reset – Safari session token lost

## Symptoms
- User receives an MFA‑reset link and clicks it in Safari.  
- After completing the reset flow, the browser redirects back to the sign‑in page **without a valid session token**.  
- The user remains on the sign‑in screen and cannot access the application.  

## Root cause
Safari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in. [1]

## Resolution steps
1. **Retry the MFA reset in Google Chrome** – Chrome’s cookie handling normally preserves the session token.  
2. **Or clear Safari cookies for our domain**  
   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.  

## Prevention
- Document the Safari‑specific issue in the product’s known‑issues list.  
- Where possible, implement a fallback that re‑issues the session token after the MFA‑reset redirect, making the flow browser‑agnostic.

<details><summary>Log</summary>

```
[2026-05-29T20:45:06.443Z] Replaying a saved plan — 4 steps.
[2026-05-29T20:45:06.449Z] Step 1 of 4: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-05-29T20:45:36.650Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:45:36.650Z] Step 3 of 4: Security-scanning the note
[2026-05-29T20:45:36.650Z] Step 2 of 4: Quality-checking the draft
[2026-05-29T20:50:50.750Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — fetch failed
[2026-05-29T20:51:14.193Z] Wave 2 finished in 337.5s.
[2026-05-29T20:51:14.193Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:51:15.143Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:51:36.389Z] All sub-agents finished in 389.9s.
[2026-05-29T20:51:36.403Z] Thinking with openai/gpt-oss-20b:free (~5 080 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
