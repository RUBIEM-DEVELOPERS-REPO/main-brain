---
type: job
title: Run customer interviews focused on past behaviour, not hypothetical future
slug: run-customer-interviews-focused-on-past-behaviour-not-hypoth-9eacaeb7
created: 2026-05-29T22:53:08.170Z
jobId: 9eacaeb7-6c37-431f-a4a1-8c0ba9f5cca9
status: succeeded
template: custom-product-manager-run-customer-interviews-focused-on-past-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T21:22:40.309Z
finishedAt: 2026-05-29T22:53:08.170Z
---

# Run customer interviews focused on past behaviour, not hypothetical future

- **Status:** succeeded
- **Template:** custom-product-manager-run-customer-interviews-focused-on-past-
- **Started:** 2026-05-29T21:22:40.309Z
- **Finished:** 2026-05-29T22:53:08.170Z
- **Title:** Run customer interviews focused on past behaviour, not hypothetical future

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Run customer interviews focused on past behaviour, not hypothetical future\nDescription: Persona-derived starter task for \"Priya\"."
}
```

## Plan
Research behavioral interview best practices and produce a tailored interview guide.

### Steps
1. ✓ Multi-perspective research: "customer interviews focused on past behaviour" — `research.multiperspective` (27.2s)
2. ✓ Thinking about it — `ollama.generate` (35.8s) · model `openai/gpt-oss-20b:free`
3. ✓ Quality-checking the draft — `quality.check` (4.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
5. ✓ Asking a peer to review the draft — `peer.review` (7.2s)
    > auto-injected: quality score=0.13 (pass=false) — peer review for a second opinion

## Answer
## Product‑Manager Guide: Conducting Customer Interviews that Focus on Past Behaviour  

**Purpose** – Capture reliable, action‑able insights by asking customers to describe what they *actually did* rather than what they *might do* in the future. This reduces speculation, mitigates hindsight bias, and yields data that can be directly linked to usage metrics.

### 1. Preparation  

| Action | Why it matters | Practical tip |
|--------|----------------|---------------|
| Define the research objective | Keeps the interview scoped to behaviours that matter for the product decision. | Write a one‑sentence hypothesis (e.g., “Identify the triggers that led existing users to upgrade from free to paid”). |
| Select a representative sample | Ensures findings are generalisable across the target segment. | Use usage analytics to pick customers who have performed the behaviour of interest (e.g., churned users, power users). |
| Build a semi‑structured interview guide | Balances consistency across interviews with flexibility to probe deeper. | Base the guide on the **STAR** (Situation, Task, Action, Result) framework; see internal note *Research: As a Product Manager, run customer interviews focused on past behaviour* [vault:0‑Inbox/202605291441-research-as-a-product-manager-run-customer-interviews-focused-on-past.md]. |

### 2. Interview Structure  

1. **Context & Scope** – Confirm product, segment, and interview goal.  
2. **Journey Mapping** – Ask the participant to *walk you through* a recent experience from discovery to the target action.  
3. **Behavioural Triggers** – Probe “what made you decide to …?” and follow with “why” up to five times (5 Whys).  
4. **Decision‑Making Process** – Identify who was involved, criteria used, and alternatives considered.  
5. **Usage Patterns** – Quantify frequency, duration, and any work‑arounds.  
6. **Outcomes & Reflections** – Capture the result of the action and any post‑action adjustments.

### 3. Probing Techniques  

* **Ask for concrete examples** – “Can you tell me about the last time you…?”  
* **Use the “anchor‑event” method** – Reference a specific date or product release to ground the story.  
* **Avoid leading language** – Replace “Would you have liked…?” with “What did you actually do when…?”  

### 4. Data Capture  

* Record audio (with consent) and take real‑time notes.  
* Populate a **behavioural matrix** linking triggers → actions → outcomes.  
* Tag each insight with the source (interview ID, date) for traceability.  

### 5. Synthesis & Action  

1. **Cluster similar stories** to reveal common patterns.  
2. **Validate against product analytics** (e.g., compare reported usage frequency with logged events).  
3. **Prioritise findings** using impact vs. effort, and feed them into the product backlog.  

### 6. Common Pitfalls to Avoid  

* Relying on “what‑if” questions (e.g., “If you were to…”) – they generate speculation.  
* Over‑generalising from a single anecdote – always seek corroborating cases.  
* Ignoring non‑verbal cues – pauses or hesitations often signal areas worth deeper probing.  

---

*Assumed: The audience is a product‑management team needing a practical, ready‑to‑use interview framework; internal vault notes provide the context for the guide.*

<details><summary>Log</summary>

```
[2026-05-29T21:22:40.323Z] Working as Clawbot — AI agent operator.
[2026-05-29T21:22:40.326Z] Thinking about the best approach…
[2026-05-29T21:22:40.420Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T21:22:48.581Z] Plan ready: 2 steps — Research behavioral interview best practices and produce a tailored interview guide..
[2026-05-29T21:22:48.585Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:22:48.585Z] Step 1 of 2: Multi-perspective research: "customer interviews focused on past behaviour"
[2026-05-29T21:22:49.518Z] Step 2 of 2: Thinking about it
[2026-05-29T21:23:25.297Z] Wave 1 finished in 36.7s.
[2026-05-29T21:23:25.297Z] All sub-agents finished in 36.7s.
[2026-05-29T21:23:25.303Z] Thinking with openai/gpt-oss-20b:free (~3 531 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T21:23:26.466Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-29T21:23:33.317Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T21:23:33.322Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T21:23:33.322Z] Step 4 of 4: Security-scanning the note
[2026-05-29T21:23:33.322Z] Step 3 of 4: Quality-checking the draft
[2026-05-29T21:23:38.217Z] Wave 1 finished in 4.9s.
[2026-05-29T21:23:38.217Z] All sub-agents finished in 4.9s.
[2026-05-29T21:23:38.222Z] Step 5 of 5: Asking a peer to review the draft
[2026-05-29T21:23:45.421Z] All sub-agents finished in 7.2s.
[2026-05-29T21:23:45.426Z] quality.check failed (score=0.13, issues: Incomplete answer with no substantive content; Unsupported claims and lack of evidence) — re-synthesising with the large model
[2026-05-29T21:23:45.433Z] Thinking with openai/gpt-oss-120b:free (~4 226 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T21:24:54.849Z] quality rescue improved score: 0.13 → 0.88; using the rescued draft
[2026-05-29T21:24:54.849Z] peer review verdict=bad (Incomplete answer; Contains hallucinated content) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T21:24:54.855Z] Thinking with openai/gpt-oss-120b:free (~4 394 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T22:52:52.510Z] retry quality compare failed (This operation was aborted); keeping the rescued/original draft
[2026-05-29T22:52:52.510Z] Wrote to your second brain — committing the changes.
[2026-05-29T22:53:08.170Z] Vault commit: done.
```
</details>
