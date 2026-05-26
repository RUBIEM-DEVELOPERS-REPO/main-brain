---
type: template
title: Research: via DuckDuckGo (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-05-26T21:56:39.113Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Give me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.  Interpretation: intent=answer, scope=short.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Research: via DuckDuckGo (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.

Interpretation: intent=answer, scope=short.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.

Interpretation: intent=answer, scope=short.

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
        "query": "via DuckDuckGo",
        "depth": 3,
        "capture": true
      },
      "rationale": "research signal detected (\"research via\") — fetching external sources before synth so the persona answer is grounded, not memory-only",
      "label": "Researching \"via DuckDuckGo\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.\n\nInterpretation: intent=answer, scope=short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "Clawbot is an AI agent platform that delegates tasks to 17 specialized personas and integrates with an Obsidian vault for persistent memory. It can perform web research through DuckDuckGo, Bing, and Firecrawl. Tasks may run once or continue in a flow when additional context is required. Output formats supported include emails, memos, code, briefs, and reports.",
        "sources": "[1] research.deep (query=\"via DuckDuckGo\")\n**DuckDuckGo** is a privacy‑focused internet company whose flagship product is a search engine that does not track users’ queries or browsing behavior.  \n\n- **Core offering** – The DuckDuckGo search engine returns results without creating a personal profile, and it blocks third‑party trackers and cookies by default 【1†L1-L7】.  \n- **Additional products** – The company also provides a dedicated private browser (available for iPhone, iPad, Mac, and other platforms) that bundles the search engine, optional AI features (Search Assist/Duck.ai), and a VPN service 【1†L1-L5】.  \n- **Business model** – DuckDuckGo is free to use; it earns revenue from privacy‑respecting search ads rather than selling user data 【1†L9-L11】.  \n- **Company background** – Founded by Gabriel Weinberg in 2008, DuckDuckGo is headquartered in Paoli, Pennsylvania, and employs roughly 335 people 【2†L13-L19】.  \n\nIn short, using DuckDuckGo (via its website, browser app, or integrated search in the DuckDuckGo Private Browser) lets you search the web while keeping your personal information out of the hands of advertisers and data‑collecting companies."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "Clawbot is an AI agent platform that delegates tasks to 17 specialized personas and integrates with an Obsidian vault for persistent memory. It can perform web research through DuckDuckGo, Bing, and Firecrawl. Tasks may run once or continue in a flow when additional context is required. Output formats supported include emails, memos, code, briefs, and reports.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.\n\nInterpretation: intent=answer, scope=short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "Clawbot is an AI agent platform that delegates tasks to 17 specialized personas and integrates with an Obsidian vault for persistent memory. It can perform web research through DuckDuckGo, Bing, and Firecrawl. Tasks may run once or continue in a flow when additional context is required. Output formats supported include emails, memos, code, briefs, and reports."
      },
      "rationale": "auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Research: via DuckDuckGo",
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
