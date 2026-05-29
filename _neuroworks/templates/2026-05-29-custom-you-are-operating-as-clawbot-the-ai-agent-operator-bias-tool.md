---
type: template
title: Perform deep web research on NeuroWorks and capture findings. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-05-29T10:17:30.718Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Give me a status report on NeuroWorks.
---

# Perform deep web research on NeuroWorks and capture findings. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a status report on NeuroWorks."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a status report on NeuroWorks.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "NeuroWorks status report",
        "depth": 3,
        "capture": true
      },
      "label": "Researching \"NeuroWorks status report\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a status report on NeuroWorks.",
        "answer": "**NeuroWorks status report – current evidence**\n\n| Source | What it tells us about RUBIEM’s NeuroWorks platform |\n|--------|------------------------------------------------------|\n| Vault notes (e.g., `0‑Inbox/202605290926-research-neuroworks-status-report.md`) | Only the title *“Research: NeuroWorks status report”* is present; no substantive content or metrics are included. |\n| `_neuroworks/jobs/...‑ad‑hoc‑give‑me‑a‑status‑report‑on‑neuroworks‑…md` (both job files) | These entries record that a deep‑research job was run, but they do not contain the actual findings—just the fact that the job completed. |\n| `_neuroworks/jobs/2026‑05‑29‑conduct‑deep‑web‑research‑on‑neuroworks‑and‑capture‑findings‑…md` | Same situation: the job log shows the research was performed, but the extracted data are not shown in the note. |\n| `_neuroworks/templates/...‑custom‑you‑are‑operating‑as‑clawbot‑…md` | Contains only the query string “NeuroWorks status report”; no answer is stored. |\n\n**What we can conclude**\n\n- The vault currently holds *metadata* that a status‑report research task was executed on 2026‑05‑29, but the actual status details (e.g., version, feature roadmap, performance metrics, recent releases, user adoption) are **not present** in the accessible notes.\n- No internal documentation (e.g., release notes, sprint summaries, system health dashboards) was found in the provided vault excerpts.\n- External web sources either describe unrelated entities (the clinical neuropsychology service at neuroworks.net [2] or the EEG software from Natus [3]) or a completely different organization (Cambridge NeuroWorks [1]), which the governance policy explicitly requires us to disregard for this question.\n\n**Next steps**\n\n1. **Locate the detailed status document** – check other vault paths such as `_knowledge/neuroworks-platform.md`, `reports/`, or any recent `status‑*.md` files that might contain the actual findings from the research jobs.\n2. **If the data are missing**, run a fresh deep‑web and internal‑vault search for keywords like “NeuroWorks release”, “NeuroWorks roadmap”, “NeuroWorks health check”, or “NeuroWorks version 2026”.\n3. **Provide the requested summary** once the relevant information is retrieved.\n\n*At present, the vault does not contain a usable status report for RUBIEM’s NeuroWorks platform.*",
        "sources": "[1] research.deep (query=\"NeuroWorks status report\")\n**NeuroWorks status report – current evidence**\n\n| Source | What it tells us about RUBIEM’s NeuroWorks platform |\n|--------|------------------------------------------------------|\n| Vault notes (e.g., `0‑Inbox/202605290926-research-neuroworks-status-report.md`) | Only the title *“Research: NeuroWorks status report”* is present; no substantive content or metrics are included. |\n| `_neuroworks/jobs/...‑ad‑hoc‑give‑me‑a‑status‑report‑on‑neuroworks‑…md` (both job files) | These entries record that a deep‑research job was run, but they do not contain the actual findings—just the fact that the job completed. |\n| `_neuroworks/jobs/2026‑05‑29‑conduct‑deep‑web‑research‑on‑neuroworks‑and‑capture‑findings‑…md` | Same situation: the job log shows the research was performed, but the extracted data are not shown in the note. |\n| `_neuroworks/templates/...‑custom‑you‑are‑operating‑as‑clawbot‑…md` | Contains only the query string “NeuroWorks status report”; no answer is stored. |\n\n**What we can conclude**\n\n- The vault currently holds *metadata* that a status‑report research task was executed on 2026‑05‑29, but the actual status details (e.g., version, feature roadmap, performance metrics, recent releases, user adoption) are **not present** in the accessible notes.\n- No internal documentation (e.g., release notes, sprint summaries, system health dashboards) was found in the provided vault excerpts.\n- External web sources either describe unrelated entities (the clinical neuropsychology service"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**NeuroWorks status report – current evidence**\n\n| Source | What it tells us about RUBIEM’s NeuroWorks platform |\n|--------|------------------------------------------------------|\n| Vault notes (e.g., `0‑Inbox/202605290926-research-neuroworks-status-report.md`) | Only the title *“Research: NeuroWorks status report”* is present; no substantive content or metrics are included. |\n| `_neuroworks/jobs/...‑ad‑hoc‑give‑me‑a‑status‑report‑on‑neuroworks‑…md` (both job files) | These entries record that a deep‑research job was run, but they do not contain the actual findings—just the fact that the job completed. |\n| `_neuroworks/jobs/2026‑05‑29‑conduct‑deep‑web‑research‑on‑neuroworks‑and‑capture‑findings‑…md` | Same situation: the job log shows the research was performed, but the extracted data are not shown in the note. |\n| `_neuroworks/templates/...‑custom‑you‑are‑operating‑as‑clawbot‑…md` | Contains only the query string “NeuroWorks status report”; no answer is stored. |\n\n**What we can conclude**\n\n- The vault currently holds *metadata* that a status‑report research task was executed on 2026‑05‑29, but the actual status details (e.g., version, feature roadmap, performance metrics, recent releases, user adoption) are **not present** in the accessible notes.\n- No internal documentation (e.g., release notes, sprint summaries, system health dashboards) was found in the provided vault excerpts.\n- External web sources either describe unrelated entities (the clinical neuropsychology service at neuroworks.net [2] or the EEG software from Natus [3]) or a completely different organization (Cambridge NeuroWorks [1]), which the governance policy explicitly requires us to disregard for this question.\n\n**Next steps**\n\n1. **Locate the detailed status document** – check other vault paths such as `_knowledge/neuroworks-platform.md`, `reports/`, or any recent `status‑*.md` files that might contain the actual findings from the research jobs.\n2. **If the data are missing**, run a fresh deep‑web and internal‑vault search for keywords like “NeuroWorks release”, “NeuroWorks roadmap”, “NeuroWorks health check”, or “NeuroWorks version 2026”.\n3. **Provide the requested summary** once the relevant information is retrieved.\n\n*At present, the vault does not contain a usable status report for RUBIEM’s NeuroWorks platform.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Perform deep web research on NeuroWorks and capture findings.",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ]
  ]
}
```
