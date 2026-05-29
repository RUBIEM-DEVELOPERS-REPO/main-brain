---
type: job
title: Always remind the customer this is not legal advice — counsel reviews before …
slug: always-remind-the-customer-this-is-not-legal-advice-counsel--957fc565
created: 2026-05-29T21:11:06.843Z
jobId: 957fc565-f5b7-4dac-ab0a-ddde3141e9ce
status: succeeded
template: custom-contracts-reviewer-always-remind-the-customer-this-is-not-l
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:10:23.195Z
finishedAt: 2026-05-29T21:11:06.843Z
---

# Always remind the customer this is not legal advice — counsel reviews before …

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-always-remind-the-customer-this-is-not-l
- **Started:** 2026-05-29T21:10:23.195Z
- **Finished:** 2026-05-29T21:11:06.843Z
- **Title:** Always remind the customer this is not legal advice — counsel reviews before …

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Always remind the customer this is not legal advice — counsel reviews before …\nDescription: Persona-derived starter task for \"Logan\"."
}
```

## Plan
Default research plan for: As a Contracts Reviewer, always remind the customer this is not legal advice — counsel reviews before signing.

Context: Role: Custom
Title: Always remind the customer this is not legal advice — counsel reviews before …
Description: Persona-derived starter task for "Logan"

### Steps
1. ✓ Researching "As a Contracts Reviewer, always remind the customer this is not legal advice — c…" — vault + web — `research.deep` (11.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (11.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Reminder: Non‑Legal Advisory Statement

As a Contracts Reviewer, it is essential to convey that the information provided herein is **not** legal advice. A qualified attorney should review any contract before it is signed. This reminder aligns with standard practice for contract review procedures and protects both the reviewer and the client from potential liability.  

**Key Point:**  
- The reviewer’s assessment is informational only; it does not substitute for professional legal counsel.  

[1]

<details><summary>Log</summary>

```
[2026-05-29T21:10:23.203Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:10:23.206Z] Thinking about the best approach…
[2026-05-29T21:10:23.252Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:10:26.694Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T21:10:26.694Z] Plan ready: 1 step — Default research plan for: As a Contracts Reviewer, always remind the customer this is not legal advice — counsel reviews before signing.

Context: Role: Custom
Title: Always remind the customer this is not legal advice — counsel reviews before …
Description: Persona-derived starter task for "Logan".
[2026-05-29T21:10:26.699Z] Step 1 of 1: Researching "As a Contracts Reviewer, always remind the customer this is not legal advice — c…" — vault + web
[2026-05-29T21:10:38.168Z] All sub-agents finished in 11.5s.
[2026-05-29T21:10:38.175Z] Thinking with openai/gpt-oss-20b:free (~2 449 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:10:54.766Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:10:54.772Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:10:54.772Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:10:54.772Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T21:11:06.492Z] Wave 1 finished in 11.7s.
[2026-05-29T21:11:06.492Z] All sub-agents finished in 11.7s.
[2026-05-29T21:11:06.492Z] Quality check passed (94%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T21:11:06.492Z] Wrote to your second brain — committing the changes.
[2026-05-29T21:11:06.843Z] Vault commit: done.
```
</details>
