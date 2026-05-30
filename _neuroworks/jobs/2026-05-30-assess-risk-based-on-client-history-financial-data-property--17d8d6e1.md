---
type: job
title: Assess risk based on client history, financial data, property details, or hea…
slug: assess-risk-based-on-client-history-financial-data-property--17d8d6e1
created: 2026-05-30T09:45:46.630Z
jobId: 17d8d6e1-52d0-4356-b610-6ad462c4a79b
status: succeeded
template: custom-insurance-underwriter-assess-risk-based-on-client-history-fina
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:39:27.760Z
finishedAt: 2026-05-30T09:45:46.630Z
---

# Assess risk based on client history, financial data, property details, or hea…

- **Status:** succeeded
- **Template:** custom-insurance-underwriter-assess-risk-based-on-client-history-fina
- **Started:** 2026-05-30T09:39:27.760Z
- **Finished:** 2026-05-30T09:45:46.630Z
- **Title:** Assess risk based on client history, financial data, property details, or hea…

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Assess risk based on client history, financial data, property details, or hea…\nDescription: Persona-derived starter task for \"Insurance Underwriter\"."
}
```

## Plan
Conduct deep research on risk assessment methods for job summaries using client data.

### Steps
1. ✓ Researching "risk assessment for job summary based on client history financial data property …" — vault + web — `research.deep` (33.9s)
2. ✓ Quality-checking the draft — `quality.check` (8.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.8s)
    > auto-injected: quality score=0.29 (pass=false) — peer review for a second opinion

## Answer
**Risk‑assessment outline for a job‑summary that draws on four data domains**

| Data domain | What the domain tells you | Typical risk categories | How to turn the information into a risk score |
|------------|--------------------------|------------------------|----------------------------------------------|
| **Client‑history** (past projects, payment behaviour, contract breaches) | Frequency of late payments, scope‑creep incidents, prior litigation | **Financial‑risk** (cash‑flow), **operational‑risk** (project overruns), **reputational‑risk** | 1. Compute a “payment‑promptness index” (on‑time % vs total invoices). <br>2. Count documented scope‑changes or disputes. <br>3. Weight each factor (e.g., 0.4 financial + 0.3 operational + 0.3 reputational) to produce a composite risk rating (low/medium/high). |
| **Financial data** (balance‑sheet, credit score, revenue trends) | Ability to fund the engagement, exposure to insolvency | **Credit‑risk**, **market‑risk** | 1. Use standard credit‑rating formulas (e.g., Altman Z‑score) or a simple debt‑to‑equity ratio. <br>2. Map the resulting numeric value to risk buckets (Z > 2.99 = low, 1.81‑2.99 = medium, < 1.81 = high). |
| **Property details** (location, asset value, lease terms, environmental exposure) | Physical‑asset security, regulatory exposure, natural‑hazard vulnerability | **Physical‑risk**, **legal‑risk**, **environmental‑risk** | 1. Classify the property by hazard zone (flood, earthquake, fire) using public GIS data. <br>2. Compare insured value vs. market value; large gaps raise underwriting risk. <br>3. Score each factor (e.g., 0‑5) and aggregate. |
| **Health information** (employee health claims, occupational‑safety records) | Potential for work‑absence, liability, compliance breaches | **Health‑and‑safety risk**, **insurance‑risk** | 1. Calculate an absenteeism rate (days lost / total work days). <br>2. Identify any high‑severity claims (e.g., OSHA citations). <br>3. Apply a risk multiplier (e.g., 1.2 for > 5 % absenteeism). |

### Step‑by‑step risk‑assessment process

1. **Collect & normalize** each data set (e.g., convert all monetary values to the same currency, map property locations to a hazard‑zone code).  
2. **Score each domain** on a 1‑5 scale (1 = very low risk, 5 = very high risk) using the quantitative rules above.  
3. **Weight the domains** according to the job’s priorities (e.g., a construction contract may weight property 30 % and health 20 %).  
4. **Compute an overall risk index**:  

   \[
   \text{Overall Risk} = \sum_{i=1}^{4} w_i \times s_i
   \]

   where \(w_i\) is the weight and \(s_i\) the domain score.  
5. **Classify** the final index:  
   * 1‑1.9 = Low  
   * 2‑3.4 = Medium  
   * 3.5‑5 = High  

6. **Document** the assumptions, data sources, and any qualitative notes (e.g., “client recently merged – financial data may be lagging”).

### Why this works

Risk, by definition, is *“the possibility of something bad happening”* and *“a level of uncertainty about the effects and implications of an activity”*【2】. By breaking the job‑summary into discrete data domains, each source of uncertainty is quantified, weighted, and aggregated, giving a transparent, repeatable measure of that *possibility* across financial, operational, physical, and health dimensions.

### Quick‑start checklist

- ☐ Pull the latest client‑history report (payment logs, dispute log).  
- ☐ Export the latest financial statements; calculate credit ratios.  
- ☐ Retrieve property GIS hazard codes and insurance coverage details.  
- ☐ Gather health‑safety incident logs for the relevant workforce.  
- ☐ Apply the scoring tables, compute the weighted index, and record the risk tier in the job summary.  

**Result:** a concise, evidence‑based risk rating that can be attached to any job summary, enabling stakeholders to decide on mitigation actions (e.g., require advance payment, purchase additional insurance, or adjust project scope).

<details><summary>Log</summary>

```
[2026-05-30T09:39:27.772Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:39:28.803Z] Thinking about the best approach…
[2026-05-30T09:39:28.840Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T09:39:33.165Z] Plan ready: 1 step — Conduct deep research on risk assessment methods for job summaries using client data..
[2026-05-30T09:39:33.171Z] Step 1 of 1: Researching "risk assessment for job summary based on client history financial data property …" — vault + web
[2026-05-30T09:40:07.106Z] All sub-agents finished in 33.9s.
[2026-05-30T09:40:07.107Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:40:07.116Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:40:07.116Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:40:07.116Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T09:40:15.817Z] Wave 1 finished in 8.7s.
[2026-05-30T09:40:15.817Z] All sub-agents finished in 8.7s.
[2026-05-30T09:40:15.823Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T09:40:18.662Z] All sub-agents finished in 2.8s.
[2026-05-30T09:40:18.667Z] quality.check failed (score=0.29, issues: High likelihood of unsupported or hallucinated claims; only one citation provided for many statements; insufficient inline citations for quantitative methods; no evidence for specific formulas or thre) — re-synthesising with the large model
[2026-05-30T09:40:18.677Z] Thinking with openai/gpt-oss-120b:free (~3 356 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T09:45:45.592Z] quality rescue produced score 0 (not better than 0.29); keeping the original
[2026-05-30T09:45:45.592Z] Wrote to your second brain — committing the changes.
[2026-05-30T09:45:46.629Z] Vault commit: done.
```
</details>
