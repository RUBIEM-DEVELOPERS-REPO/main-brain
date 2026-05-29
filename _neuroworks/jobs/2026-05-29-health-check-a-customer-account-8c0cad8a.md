---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-8c0cad8a
created: 2026-05-29T09:03:20.639Z
jobId: 8c0cad8a-c1f0-4af6-bfc3-35e1eee960b3
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:01:47.355Z
finishedAt: 2026-05-29T09:03:20.639Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-05-29T09:01:47.355Z
- **Finished:** 2026-05-29T09:03:20.639Z
- **Title:** Health-check a customer account

## Plan
Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date

### Steps
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (45.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.3s)
    > auto-injected: quality score=0.50 (pass=false) — peer review for a second opinion

## Answer
## Customer Health‑Check Report  

**Account:** *[Customer name not provided]*  
**Prepared by:** Clawbot (NeuroWorks)  
**Date:** 2026‑05‑29  

### 1. Sentiment Trajectory (30 / 60 / 90 days)  
No sentiment data (e.g., NPS scores, survey comments, or sentiment‑tagged communications) is available for this account, so a trajectory cannot be calculated.  

### 2. Outstanding Issues  
No ticket or issue list has been supplied; therefore the age of any open items and the date of the last touch cannot be determined.  

### 3. Churn Signals  
Without access to recent customer messages, usage logs, or payment history, no concrete churn‑risk phrases or behaviours can be identified.  

### 4. Expansion Signals  
No evidence of usage growth, seat‑add requests, or upsell conversations is present, so expansion opportunities cannot be assessed.  

### 5. Recommended Next Action  
**Action:** Gather the required data and reconvene the health‑check.  
**Specific steps (to be completed by 2026‑06‑05):**  

1. Export product‑usage metrics for the past 90 days (DAU/MAU, feature‑usage trends).  
2. Pull the full support‑ticket history, including open tickets, creation dates, and last‑contact timestamps.  
3. Retrieve billing records (invoice status, overdue amounts).  
4. Collect any recent NPS or survey responses and sentiment‑annotated communication excerpts.  

Once the above information is available, a detailed sentiment trajectory, issue list, churn/expansion signals, and a concrete next‑step recommendation can be produced.  

*Sources:* General health‑check guidance and template references indicate the data gaps described above [1][3].

<details><summary>Log</summary>

```
[2026-05-29T09:01:47.363Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:01:47.364Z] Thinking about the best approach…
[2026-05-29T09:01:47.391Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:01:49.708Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:01:49.709Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.
[2026-05-29T09:01:49.713Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:01:49.713Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-05-29T09:02:35.156Z] All sub-agents finished in 45.4s.
[2026-05-29T09:02:35.161Z] Thinking with openai/gpt-oss-20b:free (~3 169 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:02:46.774Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:02:46.776Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:02:46.776Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:02:46.776Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:02:46.776Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:02:54.539Z] Wave 1 finished in 7.8s.
[2026-05-29T09:02:54.539Z] All sub-agents finished in 7.8s.
[2026-05-29T09:02:54.542Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:02:54.542Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:02:57.873Z] All sub-agents finished in 3.3s.
[2026-05-29T09:02:57.878Z] quality.check failed (score=0.5, issues: No inline citations for most substantive claims; Does not provide the requested specific outputs (sentiment trajectory, outstanding issues, churn/expansion signals)) — re-synthesising with the large model
[2026-05-29T09:02:57.882Z] Thinking with openai/gpt-oss-120b:free (~3 809 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:03:16.996Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Rate limit exceeded: @ratelimit/too-many-re); keeping the rescued draft anyway
[2026-05-29T09:03:16.996Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:03:20.638Z] Vault commit: done.
```
</details>
