---
title: "Research: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Health-check the following customer account based on the messages / data provided. Output: 1) Sentiment trajectory (last 30/60/90 days). 2) Outstanding issues (with age + last touch). 3) Churn signals (specific phrases or behaviours, with quotes if available). 4) Expansion signals. 5) Recommended next action (specific — message, call, escalation) with a date

**Health‑check summary – insufficient data to produce a concrete score**

The request asks for a sentiment trajectory, open issues, churn/expansion signals, and a next‑action plan for a specific customer account. However, the only evidence supplied is generic guidance on how SaaS companies *detect* churn risk (usage decline, ticket volume, payment problems, sponsor disengagement) and how they build health‑scoring pipelines [1]. No actual usage metrics, support‑ticket logs, payment history, NPS responses, or communication excerpts for the target customer were provided.

Because the required raw signals are missing, we cannot:

| Requested output | Why it cannot be generated |
|------------------|----------------------------|
| Sentiment trajectory (30/60/90 days) | No sentiment data (e.g., NPS, survey comments, ticket sentiment) is present. |
| Outstanding issues (age + last touch) | No ticket or issue list is supplied. |
| Churn signals (quotes/behaviours) | No customer‑facing messages or behavioural logs are available. |
| Expansion signals | No usage growth, seat‑add requests, or upsell conversations are provided. |
| Recommended next action (date) | Without any identified risk or opportunity, a concrete next step cannot be justified. |

**What would be needed to complete the health‑check (per the best‑practice model):**

1. **Product‑usage data** – e.g., DAU/MAU or feature‑usage trends compared to the 90‑day baseline to spot a ≥ 40 % decline [1].
2. **Support‑ticket metrics** – volume change, escalation rate, and sentiment analysis of ticket text [1].
3. **Payment health** – failed payments, days‑past‑due, plan downgrades [1].
4. **Executive‑sponsor activity** – attendance at QBRs or recent outreach in the CRM.
5. **Direct communication excerpts** – any phrases like “considering other vendors,” “budget cuts,” or “happy with the product” that flag churn or expansion.

**Next step (given current evidence):**  
Request the relevant data extracts (usage dashboards, Zendesk ticket export, Stripe billing events, and recent Slack/Email threads) so the health‑scoring framework described in the LinkedIn article [1] can be applied and a data‑driven health check produced. Once the data are in hand, compute the change‑over‑time features and score the account to determine sentiment trends, open issues, churn/expansion signals, and an actionable outreach plan.

## Web sources
1. [Customer Health Scoring for SaaS: Predicting Churn Before It Happens](https://www.linkedin.com/pulse/customer-health-scoring-saas-predicting-churn-before-happens-tristan-n6kxc) _(relevance 20, http)_
2. [Customer Churn Prediction Analysis](https://rstudio-pubs-static.s3.amazonaws.com/1257304_b570bba1a06e4fb18cb2171092f1126b.html) _(relevance 16, http)_
3. [Unbreaking AI. Spinning OpenAI’s Straw into Gold | by stunspot | Medium](https://medium.com/@stunspot/unbreaking-ai-7a61b70219f3) _(relevance 1, http)_

## Vault hits at time of research
- [[_neuroworks/templates/2026-05-26-custom-customer-success-health-check-a-customer-account.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-customer-success-health-check-a-customer-account.md]] (line 8)
- [[_neuroworks/templates/2026-05-28-custom-customer-success-health-check-a-customer-account.md]] (line 8)
- [[_neuroworks/templates/2026-05-29-custom-customer-success-health-check-a-customer-account.md]] (line 8)
