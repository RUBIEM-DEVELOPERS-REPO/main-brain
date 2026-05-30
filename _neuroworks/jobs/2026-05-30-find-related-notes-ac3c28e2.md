---
type: job
title: Find related notes
slug: find-related-notes-ac3c28e2
created: 2026-05-30T09:57:50.881Z
jobId: ac3c28e2-91cf-4684-8a78-a440f31e58f0
status: succeeded
template: custom-clawbot-find-related-notes
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:53:04.747Z
finishedAt: 2026-05-30T09:57:50.881Z
---

# Find related notes

- **Status:** succeeded
- **Template:** custom-clawbot-find-related-notes
- **Started:** 2026-05-30T09:53:04.747Z
- **Finished:** 2026-05-30T09:57:50.881Z
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
1. ✓ Researching "Find notes related to the following topic across the vault. For each, summarise …" — vault + web — `research.deep` (39.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (224.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Most relevant vault notes that mention the “find‑related‑notes” task (or a very close variant).**  
Each entry is summarized in one sentence to explain how it connects to the request.

| # | Vault path | Connection to the request |
|---|------------|---------------------------|
| 1 | `0-Inbox/202605291401-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | An inbox entry that directly asks the same “find notes related to the following topic across the vault” query (the exact wording of the current task). |
| 2 | `0-Inbox/202605291859-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | A second inbox capture of the same research prompt, showing the task was logged at a later time. |
| 3 | `0-Inbox/202605292022-research-find-notes-related-to-the-following-topic-across-the-vault-f.md` | Yet another inbox note repeating the exact same request, indicating the user may be iterating on the same search. |
| 4 | `_neuroworks/templates/2026-05-26-custom-clawbot-find-related-notes.md` | A template for a custom Clawbot task that automates “find notes related to the following topic across the vault”, providing the canonical structure for this kind of request. |
| 5 | `_neuroworks/templates/2026-05-27-custom-clawbot-find-related-notes.md` | A follow‑up template (dated one day later) that refines the same task, showing the evolving definition of the “find‑related‑notes” operation. |
| 6 | `_neuroworks/templates/2026-05-28-custom-clawbot-find-related-notes.md` | Continuation of the template series, confirming the recurring need for a “find notes” workflow in the NeuroWorks platform. |
| 7 | `_neuroworks/templates/2026-05-29-custom-clawbot-find-related-notes.md` | Further template iteration, reinforcing the standard phrasing and metadata (`originTask`) used for this search request. |
| 8 | `_neuroworks/templates/2026-05-30-custom-clawbot-find-related-notes.md` | The latest template version, showing the most up‑to‑date definition of the “find‑related‑notes” task for Clawbot. |

**Why these are the most relevant:**  
All eight entries either *are* the exact request you are asking about, or they are the official NeuroWorks templates that define how Clawbot should execute that request. No other vault notes or web sources mention this specific “find notes across the vault” operation, so these constitute the complete, evidence‑grounded set.

<details><summary>Log</summary>

```
[2026-05-30T09:53:04.758Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:53:05.674Z] Thinking about the best approach…
[2026-05-30T09:53:05.754Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T09:53:23.767Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T09:53:23.767Z] Plan ready: 1 step — Default research plan for: Find notes related to the following topic across the vault. For each, summarise the connection in one sentence. Return the most relevant 5-10 with paths.
[2026-05-30T09:53:23.773Z] Step 1 of 1: Researching "Find notes related to the following topic across the vault. For each, summarise …" — vault + web
[2026-05-30T09:54:03.488Z] All sub-agents finished in 39.7s.
[2026-05-30T09:54:03.488Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:54:03.495Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:54:03.495Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:54:03.495Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T09:57:48.057Z] Wave 1 finished in 224.6s.
[2026-05-30T09:57:48.058Z] All sub-agents finished in 224.6s.
[2026-05-30T09:57:48.058Z] Quality check passed (86%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-30T09:57:48.058Z] Wrote to your second brain — committing the changes.
[2026-05-30T09:57:50.881Z] Vault commit: done.
```
</details>
