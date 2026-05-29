---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-6fa57fcc
created: 2026-05-29T18:38:25.557Z
jobId: 6fa57fcc-5e3b-4112-a6e0-006cb8926d83
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T18:37:38.611Z
finishedAt: 2026-05-29T18:38:25.557Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-05-29T18:37:38.611Z
- **Finished:** 2026-05-29T18:38:25.557Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (4.9s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## Summary of NeuroWorks (RUBIEM AI‑Workforce Platform)

NeuroWorks is RUBIEM’s proprietary local AI‑workforce platform, also referred to as “the AI‑Workforce” or “clawbot.” It functions as a second‑brain knowledge vault and multi‑persona task runner that operates entirely on the user’s machine (loopback, 127.0.0.1). Key capabilities include:

* **Chat and parallel team dispatch** – users can engage the platform in conversational mode or delegate tasks to virtual team members.  
* **Scheduled and pre‑organized tasks** – recurring workflows and custom task lists are supported, enabling automated project execution.  
* **Email bridge** – the platform can ingest and respond to email, integrating communication into the AI workflow.  
* **Local deployment** – all processing occurs locally, ensuring data privacy and compliance with internal security policies.  

Recent internal documentation highlights ongoing refinement of the platform’s UI polish, grading mechanisms, and onboarding best practices for new mid‑market customers. The team has also been evaluating small (3–8 b) local LLMs for coding tasks and preparing launch announcements for new email‑in features. These efforts are documented in the 2026‑05‑28 session report and related research notes [vault:0‑Inbox/2026‑05‑28‑neuroworks‑session‑report.md] and [vault:0‑Inbox/202605262141‑research‑onboarding‑new‑mid‑market‑customer‑neuroworks‑best‑practices.md].

The platform remains distinct from the unrelated Natus/Xltek EEG software; all references to “NeuroWorks” in the vault pertain exclusively to the AI‑workforce product.

<details><summary>Log</summary>

```
[2026-05-29T18:37:38.621Z] Replaying a saved plan — 2 steps.
[2026-05-29T18:37:40.633Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T18:37:40.744Z] Step 2 of 2: Thinking about it
[2026-05-29T18:37:45.633Z] All sub-agents finished in 5.0s.
[2026-05-29T18:37:45.640Z] Thinking with openai/gpt-oss-20b:free (~2 697 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T18:37:47.029Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T18:38:25.556Z] Synth recovered on retry — keeping the rescue draft.
```
</details>
