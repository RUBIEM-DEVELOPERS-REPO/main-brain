---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-0e1cf9fb
created: 2026-05-29T09:22:44.970Z
jobId: 0e1cf9fb-8737-49ef-9f96-2cf7db0169b1
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:21:48.829Z
finishedAt: 2026-05-29T09:22:44.970Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-05-29T09:21:48.829Z
- **Finished:** 2026-05-29T09:22:44.970Z
- **Title:** Health-check a customer account

## Plan
Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date

### Steps
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (13.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.3s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
**Health‑Check Report – Customer Account**  

The evidence supplied consists solely of generic research notes and unrelated health‑information sources. No customer‑specific messages, tickets, survey responses, or interaction logs are present in the vault or attached files. Consequently, a factual assessment of sentiment trajectory, open issues, churn indicators, or expansion opportunities cannot be produced at this time.

**Next Steps**  

1. **Gather Interaction Data** – Retrieve the last 90 days of emails, chat transcripts, support tickets, and any NPS or CSAT survey results for the account.  
2. **Provide Vault Access** – Ensure the relevant `_knowledge` or `_neuroworks` directories that store the account’s communication history are shared with the AI workspace.  
3. **Clarify Scope** – Confirm whether the health‑check should cover only recent interactions (30/60/90 days) or also include longer‑term trends.

Once the above information is available, the report can include:  

- Sentiment trajectory (30/60/90 day trends)  
- Outstanding issues with age and last touch date  
- Specific churn signals (quotes, behaviors)  
- Expansion signals (upsell or cross‑sell cues)  
- A concrete next‑action recommendation (message, call, or escalation) with a target date  

*Sources: [1], [3]*

<details><summary>Log</summary>

```
[2026-05-29T09:21:48.841Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:21:48.846Z] Thinking about the best approach…
[2026-05-29T09:21:48.888Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:21:50.655Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:21:50.655Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.
[2026-05-29T09:21:50.661Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-05-29T09:22:03.733Z] All sub-agents finished in 13.1s.
[2026-05-29T09:22:03.743Z] Thinking with openai/gpt-oss-20b:free (~3 097 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:22:10.256Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:22:10.259Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:22:10.259Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:22:10.259Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:22:16.812Z] Wave 1 finished in 6.6s.
[2026-05-29T09:22:16.812Z] All sub-agents finished in 6.6s.
[2026-05-29T09:22:16.817Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:22:21.133Z] All sub-agents finished in 4.3s.
[2026-05-29T09:22:21.139Z] quality.check failed (score=0.57, issues: No customer‑specific data available to perform requested analysis; Answer does not provide sentiment trajectory, outstanding issues, churn or expansion signals) — re-synthesising with the large model
[2026-05-29T09:22:21.146Z] Thinking with openai/gpt-oss-120b:free (~3 613 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:22:44.670Z] quality rescue improved score: 0.57 → 0.84; using the rescued draft
[2026-05-29T09:22:44.670Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:22:44.970Z] Vault commit: done.
```
</details>
