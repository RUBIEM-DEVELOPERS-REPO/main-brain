---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-77dadcd4
created: 2026-05-29T20:05:06.009Z
jobId: 77dadcd4-0d38-427e-825a-42171ba06035
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:04:30.597Z
finishedAt: 2026-05-29T20:05:06.008Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-05-29T20:04:30.597Z
- **Finished:** 2026-05-29T20:05:06.008Z
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
2. ✓ Fetching README.md from clawbot — `github.get_file` (0.5s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault Information on NeuroWorks vs the clawbot GitHub README

### 1. Scope and Purpose  
| Aspect | Vault (search results) | README (GitHub) |
|--------|------------------------|-----------------|
| **Primary focus** | General references to NeuroWorks across multiple project notes, research sessions, and quality‑test logs. The vault entries are scattered and context‑specific, indicating ongoing research, onboarding, and task management around NeuroWorks. | Explicitly defines NeuroWorks as a *local web console* for interacting with clawbot, browsing the vault, and generating LLM‑backed repo summaries via Ollama. It is presented as one of two surfaces in the same repository. |
| **Audience** | Internal team members working on specific tasks or research involving NeuroWorks. | Developers and users of the clawbot repository, including those who will run the local console. |

### 2. Functional Description  
| Feature | Vault | README |
|---------|-------|--------|
| **Local console** | Not explicitly described; vault notes mention “NeuroWorks session report” and “NeuroWorks best practices” but no technical details. | Clearly states that NeuroWorks is a local web console bound to `127.0.0.1:7470` (web) and `127.0.0.1:7471` (server), with no authentication, intended for local interaction with the vault. |
| **Integration with clawbot** | Implicit: vault notes refer to “research.deep” resolving wrong NeuroWorks, indicating interaction between research tooling and the platform. | README explains that clawbot feeds repo activity into the `main‑brain` Obsidian vault, while NeuroWorks provides a local interface to that vault. |
| **Data sources** | Vault notes reference internal research files, onboarding docs, and task briefs. | README lists three entry points: `pnpm digest` (GitHub Actions), `pnpm publish-folder` (local utility), and `pnpm dev`/`pnpm neuroworks` (launches the local console). |
| **Output artifacts** | Vault entries mention daily logs, session reports, and task briefs, but no standardized artifact naming. | README specifies output files such as `_clawbot/YYYY-MM-DD.md`, `_clawbot/latest.md`, and per‑repo snapshots. |

### 3. Operational Details  
| Detail | Vault | README |
|--------|-------|--------|
| **Execution environment** | Vault notes do not specify runtime details. | README indicates the console runs locally on the user’s machine, bound to loopback, and launched via `pnpm neuroworks`. |
| **Dependencies** | Not captured in the vault excerpts. | README mentions Ollama for LLM‑backed summaries. |
| **Versioning / Release** | No version information in the vault snippets. | README provides a high‑level description but no version number. |

### 4. Observations & Gaps  
1. **Vault content is fragmented**: The search results show only metadata (tags, titles) and references to other notes, lacking a consolidated view of NeuroWorks’ architecture or capabilities.  
2. **README offers a cohesive, technical overview**: It defines entry points, output artifacts, and runtime details that are absent from the vault.  
3. **Potential misalignment**: The vault note about “research.deep” resolving the wrong NeuroWorks suggests confusion between the EEG product and the AI platform; the README clarifies the intended product.  
4. **Missing documentation in vault**: No explicit mention of the local console’s ports, authentication model, or integration with Ollama, which are present in the README.

### 5. Recommendations  
- **Create a dedicated vault note** summarizing the README’s key points (entry points, ports, dependencies) to align internal knowledge with the public documentation.  
- **Update existing research notes** to reference the consolidated vault note, ensuring consistency across onboarding and task briefs.  
- **Add a clarification** in the vault about the distinction between the AI platform and the EEG software to prevent future misidentification.  

---

**Assumed**: The vault search results represent the entirety of current internal documentation on NeuroWorks; no additional hidden files were found.

<details><summary>Log</summary>

```
[2026-05-29T20:04:30.609Z] Replaying a saved plan — 2 steps.
[2026-05-29T20:04:32.578Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-05-29T20:04:32.578Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T20:04:32.658Z] Step 2 of 2: Fetching README.md from clawbot
[2026-05-29T20:04:33.162Z] Wave 1 finished in 0.6s.
[2026-05-29T20:04:33.162Z] All sub-agents finished in 0.6s.
[2026-05-29T20:04:33.175Z] Thinking with openai/gpt-oss-20b:free (~3 669 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
