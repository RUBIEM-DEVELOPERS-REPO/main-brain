---
type: job
title: Ad-hoc: Give me a short summary of the following passage: Clawbot is
slug: ad-hoc-give-me-a-short-summary-of-the-following-passage-claw-3bcca5e3
created: 2026-05-26T21:56:53.114Z
jobId: 3bcca5e3-6d2a-4ce0-9deb-1c0920355b23
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-26T21:55:48.336Z
finishedAt: 2026-05-26T21:56:53.114Z
---

# Ad-hoc: Give me a short summary of the following passage: Clawbot is

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-26T21:55:48.336Z
- **Finished:** 2026-05-26T21:56:53.114Z
- **Title:** Ad-hoc: Give me a short summary of the following passage: Clawbot is

## Inputs
```json
{
  "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.\n\nInterpretation: intent=answer, scope=short.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Give me a short summary of the following passage: Clawbot is an AI agent platform that routes tasks to 17 specialist personas, integrates with an Obsidian vault for long-term memory, and supports web research via DuckDuckGo, Bing, and Firecrawl. Tasks can be run as one-shot or as part of a continuation flow when more context is needed. Output formats include emails, memos, code, briefs, and reports.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "intentScope": "short",
  "personaId": "clawbot"
}
```

## Plan
Research: via DuckDuckGo

### Steps
1. ✓ Researching "via DuckDuckGo" — vault + web — `research.deep` (19.5s)
    > research signal detected ("research via") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (6.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.0s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
Clawbot is an AI‑agent platform that routes tasks to 17 specialist personas, leverages an Obsidian vault for long‑term memory, and can conduct web research via DuckDuckGo, Bing, and Firecrawl. Tasks may be executed as single‑shot actions or as part of a continuation flow when additional context is required. Supported output formats include emails, memos, code snippets, briefs, and reports. [3]

<details><summary>Log</summary>

```
[2026-05-26T21:55:48.336Z] Handling this myself — I'm at least as free as my peers (0 vs 0 jobs in progress).
[2026-05-26T21:55:48.336Z] Working as Clawbot — AI agent operator.
[2026-05-26T21:55:48.357Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-05-26T21:55:48.357Z] Plan ready: 1 step — Research: via DuckDuckGo.
[2026-05-26T21:55:48.361Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-26T21:55:48.361Z] Step 1 of 1: Researching "via DuckDuckGo" — vault + web
[2026-05-26T21:56:07.834Z] All sub-agents finished in 19.5s.
[2026-05-26T21:56:07.852Z] Thinking with openai/gpt-oss-20b:free (~2 948 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-26T21:56:19.650Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-26T21:56:19.658Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-26T21:56:19.658Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-26T21:56:19.658Z] Step 3 of 3: Security-scanning the note
[2026-05-26T21:56:19.658Z] Step 2 of 3: Quality-checking the draft
[2026-05-26T21:56:26.213Z] Wave 1 finished in 6.6s.
[2026-05-26T21:56:26.213Z] All sub-agents finished in 6.6s.
[2026-05-26T21:56:26.220Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-26T21:56:26.220Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-26T21:56:29.269Z] All sub-agents finished in 3.0s.
[2026-05-26T21:56:29.277Z] quality.check failed (score=0.58, issues: extra information about DuckDuckGo not requested; citation coverage low for many claims) — re-synthesising with the large model
[2026-05-26T21:56:29.291Z] Thinking with openai/gpt-oss-120b:free (~3 221 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-26T21:56:38.804Z] quality rescue improved score: 0.58 → 0.66; using the rescued draft
[2026-05-26T21:56:38.804Z] Wrote to your second brain — committing the changes.
[2026-05-26T21:56:39.098Z] Vault commit: done.
[2026-05-26T21:56:39.115Z] Saved this workflow as a reusable template: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool.
[2026-05-26T21:56:39.115Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-05-26T21:56:53.114Z] Not filed to the vault — quality below threshold (factuality_risk=0.10, citation_coverage=0.20, persona_fit=0.70).
```
</details>
