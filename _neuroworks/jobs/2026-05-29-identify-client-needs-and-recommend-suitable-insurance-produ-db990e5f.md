---
type: job
title: Identify client needs and recommend suitable insurance products.
slug: identify-client-needs-and-recommend-suitable-insurance-produ-db990e5f
created: 2026-05-29T09:14:36.424Z
jobId: db990e5f-2d7b-48f5-9db5-c18fbfaf6286
status: succeeded
template: custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T09:11:40.480Z
finishedAt: 2026-05-29T09:14:36.424Z
---

# Identify client needs and recommend suitable insurance products.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-identify-client-needs-and-recommend-suit
- **Started:** 2026-05-29T09:11:40.480Z
- **Finished:** 2026-05-29T09:14:36.424Z
- **Title:** Identify client needs and recommend suitable insurance products.

## Plan
Default research plan for: As a Insurance Sales Agent, identify client needs and recommend suitable insurance products

### Steps
1. ✓ Researching "As a Insurance Sales Agent, identify client needs and recommend suitable insuran…" — vault + web — `research.deep` (48.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (15.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (26.1s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion

## Answer
## Identifying Client Needs and Matching Insurance Products  

| Step | What the agent does | Why it matters | Typical product matches |
|------|--------------------|----------------|--------------------------|
| **1. Define the ideal client segment** | Choose a niche (e.g., small contractors, homeowners, professional services) and study the specific risks that segment faces. | Specializing lets the agent anticipate common gaps and tailor conversations to the client’s risk profile. | • General liability for contractors <br>• Professional liability for consultants <br>• Homeowners & auto for families |
| **2. Conduct a needs‑assessment conversation** | Ask open‑ended, insight‑driving questions such as: <br>• “What recent changes have occurred in your business or personal situation?” <br>• “Are there assets or activities your current policies may not fully cover?” <br>• “Have you reviewed your liability exposure as values have grown?” | Listening for gaps surfaces exposures the client may not realize, building trust and uncovering cross‑sell opportunities. | • New equipment → commercial property & equipment coverage <br>• Expanding staff → workers’ comp and employment practices liability |
| **3. Leverage deep product knowledge** | Explain coverage features, exclusions, and benefits clearly; understand how policies interrelate. | Strong product expertise shifts the conversation from price to value and helps identify complementary coverages. | • Bundle general liability + commercial auto for a delivery business <br>• Add umbrella liability to extend limits across multiple policies |

**Key questions to ask during the assessment**  
- What recent life or business changes have occurred?  
- Which assets (property, equipment, intellectual property) are most valuable to you?  
- Are there any regulatory or contractual requirements for coverage?  
- How do you currently manage risk (e.g., safety programs, contracts)?  
- What budget constraints or preferences do you have for premiums vs. deductibles?  

**Sources**  
- “How To Increase Insurance Sales” – Smart Choice Agents (https://www.smartchoiceagents.com/how-to-increase-insurance-sales) [1]  
- “Insurance Sales Agents” – West Virginia University (https://www.wvu.edu/academics/careers/insurance-sales-agents/) [1]  
- “Top Skills for Insurance Sales Agents” – Openly (https://openly.com/the-open-door/articles/insurance-sales-agent-skills) [1]

<details><summary>Log</summary>

```
[2026-05-29T09:11:40.489Z] Working as Clawbot — AI agent operator.
[2026-05-29T09:11:41.635Z] Thinking about the best approach…
[2026-05-29T09:11:41.656Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T09:11:59.658Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T09:11:59.659Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, identify client needs and recommend suitable insurance products.
[2026-05-29T09:11:59.662Z] Step 1 of 1: Researching "As a Insurance Sales Agent, identify client needs and recommend suitable insuran…" — vault + web
[2026-05-29T09:12:48.172Z] All sub-agents finished in 48.5s.
[2026-05-29T09:12:48.172Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T09:12:48.176Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T09:12:48.176Z] Step 3 of 3: Security-scanning the note
[2026-05-29T09:12:48.176Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T09:13:03.522Z] Wave 1 finished in 15.3s.
[2026-05-29T09:13:03.522Z] All sub-agents finished in 15.3s.
[2026-05-29T09:13:03.524Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T09:13:29.609Z] All sub-agents finished in 26.1s.
[2026-05-29T09:13:29.615Z] quality.check failed (score=0.62, issues: Contains multiple unsupported claims and relies on placeholder citations ([1],[2]) that do not reference real evidence; risk of hallucination is high.; Citation markers are present but do not correspond to verifiable sources; coverage is adequate but not substantiated.) — re-synthesising with the large model
[2026-05-29T09:13:29.621Z] Thinking with openai/gpt-oss-120b:free (~3 819 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:14:08.333Z] quality rescue improved score: 0.62 → 0.9; using the rescued draft
[2026-05-29T09:14:08.333Z] peer review verdict=needs-work (Unverified citations [1][2] likely hallucinated; No source links provided) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T09:14:08.338Z] Thinking with openai/gpt-oss-120b:free (~3 956 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T09:14:36.173Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T09:14:36.173Z] Wrote to your second brain — committing the changes.
[2026-05-29T09:14:36.424Z] Vault commit: done.
```
</details>
