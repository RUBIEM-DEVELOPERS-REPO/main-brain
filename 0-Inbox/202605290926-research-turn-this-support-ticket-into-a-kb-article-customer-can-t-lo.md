---
title: "Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they us"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

**Title**  
Customer cannot log in after MFA reset – session token lost in Safari

**Symptoms**  
- User receives MFA‑reset link and clicks it in Safari.  
- After completing the reset, the redirect back to the login page drops the session token, so the user remains unable to sign in.  

**Root cause**  
Safari’s handling of cookies/session data during the MFA‑reset redirect can clear the authentication token for our domain, preventing a successful login.

**Resolution steps**  

1. **Ask the user to retry the reset flow in Google Chrome** – Chrome preserves the session token across the redirect, allowing the login to complete.  
2. **If Chrome is not an option, have the user clear Safari cookies for our domain**:  
   - Open **Settings → Safari → Advanced → Website Data**.  
   - Locate our domain (e.g., `example.com`) and swipe left to delete it, or tap **Remove All Website Data**.  
   - Close and reopen Safari, then repeat the MFA‑reset link process.  

**Prevention**  

- Include a note in the MFA‑reset email that recommends using Chrome for the reset flow, or that Safari may require cookie clearing.  
- Update internal documentation to flag Safari as a potential issue for MFA‑reset redirects, prompting support agents to suggest Chrome or cookie clearing as first‑line fixes.  

*No external sources were available to corroborate these steps; the article is based solely on the support ticket details provided.*

## Web sources
1. [TURN | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/turn) _(relevance 14, http)_
2. [TURN Definition &amp; Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/turn) _(relevance 9, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[https://www.turnitin.com/login_page.asp](https://www.turnitin.com/login_page.asp)~~ — thin-content (0 chars (min 200))

## Vault hits at time of research
_(none)_
