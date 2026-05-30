---
type: job
title: Find related notes
slug: find-related-notes-4bd8b791
created: 2026-05-30T17:36:11.059Z
jobId: 4bd8b791-059d-4b3c-824b-c9cf13b4036e
status: succeeded
template: custom-clawbot-find-related-notes
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:30:35.451Z
finishedAt: 2026-05-30T17:36:11.059Z
---

# Find related notes

- **Status:** succeeded
- **Template:** custom-clawbot-find-related-notes
- **Started:** 2026-05-30T17:30:35.451Z
- **Finished:** 2026-05-30T17:36:11.059Z
- **Title:** Find related notes

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Find related notes\nDescription: Given a topic, finds related notes in your vault and explains the connection. Use to surface threads you forgot you had."
}
```

## Plan
Default research plan for: Find notes related to the following topic across the vault. For each, summarise the connection in one sentence. Return the most relevant 5-10 with paths

### Steps
1. ✓ Researching "Find notes related to the following topic across the vault. For each, summarise …" — vault + web — `research.deep` (31.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (292.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Most relevant vault notes (5‑10) that directly address the “find notes related to a topic” task**

| # | Vault path | One‑sentence connection |
|---|------------|--------------------------|
| 1 | `0-Inbox/202605291401-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | An inbox entry that creates the research request to locate and summarize notes on a given topic. |
| 2 | `0-Inbox/202605291859-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | A duplicate inbox task reiterating the same “find‑related‑notes” instruction, useful for tracking multiple requests. |
| 3 | `0-Inbox/202605292022-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | Another inbox entry that logs the same research prompt, showing the pattern of how such tasks are captured. |
| 4 | `0-Inbox/202605300954-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | Continuation of the inbox series, confirming the recurring need to run a “find related notes” query. |
| 5 | `_neuroworks/templates/2026-05-26-custom-clawbot-find-related-notes.md` | A template for the custom Clawbot command that automates the “find notes related to a topic” workflow. |
| 6 | `_neuroworks/templates/2026-05-27-custom-clawbot-find-related-notes.md` | Updated version of the Clawbot template, reflecting minor tweaks to the prompt wording. |
| 7 | `_neuroworks/templates/2026-05-28-custom-clawbot-find-related-notes.md` | Further iteration of the template, preserving the core instruction while adjusting metadata. |
| 8 | `_neuroworks/templates/2026-05-29-custom-clawbot-find-related-notes.md` | Latest template revision, ready for use by Clawbot to execute the “find‑related‑notes” task. |

**Why these are the most relevant:**  
All eight entries either *record* the original research request (the inbox notes) or *provide* the operational template that Clawbot uses to fulfill that request (the `_neuroworks/templates` files). No other vault notes mention this specific task, making these the concise set that directly support the user’s query.

<details><summary>Log</summary>

```
[2026-05-30T17:30:35.459Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:30:36.332Z] Thinking about the best approach…
[2026-05-30T17:30:36.384Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:30:46.659Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:30:46.660Z] Plan ready: 1 step — Default research plan for: Find notes related to the following topic across the vault. For each, summarise the connection in one sentence. Return the most relevant 5-10 with paths.
[2026-05-30T17:30:46.664Z] Step 1 of 1: Researching "Find notes related to the following topic across the vault. For each, summarise …" — vault + web
[2026-05-30T17:31:17.982Z] All sub-agents finished in 31.3s.
[2026-05-30T17:31:17.983Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:31:18.039Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:31:18.040Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:31:18.040Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:36:10.658Z] Wave 1 finished in 292.6s.
[2026-05-30T17:36:10.658Z] All sub-agents finished in 292.6s.
[2026-05-30T17:36:10.658Z] Quality check passed (76%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-30T17:36:10.658Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:36:11.059Z] Vault commit: done.
```
</details>
