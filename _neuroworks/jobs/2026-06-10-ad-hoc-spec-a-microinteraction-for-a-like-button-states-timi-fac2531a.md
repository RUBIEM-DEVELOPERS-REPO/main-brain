---
type: job
title: Ad-hoc: Spec a microinteraction for a like button (states, timing, e
slug: ad-hoc-spec-a-microinteraction-for-a-like-button-states-timi-fac2531a
created: 2026-06-10T18:52:00.529Z
jobId: fac2531a-40ae-45d9-9907-9e3b99a33b60
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:50:26.974Z
finishedAt: 2026-06-10T18:52:00.529Z
---

# Ad-hoc: Spec a microinteraction for a like button (states, timing, e

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:50:26.974Z
- **Finished:** 2026-06-10T18:52:00.529Z
- **Title:** Ad-hoc: Spec a microinteraction for a like button (states, timing, e

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSpec a microinteraction for a like button (states, timing, easing).",
  "userText": "Spec a microinteraction for a like button (states, timing, easing).",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Answer
## Like‑Button Microinteraction Specification  

### 1. Trigger  
- **Event:** `mousedown` on the like‑button element.  
- **Condition:** Button is in an enabled state (`data‑disabled="false"`).  

### 2. Immediate Feedback – First Pixel (≤ 16 ms)  
- **Visual:** A subtle “ripple” originates from the cursor with a light‑blue tint.  
- **Layer:** CSS `overflow:hidden` clipped mask; animation starts immediately on the event.  

### 3. State Transition (Total: 120 ms)  
| Step | Time (ms) | Action | CSS / JS |
|------|-----------|--------|----------|
| 0–20 | 0‑20 | Button “ripple” animates from opacity 1 → 0 | CSS animation that uses `cubic-bezier(0.4, 0, 0.2, 1)` |
| 20–80 | 20‑80 | Icon  ](• ) ↔︎ (♥︎) flips to solid heart with a 15 % scale pop | CSS `transform: scale(1.15)` → `scale(1)` using `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease‑in‑out) |
| 80–120 | 80‑120 | Background color transitions to `#e0245e` (red) “liked” state; if previously un‑liked, fade back to `#fff` | `cubic-bezier(0.5, 0, 0.1, 1)` |

Total animation time from trigger to final visual state: **120 ms**.  

### 4. Completion  
- Once the 120 ms sequence ends, the button remains in the solid‑heart state until the next click toggles it back.  
- No auto‑reset occurs; user must click again to revert.

### 5. Accessibility  
| Feature | Implementation |
|---------|-----------------|
| **Keyboard** | `Enter` or `Space` on focused button triggers the same animation. |
| **Screen Reader** | `aria-pressed="true|false"` updated on state change. |
| **Reduced Motion** | If `prefers-reduced-motion: reduce`, the animation collapses to an instantaneous icon swap; no ripple or scale. |
| **Focus Indicator** | Visible outline (`outline: 2px solid #005fcc`) appears on button focus. |

### 6. Timing & Easing Summary  
| Phase | Duration (ms) | Easing Function | Rationale |
|-------|---------------|-----------------|-----------|
| Ripple | 0‑20 | `cubic-bezier(0.4, 0, 0.2, 1)` | Instant feedback, minimal motion. |
| Scale pop | 20‑80 | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Natural, bouncy effect. |
| Color transition | 80‑120 | `cubic-bezier(0.5, 0, 0.1, 1)` | Smooth fade into final state. |

*All timings meet the 16 ms first-pixel rule and keep the total duration between 80 – 360 ms.*  

---  
*Source: Microinteraction spec skill guide.*

<details><summary>Log</summary>

```
[2026-06-10T18:50:26.975Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T18:50:26.994Z] Loaded the **microinteraction-spec** skill playbook for this task.
[2026-06-10T18:50:26.994Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:51:52.839Z] Hermes responded in 85.8s (2375 chars).
[2026-06-10T18:52:00.529Z] Quality gate: Hermes answer passed (score 0.82).
```
</details>
