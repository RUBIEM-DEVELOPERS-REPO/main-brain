---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--d8699d30
created: 2026-05-30T17:10:27.458Z
jobId: d8699d30-dff9-4525-a6ae-eb9348b040dd
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:10:11.484Z
finishedAt: 2026-05-30T17:10:27.458Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-30T17:10:11.484Z
- **Finished:** 2026-05-30T17:10:27.458Z
- **Title:** Fetch clawbot repo overview to find README content.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Fetch clawbot repo overview to find README content.\nDescription: Saved from chat: \"what is in the README of the clawbot repo on github\""
}
```

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (1.0s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the `clawbot` Repository README

The README for the `clawbot` repository on GitHub provides a concise description of the project’s dual‑purpose architecture and key functionalities. The main points are:

1. **Dual surfaces**  
   - **clawbot** – a cloud‑based cron worker that runs in GitHub Actions and feeds repository activity into the `main‑brain` Obsidian vault.  
   - **NeuroWorks** – a local web console that allows interaction with clawbot, browsing of the vault, and generation of LLM‑backed summaries via Ollama.

2. **Primary entry points**  
   - `pnpm digest` – executed in GitHub Actions on a daily schedule (or manually via `workflow_dispatch`). It scans all repos the user owns or collaborates on, summarizes recent commits, open PRs, and open issues, and writes several markdown files (`_clawbot/YYYY‑MM‑DD.md`, `_clawbot/latest.md`, per‑repo snapshots, and metadata) which are then committed and pushed to `main‑brain`.  
   - `pnpm publish-folder <path>` – a local utility that takes a local folder, ensures it is a git repo, creates a matching private repo on GitHub, and pushes it, enabling the cloud bot to ingest content not otherwise visible.  
   - `pnpm dev` (alias `pnpm neuroworks`) – launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.

3. **NeuroWorks local console details**  
   - Runs locally on `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server).  
   - Uses non‑standard ports to avoid conflicts with other local development servers.  
   - No authentication is required, as it is bound to the loopback interface.

The README ends with a brief note that the console is a local‑only browser app and includes a placeholder for additional documentation. The content is truncated in the provided excerpt, but the structure and key functionalities are fully captured above.

<details><summary>Log</summary>

```
[2026-05-30T17:10:11.502Z] Replaying a saved plan — 1 step.
[2026-05-30T17:10:11.713Z] Step 1 of 1: github.read_repo
[2026-05-30T17:10:12.757Z] All sub-agents finished in 1.0s.
[2026-05-30T17:10:12.765Z] Thinking with openai/gpt-oss-20b:free (~3 123 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
