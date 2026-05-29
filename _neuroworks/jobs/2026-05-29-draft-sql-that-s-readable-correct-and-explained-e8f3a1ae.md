---
type: job
title: Draft SQL that's readable, correct, and explained
slug: draft-sql-that-s-readable-correct-and-explained-e8f3a1ae
created: 2026-05-29T14:35:46.611Z
jobId: e8f3a1ae-b871-45c8-b8e9-740552d0dae2
status: succeeded
template: custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:33:22.764Z
finishedAt: 2026-05-29T14:35:46.611Z
---

# Draft SQL that's readable, correct, and explained

- **Status:** succeeded
- **Template:** custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
- **Started:** 2026-05-29T14:33:22.764Z
- **Finished:** 2026-05-29T14:35:46.611Z
- **Title:** Draft SQL that's readable, correct, and explained

## Plan
Default research plan for: As a Data Analyst, draft sql that's readable, correct, and explained

### Steps
1. ✓ Researching "As a Data Analyst, draft sql that's readable, correct, and explained" — vault + web — `research.deep` (60.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (23.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.5s)
    > auto-injected: quality score=0.66 (pass=false) — peer review for a second opinion

## Answer
## SQL Template – Readable, Correct, and Fully Explained  

The following query demonstrates a clean, well‑documented approach for a typical “sales‑by‑region” analysis. It can be adapted to any relational schema that contains fact and dimension tables for sales, products, and regions.

```sql
/* --------------------------------------------------------------
   1️⃣  Objective
   – Compute total sales amount per product category
   – Break down by calendar month and sales region
   – Include only months that contain at least one sale
   -------------------------------------------------------------- */

SELECT
    -- 2️⃣  Dimension columns (the “group‑by” fields)
    r.region_name            AS region,          -- human‑readable region name
    p.category_name          AS category,        -- product category
    DATE_TRUNC('month', s.sale_date) AS month, -- first day of the month

    -- 3️⃣  Measure column (the aggregated metric)
    SUM(s.quantity * s.unit_price) AS total_sales   -- revenue in currency units
FROM
    sales      AS s          -- fact table: one row per line‑item
JOIN
    products   AS p ON s.product_id = p.product_id
JOIN
    regions    AS r ON s.region_id  = r.region_id
WHERE
    -- 4️⃣  Early filters (improve performance)
    s.sale_date >= DATE '2023-01-01'          -- start of analysis window
    AND s.sale_date <  DATE '2024-01-01'      -- end of analysis window (exclusive)
    AND s.quantity > 0                       -- exclude returns or zero‑quantity rows
GROUP BY
    r.region_name,
    p.category_name,
    DATE_TRUNC('month', s.sale_date)
ORDER BY
    region,
    month,
    category;
```

### Explanation of Key Elements  

1. **Comment Blocks** – Large comment sections (`/* … */`) outline the purpose and high‑level steps, making the script self‑documenting.  
2. **Clear Aliases** – Table aliases (`s`, `p`, `r`) are short yet meaningful, and column aliases (`region`, `category`, `month`, `total_sales`) convey the output semantics directly.  
3. **Consistent Indentation** – Each clause starts on a new line with a uniform two‑space indent, enhancing readability and facilitating version‑control diffs.  
4. **Early Filtering** – The `WHERE` clause removes irrelevant rows before the `JOIN`s and aggregation, which can improve query performance on large datasets.  
5. **Explicit Grouping** – All non‑aggregated columns appear in the `GROUP BY` clause in the same order as the `SELECT` list, preventing accidental mismatches.  
6. **Ordering** – The final `ORDER BY` presents results in a logical hierarchy (region → month → category), aiding downstream consumption.  

This template follows best practices for maintainable SQL and can be customized by adjusting table names, date ranges, or additional filters as required.  

*Source: derived from the SQL template provided in the research result [1].*

<details><summary>Log</summary>

```
[2026-05-29T14:33:22.772Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:33:23.890Z] Thinking about the best approach…
[2026-05-29T14:33:23.917Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:33:41.925Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:33:41.925Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, draft sql that's readable, correct, and explained.
[2026-05-29T14:33:41.928Z] Step 1 of 1: Researching "As a Data Analyst, draft sql that's readable, correct, and explained" — vault + web
[2026-05-29T14:34:42.803Z] All sub-agents finished in 60.9s.
[2026-05-29T14:34:42.803Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:34:42.809Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:34:42.809Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:34:42.809Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:34:43.993Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-29T14:35:05.823Z] Wave 1 finished in 23.0s.
[2026-05-29T14:35:05.823Z] All sub-agents finished in 23.0s.
[2026-05-29T14:35:05.827Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:35:08.364Z] All sub-agents finished in 2.5s.
[2026-05-29T14:35:08.370Z] quality.check failed (score=0.66, issues: Low citation coverage – many substantive claims are not backed by inline citations; No evidence provided for the generic SQL template claims) — re-synthesising with the large model
[2026-05-29T14:35:08.375Z] Thinking with openai/gpt-oss-120b:free (~3 323 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:35:46.365Z] quality rescue improved score: 0.66 → 0.97; using the rescued draft
[2026-05-29T14:35:46.365Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:35:46.611Z] Vault commit: done.
```
</details>
