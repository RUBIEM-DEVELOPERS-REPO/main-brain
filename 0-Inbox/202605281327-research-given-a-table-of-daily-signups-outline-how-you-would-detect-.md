---
title: "Research: Given a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold yo"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 0
sources_dropped: 3
---

# Research: Given a table of daily signups, outline how you would detect a week-over-week anomaly. Name the method, the threshold you would use, and one failure mode.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked fo

**Method:** *Week‑over‑Week Z‑Score (or “weekly‑change” control chart)*  

1. **Aggregate** the raw daily sign‑up counts into weekly totals (e.g., Mon‑Sun).  
2. **Compute the week‑over‑week change** for each week *i*:  

\[
\Delta_i = \frac{W_i - W_{i-1}}{W_{i-1}}
\]

where *W* is the weekly total.  
3. **Estimate the baseline distribution** of these changes over a rolling window of the past *N* weeks (commonly 4 – 8 weeks). Calculate the mean μ and standard deviation σ of the Δ values.  
4. **Calculate a Z‑score** for the current week:  

\[
Z_i = \frac{\Delta_i - \mu}{\sigma}
\]

5. **Flag an anomaly** when |Z_i| exceeds a chosen threshold.

**Threshold:** |Z| > 2 (≈ 95 % confidence) is a common, easy‑to‑interpret rule; a stricter |Z| > 3 (≈ 99.7 % confidence) can be used for high‑risk environments.

**One failure mode:** If the recent weeks include a genuine trend (e.g., a marketing campaign that steadily lifts sign‑ups), the rolling baseline σ will inflate, causing the method to *miss* a true anomaly (a “masked” spike) because the change is judged “normal” relative to the already‑elevated variance. In such cases, detrending or using a more robust baseline (e.g., median absolute deviation) is needed.

## Web sources
_(no sources survived validation)_

## Filtered sources _(3 dropped by validator)_
- ~~[Anomaly Monitor - Datadog Docs](https://docs.datadoghq.com/monitors/types/anomaly/)~~ — fetch-failed (This operation was aborted)
- ~~[Just a moment...](https://medium.com/booking-com-development/anomaly-detection-in-time-series-using-statistical-analysis-cc587b21d008)~~ — bad-status (HTTP 403)
- ~~[Episode 55 — Use anomaly detection approaches ... - YouTube](https://www.youtube.com/watch?v=FURaBl79EZs)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
