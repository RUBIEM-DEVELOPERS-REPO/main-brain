# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

## 2026-06-17

### Went wrong
- No failures or issues reported.

### Try next
- Consider delegating occasional tasks to peers to balance load and test peer‑review workflows.
- Investigate whether `research.deep` can be cached or parallelized to reduce the 45 s runtime.

## 2026-06-16

### Went wrong
- No failures to report.

### Try next
- Investigate whether `research.deep` can be cached or parallelized to reduce its 45 s runtime.
- Consider assigning a second employee to handle research‑intensive tasks if volume increases.
- Review template execution times; the `daily‑briefing` and `general‑task` templates are already efficient, so keep them as defaults.

## 2026-06-13

### Went wrong
- None

### Try next
- Continue monitoring for any future tasks.

## 2026-06-12

### Went wrong
- No issues reported.

### Try next
- Consider assigning an AI employee to the daily briefing to see if parallelism reduces the 122 s runtime.
- Review the `research.deep` configuration or data sources to try shaving a few seconds off the 32 s step.
- If future tasks increase, enable peer attribution to distribute load and capture delegation metrics.

## 2026-06-11

### Went wrong
- No issues detected.

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
