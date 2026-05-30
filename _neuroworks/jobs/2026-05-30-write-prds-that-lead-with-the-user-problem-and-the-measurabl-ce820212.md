---
type: job
title: Write PRDs that lead with the user problem and the measurable outcome
slug: write-prds-that-lead-with-the-user-problem-and-the-measurabl-ce820212
created: 2026-05-30T18:43:13.692Z
jobId: ce820212-931f-478b-b578-b1ef12c7b751
status: succeeded
template: custom-product-manager-write-prds-that-lead-with-the-user-probl
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:31:04.824Z
finishedAt: 2026-05-30T18:43:13.692Z
---

# Write PRDs that lead with the user problem and the measurable outcome

- **Status:** succeeded
- **Template:** custom-product-manager-write-prds-that-lead-with-the-user-probl
- **Started:** 2026-05-30T18:31:04.824Z
- **Finished:** 2026-05-30T18:43:13.692Z
- **Title:** Write PRDs that lead with the user problem and the measurable outcome

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Write PRDs that lead with the user problem and the measurable outcome\nDescription: Persona-derived starter task for \"Priya\"."
}
```

## Plan
Default research plan for: As a Product Manager, write prds that lead with the user problem and the measurable outcome

### Steps
1. ✓ Researching "As a Product Manager, write prds that lead with the user problem and the measura…" — vault + web — `research.deep` (71.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (304.3s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Product Requirement Document (PRD) — Problem‑First, Outcome‑Driven  

**Purpose** – Provide a reusable template that places the user problem at the forefront and defines measurable outcomes, ensuring alignment between user needs, product goals, and business impact.  

### 1. Title & Brief  
- **Feature / Improvement:** *[Insert concise feature name]*  
- **Owner:** Product Manager  
- **Target Release:** *[Quarter / Version]*  

### 2. User Problem (the “Why”)  
| Element | Description |
|---------|-------------|
| **Who** | Specific user persona (e.g., “Data‑driven marketer”) |
| **What they’re trying to do** | Core task or goal the user needs to accomplish |
| **Pain point** | Concrete evidence of friction, loss, or inefficiency (e.g., “spends 30 minutes daily stitching reports from three tools”) |
| **Impact** | Quantified cost or risk (e.g., “reduces campaign‑launch speed by 15 %”) |

*Begin the PRD with this narrative to frame the entire effort* [1][vault:0-Inbox/202605291953-research-as-a-product-manager-write-prds-that-lead-with-the-user-prob.md].

### 3. Desired Outcome (the “What Success Looks Like”)  
| Metric | Current Baseline | Target Goal | Measurement Method |
|--------|------------------|------------|--------------------|
| **Primary KPI** (e.g., time‑to‑complete, conversion lift) | 30 min/report | ≤ 10 min/report (‑ 66 % reduction) | Automated usage logs |
| **Secondary KPI** (e.g., NPS, error rate) | NPS 45 | NPS ≥ 60 | Quarterly survey |
| **Business Impact** (e.g., revenue, cost saving) | $0 | $50 k/quarter saved | Financial reporting |

### 4. Acceptance Criteria  
- All metrics are instrumented and data collection is verified before release.  
- User testing confirms the pain point is eliminated or reduced to the target level.  
- Documentation and training materials are updated to reflect the new workflow.  

### 5. Risks & Mitigations  
- **Risk:** Inaccurate baseline data. **Mitigation:** Conduct a pre‑launch audit of analytics.  
- **Risk:** Scope creep adding unrelated features. **Mitigation:** Tie every scope item to a metric in the Desired Outcome table.  

### 6. Review & Sign‑off  
- **Product Manager:** ___________________  
- **Engineering Lead:** ___________________  
- **UX Lead:** ___________________  
- **Stakeholder:** ___________________  

*This template enforces a problem‑first narrative and ties every requirement to a measurable outcome, facilitating clear prioritisation and objective post‑launch evaluation.*   [3]

<details><summary>Log</summary>

```
[2026-05-30T18:31:04.855Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:31:05.848Z] Thinking about the best approach…
[2026-05-30T18:31:05.904Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:31:16.805Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:31:16.805Z] Plan ready: 1 step — Default research plan for: As a Product Manager, write prds that lead with the user problem and the measurable outcome.
[2026-05-30T18:31:16.855Z] Step 1 of 1: Researching "As a Product Manager, write prds that lead with the user problem and the measura…" — vault + web
[2026-05-30T18:32:28.113Z] All sub-agents finished in 71.3s.
[2026-05-30T18:32:28.115Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:32:28.130Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:32:28.131Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:32:28.131Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:37:28.137Z] Wave 1 finished in 300.0s.
[2026-05-30T18:37:28.137Z] All sub-agents finished in 300.0s.
[2026-05-30T18:37:28.145Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:42:28.192Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T18:42:32.469Z] All sub-agents finished in 304.3s.
[2026-05-30T18:42:32.492Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T18:42:32.517Z] Thinking with openai/gpt-oss-120b:free (~3 376 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:43:13.239Z] quality rescue improved score: 0 → 0.93; using the rescued draft
[2026-05-30T18:43:13.239Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:43:13.692Z] Vault commit: done.
```
</details>
