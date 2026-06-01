---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-b4ecefab
created: 2026-06-01T13:51:25.844Z
jobId: b4ecefab-a632-44fc-9569-2b0e2dd594b8
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:45:26.254Z
finishedAt: 2026-06-01T13:51:25.844Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-06-01T13:45:26.254Z
- **Finished:** 2026-06-01T13:51:25.844Z
- **Title:** Health-check a customer account

## Plan
Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date

### Steps
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (61.6s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (18.4s)
    > auto-injected: quality score=0.53 (pass=false) — peer review for a second opinion

## Answer
## Health‑Check Report – Customer Account  

### 1. Sentiment trajectory (last 30 / 60 / 90 days)  
The vault files referenced (`0‑Inbox/20260529…md`, `0‑Inbox/20260530…md`) contain only the request to perform a health‑check and no customer‑facing messages, support tickets, or interaction logs. Consequently, there is no observable sentiment data for any of the three time windows. [1][3]

### 2. Outstanding issues (age + last touch)  
No tickets, bug reports, or follow‑up notes are attached to the referenced markdown files, so no outstanding issues can be identified or dated. [1][3]

### 3. Churn signals  
The supplied material lacks any customer statements or behaviours that would indicate churn risk (e.g., “thinking of leaving”, “budget cuts”, “service not meeting expectations”). [1][3]

### 4. Expansion signals  
No mentions of new projects, additional seats, upsell inquiries, or similar expansion cues appear in the available data. [1][3]

### 5. Recommended next action  
**Obtain the missing interaction data** so a substantive health‑check can be performed:

| Step | Action | Target date |
|------|--------|--------------|
| 1 | Retrieve the full content of the markdown files referenced in the inbox (e.g., `0‑Inbox/202605290902‑research‑health‑check‑…md`). | 2026‑06‑12 |
| 2 | Export any customer‑sent communications (emails, chat transcripts, support tickets) that include tone, issue details, and timestamps. | 2026‑06‑13 |
| 3 | Pull CRM or ticketing records that capture issue age, status, and last interaction. | 2026‑06‑14 |
| 4 | Once the above data is available, conduct sentiment analysis, list outstanding issues, flag churn/expansion signals, and schedule a follow‑up call with the account manager. | 2026‑06‑18 |

_Assumed: the customer’s interaction history is stored elsewhere (email, ticketing system) and must be imported into the vault for analysis._

<details><summary>Log</summary>

```
[2026-06-01T13:45:26.265Z] Working as Clawbot — AI agent operator.
[2026-06-01T13:45:26.284Z] Thinking about the best approach…
[2026-06-01T13:45:26.633Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T13:45:29.275Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T13:45:29.276Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.
[2026-06-01T13:45:29.288Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-06-01T13:46:30.901Z] All sub-agents finished in 61.6s.
[2026-06-01T13:46:30.908Z] Thinking with openai/gpt-oss-20b:free (~3 169 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T13:47:08.767Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T13:47:08.773Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T13:47:08.773Z] Step 3 of 3: Security-scanning the note
[2026-06-01T13:47:08.773Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T13:47:15.454Z] Wave 1 finished in 6.7s.
[2026-06-01T13:47:15.454Z] All sub-agents finished in 6.7s.
[2026-06-01T13:47:15.459Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T13:47:33.889Z] All sub-agents finished in 18.4s.
[2026-06-01T13:47:33.895Z] quality.check failed (score=0.53, issues: No inline citations provided for claims; citation coverage is very low.; The answer acknowledges lack of data but does not provide any concrete analysis or actionable insights beyond a generic request for more data.) — re-synthesising with the large model
[2026-06-01T13:47:33.903Z] Thinking with openai/gpt-oss-120b:free (~4 318 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T13:50:30.731Z] quality rescue improved score: 0.53 → 0.59; using the rescued draft
[2026-06-01T13:50:30.731Z] peer review verdict=needs-work (Factual: Claims that no data exists are unsupported; the task implies data is available and should be analyzed.; Relevan) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T13:50:30.743Z] Thinking with openai/gpt-oss-120b:free (~4 537 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T13:51:17.635Z] retry verdict=needs-work but quality improved (0.59 → 0.62); using retry
[2026-06-01T13:51:17.635Z] Wrote to your second brain — committing the changes.
[2026-06-01T13:51:25.843Z] Vault commit: done.
```
</details>
