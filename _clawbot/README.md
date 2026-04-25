# _clawbot/

Cloud bot landing zone. The clawbot writes here from GitHub Actions; commits land via push.

**Don't edit by hand.** This folder is read-only from your side. If something here is worth keeping, copy the insight into `0-Inbox/` (and from there into `2-Permanent/`).

## Expected files

- `latest.md` — symlink-ish: a copy of the most recent digest, for quick reading.
- `YYYY-MM-DD.md` — daily digest: repos touched, commits, open PRs, open issues, notable activity.
- `repos/<owner>-<name>.md` — per-repo state snapshot, refreshed on each run.
- `_meta/last-run.json` — bot run metadata (timestamp, status, errors).
