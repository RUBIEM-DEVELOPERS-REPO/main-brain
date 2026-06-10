---
type: template
title: Find context for "pricing proposal for our enterprise tier at 3 seat bands." then draft it (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-10T18:16:42.266Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Put together a pricing proposal for our enterprise tier at 3 seat bands.
---

# Find context for "pricing proposal for our enterprise tier at 3 seat bands." then draft it (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Put together a pricing proposal for our enterprise tier at 3 seat bands."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Put together a pricing proposal for our enterprise tier at 3 seat bands.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "vault.search",
      "args": {
        "query": "pricing proposal for our enterprise tier at 3 seat bands."
      },
      "rationale": "ground the draft in any prior context in the user's second brain — avoid fabricating meaning for unfamiliar terms",
      "label": "Searching your second brain for \"pricing proposal for our enterprise tier at 3 seat bands.\""
    },
    {
      "tool": "fs.find_in",
      "args": {
        "folder": "all",
        "name": "pricing proposal for our enterprise tier at 3 seat bands.",
        "limit": 3
      },
      "rationale": "check the user's PC (Downloads + Desktop + Documents + Inbox) for prior versions of this doc — runs in parallel with the vault search",
      "label": "Looking in your Downloads, Desktop, Documents, and vault Inbox for \"pricing proposal for our enterprise tier at 3 seat bands.\""
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nPut together a pricing proposal for our enterprise tier at 3 seat bands.",
        "answer": "# Pricing proposal — NeuroWorks Enterprise Tier · 2026‑06‑10\n\n## What you told us you need\n- **Enterprise‑level support** for a small team (3 seat bands)\n- **Scalable, secure deployment** on the customer’s local machine\n- **Custom feature set** tailored to the organization’s workflow\n\n## Three ways forward\n\n### Option A — Core Enterprise · $3,000 / month\n**Right for:** Small teams that need a stable, fully‑supported platform with essential enterprise features.\n\n**Included**\n- Deployment on the customer’s local machine (loopback 127.0.0.1)\n- 24/7 on‑call support via email and chat\n- Quarterly security and compliance reviews\n- Access to core AI‑workforce personas (chat, task runner, email bridge)\n\n**Not included**\n- Custom persona development\n- Advanced analytics dashboards\n- Dedicated account manager\n\n**Success in 90 days looks like**\n- Platform running with zero critical incidents\n- 95 % uptime for all core services\n- User adoption rate ≥ 80 % across the 3 seat bands\n\n### Option B — Advanced Enterprise · $5,000 / month\n**Right for:** Teams that require additional customization and proactive monitoring.\n\n**Included**\n- All features of Option A\n- Custom persona creation and integration\n- Real‑time analytics dashboards\n- Dedicated account manager\n\n**Not included**\n- On‑premise hardware procurement\n- External data source integrations beyond the platform\n\n**Success in 90 days looks like**\n- 100 % adoption of custom personas\n- 99 % uptime\n- Monthly performance reports delivered to stakeholders\n\n### Option C — Premium Enterprise · $8,000 / month\n**Right for:** Organizations that need full control, advanced security, and priority service.\n\n**Included**\n- All features of Option B\n- Dedicated security officer review\n- Priority incident response (within 1 hour)\n- SLA of 99.99 % uptime\n\n**Not included**\n- Physical infrastructure maintenance\n- Third‑party integration beyond the platform’s API\n\n**Success in 90 days looks like**\n- Zero critical incidents\n- 99.99 % uptime\n- Executive dashboard with real‑time metrics\n\n## Our recommendation\n> **Option B – Advanced Enterprise** balances cost and capability for a 3‑seat band, providing the necessary customization and support while keeping the investment reasonable.\n\n## Terms\n- Payment: Monthly in advance\n- Term: 12 months\n- Cancellation: 30 days written notice\n- Renewal: Auto‑renew, opt‑in\n\n## Next step\n- Schedule a kickoff call to finalize scope and pricing details\n- Decision needed by: 2026‑07‑15\n- Point of contact your side: <Name>\n\n---\n\n*I could not locate an existing pricing proposal in the vault or file system. The above is a draft based on typical enterprise tiers. Please confirm the desired features, pricing constraints, and any additional requirements so I can refine this proposal.*",
        "sources": ""
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "# Pricing proposal — NeuroWorks Enterprise Tier · 2026‑06‑10\n\n## What you told us you need\n- **Enterprise‑level support** for a small team (3 seat bands)\n- **Scalable, secure deployment** on the customer’s local machine\n- **Custom feature set** tailored to the organization’s workflow\n\n## Three ways forward\n\n### Option A — Core Enterprise · $3,000 / month\n**Right for:** Small teams that need a stable, fully‑supported platform with essential enterprise features.\n\n**Included**\n- Deployment on the customer’s local machine (loopback 127.0.0.1)\n- 24/7 on‑call support via email and chat\n- Quarterly security and compliance reviews\n- Access to core AI‑workforce personas (chat, task runner, email bridge)\n\n**Not included**\n- Custom persona development\n- Advanced analytics dashboards\n- Dedicated account manager\n\n**Success in 90 days looks like**\n- Platform running with zero critical incidents\n- 95 % uptime for all core services\n- User adoption rate ≥ 80 % across the 3 seat bands\n\n### Option B — Advanced Enterprise · $5,000 / month\n**Right for:** Teams that require additional customization and proactive monitoring.\n\n**Included**\n- All features of Option A\n- Custom persona creation and integration\n- Real‑time analytics dashboards\n- Dedicated account manager\n\n**Not included**\n- On‑premise hardware procurement\n- External data source integrations beyond the platform\n\n**Success in 90 days looks like**\n- 100 % adoption of custom personas\n- 99 % uptime\n- Monthly performance reports delivered to stakeholders\n\n### Option C — Premium Enterprise · $8,000 / month\n**Right for:** Organizations that need full control, advanced security, and priority service.\n\n**Included**\n- All features of Option B\n- Dedicated security officer review\n- Priority incident response (within 1 hour)\n- SLA of 99.99 % uptime\n\n**Not included**\n- Physical infrastructure maintenance\n- Third‑party integration beyond the platform’s API\n\n**Success in 90 days looks like**\n- Zero critical incidents\n- 99.99 % uptime\n- Executive dashboard with real‑time metrics\n\n## Our recommendation\n> **Option B – Advanced Enterprise** balances cost and capability for a 3‑seat band, providing the necessary customization and support while keeping the investment reasonable.\n\n## Terms\n- Payment: Monthly in advance\n- Term: 12 months\n- Cancellation: 30 days written notice\n- Renewal: Auto‑renew, opt‑in\n\n## Next step\n- Schedule a kickoff call to finalize scope and pricing details\n- Decision needed by: 2026‑07‑15\n- Point of contact your side: <Name>\n\n---\n\n*I could not locate an existing pricing proposal in the vault or file system. The above is a draft based on typical enterprise tiers. Please confirm the desired features, pricing constraints, and any additional requirements so I can refine this proposal.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Find context for \"pricing proposal for our enterprise tier at 3 seat bands.\" then draft it",
  "waves": [
    [
      0,
      1
    ],
    [
      2,
      3
    ]
  ]
}
```
