---
type: job
title: Fact-check a claim
slug: fact-check-a-claim-20982a55
created: 2026-05-29T20:28:28.835Z
jobId: 20982a55-53ad-4a68-b984-b18e28cdcfd0
status: succeeded
template: custom-researcher-fact-check-a-claim
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:26:47.284Z
finishedAt: 2026-05-29T20:28:28.834Z
---

# Fact-check a claim

- **Status:** succeeded
- **Template:** custom-researcher-fact-check-a-claim
- **Started:** 2026-05-29T20:26:47.284Z
- **Finished:** 2026-05-29T20:28:28.834Z
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
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web — `research.deep` (19.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (19.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (13.7s)
    > auto-injected: quality score=0.63 (pass=false) — peer review for a second opinion

## Answer
## Fact‑Check Report  

**Claim:** *No claim was supplied for verification.*  

**Verdict:** Unsupported – there is no statement to evaluate.  

**Evidence:** The research log indicates the request was rejected because the claim was missing: “Unable to proceed – claim missing” [1].  

**Explanation:** Without a specific assertion, parallel supporting and opposing web searches cannot be performed, and no evidence can be gathered to support or refute any proposition.  

*Assumed: The user intended to provide a claim but omitted it; clarification is required to proceed.*

<details><summary>Log</summary>

```
[2026-05-29T20:26:47.292Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:26:47.296Z] Thinking about the best approach…
[2026-05-29T20:26:47.343Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:26:48.385Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:26:48.385Z] Plan ready: 1 step — Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the.
[2026-05-29T20:26:48.391Z] Step 1 of 1: Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web
[2026-05-29T20:27:08.200Z] All sub-agents finished in 19.8s.
[2026-05-29T20:27:08.213Z] Thinking with openai/gpt-oss-20b:free (~4 008 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:27:24.952Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:27:24.956Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:27:24.956Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:27:24.956Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:27:44.215Z] Wave 1 finished in 19.3s.
[2026-05-29T20:27:44.215Z] All sub-agents finished in 19.3s.
[2026-05-29T20:27:44.221Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:27:57.905Z] All sub-agents finished in 13.7s.
[2026-05-29T20:27:57.928Z] quality.check failed (score=0.63, issues: No claim provided, no substantive evidence collected; Citation provided is generic and not tied to a claim) — re-synthesising with the large model
[2026-05-29T20:27:57.981Z] Thinking with openai/gpt-oss-120b:free (~4 331 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:28:10.890Z] quality rescue improved score: 0.63 → 0.76; using the rescued draft
[2026-05-29T20:28:10.890Z] peer review verdict=bad (Does not perform requested fact‑checking; Fails to provide any evidence or verdict) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:28:10.908Z] Thinking with openai/gpt-oss-120b:free (~4 475 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:28:28.098Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T20:28:28.098Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:28:28.834Z] Vault commit: done.
```
</details>
