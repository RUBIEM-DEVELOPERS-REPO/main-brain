---
type: job
title: Weekly vault review
slug: weekly-vault-review-d0112d51
created: 2026-05-29T14:01:49.600Z
jobId: d0112d51-b28d-46ed-b8af-7197980ca5f5
status: succeeded
template: custom-clawbot-weekly-vault-review
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T13:59:39.929Z
finishedAt: 2026-05-29T14:01:49.600Z
---

# Weekly vault review

- **Status:** succeeded
- **Template:** custom-clawbot-weekly-vault-review
- **Started:** 2026-05-29T13:59:39.929Z
- **Finished:** 2026-05-29T14:01:49.600Z
- **Title:** Weekly vault review

## Plan
Default research plan for: Review what landed in the vault this past week. Surface notes worth promoting from 0-Inbox/ to 2-Permanent/, flag stale items, and suggest 2-3 new links between notes I might have missed

### Steps
1. ✓ Researching "Review what landed in the vault this past week. Surface notes worth promoting fr…" — vault + web — `research.deep` (69.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (5.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.9s)
    > auto-injected: quality score=0.40 (pass=false) — peer review for a second opinion

## Answer
## Weekly Vault Review (2026‑05‑26 – 2026‑05‑29)

### 1. Items eligible for promotion to `2‑Permanent/`

- No substantive notes were added to `0‑Inbox/` during the period. The only new files are four **template** entries that repeat the review task definition and contain no content that would merit permanent storage. Consequently, there are currently **no candidates** for promotion. [vault:_neuroworks/templates/2026-05-26-custom-clawbot-weekly-vault-review.md] [vault:_neuroworks/templates/2026-05-27-custom-clawbot-weekly-vault-review.md] [vault:_neuroworks/templates/2026-05-28-custom-clawbot-weekly-vault-review.md] [vault:_neuroworks/templates/2026-05-29-custom-clawbot-weekly-vault-review.md]

### 2. Stale or redundant items

| Path | Issue | Recommendation |
|------|-------|----------------|
| `_neuroworks/templates/2026-05-26-custom-clawbot-weekly-vault-review.md` | Duplicate of later templates; never edited. | Archive or delete. |
| `_neuroworks/templates/2026-05-27-custom-clawbot-weekly-vault-review.md` | Same content as other dates. | Archive or delete. |
| `_neuroworks/templates/2026-05-28-custom-clawbot-weekly-vault-review.md` | Same content as other dates. | Archive or delete. |
| `_neuroworks/templates/2026-05-29-custom-clawbot-weekly-vault-review.md` | Most recent copy; still only a task stub. | Keep as the **single** reference for this recurring task, or move it to a dedicated “Task Templates” folder outside the inbox. |

### 3. Suggested new links

Although the current set consists solely of template files, establishing a few structural links will improve discoverability for future reviews:

1. **Link each template to a master task note** (e.g., `1-Active/weekly-vault-review.md`) that documents the review process, criteria for promotion, and archival policy.  
2. **Create a backlink from the master task note to the retained latest template** (`2026-05-29`) so the template is reachable from the workflow description.  
3. **Add a tag relationship**: tag all review‑related files with `#weekly-review`. This enables tag‑based queries across the vault and can surface any future notes that belong to the review cycle.

Implementing these links now will prevent the accumulation of redundant template copies and provide a clear anchor point for any notes that do appear in `0‑Inbox/` in upcoming weeks.

<details><summary>Log</summary>

```
[2026-05-29T13:59:39.935Z] Working as Clawbot — AI agent operator.
[2026-05-29T13:59:40.894Z] Thinking about the best approach…
[2026-05-29T13:59:40.920Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T13:59:58.928Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T13:59:58.929Z] Plan ready: 1 step — Default research plan for: Review what landed in the vault this past week. Surface notes worth promoting from 0-Inbox/ to 2-Permanent/, flag stale items, and suggest 2-3 new links between notes I might have missed.
[2026-05-29T13:59:58.933Z] Step 1 of 1: Researching "Review what landed in the vault this past week. Surface notes worth promoting fr…" — vault + web
[2026-05-29T14:01:08.639Z] All sub-agents finished in 69.7s.
[2026-05-29T14:01:08.639Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:01:08.645Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:01:08.645Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:01:08.645Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:01:14.470Z] Wave 1 finished in 5.8s.
[2026-05-29T14:01:14.470Z] All sub-agents finished in 5.8s.
[2026-05-29T14:01:14.474Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:01:19.370Z] All sub-agents finished in 4.9s.
[2026-05-29T14:01:19.374Z] quality.check failed (score=0.4, issues: No real citations provided; claims about vault contents are unsupported; The answer repeats the same template information without evidence) — re-synthesising with the large model
[2026-05-29T14:01:19.382Z] Thinking with openai/gpt-oss-120b:free (~4 326 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:01:49.353Z] quality rescue improved score: 0.4 → 0.82; using the rescued draft
[2026-05-29T14:01:49.353Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:01:49.599Z] Vault commit: done.
```
</details>
