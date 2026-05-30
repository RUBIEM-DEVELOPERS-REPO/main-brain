---
title: "Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they us"
created: 2026-05-30
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Turn this support ticket into a KB article: 'Customer can't log in after MFA reset. We sent them the reset link, they used it on Safari, but the redirect dropped the session token. Fix: ask them to retry in Chrome OR clear Safari cookies for our domain.' Output should have Title, Symptoms, Root cause, Resolution steps, Prevention.

**Alignment check — required before responding.** Before producing

**Title**  
Customer cannot log in after MFA reset – Safari drops session token  

**Symptoms**  
- User receives MFA reset link and clicks it in Safari.  
- After following the link, the browser redirects but the session token is lost, leaving the user unable to complete login.  

**Root Cause**  
Safari’s handling of the redirect after an MFA reset can clear cookies for the domain, causing the session token to be discarded. This prevents the authentication flow from completing.  

**Resolution Steps**  
1. **Ask the user to retry the reset flow in Google Chrome** (or another Chromium‑based browser).  
2. If Chrome is not available, **instruct the user to clear Safari cookies for the affected domain**:  
   - Open **Settings → Safari → Advanced → Website Data**.  
   - Locate the domain (e.g., `your‑app.com`) and swipe to delete it, or tap **Remove All** to clear all site data.  
   - Close Safari and repeat the MFA reset link click.  

**Prevention**  
- Add a note to the MFA reset email template recommending Chrome for the best experience.  
- Update internal documentation to include the Safari cookie‑clear step for any future similar issues.  

*Note: No specific internal vault or external sources were available for this scenario, so the above KB article is based on standard troubleshooting practices for browser‑related session token loss.*

## Web sources
1. [TURN&#20013;&#25991;(&#31616;&#20307;)&#32763;&#35793;&#65306;&#21073;&#26725;&#35789;&#20856;](https://dictionary.cambridge.org/zhs/%E8%AF%8D%E5%85%B8/%E8%8B%B1%E8%AF%AD-%E6%B1%89%E8%AF%AD-%E7%AE%80%E4%BD%93/turn) _(relevance 15, http)_
2. [turn是什么意思_turn的翻译_音标_读音_用法_例句_爱词霸在线词典](https://www.iciba.com/word?w=turn) _(relevance 15, http)_
3. [turn（英语单词）_百度百科](https://baike.baidu.com/item/turn/69635) _(relevance 15, browser)_

## Vault hits at time of research
_(none)_
