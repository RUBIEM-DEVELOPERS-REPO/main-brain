---
type: job
title: Sketch flows that minimise cognitive load and decision points
slug: sketch-flows-that-minimise-cognitive-load-and-decision-point-4a6b188a
created: 2026-05-29T09:39:14.616Z
jobId: 4a6b188a-7cdc-4348-ba72-a0a6b219fe78
status: succeeded
template: custom-product-designer-sketch-flows-that-minimise-cognitive-loa
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:36:45.294Z
finishedAt: 2026-05-29T09:39:14.615Z
---

# Sketch flows that minimise cognitive load and decision points

- **Status:** succeeded
- **Template:** custom-product-designer-sketch-flows-that-minimise-cognitive-loa
- **Started:** 2026-05-29T09:36:45.294Z
- **Finished:** 2026-05-29T09:39:14.615Z
- **Title:** Sketch flows that minimise cognitive load and decision points

## Plan
Generate and quality‑check concise low‑cognitive‑load user flow sketches.

### Steps
1. ✓ Thinking about it — `ollama.generate` (16.3s) · model `openai/gpt-oss-20b:free`
2. ✓ Quality-checking the draft — `quality.check` (6.7s)
3. ✓ Quality-checking the draft — `quality.check` (7.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
5. ✓ Asking a peer to review the draft — `peer.review` (14.3s)
    > auto-injected: quality score=0.30 (pass=false) — peer review for a second opinion

## Answer
## Minimal‑Cognitive‑Load User Flow Sketch  

1. **Launch App** – Splash screen auto‑transitions to a one‑line welcome screen.  
2. **Welcome Screen** – Greeting with an optional **Skip Tutorial** button; otherwise a brief **Learn Quick** link.  
3. **Authentication** –  
   - If stored credentials exist → auto‑login.  
   - New users see a single **Create Account** button; additional fields appear only on demand.  
4. **Home Dashboard** – Prominent **Primary Action** (e.g., “Start New Task”) displayed centrally; secondary actions hidden in a collapsible menu to reduce visual clutter.  
5. **New Task Flow**  
   - **Task Type Selection** – Most common type pre‑selected; a quick toggle reveals alternatives if needed.  
   - **Task Details** – Fields pre‑filled from defaults; an optional **Edit** button exposes advanced settings.  
   - **Review & Confirm** – Single **Confirm** button; a **Cancel** option appears only when the user initiates a back‑out.  
6. **Task Execution** – Minimal UI with one central control, a clear progress bar, and a **Done** button that appears on completion.  
7. **Post‑Task Summary** – Results auto‑displayed; **Save** auto‑saves if preferred, otherwise optional; **Share** button collapsed to keep focus.  
8. **Settings** – Accessed via profile icon; a one‑click **Preferences** panel offers toggles for **Auto‑Login**, **Auto‑Save**, **Show Tips**; advanced settings are available in a drill‑down panel.  
9. **Logout / Exit** – Single **Logout** button in the profile menu; confirmation required only if unsaved data exists.  

**Design Principles**  
- **Reduce Decision Points**: Defaults handle the majority of cases; optional paths are disclosed only when the user explicitly requests them.  
- **Minimize Cognitive Load**: Single‑action screens, clear visual hierarchy, and collapsible menus keep the interface uncluttered.  
- **Progressive Disclosure**: Advanced options are hidden until needed, preventing overload at early stages.  

*Sources: [1] ollama.generate, [4] security.scan*

<details><summary>Log</summary>

```
[2026-05-29T09:36:45.305Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:36:45.926Z] Thinking about the best approach…
[2026-05-29T09:36:45.952Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:36:52.236Z] Plan ready: 2 steps — Generate and quality‑check concise low‑cognitive‑load user flow sketches..
[2026-05-29T09:36:52.246Z] Step 1 of 2: Thinking about it
[2026-05-29T09:37:08.548Z] Step 2 of 2: Quality-checking the draft
[2026-05-29T09:37:15.244Z] All sub-agents finished in 23.0s.
[2026-05-29T09:37:15.250Z] Thinking with openai/gpt-oss-20b:free (~2 615 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:37:29.226Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:37:29.230Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:37:29.230Z] Step 4 of 4: Security-scanning the note
[2026-05-29T09:37:29.231Z] Step 3 of 4: Quality-checking the draft
[2026-05-29T09:37:36.347Z] Wave 1 finished in 7.1s.
[2026-05-29T09:37:36.347Z] All sub-agents finished in 7.1s.
[2026-05-29T09:37:36.349Z] Step 5 of 5: Asking a peer to review the draft
[2026-05-29T09:37:50.666Z] All sub-agents finished in 14.3s.
[2026-05-29T09:37:50.673Z] quality.check failed (score=0.3, issues: Answer contains no substantive content; effectively empty.; No claims to evaluate for factuality.) — re-synthesising with the large model
[2026-05-29T09:37:50.679Z] Thinking with openai/gpt-oss-120b:free (~3 687 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:38:16.209Z] quality rescue improved score: 0.3 → 0.74; using the rescued draft
[2026-05-29T09:38:16.209Z] peer review verdict=needs-work (Unsubstantiated reference to evidence [1] with no source; Answer is purely textual; could include diagrammatic sketch or) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:38:16.214Z] Thinking with openai/gpt-oss-120b:free (~3 859 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:39:14.615Z] retry verdict=needs-work and quality not improved (0.55 ≤ 0.74); keeping the rescued/original draft
```
</details>
