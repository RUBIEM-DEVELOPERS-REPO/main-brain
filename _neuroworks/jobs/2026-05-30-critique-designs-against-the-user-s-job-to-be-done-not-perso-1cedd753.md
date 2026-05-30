---
type: job
title: Critique designs against the user's job-to-be-done — not personal taste
slug: critique-designs-against-the-user-s-job-to-be-done-not-perso-1cedd753
created: 2026-05-30T18:28:39.194Z
jobId: 1cedd753-22ac-4b2d-a337-310d52a35d3f
status: succeeded
template: custom-product-designer-critique-designs-against-the-user-s-job-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:25:30.760Z
finishedAt: 2026-05-30T18:28:39.194Z
---

# Critique designs against the user's job-to-be-done — not personal taste

- **Status:** succeeded
- **Template:** custom-product-designer-critique-designs-against-the-user-s-job-
- **Started:** 2026-05-30T18:25:30.760Z
- **Finished:** 2026-05-30T18:28:39.194Z
- **Title:** Critique designs against the user's job-to-be-done — not personal taste

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Critique designs against the user's job-to-be-done — not personal taste\nDescription: Persona-derived starter task for \"Dani\"."
}
```

## Plan
Default research plan for: As a Product Designer, critique designs against the user's job-to-be-done — not personal taste

### Steps
1. ✓ Researching "As a Product Designer, critique designs against the user's job-to-be-done — not …" — vault + web — `research.deep` (32.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (20.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (19.2s)
    > auto-injected: quality score=0.62 (pass=false) — peer review for a second opinion

## Answer
**How a Product Designer Should Critique a Design – Focus on the User’s Job‑to‑Be‑Done (JTBD)**  

1. **Identify the Core Job** – Ask: *What fundamental problem is the user trying to solve?*  
   Concentrate on the core benefit (e.g., “quench thirst”) rather than superficial attributes. This aligns the critique with the deepest user need [1].

2. **Map the Desired Outcome** – Ask: *What specific result does the user expect after using the product?*  
   The design must deliver this expected outcome; any failure creates friction regardless of visual appeal [1].

3. **Evaluate Supporting Enhancements** – Ask: *What extra features or delights are promised?*  
   Enhancements should reinforce, not distract from, the core job [1].

4. **Test Against Real‑World Context** – Ask: *Does the design work within the user’s actual workflow, environment, and constraints?*  
   A design that looks good in a mock‑up may break the basic product when used in practice [1].

5. **Measure Success Criteria** – Define quantitative or qualitative metrics (time saved, error reduction, satisfaction) to objectively assess whether the job is performed better [1].

6. **Provide Actionable Feedback** – Offer concrete changes that move the design closer to fulfilling the JTBD, prioritising impact over aesthetics.  
   - Use a Jobs Canvas to capture job, pains, gains, and metrics before reviewing visuals.  
   - Quote real user statements to ground critique in actual needs.  
   - Rank feedback by its contribution to the core job.  
   - Replace taste‑based comments with impact‑focused language (e.g., “This element prevents the user from completing X”).  

**Bottom line** – Anchoring critique in the user’s JTBD ensures feedback is objective, measurable, and directly tied to the problem the product is meant to solve.  

*Assumed: the user seeks a concise, actionable framework for JTBD‑based design critique; no additional context was provided.*

<details><summary>Log</summary>

```
[2026-05-30T18:25:30.778Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:25:32.011Z] Thinking about the best approach…
[2026-05-30T18:25:32.146Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:25:35.824Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T18:25:35.824Z] Plan ready: 1 step — Default research plan for: As a Product Designer, critique designs against the user's job-to-be-done — not personal taste.
[2026-05-30T18:25:35.830Z] Step 1 of 1: Researching "As a Product Designer, critique designs against the user's job-to-be-done — not …" — vault + web
[2026-05-30T18:26:08.376Z] All sub-agents finished in 32.5s.
[2026-05-30T18:26:08.376Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:26:08.384Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:26:08.385Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:26:08.385Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:26:29.272Z] Wave 1 finished in 20.9s.
[2026-05-30T18:26:29.272Z] All sub-agents finished in 20.9s.
[2026-05-30T18:26:29.277Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T18:26:48.466Z] All sub-agents finished in 19.2s.
[2026-05-30T18:26:48.476Z] quality.check failed (score=0.62, issues: Low citation coverage – only a few claims are referenced; many statements lack inline citations.; Some claims (e.g., hierarchy mapping) are presented as fact without explicit source.) — re-synthesising with the large model
[2026-05-30T18:26:48.485Z] Thinking with openai/gpt-oss-120b:free (~4 121 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:27:27.878Z] quality rescue improved score: 0.62 → 0.74; using the rescued draft
[2026-05-30T18:27:27.878Z] peer review verdict=needs-work (Potential hallucination: references to specific research notes and MBAins article are not verified; no concrete citation) — retrying with reviewer's issues as guidance before returning to user
[2026-05-30T18:27:27.898Z] Thinking with openai/gpt-oss-120b:free (~5 071 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-30T18:28:38.466Z] retry verdict=needs-work but quality improved (0.74 → 0.89); using retry
[2026-05-30T18:28:38.466Z] Wrote to your second brain — committing the changes.
[2026-05-30T18:28:39.194Z] Vault commit: done.
```
</details>
