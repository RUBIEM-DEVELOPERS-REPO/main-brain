---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-d065e639
created: 2026-05-30T18:05:48.306Z
jobId: d065e639-0bbf-4705-b876-51ef7bda58c7
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:59:12.688Z
finishedAt: 2026-05-30T18:05:48.306Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-05-30T17:59:12.688Z
- **Finished:** 2026-05-30T18:05:48.306Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…\nDescription: Persona-derived starter task for \"Tao\"."
}
```

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (33.5s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.1s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Distinctions Among Technical‑Writing Document Types  

**Reference (look‑up)** – A concise, authoritative source that supplies quick facts, definitions, or specifications. It is consulted to retrieve specific information and is typically organized alphabetically or by topic.  

**How‑to (recipe)** – Step‑by‑step instructions that guide the reader through a particular task or process. It emphasizes the sequence of actions and often includes prerequisites, warnings, and expected outcomes.  

**Tutorial (learning)** – A structured, progressive set of lessons that teaches a skill or concept. It builds on prior knowledge, incorporates examples and exercises, and usually concludes with a project or assessment.  

**Explanation (concept)** – A conceptual overview that clarifies why something works or what it means. It provides background, context, and theoretical foundations rather than procedural steps.  

These categories differ in purpose, depth, and format, though they may overlap in practice (e.g., a tutorial may contain a reference section, and a how‑to may begin with a brief explanation) [4].

<details><summary>Log</summary>

```
[2026-05-30T17:59:12.702Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:59:14.003Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-30T17:59:14.003Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept.
[2026-05-30T17:59:14.008Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-05-30T17:59:47.507Z] All sub-agents finished in 33.5s.
[2026-05-30T17:59:47.507Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:59:47.521Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:59:47.521Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:59:47.521Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:04:47.524Z] Wave 1 finished in 300.0s.
[2026-05-30T18:04:47.524Z] All sub-agents finished in 300.0s.
[2026-05-30T18:04:47.532Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:04:57.618Z] All sub-agents finished in 10.1s.
[2026-05-30T18:04:57.625Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T18:04:57.632Z] Thinking with openai/gpt-oss-120b:free (~3 480 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:05:24.543Z] quality rescue improved score: 0 → 0.96; using the rescued draft
[2026-05-30T18:05:24.543Z] peer review verdict=bad (Does not provide the requested distinctions; answer is off‑task and unhelpful) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:05:24.551Z] Thinking with openai/gpt-oss-120b:free (~3 618 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:05:47.918Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-30T18:05:47.918Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:05:48.306Z] Vault commit: done.
```
</details>
