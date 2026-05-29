---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--04f8068c
created: 2026-05-29T09:11:45.594Z
jobId: 04f8068c-2025-47a6-9826-68a15a260bd5
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:11:26.785Z
finishedAt: 2026-05-29T09:11:45.594Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-29T09:11:26.785Z
- **Finished:** 2026-05-29T09:11:45.594Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (1.9s)
    > Get the clawbot repo overview including README file information

## Answer
## Overview of the `clawbot` Repository README

The README for the `clawbot` repository on GitHub provides a concise description of the repository’s dual-purpose architecture and key functionalities. It is structured into the following sections:

1. **Repository Purpose**  
   - Identifies the repository as containing two main components:  
     - **clawbot**: a cloud‑cron worker that ingests repository activity into the `main-brain` Obsidian vault.  
     - **NeuroWorks**: a local web console for interacting with clawbot, browsing the vault, and generating LLM‑backed summaries via Ollama.  

2. **What clawbot Does**  
   - Describes three primary entry points:  
     1. `pnpm digest` – runs in GitHub Actions to scan owned or collaborated repositories, summarize recent commits, PRs, and issues, and write daily digest files to the vault.  
     2. `pnpm publish-folder <path>` – a local utility that publishes a local folder as a private GitHub repo.  
     3. `pnpm dev` (alias `pnpm neuroworks`) – launches the NeuroWorks local console at `http://127.0.0.1:7470`.  

3. **NeuroWorks – Local Console**  
   - Notes that the console is a local‑only browser app bound to `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server).  
   - Highlights that it avoids common development port ranges to prevent collisions and operates without authentication, relying on loopback binding.  

The README ends with a truncated section beginning “Pa”, indicating further details that are not fully captured in the provided excerpt.  

[1] (github.read_repo — name="clawbot", owner="RUBIEM-DEVELOPERS-REPO")

<details><summary>Log</summary>

```
[2026-05-29T09:11:26.794Z] Replaying a saved plan — 1 step.
[2026-05-29T09:11:27.115Z] Step 1 of 1: github.read_repo
[2026-05-29T09:11:28.973Z] All sub-agents finished in 1.9s.
[2026-05-29T09:11:28.978Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
