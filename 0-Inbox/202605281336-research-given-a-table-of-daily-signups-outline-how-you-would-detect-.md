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

**Method:** Apply a **rolling‑week Z‑score** (also called a week‑over‑week control‑chart).  
1. For each day *t* compute the sum of sign‑ups in the preceding 7‑day window (days *t‑6 … t*).  
2. Keep a running mean μ and standard deviation σ of these weekly totals over a baseline period (e.g., the prior 4 weeks).  
3. Calculate the Z‑score for the current week:  

\[
Z_t = \frac{\text{WeeklyTotal}_t - \mu}{\sigma}
\]

**Threshold:** Flag an anomaly when \|Z_t\| > 2 (≈ 95 % confidence) or, for a stricter rule, \|Z_t\| > 3 (≈ 99.7 % confidence).  

**One failure mode:** If the baseline period contains a recent surge or dip, μ and σ become biased, causing the detector to miss genuine anomalies (type II error) or to over‑trigger on normal variation (type I error). This “contaminated baseline” problem is common when the process is non‑stationary.

## Web sources
_(no sources survived validation)_

## Filtered sources _(3 dropped by validator)_
- ~~[Anomaly Monitor - Datadog Docs](https://docs.datadoghq.com/monitors/types/anomaly/)~~ — fetch-failed (This operation was aborted)
- ~~[Just a moment...](https://medium.com/booking-com-development/anomaly-detection-in-time-series-using-statistical-analysis-cc587b21d008)~~ — bad-status (HTTP 403)
- ~~[Episode 55 — Use anomaly detection approaches ... - YouTube](https://www.youtube.com/watch?v=FURaBl79EZs)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
