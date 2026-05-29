---
type: job
title: Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.  Topic: what is the hanta virus
slug: default-research-plan-for-fact-check-the-following-claim-aga-21e35f70
created: 2026-05-29T20:42:53.388Z
jobId: 21e35f70-4128-461e-8396-d51f1ed74f2a
status: succeeded
template: custom-fact-check-the-following-claim-against-the-live-web-run-two-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:42:04.013Z
finishedAt: 2026-05-29T20:42:53.388Z
---

# Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus

- **Status:** succeeded
- **Template:** custom-fact-check-the-following-claim-against-the-live-web-run-two-
- **Started:** 2026-05-29T20:42:04.013Z
- **Finished:** 2026-05-29T20:42:53.388Z
- **Title:** Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.\n\nTopic: what is the hanta virus\nDescription: Saved from chat: \"Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.\n\nTopic: what is the hanta virus?\""
}
```

## Plan
Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus

### Steps
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus" — vault + web — `research.deep` (40.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.5s)
    > auto-injected: score factuality, citation coverage, persona fit
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.6s)
    > auto-injected: peer-review the draft

## Answer
## Partial result

The synthesis step didn't complete cleanly, so here is the raw evidence we gathered for: **what is the hanta virus?

Context: Role: Custom
Title: Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the c**

### What worked

**Step 1 — Researching "Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus" — vault + web**
**VERDICT:** *Unsupported – no reliable web evidence found to confirm or refute the claim.*

**Why the verdict is “unsupported”**

- The only web pages supplied are a Cambridge Dictionary entry for the word *fact* and a commercial invoicing site (Fact.pt). Neither source discusses the Hantavirus at all, let alone provides information that could support or contradict a definition of the virus.  
- No other web results were retrieved in the parallel searches (supporting vs. opposing) because the tool did not return any pages that mention “Hanta virus” or “Hantavirus.”  
- Without any external references that actually describe the virus—its taxonomy, transmission, disease manifestations, or epidemiology—we cannot evaluate the claim.

**What would be needed for a proper fact‑check**

1. **Supp

**Step 2 — Quality-checking the draft**
```
{"pass":false,"factuality_risk":1,"citation_coverage":1,"persona_fit":0,"score":0.3,"issues":["Answer does not address the requested topic (Hantavirus) and instead discusses the word 'fact'; citations are irrelevant to the claim; overall content is incorrect and misleading"],"deliverableClass":"research","citationCounts":{"numbered":2,"vault":0,"url":2,"total":4,"substantiveSentences":6,"sourcesProvided":false}}
```

**Step 3 — Security-scanning the note**
```
{"pass":true,"findings":[],"redacted":"VERDICT: Contested\n\nKey evidence from supporting sources:\n\n[1] Fact | English meaning - Cambridge Dictionary\nhttps://dictionary.cambridge.org/dictionary/english/fact\nThe term \"fact\" in this source is defined as something that has really occurred or is the case, dating back to mid-16th century. This definition aligns with how facts are presented in other scientific and historical contexts.\n\nKey evidence from opposing sources:\n\n[2] Fact - Wikipedi…
```

**Step 4 — Asking a peer to review the draft**
```
{"peer":{"url":"http://127.0.0.1:7471","name":"primary (self)","model":"qwen2.5:3b"},"elapsedMs":4045,"verdict":"bad","issues":["Answer does not address the claim about hantavirus; it discusses the word 'fact' instead of hantavirus information.","The content is irrelevant and contains no factual statements about hantavirus.","No citations or evidence related to hantavirus are provided."],"revised_answer":"","confidence":0.99,"reviewer":{"name":"primary","model":"qwen2.5:3b"}}
```

---
_Auto-generated rescue summary. Try the task again — the next attempt may have the model available._

<details><summary>Log</summary>

```
[2026-05-29T20:42:04.026Z] Replaying a saved plan — 4 steps.
[2026-05-29T20:42:04.032Z] Step 1 of 4: Researching "Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the strongest counter-argument you found.

Topic: what is the hanta virus" — vault + web
[2026-05-29T20:42:44.290Z] Running 3 sub-agents in parallel (1 I/O + 2 thinking).
[2026-05-29T20:42:44.290Z] Step 3 of 4: Security-scanning the note
[2026-05-29T20:42:44.290Z] Step 2 of 4: Quality-checking the draft
[2026-05-29T20:42:44.290Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:42:45.366Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:42:50.915Z] Wave 2 finished in 6.6s.
[2026-05-29T20:42:50.915Z] All sub-agents finished in 46.9s.
[2026-05-29T20:42:50.930Z] Thinking with openai/gpt-oss-20b:free (~4 513 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
