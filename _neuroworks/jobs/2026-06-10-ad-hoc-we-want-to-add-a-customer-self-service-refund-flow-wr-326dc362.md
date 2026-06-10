---
type: job
title: Ad-hoc: We want to add a customer self-service refund flow. Write th
slug: ad-hoc-we-want-to-add-a-customer-self-service-refund-flow-wr-326dc362
created: 2026-06-10T10:41:58.360Z
jobId: 326dc362-dd99-4211-a493-d9f1f4225685
status: succeeded
template: general-task
persona: business-analyst
personaName: Bram
startedAt: 2026-06-10T10:40:39.785Z
finishedAt: 2026-06-10T10:41:58.360Z
---

# Ad-hoc: We want to add a customer self-service refund flow. Write th

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T10:40:39.785Z
- **Finished:** 2026-06-10T10:41:58.360Z
- **Title:** Ad-hoc: We want to add a customer self-service refund flow. Write th

## Inputs
```json
{
  "task": "(You are operating as Bram, the Business Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWe want to add a customer self-service refund flow. Write the requirements: user stories, acceptance criteria, edge cases, and the success metrics.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "We want to add a customer self-service refund flow. Write the requirements: user stories, acceptance criteria, edge cases, and the success metrics.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "business-analyst"
}
```

## Answer
USER STORIES  
1. As a Customer, I want to request a refund through the self‑service portal so that I can receive a refund without speaking to support.  
2. As a Product Manager, I want a dashboard that shows all pending refund requests so that I can review volume and trend.  
3. As a Finance Analyst, I want the refund process to trigger an automatic accounting entry so that the charge‑back is reconciled in the next cycle.  
4. As a Support Agent, I want the ability to review and flag a refund request before it is issued so that fraud can be detected early.  

ACCEPTANCE CRITERIA  
• Customer request page  
  – A “Refund” link is visible on every order detail page.  
  – The request form contains: reason (text), attachment upload (pdf/issue screenshot), and a confirmation checkbox.  
  – Submitting sends a confirmation email to the customer and creates a “Pending” record in the refunds table.  
  – The customer sees a “Your refund request is pending” status for 24 h, then “Processing.”  

• Dashboard view (Product Manager)  
  – A page titled “Refund Summary” lists pending, approved, and denied requests with columns: Order ID, Customer, Amount, Status, Requested Date.  
  – A filter bar allows search by status, date range, and customer name.  
  – A “Refresh” button reloads the data in under 5 s.  

• Automation (Finance Analyst)  
  – When a request is marked “Approved,” an entry is queued to the accounting API.  
  – The API call includes Order ID, Refunded Amount, timestamp, and a unique refund ID.  
  – Upon successful write, the status turns “Completed” and an email is sent to finance.  

• Review & Override (Support Agent)  
  – A support page allows agents to view the request details, add comments, and change status to “Denied.”  
  – Denied actions require a reason field that is stored in the audit log.  

EDGE CASES  
1. Customer requests a refund for an item that was already returned – the flow must detect the double‑refund and block it, flagging a review.  
2. The accounting API is unavailable – the system must queue the refund until connectivity is restored and retry every 10 min.  
3. Attachments exceed 5 MB – the file is rejected with a clear message; the customer can re‑upload.  
4. The user logs in from a different device – the request status must sync across sessions.  
5. An XML order in the legacy system – the import script must convert the order identifier before the refund is created.  
6. Emergency policy change (e.g., max refund amount drops from $300 to $200) – the system must re‑evaluate queued requests and flag those that exceed the new cap for manual review.  

SUCCESS METRICS  
- < 1 % of refund requests are denied after review.  
- Refunds approved by finance are invoiced within 48 h of approval.  
- Rendering of the dashboard update finishes in < 5 s for 95 % of usage sessions.  
- Customer satisfaction score for the refund process > 4.5 / 5 (based on post‑refund survey).  
- Fraud detection rate: ≥ 90 % of flagged requests deemed fraudulent upon audit.  

These items give a thorough, role‑aligned specification for building the self‑service refund flow.

<details><summary>Log</summary>

```
[2026-06-10T10:40:39.786Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T10:40:39.792Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T10:41:52.859Z] Hermes responded in 73.1s (3181 chars).
[2026-06-10T10:41:58.360Z] Quality gate: Hermes answer passed (score 0.89).
```
</details>
