---
type: template
title: Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing (custom-you-are-operating-as-casey-the-customer-success-lead-bias-to)
slug: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
created: 2026-05-26T21:55:30.198Z
templateId: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to
role: Custom
originTask: (You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)  Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing (custom-you-are-operating-as-casey-the-customer-success-lead-bias-to)

Saved from chat: "(You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)

Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)

Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"Turn this support ticket into a KB article: 'Customer can't log in after MFA res…\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nTurn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "---\ntitle: \"Customer cannot log in after MFA reset – session token lost on Safari\"\nslug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari\nlast-updated: 2026-05-26\naudience: Free / Pro / All\ntags: [login, MFA, Safari, session-token]\n---\n\n# Customer cannot log in after MFA reset – session token lost on Safari\n\n## What you'll see\n\n- The user receives the MFA‑reset link and clicks it in Safari.\n- After completing the reset, the browser redirects back to the sign‑in page **without a valid session token**.\n- The user remains on the sign‑in screen and cannot access the application.\n\nCommon errors / messages  \n- “You have been signed out. Please sign in again.”  \n- “Session expired. Please log in.”  \n\n## Why this happens\n\nSafari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in.\n\n## Fix it in 3 steps\n\n1. **Retry the MFA reset in Google Chrome**  \n   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.\n\n2. **Or clear Safari cookies for our domain**  \n   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  \n   - Search for the service’s domain (e.g., `example.com`).  \n   - Select it and click **Remove** (or **Remove All** if appropriate).  \n   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.\n\n3. **Verify successful login**  \n   - After entering the new MFA code, the user should be taken to the application home page without being redirected back to the sign‑in screen.\n\n> **Tip:** If the user is behind a corporate VPN, disable it first, as it can interfere with cookie handling.\n\n## Prevention\n\n- Include a note in the MFA‑reset email that Chrome is the recommended browser for the reset flow.  \n- Instruct users to clear cookies for the domain if they must use Safari.  \n- Monitor for similar incidents and update the help article if a new browser issue emerges.\n\n## Still stuck?\n\nIf those steps didn't fix it, your situation might be different. Contact support and share:\n- Browser name and version  \n- Account email address  \n- A screenshot of the error message  \n\n---",
        "sources": "[1] research.deep (query=\"Turn this support ticket into a KB article: 'Customer can't \")\n**Title**  \nUser cannot log in after MFA reset – session token lost on Safari  \n\n**Symptoms**  \n- Customer receives the MFA‑reset link and clicks it in Safari.  \n- After completing the reset, the redirect back to the login page occurs **without a valid session token**.  \n- The user remains on the sign‑in screen and cannot access the application.  \n\n**Root Cause**  \nSafari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This results in the authentication redirect losing the token needed to complete sign‑in.  \n\n**Resolution Steps**  \n\n1. **Ask the user to retry the MFA reset in Google Chrome**  \n   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.  \n\n   *or*  \n\n2. **If the user must stay on Safari, clear Safari cookies for the domain**  \n   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  \n   - Search for the service’s domain (e.g., `example.com`).  \n   - Select it and click **Remove** (or **Remove All** if appropriate).  \n   - Close the preferences window, then reopen Safari and repeat the MFA‑reset link.  \n\n3. Verify successful login: after entering the new MFA code, the user should be taken to the application home page without being redirected back to the sign‑in screen.  \n\n**Prevention**  \n\n- **Communicate browser recommendations**: Include a note in the MFA‑reset email that Chrome is the preferred b"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "---\ntitle: \"Customer cannot log in after MFA reset – session token lost on Safari\"\nslug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari\nlast-updated: 2026-05-26\naudience: Free / Pro / All\ntags: [login, MFA, Safari, session-token]\n---\n\n# Customer cannot log in after MFA reset – session token lost on Safari\n\n## What you'll see\n\n- The user receives the MFA‑reset link and clicks it in Safari.\n- After completing the reset, the browser redirects back to the sign‑in page **without a valid session token**.\n- The user remains on the sign‑in screen and cannot access the application.\n\nCommon errors / messages  \n- “You have been signed out. Please sign in again.”  \n- “Session expired. Please log in.”  \n\n## Why this happens\n\nSafari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in.\n\n## Fix it in 3 steps\n\n1. **Retry the MFA reset in Google Chrome**  \n   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.\n\n2. **Or clear Safari cookies for our domain**  \n   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  \n   - Search for the service’s domain (e.g., `example.com`).  \n   - Select it and click **Remove** (or **Remove All** if appropriate).  \n   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.\n\n3. **Verify successful login**  \n   - After entering the new MFA code, the user should be taken to the application home page without being redirected back to the sign‑in screen.\n\n> **Tip:** If the user is behind a corporate VPN, disable it first, as it can interfere with cookie handling.\n\n## Prevention\n\n- Include a note in the MFA‑reset email that Chrome is the recommended browser for the reset flow.  \n- Instruct users to clear cookies for the domain if they must use Safari.  \n- Monitor for similar incidents and update the help article if a new browser issue emerges.\n\n## Still stuck?\n\nIf those steps didn't fix it, your situation might be different. Contact support and share:\n- Browser name and version  \n- Account email address  \n- A screenshot of the error message  \n\n---",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nTurn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "---\ntitle: \"Customer cannot log in after MFA reset – session token lost on Safari\"\nslug: customer-cannot-log-in-after-mfa-reset-session-token-lost-safari\nlast-updated: 2026-05-26\naudience: Free / Pro / All\ntags: [login, MFA, Safari, session-token]\n---\n\n# Customer cannot log in after MFA reset – session token lost on Safari\n\n## What you'll see\n\n- The user receives the MFA‑reset link and clicks it in Safari.\n- After completing the reset, the browser redirects back to the sign‑in page **without a valid session token**.\n- The user remains on the sign‑in screen and cannot access the application.\n\nCommon errors / messages  \n- “You have been signed out. Please sign in again.”  \n- “Session expired. Please log in.”  \n\n## Why this happens\n\nSafari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This causes the authentication redirect to lose the token needed to complete sign‑in.\n\n## Fix it in 3 steps\n\n1. **Retry the MFA reset in Google Chrome**  \n   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.\n\n2. **Or clear Safari cookies for our domain**  \n   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  \n   - Search for the service’s domain (e.g., `example.com`).  \n   - Select it and click **Remove** (or **Remove All** if appropriate).  \n   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.\n\n3. **Verify successful login**  \n   - After entering the new MFA code, the user should be taken to the application home page without being redirected back to the sign‑in screen.\n\n> **Tip:** If the user is behind a corporate VPN, disable it first, as it can interfere with cookie handling.\n\n## Prevention\n\n- Include a note in the MFA‑reset email that Chrome is the recommended browser for the reset flow.  \n- Instruct users to clear cookies for the domain if they must use Safari.  \n- Monitor for similar incidents and update the help article if a new browser issue emerges.\n\n## Still stuck?\n\nIf those steps didn't fix it, your situation might be different. Contact support and share:\n- Browser name and version  \n- Account email address  \n- A screenshot of the error message  \n\n---"
      },
      "rationale": "auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ],
    [
      3
    ]
  ]
}
```
