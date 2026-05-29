---
type: job
title: Find primary sources
slug: find-primary-sources-fdbd697d
created: 2026-05-29T09:01:56.478Z
jobId: fdbd697d-87ca-4dfb-9340-ed9c3b341656
status: succeeded
template: custom-researcher-find-primary-sources
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:00:36.144Z
finishedAt: 2026-05-29T09:01:56.478Z
---

# Find primary sources

- **Status:** succeeded
- **Template:** custom-researcher-find-primary-sources
- **Started:** 2026-05-29T09:00:36.144Z
- **Finished:** 2026-05-29T09:01:56.478Z
- **Title:** Find primary sources

## Plan
Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about

### Steps
1. ✓ Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web — `research.deep` (15.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.6s)
    > auto-injected: quality score=0.45 (pass=false) — peer review for a second opinion

## Answer
## Request for Clarification – Primary‑Source Research  

**To:** User  
**From:** Clawbot (NeuroWorks)  
**Date:** 2026‑05‑29  

### Summary  
The task requires locating primary sources (official documentation, academic papers, government filings, press releases, or raw datasets) on a specific topic. The original request did not specify the subject matter, so no primary sources can be identified at this time.

### Required Information  
Please provide the exact topic or question you need primary sources for (e.g., a particular legislation, scientific study, corporate announcement, or historical event). Once the subject is known, I will:

1. Conduct a web search focused on Tier 1 primary sources.  
2. Capture each source with its URL and a concise one‑sentence summary of the content.  
3. Store the results as a “sources‑only” note in the `0‑Inbox/` folder.

### Next Steps  
Reply with the specific topic, and I will deliver the requested primary‑source list promptly.  

*Assumed: the user’s intent is to receive a curated list of primary documents; clarification is needed before any sources can be gathered.*

<details><summary>Log</summary>

```
[2026-05-29T09:00:36.152Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:00:36.153Z] Thinking about the best approach…
[2026-05-29T09:00:36.175Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:00:39.793Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:00:39.794Z] Plan ready: 1 step — Default research plan for: Find primary sources on the following topic using web search. Prioritise: official documentation, academic papers, government / regulatory filings, press releases from the source, raw datasets. Avoid commentary, opinion pieces, and aggregator summaries unless they cite primary work. For each primary source, give the URL and a one-sentence summary of what it actually says (not what others say about.
[2026-05-29T09:00:39.800Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:00:39.800Z] Step 1 of 1: Researching "Find primary sources on the following topic using web search. Prioritise: offici…" — vault + web
[2026-05-29T09:00:54.850Z] All sub-agents finished in 15.1s.
[2026-05-29T09:00:54.862Z] Thinking with openai/gpt-oss-20b:free (~3 750 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:01:00.778Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:01:00.780Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:01:00.780Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:01:00.780Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:01:00.780Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:01:08.736Z] Wave 1 finished in 8.0s.
[2026-05-29T09:01:08.736Z] All sub-agents finished in 8.0s.
[2026-05-29T09:01:08.741Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:01:08.741Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:01:15.353Z] All sub-agents finished in 6.6s.
[2026-05-29T09:01:15.358Z] quality.check failed (score=0.45, issues: No primary sources provided; No real citations) — re-synthesising with the large model
[2026-05-29T09:01:15.369Z] Thinking with openai/gpt-oss-120b:free (~4 207 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:01:33.465Z] quality rescue improved score: 0.45 → 0.87; using the rescued draft
[2026-05-29T09:01:33.465Z] peer review verdict=needs-work (No topic provided, answer does not deliver any primary sources; Answer is incomplete for the task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:01:33.474Z] Thinking with openai/gpt-oss-120b:free (~4 359 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:01:56.206Z] retry verdict=bad and quality not improved (0.6 ≤ 0.87); keeping the rescued/original draft
[2026-05-29T09:01:56.206Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:01:56.478Z] Vault commit: done.
```
</details>
