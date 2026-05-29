---
type: job
title: Invoice follow-up message
slug: invoice-follow-up-message-7e5644ae
created: 2026-05-29T09:50:48.721Z
jobId: 7e5644ae-02db-4e65-b484-c5c80448f2ea
status: succeeded
template: custom-emp-invoice-followup
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:50:18.372Z
finishedAt: 2026-05-29T09:50:48.721Z
---

# Invoice follow-up message

- **Status:** succeeded
- **Template:** custom-emp-invoice-followup
- **Started:** 2026-05-29T09:50:18.372Z
- **Finished:** 2026-05-29T09:50:48.721Z
- **Title:** Invoice follow-up message

## Plan
Generate a concise, firm but polite invoice follow‑up email.

### Steps
1. ✓ Thinking about it — `ollama.generate` (6.1s) · model `openai/gpt-oss-20b:free`
    > Generate the requested email content.
2. ✓ Quality-checking the draft — `quality.check` (4.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Subject:** Follow‑up on Invoice #INV-2026-045 – Payment Due  

Dear [Client Name],

I am writing regarding Invoice #INV-2026-045, originally due on 15 March 2026. As of today it is 12 days overdue. To simplify the process, please use the following link to complete payment: **[https://pay.example.com/INV-2026-045]**. The total remains $3,450.00.  

Please remit payment by **Friday, 28 March 2026**. If the invoice is settled by this date, no further action will be required. Should we not receive payment or a payment plan by then, we will need to consider escalation procedures.  

Thank you for your prompt attention to this matter.  

Best regards,  

[Your Name]  
[Your Title]  
[Your Company]  
[Phone] | [Email]

<details><summary>Log</summary>

```
[2026-05-29T09:50:18.382Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:50:18.384Z] Thinking about the best approach…
[2026-05-29T09:50:18.424Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:50:22.888Z] Plan ready: 1 step — Generate a concise, firm but polite invoice follow‑up email..
[2026-05-29T09:50:22.893Z] Step 1 of 1: Thinking about it
[2026-05-29T09:50:28.957Z] All sub-agents finished in 6.1s.
[2026-05-29T09:50:28.967Z] Thinking with openai/gpt-oss-20b:free (~2 762 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:50:44.103Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:50:44.107Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:50:44.107Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:50:44.107Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:50:48.721Z] Wave 1 finished in 4.6s.
[2026-05-29T09:50:48.721Z] All sub-agents finished in 4.6s.
[2026-05-29T09:50:48.721Z] Quality check passed (76%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
