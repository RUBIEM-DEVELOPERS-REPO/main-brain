---
title: "Research: As a Technical Writer, write reference docs that are skim-able and grep-able"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Technical Writer, write reference docs that are skim-able and grep-able

**Reference‑style docs that are easy to skim & grep**  
*(based on the four research notes in the vault)*  

| Goal | Technique | Why it helps skimming | Why it helps grepping |
|------|------------|-----------------------|-----------------------|
| **Clear visual hierarchy** | • Use **H1‑H4 headings** for sections, subsections, and key concepts. <br>• Prefix headings with a short, descriptive **keyword** (e.g., `# API Endpoints – Authentication`). | Readers can jump to the part they need by scanning the outline. | Headings are indexed by most grep tools (`^#`), so a quick `grep -i "authentication"` lands on the right spot. |
| **One‑sentence summary** | Place a **single‑line TL;DR** immediately under each heading. | Gives a “quick‑look” answer without scrolling. | The summary line is easy to match (`grep -i "summary"` or the keyword you used). |
| **Bullet‑point facts** | • List configuration flags, command‑line switches, or API fields as **bulleted items**. <br>• Keep each bullet ≤ 80 chars. | Bullets stand out visually; users can scan the list for the item they need. | Bullets start with `- ` (or `* `), a common grep pattern for extracting lists. |
| **Inline code & literals** | Wrap commands, file names, and JSON keys in back‑ticks (`` `example` ``). | Code fragments are instantly recognizable. | Back‑ticks are a reliable grep anchor (`grep "\`my‑cmd\`"`). |
| **Consistent key‑value tables** | Use Markdown tables for **parameter → description** mappings. | Tables align data in columns, making it easy to compare rows at a glance. | Table rows are plain text; `grep "timeout"` finds the exact row. |
| **Anchor tags for cross‑reference** | Add explicit **HTML anchors** (`<a name="section‑name"></a>`) or Markdown link IDs (`{#section-name}`). | Users can jump directly via URL fragments (`#section-name`). | Anchors give a unique token to grep (`grep "section‑name"`). |
| **Search‑friendly terminology** | • Prefer **stable identifiers** (e.g., `config_path`, `MAX_RETRIES`) over synonyms. <br>• Document the exact spelling once and reuse it. | Reduces ambiguity when scanning. | Guarantees that a grep for the identifier returns all relevant lines. |
| **Metadata block** | At the top of each file, include a YAML front‑matter block: <br>```yaml<br>title: “API – Authentication”<br>keywords: [auth, token, login]<br>---<br>``` | Provides a quick‑look index for tools that read front‑matter. | `grep "auth"` will hit the metadata even before the body. |
| **File‑naming conventions** | Use **dash‑separated, descriptive filenames** (e.g., `api-authentication.md`). | Users can locate a file by name in a directory listing. | `grep -l "authentication" *.md` finds the right file instantly. |
| **Version‑control friendly diffs** | Keep changes **line‑oriented** (add/remove whole lines, avoid re‑flowing paragraphs). | Reviewers can see exactly what changed. | `git diff` and `grep` both work cleanly on line‑based edits. |

### Quick “Skim‑First” checklist for every doc

1. **Header block** – title + keywords (YAML).  
2. **One‑line TL;DR** under the first heading.  
3. **Section headings** start with a keyword.  
4. **Bulleted facts** or **tables** for data‑heavy parts.  
5. **Back‑ticks** for all code literals.  
6. **Anchor IDs** for deep linking.  
7. **Consistent terminology** throughout.  

### Example snippet (illustrative)

```markdown
---
title: "API – Authentication"
keywords: [auth, token, login]
---

# Authentication – Overview
*TL;DR:* Use the `POST /login` endpoint with a JSON body containing `username` and `password` to obtain a JWT.

## Endpoints
- `POST /login` – returns `access_token`
- `POST /refresh` – exchanges a refresh token for a new `access_token`

## Parameters
| Name          | Type   | Description                     |
|---------------|--------|---------------------------------|
| `username`    | string | User’s login name               |
| `password`    | string | User’s password (hashed)        |
| `access_token`| string | JWT, valid for 15 min            |
```

Following the patterns above makes the documentation **instant‑scanable** for humans and **precise‑searchable** for any `grep`‑style tool.  

*Sources:* the four vault notes titled “Research: As a Technical Writer, write reference docs that are skim‑able and grep‑able” (0‑Inbox/20260529 … md) provide the underlying guidance for each technique.

## Web sources
1. [reset是什么意思？_百度知道](https://zhidao.baidu.com/question/402930466340562525.html) _(relevance 0, http)_
2. [reset是什么意思_百度知道](https://zhidao.baidu.com/question/930812118682265939.html) _(relevance 0, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[reset是什么意思？_百度知道](https://zhidao.baidu.com/question/232347915.html)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
- [[0-Inbox/202605290928-research-as-a-technical-writer-write-reference-docs-that-are-skim-abl.md]] (line 2)
- [[0-Inbox/202605291922-research-as-a-technical-writer-write-reference-docs-that-are-skim-abl.md]] (line 2)
- [[0-Inbox/202605292048-research-as-a-technical-writer-write-reference-docs-that-are-skim-abl.md]] (line 2)
- [[0-Inbox/202605301756-research-as-a-technical-writer-write-reference-docs-that-are-skim-abl.md]] (line 2)
