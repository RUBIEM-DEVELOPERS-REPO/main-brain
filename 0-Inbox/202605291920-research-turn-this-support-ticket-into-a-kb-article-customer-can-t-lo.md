---
title: "Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they us"
created: 2026-05-29
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
- After completing the reset flow, the browser redirects back to the login page but the session token is missing, so the user remains unauthenticated.  
- The same link works correctly when opened in Chrome.  

**Root Cause**  
Safari’s default cookie handling can discard third‑party cookies (including the session token) on cross‑origin redirects that occur during the MFA‑reset flow. This results in the authentication session being lost before the final login step.  

**Resolution Steps**  

| Step | Action |
|------|--------|
| 1 | Ask the user to retry the MFA‑reset link using **Google Chrome** (or another Chromium‑based browser). |
| 2 | If the user must stay on Safari, have them **clear cookies for the domain** (e.g., `your‑app.com`) before clicking the reset link again: <br>• Settings → Safari → Advanced → Website Data → Search for the domain → Delete. |
| 3 | After clearing cookies, repeat the MFA‑reset process. The session token should now be retained and the login will succeed. |
| 4 | Verify successful login and confirm the user can access the application. |

**Prevention**  

- **Documentation**: Add a note to the user‑facing MFA‑reset email that the link works best in Chrome; include a brief Safari‑specific tip about clearing cookies if they encounter issues.  
- **Technical**: Review the redirect flow to ensure the session token is set as a **first‑party cookie** or use the `SameSite=None; Secure` attribute, which mitigates Safari’s stricter cookie policies.  
- **Monitoring**: Track MFA‑reset failures by browser type; if Safari‑related failures exceed a threshold, prioritize a fix in the authentication service.  

*Evidence*: The ticket description itself provides the observed behavior and the effective work‑around (use Chrome or clear Safari cookies). No additional vault or external sources were available for this specific issue.

## Web sources
1. [turn - Перевод на русский - примеры английский | Reverso Context](https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/turn) _(relevance 15, browser)_
2. [TURN | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/turn) _(relevance 14, http)_
3. [Turn: Washington's Spies - Wikipedia](https://en.wikipedia.org/wiki/Turn:_Washington%27s_Spies) _(relevance 14, http)_

## Vault hits at time of research
_(none)_
