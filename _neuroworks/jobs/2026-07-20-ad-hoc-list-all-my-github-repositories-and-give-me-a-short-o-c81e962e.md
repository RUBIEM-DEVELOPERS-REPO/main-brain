---
type: job
title: Ad-hoc: List all my GitHub repositories and give me a short overview
slug: ad-hoc-list-all-my-github-repositories-and-give-me-a-short-o-c81e962e
created: 2026-07-20T17:37:42.108Z
jobId: c81e962e-a032-4eb9-8691-a77af5d7d5fa
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-07-20T17:36:38.361Z
finishedAt: 2026-07-20T17:37:42.108Z
---

# Ad-hoc: List all my GitHub repositories and give me a short overview

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-07-20T17:36:38.361Z
- **Finished:** 2026-07-20T17:37:42.108Z
- **Title:** Ad-hoc: List all my GitHub repositories and give me a short overview

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nList all my GitHub repositories and give me a short overview of what each one is.\n\nInterpretation: intent=list, target=\"all my GitHub repositories and give me a short overview of what each one is.\", scope=short.\n\nDeliverable shape: Markdown bullet list, no preamble, no trailing summary. Each item terse.\n\nScope: short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "List all my GitHub repositories and give me a short overview of what each one is.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "list",
  "intentTarget": "all my GitHub repositories and give me a short overview of what each one is.",
  "intentScope": "short",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaId": "clawbot"
}
```

## Plan
List all GitHub repositories and generate a short, terse overview for each in a markdown bullet list.

### Steps
1. ✓ Listing your GitHub repos — `github.list_repos` (1.6s)
    > List all GitHub repositories the user has access to.
2. ✓ Thinking about it — `ollama.generate` (9.4s) · model `nvidia/nemotron-3-super-120b-a12b:free`
    > Generate a terse markdown bullet list of the repositories and their overviews.
3. ✓ Quality-checking the draft — `quality.check` (11.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
5. ✓ Checking against governance policies — `governance.check` (0.0s)
    > auto-injected: check answer against accepted hard governance constraints

## Answer
- main-brain – Core AI brain module (Python) [1][2]  
- zim-compare-ui-redesign-2- – UI redesign for Zim comparison tool (TypeScript) [1][2]  
- ZivaBasa-MVP – AI-powered workforce intelligence prototype for banks [1][2]  
- AI-DATA-READINESS-SYSTEM-ADRS- – Contract-driven AI data readiness platform (ingest, validate, map, entity resolution) [1][2]  
- neuroworks – Local-first AI workforce platform with agent orchestration, governance, ADRS, Aiia finance, Obsidian vault, web console (TypeScript) [1][2]  
- AIIA-Website--Invoice-and-Receipt-Generator – Website for generating invoices and receipts (TypeScript) [1][2]  
- cognify – JavaScript-based cognition/enhancement tool (private) [1][2]  
- omnis-signal – Python fetcher for intelligence data [1][2]  
- Omnis_Signal_Updated – Updated real-time intelligence data fetcher [1][2]  
- ZimVoice – Python voice processing tool for Zim [1][2]  
- aiia-intel-competitive-analysis – Private competitive analysis tool for AIIA intelligence [1][2]

<details><summary>Log</summary>

```
[2026-07-20T17:36:38.362Z] DELEGATE_ALL → lightest worker managed-worker-7473 (effective load 1)
[2026-07-20T17:36:38.362Z] Why I delegated: worker.
[2026-07-20T17:36:39.383Z] [peer] hired employee "Neuro" (AI agent operator) for this task — scoped to this run only
[2026-07-20T17:36:59.697Z] [peer] Thinking about the best approach…
[2026-07-20T17:36:59.697Z] [peer] Planning with google/gemini-3.5-flash — profile "planning" + complex task — handoff to large model google/gemini-3.5-flash.
[2026-07-20T17:37:05.717Z] [peer] Plan ready: 2 steps — List all GitHub repositories and generate a short, terse overview for each in a markdown bullet list..
[2026-07-20T17:37:05.717Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-20T17:37:05.717Z] [peer] Step 1 of 2: Listing your GitHub repos
[2026-07-20T17:37:08.737Z] [peer] Step 2 of 2: Thinking about it
[2026-07-20T17:37:17.985Z] [peer] All sub-agents finished in 10.9s.
[2026-07-20T17:37:17.985Z] [peer] Thinking with nvidia/nemotron-3-super-120b-a12b:free (~5 678 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-07-20T17:37:33.069Z] [peer] Reviewing the draft — running quality, security, and governance checks in parallel.
[2026-07-20T17:37:33.069Z] [peer] Running with help from 2 peer workers (capacity 8 thinking + 10 I/O sub-agents).
[2026-07-20T17:37:33.069Z] [peer] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-07-20T17:37:33.069Z] [peer] Step 4 of 5: Security-scanning the note
[2026-07-20T17:37:33.069Z] [peer] Step 5 of 5: Checking against governance policies
[2026-07-20T17:37:33.069Z] [peer] Step 3 of 5: Quality-checking the draft
[2026-07-20T17:37:42.103Z] [peer] Wave 1 finished in 11.2s.
[2026-07-20T17:37:42.103Z] [peer] All sub-agents finished in 11.2s.
[2026-07-20T17:37:42.103Z] [peer] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
[2026-07-20T17:37:42.103Z] managed-worker-7473 returned in 63.7s — succeeded.
[2026-07-20T17:37:42.103Z] Worker confirmed it operated as "Neuro".
[2026-07-20T17:37:42.103Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-07-20T17:37:42.108Z] Filed to your second brain → 0-Inbox/202607201737-curated-list-all-my-github-repositories-and-give-me-a-short-overview.md.
```
</details>
