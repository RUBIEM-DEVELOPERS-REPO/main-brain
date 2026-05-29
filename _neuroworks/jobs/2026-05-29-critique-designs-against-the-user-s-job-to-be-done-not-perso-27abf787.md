---
type: job
title: Critique designs against the user's job-to-be-done — not personal taste
slug: critique-designs-against-the-user-s-job-to-be-done-not-perso-27abf787
created: 2026-05-29T14:37:50.863Z
jobId: 27abf787-bd48-4f43-b648-93e1323c929a
status: succeeded
template: custom-product-designer-critique-designs-against-the-user-s-job-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:35:52.893Z
finishedAt: 2026-05-29T14:37:50.863Z
---

# Critique designs against the user's job-to-be-done — not personal taste

- **Status:** succeeded
- **Template:** custom-product-designer-critique-designs-against-the-user-s-job-
- **Started:** 2026-05-29T14:35:52.893Z
- **Finished:** 2026-05-29T14:37:50.863Z
- **Title:** Critique designs against the user's job-to-be-done — not personal taste

## Plan
Default research plan for: As a Product Designer, critique designs against the user's job-to-be-done — not personal taste

### Steps
1. ✓ Researching "As a Product Designer, critique designs against the user's job-to-be-done — not …" — vault + web — `research.deep` (52.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (12.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (15.4s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion

## Answer
## Product Design Critique Framework – Aligning with the User’s Job‑to‑Be‑Done  

**Purpose** – Provide a systematic, evidence‑based method for evaluating design concepts so that every comment is tied to the user’s core job‑to‑be‑done (JTBD) rather than personal aesthetic preference.

### 1. Identify the Core JTBD  
Extract the explicit JTBD statement from the research vault (e.g., “help me quickly compare pricing options while staying within my budget”). This statement defines the outcome the user seeks and becomes the benchmark for all design judgments. [1]

### 2. Map Design Elements to JTBD Outcomes  
Create a traceability matrix that links each screen or interaction to the specific outcome metrics embedded in the JTBD (speed, accuracy, confidence, effort, error‑reduction, etc.). By documenting *design element → desired user outcome*, reviewers can see exactly how a proposal supports—or hinders—the job. [1]

### 3. Apply Evidence‑Based Evaluation Criteria  

| Criterion | What to Assess | Why It Matters for the JTBD |
|-----------|----------------|-----------------------------|
| **Functional Fit** | Does the element enable the user to complete the job? | Directly measures whether the design fulfills the core task. |
| **Efficiency** | Does it reduce steps or time required? | Aligns with JTBD goals such as “complete the task in < 2 minutes.” |
| **Clarity** | Is required information obvious and easy to locate? | Supports outcomes like confidence and reduced cognitive load. |
| **Error Tolerance** | Does it prevent mistakes or provide recovery paths? | Improves accuracy and user trust, key JTBD success metrics. |

These criteria are grounded in the JTBD’s success metrics and prevent subjective remarks such as “I like the colour.” [1]

### 4. Quantify Impact  
Whenever possible, reference existing usability data, A/B‑test results, or heuristic scores that relate to the JTBD outcomes. Quantitative evidence turns qualitative feedback into actionable recommendations and highlights the magnitude of any identified gaps. [1]

### 5. Deliver Structured Feedback  
- **Observation** – State the design element and the JTBD outcome it affects.  
- **Impact** – Explain the effect on the outcome (e.g., “adds 3 seconds to the comparison flow, exceeding the < 2 minute target”).  
- **Recommendation** – Propose a concrete change tied to the JTBD metric.  

By following this framework, critiques remain objective, measurable, and directly tied to the user’s real needs.

<details><summary>Log</summary>

```
[2026-05-29T14:35:52.903Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:35:53.557Z] Thinking about the best approach…
[2026-05-29T14:35:53.586Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:35:54.804Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:35:54.804Z] Plan ready: 1 step — Default research plan for: As a Product Designer, critique designs against the user's job-to-be-done — not personal taste.
[2026-05-29T14:35:54.808Z] Step 1 of 1: Researching "As a Product Designer, critique designs against the user's job-to-be-done — not …" — vault + web
[2026-05-29T14:36:47.211Z] All sub-agents finished in 52.4s.
[2026-05-29T14:36:47.211Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:36:47.217Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:36:47.217Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:36:47.217Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:36:48.608Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T14:36:59.900Z] Wave 1 finished in 12.7s.
[2026-05-29T14:36:59.900Z] All sub-agents finished in 12.7s.
[2026-05-29T14:36:59.902Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:37:15.347Z] All sub-agents finished in 15.4s.
[2026-05-29T14:37:15.352Z] quality.check failed (score=0.62, issues: Low citation coverage – only a single placeholder citation is provided, leaving most claims unsupported by evidence.) — re-synthesising with the large model
[2026-05-29T14:37:15.356Z] Thinking with openai/gpt-oss-120b:free (~3 495 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:37:50.616Z] quality rescue improved score: 0.62 → 0.93; using the rescued draft
[2026-05-29T14:37:50.616Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:37:50.863Z] Vault commit: done.
```
</details>
