---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--d8a96ced
created: 2026-05-29T15:38:42.047Z
jobId: d8a96ced-cdce-488e-b730-986d4b5502e7
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:38:22.778Z
finishedAt: 2026-05-29T15:38:42.047Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-29T15:38:22.778Z
- **Finished:** 2026-05-29T15:38:42.047Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (0.9s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the `clawbot` Repository README

The README for the `clawbot` repository on GitHub provides a concise description of the project’s dual‑surface architecture and outlines the primary functionalities of both the cloud‑based cron worker and the local web console. Key points include:

- **Dual Surfaces**  
  - **clawbot** – a cloud cron worker (GitHub Actions) that ingests repository activity and feeds it into the `main-brain` Obsidian vault.  
  - **NeuroWorks** – a local web console that allows interaction with clawbot, browsing the vault, and generating LLM‑backed repo summaries via Ollama.  

- **Primary Entry Points**  
  1. `pnpm digest` – runs in GitHub Actions on a daily cron or via `workflow_dispatch`. It scans all repositories the user owns or collaborates on, summarizes recent commits, open PRs, and open issues, and writes several markdown files (`_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, `_clawbot/repos/<owner>-<name>.md`, and `_clawbot/_meta/last-run.json`). The output is committed and pushed to `main-brain`.  
  2. `pnpm publish-folder <path>` – a local utility that takes a local folder, ensures it is a Git repo, creates a matching private repo on GitHub, and pushes the content. This is useful for publishing folders that the cloud bot cannot see.  
  3. `pnpm dev` (alias `pnpm neuroworks`) – launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.  

- **NeuroWorks Local Console**  
  - Runs exclusively on the local machine, bound to `127.0.0.1:7470` for the web interface and `127.0.0.1:7471` for the server.  
  - Uses ports outside common development ranges to avoid collisions.  
  - No authentication is required, as it is bound to loopback.  

The README also references recent commits that enhance routing, model selection, UI improvements, and concurrency handling within the NeuroWorks component. These updates demonstrate ongoing development focused on improving agent coordination and user experience.  

[1] github.read_repo — name="clawbot", owner="RUBIEM-DEVELOPERS-REPO"

<details><summary>Log</summary>

```
[2026-05-29T15:38:22.821Z] Replaying a saved plan — 1 step.
[2026-05-29T15:38:23.494Z] Step 1 of 1: github.read_repo
[2026-05-29T15:38:24.393Z] All sub-agents finished in 0.9s.
[2026-05-29T15:38:24.446Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
