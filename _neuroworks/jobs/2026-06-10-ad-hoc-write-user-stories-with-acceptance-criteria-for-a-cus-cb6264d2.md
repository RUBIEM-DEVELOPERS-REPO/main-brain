---
type: job
title: Ad-hoc: Write user stories with acceptance criteria for a customer s
slug: ad-hoc-write-user-stories-with-acceptance-criteria-for-a-cus-cb6264d2
created: 2026-06-10T15:41:18.742Z
jobId: cb6264d2-a24a-4a79-83bf-2fd408a42cc9
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T15:39:36.844Z
finishedAt: 2026-06-10T15:41:18.741Z
---

# Ad-hoc: Write user stories with acceptance criteria for a customer s

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T15:39:36.844Z
- **Finished:** 2026-06-10T15:41:18.741Z
- **Title:** Ad-hoc: Write user stories with acceptance criteria for a customer s

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite user stories with acceptance criteria for a customer self-service refund feature. Include edge cases.\n\nInterpretation: intent=draft-other, target=\"user stories with acceptance criteria\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Write user stories with acceptance criteria for a customer self-service refund feature. Include edge cases.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "draft-other",
  "intentTarget": "user stories with acceptance criteria",
  "personaId": "clawbot"
}
```

## Answer
**User Stories & Acceptance Criteria – Self‑Service Refund Feature**

1. **As a registered customer, I want to request a refund directly from my account so that I can receive resolution without contacting support.**  
   - ↳ I can navigate to the “My Orders” section and view a list of recent purchases.  
   - ↳ For each order, a “Request Refund” option appears next to eligible items (within the refund window).  
   - ↳ Clicking the option opens a modal where I enter a reason (optional) and confirm the request.  
   - ↳ Upon confirmation, the system logs the request, sends an email to the customer and to the finance team, and updates the order status to “Refund Requested.”  
   - ↳ I receive a confirmation message on the screen and an email within 2 business days.  

2. **As a finance staff member, I want an automated workflow that captures refund requests so that I can approve or reject them efficiently.**  
   - ↳ All refund requests appear in a dedicated “Refund Queue” dashboard with customer name, order ID, amount, and reason.  
   - ↳ Finance can approve or reject each request with a single click.  
   - ↳ Upon approval, the system initiates the payment reversal through the billing connector and updates the order status to “Refunded.”  
   - ↳ Rejected requests are marked “Refund Denied” with a reason, and the customer is notified via email.  

3. **As a customer service agent, I want to surface refund history in the help chat so that I can answer follow‑up queries quickly.**  
   - ↳ The help chat engine queries the refund database when the customer references a refund.  
   - ↳ The assistant can pull status (“Approved”, “Denied”, “Pending”) and estimated time for completion.  
   - ↳ If the request is denied, the assistant displays the denial reason and next steps.  

4. **As a compliance officer, I need logs of all refund requests and actions so that I can audit the process annually.**  
   - ↳ Each request, approval, denial, and payment reversal is recorded in an immutable audit table with timestamps and user IDs.  
   - ↳ Export to CSV/JSON is available for compliance review.  

5. **As a developer, I want automated unit tests for the refund API routes so that regressions are caught early.**  
   - ↳ Tests cover successful request, invalid request (e.g., beyond refund window), and edge cases such as refunding a partially refunded order.  

**Edge Cases**

- **Expired Refund Window** – If a request is made after the allowed period, the “Request Refund” option is disabled and a tooltip explains the restriction.  
- **Partial Refund Requests** – Customers can choose to refund a portion of the order; the system calculates prorated amounts and updates order status to “Partially Refunded.”  
- **Multiple Open Refunds** – The UI limits a user to one pending refund per order to prevent duplicate processing.  
- **Refunds for Subscribed Services** – For recurring billing, the system cancels future invoices automatically when the refund is approved.  
- **Network Failures During Processing** – The refund request is idempotent; retries are handled by the backend queue, and the customer is notified if the operation stalls.  
- **Refund of Return Items** – If an item was returned but not yet refunded, the refund flow merges the return and refund in a single operation to avoid double payment.  

**Success Metrics**

- 90 % of refund requests answered within 24 hours.  
- 1 % or fewer customer complaints related to refund processing.  
- 95 % accuracy of audit logs with no missing entries.  

*— Neuro*

<details><summary>Log</summary>

```
[2026-06-10T15:39:36.847Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T15:39:36.865Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T15:41:13.388Z] Hermes responded in 96.5s (3603 chars).
[2026-06-10T15:41:18.741Z] Quality gate: Hermes answer passed (score 0.93).
```
</details>
