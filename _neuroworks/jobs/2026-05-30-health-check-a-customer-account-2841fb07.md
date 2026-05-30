---
type: job
title: Health-check a customer account
slug: health-check-a-customer-account-2841fb07
created: 2026-05-30T17:52:33.683Z
jobId: 2841fb07-5b15-4161-bf6e-571e3d7ae53e
status: succeeded
template: custom-customer-success-health-check-a-customer-account
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:39:11.526Z
finishedAt: 2026-05-30T17:52:33.683Z
---

# Health-check a customer account

- **Status:** succeeded
- **Template:** custom-customer-success-health-check-a-customer-account
- **Started:** 2026-05-30T17:39:11.526Z
- **Finished:** 2026-05-30T17:52:33.683Z
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
1. ✓ Researching "Health-check the following customer account based on the messages / data provide…" — vault + web — `research.deep` (32.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (10.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (332.2s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
## Health‑Check Summary – Customer Account

| Item | Findings |
|------|----------|
| **Sentiment trajectory (last 30 / 60 / 90 days)** | No customer communications (emails, chat, or ticket logs) are present in the vault, so sentiment cannot be measured. |
| **Outstanding issues** | No open tickets, incidents, or issue records are visible in the current data set. |
| **Churn signals** | No churn‑related language or behaviours can be identified without message history. |
| **Expansion signals** | No upsell or cross‑sell cues are detectable in the available data. |
| **Recommended next action** | Obtain the missing communication history (emails, chat transcripts, ticket updates) for the past 90 days, then repeat the health‑check analysis. |

*Evidence:* The only files matching the request are placeholder research notes (e.g., `0‑Inbox/202605290902‑research‑health‑check…md`) that contain the task description but no actual customer data [1].

### Action Plan
1. **Internal data request** – Send a concise message to the CS Ops team:  
   > “Please provide the complete communication history (emails, chat transcripts, ticket updates) for Customer [Name/ID] covering the past 90 days so we can complete the health‑check analysis.”  
   **Target date for receipt:** **2026‑06‑07** (within 3 business days).

2. **Post‑collection analysis** – Once the data are received:  
   - Run sentiment analysis for the 30 / 60 / 90‑day windows.  
   - Identify any open or aging issues (age + last‑touch timestamp).  
   - Flag churn signals (e.g., “considering leaving”, “budget cuts”).  
   - Surface expansion cues (feature requests, scaling plans).  

3. **Follow‑up** – Schedule a call with the account manager to review findings and define next steps.  
   **Proposed call date:** **2026‑06‑12**.

*Assumption: The requester knows the customer’s identifier and internal contact for the CS Ops team; the only missing element is the 90‑day communication log.*

<details><summary>Log</summary>

```
[2026-05-30T17:39:11.554Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:39:11.566Z] Thinking about the best approach…
[2026-05-30T17:39:11.710Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:39:13.866Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:39:13.867Z] Plan ready: 1 step — Default research plan for: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date.
[2026-05-30T17:39:13.873Z] Step 1 of 1: Researching "Health-check the following customer account based on the messages / data provide…" — vault + web
[2026-05-30T17:39:46.277Z] All sub-agents finished in 32.4s.
[2026-05-30T17:39:46.287Z] Thinking with openai/gpt-oss-20b:free (~3 169 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T17:39:47.413Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T17:40:35.074Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-30T17:40:35.074Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:40:35.088Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:40:35.088Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:40:35.088Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:40:45.275Z] Wave 1 finished in 10.2s.
[2026-05-30T17:40:45.275Z] All sub-agents finished in 10.2s.
[2026-05-30T17:40:45.280Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:45:50.923Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T17:46:17.438Z] All sub-agents finished in 332.2s.
[2026-05-30T17:46:17.452Z] quality.check failed (score=0.55, issues: No inline citations provided for claims; citation coverage is very low.; The answer relies on assumptions about data availability without evidence; could be considered a mild hallucination risk.) — re-synthesising with the large model
[2026-05-30T17:46:17.464Z] Thinking with openai/gpt-oss-120b:free (~4 246 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:51:32.988Z] quality rescue produced score 0 (not better than 0.55); keeping the original
[2026-05-30T17:51:32.988Z] peer review verdict=needs-work (Factual: claims no data present may be incorrect if data exists; potential hallucination.; Relevance: answer acknowledge) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T17:51:33.051Z] Thinking with openai/gpt-oss-120b:free (~4 434 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:52:33.259Z] retry verdict=needs-work but quality improved (0.55 → 0.64); using retry
[2026-05-30T17:52:33.259Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:52:33.683Z] Vault commit: done.
```
</details>
