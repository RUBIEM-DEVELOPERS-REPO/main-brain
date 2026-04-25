# Active context

_Last updated: 2026-04-25_

## Current focus
Bootstrapping this vault as a second brain and standing up the clawbot (cloud automation that feeds GitHub activity into `_clawbot/`).

## In progress
_None — bootstrap session complete._

## Next
- Configure openclaw locally with a memory plugin pointed at this vault.
- Use `clawbot publish-folder` to publish local-only folders worth pushing up: `research_platform`, `WonderCast`, `zim-compare-ui-redesign`, `ddms`, plus company docs.
- Verify the next scheduled cron run (06:30 UTC daily) lands without manual trigger.
- First MOC in `3-MOCs/` once a theme emerges from inbox notes.

## Decided
- Two artifacts joined by the vault git repo: cloud `clawbot` (GH Actions cron) + local openclaw (chat-side AI). See decisions.md 2026-04-25 entries.

## GitHub account
- `RUBIEM-DEVELOPERS-REPO` — 24 repos discovered by the digest.

## Verified
- 2026-04-25 — End-to-end digest run succeeded. Vault `_clawbot/` populated with daily digest + per-repo snapshots, pulled locally.
