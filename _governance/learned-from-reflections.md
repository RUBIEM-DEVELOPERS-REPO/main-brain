# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

## 2026-07-10

### Went wrong
- One research.deep step took 127s (job 8321714b) — 3x the tool's 45.7s average.
- fs.find_in failed 2 of 6 runs; ollama.generate failed 2 of 12.
- vault.read failed both of its 2 runs (100% failure rate).
- email.send failed 6 of 8 runs (75% failure rate), and the runs that did work averaged 26.4s with two jobs hitting 103–105s. Tasks succeeded anyway, likely via retries — but this tool is barely functional.

### Try next
- Rebalance delegation between managed-worker-7473 and 7474, or confirm the 6:1 split is intentional before 7473 becomes a bottleneck.
- Enrich skill descriptions or add embeddings so the picker scores above bare keyword matches — current avg score of 15 across all 5 skills is fragile.
- Fix or disable vault.read (0/2). If tasks fall back to vault.search (8/8 clean), consider making that the default read path.
- Investigate email.send first — 75% failure over 8 runs is the day's worst signal. Check credentials/rate limits, or route email through a different connector.

## 2026-07-09

### Went wrong
- `db.query` failed 4 of 4 runs — 100% failure rate. Tasks still completed, meaning they routed around missing data rather than surfacing the problem.
- `db.describe_table` also failed 2 of 2. The entire DB read path is broken, likely a connection or credentials issue (all failures at 0s suggests instant errors, not timeouts).
- `security.scan` shows 5 runs at 0s avg — likely a no-op. Verify it's actually scanning.

### Try next
- Fix the DB connection: check credentials/config for `db.query` and `db.describe_table`. 6 of 6 combined runs failed instantly.
- Make DB failures fail loud — a task shouldn't report success when 100% of its data queries error out. Flip on tool-failure escalation for `db.*`.
- Audit `security.scan` — 0s average across 5 runs suggests it's returning without doing work.
- Strengthen the `vault-organization` skill trigger beyond keywords, or accept a weak-match warning threshold below score 15.

## 2026-07-08

### Went wrong
- Two email.send steps took over 30 seconds each.
- One general-task template failed (1x).

### Try next
- Investigate why Research.deep steps are so slow and consider reducing their frequency or complexity.
- Improve email.send performance by optimizing templates or increasing worker capacity.

## 2026-07-07

### Went wrong
- Peer.review and quality.check both experienced multiple failures (45% failure rate).
- Two general-task templates timed out due to peer timeouts.

### Try next
- Increase timeout settings for peer-review jobs.
- Optimize or replace the fs.read_external tool due to high failure rate (31%).
- Improve picker scores for email-writing and vault-organization templates.

## 2026-07-06

### Went wrong
- No issues detected in task execution.

### Try next
- Consider reducing the load on the `peer.review` task since it had a high error rate.
- Investigate why `research.deep` is taking so long and consider optimizing or adjusting its parameters.

## 2026-07-04

### Went wrong
- No issues identified from the provided data.

### Try next
- Continue monitoring tool reliability, especially ollama.generate.
- Consider reducing the number of peer reviews if they are not adding value.

## 2026-07-03

