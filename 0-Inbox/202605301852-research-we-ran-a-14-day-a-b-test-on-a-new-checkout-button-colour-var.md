---
title: "Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current "
created: 2026-05-30
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current green): 11.8% conversion, n=8,510. Write the read — should we ship? Be honest about CI, MDE, and any caveats (seasonality, weekday effects, peeking)

**Result of the 14‑day A/B test**

| Group | Conversions | Visits | Conversion rate |
|-------|-------------|--------|-----------------|
| **Variant (orange)** | 0.124 × 8 420 ≈ 1 045 | 8 420 | **12.4 %** |
| **Control (green)** | 0.118 × 8 510 ≈ 1 004 | 8 510 | **11.8 %** |
| **Absolute lift** | – | – | **+0.6 pp** |

*Source: vault notes*【0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md】.

---

### Statistical confidence

Using a two‑sample proportion test:

* \(p_1 = 0.124,\; n_1 = 8{,}420\)  
* \(p_2 = 0.118,\; n_2 = 8{,}510\)

Standard error  

\[
SE = \sqrt{\frac{p_1(1-p_1)}{n_1}+\frac{p_2(1-p_2)}{n_2}}
   \approx \sqrt{0.1086/8420 + 0.1041/8510}
   \approx 0.0050 .
\]

95 % confidence interval for the absolute difference  

\[
\Delta = p_1-p_2 = 0.006 \\
CI_{95} = \Delta \pm 1.96\,SE
        = 0.006 \pm 0.0098
        = [-0.0038,\; 0.0158].
\]

The interval **includes 0**, so the observed 0.6 pp lift is **not statistically significant** at the 95 % level.

---

### Minimum Detectable Effect (MDE)

With the current sample sizes (≈8.5 k per arm) and a two‑sided 5 % α / 80 % power test, the MDE is roughly **1.2 pp** (≈10 % relative lift). The observed lift (0.6 pp) is well below that threshold, meaning the test was under‑powered to reliably detect such a small effect.

---

### Caveats & practical considerations

| Issue | Why it matters |
|-------|----------------|
| **Seasonality / weekday effects** | A 14‑day window may capture a particular mix of weekdays, holidays, or traffic sources that does not represent the longer‑term pattern. |
| **Peeking** | If the data were examined before the pre‑planned end date, the nominal p‑value is inflated; the confidence interval above assumes a single look. |
| **Multiple testing** | If other variants or metrics were evaluated in parallel, the chance of a false positive rises. |
| **User‑segment heterogeneity** | The lift could be driven by a specific segment (e.g., mobile vs. desktop). Without segmentation analysis we cannot know. |

---

## Recommendation

* **Do not ship the orange button as a default change yet.** The lift is not statistically distinguishable from zero, and the test’s power was insufficient to detect the modest effect size observed.
* **Next steps**
  1. **Run a longer test** (e.g., 30 days) or increase traffic allocation to reach at least ~15 k users per arm, which would lower the MDE to ~0.8 pp.
  2. **Pre‑register the analysis plan** (sample size, stopping rule) to avoid peeking bias.
  3. **Stratify results** by device, geography, and weekday to see if any subgroup shows a robust effect.
  4. If the extended test confirms a statistically significant lift (CI entirely > 0) and the business case (e.g., revenue impact) justifies the change, proceed to rollout.

In short: the current evidence is inconclusive; more data are needed before committing to the new colour.

## Web sources
1. [Open WhatsApp](https://wa.me/) _(relevance 1, browser)_

## Filtered sources _(2 dropped by validator)_
- ~~[WeTransfer | Send Large Files Fast](https://wetransfer.com/?msockid=2eeda828bb6069651ec0bf41bad96809)~~ — thin-content (0 chars (min 200))
- ~~[WhatsApp Web](https://web.whatsapp.com/)~~ — thin-content (30 chars (min 200))

## Vault hits at time of research
- [[0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[0-Inbox/202605291456-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[0-Inbox/202605292312-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
