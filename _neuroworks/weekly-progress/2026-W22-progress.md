---
title: Weekly Progress — Week of 2026-05-26 → 2026-06-02
period: 2026-W22
generated: 2026-06-02
kind: weekly-progress
---

# Weekly Progress — 2026-05-26 → 2026-06-02

## Bottom line

**1,453 tasks ran across the workforce this week with a 99% success rate (1,433 OK / 20 failed / 0 rejected).** All 20 failures were concentrated in the Hermes external-agent suite — the clawbot fleet ran clean. The codebase landed **103 files / +12,932 lines** worth of new capability across OCR, animations, data sources, doc editing, calendar, and planning hardening. Reflection scheduling is being wired so Calendar reflects daily progress automatically.

## Run-level metrics (from `_neuroworks/reflections/2026-05-26.md`)

| Metric | Value |
|---|---|
| Tasks executed | 1,453 |
| Succeeded | 1,433 (99%) |
| Failed | 20 |
| Rejected | 0 |
| Window | 2026-05-26 → 2026-06-02 |

**Healthiest tools** — `security.scan` (0% fail / 1,096 runs), `research.deep` (0% fail / 829 runs), all `custom-insurance-*` + `custom-aiia-marketing-specialist-v2` templates.

**Hot spots** (now resolved by end-of-week fixes — see below):
- `fs.read_external` 41% failure rate (7/17 runs) — root cause: planner shape errors and Unicode separators in needles.
- `general-task` 3 failures (2 "Cannot read properties", 1 "fetch failed").
- Hermes external-agent suite 20 failures — recommend sandboxing.

## What landed this week (shipped capability)

### Local-file access (the big one)
- Planner now reliably picks `fs.find_in` for local-folder tasks instead of routing to `research.deep` (added `localFsContext` system prompt + post-plan repair pass).
- Needle tokenizer: Unicode dash/quote normalization, noise-word stripping (`the/a/of/and/summarize/find/...`), 70% fuzzy fallback when strict matching misses, cache-bypass on zero-hit to defeat stale NTFS folder mtime.
- `fs.find_in` now matches **directories too** — when a folder name matches, the documents inside are surfaced before the folder itself so the chain doesn't dead-end.
- `fs.read_external` returns a structured directory listing when handed a folder path.
- Defensive `resolveValue` fallback handles `$step_0.path` → `matches[0].path` planner shape errors.

### Document understanding
- **OCR pipeline** for image-only PDFs: `pdfjs-dist` + `@napi-rs/canvas` renders each page to PNG → `tesseract.js` extracts text. 6 sec per page, ~87% confidence on clean invoices. Fully offline, fully free.
- Cloud OCR path via OpenRouter wired (gated on account credit).
- `doc.ocr` primitive (engine = `auto / local / cloud`).
- Auto-fallback inside `extractDocText` — image-only PDFs transparently go through OCR; agents see real text.
- New `/api/brain/ensure-sidecar` endpoint generates editable `.md` sidecars on demand from binary doc imports.

### Company data (new surface)
- **Database connections** page (`/data-sources`) — Postgres / MySQL / SQLite via connection string. Read-only by default (SQL gate rejects DDL/DML). Connection-string redaction in the UI, plaintext stays server-side at `.neuroworks/data-sources.json`.
- `db.list_sources` / `db.schema` / `db.query` primitives — agents can answer business-data questions from the operator's actual CRM/HR DB instead of the web.
- Company knowledge folder `_company/` — files uploaded here are auto-indexed by `vault.search`.
- Planner now has a `companyDataContext` nudge that surfaces registered sources to every plan.

### Doc editor + downloads
- New `/edit` route with split markdown-source / live-preview, agent-assist panel, save through commit queue.
- Upload-to-edit affordance on the empty state.
- Download menu (PDF / DOCX / Markdown) via the existing `/api/exports/*` routes.

### Calendar
- New `/calendar` page (month grid + day-detail panel).
- `/api/calendar/activity` (jobs by day) + `/api/calendar/agenda` (jobs + iCal meetings + scheduled tasks).
- Stagger animation on grid mount.

### UI animation system
- Reusable keyframes + utility classes in `index.css` (skeleton shimmer, fade-up, scale-in, pop-check, thinking-dots, breathing-glow, toast-slide).
- All animations gated by `prefers-reduced-motion: reduce`.
- `<Skeleton>`, `<SkeletonList>`, `<ToastRack>`, `showToast()` primitives in `Card.tsx`.
- Status-dot animates state transitions, agent avatars breathe when busy, trace steps fade up in sequence, page transitions on route change.

### Skills
- 13 new skills added (88 total): `motion-design-pass`, `loading-state-design`, `microinteraction-spec`, `css-animation-snippet`, `database-lookup`, `company-knowledge-lookup`, `customer-360`, `pipeline-review`, `company-onboarding`, `daily-briefing`, `eod-handoff`, plus the OCR/file flow ones.

### Agent quality (from the reflection)
- **Anti-capability-denial rule** added to `POLISHED_SYNTH` — the synth model can no longer fabricate "I don't have the ability to read files" when `fs.read_external` actually ran.
- Strengthened planner examples for `fs.find_in → fs.read_external` chains so `$step_0.matches.0.path` is used consistently.

## Vault activity

- `0-Inbox/` — 957 entries (operator's ongoing work)
- `2-Permanent/` — 16 promoted notes
- `_neuroworks/reflections/` — 4 daily reflections (2026-05-24, -26, -29, -06-01)
- This week's most-touched binary: `Hon. P. Mavunga-ZIMRA-Invoice (1).pdf` — image-only PDF, now extractable via OCR.

## What needs attention next week

1. **Reflection → action loop.** The reflection identifies hot spots (e.g. `fs.read_external` failures) — but there's no mechanism that auto-applies the lessons. Wire reflection output into `_governance/lessons.md` so next-day agents see the prior findings as system context.
2. **Hermes sandbox.** The 20 failures are all Hermes-side. Either gate Hermes runs behind a feature flag, or fix the specific templates (`custom-give-me-a-summary-on-neuroworks` is the worst offender).
3. **Peer-review latency.** Three jobs alone burned ~56k seconds in peer.review. Either move to a lower-priority queue or cap per-job review time.
4. **OpenRouter credit.** Several agent paths now have a cloud fallback (OCR, large-context planning) but the account hits "requires $0.50 balance" for files. Small top-up unlocks cloud OCR + multimodal vision for messy scans.
5. **Promote ↗.** 957 inbox entries vs 16 permanent — the curation gate is producing notes but very few are being promoted. Consider a weekly "promote candidates" task.
