# Lessons learned from daily reflections

Auto-generated from `_neuroworks/reflections/*.md`. Each daily reflection's *What went wrong* and *What to try next* bullets land here. The governance loader prepends this file to every agent system prompt, so yesterday's findings become today's hard rules.

**Rule for the agent reading this:** treat every bullet under *Went wrong* as a known failure mode to avoid this turn. Treat every bullet under *Try next* as a preferred next-step pattern for similar tasks.

---

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
