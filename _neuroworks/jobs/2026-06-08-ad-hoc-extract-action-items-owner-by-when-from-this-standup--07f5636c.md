---
type: job
title: Ad-hoc: Extract action items (owner + by-when) from this standup: 'L
slug: ad-hoc-extract-action-items-owner-by-when-from-this-standup--07f5636c
created: 2026-06-08T10:56:05.195Z
jobId: 07f5636c-8473-4ebd-a4d0-84c4b06ea8dd
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-08T10:55:29.007Z
finishedAt: 2026-06-08T10:56:05.195Z
---

# Ad-hoc: Extract action items (owner + by-when) from this standup:
'L

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-08T10:55:29.007Z
- **Finished:** 2026-06-08T10:56:05.195Z
- **Title:** Ad-hoc: Extract action items (owner + by-when) from this standup:
'L

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nExtract action items (owner + by-when) from this standup:\n'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm. Tom, you're writing the changelog — needs to be done by Thursday. FYI Nadia is out sick so the dashboard work slips to next sprint.'\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Extract action items (owner + by-when) from this standup:\n'Lead: We ship the billing fix today. Aisha, run the regression suite before 2pm. Tom, you're writing the changelog — needs to be done by Thursday. FYI Nadia is out sick so the dashboard work slips to next sprint.'",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Answer
**Action items**

| Owner | Action | Deadline |
|-------|--------|----------|
| Lead | Ship the billing fix | today (2026‑06‑08) |
| Aisha | Run the regression suite | 2026‑06‑08 14:00 |
| Tom | Write the changelog | 2026‑06‑09 (Thursday) |

<details><summary>Log</summary>

```
[2026-06-08T10:55:29.007Z] primary executor = hermes — running through the Hermes agent
[2026-06-08T10:55:29.014Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-08T10:56:05.195Z] Hermes responded in 36.2s (246 chars).
```
</details>
