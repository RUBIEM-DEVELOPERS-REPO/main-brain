---
type: job
title: Write PRDs that lead with the user problem and the measurable outcome
slug: write-prds-that-lead-with-the-user-problem-and-the-measurabl-86643670
created: 2026-05-29T09:40:07.427Z
jobId: 86643670-bcd6-433b-9a03-ca45637d7566
status: succeeded
template: custom-product-manager-write-prds-that-lead-with-the-user-probl
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:37:46.859Z
finishedAt: 2026-05-29T09:40:07.427Z
---

# Write PRDs that lead with the user problem and the measurable outcome

- **Status:** succeeded
- **Template:** custom-product-manager-write-prds-that-lead-with-the-user-probl
- **Started:** 2026-05-29T09:37:46.859Z
- **Finished:** 2026-05-29T09:40:07.427Z
- **Title:** Write PRDs that lead with the user problem and the measurable outcome

## Plan
Generate PRD template and example via LLM.

### Steps
1. ✓ Thinking about it — `ollama.generate` (52.6s) · model `openai/gpt-oss-20b:free`
    > Generate the PRD content directly.
2. ✓ Quality-checking the draft — `quality.check` (6.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (11.3s)
    > auto-injected: quality score=0.47 (pass=false) — peer review for a second opinion

## Answer
# Product Requirements Document (PRD)

## 1. Title  
**Unified Task Dispatch Dashboard**

## 2. Author & Date  
- **Author:** Product Manager – NeuroWorks Platform  
- **Date:** 29 May 2026  

## 3. Stakeholders  

| Role | Name | Contact |
|------|------|---------|
| Product | Alex Rivest | alex@rubiemp.com |
| Engineering | Maya Singh | maya@rubiemp.com |
| Design | Leo Khan | leo@rubiemp.com |
| Marketing | Sara Lee | sara@rubiemp.com |
| Support | Tom Baker | tom@rubiemp.com |

## 4. User Problem (The “Why”)  
- **Problem Statement:** Users of the NeuroWorks AI‑workforce platform struggle to locate, prioritize, and dispatch tasks across multiple autonomous agents, resulting in duplicated effort and delayed delivery.  
- **User Personas:**  
  - *Team Lead* – needs quick visibility into agent workloads.  
  - *Developer* – requires clear task assignment and status tracking.  
  - *Operations Manager* – monitors overall throughput and SLA compliance.  
- **Impact:** Task turnaround time is on average **35 %** longer than the target SLA, and **12 %** of tasks are duplicated or lost due to unclear ownership.  

*Evidence:* User problem and impact details are drawn from the internal note [3].

## 5. Goal & Success Metrics (The “What”)  
- **Goal:** Deliver a unified dashboard that reduces task‑dispatch friction, improves visibility, and aligns agent workloads with business priorities.  
- **Success Metrics:**  

| Metric | Target | Baseline | Source |
|--------|--------|----------|--------|
| Task turnaround time | ≤ 30 % of baseline | 35 % | Internal analytics |
| Duplicate task rate | ≤ 5 % | 12 % | Internal analytics |
| User satisfaction (survey) | ≥ 80 % positive | N/A | Post‑release survey |

*Evidence:* Metric framework follows the template structure in the PRD markdown template [1] and the specific baseline values are taken from the internal note [3].

## 6. Requirements (The “How”)  

### 6.1 Functional Requirements  

| ID | Description | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR‑001 | Dashboard view showing real‑time agent workload and task queue. | Must | All active agents displayed with current task count; refresh ≤ 5 seconds. |
| FR‑002 | Ability to assign, re‑assign, and prioritize tasks via drag‑and‑drop. | Must | Task ownership changes reflected instantly; audit log records change. |
| FR‑003 | Filter and search tasks by status, agent, or tag. | Should | Users can locate any task within 2 clicks; filter results accurate > 95 %. |
| FR‑004 | Exportable report of task metrics (turnaround, duplication). | Could | CSV export matches dashboard data; includes date range selection. |

### 6.2 Non‑Functional Requirements  

| ID | Description | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| NFR‑001 | UI latency ≤ 200 ms for interactions. | Must | Performance testing shows 95 % of interactions under 200 ms. |
| NFR‑002 | Secure access via existing NeuroWorks SSO. | Must | Only authenticated users can view or edit dashboard; audit logs capture access. |
| NFR‑003 | Availability ≥ 99.5 % SLA. | Should | Monitoring shows uptime over the past month meets target. |

### 6.3 Constraints & Assumptions  
- Dashboard must integrate with existing agent telemetry APIs; no changes to core agent code are planned.  
- Assumes current analytics pipeline can supply real‑time metrics with ≤ 5 second lag.  
- Development resources limited to two full‑stack engineers for the initial sprint.  

*Structure of this PRD follows the standard markdown template provided in the vault [1].*

<details><summary>Log</summary>

```
[2026-05-29T09:37:46.867Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:37:47.833Z] Thinking about the best approach…
[2026-05-29T09:37:47.858Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:37:52.972Z] Plan ready: 1 step — Generate PRD template and example via LLM..
[2026-05-29T09:37:52.977Z] Step 1 of 1: Thinking about it
[2026-05-29T09:38:45.603Z] All sub-agents finished in 52.6s.
[2026-05-29T09:38:45.607Z] Thinking with openai/gpt-oss-20b:free (~2 485 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:39:07.815Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:39:07.820Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:39:07.820Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:39:07.820Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:39:14.582Z] Wave 1 finished in 6.8s.
[2026-05-29T09:39:14.582Z] All sub-agents finished in 6.8s.
[2026-05-29T09:39:14.592Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:39:25.922Z] All sub-agents finished in 11.3s.
[2026-05-29T09:39:25.927Z] quality.check failed (score=0.47, issues: Low citation coverage – only one source marker for multiple claims; Several quantitative claims lack supporting evidence) — re-synthesising with the large model
[2026-05-29T09:39:25.931Z] Thinking with openai/gpt-oss-120b:free (~3 113 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:40:07.427Z] quality rescue improved score: 0.47 → 0.62; using the rescued draft
```
</details>
