---
type: job
title: Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…
slug: distinguish-reference-look-up-from-how-to-recipe-from-tutori-92fb16f3
created: 2026-06-01T09:25:10.449Z
jobId: 92fb16f3-b276-470a-b641-04052c070518
status: succeeded
template: custom-technical-writer-distinguish-reference-look-up-from-how-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:23:54.404Z
finishedAt: 2026-06-01T09:25:10.449Z
---

# Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

- **Status:** succeeded
- **Template:** custom-technical-writer-distinguish-reference-look-up-from-how-t
- **Started:** 2026-06-01T09:23:54.404Z
- **Finished:** 2026-06-01T09:25:10.449Z
- **Title:** Distinguish reference (look up) from how-to (recipe) from tutorial (learning)…

## Plan
Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept

### Steps
1. ✓ Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web — `research.deep` (21.8s)
    > research signal detected ("look up") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (7.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.0s)
    > auto-injected: quality score=0.52 (pass=false) — peer review for a second opinion

## Answer
## Distinguishing Document Types for Technical Writers  

**Reference (lookup)** – Authoritative sources that present factual information, definitions, or specifications intended for quick retrieval. They are not prescriptive; the reader consults them to confirm details or resolve questions.  

**How‑to (recipe)** – Step‑by‑step instructions that guide the user through a specific task or process. The focus is on execution, with each step presented in a concise, actionable format.  

**Tutorial (learning)** – Documents that combine explanation with guided practice. They teach a concept while prompting the reader to perform related exercises, supporting incremental mastery.  

**Explanation (concept)** – Narrative pieces that describe underlying principles, rationale, or theory behind a topic. They provide context and understanding without prescribing concrete actions.  

**Relevance** – Each type serves a distinct purpose in the documentation ecosystem:  
- Reference supports rapid lookup.  
- How‑to enables task completion.  
- Tutorial facilitates learning through practice.  
- Explanation builds conceptual grounding.  

These distinctions help technical writers select the appropriate format to meet user needs and improve documentation clarity.  

*Source: peer review synthesis [4]*.

<details><summary>Log</summary>

```
[2026-06-01T09:23:54.419Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:23:55.755Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-06-01T09:23:55.755Z] Plan ready: 1 step — Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept.
[2026-06-01T09:23:55.762Z] Step 1 of 1: Researching "As a Technical Writer, distinguish reference (look up) from how-to (recipe) from…" — vault + web
[2026-06-01T09:24:17.547Z] All sub-agents finished in 21.8s.
[2026-06-01T09:24:17.547Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:24:17.552Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:24:17.552Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:24:17.552Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:24:24.574Z] Wave 1 finished in 7.0s.
[2026-06-01T09:24:24.574Z] All sub-agents finished in 7.0s.
[2026-06-01T09:24:24.579Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:24:34.572Z] All sub-agents finished in 10.0s.
[2026-06-01T09:24:34.578Z] quality.check failed (score=0.52, issues: does not address the requested content; fails to provide distinctions; lacks actionable information) — re-synthesising with the large model
[2026-06-01T09:24:34.590Z] Thinking with openai/gpt-oss-120b:free (~3 410 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:24:51.774Z] quality rescue improved score: 0.52 → 0.95; using the rescued draft
[2026-06-01T09:24:51.774Z] peer review verdict=bad (No distinctions provided; answer defers instead of addressing the task; Fails to give factual definitions of each docume) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T09:24:51.779Z] Thinking with openai/gpt-oss-120b:free (~3 572 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:25:07.058Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-06-01T09:25:07.058Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:25:10.449Z] Vault commit: done.
```
</details>
