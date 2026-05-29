---
title: "Research: As a QA Engineer, run exploratory testing sessions with a charter and findings log"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a QA Engineer, run exploratory testing sessions with a charter and findings log

**Exploratory‑Testing Session Blueprint (QA Engineer)**  

Below is a ready‑to‑use template that follows the *Default research plan* stored in the NeuroWorks vault and incorporates the core concepts of exploratory testing from the QA literature.

---

## 1. Session Charter  *(what you are testing & why)*  

| Item | Description |
|------|-------------|
| **Mission** | Verify that **[Feature / User Story]** works as intended and uncover any hidden defects or usability gaps. |
| **Scope** | • Primary workflow(s) of the feature  <br>• Adjacent flows that may be impacted (e.g., navigation, error handling)  <br>• Supported browsers / devices listed in the test matrix. |
| **Goals** | 1. Confirm functional correctness against acceptance criteria.<br>2. Identify usability or performance concerns not covered by scripted tests.<br>3. Surface regression risks for downstream components. |
| **Timebox** | **45 min** (adjustable per sprint velocity). |
| **Resources** | • Test environment: `staging‑app.neuroworks.local`  <br>• Test data: pre‑populated user accounts (admin, regular, guest).  <br>• Tools: Chrome DevTools, NeuroWorks “Findings Log” markdown file, screen‑capture utility. |
| **Assumptions / Risks** | • Backend services are stable (no planned deployments during the session).<br>• Test data reflects typical edge‑case values (null, long strings, special characters). |
| **Success Criteria** | No critical defects (P0‑P1) found; all high‑priority acceptance criteria exercised at least once. |

*Source: Default research plan for this task in the vault*【_neuroworks/jobs/2026-05-29-run-exploratory-testing-sessions-with-a-charter-and-findings-287ec258.md】.

---

## 2. Findings Log  *(recording observations in‑session)*  

Create a markdown file (e.g., `exploratory‑findings‑<date>.md`) with the following structure. Each entry should be added **immediately** after the observation to keep context fresh.

```markdown
# Exploratory Findings – <Feature> – <YYYY‑MM‑DD>

## Session Overview
- **Tester:** <Your Name>
- **Start / End:** HH:MM – HH:MM
- **Environment:** <URL / build #>
- **Charter Ref:** <link to charter section>

---

## Findings

| ID | Area | Observation | Expected | Severity* | Steps to Reproduce | Evidence (screenshot / video) |
|----|------|-------------|----------|-----------|--------------------|--------------------------------|
| F001 | Login flow | Error message “Invalid credentials” appears even with correct password. | Successful login | P1 (High) | 1. Open login page → 2. Enter valid user/pass → 3. Click **Sign In** | ![screenshot](./imgs/F001.png) |
| F002 | UI | “Save” button is truncated on mobile view (width < 360 px). | Full button label visible | P2 (Medium) | 1. Resize viewport to 350 px → 2. Navigate to Settings → 3. Observe button | |
| F003 | Performance | Page load > 6 s on Chrome (average 5.8 s on Firefox). | < 3 s load time per SLA | P3 (Low) | 1. Open Dashboard → 2. Measure network timing via DevTools | |
| … | … | … | … | … | … | … |

*Severity scale: P0 = Blocker, P1 = High, P2 = Medium, P3 = Low.

---

## Quick Reflections
- **What worked well:** …  
- **What hindered exploration:** …  
- **Ideas for next session:** …  

---

## Action Items
- **Assign:** <Developer/Team> – Fix F001 (deadline: <date>)  
- **Retest:** F002 after UI fix (owner: <QA Lead>)  
- **Monitor:** Performance trend on next build (owner: <Ops>)  
```

### How to use the log
1. **Copy the template** at the start of each session.  
2. Fill each row **as soon as a defect or observation is spotted** – this keeps the description accurate.  
3. Attach screenshots or short video clips directly in the markdown (NeuroWorks vault renders them).  
4. At session end, **review the log** with the team, triage severity, and create tickets or assign owners.  

*The structure mirrors common exploratory‑testing best practices described in QA guides*【1】,【2】 and aligns with NeuroWorks’ emphasis on a “findings log” for knowledge capture.

---

### TL;DR Checklist
- ☐ Define a **clear charter** (mission, scope, goals, timebox).  
- ☐ Open a **Findings Log** markdown file using the table template.  
- ☐ Log each issue with ID, area, observation, expected behavior, severity, steps, and evidence.  
- ☐ End with reflections, action items, and hand‑off to developers.  

Following this pattern will give you a repeatable, auditable exploratory‑testing process that fits neatly into the NeuroWorks workflow.

## Web sources
1. [What is Quality Assurance (QA) in Software Testing?](https://www.guru99.com/all-about-quality-assurance.html) _(relevance 6, http)_
2. [What is Quality Assurance (QA) Testing? Definitive Guide in 2025](https://cloudqa.io/what-is-qa-testing-the-2025-guide-to-quality-assurance-in-software/) _(relevance 6, http)_
3. [Quality assurance - Wikipedia](https://en.wikipedia.org/wiki/Quality_assurance) _(relevance 2, http)_

## Vault hits at time of research
- [[0-Inbox/202605291426-research-as-a-qa-engineer-run-exploratory-testing-sessions-with-a-cha.md]] (line 2)
- [[_neuroworks/jobs/2026-05-29-run-exploratory-testing-sessions-with-a-charter-and-findings-287ec258.md]] (line 24)
