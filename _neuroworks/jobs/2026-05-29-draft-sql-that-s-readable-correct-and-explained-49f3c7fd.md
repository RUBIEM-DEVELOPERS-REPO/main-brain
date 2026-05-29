---
type: job
title: Draft SQL that's readable, correct, and explained
slug: draft-sql-that-s-readable-correct-and-explained-49f3c7fd
created: 2026-05-29T19:49:11.373Z
jobId: 49f3c7fd-3cfb-494d-a8b8-98552df3fc43
status: succeeded
template: custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:44:25.927Z
finishedAt: 2026-05-29T19:49:11.373Z
---

# Draft SQL that's readable, correct, and explained

- **Status:** succeeded
- **Template:** custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
- **Started:** 2026-05-29T19:44:25.927Z
- **Finished:** 2026-05-29T19:49:11.373Z
- **Title:** Draft SQL that's readable, correct, and explained

## Plan
Generate a readable, correct SQL query with explanation.

### Steps
1. ✓ Thinking about it — `ollama.generate` (34.2s) · model `openai/gpt-oss-20b:free`
    > Directly generate the requested SQL and explanation.
2. ✓ Quality-checking the draft — `quality.check` (224.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Top‑10 Customers by Total Revenue – SQL Query & Explanation

The following self‑contained, well‑commented SQL query retrieves the top 10 customers ranked by total revenue from a typical e‑commerce data model.  
It returns the customer name, total revenue (rounded to two decimals), and the number of orders placed. The result set is ordered by revenue descending, then by customer name to break ties.  

```sql
/* --------------------------------------------------------------
   1️⃣  Purpose
   --------------------------------------------------------------
   Return the top 10 customers ranked by the total revenue they
   generated (sum of quantity × unit_price) along with:
     • Customer name
     • Total revenue (rounded to 2 decimals)
     • Number of orders placed
   The result is ordered by revenue descending, then by
   customer name to break ties.
   -------------------------------------------------------------- */

WITH customer_revenue AS (
    /* 2️⃣  Aggregate revenue and order count per customer
       --------------------------------------------------------------
       • Join orders → order_items to get all line items per order
       • Compute revenue per line item: quantity × unit_price
       • Sum revenue per customer
       • Count distinct orders per customer
       -------------------------------------------------------------- */
    SELECT
        c.customer_id,
        c.customer_name,
        ROUND(SUM(oi.quantity * oi.unit_price), 2) AS total_revenue,
        COUNT(DISTINCT o.order_id) AS order_count
    FROM customers c
    JOIN orders o
        ON c.customer_id = o.customer_id
    JOIN order_items oi
        ON o.order_id = oi.order_id
    GROUP BY c.customer_id, c.customer_name
)

SELECT
    customer_name,
    total_revenue,
    order_count
FROM customer_revenue
ORDER BY total_revenue DESC, customer_name
LIMIT 10;
```

**Explanation of key steps**

1. **CTE `customer_revenue`**  
   * Joins the three core tables (`customers`, `orders`, `order_items`).  
   * Calculates revenue per line item (`quantity * unit_price`).  
   * Aggregates per customer:  
     * `SUM` of line‑item revenue → `total_revenue`.  
     * `COUNT(DISTINCT order_id)` → `order_count`.  
   * `ROUND(..., 2)` ensures the revenue is presented with two decimal places.

2. **Final SELECT**  
   * Retrieves the aggregated columns.  
   * Orders by `total_revenue` descending, then by `customer_name`.  
   * `LIMIT 10` restricts the output to the top ten customers.

The query follows standard ANSI‑SQL syntax and should run on any relational database that supports common table expressions (CTEs).  

[1] ollama.generate – self‑contained, well‑commented SQL query example.

<details><summary>Log</summary>

```
[2026-05-29T19:44:25.938Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:44:27.416Z] Thinking about the best approach…
[2026-05-29T19:44:27.461Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:44:33.802Z] Plan ready: 1 step — Generate a readable, correct SQL query with explanation..
[2026-05-29T19:44:33.809Z] Step 1 of 1: Thinking about it
[2026-05-29T19:45:08.020Z] All sub-agents finished in 34.2s.
[2026-05-29T19:45:08.031Z] Thinking with openai/gpt-oss-20b:free (~2 475 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T19:45:26.735Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:45:26.742Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:45:26.742Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:45:26.742Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:49:11.373Z] Wave 1 finished in 224.6s.
[2026-05-29T19:49:11.373Z] All sub-agents finished in 224.6s.
[2026-05-29T19:49:11.373Z] Quality check passed (75%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
