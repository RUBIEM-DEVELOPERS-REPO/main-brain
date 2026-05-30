---
title: "Progression — context-rich probes + grader + 190-template sweep (2026-05-30)"
date: 2026-05-30
tags: [progress, neuroworks, clawbot, grader, stress-test, speed, daily-log]
session_focus: ["probe enrichment", "permanent grader context", "190-template sweep", "speed measurement"]
related:
  - "[[0-Inbox/2026-05-28-neuroworks-session-report.md]]"
  - "[[0-Inbox/2026-05-27-progress-ui-polish-taste-skill-grader-sweep.md]]"
  - "[[0-Inbox/2026-05-27-progress-firecrawl-validator-reflection-lineage.md]]"
  - "[[_neuroworks/reflections/2026-05-29.md]]"
---

# Progression — context-rich probes + grader + 190-template sweep

Enriched the probes and the grader with task context (combine the template's
own `role + title + description` fields, no invented intent), made the
`quality.check` `context` parameter a permanent part of the primitive (live QA
gate benefits too), added per-template speed tracking, and re-ran the full
190-template sweep across both clawbots. The run produced one strong piece of
signal and one regression worth naming honestly.

## Shipped

- **Grader: permanent `context` arg on `quality.check`** ([`server/src/lib/primitives.ts`](C:\Users\Arthur Magaya\Documents\GitHub\clawbot\server\src\lib\primitives.ts)).
  - New optional `context` param; the scorer now sees a "Task context (what
    the asker actually wanted)" block and is told to judge `persona_fit` and
    completeness against that stated intent, not a literal reading of the
    terse task line. `classifyDeliverable` reads `task + context` so the
    deliverable signal a short task omits is picked up.
  - Affects the live QA gate, not just the harness.
- **`/api/templates/grade` forwards `context`** to the primitive
  ([`server/src/routes/templates.ts`](C:\Users\Arthur Magaya\Documents\GitHub\clawbot\server\src\routes\templates.ts)).
- **`/api/templates/run/:id` accepts an optional `contextHint`** in the
  request body that gets appended to `taskText` as `Context: …`. Absent →
  behaviour unchanged. Lets callers (the harness) send a richer probe to the
  clawbot run, not only to the grader.
- **Harness** ([`all_templates_stress.py`](C:\Users\Arthur Magaya\Documents\Digital-Force\.claude\all_templates_stress.py)).
  - Builds the probe from each template's own stored fields (no invented
    intent), sends it as `contextHint` to the run and `context` to the grader.
  - Records per-template `run_seconds`; summary now reports `speed` (mean /
    median / p95 / min / max / per-clawbot mean) alongside pass rate.
- Server typecheck `TSC_EXIT 0`. Both clawbots verified to accept the new
  `context` path live.

## Sweep results — 190 templates, both clawbots, concurrency 4

### Headline

|                | This run (richer probes) | Baseline (run1, terse probes) |
|----------------|--------------------------|-------------------------------|
| Total          | 190                      | 190                           |
| Graded         | **96**                   | 187                           |
| Passed         | 67                       | 130                           |
| Pass rate      | **0.698**                | 0.695                         |
| Mean score     | **0.824**                | 0.822                         |
| Broken         | 0                        | 0                             |
| Elapsed        | 225 min                  | ~90 min                       |

The pass rate and mean score among the **graded** subset are identical to
baseline within noise. The context enrichment did not lift quality.

What it *did* do: **inflate runtime**, which pushed 84 templates past the
240 s harness timeout, dropping graded from 187 → 96.

### By deliverable class (grader-assigned)

| Class       | n  | Passed | Pass rate | Mean  |
|-------------|----|--------|-----------|-------|
| research    | 73 | 48     | **0.658** | 0.804 |
| creative    | 15 | 13     | 0.867     | 0.915 |
| procedural  | 6  | 5      | 0.833     | 0.873 |
| code        | 2  | 1      | 0.500     | 0.715 |
| _ungraded   | 94 | —      | —         | —     |

Research is clearly the weakest class — same pattern every prior session has
named. Non-research deliverables (creative / procedural) sit at 83-87 % pass.

### Speed

- Median 176 s · mean 262 s · p95 244 s · **max 5 411 s** (~90 min on one
  template).
