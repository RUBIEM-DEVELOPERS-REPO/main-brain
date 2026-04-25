# Decisions

Append-only log of architecture / process decisions. Never edit past entries.

## [2026-04-25] — Vault hosts both Zettelkasten and session memory

**Decision:** This vault runs two coexisting layers in one tree: a session-memory layer (top-level + `_*` folders) and a Zettelkasten layer (`0-Inbox/` → `2-Permanent/` → `3-MOCs/`). The clawbot writes into `_clawbot/`.

**Rationale:** A single vault avoids context-switching, keeps links across both layers cheap, and lets one git repo back up everything. The two layers don't conflict — session memory is operational state, Zettelkasten is durable knowledge.

**Alternatives rejected:** (a) Separate vaults per layer — would split links and double tooling. (b) Pure Zettelkasten — loses operational continuity Claude needs across sessions. (c) Pure session memory — no durable knowledge accretion.

## [2026-04-25] — Clawbot runs in the cloud, vault is the bridge

**Decision:** The clawbot is deployed as scheduled GitHub Actions in a separate repo. It pulls data from GitHub APIs, writes markdown digests into `_clawbot/` of the vault repo, and pushes. Locally, `git pull` (Obsidian Git plugin or manual) brings updates down.

**Rationale:** Satisfies "bot works online, I work locally". Free, no VPS, native GitHub auth, easy cron, audit trail in commit history. Vault git repo is already needed for backup, so it doubles as the message bus.

**Alternatives rejected:** (a) Run bot locally on schedule — defeats the cloud requirement. (b) VPS / Render — cost + ops overhead unjustified at this scale. (c) Direct API push from bot to local machine — requires inbound networking, fragile.

## [2026-04-25] — Clawbot is a slim cron worker, NOT an openclaw plugin (yet)

**Decision:** The cloud-side `clawbot` is built as a small standalone TypeScript repo that runs in GitHub Actions, not as an openclaw plugin. Openclaw stays in scope as the *local* AI runtime — its memory plugin will later point at this vault, and chat channels (Telegram/Slack) will give interactive access to the brain. Two separate artifacts, joined by the vault git repo.

**Rationale:** Openclaw is explicitly local-first ("runs on your devices, in your channels" — VISION.md L4). Forcing it into GH Actions would fight its architecture: it expects a long-running gateway, channel sockets, and `~/.openclaw/` credentials state — none of which fit a cron job. A 200-line Node script using `@octokit/rest` does the digest job cleanly. We can package it later as an openclaw plugin if we want chat-time interaction with digest data.

**Alternatives rejected:** (a) Deploy openclaw to a VPS and trigger on cron — heavy, costs ongoing money, duplicates capabilities we don't need cloud-side. (b) Build the digest worker inside `extensions/` of openclaw and run it locally on schedule — breaks the "cloud" requirement and re-couples to local availability. (c) Pure GitHub Actions YAML with no Node code — too constrained for the formatting/promotion logic we'll grow into.

**How the pieces connect:**
- `clawbot` repo (cloud) → writes to `_clawbot/` in `main-brain` repo → vault → pulled locally.
- `openclaw` (local) → reads vault as memory → user chats from any channel → openclaw can also call clawbot's repos directly via GH MCP if needed.
