---
type: progress
date: 2026-07-19
scope: make agents actually produce DOWNLOADABLE images (end-to-end, live-verified)
author: claude-code session
---

# Agents now produce real downloadable visuals

Prior state (from the studio-image integration earlier today): media.image existed but was DORMANT (no provider key) and even with a key only saved a PNG to a disk path the user couldn't reach — no HTTP route, no UI preview, no download. User: "make sure agents actually produce downloadable visuals."

## What shipped
1. **FREE image route via the existing OpenRouter key** — added an OpenRouter provider to lib/studio-image.ts (chat/completions + modalities:["image","text"], decode the returned data: URL to disk). Rides the SAME key the text router already uses (applied at runtime by the active OpenRouter provider), so image gen is live with ZERO new keys. availableImageProviders() checks providers LIVE (config.studioImageEnabled was init-time and missed the runtime-applied OR key — that was why the primitive kept returning "not configured").
2. **Download route** — GET /api/media/:file serves .neuroworks/media with a hard basename/traversal guard (`..%2f..%2f.env` → 400). `?download=1` sets Content-Disposition: attachment.
3. **media.image returns a downloadUrl** (+ filename); generateStudioImage attaches it.
4. **Deterministic media short-circuit in synthesize()** — when a media.image step produced a file, the answer is built deterministically: inline `![](url)` preview + `[Download](url?download=1)` link + disk path. No LLM synth narrating around a binary (caught live: synth wrote a "content plan" over a real PNG). Uses a RELATIVE /api/media URL so it resolves against whatever host serves the UI. Errors (no provider) are relayed honestly, not fabricated over.
5. Chat + Results panels already render markdown via marked → the preview shows inline and the link is clickable, no web changes needed.

## Live-verified (real images, existing OpenRouter key)
- Direct: generated a 1024×1024 PNG (199KB), HTTP download 200 image/png, attachment header correct, traversal → 400.
- Through the agent: "Generate an image of a friendly robot mascot" → media.image ran (persona Milo) → answer carried the preview + download link → the 909KB PNG downloaded cleanly. 3 test images total, all downloadable.

## Gotcha that cost time
OpenRouter model id `google/gemini-2.5-flash-image-preview` 404s ("no endpoints"). The GA id is `google/gemini-2.5-flash-image` (no -preview). Default set to that; OPENROUTER_IMAGE_MODEL overrides. Other valid ids on the account: google/gemini-3.1-flash-image, gemini-3-pro-image, openai/gpt-5-image, etc.

## Notes
- Ideogram/Muapi remain optional premium providers (still keyless); auto-order is Ideogram → Muapi → OpenRouter. So the OpenRouter free route is the default that makes it work out of the box; adding a premium key upgrades quality.
- Image gen latency ~90s observed (OpenRouter queueing on this tier), well within the no-per-step-timeout agent path; openrouterGenerate has a 180s AbortController cap.
- .env.example documents the zero-config OpenRouter path + the model override.
