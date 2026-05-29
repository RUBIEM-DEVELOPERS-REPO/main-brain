---
title: "Research: As a QA Engineer, run exploratory testing sessions with a charter and findings log"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a QA Engineer, run exploratory testing sessions with a charter and findings log

**Exploratory‑Testing Session for a QA Engineer**  

Below is a concise, evidence‑based template you can copy‑paste into a notebook, Confluence page, or the NeuroWorks “Findings Log” (the platform’s built‑in note‑taking area). It follows the standard charter‑driven approach that QA teams use to keep sessions focused while still allowing the freedom that makes exploratory testing valuable.

---

## 1. Session Charter  

| Item | Description |
|------|-------------|
| **Mission / Goal** | What you want to learn (e.g., “Validate that the new checkout flow handles edge‑case payment inputs without crashes”). |
| **Scope** | Specific features, pages, or APIs to explore (e.g., “Shopping‑cart page, payment‑method selector, and order‑confirmation API”). |
| **Test Ideas / Heuristics** | Guiding techniques – *boundary analysis, error‑guessing, state‑transition, data‑driven, use‑case walkthroughs* (common exploratory heuristics described in QA literature). |
| **Timebox** | Fixed duration (e.g., 90 min). |
| **Resources** | Test environment, test data, tools (e.g., browser dev tools, API client, NeuroWorks “clawbot” for parallel task dispatch). |
| **Exit Criteria** | When the timebox expires **or** when you have covered all high‑risk ideas, or when a blocker is hit. |

> A charter gives the session a clear purpose while still leaving room for discovery, which is the core of exploratory testing [1](https://www.guru99.com/all-about-quality-assurance.html).

---

## 2. Findings Log (Live Capture)

| Timestamp | Test Step / Action | Observation / Result | Severity / Impact | Evidence (screenshots, logs, URLs) | Follow‑up |
|-----------|-------------------|----------------------|-------------------|-----------------------------------|----------|
| 00:12 | Enter “‑999” as coupon code | UI shows “Invalid coupon” (expected) | – | Screenshot #1 | – |
| 00:27 | Submit payment with expired card | Server returns 500 error, UI freezes | **Critical** – checkout blocked | API response log | Raise defect #1234; add retry handling |
| 00:45 | Rapidly add/remove items (10 × ) | Cart UI lags, occasional duplicate line items | **Major** – data integrity risk | Video clip #2 | Investigate debouncing logic |
| … | … | … | … | … | … |

> Keeping a structured log during the session lets you turn observations into actionable defects later and provides traceability for audit purposes [2](https://cloudqa.io/what-is-qa-testing-the-2025-guide-to-quality-assurance-in-software/).

**Tips for a good log**

* **One line per observation** – makes later triage easy.  
* **Include severity** – use your team’s scale (e.g., Blocker, Critical, Major, Minor).  
* **Attach evidence immediately** – screenshots, console logs, network traces.  
* **Mark “Follow‑up”** with the next action (create ticket, retest, discuss with dev).  

---

## 3. Post‑Session Wrap‑Up  

1. **Review the charter** – Did you meet the goal? Note any gaps.  
2. **Prioritise findings** – Rank by severity & business impact.  
3. **Create tickets** – Export the log rows into your issue tracker (Jira, GitHub, etc.).  
4. **Retrospective note** – What worked well, what needs a different heuristic next time?  

---

### Quick‑Start Checklist (Copy‑Paste)

```markdown
## Exploratory Test Session – Charter
- **Mission:** 
- **Scope:** 
- **Heuristics:** 
- **Timebox:** 
- **Resources:** 
- **Exit Criteria:** 

## Findings Log
| Time | Action | Observation | Severity | Evidence | Follow‑up |
|------|--------|-------------|----------|----------|----------|
|      |        |             |          |          |          |
```

Use this template for every exploratory session. It aligns with industry‑standard QA practice and gives you a repeatable, auditable process for discovering defects quickly.

## Web sources
1. [What is Quality Assurance (QA) in Software Testing?](https://www.guru99.com/all-about-quality-assurance.html) _(relevance 6, http)_
2. [What is Quality Assurance (QA) Testing? Definitive Guide in 2025](https://cloudqa.io/what-is-qa-testing-the-2025-guide-to-quality-assurance-in-software/) _(relevance 6, http)_
3. [Quality assurance - Wikipedia](https://en.wikipedia.org/wiki/Quality_assurance) _(relevance 2, http)_

## Vault hits at time of research
_(none)_
