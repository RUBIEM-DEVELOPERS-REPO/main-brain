---
type: job
title: Ad-hoc: Give me a 5-step numbered checklist for onboarding a new mid
slug: ad-hoc-give-me-a-5-step-numbered-checklist-for-onboarding-a--cbfd03e5
created: 2026-05-26T21:41:47.574Z
jobId: cbfd03e5-2336-45fd-87d2-c31a6512bfec
status: failed
template: general-task
persona: none
personaName: 
startedAt: 2026-05-26T21:41:04.664Z
finishedAt: 2026-05-26T21:41:47.574Z
---

# Ad-hoc: Give me a 5-step numbered checklist for onboarding a new mid

- **Status:** failed
- **Template:** general-task
- **Started:** 2026-05-26T21:41:04.664Z
- **Finished:** 2026-05-26T21:41:47.574Z
- **Title:** Ad-hoc: Give me a 5-step numbered checklist for onboarding a new mid

## Inputs
```json
{
  "task": "Give me a 5-step numbered checklist for onboarding a new mid-market customer to NeuroWorks. Each step needs an owner role and a 'done when' criterion.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Give me a 5-step numbered checklist for onboarding a new mid-market customer to NeuroWorks. Each step needs an owner role and a 'done when' criterion.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer"
}
```

## Plan
Research onboarding best practices, then generate a 5‑step checklist with owners and done‑when criteria.

### Steps
1. ✓ Researching "onboarding new mid‑market customer NeuroWorks best practices" — vault + web — `research.deep` (35.4s)
2. · Thinking about it — `ollama.generate` (0.0s)
    > Generate final answer based on captured research.

## Error
```
Cannot read properties of undefined (reading 'slice')
```

<details><summary>Log</summary>

```
[2026-05-26T21:41:04.665Z] Handling this myself — I'm at least as free as my peers (0 vs 0 jobs in progress).
[2026-05-26T21:41:04.666Z] Thinking about the best approach…
[2026-05-26T21:41:04.694Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-26T21:41:12.202Z] Plan ready: 2 steps — Research onboarding best practices, then generate a 5‑step checklist with owners and done‑when criteria..
[2026-05-26T21:41:12.206Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-26T21:41:12.206Z] Step 1 of 2: Researching "onboarding new mid‑market customer NeuroWorks best practices" — vault + web
[2026-05-26T21:41:47.574Z] error: Cannot read properties of undefined (reading 'slice')
```
</details>
