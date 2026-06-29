# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

## 2026-06-28

### Went wrong
- No issues detected in task execution.
- No issues reported.
- No failures or issues recorded.
- No tasks failed or were rejected.
- No issues detected.
- No failures to report.

### Try next
- Consider if there's a way to optimize or parallelize this task.
- Investigate why `research.deep` is consistently taking so long.
- Enable tool logging to gather reliability metrics for future analysis.
- Register active employees on the clock to capture utilization data.
- If future `research.deep` calls become frequent, explore parallelization to keep overall latency low.
- Review the `daily-briefing` workflow to identify bottlenecks; consider breaking it into smaller sub‑tasks or caching repeated data.
- Consider allocating a dedicated clawbot for deep research to parallelize that step in future runs.
- Investigate caching or pre‑fetching for research.deep to reduce the ~100 s runtime.
- Monitor for any future task attempts to ensure the system remains stable.
- Consider adding a new template if more complex searches are expected.
- Investigate whether the `research.deep` call can be cached or parallelized to reduce the 99 s runtime.
- Consider adding a secondary, faster knowledge source for the daily briefing to offset the long research step.
- Review the `vault-organization` skill picker score (15, weak match) and test a stronger match to see if it improves efficiency.
- Investigate why the `research.deep` job takes so long, possibly optimizing or adjusting its parameters.
- Consider reducing the number of tasks per day if they are consistently taking longer than usual.
- Investigate the `daily-briefing` process to identify why it runs ~233 s and see if steps can be parallelized or streamlined.
- Consider adding at least one employee to the clock to capture utilization metrics for future capacity planning.
- If `research.deep` remains the slowest step, test alternative data sources or caching to reduce its runtime.

## 2026-06-27

### Went wrong
- None

### Try next
- Monitor tool runs to identify any potential bottlenecks.
- Collect more data on peer attribution for better insights.

## 2026-06-26

### Went wrong
- No failures or rejections to report.

### Try next
- Monitor the daily briefing duration; if it consistently exceeds 500 s, consider splitting the briefing into smaller chunks.
- Introduce a peer delegation for at least one task to test load distribution.
- Cache or pre‑warm the research.deep tool to reduce the 55 s runtime.
- Retire persona with weak match correlation (`vault-organization`).
- Consider optimizing the `research.deep` task further.
- Investigate why the research.deep task is taking so long and consider optimizing or changing its parameters.
- Investigate why 'research.deep' is taking so long and consider optimizing or changing its parameters.
- Review if any of the other tools could be used more frequently for quicker results.
- Investigate whether `research.deep` can be parallelized or cached to reduce the 55 s runtime.
- Consider adding an employee or delegating to a peer for research tasks to spread load if volume increases.

## 2026-06-25

### Went wrong
- No issues reported; all runs succeeded.
- No failures recorded; nothing went wrong.
- No failures recorded; nothing to report.

### Try next
- Monitor `research.deep` usage; if more deep‑research steps are added, plan for potential scaling.
- Consider assigning an AI employee to the daily‑briefing task to offload local processing.
- Investigate the daily‑briefing template to see if its runtime can be reduced (e.g., break into smaller steps or cache data).
- Monitor `research.deep` usage; if its runtime grows, consider parallelizing its sub‑steps.
- Encourage limited peer delegation for longer tasks to distribute load and potentially reduce wall‑clock time.
- Investigate the `daily-briefing` template to identify bottlenecks and consider caching or breaking it into smaller subtasks.
- Monitor the daily briefing duration; if it consistently exceeds 8 min, explore template optimization.
- Introduce peer delegation for at least one task to test collaborative load balancing.
- Consider offloading `research.deep` to a dedicated clawbot or parallel instance to reduce the 55 s latency.
- Keep the current setup as it is working well.
- Continue monitoring for future anomalies.
- Investigate why `research.deep` takes so long and optimize or consider retraining it.
- Review skill picker settings for `vault-organization`.
- 1. Investigate why the daily briefing required **508.6 s**—break it into smaller subtasks or optimize the underlying workflow.
- 2. Consider assigning a dedicated employee or enabling peer delegation for the daily briefing to parallelize work.
- 3. Profile the **research.deep** step to see if caching or a faster data source can reduce the 55 s duration.
- Investigate why `research.deep` took 55 s and consider caching or splitting the query to reduce runtime.
- If long‑running daily briefings are common, explore breaking them into smaller subtasks or allocating a dedicated worker to avoid blocking.
- Record employee clock‑ins to enable peer attribution analysis for future workload balancing.
- Investigate why the daily‑briefing step takes ~ 8.5 min; consider breaking it into smaller subtasks or optimizing its template.
- Enable employee clock‑in tracking to capture human resource usage for future load balancing.
- If longer runtimes become a pattern, set a threshold alert (e.g., > 300 s) to flag unusually slow jobs.

