---
type: job
title: Review IaC for blast radius, drift risk, and reversibility
slug: review-iac-for-blast-radius-drift-risk-and-reversibility-a030b6c2
created: 2026-05-29T20:56:31.067Z
jobId: a030b6c2-5d4c-43a2-a3b8-73c936fb4034
status: succeeded
template: custom-devops-sre-review-iac-for-blast-radius-drift-risk-a
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:53:51.164Z
finishedAt: 2026-05-29T20:56:31.066Z
---

# Review IaC for blast radius, drift risk, and reversibility

- **Status:** succeeded
- **Template:** custom-devops-sre-review-iac-for-blast-radius-drift-risk-a
- **Started:** 2026-05-29T20:53:51.164Z
- **Finished:** 2026-05-29T20:56:31.066Z
- **Title:** Review IaC for blast radius, drift risk, and reversibility

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Review IaC for blast radius, drift risk, and reversibility\nDescription: Persona-derived starter task for \"Devon\"."
}
```

## Plan
Default research plan for: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility.

Context: Role: Custom
Title: Review IaC for blast radius, drift risk, and reversibility
Description: Persona-derived starter task for "Devon"

### Steps
1. ✓ Researching "As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility.

…" — vault + web — `research.deep` (48.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (24.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✗ Asking a peer to review the draft — `peer.review` (8.8s)
    > auto-injected: quality score=0.63 (pass=false) — peer review for a second opinion
    error: review HTTP 503

## Answer
## IaC Review – Blast Radius, Drift Risk, and Reversibility  

**Blast radius** – Assess the scope of impact for any change.  
- Identify all dependent resources (VPCs, security groups, IAM roles, downstream services).  
- Enforce least‑privilege and resource‑scoping via tags or naming conventions to limit unintended exposure.  
- Execute a dry‑run/plan (`terraform plan`, `pulumi preview`) and verify that the diff touches only the intended assets.  
- For high‑impact updates, adopt canary or blue‑green deployment patterns to contain failures.  

**Drift risk** – Prevent divergence between the declared IaC state and the live environment.  
- Prefer immutable infrastructure; replace resources rather than modify them in place.  
- Schedule regular state reconciliation (`terraform refresh`, `pulumi up --refresh`) and generate alerts on detected drift.  
- Block ad‑hoc console changes with policy‑as‑code tools (OPA, Sentinel) to enforce that all modifications flow through the IaC pipeline.  
- Store the IaC state in a secure, version‑controlled backend (e.g., S3 with DynamoDB locking) to ensure a single source of truth.  

**Reversibility** – Ensure that any change can be rolled back safely.  
- Keep all change sets versioned and retain previous manifests for quick re‑apply.  
- Validate that rollback procedures are automated and tested (e.g., `terraform apply -target=...` for specific resources).  
- Document dependencies and ordering so that a rollback does not leave orphaned resources or broken links.  

_This checklist reflects standard industry best‑practice principles for IaC governance._  

*Assumed: the audience is a DevOps/SRE team needing a concise, actionable review framework.*

<details><summary>Log</summary>

```
[2026-05-29T20:53:51.173Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:53:51.175Z] Thinking about the best approach…
[2026-05-29T20:53:51.227Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:53:54.741Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:53:54.741Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility.

Context: Role: Custom
Title: Review IaC for blast radius, drift risk, and reversibility
Description: Persona-derived starter task for "Devon".
[2026-05-29T20:53:54.746Z] Step 1 of 1: Researching "As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility.

…" — vault + web
[2026-05-29T20:54:43.078Z] All sub-agents finished in 48.3s.
[2026-05-29T20:54:43.086Z] Thinking with openai/gpt-oss-20b:free (~2 647 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:54:44.462Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T20:54:50.567Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-29T20:54:50.567Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:54:50.570Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:54:50.570Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:54:50.570Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:55:14.608Z] Wave 1 finished in 24.0s.
[2026-05-29T20:55:14.608Z] All sub-agents finished in 24.0s.
[2026-05-29T20:55:14.613Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:55:15.650Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:55:18.312Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T20:55:23.432Z]   ✗ Asking a peer to review the draft: review HTTP 503
[2026-05-29T20:55:23.433Z] First wave had no successful sub-agents — stopping early. I'll summarise what was tried and why it didn't land.
[2026-05-29T20:55:23.433Z] All sub-agents finished in 8.8s.
[2026-05-29T20:55:23.440Z] quality.check failed (score=0.63, issues: Low citation coverage – no inline citations for the claims made) — re-synthesising with the large model
[2026-05-29T20:55:23.447Z] Thinking with openai/gpt-oss-120b:free (~3 158 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:56:30.597Z] quality rescue improved score: 0.63 → 0.89; using the rescued draft
[2026-05-29T20:56:30.597Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:56:31.066Z] Vault commit: done.
```
</details>
