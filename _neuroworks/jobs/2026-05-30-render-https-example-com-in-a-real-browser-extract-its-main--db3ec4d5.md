---
type: job
title: Render https://example.com in a real browser, extract its main content.
slug: render-https-example-com-in-a-real-browser-extract-its-main--db3ec4d5
created: 2026-05-30T17:32:13.968Z
jobId: db3ec4d5-bd5c-4470-801a-828b4a289948
status: succeeded
template: custom-render-https-example-com-with-a-real-browser-and-tell-me-wha
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:26:33.938Z
finishedAt: 2026-05-30T17:32:13.968Z
---

# Render https://example.com in a real browser, extract its main content.

- **Status:** succeeded
- **Template:** custom-render-https-example-com-with-a-real-browser-and-tell-me-wha
- **Started:** 2026-05-30T17:26:33.938Z
- **Finished:** 2026-05-30T17:32:13.968Z
- **Title:** Render https://example.com in a real browser, extract its main content.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Render https://example.com in a real browser, extract its main content.\nDescription: Saved from chat: \"render https://example.com with a real browser and tell me what the page says\""
}
```

## Plan
Render https://example.com in a real browser, extract its main content.

### Steps
1. ✓ Browsing https://example.com (Playwright) — `web.scrape` (20.6s)
    > the main content is rendered by JS — fetch wouldn't work; wait for the selector then extract just it
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (304.6s)
    > auto-injected: peer-review the draft

## Answer
## Rendered Content of https://example.com

The page displays the following main text:

> **Example Domain**  
>  
> This domain is for use in documentation examples without needing permission. Avoid use in operations.  
>  
> Learn more

No additional substantive content is present beyond the title and the brief explanatory paragraph. The site is a placeholder used for documentation purposes and explicitly advises against using it for operational activities.

<details><summary>Log</summary>

```
[2026-05-30T17:26:33.985Z] Replaying a saved plan — 4 steps.
[2026-05-30T17:26:33.998Z] Step 1 of 4: Browsing https://example.com (Playwright)
[2026-05-30T17:26:54.640Z] Running 3 sub-agents in parallel (1 I/O + 2 thinking).
[2026-05-30T17:26:54.640Z] Step 3 of 4: Security-scanning the note
[2026-05-30T17:26:54.641Z] Step 2 of 4: Quality-checking the draft
[2026-05-30T17:26:54.641Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:31:54.681Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T17:31:59.263Z] Wave 2 finished in 304.6s.
[2026-05-30T17:31:59.263Z] All sub-agents finished in 325.3s.
[2026-05-30T17:31:59.280Z] Thinking with openai/gpt-oss-20b:free (~2 422 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
