---
type: job
title: Sell auto, home, life, health, or commercial insurance policies.
slug: sell-auto-home-life-health-or-commercial-insurance-policies--ebb8c3e8
created: 2026-05-30T17:12:11.570Z
jobId: ebb8c3e8-4412-4fe6-a52b-b06e8aaf280f
status: succeeded
template: custom-insurance-sales-agent-sell-auto-home-life-health-or-commercial
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:10:37.825Z
finishedAt: 2026-05-30T17:12:11.569Z
---

# Sell auto, home, life, health, or commercial insurance policies.

- **Status:** succeeded
- **Template:** custom-insurance-sales-agent-sell-auto-home-life-health-or-commercial
- **Started:** 2026-05-30T17:10:37.825Z
- **Finished:** 2026-05-30T17:12:11.569Z
- **Title:** Sell auto, home, life, health, or commercial insurance policies.

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Sell auto, home, life, health, or commercial insurance policies.\nDescription: Persona-derived starter task for \"Insurance Sales Agent\"."
}
```

## Plan
Default research plan for: As a Insurance Sales Agent, sell auto, home, life, health, or commercial insurance policies

### Steps
1. ✓ Researching "As a Insurance Sales Agent, sell auto, home, life, health, or commercial insuran…" — vault + web — `research.deep` (45.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (3.2s)
    > auto-injected: quality score=0.58 (pass=false) — peer review for a second opinion

## Answer
## Insurance Sales Pitch – Multi‑Line Coverage Overview  

**Prepared by:** [Your Name], Insurance Sales Agent  
**Date:** 2026‑05‑30  

### 1. Opening Hook  
“Hello [Prospect], I’m [Your Name] with [Your Agency]. I help families and businesses protect what matters most—your vehicle, home, health, future earnings, and commercial assets—so you can focus on living and growing without worry.”  

### 2. Needs‑Discovery Questions  

| Prospect Type | Targeted Questions |
|---------------|--------------------|
| **Auto owner** | “How often do you drive, and have you ever faced a costly accident or a stolen‑vehicle claim?” |
| **Homeowner** | “Do you know whether your policy covers both the structure and personal belongings after a fire or flood?” |
| **Life/Health seeker** | “What would happen to your family’s lifestyle if you were suddenly unable to work?” |
| **Commercial client** | “Which business risks keep you up at night—property loss, liability, employee injury, or interruption of operations?” |  

These prompts surface pain points and create a dialogue that leads naturally to the appropriate product recommendation.  

### 3. Product Suite & Core Benefits  

| Product | Core Coverage | Why It Matters |
|---------|---------------|----------------|
| **Auto Insurance** | Liability, collision, comprehensive, medical payments | Provides financial protection against accidents and satisfies mandatory state requirements【vault:0-Inbox/202605292006-research-as-a-insurance-sales-agent-sell-auto-home-life-health-or-com.md】 |
| **Homeowners Insurance** | Dwelling, personal property, liability, loss‑of‑use | Shields the largest personal asset from fire, theft, natural disasters, and lawsuits【vault:0-Inbox/202605292006-research-as-a-insurance-sales-agent-sell-auto-home-life-health-or-com.md】 |
| **Life Insurance** | Term or whole‑life death benefit, optional cash value | Guarantees income replacement for dependents and can serve as a financial planning tool |
| **Health Insurance** | Hospital, outpatient, prescription, preventive care | Reduces out‑of‑pocket medical expenses and safeguards against catastrophic health events |
| **Commercial Insurance** | Property, general liability, workers’ comp, business interruption | Protects business assets, limits liability exposure, and ensures continuity after a loss |

### 4. Call to Action  
1. Schedule a brief 15‑minute discovery call to assess your specific risks.  
2. Receive a customized quote package covering the products that align with your needs.  
3. Review the proposal together and finalize coverage within 48 hours.  

**Next Steps:** Reply with your preferred contact time, or click the link below to book directly on my calendar.  

---  

*Assumed: The prospect is a typical consumer or small‑business owner; the report is intended for use in a cold‑call or email outreach context.*

<details><summary>Log</summary>

```
[2026-05-30T17:10:37.838Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:10:38.707Z] Thinking about the best approach…
[2026-05-30T17:10:38.768Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:10:39.974Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:10:39.974Z] Plan ready: 1 step — Default research plan for: As a Insurance Sales Agent, sell auto, home, life, health, or commercial insurance policies.
[2026-05-30T17:10:39.979Z] Step 1 of 1: Researching "As a Insurance Sales Agent, sell auto, home, life, health, or commercial insuran…" — vault + web
[2026-05-30T17:11:25.720Z] All sub-agents finished in 45.7s.
[2026-05-30T17:11:25.720Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:11:25.727Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:11:25.727Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:11:25.728Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:11:34.102Z] Wave 1 finished in 8.4s.
[2026-05-30T17:11:34.102Z] All sub-agents finished in 8.4s.
[2026-05-30T17:11:34.110Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:11:37.280Z] All sub-agents finished in 3.2s.
[2026-05-30T17:11:37.298Z] quality.check failed (score=0.58, issues: Low citation coverage – many claims are unsupported by inline citations; only a single source marker used for multiple statements.; Citation coverage below threshold for pass.) — re-synthesising with the large model
[2026-05-30T17:11:37.307Z] Thinking with openai/gpt-oss-120b:free (~3 416 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T17:12:11.227Z] quality rescue improved score: 0.58 → 0.86; using the rescued draft
[2026-05-30T17:12:11.227Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:12:11.569Z] Vault commit: done.
```
</details>
