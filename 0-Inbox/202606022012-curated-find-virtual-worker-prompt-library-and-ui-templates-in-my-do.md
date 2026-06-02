---
title: "Curated: find Virtual Worker Prompt Library And Ui Templates in my downloads and summarize it"
created: 2026-06-02
source: clawbot-curation
tags: [curated, agent-output]
persona: clawbot
quality_score: 0.93
factuality_risk: 0.10
citation_coverage: 1.00
---

# find Virtual Worker Prompt Library And Ui Templates in my downloads and summarize it

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



---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.93, 0 vault refs, 0 web sources, 3 GitHub refs.*
