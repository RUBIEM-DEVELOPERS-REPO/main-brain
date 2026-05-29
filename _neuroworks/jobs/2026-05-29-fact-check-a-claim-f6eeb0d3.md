---
type: job
title: Fact-check a claim
slug: fact-check-a-claim-f6eeb0d3
created: 2026-05-29T09:20:51.277Z
jobId: f6eeb0d3-e1c6-45a4-bf7c-125a22f67996
status: succeeded
template: custom-researcher-fact-check-a-claim
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:19:24.920Z
finishedAt: 2026-05-29T09:20:51.277Z
---

# Fact-check a claim

- **Status:** succeeded
- **Template:** custom-researcher-fact-check-a-claim
- **Started:** 2026-05-29T09:19:24.920Z
- **Finished:** 2026-05-29T09:20:51.277Z
- **Title:** Fact-check a claim

## Plan
Run parallel web searches for support and opposition, synthesize with LLM, then quality check and peer review.

### Steps
1. ✓ Searching the web for ""The claim" "fact"" — `web.search` (3.3s)
2. ✓ Searching the web for ""The claim" debunk false no evidence" — `web.search` (3.8s)
3. ✓ Thinking about it — `ollama.generate` (7.1s) · model `openai/gpt-oss-20b:free`
4. ✓ Quality-checking the draft — `quality.check` (4.5s)
5. ✓ Asking a peer to review the draft — `peer.review` (2.9s)
6. ✓ Quality-checking the draft — `quality.check` (5.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
7. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Fact‑Check Report – Claim Not Provided**

The request does not contain the specific statement to be evaluated. To proceed, please supply the exact claim you would like fact‑checked. Once the claim is known, the following steps will be taken:

1. Run two parallel web searches—one phrasing the claim as a fact (supporting) and one phrasing it in a negated or debunk‑oriented form (opposing).  
2. Retrieve and cite the top credible sources from each side.  
3. Deliver a verdict (Supported, Partially supported, Contested, Unsupported, or Refuted), confidence level, key evidence with numbered citations, and the strongest counter‑argument.  

*Assumed: the user intends to provide a claim for verification; no claim was included in the original request.*

<details><summary>Log</summary>

```
[2026-05-29T09:19:24.928Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:19:24.931Z] Thinking about the best approach…
[2026-05-29T09:19:24.965Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:19:38.455Z] Plan ready: 5 steps — Run parallel web searches for support and opposition, synthesize with LLM, then quality check and peer review..
[2026-05-29T09:19:38.459Z] Running 3 sub-agents in parallel (2 I/O + 1 thinking).
[2026-05-29T09:19:38.459Z] Step 1 of 5: Searching the web for ""The claim" "fact""
[2026-05-29T09:19:38.460Z] Step 2 of 5: Searching the web for ""The claim" debunk false no evidence"
[2026-05-29T09:19:38.461Z] Step 3 of 5: Thinking about it
[2026-05-29T09:19:45.588Z] Wave 1 finished in 7.1s.
[2026-05-29T09:19:45.588Z] Step 4 of 5: Quality-checking the draft
[2026-05-29T09:19:50.052Z] Step 5 of 5: Asking a peer to review the draft
[2026-05-29T09:19:52.977Z] All sub-agents finished in 14.5s.
[2026-05-29T09:19:52.990Z] Thinking with openai/gpt-oss-20b:free (~4 131 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:19:58.926Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:19:58.931Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:19:58.931Z] Step 7 of 7: Security-scanning the note
[2026-05-29T09:19:58.931Z] Step 6 of 7: Quality-checking the draft
[2026-05-29T09:20:04.011Z] Wave 1 finished in 5.1s.
[2026-05-29T09:20:04.011Z] All sub-agents finished in 5.1s.
[2026-05-29T09:20:04.017Z] quality.check failed (score=0.3, issues: No answer provided; Missing citations) — re-synthesising with the large model
[2026-05-29T09:20:04.026Z] Thinking with openai/gpt-oss-120b:free (~4 434 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:20:24.963Z] quality rescue improved score: 0.3 → 0.93; using the rescued draft
[2026-05-29T09:20:24.963Z] peer review verdict=bad (No answer provided; Fails to address task) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:20:24.976Z] Thinking with openai/gpt-oss-120b:free (~4 563 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:20:51.277Z] retry verdict=needs-work and quality not improved (0.9 ≤ 0.93); keeping the rescued/original draft
```
</details>
