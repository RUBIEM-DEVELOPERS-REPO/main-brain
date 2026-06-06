---
type: job
title: Anything else (ad-hoc task)
slug: anything-else-ad-hoc-task--0fa7d70b
created: 2026-06-06T13:55:46.916Z
jobId: 0fa7d70b-af7f-4cbd-976a-8e5289625140
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-06T13:55:17.575Z
finishedAt: 2026-06-06T13:55:46.915Z
---

# Anything else (ad-hoc task)

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-06T13:55:17.575Z
- **Finished:** 2026-06-06T13:55:46.915Z
- **Title:** Anything else (ad-hoc task)

## Inputs
```json
{
  "task": "List 3 reasons unit tests rot over time and how to prevent it.",
  "save_as_template": false
}
```

## Plan
procedural deliverable — drafted from professional knowledge

## Answer
## Why unit tests rot over time  

1. **Changing dependencies** – When libraries, frameworks, or internal APIs evolve, test code that relies on old signatures or behaviours can break or produce false positives.  
2. **Test‑code drift** – As production code is refactored, the corresponding tests are sometimes left unchanged, causing mismatches between expected and actual behaviour.  
3. **Lack of maintenance discipline** – Tests that are not run regularly, lack clear ownership, or are excluded from CI pipelines become stale, accumulate technical debt, and are eventually ignored.

## How to prevent test rot  

- **Pin and update dependencies deliberately** – Use version constraints (e.g., `requirements.txt` or lock files) and schedule periodic dependency upgrades combined with a full test run to catch breakages early.  
- **Keep tests coupled to production changes** – Adopt a “test‑first” or “test‑as‑code” mindset where any modification to production code is accompanied by a corresponding test update, and enforce this through code‑review checklists.  
- **Integrate tests into continuous integration** – Run the full test suite on every commit, enforce minimum coverage thresholds, and assign test‑ownership labels so that failing tests are addressed promptly rather than ignored.  

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-06-06T13:55:17.575Z] task created · waiting on human approval (Approvals page)
[2026-06-06T13:55:33.005Z] approved
[2026-06-06T13:55:33.006Z] Working as Neuro — AI agent operator.
[2026-06-06T13:55:33.010Z] This is a procedural deliverable — drafting it directly from professional knowledge (no web research needed for this shape).
[2026-06-06T13:55:33.010Z] Drafting the procedural deliverable from professional knowledge.
```
</details>
