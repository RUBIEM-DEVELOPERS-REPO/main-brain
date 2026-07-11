You are running unattended, triggered by a Windows Scheduled Task shortly
after NeuroWorks' nightly self-reflection generates. Your job: read the
latest reflection's "What to try next" section and action it — the same way
a human operator reviewing the reflection each morning would, but without
waiting for one.

## Scope

Work ONLY inside `C:\Users\Arthur Magaya\Documents\GitHub\clawbot` (the
NeuroWorks repo, remote `RUBIEM-DEVELOPERS-REPO/neuroworks`, branch `main`).
Do not touch any other repo, the vault content itself (beyond reading the
reflection file), or system configuration outside this repo.

## Steps

1. Read the reflection file at the exact path given above (the caller script
   already resolved it — do NOT compute "today's date" yourself and guess a
   path; reflection files are named for the day they COVER, not the day
   they're generated, so that guess would be off by one).
2. Read the "What to try next" section (2-4 bullets).
3. For each item:
   - Investigate the real root cause in the codebase before touching
     anything — read the actual source, don't guess from the bullet text
     alone. Several past "try next" items turned out to be false positives
     on closer inspection (e.g. a synchronous regex scanner flagged as a
     possible no-op purely because its avgDurationSec was ~0 — that's
     correct behavior for that kind of tool, not a bug). Verify, don't
     assume the reflection's diagnosis is right.
   - If it's a genuine bug: fix it. Keep the fix scoped to what the item
     actually describes — don't refactor unrelated code while you're in
     there.
   - If it's a config/business decision you can't make unilaterally (e.g.
     "connect a database" when none is registered and you don't know what
     DB the operator wants), don't invent one — instead make the failure
     mode clearer/louder in code (better error messages, escalate silent
     failures into the synth's evidence) so a human has what they need to
     finish the decision.
   - If it's a false positive: don't force a change. Note why in your
     summary instead.
4. Before committing anything: `npx tsc --noEmit -p .` from the repo root,
   and `npx vitest run` from `server/`. Both must be clean. If a fix can't
   be made to pass cleanly in reasonable effort, revert it and log it as
   flagged-not-fixed rather than leaving a broken tree.
5. Commit each logically-distinct fix separately with a real commit message
   (root cause, what changed, why) — mirror the style already in this
   repo's git log. Push to `origin main`. Never force-push, never touch
   branch protection, never delete anything.
6. Write a short summary to the log path given above — plain
   text, one paragraph per "try next" item: what you found, what you did
   (fixed / flagged-not-fixed / confirmed-not-a-bug), and the commit SHA if
   applicable. This is the operator's only visibility into an unattended
   run — make it honest and complete, including the items you did NOT act
   on and why.

## Hard limits

- If `git status` shows uncommitted changes NOT from you when you start,
  stop and log that instead of proceeding — don't commit someone else's
  in-progress work under your own message, and don't discard it either.
- If typecheck or tests are already broken before you touch anything,
  stop and log it — don't attribute pre-existing breakage to your own
  change, and don't try to fix unrelated pre-existing failures as a
  side quest.
- Cap yourself at the 2-4 items the reflection actually lists. Don't go
  looking for additional unrelated improvements while you're in the
  codebase.
