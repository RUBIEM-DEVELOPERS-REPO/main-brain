---
type: job
title: Compare proposed terms against industry-typical positions
slug: compare-proposed-terms-against-industry-typical-positions-8f11298a
created: 2026-06-01T09:40:43.224Z
jobId: 8f11298a-0778-403d-bb0e-56594b77d9fb
status: succeeded
template: custom-contracts-reviewer-compare-proposed-terms-against-industry-
persona: clawbot
personaName: Clawbot
startedAt: 2026-06-01T09:39:05.330Z
finishedAt: 2026-06-01T09:40:43.224Z
---

# Compare proposed terms against industry-typical positions

- **Status:** succeeded
- **Template:** custom-contracts-reviewer-compare-proposed-terms-against-industry-
- **Started:** 2026-06-01T09:39:05.330Z
- **Finished:** 2026-06-01T09:40:43.224Z
- **Title:** Compare proposed terms against industry-typical positions

## Plan
Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions

### Steps
1. ✓ Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web — `research.deep` (83.4s)
    > research signal detected ("industry-typical") — fetching external sources before synth so the persona answer is grounded, not memory-only
2. ✓ Quality-checking the draft — `quality.check` (9.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.1s)
    > auto-injected: quality score=0.73 (pass=true) — peer review for a second opinion

## Answer
**How a Contracts Reviewer Can Benchmark Proposed Language Against Industry‑Typical Positions**

| Contract Area | What Most Companies Expect (Industry‑Typical Position) | How to Spot Deviations in a Draft | Quick Review Tips |
|---------------|--------------------------------------------------------|-----------------------------------|-------------------|
| **Scope of Work / Deliverables** | • Clear, measurable deliverables<br>• Milestones tied to payment dates<br>• Acceptance criteria defined in writing | • Vague “as‑needed” language or “reasonable effort” wording<br>• No explicit acceptance test | ✔ Check that each deliverable has a description, due date, and acceptance sign‑off clause (see common clause list in [1] “Common Clauses in Contracts”). |
| **Payment Terms** | • Net 30 – Net 60 days after invoice<br>• Milestone‑based payments for larger projects<br>• Late‑payment interest (often 1‑1.5 % per month) | • “Pay upon receipt” for large sums, or unusually long payment windows (> 90 days) | ✔ Confirm payment schedule aligns with cash‑flow norms for the industry; flag any “pay‑upon‑completion” that shifts all risk to the seller. |
| **Limitation of Liability** | • Liability capped at the contract value or a multiple (e.g., 2× fees)<br>• Exclusions for indirect, consequential damages | • Unlimited liability or caps that are far below market (e.g., 0.5× fees) | ✔ Compare the cap to the typical 1‑2× range; ensure the clause does not waive liability for gross negligence or willful misconduct (often non‑negotiable). |
| **Indemnification** | • One‑way indemnity: Supplier indemnifies buyer for third‑party IP infringement, bodily injury, or property damage caused by supplier’s work<br>• Mutual indemnity only for breach of confidentiality or data security | • Broad “mutual” indemnity covering all claims, or no indemnity at all | ✔ Look for a narrow, purpose‑specific indemnity; flag any language that forces the buyer to indemnify the supplier for the supplier’s own negligence. |
| **Force‑Majeure** | • Standard list (acts of God, war, terrorism, labor disputes, pandemic)<br>• Allows temporary suspension, not termination, unless event exceeds 30‑60 days | • Overly narrow list (e.g., only “earthquake”) or a clause that lets either party terminate immediately | ✔ Verify the event list matches the typical “unforeseeable events” set out in [1] and that the cure period is reasonable. |
| **Termination** | • Either party may terminate for material breach with 30‑day cure period<br>• Convenience termination (buyer only) with 60‑day notice, often with a termination fee | • No cure period, or buyer‑only termination without compensation | ✔ Check for a balanced right to terminate and any associated fees; ensure the notice period is not unusually short. |
| **Confidentiality / NDAs** | • 2‑year term for confidential information (unless trade secret)<br>• Standard carve‑outs (public domain, already known) | • Lifetime confidentiality for all data, or no carve‑outs | ✔ Confirm the confidentiality term aligns with the 2‑year norm and that the definition of “Confidential Information” is not overly broad. |
| **Governing Law & Dispute Resolution** | • Governing law of the buyer’s principal place of business (or neutral jurisdiction)<br>• Arbitration (e.g., ICC, AAA) for disputes over $250 k, otherwise court | • Choice of law that heavily favors the supplier’s home state, or mandatory litigation in a distant forum | ✔ Make sure the jurisdiction and arbitration rules are standard for the industry; flag any “forum‑selection” that imposes undue burden. |
| **Intellectual Property** | • Supplier grants a perpetual, royalty‑free, worldwide license to use deliverables<br>• Buyer retains ownership of pre‑existing IP; supplier retains background IP | • Supplier retains ownership of all deliverables, or requires royalty payments | ✔ Check that IP ownership aligns with the “work‑for‑hire” norm for services contracts. |
| **Data Protection / Privacy** | • Compliance with GDPR/CCPA where applicable<br>• Data breach notification within 72 hours | • No mention of data‑privacy obligations, or breach notice periods > 30 days | ✔ Add a clause referencing the relevant privacy statutes; use the template language from standard data‑protection clauses. |

### How to Use This Checklist

1. **Map each clause in the draft to the table** – note where the language matches, is more restrictive, or is missing.  
2. **Score deviations** – e.g., “high risk” for unlimited liability, “moderate risk” for a longer payment term, “low risk” for a slightly different cure period.  
3. **Document the industry baseline** – cite the relevant source (e.g., “Standard force‑majeure language as shown in LegalTerms.net [1]”).  
4. **Recommend revisions** – propose language that brings the draft back into the 1‑2× liability cap range, adds a 30‑day cure period, etc.  

> **Note:** The vault only contains the titles of the research notes (e.g., `0‑Inbox/202605291941‑research‑as‑a‑contracts‑reviewer‑compare‑proposed‑terms‑against‑industry‑typical‑positions.md`). Since the full content is not available, the above framework relies on publicly documented contract norms (see web source [1]) and standard industry practice. If you need a deeper dive into a specific clause, let me know and I can pull the relevant vault note for more detail.

<details><summary>Log</summary>

```
[2026-06-01T09:39:05.338Z] Working as Clawbot — AI agent operator.
[2026-06-01T09:39:06.024Z] Recognised the shape — Tier 3 — the web, 1 step.
[2026-06-01T09:39:06.024Z] Plan ready: 1 step — Research: As a Contracts Reviewer, compare proposed terms against industry-typical positions.
[2026-06-01T09:39:06.028Z] Step 1 of 1: Researching "As a Contracts Reviewer, compare proposed terms against industry-typical positio…" — vault + web
[2026-06-01T09:40:29.442Z] All sub-agents finished in 83.4s.
[2026-06-01T09:40:29.442Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-01T09:40:29.445Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-01T09:40:29.445Z] Step 3 of 3: Security-scanning the note
[2026-06-01T09:40:29.445Z] Step 2 of 3: Quality-checking the draft
[2026-06-01T09:40:38.479Z] Wave 1 finished in 9.0s.
[2026-06-01T09:40:38.479Z] All sub-agents finished in 9.0s.
[2026-06-01T09:40:38.484Z] Step 4 of 4: Asking a peer to review the draft
[2026-06-01T09:40:42.608Z] All sub-agents finished in 4.1s.
[2026-06-01T09:40:42.608Z] Wrote to your second brain — committing the changes.
[2026-06-01T09:40:43.224Z] Vault commit: done.
```
</details>
