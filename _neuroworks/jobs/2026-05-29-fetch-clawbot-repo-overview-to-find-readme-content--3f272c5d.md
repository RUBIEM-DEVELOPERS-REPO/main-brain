---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--3f272c5d
created: 2026-05-29T20:05:00.131Z
jobId: 3f272c5d-c3fc-47b5-b494-44e16aa93ee2
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:04:30.562Z
finishedAt: 2026-05-29T20:05:00.130Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-29T20:04:30.562Z
- **Finished:** 2026-05-29T20:05:00.130Z
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
1. ✓ github.read_repo — `github.read_repo` (0.8s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the `clawbot` Repository README

The README for the `clawbot` repository on GitHub provides a concise description of the two main components housed in the same repository, along with a detailed explanation of the functionalities and entry points for each component.

### Repository Structure

- **clawbot** – A cloud‑cron worker that runs in GitHub Actions. It scans the repositories owned or collaborated on by the user, summarizes recent activity (commits, pull requests, issues), and writes the results to the `main‑brain` Obsidian vault.  
- **NeuroWorks** – A local web console that runs on the user’s machine (bound to `127.0.0.1:7470` for the web interface and `127.0.0.1:7471` for the server). It allows interaction with `clawbot`, browsing the vault, and generating LLM‑backed summaries via Ollama.

### Key Functionalities

#### 1. `pnpm digest`
Runs in GitHub Actions on a daily cron or via `workflow_dispatch`. It produces:
- `_clawbot/YYYY-MM-DD.md` – daily digest
- `_clawbot/latest.md` – copy of today’s digest
- `_clawbot/repos/<owner>-<name>.md` – per‑repo snapshot
- `_clawbot/_meta/last-run.json` – run metadata  
The output is committed and pushed to the `main‑brain` vault.

#### 2. `pnpm publish-folder <path>`
A local utility that takes a local folder, ensures it is a Git repository, creates a matching private repository on GitHub, and pushes the contents. Useful for publishing folders that the cloud bot cannot see.

#### 3. `pnpm dev` (alias `pnpm neuroworks`)
Launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.

### NeuroWorks Local Console

- **Binding**: `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server).  
- **Auth**: None – access is restricted to the loopback interface.  
- **Purpose**: Provides a browser‑based interface for interacting with `clawbot`, browsing the vault, and generating LLM‑backed summaries.

The README ends with a brief note about the chosen port range to avoid collisions with other local development servers.

*Source: GitHub repository `RUBIEM-DEVELOPERS-REPO/clawbot` README content.*

<details><summary>Log</summary>

```
[2026-05-29T20:04:30.608Z] Replaying a saved plan — 1 step.
[2026-05-29T20:04:30.647Z] Step 1 of 1: github.read_repo
[2026-05-29T20:04:31.402Z] All sub-agents finished in 0.8s.
[2026-05-29T20:04:31.527Z] Thinking with openai/gpt-oss-20b:free (~3 123 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
