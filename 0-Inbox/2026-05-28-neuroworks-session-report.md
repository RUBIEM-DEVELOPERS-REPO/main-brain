---
title: NeuroWorks session report — 2026-05-28
date: 2026-05-28
tags: [neuroworks, clawbot, session-report, stress-test, email-bridge]
---

# NeuroWorks session report — 2026-05-28

Work completed this session: parallel stress test, a grader/planner fix for
non-research deliverables, a new email bridge, and an Ollama model swap.

## 1. Parallel stress test (10 personas)

Fired a 10-task team brief across distinct personas with varied deliverable
shapes. Concurrency proved real: ~1,124 job-seconds finished in a 218s wall
window (~5x parallelism; 9 jobs observed running at once).

| Persona | Shape | Score | Pass | Note |
|---|---|---|---|---|
| Sam | code approach | 0.87 | ✓ | |
| Fiona | worked example | 0.78 | ✓ | |
| Casey | support reply | 1.00 | ✓ | |
| Logan | clause review | 0.83 | ✓ | |
| Dale | analysis | 0.95 | ✓ | |
| Priya | PM brief | 0.79 | ✓ | |
| Quinn | test cases | 0.93 | ✓ | |
| Researcher | research+sources | 0.74 | ✗ | web fetch failed → honest refusal (env issue, not grader) |
| Devon | runbook | 0.55 | ✗ | **grader misalignment** |
| Maya | marketing copy | 0.29 | ✗ | **grader misalignment** |

## 2. Grader misalignment — found & fixed

`quality.check` applied a research rubric (citation_coverage + strict
factuality_risk) to **all** deliverables. Marketing copy (Maya 0.29) and a
procedural runbook (Devon 0.55) were penalized for not citing sources — but
those draw on persona knowledge and are aspirational/operational by nature.

**Fix:** the grader now classifies the deliverable (research / creative /
procedural / code) via a shared `deliverable.ts` classifier. For non-research
types, citation_coverage is floored to 1.0 (N/A), factuality is relaxed, and
persona_fit carries the weight. Verified: a Maya-style announcement went
**0.29 → 0.95 (pass, class=creative)**.

## 3. Planner fix — skip wasted research

Creative/procedural tasks were triggering speculative web research (Devon's
runbook ran 4 steps / 218s and produced thin "sources"). The planner now
routes those straight to a persona-knowledge synth (no research) unless the
task explicitly asks for sources ("latest", "search", "our docs", a URL).

Verified: creative task **3 steps → 0 steps, 11.8s**; runbook **218s → 37.7s,
0 steps, full 2,400-char output** (not truncated — routed through the synth
prompt at a generous budget, not the terse direct-answer path).

One self-inflicted bug found & fixed: the research-signal regex matched the
bare word "reference", which appears in the team alignment directive
("reference A, B, AND C"), neutralizing the fix for team tasks. Tightened.

## 4. Email bridge (new)

clawbot now has a mailbox (`clawbot486@gmail.com`): polls IMAP for unseen
mail, routes by subject (`[team]` → team brief, else → chat session), runs it
through the real `/api/chat` / `/api/team` endpoints, and replies over SMTP.
Results land in Reports/Results (and the chat path captures to the vault).

- **Security:** only senders on `CLAWBOT_EMAIL_ALLOWED_SENDERS` are acted on;
  empty list = inbound disabled (outbound still works). Currently locked to
  the owner address only.
- **Bug found & fixed:** the poll deadlocked because it issued an IMAP
  `messageFlagsAdd` (mark-read) *inside* the `fetch()` stream — imapflow
  serializes commands. Moved marking to after the fetch loop.
- **Verified end-to-end:** a real inbound email ("status report on NeuroWorks")
  was polled, run as a chat session, and the report emailed back (processed=1,
  no errors).

Config lives in gitignored `.env`; `.env.example` documents all keys. Uses a
Gmail app password (not the account password) — required for SMTP/IMAP.

## 5. Ollama model swap

- Pulled **qwen2.5-coder:7b** (4.7 GB) for code/synthesis lift.
- Removed **qwen3.5:0.8b** (sub-1B, low quality). Safe: the model picker only
  considers installed models, so triage now falls to qwen2.5:3b.
- Fixed the stale `config.ts` default that still pointed at the deleted model.
- Installed models: qwen2.5-coder:7b, qwen2.5:3b, qwen3:4b.

## 6. Regression

Templates + normal research path unaffected by the changes (forceDirect is
gated to non-template runs): add-note ✓, search-brain ✓ (1,370 chars), ad-hoc
research ✓ (1,395 chars).

## 7. Known issues / follow-ups

- **Web research reliability:** the Researcher task and the creative+research
  hybrid both produced thin output because web fetches failed/returned thin
  results. Worth investigating the fetch tiers (network / OpenRouter free-tier
  rate limits) separately — this is the remaining quality drag, not the grader.
- Email "chat session" = a chat-pipeline job (visible in Tasks/Activity/
  Results). There is no persisted Chat-page session list; if that's wanted it's
  a separate feature.
- Email replies are sent as plain text (markdown source). HTML formatting is a
  possible future polish.
