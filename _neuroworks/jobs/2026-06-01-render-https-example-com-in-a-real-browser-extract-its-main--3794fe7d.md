---
type: job
title: Render https://example.com in a real browser, extract its main content.
slug: render-https-example-com-in-a-real-browser-extract-its-main--3794fe7d
created: 2026-06-01T13:35:15.728Z
jobId: 3794fe7d-de7d-4312-af45-c3793f4ff53c
status: succeeded
template: custom-render-https-example-com-with-a-real-browser-and-tell-me-wha
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:34:28.829Z
finishedAt: 2026-06-01T13:35:15.727Z
---

# Render https://example.com in a real browser, extract its main content.

- **Status:** succeeded
- **Template:** custom-render-https-example-com-with-a-real-browser-and-tell-me-wha
- **Started:** 2026-06-01T13:34:28.829Z
- **Finished:** 2026-06-01T13:35:15.727Z
- **Title:** Render https://example.com in a real browser, extract its main content.

## Plan
Render https://example.com in a real browser, extract its main content.

### Steps
1. ✓ Browsing https://example.com (Playwright) — `web.scrape` (21.5s)
    > the main content is rendered by JS — fetch wouldn't work; wait for the selector then extract just it
2. ✓ Quality-checking the draft — `quality.check` (16.0s)
    > auto-injected: score factuality, citation coverage, persona fit
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (15.7s)
    > auto-injected: peer-review the draft

## Answer
## Report – Content of https://example.com

The page at **https://example.com/** displays a single‑page layout titled **“Example Domain.”**  
The body text reads:

> This domain is for use in documentation examples without needing permission.  
> Avoid use in operations.  
> Learn more

A link to the IANA domain registry page is also present. The content is intended solely for illustrative purposes and is not meant for operational use.  

Sources: [1] web.scrape, [3] security.scan.

<details><summary>Log</summary>

```
[2026-06-01T13:34:28.853Z] Replaying a saved plan — 4 steps.
[2026-06-01T13:34:28.866Z] Step 1 of 4: Browsing https://example.com (Playwright)
[2026-06-01T13:34:50.374Z] Running 3 sub-agents in parallel (1 I/O + 2 thinking).
[2026-06-01T13:34:50.374Z] Step 3 of 4: Security-scanning the note
[2026-06-01T13:34:50.374Z] Step 2 of 4: Quality-checking the draft
[2026-06-01T13:34:50.374Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T13:35:06.375Z] Wave 2 finished in 16.0s.
[2026-06-01T13:35:06.375Z] All sub-agents finished in 37.5s.
[2026-06-01T13:35:06.385Z] Thinking with openai/gpt-oss-20b:free (~2 548 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
