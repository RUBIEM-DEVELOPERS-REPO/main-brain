---
type: job
title: Web investigation (multi-perspective)
slug: web-investigation-multi-perspective--0611e837
created: 2026-05-29T20:26:50.955Z
jobId: 0611e837-5d16-41e8-979e-1cc2d8d40a4b
status: succeeded
template: custom-researcher-web-investigation-multi-perspective
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:22:58.701Z
finishedAt: 2026-05-29T20:26:50.955Z
---

# Web investigation (multi-perspective)

- **Status:** succeeded
- **Template:** custom-researcher-web-investigation-multi-perspective
- **Started:** 2026-05-29T20:22:58.701Z
- **Finished:** 2026-05-29T20:26:50.955Z
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
1. ✓ Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem" — `research.multiperspective` (47.7s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (9.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.8s)
    > auto-injected: quality score=0.64 (pass=false) — peer review for a second opinion

## Answer
**Topic statement**  
A multi‑perspective web investigation of *[insert specific topic]*, synthesising mainstream, critical, practitioner, and recent viewpoints.

**Perspectives**  

| Perspective | What was found | Gaps / needed clarification |
|-------------|----------------|------------------------------|
| **Mainstream** | No live‑web sources retrieved. Typical mainstream outlets (e.g., major news sites, industry analysts) would be consulted. | URLs of the top‑ranked mainstream articles or a brief description of the desired focus (e.g., market size, policy overview). |
| **Critical** | No live‑web sources retrieved. Critical commentary usually appears in opinion pieces, academic critiques, or watchdog reports. | Titles or authors of critical pieces you want included, or a definition of “critical” for this topic (e.g., consumer‑rights, environmental impact). |
| **Practitioner** | No live‑web sources retrieved. Practitioner insights are found in blogs, forums, or professional association publications. | Names of practitioner communities (e.g., specific trade groups, Stack Exchange tags) or example URLs you wish to prioritize. |
| **Recent** | No live‑web sources retrieved. “Recent” requires sources dated within the last 12 months. | Desired cut‑off date or any recent events you want highlighted. |

**Cross‑cutting themes**  
* Not applicable until source material is gathered.  
* Anticipated themes may include: alignment or tension between mainstream narratives and critical critiques; practical implementation challenges identified by practitioners; emerging trends captured by recent publications.

**Open questions**  
1. Which exact topic (product, policy, technology, etc.) should the investigation target?  
2. Are there preferred domains or outlets for each perspective (e.g., *The Economist* for mainstream, *TechCrunch* for practitioner, *The Intercept* for critical)?  
3. What date range defines “recent” for this task?  
4. Do you require a fixed number of sources per perspective (e.g., top 3)?  

**Bottom line**  
Live‑web research has not yet been performed; to deliver a complete, cited multi‑perspective report we need the specific topic definition and any preferred source constraints.  

*Assumed: the user intends a generic template for a future investigation and therefore expects clarification before proceeding.*

<details><summary>Log</summary>

```
[2026-05-29T20:22:58.716Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:22:58.736Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T20:22:58.736Z] Plan ready: 1 step — Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem.
[2026-05-29T20:22:58.753Z] Step 1 of 1: Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem"
[2026-05-29T20:23:46.426Z] All sub-agents finished in 47.7s.
[2026-05-29T20:23:46.456Z] Thinking with openai/gpt-oss-20b:free (~3 975 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:23:49.901Z] Synth produced empty output — falling back to the raw research result.
[2026-05-29T20:23:49.902Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:23:49.916Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:23:49.916Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:23:49.916Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:23:59.296Z] Wave 1 finished in 9.4s.
[2026-05-29T20:23:59.296Z] All sub-agents finished in 9.4s.
[2026-05-29T20:23:59.314Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:24:00.978Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:24:10.151Z] All sub-agents finished in 10.8s.
[2026-05-29T20:24:10.158Z] quality.check failed (score=0.64, issues: Missing inline citations for all claims; Report structure incomplete and not fully aligned with requested format) — re-synthesising with the large model
[2026-05-29T20:24:10.174Z] Thinking with openai/gpt-oss-120b:free (~4 722 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:24:42.842Z] quality rescue improved score: 0.64 → 0.75; using the rescued draft
[2026-05-29T20:24:42.842Z] peer review verdict=bad (Does not perform live web research as required; Citations are placeholders, not real sources) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:24:42.856Z] Thinking with openai/gpt-oss-120b:free (~4 907 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:26:47.825Z] retry verdict=bad and quality not improved (0.4 ≤ 0.75); keeping the rescued/original draft
[2026-05-29T20:26:47.825Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:26:50.955Z] Vault commit: done.
```
</details>
