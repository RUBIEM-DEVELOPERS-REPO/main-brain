---
type: job
title: Team task #5: List the 5 clauses you check first in a SaaS MSA and describ
slug: team-task-5-list-the-5-clauses-you-check-first-in-a-saas-msa-656621cc
created: 2026-05-28T13:36:57.178Z
jobId: 656621cc-7d24-46db-9c1c-7a692969f10f
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T13:35:19.187Z
finishedAt: 2026-05-28T13:36:57.178Z
---

# Team task #5: List the 5 clauses you check first in a SaaS MSA and describ

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:35:19.187Z
- **Finished:** 2026-05-28T13:36:57.178Z
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
1. ✓ Researching "List the 5 clauses you check first in a SaaS MSA and describe what a red flag lo…" — vault + web — `research.deep` (47.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (18.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**This is a contracts‑reading aid, not legal advice — have licensed counsel review before you sign.**

## 1. Basic Commercial Terms  
**Red flag:** Unilateral price increases or vague fee structures.  
- The vendor can raise fees without a cap or required notice.  
- Fees are lumped together (e.g., “implementation fees”) without a clear schedule or start date.  
- The description of the SaaS solution is generic and does not list the specific features or functionality you negotiated.  
[1]

## 2. Termination Rights  
**Red flag:** Imbalanced convenience or cure periods.  
- The vendor retains a right to terminate for convenience while the customer does not, or the customer’s convenience right is delayed until after the vendor recoups all implementation costs (often > 2 years).  
- No standard termination triggers such as material breach or bankruptcy.  
[1]

## 3. Data Privacy & Security  
**Red flag:** Lack of data‑privacy compliance or broad data usage rights.  
- The agreement does not require the vendor to comply with applicable data‑privacy laws (GDPR, CCPA, etc.).  
- No explicit security standards or breach‑notification obligations are set.  
- The vendor is granted a broad, perpetual license to use the customer’s data beyond “internal use during the term.”  
[1]

## 4. Service‑Level Agreements (SLAs)  
**Red flag:** Absence of measurable performance metrics or remedies.  
- No uptime, response‑time, or resolution‑time metrics are defined.  
- Remedies for SLA breaches are vague or nonexistent.  
[1]

## 5. Indemnification / Liability  
**Red flag:** One‑sided indemnity or capped liability.  
- The vendor requires the customer to indemnify for all claims, including those arising from the vendor’s negligence.  
- Liability caps are set at a low amount or are tied to the customer’s purchase price, limiting the vendor’s exposure.  
[1]

**This is a contracts‑reading aid, not legal advice — have licensed counsel review before you sign.**

<details><summary>Log</summary>

```
[2026-05-28T13:35:19.187Z] team-task #5 · persona=contracts-reviewer · route=explicit
[2026-05-28T13:35:19.188Z] **Logan** (Contracts Reviewer) is on this team-task.
[2026-05-28T13:35:19.331Z] Thinking about the best approach…
[2026-05-28T13:35:19.503Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:35:21.822Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:35:21.822Z] Plan ready: 1 step — Default research plan for: List the 5 clauses you check first in a SaaS MSA and describe what a red flag looks like in each one.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND.
[2026-05-28T13:35:24.934Z] Step 1 of 1: Researching "List the 5 clauses you check first in a SaaS MSA and describe what a red flag lo…" — vault + web
[2026-05-28T13:36:12.824Z] All sub-agents finished in 47.9s.
[2026-05-28T13:36:12.832Z] Thinking with openai/gpt-oss-20b:free (~3 207 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:36:38.612Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:36:38.614Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:36:38.614Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:36:38.614Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:36:38.614Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:36:40.031Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:36:57.178Z] Wave 1 finished in 18.6s.
[2026-05-28T13:36:57.178Z] All sub-agents finished in 18.6s.
[2026-05-28T13:36:57.178Z] Quality check passed (83%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
