---
type: template
title: Research: Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-06T12:40:30.293Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to clients. Budget not decided yet but our COO asked me to find a fix this quarter. Can you help?' Use a clear framework.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Research: Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to clients. Budget not decided yet but our COO asked me to find a fix this quarter. Can you help?' Use a clear framework.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to clients. Budget not decided yet but our COO asked me to find a fix this quarter. Can you help?' Use a clear framework.

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
      "tool": "research.deep",
      "args": {
        "query": "Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to",
        "depth": 3,
        "capture": true
      },
      "rationale": "research signal detected (\"this quarter\") — fetching external sources before synth so the persona answer is grounded, not memory-only",
      "label": "Researching \"Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-perso…\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nQualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to clients. Budget not decided yet but our COO asked me to find a fix this quarter. Can you help?' Use a clear framework.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Lead Qualification & Recommended Next Step\n\n### 1. Lead Profile  \n- **Company size:** 220 employees, logistics operations.  \n- **Pain point:** Manual status‑email workflow to clients is unsustainable.  \n- **Decision‑maker:** COO has requested a solution within the current quarter.  \n- **Budget status:** Undecided; opportunity to influence budget through ROI demonstration.\n\n### 2. Qualification Criteria  \n| Criterion | Assessment | Implication |\n|-----------|------------|-------------|\n| **Business size** | 220 employees → mid‑market; likely to adopt scalable automation. | Good fit for our SaaS automation platform. |\n| **Pain severity** | “Drowning” indicates high operational cost and risk of client churn. | Strong business case for immediate ROI. |\n| **Decision authority** | COO directly involved. | Direct access to budget approval. |\n| **Timeline** | Solution required within the quarter. | Must present a rapid‑to‑market plan. |\n| **Budget flexibility** | Not yet decided. | Need to present cost‑benefit analysis and phased pricing. |\n\n### 3. Recommended Next Step  \n1. **Schedule a 30‑minute discovery call** with the COO to confirm scope, current email volume, and existing tools.  \n2. **Deliver a 15‑slide deck** (or PDF) covering:  \n   - Current manual process mapping.  \n   - Quantified cost of manual emails (time, error rate).  \n   - ROI model for an automated status‑email system (e.g., 30 % time savings, 20 % error reduction).  \n   - Quick‑start implementation timeline (3‑4 weeks).  \n   - Pricing tiers and potential budget impact.  \n3. **Propose a pilot** with a single client segment to demonstrate impact before full rollout.  \n\n### 4. Next Action Items for Your Team  \n- Prepare a concise case study of a similar logistics client (if available).  \n- Draft the discovery call agenda and send calendar invite.  \n- Coordinate with the product team to outline a pilot configuration.  \n\nExecuting this plan will position us as a rapid‑value partner and enable the COO to make an informed budget decision within the quarter.",
        "sources": "[1] research.deep (query=\"Qualify this inbound lead and recommend next step: 'Hi, I ru\")\n## Partial result\n\nThe synthesiser couldn't run (`OpenRouter 403: {\"error\":{\"message\":\"openai/gpt-oss-120b:free requires moderation on OpenInference. Your input was flagged for \\\"sexual/minors\\\". No credits were charged.\",\"code\":403,\"metadata\":{\"reas`), so here are the sources I gathered for: **Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to**\n\n### Vault hits\n_(none)_\n\n### Web sources\n[1] **Real Anal Penetration Porn Videos &#124; Pornhub.com** (https://www.pornhub.com/video/search?search=real+anal+penetration) — Real Anal Penetration Porn Videos &#124; Pornhub.com page_params.jqueryVersion = 'https://ei.phncdn.com/www-static/js/lib/jquery-3.6.0.min.js'; var jsFileList = {}; if (typeof window.performance === 'undefined') { (function(n,t){\"use strict\n\n[2] **anal-penetration videos - XVIDEOS.COM** (https://www.xvideos.com/tags/anal-penetration) — anal-penetration videos - XVIDEOS.COM Join Live Cams Dating Free 12,115 5,603 Videos tagged &laquo; anal-penetration &raquo; (12,115 results) Report Sort by : Relevance Relevance Newest Rating Length Views Date Anytime Last 3 days This week\n\n[3] **'real anal' Search - XNXX.COM** (https://www.xnxx.com/search/real%20anal) — 'real anal' Search - XNXX.COM Top A - Z ?\n\n_Review the sources directly and try again later._"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Lead Qualification & Recommended Next Step\n\n### 1. Lead Profile  \n- **Company size:** 220 employees, logistics operations.  \n- **Pain point:** Manual status‑email workflow to clients is unsustainable.  \n- **Decision‑maker:** COO has requested a solution within the current quarter.  \n- **Budget status:** Undecided; opportunity to influence budget through ROI demonstration.\n\n### 2. Qualification Criteria  \n| Criterion | Assessment | Implication |\n|-----------|------------|-------------|\n| **Business size** | 220 employees → mid‑market; likely to adopt scalable automation. | Good fit for our SaaS automation platform. |\n| **Pain severity** | “Drowning” indicates high operational cost and risk of client churn. | Strong business case for immediate ROI. |\n| **Decision authority** | COO directly involved. | Direct access to budget approval. |\n| **Timeline** | Solution required within the quarter. | Must present a rapid‑to‑market plan. |\n| **Budget flexibility** | Not yet decided. | Need to present cost‑benefit analysis and phased pricing. |\n\n### 3. Recommended Next Step  \n1. **Schedule a 30‑minute discovery call** with the COO to confirm scope, current email volume, and existing tools.  \n2. **Deliver a 15‑slide deck** (or PDF) covering:  \n   - Current manual process mapping.  \n   - Quantified cost of manual emails (time, error rate).  \n   - ROI model for an automated status‑email system (e.g., 30 % time savings, 20 % error reduction).  \n   - Quick‑start implementation timeline (3‑4 weeks).  \n   - Pricing tiers and potential budget impact.  \n3. **Propose a pilot** with a single client segment to demonstrate impact before full rollout.  \n\n### 4. Next Action Items for Your Team  \n- Prepare a concise case study of a similar logistics client (if available).  \n- Draft the discovery call agenda and send calendar invite.  \n- Coordinate with the product team to outline a pilot configuration.  \n\nExecuting this plan will position us as a rapid‑value partner and enable the COO to make an informed budget decision within the quarter.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nQualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to clients. Budget not decided yet but our COO asked me to find a fix this quarter. Can you help?' Use a clear framework.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Lead Qualification & Recommended Next Step\n\n### 1. Lead Profile  \n- **Company size:** 220 employees, logistics operations.  \n- **Pain point:** Manual status‑email workflow to clients is unsustainable.  \n- **Decision‑maker:** COO has requested a solution within the current quarter.  \n- **Budget status:** Undecided; opportunity to influence budget through ROI demonstration.\n\n### 2. Qualification Criteria  \n| Criterion | Assessment | Implication |\n|-----------|------------|-------------|\n| **Business size** | 220 employees → mid‑market; likely to adopt scalable automation. | Good fit for our SaaS automation platform. |\n| **Pain severity** | “Drowning” indicates high operational cost and risk of client churn. | Strong business case for immediate ROI. |\n| **Decision authority** | COO directly involved. | Direct access to budget approval. |\n| **Timeline** | Solution required within the quarter. | Must present a rapid‑to‑market plan. |\n| **Budget flexibility** | Not yet decided. | Need to present cost‑benefit analysis and phased pricing. |\n\n### 3. Recommended Next Step  \n1. **Schedule a 30‑minute discovery call** with the COO to confirm scope, current email volume, and existing tools.  \n2. **Deliver a 15‑slide deck** (or PDF) covering:  \n   - Current manual process mapping.  \n   - Quantified cost of manual emails (time, error rate).  \n   - ROI model for an automated status‑email system (e.g., 30 % time savings, 20 % error reduction).  \n   - Quick‑start implementation timeline (3‑4 weeks).  \n   - Pricing tiers and potential budget impact.  \n3. **Propose a pilot** with a single client segment to demonstrate impact before full rollout.  \n\n### 4. Next Action Items for Your Team  \n- Prepare a concise case study of a similar logistics client (if available).  \n- Draft the discovery call agenda and send calendar invite.  \n- Coordinate with the product team to outline a pilot configuration.  \n\nExecuting this plan will position us as a rapid‑value partner and enable the COO to make an informed budget decision within the quarter."
      },
      "rationale": "auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Research: Qualify this inbound lead and recommend next step: 'Hi, I run ops at a 220-person logistics firm. We're drowning in manual status emails to",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ],
    [
      3
    ]
  ]
}
```