### Went wrong
- quality.check is slow when it runs long: 76s on jobs `a63edd40` and `c81ea69b`, driving avg to 30.6s.
- peer.review failed 1 of 6 runs (17%).
- One general-task died on "fetch failed" — a network-level error, not logic.
- ollama.generate failed 4 of 5 runs (80% failure rate). This is the worst tool on the board and worth immediate attention.
- `quality.check` is a bottleneck — 171s on jobs `289d9abc` and `be23572f`, and 76s on two more. Four of the eight slowest steps are this one tool.
- `general-task` is the only failing template: 2 of 16 runs failed, and it's slow (avg 134.4s).
- `ollama.generate` failed 4 of 5 runs (80% failure rate). This is the worst tool on the board and likely behind the 2x "fetch failed" errors on the `general-task` template.
- `quality.check` is the bottleneck: 171s on two jobs (289d9abc, be23572f) and an 86.5s average — it dominates the 134.4s general-task average.
- `general-task` was the only failing template: 2 of 16 runs died on "fetch failed" — likely network flakiness in an upstream fetch, not logic errors.
- `ollama.generate` failed 4 of 5 runs (80% failure rate). It's failing fast (0.9s avg), which suggests a connection or model-load issue, not slow generation.
- quality.check is the pipeline bottleneck: 98.9s avg, peaking at 171s twice (jobs 289d9abc, be23572f) — it dominates the general-task 146.9s average.
- peer.review failed 1 of 5 runs (20%).
- insights:general-task had the worst kind-level record: 2 of 9 failed.
- ollama.generate failed 3 of 3 runs (100% failure, 0s avg — likely failing before execution). This is almost certainly behind the 2 "fetch failed" errors on general-task.
- quality.check is a major latency drag: 171s on two jobs (289d9abc, be23572f), avg 98.9s across 5 runs — driving general-task's 157.5s average.
- ollama.generate failed 2 of 2 runs — 100% failure rate, both surfacing as "fetch failed" in the general-task template. That's the entire source of yesterday's 2 task failures.
- peer.review shows a 20% failure rate (1 of 5 runs), even though all peer:delegate tasks ultimately succeeded — likely a retry masking the failure.
- 2 of 6 insights:general-task runs failed, both with "fetch failed". That's the only failure pattern, and it's concentrated in one template.
- quality.check is a bottleneck: 98.9s average, with two runs at 171s each (jobs 289d9abc, be23572f).
- peer.review had a 20% failure rate (1 of 5 runs), the least reliable tool yesterday.
- 2 of 6 insights:general-task runs failed, both on "fetch failed" — the only failure pattern of the day.
- quality.check is the slowest step by far: 171s twice, 76s twice, averaging 98.9s — it dominates the 181.5s general-task average.
- peer.review failed 1 of 5 runs (20%), the only tool with a nonzero failure rate.
- 2 of 6 insights:general-task runs failed, both with "fetch failed" — a network/connectivity error, not a logic problem.
- quality.check is the pipeline bottleneck: 171s twice (jobs 289d9abc, be23572f), 76s twice more — averaging 98.9s vs ~30s for research.deep.
- 2 of 6 insights:general-task runs failed, both with "fetch failed" on the general-task template — a network/upstream issue, not logic.
- No significant failures or errors reported.
- Peer review took an average of 35 seconds, which could be optimized for faster task delegation.
- 2 of 6 insights:general-task runs failed, both with "fetch failed" — likely a network or endpoint issue, not logic.
- peer.review had a 20% failure rate (1 of 5 runs), the only unreliable tool yesterday.
- quality.check is the dominant time sink: 171s twice, 76s twice — it's why general-task averages 181.5s.
- Both failures were "fetch failed" errors on the general-task template (2 of 11 runs, 18% failure rate). Likely a network or endpoint issue, not logic.
- peer.review hit a 20% failure rate (1 of 5 runs) despite all peer:delegate tasks succeeding — a retry may be masking it.
- quality.check is the dominant latency cost: 171s on two jobs (289d9abc, be23572f), avg 98.9s across 5 runs. It drives general-task's 181.5s average.
- 2 of 6 insights:general-task runs failed, both on "fetch failed" — a network/upstream issue, not logic. That's the only failure mode yesterday.
- peer.review hit a 20% failure rate (1 of 5 runs) and averaged 25s.
- quality.check is the slowest step by far: 171s twice (jobs 289d9abc, be23572f), 76s twice more. It drags general-task avg to 181.5s.
- 2 of 7 insights:general-task runs failed, both with "fetch failed" — a network/connectivity error, not logic.
- ollama.generate failed its only run (100% failure rate). Likely the source of at least one "fetch failed".
- ollama.generate failed 2 of 2 runs — 100% failure, both "fetch failed" on the general-task template. This accounts for both task failures.
- quality.check is the biggest time sink: 171s twice, 76s twice, dragging general-task to a 157.5s average.
- `ollama.generate` failed 4 of 5 runs (80% failure rate). It fails fast (0.9s avg), suggesting a connection or model-load issue, not a generation problem.
- 2 `general-task` runs died on "fetch failed" — likely the same ollama/network root cause.
- `quality.check` is the slowest step in the pipeline: 171s on two jobs, 76s on two more, 86.5s average. It's dominating general-task runtime (134.4s avg total).
- ollama.generate failed 4 of 5 runs (80%). It fails fast (avg 0.9s), so this looks like a connectivity or model-load issue, not generation quality.
- Both task failures were "fetch failed" on the general-task template (2 of 16 runs) — likely the same ollama/network root cause.
- `ollama.generate` failed 4 of 5 runs (80%), failing fast at ~0.9s avg — likely a connectivity or model-availability issue, not workload.
- Both task failures were "fetch failed" errors on the `general-task` template (2 of 16 runs).
- `peer.review` failed 1 of 6 runs (17%).
- `quality.check` is the pipeline bottleneck: 86.5s avg, with two runs hitting 171s (jobs 289d9abc, be23572f).

