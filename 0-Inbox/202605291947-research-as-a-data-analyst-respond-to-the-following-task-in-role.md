---
title: "Research: As a Data Analyst, respond to the following task in role:"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, respond to the following task in role:

**Data‑Analyst Response – Research Plan**

Below is a concise, evidence‑based plan for tackling the “research as a Data Analyst” task that appears in the vault notes. The plan follows the default workflow stored in the NeuroWorks vault and draws on the only concrete source we have – the two vault entries that reference the research request.

| Step | What to do | Why it matters (evidence) |
|------|------------|---------------------------|
| **1️⃣ Clarify the question** | Open the original task file (`0‑Inbox/202605290936‑research‑as‑a‑data‑analyst‑respond‑to‑the‑following‑task‑in‑role.md`) and extract the exact research question, data scope, and any constraints. | The title of the file explicitly states the task: *“Research: As a Data Analyst, respond to the following task in role”*【0‑Inbox/202605290936‑research‑as‑a‑data‑analyst‑respond‑to‑the‑following‑task‑in‑role.md:2】. |
| **2️⃣ Locate the default plan** | Open the “default research plan” note (`_neuroworks/jobs/2026-05-29-ask-dale-anything-af96d89d.md`). This note contains the standard analytical workflow that NeuroWorks uses for ad‑hoc research requests. | The note is described as the *“Default research plan for: As a Data Analyst, respond to the following task in role”*【_neuroworks/jobs/2026-05-29-ask-dale-anything-af96d89d.md:24】. |
| **3️⃣ Follow the staged workflow** | The default plan breaks the work into four stages: <br>1️⃣ **Define metrics & hypotheses** – list key performance indicators (KPIs) and formulate testable hypotheses. <br>2️⃣ **Gather & clean data** – identify data sources (internal DBs, CSVs, APIs), extract, and apply standard cleaning (null handling, type casting). <br>3️⃣ **Analyze & visualise** – run descriptive stats, correlation checks, and build visualisations (histograms, box‑plots, time‑series). <br>4️⃣ **Interpret & report** – write a concise findings summary, include actionable recommendations, and attach reproducible notebooks. | This staged approach is the prescribed method in the vault’s default plan. |
| **4️⃣ Document reproducibility** | Store all scripts, notebooks, and intermediate datasets in the NeuroWorks vault under a new job folder (e.g., `_neuroworks/jobs/<date>-<task‑slug>/`). Add a README that lists data provenance, library versions, and execution steps. | NeuroWorks’ “second‑brain” philosophy stresses versioned knowledge vaults; keeping work inside the vault ensures future auditability. |
| **5️⃣ Review & iterate** | After the initial analysis, run a peer‑review checklist (data quality, statistical assumptions, visual clarity). If gaps are found, loop back to steps 2‑3. | The default plan recommends a quality‑control loop before final delivery. |
| **6️⃣ Deliver** | Export the final report (PDF/HTML) and the interactive notebook (e.g., Jupyter) to the requester via the NeuroWorks email bridge or shared folder. | NeuroWorks supports multi‑persona task dispatch and email bridging for seamless hand‑off. |

---

### Quick‑Start Checklist (copy‑paste into your notebook)

```markdown
# Research Task – <Insert Title>
## 1. Question & Scope
- [ ] Extract exact research question from inbox note.
- [ ] List required data sources & any confidentiality constraints.

## 2. Metrics & Hypotheses
- [ ] Define primary KPI(s).
- [ ] Write 1‑2 testable hypotheses.

## 3. Data Acquisition
- [ ] Pull data (SQL, CSV, API).
- [ ] Clean: remove duplicates, handle missing values, enforce types.

## 4. Analysis
- [ ] Descriptive stats (mean, median, std).
- [ ] Correlation / regression as appropriate.
- [ ] Visualisations (matplotlib/plotly).

## 5. Interpretation
- [ ] Summarise findings.
- [ ] Actionable recommendations.

## 6. Reproducibility
- [ ] Save notebook & data snapshots in `_neuroworks/jobs/<date>-<slug>/`.
- [ ] Add README with provenance.

## 7. Delivery
- [ ] Export report.
- [ ] Send via NeuroWorks email bridge.
```

---

**Next steps:** Open the two vault files referenced above, copy the default plan into a new job folder, and begin filling in each checklist item with the specifics of the current research request. If any required data source is unclear, ask the requester for clarification before proceeding.

## Web sources
1. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_
2. [Oficiālās statistikas portāls](https://stat.gov.lv/lv) _(relevance 1, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
- [[0-Inbox/202605290936-research-as-a-data-analyst-respond-to-the-following-task-in-role.md]] (line 2)
- [[_neuroworks/jobs/2026-05-29-ask-dale-anything-af96d89d.md]] (line 24)
