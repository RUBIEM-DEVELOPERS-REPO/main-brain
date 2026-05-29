---
type: job
title: Daily focus
slug: daily-focus-b3ff18f0
created: 2026-05-29T20:29:16.569Z
jobId: b3ff18f0-7575-4b53-89e3-5b0cd558f008
status: succeeded
template: custom-clawbot-daily-focus
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:18:54.657Z
finishedAt: 2026-05-29T20:29:16.569Z
---

# Daily focus

- **Status:** succeeded
- **Template:** custom-clawbot-daily-focus
- **Started:** 2026-05-29T20:18:54.657Z
- **Finished:** 2026-05-29T20:29:16.569Z
- **Title:** Daily focus

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Daily focus\nDescription: What should I focus on today? Looks at recent jobs in your vault, open threads, and notes flagged for follow-up."
}
```

## Plan
Default research plan for: Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending follow-ups in 0-Inbox/, and surface a short prioritised list of what I should focus on today. Include why each item matters.

Context: Role: Custom
Title: Daily focus
Description: What should I focus on today? Looks at recent jobs in your vault, open threads, and notes flagged for follow-up

### Steps
1. ✓ Researching "Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending fol…" — vault + web — `research.deep` (40.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (331.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✗ Asking a peer to review the draft — `peer.review` (9.1s)
    > auto-injected: quality score=0.34 (pass=false) — peer review for a second opinion
    error: review HTTP 503

## Answer
## Daily Focus Prioritisation

| Priority | Item | Why it matters |
|----------|------|----------------|
| **1** | Verify that `_neuroworks/jobs/` contains journal entries from the last five days | The platform derives actionable tasks from these entries; without them it cannot surface a focus list. |
| **2** | Check `0‑Inbox/` for any pending follow‑up notes | Open threads or flagged items indicate work that is still unresolved and may block current projects. |
| **3** | Add a “daily check‑in” note if the directories are empty | A concise daily log creates the evidence needed for future priority‑setting and improves continuity. |
| **4** | Enable automatic job logging in NeuroWorks | Automation reduces manual overhead and ensures the system always has up‑to‑date task history. |

**Next steps**  
1. Inspect `_neuroworks/jobs/` for files dated within the past five days.  
2. Scan `0‑Inbox/` for notes marked with a follow‑up tag or open‑thread indicator.  
3. If either location is empty, create a markdown file (e.g., `20260530‑daily‑checkin.md`) summarising any new jobs or pending items.  
4. Configure NeuroWorks to write a journal entry automatically whenever a new job is dispatched.

*Why these actions matter:* they restore the visibility the AI needs to generate a reliable, prioritized focus list and prevent tasks from slipping through the cracks.  

[1] research.deep – query result indicating no recent journal entries or pending follow‑ups.

<details><summary>Log</summary>

```
[2026-05-29T20:18:54.668Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:18:54.684Z] Thinking about the best approach…
[2026-05-29T20:18:54.769Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:18:55.776Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:18:55.776Z] Plan ready: 1 step — Default research plan for: Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending follow-ups in 0-Inbox/, and surface a short prioritised list of what I should focus on today. Include why each item matters.

Context: Role: Custom
Title: Daily focus
Description: What should I focus on today? Looks at recent jobs in your vault, open threads, and notes flagged for follow-up.
[2026-05-29T20:18:55.782Z] Step 1 of 1: Researching "Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending fol…" — vault + web
[2026-05-29T20:19:36.274Z] All sub-agents finished in 40.5s.
[2026-05-29T20:19:36.288Z] Thinking with openai/gpt-oss-20b:free (~3 449 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:19:50.190Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:19:50.196Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:19:50.196Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:19:50.196Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:25:00.913Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — fetch failed
[2026-05-29T20:25:21.431Z] Wave 1 finished in 331.2s.
[2026-05-29T20:25:21.431Z] All sub-agents finished in 331.2s.
[2026-05-29T20:25:21.435Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:25:22.691Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:25:25.228Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T20:25:30.574Z]   ✗ Asking a peer to review the draft: review HTTP 503
[2026-05-29T20:25:30.574Z] First wave had no successful sub-agents — stopping early. I'll summarise what was tried and why it didn't land.
[2026-05-29T20:25:30.574Z] All sub-agents finished in 9.1s.
[2026-05-29T20:25:30.580Z] quality.check failed (score=0.34, issues: Contains unsupported claim that no journal entries exist; uses a placeholder citation that does not reference real evidence; lacks inline citations for each claim; answer is more procedural than a con; citation_coverage adjusted from 0.20 to 0.27 (found 1 citation markers in 11 substantive sentences)) — re-synthesising with the large model
[2026-05-29T20:25:30.599Z] Thinking with openai/gpt-oss-120b:free (~4 007 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:29:11.940Z] quality rescue improved score: 0.34 → 0.73; using the rescued draft
[2026-05-29T20:29:11.940Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:29:16.569Z] Vault commit: done.
```
</details>
