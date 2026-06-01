---
type: job
title: Write reference docs that are skim-able and grep-able
slug: write-reference-docs-that-are-skim-able-and-grep-able-452f273e
created: 2026-06-01T14:01:28.121Z
jobId: 452f273e-9da6-468a-bfce-02b9bb2dc6a9
status: succeeded
template: custom-technical-writer-write-reference-docs-that-are-skim-able-
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:57:54.354Z
finishedAt: 2026-06-01T14:01:28.121Z
---

# Write reference docs that are skim-able and grep-able

- **Status:** succeeded
- **Template:** custom-technical-writer-write-reference-docs-that-are-skim-able-
- **Started:** 2026-06-01T13:57:54.354Z
- **Finished:** 2026-06-01T14:01:28.121Z
- **Title:** Write reference docs that are skim-able and grep-able

## Plan
Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able

### Steps
1. ✓ Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web — `research.deep` (27.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.9s)
    > auto-injected: quality score=0.48 (pass=false) — peer review for a second opinion

## Answer
## Writing Skim‑able and Grep‑able Reference Documentation  

**Context** – The vault contains only the titles of research notes on this topic and no substantive body text. Consequently, the guidance below is assembled from generally accepted technical‑writing practices rather than specific internal sources.  

### 1. Document Structure for Immediate Scanning  
- **Consistent heading hierarchy** – Use `#`, `##`, `###` to create clear sections (e.g., Overview, Installation, API Reference, FAQ). Headings serve as natural grep anchors.  
- **One‑sentence summaries** – Place a concise description (≤ 30 words) directly under each heading; this appears in preview panes and helps readers decide whether to dive deeper.  
- **Table of contents (TOC)** – Insert an auto‑generated TOC at the top (`[TOC]` or a Markdown list of links). Each entry mirrors a heading, making navigation and grepping trivial.  

### 2. Formatting Conventions that Aid Grep  
- **Keyword‑rich identifiers** – Name sections and anchors with searchable terms, e.g., `#configuration‑options`, `##environment‑variables`.  
- **Inline code and fenced blocks** – Enclose commands, file names, and identifiers in backticks (`` `cmd` ``) or triple‑backtick fences. This isolates tokens that developers often grep for.  
- **Standardized tags** – Add a line such as `<!-- tags: installation, cli, windows -->` at the end of each major section; tags are plain text and searchable.  

### 3. Content‑Level Recommendations  
| Goal | Technique |
|------|-----------|
| **Quick visual scan** | Begin each section with a bullet list of key points; keep bullets short and parallel. |
| **Find specific items** | Repeat important identifiers (e.g., file paths, option flags) in both prose and a dedicated “Reference” table. |
| **Maintain consistency** | Adopt a style guide that dictates capitalization, hyphenation, and ordering of parameters. |
| **Version awareness** | Prefix version‑specific notes with `vX.Y` in a bold line; this creates a unique grep token for each release. |

### 4. Example Skeleton (Markdown)

```markdown
# Project‑X Reference Guide

[TOC]

## Overview
Brief description of Project‑X and its purpose.

## Installation
- **Prerequisites**: `python>=3.9`, `git`
- **Steps**
  1. Clone the repo: `git clone https://...`
  2. Run installer: `./install.sh`

### Configuration‑options
| Option | Default | Description |
|--------|---------|-------------|
| `--mode` | `auto` | Sets operation mode. |
| `--log‑level` | `info` | Logging verbosity. |

<!-- tags: installation, configuration, cli -->
```

### 5. Maintenance Checklist  
1. Verify that every new section follows the heading‑keyword pattern.  
2. Run a weekly `grep -E "TODO|FIXME"` to locate unfinished items.  
3. Update the TOC and tag list after each release.  

*Assumed: The audience is internal developers who will read and search the docs using standard command‑line tools.*

<details><summary>Log</summary>

```
[2026-06-01T13:57:54.366Z] Working as Clawbot — AI agent operator.
[2026-06-01T13:57:55.289Z] Thinking about the best approach…
[2026-06-01T13:57:55.353Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T13:58:04.353Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T13:58:04.353Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able.
[2026-06-01T13:58:04.359Z] Step 1 of 1: Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web
[2026-06-01T13:58:31.459Z] All sub-agents finished in 27.1s.
[2026-06-01T13:58:31.459Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T13:58:31.464Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T13:58:31.465Z] Step 3 of 3: Security-scanning the note
[2026-06-01T13:58:31.466Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T13:58:38.338Z] Wave 1 finished in 6.9s.
[2026-06-01T13:58:38.338Z] All sub-agents finished in 6.9s.
[2026-06-01T13:58:38.344Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T13:58:49.200Z] All sub-agents finished in 10.9s.
[2026-06-01T13:58:49.207Z] quality.check failed (score=0.48, issues: Answer does not provide the requested guidance; it merely states lack of content and offers generic suggestions, failing to meet the task of producing skim‑able, grep‑able reference documentation.; Citation coverage is minimal (only one placeholder reference).) — re-synthesising with the large model
[2026-06-01T13:58:49.213Z] Thinking with openai/gpt-oss-120b:free (~3 797 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T13:59:49.509Z] quality rescue improved score: 0.48 → 0.55; using the rescued draft
[2026-06-01T13:59:49.509Z] peer review verdict=bad (Does not provide any guidance on writing skim‑able and grep‑able reference docs; Fails to address the task directly) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T13:59:49.515Z] Thinking with openai/gpt-oss-120b:free (~3 971 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T14:01:27.730Z] retry verdict=needs-work but quality improved (0.55 → 0.64); using retry
[2026-06-01T14:01:27.730Z] Wrote to your second brain — committing the changes.
[2026-06-01T14:01:28.121Z] Vault commit: done.
```
</details>
