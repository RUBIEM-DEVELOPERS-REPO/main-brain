---
type: job
title: Write reference docs that are skim-able and grep-able
slug: write-reference-docs-that-are-skim-able-and-grep-able-0773d9b4
created: 2026-05-29T09:28:14.564Z
jobId: 0773d9b4-30eb-4980-99a8-0be789f5e520
status: succeeded
template: custom-technical-writer-write-reference-docs-that-are-skim-able-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:27:00.723Z
finishedAt: 2026-05-29T09:28:14.564Z
---

# Write reference docs that are skim-able and grep-able

- **Status:** succeeded
- **Template:** custom-technical-writer-write-reference-docs-that-are-skim-able-
- **Started:** 2026-05-29T09:27:00.723Z
- **Finished:** 2026-05-29T09:28:14.564Z
- **Title:** Write reference docs that are skim-able and grep-able

## Plan
Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able

### Steps
1. ✓ Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web — `research.deep` (48.0s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**How to Write Reference Docs that Readers Can Quickly Skim & Search (grep‑able)**  

| Goal | What to do | Why it works (evidence) |
|------|------------|--------------------------|
| **Make the structure obvious** | • Use **clear headings** (H1‑H4) that describe a single concept. <br>• Add a **table‑of‑contents** with anchor links at the top. | A *technical* document is “relating to the knowledge and methods of a particular subject or job” — it must expose that knowledge in a predictable hierarchy so users can locate it fast【1†L9-L13】. |
| **Give each fact a searchable token** | • Write **concise, self‑contained sentences** that start with the key term (e.g., “`max‑size` – the maximum number of items …”). <br>• Include **inline code tags** or **labels** (`#config`, `--flag`) that can be grepped. | Technical language “almost impossible to understand” when it’s dense; breaking it into atomic statements keeps it *grep‑able* and readable【1†L19-L22】. |
| **Use visual cues for scanning** | • **Bold** or **italicize** the term being defined. <br>• Add **definition lists** (`<dl><dt>Term</dt><dd>Explanation</dd></dl>`). <br>• Insert **tables** for parameter/value pairs. | Readers skim for “practical skills and methods” – visual separation lets them spot the method they need without reading the whole page【1†L13-L16】. |
| **Provide short, consistent summaries** | • Begin each section with a **one‑sentence TL;DR** that answers “What does this do?” <br>• Follow with optional “Details” or “Examples” subsections. | A “technical” document often contains “a huge amount of technical papers”; a TL;DR gives a quick entry point, reducing the need to wade through bulk text【1†L23-L27】. |
| **Make the file plain‑text friendly** | • Write in **Markdown** or **reStructuredText** (plain‑text markup). <br>• Keep line length < 80 chars so `grep` matches don’t span wrapped lines. | Plain‑text formats are the native medium for `grep`; they also avoid “instruction booklets … written in very technical language” that are hard to parse【1†L21-L23】. |
| **Add searchable metadata** | • Include **front‑matter** (e.g., `---\ntitle: …\nkeywords: …\n---`). <br>• Tag each page with relevant **keywords**. | Keywords act like “technical faults” that can be filtered; they give a predictable pattern for `grep` to hit. |
| **Use consistent naming conventions** | • Choose a **canonical term** for each concept and reuse it everywhere (e.g., always `max‑size`, never `maximumSize`). <br>• Document the convention in a “Glossary” section. | Consistency reduces false‑negative grep results and helps readers build a mental model of the domain【1†L9-L12】. |
| **Provide examples that can be copied** | • Place code snippets in fenced blocks with language tags. <br>• End each example with a comment like `# → output`. | Examples are the “practical skills and methods” that users skim for; fenced blocks are easy to extract with `grep -A`/`-B`. |
| **Link, don’t duplicate** | • Use **internal links** (`[See “Authentication”](#authentication)`) instead of repeating the same paragraph. | Reduces document size, making grep results more precise and the doc easier to skim. |

### Quick‑Reference Checklist (copy‑paste into your editor)

```markdown
# Title – one‑line purpose
## TL;DR
**What it does:** short sentence.

## Syntax
`command --option <value>`

## Parameters
| Flag | Type | Default | Description |
|------|------|---------|-------------|
| `--size` | int | `10` | Maximum number of items. |
| `--mode` | enum | `auto` | Operation mode (`auto|manual`). |

## Examples
```sh
command --size 5 --mode manual   # → runs in manual mode
```

## See also
- [Authentication](#authentication)
- [Glossary](#glossary)
```

Follow these patterns and your reference material will be **easy to skim**, **quick to locate**, and **fully grep‑able** for developers and support staff.

<details><summary>Log</summary>

```
[2026-05-29T09:27:00.733Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:27:01.795Z] Thinking about the best approach…
[2026-05-29T09:27:01.826Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:27:18.229Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:27:18.229Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able.
[2026-05-29T09:27:18.238Z] Step 1 of 1: Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web
[2026-05-29T09:28:06.287Z] All sub-agents finished in 48.0s.
[2026-05-29T09:28:06.288Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:28:06.295Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:28:06.296Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:28:06.296Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:28:14.237Z] Wave 1 finished in 7.9s.
[2026-05-29T09:28:14.237Z] All sub-agents finished in 7.9s.
[2026-05-29T09:28:14.237Z] Quality check passed (79%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T09:28:14.237Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:28:14.564Z] Vault commit: done.
```
</details>
