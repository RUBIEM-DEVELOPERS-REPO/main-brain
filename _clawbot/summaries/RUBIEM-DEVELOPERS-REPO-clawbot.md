---
repo: RUBIEM-DEVELOPERS-REPO/clawbot
generated: 2026-05-27
model: qwen2.5:3b
---

# RUBIEM-DEVELOPERS-REPO/clawbot

## Purpose
A cloud cron worker that feeds Obsidian vault activity into the main brain, along with a local web console for managing and interacting with the system.

## Stack
- Node.js
- Pnpm
- GitHub Actions
- Ollama (LLM)
- Obsidian Vault

## State
The repository is in active development. It includes both the cloud worker (`clawbot`) that runs as a GitHub Action, and the local web console (`NeuroWorks`), which can be used to manage the system.

## Recent direction
Recent commits have focused on improving the robustness of the system, including better error handling, improved task delegation pipelines, and redesigns for both the cloud worker and the local console. Additionally, there has been work done to ensure that per-repo snapshots are written for every scanned repository, not just active ones.

## Notable open work
- Implementing a feature where the local console can be used to kick off daily digest runs via GitHub Actions.
- Improving the configuration setup process and ensuring compatibility with different environments.
- Enhancing the user interface of the NeuroWorks console to make it more intuitive and user-friendly.
