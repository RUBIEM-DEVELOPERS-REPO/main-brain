---
title: "Vwp Prompt Library Json And Ui Templates Web"
imported_from: "C:/Users/Arthur Magaya/Documents/virtual-worker-/backend/Vwp Prompt Library Json And Ui Templates Web.pdf"
imported_at: 2026-05-26T19:08:14.2538214+02:00
created: 2026-05-26
kind: pdf
size_kb: 71.3
tags: [imported, documents, bulk-import]
---

# Vwp Prompt Library Json And Ui Templates Web

Imported from `C:\Users\Arthur Magaya\Documents\virtual-worker-\backend\Vwp Prompt Library Json And Ui Templates Web.pdf` on 2026-05-26. Original size 71.3 KB.

The full file is filed in your vault at [[_imports/documents/virtual-worker-/backend/Vwp Prompt Library Json And Ui Templates Web.pdf]] — open it in Obsidian for the content.

## Source provenance
- Original path: `C:\Users\Arthur Magaya\Documents\virtual-worker-\backend\Vwp Prompt Library Json And Ui Templates Web.pdf`
- Imported by: bulk-import script (documents)
- Original preserved on the PC.

## Excerpt (first 6 000 chars, pdf) — 15 pages

Virtual Worker Platform (VWP)
Prompt Library (JSON) + UI Templates (HTML/CSS/JavaScript)
Version: 1.0
MVP Domains: Finance, Technical Operations, Sales & Marketing, Logistics, Developer
PART A — PROMPT LIBRARY (JSON)
A1) How to Use
Store these prompt objects in your DB or a prompts/ folder.
Your AI Gateway selects prompts by type + domain + template_id.
Every AI call MUST include:
system_prompt (global rules)
task_prompt (classification/extraction/clarification/etc.)
json_schema (the ONLY valid output shape)
The model MUST respond with valid JSON only.
A2) Global Prompts (applies to all domains)
[
{
"id":"SYS_GLOBAL_001",
"type":"system",
"domain":"global",
"name":"Global System Rules",
"system_prompt":"You are the AI Interpretation Layer of the Virtual Worker 
Platform. Your job is to (1) classify a user request to a single approved 
template, (2) extract structured inputs that match a provided JSON Schema 
exactly, and (3) request clarification when required fields are missing or 
confidence is low. You must never execute actions, never access credentials, 
never invent fields, and never output text outside JSON. Return valid JSON 
only.",
"json_schema": {
"type":"object",
"properties": {
"status": { "type":"string", "enum": ["ok","needs_clarification",
"no_match"] },
"confidence": { "type":"number", "minimum": 0, "maximum": 1 },
• 
• 
• 
• 
• 
• 
• 
1

"data": { "type": ["object","null"] },
"missing_fields": { "type":"array", "items": { "type":"string"} },
"notes": { "type":"string"}
},
"required": ["status","confidence","data","missing_fields","notes"],
"additionalProperties":false
}
},
{
"id":"CLS_GLOBAL_001",
"type":"classification",
"domain":"global",
"name":"Template Classification",
"task_prompt": {
"template":"User task: {user_input}\n\nAvailable templates (id, name, 
description): {templates}\n\nSelect ONE best template id. If none apply, use 
selected_template_id=null and status=no_match. Provide confidence 0..1.\nReturn 
JSON only.",
"variables": ["user_input","templates"]
},
"json_schema": {
"type":"object",
"properties": {
"status": { "type":"string", "enum": ["ok","no_match"] },
"selected_template_id": { "type": ["string","null"] },
"confidence": { "type":"number", "minimum": 0, "maximum": 1 },
"rationale": { "type":"string"}
},
"required": ["status","selected_template_id","confidence","rationale"],
"additionalProperties":false
}
},
{
"id":"CLARIFY_GLOBAL_001",
"type":"clarification",
"domain":"global",
"name":"Ask Only For Missing Fields",
"task_prompt": {
"template":"User task: {user_input}\nSelected template: {template_id}
\nMissing required fields: {missing_fields}\n\nWrite a concise clarification 
request asking ONLY for the missing fields. Return JSON only.",
"variables": ["user_input","template_id","missing_fields"]
},
"json_schema": {
"type":"object",
"properties": {
"status": { "type":"string", "enum": ["needs_clarification"] },
"questions": {
2

"type":"array",
"items": {
"type":"object",
"properties": {
"field": { "type":"string"},
"question": { "type":"string"},
"example": { "type":"string"}
},
"required": ["field","question","example"],
"additionalProperties":false
}
}
},
"required": ["status","questions"],
"additionalProperties":false
}
},
{
"id":"RISK_GLOBAL_001",
"type":"risk_flagging",
"domain":"global",
"name":"Risk Flags From Inputs",
"task_prompt": {
"template":"Given: template_id={template_id} and 
extracted_inputs={inputs}. Identify risk_flags from this list only: 
[external_domain, bulk_operation, high_impact_system, pii_suspected]. Return 
JSON only.",
"variables": ["template_id","inputs"]
},
"json_schema": {
"type":"object",
"properties": {
"risk_flags": { "type":"array", "items": { "type":"string"} },
"risk_summary": { "type":"string"}
},
"required": ["risk_flags","risk_summary"],
"additionalProperties":false
}
}
]
3

A3) NEW: Job Description → Virtual Worker Role (Company “Worker
Profiles”)
Companies can upload a Job Description (JD). The platform converts it into a Worker Profile that: - defines
responsibilities and boundaries - maps responsibilities to approved templates - sets tone/style guidelines
(how the worker communicates) - enforces hard safety constraints (cannot exceed platform governance)
A3.1 Worker Profile JSON Schema (stored per workspace)
{
"worker_profile_schema": {
"type":"object",
"properties": {
"worker_profile_id": { "type":"string"},
"name": { "type":"string"},
"role_title": { "type":"string"},
"department": { "type":"string"},
"seniority": { "type":"string", "enum": ["junior","mid","senior",
"lead"] },
"responsibilities": { "type":"array", "items": { "type":"string"} },
"allowed_domains": { "type":"array", "items": { "type":"string"} },
"restricted_actions": { "type":"array", "items": { "type":"string"} },
"preferred_templates": { "type":"array", "items": { "type":"string"} },
"approval_rules_overrides": {
"type":"object",
"properties": {
"always_require_approval_for": { "type":"array", "items": { "type":
"string"} },
"never_require_approval_for": { "type":"array", "items": { "type":
"string"} }
},
"additionalProperties":false
},
"communication_style": {
"type":"object",
"properties": {
"tone": { "type":"string", "enum": ["professional","friendly",
"direct"] },
"verbosity": { "type":"string", "enum": ["short","medium",
"detailed"] },
"formats": { "type":"array", "items": { "type":"string", "enum":
["email","report","bullet_summary"] } }
},
"required": ["tone","verbosity","formats"],
"additionalProperties":false
}
4

},
"required": ["name","role_title","responsibilities",
"preferred_templates","communication_style"],
"additionalProperties":false
}
}
A3.2 JD-to-Profile Prompt (creates a Worker Profile)
{
"id":"ROLE_FROM_JD_001",
"type":"role_profile_generation",
"domain":"global",
"name":"Job Description → Worker Profile",
"task_prompt": {
"template":
"Job Description text: {jd_text}\n\nApproved templates available in this 
workspace: {templates}\n\nCreate a Worker Profile that matches the JD.\nRules: 
(1) map responsibiliti
