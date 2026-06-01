---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--af19bbfb
created: 2026-06-01T13:20:28.645Z
jobId: af19bbfb-659c-4fc9-9e90-3e3218fbd820
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:19:55.335Z
finishedAt: 2026-06-01T13:20:28.644Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-06-01T13:19:55.335Z
- **Finished:** 2026-06-01T13:20:28.644Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (4.7s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the `clawbot` Repository README

The README for the `clawbot` repository on GitHub presents a dual‑purpose project that combines a cloud‑based cron worker with a local web console for interacting with the NeuroWorks platform. The key sections are summarized below:

### 1. Project Scope
- **clawbot** – A cloud cron worker (GitHub Actions) that ingests repository activity and feeds it into the `main‑brain` Obsidian vault.  
- **NeuroWorks** – A local web console that runs on `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server). It allows users to interact with clawbot, browse the vault, and generate LLM‑backed summaries via Ollama.  
  *Source: README excerpt* [1]

### 2. Primary Functionality
- **`pnpm digest`**  
  Executes in GitHub Actions on a daily cron or via `workflow_dispatch`. It scans all repositories the user owns or collaborates on, summarises recent commits, open PRs, and open issues, and writes several markdown files (`_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, `_clawbot/repos/<owner>-<name>.md`, `_clawbot/_meta/last-run.json`). These files are then committed and pushed to the `main‑brain` vault.  
  *Source: README excerpt* [1]

- **`pnpm publish-folder <path>`**  
  A local utility that takes a local folder, ensures it is a Git repo, creates a matching private repo on GitHub, and pushes it. Useful for publishing folders that the cloud bot cannot see.  
  *Source: README excerpt* [1]

- **`pnpm dev`** (alias `pnpm neuroworks`)  
  Launches the NeuroWorks local console (server + web) at `http://127.0.0.1:7470`.  
  *Source: README excerpt* [1]

### 3. NeuroWorks Local Console Details
- Runs exclusively on localhost, avoiding common development ports (3000, 5173, 8080).  
- No authentication is required; it is bound to loopback for security.  
  *Source: README excerpt* [1]

### 4. Recent Commit Highlights (May 2026)
- Added per‑step model provenance and per‑task model selection routes.  
- Introduced persona‑tuned dashboard, agent visualizer, and light mode.  
- Implemented peer configuration, introspection foundation, concurrency caps, transient‑error retry, and parallel sub‑agents.  
- Added live plan rendering, Personas page, and support for the Qwen3:4b model.  
  *Source: Commit list* [1]

---

**Conclusion**  
The README concisely outlines the dual nature of the project, the main command‑line utilities, and the local console’s purpose and configuration. It also provides a snapshot of recent development activity, indicating active enhancement of the NeuroWorks UI and agent orchestration features.

<details><summary>Log</summary>

```
[2026-06-01T13:19:55.428Z] Replaying a saved plan — 1 step.
[2026-06-01T13:19:57.446Z] Step 1 of 1: github.read_repo
[2026-06-01T13:20:02.138Z] All sub-agents finished in 4.7s.
[2026-06-01T13:20:02.224Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