## 2026-06-24

### Try next
- Consider creating a template for delegating routine reflection tasks to free up Sam for higher‑impact work.
- Investigate the outlier `research.deep` run (65 s) to see if input size or external latency caused the spike.
- Assign at least one additional employee to share load and reduce single‑point reliance on Sam.

## 2026-06-23

### Try next
- Monitor `daily-briefing` runtime; if it grows, explore breaking it into smaller sub‑tasks.
- Add at least one employee to the roster to enable peer review scaling for future tasks.
- Consider assigning a clerk‑bot to the `research.deep` step to parallelize heavy queries.
- Schedule additional tasks or enable more employees to generate richer usage data.
- Activate peer attribution to test delegation flows.
- Add a variety of templates to diversify workload and surface any hidden bottlenecks.

## 2026-06-22

### Try next
- Cache or pre‑fetch data for `research.deep` to reduce the 86 s runtime.
- Evaluate whether `peer.review` can be parallelized or skipped for low‑risk outputs.
- Consider assigning a dedicated employee to handle deep research steps to free up local resources.

## 2026-06-21

### Went wrong
- No issues detected in task execution or reliability.

### Try next
- Consider training on additional tools or templates if needed.
- Rotate the employees handling these tasks to ensure even distribution of work.

## 2026-06-20

### Try next
- Consider adding a timeout for longer-running tasks like `research.deep`.
- Review and possibly refine the `peer.review` process.

## 2026-06-17

### Went wrong
- No failures or issues reported.

### Try next
- Consider delegating occasional tasks to peers to balance load and test peer‑review workflows.
- Investigate whether `research.deep` can be cached or parallelized to reduce the 45 s runtime.

## 2026-06-16

### Try next
- Investigate whether `research.deep` can be cached or parallelized to reduce its 45 s runtime.
- Consider assigning a second employee to handle research‑intensive tasks if volume increases.
- Review template execution times; the `daily‑briefing` and `general‑task` templates are already efficient, so keep them as defaults.

## 2026-06-13

### Try next
- Continue monitoring for any future tasks.

## 2026-06-12

### Try next
- Consider assigning an AI employee to the daily briefing to see if parallelism reduces the 122 s runtime.
- Review the `research.deep` configuration or data sources to try shaving a few seconds off the 32 s step.
- If future tasks increase, enable peer attribution to distribute load and capture delegation metrics.

## 2026-06-11

### Try next
- Explore reducing peer load on Neuro by assigning more tasks directly.
- Consider increasing the frequency of tool checks for 'research.deep' if it is being used heavily.

## 2026-06-08

### Went wrong
- `email.send` failed 1 of 8 runs (13% failure rate).
- `fs.read_external` failed 4 of 4 runs (100% failure rate), halting any external file reads.

### Try next
- 1. Replace or reconfigure `fs.read_external` with a more reliable file access method; consider caching needed data locally.
- 2. Add a retry wrapper around `email.send` to mitigate the 13% failure rate.
- 3. Shift 10–15 low‑complexity tasks from Neuro to underutilized agents (e.g., Dale, Dani) to balance load.
- 4. Investigate why `research.deep` spikes to 92 s and explore caching or parallelization for deep research steps.
