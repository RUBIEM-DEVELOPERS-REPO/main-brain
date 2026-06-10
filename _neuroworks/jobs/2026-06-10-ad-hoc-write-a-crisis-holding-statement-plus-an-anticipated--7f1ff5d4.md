---
type: job
title: Ad-hoc: Write a crisis holding statement plus an anticipated Q&A for
slug: ad-hoc-write-a-crisis-holding-statement-plus-an-anticipated--7f1ff5d4
created: 2026-06-10T17:51:03.603Z
jobId: 7f1ff5d4-7f42-4e84-a30b-87f828d70424
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T17:49:46.282Z
finishedAt: 2026-06-10T17:51:03.603Z
---

# Ad-hoc: Write a crisis holding statement plus an anticipated Q&A for

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T17:49:46.282Z
- **Finished:** 2026-06-10T17:51:03.603Z
- **Title:** Ad-hoc: Write a crisis holding statement plus an anticipated Q&A for

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite a crisis holding statement plus an anticipated Q&A for a 3-hour payments outage.\n\nInterpretation: intent=draft-other, target=\"crisis holding statement plus an anticipated q&a\", recipient=\"a 3-hour payments outage\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Write a crisis holding statement plus an anticipated Q&A for a 3-hour payments outage.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "draft-other",
  "intentTarget": "crisis holding statement plus an anticipated q&a",
  "intentRecipient": "a 3-hour payments outage",
  "personaId": "clawbot"
}
```

## Answer
## Holding Statement

NeuroWorks is aware of an outage affecting the payments service that began at 12:00 UTC today.  
We take this seriously and our priority is customer satisfaction and service reliability.  
We are actively investigating the root cause and restoring service.  
We will share an update by 15:00 UTC. For continuous status, visit our status page at https://status.neuroworks.com or contact ops@neuroworks.com.

---

## Anticipated Q&A

| Question | Approved answer | Do NOT say |
|---|---|---|
| What happened? | The payments service experienced a brief disruption that prevented processing of payment requests. | Speculation on cause |
| Were any customers affected? | We are verifying which transactions were impacted and will communicate any confirmed issues. | Unverified reassurance |
| Who is responsible? | Our focus right now is resolving the outage; a comprehensive review will follow. | Blame or naming individuals |
| When will the service be back up? | We will provide an update by 15:00 UTC. | A fixed ETA |
| Is the system safe now? | We have restored core functionality and are monitoring; we will confirm full safety in our next update. | “Yes” before verification |

---

Neuro

<details><summary>Log</summary>

```
[2026-06-10T17:49:46.283Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T17:49:46.301Z] Loaded the **crisis-comms** skill playbook for this task.
[2026-06-10T17:49:46.301Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T17:50:57.974Z] Hermes responded in 71.7s (1233 chars).
[2026-06-10T17:51:03.603Z] Quality gate: Hermes answer passed (score 0.93).
```
</details>
