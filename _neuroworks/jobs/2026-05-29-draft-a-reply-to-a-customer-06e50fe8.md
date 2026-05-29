---
type: job
title: Draft a reply to a customer
slug: draft-a-reply-to-a-customer-06e50fe8
created: 2026-05-29T09:23:25.828Z
jobId: 06e50fe8-8f62-438f-87bb-be9e6c6d6c26
status: succeeded
template: custom-customer-success-draft-a-reply-to-a-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:21:38.940Z
finishedAt: 2026-05-29T09:23:25.828Z
---

# Draft a reply to a customer

- **Status:** succeeded
- **Template:** custom-customer-success-draft-a-reply-to-a-customer
- **Started:** 2026-05-29T09:21:38.940Z
- **Finished:** 2026-05-29T09:23:25.828Z
- **Title:** Draft a reply to a customer

## Plan
Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak

### Steps
1. ✓ Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web — `research.deep` (20.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.0s)
    > auto-injected: quality score=0.72 (pass=false) — peer review for a second opinion

## Answer
## Customer‑Reply Draft – Preliminary Report  

**Tone identification** – Neutral (the request is procedural and contains no emotive language).  

**Underlying need** – The customer requires a ready‑to‑send reply that:  
1. Names the detected tone,  
2. Highlights the real need behind the literal ask,  
3. Opens with an appropriate acknowledgment,  
4. Resolves that need and includes a firm commitment date, and  
5. Flags any churn‑risk or expansion‑signal language separately.  

**Current limitation** – The original customer message, prior correspondence, and internal notes are not present in the vault or on the local machine. Without these details the draft cannot be tailored to the specific case.  

**Information required to complete the task**  
1. Full text of the customer’s email or chat message.  
2. Any preceding tickets or SLA terms that provide context.  
3. The exact action or information the customer is requesting.  
4. Internal notes on the customer’s history that might reveal churn‑risk or expansion signals.  

**Proposed structure for the final reply (once the missing data is supplied)**  

> **Hi [Customer Name],**  
>   
> **Acknowledgment:** Thank you for reaching out – I understand you’re looking for [brief restatement of the literal ask].  
>   
> **Underlying need:** What matters most to you right now is [identified real need, e.g., “receiving the updated report before your project deadline on [Date]”.]  
>   
> **Resolution & commitment:** I have scheduled the work to be completed by **[Commitment Date]** and will send the final deliverable directly to this thread. If anything changes on your side, please let me know and I’ll adjust accordingly.  
>   
> **Closing:** Feel free to reply with any additional questions or requirements.  
>   
> **Best regards,**  
> **[Your Name]**  
> **[Your Role]**  

**Flagging** – No churn‑risk or expansion‑signal language can be identified at this stage because the source message is unavailable.  

**Next steps** – Provide the items listed in “Information required” so the reply can be finalized and dispatched.  

*Source:* Template notes outlining the exact steps for this type of reply are stored in the vault at `_neuroworks/templates/2026-05-26-custom-customer-success-draft-a-reply-to-a-customer.md` (and subsequent dated versions) [vault].

<details><summary>Log</summary>

```
[2026-05-29T09:21:38.954Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:21:38.956Z] Thinking about the best approach…
[2026-05-29T09:21:38.991Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:21:43.037Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:21:43.037Z] Plan ready: 1 step — Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak.
[2026-05-29T09:21:43.044Z] Step 1 of 1: Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web
[2026-05-29T09:22:03.368Z] All sub-agents finished in 20.3s.
[2026-05-29T09:22:03.377Z] Thinking with openai/gpt-oss-20b:free (~3 174 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:22:13.782Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:22:13.788Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:22:13.788Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:22:13.788Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:22:19.284Z] Wave 1 finished in 5.5s.
[2026-05-29T09:22:19.284Z] All sub-agents finished in 5.5s.
[2026-05-29T09:22:19.290Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:22:24.290Z] All sub-agents finished in 5.0s.
[2026-05-29T09:22:24.295Z] quality.check failed (score=0.72, issues: Incomplete reply – no actual customer message addressed; Tone and need analysis generic, not tailored to a specific case) — re-synthesising with the large model
[2026-05-29T09:22:24.301Z] Thinking with openai/gpt-oss-120b:free (~3 795 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:22:58.067Z] quality rescue improved score: 0.72 → 0.9; using the rescued draft
[2026-05-29T09:22:58.067Z] peer review verdict=needs-work (Does not answer the task; it requests missing information instead of drafting a reply; Follows the wrong format; no ackn) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:22:58.072Z] Thinking with openai/gpt-oss-120b:free (~3 965 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:23:25.475Z] retry verdict=needs-work and quality not improved (0.73 ≤ 0.9); keeping the rescued/original draft
[2026-05-29T09:23:25.475Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:23:25.827Z] Vault commit: done.
```
</details>
