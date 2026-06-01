---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-a577629d
created: 2026-06-01T13:20:33.848Z
jobId: a577629d-cdae-48d4-a778-9f25ff379228
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:19:55.312Z
finishedAt: 2026-06-01T13:20:33.847Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-06-01T13:19:55.312Z
- **Finished:** 2026-06-01T13:20:33.847Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (2.9s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault‑Based Information on NeuroWorks with the clawbot GitHub README

### 1. Scope and Purpose
| Aspect | Vault Notes | README |
|--------|-------------|--------|
| **Primary Function** | Vault entries focus on *research, onboarding, and internal task management* for NeuroWorks users (e.g., “research-onboarding-new-mid‑market‑customer‑neuroworks‑best‑practices”, “neuroworks‑session‑report”). | README describes NeuroWorks as a *local web console* that interfaces with clawbot, providing a browser UI for vault browsing and LLM‑powered repo summaries. |
| **Audience** | Internal team members and researchers working on NeuroWorks features. | External developers and contributors to the clawbot repository. |

### 2. Technical Details
| Detail | Vault Evidence | README Evidence |
|--------|----------------|-----------------|
| **Local Server Ports** | No explicit mention in vault notes. | README specifies ports 127.0.0.1:7470 (web) and 127.0.0.1:7471 (server) [2]. |
| **Authentication** | Not discussed. | README notes “No auth — bound to loopback” [2]. |
| **Integration with clawbot** | Vault notes reference “research.deep resolved wrong “NeuroWorks”” indicating a need to distinguish the platform from the EEG software, but no explicit integration details. | README explains clawbot feeds repo activity into the `main‑brain` vault and that NeuroWorks consumes this data for summaries [2]. |
| **Command‑Line Entrypoints** | Vault notes do not list commands. | README lists three entrypoints: `pnpm digest`, `pnpm publish-folder`, and `pnpm dev`/`pnpm neuroworks` [2]. |

### 3. Content Focus
| Focus | Vault | README |
|-------|-------|--------|
| **Research & Best Practices** | Multiple research notes (e.g., onboarding best practices, financial planning) highlight internal use cases and knowledge capture. | No research‑specific content; focuses on tooling and architecture. |
| **Progress Tracking** | Progress logs (e.g., “progress‑firecrawl‑validator‑reflection‑lineage”) show iterative development and issue tracking. | No progress logs; README is a static description of the repo’s purpose. |
| **Error Handling** | Note about resolving a wrong “NeuroWorks” reference shows awareness of potential confusion with the EEG product. | No mention of such confusion; README assumes the correct product context. |

### 4. Observations
- The vault contains **operational and research‑centric** documentation, whereas the README is **developer‑centric**, describing build and run procedures.
- Vault entries often reference internal paths (e.g., `_neuroworks/jobs/...`) that are absent from the README, indicating a richer internal tooling ecosystem.
- The README’s description of NeuroWorks as a “local web console” aligns with the vault’s implicit understanding that NeuroWorks runs locally, but the vault does not elaborate on the server/client architecture or port configuration.

### 5. Recommendations
1. **Update the README** to include a brief note on the local‑only, no‑auth nature of NeuroWorks, mirroring the vault’s emphasis on security and isolation.
2. **Add a section on internal research workflows** to the README or create a separate internal‑use README that references the vault’s research notes.
3. **Clarify the distinction** between the NeuroWorks AI platform and the EEG software in both the vault and the public README to prevent future confusion.

---

**Sources**  
- Vault search results: [1]  
- clawbot README: [2]

<details><summary>Log</summary>

```
[2026-06-01T13:19:55.336Z] Replaying a saved plan — 2 steps.
[2026-06-01T13:20:00.022Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-06-01T13:20:00.023Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-06-01T13:20:00.144Z] Step 2 of 2: Fetching README.md from clawbot
[2026-06-01T13:20:03.054Z] Wave 1 finished in 3.0s.
[2026-06-01T13:20:03.054Z] All sub-agents finished in 3.0s.
[2026-06-01T13:20:03.070Z] Thinking with openai/gpt-oss-20b:free (~3 607 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
