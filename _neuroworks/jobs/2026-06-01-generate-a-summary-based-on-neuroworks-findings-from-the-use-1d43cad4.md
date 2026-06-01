---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-1d43cad4
created: 2026-06-01T13:20:37.466Z
jobId: 1d43cad4-a965-44d7-9563-cb228dcc4bbd
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:19:55.450Z
finishedAt: 2026-06-01T13:20:37.466Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-06-01T13:19:55.450Z
- **Finished:** 2026-06-01T13:20:37.466Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (9.6s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## NeuroWorks Platform Summary

NeuroWorks is RUBIEM’s private, local AI‑workforce platform that operates entirely on the user’s machine (loopback, 127.0.0.1). It functions as a second‑brain knowledge vault and a multi‑persona task runner, providing:

- **Chat interface** for natural‑language interaction with the AI.
- **Parallel team dispatch** to run multiple personas simultaneously.
- **Scheduled tasks** that can be queued and executed automatically.
- **Pre‑organised teams** that bundle personas with specific roles for common workflows.
- **Email bridge** that forwards incoming and outgoing messages to the platform, allowing the AI to manage email directly.

The platform is designed for local deployment, ensuring data privacy and full control over the AI model and its outputs. It integrates with the user’s existing tools and data stores, enabling seamless augmentation of routine and complex tasks without external cloud dependencies.  

For detailed architecture, feature set, and usage guidelines, refer to the internal knowledge file: [_knowledge/neuroworks-platform.md]().

<details><summary>Log</summary>

```
[2026-06-01T13:19:55.472Z] Replaying a saved plan — 2 steps.
[2026-06-01T13:19:57.487Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-06-01T13:19:57.581Z] Step 2 of 2: Thinking about it
[2026-06-01T13:20:07.165Z] All sub-agents finished in 9.7s.
[2026-06-01T13:20:07.184Z] Thinking with openai/gpt-oss-20b:free (~2 625 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
