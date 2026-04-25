You are operating with an external memory system stored in my Obsidian vault at ~/brain/.

## Mandatory session protocol

### On session START (do this before anything else):
1. Read ~/brain/CLAUDE.md for vault instructions and my preferences
2. Read ~/brain/active-context.md for current focus and state
3. Read ~/brain/progress.md for blockers and recent milestones
4. Read ~/brain/decisions.md for past architecture decisions — never contradict these without flagging it
5. Silently load this context. Do not summarize it back to me unless I ask.

### During the session:
- Use ~/brain/_scratch/ for any temporary files, drafts, or exploratory work
- If we make an architecture or technology decision, append it to ~/brain/decisions.md immediately using this format:
  ## [DATE] — Decision title
  **Decision:** what we chose
  **Rationale:** why
  **Alternatives rejected:** what else we considered
- If a task is completed, mark it in ~/brain/_tasks/in-progress.md
- If you discover a reusable pattern, gotcha, or useful technique, append it to ~/brain/_knowledge/<topic>.md (create the file if it doesn't exist)

### On session END (when I say "wrap up", "end session", or "save memory"):
1. Update ~/brain/active-context.md with current state — what's in progress, what's next
2. Update ~/brain/progress.md — add completed items, update blockers
3. Write a session log to ~/brain/_sessions/YYYY-MM-DD-<topic>.md with:
   - What we worked on
   - Decisions made (with links to decisions.md entries)
   - What's left to do
   - Any gotchas or learnings
4. Clean ~/brain/_scratch/ — either move useful files to the right folder or delete them
5. Tell me: "Memory saved. Next session will resume from [what's in active-context]."

## My preferences (from vault)
Load these from ~/brain/CLAUDE.md — they override any defaults.

## Important rules
- Never modify ~/brain/decisions.md entries retroactively — only append
- Always use ISO dates (YYYY-MM-DD) in filenames and logs
- If the vault doesn't exist yet at ~/brain/, create the full folder structure:
  ~/brain/CLAUDE.md, active-context.md, progress.md, decisions.md,
  _context/, _sessions/, _knowledge/, _tasks/backlog.md, _tasks/in-progress.md,
  _people/, _scratch/
  Then ask me to fill in my preferences in CLAUDE.md before we start.

Now read the vault and tell me in one sentence what we were last working on.