---
type: job
title: Identify client needs and recommend suitable insurance products.
slug: identify-client-needs-and-recommend-suitable-insurance-produ-956edbdf
created: 2026-05-30T17:12:24.547Z
jobId: 956edbdf-2861-423d-97f3-490ca51ffa48
status: succeeded
template: custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:10:45.466Z
finishedAt: 2026-05-30T17:12:24.547Z
---

# Identify client needs and recommend suitable insurance products.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
- **Started:** 2026-05-30T17:10:45.466Z
- **Finished:** 2026-05-30T17:12:24.547Z
- **Title:** Identify client needs and recommend suitable insurance products.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Identify client needs and recommend suitable insurance products.\nDescription: Persona-derived starter task for \"Insurance Sales Agent\"."
}
```

## Plan
Default research plan for: As a Insurance Sales Agent, identify client needs and recommend suitable insurance products

### Steps
1. ✓ Researching "As a Insurance Sales Agent, identify client needs and recommend suitable insuran…" — vault + web — `research.deep` (41.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (9.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.3s)
    > auto-injected: quality score=0.59 (pass=false) — peer review for a second opinion

## Answer
**How an Insurance Sales Agent Can Identify Client Needs & Match Them to the Right Products**

| Step | What to Do | Why it Matters | Typical Product Matches |
|------|------------|----------------|--------------------------|
| **1. Gather a holistic profile** | • Ask about life stage (single, married, with children, near retirement). <br>• Collect financial data (income, debts, assets, mortgage). <br>• Record health status, occupation, and any existing cover. | Gives a baseline to gauge risk exposure and affordability. | – Life & term policies for young families.<br>– Mortgage Protection for homeowners.<br>– Personal Pension/Wealth Protector for pre‑retirees. |
| **2. Diagnose specific risks** | • **Protection gaps** – e.g., no funeral cover, no health cover for dependents.<br>• **Asset exposure** – value of home, car, business assets.<br>• **Future goals** – education, retirement, wealth transfer. | Pinpoints where insurance can prevent financial hardship. | – *Family Shield* (funeral), *J‑Care* (health), *Career Life Plan* (education), *Credit Life Assurance* (debt protection). |
| **3. Prioritise needs** | Rank needs by urgency (mandatory vs. optional) and impact (high‑cost loss vs. low‑cost inconvenience). | Helps focus the conversation and avoid overwhelming the client. | • Mandatory: health, auto, mortgage protection.<br>• Optional but high‑value: wealth protector, senior health (*J‑Senior*). |
| **4. Quantify coverage amounts** | • Use simple calculators (e.g., “income‑replacement × years of support”). <br>• For mortgage, match outstanding balance. <br>• For funeral, estimate typical local costs. | Ensures the policy is sufficient without over‑insuring. | – *J‑Care Individual/Family Health Cover* (policy limits based on family size).<br>– *Jubilee Wealth Protector Plan* (customisable sum assured). |
| **5. Present a tailored bundle** | • Show a short “needs‑to‑product” matrix (e.g., “Protect your home → Mortgage Protection Scheme”). <br>• Explain premium, deductible, and policy limits in plain language. | Builds trust and demonstrates value‑based selling. | – Combine *Smart Save Plan* (savings) with *Personal Pension Plan* for long‑term security. |
| **6. Address objections & next steps** | • Clarify any misconceptions about premiums, claim process, or coverage gaps.<br>• Offer a trial or flexible payment option if available. | Increases conversion and reduces post‑sale churn. | – Highlight *J‑Care Junior* for children (low entry premium, high peace of mind). |

### Sample Product Quick‑Reference (based on Jubilee Insurance Uganda)

| Client Need | Recommended Jubilee Product | Key Feature |
|-------------|----------------------------|-------------|
| **Health protection for whole family** | **J‑Care Individual/Family Health Cover** | Comprehensive private health coverage; optional add‑ons for vision/dental. |
| **Funeral expense coverage** | **Family Shield** | Fixed lump‑sum to cover funeral costs; affordable premiums. |
| **Mortgage repayment protection** | **Mortgage Protection Scheme** | Pays off outstanding mortgage if the insured dies. |
| **Retirement savings & income** | **Personal Pension Plan** / **Income Drawdown** | Tax‑advantaged savings; flexible post‑retirement withdrawals. |
| **Wealth preservation for dependents** | **Jubilee Wealth Protector Plan** | Combines life cover with investment component for generational wealth. |
| **Coverage for seniors (65+)** | **J‑Senior** | Tailored medical cover for older adults. |
| **Education funding for children** | **Career Life Plan** | Life‑insurance‑linked savings to fund future education costs. |

### Practical Conversation Flow

1. **Opening** – “Tell me about your biggest financial worries right now.”  
2. **Discovery** – Use the profile checklist (step 1).  
3. **Risk Mapping** – Align each worry to a risk category (step 2).  
4. **Prioritisation** – “If you could only protect one thing today, what would it be?”  
5. **Solution Pitch** – Show the matrix (step 5) and walk through premium vs. benefit.  
6. **Close** – Agree on a pilot product (e.g., health cover) and schedule a follow‑up to review additional layers.

> **Key Insight:** Clients often underestimate *protective* needs (health, funeral) while over‑valuing *investment* products. Framing insurance as a safety net that protects their existing assets and future goals makes the recommendation feel essential rather than optional.  

*Sources: Jubilee product catalogue (Home‑insurance, health, wealth, retirement) [1]; general insurance fundamentals (policy components, types) [2]; regulatory context for Uganda [3].*

<details><summary>Log</summary>

```
[2026-05-30T17:10:45.474Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:10:46.268Z] Thinking about the best approach…
[2026-05-30T17:10:46.313Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:10:47.460Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:10:47.460Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, identify client needs and recommend suitable insurance products.
[2026-05-30T17:10:47.466Z] Step 1 of 1: Researching "As a Insurance Sales Agent, identify client needs and recommend suitable insuran…" — vault + web
[2026-05-30T17:11:28.964Z] All sub-agents finished in 41.5s.
[2026-05-30T17:11:28.964Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:11:28.974Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:11:28.974Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:11:28.974Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:11:38.405Z] Wave 1 finished in 9.4s.
[2026-05-30T17:11:38.405Z] All sub-agents finished in 9.4s.
[2026-05-30T17:11:38.412Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:11:41.664Z] All sub-agents finished in 3.3s.
[2026-05-30T17:11:41.674Z] quality.check failed (score=0.59, issues: Missing inline citations for specific claims; Some generic product claims may not be fully supported) — re-synthesising with the large model
[2026-05-30T17:11:41.682Z] Thinking with openai/gpt-oss-120b:free (~3 548 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:12:23.847Z] quality rescue produced score 0.59 (not better than 0.59); keeping the original
[2026-05-30T17:12:23.847Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:12:24.546Z] Vault commit: done.
```
</details>
