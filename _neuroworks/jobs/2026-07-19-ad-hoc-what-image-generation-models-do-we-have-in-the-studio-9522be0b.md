---
type: job
title: Ad-hoc: What image generation models do we have in the studio?
slug: ad-hoc-what-image-generation-models-do-we-have-in-the-studio-9522be0b
created: 2026-07-19T08:37:51.139Z
jobId: 9522be0b-5c4d-4189-bbed-5b246b731f34
status: succeeded
template: general-task
persona: multimedia-producer
personaName: Milo
startedAt: 2026-07-19T08:32:38.380Z
finishedAt: 2026-07-19T08:37:51.138Z
---

# Ad-hoc: What image generation models do we have in the studio?

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-07-19T08:32:38.380Z
- **Finished:** 2026-07-19T08:37:51.138Z
- **Title:** Ad-hoc: What image generation models do we have in the studio?

## Inputs
```json
{
  "task": "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWhat image generation models do we have in the studio?",
  "userText": "What image generation models do we have in the studio?",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "multimedia-producer"
}
```

## Plan
List the studio's generative-media models.

### Steps
1. ✓ media.studio_models — `media.studio_models` (0.4s)
    > list available generative-media models
2. ✓ Quality-checking the draft — `quality.check` (120.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Checking against governance policies — `governance.check` (0.0s)
    > auto-injected: check answer against accepted hard governance constraints
5. ✓ Asking a peer to review the draft — `peer.review` (33.4s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Studio Image Generation Models

The studio currently has 51 image generation models available in its catalog [1]. These text-to-image models are distributed across several key providers, offering a wide range of stylistic capabilities and aspect ratio configurations for our multimedia projects [1]. 

The primary models available in our environment include:

* **Nano Banana (Google):** A highly flexible text-to-image model supporting ten distinct aspect ratios, ranging from standard landscape and portrait formats to ultra-wide 21:9 layouts [1].
* **Flux Series (Black Forest Labs):** This suite includes Flux Dev, Flux Dev Lora, Flux Kontext Dev T2I, and Flux Kontext Pro T2I [1]. The Kontext variants are particularly useful for production work due to their robust aspect ratio support, including cinematic 21:9 and vertical 9:16 formats [1].
* **Hidream I1 Series (Runware):** Available in Fast, Dev, and Full configurations, allowing us to balance rendering speed against visual fidelity depending on the project phase [1].
* **Ai Anime Generator (Wavespeed):** A specialized model optimized for generating stylized anime and illustrative assets [1].
* **Wan2.1 Text To Image (Alibaba):** A high-performance model suitable for detailed asset generation [1].

These tools provide our creative team with the necessary coverage to handle everything from rapid storyboarding to high-fidelity final asset generation [1].

<details><summary>Log</summary>

```
[2026-07-19T08:32:38.400Z] Handling this myself — no peer workers are reachable.
[2026-07-19T08:32:38.403Z] Working as Milo — Multimedia Producer.
[2026-07-19T08:32:38.810Z] Recognised the shape — Direct tool use, 1 step.
[2026-07-19T08:32:38.816Z] Plan ready: 1 step — List the studio's generative-media models..
[2026-07-19T08:32:38.876Z] Step 1 of 1: media.studio_models
[2026-07-19T08:32:39.239Z] All sub-agents finished in 0.4s.
[2026-07-19T08:32:39.804Z] Thinking with nvidia/nemotron-3-super-120b-a12b:free (~4 669 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-07-19T08:32:50.875Z] Reviewing the draft — running quality, security, and governance checks in parallel.
[2026-07-19T08:32:52.885Z] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-07-19T08:32:52.886Z] Step 3 of 4: Security-scanning the note
[2026-07-19T08:32:52.887Z] Step 4 of 4: Checking against governance policies
[2026-07-19T08:32:52.889Z] Step 2 of 4: Quality-checking the draft
[2026-07-19T08:34:52.906Z] Wave 1 finished in 120.0s.
[2026-07-19T08:34:52.906Z] All sub-agents finished in 120.0s.
[2026-07-19T08:34:52.921Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-19T08:34:52.922Z] Step 5 of 5: Asking a peer to review the draft
[2026-07-19T08:35:26.363Z] All sub-agents finished in 33.4s.
[2026-07-19T08:35:26.401Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (120s) exceeded) — re-synthesising with the large model
[2026-07-19T08:35:26.422Z] Thinking with google/gemini-3.5-flash (~5 216 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-19T08:37:17.064Z] quality rescue improved score: 0 → 0.85; using the rescued draft
[2026-07-19T08:37:17.064Z] peer review verdict=needs-work (reviewer JSON unparseable) — retrying with reviewer's issues as guidance before returning to user
[2026-07-19T08:37:17.087Z] Thinking with google/gemini-3.5-flash (~5 340 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-19T08:37:51.126Z] retry verdict=needs-work and quality not improved (0.85 ≤ 0.85); keeping the rescued/original draft
[2026-07-19T08:37:51.135Z] Saved this workflow as a reusable template: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-.
[2026-07-19T08:37:51.135Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-07-19T08:37:51.138Z] Not filed to the vault — not context-rooted — no vault, web, or GitHub references found.
```
</details>
