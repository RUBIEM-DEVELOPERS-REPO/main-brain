---
title: NeuroWorks — feature ideas & load analysis
source: Notepad tab 0532b8a7
filed: 2026-06-10
tags: [imported, notepad]
---

# NeuroWorks — feature ideas & load analysis

lets see what features we can add from this system lets take all relavent suggest the best implimentable features jarvis                          # start chatting (default: chat-simple)jarvis init --preset <name>     # switch to a starter configStatus confirms graceful gating: minimax: disabled (no MINIMAX_API_KEY). To turn it on: add MINIMAX_API_KEY (and MINIMAX_GROUP_ID for media) to clawbot/.env and do a full restart — tsx watch doesn't reload .env.Job-system index loop — real bug, fixed (51  1,382 tasks/min).Phase C numbers were invalid — general-task has requiresApproval: true, so those jobs sat in awaiting-approval (my harness never approved them)  "poll-timeout," not real agent latency. (I'll correct the harness.)"Only one agent working" — confirmed real: pickExecutor/pickPeerByRole do least-load across the pool correctly, but the pool only ever has 1 worker (it lazy-spawns one, and only grows under sustained chat load), and /api/templates/run + schedules don't delegate at all. So the lone secondary mostly sits idle while the primary works.The fix for #3 is to keep a pool of N workers warm so work actually fans out. But that's a real resource tradeoff on your hardware — all agents share the one local Ollama (single GPU) + the rate-limited free OpenRouter, so extra agents mainly help I/O-bound and cloud-routed work, not local-LLM throughput. Your call on how many:
