---
type: job
title: Find primary sources
slug: find-primary-sources-7fa3af7a
created: 2026-06-01T09:00:43.964Z
jobId: 7fa3af7a-d70c-4d57-87b6-a798abd7ce75
status: succeeded
template: custom-researcher-find-primary-sources
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T08:59:00.048Z
finishedAt: 2026-06-01T09:00:43.964Z
---

# Find primary sources

- **Status:** succeeded
- **Template:** custom-researcher-find-primary-sources
- **Started:** 2026-06-01T08:59:00.048Z
- **Finished:** 2026-06-01T09:00:43.964Z
- **Title:** Find primary sources

## Plan
Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about

### Steps
1. ✓ Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web — `research.deep` (77.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (13.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**0-Inbox/202605291500-research-primary-sources-find-my-device.md**

| # | URL | One‑sentence summary (what the source itself states) |
|---|-----|------------------------------------------------------|
| 1 | https://www.google.com/android/find/about | This official Google page describes “Find My Device” as a service that lets Android users locate, lock, or erase their device remotely, and explains the required permissions and supported features. |

<details><summary>Log</summary>

```
[2026-06-01T08:59:00.062Z] Working as Clawbot — AI agent operator.
[2026-06-01T08:59:00.073Z] Thinking about the best approach…
[2026-06-01T08:59:00.225Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T08:59:01.488Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T08:59:01.490Z] Plan ready: 1 step — Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about.
[2026-06-01T08:59:01.502Z] Step 1 of 1: Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web
[2026-06-01T09:00:19.195Z] All sub-agents finished in 77.7s.
[2026-06-01T09:00:19.207Z] Thinking with openai/gpt-oss-20b:free (~3 958 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T09:00:30.065Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:00:30.070Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:00:30.070Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:00:30.070Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:00:43.616Z] Wave 1 finished in 13.5s.
[2026-06-01T09:00:43.616Z] All sub-agents finished in 13.5s.
[2026-06-01T09:00:43.616Z] Quality check passed (87%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-01T09:00:43.616Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:00:43.964Z] Vault commit: done.
```
</details>
