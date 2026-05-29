---
type: job
title: Invoice follow-up message
slug: invoice-follow-up-message-d9efbac2
created: 2026-05-29T15:04:26.128Z
jobId: d9efbac2-39fd-49fa-8e35-8831a425139b
status: succeeded
template: custom-emp-invoice-followup
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:03:24.443Z
finishedAt: 2026-05-29T15:04:26.128Z
---

# Invoice follow-up message

- **Status:** succeeded
- **Template:** custom-emp-invoice-followup
- **Started:** 2026-05-29T15:03:24.443Z
- **Finished:** 2026-05-29T15:04:26.128Z
- **Title:** Invoice follow-up message

## Plan
Default research plan for: invoice follow-up message. Tone: firm but polite. Reference the invoice number and original due date, state the days overdue, offer one easy payment path, give a clear new deadline before escalation. Email format with subject. Under 150 words

### Steps
1. ✓ Researching "invoice follow-up message. Tone: firm but polite. Reference the invoice number a…" — vault + web — `research.deep` (21.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (25.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Subject:** Payment Reminder – Invoice # INV‑2023‑045 (Due Jan 15, 2023)

Dear [Client Name],

Our records show that Invoice # INV‑2023‑045, originally due on **January 15, 2023**, is now **12 days overdue**. Please settle the balance of **$2,350** by **February 5, 2023** to avoid escalation.

For your convenience, you can pay instantly via the secure link below:  
**[Pay Invoice # 045 now]** — a one‑click payment option (e.g., PayPal or credit card) as recommended by standard invoice practices [1].

If you have already sent payment, kindly disregard this notice and accept our thanks. Otherwise, please let us know if you need any assistance.

Thank you for your prompt attention.

Best regards,  
[Your Name]  
[Your Company]  
[Phone] | [Email]

<details><summary>Log</summary>

```
[2026-05-29T15:03:24.453Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:03:24.457Z] Thinking about the best approach…
[2026-05-29T15:03:24.495Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:03:29.814Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T15:03:29.814Z] Plan ready: 1 step — Default research plan for: invoice follow-up message. Tone: firm but polite. Reference the invoice number and original due date, state the days overdue, offer one easy payment path, give a clear new deadline before escalation. Email format with subject. Under 150 words.
[2026-05-29T15:03:29.817Z] Step 1 of 1: Researching "invoice follow-up message. Tone: firm but polite. Reference the invoice number a…" — vault + web
[2026-05-29T15:03:51.566Z] All sub-agents finished in 21.7s.
[2026-05-29T15:03:51.577Z] Thinking with openai/gpt-oss-20b:free (~3 059 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:03:54.133Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T15:04:00.293Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-29T15:04:00.293Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:04:00.297Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:04:00.297Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:04:00.297Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:04:01.431Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T15:04:25.888Z] Wave 1 finished in 25.6s.
[2026-05-29T15:04:25.888Z] All sub-agents finished in 25.6s.
[2026-05-29T15:04:25.888Z] Quality check passed (78%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T15:04:25.888Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:04:26.128Z] Vault commit: done.
```
</details>
