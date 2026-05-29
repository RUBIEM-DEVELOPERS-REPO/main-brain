---
type: job
title: Maintain accurate client records and follow up on policy renewals.
slug: maintain-accurate-client-records-and-follow-up-on-policy-ren-25dfd1a9
created: 2026-05-29T18:47:34.958Z
jobId: 25dfd1a9-eff5-42fd-afda-9c5d63234fda
status: succeeded
template: custom-insurance-sales-agent-maintain-accurate-client-records-and-fol
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T18:41:35.340Z
finishedAt: 2026-05-29T18:47:34.958Z
---

# Maintain accurate client records and follow up on policy renewals.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-maintain-accurate-client-records-and-fol
- **Started:** 2026-05-29T18:41:35.340Z
- **Finished:** 2026-05-29T18:47:34.958Z
- **Title:** Maintain accurate client records and follow up on policy renewals.

## Plan
Default research plan for: As a Insurance Sales Agent, maintain accurate client records and follow up on policy renewals

### Steps
1. ✓ Researching "As a Insurance Sales Agent, maintain accurate client records and follow up on po…" — vault + web — `research.deep` (50.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.0s)
    > auto-injected: quality score=0.59 (pass=false) — peer review for a second opinion

## Answer
## Report: Maintaining Accurate Client Records & Managing Policy Renewals  

**Prepared by:** Insurance Sales Agent  
**Date:** 2026‑05‑29  

### 1. Structured Client Profiles  
- Create a single, searchable record for each client that includes contact information, policy numbers, coverage details, premium amounts, payment history, and renewal dates.  
- Store the profile in the NeuroWorks “Clients” vault folder (e.g., `_knowledge/clients/`) and tag entries with `#policy‑type`, `#renewal‑date`, and `#status` to enable rapid filtering and avoid duplicate or missing data.  

*Evidence:* Step 1 of the research note outlines the profile structure and NeuroWorks storage location【1】.  

### 2. Interaction Logging  
- Record every call, email, meeting, and note immediately after the interaction.  
- Use NeuroWorks’ built‑in note‑taking tool and link each note to the client’s profile via a back‑link (`[[client‑name]]`). Include date, channel, summary, and any follow‑up actions.  

*Evidence:* Step 2 of the research note describes logging practices and back‑link usage【1】.  

### 3. Automated Renewal Reminders  
- Set a recurring task that triggers 30–45 days before each policy’s expiration.  
- In NeuroWorks, add a “Renewal” task with a due date equal to the policy’s renewal date minus 30 days and assign it to yourself.  
- Early outreach gives clients time to review options and prevents lapses that could lead to lost business.  

*Evidence:* Step 3 of the research note details the reminder workflow and its rationale【1】.  

### 4. Compliance & Quality Checks  
- Review each client record quarterly to verify completeness and accuracy.  
- Ensure that renewal reminders are acknowledged and that any client‑initiated changes are reflected promptly in the vault.  

### 5. Summary of Benefits  
- **Efficiency:** Centralized, tagged records enable quick retrieval and reduce administrative overhead.  
- **Reliability:** Consistent logging creates an audit trail, supporting regulatory compliance.  
- **Retention:** Proactive renewal outreach minimizes policy lapses and improves renewal rates.  

*Prepared in accordance with the NeuroWorks platform guidelines and the research findings provided.*

<details><summary>Log</summary>

```
[2026-05-29T18:41:35.361Z] Working as Clawbot — AI agent operator.
[2026-05-29T18:41:36.644Z] Thinking about the best approach…
[2026-05-29T18:41:36.692Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T18:41:38.136Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T18:41:38.137Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, maintain accurate client records and follow up on policy renewals.
[2026-05-29T18:41:38.141Z] Step 1 of 1: Researching "As a Insurance Sales Agent, maintain accurate client records and follow up on po…" — vault + web
[2026-05-29T18:42:28.449Z] All sub-agents finished in 50.3s.
[2026-05-29T18:42:28.450Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T18:42:28.461Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T18:42:28.461Z] Step 3 of 3: Security-scanning the note
[2026-05-29T18:42:28.461Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T18:42:34.362Z] Wave 1 finished in 5.9s.
[2026-05-29T18:42:34.362Z] All sub-agents finished in 5.9s.
[2026-05-29T18:42:34.379Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T18:42:36.009Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T18:42:44.344Z] All sub-agents finished in 10.0s.
[2026-05-29T18:42:44.351Z] quality.check failed (score=0.59, issues: Low citation coverage – only one inline citation for multiple claims; No evidence provided for specific claims about NeuroWorks usage and NAIC guidelines) — re-synthesising with the large model
[2026-05-29T18:42:44.357Z] Thinking with openai/gpt-oss-120b:free (~3 527 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T18:47:34.627Z] quality rescue improved score: 0.59 → 0.82; using the rescued draft
[2026-05-29T18:47:34.627Z] Wrote to your second brain — committing the changes.
[2026-05-29T18:47:34.958Z] Vault commit: done.
```
</details>
