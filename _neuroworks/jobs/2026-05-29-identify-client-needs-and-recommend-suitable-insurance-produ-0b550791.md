---
type: job
title: Identify client needs and recommend suitable insurance products.
slug: identify-client-needs-and-recommend-suitable-insurance-produ-0b550791
created: 2026-05-29T20:08:03.666Z
jobId: 0b550791-281a-4680-a8ed-0896c737e476
status: succeeded
template: custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:05:16.244Z
finishedAt: 2026-05-29T20:08:03.666Z
---

# Identify client needs and recommend suitable insurance products.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
- **Started:** 2026-05-29T20:05:16.244Z
- **Finished:** 2026-05-29T20:08:03.666Z
- **Title:** Identify client needs and recommend suitable insurance products.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Identify client needs and recommend suitable insurance products.\nDescription: Persona-derived starter task for \"Insurance Sales Agent\"."
}
```

## Plan
Conduct focused research on insurance products and needs assessment to inform recommendations.

### Steps
1. ✓ Researching "insurance products for clients based on needs assessment" — vault + web — `research.deep` (36.7s)
2. ✓ Quality-checking the draft — `quality.check` (7.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (18.5s)
    > auto-injected: quality score=0.66 (pass=false) — peer review for a second opinion

## Answer
## Insurance Needs Assessment & Product Recommendation  

### 1. Client Risk Profile  
Collect information on the client’s exposures across three domains:  

- **Personal & Family** – health status, vehicle ownership, residence type, personal liability, and specialty risks such as cyber‑identity theft or event‑cancellation needs.  
- **Professional / Business** – business liability, professional indemnity, business‑interruption, workers’ compensation, and any sector‑specific hazards.  
- **Demographic Factors** – age, location, credit score, and health indicators, which insurers use to price premiums.  

### 2. Identify Coverage Gaps  
Compare the client’s existing policies (if any) with the risks identified. Typical gaps include:  

- Uninsured/under‑insured motorist protection.  
- Insufficient liability limits for professional services.  
- Lack of high‑value personal‑property riders (jewelry, art, electronics).  
- Limited health‑care cost coverage beyond basic plans.  
- Absence of specialty coverages (identity‑theft, wedding or event cancellation).  

### 3. Prioritization of Needs  
Rank gaps by potential financial impact and likelihood of loss:  

| Priority | Typical High‑Impact Gaps |
|----------|--------------------------|
| **High** | Auto liability, health‑care expenses, basic property protection |
| **Medium** | Professional liability, business‑interruption, cyber‑risk |
| **Low** | Niche event or specialty riders (e.g., kidnapping‑ransom, identity‑theft) |

### 4. Recommended Insurance Products  

| Category | Suggested Products | Rationale |
|----------|-------------------|-----------|
| **Health** | Comprehensive health plan with vision/dental riders | Covers routine and emergency care; riders add value for out‑of‑pocket expenses. |
| **Auto** | Liability, collision, comprehensive, uninsured‑motorist | Meets legal requirements and protects against common vehicle risks. |
| **Home/Property** | Homeowners or renters policy with high‑value item endorsements | Protects dwelling and personal assets; endorsements cover valuables. |
| **Liability** | General liability + professional indemnity | Addresses personal and business liability exposures. |
| **Business** | Business‑interruption, cyber‑risk, workers’ compensation | Mitigates revenue loss from disruptions and cyber incidents; complies with employment regulations. |
| **Specialty** | Identity‑theft, event‑cancellation, kidnap‑ransom (as needed) | Provides targeted protection for low‑probability, high‑impact events. |

### 5. Next Steps  

1. Administer a focused questionnaire covering the exposure areas above.  
2. Review the client’s current policies to pinpoint exact gaps.  
3. Present a tiered recommendation set, emphasizing high‑impact needs first.  
4. Discuss premium options, bundling discounts, and any deductible preferences.  

*Source: “Designing Insurance Products Around a Client‑Needs Assessment” – research.deep query results* [1]

<details><summary>Log</summary>

```
[2026-05-29T20:05:16.255Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:05:16.263Z] Thinking about the best approach…
[2026-05-29T20:05:16.309Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:05:29.550Z] Plan ready: 1 step — Conduct focused research on insurance products and needs assessment to inform recommendations..
[2026-05-29T20:05:29.555Z] Step 1 of 1: Researching "insurance products for clients based on needs assessment" — vault + web
[2026-05-29T20:06:06.271Z] All sub-agents finished in 36.7s.
[2026-05-29T20:06:06.281Z] Thinking with openai/gpt-oss-20b:free (~2 799 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:06:40.774Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:06:40.779Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:06:40.779Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:06:40.780Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:06:48.632Z] Wave 1 finished in 7.9s.
[2026-05-29T20:06:48.632Z] All sub-agents finished in 7.9s.
[2026-05-29T20:06:48.637Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:07:07.142Z] All sub-agents finished in 18.5s.
[2026-05-29T20:07:07.149Z] quality.check failed (score=0.66, issues: Low citation coverage – only one source cited for many claims) — re-synthesising with the large model
[2026-05-29T20:07:07.155Z] Thinking with openai/gpt-oss-120b:free (~3 736 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:07:36.965Z] quality rescue improved score: 0.66 → 0.86; using the rescued draft
[2026-05-29T20:07:36.965Z] peer review verdict=needs-work (Generic, no client-specific needs identified; No direct recommendation based on client profile) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:07:36.979Z] Thinking with openai/gpt-oss-120b:free (~3 885 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:08:03.312Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T20:08:03.312Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:08:03.666Z] Vault commit: done.
```
</details>
