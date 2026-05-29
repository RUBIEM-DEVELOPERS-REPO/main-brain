---
type: job
title: Read A/B tests honestly — name CIs, MDE, and p-hacking risks
slug: read-a-b-tests-honestly-name-cis-mde-and-p-hacking-risks-404ea8c5
created: 2026-05-29T21:24:44.612Z
jobId: 404ea8c5-f4dc-470e-97d9-b12e6daa2989
status: succeeded
template: custom-data-analyst-read-a-b-tests-honestly-name-cis-mde-and
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:11:55.815Z
finishedAt: 2026-05-29T21:24:44.612Z
---

# Read A/B tests honestly — name CIs, MDE, and p-hacking risks

- **Status:** succeeded
- **Template:** custom-data-analyst-read-a-b-tests-honestly-name-cis-mde-and
- **Started:** 2026-05-29T21:11:55.815Z
- **Finished:** 2026-05-29T21:24:44.612Z
- **Title:** Read A/B tests honestly — name CIs, MDE, and p-hacking risks

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Read A/B tests honestly — name CIs, MDE, and p-hacking risks\nDescription: Persona-derived starter task for \"Dale\"."
}
```

## Plan
Default research plan for: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.

Context: Role: Custom
Title: Read A/B tests honestly — name CIs, MDE, and p-hacking risks
Description: Persona-derived starter task for "Dale"

### Steps
1. ✓ Researching "As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.…" — vault + web — `research.deep` (110.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (621.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.3s)
    > auto-injected: quality score=0.56 (pass=false) — peer review for a second opinion

## Answer
## Reading A/B Tests Honestly  

**Confidence Intervals (CIs)** – A CI is a range that, under a chosen confidence level (typically 95 %), is expected to contain the true effect size (e.g., lift in conversion).  It conveys the precision of the estimate; a statistically significant result with a very wide CI may be practically meaningless, while a non‑significant result with a narrow CI that excludes a meaningful effect is also informative [1].

**Minimum Detectable Effect (MDE)** – The MDE is the smallest lift (absolute or relative) that the experiment was powered to detect with a pre‑specified statistical power (commonly 80 % or 90 %).  It is defined during test design based on business relevance, traffic volume, and variance.  If the observed lift is smaller than the MDE, the test likely lacked sufficient power to reliably detect it, even if the effect is real; reporting “no difference” without referencing the MDE can be misleading [1].

**p‑hacking Risks** – Practices that inflate the chance of finding a “significant” p‑value, including:  
- **Multiple looks** – checking results before the planned sample size is reached.  
- **Selective reporting** – presenting only metrics that look favorable.  
- **Post‑hoc subgroup digging** – splitting users after the fact to find significant differences.  
- **Changing the analysis plan** – altering hypotheses or statistical methods after seeing the data.  

These behaviors undermine the validity of the test and can lead to false‑positive conclusions [1].

<details><summary>Log</summary>

```
[2026-05-29T21:11:55.825Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:11:55.826Z] Thinking about the best approach…
[2026-05-29T21:11:55.883Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:11:57.153Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T21:11:57.153Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.

Context: Role: Custom
Title: Read A/B tests honestly — name CIs, MDE, and p-hacking risks
Description: Persona-derived starter task for "Dale".
[2026-05-29T21:11:57.161Z] Step 1 of 1: Researching "As a Data Analyst, read a/b tests honestly — name cis, mde, and p-hacking risks.…" — vault + web
[2026-05-29T21:13:47.302Z] All sub-agents finished in 110.1s.
[2026-05-29T21:13:47.311Z] Thinking with openai/gpt-oss-20b:free (~2 782 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:13:48.293Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T21:13:54.331Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-29T21:13:54.331Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:13:54.335Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:13:54.335Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:13:54.335Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T21:19:00.920Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — fetch failed
[2026-05-29T21:24:07.614Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — fetch failed
[2026-05-29T21:24:16.175Z] Wave 1 finished in 621.8s.
[2026-05-29T21:24:16.175Z] All sub-agents finished in 621.8s.
[2026-05-29T21:24:16.180Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T21:24:18.501Z] All sub-agents finished in 2.3s.
[2026-05-29T21:24:18.508Z] quality.check failed (score=0.56, issues: No inline citations provided for substantive claims; Citation coverage below required threshold) — re-synthesising with the large model
[2026-05-29T21:24:18.515Z] Thinking with openai/gpt-oss-120b:free (~3 382 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T21:24:44.267Z] quality rescue improved score: 0.56 → 0.86; using the rescued draft
[2026-05-29T21:24:44.267Z] Wrote to your second brain — committing the changes.
[2026-05-29T21:24:44.612Z] Vault commit: done.
```
</details>
