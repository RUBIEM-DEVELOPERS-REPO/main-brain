---
type: job
title: Find related notes
slug: find-related-notes-1b68cf47
created: 2026-06-01T13:38:00.098Z
jobId: 1b68cf47-31ec-4410-a06c-3104ccd7b5d1
status: succeeded
template: custom-clawbot-find-related-notes
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:36:54.625Z
finishedAt: 2026-06-01T13:38:00.098Z
---

# Find related notes

- **Status:** succeeded
- **Template:** custom-clawbot-find-related-notes
- **Started:** 2026-06-01T13:36:54.625Z
- **Finished:** 2026-06-01T13:38:00.098Z
- **Title:** Find related notes

## Plan
Search vault for the topic and summarize each match in one sentence.

### Steps
1. ✓ Searching your second brain for "<topic>" — `vault.search` (3.2s)
    > Find all notes containing the topic
2. ✓ Thinking about it — `ollama.generate` (17.9s) · model `openai/gpt-oss-20b:free`
    > Generate one-sentence summaries for each found note
3. ✓ Quality-checking the draft — `quality.check` (5.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Relevant Notes for the Topic

| Path | One‑Sentence Summary |
|------|----------------------|
| `0‑Inbox/202605291401-research-review-what-landed-in-the-vault-this-past-week-surface-notes.md` | Indicates that research summaries for the topic should be moved from the inbox to the permanent knowledge base, linking the note to the broader topic workflow. [1] |
| `2‑Permanent/202605290901-bridge-note-topic.md` | Serves as a template for creating a “Bridge Note” that explicitly ties the topic to the permanent knowledge base. [1] |
| `2‑Permanent/README.md` | Lists tags that include the topic, showing that all notes in this folder are organized around that subject. [1] |
| `CLAUDE.md` | Instructs that reusable patterns or gotchas should be appended to a topic‑specific knowledge file, connecting the note to the topic’s knowledge base. [1] |
| `Vault instructions.md` | Mirrors CLAUDE.md, emphasizing that any reusable pattern or technique discovered should be added to a topic‑specific file in the brain. [1] |
| `_neuroworks/jobs/2026-05-29-find-related-notes-eef203df.md` | Job log showing that the system searched the second brain for the topic, demonstrating the note’s role in topic‑based retrieval. [1] |
| `_neuroworks/jobs/2026-05-29-find-related-notes-f04c1cbc.md` | Similar to the previous job, confirming another search for the same topic and reinforcing the note’s connection to topic discovery. [1] |
| `_neuroworks/jobs/2026-05-29-vault-web-bridge-613f6ba3.md` | Indicates that a “Bridge Note” for the topic was created, linking web content to the permanent knowledge base. [1] |
| `_sessions/README.md` | Provides a naming convention for session notes that include the topic, suggesting a structured approach to topic‑specific sessions. [1] |

These entries represent the most directly relevant material concerning the topic within the vault.

<details><summary>Log</summary>

```
[2026-06-01T13:36:54.638Z] Working as Clawbot — AI agent operator.
[2026-06-01T13:36:55.921Z] Thinking about the best approach…
[2026-06-01T13:36:56.020Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T13:37:09.377Z] Plan ready: 2 steps — Search vault for the topic and summarize each match in one sentence..
[2026-06-01T13:37:09.574Z] Step 1 of 2: Searching your second brain for "<topic>"
[2026-06-01T13:37:12.774Z] Step 2 of 2: Thinking about it
[2026-06-01T13:37:30.645Z] All sub-agents finished in 21.1s.
[2026-06-01T13:37:30.657Z] Thinking with openai/gpt-oss-20b:free (~3 499 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T13:37:31.978Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-06-01T13:37:54.251Z] Synth recovered on retry — keeping the rescue draft.
[2026-06-01T13:37:54.252Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T13:37:54.256Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T13:37:54.256Z] Step 4 of 4: Security-scanning the note
[2026-06-01T13:37:54.256Z] Step 3 of 4: Quality-checking the draft
[2026-06-01T13:38:00.098Z] Wave 1 finished in 5.8s.
[2026-06-01T13:38:00.098Z] All sub-agents finished in 5.8s.
[2026-06-01T13:38:00.098Z] Quality check passed (85%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
