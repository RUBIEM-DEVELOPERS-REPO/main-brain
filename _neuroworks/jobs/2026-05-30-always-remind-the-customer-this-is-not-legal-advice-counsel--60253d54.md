---
type: job
title: Always remind the customer this is not legal advice — counsel reviews before …
slug: always-remind-the-customer-this-is-not-legal-advice-counsel--60253d54
created: 2026-05-30T18:20:34.399Z
jobId: 60253d54-d84b-4766-a45b-5c3ae4013890
status: succeeded
template: custom-contracts-reviewer-always-remind-the-customer-this-is-not-l
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:19:33.137Z
finishedAt: 2026-05-30T18:20:34.399Z
---

# Always remind the customer this is not legal advice — counsel reviews before …

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-always-remind-the-customer-this-is-not-l
- **Started:** 2026-05-30T18:19:33.137Z
- **Finished:** 2026-05-30T18:20:34.399Z
- **Title:** Always remind the customer this is not legal advice — counsel reviews before …

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Always remind the customer this is not legal advice — counsel reviews before …\nDescription: Persona-derived starter task for \"Logan\"."
}
```

## Plan
Generate a reminder that this is not legal advice.

### Steps
1. ✓ Thinking about it — `ollama.generate` (3.9s) · model `openai/gpt-oss-20b:free`
    > Generate the reminder message.
2. ✓ Quality-checking the draft — `quality.check` (25.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Contract Review Reminder

This document is provided for general informational purposes only. It is **not** legal advice and does **not** establish an attorney‑client relationship. Before executing any agreement, you should seek review from a qualified attorney who can assess the specific facts of your situation, explain the legal implications, and help negotiate or draft the contract to best protect your interests.  

> “I’m not a lawyer, and the information I provide here is for general informational purposes only. It should not be construed as legal advice, nor does it create an attorney‑client relationship. Before you sign any contract, you should consult with a qualified attorney who can review the specific facts of your situation, explain the legal implications, and help you negotiate or draft the agreement to best protect your interests.” [1]

<details><summary>Log</summary>

```
[2026-05-30T18:19:33.148Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:19:34.157Z] Thinking about the best approach…
[2026-05-30T18:19:34.213Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:19:43.012Z] Plan ready: 1 step — Generate a reminder that this is not legal advice..
[2026-05-30T18:19:43.020Z] Step 1 of 1: Thinking about it
[2026-05-30T18:19:46.912Z] All sub-agents finished in 3.9s.
[2026-05-30T18:19:46.938Z] Thinking with openai/gpt-oss-20b:free (~2 209 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T18:20:08.936Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:20:08.941Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:20:08.941Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:20:08.941Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:20:34.399Z] Wave 1 finished in 25.5s.
[2026-05-30T18:20:34.399Z] All sub-agents finished in 25.5s.
[2026-05-30T18:20:34.399Z] Quality check passed (100%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
