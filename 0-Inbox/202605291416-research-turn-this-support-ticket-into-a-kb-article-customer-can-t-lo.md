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

**Root Cause**  
Safari’s handling of third‑party redirects can drop cookies (including the session token) when the MFA reset link is opened directly from the email client. This is a known browser‑specific issue that does not occur in Chrome.  

**Resolution Steps**  

| Step | Action |
|------|--------|
| 1 | Ask the customer to retry the MFA reset flow using **Google Chrome** (or another Chromium‑based browser). |
| 2 | If Chrome is not available, have the customer **clear Safari cookies for our domain**: <br>• Settings → Safari → Advanced → Website Data → Search for *[your‑domain]* → Remove. <br>• Then repeat the MFA reset link. |
| 3 | Verify that the user can now log in successfully. |
| 4 | Document the outcome in the ticket and close it. |

**Prevention**  
- Add a note to the MFA‑reset email reminding users that the link works best in Chrome or that they may need to clear Safari cookies if they use Safari.  
- Update internal troubleshooting guides to include this Safari‑specific step.  
- Periodically test the MFA reset flow across browsers to catch any future changes in cookie handling.  

*Note: No internal vault documentation was available for this issue, and the provided web sources did not contain relevant information. The above KB article is based on standard browser‑behavior knowledge.*

## Web sources
1. [turn - Перевод на русский - примеры английский | Reverso Context](https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/turn) _(relevance 15, browser)_
2. [TURN | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/turn) _(relevance 14, http)_
3. [Turn: Washington's Spies - Wikipedia](https://en.wikipedia.org/wiki/Turn:_Washington%27s_Spies) _(relevance 14, http)_

## Vault hits at time of research
_(none)_
