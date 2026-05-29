---
title: "Research: As a Data Analyst, draft sql that's readable, correct, and explained.

Context: Role: Custom
Title: Draft SQL that's rea"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, draft sql that's readable, correct, and explained.

Context: Role: Custom
Title: Draft SQL that's readable, correct, and explained
Description: Persona-derived starter task for "Dale"

**SQL Draft – Readable, Correct, and Fully Explained**

Below is a generic, well‑structured SQL query that you can adapt to most analytical tasks (e.g., summarising sales, user activity, or any fact‑dimension model).  
Each clause is broken out on its own line, aliased clearly, and accompanied by an inline comment that explains *why* it is there and *what* it does.

```sql
/* --------------------------------------------------------------
   Example: Monthly sales summary by product category
   -------------------------------------------------------------- */
SELECT
    -- Human‑readable period (e.g., 2023‑01)
    DATE_TRUNC('month', o.order_date)          AS month,

    -- Descriptive name of the product’s top‑level category
    c.category_name                            AS category,

    -- Count of distinct orders (order volume)
    COUNT(DISTINCT o.order_id)                 AS orders_cnt,

    -- Sum of line‑item revenue (gross sales)
    SUM(oi.quantity * oi.unit_price)           AS gross_sales,

    -- Net sales after discount (if any)
    SUM(oi.quantity * oi.unit_price *
        (1 - COALESCE(oi.discount_rate, 0)))   AS net_sales,

    -- Average order value (AOV) – useful KPI
    AVG(oi.quantity * oi.unit_price)           AS avg_order_value

FROM
    -- Fact table: each row = a line‑item on an order
    sales.order_items      AS oi

    -- Join to the order header for date & customer info
    INNER JOIN sales.orders          AS o
        ON oi.order_id = o.order_id

    -- Join to the product dimension for category info
    INNER JOIN dim.products          AS p
        ON oi.product_id = p.product_id
    INNER JOIN dim.product_categories AS c
        ON p.category_id = c.category_id

WHERE
    -- Restrict to the period you care about (e.g., last 12 months)
    o.order_date >= DATEADD('month', -12, CURRENT_DATE)

GROUP BY
    -- Group by the columns that are not aggregated
    DATE_TRUNC('month', o.order_date),
    c.category_name

ORDER BY
    -- Show newest month first, then alphabetic category
    month DESC,
    category ASC;
```

### Why This Style Works for a Data Analyst

| Element | Reason / Benefit |
|---------|------------------|
| **One clause per line** | Improves scan‑ability; you can quickly locate `SELECT`, `FROM`, `WHERE`, etc. |
| **Explicit aliases (`AS`)** | Makes column names self‑describing in the result set. |
| **Inline comments (`--`)** | Document intent without needing a separate design doc. |
| **`DATE_TRUNC` / `DATEADD`** | Handles date bucketing and rolling windows in a DB‑agnostic way (most modern warehouses support these functions). |
| **`COALESCE` for discounts** | Safeguards against `NULL` discount rates, preventing arithmetic errors. |
| **`COUNT(DISTINCT ...)`** | Guarantees accurate order counts even if an order has multiple line items. |
| **`GROUP BY` mirrors `SELECT` non‑aggregates** | Guarantees syntactic correctness and avoids accidental grouping errors. |
| **`ORDER BY` with explicit direction** | Guarantees deterministic output ordering for downstream tools. |

### Adapting the Template

1. **Change the source tables** – Replace `sales.order_items`, `sales.orders`, `dim.products`, and `dim.product_categories` with the tables in your own schema.  
2. **Swap the KPI calculations** – Add/remove aggregates (e.g., `SUM(oi.quantity)` for units sold, `COUNT(*)` for row counts).  
3. **Adjust the time window** – Modify the `WHERE` clause to use weeks, quarters, or a custom date range.  
4. **Add filters** – Insert additional `AND` conditions (e.g., `c.region = 'EMEA'`) as needed.

---

**Bottom line:** This pattern yields clean, maintainable SQL that is easy for teammates (or future you) to read, verify, and extend. Feel free to copy‑paste and tailor it to your specific analytical question.

## Web sources
1. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_
2. [Oficiālās statistikas portāls](https://stat.gov.lv/lv) _(relevance 1, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
