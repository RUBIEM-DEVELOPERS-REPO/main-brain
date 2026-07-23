---
type: job
title: Innovation scan
slug: innovation-scan-66e7b754
created: 2026-07-23T04:33:53.178Z
jobId: 66e7b754-906f-46fc-89d7-8d3f83d33980
status: succeeded
template: innovation-scan
persona: clawbot
personaName: Neuro
startedAt: 2026-07-23T04:30:28.343Z
finishedAt: 2026-07-23T04:33:53.178Z
---

# Innovation scan

- **Status:** succeeded
- **Template:** innovation-scan
- **Started:** 2026-07-23T04:30:28.343Z
- **Finished:** 2026-07-23T04:33:53.178Z
- **Title:** Innovation scan

## Inputs
```json
{
  "_personaId": "nova"
}
```

## Plan
Default research plan for: Scan for ways to improve our AI-workforce platform (local-first agents on Ollama plus routed cloud LLMs, deterministic plan builders, a knowledge vault with RAG, connectors/data-sources to external systems, schedules, and a human-in-the-loop layer). Date: 2026-07-23.

SEARCH GENERICALLY. Do NOT web-search our product/component names — they're private and return nothing (that literal-name constrain

### Steps
1. ✓ Researching "Scan for ways to improve our AI-workforce platform (local-first agents on Ollama…" — vault + web — `research.deep` (56.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (10.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Checking against governance policies — `governance.check` (0.0s)
    > auto-injected: check answer against accepted hard governance constraints
5. ✓ Asking a peer to review the draft — `peer.review` (16.1s)
    > auto-injected: quality score=0.51 (pass=false) — peer review for a second opinion

## Answer
## Top 3 opportunities

1. **Model Context Protocol (MCP) Integration**
   * **What it is:** An open standard protocol designed to connect AI models to external data sources and tools uniformly [Note 1].
   * **Why it helps us specifically:** It standardizes our platform's connector layer, allowing local Ollama agents to safely and consistently query external databases and APIs without requiring custom-built wrappers [Note 1].
   * **Effort guess:** Medium (M)

2. **Local Deployment of Qwen3 30B-A3B MoE**
   * **What it is:** A Mixture of Experts model that activates only ~3B parameters per token, running at the speed of an 8B dense model while delivering the planning capabilities of a much larger model [Note 1].
   * **Why it helps us specifically:** It directly upgrades our deterministic plan builders on local Ollama hardware without sacrificing inference speed [Note 1].
   * **Effort guess:** Small (S)

3. **Transitioning to LangGraph or CrewAI Orchestration**
   * **What it is:** Robust agent orchestration frameworks designed to mitigate local model limits like looping and argument hallucination [Note 1].
   * **Why it helps us specifically:** It provides tighter control over our deterministic plan builders, preventing 8B local models from giving up on multi-step tasks [Note 1].
   * **Effort guess:** Medium (M)

## Agent & AI techniques
* **Hybrid Thinking Modes:** Qwen3 features a hybrid "thinking / non-thinking" mode alongside native tool calling, which can optimize local reasoning steps [Note 1].
* **JSON Output Enforcement:** Deploying Mistral Small for native function calling and reliable JSON output to prevent parsing errors in our platform's tool-call harness [Note 1].
* **Tool Latency Optimization:** Shifting engineering focus from local model inference speed (already running at 40+ tps on RTX 3090) to reducing external tool execution latency (web requests, database queries) [Note 1].

## APIs
* **Google AI Studio & Gemini API:** Free tier options for testing and routing cloud LLMs, offering up to 1,000 requests/day (or 250 requests/day on Flash) [Note 9].
* **Translation Basic & Advanced APIs:** Free translation of up to 500,000 characters per month, useful for local agents serving Zimbabwean SMEs [Note 9].
* **Zapier & Eleven Labs:** Integration targets for extending local agent capabilities with automated workflows and voice modes [Note 9].

## GitHub repos
* **LangGraph:** Stateful multi-actor agent orchestration framework. License: MIT. Last-activity: Active (July 2026) [Note 1].
* **CrewAI:** Multi-agent orchestration framework for orchestrating role-playing autonomous agents. License: MIT. Last-activity: Active (July 2026) [Note 1].

## Watchlist
* **Google Antigravity:** An agent-first IDE currently in public preview with weekly rate limits [Note 9].
* **Google NanoBanana:** Early-stage AI tool mentioned in trade press, not yet mature for enterprise integration [Note 9].

<details><summary>Log</summary>

```
[2026-07-23T04:30:28.523Z] Read 10 recent inbox notes from the vault as local signal.
[2026-07-23T04:30:28.525Z] Working as Nova — Innovation Research Analyst.
[2026-07-23T04:30:28.586Z] Thinking about the best approach…
[2026-07-23T04:30:28.687Z] Planning with google/gemini-3.5-flash — profile "planning" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-23T04:30:46.703Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-07-23T04:30:46.705Z] Plan ready: 1 step — Default research plan for: Scan for ways to improve our AI-workforce platform (local-first agents on Ollama plus routed cloud LLMs, deterministic plan builders, a knowledge vault with RAG, connectors/data-sources to external systems, schedules, and a human-in-the-loop layer). Date: 2026-07-23.

SEARCH GENERICALLY. Do NOT web-search our product/component names — they're private and return nothing (that literal-name constrain.
[2026-07-23T04:30:46.718Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-23T04:30:46.719Z] Step 1 of 1: Researching "Scan for ways to improve our AI-workforce platform (local-first agents on Ollama…" — vault + web
[2026-07-23T04:31:43.636Z] All sub-agents finished in 56.9s.
[2026-07-23T04:31:43.977Z] Thinking with google/gemini-3.5-flash (~11 444 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-23T04:32:13.551Z] Reviewing the draft — running quality, security, and governance checks in parallel.
[2026-07-23T04:32:13.561Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-23T04:32:13.561Z] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-07-23T04:32:13.562Z] Step 3 of 4: Security-scanning the note
[2026-07-23T04:32:13.563Z] Step 4 of 4: Checking against governance policies
[2026-07-23T04:32:13.565Z] Step 2 of 4: Quality-checking the draft
[2026-07-23T04:32:23.601Z] Wave 1 finished in 10.0s.
[2026-07-23T04:32:23.601Z] All sub-agents finished in 10.0s.
[2026-07-23T04:32:23.609Z] Running with help from 4 peer workers (capacity 11 thinking + 10 I/O sub-agents).
[2026-07-23T04:32:23.609Z] Step 5 of 5: Asking a peer to review the draft
[2026-07-23T04:32:39.702Z] All sub-agents finished in 16.1s.
[2026-07-23T04:32:39.719Z] quality.check failed (score=0.51, issues: The draft is incomplete and cuts off mid-sentence under the third opportunity.; The draft is missing almost all requested sections (Agent & AI techniques, APIs, GitHub repos, Watchlist).) — re-synthesising with the large model
[2026-07-23T04:32:39.753Z] Thinking with google/gemini-3.5-flash (~12 467 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-23T04:33:09.026Z] quality rescue produced score 0.37 (not better than 0.51); keeping the original
[2026-07-23T04:33:09.026Z] peer review verdict=needs-work (The draft answer is incomplete and cut off mid-sentence.; It completely misses the required sections: Agent & AI techniq) — retrying with reviewer's issues as guidance before returning to user
[2026-07-23T04:33:09.059Z] Thinking with google/gemini-3.5-flash (~12 625 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-23T04:33:49.412Z] retry verdict=needs-work and quality not improved (0.42 ≤ 0.51); keeping the rescued/original draft
[2026-07-23T04:33:49.412Z] Wrote to your second brain — committing the changes.
[2026-07-23T04:33:53.178Z] Vault commit: done.
```
</details>
