---
type: job
title: Web investigation (multi-perspective)
slug: web-investigation-multi-perspective--1cb6b8b3
created: 2026-06-01T13:43:15.472Z
jobId: 1cb6b8b3-4600-4fb3-ad4a-38756666ea33
status: succeeded
template: custom-researcher-web-investigation-multi-perspective
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:38:56.961Z
finishedAt: 2026-06-01T13:43:15.472Z
---

# Web investigation (multi-perspective)

- **Status:** succeeded
- **Template:** custom-researcher-web-investigation-multi-perspective
- **Started:** 2026-06-01T13:38:56.961Z
- **Finished:** 2026-06-01T13:43:15.472Z
- **Title:** Web investigation (multi-perspective)

## Plan
Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem

### Steps
1. ✓ Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem" — `research.multiperspective` (66.2s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (12.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (12.1s)
    > auto-injected: quality score=0.19 (pass=false) — peer review for a second opinion

## Answer
**Bottom line**  
A meaningful multi‑perspective synthesis cannot be generated without a clearly defined subject.  

## What we need to proceed
1. **Exact topic** – the specific issue, technology, policy, or phenomenon you want examined.  
2. **Scope constraints** – any limits on geography, industry, or time frame (e.g., “U.S. fintech regulation 2023‑2025”).  
3. **Source preferences** – whether you require peer‑reviewed literature, industry reports, news media, or a mix.  
4. **Intended audience** – senior leadership, technical staff, external partners, etc., to tailor tone and depth.  

## Suggested report skeleton (to be filled once the topic is provided)

| Perspective | Key points (example) | Representative sources |
|-------------|----------------------|------------------------|
| **Mainstream** | Consensus view, widely reported facts | [N] |
| **Critical** | Power‑analysis, alternative narratives | [N] |
| **Practitioner** | Operational insights, best‑practice guidance | [N] |
| **Recent** | Latest developments, emerging research | [N] |

### Cross‑cutting themes  
- *Theme 1*: … (appears across multiple lenses)  
- *Theme 2*: … (interpreted differently by each perspective)

### Open questions  
1. What precise subject should the synthesis address?  
2. Which stakeholder groups must be represented?  
3. Are there any source‑type restrictions (e.g., only peer‑reviewed)?  

*Assumed: the requester seeks a structured, citation‑rich report once the topic is clarified.*

<details><summary>Log</summary>

```
[2026-06-01T13:38:56.972Z] Working as Clawbot — AI agent operator.
[2026-06-01T13:38:57.178Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-06-01T13:38:57.178Z] Plan ready: 1 step — Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem.
[2026-06-01T13:38:57.249Z] Step 1 of 1: Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem"
[2026-06-01T13:40:03.448Z] All sub-agents finished in 66.2s.
[2026-06-01T13:40:03.467Z] Thinking with openai/gpt-oss-20b:free (~3 913 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T13:40:21.540Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T13:40:21.602Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T13:40:21.602Z] Step 3 of 3: Security-scanning the note
[2026-06-01T13:40:21.602Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T13:40:34.001Z] Wave 1 finished in 12.4s.
[2026-06-01T13:40:34.001Z] All sub-agents finished in 12.4s.
[2026-06-01T13:40:34.016Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T13:40:46.122Z] All sub-agents finished in 12.1s.
[2026-06-01T13:40:46.129Z] quality.check failed (score=0.19, issues: High likelihood of unsupported or inaccurate claims; Insufficient and irrelevant citations) — re-synthesising with the large model
[2026-06-01T13:40:46.143Z] Thinking with openai/gpt-oss-120b:free (~4 559 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T13:41:16.815Z] quality rescue improved score: 0.19 → 0.84; using the rescued draft
[2026-06-01T13:41:16.815Z] peer review verdict=bad (Does not provide requested research report; merely asks for clarification; Fails to perform live web searches or cite so) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T13:41:16.831Z] Thinking with openai/gpt-oss-120b:free (~4 717 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T13:43:13.187Z] retry verdict=bad and quality not improved (0.46 ≤ 0.84); keeping the rescued/original draft
[2026-06-01T13:43:13.187Z] Wrote to your second brain — committing the changes.
[2026-06-01T13:43:15.472Z] Vault commit: done.
```
</details>
