---
title: "Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they us"
created: 2026-05-26
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

**Title**  
User cannot log in after MFA reset – session token lost on Safari  

**Symptoms**  
- Customer receives the MFA‑reset link and clicks it in Safari.  
- After completing the reset, the redirect back to the login page occurs **without a valid session token**.  
- The user remains on the sign‑in screen and cannot access the application.  

**Root Cause**  
Safari can drop or block the session cookie that is set during the MFA‑reset flow, especially when third‑party cookies are restricted. This results in the authentication redirect losing the token needed to complete sign‑in.  

**Resolution Steps**  

1. **Ask the user to retry the MFA reset in Google Chrome**  
   - Open Chrome, click the MFA‑reset link, and complete the flow. Chrome’s cookie handling normally preserves the session token.  

   *or*  

2. **If the user must stay on Safari, clear Safari cookies for the domain**  
   - In Safari, go to **Preferences → Privacy → Manage Website Data**.  
   - Search for the service’s domain (e.g., `example.com`).  
   - Select it and click **Remove** (or **Remove All** if appropriate).  
   - Close the preferences window, then reopen Safari and repeat the MFA‑reset link.  

3. Verify successful login: after entering the new MFA code, the user should be taken to the application home page without being redirected back to the sign‑in screen.  

**Prevention**  

- **Communicate browser recommendations**: Include a note in the MFA‑reset email that Chrome is the preferred browser for the reset flow.  
- **Document known Safari cookie issues** in the internal knowledge base so support agents can quickly suggest the Chrome alternative or cookie‑clearing steps.  
- **Monitor browser‑specific analytics** for MFA‑reset failures; if Safari‑related failures rise, consider updating the reset flow to use SameSite‑None cookies or provide a fallback method.  

*Note: The above steps are based on standard browser cookie behavior; the specific ServiceNow MFA‑reset process is documented in the official guide [1].*

## Web sources
1. [Reset multi-factor authentication (MFA) or pair a new device - Support and Troubleshooting](https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0662343) _(relevance 25, browser)_

## Filtered sources _(2 dropped by validator)_
- ~~[SUNSYNK Owners Group | MFA appears to be broken 🤦‍♂️](https://www.facebook.com/groups/571819024654208/posts/1346875037148599/)~~ — thin-content (0 chars (min 200))
- ~~[https://www.reddit.com/r/paloaltonetworks/comments/z4oq7s/cant_get_into_support_portal_because_my_mfa/](https://www.reddit.com/r/paloaltonetworks/comments/z4oq7s/cant_get_into_support_portal_because_my_mfa/)~~ — thin-content (0 chars (min 200))

## Vault hits at time of research
_(none)_
