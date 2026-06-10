---
type: job
title: Ad-hoc: What meetings are on my calendar today?
slug: ad-hoc-what-meetings-are-on-my-calendar-today--f4945735
created: 2026-06-10T18:24:20.717Z
jobId: f4945735-3ea3-4234-8217-85d06e62be80
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:20:06.590Z
finishedAt: 2026-06-10T18:24:20.717Z
---

# Ad-hoc: What meetings are on my calendar today?

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:20:06.590Z
- **Finished:** 2026-06-10T18:24:20.717Z
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
  "personaId": "clawbot"
}
```

## Plan
Direct answer (general knowledge — no vault notes, no web search).

## Answer
To check your current calendar for today’s meetings, I will need to access your local calendar through a file system search or similar method since direct API calls are not available in this context. Please ensure that your calendar files are accessible and provide the path if needed.

I'll conduct a search of your PC for any calendar-related files such as .ics or .vcs files, which could contain today's schedule.
[vault.search]

<details><summary>Log</summary>

```
[2026-06-10T18:20:06.591Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T18:20:06.645Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:21:25.427Z] Hermes responded in 78.8s (66 chars).
[2026-06-10T18:21:33.525Z] Quality gate: Hermes answer didn't pass clawbot's quality.check (score 0.70) — offloading to clawbot.
[2026-06-10T18:21:33.525Z] Working as Neuro — AI agent operator.
[2026-06-10T18:21:55.710Z] Tier 4 — general knowledge. (Your second brain has no notes on this; no web search needed for the shape.)
[2026-06-10T18:24:20.717Z] Skipping vault capture — direct answers have no sourced evidence to file (saves ~30-60s).
```
</details>
