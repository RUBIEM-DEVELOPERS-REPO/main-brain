---
type: job
title: Find related notes
slug: find-related-notes-f04c1cbc
created: 2026-05-29T08:59:01.790Z
jobId: f04c1cbc-6b07-4eb1-a4ed-1bba15245c9b
status: succeeded
template: custom-clawbot-find-related-notes
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:58:08.458Z
finishedAt: 2026-05-29T08:59:01.790Z
---

# Find related notes

- **Status:** succeeded
- **Template:** custom-clawbot-find-related-notes
- **Started:** 2026-05-29T08:58:08.458Z
- **Finished:** 2026-05-29T08:59:01.790Z
- **Title:** Find related notes

## Plan
Search the vault for the topic and summarize the top 5-10 results.

### Steps
1. ✓ Searching your second brain for "<topic>" — `vault.search` (0.3s)
    > Find all vault entries matching the topic
2. ✓ Quality-checking the draft — `quality.check` (4.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.8s)
    > auto-injected: quality score=0.54 (pass=false) — peer review for a second opinion

## Answer
**Subject:** Request for Precise Topic Keyword  

I cannot locate a specific topic name in the request. To retrieve and summarize the most relevant 5–10 vault notes, please provide the exact keyword or phrase you wish to search for. Once supplied, I will list each note’s full path and give a one‑sentence summary of its connection to the topic.

<details><summary>Log</summary>

```
[2026-05-29T08:58:08.466Z] Working as Clawbot — AI agent operator.
[2026-05-29T08:58:09.108Z] Thinking about the best approach…
[2026-05-29T08:58:09.133Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T08:58:15.628Z] Plan ready: 1 step — Search the vault for the topic and summarize the top 5-10 results..
[2026-05-29T08:58:15.633Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:58:15.633Z] Step 1 of 1: Searching your second brain for "<topic>"
[2026-05-29T08:58:15.907Z] All sub-agents finished in 0.3s.
[2026-05-29T08:58:15.915Z] Thinking with openai/gpt-oss-20b:free (~2 837 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T08:58:19.822Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T08:58:19.826Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:58:19.826Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T08:58:19.826Z] Step 3 of 3: Security-scanning the note
[2026-05-29T08:58:19.826Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T08:58:24.513Z] Wave 1 finished in 4.7s.
[2026-05-29T08:58:24.513Z] All sub-agents finished in 4.7s.
[2026-05-29T08:58:24.518Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:58:24.518Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T08:58:29.321Z] All sub-agents finished in 4.8s.
[2026-05-29T08:58:29.324Z] quality.check failed (score=0.54, issues: does not provide requested notes; asks for clarification instead of answering) — re-synthesising with the large model
[2026-05-29T08:58:29.332Z] Thinking with openai/gpt-oss-120b:free (~3 184 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T08:58:41.197Z] quality rescue improved score: 0.54 → 0.7; using the rescued draft
[2026-05-29T08:58:41.197Z] peer review verdict=bad (Does not provide any notes or summaries; Fails to address the task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T08:58:41.206Z] Thinking with openai/gpt-oss-120b:free (~3 334 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T08:59:01.790Z] retry verdict=needs-work and quality not improved (0.58 ≤ 0.7); keeping the rescued/original draft
```
</details>
