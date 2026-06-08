# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

## 2026-06-06

### Went wrong
- Slowest steps were `peer.review` at 160 s (2 occurrences) and `quality.check` at 135 s (2 occurrences), far above their averages (27.5 s and 20.9 s respectively).
- Single failure: “fetch failed” in a `general-task` (1/46 general-task runs, 2.2% failure for that template).

### Try next
- 4. Expand delegation to additional managed workers to spread peer load more evenly.
- 3. Balance workload by assigning 5–8 tasks to secondary employees (Vera, Vince, Melody, etc.) to reduce Neuro’s overload.
- 2. Optimize `peer.review` and `quality.check` steps: profile the jobs that took 160 s / 135 s and consider caching or parallelizing sub‑tasks.
- 1. Investigate the “fetch failed” error in the `general-task` template and add retry logic or fallback.

## 2026-05-26

### Went wrong
- 20 total failures, all in a handful of templates:
- `general-task` – 3 fails (2 “Cannot read properties…”, 1 “fetch failed”).
- `custom-devops-sre-review-iac-for-blast-radius-drift-risk-a` – 1 fail (Python lock error).
- `fs.read_external` – 41% failure rate (7 of 17 runs).
- Peer review steps were extreme bottlenecks: two jobs consumed >56 k s each.

### Try next
- 1. **Retire or sandbox `fs.read_external`** – replace with `github.read_repo` or `web.fetch` where possible; add a retry wrapper if the call is unavoidable.
- 2. **Add automatic retries for `general-task`** – configure 2‑attempt retry on “Cannot read properties” and “fetch failed” errors; currently only one retry was logged.
- 3. **Split large peer review jobs** – enforce a max payload size (e.g., ≤10 k s of work) or increase parallel reviewers to keep any single `peer.review` under 10 k s.
- 4. **Prioritize Hermes‑generated tasks to the “secondary” employee pool** – shift ~20% of Hermes load to secondary agents to balance queue latency and reduce single‑point contention.
