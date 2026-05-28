---
type: job
title: Team task #3: Explain step by step how to compute monthly burn rate and ru
slug: team-task-3-explain-step-by-step-how-to-compute-monthly-burn-bd8cfc95
created: 2026-05-28T13:27:28.748Z
jobId: bd8cfc95-183f-4049-9621-de8787fc94f7
status: succeeded
template: general-task
persona: none
personaName: 
startedAt: 2026-05-28T13:26:08.876Z
finishedAt: 2026-05-28T13:27:28.748Z
---

# Team task #3: Explain step by step how to compute monthly burn rate and ru

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:26:08.876Z
- **Finished:** 2026-05-28T13:27:28.748Z
- **Title:** Team task #3: Explain step by step how to compute monthly burn rate and ru

## Inputs
```json
{
  "task": "(You are operating as Fiona, the Financial Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nExplain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-up numbers.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Explain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-up numbers.",
  "teamTask": {
    "taskIndex": 2,
    "persona": "financial-analyst",
    "route": "explicit"
  },
  "personaId": "financial-analyst"
}
```

## Plan
Default research plan for: Explain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-up numbers.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C a

### Steps
1. ✓ Researching "Explain step by step how to compute monthly burn rate and runway from a simple P…" — vault + web — `research.deep` (57.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (12.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
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

<details><summary>Log</summary>

```
[2026-05-28T13:26:08.876Z] team-task #3 · persona=financial-analyst · route=explicit
[2026-05-28T13:26:08.876Z] **Fiona** (Financial Analyst) is on this team-task.
[2026-05-28T13:26:08.937Z] Thinking about the best approach…
[2026-05-28T13:26:09.108Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:26:11.367Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:26:11.368Z] Plan ready: 1 step — Default research plan for: Explain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-up numbers.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C a.
[2026-05-28T13:26:11.636Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:26:11.636Z] Step 1 of 1: Researching "Explain step by step how to compute monthly burn rate and runway from a simple P…" — vault + web
[2026-05-28T13:27:08.958Z] All sub-agents finished in 57.3s.
[2026-05-28T13:27:08.973Z] Thinking with openai/gpt-oss-20b:free (~3 171 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:27:10.179Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T13:27:16.292Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-28T13:27:16.292Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:27:16.294Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:27:16.294Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:27:16.294Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:27:16.294Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:27:28.748Z] Wave 1 finished in 12.5s.
[2026-05-28T13:27:28.748Z] All sub-agents finished in 12.5s.
[2026-05-28T13:27:28.748Z] Quality check passed (87%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
