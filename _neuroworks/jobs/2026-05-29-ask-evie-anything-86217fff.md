---
type: job
title: Ask Evie anything
slug: ask-evie-anything-86217fff
created: 2026-05-29T21:06:13.198Z
jobId: 86217fff-17a2-442e-a88b-53a16bfc5e6d
status: succeeded
template: custom-executive-assistant-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:04:50.154Z
finishedAt: 2026-05-29T21:06:13.198Z
---

# Ask Evie anything

- **Status:** succeeded
- **Template:** custom-executive-assistant-ask-anything
- **Started:** 2026-05-29T21:04:50.154Z
- **Finished:** 2026-05-29T21:06:13.198Z
- **Title:** Ask Evie anything

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Ask Evie anything\nDescription: Free-form task framed through the Executive Assistant role. Empty plan — re-plans against the persona system prompt each run."
}
```

## Plan
Default research plan for: As a Executive Assistant, respond to the following task in role:

Context: Role: Custom
Title: Ask Evie anything
Description: Free-form task framed through the Executive Assistant role. Empty plan — re-plans against the persona system prompt each run

### Steps
1. ✓ Researching "As a Executive Assistant, respond to the following task in role:

Context: Role:…" — vault + web — `research.deep` (24.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.2s)
    > auto-injected: quality score=0.73 (pass=false) — peer review for a second opinion

## Answer
## Executive‑Assistant Guidance – “Ask Evie Anything”

### Purpose
Provide a concise framework that enables you to craft clear, actionable prompts for Evie, ensuring the response is focused and delivered in the desired format.

### Recommended Prompt Structure
1. **Goal** – Define the exact outcome you need (e.g., decision recommendation, summary, draft email).  
2. **Context** – Supply relevant background, constraints, dates, numbers, or stakeholder information.  
3. **Format** – State the preferred output style (bullet list, short paragraph, table, draft document, etc.).

### Example Templates

| Desired Output | Sample Prompt |
|----------------|---------------|
| Decision recommendation | “Evie, please recommend whether we should adopt X software, considering our budget of $Y, the team’s skill set, and the rollout timeline.” |
| Brief summary | “Summarize the key points from the latest quarterly sales report for the executive team.” |
| Draft email | “Draft a polite follow‑up email to the vendor about the pending contract, highlighting our timeline and any open questions.” |
| Data table | “Create a table comparing three cloud‑hosting providers on cost, SLA, and data‑privacy compliance.” |

### Quick Checklist Before Sending
- **Goal** – Clearly stated and specific.  
- **Context** – Includes all pertinent details (numbers, dates, names).  
- **Format** – Explicitly indicates the desired output style.  

Following this structure will help Evie generate precise, actionable answers tailored to your needs.  

[1]

<details><summary>Log</summary>

```
[2026-05-29T21:04:50.169Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:04:50.171Z] Thinking about the best approach…
[2026-05-29T21:04:50.231Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:04:51.384Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T21:04:51.384Z] Plan ready: 1 step — Default research plan for: As a Executive Assistant, respond to the following task in role:

Context: Role: Custom
Title: Ask Evie anything
Description: Free-form task framed through the Executive Assistant role. Empty plan — re-plans against the persona system prompt each run.
[2026-05-29T21:04:51.389Z] Step 1 of 1: Researching "As a Executive Assistant, respond to the following task in role:

Context: Role:…" — vault + web
[2026-05-29T21:05:15.384Z] All sub-agents finished in 24.0s.
[2026-05-29T21:05:15.393Z] Thinking with openai/gpt-oss-20b:free (~2 823 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:05:16.640Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T21:05:39.350Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T21:05:39.350Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:05:39.354Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:05:39.354Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:05:39.354Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T21:05:44.746Z] Wave 1 finished in 5.4s.
[2026-05-29T21:05:44.746Z] All sub-agents finished in 5.4s.
[2026-05-29T21:05:44.751Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T21:05:48.997Z] All sub-agents finished in 4.2s.
[2026-05-29T21:05:49.006Z] quality.check failed (score=0.73, issues: Low citation coverage; only one source cited for multiple claims; citation_coverage adjusted from 0.20 to 0.33 (found 1 citation markers in 9 substantive sentences)) — re-synthesising with the large model
[2026-05-29T21:05:49.016Z] Thinking with openai/gpt-oss-120b:free (~3 431 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T21:06:12.871Z] quality rescue improved score: 0.73 → 0.93; using the rescued draft
[2026-05-29T21:06:12.871Z] Wrote to your second brain — committing the changes.
[2026-05-29T21:06:13.198Z] Vault commit: done.
```
</details>
