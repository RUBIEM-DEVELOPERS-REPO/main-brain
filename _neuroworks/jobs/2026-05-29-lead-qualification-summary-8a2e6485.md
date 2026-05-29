---
type: job
title: Lead qualification summary
slug: lead-qualification-summary-8a2e6485
created: 2026-05-29T15:09:35.682Z
jobId: 8a2e6485-21a0-4e3c-a82c-e1e258820ecb
status: succeeded
template: custom-emp-lead-qualification
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:07:28.233Z
finishedAt: 2026-05-29T15:09:35.682Z
---

# Lead qualification summary

- **Status:** succeeded
- **Template:** custom-emp-lead-qualification
- **Started:** 2026-05-29T15:07:28.233Z
- **Finished:** 2026-05-29T15:09:35.682Z
- **Title:** Lead qualification summary

## Plan
Research lead qualification, generate summary, then quality‑check.

### Steps
1. ✓ Researching "lead qualification framework fit intent urgency scoring H/M/L and common objecti…" — vault + web — `research.deep` (15.3s)
2. ✓ Thinking about it — `ollama.generate` (22.5s) · model `openai/gpt-oss-20b:free`
3. ✓ Quality-checking the draft — `quality.check` (9.9s)
4. ✓ Quality-checking the draft — `quality.check` (8.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
5. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
6. ✓ Asking a peer to review the draft — `peer.review` (5.5s)
    > auto-injected: quality score=0.70 (pass=false) — peer review for a second opinion

## Answer
## Lead Qualification Summary – *[Lead Name / Company]*

**Score:** Fit **– ?**, Intent **– ?**, Urgency **– ?**  
**Recommended next action:** *[Discovery call / Nurture / Disqualify / Hand to partner]*  

### What we need to complete the qualification

1. **Fit signals** – company size (employees or ARR), industry vertical, geography, and any known tech‑stack components that indicate alignment with our Ideal Customer Profile.  
2. **Intent signals** – recent engagements such as content downloads, webinar attendance, demo requests, pricing‑page visits, or inbound inquiries captured in the CRM or marketing automation platform.  
3. **Urgency triggers** – any time‑bound events (funding round, executive hire, regulatory deadline, upcoming budget cycle) or explicit timeline statements from the prospect.  
4. **Anticipated objections** – known concerns from similar accounts (e.g., budget constraints, existing vendor lock‑in, integration complexity) that we should be prepared to address.  
5. **Preferred next step** – based on the above, decide whether a discovery call now, a nurture sequence, a partner hand‑off, or disqualification is appropriate.

### Skeleton you can fill in

```
## Lead — <Name>, <Title>, <Company>

**Score:** Fit <H/M/L>, Intent <H/W/C>, Urgency <U/N/L/None>
**Recommended next action:** <Discovery call / Nurture / Disqualify / Hand to partner>

## Fit (vs ICP)

- **Company size:** <employees / $ARR> — <matches / does not match ICP>
- **Industry:** <vertical> — <core / adjacent / outside scope>
- **Geography:** <country/region> — <supported / unsupported>
- **Tech stack signals:** <e.g., uses Salesforce, AWS, competitor X>
- **Verdict:** <one‑sentence overall fit assessment>

## Intent

- **Source:** <e.g., HubSpot download, webinar attendance, inbound form>
- **Signals:** <list of engagement actions>
- **Verdict:** <Hot / Warm / Cold + brief rationale>

## Urgency / trigger event

- <Specific recent event or “no visible trigger – nurture”>

## Anticipated objections

- “<Objection 1>” — <brief response strategy>
- “<Objection 2>” — <brief response strategy>

## Next step

**Recommended:** <Discovery call within X days / Send targeted content / Add to nurture campaign / Disqualify with note “…">

**Talk‑track opener:**  
> “<One‑sentence opener that references the prospect’s recent activity or trigger event>”

**What to prep before the call:**  
- [ ] <Relevant product demo or case study>  
- [ ] <Key questions to uncover budget, decision timeline, champion>  
- [ ] <Competitive positioning brief>
```

*Assumed: the lead details are not currently available in the vault or CRM logs, so the template requests the missing signals needed to produce a complete qualification.*

<details><summary>Log</summary>

```
[2026-05-29T15:07:28.239Z] Working as Clawbot — AI agent operator.
[2026-05-29T15:07:28.242Z] Thinking about the best approach…
[2026-05-29T15:07:28.269Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T15:07:35.861Z] Plan ready: 3 steps — Research lead qualification, generate summary, then quality‑check..
[2026-05-29T15:07:35.864Z] Running 2 sub-agents in parallel (0 I/O + 2 thinking).
[2026-05-29T15:07:35.864Z] Step 1 of 3: Researching "lead qualification framework fit intent urgency scoring H/M/L and common objecti…" — vault + web
[2026-05-29T15:07:35.865Z] Step 2 of 3: Thinking about it
[2026-05-29T15:07:37.453Z]   ⟳ Thinking about it: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T15:07:58.389Z] Wave 1 finished in 22.5s.
[2026-05-29T15:07:58.390Z] Step 3 of 3: Quality-checking the draft
[2026-05-29T15:07:59.541Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T15:08:08.305Z] All sub-agents finished in 32.4s.
[2026-05-29T15:08:08.314Z] Thinking with openai/gpt-oss-20b:free (~3 766 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T15:08:09.676Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T15:08:49.263Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-29T15:08:49.263Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T15:08:49.267Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T15:08:49.267Z] Step 5 of 5: Security-scanning the note
[2026-05-29T15:08:49.267Z] Step 4 of 5: Quality-checking the draft
[2026-05-29T15:08:58.054Z] Wave 1 finished in 8.8s.
[2026-05-29T15:08:58.054Z] All sub-agents finished in 8.8s.
[2026-05-29T15:08:58.059Z] Step 6 of 6: Asking a peer to review the draft
[2026-05-29T15:09:03.528Z] All sub-agents finished in 5.5s.
[2026-05-29T15:09:03.534Z] quality.check failed (score=0.7, issues: No content provided; Answer does not address the task) — re-synthesising with the large model
[2026-05-29T15:09:03.546Z] Thinking with openai/gpt-oss-120b:free (~4 383 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T15:09:35.409Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-29T15:09:35.409Z] Wrote to your second brain — committing the changes.
[2026-05-29T15:09:35.682Z] Vault commit: done.
```
</details>
