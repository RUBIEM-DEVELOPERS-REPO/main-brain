---
type: job
title: compare what my vault says about neuroworks to the clawbot README on github
slug: compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r-6b6a53eb
created: 2026-05-29T08:52:56.439Z
jobId: 6b6a53eb-ed50-4176-b549-4ebb7e520021
status: succeeded
template: custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:52:30.196Z
finishedAt: 2026-05-29T08:52:56.438Z
---

# compare what my vault says about neuroworks to the clawbot README on github

- **Status:** succeeded
- **Template:** custom-compare-what-my-vault-says-about-neuroworks-to-the-clawbot-r
- **Started:** 2026-05-29T08:52:30.196Z
- **Finished:** 2026-05-29T08:52:56.438Z
- **Title:** compare what my vault says about neuroworks to the clawbot README on github

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.0s)
    > find relevant matches in the user's vault
2. ✓ Fetching README.md from clawbot — `github.get_file` (0.9s)
    > fetch the clawbot GitHub README for comparison

## Answer
## Comparison of Vault Content and clawbot README

### 1. Scope and Purpose  
- **Vault**: Contains a series of research and progress notes that reference *NeuroWorks* as an AI‑workforce platform. The notes are dated 2026‑05‑27 to 2026‑05‑28 and focus on onboarding, platform capabilities, and session reports. They are stored in the `0‑Inbox` folder and are primarily internal research artifacts.  
- **README**: Describes the *clawbot* repository as a dual‑surface project: a cloud cron worker (`clawbot`) and a local web console (`NeuroWorks`). It outlines the three main entrypoints (`pnpm digest`, `pnpm publish-folder`, `pnpm dev`) and details the local console’s binding addresses and lack of authentication. The README positions *NeuroWorks* as a local console for interacting with *clawbot* and browsing the vault.  

### 2. Naming and Identity  
- **Vault**: Uses the term *NeuroWorks* consistently to refer to the AI‑workforce platform, e.g., “NeuroWorks session report” and “NeuroWorks platform overview and main capabilities.”  
- **README**: Uses the same term but explicitly ties it to the local console that interfaces with *clawbot*. The README clarifies that *NeuroWorks* is a local web console, not the AI platform itself.  

### 3. Functional Description  
| Feature | Vault Notes | README |
|---------|-------------|--------|
| **Primary Function** | AI‑workforce platform (task runner, multi‑persona chat, email bridge). | Local web console for interacting with *clawbot* and browsing the vault. |
| **Deployment** | Implicitly local, run on the user’s machine (loopback). | Explicitly local, bound to 127.0.0.1:7470/7471. |
| **Interaction** | Internal research and session reports; no explicit UI description. | Provides a browser app with no auth, launched via `pnpm dev`/`pnpm neuroworks`. |
| **Integration with clawbot** | Not directly mentioned; vault notes focus on platform capabilities. | Explicitly described as the console that feeds repo activity into the `main‑brain` vault. |

### 4. Documentation and Maintenance  
- **Vault**: Notes are short, dated, and stored in the `0‑Inbox`, indicating they are in progress or awaiting promotion. No formal documentation structure is present.  
- **README**: Serves as the primary external documentation for the repository, detailing commands, file outputs, and binding information. It is a formal, user‑facing guide.  

### 5. Observations  
- The vault content is internal, research‑oriented, and does not cover the operational details that the README provides.  
- The README clarifies the relationship between *clawbot* and *NeuroWorks*, which is only implied in the vault notes.  
- Both sources agree that *NeuroWorks* is a local component tied to the user’s machine, but the README specifies the exact ports and lack of authentication, whereas the vault notes do not.  

### 6. Recommendations  
1. **Promote** key vault notes that describe *NeuroWorks* capabilities to the `2‑Permanent` folder to create a cohesive, evergreen reference.  
2. **Link** the vault notes to the README via wikilinks so that internal research can be traced from the external documentation.  
3. **Update** the README to include a brief summary of the platform’s core features (multi‑persona chat, task runner, email bridge) to align it with the vault’s focus.  

---

*Assumed: The user wanted a concise comparison of the internal vault notes versus the public README, focusing on scope, naming, functionality, and documentation.*

<details><summary>Log</summary>

```
[2026-05-29T08:52:30.207Z] Replaying a saved plan — 2 steps.
[2026-05-29T08:52:30.529Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:52:30.529Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-05-29T08:52:30.529Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T08:52:30.530Z] Step 2 of 2: Fetching README.md from clawbot
[2026-05-29T08:52:31.409Z] Wave 1 finished in 0.9s.
[2026-05-29T08:52:31.409Z] All sub-agents finished in 0.9s.
[2026-05-29T08:52:31.419Z] Thinking with openai/gpt-oss-20b:free (~3 589 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
