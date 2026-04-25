# Vault instructions for Claude

This vault is my **second brain**. It runs two coexisting layers:

1. **Session-memory layer** — operational state for our work together (active context, decisions, sessions, tasks). Mutable, append-mostly.
2. **Zettelkasten layer** — atomic, durable knowledge notes with stable IDs and dense linking. The actual "thinking" lives here.

The clawbot also writes into `_clawbot/` from the cloud — treat those as raw input, not finished knowledge.

## Mandatory session protocol

### On session START
1. Read `CLAUDE.md` (this file).
2. Read `active-context.md` — current focus and state.
3. Read `progress.md` — blockers and recent milestones.
4. Read `decisions.md` — past architecture decisions. Never contradict without flagging it.
5. Skim `_clawbot/latest.md` if it exists — fresh cloud info.
6. Silently load this. Do not summarize back unless asked.

### During the session
- Temporary files / drafts → `_scratch/`.
- Decisions → append to `decisions.md` in this format:
  ```
  ## [YYYY-MM-DD] — Decision title
  **Decision:** what we chose
  **Rationale:** why
  **Alternatives rejected:** what else we considered
  ```
- Completed tasks → mark in `_tasks/in-progress.md`.
- Reusable patterns / gotchas → append to `_knowledge/<topic>.md` (create if missing).
- New atomic insight worth keeping forever → new Zettel in `2-Permanent/` (see Zettelkasten rules below).

### On session END (when I say "wrap up", "end session", or "save memory")
1. Update `active-context.md` — what's in progress, what's next.
2. Update `progress.md` — completed items, updated blockers.
3. Write a session log to `_sessions/YYYY-MM-DD-<topic>.md` containing:
   - What we worked on
   - Decisions made (link to `decisions.md` entries)
   - What's left to do
   - Gotchas / learnings
4. Promote anything in `0-Inbox/` that has matured into atomic insight to `2-Permanent/`.
5. Clean `_scratch/` — move useful files to the right folder or delete.
6. Commit: `git add -A && git commit -m "session: <topic>"`.
7. Tell me: "Memory saved. Next session will resume from [active-context]."

## Zettelkasten rules

- **Atomicity**: one idea per note. If you find yourself using "and" in the title, split it.
- **IDs**: filename starts with `YYYYMMDDHHmm` timestamp (e.g. `202604251430-claim-decoupled-from-evidence.md`). Never reuse or rename an ID.
- **Linking**: every permanent note links to at least one other. Orphan = work-in-progress.
- **Folders**:
  - `0-Inbox/` — fleeting / unprocessed thoughts. Capture cheaply, process later.
  - `1-Literature/` — notes about external sources (books, papers, talks). One file per source. Quote sparingly; rephrase in your own words.
  - `2-Permanent/` — atomic Zettel notes. The body of the brain.
  - `3-MOCs/` — Maps of Content. Structure notes that group permanent notes by theme; act as entry points.
- **Frontmatter** for permanent notes:
  ```
  ---
  id: 202604251430
  title: <claim or insight>
  tags: [<topic>, <topic>]
  created: 2026-04-25
  ---
  ```
- **Body shape**: state the claim in the first sentence, then evidence/reasoning, then `## Links` listing the notes it connects to with `[[id-slug]]` and a one-line reason for each link.

## Important rules

- Never modify `decisions.md` entries retroactively — only append.
- Always use ISO dates (`YYYY-MM-DD`) in filenames and logs.
- Never edit anything inside `_clawbot/` by hand — the cloud bot owns it. Promote insights from there into `0-Inbox/` or `2-Permanent/` instead.
- If a folder in this scaffold is missing, create it; don't ask.
