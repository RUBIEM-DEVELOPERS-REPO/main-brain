---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-4156271f
created: 2026-05-29T20:34:42.239Z
jobId: 4156271f-f3cd-434d-afd4-226f48f00c3f
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:30:40.728Z
finishedAt: 2026-05-29T20:34:42.238Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-05-29T20:30:40.728Z
- **Finished:** 2026-05-29T20:34:42.238Z
- **Title:** Health-check a customer account

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Health-check a customer account\nDescription: Read the recent thread + usage signals and produce a customer health summary."
}
```

## Plan
Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.

Context: Role: Custom
Title: Health-c

### Steps
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (28.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (147.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (11.7s)
    > auto-injected: quality score=0.56 (pass=false) — peer review for a second opinion

## Answer
## Customer Health‑Check Summary  

**Account:** *[Customer Name – internal reference]*  
**Prepared by:** Clawbot – Customer Success Analyst  
**Date:** 29 May 2026  

### 1. Sentiment Trajectory (last 30 / 60 / 90 days)  
- **30 days:** No customer‑facing messages, tickets, or usage logs were supplied; sentiment cannot be evaluated.  
- **60 days:** Same limitation; insufficient data to assess tone or mood.  
- **90 days:** Interaction history is missing, leaving the overall sentiment trend indeterminate.  

### 2. Outstanding Issues (age + last touch)  
- No open tickets, bug reports, or follow‑up notes were provided. Consequently, no outstanding issues can be identified, nor can their age or last contact be reported.  

### 3. Churn Signals  
- No explicit churn language (e.g., “thinking of leaving”, “budget cuts”, “not getting value”) appears in the supplied material.  
- No behavioral indicators such as reduced product usage, delayed payments, or account inactivity are available.  

### 4. Expansion Signals  
- No requests for additional modules, new feature trials, higher‑tier plans, or cross‑sell opportunities are present in the data set.  

### 5. Recommended Next Action  
| Action | Rationale | Target Date |
|--------|-----------|-------------|
| **Request full interaction history** (emails, chat transcripts, ticket notes, meeting summaries) for the past 90 days | Only with comprehensive communication logs can we perform sentiment analysis, identify open issues, and surface churn or expansion cues. | **13 June 2026** (15 days from today) |

*Assumed: This report is for internal use by the Customer Success team and will be updated once the missing interaction logs are received.*

<details><summary>Log</summary>

```
[2026-05-29T20:30:40.735Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:30:40.739Z] Thinking about the best approach…
[2026-05-29T20:30:40.793Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:30:41.787Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:30:41.788Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.

Context: Role: Custom
Title: Health-c.
[2026-05-29T20:30:41.795Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-05-29T20:31:09.949Z] All sub-agents finished in 28.2s.
[2026-05-29T20:31:09.955Z] Thinking with openai/gpt-oss-20b:free (~2 904 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:31:37.651Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:31:37.656Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:31:37.656Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:31:37.656Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:34:04.912Z] Wave 1 finished in 147.3s.
[2026-05-29T20:34:04.912Z] All sub-agents finished in 147.3s.
[2026-05-29T20:34:04.914Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:34:06.230Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:34:08.770Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T20:34:16.635Z] All sub-agents finished in 11.7s.
[2026-05-29T20:34:16.640Z] quality.check failed (score=0.56, issues: The sentiment trajectory should be based on the provided messages and support tickets, not inferred from external research.; Churn signals are mentioned but no explicit churn language is found; this needs to be addressed in the answer.) — re-synthesising with the large model
[2026-05-29T20:34:16.645Z] Thinking with openai/gpt-oss-120b:free (~3 513 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:34:41.576Z] quality rescue improved score: 0.56 → 0.87; using the rescued draft
[2026-05-29T20:34:41.577Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:34:42.238Z] Vault commit: done.
```
</details>
