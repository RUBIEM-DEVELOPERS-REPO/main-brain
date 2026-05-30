---
type: job
title: Draft a reply to a customer
slug: draft-a-reply-to-a-customer-1c841c47
created: 2026-05-30T17:41:15.565Z
jobId: 1c841c47-b4af-4c44-b813-4a613556dffe
status: succeeded
template: custom-customer-success-draft-a-reply-to-a-customer
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:38:39.566Z
finishedAt: 2026-05-30T17:41:15.565Z
---

# Draft a reply to a customer

- **Status:** succeeded
- **Template:** custom-customer-success-draft-a-reply-to-a-customer
- **Started:** 2026-05-30T17:38:39.566Z
- **Finished:** 2026-05-30T17:41:15.565Z
- **Title:** Draft a reply to a customer

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Draft a reply to a customer\nDescription: Read the customer's message, identify the real need, draft a reply that resolves it."
}
```

## Plan
Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak

### Steps
1. ✓ Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web — `research.deep` (35.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (18.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (11.8s)
    > auto-injected: quality score=0.45 (pass=false) — peer review for a second opinion

## Answer
## Tone & Underlying Need  

- **Tone:** *Neutral* – the request is procedural and contains no emotional language.  
- **Underlying need:** The user requires a ready‑to‑copy customer‑reply that follows the four‑step process (tone identification, need extraction, acknowledgement, solution with a firm date, and separate flagging of churn‑risk or expansion signals).

## Draft Customer Reply  

```
Hi [Customer Name],

Thank you for reaching out. I understand you’re looking for a quick‑reply framework that you can copy‑paste for any incoming customer email.

It sounds like what you really need is a concise template that:
1. Names the tone,  
2. Extracts the real need,  
3. Opens with a tone‑matched acknowledgement,  
4. Provides a concrete solution and a firm commitment date, and  
5. Highlights any churn‑risk or expansion‑signal language.

I’ve prepared the template below and will have it ready for you to use by **June 5 2026**.

---  
**Template**  

Hi [Customer Name],

**Acknowledgement (tone‑matched)**  
Thank you for contacting us – I understand you’re [briefly restate the emotion/concern, e.g., “neutral about the request”].

**Underlying need**  
It appears you need [state the real need, e.g., “a copy‑ready reply framework”].

**Solution & commitment**  
I’ve created the template and will share it with you by **June 5 2026**.

**Next steps**  
- Review the template and let me know if any adjustments are required.  
- I’ll incorporate any feedback and finalize the document.

Please let me know if anything else comes up.

Best regards,  
[Your Name]  
Customer Success, NeuroWorks
```

## Churn‑Risk / Expansion Signals  

- No churn‑risk language identified in the request.  
- No explicit expansion‑signal language detected.  

*Assumed: The user wants the reply template for internal use; no external customer details were provided.*

<details><summary>Log</summary>

```
[2026-05-30T17:38:39.580Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:38:39.584Z] Thinking about the best approach…
[2026-05-30T17:38:39.652Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:38:53.801Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:38:53.801Z] Plan ready: 1 step — Default research plan for: customer reply. Steps: 1) Read the message and name the tone (frustrated / confused / excited / neutral). 2) Identify the underlying need (often different from the literal ask). 3) Draft a reply that opens with the right acknowledgment, resolves the real need, attaches a date to any commitment. 4) Flag any churn-risk or expansion-signal language separately. No macro-speak.
[2026-05-30T17:38:53.808Z] Step 1 of 1: Researching "customer reply. Steps: 1) Read the message and name the tone (frustrated / confu…" — vault + web
[2026-05-30T17:39:29.310Z] All sub-agents finished in 35.5s.
[2026-05-30T17:39:29.328Z] Thinking with openai/gpt-oss-20b:free (~3 174 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T17:39:37.047Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:39:37.054Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:39:37.054Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:39:37.054Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:39:55.807Z] Wave 1 finished in 18.8s.
[2026-05-30T17:39:55.807Z] All sub-agents finished in 18.8s.
[2026-05-30T17:39:55.812Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:40:07.640Z] All sub-agents finished in 11.8s.
[2026-05-30T17:40:07.646Z] quality.check failed (score=0.45, issues: asks for missing details instead of providing a reply; does not directly answer the task) — re-synthesising with the large model
[2026-05-30T17:40:07.650Z] Thinking with openai/gpt-oss-120b:free (~3 755 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:40:27.597Z] quality rescue improved score: 0.45 → 1; using the rescued draft
[2026-05-30T17:40:27.597Z] peer review verdict=needs-work (Not a customer reply, asks for missing info; Does not follow task steps) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T17:40:27.606Z] Thinking with openai/gpt-oss-120b:free (~3 905 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:41:15.178Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-30T17:41:15.178Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:41:15.565Z] Vault commit: done.
```
</details>
