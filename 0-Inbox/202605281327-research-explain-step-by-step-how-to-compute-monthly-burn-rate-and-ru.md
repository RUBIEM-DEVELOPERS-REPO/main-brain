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

Below are the exact steps you can follow, followed by a worked‑example with made‑up numbers.

---

### 1. Pull the numbers you need from the P&L  

| P&L line | What you need for the calculation |
|----------|-----------------------------------|
| **Total operating expenses** (salaries, rent, marketing, etc.) | Gives **gross cash outflow** per month. |
| **Revenue (or other cash‑in)** | Subtract from expenses to get **net cash burn** (if you have revenue). |
| **Cash on hand** (bank balance) | Used to compute runway. |

> Burn rate is the cash a company spends each month.  Gross burn = total cash outflow; Net burn = cash outflow – cash in (revenue) 【1†L31-L38】.  

---

### 2. Compute **gross burn rate**  

\[
\text{Gross Burn (per month)} = \frac{\text{Total cash expenses for the period}}{\text{Number of months in the period}}
\]

If the P&L is already monthly, just take the expense total for that month.  

---

### 3. Compute **net burn rate** (optional, when you have revenue)  

\[
\text{Net Burn} = \text{Gross Burn} - \text{Revenue}
\]

> Net burn is “the actual cash loss per month, calculated as total expenses minus revenue”【1†L33-L38】.  

---

### 4. Choose the burn rate you’ll use for runway  

* **Early‑stage, pre‑revenue** → use **gross burn** (the cash you’re spending).  
* **Revenue‑generating** → use **net burn** (the cash you’re actually losing).  

---

### 5. Calculate **runway**  

\[
\text{Runway (months)} = \frac{\text{Cash on hand}}{\text{Chosen burn rate}}
\]

> Runway is “the number of months you have left before you run out of cash” and is simply cash divided by burn rate【2†L31-L38】.  

---

### 6. (Optional) Refine with a forecast  

If expenses or revenue are expected to change month‑to‑month, build a short‑term cash‑flow forecast and recompute runway for each future month. This gives a more realistic “dynamic runway” rather than a single static number【2†L41-L48】.  

---

## Worked Example (made‑up numbers)

| Item (from P&L) | Amount (USD) |
|-----------------|--------------|
| Total monthly expenses (salaries, rent, marketing, etc.) | **$120,000** |
| Monthly revenue (subscription + services) | **$40,000** |
| Cash on hand (bank balance) | **$600,000** |

1. **Gross burn** = $120,000 per month (expenses are already monthly).  
2. **Net burn** = $120,000 – $40,000 = **$80,000** per month.  
3. Because the company is already generating revenue, we’ll use **net burn** for runway.  
4. **Runway** = $600,000 ÷ $80,000 = **7.5 months**.  

> Interpretation: At the current spend‑vs‑revenue mix, the startup can operate for roughly **7½ months** before cash is exhausted, assuming no change in costs or revenue.  

If the startup were pre‑revenue, the same numbers would give a gross‑burn runway of $600,000 ÷ $120,000 = **5 months**.

---

### Quick Checklist

| ✅ | Step |
|---|------|
| 1 | Extract total monthly expenses, revenue, and cash balance from the P&L. |
| 2 | Compute gross burn (expenses ÷ months). |
| 3 | If you have revenue, compute net burn = gross – revenue. |
| 4 | Choose gross or net burn based on revenue status. |
| 5 | Divide cash on hand by the chosen burn rate → runway (months). |
| 6 | Update monthly with a forecast if expenses/revenue are expected to vary. |

Follow these steps each month and you’ll always know how fast you’re “burning” cash and how long your current cash cushion will last.

## Web sources
1. [What is a Burn Rate? How to Calculate Your Cash Runway](https://carta.com/learn/startups/metrics/burn-rate/) _(relevance 25, firecrawl)_
2. [Tim Brady - How do you calculate burn rate, runway and growth rate? - YouTube](https://www.youtube.com/watch?v=aDM8CNnCOwk) _(relevance 25, firecrawl)_

## Filtered sources _(1 dropped by validator)_
- ~~[Understanding Burn Rate: Definition, Types, and Calculation ...](https://www.investopedia.com/terms/b/burnrate.asp)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
