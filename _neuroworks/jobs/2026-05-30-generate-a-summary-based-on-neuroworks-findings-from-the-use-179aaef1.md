---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-179aaef1
created: 2026-05-30T09:35:16.571Z
jobId: 179aaef1-1128-42e3-9efe-b83e5d47cd0a
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:34:43.319Z
finishedAt: 2026-05-30T09:35:16.571Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-05-30T09:34:43.319Z
- **Finished:** 2026-05-30T09:35:16.571Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Generate a summary based on neuroworks findings from the user's vault.\nDescription: Saved from chat: \"give me a summary on neuroworks\""
}
```

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.0s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (6.5s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## Summary of the NeuroWorks Platform

NeuroWorks is an internal, local AI‑workforce platform developed by RUBIEM. It functions as a second‑brain knowledge vault and a multi‑persona task runner that operates entirely on the user’s machine (loopback, 127.0.0.1). The platform integrates chat, parallel team dispatch, scheduled tasks, pre‑organized teams, and an email bridge, enabling users to delegate and orchestrate work across multiple AI personas without external cloud dependencies.  

Key characteristics:

- **Local execution** – all processing occurs on the host machine, ensuring data privacy and compliance with internal security policies.  
- **Multi‑persona architecture** – users can instantiate distinct AI personas, each with its own context and role, and coordinate them through a shared task queue.  
- **Task orchestration** – supports parallel execution, scheduling, and pre‑defined team structures, allowing complex workflows to be defined and monitored.  
- **Email bridge** – integrates with local mail clients to ingest and respond to email content, expanding the platform’s reach into routine communication tasks.  
- **Extensibility** – the platform is designed to ingest external knowledge sources (e.g., PDFs, web pages) and embed them into the local vector store for retrieval‑augmented generation.  

The platform is documented in the vault under `_knowledge/neuroworks-platform.md` and is the subject of several status reports (e.g., 202605291017‑research‑neuroworks‑status‑report.md). These reports track feature progress, integration points, and user feedback, confirming that NeuroWorks remains a core component of RUBIEM’s AI‑workforce strategy.

<details><summary>Log</summary>

```
[2026-05-30T09:34:43.360Z] Replaying a saved plan — 2 steps.
[2026-05-30T09:34:43.393Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-30T09:34:43.435Z] Step 2 of 2: Thinking about it
[2026-05-30T09:34:49.893Z] All sub-agents finished in 6.5s.
[2026-05-30T09:34:49.913Z] Thinking with openai/gpt-oss-20b:free (~3 224 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T09:34:51.167Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T09:35:16.571Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
