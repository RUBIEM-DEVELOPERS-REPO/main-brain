---
type: job
title: Write reference docs that are skim-able and grep-able
slug: write-reference-docs-that-are-skim-able-and-grep-able-6af2f8e2
created: 2026-05-29T20:48:38.591Z
jobId: 6af2f8e2-a628-401e-8ae6-1dbe05b6e4d9
status: succeeded
template: custom-technical-writer-write-reference-docs-that-are-skim-able-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:47:15.749Z
finishedAt: 2026-05-29T20:48:38.591Z
---

# Write reference docs that are skim-able and grep-able

- **Status:** succeeded
- **Template:** custom-technical-writer-write-reference-docs-that-are-skim-able-
- **Started:** 2026-05-29T20:47:15.749Z
- **Finished:** 2026-05-29T20:48:38.591Z
- **Title:** Write reference docs that are skim-able and grep-able

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write reference docs that are skim-able and grep-able\nDescription: Persona-derived starter task for \"Tao\"."
}
```

## Plan
Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able.

Context: Role: Custom
Title: Write reference docs that are skim-able and grep-able
Description: Persona-derived starter task for "Tao"

### Steps
1. ✓ Researching "As a Technical Writer, write reference docs that are skim-able and grep-able.

C…" — vault + web — `research.deep` (47.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Reference Documentation Guidelines  
**Objective:** Create technical reference documents that are easy to skim and can be searched efficiently with simple text‑based tools such as `grep`.

### 1. Language & Terminology  
- Use precise, domain‑specific terms while avoiding unnecessary jargon.  
- Keep sentences short and focused on the key point.  
- Consistently format technical terms (e.g., back‑ticks for code or command names) so a single search pattern matches all occurrences.  

### 2. Structural Design  
| Element | Benefit for Skimming | Implementation Tip |
|---------|----------------------|--------------------|
| **Flat hierarchy** | Readers can jump directly to the needed section. | Limit to two heading levels (`##` and `###`). |
| **One‑sentence summaries** | Provides an instant “what this section covers” cue. | Place a concise summary (≤ 15 words) immediately under each heading. |
| **Bullet‑point facts** | Line‑oriented format is naturally grep‑friendly. | List key parameters, commands, or options as separate lines prefixed with `- `. |
| **Consistent key‑term formatting** | Guarantees a single grep pattern matches every occurrence. | Highlight terms with back‑ticks (e.g., `` `api-key` ``) and keep spelling/case uniform. |
| **Table of contents with anchors** | Enables instant navigation from the top of the file. | Generate a markdown TOC (`[TOC]` or a script) that links to each heading. |

### 3. Searchability  
- Use plain text and avoid embedding content in images or complex HTML.  
- Keep code blocks and command examples in fenced blocks for clear separation.  
- Ensure that every keyword appears in a consistent format to simplify regex or simple `grep` searches.

### 4. Formatting & Consistency  
- Stick to a single markdown style guide throughout the document.  
- Use consistent bullet styles (`- `) and heading prefixes.  
- Avoid nested lists unless absolutely necessary; flat lists improve grep performance.

### 5. Maintenance  
- Document any naming conventions or formatting rules in a separate “Style Guide” section.  
- Review the document periodically to ensure that new sections adhere to the established structure and formatting.

These practices collectively produce reference material that can be quickly scanned for relevant information and efficiently located using basic text‑search tools.  

[1] Research note on writing skim‑able, grep‑able reference documentation.

<details><summary>Log</summary>

```
[2026-05-29T20:47:15.760Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:47:15.764Z] Thinking about the best approach…
[2026-05-29T20:47:15.828Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:47:16.931Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:47:16.931Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able.

Context: Role: Custom
Title: Write reference docs that are skim-able and grep-able
Description: Persona-derived starter task for "Tao".
[2026-05-29T20:47:16.937Z] Step 1 of 1: Researching "As a Technical Writer, write reference docs that are skim-able and grep-able.

C…" — vault + web
[2026-05-29T20:48:04.379Z] All sub-agents finished in 47.4s.
[2026-05-29T20:48:04.393Z] Thinking with openai/gpt-oss-20b:free (~2 790 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:48:05.945Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T20:48:30.130Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T20:48:30.130Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:48:30.134Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:48:30.135Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:48:30.135Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:48:34.244Z] Wave 1 finished in 4.1s.
[2026-05-29T20:48:34.244Z] All sub-agents finished in 4.1s.
[2026-05-29T20:48:34.244Z] Quality check passed (75%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T20:48:34.244Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:48:38.590Z] Vault commit: done.
```
</details>
