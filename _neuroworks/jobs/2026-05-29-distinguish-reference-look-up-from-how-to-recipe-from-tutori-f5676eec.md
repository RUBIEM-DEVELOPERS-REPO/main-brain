---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-f5676eec
created: 2026-05-29T09:28:36.027Z
jobId: f5676eec-d2f1-4904-a1df-734f517392a8
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:27:34.947Z
finishedAt: 2026-05-29T09:28:36.027Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-05-29T09:27:34.947Z
- **Finished:** 2026-05-29T09:28:36.027Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (8.4s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (4.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (8.8s)
    > auto-injected: quality score=0.52 (pass=false) — peer review for a second opinion

## Answer
## Distinguishing Document Types in Technical Writing

**Reference (look‑up)** – A concise, fact‑based resource intended for quick retrieval of specific information. Typical forms include glossaries, API references, and quick‑start guides. The content is organized for easy scanning rather than narrative flow, allowing readers to locate exact details without reading surrounding text【4】.

**How‑to (recipe)** – A step‑by‑step procedure that instructs the reader how to accomplish a particular task. It is action‑oriented, often presented as a numbered or bulleted list, and assumes the user possesses any required prerequisites. The focus is on the sequence of actions needed to achieve a result【4】.

**Tutorial (learning)** – A longer, structured piece designed to teach a concept or skill. It builds knowledge progressively through explanations, examples, and exercises, and may include background theory, practice tasks, and assessments. The tutorial guides the reader from novice to competent practitioner【4】.

**Explanation (concept)** – A descriptive document that clarifies a principle, system, or idea. It emphasizes the “why” and “how” behind a topic, using diagrams, analogies, and detailed discussion rather than direct instructions. The goal is to deepen understanding of the underlying concepts【4】.

These categories help technical writers select the appropriate format, tone, and organization to meet the audience’s needs and the document’s purpose.

<details><summary>Log</summary>

```
[2026-05-29T09:27:34.955Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:27:35.761Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-29T09:27:35.761Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept.
[2026-05-29T09:27:35.765Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-05-29T09:27:44.169Z] All sub-agents finished in 8.4s.
[2026-05-29T09:27:44.169Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:27:44.176Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:27:44.176Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:27:44.176Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:27:48.487Z] Wave 1 finished in 4.3s.
[2026-05-29T09:27:48.487Z] All sub-agents finished in 4.3s.
[2026-05-29T09:27:48.492Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:27:57.316Z] All sub-agents finished in 8.8s.
[2026-05-29T09:27:57.325Z] quality.check failed (score=0.52, issues: Answer does not address the question; lacks any explanation of the requested distinctions; fails to provide content or structure; does not meet the task requirements) — re-synthesising with the large model
[2026-05-29T09:27:57.334Z] Thinking with openai/gpt-oss-120b:free (~3 072 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:28:16.014Z] quality rescue improved score: 0.52 → 0.92; using the rescued draft
[2026-05-29T09:28:16.014Z] peer review verdict=bad (Does not answer the question; Provides no definitions or distinctions) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:28:16.020Z] Thinking with openai/gpt-oss-120b:free (~3 221 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:28:35.755Z] retry cleared peer review (verdict=good, confidence=0.95); using retry as final answer
[2026-05-29T09:28:35.755Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:28:36.027Z] Vault commit: done.
```
</details>
