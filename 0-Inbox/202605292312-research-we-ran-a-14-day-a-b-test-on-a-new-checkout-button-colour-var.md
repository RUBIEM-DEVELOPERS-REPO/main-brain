---
title: "Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 1
sources_dropped: 2
---

# Research: We ran a 14-day A/B test on a new checkout button colour. Variant (orange): 12.4% conversion, n=8,420. Control (current green): 11.8% conversion, n=8,510. Write the read — should we ship? Be honest about CI, MDE, and any caveats (seasonality, weekday effects, peeking)

**Result of the 14‑day A/B test**

| Group | Conversions | N | Conversion rate |
|-------|-------------|---|-----------------|
| **Variant (orange)** | 1 045 | 8 420 | **12.4 %** |
| **Control (green)** | 1 004 | 8 510 | **11.8 %** |

*Observed lift*: **+0.6 percentage points** (≈ 5.1 % relative lift).

---

### Statistical summary  

* **Difference (Δ)** = 0.124 – 0.118 = **0.006**  
* **Standard error**  

\[
SE = \sqrt{\frac{p_1(1-p_1)}{n_1}+\frac{p_2(1-p_2)}{n_2}}
     = \sqrt{\frac{0.124·0.876}{8420}+\frac{0.118·0.882}{8510}}
     \approx 0.0050
\]

* **95 % confidence interval**  

\[
Δ \pm 1.96·SE = 0.006 \pm 0.0098 = \mathbf{[-0.0038,\;0.0158]}
\]

The interval **includes 0**, so the result is **not statistically significant** at the conventional 5 % level.

---

### Power / Minimum Detectable Effect (MDE)

Using a pooled baseline conversion ≈ 12 % and the same sample sizes:

\[
\text{MDE}_{80\%} \approx
\sqrt{(z_{0.975}+z_{0.80})^{2}\;p(1-p)\left(\frac1{n_1}+\frac1{n_2}\right)}
\approx 0.019\;(≈ 1.9 percentage points)
\]

The test was powered to detect a lift of **≈ 2 pp** (≈ 15 % relative).  
The observed lift of **0.6 pp** is well below that threshold, explaining why the CI is wide and includes zero.

---

### Caveats

| Issue | Why it matters |
|-------|----------------|
| **Seasonality / weekday effects** | Traffic patterns can differ across the 14‑day window (e.g., weekend vs. weekday, holiday spikes). If the variant traffic happened to fall on higher‑conversion days, the lift could be overstated. |
| **Peeking / multiple looks** | If the data were examined before the pre‑planned end date, the nominal 95 % CI is optimistic; the true Type‑I error is higher. |
| **Sample‑size limitation** | With ~8 k users per arm the test can only reliably detect lifts ≥ 2 pp. Smaller improvements remain indistinguishable from noise. |
| **External changes** | Any concurrent site changes (pricing, promotions, UI tweaks) could confound the observed difference. |

---

## Recommendation

* **Do not ship the orange button as a definitive win** based on this test alone.  
* The observed lift is modest, statistically indistinguishable from zero, and the experiment was under‑powered for such a small effect.  
* **Next steps**  
  1. **Run a larger or longer experiment** (e.g., double the sample size) to achieve ~80 % power for a 0.5–0.6 pp lift.  
  2. **Stratify or block by weekday** to control for temporal effects.  
  3. **Pre‑register the analysis plan** and avoid peeking until the final sample is reached.  

If a larger, well‑controlled test confirms a statistically significant lift, then shipping the orange button would be justified. Until then, keep the current green button.  

*Sources: internal vault note containing the raw numbers*【0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md】.

## Web sources
1. [Open WhatsApp](https://wa.me/) _(relevance 1, browser)_

## Filtered sources _(2 dropped by validator)_
- ~~[WeTransfer | Send Large Files Fast](https://wetransfer.com/?msockid=2a928d9f088b60b730c39af7099d6123)~~ — thin-content (0 chars (min 200))
- ~~[WhatsApp Web](https://web.whatsapp.com/)~~ — thin-content (30 chars (min 200))

## Vault hits at time of research
- [[0-Inbox/202605290946-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[0-Inbox/202605291456-research-we-ran-a-14-day-a-b-test-on-a-new-checkout-button-colour-var.md]] (line 10)
- [[_neuroworks/jobs/2026-05-29-default-research-plan-for-we-ran-a-14-day-a-b-test-on-a-new--0a86acf2.md]] (line 3)
- [[_neuroworks/jobs/2026-05-29-default-research-plan-for-we-ran-a-14-day-a-b-test-on-a-new--7829e6af.md]] (line 3)
