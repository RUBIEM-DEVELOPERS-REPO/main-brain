---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--c7dd4740
created: 2026-05-29T18:38:14.250Z
jobId: c7dd4740-4235-4c89-9300-7faf343c80fe
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T18:37:38.549Z
finishedAt: 2026-05-29T18:38:14.249Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-29T18:37:38.549Z
- **Finished:** 2026-05-29T18:38:14.249Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (1.0s)
    > Get the clawbot repo overview including README file information

## Answer
## Summary of the `clawbot` Repository README

The README for the `clawbot` repository on GitHub provides an overview of the project’s dual‑surface architecture and its primary functionalities. Key points include:

- **Dual surfaces**:  
  - **clawbot** – a cloud‑based cron worker (GitHub Actions) that ingests repository activity and feeds it into the `main-brain` Obsidian vault.  
  - **NeuroWorks** – a local web console for interacting with clawbot, browsing the vault, and generating LLM‑backed repository summaries via Ollama.

- **Primary entry points**:  
  1. `pnpm digest` – runs in GitHub Actions on a daily cron or via `workflow_dispatch`. It scans all repositories the user owns or collaborates on, summarizes recent commits, open PRs, and open issues, and writes several markdown files (`_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, per‑repo snapshots, and run metadata) which are then committed and pushed to `main-brain`.  
  2. `pnpm publish-folder <path>` – a local utility that takes a local folder, ensures it is a git repo, creates a matching private GitHub repo, and pushes the content. This is useful for publishing folders that the cloud bot cannot access.  
  3. `pnpm dev` (alias `pnpm neuroworks`) – launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.

- **NeuroWorks local console**:  
  - Runs locally only, bound to `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server).  
  - Uses non‑standard ports to avoid conflicts with other local development servers.  
  - No authentication is required as it is bound to loopback.

The README also notes recent commits that enhance routing, model selection, UI improvements, and concurrency handling within NeuroWorks, reflecting ongoing development and feature expansion.

<details><summary>Log</summary>

```
[2026-05-29T18:37:38.598Z] Replaying a saved plan — 1 step.
[2026-05-29T18:37:40.606Z] Step 1 of 1: github.read_repo
[2026-05-29T18:37:41.625Z] All sub-agents finished in 1.0s.
[2026-05-29T18:37:41.632Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
