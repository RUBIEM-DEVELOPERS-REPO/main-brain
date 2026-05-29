---
type: job
title: Flag accessibility issues (contrast, focus order, screen reader, motion) early
slug: flag-accessibility-issues-contrast-focus-order-screen-reader-a380a967
created: 2026-05-29T14:39:47.953Z
jobId: a380a967-18a3-4351-8675-27556d8b474e
status: succeeded
template: custom-product-designer-flag-accessibility-issues-contrast-focus
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:38:06.616Z
finishedAt: 2026-05-29T14:39:47.953Z
---

# Flag accessibility issues (contrast, focus order, screen reader, motion) early

- **Status:** succeeded
- **Template:** custom-product-designer-flag-accessibility-issues-contrast-focus
- **Started:** 2026-05-29T14:38:06.616Z
- **Finished:** 2026-05-29T14:39:47.953Z
- **Title:** Flag accessibility issues (contrast, focus order, screen reader, motion) early

## Plan
Default research plan for: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early

### Steps
1. ✓ Researching "As a Product Designer, flag accessibility issues (contrast, focus order, screen …" — vault + web — `research.deep` (23.6s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (10.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.3s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
**Report: Accessibility‑Issue Flagging for Product Designers – Current Findings & Required Inputs**

---

### 1. Evidence Review  
The supplied evidence set contains no substantive material on how a product designer can proactively flag accessibility concerns such as contrast, focus order, screen‑reader compatibility, or motion sensitivity early in the design workflow. All sources are unrelated definitions of “product” and a system‑generated notice of missing content [1][3].

### 2. Information Gaps  
To produce a concrete, evidence‑grounded guide, the following internal resources are needed:

1. **Design System Documentation** – any style‑guide sections that define contrast ratios (e.g., WCAG 2.1 AA/AAA thresholds) and motion‑reduction guidelines.  
2. **Prototype Review Checklists** – existing checklists or annotations used during wireframe or high‑fidelity prototype reviews that reference focus order and screen‑reader testing.  
3. **User Research Findings** – summaries of accessibility‑related user testing sessions, especially notes on motion‑sensitivity complaints or navigation difficulties.  
4. **Tooling Configuration Details** – configurations for design tools (Figma, Sketch, Adobe XD) that enable automated contrast checks or focus‑order visualizations.  
5. **Team Process Artifacts** – sprint or design‑review agendas that include dedicated accessibility checkpoints.

### 3. Suggested Skeleton (to be populated once data is available)

```
## Early‑Stage Accessibility Flagging Checklist

### Contrast
- Verify foreground/background color pairs meet WCAG 2.1 AA (≥4.5:1) or AAA (≥7:1) ratios.  
- Tool used: <Figma Contrast Plugin / Sketch Inspect>.

### Focus Order
- Ensure logical tab sequence aligns with visual hierarchy.  
- Validate with <Keyboard Navigation Simulator>.

### Screen‑Reader Compatibility
- Add ARIA labels to interactive elements; confirm reading order matches design flow.  
- Test with <NVDA / VoiceOver> on prototype.

### Motion Sensitivity
- Identify animated transitions; provide “Reduce Motion” toggle.  
- Check against <prefers-reduced-motion> media query.

### Process Integration
- Insert checklist items into <Design Review Meeting> agenda.  
- Assign ownership to <Accessibility Champion> for each sprint.
```

### 4. Next Steps  
Provide the requested internal documents or point to the vault locations where they reside. With that material, a complete, evidence‑backed report can be drafted.

*Assumed: the user seeks a concise, actionable checklist to embed in early design phases; the skeleton reflects typical industry categories but will be refined with actual internal data.*

<details><summary>Log</summary>

```
[2026-05-29T14:38:06.625Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:38:07.595Z] Thinking about the best approach…
[2026-05-29T14:38:07.625Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:38:09.293Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:38:09.293Z] Plan ready: 1 step — Default research plan for: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early.
[2026-05-29T14:38:09.298Z] Step 1 of 1: Researching "As a Product Designer, flag accessibility issues (contrast, focus order, screen …" — vault + web
[2026-05-29T14:38:32.921Z] All sub-agents finished in 23.6s.
[2026-05-29T14:38:32.921Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:38:32.928Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:38:32.928Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:38:32.928Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:38:43.320Z] Wave 1 finished in 10.4s.
[2026-05-29T14:38:43.320Z] All sub-agents finished in 10.4s.
[2026-05-29T14:38:43.323Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:38:46.653Z] All sub-agents finished in 3.3s.
[2026-05-29T14:38:46.658Z] quality.check failed (score=0.42, issues: No substantive answer provided; fails to address the task; lacks citations for claims; tone does not match user request) — re-synthesising with the large model
[2026-05-29T14:38:46.662Z] Thinking with openai/gpt-oss-120b:free (~2 854 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:39:18.707Z] quality re-score failed (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada); keeping the rescued draft anyway
[2026-05-29T14:39:18.708Z] peer review verdict=bad (Does not provide any actionable guidance; Fails to address the task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:39:18.712Z] Thinking with openai/gpt-oss-120b:free (~3 000 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:39:47.704Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T14:39:47.704Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:39:47.952Z] Vault commit: done.
```
</details>
