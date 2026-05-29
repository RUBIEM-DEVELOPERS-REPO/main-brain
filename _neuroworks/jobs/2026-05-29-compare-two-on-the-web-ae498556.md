---
type: job
title: Compare two on the web
slug: compare-two-on-the-web-ae498556
created: 2026-05-29T20:29:07.692Z
jobId: ae498556-ef72-4112-bc12-5fd27d9500b1
status: succeeded
template: custom-researcher-compare-two-on-the-web
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:26:44.714Z
finishedAt: 2026-05-29T20:29:07.692Z
---

# Compare two on the web

- **Status:** succeeded
- **Template:** custom-researcher-compare-two-on-the-web
- **Started:** 2026-05-29T20:26:44.714Z
- **Finished:** 2026-05-29T20:29:07.692Z
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
1. ✓ Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont" — `research.multiperspective` (39.3s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (7.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (12.6s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
**Subject:** Clarification Needed – Items for Side‑by‑Side Web Comparison  

To produce the requested balanced comparison—including mainstream, critical, practitioner, and recent perspectives, with trade‑off analysis, hidden costs, and optimal contexts—I need to know the specific two approaches, tools, companies, or positions you want evaluated.  

Please provide the exact names (or URLs) of the two items, and any particular focus areas (e.g., cost, performance, compliance) you’d like emphasized. Once clarified, I will conduct the multi‑perspective research and deliver the structured report with full citations.

<details><summary>Log</summary>

```
[2026-05-29T20:26:44.737Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:26:44.748Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T20:26:44.748Z] Plan ready: 1 step — Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont.
[2026-05-29T20:26:44.760Z] Step 1 of 1: Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont"
[2026-05-29T20:27:24.072Z] All sub-agents finished in 39.3s.
[2026-05-29T20:27:24.089Z] Thinking with openai/gpt-oss-20b:free (~3 922 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:27:40.250Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:27:40.256Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:27:40.256Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:27:40.256Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:27:47.556Z] Wave 1 finished in 7.3s.
[2026-05-29T20:27:47.558Z] All sub-agents finished in 7.3s.
[2026-05-29T20:27:48.982Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:28:01.597Z] All sub-agents finished in 12.6s.
[2026-05-29T20:28:01.604Z] quality.check failed (score=0.57, issues: does not provide a side‑by‑side comparison as requested; fails to identify or research two distinct items) — re-synthesising with the large model
[2026-05-29T20:28:01.617Z] Thinking with openai/gpt-oss-120b:free (~4 339 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:28:33.971Z] quality rescue improved score: 0.57 → 0.76; using the rescued draft
[2026-05-29T20:28:33.972Z] peer review verdict=bad (Does not address task; No comparison made) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:28:33.992Z] Thinking with openai/gpt-oss-120b:free (~4 478 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:29:06.760Z] retry verdict=bad and quality not improved (0.76 ≤ 0.76); keeping the rescued/original draft
[2026-05-29T20:29:06.760Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:29:07.691Z] Vault commit: done.
```
</details>
