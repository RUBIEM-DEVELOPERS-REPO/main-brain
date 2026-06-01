---
type: job
title: Flag accessibility issues (contrast, focus order, screen reader, motion) early
slug: flag-accessibility-issues-contrast-focus-order-screen-reader-4105834f
created: 2026-06-01T09:54:14.339Z
jobId: 4105834f-289b-4edf-8007-9f2298b015a4
status: succeeded
template: custom-product-designer-flag-accessibility-issues-contrast-focus
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:47:54.645Z
finishedAt: 2026-06-01T09:54:14.339Z
---

# Flag accessibility issues (contrast, focus order, screen reader, motion) early

- **Status:** succeeded
- **Template:** custom-product-designer-flag-accessibility-issues-contrast-focus
- **Started:** 2026-06-01T09:47:54.645Z
- **Finished:** 2026-06-01T09:54:14.339Z
- **Title:** Flag accessibility issues (contrast, focus order, screen reader, motion) early

## Plan
Default research plan for: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early

### Steps
1. ✓ Researching "As a Product Designer, flag accessibility issues (contrast, focus order, screen …" — vault + web — `research.deep` (29.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.6s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## How a Product Designer Can Flag Accessibility Issues Early  

| Accessibility Dimension | Early‑stage actions (and why they matter) |
|--------------------------|--------------------------------------------|
| **Contrast** | • Add contrast validation to design‑system tokens (colour palettes) so every new colour pair is automatically checked against WCAG 2.1 AA ratios. <br>• Run a quick contrast audit on wireframes with built‑in plugins (Figma, Sketch) before advancing to high‑fidelity mock‑ups. |
| **Focus Order** | • Define a logical tab order in the component library; ensure the DOM order matches the visual flow. <br>• Create a consistent “focus‑ring” style and apply it to every focusable component, making missing focus states obvious during prototyping. |
| **Screen Reader** | • Write ARIA‑friendly component specifications (role, label, state) as part of the design hand‑off. <br>• Include a “screen‑reader note” field in design tickets so developers see required announcements early. |
| **Motion** | • Add a “Reduced Motion” flag to the design system and design alternative states (e.g., no auto‑play, simple transitions). <br>• Tag any animation with a “prefers‑reduced‑motion” attribute so it can be toggled off during early usability testing. |

### Practical Workflow  

1. **Kick‑off checklist** – Before any sketching, run a brief checklist covering Contrast, Focus Order, Screen Reader support, and Motion. Mark any item as “needs review” and address it immediately.  
2. **Design‑system integration** – Embed the above actions into component libraries and token definitions so they are enforced automatically.  
3. **Prototype validation** – Use accessibility plugins in design tools to verify contrast ratios, focus visibility, ARIA labels, and motion settings on low‑fidelity prototypes.  
4. **Documentation & hand‑off** – Record accessibility decisions in design tickets (e.g., screen‑reader notes, reduced‑motion flags) to ensure developers receive clear guidance.  

*Sources: [1], [3]*

<details><summary>Log</summary>

```
[2026-06-01T09:47:54.651Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:47:56.350Z] Thinking about the best approach…
[2026-06-01T09:47:56.393Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:48:14.400Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:48:14.400Z] Plan ready: 1 step — Default research plan for: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early.
[2026-06-01T09:48:14.403Z] Step 1 of 1: Researching "As a Product Designer, flag accessibility issues (contrast, focus order, screen …" — vault + web
[2026-06-01T09:48:43.532Z] All sub-agents finished in 29.1s.
[2026-06-01T09:48:43.532Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:48:43.537Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:48:43.537Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:48:43.537Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:53:43.539Z] Wave 1 finished in 300.0s.
[2026-06-01T09:53:43.539Z] All sub-agents finished in 300.0s.
[2026-06-01T09:53:43.543Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:53:47.107Z] All sub-agents finished in 3.6s.
[2026-06-01T09:53:47.112Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-06-01T09:53:47.117Z] Thinking with openai/gpt-oss-120b:free (~3 369 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:54:13.982Z] quality rescue improved score: 0 → 0.9; using the rescued draft
[2026-06-01T09:54:13.982Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:54:14.339Z] Vault commit: done.
```
</details>
