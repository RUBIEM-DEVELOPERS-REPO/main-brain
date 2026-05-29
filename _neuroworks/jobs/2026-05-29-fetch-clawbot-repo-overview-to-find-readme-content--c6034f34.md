---
type: job
title: Fetch clawbot repo overview to find README content.
slug: fetch-clawbot-repo-overview-to-find-readme-content--c6034f34
created: 2026-05-29T08:52:45.507Z
jobId: c6034f34-7293-4a66-8c9c-c85c17038688
status: succeeded
template: custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:52:30.100Z
finishedAt: 2026-05-29T08:52:45.507Z
---

# Fetch clawbot repo overview to find README content.

- **Status:** succeeded
- **Template:** custom-what-is-in-the-readme-of-the-clawbot-repo-on-github
- **Started:** 2026-05-29T08:52:30.100Z
- **Finished:** 2026-05-29T08:52:45.507Z
- **Title:** Fetch clawbot repo overview to find README content.

## Plan
Fetch clawbot repo overview to find README content.

### Steps
1. ✓ github.read_repo — `github.read_repo` (1.6s)
    > Get the clawbot repo overview including README file information

## Answer
## Contents of the *clawbot* Repository README

The README for the `clawbot` repository on GitHub provides an overview of the two primary components housed in the same repository: the cloud‑based cron worker (`clawbot`) and the local web console (`NeuroWorks`). It explains the purpose, entry points, and operational details of each component, along with a brief description of the local console’s network bindings and security posture. The file begins with a concise title and a two‑line summary, then expands into sections that detail:

1. **High‑level description** – Two surfaces in one repo: the cloud cron worker and the local web console.  
2. **What clawbot does** – Three entry points:  
   * `pnpm digest` – runs in GitHub Actions, scans user repos, summarizes activity, and writes digest files to the `main‑brain` vault.  
   * `pnpm publish-folder <path>` – local utility to publish a folder as a private GitHub repo.  
   * `pnpm dev` (alias `pnpm neuroworks`) – launches the local NeuroWorks console at `http://127.0.0.1:7470`.  
3. **NeuroWorks – local console** – Details the local‑only browser app, its port bindings (`127.0.0.1:7470` for web, `127.0.0.1:7471` for server), and the rationale for choosing non‑standard ports to avoid conflicts with other local development servers. No authentication is required because the service is bound to loopback.  
4. **Additional notes** – The README ends with a truncated “Pa” line, indicating that further content follows but is not included in the excerpt.  

This README serves as the primary documentation for developers and operators to understand how to run, deploy, and interact with the `clawbot` and `NeuroWorks` components.  

[1] github.read_repo — name="clawbot", owner="RUBIEM-DEVELOPERS-REPO"

<details><summary>Log</summary>

```
[2026-05-29T08:52:30.109Z] Replaying a saved plan — 1 step.
[2026-05-29T08:52:30.290Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:52:30.290Z] Step 1 of 1: github.read_repo
[2026-05-29T08:52:31.871Z] All sub-agents finished in 1.6s.
[2026-05-29T08:52:31.877Z] Thinking with openai/gpt-oss-20b:free (~3 082 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
