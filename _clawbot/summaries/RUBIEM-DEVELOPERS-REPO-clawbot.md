---
repo: RUBIEM-DEVELOPERS-REPO/clawbot
generated: 2026-06-01
model: qwen2.5:3b
---

# RUBIEM-DEVELOPERS-REPO/clawbot

## Purpose
The repository houses two tools: `clawbot`, a cloud cron worker that aggregates and summarizes activity from the user's repositories into an Obsidian vault, and `NeuroWorks`, a local web console for interacting with `clawbot` and managing the vault.

## Stack
- **Programming Languages**: JavaScript (using Pnpm)
- **Frameworks/Tools**: GitHub Actions, Ollama for summarization, Obsidian for vault management.
- **Database**: Local file system for storing summaries and configurations.
- **APIs**: GitHub API for fetching repository data.

## State
The `clawbot` service is operational and integrates with multiple GitHub repositories. The `NeuroWorks` local console is set up to interact with the cloud worker, allowing users to browse repositories and generate summaries. Configuration files are in place, including environment variables and workflow configurations.

## Recent direction
Recent commits have focused on improving the reliability of data synchronization between the cloud worker and local vault, enhancing the user interface for managing repositories and tasks, and optimizing the summarization process using different language models like qwen3.5 and llama3.1.

## Notable open work
- Continue refining the Ollama model selection logic to ensure optimal summary quality.
- Implement more robust error handling in `clawbot` to manage unexpected GitHub API responses.
- Expand NeuroWorks features, such as adding support for real-time updates of repository activity without manual triggers.