### Try next
- Distribute delegations beyond managed-worker-7473, or add a second peer, to reduce concentration risk.
- Profile quality.check on the two 76s jobs; if the slow path is deep-research payloads, cap input size or run it async.
- Add a retry-with-backoff on general-task fetches to absorb transient "fetch failed" errors.
- Investigate or replace ollama.generate — check model availability and endpoint config. At 80% failure and 0.9s avg, it's likely failing fast on connection, not generation.
- Fix duration logging for `reflection:daily` so avg times are meaningful, and consider throttling reflection frequency (24/day is noise).
- Profile `quality.check` — cache or parallelize it; at 86.5s average it dominates general-task runtime.
- Add retry-with-backoff on `general-task` fetch calls before failing the whole task.
- Investigate or replace `ollama.generate` — check the Ollama endpoint health; a 4/5 failure rate with "fetch failed" smells like a connectivity or model-loading issue, not a prompt problem.
- Fix the duration telemetry for `reflection:daily` and 0s tools so tomorrow's stats are trustworthy.
- Profile `quality.check`; if the 171s runs are re-checking the same content twice (289d9abc and be23572f show identical timings), consider caching or deduping.
- Add a retry with backoff to the fetch step in `general-task` — both failures were transient "fetch failed" errors.
- Investigate `ollama.generate` first: check the Ollama endpoint is reachable and the model is loaded. 4/5 fast failures points to config, not workload.
- Investigate the negative duration on reflection:daily timing instrumentation.
- Profile quality.check — 171s on 2 jobs suggests it hangs on certain inputs; consider a timeout or caching.
- Add a retry-with-backoff on general-task fetch steps so 2 transient failures don't sink runs.
- Fix or replace ollama.generate: check the endpoint/connectivity (0s avg + "fetch failed" points to a dead connection, not model issues). Consider a fallback generator until resolved.
- Fix the reflection:daily timing metric — negative average duration means instrumentation is broken.
- Investigate why quality.check hits 171s on some jobs vs 76s on others; consider a timeout or lighter check tier for routine tasks.
- Add a fallback generator for general-task so an ollama outage doesn't fail the whole run.
- Check ollama.generate connectivity or endpoint config — 2/2 "fetch failed" at 0s avg suggests the service is unreachable, not slow.
- Verify skill picker logging is wired up — zero recorded picks across 28 tasks suggests a config gap.
- Check peer.review logs for the failed run to confirm retries are covering it, or fix the underlying error.
- Investigate why quality.check spikes to 171s on some jobs (289d9abc, be23572f) vs 76s on others — consider a timeout or caching config.
- Add retry-with-backoff on network fetches in general-task; both failures were transient "fetch failed" errors.
- Enable skill-pick logging so tomorrow's reflection can correlate skill choices with the general-task failures.
- Investigate the peer.review failure (1 of 5) before increasing delegation volume through managed-worker-7473.
- Set a timeout or fast-path on quality.check — 171s twice suggests it's hanging on certain job types.
- Add retry-with-backoff on the fetch layer used by general-task; both failures were transient-looking "fetch failed" errors.
- Enable skill-pick logging so tomorrow's reflection can evaluate routing decisions.
- Investigate the 20% peer.review failure (job-level logs) before delegating more review work to it.
- Profile or cache quality.check — cutting its 98.9s average would nearly halve general-task runtime.
- Add retry-with-backoff on fetch calls in the general-task template; both failures were transient "fetch failed" errors.
- Enable skill-pick logging so tomorrow's reflection can correlate skill choices with outcomes.
- Spread delegations beyond managed-worker-7473 to avoid a single-peer dependency.
- Investigate quality.check's 171s outliers; consider a timeout cap or a lighter-weight check for low-risk tasks.
- Optimize peer review process by reducing its average time from 35 seconds.
- Investigate why "fetch failed" issues occur frequently with general-task templates.
- Investigate why quality.check varies 76s–171s on identical-looking jobs; consider a timeout or lighter check tier for low-risk tasks.
- Dig into the one peer.review failure — if it recurs, gate delegations behind a health check.
- Enable or fix skill-picker logging so future reflections can correlate skill choices with outcomes.
- Add retry-with-backoff on fetch calls in the general-task template — both failures share the same "fetch failed" error.
- Investigate why quality.check swings 76s–171s; consider a timeout cap or a lighter check for low-risk jobs.
- Spread delegations beyond managed-worker-7473 to test peer redundancy.
- Enable skill-pick logging so tomorrow's reflection can correlate skills with outcomes.
- Add retry-with-backoff on fetch calls in the general-task template — both failures were transient "fetch failed" errors.
- Set a timeout or lighter mode for quality.check; 171s runs are 6x its own median. Consider caching results across near-duplicate jobs (289d9abc/be23572f had identical timings — likely redundant work).
- Spread delegations beyond managed-worker-7473, or confirm it's intentionally the sole delegate.
- Investigate why skill picker correlations are empty — flip on logging or verify the picker is enabled.
- Check ollama endpoint connectivity or swap ollama.generate for a hosted model fallback — it's the only tool at 100% failure.
- Add retry-with-backoff on "fetch failed" errors in general-task; both failures look transient.
- Investigate the two 171s quality.check runs (jobs 289d9abc, be23572f) — 2x the other runs. Consider a timeout or lighter check mode.
- Spread delegations beyond managed-worker-7473, or confirm it can absorb the load if volume grows.
- Check the ollama.generate endpoint config — "fetch failed" with 0s avg suggests connection refused, not model error. Fix the URL/host or fall back to another generate tool.
- Cap or parallelize quality.check; two 171s runs on jobs 289d9abc and be23572f suggest a retry or timeout worth tuning.
- Add a retry-once policy on peer.review to absorb its 20% flake rate.
- Investigate why reflection:daily shows avg -0.1s — negative duration means timing instrumentation is broken for that template.
- Investigate the ollama endpoint before the next run — 80% failure with sub-second errors points to connectivity or a missing model, both cheap to fix.
- Add a retry-with-backoff on "fetch failed" in the `general-task` template; both failures match that pattern.
- Profile or cache `quality.check` — cutting its 86.5s avg would nearly halve general-task runtime.
- Verify skill picker logging is wired up; zero recorded picks across 38 tasks means either it's disabled or telemetry is broken.
- Fix ollama connectivity first: check the endpoint/host config or add a retry-with-backoff. An 80% failure rate on a 0.9s tool is almost certainly infrastructure, not the model.
- Add a fallback generator for general-task so a single fetch failure doesn't kill the run.
- Investigate the 171s quality.check runs (jobs 289d9abc, be23572f) — if they're doing redundant passes, cap or cache them to cut general-task latency roughly in half.
- Spread delegations beyond managed-worker-7473, or confirm it's intentionally the sole reviewer — one peer handling 80% of delegations is a fragility risk.
- 1. Check the ollama endpoint config or swap `ollama.generate` for a working generation backend — 80% failure at sub-second latency screams misconfiguration.
- 2. Add retry-with-backoff on network fetches in `general-task`; both "fetch failed" errors look transient.
- 3. Investigate why `quality.check` doubles from 76s to 171s on some jobs — consider a timeout or a lighter check tier for routine tasks.
- 4. Fix `reflection:daily` timing instrumentation and confirm skill-picker logging is enabled — two blind spots in yesterday's telemetry.

