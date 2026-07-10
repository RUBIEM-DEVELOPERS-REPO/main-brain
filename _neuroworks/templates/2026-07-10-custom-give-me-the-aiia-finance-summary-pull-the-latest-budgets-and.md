---
type: template
title: Describe the Aiia FinanceFlow connector, fetch latest budgets, and synthesise a Finance Summary with total budgeted amount. (custom-give-me-the-aiia-finance-summary-pull-the-latest-budgets-and)
slug: custom-give-me-the-aiia-finance-summary-pull-the-latest-budgets-and
created: 2026-07-10T17:45:18.900Z
templateId: custom-give-me-the-aiia-finance-summary-pull-the-latest-budgets-and
role: Custom
originTask: Give me the Aiia Finance Summary, pull the latest budgets and tell me total budgeted amount
---

# Describe the Aiia FinanceFlow connector, fetch latest budgets, and synthesise a Finance Summary with total budgeted amount. (custom-give-me-the-aiia-finance-summary-pull-the-latest-budgets-and)

Saved from chat: "Give me the Aiia Finance Summary, pull the latest budgets and tell me total budgeted amount"

**Origin task:** Give me the Aiia Finance Summary, pull the latest budgets and tell me total budgeted amount

## Saved plan

```json
{
  "steps": [
    {
      "tool": "connector.describe",
      "args": {
        "connector": "Aiia FinanceFlow"
      },
      "rationale": "Understand the available endpoints and schema before querying",
      "label": "connector.describe"
    },
    {
      "tool": "connector.call",
      "args": {
        "connector": "Aiia FinanceFlow",
        "path": "/api/budgets",
        "method": "GET"
      },
      "rationale": "Fetch the latest budgets from the live Aiia FinanceFlow connector",
      "label": "connector.call"
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Based on the budgets data returned:\n\n$step_1\n\nProvide a Finance Summary with:\n1. Total budgeted amount (sum of all budgets)\n2. Breakdown by budget category/department if available\n3. Key budget metrics",
        "system": "You are a finance analyst. Synthesise the budget data into a clear summary with totals and key insights. Be precise with numbers."
      },
      "rationale": "Synthesise the raw budget data into a readable Finance Summary with the total budgeted amount",
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "Give me the Aiia Finance Summary, pull the latest budgets and tell me total budgeted amount",
        "answer": "# Aiia Finance Summary\n\n## Total Budgeted Amount: $13,371.00\n\nPer `/api/budgets` (Aiia FinanceFlow connector), four active monthly budgets are in the system:\n\n| Month | Category | Amount |\n|-------|----------|--------|\n| September 2025 | Other | $4,700.00 |\n| October 2025 | Utilities | $2,901.00 |\n| November 2025 | Other | $2,885.00 |\n| December 2025 | Other | $2,885.00 |\n\n## Budget Composition\n\n**By Category:**\n- **Other:** $10,470.00 (78.3%)\n- **Utilities:** $2,901.00 (21.7%)\n\n**By Period:** All budgets are monthly recurring with no end dates, indicating ongoing operational commitments.\n\n## Key Observations\n\nSeptember carries the highest monthly allocation at $4,700.00—62% above the average of $3,342.75. November and December are aligned at $2,885.00 each, suggesting standardized Q4 planning. The \"Other\" category dominates the budget mix, representing three of four line items and nearly four-fifths of total spend; only October's utilities expense is formally categorized.\n\nAll budgets were created by the admin user between late August and early December 2025.",
        "sources": "[1] connector.describe\n{\"id\":\"ab4bd82b-fea2-4e1d-9999-6a2dc39ba31e\",\"label\":\"Aiia FinanceFlow\",\"baseUrl\":\"https://aiiafinaceflow.replit.app\",\"description\":\"Aiia FinanceFlow — external financial management system (budgets, receipts, purchase requisitions, AI-assisted). AUTH CAVEAT: this app uses a 24h Express session cookie, not a persistent API token — the baked-in cookie WILL expire ~24h from setup (2026-07-10) and calls will start failing with 401/redirect-to-login until this connector is re-authenticated (re-run the login exchange to refresh the cookie). No refresh-token mechanism exists on this app.\",\"auth\":{\"type\":\"header\",\"name\":\"Cookie\",\"secretSet\":true},\"writeEnabled\":false,\"headers\":[],\"endpoints\":[{\"name\":\"list-budgets\",\"method\":\"GET\",\"path\":\"/api/budgets\",\"description\":\"List budgets (confirmed live, JSON)\"},{\"name\":\"list-receipts\",\"method\":\"GET\",\"path\":\"/api/receipts\",\"description\":\"List receipts (confirmed live, JSON)\"},{\"name\":\"list-requisitions\",\"method\":\"GET\",\"path\":\"/api/requisitions\",\"description\":\"List purchase requisitions (confirmed live, JSON)\"}]}\n\n[2] connector.call (path=\"/api/budgets\")\n{\"ok\":true,\"status\":200,\"url\":\"https://aiiafinaceflow.replit.app/api/budgets\",\"method\":\"GET\",\"contentType\":\"application/json; charset=utf-8\",\"body\":[{\"id\":\"6bd45190-ba2d-4c30-b55f-0d575a495a69\",\"name\":\"September Budget \",\"category\":\"Other\",\"amount\":\"4700.00\",\"period\":\"monthly\",\"startDate\":\"2025-09-01T00:00:00.000Z\",\"endDate\":null,\"description\":\"\",\"userId\":\"admin\",\"createdAt\":\"2025-08-30T08:58:55.361Z\"},{\"id\":\"5dd432c6-943a-4395-99af-7fb3e1b41372\",\"name\":\"October budget \",\"category\":\"Utilities\",\"amount\":\"2901.00\",\"period\":\"monthly\",\"startDate\":\"2025-10-01T00:00:00.000Z\",\"endDate\":null,\"description\":\"October Expenses \",\"userId\":\"admin\",\"createdAt\":\"2025-09-30T08:37:18.979Z\"},{\"id\":\"7b497f2d-0f12-4136-81c6-8085887d1c15\",\"name\":\"November budget\",\"category\":\"Other\",\"amount\":\"2885.00\",\"period\":\"monthly\",\"startDate\":\"2025-11-01T00:00:00.000Z\",\"endDate\":null,\"description\":\"these are expenses for November   \",\"userId\":\"admin\",\"createdAt\":\"2025-12-04T11:13:31.717Z\"},{\"id\":\"1cf65d2f-42a5-43bc-abdb-29ef052b459d\",\"name\":\"December budget\",\"category\":\"Other\",\"amount\":\"2885.00\",\"period\":\"monthly\",\"startDate\":\"2025-12-01T00:00:00.000Z\",\"endDate\":null,\"description\":\"December budget \",\"userId\":\"admin\",\"createdAt\":\"2025-12-04T11:13:56.249Z\"}]}\n\n[3] ollama.generate\n# Finance Summary Report\n\n## Overall Budget Overview\n\n**Total Budgeted Amount: $13,371.00**\n\n---\n\n## Budget Breakdown by Category\n\n| Category | Amount | Count | % of Total |\n|----------|--------|-------|-----------|\n| Other | $10,470.00 | 3 | 78.3% |\n| Utilities | $2,901.00 | 1 | 21.7% |\n| **TOTAL** | **$13,371.00** | **4** | **100%** |\n\n---\n\n## Monthly Budget Distribution\n\n| Month | Budget Name | Category | Amount |\n|-------|------------|----------|--------|\n| September 2025 | September Budget | Other | $4,700.00 |\n| October 2025 | October budget | Utilities | $2,901.00 |\n| November 2025 | November budget | Other | $2,885.00 |\n| December 2025 | December budget | Other | $2,885.00 |\n\n---\n\n## Key Insights\n\n1. **Dominant Category**: \"Other\" expenses represent 78.3% of total budgets, indicating a significant portion of unclassified or miscellaneous spending.\n\n2. **Highest Monthly Budget**: September has the largest allocation at $4,700.00, which is 62% higher than the average monthly budget of $3,342.75.\n\n3. **Budget Stabilization**: November and December budgets are identical at $2,885.00, suggesting standardized monthly planning for Q4.\n\n4. **Utilities Allocation**: October's utilities budget of $2,901.00 is the only categorized operational expense, representing 21.7% of total spending.\n\n5. **Budget Period**: All budgets are set on a monthly recurring basis with no end dates specified, indicating ongoing operational commitments.",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "# Aiia Finance Summary\n\n## Total Budgeted Amount: $13,371.00\n\nPer `/api/budgets` (Aiia FinanceFlow connector), four active monthly budgets are in the system:\n\n| Month | Category | Amount |\n|-------|----------|--------|\n| September 2025 | Other | $4,700.00 |\n| October 2025 | Utilities | $2,901.00 |\n| November 2025 | Other | $2,885.00 |\n| December 2025 | Other | $2,885.00 |\n\n## Budget Composition\n\n**By Category:**\n- **Other:** $10,470.00 (78.3%)\n- **Utilities:** $2,901.00 (21.7%)\n\n**By Period:** All budgets are monthly recurring with no end dates, indicating ongoing operational commitments.\n\n## Key Observations\n\nSeptember carries the highest monthly allocation at $4,700.00—62% above the average of $3,342.75. November and December are aligned at $2,885.00 each, suggesting standardized Q4 planning. The \"Other\" category dominates the budget mix, representing three of four line items and nearly four-fifths of total spend; only October's utilities expense is formally categorized.\n\nAll budgets were created by the admin user between late August and early December 2025.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Describe the Aiia FinanceFlow connector, fetch latest budgets, and synthesise a Finance Summary with total budgeted amount.",
  "waves": [
    [
      0,
      1
    ],
    [
      2
    ],
    [
      3,
      4
    ]
  ]
}
```
