---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-c02043c4
created: 2026-05-29T14:20:52.824Z
jobId: c02043c4-57c9-4cfe-ac6b-8de6de12fd31
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:18:34.677Z
finishedAt: 2026-05-29T14:20:52.824Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-05-29T14:18:34.677Z
- **Finished:** 2026-05-29T14:20:52.824Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (19.8s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (8.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.5s)
    > auto-injected: quality score=0.57 (pass=false) — peer review for a second opinion

## Answer
## Distinguishing Four Core Types of Technical‑Writing Content  

| Content Type | Primary Goal | Typical Structure | When to Use |
|--------------|--------------|-------------------|-------------|
| **Reference (look‑up)** | Provide concise, authoritative facts that a reader can locate quickly. | Alphabetical or hierarchical entries; minimal narrative; tables, specifications, command syntax, API signatures. | When users need exact details, parameters, or definitions without context – e.g., API docs, product specs, command‑line help. |
| **How‑to (recipe)** | Guide the reader through a single, well‑defined task. | Step‑by‑step numbered actions; prerequisites listed first; optional warnings; expected outcome at the end. | For procedures that have a clear start and finish, such as installing software, configuring a setting, or performing a maintenance task. |
| **Tutorial (learning)** | Teach a broader skill or concept through progressive examples. | Introductory overview, followed by multiple linked exercises; explanations interleaved with hands‑on steps; summary of key takeaways. | When the audience is unfamiliar with the subject and needs both theory and practice, such as onboarding to a new platform or learning a programming language. |
| **Explanation (concept)** | Clarify underlying ideas, principles, or why something works. | Narrative exposition, diagrams, analogies; may include comparisons or cause‑effect reasoning; minimal procedural detail. | For background material, design rationales, or theoretical foundations that support the other three types. |

### How the Types Relate  
- **Reference** is static and searchable; it assumes the reader already knows the task they are performing.  
- **How‑to** builds on reference material by applying it to a concrete procedure.  
- **Tutorial** expands a series of how‑to steps into a learning pathway, adding context and reinforcement.  
- **Explanation** underpins all three by supplying the conceptual model that makes the information meaningful.

_From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters._

<details><summary>Log</summary>

```
[2026-05-29T14:18:34.684Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:18:36.335Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T14:18:36.335Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept.
[2026-05-29T14:18:36.340Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-05-29T14:18:56.160Z] All sub-agents finished in 19.8s.
[2026-05-29T14:18:56.160Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:18:56.165Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:18:56.165Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:18:56.165Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:19:04.736Z] Wave 1 finished in 8.6s.
[2026-05-29T14:19:04.736Z] All sub-agents finished in 8.6s.
[2026-05-29T14:19:04.740Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:19:08.275Z] All sub-agents finished in 3.5s.
[2026-05-29T14:19:08.279Z] quality.check failed (score=0.57, issues: does not provide requested distinctions; incomplete answer; fails to meet task requirement) — re-synthesising with the large model
[2026-05-29T14:19:08.283Z] Thinking with openai/gpt-oss-120b:free (~3 063 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:20:04.926Z] quality rescue improved score: 0.57 → 0.92; using the rescued draft
[2026-05-29T14:20:04.926Z] peer review verdict=bad (No answer provided to the task; claims of insufficient information are irrelevant; Fails to distinguish reference, how-t) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:20:04.930Z] Thinking with openai/gpt-oss-120b:free (~3 217 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:20:52.577Z] retry verdict=needs-work and quality not improved (0.92 ≤ 0.92); keeping the rescued/original draft
[2026-05-29T14:20:52.577Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:20:52.824Z] Vault commit: done.
```
</details>
