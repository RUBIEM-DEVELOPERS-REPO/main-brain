---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-c1350b46
created: 2026-05-30T17:10:54.891Z
jobId: c1350b46-d26f-4ef9-bdd9-7ac9d00e3970
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:10:11.437Z
finishedAt: 2026-05-30T17:10:54.891Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-05-30T17:10:11.437Z
- **Finished:** 2026-05-30T17:10:54.891Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: compare what my vault says about neuroworks to the clawbot README on github\nDescription: Saved from chat: \"compare what my vault says about neuroworks to the clawbot README on github\""
}
```

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.2s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (3.5s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault Content vs. clawbot README

### 1. Scope and Purpose  
- **Vault**: Contains a series of progress logs, research notes, and session reports that reference *NeuroWorks* primarily as a local AI‑workforce platform used by the user’s team. The notes focus on task execution, onboarding, and performance metrics.  
- **README**: Describes *NeuroWorks* as a local web console that interfaces with the *clawbot* cron worker, providing a browser UI for vault browsing and LLM‑powered summaries. It positions *NeuroWorks* as a companion to the cloud‑based *clawbot* service.

### 2. Functional Highlights  
| Feature | Vault Evidence | README Description |
|---------|----------------|--------------------|
| **Local console** | Mentioned in session reports and progress logs (e.g., “NeuroWorks session report — 2026‑05‑28”)[1] | Explicitly defined as a local web app running on 127.0.0.1:7470/7471, launched via `pnpm neuroworks` [2] |
| **Task execution** | Notes reference team tasks, summaries, and grading (e.g., “team‑task‑3‑team‑brief”)[1] | Not directly addressed; README focuses on repo activity ingestion and digest generation |
| **Data ingestion** | Vault logs show daily digests and per‑repo snapshots being written to `_clawbot/…` files (implied by progress entries)[1] | Detailed in README under “What clawbot does” – daily cron scans repos, writes digest files, and pushes to `main‑brain` [2] |
| **Publishing utility** | No explicit mention in vault notes | README lists `pnpm publish-folder` as a local utility for pushing non‑repo folders to GitHub [2] |

### 3. Alignment & Gaps  
- **Alignment**: Both sources agree that *NeuroWorks* is a local interface tied to the *clawbot* ecosystem, and that the vault contains operational logs reflecting its use.  
- **Gaps**: The vault lacks explicit references to the technical details of the console’s ports, the `pnpm` commands, or the exact file structure (`_clawbot/…`) described in the README. Conversely, the README does not capture the day‑to‑day operational metrics and task‑specific notes that populate the vault.

### 4. Recommendations  
1. **Vault Update**: Add a brief reference to the `pnpm neuroworks` launch command and the 127.0.0.1 ports to future session reports for completeness.  
2. **README Enhancement**: Include a short section summarizing typical vault log entries (e.g., daily digest creation, task summaries) to bridge the gap between the technical description and operational reality.

---

*Sources: [1] vault search results; [2] clawbot README content.*

<details><summary>Log</summary>

```
[2026-05-30T17:10:11.460Z] Replaying a saved plan — 2 steps.
[2026-05-30T17:10:11.512Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-05-30T17:10:11.512Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-30T17:10:11.703Z] Step 2 of 2: Fetching README.md from clawbot
[2026-05-30T17:10:15.160Z] Wave 1 finished in 3.6s.
[2026-05-30T17:10:15.160Z] All sub-agents finished in 3.6s.
[2026-05-30T17:10:15.174Z] Thinking with openai/gpt-oss-20b:free (~3 661 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T17:10:16.370Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T17:10:54.891Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
