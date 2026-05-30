---
type: job
title: Run customer interviews focused on past behaviour, not hypothetical future
slug: run-customer-interviews-focused-on-past-behaviour-not-hypoth-325b42fc
created: 2026-05-30T18:43:36.651Z
jobId: 325b42fc-0c60-41b6-813c-cabe8f372dff
status: succeeded
template: custom-product-manager-run-customer-interviews-focused-on-past-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:31:43.172Z
finishedAt: 2026-05-30T18:43:36.650Z
---

# Run customer interviews focused on past behaviour, not hypothetical future

- **Status:** succeeded
- **Template:** custom-product-manager-run-customer-interviews-focused-on-past-
- **Started:** 2026-05-30T18:31:43.172Z
- **Finished:** 2026-05-30T18:43:36.650Z
- **Title:** Run customer interviews focused on past behaviour, not hypothetical future

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Run customer interviews focused on past behaviour, not hypothetical future\nDescription: Persona-derived starter task for \"Priya\"."
}
```

## Plan
Generate a concise interview guide focused on past behaviour.

### Steps
1. ✓ Thinking about it — `ollama.generate` (49.0s) · model `openai/gpt-oss-20b:free`
    > Generate the interview guide directly.
2. ✓ Quality-checking the draft — `quality.check` (300.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (2.4s)
    > auto-injected: quality score=0.00 (pass=false) — peer review for a second opinion

## Answer
## Customer Interview Guide – Past‑Behaviour Focus  

**Purpose**  
The guide is designed for Product Managers conducting 30–45‑minute interviews that prioritize real user behaviour over hypothetical scenarios. It provides a structured flow, clear objectives, and targeted questions that elicit actionable insights.

### 1. Objectives  
| # | Goal | Why it matters |
|---|------|----------------|
| 1 | Validate real usage patterns | Understand *what* customers actually do, not what they say they will do. |
| 2 | Identify friction points | Pinpoint moments where users abandon, retry, or seek help. |
| 3 | Surface unmet needs | Capture gaps that surface only when users are in the flow. |
| 4 | Prioritize backlog items | Use evidence of pain or delight to rank feature requests. |
| 5 | Build a data‑driven narrative | Create a story of user journeys to inform design and messaging. | [1]

### 2. Interview Structure (≈ 45 min)  
| Time | Segment | Focus |
|------|---------|-------|
| 0‑5 | Warm‑up & context | Quick intro, purpose, confidentiality, and a brief overview of the product. |
| 5‑10 | User profile | Role, tenure, typical usage frequency. |
| 10‑35 | Journey walk‑through | Guided recall of a recent session (last 7 days). |
| 35‑40 | Wrap‑up | Quick recap, ask for additional insights, thank them. |
| 40‑45 | Post‑call note‑taking | Immediately jot key quotes, timestamps, and emotional cues. | [1]

### 3. Key Questions (Past‑Behaviour)  
> **Rule of thumb:** Start with *“Tell me about a time when…”* or *“What happened when…”* to anchor the interview in real events.  

| # | Question | Probing Angle |
|---|----------|---------------|
| 1 | “Can you walk me through the last time you used the product to complete X?” | Focus on sequence, tools used, and obstacles encountered. |
| 2 | “What happened when you tried to accomplish Y?” | Explore friction points, error experiences, and workarounds. |
| 3 | “Describe a moment when the product helped you solve a problem.” | Capture delight moments and feature effectiveness. |
| 4 | “When was the last time you considered abandoning the product?” | Identify pain thresholds and potential churn triggers. |
| 5 | “How did you feel during the most frustrating part of the session?” | Gauge emotional impact and urgency of improvement. | [1]

---

**Next Steps**  
1. **Pilot the guide** with a small cohort to validate question clarity.  
2. **Iterate** based on interviewee feedback and observed data gaps.  
3. **Aggregate findings** into a narrative that aligns with the product roadmap and backlog prioritization.  

*Prepared by: [Your Name], Product Manager*

<details><summary>Log</summary>

```
[2026-05-30T18:31:43.188Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:31:43.960Z] Thinking about the best approach…
[2026-05-30T18:31:44.029Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:31:50.161Z] Plan ready: 1 step — Generate a concise interview guide focused on past behaviour..
[2026-05-30T18:31:50.167Z] Step 1 of 1: Thinking about it
[2026-05-30T18:32:39.129Z] All sub-agents finished in 49.0s.
[2026-05-30T18:32:39.142Z] Thinking with openai/gpt-oss-20b:free (~2 482 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T18:32:40.406Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T18:33:12.685Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-30T18:33:12.685Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:33:12.700Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:33:12.700Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:33:12.700Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:38:12.703Z] Wave 1 finished in 300.0s.
[2026-05-30T18:38:12.704Z] All sub-agents finished in 300.0s.
[2026-05-30T18:38:12.711Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:38:15.148Z] All sub-agents finished in 2.4s.
[2026-05-30T18:38:15.157Z] quality.check failed (score=0, issues: scorer failed: quality.check wall-time cap (300s) exceeded) — re-synthesising with the large model
[2026-05-30T18:38:15.171Z] Thinking with openai/gpt-oss-120b:free (~3 036 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:43:36.650Z] quality rescue produced score 0 (not better than 0); keeping the original
```
</details>
