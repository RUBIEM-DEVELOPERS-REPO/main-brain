---
title: Bootstrap second brain + clawbot
date: 2026-04-25
---

# Session log — bootstrap second brain + clawbot

## What we worked on

Stood up the entire system from zero: vault, cloud bot, local clone of openclaw.

- Initialized `D:\Main brain` as a git repo and scaffolded both layers (Zettelkasten + session-memory) and the clawbot landing zone.
- Cloned `openclaw` to `Documents/GitHub/openclaw` for local reference.
- Wrote `clawbot` from scratch as a slim TS cron worker (~200 LOC).
- Created two private GitHub repos under `RUBIEM-DEVELOPERS-REPO`: `main-brain` and `clawbot`.
- Wired `CLAWBOT_PAT` secret + workflow, ran the digest end-to-end successfully.
- Pulled the digest locally — `_clawbot/2026-04-25.md` confirmed.

## Decisions made

- [Vault hosts both Zettelkasten and session memory](../decisions.md) — single tree, two layers.
- [Clawbot is cloud, vault is the bridge](../decisions.md) — bot runs in GH Actions, writes into vault repo.
- [Clawbot is a slim cron worker, NOT an openclaw plugin (yet)](../decisions.md) — openclaw stays local-first; cron job has different shape.

## Gotchas / learnings

- **Fine-grained PATs need explicit Administration permission for repo creation** — default scopes don't include it, even with "All repositories" + Contents read/write.
- **Pasting a PAT into the GitHub Actions secret UI can introduce a trailing newline** that breaks `https://x-access-token:<TOKEN>@github.com/...` URLs. Defensive `.trim()` in code is cheap insurance.
- **Repo Variables (`vars.X`) didn't propagate** in our case — possibly created as a secret by mistake, or fine-grained PAT didn't grant the right scope. Hardcoding the value worked. Variables are convenient but not load-bearing for a single-vault setup.
- **`gh` CLI install via winget is slow** under UAC. We never needed it — raw GitHub REST + a 30-line `libsodium-wrappers` script does everything.
- **Openclaw doesn't fit a cron-job shape**. It's local-first, expects a long-running gateway. Build cloud automation as separate slim workers; let openclaw be the chat-side AI that reads the vault.

## What's left to do

- Configure openclaw locally with a memory plugin pointing at `D:\Main brain` (when ready to wire chat channels).
- Use `clawbot publish-folder` to push the local-only folders worth publishing: `research_platform`, `WonderCast`, `zim-compare-ui-redesign`, `ddms`, plus any company docs.
- Fill in the first MOC in `3-MOCs/` once a theme emerges from inbox notes.
- Verify the next scheduled cron run (06:30 UTC daily) lands without manual trigger.
