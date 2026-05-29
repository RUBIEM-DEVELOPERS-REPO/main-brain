---
type: job
title: When no expert lane fits, default to generalist Clawbot voice
slug: when-no-expert-lane-fits-default-to-generalist-clawbot-voice-1043fff5
created: 2026-05-29T23:59:08.946Z
jobId: 1043fff5-6ecd-4032-98b2-8dccd0cd7ca2
status: succeeded
template: custom-knowitall-when-no-expert-lane-fits-default-to-gene
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:45:02.599Z
finishedAt: 2026-05-29T23:59:08.946Z
---

# When no expert lane fits, default to generalist Clawbot voice

- **Status:** succeeded
- **Template:** custom-knowitall-when-no-expert-lane-fits-default-to-gene
- **Started:** 2026-05-29T23:45:02.599Z
- **Finished:** 2026-05-29T23:59:08.946Z
- **Title:** When no expert lane fits, default to generalist Clawbot voice

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: When no expert lane fits, default to generalist Clawbot voice\nDescription: Persona-derived starter task for \"Kit\"."
}
```

## Plan
Default research plan for: As a Polymath, any-persona adapter, when no expert lane fits, default to generalist clawbot voice.

Context: Role: Custom
Title: When no expert lane fits, default to generalist Clawbot voice
Description: Persona-derived starter task for "Kit"

### Steps
1. ✓ Researching "As a Polymath, any-persona adapter, when no expert lane fits, default to general…" — vault + web — `research.deep` (23.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (608.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✗ Asking a peer to review the draft — `peer.review` (9.7s)
    > auto-injected: quality score=0.45 (pass=false) — peer review for a second opinion
    error: review HTTP 503

## Answer
## Report: Defaulting to the Generalist Clawbot Voice When No Expert Lane Matches  

### Guideline Summary  

| Situation | Recommended Action |
|-----------|--------------------|
| Query maps cleanly to an existing expert lane (e.g., legal, medical, coding) | Dispatch to that expert lane. |
| No expert lane matches the query’s domain, or the query is interdisciplinary/ambiguous | Respond using the general‑purpose **clawbot** voice, leveraging the Polymath’s broad knowledge base. |
| User explicitly requests a “generalist” answer | Use the clawbot voice even if an expert lane could apply, to honor the user’s preference. |

### Rationale  

- The Polymath persona is defined as an individual whose knowledge spans many subjects and who solves problems by drawing on a wide body of knowledge rather than deep specialization [1].  
- The platform’s default interaction style is the **clawbot** voice, intended for “any‑persona” or generalist engagements. Falling back to this voice ensures a coherent response when no specialized lane is appropriate [3].  
- This fallback prevents misrouting to an ill‑suited expert lane and guarantees that the system always provides an answer rather than failing.

### Implementation Notes  

1. **Detection** – Implement a check that flags queries lacking a match to any expert lane or that span multiple domains.  
2. **Voice Selection** – Automatically switch to the clawbot voice for flagged queries, drawing on the Polymath’s breadth of knowledge.  
3. **User Preference Override** – If the user explicitly asks for a generalist response, prioritize the clawbot voice regardless of lane availability.  

*Assumed: the report will be used by the platform engineering team to update routing logic for the Polymath persona.*

<details><summary>Log</summary>

```
[2026-05-29T23:45:02.623Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:45:02.630Z] Thinking about the best approach…
[2026-05-29T23:45:02.708Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:45:19.543Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:45:19.543Z] Plan ready: 1 step — Default research plan for: As a Polymath, any-persona adapter, when no expert lane fits, default to generalist clawbot voice.

Context: Role: Custom
Title: When no expert lane fits, default to generalist Clawbot voice
Description: Persona-derived starter task for "Kit".
[2026-05-29T23:45:19.549Z] Step 1 of 1: Researching "As a Polymath, any-persona adapter, when no expert lane fits, default to general…" — vault + web
[2026-05-29T23:45:42.991Z] All sub-agents finished in 23.4s.
[2026-05-29T23:45:43.001Z] Thinking with openai/gpt-oss-20b:free (~2 812 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:45:45.765Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T23:46:05.802Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T23:46:05.802Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:46:05.807Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:46:05.807Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:46:05.807Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:51:13.074Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — fetch failed
[2026-05-29T23:56:14.045Z] Wave 1 finished in 608.2s.
[2026-05-29T23:56:14.045Z] All sub-agents finished in 608.2s.
[2026-05-29T23:56:14.049Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:56:15.627Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T23:56:18.350Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T23:56:23.733Z]   ✗ Asking a peer to review the draft: review HTTP 503
[2026-05-29T23:56:23.733Z] First wave had no successful sub-agents — stopping early. I'll summarise what was tried and why it didn't land.
[2026-05-29T23:56:23.733Z] All sub-agents finished in 9.7s.
[2026-05-29T23:56:23.740Z] quality.check failed (score=0.45, issues: Lacks specific citations; Unclear definition of 'interdisciplinary/ambiguous' queries) — re-synthesising with the large model
[2026-05-29T23:56:23.747Z] Thinking with openai/gpt-oss-120b:free (~3 334 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:59:08.694Z] quality rescue improved score: 0.45 → 0.82; using the rescued draft
[2026-05-29T23:59:08.694Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:59:08.946Z] Vault commit: done.
```
</details>
