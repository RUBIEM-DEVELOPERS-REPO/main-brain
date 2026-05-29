---
type: job
title: Draft SQL that's readable, correct, and explained
slug: draft-sql-that-s-readable-correct-and-explained-3a04d4f5
created: 2026-05-29T21:14:38.509Z
jobId: 3a04d4f5-064c-4269-a6dc-76ee4472a592
status: succeeded
template: custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:11:53.050Z
finishedAt: 2026-05-29T21:14:38.509Z
---

# Draft SQL that's readable, correct, and explained

- **Status:** succeeded
- **Template:** custom-data-analyst-draft-sql-that-s-readable-correct-and-ex
- **Started:** 2026-05-29T21:11:53.050Z
- **Finished:** 2026-05-29T21:14:38.509Z
- **Title:** Draft SQL that's readable, correct, and explained

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Draft SQL that's readable, correct, and explained\nDescription: Persona-derived starter task for \"Dale\"."
}
```

## Plan
Default research plan for: As a Data Analyst, draft sql that's readable, correct, and explained.

Context: Role: Custom
Title: Draft SQL that's readable, correct, and explained
Description: Persona-derived starter task for "Dale"

### Steps
1. ✓ Researching "As a Data Analyst, draft sql that's readable, correct, and explained.

Context: …" — vault + web — `research.deep` (118.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (18.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.9s)
    > auto-injected: quality score=0.74 (pass=true) — peer review for a second opinion

## Answer
## Readable, Correct, and Fully Explained SQL Draft

Below is a generic, well‑structured SQL query that can be adapted to most analytical tasks such as summarising sales, user activity, or any fact‑dimension model.  
Each clause is placed on its own line, aliased clearly, and accompanied by an inline comment that explains its purpose.

```sql
/* --------------------------------------------------------------
   Example: Monthly sales summary by product category
   -------------------------------------------------------------- */
SELECT
    /* Human‑readable period (e.g., 2023‑01) */
    DATE_TRUNC('month', o.order_date)          AS month,

    /* Descriptive name of the product’s top‑level category */
    c.category_name                            AS category,

    /* Count of distinct orders (order volume) */
    COUNT(DISTINCT o.order_id)                 AS orders_cnt,

    /* Sum of line‑item revenue (gross sales) */
    SUM(oi.quantity * oi.unit_price)           AS gross_sales,

    /* Net sales after discount (if any) */
    SUM(oi.quantity * oi.unit_price *
        (1 - COALESCE(oi.discount_rate, 0)))   AS net_sales,

    /* Average order value (AOV) – useful KPI */
    AVG(oi.quantity * oi.unit_price)           AS avg_order_value

FROM
    /* Fact table: each row = a line‑item on an order */
    sales.order_items      AS oi

    /* Join to the order header for date & customer info */
    INNER JOIN sales.orders          AS o
        ON oi.order_id = o.order_id

    /* Join to the product dimension for category lookup */
    INNER JOIN sales.products        AS p
        ON oi.product_id = p.product_id

    /* Join to the category dimension for readable names */
    INNER JOIN sales.categories      AS c
        ON p.category_id = c.category_id

GROUP BY
    month,
    category
ORDER BY
    month,
    category;
```

### Key Points

- **Clarity**: Each column and join is on its own line, making the query easy to scan.  
- **Aliasing**: Short, descriptive aliases (`month`, `category`, `orders_cnt`, etc.) improve readability.  
- **Comments**: Inline comments explain the purpose of each expression, aiding future maintenance.  
- **Extensibility**: Replace table names or add additional metrics (e.g., `SUM(oi.quantity * oi.unit_price * (1 - COALESCE(oi.discount_rate, 0)))`) without altering the structure.

This template follows the best practices highlighted in the research evidence [1] and can be customized to fit specific data models or reporting requirements.

<details><summary>Log</summary>

```
[2026-05-29T21:11:53.062Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:11:53.065Z] Thinking about the best approach…
[2026-05-29T21:11:53.137Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:11:54.360Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T21:11:54.361Z] Plan ready: 1 step — Default research plan for: As a Data Analyst, draft sql that's readable, correct, and explained.

Context: Role: Custom
Title: Draft SQL that's readable, correct, and explained
Description: Persona-derived starter task for "Dale".
[2026-05-29T21:11:54.366Z] Step 1 of 1: Researching "As a Data Analyst, draft sql that's readable, correct, and explained.

Context: …" — vault + web
[2026-05-29T21:13:52.703Z] All sub-agents finished in 118.3s.
[2026-05-29T21:13:52.710Z] Thinking with openai/gpt-oss-20b:free (~2 779 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:14:16.116Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:14:16.120Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:14:16.120Z] Step 3 of 3: Security-scanning the note
[2026-05-29T21:14:16.120Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T21:14:34.259Z] Wave 1 finished in 18.1s.
[2026-05-29T21:14:34.259Z] All sub-agents finished in 18.1s.
[2026-05-29T21:14:34.263Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T21:14:38.174Z] All sub-agents finished in 3.9s.
[2026-05-29T21:14:38.174Z] Wrote to your second brain — committing the changes.
[2026-05-29T21:14:38.509Z] Vault commit: done.
```
</details>
