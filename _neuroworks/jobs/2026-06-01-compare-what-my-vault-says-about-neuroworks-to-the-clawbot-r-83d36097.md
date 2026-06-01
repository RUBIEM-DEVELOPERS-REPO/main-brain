---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-83d36097
created: 2026-06-01T08:37:47.079Z
jobId: 83d36097-a3c9-412e-9fbc-98899bb0435f
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T08:37:22.735Z
finishedAt: 2026-06-01T08:37:47.078Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-06-01T08:37:22.735Z
- **Finished:** 2026-06-01T08:37:47.078Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (1.7s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault‑Based Information on NeuroWorks vs the clawbot GitHub README

### What the Vault Indicates

- The vault contains a series of **progress, research, and quality‑test notes** that reference “NeuroWorks” in their tags or titles (e.g., *2026‑05‑27‑progress‑firecrawl‑validator‑reflection‑lineage.md*, *2026‑05‑28‑neuroworks‑session‑report.md*).  
- These notes are **operational logs**: they record daily activity, session reports, and research tasks related to NeuroWorks.  
- No single **atomic note** or dedicated overview of the NeuroWorks platform is present in the vault; the references are scattered across routine logs and task‑specific files.  
- The vault notes do not describe the architecture, entry points, or functional details of NeuroWorks; they merely indicate that the user is actively using it for tasks such as summarization, onboarding, and local LLM‑backed repo summaries.

### What the GitHub README States

- The README clearly defines **two distinct surfaces** in the same repository:  
  1. **clawbot** – a cloud‑based cron worker that ingests GitHub activity and writes daily digests into the `main‑brain` Obsidian vault.  
  2. **NeuroWorks** – a **local web console** that runs on the user’s machine (127.0.0.1:7470/7471) for interacting with clawbot, browsing the vault, and generating LLM‑backed summaries via Ollama.  
- It lists **three primary entry points**:  
  - `pnpm digest` (GitHub Actions) for daily scans and digest generation.  
  - `pnpm publish-folder <path>` for publishing local folders to GitHub.  
  - `pnpm dev` (alias `pnpm neuroworks`) to launch the local console.  
- The README specifies **binding ports** (7470 for web, 7471 for server), the lack of authentication, and the purpose of the console as a local, loopback‑only interface.

### Key Differences

| Aspect | Vault | README |
|--------|-------|--------|
| **Scope** | Operational logs and task notes. | Architectural overview and command‑line interface. |
| **Detail** | No description of functionality or architecture. | Detailed description of entry points, ports, and purpose. |
| **Audience** | Internal team members tracking progress. | Developers and users of the clawbot/NeuroWorks repo. |
| **Content Type** | Daily progress, research, and quality‑test notes. | Documentation of software components and usage. |

### Conclusion

The vault currently holds **process‑level references** to NeuroWorks but lacks a consolidated, descriptive note about the platform itself. The GitHub README provides the **official, technical description** of NeuroWorks, its purpose, and how to interact with it. To align the vault with the README, a new atomic note summarizing NeuroWorks’ architecture, entry points, and usage would be beneficial.

<details><summary>Log</summary>

```
[2026-06-01T08:37:22.751Z] Replaying a saved plan — 2 steps.
[2026-06-01T08:37:22.880Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-06-01T08:37:22.881Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-06-01T08:37:22.975Z] Step 2 of 2: Fetching README.md from clawbot
[2026-06-01T08:37:24.659Z] Wave 1 finished in 1.8s.
[2026-06-01T08:37:24.659Z] All sub-agents finished in 1.8s.
[2026-06-01T08:37:24.675Z] Thinking with openai/gpt-oss-20b:free (~3 607 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
