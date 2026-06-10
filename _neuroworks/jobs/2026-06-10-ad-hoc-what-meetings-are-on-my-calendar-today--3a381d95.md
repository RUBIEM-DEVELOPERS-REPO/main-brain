---
type: job
title: Ad-hoc: What meetings are on my calendar today?
slug: ad-hoc-what-meetings-are-on-my-calendar-today--3a381d95
created: 2026-06-10T18:26:14.612Z
jobId: 3a381d95-5d0f-45d3-9487-7e7ebc5f106c
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:25:05.720Z
finishedAt: 2026-06-10T18:26:14.612Z
---

# Ad-hoc: What meetings are on my calendar today?

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:25:05.720Z
- **Finished:** 2026-06-10T18:26:14.612Z
- **Title:** Ad-hoc: What meetings are on my calendar today?

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWhat meetings are on my calendar today?",
  "userText": "What meetings are on my calendar today?",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "delegatedTo": "http://127.0.0.1:7474",
  "personaId": "clawbot"
}
```

## Plan
Direct answer (general knowledge — no vault notes, no web search).

## Answer
To assist with your meeting schedule for today, I will need to access your calendar directly from your device. Please grant me permission to view your current calendar entries.

Once granted access, I can provide you with a list of all scheduled meetings for today.

<details><summary>Log</summary>

```
[2026-06-10T18:25:05.721Z] DELEGATE_ALL → lightest worker managed-worker-7474 (effective load 1)
[2026-06-10T18:25:05.721Z] Why I delegated: worker.
[2026-06-10T18:25:07.134Z] [peer] hired employee "Neuro" (AI agent operator) for this task — scoped to this run only
[2026-06-10T18:25:53.509Z] [peer] Tier 4 — general knowledge. (Your second brain has no notes on this; no web search needed for the shape.)
[2026-06-10T18:26:14.612Z] [peer] Note: your second brain has 1 note that mention this topic (e.g. _neuroworks/jobs/2026-06-10-ad-hoc-what-meetings-are-on-my-calendar-today--f4945735.md) — re-ask if you want me to use those instead of general knowledge.
[2026-06-10T18:26:14.612Z] managed-worker-7474 returned in 68.9s — succeeded.
[2026-06-10T18:26:14.612Z] Worker confirmed it operated as "Neuro".
[2026-06-10T18:26:14.612Z] Skipping vault capture — direct answers have no sourced evidence to file away (saves ~30-60s).
```
</details>
