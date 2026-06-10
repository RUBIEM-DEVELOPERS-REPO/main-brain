---
type: job
title: Ad-hoc: Write user stories with acceptance criteria for a customer s
slug: ad-hoc-write-user-stories-with-acceptance-criteria-for-a-cus-7abe2783
created: 2026-06-10T15:45:58.195Z
jobId: 7abe2783-6c07-4058-8c88-3d40d0087c69
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T15:44:02.001Z
finishedAt: 2026-06-10T15:45:58.195Z
---

# Ad-hoc: Write user stories with acceptance criteria for a customer s

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T15:44:02.001Z
- **Finished:** 2026-06-10T15:45:58.195Z
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
**User Stories**  
1. As a **customer**, I want to submit a refund request through the self‑service portal so that I can receive a refund without contacting support.  
2. As a **customer**, I want to view the status of my refund request so that I know when I will be reimbursed.  
3. As a **customer**, I want to receive an email confirmation when my refund request is received and when it is completed.  
4. As an **operator**, I want the system to automatically verify that the refund request meets policy criteria so that incorrect refunds are prevented.  
5. As a **team lead**, I want to see a low‑level report of all self‑service refunds so that I can monitor usage and budget impact.  

**Acceptance Criteria**  
- The portal displays a “Request Refund” button on the order summary page.  
- Clicking the button opens a form that requires:  
  - Order ID (validated against the order database).  
  - Reason for refund (choice list plus “Other” text).  
  - Amount to refund (must be ≤ purchased amount).  
  - Consent checkbox for refund policy acknowledgement.  
- Validation errors are shown inline before submission.  
- Upon successful submission, the backend creates a refund record with status **Pending** and returns a unique refund ID.  
- An email with subject “Refund Request Received – Ref‑{ID}” is sent immediately and contains the refund ID, order details, and expected timeline.  
- The refund status can be queried from the portal and shows: Pending → Approved → Processed.  
- If payment was via card, the system initiates an ACH/credit‑card refund through the payment connector and marks status **Processed** after a successful webhook receipt.  
- If payment was via invoice, the system marks status **Approved** and creates a credit memo, but processing is delegated to the finance team.  
- Once processed, the portal generates an email “Refund Completed – Ref‑{ID}” that includes the final amount and date.  
- All refund records are auditable: timestamp, user ID, order ID, amount, status, and processing method.  
- The system logs any validation failures or rejected requests for later review.  
- Edge cases such as duplicate refund requests for the same order are flagged and prevented.  

**Edge Cases**  
- **Duplicate Request:** The system rejects if a pending or completed refund exists for the same order.  
- **Excess Amount:** Requesting more than the original purchase price results in an error.  
- **No Matching Order:** Order ID not found triggers a “not found” error.  
- **Card Chargeback as Refund:** If the payment was a chargeback, the refund is routed to a manual audit queue.  
- **Partial Refund on Distributed Licenses:** If fewer seats remain, the system calculates the prorated refund automatically.  
- **Expired Order:** Refunds requested for orders older than 90 days require manual override.  
- **Non‑Refundable Items:** Items flagged as non‑refundable trigger a rejection message explaining the policy.  

**Success Metrics**  
- **Resolution Time:** 90% of refund requests are processed to “Processed” within 7 business days.  
- **Accuracy Rate:** 100% of refunds match the requested amount within transaction tolerance.  
- **Automation Rate:** 80% of refunds are fully self‑service without operator intervention.  
- **Customer Satisfaction:** Net Promoter Score for the refund experience ≥ 75.  
- **Audit Coverage:** 100% of refund records are retrievable for audit purposes.  

Neuro

<details><summary>Log</summary>

```
[2026-06-10T15:44:02.002Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T15:44:02.008Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T15:45:51.973Z] Hermes responded in 110.0s (3493 chars).
[2026-06-10T15:45:58.195Z] Quality gate: Hermes answer passed (score 0.89).
```
</details>
