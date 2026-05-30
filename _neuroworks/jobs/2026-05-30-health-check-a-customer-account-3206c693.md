---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-3206c693
created: 2026-05-30T16:37:31.733Z
jobId: 3206c693-c378-4fd6-b7b3-a2afed8c131a
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T10:01:55.675Z
finishedAt: 2026-05-30T16:37:31.733Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-05-30T10:01:55.675Z
- **Finished:** 2026-05-30T16:37:31.733Z
- **Title:** Health-check a customer account

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Health-check a customer account\nDescription: Read the recent thread + usage signals and produce a customer health summary."
}
```

## Plan
Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date

### Steps
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (115.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (1044.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (22427.1s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
**Health‑Check Summary – Customer Account**

| Item | Findings |
|------|----------|
| **Sentiment trajectory (last 30 / 60 / 90 days)** | No customer‑specific interaction logs, emails, or support tickets are present in the supplied vault or web sources; sentiment trend cannot be calculated. |
| **Outstanding issues (age + last touch)** | No open tickets, requests, or follow‑up notes are available in the provided material; therefore no issues can be listed. |
| **Churn signals** | No quoted customer language or behavioural data (e.g., “considering a switch”, “budget cuts”, “no longer using the platform”) is present; no churn indicators can be identified. |
| **Expansion signals** | No evidence of upsell interest, feature requests, or usage growth is present in the supplied material. |
| **Recommended next action** | 1. Request the account team to export the customer’s interaction history (CRM, support tickets, Slack/Teams threads, email) for the last 90 days.<br>2. Once the data is available, run the standard health‑check template located at `_neuroworks/templates/2026-05-26-custom-customer-success-health-check-a-customer-account.md`.<br>3. Schedule a follow‑up call with the customer on **2026‑06‑15** to review findings and discuss next steps. |

*Assumed: Interaction data is not yet available; the recommendation presumes the account team can provide the necessary logs.*

<details><summary>Log</summary>

```
[2026-05-30T10:01:55.685Z] Working as Clawbot — AI agent operator.
[2026-05-30T10:01:55.687Z] Thinking about the best approach…
[2026-05-30T10:01:55.754Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T10:02:10.669Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T10:02:10.669Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.
[2026-05-30T10:02:10.673Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-05-30T10:04:05.897Z] All sub-agents finished in 115.2s.
[2026-05-30T10:04:05.903Z] Thinking with openai/gpt-oss-20b:free (~3 169 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T10:04:23.637Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T10:04:23.642Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T10:04:23.642Z] Step 3 of 3: Security-scanning the note
[2026-05-30T10:04:23.642Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T10:21:47.979Z] Wave 1 finished in 1044.3s.
[2026-05-30T10:21:47.979Z] All sub-agents finished in 1044.3s.
[2026-05-30T10:21:49.212Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T12:21:35.903Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T16:33:19.048Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-30T16:35:36.291Z] All sub-agents finished in 22427.1s.
[2026-05-30T16:35:36.302Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T16:35:36.315Z] Thinking with openai/gpt-oss-120b:free (~4 078 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T16:37:12.377Z] quality rescue improved score: 0 → 0.6; using the rescued draft
[2026-05-30T16:37:12.377Z] peer review verdict=needs-work (reviewer JSON unparseable) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T16:37:12.391Z] Thinking with openai/gpt-oss-120b:free (~4 202 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T16:37:31.310Z] retry cleared peer review (verdict=good, confidence=0.95); using retry as final answer
[2026-05-30T16:37:31.310Z] Wrote to your second brain — committing the changes.
[2026-05-30T16:37:31.733Z] Vault commit: done.
```
</details>
