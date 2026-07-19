---
type: progress
date: 2026-07-19
scope: text-to-image studio capability (Ideogram + Muapi) from two GitHub repos
author: claude-code session
---

# Studio image generation — agents can now make images

User handed two repos (ideogram-oss/ideogram4, Anil-matcha/Open-Generative-AI) to give agents "studio abilities". Assessed both: the real gap in NeuroWorks was **text-to-image** — media.* already had tts/video/music (MiniMax) + avatar (HeyGen) but no image. Integrated the useful parts rather than the heavy code (ideogram4 = 9.3B local weights, too heavy; Open-Gen = full Electron studio app).

## What shipped
- **`lib/studio-image.ts`** — provider-abstracted text-to-image. Two hosted providers, both env-gated exactly like MiniMax/HeyGen (no key = capability simply not offered):
  - Ideogram (IDEOGRAM_API_KEY) — best for typography/logos/posters; POST {base}/v1/{model}/generate, header `Api-Key`.
  - Muapi (MUAPI_API_KEY) — one key fronting a whole catalog; POST {base}/api/v1/{endpoint}, header `x-api-key`, async submit→poll.
  - Saves PNG to .neuroworks/media, returns {path, bytes, provider, model} — same shape as minimaxTts so email attach plumbing just works.
- **`lib/studio-models.ts`** — 51-model catalog extracted from Open-Gen's models_dump.json (nano-banana, flux, seedream, imagen, ideogram, …) with provider + aspect ratios.
- **Primitives**: `media.image` (generate) + `media.studio_models` (list catalog). Config gating (config.ideogramEnabled/muapiEnabled/studioImageEnabled). Health on /api/status/llm (studioImage block).
- **Skill** `image-prompting.md` — distilled from ideogram4's prompting guide (5-layer prompt: subject/style/composition/lighting/colour; typography-in-quotes rule; model-to-job mapping; worked example). Keyword-registered.
- **Routing**: deterministic heuristicPlan branches for image-gen (→ media.image) and studio-model discovery (→ media.studio_models), plus direct-answer/triage vetoes so a non-design persona can't lane-refuse them, plus a plan()-level imageGenContext hint. Same deterministic pattern proven on org tasks (the LLM planner alone planned vault.search+fs.find_in and leaked tool-call JSON).
- .env.example documents both provider blocks.

## Verified live (no provider key set)
- "What image generation models do we have?" → routes to media.studio_models → agent reports all 51 models grouped by provider with aspect ratios. Clean.
- "Design a logo for Bean There" → routes to media.image → returns the honest "add IDEOGRAM_API_KEY or MUAPI_API_KEY" message (no key configured).

## State
Capability is fully wired and DORMANT until a provider key is added — identical to MiniMax (tts/video/music) and HeyGen (avatars), which are also keyless right now. Add IDEOGRAM_API_KEY (get at ideogram.ai/platform) or MUAPI_API_KEY (muapi.ai) in Integrations and image generation goes live with zero further code.

## Known rough edge
With NO key set, the image-gen synth sometimes fabricates a project plan over the tool's error instead of relaying "needs a key" verbatim (pre-existing thin-evidence synth behaviour). Harmless — evaporates the moment a real key returns a real image path. Not worth chasing before a key exists to test against.
