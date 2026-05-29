---
type: job
title: Compare two on the web
slug: compare-two-on-the-web-66fd85bc
created: 2026-05-29T09:01:09.174Z
jobId: 66fd85bc-0a52-4fc7-a313-7b2d410c5b4e
status: succeeded
template: custom-researcher-compare-two-on-the-web
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:59:19.206Z
finishedAt: 2026-05-29T09:01:09.174Z
---

# Compare two on the web

- **Status:** succeeded
- **Template:** custom-researcher-compare-two-on-the-web
- **Started:** 2026-05-29T08:59:19.206Z
- **Finished:** 2026-05-29T09:01:09.174Z
- **Title:** Compare two on the web

## Plan
Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont

### Steps
1. ✓ Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont" — `research.multiperspective` (46.7s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (7.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.8s)
    > auto-injected: quality score=0.54 (pass=false) — peer review for a second opinion

## Answer
**Subject:** Request for Clarification – Items to Compare  

To produce the side‑by‑side comparison you requested (including mainstream, critical, practitioner, and recent perspectives, with trade‑offs, hidden costs, and optimal contexts), I need the specific identifiers of the two things you want evaluated.

Please provide:

1. **Exact names or brief descriptions** of the two items (e.g., “Product A – XYZ Cloud Storage” vs. “Product B – ABC Object Store”).  
2. **Key criteria or dimensions** you care about (cost, performance, security, integration, etc.).  
3. **Intended audience or decision context** (e.g., procurement for a midsize firm, technical selection for a dev team, executive budgeting).  

Once I have this information, I will run a multi‑perspective web research (mainstream, critical, practitioner, recent) and deliver a balanced, fully‑cited comparison report.  

*Assumed: you need a detailed comparison for decision‑making; the above details will ensure the analysis matches your requirements.*

<details><summary>Log</summary>

```
[2026-05-29T08:59:19.217Z] Working as Clawbot — AI agent operator.
[2026-05-29T08:59:19.218Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T08:59:19.218Z] Plan ready: 1 step — Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont.
[2026-05-29T08:59:19.224Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:59:19.224Z] Step 1 of 1: Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont"
[2026-05-29T09:00:05.954Z] All sub-agents finished in 46.7s.
[2026-05-29T09:00:05.964Z] Thinking with openai/gpt-oss-20b:free (~3 873 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:00:11.830Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:00:11.832Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:00:11.832Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:00:11.832Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:00:11.833Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:00:19.757Z] Wave 1 finished in 7.9s.
[2026-05-29T09:00:19.757Z] All sub-agents finished in 7.9s.
[2026-05-29T09:00:19.762Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:00:19.762Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:00:23.573Z] All sub-agents finished in 3.8s.
[2026-05-29T09:00:23.579Z] quality.check failed (score=0.54, issues: Did not provide a side‑by‑side comparison as requested; Insufficient citations for the claims made) — re-synthesising with the large model
[2026-05-29T09:00:23.589Z] Thinking with openai/gpt-oss-120b:free (~4 267 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:00:43.172Z] quality rescue improved score: 0.54 → 0.76; using the rescued draft
[2026-05-29T09:00:43.172Z] peer review verdict=bad (Answer does not address the task; it requests missing information instead of providing a comparison) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:00:43.183Z] Thinking with openai/gpt-oss-120b:free (~4 409 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:01:08.914Z] retry verdict=bad and quality not improved (0.75 ≤ 0.76); keeping the rescued/original draft
[2026-05-29T09:01:08.914Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:01:09.174Z] Vault commit: done.
```
</details>
