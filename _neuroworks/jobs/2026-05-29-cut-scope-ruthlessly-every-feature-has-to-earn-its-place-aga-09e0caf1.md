---
type: job
title: Cut scope ruthlessly — every feature has to earn its place against the next-b…
slug: cut-scope-ruthlessly-every-feature-has-to-earn-its-place-aga-09e0caf1
created: 2026-05-29T09:40:17.897Z
jobId: 09e0caf1-ae22-4a8f-beb0-d91707800d0e
status: succeeded
template: custom-product-manager-cut-scope-ruthlessly-every-feature-has-t
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:39:08.808Z
finishedAt: 2026-05-29T09:40:17.897Z
---

# Cut scope ruthlessly — every feature has to earn its place against the next-b…

- **Status:** succeeded
- **Template:** custom-product-manager-cut-scope-ruthlessly-every-feature-has-t
- **Started:** 2026-05-29T09:39:08.808Z
- **Finished:** 2026-05-29T09:40:17.897Z
- **Title:** Cut scope ruthlessly — every feature has to earn its place against the next-b…

## Plan
Generate a concise scope-cutting memo using the LLM.

### Steps
1. ✓ Thinking about it — `ollama.generate` (27.9s) · model `openai/gpt-oss-20b:free`
    > Generate the requested scope-cutting memo.
2. ✓ Quality-checking the draft — `quality.check` (12.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.8s)
    > auto-injected: quality score=0.64 (pass=true) — peer review for a second opinion

## Answer
## Scope‑Cutting Memo – FY 2026 Q4 Release  
**Prepared by:** Product Management  
**Date:** 29 May 2026  

### 1. Rationale for Scope Discipline  
- **Impact focus**: Every backlog item competes for limited engineering, design, and marketing bandwidth.  
- **Speed to market**: A lean backlog enables faster releases, earlier customer feedback, and quicker revenue.  
- **Risk management**: Removing low‑value, high‑risk features reduces the chance of costly pivots or failures.  
- **Stakeholder trust**: Transparent, data‑driven decisions build confidence in the product vision.  

[1]  

### 2. Evaluation Framework  
All candidate features are scored on a 0–5 scale using the following weighted criteria (weights are illustrative; keep total weight consistent across features).  

| Criterion | Definition | Weight |
|-----------|------------|--------|
| **Business Value** | Revenue potential, margin, or strategic partnership impact | 5 |
| **Customer Impact** | Direct benefit to user satisfaction, retention, or acquisition | 4 |
| **Technical Risk** | Complexity, legacy constraints, or unknowns that could stall delivery | 3 |
| **Cost (USD)** | Development, ops, support, or licensing expense | 3 |
| **Time to Market** | Estimated effort in person‑weeks | 2 |
| **Strategic Fit** | Alignment with long‑term roadmap, brand, or regulatory goals | 4 |
| **Opportunity Cost** | What else could be built with the same resources? | 3 |

> **Tip:** Keep the total weight consistent across all features to enable fair comparison.  

[1]  

### 3. Decision Process (5‑Step)  
1. **Feature Inventory** – List every candidate feature.  
2. **Score Each Feature** – Apply the weighted criteria.  
3. **Calculate Weighted Score** – Multiply each criterion score by its weight and sum.  
4. **Rank Features** – Order by total weighted score (highest first).  
5. **Cut the Low‑Scorers** – Remove features below the threshold that would exceed the available capacity or dilute focus.  

[1]  

### 4. Immediate Actions  
- **Populate the inventory** with all pending features for Q4.  
- **Assign scorers** from cross‑functional teams to ensure objective weighting.  
- **Set a cut‑off threshold** based on current capacity (e.g., top 60 % of weighted score).  
- **Communicate decisions** transparently to stakeholders, citing the criteria and scores.  

### 5. Expected Outcomes  
- A backlog that delivers the highest business and customer value within the available resources.  
- Reduced technical risk exposure and faster time to market.  
- Clear justification for every feature that remains, reinforcing stakeholder confidence.  

---  

**Next Steps:** Convene the scoring workshop by 5 June 2026.  

---  

*Assumed: The memo is intended for internal product and engineering leadership to guide scope decisions for the FY 2026 Q4 release.*

<details><summary>Log</summary>

```
[2026-05-29T09:39:08.814Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:39:09.750Z] Thinking about the best approach…
[2026-05-29T09:39:09.772Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:39:17.271Z] Plan ready: 1 step — Generate a concise scope-cutting memo using the LLM..
[2026-05-29T09:39:17.274Z] Step 1 of 1: Thinking about it
[2026-05-29T09:39:45.199Z] All sub-agents finished in 27.9s.
[2026-05-29T09:39:45.204Z] Thinking with openai/gpt-oss-20b:free (~2 485 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:40:02.299Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:40:02.302Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:40:02.302Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:40:02.302Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:40:15.094Z] Wave 1 finished in 12.8s.
[2026-05-29T09:40:15.094Z] All sub-agents finished in 12.8s.
[2026-05-29T09:40:15.098Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:40:17.897Z] All sub-agents finished in 2.8s.
```
</details>
