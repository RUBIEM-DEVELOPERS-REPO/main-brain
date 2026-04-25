# Active context

_Last updated: 2026-04-25_

## Current focus
Bootstrapping this vault as a second brain and standing up the clawbot (cloud automation that feeds GitHub activity into `_clawbot/`).

## In progress
- Vault scaffold (this commit).
- Cloning openclaw locally as the foundation for clawbot.

## Next
- Decide on hosting for clawbot (GitHub Actions cron is the working assumption).
- Push this vault to a private GitHub repo so the clawbot can write into it.
- First clawbot job: daily digest of GitHub repos, commits, open PRs, open issues.

## Open questions
- Do we extend openclaw directly or build a slim `clawbot` repo that borrows its agent ideas?
- Which GitHub account should the clawbot operate on? (PAT scope to confirm.)
