---
title: "Research: As a Data Analyst, draft sql that's readable, correct, and explained"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Data Analyst, draft sql that's readable, correct, and explained

**SQL template – readable, correct, and fully explained**

Below is a generic “sales‑by‑region” query that you can adapt to any relational schema.  
It is written with **clear naming, consistent indentation, and comments** so that a fellow analyst (or future‑you) can instantly see what each part does.

```sql
/* --------------------------------------------------------------
   1️⃣  What we want:
   – Total sales amount per product category
   – Broken down by calendar month and sales region
   – Only include months that have at least one sale
   -------------------------------------------------------------- */

SELECT
    -- 2️⃣  Grouping columns (the “dimensions” of the report)
    r.region_name            AS region,          -- human‑readable region
    p.category_name          AS category,        -- product category
    DATE_TRUNC('month', s.sale_date) AS month, -- first day of the month

    -- 3️⃣  Metric column (the “measure” we are aggregating)
    SUM(s.quantity * s.unit_price) AS total_sales   -- revenue in currency units
FROM
    sales      AS s          -- fact table: one row per line‑item
JOIN
    products   AS p ON s.product_id = p.product_id
JOIN
    regions    AS r ON s.region_id  = r.region_id
WHERE
    -- 4️⃣  Filter out unwanted rows early (helps performance)
    s.sale_date >= DATE '2023-01-01'          -- analysis window start
    AND s.sale_date <  DATE '2024-01-01'      -- analysis window end
    AND s.quantity > 0                       -- ignore returns / zero‑qty rows
GROUP BY
    r.region_name,
    p.category_name,
    DATE_TRUNC('month', s.sale_date)
ORDER BY
    r.region_name,
    p.category_name,
    month;
```

### How the query is organized

| Step | Purpose | Why it matters |
|------|---------|----------------|
| **1️⃣ Comment block** | Summarises the business question. | Gives context without reading the whole script. |
| **2️⃣ SELECT list** | Lists every column that will appear in the result, with clear aliases. | Makes the output self‑describing. |
| **3️⃣ Metric calculation** | `SUM(quantity * unit_price)` computes revenue. | Keeps the math in one place; easy to change (e.g., add discounts). |
| **4️⃣ WHERE clause** | Restricts rows to the period of interest and removes nonsense data. | Improves performance and prevents misleading totals. |
| **GROUP BY** | Mirrors the SELECT dimensions exactly. | Guarantees the aggregation is correct and avoids hidden columns. |
| **ORDER BY** | Sorts the final grid for quick visual scanning. | Makes the report ready for export or dashboarding. |

### Adapting the template

| Change | What to edit |
|--------|--------------|
| Table/column names | Replace `sales`, `products`, `regions` and their columns with your schema’s equivalents. |
| Time window | Adjust the dates in the `WHERE` clause or replace with a parameter (`@StartDate`, `@EndDate`). |
| Metric | Swap `quantity * unit_price` for any other calculation (e.g., `discounted_price`). |
| Additional filters | Add more `AND …` conditions (e.g., `p.brand = 'Acme'`). |
| Granularity | Change `DATE_TRUNC('month', …)` to `week`, `quarter`, or keep the raw date. |

### Why this style is “readable”

1. **Logical sections** (comment blocks, SELECT, FROM, WHERE, GROUP BY, ORDER BY) are each on their own line.  
2. **Aliases** (`s`, `p`, `r`) are short but meaningful, and every output column gets an explicit alias (`AS region`, `AS total_sales`).  
3. **Inline comments** explain non‑obvious expressions (`DATE_TRUNC('month', …)`).  
4. **Consistent indentation** (2‑space indent for sub‑clauses) lets the eye follow the hierarchy.  

Copy the script into your SQL client, replace the placeholders, and you’ll have a clean, production‑ready query ready for analysis or scheduled reporting.

## Web sources
1. [Data - Wikipedia](https://en.wikipedia.org/wiki/Data) _(relevance 10, http)_
2. [Interneta veikals | Baltic Data](https://www.balticdata.lv/) _(relevance 6, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[| Latvijas Atvērto datu portāls](https://data.gov.lv/lv)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
