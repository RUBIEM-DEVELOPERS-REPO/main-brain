---
type: job
title: Renewal preparation memo
slug: renewal-preparation-memo-0636f135
created: 2026-05-29T09:23:51.085Z
jobId: 0636f135-247d-47f9-aab8-81e8a5139c93
status: succeeded
template: custom-customer-success-renewal-preparation-memo
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:21:49.645Z
finishedAt: 2026-05-29T09:23:51.085Z
---

# Renewal preparation memo

- **Status:** succeeded
- **Template:** custom-customer-success-renewal-preparation-memo
- **Started:** 2026-05-29T09:21:49.645Z
- **Finished:** 2026-05-29T09:23:51.085Z
- **Title:** Renewal preparation memo

## Plan
Default research plan for: renewal memo for the following account. Output sections: 1) Wins this term (with specific outcomes the customer would recognise). 2) Issues (open + resolved, with how they were handled). 3) Expansion path (what they'd benefit from next, with the trigger that would justify it). 4) Risks (what could push them to not renew). 5) Recommended renewal motion (timing, ask, fallback)

### Steps
1. ✓ Researching "renewal memo for the following account. Output sections: 1) Wins this term (with…" — vault + web — `research.deep` (16.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.2s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.8s)
    > auto-injected: quality score=0.63 (pass=false) — peer review for a second opinion

## Answer
**To:** Customer Success Leadership  
**From:** Clawbot – Customer Success Analyst  
**Date:** 2026‑05‑29  
**Re:** Renewal Memo – Account X (placeholder)

I reviewed the available vault and web sources for the requested renewal memo. The vault contains only template files for renewal memos, and the web search returned unrelated e‑commerce pages. No customer‑specific data (wins, issues, expansion opportunities, or risk factors) were found.

To create a complete, evidence‑based renewal memo, I would need:

1. **Account usage metrics** for the current term (e.g., active users, feature adoption, support tickets).  
2. **Outcome statements** that the customer has recognized (e.g., cost savings, productivity gains).  
3. **List of open and resolved issues** with dates and resolution details.  
4. **Potential expansion areas** the customer has expressed interest in, plus any trigger events.  
5. **Risk indicators** (e.g., churn signals, competitor activity, budget constraints).

Once provided, I can populate the memo sections: Wins, Issues, Expansion Path, Risks, and Recommended Renewal Motion.

<details><summary>Log</summary>

```
[2026-05-29T09:21:49.658Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:21:49.678Z] Thinking about the best approach…
[2026-05-29T09:21:49.742Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:21:57.232Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:21:57.233Z] Plan ready: 1 step — Default research plan for: renewal memo for the following account. Output sections: 1) Wins this term (with specific outcomes the customer would recognise). 2) Issues (open + resolved, with how they were handled). 3) Expansion path (what they'd benefit from next, with the trigger that would justify it). 4) Risks (what could push them to not renew). 5) Recommended renewal motion (timing, ask, fallback).
[2026-05-29T09:21:57.236Z] Step 1 of 1: Researching "renewal memo for the following account. Output sections: 1) Wins this term (with…" — vault + web
[2026-05-29T09:22:13.980Z] All sub-agents finished in 16.7s.
[2026-05-29T09:22:13.995Z] Thinking with openai/gpt-oss-20b:free (~3 484 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T09:22:21.951Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:22:21.954Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:22:21.954Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:22:21.954Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:22:28.145Z] Wave 1 finished in 6.2s.
[2026-05-29T09:22:28.145Z] All sub-agents finished in 6.2s.
[2026-05-29T09:22:28.183Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:22:32.018Z] All sub-agents finished in 3.8s.
[2026-05-29T09:22:32.023Z] quality.check failed (score=0.63, issues: low persona fit – does not provide requested memo content; citation coverage moderate – only one generic source cited) — re-synthesising with the large model
[2026-05-29T09:22:32.037Z] Thinking with openai/gpt-oss-120b:free (~4 024 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:23:03.595Z] quality rescue produced score 0.56 (not better than 0.63); keeping the original
[2026-05-29T09:23:03.595Z] peer review verdict=bad (Does not provide a renewal memo as requested; Fails to address the required sections) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:23:03.606Z] Thinking with openai/gpt-oss-120b:free (~4 169 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:23:50.791Z] retry verdict=needs-work and quality not improved (0.51 ≤ 0.63); keeping the rescued/original draft
[2026-05-29T09:23:50.791Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:23:51.085Z] Vault commit: done.
```
</details>
