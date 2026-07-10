# Main brain

Personal Obsidian vault — second brain + operational memory + clawbot landing zone.

## Layout

```
CLAUDE.md             # how Claude works in this vault — read first

0-Inbox/              # fleeting capture, unprocessed
1-Literature/         # notes on external sources (one file per source)
2-Permanent/          # atomic Zettel notes — the brain
3-MOCs/               # Maps of Content — structure notes / entry points
4-Projects/           # active client/venture work-in-progress, by project

_progress/            # YYYY-MM-DD dated engineering/session logs (replaces the old active-context.md/decisions.md/progress.md/_tasks/*, retired 2026-07-10)
_context/             # long-running domain context
_knowledge/           # reusable patterns, gotchas, recipes
_people/              # notes on people
_scratch/             # ephemeral drafts

_clawbot/             # cloud-bot output — read-only by hand
_neuroworks/          # operational system state — job journal, reflections (not knowledge, don't hand-edit)
```

## Two layers, one vault

- **Operational state** (`_progress/`, `_neuroworks/reflections/`) keeps track of what actually happened, automatically.
- **Zettelkasten** (`0-Inbox/` → `2-Permanent/` → `3-MOCs/`, plus `4-Projects/` for work-in-progress) is durable knowledge with stable IDs and links.
- **Clawbot output** (`_clawbot/`) feeds fresh cloud info in; useful items get promoted into the Zettelkasten by hand.

## Working with the clawbot

The clawbot runs in the cloud (GitHub Actions). It pulls data from GitHub and writes digests into `_clawbot/`, then commits + pushes to the vault repo. Locally, `git pull` (or the Obsidian Git plugin) brings the updates down.
