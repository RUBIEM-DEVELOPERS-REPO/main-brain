---
title: "Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they us"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

**Title**  
Customer cannot log in after MFA reset – session token lost on Safari redirect  

**Symptoms**  
- User receives MFA reset link and clicks it in Safari.  
- After completing the reset, the login page redirects but the session token is missing, so the user remains unauthenticated.  
- The issue does not occur when the same steps are performed in Chrome.  

**Root Cause**  
Safari’s handling of third‑party cookies or redirect parameters can drop the session token after an MFA reset link is followed. This results in the authentication session being lost before the final login step.  

**Resolution Steps**  

1. **Confirm the browser** – Verify the user is using Safari when the problem occurs.  
2. **Retry in Chrome** – Ask the user to repeat the MFA reset flow using Google Chrome, which preserves the session token correctly.  
3. **If Safari must be used:**  
   a. In Safari, open **Settings → Privacy → Cookies and Website Data**.  
   b. Choose **“Allow from websites I visit”** (or a less restrictive setting).  
   c. Clear cookies for the affected domain:  
      - Safari → Preferences → Privacy → Manage Website Data → search for the domain → **Remove**.  
   d. Close and reopen Safari, then repeat the MFA reset link.  

**Prevention**  

- Document the Safari cookie handling limitation in the internal browser compatibility guide.  
- Include a note in the MFA reset email template: “For best results, use Chrome or clear Safari cookies for `your‑domain.com` before clicking the reset link.”  
- Periodically test the MFA reset flow across supported browsers after any authentication‑related updates.  

*No additional evidence was available in the vault or external sources to expand on this issue.*

## Web sources
1. [TURN | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/turn) _(relevance 14, http)_
2. [TURN Definition &amp; Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/turn) _(relevance 9, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[turn invatare de vanzare ' Anunturi ' OLX.ro](https://www.olx.ro/oferte/q-turn-invatare/)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
