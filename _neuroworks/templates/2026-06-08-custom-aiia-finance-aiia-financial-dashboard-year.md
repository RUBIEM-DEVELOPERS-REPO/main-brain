---
type: template
title: AIIA financial dashboard (year) (custom-aiia-finance-aiia-financial-dashboard-year)
slug: custom-aiia-finance-aiia-financial-dashboard-year
created: 2026-06-08T08:55:04.889Z
templateId: custom-aiia-finance-aiia-financial-dashboard-year
role: Custom
originTask: Read the company's AIIA financial dashboard for the requested year (default to the current year if none is given). Use connector.call on the 'AIIA Finance' connector: GET /api/agent/dashboard?year=YYYY. Then explain the headline figures in plain cash terms — lead with the top number, then the breakdown, then what it means. Cite the endpoint + year for every figure. If the connector errors or returns no data, say so and stop rather than estimating.
---

# AIIA financial dashboard (year) (custom-aiia-finance-aiia-financial-dashboard-year)

Pull the AIIA yearly dashboard and explain the headline numbers, sourced.

**Origin task:** Read the company's AIIA financial dashboard for the requested year (default to the current year if none is given). Use connector.call on the 'AIIA Finance' connector: GET /api/agent/dashboard?year=YYYY. Then explain the headline figures in plain cash terms — lead with the top number, then the breakdown, then what it means. Cite the endpoint + year for every figure. If the connector errors or returns no data, say so and stop rather than estimating.

## Saved plan

```json
{
  "steps": [],
  "waves": []
}
```
