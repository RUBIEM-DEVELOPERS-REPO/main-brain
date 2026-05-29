---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-c56483ee
created: 2026-05-29T14:09:16.129Z
jobId: c56483ee-9fa0-4a56-9dee-cc7457072b13
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:06:16.835Z
finishedAt: 2026-05-29T14:09:16.129Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-05-29T14:06:16.835Z
- **Finished:** 2026-05-29T14:09:16.129Z
- **Title:** Health-check a customer account

## Plan
Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date

### Steps
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (78.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (9.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.1s)
    > auto-injected: quality score=0.69 (pass=true) — peer review for a second opinion

## Answer
## Customer‑Account Health‑Check  

**1. Sentiment trajectory (last 30 / 60 / 90 days)**  
No customer‑facing communications, support tickets, or survey results were found in the vault files examined, so a sentiment trend cannot be calculated at this time. [_neuroworks/jobs/2026-05-29-health-check-a-customer-account-0e1cf9fb.md]  

**2. Outstanding issues (age + last touch)**  
The repository contains no open‑issue logs, ticket records, or timestamps indicating recent interaction, therefore no outstanding issues can be listed. [_neuroworks/jobs/2026-05-29-health-check-a-customer-account-0e1cf9fb.md]  

**3. Churn signals**  
No quoted customer phrases, behavioural cues, or risk indicators were located in the available notes. [_neuroworks/jobs/2026-05-29-health-check-a-customer-account-0e1cf9fb.md]  

**4. Expansion signals**  
There are no mentions of upsell, cross‑sell, or new‑use‑case interest in the examined material. [_neuroworks/jobs/2026-05-29-health-check-a-customer-account-0e1cf9fb.md]  

**5. Recommended next action**  
| Action | Owner | Due date | Rationale |
|--------|-------|----------|-----------|
| Request the last 90 days of customer‑facing communications (email threads, chat logs, support tickets, NPS/CSAT survey results) from the CRM / support system | Customer Success Manager (or data‑export team) | **2026‑06‑07** | Without this data the health‑check cannot be completed; obtaining it enables a full sentiment, issue, and signal analysis. |

*Assumed: the “customer account” referenced is the one associated with the research notes in the vault.*

<details><summary>Log</summary>

```
[2026-05-29T14:06:16.843Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:06:16.847Z] Thinking about the best approach…
[2026-05-29T14:06:16.874Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:06:21.579Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:06:21.579Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.
[2026-05-29T14:06:21.583Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-05-29T14:07:39.777Z] All sub-agents finished in 78.2s.
[2026-05-29T14:07:39.783Z] Thinking with openai/gpt-oss-20b:free (~3 169 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T14:08:10.544Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:08:10.548Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:08:10.548Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:08:10.548Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:08:20.411Z] Wave 1 finished in 9.9s.
[2026-05-29T14:08:20.412Z] All sub-agents finished in 9.9s.
[2026-05-29T14:08:20.416Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:08:25.475Z] All sub-agents finished in 5.1s.
[2026-05-29T14:08:25.475Z] peer review verdict=needs-work (Factual: claims no data exist without evidence; likely hallucinated. Relevance: answer does not provide requested analys) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:08:25.479Z] Thinking with openai/gpt-oss-120b:free (~4 016 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:09:15.868Z] retry verdict=needs-work but quality improved (0.69 → 0.85); using retry
[2026-05-29T14:09:15.868Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:09:16.129Z] Vault commit: done.
```
</details>
