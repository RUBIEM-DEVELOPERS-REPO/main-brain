---
type: job
title: Fact-check a claim
slug: fact-check-a-claim-d1be3cb9
created: 2026-05-30T17:39:36.189Z
jobId: d1be3cb9-d980-42e4-9501-d08b383a13c6
status: succeeded
template: custom-researcher-fact-check-a-claim
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:35:10.849Z
finishedAt: 2026-05-30T17:39:36.188Z
---

# Fact-check a claim

- **Status:** succeeded
- **Template:** custom-researcher-fact-check-a-claim
- **Started:** 2026-05-30T17:35:10.849Z
- **Finished:** 2026-05-30T17:39:36.188Z
- **Title:** Fact-check a claim

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Fact-check a claim\nDescription: Targeted web search for a specific claim. Pulls supporting AND opposing evidence in parallel, then states whether the claim holds, partially holds, or doesn't."
}
```

## Plan
Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the

### Steps
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web — `research.deep` (12.2s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (14.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.8s)
    > auto-injected: quality score=0.66 (pass=false) — peer review for a second opinion

## Answer
**Fact‑check Report – Claim Missing**

The request to fact‑check a specific claim was received, but no claim was supplied in the prompt. Without a concrete statement to evaluate, it is impossible to conduct the required parallel web searches, gather supporting or opposing evidence, or render a verdict.  

Please provide the exact claim you would like verified, and I will proceed with the fact‑checking process as outlined.

<details><summary>Log</summary>

```
[2026-05-30T17:35:10.861Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:35:10.865Z] Thinking about the best approach…
[2026-05-30T17:35:10.923Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:35:12.038Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:35:12.038Z] Plan ready: 1 step — Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the.
[2026-05-30T17:35:12.044Z] Step 1 of 1: Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web
[2026-05-30T17:35:24.281Z] All sub-agents finished in 12.2s.
[2026-05-30T17:35:24.302Z] Thinking with openai/gpt-oss-20b:free (~3 952 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T17:35:29.273Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:35:29.289Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:35:29.289Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:35:29.289Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:35:44.078Z] Wave 1 finished in 14.8s.
[2026-05-30T17:35:44.078Z] All sub-agents finished in 14.8s.
[2026-05-30T17:35:44.084Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:35:46.913Z] All sub-agents finished in 2.8s.
[2026-05-30T17:35:46.918Z] quality.check failed (score=0.66, issues: No claim provided, so no evidence gathered; Citation [1] is irrelevant and does not support any claim) — re-synthesising with the large model
[2026-05-30T17:35:46.933Z] Thinking with openai/gpt-oss-120b:free (~4 299 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:39:35.782Z] quality rescue produced score 0.64 (not better than 0.66); keeping the original
[2026-05-30T17:39:35.783Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:39:36.188Z] Vault commit: done.
```
</details>
