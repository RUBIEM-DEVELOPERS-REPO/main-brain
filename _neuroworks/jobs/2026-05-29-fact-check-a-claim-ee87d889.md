---
type: job
title: Fact-check a claim
slug: fact-check-a-claim-ee87d889
created: 2026-05-29T09:01:21.023Z
jobId: ee87d889-a3c0-4481-8de9-7f4c61014e31
status: succeeded
template: custom-researcher-fact-check-a-claim
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:00:26.577Z
finishedAt: 2026-05-29T09:01:21.023Z
---

# Fact-check a claim

- **Status:** succeeded
- **Template:** custom-researcher-fact-check-a-claim
- **Started:** 2026-05-29T09:00:26.577Z
- **Finished:** 2026-05-29T09:01:21.023Z
- **Title:** Fact-check a claim

## Plan
Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the

### Steps
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web — `research.deep` (19.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Claim (as checked):** The user did not provide a specific statement to fact‑check; the request merely instructs to fact‑check “the following claim” without supplying it.

**Verdict:** Unsupported – no claim was provided to evaluate.

**Key evidence**

- The assistant’s own search result shows that the user’s message contains no claim to verify. The system response acknowledges this absence and requests the exact claim for evaluation. [1]

**Strongest counter‑argument**

- Without a concrete assertion, it is impossible to perform the required parallel searches or to determine a factual status. The claim’s absence itself is the decisive factor preventing any fact‑checking.

<details><summary>Log</summary>

```
[2026-05-29T09:00:26.585Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:00:26.593Z] Thinking about the best approach…
[2026-05-29T09:00:26.618Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:00:44.630Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:00:44.631Z] Plan ready: 1 step — Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the.
[2026-05-29T09:00:44.635Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:00:44.635Z] Step 1 of 1: Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web
[2026-05-29T09:01:04.562Z] All sub-agents finished in 19.9s.
[2026-05-29T09:01:04.574Z] Thinking with openai/gpt-oss-20b:free (~3 769 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:01:13.972Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:01:13.976Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-29T09:01:13.976Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:01:13.976Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:01:13.976Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:01:20.767Z] Wave 1 finished in 6.8s.
[2026-05-29T09:01:20.767Z] All sub-agents finished in 6.8s.
[2026-05-29T09:01:20.767Z] Quality check passed (78%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T09:01:20.767Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:01:21.023Z] Vault commit: done.
```
</details>
