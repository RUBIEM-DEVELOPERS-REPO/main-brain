---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--2a64343d
created: 2026-06-01T08:37:47.389Z
jobId: 2a64343d-ce6f-4726-a513-ae574db58d7d
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T08:37:22.782Z
finishedAt: 2026-06-01T08:37:47.388Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-06-01T08:37:22.782Z
- **Finished:** 2026-06-01T08:37:47.388Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (0.9s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the clawbot Repository README

The README for the **clawbot** repository on GitHub outlines the dual‑purpose nature of the project and details the primary functionalities of both the cloud‑based cron worker and the local NeuroWorks console. Key points include:

- **Project Structure**  
  - *clawbot*: A GitHub Actions‑driven cron worker that ingests repository activity and updates the `main‑brain` Obsidian vault.  
  - *NeuroWorks*: A local web console for interacting with clawbot, browsing the vault, and generating LLM‑backed summaries via Ollama.

- **Core Features of clawbot**  
  1. **`pnpm digest`** – Executes daily (or on demand) to scan all user‑owned or collaborated repositories, summarizing recent commits, open PRs, and issues. Outputs include daily digests, per‑repo snapshots, and run metadata, which are committed back to `main‑brain`.  
  2. **`pnpm publish‑folder <path>`** – A local utility that turns a local folder into a private GitHub repo and pushes it, enabling the cloud bot to ingest content not otherwise visible.  
  3. **`pnpm dev`** (alias `pnpm neuroworks`) – Launches the NeuroWorks local console at `http://127.0.0.1:7470`, providing a browser‑based interface without authentication, bound to loopback to avoid port conflicts.

- **NeuroWorks Local Console**  
  - Operates on `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server).  
  - Designed for local use only, with no authentication, and deliberately uses non‑standard ports to prevent clashes with other development servers.

These details are extracted directly from the repository’s README content. [1]

<details><summary>Log</summary>

```
[2026-06-01T08:37:22.839Z] Replaying a saved plan — 1 step.
[2026-06-01T08:37:22.896Z] Step 1 of 1: github.read_repo
[2026-06-01T08:37:23.802Z] All sub-agents finished in 0.9s.
[2026-06-01T08:37:24.008Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T08:37:25.296Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-06-01T08:37:47.388Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
