---
type: job
title: Ad-hoc: Walk me through a month-end close checklist for a small SaaS
slug: ad-hoc-walk-me-through-a-month-end-close-checklist-for-a-sma-ce3bf0c3
created: 2026-06-10T10:39:17.291Z
jobId: ce3bf0c3-a5a1-49be-9899-d10c831d0b5b
status: succeeded
template: general-task
persona: accountant
personaName: Cole
startedAt: 2026-06-10T10:37:57.044Z
finishedAt: 2026-06-10T10:39:17.290Z
---

# Ad-hoc: Walk me through a month-end close checklist for a small SaaS

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T10:37:57.044Z
- **Finished:** 2026-06-10T10:39:17.290Z
- **Title:** Ad-hoc: Walk me through a month-end close checklist for a small SaaS

## Inputs
```json
{
  "task": "(You are operating as Cole, the Accountant. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWalk me through a month-end close checklist for a small SaaS company: the ordered steps, the reconciliations to run, and the reports to produce.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Walk me through a month-end close checklist for a small SaaS company: the ordered steps, the reconciliations to run, and the reports to produce.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "accountant"
}
```

## Answer
Cole – Accountant’s month‑end close checklist  
(ordered steps, reconciliations, reports)

**1. Capture all month‑to‑date financial entries**
- Run the ERP/CRM financial export for the current month.  
- Include subscription revenue, usage charges, add‑on sales, refunds, and write‑offs.  
- Verify that all transactions have a proper posting date and GL code.

**2. Reconcile bank / cash accounts**
- Import the latest bank statements (ACH, wire, credit‑card processor) for the month.  
- Reconcile each statement against the GL Cash‑and‑Bank ledger.  
- Investigate & resolve any uncleared items or timing differences.  
- Record bank‑statement‑release entries in the trial balance.

**3. Reconcile accounts receivable (AR)**
- Generate the AR aging report.  
- Match each invoice to the corresponding payment or credit in the cash ledger.  
- Confirm no outstanding balances that should be included in the month’s revenue.  
- Post any necessary revenue‑recognition adjustments (e.g., deferred revenue to prepaid, accrued SaaS revenue).

**4. Reconcile accounts payable (AP)**
- Pull the AP aging report for the current month.  
- Match each vendor invoice to the GL entry and confirm payment status.  
- Validate that all due invoices are posted, and any prepayments are applied correctly.  
- Record interest or late‑fee adjustments if applicable.

**5. Reconcile prepaid and deferred revenue**
- Review the balance of prepaid services and deferred revenue accounts.  
- Apply the appropriate revenue‑recognition formula across active subscriptions (e.g., straight‑line or milestone).  
- Post the amount earned for the month, and carry forward the remaining balance.

**6. Reconcile payroll, payroll taxes & benefits**
- Verify that payroll expenses (base, bonuses, commissions) match the payroll system export.  
- Check payroll tax liabilities in the GL.  
- Post year‑to‑date accruals for future tax payment dates.

**7. Review month‑end adjustments & accruals**
- Accrue unbilled usage or long‑term contracts that should be recognized in the current month.  
- Record accruals for expenses such as consulting, IT support, or vendor services invoiced late.  
- Evaluate any deferred expense reversals (e.g., prepaid advertising, prepaid hosting fees).

**8. Close the GL and prepare for reporting**
- Run a trial balance to verify debits equal credits.  
- Update the general ledger with all closing entries for the month.  
- Perform a backup of the closed month’s GL files.

---

### Reconciliations to Run (items to generate & resolve before finalizing)

| Account / Ledger | Source | Action |
|------------------|--------|--------|
| Cash & Bank     | Bank statements; ACH/credit‑card processor feeds | Reconcile, post offsets |
| Accounts Receivable | Aging schedule; Payment tracking | Match invoices → payments |
| Accounts Payable | Vendor statements; Invoice ledger | Match invoices → AP ledger |
| Prepaid / Deferred Revenue | Service contracts; Subscription CRM | Recognize earned portion, roll forward |
| Payroll | Payroll processor export | Verify expenses, taxes, accruals |
| General Ledger | GL reports (trial balance) | Validate balances, post adjustments |
| Fixed Assets | Asset register, depreciation schedule | Reconcile depreciation entries |

---

### Reports to Produce (final deliverables)

1. **Consolidated Income Statement** – revenue, cost of services, gross margin, SG&A, EBITDA, Net income.  
2. **Balance Sheet** – assets (cash, receivables, prepaid), liabilities (payable, deferred revenue, accrued expenses), equity.  
3. **Cash‑Flow Statement** – operating, investing, financing cash movements.  
4. **Revenue Analysis Report** – segmentation by subscription tier, customer cohort, churn, ARPU.  
5. **Accounts Receivable Aging** – 0‑30, 31‑60, 61‑90, 90+ days summary.  
6. **Accounts Payable Aging** – due dates, early‑payment discounts, delinquent vendors.  
7. **Budget vs. Actual Variance** – month‑to‑date comparison against the approved operating budget.  
8. **Management Summary** – key metrics (ARR, LTV, churn %, gross margin %, burn rate), executive highlights, and any significant irregularities.  

These items should be circulated to the finance team and management by the close‑out deadline, typically the last business day of the month.

<details><summary>Log</summary>

```
[2026-06-10T10:37:57.045Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T10:37:57.092Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T10:39:11.826Z] Hermes responded in 74.7s (4371 chars).
[2026-06-10T10:39:17.290Z] Quality gate: Hermes answer passed (score 0.96).
```
</details>
