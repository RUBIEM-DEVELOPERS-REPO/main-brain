---
title: "Virtual Worker Technical Design"
imported_from: "C:/Users/Arthur Magaya/Documents/virtual-worker-/backend/Virtual Worker Technical Design.pdf"
imported_at: 2026-05-26T19:08:14.2538214+02:00
created: 2026-05-26
kind: pdf
size_kb: 39.5
tags: [imported, documents, bulk-import]
---

# Virtual Worker Technical Design

Imported from `C:\Users\Arthur Magaya\Documents\virtual-worker-\backend\Virtual Worker Technical Design.pdf` on 2026-05-26. Original size 39.5 KB.

The full file is filed in your vault at [[_imports/documents/virtual-worker-/backend/Virtual Worker Technical Design.pdf]] — open it in Obsidian for the content.

## Source provenance
- Original path: `C:\Users\Arthur Magaya\Documents\virtual-worker-\backend\Virtual Worker Technical Design.pdf`
- Imported by: bulk-import script (documents)
- Original preserved on the PC.

## Excerpt (first 6 000 chars, pdf) — 13 pages

Technical Design Document (TDD)
System: Virtual Worker Platform (VWP)
Stack: n8n + Hugging Face + Postgres + Object Storage
1. Document Control
Document Title: Technical Design Document (TDD)
System Name: Virtual Worker Platform (VWP)
Version: 0.1
Date:    17/02/2026
Status: Draft for build kickoff
2. Technical Goals
Deliver a secure multi-tenant platform with deterministic execution via n8n.
Implement a template-constrained AI interpretation layer using Hugging Face.
Enforce governance: RBAC, policy rules, approvals, and immutable audit.
Provide production-grade reliability: idempotency, retries, timeouts, observability.
Create a reusable foundation for adding templates/integrations with minimal code.
3. Physical Architecture & Deployment Topology
3.1 Environments
DEV:   developer testing; relaxed integrations; synthetic data
UAT:   stakeholder testing; representative integrations; test tenants
PROD:    strict governance; monitored; backups and DR enabled
3.2 Service Topology (Containerized)
Core Services
vwp-api (Backend)
REST API, auth, RBAC, task lifecycle, policy engine
Orchestrates HF inference and n8n execution
• 
• 
• 
• 
• 
1. 
2. 
3. 
4. 
5. 
• 
• 
• 
1. 
2. 
3. 
1

vwp-ui (Frontend)
Task intake, approvals, templates, dashboards
n8n
Workflow automation engine
Runs in queue mode for scale
PostgreSQL
Primary relational store
Redis    (recommended)
n8n queue + optional backend job queue
Object Storage (S3 compatible)
Attachments & generated artifacts
Observability Stack
Logs (e.g., OpenSearch/ELK)
Metrics (Prometheus/Grafana)
Tracing (OpenTelemetry)
Secrets / KMS
Vault/KMS for backend secrets
n8n encrypted credential store for connector credentials
3.3 Network & Security Segmentation
Public: vwp-ui,  vwp-api (TLS)
Private: Postgres, Redis, n8n internal endpoints
Egress controls: only to approved integration domains
WAF/rate limiting in front of vwp-api
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. 
13. 
14. 
15. 
16. 
17. 
18. 
19. 
20. 
21. 
• 
• 
• 
• 
2

4. Runtime Components
4.1 Backend (vwp-api)
Responsibilities
Multi-tenant enforcement
Auth + RBAC
Task lifecycle state machine
Template registry + schema validation
AI gateway (HF calls)
Policy engine (approval rules, rate limits)
n8n bridge (execute, callback, idempotency)
Audit/event emitter
Suggested Modules
auth
workspaces
users
templates
tasks
runs
approvals
policies
ai
audit
notifications
storage
4.2 AI Gateway (HF)
Interaction Model
vwp-api calls HF endpoints to:
classify
extract entities to JSON
summarize attachments (optional)
Hard Rules
HF output must be JSON only
Validate output via JSON Schema
Store hashes of AI outputs for audit
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
3

4.3 Execution Engine (n8n)
Standard Workflow Contract
All n8n workflows must: - Accept a standard payload - Enforce idempotency - Call back to vwp-api for: - run
started - approval request - run completed - run failed
5. Data Model (Logical → Physical)
5.1 Core Tables (Postgres)
workspaces
id (uuid, pk)
name
status (active/suspended)
created_at, updated_at
users
id (uuid, pk)
workspace_id (fk)
email (unique per workspace)
name
status
created_at
roles
id (uuid, pk)
name (admin/member/approver/viewer)
user_roles
user_id (fk)
workspace_id (fk)
role_id (fk)
primary key (user_id, workspace_id, role_id)
templates
id (uuid, pk)
workspace_id (fk) // allow per-tenant templates; optional global templates later
name
description
risk_level (low/med/high)
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
4

active_version_id (fk -> template_versions.id)
created_by
created_at, updated_at
template_versions
id (uuid, pk)
template_id (fk)
version (int)
input_schema_json (jsonb) // JSON Schema
approval_policy_json (jsonb)
allowed_actions_json (jsonb)
n8n_workflow_id (text)
n8n_workflow_version (text)
changelog (text)
created_by
created_at
tasks
id (uuid, pk)
workspace_id (fk)
created_by (fk -> users.id)
title
description
priority (low/med/high)
status (created/interpreting/needs_clarification/planned/awaiting_approval/running/completed/
failed/cancelled)
selected_template_id (fk)
selected_template_version_id (fk)
extracted_inputs (jsonb)
risk_flags (jsonb)
due_at (timestamp)
created_at, updated_at
runs
id (uuid, pk)
task_id (fk)
workspace_id (fk)
template_version_id (fk)
status (queued/running/paused/completed/failed)
n8n_workflow_id
n8n_execution_id
idempotency_key (text, unique)
attempt (int)
started_at, finished_at
outputs (jsonb)
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
5

error_code (text)
error_details (jsonb)
approvals
id (uuid, pk)
workspace_id (fk)
task_id (fk)
run_id (fk)
scope (task|step)
step_key (text, nullable)
requested_by (fk -> users.id or service)
requested_at
status (pending/approved/rejected/expired)
decided_by (fk -> users.id)
decided_at
decision_notes (text)
audit_events
id (uuid, pk)
workspace_id (fk)
actor_type (user|service)
actor_id (uuid, nullable)
action (text)
object_type (text)
object_id (uuid)
timestamp
payload_redacted (jsonb)
payload_hash (text)
attachments
id (uuid, pk)
workspace_id (fk)
task_id (fk)
filename
content_type
storage_url
size_bytes
sha256
uploaded_by
uploaded_at
artifacts
id (uuid, pk)
workspace_id (fk)
run_id (fk)
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
6

name
type
storage_url
sha256
created_at
5.2 Indexing & Tenant Safety
Always index by workspace_id on high-volume tables (tasks, runs, audit_events, attachments)
Composite indexes:
tasks(workspace_id, status, created_at)
runs(workspace_id, status, started_at)
approvals(workspace_id, status, requested_at)
Enforce row-level tenant scoping in application layer; optionally enable Postgres RLS later.
6. API Design (vwp-api)
6.1 API Principles
Versioned: /api/v1/...
Workspace scoping: derived from auth context (do not accept workspace_id from client unless admin
switching workspaces)
Val
