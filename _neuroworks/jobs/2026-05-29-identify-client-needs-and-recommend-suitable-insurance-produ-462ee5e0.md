---
type: job
title: Identify client needs and recommend suitable insurance products.
slug: identify-client-needs-and-recommend-suitable-insurance-produ-462ee5e0
created: 2026-05-29T13:51:47.126Z
jobId: 462ee5e0-298b-4e2e-bf54-0f9d80ccc9a9
status: succeeded
template: custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T13:48:46.854Z
finishedAt: 2026-05-29T13:51:47.126Z
---

# Identify client needs and recommend suitable insurance products.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
- **Started:** 2026-05-29T13:48:46.854Z
- **Finished:** 2026-05-29T13:51:47.126Z
- **Title:** Identify client needs and recommend suitable insurance products.

## Plan
Conduct deep research on identifying client needs and recommending insurance products for a sales agent.

### Steps
1. ✓ Researching "insurance sales agent client needs assessment and suitable product recommendatio…" — vault + web — `research.deep` (31.6s)
2. ✓ Quality-checking the draft — `quality.check` (7.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (10.5s)
    > auto-injected: quality score=0.39 (pass=false) — peer review for a second opinion

## Answer
## Client‑Needs Assessment & Product Recommendation Framework  

**1. Gather Core Client Data**  
- Age, gender, and marital status  
- Health condition and medical history  
- Household income, assets, and liabilities  
- Existing insurance coverage (life, health, property, auto, etc.)  
- Financial goals (e.g., mortgage protection, education funding, retirement)  
- Risk tolerance and preferred premium budget  

**2. Identify Coverage Gaps**  
Cross‑reference the client’s profile with typical protection categories:  

| Category | Typical Need | Indicator of Gap |
|----------|--------------|-------------------|
| Life insurance | Income replacement for dependents | No existing term or whole‑life policy; dependents present |
| Health insurance | Out‑of‑pocket medical costs | Limited private health cover; high deductible plans |
| Disability insurance | Income protection if unable to work | No disability rider; occupation with high injury risk |
| Property & casualty | Protection of assets (home, car) | Under‑insured property values or missing umbrella policy |
| Long‑term care / annuities | Funding for extended care in later life | Age ≥ 55 with insufficient savings for care costs |

**3. Match Products to Identified Needs**  

- **Young professional with mortgage** – Term life (10‑20 yr) + mortgage protection rider; optional personal accident policy.  
- **Family with young children** – Whole‑life or universal life for cash‑value accumulation; child education rider; health supplement plan.  
- **Mid‑career high‑earner** – Permanent life for estate planning; disability income insurance; umbrella liability.  
- **Pre‑retiree / senior** – Long‑term care insurance; annuity options for guaranteed income; final‑expense (burial) policy.  

**4. Presentation Guidelines**  
- Explain each policy’s coverage limits, exclusions, and premium structure.  
- Highlight how the recommendation aligns with the client’s stated goals and budget.  
- Provide a side‑by‑side comparison of at‑least two product options per need.  
- Offer a clear next step (e.g., quote request, application timeline).  

---

*Assumed: the report is intended for internal use by an insurance sales agent to structure client consultations. No specific vault notes were available; the framework follows standard industry practice.*

<details><summary>Log</summary>

```
[2026-05-29T13:48:46.861Z] Working as Clawbot — AI agent operator.
[2026-05-29T13:48:48.085Z] Thinking about the best approach…
[2026-05-29T13:48:48.106Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T13:48:55.547Z] Plan ready: 1 step — Conduct deep research on identifying client needs and recommending insurance products for a sales agent..
[2026-05-29T13:48:55.551Z] Step 1 of 1: Researching "insurance sales agent client needs assessment and suitable product recommendatio…" — vault + web
[2026-05-29T13:49:27.137Z] All sub-agents finished in 31.6s.
[2026-05-29T13:49:27.137Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T13:49:27.143Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T13:49:27.143Z] Step 3 of 3: Security-scanning the note
[2026-05-29T13:49:27.143Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T13:49:34.243Z] Wave 1 finished in 7.1s.
[2026-05-29T13:49:34.243Z] All sub-agents finished in 7.1s.
[2026-05-29T13:49:34.247Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T13:49:44.767Z] All sub-agents finished in 10.5s.
[2026-05-29T13:49:44.772Z] quality.check failed (score=0.39, issues: No substantive answer provided; No relevant citations used) — re-synthesising with the large model
[2026-05-29T13:49:44.776Z] Thinking with openai/gpt-oss-120b:free (~3 059 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T13:50:34.959Z] quality rescue improved score: 0.39 → 0.89; using the rescued draft
[2026-05-29T13:50:34.960Z] peer review verdict=needs-work (Does not provide any client needs assessment or product recommendations as requested; Fails to address the task directly) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T13:50:34.964Z] Thinking with openai/gpt-oss-120b:free (~3 222 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T13:51:46.863Z] retry verdict=needs-work and quality not improved (0.58 ≤ 0.89); keeping the rescued/original draft
[2026-05-29T13:51:46.863Z] Wrote to your second brain — committing the changes.
[2026-05-29T13:51:47.126Z] Vault commit: done.
```
</details>
