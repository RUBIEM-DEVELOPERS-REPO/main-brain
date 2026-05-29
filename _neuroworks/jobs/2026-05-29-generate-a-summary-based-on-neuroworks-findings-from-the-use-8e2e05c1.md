---
type: job
title: Generate a summary based on neuroworks findings from the user's vault.
slug: generate-a-summary-based-on-neuroworks-findings-from-the-use-8e2e05c1
created: 2026-05-29T13:48:20.759Z
jobId: 8e2e05c1-044d-46b4-970a-236bf9c66eba
status: succeeded
template: custom-give-me-a-summary-on-neuroworks
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T13:48:01.025Z
finishedAt: 2026-05-29T13:48:20.758Z
---

# Generate a summary based on neuroworks findings from the user's vault.

- **Status:** succeeded
- **Template:** custom-give-me-a-summary-on-neuroworks
- **Started:** 2026-05-29T13:48:01.025Z
- **Finished:** 2026-05-29T13:48:20.758Z
- **Title:** Generate a summary based on neuroworks findings from the user's vault.

## Plan
Generate a summary based on neuroworks findings from the user's vault.

### Steps
1. ✓ Searching your second brain for "neuroworks" — `vault.search` (0.1s)
    > find relevant entries in the user's vault
2. ✓ Thinking about it — `ollama.generate` (7.2s) · model `openai/gpt-oss-20b:free`
    > synthesize the found information into a summary

## Answer
## Summary of NeuroWorks (RUBIEM AI‑Workforce Platform)

NeuroWorks is RUBIEM’s proprietary local AI‑workforce platform, powered by the Clawbot engine. It functions as a second‑brain knowledge vault and a multi‑persona task runner, enabling users to:

- **Run chat, parallel team dispatch, and scheduled tasks** on the local machine (loopback, 127.0.0.1) without external connectivity.  
- **Organise pre‑defined teams** and email bridges, allowing seamless collaboration within the user’s environment.  
- **Store and retrieve knowledge** in a structured vault, with the Researcher persona prioritising internal vault content over external web sources.  

Recent internal activity (May 2026) includes:

- Progress logs on validator reflection lineage and UI polish for skill grading.  
- Onboarding research for a new mid‑market customer, detailing best practices for deployment.  
- Quality test notes and session reports that track feature usage and performance metrics.  
- Team tasks focused on summarising the current state of small 3.8 B local LLMs for coding and drafting launch announcements for new email integrations.  

These documents illustrate NeuroWorks’ focus on local, privacy‑preserving AI task execution, continuous improvement through internal research, and readiness for customer‑specific deployment scenarios.

<details><summary>Log</summary>

```
[2026-05-29T13:48:01.035Z] Replaying a saved plan — 2 steps.
[2026-05-29T13:48:01.073Z] Step 1 of 2: Searching your second brain for "neuroworks"
[2026-05-29T13:48:01.211Z] Step 2 of 2: Thinking about it
[2026-05-29T13:48:08.456Z] All sub-agents finished in 7.4s.
[2026-05-29T13:48:08.471Z] Thinking with openai/gpt-oss-20b:free (~2 754 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
