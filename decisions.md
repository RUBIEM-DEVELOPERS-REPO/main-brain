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
