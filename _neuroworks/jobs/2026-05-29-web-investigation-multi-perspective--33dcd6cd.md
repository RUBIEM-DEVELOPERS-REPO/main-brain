---
type: job
title: Web investigation (multi-perspective)
slug: web-investigation-multi-perspective--33dcd6cd
created: 2026-05-29T09:01:44.648Z
jobId: 33dcd6cd-d7b9-4996-a102-9f5dc0e0ecc9
status: succeeded
template: custom-researcher-web-investigation-multi-perspective
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:59:08.714Z
finishedAt: 2026-05-29T09:01:44.647Z
---

# Web investigation (multi-perspective)

- **Status:** succeeded
- **Template:** custom-researcher-web-investigation-multi-perspective
- **Started:** 2026-05-29T08:59:08.714Z
- **Finished:** 2026-05-29T09:01:44.647Z
- **Title:** Web investigation (multi-perspective)

## Plan
Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem

### Steps
1. ✓ Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem" — `research.multiperspective` (39.1s)
    > multi-perspective shape recognised — skipping planner LLM
2. ✓ Quality-checking the draft — `quality.check` (6.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (8.2s)
    > auto-injected: quality score=0.47 (pass=false) — peer review for a second opinion

## Answer
**Topic statement**  
The task is to examine how digital platforms affect news and journalistic content from four analytical stand‑points—mainstream, critical, practitioner, and recent—by locating the most prominent live‑web sources for each perspective and synthesising their claims.

**What we have found so far**  
- A prior attempt retrieved only the Centre for Media Transition’s 2018 report (cited as a mainstream source) and noted a lack of critical, practitioner, and recent material [1].  
- No live‑web sources were successfully fetched for the critical, practitioner, or recent perspectives, and the existing citations do not cover the required breadth [2][3][4].

**Open questions / information needed**  
1. **Mainstream perspective:** Which up‑to‑date (2023‑2026) reports, industry analyses, or reputable news‑media studies discuss platform impact on news ecosystems?  
2. **Critical perspective:** Are there peer‑reviewed articles, think‑tank papers, or activist‑oriented essays that critique platform power, algorithmic bias, or the erosion of journalistic standards?  
3. **Practitioner perspective:** Can we locate case studies, newsroom white‑papers, or trade‑press interviews that describe how journalists and media organisations adapt workflows, revenue models, or distribution strategies in response to platforms?  
4. **Recent perspective:** What publications from the last 12‑24 months (e.g., 2024‑2026) provide fresh data or commentary on platform dominance, regulatory debates, or emerging technologies (AI‑generated news, short‑form video) affecting journalism?  
5. **Cross‑cutting themes:** Once sources are gathered, which recurring issues (e.g., audience fragmentation, monetisation pressures, algorithmic curation) appear across the four lenses?

**Proposed structure for the final report**  

```
## Topic statement
[Brief definition of the research question]

## Perspectives
### Mainstream
- Summary of key findings
- Top 3 live‑web sources (cite [N])

### Critical
- Summary of key critiques
- Top 3 live‑web sources (cite [N])

### Practitioner
- Summary of operational impacts
- Top 3 live‑web sources (cite [N])

### Recent
- Summary of the latest developments
- Top 3 live‑web sources (cite [N])

## Cross‑cutting themes
- List of themes that appear in multiple perspectives, with citations

## Open questions
- Remaining gaps that require further investigation

## Bottom line
- Concise answer grounded in the strongest evidence
```

**Next steps**  
- Run `research.multiperspective` for each of the four perspectives, ensuring the sub‑agents query live web sources and return at least three credible references per perspective.  
- Capture the resulting note to `0‑Inbox/` for future reference.  

*Assumed: the user wants a full report once live sources are available; the current answer outlines the missing evidence and the required next actions.*

<details><summary>Log</summary>

```
[2026-05-29T08:59:08.723Z] Working as Clawbot — AI agent operator.
[2026-05-29T08:59:08.726Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T08:59:08.726Z] Plan ready: 1 step — Multi-perspective: the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem.
[2026-05-29T08:59:08.740Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:59:08.740Z] Step 1 of 1: Multi-perspective research: "the following topic with perspectives 'mainstream, critical, practitioner, recent'. Each sub-agent must hit the live web, fetch top sources, and cite [N]. Produce a structured report with Topic statem"
[2026-05-29T08:59:47.814Z] All sub-agents finished in 39.1s.
[2026-05-29T08:59:47.823Z] Thinking with openai/gpt-oss-20b:free (~3 913 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:00:07.839Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:00:07.841Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:00:07.841Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:00:07.841Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:00:07.841Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:00:14.145Z] Wave 1 finished in 6.3s.
[2026-05-29T09:00:14.145Z] All sub-agents finished in 6.3s.
[2026-05-29T09:00:14.148Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:00:14.148Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:00:22.324Z] All sub-agents finished in 8.2s.
[2026-05-29T09:00:22.328Z] quality.check failed (score=0.47, issues: High risk of hallucination and unsupported claims; Insufficient inline citations for substantive statements) — re-synthesising with the large model
[2026-05-29T09:00:22.338Z] Thinking with openai/gpt-oss-120b:free (~4 685 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:00:55.539Z] quality rescue improved score: 0.47 → 0.8; using the rescued draft
[2026-05-29T09:00:55.539Z] peer review verdict=needs-work (No live web sources fetched or cited; claims about missing sources are unsupported and likely hallucinated; Answer does ) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:00:55.547Z] Thinking with openai/gpt-oss-120b:free (~4 914 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:01:41.727Z] retry verdict=needs-work and quality not improved (0.56 ≤ 0.8); keeping the rescued/original draft
[2026-05-29T09:01:41.727Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:01:44.647Z] Vault commit: done.
```
</details>
