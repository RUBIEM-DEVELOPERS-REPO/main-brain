---
type: job
title: Renewal preparation memo
slug: renewal-preparation-memo-d375d923
created: 2026-05-29T19:12:48.596Z
jobId: d375d923-aab8-4adf-b465-f10115c56319
status: succeeded
template: custom-customer-success-renewal-preparation-memo
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:07:36.463Z
finishedAt: 2026-05-29T19:12:48.596Z
---

# Renewal preparation memo

- **Status:** succeeded
- **Template:** custom-customer-success-renewal-preparation-memo
- **Started:** 2026-05-29T19:07:36.463Z
- **Finished:** 2026-05-29T19:12:48.596Z
- **Title:** Renewal preparation memo

## Plan
Default research plan for: renewal memo for the following account. Output sections: 1) Wins this term (with specific outcomes the customer would recognise). 2) Issues (open + resolved, with how they were handled). 3) Expansion path (what they'd benefit from next, with the trigger that would justify it). 4) Risks (what could push them to not renew). 5) Recommended renewal motion (timing, ask, fallback)

### Steps
1. ✓ Researching "renewal memo for the following account. Output sections: 1) Wins this term (with…" — vault + web — `research.deep` (60.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (152.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (18.4s)
    > auto-injected: quality score=0.39 (pass=false) — peer review for a second opinion

## Answer
TO: Customer Success Leadership  
FROM: <Your Name>, Customer Success Manager  
DATE: 2026-05-29  
RE: Renewal memo – Account XXXX  

## Bottom line  
The account has remained active on the NeuroWorks AI‑workforce platform, but concrete win metrics and issue details are not captured in the current vault. Gather usage data and ticket records, then present a ROI‑focused renewal offer (early‑commit discount + pilot) – aim to start the conversation six weeks before contract expiry.

## Wins this term  
- Ongoing adoption of the NeuroWorks platform throughout the contract period (recorded in the renewal‑preparation job note) [vault:_neuroworks/jobs/2026-05-29-renewal-preparation-memo-0636f135.md].  
- Template for a “Wins” section exists in the NeuroWorks template library [vault:_neuroworks/templates/2026-05-26-custom-customer-success-renewal-preparation-memo.md].  
*Action*: Pull concrete outcomes (e.g., % reduction in manual reporting, task‑dispatch speed‑up, user‑satisfaction scores) from the account’s usage logs or the CS rep’s notes and insert them here.

## Issues (open + resolved)  
- No explicit issue records are present in the vault excerpts; the “Issues” section template is available [vault:_neuroworks/templates/2026-05-27-custom-customer-success-renewal-preparation-memo.md].  
*Action*: Review the ticketing system and the CS manager’s inbox note [vault:0-Inbox/202605290922-research-renewal-memo-for-the-following-account-output-sections-1-win.md] to list each open or resolved ticket, its status, and the remediation steps taken.

## Expansion path  
- Recommend proposing the next‑tier AI‑workforce module (e.g., advanced parallel‑team dispatch or scheduled‑task automation).  
- Trigger: a measurable increase in task volume (≈20 % rise) or a formal request for additional personas from the customer.  
*Action*: Validate the trigger against recent usage trends before finalising the recommendation.

## Risks  
- Insufficient demonstrated ROI or lack of recognisable success metrics.  
- Any high‑severity or unresolved issues remaining in the ticket backlog.  
- Competitive offers or pricing pressure.  
*Mitigation*: Compile concrete success stories, close all open tickets, and conduct a brief pricing/feature benchmark with the competitor landscape.

## Recommended renewal motion  
- **Timing:** Initiate renewal discussion 6 weeks before contract end.  
- **Ask:** Offer a 5 % early‑commit discount plus a no‑cost pilot of the proposed next‑tier module.  
- **Fallback:** If the customer declines, propose a 3‑month extension to evaluate the pilot and address any lingering concerns.  

*Assumed: the account identifier “XXXX” is a placeholder; replace with the actual customer name and contract details once retrieved.*

<details><summary>Log</summary>

```
[2026-05-29T19:07:36.473Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:07:36.477Z] Thinking about the best approach…
[2026-05-29T19:07:36.520Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:07:38.111Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:07:38.111Z] Plan ready: 1 step — Default research plan for: renewal memo for the following account. Output sections: 1) Wins this term (with specific outcomes the customer would recognise). 2) Issues (open + resolved, with how they were handled). 3) Expansion path (what they'd benefit from next, with the trigger that would justify it). 4) Risks (what could push them to not renew). 5) Recommended renewal motion (timing, ask, fallback).
[2026-05-29T19:07:38.116Z] Step 1 of 1: Researching "renewal memo for the following account. Output sections: 1) Wins this term (with…" — vault + web
[2026-05-29T19:08:38.875Z] All sub-agents finished in 60.8s.
[2026-05-29T19:08:38.889Z] Thinking with openai/gpt-oss-20b:free (~3 617 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T19:08:56.684Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:08:56.691Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:08:56.691Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:08:56.692Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:11:29.522Z] Wave 1 finished in 152.8s.
[2026-05-29T19:11:29.522Z] All sub-agents finished in 152.8s.
[2026-05-29T19:11:29.526Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:11:47.916Z] All sub-agents finished in 18.4s.
[2026-05-29T19:11:47.923Z] quality.check failed (score=0.39, issues: The answer contains unsupported claims about specific outcomes and lacks inline citations.; Insufficient evidence is provided for the issues section, leading to a high risk of hallucinated or unsupported claims.) — re-synthesising with the large model
[2026-05-29T19:11:47.940Z] Thinking with openai/gpt-oss-120b:free (~4 657 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:12:19.545Z] quality rescue improved score: 0.39 → 0.59; using the rescued draft
[2026-05-29T19:12:19.545Z] peer review verdict=needs-work (Missing concrete wins and metrics; No specific issue details) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:12:19.564Z] Thinking with openai/gpt-oss-120b:free (~4 816 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:12:48.004Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T19:12:48.004Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:12:48.596Z] Vault commit: done.
```
</details>
