---
type: job
title: Ask Dani anything
slug: ask-dani-anything-42a821e2
created: 2026-05-29T22:53:22.385Z
jobId: 42a821e2-f118-4b49-88bc-ba8bcdc1b498
status: succeeded
template: custom-product-designer-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:20:31.877Z
finishedAt: 2026-05-29T22:53:22.385Z
---

# Ask Dani anything

- **Status:** succeeded
- **Template:** custom-product-designer-ask-anything
- **Started:** 2026-05-29T21:20:31.877Z
- **Finished:** 2026-05-29T22:53:22.385Z
- **Title:** Ask Dani anything

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Ask Dani anything\nDescription: Free-form task framed through the Product Designer role. Empty plan — re-plans against the persona system prompt each run."
}
```

## Plan
Default research plan for: As a Product Designer, respond to the following task in role:

Context: Role: Custom
Title: Ask Dani anything
Description: Free-form task framed through the Product Designer role. Empty plan — re-plans against the persona system prompt each run

### Steps
1. ✓ Researching "As a Product Designer, respond to the following task in role:

Context: Role: Cu…" — vault + web — `research.deep` (31.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✗ Quality-checking the draft — `quality.check` (5464.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
    error: This operation was aborted
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (13.8s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Product Designer – “Ask Dani Anything”

**Objective**  
Provide a concise, design‑focused response that Dani can use when initiating a free‑form “Ask Dani Anything” session. The response should frame the task in product‑design terms, outline key considerations, and offer a clear next‑step plan.

### 1. What is a “product” in this context?

A product is *something that can be seen or experienced, created to meet the needs or desires of consumers*—physical, digital, a service, or a concept. In design, the product is the experience‑driven solution that delivers value to users while fulfilling business goals [1].

### 2. Design Lens – Core Pillars

| Pillar | Why it matters | Design actions |
|--------|----------------|----------------|
| **Market Fit** | Ensures the solution addresses a real user need. | Conduct user research, create problem statements, validate hypotheses with rapid prototypes. |
| **Unique Value Proposition (UVP)** | Differentiates the product in a crowded market. | Map competitive landscape, articulate UVP on every screen, test clarity with users. |
| **Quality & Trust** | Drives repeat usage and brand equity. | Define quality criteria (usability, performance, accessibility), embed QA early, iterate on feedback loops. |
| **Scalability & Sustainability** | Supports growth and long‑term viability. | Design modular architecture, plan for future feature expansion, consider resource constraints. |

### 3. Immediate Next Steps for Dani

1. **Clarify the goal** – What specific insight or decision does Dani need from this session?  
2. **Identify key stakeholders** – Who will be impacted by the outcome?  
3. **Gather baseline data** – Any existing research, metrics, or user feedback?  
4. **Define success criteria** – How will success be measured?  

Once these items are clarified, a focused agenda can be drafted, ensuring the session remains productive and aligned with product‑design best practices.

---

*Prepared by the Product Design team.*

<details><summary>Log</summary>

```
[2026-05-29T21:20:31.890Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:20:31.894Z] Thinking about the best approach…
[2026-05-29T21:20:31.950Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:20:48.988Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T21:20:48.988Z] Plan ready: 1 step — Default research plan for: As a Product Designer, respond to the following task in role:

Context: Role: Custom
Title: Ask Dani anything
Description: Free-form task framed through the Product Designer role. Empty plan — re-plans against the persona system prompt each run.
[2026-05-29T21:20:48.992Z] Step 1 of 1: Researching "As a Product Designer, respond to the following task in role:

Context: Role: Cu…" — vault + web
[2026-05-29T21:21:20.939Z] All sub-agents finished in 31.9s.
[2026-05-29T21:21:20.951Z] Thinking with openai/gpt-oss-20b:free (~2 828 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:21:48.763Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:21:48.770Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:21:48.770Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:21:48.770Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T22:52:52.869Z]   ✗ Quality-checking the draft: This operation was aborted
[2026-05-29T22:52:52.869Z] Wave 1 finished in 5464.1s — 1 of 2 sub-agents succeeded (1 failed; partial results kept).
[2026-05-29T22:52:52.869Z] All sub-agents finished in 5464.1s.
[2026-05-29T22:53:08.156Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T22:53:21.980Z] All sub-agents finished in 13.8s.
[2026-05-29T22:53:21.980Z] Wrote to your second brain — committing the changes.
[2026-05-29T22:53:22.385Z] Vault commit: done.
```
</details>
