---
type: job
title: Fact-check a claim
slug: fact-check-a-claim-357ce818
created: 2026-05-29T19:03:32.591Z
jobId: 357ce818-ebca-4a41-9e2c-1d54a34e98e2
status: succeeded
template: custom-researcher-fact-check-a-claim
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:02:48.618Z
finishedAt: 2026-05-29T19:03:32.591Z
---

# Fact-check a claim

- **Status:** succeeded
- **Template:** custom-researcher-fact-check-a-claim
- **Started:** 2026-05-29T19:02:48.618Z
- **Finished:** 2026-05-29T19:03:32.591Z
- **Title:** Fact-check a claim

## Plan
Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the

### Steps
1. ✓ Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web — `research.deep` (25.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Fact‑check Report – Claim Not Provided**

The user’s request specifies a claim to be fact‑checked, yet no explicit statement was supplied in the message. Without the exact claim, I cannot formulate search queries, retrieve supporting or opposing sources, or produce a verdict.

**What I Found**
- No claim text in the user’s message.
- No relevant evidence in the vault or web search results that identifies a specific claim to evaluate.

**Next Steps Needed**
1. Provide the precise claim you wish to fact‑check (e.g., “Company X will release product Y by Q3 2026.”).
2. Indicate any particular context or source you want considered (e.g., company press release, industry report).
3. Specify the desired format for the final report (e.g., markdown, email, memo).

Once the claim is supplied, I will run the required parallel web searches, gather evidence, and deliver a verdict with citations.

<details><summary>Log</summary>

```
[2026-05-29T19:02:48.628Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:02:48.631Z] Thinking about the best approach…
[2026-05-29T19:02:48.675Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:02:49.712Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:02:49.712Z] Plan ready: 1 step — Default research plan for: Fact-check the following claim against the live web. Run TWO parallel web searches: one for supporting evidence (the claim phrased as fact), one for opposing evidence (the claim negated or with words like 'debunk', 'false', 'no evidence'). Fetch top sources from both. Report: VERDICT (supported / partially supported / contested / unsupported), key evidence with [N] citations on both sides, and the.
[2026-05-29T19:02:49.716Z] Step 1 of 1: Researching "Fact-check the following claim against the live web. Run TWO parallel web search…" — vault + web
[2026-05-29T19:03:15.221Z] All sub-agents finished in 25.5s.
[2026-05-29T19:03:15.238Z] Thinking with openai/gpt-oss-20b:free (~3 952 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T19:03:25.516Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:03:25.521Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:03:25.521Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:03:25.521Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:03:32.254Z] Wave 1 finished in 6.7s.
[2026-05-29T19:03:32.254Z] All sub-agents finished in 6.7s.
[2026-05-29T19:03:32.254Z] Quality check passed (94%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T19:03:32.254Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:03:32.591Z] Vault commit: done.
```
</details>
