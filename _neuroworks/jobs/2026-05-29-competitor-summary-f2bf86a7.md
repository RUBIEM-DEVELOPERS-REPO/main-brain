---
type: job
title: Competitor summary
slug: competitor-summary-f2bf86a7
created: 2026-05-29T09:54:48.865Z
jobId: f2bf86a7-7226-4d84-ad81-a1f56a399cc6
status: succeeded
template: custom-emp-competitor-summary
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:52:23.636Z
finishedAt: 2026-05-29T09:54:48.865Z
---

# Competitor summary

- **Status:** succeeded
- **Template:** custom-emp-competitor-summary
- **Started:** 2026-05-29T09:52:23.636Z
- **Finished:** 2026-05-29T09:54:48.865Z
- **Title:** Competitor summary

## Plan
Research: competitors and summarise differences

### Steps
1. ✓ Researching "competitors and summarise differences" — vault + web — `research.deep` (36.2s)
    > research signal detected ("Research competitors") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (12.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.9s)
    > auto-injected: quality score=0.06 (pass=false) — peer review for a second opinion

## Answer
## Competitor‑difference research – status update

**What was found**  
The search returned only a generic taxonomy of competitor types (direct, indirect, local, global, strategic) and no concrete competitor names, positioning statements, feature comparisons, or pricing details for NeuroWorks [3]. No vault notes containing the required information were located.

**What is needed to complete the analysis**  

1. **List of specific competitors** you want compared (e.g., “CortexAI, TeamFlow, WorkBot”).  
2. **Source URLs or documents** where each competitor’s public positioning is stated (landing‑page headline, product sheet, press release).  
3. **Pricing information** for each competitor (tiered plans, published rates, or “contact sales” notes).  
4. **Internal insights** (customer feedback, sales call notes) that highlight perceived strengths or weaknesses of each competitor.  
5. **Target market definition** (enterprise SaaS, SMB, industry vertical) to frame the comparison.

**Next steps**  
Provide the items above, and the following structured summary can be populated for each competitor:

```
## Competitor summary — <Competitor name>

**Category:** <Direct / adjacent / substitute>
**Headcount + funding:** <if known — Series X, ~N employees>
**Public positioning (quoted):** "<verbatim from their landing page>"

## What they do better than us
1. <Concrete advantage>
2. <Concrete advantage>
3. <Concrete advantage>

## What we do better
1. <Concrete advantage>
2. <Concrete advantage>
3. <Concrete advantage>

## Pricing (best knowledge)
- Entry: <$X / month or "opaque, contact sales">
- Mid‑tier: …
- Enterprise: …
- Source: <pricing page accessed YYYY‑MM‑DD>

## Sales talking point
> When a customer mentions <competitor>, say:
> "<One‑line that acknowledges their strength, redirects to our strength, and ends with a question>"

## What we don’t know
- <Specific gap>
- <Specific gap>

## Sources
- <Competitor site, dated>
- <Funding announcement, dated>
- <Internal notes, dated>
```

<details><summary>Log</summary>

```
[2026-05-29T09:52:23.643Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:52:23.645Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T09:52:23.645Z] Plan ready: 1 step — Research: competitors and summarise differences.
[2026-05-29T09:52:23.649Z] Step 1 of 1: Researching "competitors and summarise differences" — vault + web
[2026-05-29T09:52:59.848Z] All sub-agents finished in 36.2s.
[2026-05-29T09:52:59.859Z] Thinking with openai/gpt-oss-20b:free (~3 535 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:53:14.609Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:53:14.615Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:53:14.615Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:53:14.615Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:53:26.633Z] Wave 1 finished in 12.0s.
[2026-05-29T09:53:26.633Z] All sub-agents finished in 12.0s.
[2026-05-29T09:53:26.637Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:53:33.563Z] All sub-agents finished in 6.9s.
[2026-05-29T09:53:33.568Z] quality.check failed (score=0.06, issues: No specific competitors identified; generic content; no inline citations; does not meet task requirements) — re-synthesising with the large model
[2026-05-29T09:53:33.579Z] Thinking with openai/gpt-oss-120b:free (~4 184 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:54:04.286Z] quality rescue improved score: 0.06 → 0.71; using the rescued draft
[2026-05-29T09:54:04.286Z] peer review verdict=bad (No competitors identified or compared; Lacks required structure and details) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:54:04.296Z] Thinking with openai/gpt-oss-120b:free (~4 341 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:54:48.597Z] retry verdict=needs-work and quality not improved (0.31 ≤ 0.71); keeping the rescued/original draft
[2026-05-29T09:54:48.597Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:54:48.865Z] Vault commit: done.
```
</details>
