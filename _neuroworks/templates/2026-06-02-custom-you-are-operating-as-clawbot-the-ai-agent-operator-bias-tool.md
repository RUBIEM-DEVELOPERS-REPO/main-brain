---
type: template
title: Find "Hon P Mavunga-ZIMRA-Invoice (1) and" in downloads, read it, summarise (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-02T19:48:01.987Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Find "Hon P Mavunga-ZIMRA-Invoice (1) and" in downloads, read it, summarise (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document

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
      "tool": "fs.find_in",
      "args": {
        "folder": "downloads",
        "name": "Hon P Mavunga-ZIMRA-Invoice (1) and"
      },
      "rationale": "default fallback: task mentions downloads — search the user's PC instead of the web",
      "label": "Looking in your downloads for \"Hon P Mavunga-ZIMRA-Invoice (1) and\""
    },
    {
      "tool": "fs.read_external",
      "args": {
        "path": "$step_0.matches.0.path"
      },
      "rationale": "task asks for content — read the top match",
      "label": "Reading Hon P Mavunga-ZIMRA-Invoice (1) and"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nfind Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Invoice Summary – Hon. P. Mavunga‑ZIMRA (Invoice #275)\n\n**Issuer:** Artificial Intelligence Initiative Africa (AIIA)  \n**Recipient:** Hon. P. Mavunga, SN‑595198, Harare, Zimbabwe  \n**Invoice Date:** 1 June 2026  \n**Payment Due:** 8 June 2026  \n**Bank Details:**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account Number:** 413001228226400  \n\n### Event Charges\n| Event | Dates | Description | Unit Price (USD) | Delegates | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----------|-----------------|\n| Al Tech Forum | 16‑17 June 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 June 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n\n**Bundle Discount:** 20 % applied  \n**Total Invoice Amount:** **6 480.00 USD**  \n\n### Authorisation\nSigned by Ms. Mupikeni, AI Institute Administrator.  \n\n---  \n*All figures and dates are taken directly from the PDF content retrieved from the Downloads folder.*",
        "sources": "[1] fs.find_in (name=\"Hon P Mavunga-ZIMRA-Invoice (1) and\")\nC:\\Users\\Arthur Magaya\\Downloads\\Hon. P. Mavunga-ZIMRA-Invoice (1).pdf: \n\n[2] fs.read_external (path=\"$step_0.matches.0.path\")\nAiia\nArtificial Intelligence Initiative Africa INVOICE TO: Invoice Number\n275 Herbert Chitepo Ave Hon. P. Mavunga SN-595198\nHarare, Zimbabwe ZIMRA ET AAT\n+263 78 6434 988 ZB Centre Corner Kwame Nkrumah Ave/Ist\nadmin@aiinstituteafrica.com Street, Harare 01June 2026\n+263719405843 Registration #\npmavunga@zimra.co.zw AATENT-MPVEAOD\n\nEvent Name(s): Al Tech Forum: 16-17 June 2026 + National Al for Transformation: Zimbabwe 2.0\n\nDescription Unit Price (USD) Delegates Sub-Total (USD)\n\nAl Tech Forum: 16-17 June 2026\n\nAl Tech Forum: une 720.00 5 3600.00\n\nSummit + Hotel + Dinner\n\nNational Al for Transformation: Zimbabwe 2.0: 17-18 June 2026\n\nSummit + Hotel + Dinney S760 5 2880.00\n\n+ 20% Bundle Discount Applied\n\nTotal USD 6480.00\nAuthorized Signature (Ms. Mupikeni) Al Institute Administrator\n\nye\nBank Name: ZB Bank\nAccount Name: Artificial Intelligence Initiative Africa\nAccount Number: 413001228226400\nPayment Terms:\n« Kindly note that the Payment should be made at the latest by 8 June 2026\n« Please use the invoice number as payment reference"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Invoice Summary – Hon. P. Mavunga‑ZIMRA (Invoice #275)\n\n**Issuer:** Artificial Intelligence Initiative Africa (AIIA)  \n**Recipient:** Hon. P. Mavunga, SN‑595198, Harare, Zimbabwe  \n**Invoice Date:** 1 June 2026  \n**Payment Due:** 8 June 2026  \n**Bank Details:**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account Number:** 413001228226400  \n\n### Event Charges\n| Event | Dates | Description | Unit Price (USD) | Delegates | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----------|-----------------|\n| Al Tech Forum | 16‑17 June 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 June 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n\n**Bundle Discount:** 20 % applied  \n**Total Invoice Amount:** **6 480.00 USD**  \n\n### Authorisation\nSigned by Ms. Mupikeni, AI Institute Administrator.  \n\n---  \n*All figures and dates are taken directly from the PDF content retrieved from the Downloads folder.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nfind Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Invoice Summary – Hon. P. Mavunga‑ZIMRA (Invoice #275)\n\n**Issuer:** Artificial Intelligence Initiative Africa (AIIA)  \n**Recipient:** Hon. P. Mavunga, SN‑595198, Harare, Zimbabwe  \n**Invoice Date:** 1 June 2026  \n**Payment Due:** 8 June 2026  \n**Bank Details:**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account Number:** 413001228226400  \n\n### Event Charges\n| Event | Dates | Description | Unit Price (USD) | Delegates | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----------|-----------------|\n| Al Tech Forum | 16‑17 June 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 June 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n\n**Bundle Discount:** 20 % applied  \n**Total Invoice Amount:** **6 480.00 USD**  \n\n### Authorisation\nSigned by Ms. Mupikeni, AI Institute Administrator.  \n\n---  \n*All figures and dates are taken directly from the PDF content retrieved from the Downloads folder.*"
      },
      "rationale": "auto-injected: quality score=0.77 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find \"Hon P Mavunga-ZIMRA-Invoice (1) and\" in downloads, read it, summarise",
  "waves": [
    [
      0
    ],
    [
      1
    ],
    [
      2,
      3
    ],
    [
      4
    ]
  ]
}
```
