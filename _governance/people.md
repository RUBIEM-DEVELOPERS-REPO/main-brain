---
title: People — Org chart
tags: [governance, org-chart, handoff]
---

# People & org chart

The handoff / escalation graph clawbot uses when a persona doesn't know where
a request belongs. Edit the JSON below to reflect your actual team — the
`id` field is the lookup key; `persona_id` ties a person to a clawbot
persona (one of the ids in `personas.ts`); `manager` / `peers` / `reports`
are arrays of other `id`s in this same list.

```json
{
  "people": [
    { "id": "sarah",  "name": "Sarah",  "title": "Head of Engineering", "persona_id": null,                  "manager": null,    "peers": ["arjun"],                                   "reports": ["priya", "sam", "dani", "devon", "quinn", "tao"] },
    { "id": "arjun",  "name": "Arjun",  "title": "Head of AI",          "persona_id": null,                  "manager": null,    "peers": ["sarah"],                                    "reports": [] },
    { "id": "priya",  "name": "Priya",  "title": "Product Manager",     "persona_id": "product-manager",     "manager": "sarah", "peers": ["sam", "maya", "dani", "dale"],              "reports": [] },
    { "id": "sam",    "name": "Sam",    "title": "Software Engineer",   "persona_id": "software-engineer",   "manager": "sarah", "peers": ["priya", "quinn", "devon", "tao"],           "reports": [] },
    { "id": "dani",   "name": "Dani",   "title": "Product Designer",    "persona_id": "product-designer",    "manager": "sarah", "peers": ["priya", "maya"],                            "reports": [] },
    { "id": "quinn",  "name": "Quinn",  "title": "QA Engineer",         "persona_id": "qa-engineer",         "manager": "sarah", "peers": ["sam", "devon"],                             "reports": [] },
    { "id": "devon",  "name": "Devon",  "title": "DevOps / SRE",        "persona_id": "devops-sre",          "manager": "sarah", "peers": ["sam", "quinn"],                             "reports": [] },
    { "id": "tao",    "name": "Tao",    "title": "Technical Writer",    "persona_id": "technical-writer",    "manager": "sarah", "peers": ["sam", "dani"],                              "reports": [] },
    { "id": "maya",   "name": "Maya",   "title": "Marketing Manager",   "persona_id": "marketing-manager",   "manager": "drew",  "peers": ["priya", "dani", "casey"],                   "reports": [] },
    { "id": "drew",   "name": "Drew",   "title": "Account Executive",   "persona_id": "account-executive",   "manager": null,    "peers": ["casey"],                                    "reports": ["maya"] },
    { "id": "casey",  "name": "Casey",  "title": "Customer Success",    "persona_id": "customer-success",    "manager": "drew",  "peers": ["drew", "maya"],                             "reports": [] },
    { "id": "riley",  "name": "Riley",  "title": "Recruiter",           "persona_id": "recruiter",           "manager": null,    "peers": ["evie", "olivia"],                           "reports": [] },
    { "id": "fiona",  "name": "Fiona",  "title": "Financial Analyst",   "persona_id": "financial-analyst",   "manager": null,    "peers": ["dale", "logan"],                            "reports": [] },
    { "id": "dale",   "name": "Dale",   "title": "Data Analyst",        "persona_id": "data-analyst",        "manager": null,    "peers": ["fiona", "priya"],                           "reports": [] },
    { "id": "logan",  "name": "Logan",  "title": "Contracts Reviewer",  "persona_id": "contracts-reviewer",  "manager": null,    "peers": ["fiona", "drew"],                            "reports": [] },
    { "id": "evie",   "name": "Evie",   "title": "Executive Assistant", "persona_id": "executive-assistant", "manager": "sarah", "peers": ["olivia", "riley"],                          "reports": [] },
    { "id": "olivia", "name": "Olivia", "title": "Operations Lead",     "persona_id": "operations-coordinator", "manager": null, "peers": ["evie", "riley"],                          "reports": [] }
  ]
}
```

## How clawbot uses this

- **Handoff:** when a chat / team task lands on the wrong persona, clawbot
  looks up `peers` first (lateral handoff), then `manager` (escalate up).
- **Status reports:** `Sarah` (the Head of Engineering) gets weekly digests
  of her `reports` array's job activity.
- **Approvals:** any approval routed to a persona walks `manager` until it
  finds someone with `persona_id === null` (a human).

The Kit (`knowitall`) and Clawbot personas are not on this chart — they're
generalists that work for whoever asks.
