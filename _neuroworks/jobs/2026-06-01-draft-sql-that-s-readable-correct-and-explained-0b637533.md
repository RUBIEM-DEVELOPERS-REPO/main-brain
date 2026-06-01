---
type: job
title: Draft SQL that's readable, correct, and explained
slug: draft-sql-that-s-readable-correct-and-explained-0b637533
created: 2026-06-01T09:43:53.939Z
jobId: 0b637533-6998-488c-b7e6-4f12f2b12ddd
status: succeeded
template: custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:42:34.552Z
finishedAt: 2026-06-01T09:43:53.939Z
---

# Draft SQL that's readable, correct, and explained

- **Status:** succeeded
- **Template:** custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
- **Started:** 2026-06-01T09:42:34.552Z
- **Finished:** 2026-06-01T09:43:53.939Z
- **Title:** Draft SQL that's readable, correct, and explained

## Plan
Default research plan for: As a Data Analyst, draft sql that's readable, correct, and explained

### Steps
1. ✓ Researching "As a Data Analyst, draft sql that's readable, correct, and explained" — vault + web — `research.deep` (54.6s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
Below is a short, **readable** SQL query that follows best‑practice formatting, includes inline comments, and is accompanied by a brief explanation of each part.  The style is deliberately simple so that anyone on a data‑analysis team can understand, modify, and reuse it.

---

## Example: Monthly Sales Summary by Product Category  

```sql
/* --------------------------------------------------------------
   Purpose:  Produce a month‑by‑month sales summary for each
             product category, showing total revenue, total
             units sold, and the average selling price.
   Tables:  sales          – transactional sales data
            products       – product reference (incl. category)
   Filters:  Only completed orders (status = 'shipped')
   -------------------------------------------------------------- */

SELECT
    DATE_TRUNC('month', s.sale_date)      AS sale_month,      -- month of the sale
    p.category                            AS product_category,-- human‑readable category
    SUM(s.quantity)                       AS units_sold,      -- total units sold
    SUM(s.quantity * s.unit_price)        AS total_revenue,   -- revenue = qty × price
    ROUND(                              
        SUM(s.quantity * s.unit_price) / NULLIF(SUM(s.quantity),0),
        2)                                 AS avg_price        -- avg price per unit
FROM
    sales      AS s
JOIN
    products   AS p
      ON s.product_id = p.product_id
WHERE
    s.status = 'shipped'                     -- exclude returns/cancellations
GROUP BY
    DATE_TRUNC('month', s.sale_date),
    p.category
ORDER BY
    sale_month ASC,
    total_revenue DESC;
```

### How the query works  

| Clause | What it does | Why it matters |
|--------|--------------|----------------|
| **SELECT** | Picks the columns we want in the final report. | Each column is given a clear alias and a comment. |
| **DATE_TRUNC('month', s.sale_date)** | Converts a full timestamp to the first day of its month. | Enables grouping by month rather than by day. |
| **JOIN** | Links each sale to its product record to obtain the category. | Keeps the query in **normalized** form – no duplicated data. |
| **WHERE s.status = 'shipped'** | Filters out incomplete or returned orders. | Guarantees the numbers reflect actual revenue. |
| **GROUP BY** | Aggregates rows by month and category. | Produces one summary row per month/category combination. |
| **SUM(...)** | Calculates totals for units and revenue. | Core metrics for a sales analyst. |
| **ROUND(..., 2)** | Computes the average selling price and rounds to two decimals. | Makes the figure presentation‑ready. |
| **ORDER BY** | Sorts the result chronologically, then by revenue. | Makes the output easy to scan for trends. |

### Tips for readability & correctness  

1. **Upper‑case keywords** (`SELECT`, `FROM`, `WHERE`, …) make the logical structure stand out.  
2. **Indentation** mirrors the logical hierarchy (SELECT → FROM → JOIN → WHERE → GROUP BY → ORDER BY).  
3. **Inline comments** (`-- comment`) explain non‑obvious transformations.  
4. **NULL‑safe division** (`NULLIF(...,0)`) prevents divide‑by‑zero errors when a month/category has no sales.  
5. **Explicit aliases** (`sales AS s`, `products AS p`) keep column references short yet clear.  

---

*Sources*: The request itself is recorded in the vault notes titled “Research: As a Data Analyst, draft sql that’s readable, correct, and explained” ([0‑Inbox/202605291434‑research‑as‑a‑data‑analyst‑draft‑sql‑that‑s‑readable‑correct‑and‑expl.md] and [0‑Inbox/202605292113‑research‑as‑a‑data‑analyst‑draft‑sql‑that‑s‑readable‑correct‑and‑expl.md]). No external product information was required.

<details><summary>Log</summary>

```
[2026-06-01T09:42:34.561Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:42:37.789Z] Thinking about the best approach…
[2026-06-01T09:42:37.835Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:42:47.293Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:42:47.293Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, draft sql that's readable, correct, and explained.
[2026-06-01T09:42:47.297Z] Step 1 of 1: Researching "As a Data Analyst, draft sql that's readable, correct, and explained" — vault + web
[2026-06-01T09:43:41.912Z] All sub-agents finished in 54.6s.
[2026-06-01T09:43:41.912Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:43:41.918Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:43:41.918Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:43:41.918Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:43:49.861Z] Wave 1 finished in 7.9s.
[2026-06-01T09:43:49.861Z] All sub-agents finished in 7.9s.
[2026-06-01T09:43:49.861Z] Quality check passed (90%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-01T09:43:49.861Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:43:53.939Z] Vault commit: done.
```
</details>
