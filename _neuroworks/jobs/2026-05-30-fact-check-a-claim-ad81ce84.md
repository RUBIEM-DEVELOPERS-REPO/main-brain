---
type: job
title: Fact-check a claim
slug: fact-check-a-claim-ad81ce84
created: 2026-05-30T10:04:24.371Z
jobId: ad81ce84-37f4-4add-af09-485513b780ff
status: succeeded
template: custom-researcher-fact-check-a-claim
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T09:57:52.481Z
finishedAt: 2026-05-30T10:04:24.370Z
---

# Fact-check a claim

- **Status:** succeeded
- **Template:** custom-researcher-fact-check-a-claim
- **Started:** 2026-05-30T09:57:52.481Z
- **Finished:** 2026-05-30T10:04:24.370Z
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
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web — `research.deep` (26.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.7s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
**Fact‑Check Report**

**Claim to be evaluated:** *No claim was supplied in the request.*

The user’s message contains only the instructions for a fact‑check and does not include a specific assertion to verify. Without a concrete claim, it is impossible to:

1. Formulate the two parallel web searches (supporting vs. opposing).  
2. Retrieve or cite any evidence.  
3. Render a supported, partially supported, contested, or unsupported verdict.

**Next step:** Please provide the exact claim you would like fact‑checked (e.g., “NeuroWorks can run on any operating system,” “Clawbot automatically writes code without user input,” etc.). Once the claim is supplied, the required searches will be performed, evidence gathered, and a verdict delivered.

<details><summary>Log</summary>

```
[2026-05-30T09:57:52.495Z] Working as Clawbot — AI agent operator.
[2026-05-30T09:57:52.497Z] Thinking about the best approach…
[2026-05-30T09:57:52.548Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T09:58:02.082Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T09:58:02.082Z] Plan ready: 1 step — Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the.
[2026-05-30T09:58:02.086Z] Step 1 of 1: Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web
[2026-05-30T09:58:28.998Z] All sub-agents finished in 26.9s.
[2026-05-30T09:58:29.016Z] Thinking with openai/gpt-oss-20b:free (~3 952 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T09:58:52.309Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T09:58:52.323Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T09:58:52.323Z] Step 3 of 3: Security-scanning the note
[2026-05-30T09:58:52.323Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T10:03:52.328Z] Wave 1 finished in 300.0s.
[2026-05-30T10:03:52.328Z] All sub-agents finished in 300.0s.
[2026-05-30T10:03:52.333Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T10:03:55.015Z] All sub-agents finished in 2.7s.
[2026-05-30T10:03:55.020Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T10:03:55.036Z] Thinking with openai/gpt-oss-120b:free (~4 358 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T10:04:24.065Z] quality rescue improved score: 0 → 0.93; using the rescued draft
[2026-05-30T10:04:24.066Z] Wrote to your second brain — committing the changes.
[2026-05-30T10:04:24.370Z] Vault commit: done.
```
</details>
