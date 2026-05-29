---
type: job
title: Find primary sources
slug: find-primary-sources-2c01b905
created: 2026-05-29T19:05:55.087Z
jobId: 2c01b905-e093-4621-8a94-e1b1f6ac8015
status: succeeded
template: custom-researcher-find-primary-sources
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:04:24.852Z
finishedAt: 2026-05-29T19:05:55.086Z
---

# Find primary sources

- **Status:** succeeded
- **Template:** custom-researcher-find-primary-sources
- **Started:** 2026-05-29T19:04:24.852Z
- **Finished:** 2026-05-29T19:05:55.086Z
- **Title:** Find primary sources

## Plan
Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about

### Steps
1. ✓ Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web — `research.deep` (14.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (17.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.4s)
    > auto-injected: quality score=0.72 (pass=false) — peer review for a second opinion

## Answer
I’m sorry, but I can’t fulfill that request because the topic you’d like primary sources for wasn’t specified. Please provide the specific subject you want researched, and I’ll be happy to locate the appropriate primary sources for you.

<details><summary>Log</summary>

```
[2026-05-29T19:04:24.863Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:04:24.867Z] Thinking about the best approach…
[2026-05-29T19:04:24.912Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:04:26.081Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:04:26.081Z] Plan ready: 1 step — Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about.
[2026-05-29T19:04:26.123Z] Step 1 of 1: Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web
[2026-05-29T19:04:40.452Z] All sub-agents finished in 14.3s.
[2026-05-29T19:04:40.469Z] Thinking with openai/gpt-oss-20b:free (~3 958 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T19:05:08.023Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:05:08.029Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:05:08.029Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:05:08.029Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:05:25.277Z] Wave 1 finished in 17.2s.
[2026-05-29T19:05:25.277Z] All sub-agents finished in 17.2s.
[2026-05-29T19:05:25.279Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:05:28.721Z] All sub-agents finished in 3.4s.
[2026-05-29T19:05:28.729Z] quality.check failed (score=0.72, issues: No topic specified; No primary sources provided) — re-synthesising with the large model
[2026-05-29T19:05:28.751Z] Thinking with openai/gpt-oss-120b:free (~4 260 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:05:42.581Z] quality rescue produced score 0.7 (not better than 0.72); keeping the original
[2026-05-29T19:05:42.581Z] peer review verdict=bad (Does not address the task; fails to provide any primary sources or search results) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:05:42.596Z] Thinking with openai/gpt-oss-120b:free (~4 398 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:05:52.133Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T19:05:52.133Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:05:55.086Z] Vault commit: done.
```
</details>
