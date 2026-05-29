---
title: "Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current green): 11.8% conversion, n=8,510. Write the read — should we ship? Be honest about CI, MDE, and any caveats (seasonality, weekday effects, peeking)

**Short answer:** The test shows a modest lift (12.4 % → 11.8 % conversion) but the sample sizes are too small to rule out chance. The 95 % confidence interval for the difference includes zero, so we cannot conclude that the orange button is truly better. Ship only if you are willing to accept the risk that the observed gain may be noise, or run a larger, more controlled experiment first.

---

### Why the result is inconclusive

| Group | Conversions | n | Conversion rate |
|-------|-------------|---|-----------------|
| **Variant (orange)** | 0.124 × 8 420 ≈ 1 045 | 8 420 | 12.4 % |
| **Control (green)** | 0.118 × 8 510 ≈ 1 004 | 8 510 | 11.8 % |

The absolute lift is **0.6 percentage points** (≈ 5 % relative lift).  
Standard error for a proportion = √[p(1‑p)/n].

* Variant SE ≈ √[0.124·0.876/8420] ≈ 0.0036 (0.36 %)
* Control SE ≈ √[0.118·0.882/8510] ≈ 0.0035 (0.35 %)

The standard error of the difference ≈ √(0.0036² + 0.0035²) ≈ 0.0050 (0.5 %).  
A 95 % confidence interval for the lift is **‑0.4 % to +1.6 %** (‑0.4 pp to +1.6 pp). Because zero lies inside this interval, the effect is not statistically significant.

### Minimum Detectable Effect (MDE)

With ~8 k users per arm, a two‑sided 5 %‑level test has an MDE of roughly **1.5 % absolute** (≈ 12 % relative) conversion lift. Your observed lift (0.6 pp) is well below that threshold, meaning the test was under‑powered to detect such a small effect.

### Caveats to keep in mind

| Issue | Impact |
|-------|--------|
| **Seasonality / weekday effects** | A 14‑day window may capture a particular mix of weekdays, promotions, or traffic sources that does not represent the longer‑term pattern. |
| **Peeking / multiple looks** | If the data were examined before the pre‑planned 14 days ended, the nominal p‑value is inflated. |
| **External changes** | Any concurrent site changes, marketing campaigns, or device‑type shifts could confound the observed difference. |
| **Statistical assumptions** | The binomial approximation assumes independent users; repeat visitors could violate this. |

### Recommendation

1. **Do not ship based on this test alone.** The evidence does not reach statistical significance, and the observed lift is smaller than the test’s detectable threshold.  
2. **Run a larger experiment** (e.g., double the sample size to ~16 k per arm) or extend the test duration to capture more traffic and reduce the confidence interval.  
3. **Control for timing effects** by stratifying or balancing traffic across weekdays and any known promotions.  
4. **Pre‑register the analysis plan** (sample size, stopping rule) to avoid peeking bias.

If you decide to ship now, do so with the understanding that the gain may be due to random variation, and monitor post‑launch metrics closely to confirm any real uplift.

## Web sources
1. [WE Fashion - Better Together | Online shop](https://www.wefashion.com/nl_NL/home) _(relevance 0, http)_

## Filtered sources _(2 dropped by validator)_
- ~~[WeTransfer | Send Large Files Fast](https://wetransfer.com/?msockid=0207b64ed4bb66882f43a126d55967d6)~~ — thin-content (0 chars (min 200))
- ~~[Error](https://web.whatsapp.com/)~~ — thin-content (130 chars (min 200))

## Vault hits at time of research
_(none)_
