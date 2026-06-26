# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

## 2026-06-25

### Went wrong
- No failures recorded; nothing went wrong.
- No issues detected.
- No issues reported.

### Try next
- 3. Profile the **research.deep** step to see if caching or a faster data source can reduce the 55 s duration.
- 2. Consider assigning a dedicated employee or enabling peer delegation for the daily briefing to parallelize work.
- 1. Investigate why the daily briefing required **508.6 s**—break it into smaller subtasks or optimize the underlying workflow.
- Review skill picker settings for `vault-organization`.
- Investigate why `research.deep` takes so long and optimize or consider retraining it.
- Continue monitoring for future anomalies.
- Keep the current setup as it is working well.

## 2026-06-24

### Went wrong
- No failures to report.

### Try next
- Assign at least one additional employee to share load and reduce single‑point reliance on Sam.
- Investigate the outlier `research.deep` run (65 s) to see if input size or external latency caused the spike.
- Consider creating a template for delegating routine reflection tasks to free up Sam for higher‑impact work.

## 2026-06-23

### Try next
- Add a variety of templates to diversify workload and surface any hidden bottlenecks.
- Activate peer attribution to test delegation flows.
- Schedule additional tasks or enable more employees to generate richer usage data.
- Consider assigning a clerk‑bot to the `research.deep` step to parallelize heavy queries.
- Add at least one employee to the roster to enable peer review scaling for future tasks.
- Monitor `daily-briefing` runtime; if it grows, explore breaking it into smaller sub‑tasks.

## 2026-06-22

### Try next
- Consider assigning a dedicated employee to handle deep research steps to free up local resources.
- Evaluate whether `peer.review` can be parallelized or skipped for low‑risk outputs.
- Cache or pre‑fetch data for `research.deep` to reduce the 86 s runtime.

## 2026-06-21

### Went wrong
- No issues detected in task execution or reliability.

### Try next
- Rotate the employees handling these tasks to ensure even distribution of work.
- Consider training on additional tools or templates if needed.

## 2026-06-20

### Went wrong
- No issues detected in task execution.

### Try next
- Review and possibly refine the `peer.review` process.
- Consider adding a timeout for longer-running tasks like `research.deep`.

## 2026-06-17

### Went wrong
- No failures or issues reported.

### Try next
- Investigate whether `research.deep` can be cached or parallelized to reduce the 45 s runtime.
- Consider delegating occasional tasks to peers to balance load and test peer‑review workflows.

## 2026-06-16

### Try next
- Review template execution times; the `daily‑briefing` and `general‑task` templates are already efficient, so keep them as defaults.
- Consider assigning a second employee to handle research‑intensive tasks if volume increases.
- Investigate whether `research.deep` can be cached or parallelized to reduce its 45 s runtime.

## 2026-06-13

### Went wrong
- None

### Try next
- Continue monitoring for any future tasks.

## 2026-06-12

### Try next
- If future tasks increase, enable peer attribution to distribute load and capture delegation metrics.
- Review the `research.deep` configuration or data sources to try shaving a few seconds off the 32 s step.
- Consider assigning an AI employee to the daily briefing to see if parallelism reduces the 122 s runtime.

## 2026-06-11

### Try next
- Consider increasing the frequency of tool checks for 'research.deep' if it is being used heavily.
- Explore reducing peer load on Neuro by assigning more tasks directly.

## 2026-06-08

### Went wrong
- `fs.read_external` failed 4 of 4 runs (100% failure rate), halting any external file reads.
- `email.send` failed 1 of 8 runs (13% failure rate).

### Try next
- 4. Investigate why `research.deep` spikes to 92 s and explore caching or parallelization for deep research steps.
- 3. Shift 10–15 low‑complexity tasks from Neuro to underutilized agents (e.g., Dale, Dani) to balance load.
- 2. Add a retry wrapper around `email.send` to mitigate the 13% failure rate.
- 1. Replace or reconfigure `fs.read_external` with a more reliable file access method; consider caching needed data locally.
