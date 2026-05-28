---
type: job
title: Team task #3: Explain step by step how to compute monthly burn rate and ru
slug: team-task-3-explain-step-by-step-how-to-compute-monthly-burn-e9f94a8a
created: 2026-05-28T13:36:55.758Z
jobId: e9f94a8a-d977-445c-8d20-598b6b6e6691
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T13:35:19.185Z
finishedAt: 2026-05-28T13:36:55.758Z
---

# Team task #3: Explain step by step how to compute monthly burn rate and ru

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:35:19.185Z
- **Finished:** 2026-05-28T13:36:55.758Z
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
1. ✓ Researching "Explain step by step how to compute monthly burn rate and runway from a simple P…" — vault + web — `research.deep` (64.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (18.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
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

<details><summary>Log</summary>

```
[2026-05-28T13:35:19.185Z] team-task #3 · persona=financial-analyst · route=explicit
[2026-05-28T13:35:19.185Z] **Fiona** (Financial Analyst) is on this team-task.
[2026-05-28T13:35:19.270Z] Thinking about the best approach…
[2026-05-28T13:35:19.501Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:35:21.813Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:35:21.813Z] Plan ready: 1 step — Default research plan for: Explain step by step how to compute monthly burn rate and runway from a simple P&L. Include a worked example with made-up numbers.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C a.
[2026-05-28T13:35:24.268Z] Step 1 of 1: Researching "Explain step by step how to compute monthly burn rate and runway from a simple P…" — vault + web
[2026-05-28T13:36:29.140Z] All sub-agents finished in 64.9s.
[2026-05-28T13:36:29.146Z] Thinking with openai/gpt-oss-20b:free (~3 159 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:36:30.339Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T13:36:37.515Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-28T13:36:37.516Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:36:37.518Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:36:37.518Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:36:37.518Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:36:37.518Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:36:55.757Z] Wave 1 finished in 18.2s.
[2026-05-28T13:36:55.757Z] All sub-agents finished in 18.2s.
[2026-05-28T13:36:55.757Z] Quality check passed (78%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
