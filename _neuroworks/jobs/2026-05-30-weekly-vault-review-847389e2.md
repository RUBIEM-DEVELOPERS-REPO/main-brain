---
type: job
title: Weekly vault review
slug: weekly-vault-review-847389e2
created: 2026-05-30T09:52:55.737Z
jobId: 847389e2-e5ba-485c-a446-a773aae867e8
status: succeeded
template: custom-clawbot-weekly-vault-review
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:51:15.080Z
finishedAt: 2026-05-30T09:52:55.737Z
---

# Weekly vault review

- **Status:** succeeded
- **Template:** custom-clawbot-weekly-vault-review
- **Started:** 2026-05-30T09:51:15.080Z
- **Finished:** 2026-05-30T09:52:55.737Z
- **Title:** Weekly vault review

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Weekly vault review\nDescription: Goes through the past week of vault changes, identifies what to promote from 0-Inbox/, what to archive, and any cross-references worth making."
}
```

## Plan
Default research plan for: Review what landed in the vault this past week. Surface notes worth promoting from 0-Inbox/ to 2-Permanent/, flag stale items, and suggest 2-3 new links between notes I might have missed

### Steps
1. ✓ Researching "Review what landed in the vault this past week. Surface notes worth promoting fr…" — vault + web — `research.deep` (72.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Weekly Vault Review – 30 May 2026**

| Note (Inbox) | Why it’s worth promoting → **2‑Permanent** | Stale?* |
|--------------|--------------------------------------------|---------|
| `0‑Inbox/202605291401‑research‑review‑what‑landed‑in‑the‑vault‑this‑past‑week‑surface‑notes.md` | The file contains the *task definition* for the weekly review itself (origin of the whole workflow). Keeping it permanent makes the review process discoverable for future onboarding and audit. | No |
| `0‑Inbox/202605291857‑research‑review‑what‑landed‑in‑the‑vault‑this‑past‑week‑surface‑notes.md` | Duplicate of the 14‑01 entry (same title, same content). Promote the **earlier timestamp** version and delete the later one to avoid redundancy. | Yes – duplicate |
| `_neuroworks/templates/2026‑05‑26‑custom‑clawbot‑weekly‑vault‑review.md` | Template that generated the above task. It is a *canonical template* for the weekly review; moving it to Permanent preserves the exact recipe for future runs. | No |
| `_neuroworks/templates/2026‑05‑27‑custom‑clawbot‑weekly‑vault‑review.md` | Same template as 26‑May but with a newer date – essentially a copy. Keep only the **most recent** version (27‑May) and archive the 26‑May copy. | Yes – redundant copy |
| `_neuroworks/templates/2026‑05‑28‑custom‑clawbot‑weekly‑vault‑review.md` | Another copy of the same template. Consolidate all three into a **single** permanent file (e.g., `templates/weekly‑vault‑review.md`) and delete the dated duplicates. | Yes – redundant copy |
| `_neuroworks/templates/2026‑05‑29‑custom‑clawbot‑weekly‑vault‑review.md` | Same as above – duplicate. | Yes – redundant copy |
| `_neuroworks/templates/2026‑05‑30‑custom‑clawbot‑weekly‑vault‑review.md` | Same as above – duplicate. | Yes – redundant copy |

\*Stale = “likely unnecessary to keep in Inbox because it is a duplicate or superseded version.”

### Actions to take
1. **Promote** the two unique items to `2‑Permanent/`  
   - `0‑Inbox/202605291401‑research‑review‑what‑landed‑in‑the‑vault‑this‑past‑week‑surface‑notes.md` → `2‑Permanent/review‑weekly‑task‑definition.md`  
   - `_neuroworks/templates/2026‑05‑27‑custom‑clawbot‑weekly‑vault‑review.md` → `2‑Permanent/templates/weekly‑vault‑review.md` (rename to a generic name).

2. **Delete or archive** the duplicate inbox entry (`202605291857…`) and the dated template copies (26, 28, 29, 30 May).

3. **Update** the remaining template to reference the new permanent location (e.g., `templates/weekly‑vault‑review.md`) so future runs pull the correct file.

### Suggested New Links (missed connections)

| From (Permanent) | To (Permanent) | Rationale |
|------------------|----------------|-----------|
| `templates/weekly‑vault‑review.md` | `2‑Permanent/review‑weekly‑task‑definition.md` | Explicitly link the template to the task definition it implements, making the workflow traceable. |
| `2‑Permanent/review‑weekly‑task‑definition.md` | `2‑Permanent/templates/weekly‑vault‑review.md` (reverse link) | Provides a back‑reference for anyone reading the definition to see the exact template used. |
| `2‑Permanent/review‑weekly‑task‑definition.md` | `2‑Permanent/knowledge‑graph‑overview.md` *(if such a file exists)* | Connects the review process to the broader knowledge‑graph overview, encouraging users to consider how weekly reviews feed the graph. |

If any of the suggested target notes do not yet exist, create a stub file with a brief description so the links have a concrete destination. This will tighten navigation and make the weekly review an integral, discoverable part of the vault.

<details><summary>Log</summary>

```
[2026-05-30T09:51:15.092Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:51:15.802Z] Thinking about the best approach…
[2026-05-30T09:51:15.864Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T09:51:33.872Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T09:51:33.872Z] Plan ready: 1 step — Default research plan for: Review what landed in the vault this past week. Surface notes worth promoting from 0-Inbox/ to 2-Permanent/, flag stale items, and suggest 2-3 new links between notes I might have missed.
[2026-05-30T09:51:33.877Z] Step 1 of 1: Researching "Review what landed in the vault this past week. Surface notes worth promoting fr…" — vault + web
[2026-05-30T09:52:46.103Z] All sub-agents finished in 72.2s.
[2026-05-30T09:52:46.105Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:52:46.121Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:52:46.121Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:52:46.122Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T09:52:53.338Z] Wave 1 finished in 7.2s.
[2026-05-30T09:52:53.338Z] All sub-agents finished in 7.2s.
[2026-05-30T09:52:53.338Z] Quality check passed (86%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-30T09:52:53.339Z] Wrote to your second brain — committing the changes.
[2026-05-30T09:52:55.737Z] Vault commit: done.
```
</details>
