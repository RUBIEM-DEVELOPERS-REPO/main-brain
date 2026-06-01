---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-264ed7f9
created: 2026-06-01T14:01:18.386Z
jobId: 264ed7f9-b648-4805-a5b2-d14af4ef843e
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:59:30.397Z
finishedAt: 2026-06-01T14:01:18.385Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-06-01T13:59:30.397Z
- **Finished:** 2026-06-01T14:01:18.385Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (25.6s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (7.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.5s)
    > auto-injected: quality score=0.49 (pass=false) — peer review for a second opinion

## Answer
## Distinguishing Documentation Types for Technical Writers  

**Reference (look‑up)**  
- Purpose: Provide factual information that users can consult quickly.  
- Structure: Concise entries, often organized alphabetically or hierarchically (e.g., API reference, command‑line options).  
- Content: Definitions, parameters, return values, error codes; minimal narrative.  
- Usage pattern: Users know what they need and jump directly to the relevant entry.

**How‑to (recipe)**  
- Purpose: Guide the reader through a single, well‑defined task.  
- Structure: Step‑by‑step instructions, usually numbered or bulleted.  
- Content: Prerequisites, exact commands or UI actions, expected outcomes; may include warnings.  
- Usage pattern: The reader follows the sequence to achieve a specific result (e.g., “How to configure TLS”).  

**Tutorial (learning)**  
- Purpose: Teach a broader skill or workflow through progressive examples.  
- Structure: Narrative flow with sections that build on one another; often includes background, concepts, and practice exercises.  
- Content: Explanations of why steps are performed, intermediate checkpoints, and opportunities for hands‑on experimentation.  
- Usage pattern: The reader starts with little knowledge and advances toward competence.  

**Explanation (concept)**  
- Purpose: Clarify underlying ideas, principles, or architecture.  
- Structure: Expository prose, diagrams, and analogies; not tied to a specific procedure.  
- Content: Definitions, rationale, relationships between components, and design trade‑offs.  
- Usage pattern: The reader seeks to understand “what” and “why” rather than “how.”  

These categories are not mutually exclusive; a single document may contain elements of several, but the primary intent and structure determine its classification.

<details><summary>Log</summary>

```
[2026-06-01T13:59:30.408Z] Working as Clawbot — AI agent operator.
[2026-06-01T13:59:31.335Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-06-01T13:59:31.335Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept.
[2026-06-01T13:59:31.340Z] Running with help from 1 peer worker (capacity 6 thinking + 9 I/O sub-agents).
[2026-06-01T13:59:31.340Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-06-01T13:59:56.890Z] All sub-agents finished in 25.6s.
[2026-06-01T13:59:56.890Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T13:59:56.896Z] Running with help from 1 peer worker (capacity 6 thinking + 9 I/O sub-agents).
[2026-06-01T13:59:56.896Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T13:59:56.896Z] Step 3 of 3: Security-scanning the note
[2026-06-01T13:59:56.896Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T14:00:04.641Z] Wave 1 finished in 7.7s.
[2026-06-01T14:00:04.641Z] All sub-agents finished in 7.7s.
[2026-06-01T14:00:04.652Z] Running with help from 1 peer worker (capacity 6 thinking + 9 I/O sub-agents).
[2026-06-01T14:00:04.652Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T14:00:09.122Z] All sub-agents finished in 4.5s.
[2026-06-01T14:00:09.131Z] quality.check failed (score=0.49, issues: does not provide the requested distinctions; fails to meet the task requirements) — re-synthesising with the large model
[2026-06-01T14:00:09.140Z] Thinking with openai/gpt-oss-120b:free (~3 362 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T14:00:41.527Z] quality rescue improved score: 0.49 → 0.98; using the rescued draft
[2026-06-01T14:00:41.527Z] peer review verdict=bad (Does not provide any distinctions; answer claims lack of data but task expects explanation) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T14:00:41.534Z] Thinking with openai/gpt-oss-120b:free (~3 502 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T14:01:17.973Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-06-01T14:01:17.973Z] Wrote to your second brain — committing the changes.
[2026-06-01T14:01:18.385Z] Vault commit: done.
```
</details>
