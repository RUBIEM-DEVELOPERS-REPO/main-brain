---
title: "Prompt Library + Implementation Plan V3 (backend Is System Brain)"
imported_from: "C:/Users/Arthur Magaya/Documents/virtual-worker-/Prompt Library + Implementation Plan V3 (backend Is System Brain).pdf"
imported_at: 2026-05-26T19:08:14.2538214+02:00
created: 2026-05-26
kind: pdf
size_kb: 133.1
tags: [imported, documents, bulk-import]
---

# Prompt Library + Implementation Plan V3 (backend Is System Brain)

Imported from `C:\Users\Arthur Magaya\Documents\virtual-worker-\Prompt Library + Implementation Plan V3 (backend Is System Brain).pdf` on 2026-05-26. Original size 133.1 KB.

The full file is filed in your vault at [[_imports/documents/virtual-worker-/Prompt Library + Implementation Plan V3 (backend Is System Brain).pdf]] — open it in Obsidian for the content.

## Source provenance
- Original path: `C:\Users\Arthur Magaya\Documents\virtual-worker-\Prompt Library + Implementation Plan V3 (backend Is System Brain).pdf`
- Imported by: bulk-import script (documents)
- Original preserved on the PC.

## Excerpt (first 6 000 chars, pdf) — 8 pages

Prompt Library + Implementation Plan v3
(Backend is System Brain)
This version is aligned to: - Your diagram: UI → Backend Business Logic (main) ↔ DB/Memory +
Risk/Guardrails + AI ↔ n8n Templates - Your requirement: backend must know the whole system,
be aware of all n8n templates, clean/contextualize UI prompts into n8n-ready payloads, and enforce
guardrails.
1) Architecture principles (non‑negotiables)
1) Backend is the only component the UI talks to. 2) Backend is the only component that triggers
n8n. 3) AI is a controlled interpreter, never an executor: - selects a template - extracts schema-valid
inputs - flags risk 4) n8n receives validated structured inputs, never raw UI text. 5) Every run is
audited,  idempotent, and    policy‑checked.
2) System flow (matching your diagram)
Step 1 — UI → Backend: Task Intake
UI sends: -  user_input  (free text) -  attachments[]  (optional) -  session_id?  (optional) -
intent_hint? (optional dropdown) - workspace_id, user_id
Backend stores: - tasks row - conversation_messages row (raw)
Backend returns: - task_id - session_id (created if missing) - initial status
Step 2 — Backend ↔ DB/Memory: Context Retrieval
Backend loads: - session_summary - last N messages (bounded) - user/workspace preferences
Backend creates a Context Pack: 
{
"session_summary":"...",
"recent_messages": ["..."],
"known_entities": {"accounts":[],"vendors":[],"dates":[],"amounts":[]},
"constraints": ["..."],
1

"user_role":"..."
}
Step 3 — Backend ↔ n8n Template Registry: Template Awareness
Backend maintains a Template Registry that mirrors n8n: - template_id - n8n_workflow_id -
version - inputs_schema_json - outputs_schema_json - risk_level - required_approval
- allowed_roles
Sync options: - Pull: scheduled fetch from n8n API - Push: n8n publishes manifest on update
Backend always has an in-memory cache for fast selection.
Step 4 — Backend: UI Prompt Cleaning + Contextualization
Backend transforms raw UI text into a stable, execution-safe Task Spec.
4A) Cleaning (sanitization)
strip UI artifacts (labels, buttons, repeated content)
remove prompt-injection strings (e.g., “ignore previous instructions”)
normalize whitespace
detect language
enforce max lengths
escape/normalize quotes and special characters
4B) Contextualization
add session summary relevant to the goal
add business constraints from role/workspace
add template catalog summary (names + short descriptions)
Output: Normalized Task Spec
{
"task_goal":"...",
"requested_outcome":"...",
"must_have": ["..."],
"nice_to_have": ["..."],
"entities": {"dates":[],"accounts":[],"currencies":[],"amounts":[]},
"attachments": ["..."],
"context": {"session_summary":"...","snippets":["..."]}
}
• 
• 
• 
• 
• 
• 
• 
• 
• 
2

Step 5 — Backend → AI (HF): Interpretation Pipeline
Backend runs AI in a fixed order:
1) Template Selection: choose 1 best template from Template Registry 2) Schema Extraction:
produce inputs that match the chosen template schema exactly 3) Risk Flagging: identify risk flags to
feed backend policy engine
AI is only allowed to output JSON (strict schema).
Step 6 — Backend Guardrails + Policy Engine (authoritative)
Before executing, backend enforces guardrails:
Guardrail checks
1) Schema validation (hard fail if invalid) 2) RBAC/ABAC (is user allowed to run this template?) 3)
Risk-based approvals (risk level and flags) 4) PII & Sensitive data (redaction/storage rules) 5)
Idempotency (prevent duplicate execution) 6) Rate limiting (abuse controls) 7) Audit logging
(every decision logged)
Resulting states
needs_clarification
blocked
needs_approval
approved_to_execute
Step 7 — Backend → n8n: Execute Workflow
Backend builds the n8n payload (never raw UI): 
{
"workspace_id":"...",
"task_id":"...",
"run_id":"...",
"template_id":"...",
"template_version":"...",
"inputs": {"...":"..."},
"idempotency_key":"...",
"callback_urls": {
"started":"...",
"approval_request":"...",
"completed":"...",
"failed":"..."
• 
• 
• 
• 
3

}
}
Step 8 — n8n → Backend: Callbacks + Results
Backend receives: - status updates - artifacts - errors
Backend: - stores outputs - updates audit trail - updates session memory (append + summary refresh)
3) Prompt Library v3 (backend-orchestrated)
3.1 Global rules (single system prompt)
SYS_INTERPRETER_V3 - You are an interpreter layer. - You do not execute tools. - You do not invent fields. -
You return ONLY valid JSON. - If required fields are missing: ask for clarification by returning missing_fields.
3.2 Prompt: Context Selector
CTX_SELECTOR_V3Purpose: Select the minimal relevant context to pass into downstream prompts.
Input:Context Pack + Task Spec
Output schema:
{
"status":"ok",
"context_to_use": {
"summary":"string",
"snippets": ["string"]
},
"notes":"string"
}
3.3 Prompt: Template Selector (must use Template Registry list)
TPL_SELECTOR_V3Purpose: Pick exactly one template/workflow.
Input:    - task_spec - templates[] (from backend registry) - context_to_use
Output schema:
4

{
"status":"ok",
"selected_template_id":"string",
"confidence": 0.0  ,
"rationale":"string",
"assumptions": ["string"]
}
3.4 Prompt: Schema Extraction (template-specific)
EXT_TEMPLATE_V3Purpose: Extract values into the chosen template’s inputs schema.
Input:    - task_spec - context_to_use - inputs_schema_json
Output schema:
{
"status":"ok",
"confidence": 0.0  ,
"data": {},
"missing_fields": ["string"],
"notes":"string"
}
Rules: - data MUST validate against schema. - If cannot fill required fields → populate missing_fields.
3.5 Prompt: Risk Flagging (advisory)
RISK_FLAGGER_V3Purpose: Identify risk indicators for backend guardrails.
Input:template metadata + extracted inputs + context_to_use
Output schema:
{
"risk_flags": ["string"],
"risk_summary":"string"
}
3.6 Prompt: Clarification Question Builder (only when needed)
CLARIFY_BUILDER_V3Purpose: Turn missing_fields into a minimal question set.
5

Output schema:
{
"status":"needs_clarification",
"questions": [
{"field":"string", "question":"string", "example":"string"}
]
}
3.7 Prompt
