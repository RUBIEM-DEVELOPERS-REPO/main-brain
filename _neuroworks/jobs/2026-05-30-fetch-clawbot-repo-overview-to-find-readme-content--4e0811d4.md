---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--4e0811d4
created: 2026-05-30T09:35:07.475Z
jobId: 4e0811d4-f2da-43ba-8a2b-ea09f9495d5d
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:34:43.370Z
finishedAt: 2026-05-30T09:35:07.475Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-30T09:34:43.370Z
- **Finished:** 2026-05-30T09:35:07.475Z
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
1. ✓ github.read_repo — `github.read_repo` (2.1s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the `clawbot` Repository README

The README of the `clawbot` repository on GitHub provides a concise description of the project’s purpose, structure, and primary functionalities. It is organized into several sections that outline the dual nature of the repository and the key components that users interact with.

### 1. Project Introduction
- The repository hosts **two main surfaces**:
  - **clawbot**: A cloud‑based cron worker that runs in GitHub Actions, ingesting repository activity and feeding it into the `main-brain` Obsidian vault.
  - **NeuroWorks**: A local web console that allows users to interact with clawbot, browse the vault, and generate LLM‑backed summaries via Ollama.

### 2. What clawbot Does
The README explains three primary entry points:

1. **`pnpm digest`**  
   - Executes in GitHub Actions on a daily cron (or manually via `workflow_dispatch`).  
   - Scans all repositories the user owns or collaborates on, summarises recent commits, open PRs, and open issues, and writes several markdown files (`_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, `_clawbot/repos/<owner>-<name>.md`, `_clawbot/_meta/last-run.json`).  
   - Commits and pushes these files to the `main-brain` vault.

2. **`pnpm publish-folder <path>`**  
   - A local utility that takes a local folder, ensures it is a Git repository, creates a matching private repo on GitHub, and pushes the contents.  
   - Useful for publishing folders that the cloud bot cannot see, such as company documents or ad‑hoc projects.

3. **`pnpm dev`** (alias `pnpm neuroworks`)  
   - Launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.

### 3. NeuroWorks — Local Console
- Operates exclusively on the local machine, bound to `127.0.0.1:7470` for the web interface and `127.0.0.1:7471` for the server.  
- Uses non‑standard ports to avoid conflicts with other local development servers.  
- No authentication is required because it is bound to the loopback interface.

The README continues with additional details on the console’s features, but the excerpt provided above captures the core information about the repository’s purpose and main components.

<details><summary>Log</summary>

```
[2026-05-30T09:34:43.380Z] Replaying a saved plan — 1 step.
[2026-05-30T09:34:43.440Z] Step 1 of 1: github.read_repo
[2026-05-30T09:34:45.540Z] All sub-agents finished in 2.1s.
[2026-05-30T09:34:45.594Z] Thinking with openai/gpt-oss-20b:free (~3 123 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
