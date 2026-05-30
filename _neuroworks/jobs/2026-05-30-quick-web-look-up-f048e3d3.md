---
type: job
title: Quick web look-up
slug: quick-web-look-up-f048e3d3
created: 2026-05-30T17:37:04.112Z
jobId: f048e3d3-7e86-4492-a7e5-ee92685f7a64
status: succeeded
template: custom-clawbot-quick-web-look-up
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:31:09.507Z
finishedAt: 2026-05-30T17:37:04.112Z
---

# Quick web look-up

- **Status:** succeeded
- **Template:** custom-clawbot-quick-web-look-up
- **Started:** 2026-05-30T17:31:09.507Z
- **Finished:** 2026-05-30T17:37:04.112Z
- **Title:** Quick web look-up

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Quick web look-up\nDescription: Fast factual web search with citations. Use for single questions you don't want to clutter the vault with."
}
```

## Plan
Research: following question on the web

### Steps
1. ✓ Researching "following question on the web" — vault + web — `research.deep` (21.5s)
    > research signal detected ("Look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (299.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (13.9s)
    > auto-injected: quality score=0.24 (pass=false) — peer review for a second opinion

## Answer
## Summary

The request lacks the specific question to be researched. Without the exact query, no web lookup can be performed, and consequently no sourced answer can be provided.

## Next Steps

1. Supply the precise question or topic you want investigated.  
2. Indicate any preferred sources or constraints (e.g., date range, language).  
3. Confirm whether the answer should be captured to the vault if it is non‑obvious.

_Assumed: the user intended to receive a concise, sourced answer but omitted the actual query; clarification is required before proceeding._

<details><summary>Log</summary>

```
[2026-05-30T17:31:09.529Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:31:10.613Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-30T17:31:10.613Z] Plan ready: 1 step — Research: following question on the web.
[2026-05-30T17:31:10.650Z] Step 1 of 1: Researching "following question on the web" — vault + web
[2026-05-30T17:31:32.158Z] All sub-agents finished in 21.5s.
[2026-05-30T17:31:32.159Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:31:32.174Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:31:32.175Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:31:32.175Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:36:32.048Z] Wave 1 finished in 299.9s.
[2026-05-30T17:36:32.048Z] All sub-agents finished in 299.9s.
[2026-05-30T17:36:32.054Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:36:45.953Z] All sub-agents finished in 13.9s.
[2026-05-30T17:36:45.964Z] quality.check failed (score=0.24, issues: The answer does not provide an actual research or lookup of the requested question.) — re-synthesising with the large model
[2026-05-30T17:36:45.978Z] Thinking with openai/gpt-oss-120b:free (~3 622 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:37:03.719Z] quality rescue improved score: 0.24 → 0.72; using the rescued draft
[2026-05-30T17:37:03.719Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:37:04.112Z] Vault commit: done.
```
</details>
