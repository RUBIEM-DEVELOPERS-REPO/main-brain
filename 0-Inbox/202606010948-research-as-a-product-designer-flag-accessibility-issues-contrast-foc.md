---
title: "Research: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early

**How a Product Designer Can Flag Accessibility Issues Early**

| Accessibility Dimension | Early‑stage actions a designer can take (and why they matter) |
|--------------------------|----------------------------------------------------------------|
| **Contrast** | • **Add contrast checks to design‑system tokens** (e.g., colour palettes) so any new colour pair is automatically validated against WCAG 2.1 AA ratios. <br>• **Run a quick contrast audit on wireframes** using built‑in plugins (Figma, Sketch) before moving to high‑fidelity mock‑ups. |
| **Focus Order** | • **Define a logical tab order in the component library** (e.g., place interactive elements in DOM order that matches visual flow). <br>• **Create a “focus‑ring” style** and apply it to every focusable component; this makes missing focus states obvious during prototyping. |
| **Screen Reader** | • **Write ARIA‑friendly component specs** (role, label, state) as part of the design hand‑off. <br>• **Include a “screen‑reader note” field** in design tickets so developers see required announcements early. |
| **Motion** | • **Add a “Reduced Motion” flag** to the design system and design alternative states (e.g., no auto‑play, simple transitions). <br>• **Mark any animation with a “prefers‑reduced‑motion” tag** so it can be toggled off during early usability testing. |

### Practical workflow

1. **Kick‑off checklist** – Before any sketching, run a brief checklist (Contrast, Focus, Screen‑reader, Motion). If any item is “unknown”, flag it in the project board.  
2. **Design‑system integration** – Embed the above checks into the component library so they become automatic constraints rather than after‑the‑fact fixes.  
3. **Prototype review** – During the first clickable prototype, use accessibility‑testing tools (e.g., axe, Lighthouse) to catch violations early; note any issues directly on the design file.  
4. **Documentation** – Record the decision (e.g., “Contrast ratio 4.5:1 for primary button”) in the design spec so developers have a single source of truth.  
5. **Iterate with QA** – Treat the early flags as “acceptance criteria” for the sprint; the QA team validates them before the feature moves to development.

> The only direct evidence we have is the research title that frames the problem: *“Research: As a Product Designer, flag accessibility issues (contrast, focus order, screen reader, motion) early”* [Vault note]​.

Because the vault does not contain detailed guidelines, the steps above synthesize common best‑practice actions that align with the four focus areas mentioned in the research title. If you need more specific templates or tool recommendations, let me know and I can pull additional notes from the vault.

## Web sources
1. [What is Product? Definition of Product, Product Meaning - The Economic Times](https://economictimes.indiatimes.com/definition/product) _(relevance 10, http)_
2. [PRODUCT | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/product) _(relevance 10, http)_
3. [Product (business) - Wikipedia](https://en.wikipedia.org/wiki/Product_(business)) _(relevance 10, http)_

## Vault hits at time of research
- [[0-Inbox/202605291438-research-as-a-product-designer-flag-accessibility-issues-contrast-foc.md]] (line 2)
