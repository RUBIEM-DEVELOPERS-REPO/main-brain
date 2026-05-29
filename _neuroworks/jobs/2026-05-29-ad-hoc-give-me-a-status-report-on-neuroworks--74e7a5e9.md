---
type: job
title: Ad-hoc: Give me a status report on NeuroWorks.
slug: ad-hoc-give-me-a-status-report-on-neuroworks--74e7a5e9
created: 2026-05-29T10:17:30.725Z
jobId: 74e7a5e9-f4f2-48d6-ac61-39b64a286f64
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T10:16:44.388Z
finishedAt: 2026-05-29T10:17:30.724Z
---

# Ad-hoc: Give me a status report on NeuroWorks.

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-29T10:16:44.388Z
- **Finished:** 2026-05-29T10:17:30.724Z
- **Title:** Ad-hoc: Give me a status report on NeuroWorks.

## Inputs
```json
{
  "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a status report on NeuroWorks.",
  "userText": "Give me a status report on NeuroWorks.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Plan
Perform deep web research on NeuroWorks and capture findings.

### Steps
1. ✓ Researching "NeuroWorks status report" — vault + web — `research.deep` (34.7s)
2. ✓ Quality-checking the draft — `quality.check` (5.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**NeuroWorks status report – current evidence**

| Source | What it tells us about RUBIEM’s NeuroWorks platform |
|--------|------------------------------------------------------|
| Vault notes (e.g., `0‑Inbox/202605290926-research-neuroworks-status-report.md`) | Only the title *“Research: NeuroWorks status report”* is present; no substantive content or metrics are included. |
| `_neuroworks/jobs/...‑ad‑hoc‑give‑me‑a‑status‑report‑on‑neuroworks‑…md` (both job files) | These entries record that a deep‑research job was run, but they do not contain the actual findings—just the fact that the job completed. |
| `_neuroworks/jobs/2026‑05‑29‑conduct‑deep‑web‑research‑on‑neuroworks‑and‑capture‑findings‑…md` | Same situation: the job log shows the research was performed, but the extracted data are not shown in the note. |
| `_neuroworks/templates/...‑custom‑you‑are‑operating‑as‑clawbot‑…md` | Contains only the query string “NeuroWorks status report”; no answer is stored. |

**What we can conclude**

- The vault currently holds *metadata* that a status‑report research task was executed on 2026‑05‑29, but the actual status details (e.g., version, feature roadmap, performance metrics, recent releases, user adoption) are **not present** in the accessible notes.
- No internal documentation (e.g., release notes, sprint summaries, system health dashboards) was found in the provided vault excerpts.
- External web sources either describe unrelated entities (the clinical neuropsychology service at neuroworks.net [2] or the EEG software from Natus [3]) or a completely different organization (Cambridge NeuroWorks [1]), which the governance policy explicitly requires us to disregard for this question.

**Next steps**

1. **Locate the detailed status document** – check other vault paths such as `_knowledge/neuroworks-platform.md`, `reports/`, or any recent `status‑*.md` files that might contain the actual findings from the research jobs.
2. **If the data are missing**, run a fresh deep‑web and internal‑vault search for keywords like “NeuroWorks release”, “NeuroWorks roadmap”, “NeuroWorks health check”, or “NeuroWorks version 2026”.
3. **Provide the requested summary** once the relevant information is retrieved.

*At present, the vault does not contain a usable status report for RUBIEM’s NeuroWorks platform.*

<details><summary>Log</summary>

```
[2026-05-29T10:16:44.390Z] Handling this myself — I'm at least as free as my peers (0 vs 0 jobs in progress).
[2026-05-29T10:16:44.390Z] Working as Clawbot — AI agent operator.
[2026-05-29T10:16:45.714Z] Thinking about the best approach…
[2026-05-29T10:16:45.743Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T10:16:50.147Z] Plan ready: 1 step — Perform deep web research on NeuroWorks and capture findings..
[2026-05-29T10:16:50.154Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T10:16:50.155Z] Step 1 of 1: Researching "NeuroWorks status report" — vault + web
[2026-05-29T10:17:24.855Z] All sub-agents finished in 34.7s.
[2026-05-29T10:17:24.857Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T10:17:24.863Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T10:17:24.863Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T10:17:24.863Z] Step 3 of 3: Security-scanning the note
[2026-05-29T10:17:24.863Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T10:17:30.435Z] Wave 1 finished in 5.6s.
[2026-05-29T10:17:30.435Z] All sub-agents finished in 5.6s.
[2026-05-29T10:17:30.435Z] Quality check passed (82%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T10:17:30.435Z] Wrote to your second brain — committing the changes.
[2026-05-29T10:17:30.704Z] Vault commit: done.
[2026-05-29T10:17:30.720Z] Saved this workflow as a reusable template: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool.
[2026-05-29T10:17:30.720Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-05-29T10:17:30.724Z] Filed to your second brain → 0-Inbox/202605291017-curated-give-me-a-status-report-on-neuroworks.md.
```
</details>
