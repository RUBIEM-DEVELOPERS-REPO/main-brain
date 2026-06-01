---
type: job
title: Always remind the customer this is not legal advice — counsel reviews before …
slug: always-remind-the-customer-this-is-not-legal-advice-counsel--7daa0723
created: 2026-06-01T09:45:12.398Z
jobId: 7daa0723-5299-4975-9dc2-911cdb49068b
status: succeeded
template: custom-contracts-reviewer-always-remind-the-customer-this-is-not-l
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:39:53.089Z
finishedAt: 2026-06-01T09:45:12.398Z
---

# Always remind the customer this is not legal advice — counsel reviews before …

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-always-remind-the-customer-this-is-not-l
- **Started:** 2026-06-01T09:39:53.089Z
- **Finished:** 2026-06-01T09:45:12.398Z
- **Title:** Always remind the customer this is not legal advice — counsel reviews before …

## Plan
Default research plan for: As a Contracts Reviewer, always remind the customer this is not legal advice — counsel reviews before signing

### Steps
1. ✓ Researching "As a Contracts Reviewer, always remind the customer this is not legal advice — c…" — vault + web — `research.deep` (38.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (1.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (6.2s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Contracts Review – Disclaimer Notice  

**Reminder (always include this first)**  
*The information below is for general informational purposes only and does **not** constitute legal advice. Before signing any contract, you should have the document reviewed by qualified legal counsel.*【vault:0‑Inbox/202605291431-research-as-a-contracts-reviewer-always-remind-the-customer-this-is-n.md】

---

### Why the Reminder Is Required  
- A Contracts Reviewer’s role is to flag potential issues, not to render binding legal opinions.  
- Only a licensed attorney can assess enforceability, interpret jurisdiction‑specific statutes, and advise on risk mitigation.  

### Suggested Wording for the Disclaimer  
> “Please note that the comments I’m providing are for informational purposes only and do not constitute legal advice. You should have this contract reviewed by your own legal counsel before signing.”  

### Quick Checklist for Reviewers  

| Step | Action |
|------|--------|
| **1. Identify** | Highlight clauses that may pose legal risk. |
| **2. Document** | Add neutral comments describing observations. |
| **3. Insert Disclaimer** | Place the above disclaimer at the top of your feedback. |
| **4. Recommend** | Advise the client to seek formal legal counsel for final approval. |

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-06-01T09:39:53.097Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:39:54.157Z] Thinking about the best approach…
[2026-06-01T09:39:54.214Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:39:55.547Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-06-01T09:39:55.547Z] Plan ready: 1 step — Default research plan for: As a Contracts Reviewer, always remind the customer this is not legal advice — counsel reviews before signing.
[2026-06-01T09:39:55.551Z] Step 1 of 1: Researching "As a Contracts Reviewer, always remind the customer this is not legal advice — c…" — vault + web
[2026-06-01T09:40:33.814Z] All sub-agents finished in 38.3s.
[2026-06-01T09:40:33.815Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:40:33.820Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:40:33.820Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:40:33.820Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:40:35.625Z] Wave 1 finished in 1.8s.
[2026-06-01T09:40:35.625Z] All sub-agents finished in 1.8s.
[2026-06-01T09:40:35.628Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:40:36.608Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-06-01T09:40:41.795Z] All sub-agents finished in 6.2s.
[2026-06-01T09:40:41.802Z] quality.check failed (score=0, issues: scorer failed: OpenRouter 503: {"error":{"message":"Provider returned error","code":503,"metadata":{"raw":"{\"error\":{\"message\":\"No backends available\",\"type\":\"capacit) — re-synthesising with the large model
[2026-06-01T09:40:41.811Z] Thinking with openai/gpt-oss-120b:free (~3 594 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:45:12.035Z] quality rescue improved score: 0 → 0.76; using the rescued draft
[2026-06-01T09:45:12.035Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:45:12.398Z] Vault commit: done.
```
</details>
