---
type: job
title: Ad-hoc: Turn this support ticket into a KB article: 'Customer can't
slug: ad-hoc-turn-this-support-ticket-into-a-kb-article-customer-c-6e845cf1
created: 2026-05-26T21:55:40.949Z
jobId: 6e845cf1-8088-448b-ba1a-684aed46858f
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-26T21:53:19.250Z
finishedAt: 2026-05-26T21:55:40.949Z
---

# Ad-hoc: Turn this support ticket into a KB article: 'Customer can't 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-26T21:53:19.250Z
- **Finished:** 2026-05-26T21:55:40.949Z
- **Title:** Ad-hoc: Turn this support ticket into a KB article: 'Customer can't 

## Inputs
```json
{
  "task": "(You are operating as Casey, the Customer Success Lead. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nTurn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaAutoRouted": "customer-success",
  "autoRouteMatches": [
    "support ticket",
    "KB article"
  ],
  "personaId": "customer-success"
}
```

## Plan
Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

### Steps
1. ✓ Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web — `research.deep` (36.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (9.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.8s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
---
title: "Can't log in after MFA reset – session token lost on Safari"
slug: cant-log-in-after-mfa-reset-safari
last-updated: 2026-05-26
audience: All
tags: [login, MFA, Safari, session-token]
---

# Can't log in after MFA reset – session token lost on Safari

## Symptoms
- User clicks the MFA‑reset link in Safari and completes the reset flow.  
- After the reset, the redirect back to the login page occurs **without a valid session token**.  
- The sign‑in screen reappears and the user cannot access the application.  

## Root cause
Safari may drop or block the session cookie set during the MFA‑reset process, especially when third‑party cookies are restricted. This results in the authentication redirect losing the token required to complete sign‑in [1].

## Resolution steps
1. **Retry the MFA reset in Google Chrome**  
   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling typically preserves the session token.  

2. **If the user must stay on Safari, clear Safari cookies for our domain**  
   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, reopen Safari, and repeat the MFA‑reset link.  

3. **Verify successful login**  
   - After entering the new MFA code, the user should be taken directly to the application home page without being redirected back to the sign‑in screen.  

## Prevention
- **Add a browser recommendation** to the MFA‑reset email, noting that Chrome is the preferred browser for this flow.  
- **Update internal documentation** to include the Safari cookie‑clearance steps for support agents.  
- **Monitor cookie‑handling changes** in Safari releases and adjust the MFA‑reset flow if needed.  

_Assumed: The KB article will be published in the standard internal knowledge base format, matching the front‑matter shown above._

<details><summary>Log</summary>

```
[2026-05-26T21:53:19.250Z] auto-routed to persona "customer-success" (score=3, matched=support ticket, KB article)
[2026-05-26T21:53:19.251Z] Handling this myself — I'm at least as free as my peers (0 vs 0 jobs in progress).
[2026-05-26T21:53:19.251Z] Working as Clawbot — AI agent operator.
[2026-05-26T21:53:19.279Z] Thinking about the best approach…
[2026-05-26T21:53:19.316Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-26T21:53:36.035Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-26T21:53:36.035Z] Plan ready: 1 step — Default research plan for: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing.
[2026-05-26T21:53:36.040Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-26T21:53:36.040Z] Step 1 of 1: Researching "Turn this support ticket into a KB article: 'Customer can't log in after MFA res…" — vault + web
[2026-05-26T21:54:12.695Z] All sub-agents finished in 36.7s.
[2026-05-26T21:54:12.717Z] Thinking with openai/gpt-oss-20b:free (~3 446 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-26T21:54:37.046Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-26T21:54:37.051Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-26T21:54:37.051Z] Step 3 of 3: Security-scanning the note
[2026-05-26T21:54:37.051Z] Step 2 of 3: Quality-checking the draft
[2026-05-26T21:54:38.380Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-26T21:54:46.358Z] Wave 1 finished in 9.3s.
[2026-05-26T21:54:46.358Z] All sub-agents finished in 9.3s.
[2026-05-26T21:54:46.361Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-26T21:54:50.203Z] All sub-agents finished in 3.8s.
[2026-05-26T21:54:50.208Z] quality.check failed (score=0.55, issues: Low citation coverage – no sources provided for claims; No explicit mention of the exact title format requested) — re-synthesising with the large model
[2026-05-26T21:54:50.222Z] Thinking with openai/gpt-oss-120b:free (~4 011 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-26T21:55:29.905Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-26T21:55:29.905Z] Wrote to your second brain — committing the changes.
[2026-05-26T21:55:30.184Z] Vault commit: done.
[2026-05-26T21:55:30.202Z] Saved this workflow as a reusable template: custom-you-are-operating-as-casey-the-customer-success-lead-bias-to.
[2026-05-26T21:55:30.202Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-05-26T21:55:40.949Z] Not filed to the vault — quality below threshold (factuality_risk=0.30, citation_coverage=0.10, persona_fit=0.90).
```
</details>
