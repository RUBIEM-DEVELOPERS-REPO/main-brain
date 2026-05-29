---
type: job
title: Lead qualification summary
slug: lead-qualification-summary-cb42add7
created: 2026-05-29T23:42:40.188Z
jobId: cb42add7-9b51-4d02-a88b-b9f703015176
status: succeeded
template: custom-emp-lead-qualification
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:34:23.064Z
finishedAt: 2026-05-29T23:42:40.188Z
---

# Lead qualification summary

- **Status:** succeeded
- **Template:** custom-emp-lead-qualification
- **Started:** 2026-05-29T23:34:23.064Z
- **Finished:** 2026-05-29T23:42:40.188Z
- **Title:** Lead qualification summary

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Lead qualification summary\nDescription: Fit + intent + urgency, recommended next action."
}
```

## Plan
Research lead qualification scoring framework to produce summary.

### Steps
1. ✓ Researching "lead qualification scoring framework fit intent urgency signals" — vault + web — `research.deep` (22.4s)
2. ✓ Quality-checking the draft — `quality.check` (23.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.3s)
    > auto-injected: quality score=0.13 (pass=false) — peer review for a second opinion

## Answer
## Lead — <Name>, <Title>, <Company>

**Score:** Fit < H / M / L >, Intent < H / W / C >, Urgency < U / N / L / None >  
**Recommended next action:** <Discovery call / Nurture / Disqualify / Hand to partner>

### Fit (vs ICP)

- **Company size:** <employees / ARR> — <matches / does not match ICP>  
- **Industry:** <vertical> — <core / adjacent / outside our focus>  
- **Geography:** <country / region> — <supported / unsupported>  
- **Tech‑stack signals:** <e.g., “Uses Salesforce, Snowflake, Slack”> — <strength of fit>  
- **Verdict:** <one‑sentence summary of overall fit>

### Intent

- **Source:** <inbound form, event registration, cold‑outreach reply, etc.>  
- **Signals:** <demo request, pricing‑page visits, content download count, recent webinar attendance>  
- **Verdict:** <Hot / Warm / Cold + brief rationale>

### Urgency / Trigger Event

- <Specific trigger in the last 90 days – e.g., recent funding round, key hire, public commitment, regulatory deadline>  
- *or* “No visible trigger – place in nurture pipeline”

### Anticipated objections

- “<Likely objection>” — <brief response strategy>  
- “<Likely objection>” — <brief response strategy>

### Next step

**Recommended:** <Discovery call within X days / Send targeted content / Add to nurture campaign / Disqualify with note “<reason>”>

**Talk‑track opener:**  
> “<One‑sentence opener that references the prospect’s trigger event or expressed interest>”

**What to prep before the call:**  
- [ ] Review <specific product page, case study, or demo video>  
- [ ] Gather data on <prospect’s recent news, competitor usage, or relevant ROI metrics>  
- [ ] Prepare questions about <budget cycle, decision‑making process, or internal champion>

### What we don’t know

- Exact company size / ARR  
- Current technology stack details  
- Specific intent signals (e.g., demo request date)  
- Any recent trigger events or urgency drivers  
- Potential budget constraints or existing vendor relationships  

*Assumed: the lead is a typical B2B prospect for our solution; adjust scores once concrete data is provided.*

<details><summary>Log</summary>

```
[2026-05-29T23:34:23.086Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:34:23.108Z] Thinking about the best approach…
[2026-05-29T23:34:23.184Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:34:38.880Z] Plan ready: 1 step — Research lead qualification scoring framework to produce summary..
[2026-05-29T23:34:38.887Z] Step 1 of 1: Researching "lead qualification scoring framework fit intent urgency signals" — vault + web
[2026-05-29T23:35:01.276Z] All sub-agents finished in 22.4s.
[2026-05-29T23:35:01.297Z] Thinking with openai/gpt-oss-20b:free (~3 305 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:35:13.317Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:35:13.322Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:35:13.322Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:35:13.322Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:35:37.141Z] Wave 1 finished in 23.8s.
[2026-05-29T23:35:37.141Z] All sub-agents finished in 23.8s.
[2026-05-29T23:35:37.145Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:35:40.440Z] All sub-agents finished in 3.3s.
[2026-05-29T23:35:40.446Z] quality.check failed (score=0.13, issues: No lead qualification summary provided; Does not score FIT/INTENT/URGENCY) — re-synthesising with the large model
[2026-05-29T23:35:40.479Z] Thinking with openai/gpt-oss-120b:free (~3 907 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:36:31.711Z] quality rescue improved score: 0.13 → 0.9; using the rescued draft
[2026-05-29T23:36:31.711Z] peer review verdict=bad (Does not provide a lead qualification summary with scores; Fails to cite signals or recommend next action) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T23:36:31.724Z] Thinking with openai/gpt-oss-120b:free (~4 063 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:42:39.807Z] retry quality compare failed (fetch failed); keeping the rescued/original draft
[2026-05-29T23:42:39.807Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:42:40.187Z] Vault commit: done.
```
</details>
