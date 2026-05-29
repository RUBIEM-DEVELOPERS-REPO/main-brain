---
title: "Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 0
sources_dropped: 3
---

# Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current green): 11.8% conversion, n=8,510. Write the read — should we ship? Be honest about CI, MDE, and any caveats (seasonality, weekday effects, peeking)

**Bottom line:** The test does **not** give us enough statistical confidence to declare the orange button a win, so we should **hold off on shipping** until we gather more data or run a longer experiment.

---

### Quick numbers  

| Group | Conversions | n | Conversion rate |
|-------|-------------|---|-----------------|
| **Variant (orange)** | 1,043 | 8,420 | **12.4 %** |
| **Control (green)** | 1,004 | 8,510 | **11.8 %** |

*Absolute lift*: **+0.6 pp** (≈ 5 % relative lift).

**Standard error (SE)**  

\[
SE = \sqrt{\frac{p_1(1-p_1)}{n_1}+\frac{p_2(1-p_2)}{n_2}}
     = \sqrt{\frac{0.124·0.876}{8420}+\frac{0.118·0.882}{8510}}
     \approx 0.0050
\]

**95 % confidence interval for the lift**

\[
\Delta \pm 1.96·SE = 0.006 \pm 1.96·0.0050
                 = 0.006 \pm 0.0098
                 = \mathbf{[-0.0038,\;0.0158]}
\]

The interval **includes zero**, meaning the observed 0.6 pp increase could easily be due to random variation.

---

### Minimum Detectable Effect (MDE)

With the current sample sizes (≈ 8.5 k per arm) and a conventional 80 % power / 5 % α level, the smallest lift we could reliably detect is roughly **0.8 pp** (≈ 6–7 % relative). Our observed lift (0.6 pp) is **below that threshold**, explaining why the test is under‑powered for this effect size.

---

### Caveats & risks  

| Issue | Why it matters |
|-------|----------------|
| **Seasonality / weekday effects** | A 14‑day window may capture a particular mix of weekdays, holidays, or traffic sources that won’t repeat. |
| **Peeking / multiple looks** | If the data were examined before the 14‑day cut‑off, the nominal 95 % CI is overly optimistic. |
| **Sample imbalance** | The groups are roughly equal, but the slight n‑difference (≈ 90) is negligible. |
| **External factors** | Any concurrent promotions, price changes, or site‑wide UI tweaks could confound the lift. |

---

### Recommendation  

1. **Do not ship the orange button yet.** The evidence is not statistically significant, and the observed lift is smaller than the test’s MDE.  
2. **Extend the experiment** (e.g., double the duration or increase traffic allocation) to reach a sample size that can detect a 0.6 pp lift with adequate power.  
3. **Control for timing effects** by ensuring the test spans multiple weeks and includes a balanced mix of weekdays/weekends.  
4. **Avoid interim peeking** or, if necessary, apply a proper sequential‑analysis correction.

If after a larger, well‑controlled run the orange button still shows a consistent lift with a confidence interval that excludes zero, then a rollout would be justified.  

*Source: internal research note containing the raw test results*【0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md】.

## Web sources
_(no sources survived validation)_

## Filtered sources _(3 dropped by validator)_
- ~~[OpenClassrooms](https://openclassrooms.com/fr/)~~ — thin-content (0 chars (min 200))
- ~~[Get started with Classroom for students](https://support.google.com/edu/classroom/answer/9582544?hl=en&co=GENIE.Platform%3DDesktop)~~ — fetch-failed (This operation was aborted)
- ~~[Classroom Help](https://support.google.com/edu/classroom/?hl=en)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
- [[0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[_neuroworks/jobs/2026-05-29-default-research-plan-for-we-ran-a-14-day-a-b-test-on-a-new--0a86acf2.md]] (line 3)
