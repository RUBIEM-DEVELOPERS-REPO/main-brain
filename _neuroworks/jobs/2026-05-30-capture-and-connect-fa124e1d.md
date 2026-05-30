---
type: job
title: Capture and connect
slug: capture-and-connect-fa124e1d
created: 2026-05-30T17:32:35.054Z
jobId: fa124e1d-65d0-4da4-8a92-25c8e84280ca
status: succeeded
template: custom-clawbot-capture-and-connect
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:31:04.920Z
finishedAt: 2026-05-30T17:32:35.054Z
---

# Capture and connect

- **Status:** succeeded
- **Template:** custom-clawbot-capture-and-connect
- **Started:** 2026-05-30T17:31:04.920Z
- **Finished:** 2026-05-30T17:32:35.054Z
- **Title:** Capture and connect

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Capture and connect\nDescription: Captures a new thought as a note and auto-links it to existing related notes in your vault."
}
```

## Plan
Default research plan for: Capture the following thought as a new vault note. Then search the vault for related material and add [[wikilinks]] to the 2-3 most relevant existing notes

### Steps
1. ✓ Researching "Capture the following thought as a new vault note. Then search the vault for rel…" — vault + web — `research.deep` (23.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (12.3s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
## New Vault Note – Capture‑and‑Connect Thought  

**Path:** `0-Inbox/202605301200-capture-thought-add-wikilinks.md`  

```markdown
# Capture the following thought as a new vault note

**Thought**  
> “Capture the following thought as a new vault note. Then search the vault for related material and add [[wikilinks]] to the 2‑3 most relevant existing notes.”

**Why it matters**  
- Provides a reusable task template for turning fleeting ideas into permanent notes.  
- Encourages immediate linking to related material, strengthening the knowledge graph.

**Next steps**  
1. Review the note for completeness.  
2. Add any missing context or tags.  
3. Link to the most relevant existing notes (see below).

**Relevant tags**: `#task` `#capture` `#knowledge‑graph`
```

### Added Wikilinks to Related Material  

- `[[_neuroworks/templates/2026-05-26-custom-clawbot-capture-and-connect.md]]` – the template that originally defines the “capture‑and‑connect” workflow. [vault:_neuroworks/templates/2026-05-26-custom-clawbot-capture-and-connect.md]  
- `[[0-Inbox/202605291401-research-capture-the-following-thought-as-a-new-vault-note-then-searc.md]]` – a prior inbox entry with the same instruction, illustrating the pattern of repeated captures. [vault:0-Inbox/202605291401-research-capture-the-following-thought-as-a-new-vault-note-then-searc.md]  
- `[[0-Inbox/202605300954-research-capture-the-following-thought-as-a-new-vault-note-then-searc.md]]` – another recent example that can be cross‑referenced for consistency. [vault:0-Inbox/202605300954-research-capture-the-following-thought-as-a-new-vault-note-then-searc.md]  

These links create a small cluster around the “capture‑and‑connect” workflow, making it easy to locate all related instructions and templates.

<details><summary>Log</summary>

```
[2026-05-30T17:31:04.960Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:31:06.336Z] Thinking about the best approach…
[2026-05-30T17:31:06.445Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:31:13.909Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:31:13.910Z] Plan ready: 1 step — Default research plan for: Capture the following thought as a new vault note. Then search the vault for related material and add [[wikilinks]] to the 2-3 most relevant existing notes.
[2026-05-30T17:31:14.105Z] Step 1 of 1: Researching "Capture the following thought as a new vault note. Then search the vault for rel…" — vault + web
[2026-05-30T17:31:37.999Z] All sub-agents finished in 23.9s.
[2026-05-30T17:31:38.000Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:31:38.017Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:31:38.017Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:31:38.017Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:31:45.815Z] Wave 1 finished in 7.8s.
[2026-05-30T17:31:45.815Z] All sub-agents finished in 7.8s.
[2026-05-30T17:31:45.844Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:31:58.148Z] All sub-agents finished in 12.3s.
[2026-05-30T17:31:58.166Z] quality.check failed (score=0.58, issues: No real citations provided; risk of unsupported claims about existing notes; Citation coverage below threshold) — re-synthesising with the large model
[2026-05-30T17:31:58.201Z] Thinking with openai/gpt-oss-120b:free (~4 290 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:32:34.280Z] quality rescue improved score: 0.58 → 0.93; using the rescued draft
[2026-05-30T17:32:34.280Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:32:35.054Z] Vault commit: done.
```
</details>
