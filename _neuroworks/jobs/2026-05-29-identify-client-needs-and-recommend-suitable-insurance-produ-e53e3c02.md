---
type: job
title: Identify client needs and recommend suitable insurance products.
slug: identify-client-needs-and-recommend-suitable-insurance-produ-e53e3c02
created: 2026-05-29T18:41:36.722Z
jobId: e53e3c02-ab55-4e43-87df-fe86e5124488
status: succeeded
template: custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T18:38:36.268Z
finishedAt: 2026-05-29T18:41:36.722Z
---

# Identify client needs and recommend suitable insurance products.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
- **Started:** 2026-05-29T18:38:36.268Z
- **Finished:** 2026-05-29T18:41:36.722Z
- **Title:** Identify client needs and recommend suitable insurance products.

## Plan
Default research plan for: As a Insurance Sales Agent, identify client needs and recommend suitable insurance products

### Steps
1. ✓ Researching "As a Insurance Sales Agent, identify client needs and recommend suitable insuran…" — vault + web — `research.deep` (69.6s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (16.4s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion

## Answer
## Client‑Needs Assessment & Product Recommendations  

1. **Gather a Complete Profile** – Collect demographic data (age, marital status, dependents), occupation, income, assets, debts, health status, and lifestyle factors such as hobbies or travel. Record any existing policies (auto, home, employer‑provided health). This baseline reveals coverage gaps and overlaps [1].  

2. **Clarify Goals & Concerns** – Ask the client what they are protecting (family’s future, business continuity, property) and what keeps them up at night (medical bills, loss of income, liability). Aligning insurance to personal priorities prevents “check‑the‑box” solutions [1].  

3. **Conduct a Risk‑Assessment** – Quantify potential financial loss for each identified risk (e.g., mortgage balance, college tuition, lost wages). Use simple calculators or worksheets to translate risk into concrete coverage amounts, guiding policy limits and deductibles [1].  

4. **Prioritize Needs** – Rank risks by likelihood and impact. Typical hierarchy:  
   1️⃣ Life & Income Protection  
   2️⃣ Health & Disability  
   3️⃣ Property (home, auto)  
   4️⃣ Liability (personal, professional)  
   5️⃣ Specialty (travel, pet, identity‑theft) [1].  

5. **Recommend Suitable Products** – Match the prioritized needs to standard insurance offerings:  
   - **Life & Income** – Term life, whole life, or income‑protection disability policies.  
   - **Health & Disability** – Comprehensive health plans, short‑term and long‑term disability coverage.  
   - **Property** – Homeowners, renters, auto, and umbrella liability policies.  
   - **Specialty** – Travel insurance, pet health plans, identity‑theft protection.  

By following this structured approach, the agent ensures each recommendation directly addresses the client’s quantified risks and personal objectives.

<details><summary>Log</summary>

```
[2026-05-29T18:38:36.275Z] Working as Clawbot — AI agent operator.
[2026-05-29T18:38:37.395Z] Thinking about the best approach…
[2026-05-29T18:38:37.439Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T18:38:55.451Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T18:38:55.452Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, identify client needs and recommend suitable insurance products.
[2026-05-29T18:38:55.462Z] Step 1 of 1: Researching "As a Insurance Sales Agent, identify client needs and recommend suitable insuran…" — vault + web
[2026-05-29T18:40:05.040Z] All sub-agents finished in 69.6s.
[2026-05-29T18:40:05.041Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T18:40:05.048Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T18:40:05.048Z] Step 3 of 3: Security-scanning the note
[2026-05-29T18:40:05.049Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T18:40:12.104Z] Wave 1 finished in 7.1s.
[2026-05-29T18:40:12.104Z] All sub-agents finished in 7.1s.
[2026-05-29T18:40:12.110Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T18:40:28.529Z] All sub-agents finished in 16.4s.
[2026-05-29T18:40:28.534Z] quality.check failed (score=0.62, issues: Low citation coverage – only one reference for many substantive claims; No inline citations for specific product details or risk assessment steps) — re-synthesising with the large model
[2026-05-29T18:40:28.541Z] Thinking with openai/gpt-oss-120b:free (~3 664 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T18:41:36.380Z] quality rescue improved score: 0.62 → 0.66; using the rescued draft
[2026-05-29T18:41:36.380Z] Wrote to your second brain — committing the changes.
[2026-05-29T18:41:36.722Z] Vault commit: done.
```
</details>
