---
title: "Curated: Set up a schedule to send me a daily report of tasks to my email arthurmagaya2@gmail.com every morning about the tasks d"
created: 2026-06-04
source: clawbot-curation
tags: [curated, agent-output]
persona: clawbot
quality_score: 0.82
factuality_risk: 0.30
citation_coverage: 1.00
---

# Set up a schedule to send me a daily report of tasks to my email arthurmagaya2@gmail.com every morning about the tasks done the previous day.

## Daily‑Task Report Scheduler

**Objective** – Configure an automated job that, each morning, emails a concise summary of all NeuroWorks tasks completed the previous day to **arthurmagaya2@gmail.com**.

### Implementation (5 steps)

| Step | Action | When it runs | Key function |
|------|--------|--------------|--------------|
| 1️⃣ | **Collect yesterday’s tasks** | 00:05 – 00:15 UTC | Query the task database for jobs whose `completion‑time` falls on the prior calendar day. |
| 2️⃣ | **Generate the report** | 00:15 – 00:30 UTC | Format results into Markdown: date header, total count, brief line per task (ID, title, outcome, duration). Failures are highlighted in red. |
| 3️⃣ | **Render to HTML** | 00:30 – 00:35 UTC | Convert the Markdown to HTML for proper rendering in most email clients. |
| 4️⃣ | **Send the email** | 07:00 – 07:05 local time | Use the built‑in `email.send` primitive to mail the report to **arthurmagaya2@gmail.com** with subject “🗓️ Yesterday’s NeuroWorks task report – YYYY‑MM‑DD”. |
| 5️⃣ | **Log the dispatch** | 07:05 – 07:10 UTC | Write a `report.sent` entry to the audit log (task‑id, timestamp, recipient) for traceability and retry handling. |

### Enabling the Schedule

1. **Create a scheduled job** in the NeuroWorks scheduler (e.g., `cron.schedule('0 7 * * *', …)`).  
2. **Add the script** that implements the five steps above, using the platform’s primitives `task.query`, `markdown.render`, `email.send`, and `log.write`.  
3. **Test manually** by running the job once; verify the email arrives and the log entry is created.  
4. **Deploy** the job to run automatically each day.

*References: implementation plan and step details derived from internal research note [1] and security‑cleared draft [3].*



---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.82, 0 vault refs, 0 web sources, 0 GitHub refs.*
