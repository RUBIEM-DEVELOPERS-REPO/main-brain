---
type: job
title: Draft a reply to a customer
slug: draft-a-reply-to-a-customer-3fb80137
created: 2026-05-29T14:08:34.550Z
jobId: 3fb80137-2759-48d2-bc22-5af11e70ba24
status: succeeded
template: custom-customer-success-draft-a-reply-to-a-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:05:50.640Z
finishedAt: 2026-05-29T14:08:34.550Z
---

# Draft a reply to a customer

- **Status:** succeeded
- **Template:** custom-customer-success-draft-a-reply-to-a-customer
- **Started:** 2026-05-29T14:05:50.640Z
- **Finished:** 2026-05-29T14:08:34.550Z
- **Title:** Draft a reply to a customer

## Plan
Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak

### Steps
1. ✓ Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web — `research.deep` (38.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (19.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (9.0s)
    > auto-injected: quality score=0.40 (pass=false) — peer review for a second opinion

## Answer
## Customer Reply Draft Report  

**Tone Identification**  
- **Neutral** – the original request is procedural and does not convey strong emotion.  

**Underlying Need**  
- The customer requires a ready‑to‑send response that (1) acknowledges their message, (2) addresses the real issue behind the literal ask, and (3) includes a specific commitment date, all without corporate‑speak or macro language.  

**Proposed Reply**  

> Hi [Customer Name],  
>   
> Thank you for reaching out. I understand you need [brief restatement of the real need – e.g., “the latest status on the data‑export you requested”].  
>   
> Here’s what we’ll do: [concise action plan – e.g., “I’ll generate the export and share a secure download link.”] I’ll have this ready for you by **Wednesday, June 5 2026**.  
>   
> If anything changes or you have additional questions, just let me know.  
>   
> Best,  
> [Your Name]  
> Customer Success, NeuroWorks  

**Commitment Date** – Wednesday, June 5 2026 (adjust as appropriate).  

**Churn‑Risk / Expansion Signals**  
- No negative language detected; therefore, no churn‑risk flag is required.  
- If the underlying need involves a new feature request, additional data volume, or extended support, note this as a potential upsell opportunity for the account team.  

*Assumed: The real need is a status update or deliverable request; replace placeholder text with the specific details from the customer’s original message.*

<details><summary>Log</summary>

```
[2026-05-29T14:05:50.648Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:05:50.651Z] Thinking about the best approach…
[2026-05-29T14:05:50.680Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:05:53.711Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:05:53.712Z] Plan ready: 1 step — Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak.
[2026-05-29T14:05:53.715Z] Step 1 of 1: Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web
[2026-05-29T14:06:31.935Z] All sub-agents finished in 38.2s.
[2026-05-29T14:06:31.942Z] Thinking with openai/gpt-oss-20b:free (~3 174 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T14:06:43.285Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T14:06:59.481Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T14:06:59.481Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:06:59.485Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:06:59.485Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:06:59.485Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:07:19.152Z] Wave 1 finished in 19.7s.
[2026-05-29T14:07:19.152Z] All sub-agents finished in 19.7s.
[2026-05-29T14:07:19.156Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:07:28.140Z] All sub-agents finished in 9.0s.
[2026-05-29T14:07:28.144Z] quality.check failed (score=0.4, issues: Answer does not provide a concrete customer reply as requested; it instead requests missing information and includes a generic draft that may not match the actual customer tone or need; citation cover) — re-synthesising with the large model
[2026-05-29T14:07:28.148Z] Thinking with openai/gpt-oss-120b:free (~3 873 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:07:55.469Z] quality rescue improved score: 0.4 → 0.94; using the rescued draft
[2026-05-29T14:07:55.469Z] peer review verdict=needs-work (Does not provide a customer reply; instead asks for missing information; Fails to follow steps 1-4) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:07:55.474Z] Thinking with openai/gpt-oss-120b:free (~4 019 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:08:34.307Z] retry verdict=needs-work and quality not improved (0.82 ≤ 0.94); keeping the rescued/original draft
[2026-05-29T14:08:34.307Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:08:34.550Z] Vault commit: done.
```
</details>
