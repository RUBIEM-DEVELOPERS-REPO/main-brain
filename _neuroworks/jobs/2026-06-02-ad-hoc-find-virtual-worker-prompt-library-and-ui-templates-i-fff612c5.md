---
type: job
title: Ad-hoc: find Virtual Worker Prompt Library And Ui Templates in my do
slug: ad-hoc-find-virtual-worker-prompt-library-and-ui-templates-i-fff612c5
created: 2026-06-02T20:12:03.518Z
jobId: fff612c5-43fa-465a-900b-5f99bf74f5a5
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-02T20:10:51.625Z
finishedAt: 2026-06-02T20:12:03.518Z
---

# Ad-hoc: find Virtual Worker Prompt Library And Ui Templates in my do

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-02T20:10:51.625Z
- **Finished:** 2026-06-02T20:12:03.518Z
- **Title:** Ad-hoc: find Virtual Worker Prompt Library And Ui Templates in my do

## Inputs
```json
{
  "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\"\n  User: \"find Hon. P. Mavunga-ZIMRA-Invoice (1) in my downloads and summarize the document\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): find Virtual Worker Prompt Library And Ui Templates in my downloads and summarize it\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "find Virtual Worker Prompt Library And Ui Templates in my downloads and summarize it",
  "save_as_template": true,
  "threadContextUsed": true,
  "priorTurnsUsed": 2,
  "assistantTurnUsed": true,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Plan
Locate the file in Downloads, read it, and generate a summary.

### Steps
1. ✓ Looking in your downloads for "Virtual Worker Prompt Library And Ui Templates" — `fs.find_in` (0.1s)
2. ✓ Reading $step_0.matches.0.path — `fs.read_external` (0.2s)
3. ✓ Thinking about it — `ollama.generate` (29.8s) · model `openai/gpt-oss-20b:free`
4. ✓ Quality-checking the draft — `quality.check` (5.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
5. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Virtual Worker Prompt Library & UI Templates – Summary Report  

**Document:** *Virtual Worker Prompt Library And Ui Templates.pdf* (v1.0)  
**Location:** `C:\Users\Arthur Magaya\Downloads`  
**Size:** 33 273 bytes – 7 pages  
**Last modified:** 2026‑02‑19 09:51:13 Z  

### 1. Overview  
The file defines the core architecture and deliverables for the Virtual Worker Platform (VWP). It is split into two main parts: a **Prompt Library** that specifies how the AI layer should interpret and respond to user requests, and a set of **UI Code Templates** that provide reusable React/TypeScript components for interacting with the VWP API. The VWP is intended as a Minimum Viable Product (MVP) covering five functional domains: Finance, Technical Ops, Sales & Marketing, Logistics, and Developer. The architecture follows an AI → Governance → n8n Execution → Audit flow.  

### 2. Prompt Library (Part 1)  
| Element | Purpose | Key Requirements |
|---------|---------|------------------|
| **Global System Prompt** | Central AI interpreter | • Classify user requests into approved templates.<br>• Extract structured JSON inputs matching the schema.<br>• Never execute actions or fabricate data.<br>• Return `needs_clarification` or `no_match` when appropriate.<br>• Output must be valid JSON only. |
| **Classification Prompt Template** | Guides template selection | • Choose one best‑matching template.<br>• Provide confidence score (0–1).<br>• Return `"no_match"` if none fit. |
| **Domain Prompts** | Domain‑specific templates | • Finance: *Expense Summary Generator* (date range, receipt IDs, format).<br>• Technical Ops: *Incident Summary Generator* (system, time window, severity, services).<br>• Sales & Marketing: *Draft Outreach Email* (recipient, company, value proposition, CTA).<br>• Logistics: *Shipment Status Query* (tracking number, carrier).<br>• Developer: *Pull Request Summary* (summary, files changed, risk, review flag). |

### 3. UI Code Templates (Part 2)  
The UI layer is built with React + TypeScript and follows an API‑first approach. Key components include:  

| Component | Functionality |
|-----------|---------------|
| **Task Submission** | Textarea + submit button that POSTs to `/api/v1/tasks`. |
| **Approval Queue** | Displays pending approvals with Approve/Reject actions. |
| **Task Status Dashboard** | Table listing tasks (ID, status, owner, created‑at). |
| **Authentication** | JWT‑based, workspace‑scoped access. |

### 4. Governance & Execution Flow  
1. **AI Layer** receives a user request and classifies it using the global prompt.  
2. **Governance** validates the request against risk and approval constraints.  
3. **n8n Execution** orchestrates the workflow, invoking downstream services.  
4. **Audit** captures all actions for compliance and traceability.  

### 5. Version & Scope  
*Version:* 1.0  
*Scope:* MVP across the five domains listed above.  

---

**Next steps**  
- Review the domain prompts to ensure all required JSON schemas are available.  
- Integrate the UI templates into the existing front‑end stack.  
- Set up audit logging per the governance guidelines.  

[1] fs.find_in result – file location  
[2] fs.read_external – extracted content  
[3] ollama.generate – summarized table view

<details><summary>Log</summary>

```
[2026-06-02T20:10:51.626Z] Handling this myself — I'm at least as free as my peers (0 vs 0 jobs in progress).
[2026-06-02T20:10:51.626Z] Working as Clawbot — AI agent operator.
[2026-06-02T20:10:51.639Z] Thinking about the best approach…
[2026-06-02T20:10:51.718Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-02T20:11:01.249Z] Plan ready: 3 steps — Locate the file in Downloads, read it, and generate a summary..
[2026-06-02T20:11:01.254Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-06-02T20:11:01.254Z] Step 1 of 3: Looking in your downloads for "Virtual Worker Prompt Library And Ui Templates"
[2026-06-02T20:11:01.324Z] Step 2 of 3: Reading $step_0.matches.0.path
[2026-06-02T20:11:01.506Z] Step 3 of 3: Thinking about it
[2026-06-02T20:11:31.347Z] All sub-agents finished in 30.1s.
[2026-06-02T20:11:31.354Z] Thinking with openai/gpt-oss-20b:free (~5 158 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-02T20:11:57.733Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-02T20:11:57.797Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-02T20:11:57.797Z] Step 5 of 5: Security-scanning the note
[2026-06-02T20:11:57.797Z] Step 4 of 5: Quality-checking the draft
[2026-06-02T20:12:03.502Z] Wave 1 finished in 5.7s.
[2026-06-02T20:12:03.502Z] All sub-agents finished in 5.7s.
[2026-06-02T20:12:03.502Z] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-02T20:12:03.514Z] Saved this workflow as a reusable template: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool.
[2026-06-02T20:12:03.514Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-06-02T20:12:03.517Z] Filed to your second brain → 0-Inbox/202606022012-curated-find-virtual-worker-prompt-library-and-ui-templates-in-my-do.md.
```
</details>
