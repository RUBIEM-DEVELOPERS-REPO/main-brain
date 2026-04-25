# Active context

_Last updated: 2026-04-25_

## Current focus
Bootstrapping this vault as a second brain and standing up the clawbot (cloud automation that feeds GitHub activity into `_clawbot/`).

## In progress
- Pushing vault to private `main-brain` repo (waiting on PAT permission or manual repo create).
- Pushing clawbot worker code to private `clawbot` repo.

## Next
- Wire `CLAWBOT_PAT` secret + `VAULT_REPO` variable on the clawbot repo (via gh CLI once installed).
- First daily-digest run via `workflow_dispatch` to verify end-to-end.
- Configure openclaw locally with a memory plugin pointed at this vault.

## Decided
- Two artifacts joined by the vault git repo: cloud `clawbot` (GH Actions cron) + local openclaw (chat-side AI). See decisions.md 2026-04-25 entries.

## GitHub account
- `RUBIEM-DEVELOPERS-REPO` — 22 owned repos to be scanned by the digest.
