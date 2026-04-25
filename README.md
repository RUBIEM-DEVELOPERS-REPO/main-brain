# Main brain

Personal Obsidian vault — second brain + operational memory + clawbot landing zone.

## Layout

```
CLAUDE.md             # how Claude works in this vault — read first
active-context.md     # current focus
progress.md           # milestones + blockers
decisions.md          # append-only architecture decisions

0-Inbox/              # fleeting capture, unprocessed
1-Literature/         # notes on external sources (one file per source)
2-Permanent/          # atomic Zettel notes — the brain
3-MOCs/               # Maps of Content — structure notes / entry points

_context/             # long-running domain context
_sessions/            # YYYY-MM-DD session logs
_knowledge/           # reusable patterns, gotchas, recipes
_tasks/               # backlog.md + in-progress.md
_people/              # notes on people
_scratch/             # ephemeral drafts

_clawbot/             # cloud-bot output — read-only by hand
```

## Two layers, one vault

- **Session memory** (top-level files + `_*` folders) keeps Claude oriented across sessions.
- **Zettelkasten** (`0-Inbox/` → `2-Permanent/` → `3-MOCs/`) is durable knowledge with stable IDs and links.
- **Clawbot output** (`_clawbot/`) feeds fresh cloud info in; useful items get promoted into the Zettelkasten by hand.

## Working with the clawbot

The clawbot runs in the cloud (GitHub Actions). It pulls data from GitHub and writes digests into `_clawbot/`, then commits + pushes to the vault repo. Locally, `git pull` (or the Obsidian Git plugin) brings the updates down.
