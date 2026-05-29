---
type: job
title: Draft a reply to a customer
slug: draft-a-reply-to-a-customer-53c9bc36
created: 2026-05-29T09:01:57.445Z
jobId: 53c9bc36-b9d8-441c-9256-4331c9764a34
status: succeeded
template: custom-customer-success-draft-a-reply-to-a-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:01:28.066Z
finishedAt: 2026-05-29T09:01:57.445Z
---

# Draft a reply to a customer

- **Status:** succeeded
- **Template:** custom-customer-success-draft-a-reply-to-a-customer
- **Started:** 2026-05-29T09:01:28.066Z
- **Finished:** 2026-05-29T09:01:57.445Z
- **Title:** Draft a reply to a customer

## Plan
Generate a tone‑aware reply and flag churn/expansion signals.

### Steps
1. ✓ Thinking about it — `ollama.generate` (3.9s) · model `openai/gpt-oss-20b:free`
2. ✓ Quality-checking the draft — `quality.check` (5.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Subject:** Follow‑up on Your Recent Inquiry  

**Tone Assessment:**  
The customer’s message appears **frustrated**.  

**Underlying Need:**  
The customer likely needs a clear resolution to a technical issue and reassurance that the problem will be addressed promptly.  

**Draft Reply:**  

> Dear [Customer Name],  
> 
> I understand how inconvenient this situation is and appreciate your patience. I’ve reviewed the details you provided and am coordinating with our technical team to resolve the issue by **[specific date]**. In the meantime, please try the following quick check: [brief troubleshooting step].  
> 
> I’ll keep you updated on progress and will reach out immediately if any additional information is required. Thank you for bringing this to our attention.  
> 
> Best regards,  
> 
> [Your Name]  
> [Your Title]  
> [Company]  

**Churn‑Risk / Expansion‑Signal Flag:**  
- The customer’s frustration may indicate churn risk.  
- No explicit expansion signals detected.

<details><summary>Log</summary>

```
[2026-05-29T09:01:28.075Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:01:28.079Z] Thinking about the best approach…
[2026-05-29T09:01:28.109Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:01:39.662Z] Plan ready: 1 step — Generate a tone‑aware reply and flag churn/expansion signals..
[2026-05-29T09:01:39.664Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:01:39.664Z] Step 1 of 1: Thinking about it
[2026-05-29T09:01:43.595Z] All sub-agents finished in 3.9s.
[2026-05-29T09:01:43.599Z] Thinking with openai/gpt-oss-20b:free (~2 195 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:01:51.624Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:01:51.626Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:01:51.626Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:01:51.626Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:01:51.626Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:01:57.445Z] Wave 1 finished in 5.8s.
[2026-05-29T09:01:57.445Z] All sub-agents finished in 5.8s.
[2026-05-29T09:01:57.445Z] Quality check passed (90%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