## 2026-07-02

### Went wrong
- 1 peer delegation timed out inside a general-task run; peer.review shows a 22% failure rate (2 of 9 runs).
- "fetch failed" caused 4 of 5 failures — a network/connectivity issue, not logic.
- All 5 failures hit general-task (5 of 17 runs, 29% failure rate).
- 1 peer delegation timed out mid-general-task, and peer.review shows a 22% failure rate (2 of 9) — the peer link is the flakiest part of the stack.
- "fetch failed" hit 4 times — a network/connectivity issue, not a logic bug. Worth checking outbound access from the general-task workers.
- general-task carried every failure: 5 of 17 runs failed (29%), while all other templates went 13/13.
- general-task is slow even when it works: avg 397s, driven by research.deep (up to 346s) and quality.check (up to 239s).
- peer.review had a 22% failure rate (2 of 9), including one delegation timeout to a peer endpoint.
- "fetch failed" caused 4 of the 5 failures — a network/connectivity issue, not a logic issue.
- All 5 failures hit insights:general-task (5 of 9 failed, 44% failure rate).
- daily-briefing took 749.9s — the slowest single task by far, ~4x the avg research.deep step.
- 1 peer delegation timed out waiting on a remote peer — the same peer.review tool shows a 29% failure rate (2 of 7 runs).
- "fetch failed" hit 4x, all on the general-task template. Likely a network or upstream endpoint issue, not tool logic.
- insights:general-task failed 5 of 7 runs (71% failure rate) — this is the whole failure story today.
- Peer review task took an average of 91.4 seconds, with a failure rate of 25%.
- Multiple failures in "fetch" tasks (3 out of 6 runs).
- Two tasks failed in general-task templates.
- Two general task templates failed twice each.
- One peer delegation timed out after the minimum allowed time (Nmin).
- All 5 failures hit the general-task template: "fetch failed" 4x, plus 1 peer delegation timeout. general-task failed 5 of 15 runs (33%).
- peer.review is the least reliable tool: 22% failure rate across 9 runs.
- general-task is also the slowest common template (avg 397s), driven by research.deep (346s max) and quality.check (239s max) steps.
- All 5 failures hit general-task (5 of 15 runs, 33% failure rate). Four were "fetch failed" — a network/endpoint issue, not tool logic.
- One peer delegation to a remote peer timed out mid-job, contributing to peer.review's 22% failure rate (2 of 9 runs).
- general-task is also the slowest template at 397s average — failures plus latency make it the clear weak spot.
- All 5 failures hit the general-task template (5 of 17 runs, 29% failure rate).
- "fetch failed" caused 4 of the 5 failures — likely a network or endpoint issue, not logic.
- 1 peer delegation timed out mid-task despite peer.review's 22% failure rate being the only unreliable tool (2 of 9 runs).
- general-task is also the slowest template at 351.7s avg, dragged down by research.deep runs of 299–346s.

