---
title: "Research: Explain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-u"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: Explain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-up numbers.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C a

**How to turn a simple profit‑and‑loss (P&L) statement into a monthly burn‑rate and runway calculation**

| Step | What you do | Why it matters |
|------|-------------|----------------|
| **1. Pull the monthly totals from the P&L** | • Add up **all operating expenses** for the month (salaries, rent, marketing, SaaS, etc.). <br>• Note the **total revenue** (or sales) for the same month. | These two numbers are the inputs for both *gross* and *net* burn. |
| **2. Compute **gross burn** (total cash outflow)** | `Gross Burn = Total Monthly Expenses` | Gross burn shows how much cash you spend each month **regardless of income** – useful when you have little or no revenue. |
| **3. Compute **net burn** (cash loss after revenue)** | `Net Burn = Total Monthly Expenses – Total Monthly Revenue` | Net burn reflects the **actual cash depletion** each month. If revenue exceeds expenses, net burn is negative (i.e., cash is growing). |
| **4. Verify the period** | Ensure the numbers are **monthly**. If your P&L is quarterly, divide by 3; if weekly, multiply by 4. | Burn‑rate is conventionally expressed per month. |
| **5. Determine cash on hand** | Locate the current cash balance on the balance sheet (or the “cash” line of the P&L if it shows ending cash). | This is the “fuel tank” that will be drained by the burn rate. |
| **6. Calculate runway** | `Runway (months) = Cash on Hand ÷ Net Burn` (use gross burn only if you have zero revenue). | Runway tells you how many months you can keep operating before you run out of cash and need new funding. |
| **7. Interpret** | • If runway < 12 months, consider cutting costs or raising capital soon.<br>• If runway > 24 months, you have a comfortable cushion. | Guides strategic decisions on hiring, product investment, and fundraising timing. |

---

### Worked example (made‑up numbers)

| Item (from P&L) | Amount |
|-----------------|--------|
| **Revenue (Month 1)** | **$45,000** |
| **Expenses** | |
| – Salaries | $80,000 |
| – Rent & utilities | $10,000 |
| – Marketing | $15,000 |
| – Software & SaaS | $5,000 |
| – Other operating costs | $5,000 |
| **Total Expenses** | **$115,000** |
| **Cash on hand (balance sheet)** | **$600,000** |

1. **Gross burn** = $115,000 (total monthly spend).  
2. **Net burn** = $115,000 – $45,000 = **$70,000** (cash loss per month).  
3. **Runway** = $600,000 ÷ $70,000 ≈ **8.6 months**.

> *Interpretation*: At the current spend‑vs‑revenue mix, the company can operate for roughly **8‑9 months** before cash is exhausted, signalling a need to either increase revenue, reduce expenses, or raise new capital soon.

These calculations follow the standard definitions of gross and net burn and the runway formula described by Carta [1].

## Web sources
1. [What is a Burn Rate? How to Calculate Your Cash Runway](https://carta.com/learn/startups/metrics/burn-rate/) _(relevance 25, firecrawl)_
2. [Tim Brady - How do you calculate burn rate, runway and growth rate? - YouTube](https://www.youtube.com/watch?v=aDM8CNnCOwk) _(relevance 20, firecrawl)_

## Filtered sources _(1 dropped by validator)_
- ~~[Understanding Burn Rate: Definition, Types, and Calculation ...](https://www.investopedia.com/terms/b/burnrate.asp)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
