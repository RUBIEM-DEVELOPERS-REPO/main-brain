---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-350b7887
created: 2026-05-29T15:38:39.002Z
jobId: 350b7887-8532-4e07-b3b3-713475153829
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T15:38:22.831Z
finishedAt: 2026-05-29T15:38:39.002Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-05-29T15:38:22.831Z
- **Finished:** 2026-05-29T15:38:39.002Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (4.0s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## Summary of NeuroWorks (RUBIEM AI‑Workforce Platform)

NeuroWorks is an on‑premises, local AI‑workforce platform developed by RUBIEM. It functions as a second‑brain knowledge vault and a multi‑persona task runner, enabling users to:

- **Chat** with the system in natural language, leveraging local large language models (LLMs) for instant responses.  
- **Dispatch parallel teams** of AI personas to execute complex workflows, with each persona specialized in a particular domain (e.g., research, finance, marketing).  
- **Schedule tasks** and automate recurring operations, reducing manual effort and ensuring consistency.  
- **Pre‑organize teams** so that new projects can be launched quickly without re‑configuring roles.  
- **Bridge email** by translating incoming messages into actionable tasks and summarizing outgoing communications.

The platform runs entirely on the user’s machine (loopback, 127.0.0.1), ensuring data privacy and compliance with internal security policies. It is powered by the CLAWBOT engine, which orchestrates LLM inference, vector‑search retrieval, and persona management. NeuroWorks is designed for mid‑market and enterprise customers who require a scalable, self‑hosted AI assistant that can be customized to specific business processes.

<details><summary>Log</summary>

```
[2026-05-29T15:38:22.841Z] Replaying a saved plan — 2 steps.
[2026-05-29T15:38:23.512Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T15:38:23.581Z] Step 2 of 2: Thinking about it
[2026-05-29T15:38:27.606Z] All sub-agents finished in 4.1s.
[2026-05-29T15:38:27.618Z] Thinking with openai/gpt-oss-20b:free (~2 710 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
