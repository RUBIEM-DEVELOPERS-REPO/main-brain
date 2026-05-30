---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-7f14b309
created: 2026-05-30T09:35:15.640Z
jobId: 7f14b309-34a9-40da-8e89-5b1e07ff7ba7
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:34:43.370Z
finishedAt: 2026-05-30T09:35:15.639Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-05-30T09:34:43.370Z
- **Finished:** 2026-05-30T09:35:15.639Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: compare what my vault says about neuroworks to the clawbot README on github\nDescription: Saved from chat: \"compare what my vault says about neuroworks to the clawbot README on github\""
}
```

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (0.9s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault Content vs. clawbot README

### 1. Scope and Purpose  
| Aspect | Vault Evidence | README Description |
|--------|----------------|--------------------|
| **Primary Function** | Vault notes reference *NeuroWorks* as the user’s AI‑workforce platform, e.g., “research.deep resolved wrong “NeuroWorks” … returned Natus’ EEG software suite instead of the user’s NeuroWorks AI platform” [1]. | README states NeuroWorks is a *local web console* for interacting with clawbot, browsing the vault, and generating LLM‑backed repo summaries via Ollama [2]. |
| **Deployment Context** | Vault entries imply local, loopback‑bound usage (e.g., “local web console” mentioned in session reports) [1]. | README confirms local‑only operation on `127.0.0.1:7470/7471`, no auth, bound to loopback [2]. |
| **Integration with clawbot** | Vault notes mention clawbot in tags and session reports, indicating joint operation (e.g., “tags: [progress, neuroworks, clawbot]”) [1]. | README explains clawbot as a cloud cron worker that feeds repo activity into the main‑brain vault, while NeuroWorks consumes that data locally [2]. |

### 2. Entry Points & Commands  
| Command | Vault Reference | README Detail |
|---------|-----------------|---------------|
| `pnpm digest` | Not explicitly referenced in vault notes, but implied by daily‑log tags (e.g., “progress, neuroworks, clawbot”) [1]. | Daily cron that scans repos and writes digest files to `_clawbot/` [2]. |
| `pnpm publish-folder` | No direct vault mention. | Utility to publish local folders as private GitHub repos [2]. |
| `pnpm dev` / `pnpm neuroworks` | Vault session reports refer to launching the local console (e.g., “NeuroWorks session report”) [1]. | Starts the local console at `127.0.0.1:7470` [2]. |

### 3. File Structure & Output  
| Feature | Vault Evidence | README Detail |
|---------|----------------|---------------|
| **Digest Files** | Vault notes mention daily logs and digest files (e.g., `2026-05-27-progress-firecrawl-validator-reflection-lineage.md`) [1]. | README lists `_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, and per‑repo snapshots [2]. |
| **Vault Interaction** | Vault notes show direct references to local paths (e.g., `0-Inbox/202605262141-research-onboarding-new-mid-market-customer-neuroworks-best-practices.md`) [1]. | README indicates NeuroWorks browses the vault and generates summaries via Ollama [2]. |

### 4. Observed Discrepancies  
1. **Terminology** – Vault notes sometimes refer to *NeuroWorks* as the AI‑workforce platform, whereas README frames it strictly as a *local console*. The platform’s core functionality (task runner, multi‑persona chat) is implied in vault notes but not explicitly described in the README.  
2. **Command Coverage** – The README lists three primary commands; vault evidence only directly mentions the `pnpm dev`/`neuroworks` launch, with no explicit reference to `pnpm digest` or `pnpm publish-folder`.  
3. **Output Paths** – Vault notes reference `0-Inbox/` for daily logs, whereas README specifies `_clawbot/` for digest outputs. This suggests a separation between raw vault logs and clawbot‑generated digests, a nuance not highlighted in the README.

### 5. Summary  
The vault content confirms the local‑only, loopback‑bound nature of NeuroWorks described in the README and expands on its role as an AI‑workforce platform integrated with clawbot. The README provides a concise technical overview of commands and output locations, while the vault offers operational details, daily logs, and contextual usage that enrich the understanding of how NeuroWorks is employed in practice. The primary alignment is the local console serving as an interface to the vault and clawbot, with the vault’s operational notes filling in gaps about daily workflows and command usage.

<details><summary>Log</summary>

```
[2026-05-30T09:34:43.380Z] Replaying a saved plan — 2 steps.
[2026-05-30T09:34:44.295Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-05-30T09:34:44.295Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-30T09:34:44.347Z] Step 2 of 2: Fetching README.md from clawbot
[2026-05-30T09:34:45.288Z] Wave 1 finished in 1.0s.
[2026-05-30T09:34:45.288Z] All sub-agents finished in 1.0s.
[2026-05-30T09:34:45.298Z] Thinking with openai/gpt-oss-20b:free (~3 661 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
