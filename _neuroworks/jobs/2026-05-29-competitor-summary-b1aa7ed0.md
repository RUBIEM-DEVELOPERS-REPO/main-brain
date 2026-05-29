---
type: job
title: Competitor summary
slug: competitor-summary-b1aa7ed0
created: 2026-05-29T15:09:13.734Z
jobId: b1aa7ed0-9a4a-46d7-b155-f63030b41742
status: succeeded
template: custom-emp-competitor-summary
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:07:15.394Z
finishedAt: 2026-05-29T15:09:13.734Z
---

# Competitor summary

- **Status:** succeeded
- **Template:** custom-emp-competitor-summary
- **Started:** 2026-05-29T15:07:15.394Z
- **Finished:** 2026-05-29T15:09:13.734Z
- **Title:** Competitor summary

## Plan
Research: competitors and summarise differences

### Steps
1. ✓ Researching "competitors and summarise differences" — vault + web — `research.deep` (18.4s)
    > research signal detected ("Research competitors") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (9.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (15.2s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Competitor summary – NeuroWorks platform  

**Status:** No competitor data found in the vault or in the web‑search results provided. The only available evidence is a research‑task note that lists the request but contains no competitor names, positioning statements, feature lists, or pricing details.  

### What was found
- Vault entry “Research: competitors and summarise differences” (0‑Inbox/202605290952‑research‑competitors‑and‑summarise‑differences.md) contains only the task title, no supporting material.  
- Web results returned unrelated email‑management forums and a dead Microsoft page, none of which describe AI‑workforce platforms.  

### Information needed to complete the summary
1. **Competitor names** (e.g., other AI‑workforce or task‑automation platforms).  
2. **Literal positioning quotes** taken verbatim from each competitor’s landing page or marketing material.  
3. **Feature or capability comparisons** that identify 2‑3 areas where each competitor outperforms NeuroWorks and 2‑3 areas where NeuroWorks has the advantage.  
4. **Pricing tiers** (entry, mid‑tier, enterprise) with source URLs and the date each price was accessed.  
5. **Known gaps** for each competitor (e.g., contract length, integration limits, support models) that remain unverified.  

Once the above information is supplied, a structured competitor summary can be produced following the skill‑playbook format.  

*Assumed: The user intends a concise, sales‑oriented one‑page competitor summary as defined in the internal “competitor‑summary” playbook.*

<details><summary>Log</summary>

```
[2026-05-29T15:07:15.400Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:07:15.402Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T15:07:15.402Z] Plan ready: 1 step — Research: competitors and summarise differences.
[2026-05-29T15:07:15.408Z] Step 1 of 1: Researching "competitors and summarise differences" — vault + web
[2026-05-29T15:07:33.815Z] All sub-agents finished in 18.4s.
[2026-05-29T15:07:33.827Z] Thinking with openai/gpt-oss-20b:free (~3 390 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:08:08.104Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:08:08.108Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:08:08.108Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:08:08.108Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:08:09.172Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T15:08:17.824Z] Wave 1 finished in 9.7s.
[2026-05-29T15:08:17.824Z] All sub-agents finished in 9.7s.
[2026-05-29T15:08:17.828Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T15:08:32.999Z] All sub-agents finished in 15.2s.
[2026-05-29T15:08:33.006Z] quality.check failed (score=0.57, issues: Does not provide requested competitor summary; only notes lack of data; Fails to meet task requirements) — re-synthesising with the large model
[2026-05-29T15:08:33.015Z] Thinking with openai/gpt-oss-120b:free (~4 095 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:08:56.286Z] quality rescue improved score: 0.57 → 0.9; using the rescued draft
[2026-05-29T15:08:56.286Z] peer review verdict=needs-work (Does not provide competitor summary as requested; Lacks actionable next steps) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T15:08:56.294Z] Thinking with openai/gpt-oss-120b:free (~4 239 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:09:13.489Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T15:09:13.489Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:09:13.734Z] Vault commit: done.
```
</details>
