---
type: job
title: Cut scope ruthlessly — every feature has to earn its place against the next-b…
slug: cut-scope-ruthlessly-every-feature-has-to-earn-its-place-aga-a6c74fbf
created: 2026-05-29T22:54:14.726Z
jobId: a6c74fbf-1dee-4fa3-bb42-3fcb581ec3d5
status: succeeded
template: custom-product-manager-cut-scope-ruthlessly-every-feature-has-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:24:32.535Z
finishedAt: 2026-05-29T22:54:14.725Z
---

# Cut scope ruthlessly — every feature has to earn its place against the next-b…

- **Status:** succeeded
- **Template:** custom-product-manager-cut-scope-ruthlessly-every-feature-has-t
- **Started:** 2026-05-29T21:24:32.535Z
- **Finished:** 2026-05-29T22:54:14.725Z
- **Title:** Cut scope ruthlessly — every feature has to earn its place against the next-b…

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Cut scope ruthlessly — every feature has to earn its place against the next-b…\nDescription: Persona-derived starter task for \"Priya\"."
}
```

## Plan
Research scope‑cutting methods and capture findings.

### Steps
1. ✓ Researching "best practices for ruthlessly cutting product scope, feature prioritization fram…" — vault + web — `research.deep` (18.8s)
2. ✗ Quality-checking the draft — `quality.check` (5253.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
    error: This operation was aborted
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (40.0s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
**Ruthless Scope‑Cutting Playbook for Priya**

1. **Define the Minimum Viable Value (MVV)** – Identify the single feature or set of features that delivers the core promise to users and meets the highest business metric (e.g., revenue, activation). Anything that does not directly support the MVV is a candidate for removal.

2. **Apply the “Next‑Best‑Thing” Filter** – For each feature, ask:
   * What is the next best alternative that already exists (in‑product, competitor, or a simple workaround)?
   * Does the feature add unique value beyond that alternative?
   * If the answer is no, cut it.

3. **Use a Weighted Scoring Matrix** – Score each feature on:
   * **Impact** (user value, revenue lift)
   * **Effort** (engineering hours, cost)
   * **Risk** (technical uncertainty, market volatility)
   * **Alignment** (with product vision)
   Assign weights that reflect current priorities (e.g., Impact = 40%, Effort = 30%, Risk = 20%, Alignment = 10%). Features with a negative or low net score are eliminated.

4. **Implement a “One‑Pass” Cut Rule** – Once a feature is rejected, it cannot be reconsidered unless a new, higher‑impact opportunity emerges. This prevents re‑opening the scope.

5. **Iterate in Short Sprints** – Re‑evaluate the remaining feature set every two weeks. If a feature’s score improves due to new data or reduced effort, it can stay; otherwise, cut it.

6. **Communicate the Cut Rationale** – Document each decision with the scoring sheet and the next‑best‑thing comparison. Share this with stakeholders to maintain transparency and buy‑in.

**Quick Decision Checklist**
- Does it solve a high‑impact problem? → Yes
- Is there a simpler, existing solution? → No
- Does it require more effort than its impact justifies? → No
- Does it align with the MVV? → Yes

If all answers are “Yes,” keep it; otherwise, cut it.

*Result: A lean, high‑impact roadmap that survives rigorous scrutiny and delivers maximum value with minimal waste.*

<details><summary>Log</summary>

```
[2026-05-29T21:24:32.545Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:24:32.548Z] Thinking about the best approach…
[2026-05-29T21:24:32.596Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:24:46.628Z] Plan ready: 1 step — Research scope‑cutting methods and capture findings..
[2026-05-29T21:24:46.634Z] Step 1 of 1: Researching "best practices for ruthlessly cutting product scope, feature prioritization fram…" — vault + web
[2026-05-29T21:25:05.431Z] All sub-agents finished in 18.8s.
[2026-05-29T21:25:05.439Z] Thinking with openai/gpt-oss-20b:free (~2 510 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:25:20.165Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:25:20.171Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:25:20.171Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:25:20.171Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T22:52:53.259Z]   ✗ Quality-checking the draft: This operation was aborted
[2026-05-29T22:52:53.259Z] Wave 1 finished in 5253.1s — 1 of 2 sub-agents succeeded (1 failed; partial results kept).
[2026-05-29T22:52:53.259Z] All sub-agents finished in 5253.1s.
[2026-05-29T22:53:08.179Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T22:53:15.731Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T22:53:19.369Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T22:53:48.180Z] All sub-agents finished in 40.0s.
[2026-05-29T22:53:48.180Z] peer review verdict=needs-work (Does not provide actionable scope‑cutting guidance; instead requests more information; Lacks concrete steps or framework) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T22:53:48.183Z] Thinking with openai/gpt-oss-120b:free (~3 528 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T22:54:14.433Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T22:54:14.433Z] Wrote to your second brain — committing the changes.
[2026-05-29T22:54:14.725Z] Vault commit: done.
```
</details>
