---
type: job
title: Compare two on the web
slug: compare-two-on-the-web-8fae8d19
created: 2026-05-29T19:04:09.959Z
jobId: 8fae8d19-e53c-4687-809d-de5503ab6bf3
status: succeeded
template: custom-researcher-compare-two-on-the-web
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:01:36.656Z
finishedAt: 2026-05-29T19:04:09.959Z
---

# Compare two on the web

- **Status:** succeeded
- **Template:** custom-researcher-compare-two-on-the-web
- **Started:** 2026-05-29T19:01:36.656Z
- **Finished:** 2026-05-29T19:04:09.959Z
- **Title:** Compare two on the web

## Plan
Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont

### Steps
1. ✓ Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont" — `research.multiperspective` (35.4s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (19.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (22.9s)
    > auto-injected: quality score=0.72 (pass=false) — peer review for a second opinion

## Answer
## Report – Inability to Perform Requested Comparison  

**Subject:** Missing Item Details Prevent Completion of Multi‑Perspective Comparison  

**Prepared by:** Clawbot (NeuroWorks platform)  
**Date:** 2026‑05‑29  

### Summary  
The request calls for a side‑by‑side comparison of two unspecified items, each examined through mainstream, critical, practitioner, and recent web perspectives. The available evidence consists only of generic placeholder entries in the vault and a research‑multiperspective result that contains no substantive information about any concrete entities (see evidence [1]). Consequently, no factual claims can be generated for either side, and a balanced trade‑off analysis, hidden‑cost assessment, or contextual recommendation cannot be produced.

### Evidence of Insufficient Input  
- The multiperspective research output returns only dictionary definitions of the word “following” and explicitly notes the absence of any objects or topics to compare [1].  
- The security scan notes that the request lacks specific item identifiers and lists the exact information needed before any comparison can be undertaken [3].  

### Required Information to Proceed  
1. **Exact names or descriptions** of the two items to be compared (e.g., product models, technologies, policies).  
2. **Contextual parameters** such as industry, intended use‑case, or decision criteria (cost, performance, compliance, etc.).  
3. **Any existing constraints** (budget limits, timeline, regulatory requirements) that should shape the analysis.  

### Next Steps  
- Provide the missing details listed above.  
- Upon receipt, a full multi‑perspective research run will be executed, and a structured comparison will be delivered in the format outlined in the skill playbook.  

*Assumed: The user intended to compare two specific entities but omitted their identifiers.*

<details><summary>Log</summary>

```
[2026-05-29T19:01:36.667Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:01:36.670Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T19:01:36.670Z] Plan ready: 1 step — Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont.
[2026-05-29T19:01:36.673Z] Step 1 of 1: Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont"
[2026-05-29T19:02:12.044Z] All sub-agents finished in 35.4s.
[2026-05-29T19:02:12.059Z] Thinking with openai/gpt-oss-20b:free (~3 873 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T19:02:21.650Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:02:21.652Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:02:21.652Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:02:21.652Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:02:41.297Z] Wave 1 finished in 19.6s.
[2026-05-29T19:02:41.297Z] All sub-agents finished in 19.6s.
[2026-05-29T19:02:41.300Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:03:04.209Z] All sub-agents finished in 22.9s.
[2026-05-29T19:03:04.215Z] quality.check failed (score=0.72, issues: does not fulfill comparison request; low relevance to task) — re-synthesising with the large model
[2026-05-29T19:03:04.229Z] Thinking with openai/gpt-oss-120b:free (~4 377 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:03:37.638Z] quality rescue improved score: 0.72 → 0.8; using the rescued draft
[2026-05-29T19:03:37.638Z] peer review verdict=bad (Does not address the task; no comparison made; Fails to provide research or citations) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:03:37.654Z] Thinking with openai/gpt-oss-120b:free (~4 528 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:04:09.619Z] retry verdict=needs-work and quality not improved (0.68 ≤ 0.8); keeping the rescued/original draft
[2026-05-29T19:04:09.619Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:04:09.958Z] Vault commit: done.
```
</details>
