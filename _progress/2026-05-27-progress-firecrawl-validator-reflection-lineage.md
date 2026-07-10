---
title: "Progress — 2026-05-27 (session: gap-review + Firecrawl + source-validator)"
created: 2026-05-27
source: clawbot-progress
tags: [progress, neuroworks, clawbot, daily-log]
session_focus: ["gap review", "firecrawl integration", "source validation", "reflection lineage"]
---

# Progress — 2026-05-27

A heavy session: closed five backlog items (#4-#8) from the prior gap review, shipped bulk-import processing with a 504-binary text-extraction job, brought Firecrawl online as the planner's preferred search/scrape tier, built a strict source-validator that finally closes the "Denmark hotel page" failure mode, and persisted continuation lineage through to the nightly reflection.

## What shipped

### Correctness / quality
- **Source-validator (strict)** at `server/src/lib/source-validator.ts` + types module — drops auth walls, captcha pages, 4xx/5xx, sub-200-char extractions, and zero-relevance SERP results; scores survivors by query-term density + title presence; cuts bottom quartile when ≥4 sources. Wired into `research.deep` before synth and capture.
- **Vault unreachable detection** — `VaultUnreachable` error class + `assertVaultExists()` guard on every read/write entrypoint. `searchVault` no longer silently returns `[]` when D: is unmounted; `searchBrainRunner` catches and returns a clear "I can't reach your vault" message; `humanizeAllFail` recognises the new error class for the agent path. Closes the "no matches" failure that masked the unmounted-drive root cause.
- **TL;DR → Bottom line** across 9 skill playbooks + chat shape directives. The literal heading "TL;DR" no longer appears in synth output; the negative directives that block it stay in place.

### Firecrawl integration
- `FIRECRAWL_API_KEY` added to `.env`. `web.firecrawl` primitive activated; `firecrawlSearch` now runs FIRST in `searchWeb()` when the key is set (DDG/Bing become fallbacks). `smartFetch` returns the `engine` tag ("http" / "browser" / "firecrawl") so source attribution flows through to the captured note.
- **Verified live:** "research who is Dario Amodei" now returns the correct answer (CEO + co-founder of Anthropic) with LinkedIn + Wikipedia + Stanford as sources, validator kept 3/3 at relevance scores 25/23/23. Same query historically returned a Denmark hotel page.
- `EXA_API_KEY` parked in `.env`. No integration code yet — `exa.ts` would mirror `firecrawl.ts` and slot in as a third search tier.

### Reflection lineage (synced on continue-task loop)
- `PersistedJob` now records `continuesJobId`, `continuesOriginalText` (capped 400 chars), `continuesSummary`. The `asJob` shim hydrates them back so reflection sees the full chain even across server restarts.
- `DailyStats.continuations[]` added alongside `.retries[]`. Each entry carries the new job's id, title, the original job's id, the user's summary, and a thumbnail of the original ask. The synthesised reflection markdown now has a "Continuation chains" section with the original-ask quoted.
- Reflection markdown header now surfaces `continuationChains` + `retries` counts in frontmatter; one-liner above the body shows them alongside success rate.

### Bulk import + Knowledge UX
- 504 binaries + 380 sidecars copied from `~/Downloads` + `~/Documents` into `D:\Main brain\_imports\{downloads,documents}/`. Filter excluded `GitHub/`, `KONAMI/`, `League of Legends/`, music/video libraries, code-store nests; size cap 20 MB; doc-only extensions.
- `POST /api/brain/process-imports` extracts text from binaries into their sidecars (verified: 393/446 extracted, 0 errors). `POST /api/brain/discard` deletes a sidecar + its binary (whitelisted to `_imports/`).
- Knowledge page `ImportsActions` toolbar (Process / Discard) on `_imports/` files; `PromoteBar` extended to accept `_imports/` files for the 2-Permanent flow.
- `_imports/*.{pdf,docx,xlsx,pptx,...}` git-ignored — 438 sidecars (~0.5 MB) tracked, 240 MB of binaries stay disk-only.

### Other backlog items (#4-#8)
- **#4 tsx-watch killing in-flight jobs** — `abortInflightJobs(reason)` marks pending/running jobs as failed and persists on SIGTERM/SIGINT. 404 responses now carry `serverBootAt` + a hint; chat's `InlineJob` surfaces a "server restarted, retry" panel after two consecutive 404s.
- **#5 auto-router task-shape** — weighted patterns (verb+topic = 2, bare keyword = 1) with `CONFIDENCE_FLOOR = 2`. "Explain MSA to me" no longer hijacks onto contracts-reviewer.
- **#6 per-upload TTL** — chat upload chip now exposes 1h / 1d / 7d for context uploads + free-text folder picker for vault uploads. Server persists effective TTL as a `.ttl` sidecar.
- **#7 vault folder auto-create** — `fs.import_to_vault` accepts any safe user folder (alphanumeric + `_/-`, no traversal, system folders blocked) and mkdir-recursive auto-creates.
- **#8 breadcrumb on unmounted vault** — Knowledge page suppresses path segments while `vaultHealth.exists` is false.

### Performance
- **P1 MiniSearch inverted index** at `server/src/lib/vault-index.ts` — opportunistic O(log N) search when the index is ready, legacy linear walk as fallback. Built-in-progress flag + post-build grace window mitigate watcher false-invalidations on subst-mapped D:. Index builds 581 docs in ~0ms (warm cache); benefit lands cleanly after a fresh server restart.
- **P2 SSE for template jobs** — `InlineJob` loads initial state once then EventSources `/api/tasks/jobs/:id/stream` for log/patch/done. Polling retained as fallback if SSE setup fails.
- **P7 binary-doc gitignore** — vault repo no longer accepts the 240 MB of PDFs/Office docs from the bulk import.

### Infra
- **D: drive mounted** via `subst D: C:\vault-root` (vault drive was unmounted; created `C:\vault-root` and cloned `RUBIEM-DEVELOPERS-REPO/main-brain` into `D:\Main brain`).
- **Startup persistence** — `mount-vault.bat` in the user Startup folder runs `subst D: C:\vault-root` at logon so the mapping survives reboots.

## Open issues surfaced by today's reflection
- **`general-task` slice-of-undefined** — 15 failures across 191 runs (~7%). "Cannot read properties of undefined (reading 'slice')". Reproducible; needs a stack trace pass.
- **`add-note` writes to `N-Inbox`** — 4/5 failures with ENOENT on mkdir of `D:\Main brain\N-Inbox`. Looks like a templated typo for `0-Inbox`.
- **`byPersona` empty in persisted records** — persona attribution survives in-memory but doesn't roundtrip through JSONL; reflection's "Employees on the clock" section is blank.
- **MiniSearch index destabilises under tsx-watch hot-reload** — each reload leaks an fs.watch handle, the zombies still invalidate the new index. Clean restart fixes; defensive `globalThis` flag would prevent it.
- **Team.tsx continuation UI mirror** — server-side flow ships, web mirror deferred.

## Vault state
- `_imports/` populated: 504 binaries + 452 sidecars (393 with `## Excerpt` blocks post-extraction).
- Today's research notes captured to `0-Inbox/`: Dario Amodei (3 sources, all kept), Firecrawl product reference (3 sources), REST API (multi-source brief).
- Reflection lives at `_neuroworks/reflections/2026-05-24.md` covering 206 tasks / 187 succeeded / 91% rate.

## Next session
- Fix the two reflection-surfaced bugs (slice-of-undefined + N-Inbox typo).
- Build `exa.ts` client to slot Exa in as a third search tier (key already in `.env`).
- Mirror the continuation UI into `Team.tsx` for parity with chat.
- Defensive watcher cleanup so the MiniSearch index settles even under tsx-watch.
