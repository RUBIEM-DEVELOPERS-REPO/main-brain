---
type: job
title: Ask Tao anything
slug: ask-tao-anything-60e13aa3
created: 2026-05-29T20:52:03.459Z
jobId: 60e13aa3-5c0a-4d54-8eac-7baa82729ced
status: succeeded
template: custom-technical-writer-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:50:08.063Z
finishedAt: 2026-05-29T20:52:03.459Z
---

# Ask Tao anything

- **Status:** succeeded
- **Template:** custom-technical-writer-ask-anything
- **Started:** 2026-05-29T20:50:08.063Z
- **Finished:** 2026-05-29T20:52:03.459Z
- **Title:** Ask Tao anything

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Ask Tao anything\nDescription: Free-form task framed through the Technical Writer role. Empty plan — re-plans against the persona system prompt each run."
}
```

## Plan
Default research plan for: As a Technical Writer, respond to the following task in role:

Context: Role: Custom
Title: Ask Tao anything
Description: Free-form task framed through the Technical Writer role. Empty plan — re-plans against the persona system prompt each run

### Steps
1. ✓ Researching "As a Technical Writer, respond to the following task in role:

Context: Role: Cu…" — vault + web — `research.deep` (46.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (14.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.7s)
    > auto-injected: quality score=0.69 (pass=false) — peer review for a second opinion

## Answer
## Ask Tao Anything – Feature Overview  

**Purpose**  
Provide a concise, user‑facing description of the “Ask Tao Anything” feature for inclusion in product documentation, onboarding guides, and help‑center articles.  

**Audience**  
- **Primary:** End‑users who will interact with the feature.  
- **Secondary:** Support personnel and product managers who need a quick reference.  

**Key Points to Communicate**  

| Element | Content | Rationale |
|---------|---------|-----------|
| **Feature name** | *Ask Tao Anything* | Clearly identifies the function. |
| **Functionality** | Enables users to pose any natural‑language question to Tao, the system’s AI assistant, and receive an immediate, context‑aware response. | Sets expectation for open‑ended interaction. |
| **Interaction style** | Free‑form input; no predefined templates or categories. | Highlights flexibility and ease of use. |
| **Tone** | Friendly yet precise; avoid unnecessary jargon unless required by the user’s query. | Aligns with best‑practice guidance on technical language clarity. |
| **Example prompt** | “How do I export my project data to CSV?” | Illustrates a typical user query. |
| **Response time** | Near‑real‑time (seconds). | Provides performance expectation. |

**Next Steps**  
- Integrate the above points into the help‑center article.  
- Add illustrative screenshots or GIFs showing a sample conversation with Tao.  
- Verify terminology consistency against the product glossary.  

*Draft based on the provided research note [1].*

<details><summary>Log</summary>

```
[2026-05-29T20:50:08.086Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:50:08.093Z] Thinking about the best approach…
[2026-05-29T20:50:08.240Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:50:09.842Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:50:09.842Z] Plan ready: 1 step — Default research plan for: As a Technical Writer, respond to the following task in role:

Context: Role: Custom
Title: Ask Tao anything
Description: Free-form task framed through the Technical Writer role. Empty plan — re-plans against the persona system prompt each run.
[2026-05-29T20:50:09.851Z] Step 1 of 1: Researching "As a Technical Writer, respond to the following task in role:

Context: Role: Cu…" — vault + web
[2026-05-29T20:50:56.080Z] All sub-agents finished in 46.2s.
[2026-05-29T20:50:56.088Z] Thinking with openai/gpt-oss-20b:free (~2 805 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:50:57.465Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T20:51:20.530Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T20:51:20.530Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:51:20.535Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:51:20.535Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:51:20.535Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:51:34.932Z] Wave 1 finished in 14.4s.
[2026-05-29T20:51:34.932Z] All sub-agents finished in 14.4s.
[2026-05-29T20:51:34.938Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:51:37.684Z] All sub-agents finished in 2.7s.
[2026-05-29T20:51:37.689Z] quality.check failed (score=0.69, issues: Low citation coverage – only one generic reference used, not tied to specific claims) — re-synthesising with the large model
[2026-05-29T20:51:37.698Z] Thinking with openai/gpt-oss-120b:free (~3 401 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:52:03.028Z] quality rescue improved score: 0.69 → 0.89; using the rescued draft
[2026-05-29T20:52:03.028Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:52:03.459Z] Vault commit: done.
```
</details>
