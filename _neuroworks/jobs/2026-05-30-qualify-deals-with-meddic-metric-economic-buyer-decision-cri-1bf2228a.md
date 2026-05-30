---
type: job
title: Qualify deals with MEDDIC — metric, economic buyer, decision criteria, decisi…
slug: qualify-deals-with-meddic-metric-economic-buyer-decision-cri-1bf2228a
created: 2026-05-30T18:46:45.372Z
jobId: 1bf2228a-c3f8-4238-be8d-aae8e8095f5b
status: succeeded
template: custom-account-executive-qualify-deals-with-meddic-metric-economi
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:44:38.972Z
finishedAt: 2026-05-30T18:46:45.372Z
---

# Qualify deals with MEDDIC — metric, economic buyer, decision criteria, decisi…

- **Status:** succeeded
- **Template:** custom-account-executive-qualify-deals-with-meddic-metric-economi
- **Started:** 2026-05-30T18:44:38.972Z
- **Finished:** 2026-05-30T18:46:45.372Z
- **Title:** Qualify deals with MEDDIC — metric, economic buyer, decision criteria, decisi…

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Qualify deals with MEDDIC — metric, economic buyer, decision criteria, decisi…\nDescription: Persona-derived starter task for \"Drew\"."
}
```

## Plan
Generate a concise MEDDIC qualification guide.

### Steps
1. ✓ Thinking about it — `ollama.generate` (50.2s) · model `openai/gpt-oss-20b:free`
2. ✓ Quality-checking the draft — `quality.check` (7.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.4s)
    > auto-injected: quality score=0.59 (pass=false) — peer review for a second opinion

## Answer
## Deal qualification — \<Account name\>

| MEDDIC slot | What we know | Confidence | What we still need |
|---|---|---|---|
| Metric | No metrics have been provided yet. | low | Specific KPI targets, baseline figures, and ROI expectations from the prospect. |
| Economic buyer | No economic buyer identified. | low | Name, title, and budget‑authority of the person who will sign the budget. |
| Decision criteria | No criteria documented. | low | Internal benchmarks or vendor attributes the prospect will use to evaluate solutions. |
| Decision process | No process outlined. | low | Step‑by‑step workflow, involved stakeholders, and typical timeline for similar purchases. |
| Identified pain | No pain points captured. | low | Concrete business challenges, pain severity, and urgency driving the need for a solution. |
| Champion | No champion identified. | low | Internal advocate who will champion the solution and influence the decision. |

## Risks
- **No economic buyer identified** – risk of pursuing the wrong stakeholder and wasting time.  
- **No champion** – risk of lack of internal advocacy if the contact moves or is unavailable.  
- **No pain articulated** – risk of mis‑aligning the solution with actual business needs.  

## Discovery questions for the next call (6–8)

| MEDDIC slot | Question |
|---|---|
| Metric | “What specific KPI improvements would you consider a success for this project?” |
| Economic buyer | “Who ultimately authorizes the budget for this initiative?” |
| Decision criteria | “Which factors will be most important to you when comparing vendors?” |
| Decision process | “Can you walk me through the steps your team follows to approve a new solution?” |
| Identified pain | “What business challenges are prompting you to explore a solution now?” |
| Champion | “Is there someone on your team who will actively promote this project internally?” |

*Assumed: the account name and any prospect details are not yet known, so placeholders are used.*

<details><summary>Log</summary>

```
[2026-05-30T18:44:38.986Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:44:39.905Z] Thinking about the best approach…
[2026-05-30T18:44:39.989Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:44:46.594Z] Plan ready: 1 step — Generate a concise MEDDIC qualification guide..
[2026-05-30T18:44:46.600Z] Step 1 of 1: Thinking about it
[2026-05-30T18:44:47.783Z]   ⟳ Thinking about it: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-30T18:45:36.756Z] All sub-agents finished in 50.2s.
[2026-05-30T18:45:36.775Z] Thinking with openai/gpt-oss-20b:free (~3 256 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T18:45:37.865Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T18:45:57.726Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-30T18:45:57.726Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:45:57.733Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:45:57.734Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:45:57.734Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:46:05.610Z] Wave 1 finished in 7.9s.
[2026-05-30T18:46:05.610Z] All sub-agents finished in 7.9s.
[2026-05-30T18:46:05.616Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:46:11.008Z] All sub-agents finished in 5.4s.
[2026-05-30T18:46:11.014Z] quality.check failed (score=0.59, issues: Low citation coverage – only one generic source marker; no inline citations for specific claims.; The answer is generally aligned with the task but lacks evidence for the listed claims.) — re-synthesising with the large model
[2026-05-30T18:46:11.028Z] Thinking with openai/gpt-oss-120b:free (~3 882 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:46:45.372Z] quality rescue improved score: 0.59 → 0.97; using the rescued draft
```
</details>
