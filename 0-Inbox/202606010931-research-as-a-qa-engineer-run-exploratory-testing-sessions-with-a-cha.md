---
title: "Research: As a QA Engineer, run exploratory testing sessions with a charter and findings log"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a QA Engineer, run exploratory testing sessions with a charter and findings log

**Exploratory‑testing session – what you need as a QA Engineer**

| Phase | What to produce | Key items to include | Why it matters |
|-------|----------------|----------------------|----------------|
| **1. Charter** (the “mission”) | A short, test‑focused statement (1‑2 sentences) that defines the scope, goal and constraints of the session. | • **Feature / area** to explore (e.g., “User‑profile edit page”).  <br>• **Business or risk hypothesis** (e.g., “Changes to the avatar upload may break image‑size validation”).  <br>• **Timebox** (e.g., 45 min).  <br>• **Metrics / exit criteria** (e.g., “Find at least three distinct defect types or confirm no‑regression for image handling”). | Gives the tester a clear purpose while still leaving room for creativity. |
| **2. Session notes** (live capture) | A running log while you test. Use a simple table or a tool (e.g., a markdown file, a spreadsheet, or NeuroWorks’ Findings Log if you have one set up). | • **Time stamp** (start, each action, end).  <br>• **Test idea / action** (what you did).  <br>• **Observed behavior** (actual result).  <br>• **Pass/Fail or “interesting?”** flag.  <br>• **Screenshots / logs** (attach as needed). | Provides evidence for later analysis and helps you remember the path you took. |
| **3. Findings log (post‑session)** | A consolidated list of all observations that matter. | • **Defect ID** (if you file a bug).  <br>• **Severity / priority** (quick triage).  <br>• **Steps to reproduce** (concise).  <br>• **Impact** (user‑visible, data loss, security, etc.).  <br>• **Link to charter** (so you can see coverage). | Turns raw notes into actionable items for the team and creates traceability back to the charter. |
| **4. Debrief / retrospective** | A short meeting (5‑10 min) with the team or stakeholder. | • **What was covered vs. charter**.  <br>• **Key discoveries** (bugs, usability issues, gaps).  <br>• **What to explore next** (new charter ideas). | Closes the loop, shares knowledge, and feeds the next cycle of testing. |

### How to run a session (step‑by‑step)

1. **Create the charter** – write it in a markdown file or NeuroWorks note. Keep it focused and time‑boxed.  
2. **Set up a session‑note template** (e.g., a table with columns: *Time, Action, Observation, Pass/Fail, Notes*).  
3. **Start the timer** and begin exploring, following any intuition, heuristics, or risk‑based ideas. Record every step in the template.  
4. **Mark “interesting” items** as you go; you can flesh them out later.  
5. **When time expires**, stop and copy the “interesting” rows into a **Findings Log**. Add severity, reproducibility steps, and any supporting artefacts.  
6. **File bugs** (if your workflow uses a tracker) and link them back to the charter/finding entry.  
7. **Debrief** – review the charter coverage, discuss any blockers, and decide on the next charter.

### Why this works

*Exploratory testing* blends **structured intent** (the charter) with **freedom to investigate** (session notes). The approach is endorsed by modern QA practice as a way to discover defects that scripted tests miss while still providing **traceability** and **repeatability** — the two pillars of quality assurance described in industry sources [1][2].

---

**References**

- “What is Quality Assurance (QA) Testing? Definitive Guide in 2025” – explains the role of QA in preventing defects and the need for systematic testing approaches [1].  
- Wikipedia – Quality assurance overview, emphasizing defect prevention and systematic measurement [2].  

*(Vault notes only list the research titles; no additional content was available, so the answer relies on the web sources above.)*

## Web sources
1. [What is Quality Assurance (QA) Testing? Definitive Guide in 2025](https://cloudqa.io/what-is-qa-testing-the-2025-guide-to-quality-assurance-in-software/) _(relevance 6, http)_
2. [Quality assurance - Wikipedia](https://en.wikipedia.org/wiki/Quality_assurance) _(relevance 2, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[QA | Tech Training, Courses &amp; Apprenticeships |](https://www.qa.com/)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
- [[0-Inbox/202605291426-research-as-a-qa-engineer-run-exploratory-testing-sessions-with-a-cha.md]] (line 2)
- [[0-Inbox/202605291933-research-as-a-qa-engineer-run-exploratory-testing-sessions-with-a-cha.md]] (line 2)
- [[0-Inbox/202605301807-research-as-a-qa-engineer-run-exploratory-testing-sessions-with-a-cha.md]] (line 2)
