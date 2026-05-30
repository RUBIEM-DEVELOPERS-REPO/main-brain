---
type: job
title: Identify client needs and recommend suitable insurance products.
slug: identify-client-needs-and-recommend-suitable-insurance-produ-a662b05a
created: 2026-05-30T09:44:17.623Z
jobId: a662b05a-a3d5-4bde-bca3-6db9144fb8f1
status: succeeded
template: custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:35:27.416Z
finishedAt: 2026-05-30T09:44:17.623Z
---

# Identify client needs and recommend suitable insurance products.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
- **Started:** 2026-05-30T09:35:27.416Z
- **Finished:** 2026-05-30T09:44:17.623Z
- **Title:** Identify client needs and recommend suitable insurance products.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Identify client needs and recommend suitable insurance products.\nDescription: Persona-derived starter task for \"Insurance Sales Agent\"."
}
```

## Plan
Research client needs assessment and product recommendations for insurance sales.

### Steps
1. ✓ Researching "insurance sales agent client needs assessment and suitable product recommendatio…" — vault + web — `research.deep` (39.3s)
2. ✓ Quality-checking the draft — `quality.check` (6.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (12.1s)
    > auto-injected: quality score=0.40 (pass=false) — peer review for a second opinion

## Answer
## Client‑Needs Assessment & Product Recommendation Framework  

**1. Gather Key Information**  
- Age, health status, and family composition  
- Income level, employment type, and existing insurance coverage  
- Financial goals (e.g., debt repayment, education funding, retirement)  
- Major life events anticipated (marriage, children, home purchase)  

**2. Identify Primary Needs**  
| Need Category | Typical Drivers |
|---------------|-----------------|
| **Protection** | Dependents, income replacement, medical expenses |
| **Wealth Building** | Long‑term cash value, estate planning, legacy |
| **Risk Management** | Property loss, liability exposure, long‑term care |

**3. Match Suitable Insurance Products**  

- **Term Life** – Affordable coverage for young, healthy clients who need income protection for a defined period (e.g., 10‑30 years).  
- **Whole Life / Universal Life** – Policies with cash‑value accumulation for clients seeking lifelong protection and a savings component.  
- **Disability Insurance** – Essential for high‑earning professionals or self‑employed individuals to replace income if unable to work.  
- **Long‑Term Care** – Recommended for clients approaching retirement or with health concerns that may require extended care.  
- **Annuities** – Suitable for clients desiring a guaranteed income stream in retirement.  
- **Property & Casualty** – Homeowners, renters, and auto owners need liability and damage coverage; consider umbrella policies for high‑net‑worth individuals.  

**4. Review & Adjust**  
- Conduct periodic (annual or life‑event‑triggered) reviews to ensure coverage remains aligned with evolving circumstances.  

**5. Educate the Client**  
- Explain policy terms, riders, premiums, and cost‑benefit trade‑offs in plain language.  
- Provide decision‑making tools (e.g., coverage calculators) to empower informed choices.  

By following this structured approach, recommendations can be precisely tailored to each client’s unique situation and financial objectives.

<details><summary>Log</summary>

```
[2026-05-30T09:35:27.425Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:35:28.090Z] Thinking about the best approach…
[2026-05-30T09:35:28.131Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T09:35:37.577Z] Plan ready: 1 step — Research client needs assessment and product recommendations for insurance sales..
[2026-05-30T09:35:37.583Z] Step 1 of 1: Researching "insurance sales agent client needs assessment and suitable product recommendatio…" — vault + web
[2026-05-30T09:36:16.911Z] All sub-agents finished in 39.3s.
[2026-05-30T09:36:16.912Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:36:16.920Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:36:16.920Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:36:16.920Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T09:36:23.626Z] Wave 1 finished in 6.7s.
[2026-05-30T09:36:23.626Z] All sub-agents finished in 6.7s.
[2026-05-30T09:36:23.642Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T09:36:35.724Z] All sub-agents finished in 12.1s.
[2026-05-30T09:36:35.729Z] quality.check failed (score=0.4, issues: Answer does not address the task; it merely states inability to provide information due to lack of evidence.; No substantive claims are made, so citation coverage is effectively zero.) — re-synthesising with the large model
[2026-05-30T09:36:35.737Z] Thinking with openai/gpt-oss-120b:free (~3 347 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T09:39:55.794Z] quality rescue improved score: 0.4 → 0.67; using the rescued draft
[2026-05-30T09:39:55.794Z] peer review verdict=needs-work (Does not address the task; claims lack evidence; no client needs identified; no product recommendations) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T09:39:55.802Z] Thinking with openai/gpt-oss-120b:free (~3 491 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T09:44:17.286Z] retry verdict=needs-work and quality not improved (0.52 ≤ 0.67); keeping the rescued/original draft
[2026-05-30T09:44:17.286Z] Wrote to your second brain — committing the changes.
[2026-05-30T09:44:17.622Z] Vault commit: done.
```
</details>
