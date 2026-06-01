---
type: job
title: Distinguish correlation from causation explicitly
slug: distinguish-correlation-from-causation-explicitly-e633cf47
created: 2026-06-01T09:49:14.240Z
jobId: e633cf47-8544-40b1-945a-aaaef69d411e
status: succeeded
template: custom-data-analyst-distinguish-correlation-from-causation-e
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:43:35.150Z
finishedAt: 2026-06-01T09:49:14.240Z
---

# Distinguish correlation from causation explicitly

- **Status:** succeeded
- **Template:** custom-data-analyst-distinguish-correlation-from-causation-e
- **Started:** 2026-06-01T09:43:35.150Z
- **Finished:** 2026-06-01T09:49:14.240Z
- **Title:** Distinguish correlation from causation explicitly

## Plan
Generate a concise guide on distinguishing correlation from causation.

### Steps
1. ✓ Thinking about it — `ollama.generate` (41.2s) · model `openai/gpt-oss-20b:free`
    > Generate the explanatory content directly.
2. ✓ Quality-checking the draft — `quality.check` (23.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (232.7s)
    > auto-injected: quality score=0.69 (pass=true) — peer review for a second opinion

## Answer
## Distinguishing Correlation from Causation  
**Audience:** Data Analysts  
**Purpose:** Provide a concise reference for correctly interpreting statistical relationships.

### 1. Core Definitions  
| Aspect | Correlation | Causation |
|--------|-------------|-----------|
| **Definition** | A statistical association between two variables (e.g., higher ice‑cream sales ↔ higher drowning rates). | A directional relationship where a change in one variable *directly* produces a change in another (e.g., smoking → lung cancer). |
| **Directionality** | None implied. | Explicit (cause → effect). |
| **Temporal Order** | Not required. | Cause must precede effect. |
| **Mechanism** | Not necessary. | Requires a plausible mechanism or process. |
| **Statistical Test** | Correlation coefficient, contingency tables, etc. | Regression with controls, experiments, quasi‑experiments, instrumental variables, etc. |
| **Common Pitfall** | Assuming “X causes Y” when only “X is associated with Y.” | Ignoring confounders, reverse causality, or selection bias. |  
[1]

### 2. Recognizing Correlation  
*Compute* Pearson/Spearman r, chi‑square, cross‑tabulations.  
*Interpret* |r| > 0.7 (strong), 0.3–0.7 (moderate), < 0.3 (weak).  
*Visualize* scatter plots, heatmaps, line charts for time series.  
*Check* for outliers, non‑linear patterns, heteroscedasticity.  
**Example**: r = 0.82 between advertising spend and sales indicates a strong positive association; however, higher sales could drive more ad spend (reverse causality).  
[1]

### 3. When Correlation Is Not Causation  
| Scenario | Why It Fails |
|----------|--------------|
| Confounding variables | A third factor influences both variables. |
| Reverse causality | The effect may precede the cause. |
| Selection bias | The sample is not representative of the population. |
| Spurious association | Random chance or data artefacts create a false link. |
[1]

### 4. Establishing Causation  
1. **Temporal precedence** – show the cause occurs before the effect.  
2. **Plausible mechanism** – provide a logical process linking cause to effect.  
3. **Control for confounders** – use multivariate regression, matching, or stratification.  
4. **Experimental or quasi‑experimental design** – randomised trials, natural experiments, instrumental variables.  
5. **Replication** – consistent findings across studies and contexts.  
[1]

### 5. Practical Checklist for Analysts  
- [ ] Verify temporal order before drawing causal claims.  
- [ ] Identify and adjust for potential confounders.  
- [ ] Use appropriate statistical techniques (e.g., regression with controls, IV).  
- [ ] Document assumptions and limitations.  
- [ ] Communicate findings with clear language: “associated with” vs. “causes.”  

---

**Key Takeaway:** Correlation is a necessary but not sufficient condition for causation. Only through rigorous design, temporal evidence, and control of confounding can analysts move from association to causal inference.

<details><summary>Log</summary>

```
[2026-06-01T09:43:35.157Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:43:36.014Z] Thinking about the best approach…
[2026-06-01T09:43:36.056Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:43:43.057Z] Plan ready: 1 step — Generate a concise guide on distinguishing correlation from causation..
[2026-06-01T09:43:43.059Z] Step 1 of 1: Thinking about it
[2026-06-01T09:44:24.255Z] All sub-agents finished in 41.2s.
[2026-06-01T09:44:24.261Z] Thinking with openai/gpt-oss-20b:free (~2 474 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T09:44:57.906Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:44:57.910Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:44:57.910Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:44:57.910Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:45:21.543Z] Wave 1 finished in 23.6s.
[2026-06-01T09:45:21.543Z] All sub-agents finished in 23.6s.
[2026-06-01T09:45:21.547Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:49:14.240Z] All sub-agents finished in 232.7s.
```
</details>
