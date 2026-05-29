---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-fe83094c
created: 2026-05-29T08:52:45.728Z
jobId: fe83094c-79a0-461e-adce-899fdd71985b
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T08:52:30.178Z
finishedAt: 2026-05-29T08:52:45.728Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-05-29T08:52:30.178Z
- **Finished:** 2026-05-29T08:52:45.728Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.2s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (3.2s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## NeuroWorks AI‑Workforce Platform – Executive Summary

NeuroWorks is RUBIEM’s proprietary, local AI‑workforce platform that operates entirely on the user’s machine (loopback, 127.0.0.1). It functions as a second‑brain knowledge vault and a multi‑persona task runner, providing the following core capabilities:

1. **Chat & Knowledge Retrieval** – A conversational interface that pulls context from the user’s vault and external sources, enabling natural language queries and task initiation.  
2. **Parallel Team Dispatch** – Users can create and manage virtual teams of AI personas, each with distinct roles (e.g., researcher, analyst, editor). The platform schedules and coordinates their work, aggregating outputs into a single report.  
3. **Scheduled & Triggered Tasks** – Tasks can be scheduled for specific times or triggered by events (e.g., new email, file change).  
4. **Pre‑Organized Teams & Templates** – Common workflows (e.g., research briefs, financial planning) are pre‑configured, reducing setup time.  
5. **Email Bridge** – Seamless integration with the local mail client allows AI agents to draft, review, and send emails directly from the platform.  

The platform emphasizes privacy and control: all data remains on the local machine, and no external cloud services are required. It is designed for mid‑market customers and internal corporate use, as documented in the onboarding best‑practice research notes [vault:0‑Inbox/202605262141-research-onboarding-new-mid‑market-customer-neuroworks-best-practices.md] and the platform overview file [vault:0‑Inbox/202605271750-research-neuroworks-platform-overview-and-main-capabilities.md].  

NeuroWorks distinguishes itself from the unrelated Natus/Xltek EEG software by focusing on AI‑driven productivity rather than medical data acquisition. All references to EEG or clinical monitoring are to be ignored as they belong to the other product.

<details><summary>Log</summary>

```
[2026-05-29T08:52:30.188Z] Replaying a saved plan — 2 steps.
[2026-05-29T08:52:30.314Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T08:52:30.314Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T08:52:30.526Z] Step 2 of 2: Thinking about it
[2026-05-29T08:52:33.698Z] All sub-agents finished in 3.4s.
[2026-05-29T08:52:33.704Z] Thinking with openai/gpt-oss-20b:free (~2 647 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
