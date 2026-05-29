---
type: job
title: When no expert lane fits, default to generalist Clawbot voice
slug: when-no-expert-lane-fits-default-to-generalist-clawbot-voice-8cb63230
created: 2026-05-29T09:56:40.986Z
jobId: 8cb63230-f72f-4bf4-8235-67ac1bbba265
status: succeeded
template: custom-knowitall-when-no-expert-lane-fits-default-to-gene
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:56:02.911Z
finishedAt: 2026-05-29T09:56:40.986Z
---

# When no expert lane fits, default to generalist Clawbot voice

- **Status:** succeeded
- **Template:** custom-knowitall-when-no-expert-lane-fits-default-to-gene
- **Started:** 2026-05-29T09:56:02.911Z
- **Finished:** 2026-05-29T09:56:40.986Z
- **Title:** When no expert lane fits, default to generalist Clawbot voice

## Plan
Default research plan for: As a Polymath, any-persona adapter, when no expert lane fits, default to generalist clawbot voice

### Steps
1. ✓ Researching "As a Polymath, any-persona adapter, when no expert lane fits, default to general…" — vault + web — `research.deep` (27.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Answer**

When a request doesn’t match any of the specialist “expert lanes” that Clawbot has (e.g., math‑solver, legal‑advisor, medical‑consultant, etc.), the system falls back to the **generalist “clawbot voice.”** This is the default behavior encoded in the Polymath‑style “any‑persona adapter” configuration: *“as a Polymath, any‑persona adapter, when no expert lane fits, default to generalist clawbot voice.”*【vault:neuroworks/templates/2026-05-27-custom-knowitall-when-no-expert-lane-fits-default-to-gene.md】  

In practice this means:

| Situation | What Clawbot does |
|-----------|-------------------|
| Query matches a defined expert lane (e.g., “solve this integral”) | Switches to that lane and answers with the lane‑specific style. |
| Query does **not** match any lane (e.g., a broad, interdisciplinary question or a novel topic) | Remains in the Polymath mode and replies in the standard, concise, neutral “clawbot” tone, drawing on all available knowledge without adopting a specialist persona. |

So, whenever you’re unsure which expert lane to use, you can rely on the system to automatically revert to the generalist voice, ensuring a coherent response even for “out‑of‑scope” prompts.

<details><summary>Log</summary>

```
[2026-05-29T09:56:02.917Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:56:03.674Z] Thinking about the best approach…
[2026-05-29T09:56:03.698Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:56:06.978Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:56:06.978Z] Plan ready: 1 step — Default research plan for: As a Polymath, any-persona adapter, when no expert lane fits, default to generalist clawbot voice.
[2026-05-29T09:56:06.981Z] Step 1 of 1: Researching "As a Polymath, any-persona adapter, when no expert lane fits, default to general…" — vault + web
[2026-05-29T09:56:34.447Z] All sub-agents finished in 27.5s.
[2026-05-29T09:56:34.447Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:56:34.453Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:56:34.453Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:56:34.453Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:56:40.707Z] Wave 1 finished in 6.3s.
[2026-05-29T09:56:40.707Z] All sub-agents finished in 6.3s.
[2026-05-29T09:56:40.707Z] Quality check passed (82%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T09:56:40.707Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:56:40.986Z] Vault commit: done.
```
</details>
