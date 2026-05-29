---
title: "Research: common accessibility issues: contrast, focus order, screen reader, motion"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: common accessibility issues: contrast, focus order, screen reader, motion

**Common accessibility issues**

| Issue | Why it matters | Typical symptoms |
|-------|----------------|------------------|
| **Insufficient color contrast** | Text or UI elements that do not meet the WCAG 2.1 AA contrast ratio (4.5:1 for normal text, 3:1 for large text) are hard for users with low vision or color‑blindness to read. | Faded‑looking text, buttons that blend into the background, loss of meaning for color‑only cues. |
| **Incorrect focus order** | Keyboard‑only users rely on a logical tab sequence to navigate a page. When focus jumps around or skips interactive elements, it breaks the mental model of the interface. | Tab key moves focus to unrelated sections, focus lands on hidden elements, or modal dialogs trap focus incorrectly. |
| **Screen‑reader incompatibility** | Screen readers translate HTML into spoken output. Missing ARIA landmarks, unlabeled form controls, or dynamic content that isn’t announced prevents blind users from understanding or interacting with the page. | Elements read as “blank”, repeated announcements, or no announcement when content changes (e.g., error messages). |
| **Motion‑sensitive triggers** | Animations, auto‑scrolling, or parallax effects can cause nausea, vertigo, or seizures for users with vestibular disorders or photosensitive epilepsy. | Users experience dizziness, headaches, or are forced to leave the site; lack of a “reduce motion” option. |

### Quick checklist for remediation
1. **Contrast** – Use a contrast‑checking tool (e.g., WebAIM Contrast Checker) and ensure all text meets the 4.5:1 ratio (3:1 for large text). Provide high‑contrast mode if possible.  
2. **Focus order** – Verify the DOM order matches visual order; use `tabindex` sparingly and test with the Tab key alone. Ensure modals trap focus and return it to the triggering element on close.  
3. **Screen reader** – Add descriptive `aria-label`s, associate `<label>` elements with form controls, use proper heading hierarchy, and announce dynamic updates with `aria-live`.  
4. **Motion** – Offer a “prefers‑reduced‑motion” media query fallback, disable auto‑play animations, and provide a manual pause/stop control for any motion‑heavy components.

*Note:* The vault does not contain specific notes on this topic, and the provided web sources do not discuss accessibility. Consequently, the answer is based on standard best‑practice knowledge rather than cited evidence.

## Web sources
1. [Apply to college with Common App | Your future starts here](https://www.commonapp.org/) _(relevance 10, http)_
2. [common - English-French Dictionary WordReference.com](https://www.wordreference.com/enfr/common) _(relevance 10, browser)_
3. [common - Traduction fran�aise &ndash; Linguee](https://www.linguee.fr/anglais-francais/traduction/common.html) _(relevance 10, http)_

## Vault hits at time of research
_(none)_