### Try next
- Tune skill picker thresholds — a score of 15 (keyword-only) is too weak to be a reliable trigger even when it succeeds.
- Profile jobs 36172d9e and b6d90f2a — research.deep + quality.check together burned ~520s each; consider capping research depth for routine tasks.
- Raise the peer delegation timeout or add a health check before delegating; peer.review's 22% failure rate warrants a pre-flight ping.
- Add retry-with-backoff on fetch operations in general-task — 4 of 5 failures would likely have recovered.
- Investigate why 20 of 30 tasks have no employee attribution — either assign them or fix the logging so the data is usable.
- Cache or dedupe research.deep results — jobs 36172d9e and b6d90f2a both ran identical 346s deep-research steps; sharing results would halve that cost.
- Raise or make configurable the peer delegation timeout; peer.review's 22% failure rate suggests the current window is too tight for slow peers.
- Add retry-with-backoff on outbound fetches in general-task — 4 of 5 failures were "fetch failed" and likely transient.
- Consider caching or scoping research.deep queries; it's the top time sink (299–346s per run) and drags general-task past 6 minutes average.
- Verify security.scan is actually executing — 0s avg over 9 runs deserves a spot-check of its output.
- Raise or tune the peer delegation timeout for the endpoint that timed out, or health-check peers before delegating.
- Add retry-with-backoff on fetch calls in general-task; 4 transient "fetch failed" errors would likely have been recoverable.
- Spread load beyond Aria, or confirm single-employee operation is intentional — one worker is a single point of failure.
- Profile the daily-briefing pipeline — 749.9s for one task is an outlier; check if research.deep steps can run in parallel.
- Raise the peer delegation timeout or health-check the peer before dispatch; peer.review's 29% failure rate suggests the remote is unreliable.
- Add retry-with-backoff on fetch calls in the general-task template — 4 of 5 failures would likely have recovered.
- Increase the reliability of the "quality.check" tool, which currently has no failures but an elevated failure rate.
- Optimize or replace the "peer.review" task, as it has a high failure rate and long average duration.
- Optimize "research.deep" jobs by reducing their average runtime.
- Investigate why "peer.review" is failing more often and consider retiring or retraining this peer.
- Increase the timeout limit for peer delegations to avoid timeouts.
- Investigate why "research.deep" is consistently taking more than average time (over 200s).
- Investigate the LLM error above and re-run `/api/reflection/run` once it's resolved.
- Add retry-with-backoff on network fetches in general-task — 4 of 5 failures were "fetch failed", likely recoverable.
- Raise or tune the peer delegation timeout; 1 timeout plus 22% peer.review failure suggests the peer endpoint (managed-worker-7473 or its host) needs a health check before delegation.
- Cache or scope research.deep queries — three runs took 299–346s each and dominate general-task latency.
- Confirm security.scan is real: a 0s average across 9 runs looks like a stub, not a scan.
- Add retry-with-backoff on the fetch layer for general-task — 4 "fetch failed" errors look transient, and retries would likely lift success rate above 90%.
- Shorten the peer delegation timeout or add a second peer alongside managed-worker-7473 to remove the single point of failure.
- Investigate the 750s daily-briefing run — if research.deep steps can run in parallel, that could halve it.
- vault-organization skill matched on keyword-only (picker score 15). Add better trigger descriptions or embeddings so it's picked deliberately, not by luck.
- Add retry-with-backoff on fetch calls in general-task — 4 identical "fetch failed" errors suggest transient failures that a retry would absorb.
- Raise or make configurable the peer delegation timeout; one job died on timeout while peer.review already fails 22% of the time. Investigate the peer at that IP.
- Cap or parallelize research.deep — it's the top slowest step 3x (299–346s) and the main driver of general-task's 351.7s average.
- Distribute load beyond Aria if other employees exist; one worker handling everything is a single point of failure.