- Both clawbots ~equal: primary mean 260 s, worker 264 s.
- Four catastrophic outliers (5 191 / 5 243 / 5 299 / 5 411 s) — all
  `custom-product-manager-*` templates.

### Why the 84 timeouts: empty-plan templates re-plan under richer probes

- **151 of 190 templates (79 %) have empty `plan.steps`** — they go through
  the `generalTaskRunner` branch in `/api/templates/run/:id`, which calls
  `planAndExecute` **without** `preplan` and re-plans every run.
- Of the 84 timed-out runs, **74 (88 %) were empty-plan templates**.
- Among runs that *did* succeed, mean `run_seconds` was **98 s for empty-plan
  vs 60 s for preplan** (-39 % faster for preplan).
- All four 5 000 s+ outliers were empty-plan templates.

A longer probe → a planner that plans more work. The 39 preplan templates
that replay a saved plan were fine; the 151 that re-plan inflated.

## What this actually tells us

1. **The grader change is correct and harmless.** Pass rate and mean among
   the graded subset are unchanged with vs without `context` (run1 187 /
   0.695 / 0.822 → this 96 / 0.698 / 0.824). The new `context` field doesn't
   distort scoring — it just gives the live QA gate richer framing when
   callers choose to pass it. Safe to leave on in production.
2. **Probe enrichment via the run endpoint regressed empty-plan templates.**
   The `contextHint` change appended a `Context:` block to `taskText` *before*
   `generalTaskRunner` re-plans. Longer prompt → broader plan → catastrophic
   tail (5 000 s outliers) and 74 timeouts. The empty-plan branch should not
   receive `contextHint` (or should receive a far shorter form). Gate it.
3. **The ~70 % pass-rate ceiling is real and the lever is not probe-richness.**
   Two consecutive runs at ~69.5–69.8 % with very different probe sizes is
   strong evidence that the remaining gap is *not* knob-tunable from the
   prompt side. The lever sits with the underlying deliverables: research
   grounding (worst class, 65.8 %) and data-absent templates.
4. **Research is the consistent weakest class.** Backs grounding work, not
   more prompt tuning.

## Next session — 5 priorities, each backed by this run's data

In priority order. The first is a regression this session introduced.

### 1. Gate `contextHint` to preplan templates only — and investigate the 4 PM 5 000 s blowups

- **Evidence:** 74 of 84 timeouts and all 4 catastrophic outliers (5 191 /
  5 243 / 5 299 / 5 411 s) are in the empty-plan / re-plan branch. Preplan
  templates were fine (60 s mean vs 98 s, and none hit the timeout cliff).
