---
type: job
title: Compare two on the web
slug: compare-two-on-the-web-27c16b6c
created: 2026-05-30T10:03:49.032Z
jobId: 27c16b6c-e44c-4c49-8bbd-220763026b98
status: succeeded
template: custom-researcher-compare-two-on-the-web
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:57:22.489Z
finishedAt: 2026-05-30T10:03:49.032Z
---

# Compare two on the web

- **Status:** succeeded
- **Template:** custom-researcher-compare-two-on-the-web
- **Started:** 2026-05-30T09:57:22.489Z
- **Finished:** 2026-05-30T10:03:49.032Z
- **Title:** Compare two on the web

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Compare two on the web\nDescription: Side-by-side web investigation of two approaches/tools/companies/positions. Parallel sub-agents per side, then a comparison synth."
}
```

## Plan
Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont

### Steps
1. ✓ Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont" — `research.multiperspective` (38.7s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (269.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.2s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Required Information to Proceed

To produce the requested side‑by‑side comparison, I need the exact names or identifiers of the two items you want evaluated (e.g., two software products, frameworks, services, etc.). Please provide those details so I can run the multi‑perspective research (mainstream, critical, practitioner, recent) and deliver a balanced report with trade‑offs, hidden costs, and optimal contexts.

<details><summary>Log</summary>

```
[2026-05-30T09:57:22.500Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:57:22.505Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-30T09:57:22.505Z] Plan ready: 1 step — Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont.
[2026-05-30T09:57:22.510Z] Step 1 of 1: Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont"
[2026-05-30T09:58:01.235Z] All sub-agents finished in 38.7s.
[2026-05-30T09:58:01.248Z] Thinking with openai/gpt-oss-20b:free (~3 873 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T09:58:19.679Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:58:19.685Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:58:19.685Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:58:19.685Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T10:02:48.987Z] Wave 1 finished in 269.3s.
[2026-05-30T10:02:48.987Z] All sub-agents finished in 269.3s.
[2026-05-30T10:02:48.991Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T10:02:54.172Z] All sub-agents finished in 5.2s.
[2026-05-30T10:02:54.177Z] quality.check failed (score=0.57, issues: The answer does not provide a balanced comparison as requested.; It lacks specific examples or items to compare.) — re-synthesising with the large model
[2026-05-30T10:02:54.189Z] Thinking with openai/gpt-oss-120b:free (~4 236 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T10:03:19.672Z] quality rescue improved score: 0.57 → 0.76; using the rescued draft
[2026-05-30T10:03:19.672Z] peer review verdict=bad (Does not address the task; fails to provide a comparison; requests missing information instead of performing research) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T10:03:19.683Z] Thinking with openai/gpt-oss-120b:free (~4 383 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T10:03:48.696Z] retry verdict=bad and quality not improved (0.6 ≤ 0.76); keeping the rescued/original draft
[2026-05-30T10:03:48.696Z] Wrote to your second brain — committing the changes.
[2026-05-30T10:03:49.031Z] Vault commit: done.
```
</details>
