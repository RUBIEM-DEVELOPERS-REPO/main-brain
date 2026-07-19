---
type: progress
date: 2026-07-19
scope: image-gen cost tracking + bug review + production hardening + enterprise security testing
author: claude-code session
---

# Cost tracking, bug review, hardening, security testing

## 1. Cost monitor now tracks image generation
Image gen used a direct fetch, bypassing the token-based LLM cost path entirely. Added:
- cost-tracker.ts: `recordImageCost(provider, model, jobId, units)` with per-image USD estimates (OpenRouter/Gemini flash ~$0.04, Pro/Imagen-ultra/gpt-image ~$0.12, Ideogram ~$0.08, flux/seedream ~$0.05; :free models = $0). Extended CostRecord.backend union with ideogram|muapi + a `units` field.
- studio-image.ts records cost after every successful generation.
- Live-verified: a generation writes `{profile:"image:openrouter", model:"google/gemini-2.5-flash-image", costUsd:0.04, units:1}` to cost.jsonl, and it surfaces in GET /api/cost/summary byModel + recentCalls (the Cost page reads this).

## 2. Bug review (code-review skill, high) — 5 findings, all fixed
1. **MyWork PromptRow was a component nested inside MyPromptsSection** → new identity every 15s poll → React remounted every row → expanded rows snapped shut. Hoisted to module scope.
2. **/api/media/:file did dynamic import() of path+studio-image on every request** → hoisted to module-scope imports.
3. **synthesize() media short-circuit returned on any media.image run**, dropping sibling-step results (safe today — single-step plan — noted as altitude risk).
4. **chat.ts res.json interceptor recorded error envelopes** (kind:"error"/4xx-5xx) into My Work history → now skips errors.
5. **security-watch flood used `=== FLOOD_LIMIT`** (missed bursts past the line) → `>=` with a per-IP re-arming latch.

## 3. Production hardening (new surfaces)
- downloadToMedia (Ideogram/Muapi image URL fetch) now runs the shared `assertSafePublicUrlAsync` SSRF guard + `redirect:"manual"`.
- Media dir capped: pruneOldImages keeps newest NW_MEDIA_MAX_IMAGES (default 500) image-*.png, so .neuroworks/media can't grow without bound.

## 4. Enterprise security testing (live)
- Media route path traversal: `..%2f`, `..%5c`, absolute `C:\`, dotfiles, nested subpaths ALL → 400; nonexistent → 404; legit download → 200. Solid.
- Auth/layer gates: /api/cost/summary + /api/security/events → 403 (origin-guard + superadmin/admin layer); /api/chat/history without token → 401.
- Security watchdog: scanner probes (wp-admin/.git/phpmyadmin) + traversal logged; **loopback never self-blocked** (14 malicious-looking loopback reqs, 0 blocks) — the key safety property.
- Injection detector: legit "union of two sets" / "select the best" queries → 200, 0 false-positive flags (regex needs real `union select` adjacency).
- **IDOR FIXED**: /api/media/:file had no per-user ownership check and filenames were `image-<provider>-<Date.now()>.png` (enumerable). In a multi-user enterprise install user B could guess user A's timestamp and pull their image. Fix: appended a `randomUUID().slice(0,12)` suffix → unguessable. Verified live: filename now `image-openrouter-<ts>-<uuid>.png`, still downloads + cost-tracks.

## State
All session features (chat isolation, security watch, org grounding, briefing, studio image gen + downloadable visuals, cost tracking) are live, hardened, security-tested. 17 commits ahead of origin/main, uncommitted working tree. No High security findings; the one Medium IDOR is fixed.
