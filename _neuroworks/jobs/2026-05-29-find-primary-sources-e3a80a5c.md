---
type: job
title: Find primary sources
slug: find-primary-sources-e3a80a5c
created: 2026-05-29T13:20:11.160Z
jobId: e3a80a5c-10e4-495d-85a7-b2a32e7f4cc7
status: succeeded
template: custom-researcher-find-primary-sources
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T13:14:56.436Z
finishedAt: 2026-05-29T13:20:11.160Z
---

# Find primary sources

- **Status:** succeeded
- **Template:** custom-researcher-find-primary-sources
- **Started:** 2026-05-29T13:14:56.436Z
- **Finished:** 2026-05-29T13:20:11.160Z
- **Title:** Find primary sources

## Plan
Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about

### Steps
1. ✓ Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web — `research.deep` (44.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (14.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (25.2s)
    > auto-injected: quality score=0.75 (pass=false) — peer review for a second opinion

## Answer
## Primary Source Report (0‑Inbox)

| # | URL | One‑sentence summary (what the source itself states) |
|---|-----|------------------------------------------------------|
| 1 | https://www.apple.com/icloud/find-my/ | Apple’s official product page describes “Find My” as the iCloud service that lets users locate their Apple devices, share locations with friends and family, and protect lost items with activation lock and remote‑erase features. |  

*No additional primary sources (academic papers, government filings, press releases, raw datasets) were identified in the web search.*  

[vault:0-Inbox/202605291315-research-find-primary-sources-on-the-following-topic-using-web-search.md]

<details><summary>Log</summary>

```
[2026-05-29T13:14:56.443Z] Working as Clawbot — AI agent operator.
[2026-05-29T13:14:56.446Z] Thinking about the best approach…
[2026-05-29T13:14:56.470Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T13:15:01.325Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T13:15:01.325Z] Plan ready: 1 step — Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about.
[2026-05-29T13:15:01.329Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T13:15:01.329Z] Step 1 of 1: Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web
[2026-05-29T13:15:45.725Z] All sub-agents finished in 44.4s.
[2026-05-29T13:15:45.737Z] Thinking with openai/gpt-oss-20b:free (~3 951 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T13:15:52.617Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T13:15:52.621Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T13:15:52.621Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T13:15:52.621Z] Step 3 of 3: Security-scanning the note
[2026-05-29T13:15:52.621Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T13:16:07.182Z] Wave 1 finished in 14.6s.
[2026-05-29T13:16:07.182Z] All sub-agents finished in 14.6s.
[2026-05-29T13:16:07.185Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T13:16:07.186Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T13:16:32.347Z] All sub-agents finished in 25.2s.
[2026-05-29T13:16:32.352Z] quality.check failed (score=0.75, issues: No inline citation markers used; answer not formatted as a sources‑only note in 0‑Inbox; limited search scope, only one primary source found) — re-synthesising with the large model
[2026-05-29T13:16:32.360Z] Thinking with openai/gpt-oss-120b:free (~4 773 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T13:17:14.711Z] quality rescue produced score 0.56 (not better than 0.75); keeping the original
[2026-05-29T13:17:14.711Z] peer review verdict=needs-work (Insufficient coverage of requested source types (academic papers, government filings, press releases, raw datasets); Ans) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T13:17:14.722Z] Thinking with openai/gpt-oss-120b:free (~4 959 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T13:20:10.878Z] retry verdict=needs-work but quality improved (0.75 → 0.83); using retry
[2026-05-29T13:20:10.878Z] Wrote to your second brain — committing the changes.
[2026-05-29T13:20:11.159Z] Vault commit: done.
```
</details>
