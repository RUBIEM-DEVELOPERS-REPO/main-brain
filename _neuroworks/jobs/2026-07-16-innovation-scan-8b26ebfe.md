---
type: job
title: Innovation scan
slug: innovation-scan-8b26ebfe
created: 2026-07-16T09:37:28.270Z
jobId: 8b26ebfe-ad47-45ef-8cce-0a73697f8619
status: succeeded
template: innovation-scan
persona: procurement
personaName: Pia
startedAt: 2026-07-16T09:34:29.520Z
finishedAt: 2026-07-16T09:37:28.223Z
---

# Innovation scan

- **Status:** succeeded
- **Template:** innovation-scan
- **Started:** 2026-07-16T09:34:29.520Z
- **Finished:** 2026-07-16T09:37:28.223Z
- **Title:** Innovation scan

## Inputs
```json
{
  "_personaId": "nova",
  "focus": "agent orchestration and voice agents"
}
```

## Plan
Research: ways to improve NeuroWorks (our AI-workforce platform

### Steps
1. ✓ Researching "ways to improve NeuroWorks (our AI-workforce platform" — vault + web — `research.deep` (56.7s)
    > research signal detected ("Research ways") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (18.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (17.7s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Top 3 opportunities

### 1. Local Voice Agent Pipeline (Ollama + Whisper + Kokoro)
* **What it is:** A fully local, low-latency voice-to-voice pipeline combining Whisper (speech-to-text), a local Ollama LLM, and Kokoro-82M (text-to-speech) running on the same loopback machine.
* **Why it helps NeuroWorks specifically:** It allows our local-first agents to interact with users via voice without sending sensitive audio data to external cloud APIs. This directly enhances the "My Work" layer with real-time voice commands and status readouts, maintaining our strict local-first privacy posture.
* **Effort guess:** M

### 2. Hierarchical Multi-Agent Routing (Supervisor Pattern)
* **What it is:** Transitioning from flat parallel team dispatches to a hierarchical supervisor-agent pattern where a deterministic router LLM delegates sub-tasks to specialized local personas and aggregates their outputs.
* **Why it helps NeuroWorks specifically:** Our current parallel team dispatch can lead to redundant execution. A supervisor pattern structures multi-persona tasks, ensuring that local Ollama models (which have smaller context windows) only receive highly relevant sub-tasks, conserving local compute resources.
* **Effort guess:** S

### 3. Offline-First Vector DB Syncing for RAG
* **What it is:** A hybrid RAG architecture that uses a lightweight, local vector database (like LanceDB or Chroma) on the loopback instance, which periodically syncs embeddings with a centralized cloud vector store when connectivity is available.
* **Why it helps NeuroWorks specifically:** For Zimbabwean SMEs operating in environments with intermittent internet connectivity, this ensures that the knowledge vault remains fully functional offline. Agents can query local documentation without interruption, syncing updates once back online.
* **Effort guess:** M

---

## Agent & AI techniques

### Hierarchical Planning and Task Decomposition
Recent agentic design patterns emphasize moving away from single-prompt execution toward structured, multi-step planning. By forcing the LLM to generate a deterministic JSON plan before executing tools, agent platforms drastically reduce hallucination rates. For NeuroWorks, implementing a strict "Plan-Act-Reflect" loop allows local Ollama models to self-correct when a tool call fails, rather than failing the entire background job [1].

### Context-Aware Memory Compression
To prevent local Ollama instances from running out

<details><summary>Log</summary>

```
[2026-07-16T09:34:29.573Z] Working as Nova — Innovation Research Analyst.
[2026-07-16T09:34:30.371Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-07-16T09:34:30.416Z] Plan ready: 1 step — Research: ways to improve NeuroWorks (our AI-workforce platform.
[2026-07-16T09:34:30.507Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-16T09:34:30.509Z] Step 1 of 1: Researching "ways to improve NeuroWorks (our AI-workforce platform" — vault + web
[2026-07-16T09:35:27.206Z] All sub-agents finished in 56.7s.
[2026-07-16T09:35:31.473Z] Thinking with google/gemini-3.5-flash (~6 802 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-16T09:35:43.672Z] Reviewing the draft — running quality and security checks in parallel.
[2026-07-16T09:35:43.679Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-16T09:35:43.679Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-07-16T09:35:43.679Z] Step 3 of 3: Security-scanning the note
[2026-07-16T09:35:43.681Z] Step 2 of 3: Quality-checking the draft
[2026-07-16T09:36:02.010Z] Wave 1 finished in 18.3s.
[2026-07-16T09:36:02.010Z] All sub-agents finished in 18.3s.
[2026-07-16T09:36:03.081Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-16T09:36:03.093Z] Step 4 of 4: Asking a peer to review the draft
[2026-07-16T09:36:20.801Z] All sub-agents finished in 17.7s.
[2026-07-16T09:36:20.814Z] quality.check failed (score=?, issues: scorer returned no JSON) — re-synthesising with the large model
[2026-07-16T09:36:21.460Z] Thinking with google/gemini-3.5-flash (~7 696 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-16T09:36:32.599Z] quality rescue produced score 0 (not better than 0); keeping the original
[2026-07-16T09:36:32.599Z] peer review verdict=needs-work (Missing APIs section; Missing GitHub repos section) — retrying with reviewer's issues as guidance before returning to user
[2026-07-16T09:36:32.659Z] Thinking with google/gemini-3.5-flash (~7 873 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-16T09:37:09.476Z] retry verdict=bad and quality not improved (0 ≤ 0); keeping the rescued/original draft
[2026-07-16T09:37:09.476Z] Wrote to your second brain — committing the changes.
[2026-07-16T09:37:28.222Z] Vault commit: done.
```
</details>
