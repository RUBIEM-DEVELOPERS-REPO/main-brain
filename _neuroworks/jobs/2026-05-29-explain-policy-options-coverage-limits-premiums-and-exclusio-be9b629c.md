---
type: job
title: Explain policy options, coverage limits, premiums, and exclusions.
slug: explain-policy-options-coverage-limits-premiums-and-exclusio-be9b629c
created: 2026-05-29T15:42:40.933Z
jobId: be9b629c-2341-4f28-8ab0-a8dcb7bc3a3f
status: succeeded
template: custom-insurance-sales-agent-explain-policy-options-coverage-limits-p
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:38:51.974Z
finishedAt: 2026-05-29T15:42:40.933Z
---

# Explain policy options, coverage limits, premiums, and exclusions.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-explain-policy-options-coverage-limits-p
- **Started:** 2026-05-29T15:38:51.974Z
- **Finished:** 2026-05-29T15:42:40.933Z
- **Title:** Explain policy options, coverage limits, premiums, and exclusions.

## Plan
Default research plan for: As a Insurance Sales Agent, explain policy options, coverage limits, premiums, and exclusions

### Steps
1. ✓ Researching "As a Insurance Sales Agent, explain policy options, coverage limits, premiums, a…" — vault + web — `research.deep` (53.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (94.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (26.8s)
    > auto-injected: quality score=0.72 (pass=true) — peer review for a second opinion

## Answer
As an insurance sales agent, I explain the key elements a client needs to know:

1. **Policy options** – The main lines we offer (auto, home, health, etc.) and how they can be combined. I show the client which coverages are available for each line.

2. **Coverage limits** – The maximum amount the insurer will pay for each type of loss. I discuss typical limits (e.g., liability, collision, home rebuild cost) and how the client can adjust them.

3. **Premiums** – How the price is calculated: risk factors (age, driving record, property age), coverage choices, optional riders, and available discounts (bundles, multi‑policy, online purchase). I also explain payment options (monthly, quarterly, annual).

4. **Exclusions** – What is not covered, such as intentional damage, mechanical breakdowns without a rider, acts of war, pre‑existing medical conditions, and uninsured drivers. I highlight these to set realistic expectations.

**Presentation Tips**
- Start by asking about the client’s specific needs.
- Use a side‑by‑side comparison tool to show how changes affect premiums.
- Emphasize the most relevant coverages and limits.
- Explain cost drivers and available discounts.
- Read out key exclusions for each line.
- Offer bundled quotes when appropriate.

This concise framework ensures the client understands their options, limits, costs, and exclusions before making a decision.

<details><summary>Log</summary>

```
[2026-05-29T15:38:51.981Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:38:52.805Z] Thinking about the best approach…
[2026-05-29T15:38:52.840Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:38:54.189Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T15:38:54.190Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, explain policy options, coverage limits, premiums, and exclusions.
[2026-05-29T15:38:54.522Z] Step 1 of 1: Researching "As a Insurance Sales Agent, explain policy options, coverage limits, premiums, a…" — vault + web
[2026-05-29T15:39:47.838Z] All sub-agents finished in 53.3s.
[2026-05-29T15:39:47.840Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:39:47.859Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:39:47.860Z] Step 3 of 3: Security-scanning the note
[2026-05-29T15:39:47.861Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T15:41:22.574Z] Wave 1 finished in 94.7s.
[2026-05-29T15:41:22.574Z] All sub-agents finished in 94.7s.
[2026-05-29T15:41:22.578Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T15:41:23.934Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T15:41:26.462Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T15:41:49.367Z] All sub-agents finished in 26.8s.
[2026-05-29T15:41:49.367Z] peer review verdict=needs-work (Potential hallucination of specific COSMOTE policy details and source citation not verified; Lacks explicit source links) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T15:41:49.374Z] Thinking with openai/gpt-oss-120b:free (~4 158 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:42:40.628Z] retry verdict=needs-work and quality not improved (0.67 ≤ 0.72); keeping the rescued/original draft
[2026-05-29T15:42:40.628Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:42:40.933Z] Vault commit: done.
```
</details>
