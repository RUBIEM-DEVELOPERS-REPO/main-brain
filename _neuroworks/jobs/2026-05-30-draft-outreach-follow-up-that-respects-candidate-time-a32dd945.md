---
type: job
title: Draft outreach + follow-up that respects candidate time
slug: draft-outreach-follow-up-that-respects-candidate-time-a32dd945
created: 2026-05-30T18:44:34.448Z
jobId: a32dd945-9377-450a-be1e-43c6109ee258
status: succeeded
template: custom-recruiter-draft-outreach-follow-up-that-respects-c
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T18:43:34.602Z
finishedAt: 2026-05-30T18:44:34.448Z
---

# Draft outreach + follow-up that respects candidate time

- **Status:** succeeded
- **Template:** custom-recruiter-draft-outreach-follow-up-that-respects-c
- **Started:** 2026-05-30T18:43:34.602Z
- **Finished:** 2026-05-30T18:44:34.448Z
- **Title:** Draft outreach + follow-up that respects candidate time

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Draft outreach + follow-up that respects candidate time\nDescription: Persona-derived starter task for \"Riley\"."
}
```

## Plan
Generate concise outreach and follow-up emails.

### Steps
1. ✓ Thinking about it — `ollama.generate` (26.0s) · model `openai/gpt-oss-20b:free`
    > Generate the requested content.
2. ✓ Quality-checking the draft — `quality.check` (11.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Outreach & Follow‑Up Email Templates for Talent Recruiter

### Immediate Outreach Email  
**Subject:** Quick chat about a role that matches your background  

Hi [First Name],

I hope you’re doing well. I’m [Your Name] with [Company], and I’ve been following your work on [specific project/skill/industry]. Your experience in [relevant skill or role] aligns closely with an exciting opportunity we’re filling for a **[Job Title]** in our **[Department]** team.

I’d love to share a few details and hear how this might fit your career goals. Would you be available for a 15‑minute call sometime this week?

Thank you for considering—no pressure at all. I look forward to the possibility of speaking with you.

Best regards,  
[Your Full Name]  
Talent Recruiter, [Company]  
[Phone] | [LinkedIn] | [Company Website]  

---

### Follow‑Up Email (sent 3 days after outreach if no reply)  
**Subject:** Re: Quick chat about a role that matches your background  

Hi [First Name],

Just wanted to follow up on my previous note regarding the **[Job Title]** position at **[Company]**. I understand you’re busy, so I’ll keep this brief.

If you’re still interested in exploring this opportunity—or simply want to learn more about our team—I’d be happy to arrange a quick call at a time that suits you.

Thank you again for your time, and I hope to hear from you soon.

Warm regards,  
[Your Full Name]  
Talent Recruiter, [Company]  
[Phone] | [LinkedIn] | [Company Website]  

---  

These templates prioritize the candidate’s time by offering a concise call window, acknowledging their busy schedule, and providing clear next steps.

<details><summary>Log</summary>

```
[2026-05-30T18:43:34.615Z] Working as Clawbot — AI agent operator.
[2026-05-30T18:43:35.462Z] Thinking about the best approach…
[2026-05-30T18:43:35.526Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T18:43:43.918Z] Plan ready: 1 step — Generate concise outreach and follow-up emails..
[2026-05-30T18:43:43.924Z] Step 1 of 1: Thinking about it
[2026-05-30T18:43:45.037Z]   ⟳ Thinking about it: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 503: {"error":{"message":"Provider returned error","code":503,"metadata":{"raw":"{\"error\":{\"message\":\"No
[2026-05-30T18:43:47.516Z]   ⟳ Thinking about it: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 503: {"error":{"message":"Provider returned error","code":503,"metadata":{"raw":"{\"error\":{\"message\":\"No
[2026-05-30T18:44:09.908Z] All sub-agents finished in 26.0s.
[2026-05-30T18:44:09.935Z] Thinking with openai/gpt-oss-20b:free (~2 453 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T18:44:23.167Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T18:44:23.186Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T18:44:23.186Z] Step 3 of 3: Security-scanning the note
[2026-05-30T18:44:23.186Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T18:44:34.448Z] Wave 1 finished in 11.3s.
[2026-05-30T18:44:34.448Z] All sub-agents finished in 11.3s.
[2026-05-30T18:44:34.448Z] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
