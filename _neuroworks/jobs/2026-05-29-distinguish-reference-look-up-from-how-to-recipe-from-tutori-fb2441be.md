---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-fb2441be
created: 2026-05-29T20:56:44.387Z
jobId: fb2441be-d9ee-46e2-96bd-9f1820518ead
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:49:48.703Z
finishedAt: 2026-05-29T20:56:44.387Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-05-29T20:49:48.703Z
- **Finished:** 2026-05-29T20:56:44.387Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…\nDescription: Persona-derived starter task for \"Tao\"."
}
```

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept). Context: R

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (57.3s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (284.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (7.4s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Distinguishing Documentation Types for Technical Writers  

| Type | Goal | Typical Structure | Audience Expectation | Example (R) |
|------|------|-------------------|----------------------|-------------|
| **Reference (look‑up)** | Provide exact, quickly consultable facts. | Alphabetical or searchable entries; concise prose, often tables or bullet lists with syntax, arguments, return values. | “What does `lm()` accept as arguments?” “What is the default value of `na.rm`?” | R help pages (`?lm`, `?read.csv`) list arguments, defaults, and a one‑sentence description. | [1] |
| **How‑to (recipe)** | Show how to accomplish a specific task with a concrete, step‑by‑step sequence. | Prerequisites → Steps → Expected outcome; code snippets ready to copy verbatim; short “gotchas” or tips. | “How do I import a CSV with a custom delimiter?” | `read.table(file, sep='|')` to read a pipe‑delimited file. | [1] |
| **Tutorial (learning)** | Guide a learner through a broader workflow or concept, building competence over several steps. | Intro & motivation → Concepts → Incremental exercises → Summary; explanations interleaved with code, often with visual output. | “I want to learn regression modelling from scratch.” | Multi‑page tutorial covering data import, `ggplot2` visualisation, model fitting, diagnostics, and interpretation. | [1] |
| **Explanation (concept)** | Clarify a concept or principle without prescribing a concrete task. | Narrative description; definitions; diagrams or examples that illustrate the idea; minimal code unless needed for illustration. | “What is the difference between a factor and a character vector?” | Conceptual overview of R’s factor data type, its underlying integer representation, and typical use cases. | [1] |

### Key Distinctions  

- **Reference** is *lookup‑oriented*: users seek a single fact and expect minimal surrounding context.  
- **How‑to** is *task‑oriented*: users need a reproducible series of actions, with ready‑to‑copy code.  
- **Tutorial** is *learning‑oriented*: users aim to acquire a skill, requiring progressive exposition and practice.  
- **Explanation** is *concept‑oriented*: users want to understand “why” or “how” something works, often supported by diagrams or analogies rather than executable steps.  

These categories help technical writers choose appropriate structure, depth, and tone for each documentation piece.

<details><summary>Log</summary>

```
[2026-05-29T20:49:48.715Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:49:48.718Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T20:49:48.718Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept). Context: R.
[2026-05-29T20:49:48.724Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-05-29T20:50:46.068Z] All sub-agents finished in 57.3s.
[2026-05-29T20:50:46.075Z] Thinking with openai/gpt-oss-20b:free (~2 642 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:50:47.599Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T20:51:24.159Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T20:51:24.159Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:51:24.163Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:51:24.163Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:51:24.163Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:56:08.994Z] Wave 1 finished in 284.8s.
[2026-05-29T20:56:08.994Z] All sub-agents finished in 284.8s.
[2026-05-29T20:56:08.998Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:56:16.358Z] All sub-agents finished in 7.4s.
[2026-05-29T20:56:16.363Z] quality.check failed (score=?, issues: scorer JSON unparseable) — re-synthesising with the large model
[2026-05-29T20:56:16.369Z] Thinking with openai/gpt-oss-120b:free (~3 305 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:56:44.005Z] quality rescue improved score: 0 → 0.96; using the rescued draft
[2026-05-29T20:56:44.005Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:56:44.387Z] Vault commit: done.
```
</details>
