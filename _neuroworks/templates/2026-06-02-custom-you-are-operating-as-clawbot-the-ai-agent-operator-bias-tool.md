---
type: template
title: Find the invoice in Downloads, read it, and summarise. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-02T20:09:54.559Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Recent conversation (chronological):   User: "look in my downloads and summarize CUT student offer letter"   User: "find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document"   You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."  Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Find the invoice in Downloads, read it, and summarise. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "look in my downloads and summarize CUT student offer letter"
  User: "find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document"
  You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "look in my downloads and summarize CUT student offer letter"
  User: "find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document"
  You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document

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
        "name": "Hon. P. Mavunga-ZIMRA-Invoice (1)",
        "limit": 1,
        "depth": 1
      },
      "rationale": "Locate the specific invoice file in the Downloads folder.",
      "label": "Looking in your downloads for \"Hon. P. Mavunga-ZIMRA-Invoice (1)\""
    },
    {
      "tool": "fs.read_external",
      "args": {
        "path": "$step_0.matches.0.path"
      },
      "rationale": "Read the contents of the found invoice file.",
      "label": "Reading $step_0.matches.0.path"
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Summarise the following invoice:\n\n$step_1.content",
        "system": "Provide a concise summary highlighting key details such as parties, dates, amounts, and any notable line items."
      },
      "rationale": "Generate a summary of the invoice content.",
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"look in my downloads and summarize CUT student offer letter\"\n  User: \"find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Invoice Summary – Aiia (Artificial Intelligence Initiative Africa)\n\n**Invoice Details**  \n- **Invoice No.:** 275  \n- **Date Issued:** 1 June 2026  \n- **Bill To:** Hon. P. Mavunga, SN‑595198, 275 Herbert Chitepo Ave, Harare, Zimbabwe  \n- **Contact:** +263 78 6434 988 / admin@aiinstituteafrica.com  \n\n**Events & Charges**  \n\n| Event | Dates | Description | Unit Price (USD) | Qty | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----|-----------------|\n| Al Tech Forum | 16‑17 Jun 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 Jun 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n| **Subtotal** | | | | | **6 480.00** |\n| **Bundle Discount** | | 20 % | | | **‑1 296.00** |\n| **Total Due** | | | | | **5 184.00** |\n\n*(The invoice lists a pre‑discount total of USD 6 480.00; after a 20 % bundle discount the payable amount is USD 5 184.00.)* [3]\n\n**Payment Details**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account No.:** 413001228226400  \n- **Payment Terms:** Pay by **8 June 2026** using the invoice number as reference.  \n\n**Authorized Signature**  \nMs. Mupikeni, Aiia Administrator.  \n\n*Source: PDF content extracted from `C:\\Users\\Arthur Magaya\\Downloads\\Hon. P. Mavunga-ZIMRA-Invoice (1).pdf`* [2]",
        "sources": "[1] fs.find_in (name=\"Hon. P. Mavunga-ZIMRA-Invoice (1)\")\nC:\\Users\\Arthur Magaya\\Downloads\\Hon. P. Mavunga-ZIMRA-Invoice (1).pdf: \n\n[2] fs.read_external (path=\"$step_0.matches.0.path\")\nAiia\nArtificial Intelligence Initiative Africa INVOICE TO: Invoice Number\n275 Herbert Chitepo Ave Hon. P. Mavunga SN-595198\nHarare, Zimbabwe ZIMRA ET AAT\n+263 78 6434 988 ZB Centre Corner Kwame Nkrumah Ave/Ist\nadmin@aiinstituteafrica.com Street, Harare 01June 2026\n+263719405843 Registration #\npmavunga@zimra.co.zw AATENT-MPVEAOD\n\nEvent Name(s): Al Tech Forum: 16-17 June 2026 + National Al for Transformation: Zimbabwe 2.0\n\nDescription Unit Price (USD) Delegates Sub-Total (USD)\n\nAl Tech Forum: 16-17 June 2026\n\nAl Tech Forum: une 720.00 5 3600.00\n\nSummit + Hotel + Dinner\n\nNational Al for Transformation: Zimbabwe 2.0: 17-18 June 2026\n\nSummit + Hotel + Dinney S760 5 2880.00\n\n+ 20% Bundle Discount Applied\n\nTotal USD 6480.00\nAuthorized Signature (Ms. Mupikeni) Al Institute Administrator\n\nye\nBank Name: ZB Bank\nAccount Name: Artificial Intelligence Initiative Africa\nAccount Number: 413001228226400\nPayment Terms:\n« Kindly note that the Payment should be made at the latest by 8 June 2026\n« Please use the invoice number as payment reference\n\n[3] ollama.generate\n**Invoice Summary – Aiia (Artificial Intelligence Initiative Africa)**  \n- **Invoice No.:** 275  \n- **Date Issued:** 1 June 2026  \n- **Bill To:** Hon. P. Mavunga, SN‑595198, 275 Herbert Chitepo Ave, Harare, Zimbabwe  \n- **Contact:** +263 78 6434 988 / admin@aiinstituteafrica.com  \n\n**Events & Charges**  \n| Event | Dates | Description | Unit Price (USD) | Qty | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----|-----------------|\n| Al Tech Forum | 16‑17 Jun 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 Jun 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n| **Subtotal** |  |  |  |  | **6 480.00** |\n| **Bundle Discount** |  | 20 % |  |  | **‑1 296.00** |\n| **Total Due** |  |  |  |  | **5 184.00** |\n\n*(Note: The invoice lists a total of USD 6 480.00 before discount; after applying the 20 % bundle discount the payable amount is USD 5 184.00.)*\n\n**Payment Details**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account No.:** 413001228226400  \n- **Payment Terms:** Pay by **8 June 2026** using the invoice number as reference.  \n\n**Authorized Signature:** Ms. Mupikeni, Aiia Administrator."
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Invoice Summary – Aiia (Artificial Intelligence Initiative Africa)\n\n**Invoice Details**  \n- **Invoice No.:** 275  \n- **Date Issued:** 1 June 2026  \n- **Bill To:** Hon. P. Mavunga, SN‑595198, 275 Herbert Chitepo Ave, Harare, Zimbabwe  \n- **Contact:** +263 78 6434 988 / admin@aiinstituteafrica.com  \n\n**Events & Charges**  \n\n| Event | Dates | Description | Unit Price (USD) | Qty | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----|-----------------|\n| Al Tech Forum | 16‑17 Jun 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 Jun 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n| **Subtotal** | | | | | **6 480.00** |\n| **Bundle Discount** | | 20 % | | | **‑1 296.00** |\n| **Total Due** | | | | | **5 184.00** |\n\n*(The invoice lists a pre‑discount total of USD 6 480.00; after a 20 % bundle discount the payable amount is USD 5 184.00.)* [3]\n\n**Payment Details**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account No.:** 413001228226400  \n- **Payment Terms:** Pay by **8 June 2026** using the invoice number as reference.  \n\n**Authorized Signature**  \nMs. Mupikeni, Aiia Administrator.  \n\n*Source: PDF content extracted from `C:\\Users\\Arthur Magaya\\Downloads\\Hon. P. Mavunga-ZIMRA-Invoice (1).pdf`* [2]",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"look in my downloads and summarize CUT student offer letter\"\n  User: \"find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## Invoice Summary – Aiia (Artificial Intelligence Initiative Africa)\n\n**Invoice Details**  \n- **Invoice No.:** 275  \n- **Date Issued:** 1 June 2026  \n- **Bill To:** Hon. P. Mavunga, SN‑595198, 275 Herbert Chitepo Ave, Harare, Zimbabwe  \n- **Contact:** +263 78 6434 988 / admin@aiinstituteafrica.com  \n\n**Events & Charges**  \n\n| Event | Dates | Description | Unit Price (USD) | Qty | Sub‑Total (USD) |\n|-------|-------|-------------|------------------|-----|-----------------|\n| Al Tech Forum | 16‑17 Jun 2026 | Summit + Hotel + Dinner | 720.00 | 5 | 3 600.00 |\n| National AI for Transformation: Zimbabwe 2.0 | 17‑18 Jun 2026 | Summit + Hotel + Dinner | 760.00 | 5 | 2 880.00 |\n| **Subtotal** | | | | | **6 480.00** |\n| **Bundle Discount** | | 20 % | | | **‑1 296.00** |\n| **Total Due** | | | | | **5 184.00** |\n\n*(The invoice lists a pre‑discount total of USD 6 480.00; after a 20 % bundle discount the payable amount is USD 5 184.00.)* [3]\n\n**Payment Details**  \n- **Bank:** ZB Bank  \n- **Account Name:** Artificial Intelligence Initiative Africa  \n- **Account No.:** 413001228226400  \n- **Payment Terms:** Pay by **8 June 2026** using the invoice number as reference.  \n\n**Authorized Signature**  \nMs. Mupikeni, Aiia Administrator.  \n\n*Source: PDF content extracted from `C:\\Users\\Arthur Magaya\\Downloads\\Hon. P. Mavunga-ZIMRA-Invoice (1).pdf`* [2]"
      },
      "rationale": "auto-injected: quality score=0.59 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find the invoice in Downloads, read it, and summarise.",
  "waves": [
    [
      0
    ],
    [
      1
    ],
    [
      2
    ],
    [
      3,
      4
    ],
    [
      5
    ]
  ]
}
```