## 2026-07-01

### Went wrong
- No failures, rejections, or errors occurred.
- None. All runs succeeded.
- Peer review and quality.check also added 65 s and 51 s respectively to that job.
- The single research.deep run took 326 s, the longest step overall.
- No failures reported.
- No delegations; all work stayed local.
- The only slowdown was the single daily‑briefing job (1,846 s) and a research.deep run that took 326 s.
- No failures recorded.
- The single research.deep run took 326 s, the longest step in the day.
- Peer review and quality check also added 65 s and 51 s respectively to that job.
- No failures or rejections recorded.
- No delegations; all work stayed local, which may limit scalability.
- No failures or rejections.

### Try next
- Add a second employee or redistribute tasks to balance the load and avoid single‑point bottlenecks.
- Replace `peer.review` with a lighter‑weight review tool or trim its criteria to reduce the 88‑s duration.
- Deploy a second instance of `research.deep` to parallelize the 338‑s run and cut its wall‑time.
- Consider adding a lightweight `search-brain` step to future templates to leverage the 0.3 s average speed.
- Review the dispatch workflow to identify any unnecessary steps that could reduce the 273 s duration.
- Split the 1846 s daily‑briefing into smaller sub‑tasks or parallelize where possible.
- Cache or pre‑fetch results for `research.deep` to cut the 326 s runtime.
- Expand task variety by scheduling at least one operations:daily‑briefing per day.
- Add a quick sanity‑check template before dispatch to catch any hidden issues early.
- Introduce a secondary peer for the research.deep job to parallelize the 65 s review step.
- Profile and optimize the research.deep tool to cut the 326 s runtime.
- Increase parallel workers for `general-task` templates to cut avg runtime from 315 s.
- Add a caching layer to `research.deep` to reduce its avg from 172 s to <100 s.
- Enable peer delegation for the 1846‑s daily‑briefing to split the load.
- Split the daily‑briefing into smaller sub‑tasks or use a faster template to cut the 1,846 s runtime.
- Cache or pre‑fetch research.deep results to reduce the 326 s spike.
- Parallelize peer.review and quality.check where possible to shave the 65 s and 51 s delays.
- Introduce a peer delegation rule for high‑effort tasks to balance load across employees.
- Enable caching for research.deep to cut its runtime below 200 s.
- Split the long dispatch job into two smaller dispatches to reduce peak load.
- Introduce a second employee (e.g., “Bryn”) to share the load and reduce single‑point bottlenecks.
- Run quality.check earlier in the workflow to surface issues before peer review.
- Profile and optimize `research.deep` to reduce its 326‑s runtime.
- Introduce delegation for `peer.review` to distribute load and cut the 65‑s step.
- Consider a lighter template for dispatch if similar tasks recur.
- Evaluate adding a second employee to balance task distribution beyond Aria.
- Pre‑fetch or cache research.deep results to cut the 326 s latency.
- Profile and streamline the dispatch and daily‑briefing templates; aim for < 200 s.
- Add a second employee to distribute load and reduce per‑employee task count.
- Enhance the skill picker by adding more context features to improve match quality.

