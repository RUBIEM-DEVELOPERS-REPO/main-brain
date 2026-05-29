---
type: job
title: Compare two on the web
slug: compare-two-on-the-web-0d612f38
created: 2026-05-29T09:21:38.877Z
jobId: 0d612f38-72ba-4b12-bccf-7fc2a2fd2204
status: succeeded
template: custom-researcher-compare-two-on-the-web
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:19:13.529Z
finishedAt: 2026-05-29T09:21:38.877Z
---

# Compare two on the web

- **Status:** succeeded
- **Template:** custom-researcher-compare-two-on-the-web
- **Started:** 2026-05-29T09:19:13.529Z
- **Finished:** 2026-05-29T09:21:38.877Z
- **Title:** Compare two on the web

## Plan
Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont

### Steps
1. ✓ Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont" — `research.multiperspective` (80.7s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (9.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.4s)
    > auto-injected: quality score=0.48 (pass=false) — peer review for a second opinion

## Answer
**Subject:** Request for Clarification – Items to Compare  

To proceed with a balanced, multi‑perspective comparison (mainstream, critical, practitioner, recent) as you specified, I need the following details:

1. **Exact names or descriptions of the two items** you want evaluated side‑by‑side.  
2. **Key dimensions or criteria** you care about (e.g., cost, performance, usability, security, scalability).  
3. **Intended audience or decision context** (procurement, academic research, internal strategy, etc.).  
4. **Source scope** – should the comparison rely solely on publicly available web sources, or may internal vault documents be included?  
5. **Deadline** for the deliverable.

Once these specifics are provided, I will run the required `research.multiperspective` queries for each item and produce a cited, balanced report covering trade‑offs, hidden costs, and optimal use cases.

<details><summary>Log</summary>

```
[2026-05-29T09:19:13.539Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:19:13.543Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T09:19:13.543Z] Plan ready: 1 step — Multi-perspective: the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont.
[2026-05-29T09:19:13.581Z] Step 1 of 1: Multi-perspective research: "the following two things side by side using web sources. For each side, run research.multiperspective (mainstream + critical + recent). Then write a balanced comparison: trade-offs, hidden costs, cont"
[2026-05-29T09:20:34.295Z] All sub-agents finished in 80.7s.
[2026-05-29T09:20:34.308Z] Thinking with openai/gpt-oss-20b:free (~3 873 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:20:43.247Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:20:43.257Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:20:43.257Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:20:43.258Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:20:52.479Z] Wave 1 finished in 9.2s.
[2026-05-29T09:20:52.479Z] All sub-agents finished in 9.2s.
[2026-05-29T09:20:52.486Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:20:58.847Z] All sub-agents finished in 6.4s.
[2026-05-29T09:20:58.853Z] quality.check failed (score=0.48, issues: does not provide requested comparison; insufficient citations for claims) — re-synthesising with the large model
[2026-05-29T09:20:58.864Z] Thinking with openai/gpt-oss-120b:free (~4 460 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:21:16.069Z] quality rescue improved score: 0.48 → 0.76; using the rescued draft
[2026-05-29T09:21:16.069Z] peer review verdict=needs-work (Does not provide a comparison as requested; Fails to perform research or cite sources) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:21:16.080Z] Thinking with openai/gpt-oss-120b:free (~4 609 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:21:38.552Z] retry verdict=bad and quality not improved (0.48 ≤ 0.76); keeping the rescued/original draft
[2026-05-29T09:21:38.552Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:21:38.877Z] Vault commit: done.
```
</details>
