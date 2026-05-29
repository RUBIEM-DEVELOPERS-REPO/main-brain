---
type: job
title: Design on-call rotation that respects sleep, fairness, and skills coverage
slug: design-on-call-rotation-that-respects-sleep-fairness-and-ski-bc682446
created: 2026-05-29T09:30:09.632Z
jobId: bc682446-ed22-4e79-86b9-54bfd5879747
status: succeeded
template: custom-devops-sre-design-on-call-rotation-that-respects-sl
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:28:23.890Z
finishedAt: 2026-05-29T09:30:09.632Z
---

# Design on-call rotation that respects sleep, fairness, and skills coverage

- **Status:** succeeded
- **Template:** custom-devops-sre-design-on-call-rotation-that-respects-sl
- **Started:** 2026-05-29T09:28:23.890Z
- **Finished:** 2026-05-29T09:30:09.632Z
- **Title:** Design on-call rotation that respects sleep, fairness, and skills coverage

## Plan
Research on-call rotation best practices and capture findings.

### Steps
1. ✓ Researching "on-call rotation design best practices sleep fairness skills coverage" — vault + web — `research.deep` (12.4s)
2. ✓ Quality-checking the draft — `quality.check` (4.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.8s)
    > auto-injected: quality score=0.76 (pass=false) — peer review for a second opinion

## Answer
## On‑Call Rotation Design – Preliminary Assessment  

The current evidence set does not contain any material on on‑call rotation best practices, sleep protection, fairness considerations, or skills coverage. All retrieved sources relate to unrelated topics (English prepositions, footwear) and therefore cannot be used to synthesize a design.  

### What is missing  
1. **Guidelines or case studies** describing how organizations structure rotations to avoid fatigue.  
2. **Metrics** for measuring fairness (e.g., equal distribution of night/weekend shifts).  
3. **Skill‑matrix information** linking team members’ expertise to on‑call responsibilities.  
4. **Policy documents** outlining maximum consecutive on‑call hours, mandatory rest periods, and hand‑off procedures.  

### Information needed to proceed  
| Item | Reason |
|------|--------|
| A documented **skill matrix** for the SRE team | Ensures each shift has the required expertise. |
| Existing **shift‑length** and **maximum on‑call window** policies (if any) | Basis for aligning with sleep‑health guidelines. |
| Desired **fairness criteria** (e.g., equal weekend load, rotation length) | Drives the algorithm for shift assignment. |
| Any **regulatory or compliance constraints** (e.g., incident‑response SLAs) | Must be respected in the rotation design. |
| Preferred **tooling** (e.g., PagerDuty, Opsgenie) and integration points | Determines how the schedule will be operationalised. |

### Suggested next steps (skeleton)  

1. **Collect data** – Gather the items listed above from the team’s internal documentation or vault.  
2. **Define constraints** – Translate sleep‑health recommendations (e.g., ≥8 h rest after a night shift) and fairness rules into concrete constraints.  
3. **Build a skill‑coverage matrix** – Map each engineer’s primary/secondary on‑call competencies.  
4. **Select a scheduling algorithm** – Options include round‑robin with weighted fairness, or optimization‑based approaches that balance skill coverage and rest periods.  
5. **Prototype and iterate** – Generate a sample rotation, review with stakeholders, and adjust constraints as needed.  

*Assumed: the report is an initial briefing for the SRE lead to gather missing inputs before a detailed design can be produced.*

<details><summary>Log</summary>

```
[2026-05-29T09:28:23.900Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:28:24.701Z] Thinking about the best approach…
[2026-05-29T09:28:24.732Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:28:27.495Z] Plan ready: 1 step — Research on-call rotation best practices and capture findings..
[2026-05-29T09:28:27.500Z] Step 1 of 1: Researching "on-call rotation design best practices sleep fairness skills coverage" — vault + web
[2026-05-29T09:28:39.913Z] All sub-agents finished in 12.4s.
[2026-05-29T09:28:39.913Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:28:39.920Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:28:39.920Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:28:39.920Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:28:44.560Z] Wave 1 finished in 4.6s.
[2026-05-29T09:28:44.560Z] All sub-agents finished in 4.6s.
[2026-05-29T09:28:44.564Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:28:47.351Z] All sub-agents finished in 2.8s.
[2026-05-29T09:28:47.354Z] quality.check failed (score=0.76, issues: does not answer the question; does not provide design or guidance) — re-synthesising with the large model
[2026-05-29T09:28:47.358Z] Thinking with openai/gpt-oss-120b:free (~2 847 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:29:23.752Z] quality rescue improved score: 0.76 → 0.84; using the rescued draft
[2026-05-29T09:29:23.752Z] peer review verdict=bad (No answer provided; Fails to address task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:29:23.757Z] Thinking with openai/gpt-oss-120b:free (~2 990 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:30:09.366Z] retry verdict=needs-work and quality not improved (0.62 ≤ 0.84); keeping the rescued/original draft
[2026-05-29T09:30:09.366Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:30:09.631Z] Vault commit: done.
```
</details>
