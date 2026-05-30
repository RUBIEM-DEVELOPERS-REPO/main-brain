---
type: job
title: Web investigation (multi-perspective)
slug: web-investigation-multi-perspective--721c4a4f
created: 2026-05-30T10:21:50.138Z
jobId: 721c4a4f-f02e-4540-94ff-8ae190bb518a
status: succeeded
template: custom-researcher-web-investigation-multi-perspective
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:55:15.061Z
finishedAt: 2026-05-30T10:21:50.138Z
---

# Web investigation (multi-perspective)

- **Status:** succeeded
- **Template:** custom-researcher-web-investigation-multi-perspective
- **Started:** 2026-05-30T09:55:15.061Z
- **Finished:** 2026-05-30T10:21:50.138Z
- **Title:** Web investigation (multi-perspective)

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Web investigation (multi-perspective)\nDescription: Full multi-perspective web investigation — parallel sub-agents query the web from mainstream, critical, practitioner, and recent angles, then synthesise a cited report."
}
```

## Plan
Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem

### Steps
1. ✓ Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem" — `research.multiperspective` (50.1s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (8.6s)
    > auto-injected: quality score=0.43 (pass=false) — peer review for a second opinion

## Answer
## Topic statement  
The request does not specify a concrete subject for the multi‑perspective analysis. Without a defined topic, the sub‑agents cannot retrieve live‑web sources or generate the required sections.

## Open questions  
1. What exact topic should be examined (e.g., a technology, policy, concept, or product)?  
2. Are there preferred source types (academic papers, industry reports, news articles) or a geographic focus?  
3. Do you have any existing notes or references that should be incorporated into the analysis?  

## Next steps  
Provide the missing topic details and any source preferences. Once clarified, the “mainstream, critical, practitioner, recent” perspectives will be researched, cited, and compiled into the structured report as requested.  

*Assumed: the user intended to supply a specific subject but omitted it; clarification is required before any research can proceed.*

<details><summary>Log</summary>

```
[2026-05-30T09:55:15.085Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:55:15.117Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-30T09:55:15.117Z] Plan ready: 1 step — Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem.
[2026-05-30T09:55:15.127Z] Step 1 of 1: Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem"
[2026-05-30T09:56:05.239Z] All sub-agents finished in 50.1s.
[2026-05-30T09:56:05.267Z] Thinking with openai/gpt-oss-20b:free (~3 913 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T09:56:17.008Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:56:17.021Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:56:17.022Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:56:17.022Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T10:01:16.982Z] Wave 1 finished in 300.0s.
[2026-05-30T10:01:16.982Z] All sub-agents finished in 300.0s.
[2026-05-30T10:01:16.991Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T10:01:25.610Z] All sub-agents finished in 8.6s.
[2026-05-30T10:01:25.619Z] quality.check failed (score=0.43, issues: ) — re-synthesising with the large model
[2026-05-30T10:01:25.636Z] Thinking with openai/gpt-oss-120b:free (~4 331 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T10:01:45.753Z] quality rescue improved score: 0.43 → 0.9; using the rescued draft
[2026-05-30T10:01:45.753Z] peer review verdict=bad (Does not provide requested report; fails to identify or analyze a topic; no citations; not addressing task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T10:01:45.775Z] Thinking with openai/gpt-oss-120b:free (~4 476 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T10:21:48.339Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-30T10:21:48.339Z] Wrote to your second brain — committing the changes.
[2026-05-30T10:21:50.138Z] Commit didn't go through (non-fatal): fatal: Unable to create 'C:/vault-root/Main brain/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.
.
```
</details>