## 2026-06-30

### Went wrong
- No issues detected.
- No issues were reported.
- Slowest step: research.deep (326 s) in job 0de07da7.
- No failures or rejections reported.
- No failures reported; all runs succeeded.
- No issues or failures reported.
- No failures occurred yesterday.
- None.
- No issues detected in the daily operations and reflections.
- No outright failures, but the **research.deep** step took **448 s**, and subsequent **quality.check** (51 s) and **peer.review** (49 s) together added **~548 s** to the daily‑briefing job.
- No issues detected in task execution or peer attribution.
- No failures, rejections, or errors reported.
- One research.deep run (job 6dc7aa26) stalled for 448 s, far above the 232.9 s average.
- Quality.check and peer.review on the same job added 51 s and 49 s respectively, inflating the overall 724.5 s for the general‑task.
- No issues reported in task execution or peer attribution.
- No issues reported.

### Try next
- Investigate why "research.deep" is consistently slow.
- Increase the number of tasks per employee.
- Consider reducing the number of peer reviews as they have a high average duration.
- Investigate why research.deep is consistently slowest.
- Consider reducing or eliminating the "peer.review" step as it's failing 0% of the time but still takes a significant amount of time.
- Investigate why the "research.deep" job is consistently taking so long.
- Monitor the slowest tasks (research.deep and peer.review) for further optimization opportunities.
- Investigate why the daily reflections are running so quickly and consider if they can be optimized without losing quality.
- Add a lightweight monitoring step after research.deep to flag unusually long runs.
- Profile the daily‑briefing task to identify the 1846.1 s duration; split into smaller subtasks if possible.
- Investigate why research.deep took 326 s in job 0de07da7; consider caching or a faster alternative.
- Introduce a brief pre‑check to skip `security.scan` when no new code is present, saving the 0 s but keeping audit integrity.
- Profile `peer.review` and `quality.check` for potential parallelism; current avg 36.4 s and 29.4 s may be improvable.
- Investigate job 0de07da7’s `research.deep` call to reduce 326 s latency—consider caching or a lighter query.
- Investigate why "peer.review" is consistently slow and consider whether it can be optimized or if there's a need for additional peer review processes.
- Optimize the "research.deep" process by refining the keyword matching or increasing the skill picker score threshold for better matches.
- Review peer.review jobs as they consistently take around 65 seconds, potentially looking into improving efficiency in those tasks.
- Investigate why the research.deep job took 326 seconds and consider optimizing or simplifying that process.
- Optimize or reduce complexity in the "research.deep" task.
- Increase peer load by assigning more tasks to existing employees.
- Keep the reflection template unchanged; its sub‑second speed is a strong baseline.
- Add a brief sanity‑check step after `dispatch` to catch any overlooked issues early.
- Introduce a lightweight “quick‑research” tool to handle simple queries, reducing reliance on the 448‑s deep research.
- Cache or pre‑fetch data for `research.deep` to cut its runtime below 200 s.
- Add peer delegation for high‑load tasks to balance the local workload.
- Review thresholds or logic in `quality.check` and `peer.review` for job 6dc7aa26 to reduce 51 s and 49 s.
- Profile and optimize `research.deep` to cut the 448 s runtime.
- Investigate why peer.review is consistently slow and consider if it can be optimized or simplified.
- Optimize the research.deep job by reviewing its inputs and outputs for efficiency.
- Consider reducing the frequency of running these tools if they are not critical.
- Review the performance of tools like research.deep and quality.check to identify areas for improvement.
- 1. Cache or pre‑fetch results for the **research.deep** tool to reduce its runtime from ~450 s to under 100 s.
- 2. Split the daily‑briefing workflow into smaller sub‑tasks (e.g., separate research and quality phases) to parallelize and lower the overall latency.
- 3. Enable employee logging to capture who is running which tasks; this will help identify load distribution opportunities.
- Optimize the dispatch template.
- Investigate why Research.deep and Quality.check are taking longer than usual.
- Investigate ways to cut `research.deep` runtime (e.g., caching, parallel queries).
- Add a second employee to distribute the 13‑task load.
- Review `peer.review` duration (49 s) to identify potential pre‑check optimizations.
- Switch the default research tool to a faster alternative or enable caching for repeated queries.
- Add a timeout threshold (e.g., 300 s) for research.deep to prevent future stalls.
- Reduce the number of quality.check and peer.review steps for general‑task jobs, or parallelize them.
- Re‑evaluate the skill picker for vault‑organization; raise the picker score threshold to avoid weak keyword matches.
- Optimize research.deep job by improving its efficiency or simplifying tasks.
- Investigate why skill picker for vault-organization has low scores and improve matching criteria.
- Investigate why quality check and peer review are consistently slow.
- Optimize research.deep job by checking if it can be parallelized or simplified.
- Increase the frequency of security scans.
- Consider adding a secondary reviewer for critical tasks.
- Increase peer review load for Neuro to improve collaboration skills.
- Optimize or reduce the time spent on research.deep job by 326s.
- Consider retiring the vault-organization skill picker as it had a weak match score.
- Continue monitoring tool reliability and skill picker performance.
- Profile job 0de07da7 to identify bottlenecks in research.deep.
- Consider caching or pre‑fetching for the most time‑consuming steps.
- Introduce a lightweight peer review for high‑latency tasks to distribute load.
- Optimize dispatch template by reducing its average execution time.
- Investigate why peer review is so slow and consider optimizing or simplifying it.
- Optimize the 'quality.check' step as it takes an average of 29.4 seconds.
- Investigate why 'research.deep' and 'peer.review' are consistently slow, especially since they do not fail.
- Continue monitoring tool reliability, especially research.deep.
- Consider reducing the number of peer reviews as they are consistently failing.

