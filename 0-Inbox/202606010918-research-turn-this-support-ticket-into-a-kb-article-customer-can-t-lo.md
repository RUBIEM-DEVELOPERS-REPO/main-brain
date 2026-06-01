---
title: "Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they us"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

**Title**  
Customer cannot log in after MFA reset – session token lost on Safari redirect  

**Symptoms**  
- User receives MFA‑reset link and clicks it in Safari.  
- After completing the reset flow, the redirect back to the application occurs **without a valid session token**.  
- The user remains on the login page (or receives “session expired” / “please sign in again” errors).  

**Root Cause**  
Safari’s handling of third‑party redirects can drop cookies or other session data when the MFA‑reset flow crosses domains. In this case the authentication cookie (or token) set by the reset endpoint is not persisted, so the final redirect arrives with no session token attached.  

**Resolution Steps**  

| Step | Action |
|------|--------|
| 1 | Ask the customer to **retry the MFA reset using Google Chrome** (or any Chromium‑based browser). Chrome preserves the authentication cookie across the redirect, allowing the session token to be delivered correctly. |
| 2 | If the customer must stay on Safari, have them **clear cookies for the domain** (e.g., `your‑app.com`) before starting the reset flow again: <br>• Settings → Safari → Privacy → Manage Website Data → Search for the domain → Remove. <br>• Then repeat the MFA‑reset link click. |
| 3 | Verify successful login by confirming the user reaches the dashboard without being prompted again for credentials. |
| 4 (optional) | If the issue persists, ask the user to open the reset link in a **private/incognito window** of Safari after clearing cookies, then repeat the steps. |

**Prevention**  

- **Documentation**: Add a note in the login/MFA reset guide that Safari may drop session cookies on redirects; recommend Chrome for MFA‑reset flows.  
- **Technical**: Review the authentication flow to ensure SameSite cookie attributes are set to `Lax` or `None` with `Secure` flag, which improves cross‑browser compatibility.  
- **Monitoring**: Track MFA‑reset success rates per browser; trigger an alert if Safari failure rates exceed a threshold.  

*This KB article is derived from the support ticket details provided.*

## Web sources
1. [TURN | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/turn) _(relevance 14, http)_
2. [TURN Definition &amp; Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/turn) _(relevance 9, http)_
3. [turn invatare de vanzare &#x27; Anunturi &#x27; OLX.ro](https://www.olx.ro/oferte/q-turn-invatare/) _(relevance 6, http)_

## Vault hits at time of research
_(none)_