- **Action:** in [`server/src/routes/templates.ts`](C:\Users\Arthur Magaya\Documents\GitHub\clawbot\server\src\routes\templates.ts),
  only append `Context:` to `taskText` in the **preplan** branch; the
  empty-plan branch should call `generalTaskRunner` with the bare
  `origin.task` (the planner doesn't need extra context — it has its own).
- **Bonus:** the four PM templates that hit ~88 min each are almost certainly
  a runaway retry loop (likely OpenRouter 429 with long backoff × many
  retries). Cap planner-step wall time. Connects to the recurring
  `quality.check` 5 464 s outlier the reflection just named.
- This also closes a long-standing recurring theme: every reflection from
  05-24 onward has named the `general-task` / re-plan path as the failure
  hotspot (`undefined.slice` crash, slow tail). Same root, different symptom.

### 2. Make the grader trustworthy — calibrate + pin determinism

- **Evidence:** the run-to-run "pass rate regression" stories
  (run1 0.822 → run2 0.817 → this run 0.824) are all within ±0.01 — at the
  grader's own noise floor. We've already debugged one false regression
  (run2's 40 grade-call 500s). Without determinism the metric can't catch
  small real changes.
- **Action:** (a) hand-score a gold set of ~15-20 answers, treat that as the
  grader's calibration anchor; (b) pin Ollama temperature to 0 for the
  scorer; (c) optionally average 2 grader passes.
- Today's grader is the entire QA signal — drift = silent decay.

### 3. Attack grounding — vault index cold-start + `_neuroworks/jobs/` exclusion

- **Evidence:** research class scored 65.8 % pass / 0.804 mean — the worst
  class by a wide margin. Same pattern every prior reflection named
  ("Denmark hotel", "Natus EEG NeuroWorks"). Firecrawl + source-validator +
  governance helped but the floor is still here.
- **Action:** (a) warm the MiniSearch index in the boot path, not lazily
  (docs:0 / ageMs −1 under tsx-watch is the cold-cache that drives
  wrong-product failures, named in 2026-05-27 and still latent); (b) exclude
  `_neuroworks/jobs/` from `research.deep`'s vault search so it doesn't cite
  its own past job outputs as "sources" (chat already does this; research
  doesn't).

### 4. Speed — move the rest of the QA gate fully local + cap grader wall time

- **Evidence:** mean 262 s / max 5 411 s. The reflection's slowest step
  was a **5 464 s `quality.check`** (~91 min). That isn't graded thinking
  time — it's OpenRouter free-tier 429 + retry/backoff + retry, the same
  pattern every prior reflection has shown (`ollama.generate` 22-28 % fail,
  `peer.review` 18 %, `quality.check` 13 % across past windows).
- **Action:** we already moved `quality.check` to local-Ollama fallback on
  OR failure. Do the same for `peer.review` and `ollama.generate`. Cap
  grader wall time at 300 s with explicit timeout. Lines up with item #1's
  PM-blowup retry-loop hypothesis.

### 5. Make quality tracking continuous, not manual

- **Evidence:** we just ran this sweep by hand for the third time. The
  platform already has scheduled tasks + teams + the email bridge to send
  reports out.
- **Action:** promote this stress harness into a built-in **scheduled
  "quality regression" team** that runs nightly (or weekly), writes the
  summary to the vault, and emails it. Add a rolling trendline note
  (`_neuroworks/quality-trend.md`) that appends pass-rate / mean-score /
  median-speed / p95-speed each run, so the trajectory is visible without
  hand-comparing JSONL files.

## Carryover from prior reflections — still worth closing

These have appeared across multiple reflections and stayed open:

- **`byPersona` blind spot.** `reflection.ts` reads `r.persona?.name` now,
  but persistence likely still doesn't carry persona into the JSONL —
  reflections' persona-attribution stays blank. Since the product *is* a
  persona workforce, this is the lens we need most for items #1–#4.
- **Confirm B1 grader-hoisting actually landed** so `r.quality / security /
  review` surface in the UI rather than buried in `r.runs[i].result`.
- **`general-task` `undefined.slice` crash** named in every reflection from
  05-24 → 05-27. The 2026-05-29 reflection shows 0 failures across 782
  tasks, which is encouraging — confirm with a targeted repro that the path
  is genuinely fixed and not just not-exercised in the last window.

## Files touched this session

- [`server/src/lib/primitives.ts`](C:\Users\Arthur Magaya\Documents\GitHub\clawbot\server\src\lib\primitives.ts) —
  `quality.check` `context` arg + scoring prompt + `classifyDeliverable`
  reading task + context.
- [`server/src/routes/templates.ts`](C:\Users\Arthur Magaya\Documents\GitHub\clawbot\server\src\routes\templates.ts) —
  `/grade` forwards `context`; `/run/:id` accepts `contextHint`. **(Note for
  next session: gate `contextHint` to preplan branch only — see item #1.)**
- [`all_templates_stress.py`](C:\Users\Arthur Magaya\Documents\Digital-Force\.claude\all_templates_stress.py) —
  richer probe from stored fields, per-template `run_seconds`, speed stats
  in summary.

## Vault refs

- Sweep summary: [`stress-all-summary.json`](C:\Users\Arthur Magaya\Documents\Digital-Force\.claude\stress-all-summary.json).
  Baseline retained at `stress-all-summary-prev.json`. Run-2 backup at
  `stress-all-results-run2.jsonl`, run-1 backup at
  `stress-all-results-run1.jsonl`.
- Server reflection (2026-05-29 window):
  [[_neuroworks/reflections/2026-05-29.md]] — 782 tasks · 100 % success ·
  0 failures · independently flagged the `quality.check` 5 464 s outlier
  this session's data also surfaced.
