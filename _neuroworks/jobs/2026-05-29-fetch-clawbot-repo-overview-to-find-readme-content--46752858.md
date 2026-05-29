---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--46752858
created: 2026-05-29T13:48:40.610Z
jobId: 46752858-302f-4b75-acb9-7f0384a5d585
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T13:48:00.961Z
finishedAt: 2026-05-29T13:48:40.610Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-29T13:48:00.961Z
- **Finished:** 2026-05-29T13:48:40.610Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (2.1s)
    > Get the clawbot repo overview including README file information

## Answer
## README Contents – clawbot Repository

The README for the **clawbot** repository on GitHub outlines the dual‑purpose nature of the project and details its primary components and workflows.

### Overview

- **Two surfaces in one repo**  
  - **clawbot** – a cloud‑based cron worker (GitHub Actions) that ingests repository activity and feeds it into the `main‑brain` Obsidian vault.  
  - **NeuroWorks** – a local web console that lets users interact with clawbot, browse the vault, and generate LLM‑backed summaries via Ollama.  

### What clawbot does

Three main entry points are described:

1. **`pnpm digest`** – runs in GitHub Actions on a daily cron (or via `workflow_dispatch`). It scans all repos the user owns or collaborates on, summarizes recent commits, open PRs, and open issues, and writes several markdown files (`_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, `_clawbot/repos/<owner>-<name>.md`, `_clawbot/_meta/last-run.json`) which are then committed and pushed to `main‑brain`.  
2. **`pnpm publish-folder <path>`** – a local utility that takes a local folder, ensures it is a git repo, creates a matching private repo on GitHub, and pushes it. This is useful for publishing folders that the cloud bot cannot see.  
3. **`pnpm dev`** (alias `pnpm neuroworks`) – launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.  

### NeuroWorks – local console

- Runs locally only, bound to `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server).  
- Uses non‑standard ports to avoid collisions with other local dev servers.  
- No authentication is required because it is loopback‑bound.  

The README continues with additional details on configuration, usage, and development notes, but the above captures the core structure and functionality described in the file.  

[1] (github.read_repo — name="clawbot", owner="RUBIEM-DEVELOPERS-REPO")

<details><summary>Log</summary>

```
[2026-05-29T13:48:01.017Z] Replaying a saved plan — 1 step.
[2026-05-29T13:48:01.051Z] Step 1 of 1: github.read_repo
[2026-05-29T13:48:03.130Z] All sub-agents finished in 2.1s.
[2026-05-29T13:48:03.224Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
