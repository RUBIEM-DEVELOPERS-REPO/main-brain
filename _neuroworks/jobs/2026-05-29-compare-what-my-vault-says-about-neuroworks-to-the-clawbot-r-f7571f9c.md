---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-f7571f9c
created: 2026-05-29T18:38:15.172Z
jobId: f7571f9c-a14c-4d12-80b6-c01c0f6842dc
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T18:37:38.568Z
finishedAt: 2026-05-29T18:38:15.172Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-05-29T18:37:38.568Z
- **Finished:** 2026-05-29T18:38:15.172Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (0.7s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault‑Based Knowledge and the clawbot README

### 1. Scope and Context  
- **Vault**: Contains a series of daily progress logs, research notes, and task briefs that reference *NeuroWorks* as a local AI‑workforce platform. The notes are scattered across the `0‑Inbox` and `_neuroworks` directories, indicating active use for onboarding, financial planning, and team task coordination. No consolidated, high‑level description of the platform is present in the vault; the information is fragmented and project‑specific.  
- **README**: Provides a concise, structured overview of the repository’s dual nature: the cloud‑based `clawbot` worker and the local `NeuroWorks` console. It outlines the three primary entry points (`pnpm digest`, `pnpm publish-folder`, `pnpm dev`) and describes the console’s network bindings, purpose, and lack of authentication. The README is the authoritative source for the platform’s architecture and operational details.

### 2. Alignment of Terminology  
- Both sources consistently use the term **NeuroWorks** to refer to the local web console that interfaces with the `main‑brain` Obsidian vault.  
- The vault notes occasionally mention “NeuroWorks” in the context of specific tasks (e.g., onboarding best practices, email‑in integration), which aligns with the README’s description of the console as a tool for interacting with the vault and generating LLM‑backed summaries.

### 3. Missing or Incomplete Vault Information  
- **High‑level description**: The vault lacks a single, clear statement of what NeuroWorks is, its core capabilities, or its architecture.  
- **Entry points**: The README lists three command‑line utilities; the vault does not reference these commands or their usage.  
- **Server details**: The README specifies the exact ports (`7470` for web, `7471` for server) and the rationale for choosing them; the vault contains no such technical detail.  
- **Auth model**: The README notes that NeuroWorks has no authentication and is bound to loopback; this is not mentioned in the vault.

### 4. Vault‑Only Insights  
- The vault contains operational details about how NeuroWorks is used in practice: task briefs for team coordination, onboarding procedures, and financial planning for a corporate summit. These are practical, day‑to‑day use cases that the README does not cover.  
- The vault also documents a research incident where the system mistakenly resolved “NeuroWorks” to the unrelated Natus EEG software, highlighting the importance of the guardrail policy and the need for clear internal naming conventions.

### 5. Recommendations for Consolidation  
1. **Create a permanent vault note** summarizing the platform’s purpose, architecture, and command‑line entry points, mirroring the README.  
2. **Link the README to this note** so that future vault searches return a single, authoritative source.  
3. **Add a brief section** in the vault note that lists the practical use cases (onboarding, financial planning, etc.) to preserve the operational context.  
4. **Document the guardrail policy** within the vault note to prevent future mis‑resolution incidents.

---

**Conclusion**  
The README provides the formal, high‑level definition and operational details of the NeuroWorks local console, while the vault contains fragmented, task‑specific references that illustrate real‑world usage. Aligning these sources by creating a consolidated vault entry will improve discoverability and reduce ambiguity for future users.

<details><summary>Log</summary>

```
[2026-05-29T18:37:38.584Z] Replaying a saved plan — 2 steps.
[2026-05-29T18:37:40.875Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-05-29T18:37:40.875Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T18:37:40.984Z] Step 2 of 2: Fetching README.md from clawbot
[2026-05-29T18:37:41.685Z] Wave 1 finished in 0.8s.
[2026-05-29T18:37:41.685Z] All sub-agents finished in 0.8s.
[2026-05-29T18:37:41.698Z] Thinking with openai/gpt-oss-20b:free (~3 615 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T18:37:45.537Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T18:38:15.172Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
