---
type: job
title: Ad-hoc: make a short promo video of a coffee cup
slug: ad-hoc-make-a-short-promo-video-of-a-coffee-cup-aa0a57ca
created: 2026-07-23T13:28:41.821Z
jobId: aa0a57ca-55ed-4b24-800f-d86be01d0988
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-07-23T13:26:47.407Z
finishedAt: 2026-07-23T13:28:41.820Z
---

# Ad-hoc: make a short promo video of a coffee cup

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-07-23T13:26:47.407Z
- **Finished:** 2026-07-23T13:28:41.820Z
- **Title:** Ad-hoc: make a short promo video of a coffee cup

## Inputs
```json
{
  "task": "(You are operating as Vince, the Video Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nmake a short promo video of a coffee cup\n\nInterpretation: intent=answer, scope=short.",
  "userText": "make a short promo video of a coffee cup",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "intentScope": "short",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaAutoRouted": "video-producer",
  "autoRouteMatches": [
    "make a short"
  ],
  "personaId": "video-producer"
}
```

## Plan
Video generation — text-to-video via the studio (media.video).

### Steps
1. ✓ media.video — `media.video` (0.0s)
    > text-to-video studio generation
2. ✓ Quality-checking the draft — `quality.check` (9.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Checking against governance policies — `governance.check` (0.0s)
    > auto-injected: check answer against accepted hard governance constraints
5. ✓ Asking a peer to review the draft — `peer.review` (10.0s)
    > auto-injected: quality score=0.67 (pass=false) — peer review for a second opinion

## Answer
## Coffee Cup Promo Video Plan (9:16 Vertical)

This 15-second promotional concept is optimized for Instagram Reels and TikTok (9:16 aspect ratio), placing a high-sensory visual hook in the very first second to maximize viewer retention.

### Storyboard & Video Prompts

*   **Shot 1 (0:00 - 0:03) — The Hook**
    *   **Prompt:** SUBJECT: Dark espresso liquid. ACTION: Pouring and splashing into a white ceramic coffee cup in slow motion. SETTING: A minimalist, modern kitchen counter. CAMERA: Extreme close-up, macro lens, static. MOOD/LIGHTING: Warm morning sunlight, high contrast, shallow depth of field.
*   **Shot 2 (0:03 - 0:08) — The Product Reveal**
    *   **Prompt:** SUBJECT: A steaming white ceramic coffee cup on a wooden saucer. ACTION: Steam gently rising from the cup. SETTING: A cozy, rustic cafe table next to a window. CAMERA: Slow push-in tracking shot. MOOD/LIGHTING: Soft, diffused side-lighting, cozy and inviting atmosphere.
*   **Shot 3 (0:08 - 0:15) — The Lifestyle Action & CTA**
    *   **Prompt:** SUBJECT: A person's hand. ACTION: Gently lifting the coffee cup off the table. SETTING: Cozy cafe table. CAMERA: Slow pan up following the cup. MOOD/LIGHTING: Warm, golden hour lighting, cinematic look.

### Production & Editing Guidance

*   **Tools:** Capture footage using a smartphone in Cinematic Mode (or a mirrorless camera at 60fps for smooth slow-motion transitions). Edit the sequence in CapCut or Adobe Premiere Pro.
*   **Editing Steps:** Cut precisely on the beat of a warm, lo-fi acoustic track. Apply a warm color grade to emphasize the rich amber tones of the coffee and the clean ceramic of the cup. Overlay minimalist sans-serif text in the final three seconds for the brand's call to action.

*Note: The automated video render is currently pending as the video generation tool is not configured with an active provider key [1].*

<details><summary>Log</summary>

```
[2026-07-23T13:26:47.407Z] auto-routed to persona "video-producer" (score=2, matched=make a short)
[2026-07-23T13:26:47.410Z] DELEGATE_ALL → lightest worker managed-worker-7473 (effective load 1)
[2026-07-23T13:26:47.410Z] Why I delegated: persona-shifter.
[2026-07-23T13:26:48.510Z] [peer] hired employee "Vince" (Video Producer) for this task — scoped to this run only
[2026-07-23T13:26:48.510Z] [peer] Recognised the shape — Direct tool use, 1 step.
[2026-07-23T13:26:48.510Z] [peer] Plan ready: 1 step — Video generation — text-to-video via the studio (media.video)..
[2026-07-23T13:26:48.510Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-23T13:26:48.510Z] [peer] Step 1 of 1: media.video
[2026-07-23T13:26:48.510Z] [peer] All sub-agents finished in 0.0s.
[2026-07-23T13:26:48.510Z] [peer] Reviewing the draft — running quality, security, and governance checks in parallel.
[2026-07-23T13:26:48.510Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-23T13:26:48.510Z] [peer] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-07-23T13:26:48.510Z] [peer] Step 3 of 4: Security-scanning the note
[2026-07-23T13:26:48.510Z] [peer] Step 4 of 4: Checking against governance policies
[2026-07-23T13:26:48.510Z] [peer] Step 2 of 4: Quality-checking the draft
[2026-07-23T13:26:59.962Z] [peer] Wave 1 finished in 9.5s.
[2026-07-23T13:26:59.962Z] [peer] All sub-agents finished in 9.5s.
[2026-07-23T13:26:59.962Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-23T13:26:59.962Z] [peer] Step 5 of 5: Asking a peer to review the draft
[2026-07-23T13:27:09.007Z] [peer] All sub-agents finished in 10.0s.
[2026-07-23T13:27:09.007Z] [peer] quality.check failed (score=0.67, issues: prompt_alignment 0.20 — the answer did not fully address what was asked; No video produced) — re-synthesising with the large model
[2026-07-23T13:27:09.007Z] [peer] Thinking with google/gemini-3.5-flash (~5 161 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-23T13:28:00.264Z] [peer] quality rescue improved score: 0.67 → 0.76; using the rescued draft
[2026-07-23T13:28:00.264Z] [peer] peer review verdict=needs-work (Did not provide a promo‑video plan or instructions; Failed to act as Video Producer (Vince) by not suggesting tools, sho) — retrying with reviewer's issues as guidance before returning to user
[2026-07-23T13:28:00.264Z] [peer] Thinking with google/gemini-3.5-flash (~5 314 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-23T13:28:30.396Z] [peer] retry cleared peer review (verdict=good, confidence=0.95); using retry as final answer
[2026-07-23T13:28:30.396Z] managed-worker-7473 returned in 103.0s — succeeded.
[2026-07-23T13:28:30.396Z] Worker confirmed it operated as "Vince".
[2026-07-23T13:28:30.397Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-07-23T13:28:41.820Z] Filed to your second brain → 0-Inbox/202607231328-curated-make-a-short-promo-video-of-a-coffee-cup.md.
```
</details>
