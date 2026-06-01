---
type: job
title: Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.  Topic: what is the hanta virus
slug: default-research-plan-for-fact-check-the-following-claim-aga-f12e826c
created: 2026-06-01T13:56:01.402Z
jobId: f12e826c-d0a3-4e6a-9a95-dbbe02315839
status: succeeded
template: custom-fact-check-the-following-claim-against-the-live-web-run-two-
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T13:55:15.310Z
finishedAt: 2026-06-01T13:56:01.402Z
---

# Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus

- **Status:** succeeded
- **Template:** custom-fact-check-the-following-claim-against-the-live-web-run-two-
- **Started:** 2026-06-01T13:55:15.310Z
- **Finished:** 2026-06-01T13:56:01.402Z
- **Title:** Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus

## Plan
Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus

### Steps
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus" — vault + web — `research.deep` (30.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.9s)
    > auto-injected: score factuality, citation coverage, persona fit
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (7.2s)
    > auto-injected: peer-review the draft

## Answer
## Partial result

The synthesis step didn't complete cleanly (`OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/g`), so here is the raw evidence we gathered for: **what is the hanta virus?**

### What worked

**Step 1 — Researching "Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus" — vault + web**
**VERDICT:** *Unsupported* – there is no reliable web evidence found to confirm or refute the claim “what is the hanta virus.”

**Why the verdict is “unsupported”**

| Search direction | Top result(s) found | Relevance to the claim |
|------------------|--------------------|------------------------|
| **Supporting** (claim phrased as a fact) | No results returned that define or describe “hanta virus.” | The query returned unrelated pages (e.g., a French ergonomics site) that have no connection to virology. |
| **Opposing** (claim negated or debunked) | No results returned that dispute the existence or definition of a “hanta virus.” | Again, only unrelated commercial content appeared. |

Both parallel searches failed to locate any credible source—medical, scientific, or reputable news—that 

**Step 2 — Quality-checking the draft**
```
{"pass":false,"factuality_risk":1,"citation_coverage":1,"persona_fit":0,"score":0.3,"issues":["Answer does not address the requested topic (hanta virus) and instead discusses unrelated definitions of 'fact'; contains no relevant evidence or citations about hanta virus; tone and structure do not","citation_coverage adjusted from 0.00 to 1.00 (found 4 citation markers in 6 substantive sentences)"],"deliverableClass":"research","citationCounts":{"numbered":2,"vault":0,"url":2,"total":4,"substantive…
```

**Step 3 — Security-scanning the note**
```
{"pass":true,"findings":[],"redacted":"VERDICT: Contested\n\nKey evidence from supporting sources:\n\n[1] Fact | English meaning - Cambridge Dictionary\nhttps://dictionary.cambridge.org/dictionary/english/fact\nThe term \"fact\" in this source is defined as something that has really occurred or is the case, dating back to mid-16th century. This definition aligns with how facts are presented in other scientific and historical contexts.\n\nKey evidence from opposing sources:\n\n[2] Fact - Wikipedi…
```

**Step 4 — Asking a peer to review the draft**
```
{"peer":{"url":"http://127.0.0.1:7471","name":"primary (self)","model":"qwen2.5:3b"},"elapsedMs":7201,"verdict":"bad","issues":["Answer does not address the claim about Hantavirus; it discusses the word 'fact' instead of the virus. The evidence cited is unrelated and irrelevant. The answer fails to provide any supporting or opp"],"revised_answer":"","confidence":0.99,"reviewer":{"name":"primary","model":"qwen2.5:3b"}}
```

---
_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._

<details><summary>Log</summary>

```
[2026-06-01T13:55:15.330Z] Replaying a saved plan — 4 steps.
[2026-06-01T13:55:15.342Z] Step 1 of 4: Researching "Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus" — vault + web
[2026-06-01T13:55:45.798Z] Running 3 sub-agents in parallel (1 I/O + 2 thinking).
[2026-06-01T13:55:45.798Z] Step 3 of 4: Security-scanning the note
[2026-06-01T13:55:45.798Z] Step 2 of 4: Quality-checking the draft
[2026-06-01T13:55:45.799Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T13:55:53.653Z] Wave 2 finished in 7.9s.
[2026-06-01T13:55:53.653Z] All sub-agents finished in 38.3s.
[2026-06-01T13:55:53.659Z] Thinking with openai/gpt-oss-20b:free (~3 512 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-01T13:55:55.072Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
```
</details>
