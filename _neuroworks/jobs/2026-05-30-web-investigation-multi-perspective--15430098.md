---
type: job
title: Web investigation (multi-perspective)
slug: web-investigation-multi-perspective--15430098
created: 2026-05-30T17:34:43.372Z
jobId: 15430098-63a3-458a-bd85-2c09d16883f7
status: succeeded
template: custom-researcher-web-investigation-multi-perspective
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:32:45.359Z
finishedAt: 2026-05-30T17:34:43.372Z
---

# Web investigation (multi-perspective)

- **Status:** succeeded
- **Template:** custom-researcher-web-investigation-multi-perspective
- **Started:** 2026-05-30T17:32:45.359Z
- **Finished:** 2026-05-30T17:34:43.372Z
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
1. ✓ Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem" — `research.multiperspective` (40.3s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (5.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (19.7s)
    > auto-injected: quality score=0.20 (pass=false) — peer review for a second opinion

## Answer
**Topic statement**  
The request calls for a multi‑perspective synthesis on an unspecified “following topic” using the lenses — mainstream, critical, practitioner, and recent — and requires live‑web citations. No concrete subject has been identified, and the available vault entries contain only generic navigation fragments that do not discuss any coherent topic [3].

### Perspectives  

| Lens | Findings |
|------|----------|
| **Mainstream** | No mainstream sources retrieved that address the undefined topic. |
| **Critical** | No critical‑type analyses (limitations, controversies, power dynamics) were found. |
| **Practitioner** | No practitioner‑oriented materials (case studies, how‑to guides, industry reports) were located. |
| **Recent** | No recent (2025‑2026) news or updates were identified. |

### Cross‑cutting themes  
No themes can be extracted because relevant source material is absent.

### Open questions  
1. What specific subject or domain does “the following topic” refer to?  
2. Are there internal notes, project names, or keywords that can narrow the search?  
3. Should the research prioritize any particular source hierarchy (e.g., internal vault > external web)?  

**Bottom line**  
A substantive multi‑perspective report cannot be produced without clarification of the target topic. Please provide the exact subject or additional context so the sub‑agents can fetch appropriate live‑web sources and complete the analysis.  

*Assumed: the user intended a concrete topic but omitted it; clarification is required to proceed.*

<details><summary>Log</summary>

```
[2026-05-30T17:32:45.381Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:32:45.400Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-30T17:32:45.400Z] Plan ready: 1 step — Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem.
[2026-05-30T17:32:45.418Z] Step 1 of 1: Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem"
[2026-05-30T17:33:25.687Z] All sub-agents finished in 40.3s.
[2026-05-30T17:33:25.796Z] Thinking with openai/gpt-oss-20b:free (~3 913 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T17:33:27.060Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T17:33:58.833Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-30T17:33:58.834Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:33:58.839Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:33:58.839Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:33:58.839Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:34:04.565Z] Wave 1 finished in 5.7s.
[2026-05-30T17:34:04.565Z] All sub-agents finished in 5.7s.
[2026-05-30T17:34:04.572Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:34:24.315Z] All sub-agents finished in 19.7s.
[2026-05-30T17:34:24.322Z] quality.check failed (score=0.2, issues: hallucinated citation [1] research.multiperspective; claims of no sources without evidence) — re-synthesising with the large model
[2026-05-30T17:34:24.337Z] Thinking with openai/gpt-oss-120b:free (~4 525 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:34:42.927Z] quality rescue improved score: 0.2 → 0.87; using the rescued draft
[2026-05-30T17:34:42.927Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:34:43.372Z] Vault commit: done.
```
</details>
