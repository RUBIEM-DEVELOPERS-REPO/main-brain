---
type: job
title: Find related notes
slug: find-related-notes-2173f3df
created: 2026-05-29T20:26:34.923Z
jobId: 2173f3df-2306-44d1-bd77-9b84ca6d3126
status: succeeded
template: custom-clawbot-find-related-notes
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:22:37.501Z
finishedAt: 2026-05-29T20:26:34.923Z
---

# Find related notes

- **Status:** succeeded
- **Template:** custom-clawbot-find-related-notes
- **Started:** 2026-05-29T20:22:37.501Z
- **Finished:** 2026-05-29T20:26:34.923Z
- **Title:** Find related notes

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Find related notes\nDescription: Given a topic, finds related notes in your vault and explains the connection. Use to surface threads you forgot you had."
}
```

## Plan
Default research plan for: Find notes related to the following topic across the vault. For each, summarise the connection in one sentence. Return the most relevant 5-10 with paths.

Context: Role: Custom
Title: Find related notes
Description: Given a topic, finds related notes in your vault and explains the connection. Use to surface threads you forgot you had

### Steps
1. ✓ Researching "Find notes related to the following topic across the vault. For each, summarise …" — vault + web — `research.deep` (16.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (173.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (16.6s)
    > auto-injected: quality score=0.72 (pass=false) — peer review for a second opinion

## Answer
## Summary  

The vault search could not be performed because no specific topic, keyword, or phrase was supplied. Consequently, there are no matching notes to list or summarize.

**Next step** – provide the exact subject you wish to explore (e.g., “vector embeddings”, “team dispatch workflow”, etc.). Once the topic is known, a scan of the vault will return the five‑to‑ten most relevant notes together with a one‑sentence description of each connection and its file path.  

*Source: the vault search returned zero hits for the generic request [1].*  

*Assumed: the user intends to supply a concrete topic after this clarification.*

<details><summary>Log</summary>

```
[2026-05-29T20:22:37.516Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:22:37.530Z] Thinking about the best approach…
[2026-05-29T20:22:37.585Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:22:38.864Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:22:38.864Z] Plan ready: 1 step — Default research plan for: Find notes related to the following topic across the vault. For each, summarise the connection in one sentence. Return the most relevant 5-10 with paths.

Context: Role: Custom
Title: Find related notes
Description: Given a topic, finds related notes in your vault and explains the connection. Use to surface threads you forgot you had.
[2026-05-29T20:22:38.871Z] Step 1 of 1: Researching "Find notes related to the following topic across the vault. For each, summarise …" — vault + web
[2026-05-29T20:22:55.680Z] All sub-agents finished in 16.8s.
[2026-05-29T20:22:55.694Z] Thinking with openai/gpt-oss-20b:free (~3 092 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:23:07.468Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:23:07.480Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:23:07.480Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:23:07.480Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:26:01.240Z] Wave 1 finished in 173.8s.
[2026-05-29T20:26:01.240Z] All sub-agents finished in 173.8s.
[2026-05-29T20:26:01.247Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:26:02.637Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:26:06.175Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T20:26:17.801Z] All sub-agents finished in 16.6s.
[2026-05-29T20:26:17.809Z] quality.check failed (score=0.72, issues: The answer assumes a specific topic was provided but does not check for the presence of such a topic in the vault.) — re-synthesising with the large model
[2026-05-29T20:26:17.826Z] Thinking with openai/gpt-oss-120b:free (~3 401 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:26:32.672Z] quality rescue improved score: 0.72 → 0.94; using the rescued draft
[2026-05-29T20:26:32.672Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:26:34.923Z] Vault commit: done.
```
</details>
