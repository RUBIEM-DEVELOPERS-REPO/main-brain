---
type: job
title: Weekly vault review
slug: weekly-vault-review-f98659b7
created: 2026-05-29T19:03:24.079Z
jobId: f98659b7-f1ed-4bc3-8e65-3e350159e243
status: succeeded
template: custom-clawbot-weekly-vault-review
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T18:56:50.719Z
finishedAt: 2026-05-29T19:03:24.079Z
---

# Weekly vault review

- **Status:** succeeded
- **Template:** custom-clawbot-weekly-vault-review
- **Started:** 2026-05-29T18:56:50.719Z
- **Finished:** 2026-05-29T19:03:24.079Z
- **Title:** Weekly vault review

## Plan
Default research plan for: Review what landed in the vault this past week. Surface notes worth promoting from 0-Inbox/ to 2-Permanent/, flag stale items, and suggest 2-3 new links between notes I might have missed

### Steps
1. ✓ Researching "Review what landed in the vault this past week. Surface notes worth promoting fr…" — vault + web — `research.deep` (49.6s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (21.6s)
    > auto-injected: quality score=0.55 (pass=false) — peer review for a second opinion

## Answer
## Weekly Vault Review – 29 May 2026  

### Items to promote to **2‑Permanent/**  
1. `0‑Inbox/202605291401-research-review-what-landed-in-the-vault-this-past-week-surface-notes.md` – contains the research brief that matches the weekly‑review task. [vault:0-Inbox/202605291401-research-review-what-landed-in-the-vault-this-past-week-surface-notes.md]  
2. `_neuroworks/jobs/2026-05-29-weekly-vault-review-d0112d51.md` – the job record for this review, useful as a historical log. [vault:_neuroworks/jobs/2026-05-29-weekly-vault-review-d0112d51.md]  
3. All template files dated 26‑29 May 2026 in `_neuroworks/templates/` – they define the workflow and are evergreen. [vault:_neuroworks/templates/2026-05-26-custom-clawbot-weekly-vault-review.md], [vault:_neuroworks/templates/2026-05-27-custom-clawbot-weekly-vault-review.md], [vault:_neuroworks/templates/2026-05-28-custom-clawbot-weekly-vault-review.md], [vault:_neuroworks/templates/2026-05-29-custom-clawbot-weekly-vault-review.md]  

### Stale items  
- No inbox notes older than seven days were found; therefore no items require archiving at this time.  

### Suggested new links (wikilinks)  
1. In the job note, add a link to the template that generated it (e.g., `[[_neuroworks/templates/2026-05-29-custom-clawbot-weekly-vault-review.md]]`).  
2. In the research brief, link to the most recent template (`[[_neuroworks/templates/2026-05-29-custom-clawbot-weekly-vault-review.md]]`).  
3. Connect the series of template notes chronologically (`[[_neuroworks/templates/2026-05-26-custom-clawbot-weekly-vault-review.md]] → [[_neuroworks/templates/2026-05-27-custom-clawbot-weekly-vault-review.md]] → [[_neuroworks/templates/2026-05-28-custom-clawbot-weekly-vault-review.md]] → [[_neuroworks/templates/2026-05-29-custom-clawbot-weekly-vault-review.md]]`).  

**Next steps**  
1. Move the three promoted notes into `2‑Permanent/`.  
2. Insert the suggested wikilinks using the `[[...]]` syntax.  
3. Periodically review older inbox items (beyond 7 days) for possible promotion or archiving.

<details><summary>Log</summary>

```
[2026-05-29T18:56:50.740Z] Working as Clawbot — AI agent operator.
[2026-05-29T18:56:51.713Z] Thinking about the best approach…
[2026-05-29T18:56:51.756Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T18:57:09.761Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T18:57:09.762Z] Plan ready: 1 step — Default research plan for: Review what landed in the vault this past week. Surface notes worth promoting from 0-Inbox/ to 2-Permanent/, flag stale items, and suggest 2-3 new links between notes I might have missed.
[2026-05-29T18:57:09.768Z] Step 1 of 1: Researching "Review what landed in the vault this past week. Surface notes worth promoting fr…" — vault + web
[2026-05-29T18:57:59.383Z] All sub-agents finished in 49.6s.
[2026-05-29T18:57:59.383Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T18:57:59.387Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T18:57:59.387Z] Step 3 of 3: Security-scanning the note
[2026-05-29T18:57:59.387Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T18:58:04.178Z] Wave 1 finished in 4.8s.
[2026-05-29T18:58:04.178Z] All sub-agents finished in 4.8s.
[2026-05-29T18:58:04.185Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T18:58:25.787Z] All sub-agents finished in 21.6s.
[2026-05-29T18:58:25.799Z] quality.check failed (score=0.55, issues: No inline citations for claims; Overly confident statements without evidence) — re-synthesising with the large model
[2026-05-29T18:58:25.825Z] Thinking with openai/gpt-oss-120b:free (~4 653 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:02:11.490Z] quality rescue improved score: 0.55 → 0.79; using the rescued draft
[2026-05-29T19:02:11.490Z] peer review verdict=needs-work (Unverified claim that specific notes exist and their paths; no evidence provided; potential hallucination of note names ) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:02:11.504Z] Thinking with openai/gpt-oss-120b:free (~4 884 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:03:23.788Z] retry verdict=needs-work but quality improved (0.79 → 0.93); using retry
[2026-05-29T19:03:23.788Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:03:24.079Z] Vault commit: done.
```
</details>
