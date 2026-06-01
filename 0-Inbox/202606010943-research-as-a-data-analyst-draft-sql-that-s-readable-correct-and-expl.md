---
title: "Research: As a Data Analyst, draft sql that's readable, correct, and explained"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a Data Analyst, draft sql that's readable, correct, and explained

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

## Web sources
1. [Data and its Types - GeeksforGeeks](https://www.geeksforgeeks.org/data-analysis/what-is-data/) _(relevance 11, http)_
2. [Data - Wikipedia](https://en.wikipedia.org/wiki/Data) _(relevance 10, http)_
3. [What is Data? | IBM](https://www.ibm.com/think/topics/data) _(relevance 10, http)_

## Vault hits at time of research
- [[0-Inbox/202605291434-research-as-a-data-analyst-draft-sql-that-s-readable-correct-and-expl.md]] (line 2)
- [[0-Inbox/202605292113-research-as-a-data-analyst-draft-sql-that-s-readable-correct-and-expl.md]] (line 2)
