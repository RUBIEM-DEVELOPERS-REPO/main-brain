---
type: job
title: Delegated: (You are operating as Clawbot, the AI agent operator. Bias t
slug: delegated-you-are-operating-as-clawbot-the-ai-agent-operator-ddefb301
created: 2026-05-29T08:55:38.262Z
jobId: ddefb301-bb92-4b2f-af40-bf8a40fac1f4
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:54:35.636Z
finishedAt: 2026-05-29T08:55:38.261Z
---

# Delegated: (You are operating as Clawbot, the AI agent operator. Bias t

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-29T08:54:35.636Z
- **Finished:** 2026-05-29T08:55:38.261Z
- **Title:** Delegated: (You are operating as Clawbot, the AI agent operator. Bias t

## Inputs
```json
{
  "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a status report on NeuroWorks.",
  "save_as_template": false,
  "delegated": true
}
```

## Plan
Perform deep web research on NeuroWorks and capture findings.

### Steps
1. ✓ Researching "NeuroWorks status report" — vault + web — `research.deep` (55.0s)
2. ✓ Quality-checking the draft — `quality.check` (3.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**NeuroWorks – Current Status (as of 29 May 2026)**  

| Item | Details |
|------|---------|
| **Product** | NeuroWorks (also known as *Natus NeuroWorks EEG*) – EEG acquisition, display, archiving, review and analysis software that works with Xltek amplifiers. It stores patient demographics and recordings in a Microsoft SQL Server database and generates reports via Microsoft Word. |
| **Vendor** | Natus Medical Inc. (no cage code) |
| **Latest VA‑recorded release** | **10.0.x** – released 20 Jun 2023. Earlier major releases: 8.0 (2013), 8.1 (2015), 8.4 (2016), 9.0 (2018), 9.1 (2019), 9.2 (2020), 9.3 (2022). No vendor‑declared End‑of‑Life (EOL) or desupport dates are listed. |
| **VA Decision / Policy** | The VA Technical Reference Model (TRM) decision (12 Oct 2025) requires that NeuroWorks be used in compliance with VA Handbooks 6102 & 6500, Directives 6004, 6513, 6517 and NIST/FIPS standards. Users must verify compliance with their ISSO, CIO or OI&T representative before deployment. |
| **Security / Accessibility** | No Section 508 assessment has been performed; implementers are responsible for ensuring accessibility compliance. |
| **Support & Resources** | Natus provides a Service & Support Center, remote support, technical service programs and training (Natus Academies). The product page on Natus.com lists the full NeuroWorks suite and related accessories. |
| **Operational Summary** | • Fully functional EEG software for clinical monitoring (routine, ICU, ambulatory, newborn, etc.). <br>• Current supported version is 10.0.x (2023). <br>• No known EOL; VA policy mandates strict adherence to federal security and privacy rules. <br>• Accessibility compliance must be verified by the implementer. |

**Key Take‑aways**

- NeuroWorks remains an actively supported EEG platform; the most recent VA‑recorded version is 10.0.x (2023).  
- Deployment in VA environments must follow the VA TRM decision (12/30/2025) and align with all relevant VA handbooks, directives and NIST/FIPS standards.  
- No formal Section 508 certification exists, so accessibility checks are required before use.  

*Sources: VA TRM entry for NeuroWorks (description, vendor, release table, decision matrix)【1】; Natus product page confirming vendor and software capabilities【2】.*

<details><summary>Log</summary>

```
[2026-05-29T08:54:35.637Z] hired employee "Clawbot" (AI agent operator) for this task — scoped to this run only
[2026-05-29T08:54:36.488Z] Thinking about the best approach…
[2026-05-29T08:54:36.520Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T08:54:39.456Z] Plan ready: 1 step — Perform deep web research on NeuroWorks and capture findings..
[2026-05-29T08:54:39.467Z] Step 1 of 1: Researching "NeuroWorks status report" — vault + web
[2026-05-29T08:55:34.440Z] All sub-agents finished in 55.0s.
[2026-05-29T08:55:34.442Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T08:55:34.451Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T08:55:34.452Z] Step 3 of 3: Security-scanning the note
[2026-05-29T08:55:34.452Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T08:55:38.261Z] Wave 1 finished in 3.8s.
[2026-05-29T08:55:38.261Z] All sub-agents finished in 3.8s.
[2026-05-29T08:55:38.261Z] Quality check passed (86%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
