---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-aa5e274f
created: 2026-05-29T19:26:32.082Z
jobId: aa5e274f-1e6d-4ef1-b21d-feaeeb781694
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:25:10.920Z
finishedAt: 2026-05-29T19:26:32.081Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-05-29T19:25:10.920Z
- **Finished:** 2026-05-29T19:26:32.081Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (14.2s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (11.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.0s)
    > auto-injected: quality score=0.60 (pass=false) — peer review for a second opinion

## Answer
## Distinguishing Common Documentation Types  

| Type | Primary Goal | Typical Structure | When to Use |
|------|--------------|-------------------|-------------|
| **Reference (look‑up)** | Provide concise, authoritative facts that a reader can locate quickly. | Alphabetical or topical entries, tables, glossaries, API specs; minimal narrative. | When users need exact details such as command syntax, parameter definitions, or error codes. |
| **How‑to (recipe)** | Guide the reader through a single, well‑defined task. | Step‑by‑step numbered actions, required prerequisites, expected outcome; often includes screenshots or code snippets. | For procedures like “install the CLI” or “reset a password.” |
| **Tutorial (learning)** | Teach a broader skill or workflow through progressive learning. | Introductory concepts, incremental exercises, explanations interleaved with hands‑on steps; may include checkpoints or quizzes. | When onboarding new users to a technology stack or explaining a multi‑stage process. |
| **Explanation (concept)** | Clarify underlying ideas, principles, or mechanisms. | Narrative description, diagrams, analogies, and examples; less focus on immediate actions. | For topics such as “how vector embeddings work” or “the rationale behind RESTful design.” |

### How the Types Relate  
- **Reference** entries are consulted *after* a user has learned the concept.  
- **How‑to** documents assume the reader already understands the relevant concepts and need only the procedural steps.  
- **Tutorials** blend explanation with hands‑on steps, building knowledge before the user attempts the task.  
- **Explanations** stand alone as conceptual background and may be embedded within tutorials or reference notes to provide context.

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-05-29T19:25:10.930Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:25:12.245Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T19:25:12.245Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept.
[2026-05-29T19:25:12.249Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-05-29T19:25:26.450Z] All sub-agents finished in 14.2s.
[2026-05-29T19:25:26.450Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:25:26.459Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:25:26.459Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:25:26.459Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:25:37.764Z] Wave 1 finished in 11.3s.
[2026-05-29T19:25:37.764Z] All sub-agents finished in 11.3s.
[2026-05-29T19:25:37.773Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:25:38.794Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T19:25:43.763Z] All sub-agents finished in 6.0s.
[2026-05-29T19:25:43.769Z] quality.check failed (score=0.6, issues: Does not provide the requested distinctions; fails to meet task requirement) — re-synthesising with the large model
[2026-05-29T19:25:43.778Z] Thinking with openai/gpt-oss-120b:free (~3 200 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:26:07.722Z] quality rescue improved score: 0.6 → 0.95; using the rescued draft
[2026-05-29T19:26:07.722Z] peer review verdict=bad (Does not provide distinctions; fails to answer task; No factual content; claims lack evidence) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:26:07.728Z] Thinking with openai/gpt-oss-120b:free (~3 347 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:26:31.408Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T19:26:31.408Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:26:32.081Z] Vault commit: done.
```
</details>
