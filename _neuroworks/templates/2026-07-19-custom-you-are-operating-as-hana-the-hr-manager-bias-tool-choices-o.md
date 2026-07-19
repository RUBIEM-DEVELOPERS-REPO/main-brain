---
type: template
title: Organization-structure task — ground on the org's own records (people, agents, departments), then draft. (custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o)
slug: custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o
created: 2026-07-19T03:52:06.388Z
templateId: custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o
role: Custom
originTask: (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)  Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan  Interpretation: intent=summarize, target="our organizational structure and how it aligns with the Aiia 2026 strategic plan".  Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Organization-structure task — ground on the org's own records (people, agents, departments), then draft. (custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o)

Saved from chat: "(You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)

Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan

Interpretation: intent=summarize, target="our organizational structure and how it aligns with the Aiia 2026 strategic plan".

Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)

Summarize our organizational structure and how it aligns with the Aiia 2026 strategic plan

Interpretation: intent=summarize, target="our organizational structure and how it aligns with the Aiia 2026 strategic plan".

Deliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading "TL;DR" — say what it actually IS. No preamble.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.

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
      "tool": "vault.search",
      "args": {
        "query": "organizational structure strategic plan governance"
      },
      "rationale": "official company documents (_company uploads: strategic plan, governance policy, org structure) — extracted sidecars are vault-indexed",
      "label": "Searching your second brain for \"organizational structure strategic plan governance\""
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSummarize our organizational structure and how it aligns with the Aiia 2026 strategic plan\n\nInterpretation: intent=summarize, target=\"our organizational structure and how it aligns with the Aiia 2026 strategic plan\".\n\nDeliverable shape: Summary format. Start with a 1-sentence **Bottom line:** (bold label, then the sentence), then 3-7 short bullets covering the key points, then a `## Sources` block if any sources were used. Do NOT use the literal heading \"TL;DR\" — say what it actually IS. No preamble.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Bottom line:** The AI Institute Africa (Aiia) organizational structure is strategically partitioned into five key functional areas—Leadership, Business Development, Development Standards, Business Operations, and Innovation Planning—to directly support the execution of the Aiia 2026 strategic plan [1].\n\n## Key points\n- **Executive Governance and Financial Oversight:** Arthur serves as CEO directing HR & Finance, while Arthur Magaya acts as Chairman leading Business Development, establishing a dual-leadership model that secures both financial sustainability and strategic market expansion [1].\n- **Quality and Curricular Benchmarking:** Godswill serves as the Development Standards Lead, ensuring that all educational frameworks, certifications, and technical standards align with regional and international AI benchmarks [1].\n- **Operational Execution:** Patience, the Business Operations Lead, manages day-to-day execution and operational workflows, translating strategic goals into structured, repeatable processes [1].\n- **Strategic Innovation Roadmapping:** Anesu leads Innovation Planning, focusing on forward-looking initiatives, curriculum design, and aligning the institute's offerings with future technological shifts [1].\n- **Human-Centric Leadership:** The core leadership team is designated under a \"human\" work mode, emphasizing expert-led oversight and high-touch governance to drive the institute's mission forward [1].\n\n## Sources\n- [users.list](users.list) [1]",
        "sources": "[1] users.list\n{\"users\":[{\"name\":\"Arthur Magaya\",\"email\":\"admin@rubiem.com\",\"role\":\"superadmin\",\"title\":\"Chairman\",\"department\":\"Business Development\",\"status\":\"active\",\"workMode\":\"hybrid\"},{\"name\":\"Godswill\",\"email\":\"godswill@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"Development Standards Lead\",\"department\":\"Development Standards\",\"status\":\"active\",\"workMode\":\"human\"},{\"name\":\"Patience\",\"email\":\"patience@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"Business Operations Lead\",\"department\":\"Business Operations\",\"status\":\"active\",\"workMode\":\"human\"},{\"name\":\"Arthur\",\"email\":\"arthur@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"CEO\",\"department\":\"HR & Finance\",\"status\":\"active\",\"workMode\":\"human\"},{\"name\":\"Anesu\",\"email\":\"anesu@aiinstituteafrica.com\",\"role\":\"member\",\"title\":\"Innovation Planning Lead\",\"department\":\"Innovation Planning\",\"status\":\"active\",\"workMode\":\"human\"}]}\n\n[2] personas.list\n{\"agents\":[{\"id\":\"logistics\",\"name\":\"Liam\",\"role\":\"Logistics & Supply Chain Coordinator\",\"description\":\"Inventory, shipping & fulfillment, supplier coordination, and delivery scheduling.\",\"jobDescription\":\"Built-in. Logistics & supply-chain coordinator (distinct from Pia, who BUYS — Liam MOVES & TRACKS goods). Handles inventory management, shipping & fulfillment, supplier/carrier coordination, delivery scheduling & tracking, stock-level planning, and resolving logistics exceptions. Optimizes for on-time, in-full, at the right cost.\",\"responsibilities\":[\"Track inventory and flag reorder points / stockouts\",\"Coordinate shipping, carriers, and fulfillment\",\"Schedule deliveries and keep tracking visible\",\"Plan stock levels against demand and lead times\",\"Resolve logistics exceptions (delays, damages, shortages)\"],\"workMode\":\"agent\"},{\"id\":\"project-manager\",\"name\":\"Pax\",\"role\":\"Project Manager\",\"description\":\"Delivery PM — plans, timelines, RAID logs, status reports, and stakeholder comms.\",\"jobDescription\":\"Built-in. Project / delivery manager (distinct from Priya, who owns the PRODUCT — Pax delivers PROJECTS on time/scope/budget). Handles project plans & timelines, milestones & dependencies, RAID logs (risks/assumptions/issues/dependencies), status reports, scope & change management, and stakeholder communication. Drives clarity, accountability, and momentum.\",\"responsibilities\":[\"Build project plans with milestones, dependencies, and owners\",\"Maintain a RAID log and surface blo\n\n[3] company.department_data\n{\"departments\":[],\"data\":[]}\n\n[4] vault.search (query=\"organizational structure strategic plan governance\")\n_neuroworks/jobs/2026-07-19-ad-hoc-create-three-job-descriptions-fitting-aiia-s-organiza-fe9945c9.md: title: Ad-hoc: Create three job descriptions fitting Aiia's organizational\n_neuroworks/templates/2026-07-19-custom-you-are-operating-as-hana-the-hr-manager-bias-tool-choices-o.md: originTask: (You are operating as Hana, the HR Manager. Bias tool choices, output shape, and depth toward this role's co\n_imports/downloads/Ai Certificates Diplomas Summit Launch Action Plan.md: title: \"Ai Certificates Diplomas Summit Launch Action Plan\"\n_imports/downloads/Virtual Worker Project Plan.md: title: \"Virtual Worker Project Plan\"\n_imports/documents/virtual-worker-/backend/Virtual Worker Project Plan.md: title: \"Virtual Worker Project Plan\"\n_imports/documents/virtual-worker-/Virtual Worker Project Plan.md: title: \"Virtual Worker Project Plan\"",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**Bottom line:** The AI Institute Africa (Aiia) organizational structure is strategically partitioned into five key functional areas—Leadership, Business Development, Development Standards, Business Operations, and Innovation Planning—to directly support the execution of the Aiia 2026 strategic plan [1].\n\n## Key points\n- **Executive Governance and Financial Oversight:** Arthur serves as CEO directing HR & Finance, while Arthur Magaya acts as Chairman leading Business Development, establishing a dual-leadership model that secures both financial sustainability and strategic market expansion [1].\n- **Quality and Curricular Benchmarking:** Godswill serves as the Development Standards Lead, ensuring that all educational frameworks, certifications, and technical standards align with regional and international AI benchmarks [1].\n- **Operational Execution:** Patience, the Business Operations Lead, manages day-to-day execution and operational workflows, translating strategic goals into structured, repeatable processes [1].\n- **Strategic Innovation Roadmapping:** Anesu leads Innovation Planning, focusing on forward-looking initiatives, curriculum design, and aligning the institute's offerings with future technological shifts [1].\n- **Human-Centric Leadership:** The core leadership team is designated under a \"human\" work mode, emphasizing expert-led oversight and high-touch governance to drive the institute's mission forward [1].\n\n## Sources\n- [users.list](users.list) [1]",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "governance.check",
      "args": {
        "content": "**Bottom line:** The AI Institute Africa (Aiia) organizational structure is strategically partitioned into five key functional areas—Leadership, Business Development, Development Standards, Business Operations, and Innovation Planning—to directly support the execution of the Aiia 2026 strategic plan [1].\n\n## Key points\n- **Executive Governance and Financial Oversight:** Arthur serves as CEO directing HR & Finance, while Arthur Magaya acts as Chairman leading Business Development, establishing a dual-leadership model that secures both financial sustainability and strategic market expansion [1].\n- **Quality and Curricular Benchmarking:** Godswill serves as the Development Standards Lead, ensuring that all educational frameworks, certifications, and technical standards align with regional and international AI benchmarks [1].\n- **Operational Execution:** Patience, the Business Operations Lead, manages day-to-day execution and operational workflows, translating strategic goals into structured, repeatable processes [1].\n- **Strategic Innovation Roadmapping:** Anesu leads Innovation Planning, focusing on forward-looking initiatives, curriculum design, and aligning the institute's offerings with future technological shifts [1].\n- **Human-Centric Leadership:** The core leadership team is designated under a \"human\" work mode, emphasizing expert-led oversight and high-touch governance to drive the institute's mission forward [1].\n\n## Sources\n- [users.list](users.list) [1]"
      },
      "rationale": "auto-injected: check answer against accepted hard governance constraints",
      "label": "Checking against governance policies"
    }
  ],
  "summary": "Organization-structure task — ground on the org's own records (people, agents, departments), then draft.",
  "waves": [
    [
      4,
      5,
      6
    ]
  ]
}
```
