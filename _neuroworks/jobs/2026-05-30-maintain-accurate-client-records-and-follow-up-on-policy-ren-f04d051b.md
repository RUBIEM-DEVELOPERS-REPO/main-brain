---
type: job
title: Maintain accurate client records and follow up on policy renewals.
slug: maintain-accurate-client-records-and-follow-up-on-policy-ren-f04d051b
created: 2026-05-30T09:55:26.701Z
jobId: f04d051b-9def-4c60-b56e-0e27142be11d
status: succeeded
template: custom-insurance-sales-agent-maintain-accurate-client-records-and-fol
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:39:11.183Z
finishedAt: 2026-05-30T09:55:26.700Z
---

# Maintain accurate client records and follow up on policy renewals.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-maintain-accurate-client-records-and-fol
- **Started:** 2026-05-30T09:39:11.183Z
- **Finished:** 2026-05-30T09:55:26.700Z
- **Title:** Maintain accurate client records and follow up on policy renewals.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Maintain accurate client records and follow up on policy renewals.\nDescription: Persona-derived starter task for \"Insurance Sales Agent\"."
}
```

## Plan
Default research plan for: As a Insurance Sales Agent, maintain accurate client records and follow up on policy renewals

### Steps
1. ✓ Researching "As a Insurance Sales Agent, maintain accurate client records and follow up on po…" — vault + web — `research.deep` (65.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (242.4s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Maintaining Accurate Client Records & Managing Policy Renewals  

**Objective** – Ensure every client’s information is complete, consistent, and readily accessible, while guaranteeing timely renewal actions to avoid lapses and maximize retention.

### 1. Centralise Client Data  
- Store all contact details, policy numbers, coverage limits, premium amounts, and key dates in a single repository (e.g., the NeuroWorks vault or a dedicated CRM).  
- Tag each record by product type (motor, health, life) and renewal frequency.  
*Benefit:* A single source of truth eliminates duplicate entries and simplifies reporting. [vault:0-Inbox/202605300940-research-as-a-insurance-sales-agent-maintain-accurate-client-records-.md]

### 2. Standardise Data Entry  
- Adopt a uniform template with mandatory fields: Name, DOB, Address, Phone, Email, Policy #, Effective Date, Expiry Date, Premium, Beneficiaries, Notes.  
- Use drop‑down lists for status (Active, Lapsed, Pending Renewal).  
*Benefit:* Consistency speeds searches and reduces errors when generating renewal reminders. [vault:0-Inbox/202605300940-research-as-a-insurance-sales-agent-maintain-accurate-client-records-.md]

### 3. Automate Renewal Alerts  
- Configure a recurring reminder 30 days before each policy’s expiry.  
- Leverage NeuroWorks’ scheduled‑task feature to dispatch an email or SMS to the client and create a follow‑up task for the agent.  
*Benefit:* Early alerts provide sufficient time to discuss changes, collect documents, and prevent coverage gaps. [vault:0-Inbox/202605300940-research-as-a-insurance-sales-agent-maintain-accurate-client-records-.md]

### 4. Track Communication History  
- Log every call, email, or meeting in the client’s record, noting outcomes and action items.  
- Attach scanned documents such as signed proposals or ID copies.  
*Benefit:* A complete audit trail aids recall of past discussions and demonstrates compliance with regulatory requirements. [vault:0-Inbox/202605300940-research-as-a-insurance-sales-agent-maintain-accurate-client-records-.md]

<details><summary>Log</summary>

```
[2026-05-30T09:39:11.197Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:39:12.705Z] Thinking about the best approach…
[2026-05-30T09:39:12.794Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T09:39:30.794Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T09:39:30.795Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, maintain accurate client records and follow up on policy renewals.
[2026-05-30T09:39:30.801Z] Step 1 of 1: Researching "As a Insurance Sales Agent, maintain accurate client records and follow up on po…" — vault + web
[2026-05-30T09:40:35.864Z] All sub-agents finished in 65.1s.
[2026-05-30T09:40:35.865Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:40:35.872Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:40:35.872Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:40:35.872Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T09:45:35.874Z] Wave 1 finished in 300.0s.
[2026-05-30T09:45:35.874Z] All sub-agents finished in 300.0s.
[2026-05-30T09:45:35.879Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T09:49:38.232Z] All sub-agents finished in 242.4s.
[2026-05-30T09:49:38.241Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T09:49:38.250Z] Thinking with openai/gpt-oss-120b:free (~3 474 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T09:55:25.875Z] quality rescue improved score: 0 → 0.93; using the rescued draft
[2026-05-30T09:55:25.875Z] Wrote to your second brain — committing the changes.
[2026-05-30T09:55:26.700Z] Vault commit: done.
```
</details>
