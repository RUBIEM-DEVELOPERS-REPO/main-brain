---
type: template
title: Organization-structure task — ground on the org's own records (people, agents, departments), then draft. (custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o)
slug: custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o
created: 2026-07-19T03:08:06.138Z
templateId: custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o
role: Custom
originTask: (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)  What departments exist in our organization?
---

# Organization-structure task — ground on the org's own records (people, agents, departments), then draft. (custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o)

Saved from chat: "(You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)

What departments exist in our organization?"

**Origin task:** (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)

What departments exist in our organization?

## Saved plan

```json
{
  "steps": [
    {
      "tool": "users.list",
      "args": {},
      "rationale": "every human in the org — name, title, department, role",
      "label": "users.list"
    },
    {
      "tool": "personas.list",
      "args": {},
      "rationale": "every AI agent — role, job description, responsibilities, work mode",
      "label": "personas.list"
    },
    {
      "tool": "company.department_data",
      "args": {},
      "rationale": "operator-curated department facts and policies",
      "label": "company.department_data"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWhat departments exist in our organization?",
        "answer": "## Departments in the Organization\n\nThe user directory shows the following departments represented among active employees:\n\n- Business Development  \n- Development Standards  \n- Business Operations  \n- HR & Finance  \n- Innovation Planning  \n\nThese department names are taken from the `department` field in the user list [1]. The `company.department_data` table currently contains no entries [3], so the department list is derived solely from employee records.",
        "sources": "[1] users.list\n{\"users\":[{\"name\":\"Arthur Magaya\",\"email\":\"admin@rubiem.com\",\"role\":\"superadmin\",\"title\":\"Chairman\",\"department\":\"Business Development\",\"status\":\"active\",\"workMode\":\"hybrid\"},{\"name\":\"Godswill\",\"email\":\"godswill@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"Development Standards Lead\",\"department\":\"Development Standards\",\"status\":\"active\",\"workMode\":\"human\"},{\"name\":\"Patience\",\"email\":\"patience@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"Business Operations Lead\",\"department\":\"Business Operations\",\"status\":\"active\",\"workMode\":\"human\"},{\"name\":\"Arthur\",\"email\":\"arthur@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"CEO\",\"department\":\"HR & Finance\",\"status\":\"active\",\"workMode\":\"human\"},{\"name\":\"Anesu\",\"email\":\"anesu@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"Innovation Planning Lead\",\"department\":\"Innovation Planning\",\"status\":\"active\",\"workMode\":\"human\"}]}\n\n[2] personas.list\n{\"agents\":[{\"id\":\"logistics\",\"name\":\"Liam\",\"role\":\"Logistics & Supply Chain Coordinator\",\"description\":\"Inventory, shipping & fulfillment, supplier coordination, and delivery scheduling.\",\"jobDescription\":\"Built-in. Logistics & supply-chain coordinator (distinct from Pia, who BUYS — Liam MOVES & TRACKS goods). Handles inventory management, shipping & fulfillment, supplier/carrier coordination, delivery scheduling & tracking, stock-level planning, and resolving logistics exceptions. Optimizes for on-time, in-full, at the right cost.\",\"responsibilities\":[\"Track inventory and flag reorder points / stockouts\",\"Coordinate shipping, carriers, and fulfillment\",\"Schedule deliveries and keep tracking visible\",\"Plan stock levels against demand and lead times\",\"Resolve logistics exceptions (delays, damages, shortages)\"],\"workMode\":\"agent\"},{\"id\":\"project-manager\",\"name\":\"Pax\",\"role\":\"Project Manager\",\"description\":\"Delivery PM — plans, timelines, RAID logs, status reports, and stakeholder comms.\",\"jobDescription\":\"Built-in. Project / delivery manager (distinct from Priya, who owns the PRODUCT — Pax delivers PROJECTS on time/scope/budget). Handles project plans & timelines, milestones & dependencies, RAID logs (risks/assumptions/issues/dependencies), status reports, scope & change management, and stakeholder communication. Drives clarity, accountability, and momentum.\",\"responsibilities\":[\"Build project plans with milestones, dependencies, and owners\",\"Maintain a RAID log and surface blo\n\n[3] company.department_data\n{\"departments\":[],\"data\":[]}",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Departments in the Organization\n\nThe user directory shows the following departments represented among active employees:\n\n- Business Development  \n- Development Standards  \n- Business Operations  \n- HR & Finance  \n- Innovation Planning  \n\nThese department names are taken from the `department` field in the user list [1]. The `company.department_data` table currently contains no entries [3], so the department list is derived solely from employee records.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "governance.check",
      "args": {
        "content": "## Departments in the Organization\n\nThe user directory shows the following departments represented among active employees:\n\n- Business Development  \n- Development Standards  \n- Business Operations  \n- HR & Finance  \n- Innovation Planning  \n\nThese department names are taken from the `department` field in the user list [1]. The `company.department_data` table currently contains no entries [3], so the department list is derived solely from employee records."
      },
      "rationale": "auto-injected: check answer against accepted hard governance constraints",
      "label": "Checking against governance policies"
    }
  ],
  "summary": "Organization-structure task — ground on the org's own records (people, agents, departments), then draft.",
  "waves": [
    [
      3,
      4,
      5
    ]
  ]
}
```
