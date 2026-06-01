---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-10f792ab
created: 2026-06-01T08:37:35.728Z
jobId: 10f792ab-0f03-4494-8697-8de534674a1c
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T08:37:22.853Z
finishedAt: 2026-06-01T08:37:35.726Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-06-01T08:37:22.853Z
- **Finished:** 2026-06-01T08:37:35.726Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (4.2s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## Summary of the NeuroWorks Platform

NeuroWorks is an internal, local AI‑workforce platform developed by RUBIEM. It functions as a second‑brain knowledge vault and a multi‑persona task runner. Key capabilities include:

- **Chat interface** for natural language interaction with the system.  
- **Parallel team dispatch** that allows simultaneous execution of multiple sub‑agents.  
- **Scheduled tasks** for automated, time‑driven operations.  
- **Pre‑organized teams** that bundle related personas for specific workflows.  
- **Email bridge** that forwards inbound and outbound messages to and from the platform.  

The platform runs entirely on the user’s machine via loopback (127.0.0.1), ensuring data privacy and offline operation. It is powered by the Clawbot engine, which orchestrates the various personas and task flows. For detailed architecture and usage guidelines, see the internal knowledge file [_knowledge/neuroworks-platform.md] [vault:_knowledge/neuroworks-platform.md].

<details><summary>Log</summary>

```
[2026-06-01T08:37:22.867Z] Replaying a saved plan — 2 steps.
[2026-06-01T08:37:22.917Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-06-01T08:37:22.972Z] Step 2 of 2: Thinking about it
[2026-06-01T08:37:27.212Z] All sub-agents finished in 4.3s.
[2026-06-01T08:37:27.227Z] Thinking with openai/gpt-oss-20b:free (~2 627 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
