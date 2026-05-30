---
type: job
title: Flag accessibility issues (contrast, focus order, screen reader, motion) early
slug: flag-accessibility-issues-contrast-focus-order-screen-reader-a239e4e9
created: 2026-05-30T18:35:22.961Z
jobId: a239e4e9-c0ca-4b04-9d66-ad1aa348e49c
status: succeeded
template: custom-product-designer-flag-accessibility-issues-contrast-focus
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:27:53.787Z
finishedAt: 2026-05-30T18:35:22.957Z
---

# Flag accessibility issues (contrast, focus order, screen reader, motion) early

- **Status:** succeeded
- **Template:** custom-product-designer-flag-accessibility-issues-contrast-focus
- **Started:** 2026-05-30T18:27:53.787Z
- **Finished:** 2026-05-30T18:35:22.957Z
- **Title:** Flag accessibility issues (contrast, focus order, screen reader, motion) early

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Flag accessibility issues (contrast, focus order, screen reader, motion) early\nDescription: Persona-derived starter task for \"Dani\"."
}
```

## Plan
Conduct deep research on early accessibility flagging practices and capture findings.

### Steps
1. ✓ Researching "accessibility issues early product design contrast focus order screen reader mot…" — vault + web — `research.deep` (51.2s)
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (19.5s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Early‑Stage Accessibility Checklist for Product Designers  

| Area | Why it matters early | Quick actions to flag issues | Tool tips |
|------|----------------------|------------------------------|-----------|
| **Contrast** | Low contrast hinders users with visual impairments and can breach WCAG AA/AAA thresholds. | • Compare every text and UI colour against WCAG contrast ratios (≥4.5:1 for body text, ≥3:1 for UI components).<br>• Record any palette elements that fall short before visual design is finalised. | • Contrast‑checking extensions (axe, Lighthouse) or standalone tools (Color Oracle, WebAIM Contrast Checker). |
| **Focus order** | Keyboard‑only users depend on a logical tab sequence; a broken order disrupts navigation and comprehension【1】. | • Sketch a focus map that mirrors the visual layout of low‑fidelity wireframes.<br>• Verify the tab order with a keyboard‑only walkthrough after each major iteration. | • axe or Lighthouse focus‑order warnings; browser devtools “Tab navigation” view. |
| **Screen‑reader order** | Screen readers follow DOM order, not visual placement; mismatched markup confuses users and breaks the “understand” step【1】. | • Keep the DOM order aligned with the visual hierarchy.<br>• Use semantic headings, lists, and landmarks (`<nav>`, `<main>`, `<footer>`). | • NVDA/VoiceOver quick read‑through; axe accessibility audit for reading order. |
| **Motion** | Uncontrolled animation can trigger seizures or cause cognitive overload for users sensitive to motion. | • Limit auto‑animations; provide a “reduced motion” toggle.<br>• Apply the `prefers-reduced‑motion` media query to disable non‑essential motion. | • Test with the OS‑level reduced‑motion setting; audit with axe motion‑related rules. |

### Early‑Stage Workflow  

1. **Define a focus map** alongside low‑fidelity wireframes.  
2. **Draft a semantic HTML skeleton** (headings, landmarks) before styling.  
3. **Apply the colour palette** and run contrast checks on all text and UI elements.  
4. **Add motion controls** (`prefers-reduced-motion`) early in the CSS.  
5. **Run automated audits** (axe, Lighthouse) after each component is built.  
6. **Iterate**: address any failures before moving to high‑fidelity designs.  

*Assumed: the designer is working on web‑based products and has access to standard accessibility testing tools.*

<details><summary>Log</summary>

```
[2026-05-30T18:27:53.817Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:27:55.055Z] Thinking about the best approach…
[2026-05-30T18:27:55.208Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:27:58.547Z] Plan ready: 1 step — Conduct deep research on early accessibility flagging practices and capture findings..
[2026-05-30T18:28:00.561Z] Step 1 of 1: Researching "accessibility issues early product design contrast focus order screen reader mot…" — vault + web
[2026-05-30T18:28:51.802Z] All sub-agents finished in 51.2s.
[2026-05-30T18:28:51.802Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:28:51.809Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:28:51.809Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:28:51.809Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:33:51.813Z] Wave 1 finished in 300.0s.
[2026-05-30T18:33:51.813Z] All sub-agents finished in 300.0s.
[2026-05-30T18:33:51.816Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:34:11.270Z] All sub-agents finished in 19.5s.
[2026-05-30T18:34:11.275Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T18:34:11.283Z] Thinking with openai/gpt-oss-120b:free (~3 738 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:34:41.039Z] quality rescue improved score: 0 → 0.93; using the rescued draft
[2026-05-30T18:34:41.039Z] peer review verdict=needs-work (Missing contrast and motion considerations; Unverified citation [2]) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:34:41.046Z] Thinking with openai/gpt-oss-120b:free (~3 905 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:35:22.206Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-30T18:35:22.206Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:35:22.957Z] Vault commit: done.
```
</details>
