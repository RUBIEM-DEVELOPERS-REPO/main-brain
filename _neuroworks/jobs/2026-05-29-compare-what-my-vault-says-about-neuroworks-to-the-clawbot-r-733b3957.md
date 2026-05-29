---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-733b3957
created: 2026-05-29T13:48:50.779Z
jobId: 733b3957-c485-4bfa-851f-26c485c00681
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T13:48:00.940Z
finishedAt: 2026-05-29T13:48:50.778Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-05-29T13:48:00.940Z
- **Finished:** 2026-05-29T13:48:50.778Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (1.5s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault‑Based Knowledge and the clawbot README

### 1. Scope and Context

| Aspect | Vault Notes | README |
|--------|-------------|--------|
| **Primary focus** | Daily progress logs, research tasks, and onboarding notes that reference *NeuroWorks* as the user’s AI‑workforce platform. | Overview of the clawbot repository, describing two surfaces: the cloud cron worker (`clawbot`) and the local web console (`NeuroWorks`). |
| **Audience** | Internal team members tracking project status and research outputs. | External developers and collaborators who may clone or contribute to the repository. |
| **Detail level** | Fragmentary, task‑oriented entries (e.g., “research.deep resolved wrong NeuroWorks”). | Structured, functional description of commands, entry points, and server bindings. |

### 2. Content Alignment

| Feature | Vault Evidence | README Description |
|---------|----------------|--------------------|
| **Definition of NeuroWorks** | Implicitly treated as the user’s AI‑workforce platform; referenced in progress logs and research notes. | Explicitly defined as the local web console for interacting with clawbot, browsing the vault, and generating LLM‑backed repo summaries via Ollama. |
| **Server Ports** | Not mentioned in vault entries. | Specifies `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server) with rationale for port choice. |
| **Command‑line Entrypoints** | No direct mention of `pnpm` commands. | Lists three entrypoints: `pnpm digest`, `pnpm publish-folder <path>`, and `pnpm dev` (alias `pnpm neuroworks`). |
| **Data Flow** | Vault notes reference daily logs and research tasks but do not detail how data is written to the vault. | Describes how `pnpm digest` writes daily digests to `_clawbot` sub‑directory and commits them to the `main‑brain` vault. |
| **Authentication** | Not addressed. | Notes that the local console has no auth and is bound to loopback. |
| **Use Cases** | Tasks such as onboarding new customers, financial planning, and email integration are mentioned. | Focuses on summarizing repo activity and publishing local folders, rather than specific business use cases. |

### 3. Gaps and Inconsistencies

1. **Missing Operational Details in Vault**  
   The vault contains task logs (e.g., “research.deep resolved wrong NeuroWorks”) but lacks the operational context that the README provides (e.g., port numbers, command names). This makes it difficult for team members to reproduce or troubleshoot the local console setup.

2. **No Explicit Reference to the `main‑brain` Vault**  
   Vault notes refer to “the vault” generically, whereas the README specifies the `main-brain` repository as the target for commits. Aligning terminology would reduce ambiguity.

3. **No Mention of the `publish-folder` Utility**  
   The vault does not capture usage of the `pnpm publish-folder` command, which could be valuable for internal documentation of how non‑repo assets are ingested.

### 4. Recommendations

- **Create a dedicated vault note** summarizing the README’s operational details (commands, ports, auth policy) so that progress logs can reference them directly.  
- **Standardize terminology**: use “main‑brain” consistently in both vault and notes.  
- **Document usage of `publish-folder`** in the vault to capture non‑repo publishing workflows.  
- **Add a quick‑start section** in the vault that mirrors the README’s entrypoints, enabling team members to launch the local console without consulting external docs.

---

**Sources**  
[1] Vault search results showing task logs and references to NeuroWorks.  
[2] clawbot README content outlining architecture and commands.

<details><summary>Log</summary>

```
[2026-05-29T13:48:00.948Z] Replaying a saved plan — 2 steps.
[2026-05-29T13:48:02.029Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-05-29T13:48:02.030Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T13:48:02.099Z] Step 2 of 2: Fetching README.md from clawbot
[2026-05-29T13:48:03.621Z] Wave 1 finished in 1.6s.
[2026-05-29T13:48:03.621Z] All sub-agents finished in 1.6s.
[2026-05-29T13:48:03.629Z] Thinking with openai/gpt-oss-20b:free (~3 615 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
