---
type: job
title: Write reference docs that are skim-able and grep-able
slug: write-reference-docs-that-are-skim-able-and-grep-able-23b0c080
created: 2026-06-01T09:28:54.289Z
jobId: 23b0c080-dd8b-452a-bbf6-c854aff641cb
status: succeeded
template: custom-technical-writer-write-reference-docs-that-are-skim-able-
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:21:27.558Z
finishedAt: 2026-06-01T09:28:54.289Z
---

# Write reference docs that are skim-able and grep-able

- **Status:** succeeded
- **Template:** custom-technical-writer-write-reference-docs-that-are-skim-able-
- **Started:** 2026-06-01T09:21:27.558Z
- **Finished:** 2026-06-01T09:28:54.289Z
- **Title:** Write reference docs that are skim-able and grep-able

## Plan
Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able

### Steps
1. ✓ Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web — `research.deep` (48.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.5s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Reference‑Style Documentation: Skim‑able & Grep‑able  

**Goal** – Produce documentation that users can scan quickly for the needed section and retrieve exact items with simple command‑line searches.

| Goal | Technique | Why it helps skimming | Why it helps grepping |
|------|-----------|-----------------------|-----------------------|
| **Clear visual hierarchy** | • Use H1‑H4 headings for sections, subsections, and key concepts.<br>• Prefix each heading with a short, descriptive keyword (e.g., `# API Endpoints – Authentication`). | Readers locate topics by scanning the outline. | Headings start with `#`, so `grep -i "authentication"` jumps directly to the relevant block. |
| **One‑sentence summary** | Place a single‑line TL;DR immediately under each heading. | Provides an instant answer without scrolling. | The summary line contains the keyword and can be found with `grep -i "summary"` or the specific term. |
| **Bullet‑point facts** | • List configuration flags, CLI switches, or API fields as bulleted items.<br>• Keep each bullet ≤ 80 characters. | Bullets stand out visually; users can scan the list for the item they need. | Bullets begin with `- ` (or `* `), a common grep pattern for extracting lists. |
| **Inline code & literals** | Wrap commands, file names, and JSON keys in back‑ticks (`` `example` ``). | Code fragments are instantly recognizable. | Back‑ticks are a reliable grep anchor (`grep "\`my‑cmd\`"`). |
| **Consistent key‑value tables** | Use Markdown tables for *parameter → description* mappings. | Tables align data in columns, making it easy to compare values at a glance. | Table rows contain the parameter name, enabling `grep -i "timeout"` to locate the definition. |

### Practical Tips  

1. **Keyword‑first headings** – start each heading with the primary term users will search for.  
2. **TL;DR line** – format as plain text (no markup) so it is captured by simple greps.  
3. **Uniform bullet style** – choose `- ` throughout the document; avoid mixing `* ` and `- `.  
4. **Code fences for blocks** – enclose multi‑line examples in triple back‑ticks; the opening fence can be grepped (`grep "\`\`\`bash"`).  
5. **Table alignment** – keep the pipe (`|`) separators aligned; this aids readability and allows column‑specific greps (`grep -E "\| timeout \|"`).  

### Example Snippet  

```markdown
# API Endpoints – Authentication
TL;DR: Use the `/login` POST endpoint with a JSON body containing `username` and `password`.

- `POST /login` – initiates a session.
- `GET /logout` – revokes the current token.
- Header `Authorization: Bearer <token>` required for protected calls.

| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| `username`| string | User’s login name.              |
| `password`| string | User’s password (hashed).       |
```

This structure lets a user `grep -i "login"` to land on the endpoint definition instantly, while the visual hierarchy guides a quick skim.

---

*Assumed: the audience is developers and ops engineers who read Markdown docs and use command‑line tools for search.*

<details><summary>Log</summary>

```
[2026-06-01T09:21:27.566Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:21:28.536Z] Thinking about the best approach…
[2026-06-01T09:21:28.582Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:21:46.583Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:21:46.584Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, write reference docs that are skim-able and grep-able.
[2026-06-01T09:21:46.589Z] Step 1 of 1: Researching "As a Technical Writer, write reference docs that are skim-able and grep-able" — vault + web
[2026-06-01T09:22:35.312Z] All sub-agents finished in 48.7s.
[2026-06-01T09:22:35.312Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:22:35.324Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:22:35.325Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:22:35.325Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:27:35.335Z] Wave 1 finished in 300.0s.
[2026-06-01T09:27:35.335Z] All sub-agents finished in 300.0s.
[2026-06-01T09:27:35.347Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:27:38.873Z] All sub-agents finished in 3.5s.
[2026-06-01T09:27:38.877Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-06-01T09:27:38.884Z] Thinking with openai/gpt-oss-120b:free (~3 531 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:28:53.924Z] quality rescue improved score: 0 → 0.97; using the rescued draft
[2026-06-01T09:28:53.924Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:28:54.289Z] Vault commit: done.
```
</details>
