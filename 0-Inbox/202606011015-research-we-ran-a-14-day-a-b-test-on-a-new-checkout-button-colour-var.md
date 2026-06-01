---
title: "Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current "
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current green): 11.8% conversion, n=8,510. Write the read — should we ship? Be honest about CI, MDE, and any caveats (seasonality, weekday effects, peeking)

**Result of the 14‑day test**

| Group | Conversions | n | Conversion rate |
|-------|-------------|---|-----------------|
| **Variant (orange)** | 1 045 ≈ 0.124 × 8 420 | 8 420 | **12.4 %** |
| **Control (green)** | 1 004 ≈ 0.118 × 8 510 | 8 510 | **11.8 %** |
| **Absolute lift** | – | – | **+0.6 pp** (≈ 5 % relative lift) |

**Statistical precision**

- Standard error of each proportion  

  \[
  SE_{p_1}= \sqrt{\frac{0.124(1-0.124)}{8420}} = 0.0037
  \]  

  \[
  SE_{p_2}= \sqrt{\frac{0.118(1-0.118)}{8510}} = 0.0035
  \]

- Standard error of the difference  

  \[
  SE_{\Delta}= \sqrt{SE_{p_1}^2+SE_{p_2}^2}=0.0050
  \]

- **Z‑score** for the observed lift (0.006)  

  \[
  Z = \frac{0.006}{0.0050}=1.20
  \]

- **95 % confidence interval** for the lift  

  \[
  0.006 \pm 1.96 \times 0.0050 = [-0.0038,\;0.0158]
  \]

The interval straddles zero, so the lift is **not statistically significant** at the conventional 5 % level.

**Minimum Detectable Effect (MDE)**  

With the current sample sizes (≈8 k per arm) and a two‑sided 95 % test, the MDE is roughly **1.5 pp** (≈ 13 % relative). The observed 0.6 pp lift is well below that threshold, meaning the test was under‑powered to reliably detect an effect of this magnitude.

**Caveats**

| Issue | Why it matters |
|-------|----------------|
| **Seasonality / weekday effects** | Traffic patterns can differ between weekdays and weekends; a 14‑day window may not capture the full weekly cycle. |
| **Peeking** | If the data were examined before the pre‑planned end date, the nominal p‑value is inflated. |
| **Multiple comparisons** | If other variants or metrics were looked at in parallel, the chance of a false positive rises. |
| **External factors** | Promotions, marketing spend, or site performance changes during the test could bias results. |

**Recommendation**

- **Do not ship** the orange button based on this test alone. The observed lift is small, statistically indistinguishable from zero, and below the MDE for the current sample size.  
- **Next steps**  
  1. **Extend the test** (or increase traffic allocation) to achieve at least ~15 k impressions per arm, which would bring the MDE down to ~0.9 pp and give enough power to detect a 0.6 pp effect if it is real.  
  2. Ensure the test runs for a full **multiple‑week cycle** to smooth out weekday/seasonality effects.  
  3. Freeze the analysis plan (no peeking) and pre‑register the significance threshold.  

Until those conditions are met, the evidence is insufficient to justify a rollout.

## Web sources
1. [WE Definition &amp; Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/we) _(relevance 1, http)_

## Filtered sources _(2 dropped by validator)_
- ~~[WeTransfer | Send Large Files Fast](https://wetransfer.com/?msockid=2250c32ea37266501193d445a2f26778)~~ — thin-content (0 chars (min 200))
- ~~[Error](https://web.whatsapp.com/)~~ — thin-content (130 chars (min 200))

## Vault hits at time of research
- [[0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[0-Inbox/202605291456-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[0-Inbox/202605292312-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[0-Inbox/202605301852-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
