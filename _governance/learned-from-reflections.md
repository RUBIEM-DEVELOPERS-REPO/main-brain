# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

## 2026-06-08

### Went wrong
- No failures recorded.

### Try next
- Investigate why research.deep steps take ~50 s; consider caching or breaking them into smaller sub‑steps to lower latency.
- Rotate delegations away from managed‑worker‑7473 to test other peers’ capacity.
- Distribute workload more evenly: assign 2–3 tasks to Vera, Vince, Melody, Devon, and Casey to reduce bottlenecks on Neuro.

## 2026-06-06

### Went wrong
- Single failure: “fetch failed” in a `general-task` (1/46 general-task runs, 2.2% failure for that template).
- Slowest steps were `peer.review` at 160 s (2 occurrences) and `quality.check` at 135 s (2 occurrences), far above their averages (27.5 s and 20.9 s respectively).

### Try next
- 1. Investigate the “fetch failed” error in the `general-task` template and add retry logic or fallback.
- 2. Optimize `peer.review` and `quality.check` steps: profile the jobs that took 160 s / 135 s and consider caching or parallelizing sub‑tasks.
- 3. Balance workload by assigning 5–8 tasks to secondary employees (Vera, Vince, Melody, etc.) to reduce Neuro’s overload.
- 4. Expand delegation to additional managed workers to spread peer load more evenly.

## 2026-05-26

### Went wrong
- Peer review steps were extreme bottlenecks: two jobs consumed >56 k s each.
- `fs.read_external` – 41% failure rate (7 of 17 runs).
- `custom-devops-sre-review-iac-for-blast-radius-drift-risk-a` – 1 fail (Python lock error).
- `general-task` – 3 fails (2 “Cannot read properties…”, 1 “fetch failed”).
- 20 total failures, all in a handful of templates:

### Try next
- 4. **Prioritize Hermes‑generated tasks to the “secondary” employee pool** – shift ~20% of Hermes load to secondary agents to balance queue latency and reduce single‑point contention.
- 3. **Split large peer review jobs** – enforce a max payload size (e.g., ≤10 k s of work) or increase parallel reviewers to keep any single `peer.review` under 10 k s.
- 2. **Add automatic retries for `general-task`** – configure 2‑attempt retry on “Cannot read properties” and “fetch failed” errors; currently only one retry was logged.
- 1. **Retire or sandbox `fs.read_external`** – replace with `github.read_repo` or `web.fetch` where possible; add a retry wrapper if the call is unavoidable.