## 2026-06-29

### Went wrong
- No employees were recorded on the clock, so labor attribution is missing.
- The `research.deep` step took 448 s, dominating the runtime of the daily briefing.
- No failures to report.
- The `daily-briefing` step took an average of **1857 s** (≈31 min), far slower than other tasks.
- No employees were on the clock, so all work ran locally, limiting parallelism.

### Try next
- 3. Split the daily briefing into smaller sub‑tasks (e.g., separate data gathering and synthesis) so that `research.deep` can run concurrently with other steps.
- 2. Assign at least one clawbot employee to the shift to capture labor metrics and enable parallelism.
- 1. Cache or pre‑fetch `research.deep` results for recurring topics to cut the 448 s step.
- 1. Add at least one employee to the clock to distribute the daily reflection load.
- 2. Investigate caching or parameter tuning for `research.deep` to cut its runtime below 60 s.
- 3. Experiment with delegating a subset of reflections to a peer reviewer to balance load and capture fresh perspectives.
- 1. Assign an employee to the `daily-briefing` template to see if parallel processing reduces the 1857 s runtime.
- 2. Split the `daily-briefing` task into smaller sub‑steps (e.g., separate data gathering from synthesis) to identify bottlenecks.
- 3. Enable peer delegation for the `research.deep` step to test whether distributed execution cuts the 448 s duration.

## 2026-06-28

### Went wrong
- No failures or issues recorded.
- No tasks failed or were rejected.

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
