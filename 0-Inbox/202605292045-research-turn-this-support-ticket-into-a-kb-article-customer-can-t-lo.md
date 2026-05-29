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
Customer cannot log in after MFA reset – Safari session token lost  

**Symptoms**  
- User receives MFA‑reset link and clicks it in Safari.  
- After completing the reset flow, the browser redirects back to the login page but the session token is missing, so the user remains unauthenticated.  

**Root Cause**  
Safari’s handling of third‑party redirects can drop authentication cookies or session tokens when the MFA‑reset link is followed. This results in the token not being sent on the final redirect back to the application, preventing a successful login.  

**Resolution Steps**  

1. **Ask the user to retry the reset flow in Chrome** – Chrome preserves the session token across the MFA‑reset redirect.  
2. **If Chrome is not an option, clear Safari cookies for the application’s domain:**  
   - Open **Settings → Safari → Advanced → Website Data**.  
   - Locate the domain (e.g., `your‑app.com`) and swipe left → **Delete**.  
   - Alternatively, in Safari on macOS: **Safari → Preferences → Privacy → Manage Website Data**, find the domain, and remove it.  
3. After clearing cookies, have the user click the MFA‑reset link again and complete the flow.  
4. Verify successful login by confirming the user sees the authenticated dashboard.  

**Prevention**  
- Document the Safari‑specific issue in the product’s known‑issues list.  
- Where possible, implement a fallback that re‑issues the session token after the MFA‑reset redirect, making the flow browser‑agnostic.  
- Communicate the preferred browsers for MFA‑reset operations in the user onboarding guide.  

*Note: This KB article is based solely on the support ticket details provided, as no additional internal or external evidence was available.*

## Web sources
1. [turn - Перевод на русский - примеры английский | Reverso Context](https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/turn) _(relevance 15, browser)_
2. [TURN | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/turn) _(relevance 14, http)_
3. [Turn: Washington's Spies - Wikipedia](https://en.wikipedia.org/wiki/Turn:_Washington%27s_Spies) _(relevance 14, http)_

## Vault hits at time of research
_(none)_
