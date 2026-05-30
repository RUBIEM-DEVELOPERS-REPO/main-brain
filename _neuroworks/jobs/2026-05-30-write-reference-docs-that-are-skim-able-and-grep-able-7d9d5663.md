---
type: job
title: Write reference docs that are skim-able and grep-able
slug: write-reference-docs-that-are-skim-able-and-grep-able-7d9d5663
created: 2026-05-30T17:57:46.339Z
jobId: 7d9d5663-3b10-45ac-9f8c-27508e251838
status: succeeded
template: custom-technical-writer-write-reference-docs-that-are-skim-able-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:55:47.581Z
finishedAt: 2026-05-30T17:57:46.338Z
---

# Write reference docs that are skim-able and grep-able

- **Status:** succeeded
- **Template:** custom-technical-writer-write-reference-docs-that-are-skim-able-
- **Started:** 2026-05-30T17:55:47.581Z
- **Finished:** 2026-05-30T17:57:46.338Z
- **Title:** Write reference docs that are skim-able and grep-able

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write reference docs that are skim-able and grep-able\nDescription: Persona-derived starter task for \"Tao\"."
}
```

## Plan
Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able

### Steps
1. ✓ Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web — `research.deep` (44.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (22.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.6s)
    > auto-injected: quality score=0.68 (pass=false) — peer review for a second opinion

## Answer
## Quick‑Start Guide – Writing Reference Docs that are Skim‑able & Grep‑able  

*(All recommendations are distilled from the three research notes you already have in the vault:*  
*`0‑Inbox/202605290928‑research‑as‑a‑technical‑writer‑write‑reference‑docs‑that‑are‑skim‑abl.md`*  
*`0‑Inbox/202605291922‑research‑as‑a‑technical‑writer‑write‑reference‑docs‑that‑are‑skim‑abl.md`*  
*`0‑Inbox/202605292048‑research‑as‑a‑technical‑writer‑write‑reference‑docs‑that‑are‑skim‑abl.md`* *[vault])*  

---  

### 1. Structure for Instant Scanning  

| Section | Why it helps skim‑ability | How to format (Markdown) |
|---------|---------------------------|--------------------------|
| **Title / TL;DR** | Gives the one‑sentence purpose up front. | `# Title` <br>`> TL;DR: …` |
| **Table of Contents** | Jump‑to any topic without reading the whole file. | `[TOC]` (or manual list of links). |
| **Concept Blocks** | Each block covers a single concept; readers can stop after any block. | `## Concept Name` <br>`*Brief definition*` |
| **Key‑Value Summary** | Highlights the most important data for quick lookup. | `**Key**: Value` |
| **Code / CLI snippets** | Exact commands are searchable with `grep`. | ```bash<br>command –option<br>``` |
| **Notes & Gotchas** | Alerts readers to pitfalls; easy to grep for “gotcha”. | `> **NOTE:** …` |
| **References** | Links to deeper docs; keep them at the bottom. | `- [Link text](url)` |

*All headings use a consistent level (`##`, `###`) so `grep '^##'` isolates sections quickly.*  

### 2. Formatting Tips for Grep‑ability  

- **Prefix key terms** with a unique tag (e.g., `NOTE:`, `TODO:`, `FIXME:`) to make them searchable.  
- **Keep code blocks short** and self‑contained; avoid wrapping them in prose that could obscure the command.  
- **Use plain‑text tables** for parameter lists; they are both human‑readable and easy to `grep` for column headers.  

### 3. Example Skeleton  

```markdown
# MyTool – Configuration Reference
> TL;DR: Configure MyTool with a single YAML file.

[TOC]

## Overview
*Brief description of purpose and scope.*

## Installation
**Prerequisite**: Python 3.9+

```bash
pip install mytool
```

## Commands
### `mytool start`
Starts the service.

```bash
mytool start --port 8080
```

### `mytool stop`
Stops the service.

```bash
mytool stop
```

## Settings
**log_level**: `info` | `debug` | `error`  
**max_connections**: integer (default 100)

> **NOTE:** Setting `log_level` to `debug` may generate large log files.

## Gotchas
- **TODO:** Add Windows‑specific path handling.  
- **FIXME:** Current version crashes on empty config file.

## References
- [MyTool Docs](https://example.com/mytool/docs)
```

### 4. Maintenance Checklist  

- Verify that every new section follows the table‑based layout.  
- Run `grep -E '^##|^> NOTE|^> FIXME|^> TODO'` to confirm all key items are indexed.  
- Update the TOC automatically with a script or VS Code extension after each edit.  

---  

*Assumed: the audience is internal engineers who need fast lookup; the guide will be stored in a shared Markdown repository.*

<details><summary>Log</summary>

```
[2026-05-30T17:55:47.599Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:55:48.260Z] Thinking about the best approach…
[2026-05-30T17:55:48.320Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:55:49.447Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:55:49.447Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able.
[2026-05-30T17:55:49.451Z] Step 1 of 1: Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web
[2026-05-30T17:56:33.567Z] All sub-agents finished in 44.1s.
[2026-05-30T17:56:33.568Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:56:33.573Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:56:33.573Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:56:33.574Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:56:55.690Z] Wave 1 finished in 22.1s.
[2026-05-30T17:56:55.690Z] All sub-agents finished in 22.1s.
[2026-05-30T17:56:55.694Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:56:58.284Z] All sub-agents finished in 2.6s.
[2026-05-30T17:56:58.291Z] quality.check failed (score=0.68, issues: Low citation coverage – only a single placeholder reference is provided while many substantive claims are unsupported.; No inline citations for specific sections or examples, reducing verifiability.) — re-synthesising with the large model
[2026-05-30T17:56:58.298Z] Thinking with openai/gpt-oss-120b:free (~3 631 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:57:45.446Z] quality rescue improved score: 0.68 → 0.82; using the rescued draft
[2026-05-30T17:57:45.446Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:57:46.338Z] Vault commit: done.
```
</details>
