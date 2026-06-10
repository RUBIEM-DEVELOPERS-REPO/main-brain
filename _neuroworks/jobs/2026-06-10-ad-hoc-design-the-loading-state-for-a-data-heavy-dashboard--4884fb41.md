---
type: job
title: Ad-hoc: Design the loading state for a data-heavy dashboard.
slug: ad-hoc-design-the-loading-state-for-a-data-heavy-dashboard--4884fb41
created: 2026-06-10T18:53:00.038Z
jobId: 4884fb41-45a1-4381-b657-18e628e28b55
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:52:03.309Z
finishedAt: 2026-06-10T18:53:00.038Z
---

# Ad-hoc: Design the loading state for a data-heavy dashboard.

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:52:03.309Z
- **Finished:** 2026-06-10T18:53:00.038Z
- **Title:** Ad-hoc: Design the loading state for a data-heavy dashboard.

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nDesign the loading state for a data-heavy dashboard.\n\nInterpretation: intent=plan, target=\"loading state for a data-heavy dashboard\".\n\nDeliverable shape: Plan format. `## Goal` (1-line), `## Steps` (numbered, actionable), `## Risks` (bulleted), `## Definition of done` (numbered checks). Each step concrete and assignable.",
  "userText": "Design the loading state for a data-heavy dashboard.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "plan",
  "intentTarget": "loading state for a data-heavy dashboard",
  "personaId": "clawbot"
}
```

## Answer
## Goal
Design a loading state that guarantees a smooth user experience for a data‑heavy dashboard, reducing perceived wait times while preserving context and aiding troubleshooting.

## Steps
1. **Identify Data Sources**
   - Inventory all backend endpoints (API calls, WebSocket streams, local caches) and record their typical latency ranges (e.g., 300 ms–3 s).  
   - Map each data set to its UI widget or chart.

2. **Define Skeleton Components**
   - For each widget type (tables, charts, KPI cards) create a matching skeleton shape that mimics the actual layout (height, width, number of rows/columns).  
   - Ensure skeletons are fluid: use relative widths (100 %, 75 %, 50 %) to avoid a mechanical feel.

3. **Implement First‑Load Skeleton**
   - On page open, render all widgets with their respective skeletons.  
   - Animate a single shimmering keyframe shared across widgets to avoid visual fragmentation.

4. **Add Background Refresh Indicator**
   - When data is already rendered and a fetch is triggered (e.g., pull‑to‑refresh, auto‑refresh), overlay a thin progress bar at the top of the affected area or display a subtle pulsing dot next to the widget title.  
   - Preserve existing content to maintain context.

5. **Show Optimistic Updates**
   - When user submits a data mutation (e.g., adding a row or filtering), immediately insert a new row in muted/transparent style.  
   - Animate brightness change to full upon success or fade‑out with a toast notification on failure.

6. **Handle Stalled Requests**
   - Detect if any request exceeds the 2‑second threshold.  
   - Display a lightweight “Still working – loading your data” message within the affected widget and keep the skeleton visible until data arrives.

7. **Accessibility Enhancements**
   - Provide `aria-busy="true"` and `role="progressbar"` attributes on skeleton containers.  
   - Ensure contrast ratios meet WCAG AA even in muted states.

8. **Testing & Optimization**
   - Measure perceived load time using Lighthouse and user testing.  
   - Iterate skeleton sizes and animation speeds to balance visual appeal and performance.

9. **Documentation**
   - Add a design‑document reference (e.g., `_knowledge/_design/dashboard-loading-state.md`) summarizing patterns, component APIs, and code snippets for team reuse.

## Risks
- Over‑entangling skeleton logic with data fetching may increase build complexity.  
- Animation can negatively impact performance on low‑end devices; fallback to static placeholder if FPS drops.  
- Mis‑aligned skeleton dimensions risk breaking layout after data load.  
- User confusion if optimistic updates fail silently; need clear error handling.

## Definition of Done
1. Skeleton components exist for every major widget type and match the final layout.  
2. First‑load skeletons render immediately on navigation with unified shimmer.  
3. Background refresh stories show a progress bar or pulsing dot without erasing current data.  
4. Optimistic updates visibly reflect user actions, revert on error.  
5. Stall indicator appears only after >2 s latency and disappears on data arrival.  
6. All accessibility attributes are present and verified via axe or equivalent tool.  
7. Performance budget met: total front‑end bundle < 200 kB, animation FPS ≥ 60.  
8. Design doc updated and shared with the dev team.

<details><summary>Log</summary>

```
[2026-06-10T18:52:03.309Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T18:52:03.327Z] Loaded the **loading-state-design** skill playbook for this task.
[2026-06-10T18:52:03.328Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:52:53.756Z] Hermes responded in 50.4s (3389 chars).
[2026-06-10T18:53:00.038Z] Quality gate: Hermes answer passed (score 0.93).
```
</details>
