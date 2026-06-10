---
type: job
title: Ad-hoc: Summarize this P&L: revenue 1.2M, COGS 340k, opex 600k, net
slug: ad-hoc-summarize-this-p-l-revenue-1-2m-cogs-340k-opex-600k-n-83a9f655
created: 2026-06-10T18:06:37.745Z
jobId: 83a9f655-96a5-4426-98d0-3888878413a3
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:05:24.491Z
finishedAt: 2026-06-10T18:06:37.745Z
---

# Ad-hoc: Summarize this P&L: revenue 1.2M, COGS 340k, opex 600k, net 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:05:24.491Z
- **Finished:** 2026-06-10T18:06:37.745Z
- **Title:** Ad-hoc: Summarize this P&L: revenue 1.2M, COGS 340k, opex 600k, net 

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSummarize this P&L: revenue 1.2M, COGS 340k, opex 600k, net 260k vs prior 180k.\n\nInterpretation: intent=summarize, target=\"this P&L: revenue 1.2M, COGS 340k, opex 600k, net 260k vs prior 180k\".\n\nDeliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading \"TL;DR\" — say what it actually IS. No preamble.",
  "userText": "Summarize this P&L: revenue 1.2M, COGS 340k, opex 600k, net 260k vs prior 180k.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "summarize",
  "intentTarget": "this P&L: revenue 1.2M, COGS 340k, opex 600k, net 260k vs prior 180k",
  "personaId": "clawbot"
}
```

## Answer
**Bottom line:** Net profit rose to $260 k, a 44 % increase from the prior period, thanks to a 71.7 % gross margin and disciplined operating spend.  

- Revenue: $1.2 M; gross profit: $860 k (gross margin ≈ 71.7 %).  
- Operating expenses: $600 k; operating income: $260 k (operating margin ≈ 21.7 %).  
- Net margin: ≈ 21.7 % of revenue.  
- Net profit up $80 k, or +44 %, versus the prior period’s $180 k.  
- Opex consists of 50 % of revenue, indicating tight cost control.

<details><summary>Log</summary>

```
[2026-06-10T18:05:24.492Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T18:05:24.515Z] Loaded the **financial-statement-summary** skill playbook for this task.
[2026-06-10T18:05:24.515Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:06:28.659Z] Hermes responded in 64.1s (482 chars).
[2026-06-10T18:06:37.745Z] Quality gate: Hermes answer passed (score 1.00).
```
</details>
