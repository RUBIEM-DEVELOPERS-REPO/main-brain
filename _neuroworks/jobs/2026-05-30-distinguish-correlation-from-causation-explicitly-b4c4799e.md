---
type: job
title: Distinguish correlation from causation explicitly
slug: distinguish-correlation-from-causation-explicitly-b4c4799e
created: 2026-05-30T18:29:48.924Z
jobId: b4c4799e-d47a-4b33-aeb2-45a74be01a4e
status: succeeded
template: custom-data-analyst-distinguish-correlation-from-causation-e
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:22:59.118Z
finishedAt: 2026-05-30T18:29:48.924Z
---

# Distinguish correlation from causation explicitly

- **Status:** succeeded
- **Template:** custom-data-analyst-distinguish-correlation-from-causation-e
- **Started:** 2026-05-30T18:22:59.118Z
- **Finished:** 2026-05-30T18:29:48.924Z
- **Title:** Distinguish correlation from causation explicitly

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Distinguish correlation from causation explicitly\nDescription: Persona-derived starter task for \"Dale\"."
}
```

## Plan
Default research plan for: As a Data Analyst, distinguish correlation from causation explicitly

### Steps
1. ✓ Researching "As a Data Analyst, distinguish correlation from causation explicitly" — vault + web — `research.deep` (53.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (10.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (304.7s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
## Correlation vs. Causation – A Data Analyst’s Guide  

**Definition**  
- **Correlation**: A statistical relationship where two variables tend to move together; it does **not** imply that one variable drives the other [1].  
- **Causation**: A directional, mechanistic link in which a change in one variable **produces** a change in the other [1].

**Typical Questions**  
- Correlation: “Do variable A and variable B move together?” [1]  
- Causation: “Does changing variable A *cause* a change in variable B?” [1]

**Measurement Techniques**  
- **Correlation**: Pearson r, Spearman ρ, covariance, scatter‑plot patterns [1].  
- **Causation**: Experimental manipulation, randomized controlled trials, longitudinal studies, or models that infer directionality (e.g., Granger causality, structural equation modeling) [1].

**Key Pitfalls**  
- **Correlation**:  
  - *Spurious correlation*: apparent link due to a hidden third factor.  
  - *Reverse causality*: the perceived direction may be opposite.  
  - *Confounding*: omitted variables bias the observed relationship. [1]  
- **Causation**:  
  - Confounding can still masquerade as causation if not properly controlled.  
  - Over‑reliance on observational data without experimental or quasi‑experimental design can lead to false causal claims. [1]

**Evidence Required**  
- **Correlation**: Consistent co‑movement across multiple datasets or time periods; avoid statements that imply “because.” [1]  
- **Causation**: Controlled experiment or natural experiment that isolates the effect of the independent variable on the dependent variable [1].

**Practical Distinction Checklist**  
1. Identify whether the research question seeks *association* or *effect*.  
2. Examine the study design: observational vs. experimental.  
3. Check for potential confounders and whether they are controlled.  
4. Use appropriate statistical tools: correlation coefficients for association; causal inference methods for effect.  

_This report synthesizes the vault research note “Correlation vs. Causation – What a Data Analyst Needs to Know” and the security‑scanned version of the same content._

<details><summary>Log</summary>

```
[2026-05-30T18:22:59.132Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:23:00.147Z] Thinking about the best approach…
[2026-05-30T18:23:00.210Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:23:15.609Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:23:15.609Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, distinguish correlation from causation explicitly.
[2026-05-30T18:23:15.617Z] Step 1 of 1: Researching "As a Data Analyst, distinguish correlation from causation explicitly" — vault + web
[2026-05-30T18:24:09.013Z] All sub-agents finished in 53.4s.
[2026-05-30T18:24:09.013Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:24:09.023Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:24:09.023Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:24:09.023Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:24:19.016Z] Wave 1 finished in 10.0s.
[2026-05-30T18:24:19.016Z] All sub-agents finished in 10.0s.
[2026-05-30T18:24:19.028Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:29:19.072Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-30T18:29:23.731Z] All sub-agents finished in 304.7s.
[2026-05-30T18:29:23.742Z] quality.check failed (score=0.58, issues: Low citation coverage – most claims lack inline references; risk of unsupported statements is moderate; overall tone matches a data‑analysis guide but could be more concise) — re-synthesising with the large model
[2026-05-30T18:29:23.753Z] Thinking with openai/gpt-oss-120b:free (~3 518 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:29:48.482Z] quality rescue improved score: 0.58 → 0.89; using the rescued draft
[2026-05-30T18:29:48.482Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:29:48.924Z] Vault commit: done.
```
</details>
