---
type: job
title: Determine premiums, deductibles, and coverage conditions.
slug: determine-premiums-deductibles-and-coverage-conditions--10c113ce
created: 2026-05-29T20:13:14.714Z
jobId: 10c113ce-6922-4db4-aeca-bf89ec1416d1
status: succeeded
template: custom-insurance-underwriter-determine-premiums-deductibles-and-cover
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:10:55.410Z
finishedAt: 2026-05-29T20:13:14.714Z
---

# Determine premiums, deductibles, and coverage conditions.

- **Status:** succeeded
- **Template:** custom-insurance-underwriter-determine-premiums-deductibles-and-cover
- **Started:** 2026-05-29T20:10:55.410Z
- **Finished:** 2026-05-29T20:13:14.714Z
- **Title:** Determine premiums, deductibles, and coverage conditions.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Determine premiums, deductibles, and coverage conditions.\nDescription: Persona-derived starter task for \"Insurance Underwriter\"."
}
```

## Plan
Conduct deep research on underwriting practices to determine premiums, deductibles, and coverage conditions.

### Steps
1. ✓ Researching "insurance underwriting premiums deductibles coverage conditions best practices" — vault + web — `research.deep` (51.7s)
2. ✓ Quality-checking the draft — `quality.check` (18.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (23.7s)
    > auto-injected: quality score=0.67 (pass=true) — peer review for a second opinion

## Answer
## Insurance Underwriting – Premiums, Deductibles & Coverage Conditions

**Premiums**: Set using a risk‑based model that factors in loss history, demographics, location, credit score, and exposure size. Update rating tables regularly to reflect emerging trends.

**Deductibles**: Offer tiered options (low, medium, high) so policyholders can trade premium cost against out‑of‑pocket exposure. Use per‑claim deductibles for auto/property and individual/family deductibles for health. Communicate clearly to avoid surprises.

**Coverage Conditions**: Define clear limits (per‑loss, per‑year, lifetime) that match exposure and insurer capacity. List exclusions to remove high‑risk events and provide endorsements for customization while preserving underwriting integrity.

These practices align with industry best‑practice guidelines for underwriting premiums, deductibles, and coverage conditions.

<details><summary>Log</summary>

```
[2026-05-29T20:10:55.421Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:10:55.438Z] Thinking about the best approach…
[2026-05-29T20:10:55.499Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:11:00.158Z] Plan ready: 1 step — Conduct deep research on underwriting practices to determine premiums, deductibles, and coverage conditions..
[2026-05-29T20:11:00.173Z] Step 1 of 1: Researching "insurance underwriting premiums deductibles coverage conditions best practices" — vault + web
[2026-05-29T20:11:51.912Z] All sub-agents finished in 51.7s.
[2026-05-29T20:11:51.919Z] Thinking with openai/gpt-oss-20b:free (~2 803 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:12:14.979Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:12:14.985Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:12:14.985Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:12:14.985Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:12:33.498Z] Wave 1 finished in 18.5s.
[2026-05-29T20:12:33.498Z] All sub-agents finished in 18.5s.
[2026-05-29T20:12:33.512Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:12:57.209Z] All sub-agents finished in 23.7s.
[2026-05-29T20:12:57.209Z] peer review verdict=needs-work (Unverified citation [1] with no source; Excessive detail for a brief summary) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:12:57.218Z] Thinking with openai/gpt-oss-120b:free (~3 847 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:13:14.399Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T20:13:14.399Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:13:14.714Z] Vault commit: done.
```
</details>
