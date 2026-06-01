---
type: job
title: Ask Logan anything
slug: ask-logan-anything-bcde2482
created: 2026-06-01T09:43:23.239Z
jobId: bcde2482-2493-4e84-8674-08ae20760b2c
status: succeeded
template: custom-contracts-reviewer-ask-anything
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:40:23.350Z
finishedAt: 2026-06-01T09:43:23.239Z
---

# Ask Logan anything

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-ask-anything
- **Started:** 2026-06-01T09:40:23.350Z
- **Finished:** 2026-06-01T09:43:23.239Z
- **Title:** Ask Logan anything

## Plan
Conduct deep research on contract review best practices and capture findings.

### Steps
1. ✓ Researching "contract review best practices for contracts reviewer role" — vault + web — `research.deep` (50.6s)
2. ✓ Quality-checking the draft — `quality.check` (29.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (16.6s)
    > auto-injected: quality score=0.61 (pass=false) — peer review for a second opinion

## Answer
# Contract‑Reviewer Action Plan – Generic Template

**⚠ This is a reading aid, not legal advice. Have a lawyer review anything material.**

## 1. Initial Preparation
- Verify the identities and signing authority of all parties (e.g., board resolutions, corporate sign‑off limits) [1].
- Gather background information: business purpose, prior negotiations, regulatory constraints [1].

## 2. Structural Check
- Confirm the agreement contains the three essential elements: **offer**, **acceptance**, and **consideration** (or a valid promissory‑estoppel claim) [1].
- Ensure the contract’s subject matter is lawful and does not violate public policy [1].

## 3. Clause‑by‑Clause Review
| Clause | Key Items to Verify |
|--------|----------------------|
| **Definitions** | Clear, unambiguous definitions for all critical terms. |
| **Scope of Work / Deliverables** | Precise description, timelines, acceptance criteria, and any milestones. |
| **Payment & Consideration** | Amounts, schedule, invoicing procedures, contingencies, and penalties for late payment. |
| **Termination & Remedies** | Trigger events, notice periods, liquidated damages, indemnities, and post‑termination obligations. |
| **Confidentiality / IP** | Ownership of IP, licensing rights, confidentiality scope, and duration. |
| **Dispute Resolution** | Governing law, jurisdiction, arbitration/mediation mechanisms, and escalation steps. |
| **Force Majeure & Change‑of‑Law** | Defined events, notice requirements, and allocation of risk. |

## 4. Compliance & Formalities
- Check statutory requirements (e.g., Statute of Frauds, electronic‑signature rules).  
- Ensure all required signatures, dates, and execution formalities are present.

## 5. Risk Identification & Mitigation
- Highlight any unusually broad or one‑sided clauses (e.g., unlimited liability, non‑compete durations).  
- Propose alternative language or protective addenda where risk is excessive.

## 6. Deliverables to Stakeholders
- A concise red‑line version of the contract with comments attached to each flagged clause.  
- A summary memo outlining major risks, recommended actions, and required approvals.

---

*Assumed: the user needed a generic, actionable review framework because no specific contract was provided.*

<details><summary>Log</summary>

```
[2026-06-01T09:40:23.358Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:40:24.362Z] Thinking about the best approach…
[2026-06-01T09:40:24.404Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-01T09:40:28.411Z] Plan ready: 1 step — Conduct deep research on contract review best practices and capture findings..
[2026-06-01T09:40:28.415Z] Step 1 of 1: Researching "contract review best practices for contracts reviewer role" — vault + web
[2026-06-01T09:41:18.970Z] All sub-agents finished in 50.6s.
[2026-06-01T09:41:18.971Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:41:18.982Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:41:18.982Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:41:18.982Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:41:48.329Z] Wave 1 finished in 29.3s.
[2026-06-01T09:41:48.329Z] All sub-agents finished in 29.3s.
[2026-06-01T09:41:48.333Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:42:04.949Z] All sub-agents finished in 16.6s.
[2026-06-01T09:42:04.955Z] quality.check failed (score=0.61, issues: Low citation coverage – only one source cited for many claims; citation_coverage adjusted from 0.10 to 0.36 (found 3 citation markers in 25 substantive sentences)) — re-synthesising with the large model
[2026-06-01T09:42:04.960Z] Thinking with openai/gpt-oss-120b:free (~3 568 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:42:57.811Z] quality rescue improved score: 0.61 → 0.85; using the rescued draft
[2026-06-01T09:42:57.811Z] peer review verdict=needs-work (Unclear if answer addresses a specific contract or task; generic best‑practice guide may not satisfy the prompt; referen) — retrying with reviewer's issues as guidance before returning to user
[2026-06-01T09:42:57.822Z] Thinking with openai/gpt-oss-120b:free (~4 502 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-06-01T09:43:22.869Z] retry cleared peer review (verdict=good, confidence=0.98); using retry as final answer
[2026-06-01T09:43:22.869Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:43:23.239Z] Vault commit: done.
```
</details>
