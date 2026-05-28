---
type: job
title: Team task #5: List the 5 clauses you check first in a SaaS MSA and describ
slug: team-task-5-list-the-5-clauses-you-check-first-in-a-saas-msa-b386bdbc
created: 2026-05-28T13:27:36.687Z
jobId: b386bdbc-dca9-43ae-a38e-fea9c6c919f5
status: succeeded
template: general-task
persona: none
personaName: 
startedAt: 2026-05-28T13:26:08.879Z
finishedAt: 2026-05-28T13:27:36.687Z
---

# Team task #5: List the 5 clauses you check first in a SaaS MSA and describ

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:26:08.879Z
- **Finished:** 2026-05-28T13:27:36.687Z
- **Title:** Team task #5: List the 5 clauses you check first in a SaaS MSA and describ

## Inputs
```json
{
  "task": "(You are operating as Logan, the Contracts Reviewer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nList the 5 clauses you check first in a SaaS MSA and describe what a red flag looks like in each one.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "List the 5 clauses you check first in a SaaS MSA and describe what a red flag looks like in each one.",
  "teamTask": {
    "taskIndex": 4,
    "persona": "contracts-reviewer",
    "route": "explicit"
  },
  "personaId": "contracts-reviewer"
}
```

## Plan
Default research plan for: List the 5 clauses you check first in a SaaS MSA and describe what a red flag looks like in each one.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND

### Steps
1. ✓ Researching "List the 5 clauses you check first in a SaaS MSA and describe what a red flag lo…" — vault + web — `research.deep` (29.1s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✗ Quality-checking the draft — `quality.check` (12.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
    error: OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is temporarily rate-limited upstream. Please retry shortly, or add your own key to accumulate your rate limits: https://openrouter.ai/settings/integrations","provider_name":"OpenInference","is_byok":false}},"user_id":"user_3Dz0CCAgvtUvEL8gBX5I1Qas5x7"}
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (11.7s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
**This is a contracts‑reading aid, not legal advice — have licensed counsel review before you sign.**

## 5 Clauses to Inspect First in a SaaS MSA

| # | Clause | Typical Red‑Flag Example | Why It Matters |
|---|--------|--------------------------|----------------|
| 1 | **Scope of Service / Features** | The clause lists “services” but does not specify which modules or APIs are included, or it uses vague terms like “as‑needed” without a schedule. | Ambiguity can let the vendor add or remove features without notice, affecting your ability to meet business requirements. |
| 2 | **Service Level Agreement (SLA)** | The SLA promises 99.9 % uptime but does not define “downtime,” excludes “planned maintenance,” or ties uptime to a single data center. | Without clear definitions, you may not be able to claim credits or enforce remedies if the vendor fails to meet the promised availability. |
| 3 | **Data Security & Privacy** | The clause requires the vendor to “implement reasonable security measures” but provides no list of controls, audit rights, or data residency requirements. | Vague security language can leave you exposed to data breaches and may conflict with regulatory obligations (e.g., GDPR, CCPA). |
| 4 | **Termination & Exit Strategy** | Termination is only for “material breach” and the vendor can terminate with 30‑day notice for “any reason.” No data return or migration assistance is described. | You could lose access to data or be forced to pay for continued service after you stop using the platform. |
| 5 | **Indemnification & Liability Caps** | The vendor indemnifies you for all claims but caps its liability at a nominal amount (e.g., $10,000) and excludes indirect damages. | A low cap and exclusion of indirect damages can leave you responsible for significant losses if the vendor’s negligence causes harm. |

---

**This is a contracts‑reading aid, not legal advice — have licensed counsel review before you sign.**

<details><summary>Log</summary>

```
[2026-05-28T13:26:08.879Z] team-task #5 · persona=contracts-reviewer · route=explicit
[2026-05-28T13:26:08.879Z] **Logan** (Contracts Reviewer) is on this team-task.
[2026-05-28T13:26:08.978Z] Thinking about the best approach…
[2026-05-28T13:26:09.109Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:26:15.334Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:26:15.334Z] Plan ready: 1 step — Default research plan for: List the 5 clauses you check first in a SaaS MSA and describe what a red flag looks like in each one.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND.
[2026-05-28T13:26:15.348Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:26:15.348Z] Step 1 of 1: Researching "List the 5 clauses you check first in a SaaS MSA and describe what a red flag lo…" — vault + web
[2026-05-28T13:26:44.449Z] All sub-agents finished in 29.1s.
[2026-05-28T13:26:44.454Z] Thinking with openai/gpt-oss-20b:free (~2 860 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:26:45.706Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T13:27:12.062Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-28T13:27:12.063Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:27:12.066Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:27:12.066Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:27:12.066Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:27:12.066Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:27:13.094Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:27:16.431Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:27:24.964Z]   ✗ Quality-checking the draft: OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is temporarily rate-limited upstream. Please retry shortly, or add your own key to a
[2026-05-28T13:27:24.964Z] Wave 1 finished in 12.9s — 1 of 2 sub-agents succeeded (1 failed; partial results kept).
[2026-05-28T13:27:24.964Z] All sub-agents finished in 12.9s.
[2026-05-28T13:27:24.966Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:27:24.966Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-28T13:27:26.480Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-28T13:27:28.981Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-28T13:27:36.687Z] All sub-agents finished in 11.7s.
```
</details>
