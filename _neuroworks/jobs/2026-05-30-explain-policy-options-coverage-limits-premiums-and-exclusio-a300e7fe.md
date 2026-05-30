---
type: job
title: Explain policy options, coverage limits, premiums, and exclusions.
slug: explain-policy-options-coverage-limits-premiums-and-exclusio-a300e7fe
created: 2026-05-30T17:14:11.580Z
jobId: a300e7fe-e777-41c8-909a-10e4384035a8
status: succeeded
template: custom-insurance-sales-agent-explain-policy-options-coverage-limits-p
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:10:39.509Z
finishedAt: 2026-05-30T17:14:11.580Z
---

# Explain policy options, coverage limits, premiums, and exclusions.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-explain-policy-options-coverage-limits-p
- **Started:** 2026-05-30T17:10:39.509Z
- **Finished:** 2026-05-30T17:14:11.580Z
- **Title:** Explain policy options, coverage limits, premiums, and exclusions.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Explain policy options, coverage limits, premiums, and exclusions.\nDescription: Persona-derived starter task for \"Insurance Sales Agent\"."
}
```

## Plan
Default research plan for: As a Insurance Sales Agent, explain policy options, coverage limits, premiums, and exclusions

### Steps
1. ✓ Researching "As a Insurance Sales Agent, explain policy options, coverage limits, premiums, a…" — vault + web — `research.deep` (42.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (156.0s)
    > auto-injected: quality score=0.67 (pass=true) — peer review for a second opinion

## Answer
**Insurance 101 for Sales Agents**  
*(All points are drawn from the Investopedia overview of insurance policy components [2] and the general product listings of Jubilee Insurance [1]. No other sources were used.)*  

---  

## 1. Core Policy Options  

| Option | What it Covers | Typical Use Cases |
|--------|----------------|-------------------|
| **Health Insurance** | Hospitalisation, doctor visits, prescription drugs; optional vision/dental riders. | Individuals, families, employees (J‑Care Individual/Family). |
| **Life Insurance** | Pays a death benefit (face value) to beneficiaries; can include term or whole‑life. | Income replacement, mortgage protection, education funding (Career Life Plan). |
| **Auto / Motor Insurance** | Liability for third‑party injury/property damage, collision, comprehensive (theft, fire, natural disaster). | Private car owners; mandatory in most jurisdictions. |
| **Homeowners / Property Insurance** | Dwelling structure, personal belongings, liability for accidents on the premises. | Homeowners, renters (Family Shield funeral plan is a related “personal risk” product). |
| **Business / Commercial Insurance** | Property, liability, business interruption, professional malpractice, specialty cover (e.g., kidnap‑ransom). | Companies of any size; Jubilee offers corporate health cover. |
| **Special‑purpose Plans** | Funeral (Family Shield), mortgage protection, retirement wealth (Wealth Protector), credit life assurance. | Customers seeking targeted financial safety nets. |

---

## 2. Coverage Limits  

* **Definition:** The maximum amount the insurer will pay for a covered loss. Limits can be per‑incident, per‑year, or a lifetime maximum [2].  
* **How they work:**  
  * **Higher limits → higher premiums** (the insurer assumes more risk).  
  * Example: A life policy with a UGX 10 million face value pays that amount to the beneficiary; a health plan may cap annual hospital expenses at UGX 5 million.  
* **Choosing limits:** Align the limit with the client’s exposure (e.g., mortgage balance for mortgage protection, expected medical costs for health plans).  

---

## 3. Premiums  

* **What a premium is:** The price you pay (usually monthly or annually) to keep the policy in force [2].  
* **Factors influencing premium:**  
  * Age, gender, health status (health/life).  
  * Driving record, vehicle value (auto).  
  * Property value, location, claims history (home).  
  * Occupation, business size, risk profile (commercial).  
* **Pricing strategy for agents:**  
  * Gather accurate risk data from the prospect.  
  * Quote multiple limits to illustrate the premium‑limit trade‑off.  
  * Highlight any discounts (bundling health & life, loyalty, low‑deductible options).  

---

## 4. Common Exclusions  

Exclusions are items the policy **does not** cover. They protect the insurer from unmanageable risk. Typical exclusions across most lines include:  

| Exclusion | Typical Example |
|-----------|-----------------|
| **Pre‑existing conditions** | Health claims for illnesses diagnosed before the policy start date. |
| **Intentional acts** | Damage caused deliberately by the insured. |
| **War / terrorism** | Property loss due to armed conflict (often a separate rider). |
| **Wear & tear / maintenance** | Mechanical breakdown of a car, routine home repairs. |
| **Specific high‑risk activities** | Auto coverage may exclude racing; health plans may exclude elective cosmetic surgery. |
| **Policy‑specific limits** | Funeral plan may only cover “most funeral expenses” up to a set amount; any excess is the client’s responsibility. |

*Jubilee’s product pages list “comprehensive” plans (e.g., J‑Care) that **include** many of these coverages, but the fine‑print still contains the standard exclusions noted above.*  

---

## 5. Quick Pitch Checklist  

1. **Identify the client’s primary risk** (health, life, property, business).  
2. **Select a policy type** that matches that risk (use the table in Section 1).  
3. **Propose three coverage‑limit tiers** (e.g., low, medium, high) and show the corresponding premium.  
4. **Explain the deductible** (if any) and how it lowers the premium.  
5. **Highlight key exclusions** so the client knows what is *not* covered.  
6. **Offer bundling discounts** (e.g., combine J‑Care health with Family Shield funeral).  

By walking the prospect through **options → limits → premiums → exclusions**, you give a transparent, confidence‑building overview that helps the client choose the right protection for their needs.

<details><summary>Log</summary>

```
[2026-05-30T17:10:39.524Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:10:40.372Z] Thinking about the best approach…
[2026-05-30T17:10:40.421Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:10:47.754Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:10:47.754Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, explain policy options, coverage limits, premiums, and exclusions.
[2026-05-30T17:10:48.511Z] Step 1 of 1: Researching "As a Insurance Sales Agent, explain policy options, coverage limits, premiums, a…" — vault + web
[2026-05-30T17:11:30.905Z] All sub-agents finished in 42.4s.
[2026-05-30T17:11:30.905Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:11:30.911Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:11:30.911Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:11:30.911Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:11:35.203Z] Wave 1 finished in 4.3s.
[2026-05-30T17:11:35.203Z] All sub-agents finished in 4.3s.
[2026-05-30T17:11:35.212Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:14:11.248Z] All sub-agents finished in 156.0s.
[2026-05-30T17:14:11.248Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:14:11.580Z] Vault commit: done.
```
</details>
