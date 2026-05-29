---
type: job
title: Draft a reply to a customer
slug: draft-a-reply-to-a-customer-aaff830b
created: 2026-05-29T20:31:49.473Z
jobId: aaff830b-63f4-4312-8321-bb24abb9e95a
status: succeeded
template: custom-customer-success-draft-a-reply-to-a-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:30:33.605Z
finishedAt: 2026-05-29T20:31:49.473Z
---

# Draft a reply to a customer

- **Status:** succeeded
- **Template:** custom-customer-success-draft-a-reply-to-a-customer
- **Started:** 2026-05-29T20:30:33.605Z
- **Finished:** 2026-05-29T20:31:49.473Z
- **Title:** Draft a reply to a customer

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Draft a reply to a customer\nDescription: Read the customer's message, identify the real need, draft a reply that resolves it."
}
```

## Plan
Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak.

Context: Role:

### Steps
1. ✓ Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web — `research.deep` (18.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (17.4s)
    > auto-injected: quality score=0.33 (pass=false) — peer review for a second opinion

## Answer
## Customer Reply Draft – Status Report

**Current Situation**  
The evidence set contains a generic guide for drafting customer replies but does **not** include the actual customer message, prior interaction history, or any specific request details. Without this information it is impossible to:

1. Determine the precise tone (frustrated, confused, excited, neutral).  
2. Identify the underlying need that may differ from the literal ask.  
3. Compose a reply that acknowledges the customer correctly, resolves the real issue, and attaches a firm commitment date.  
4. Flag any churn‑risk or expansion‑signal language.

**Required Information**  
To proceed, please provide:

1. The full text of the customer’s message.  
2. Relevant context (e.g., previous tickets, account status, SLA terms).  
3. The specific outcome or action the customer expects.  
4. Any internal policies or escalation paths that should be referenced.

**Next Steps**  
Once the above details are supplied, I will:

- Analyse the tone and underlying need.  
- Draft a concise, non‑macro reply with an explicit commitment date.  
- Highlight any churn‑risk or expansion signals.

*Source: security scan indicates missing customer content and outlines needed items* [3].

<details><summary>Log</summary>

```
[2026-05-29T20:30:33.623Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:30:33.639Z] Thinking about the best approach…
[2026-05-29T20:30:33.815Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:30:38.223Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:30:38.223Z] Plan ready: 1 step — Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak.

Context: Role:.
[2026-05-29T20:30:38.228Z] Step 1 of 1: Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web
[2026-05-29T20:30:56.250Z] All sub-agents finished in 18.0s.
[2026-05-29T20:30:56.257Z] Thinking with openai/gpt-oss-20b:free (~2 806 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:31:03.272Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:31:03.277Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:31:03.277Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:31:03.277Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:31:09.254Z] Wave 1 finished in 6.0s.
[2026-05-29T20:31:09.254Z] All sub-agents finished in 6.0s.
[2026-05-29T20:31:09.259Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:31:10.398Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:31:26.644Z] All sub-agents finished in 17.4s.
[2026-05-29T20:31:26.651Z] quality.check failed (score=0.33, issues: Generic response not tailored to a specific customer message; Insufficient citations for claims) — re-synthesising with the large model
[2026-05-29T20:31:26.658Z] Thinking with openai/gpt-oss-120b:free (~3 228 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:31:46.472Z] quality rescue improved score: 0.33 → 0.68; using the rescued draft
[2026-05-29T20:31:46.472Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:31:49.473Z] Vault commit: done.
```
</details>
