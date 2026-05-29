---
type: job
title: Spot risks (no champion, no compelling event, ghost-buyer) and escalate
slug: spot-risks-no-champion-no-compelling-event-ghost-buyer-and-e-58f84164
created: 2026-05-29T23:10:56.914Z
jobId: 58f84164-62f7-428c-9e7b-bd0900005ede
status: succeeded
template: custom-account-executive-spot-risks-no-champion-no-compelling-eve
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T23:05:00.485Z
finishedAt: 2026-05-29T23:10:56.914Z
---

# Spot risks (no champion, no compelling event, ghost-buyer) and escalate

- **Status:** succeeded
- **Template:** custom-account-executive-spot-risks-no-champion-no-compelling-eve
- **Started:** 2026-05-29T23:05:00.485Z
- **Finished:** 2026-05-29T23:10:56.914Z
- **Title:** Spot risks (no champion, no compelling event, ghost-buyer) and escalate

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Spot risks (no champion, no compelling event, ghost-buyer) and escalate\nDescription: Persona-derived starter task for \"Drew\"."
}
```

## Plan
Default research plan for: As a Account Executive, spot risks (no champion, no compelling event, ghost-buyer) and escalate.

Context: Role: Custom
Title: Spot risks (no champion, no compelling event, ghost-buyer) and escalate
Description: Persona-derived starter task for "Drew"

### Steps
1. ✓ Researching "As a Account Executive, spot risks (no champion, no compelling event, ghost-buye…" — vault + web — `research.deep` (22.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (221.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (5.2s)
    > auto-injected: quality score=0.21 (pass=false) — peer review for a second opinion

## Answer
## Risk‑Spotting & Escalation Brief – Account Executive (Drew)

### 1. Key Risks to Monitor  

| Risk | Typical Indicators | Why It Matters |
|------|-------------------|----------------|
| **No Champion** | • Decision‑maker does not respond to outreach for more than two weeks<br>• No internal advocate is identified in the account map<br>• Stakeholder engagement score (e.g., meeting attendance, email opens) remains below 30 % | Without a champion, the prospect lacks internal sponsorship, making the deal vulnerable to delays or cancellation. |
| **No Compelling Event** | • No upcoming business driver (e.g., budget cycle, regulatory deadline, product launch) is linked to the solution<br>• Timeline remains “open‑ended” or “Q4‑2025 +” with no concrete milestones | A compelling event creates urgency; its absence often leads to the opportunity stalling in the pipeline. |
| **Ghost‑Buyer** | • Prospect appears in CRM but shows no activity (no logins, no demo requests)<br>• Contact information is outdated or returns bounce‑backs<br>• Sales‑qualified lead (SQL) status is not refreshed for > 30 days | Ghost‑buyers consume sales capacity while delivering no pipeline value; they inflate forecast accuracy and hide true pipeline health. |

### 2. Immediate Action Triggers  

- **Champion score < 30 %** for two consecutive weeks.  
- **Compelling‑event flag = none** after the first discovery call.  
- **Buyer activity = 0** for 30 + days post‑initial contact.

When any trigger fires, the AE should move to the escalation workflow.

### 3. Escalation Workflow  

1. **Document the Risk**  
   - Capture the specific indicator(s) in the CRM notes (e.g., “No champion – last response 2024‑04‑12”).  
   - Attach any supporting artifacts (email threads, meeting recordings).  

2. **Notify the Account Team**  
   - Send a concise Slack/Teams message to the **Account Lead** and **Sales Manager** with:  
     - Account name, opportunity ID, risk type, and brief evidence.  
     - Suggested next step (e.g., “Request introduction to senior stakeholder”).  

3. **Engage the Enablement / Solutions Engineer** (if applicable)  
   - Request a joint discovery session or a technical workshop to surface a compelling event.  

4. **Escalate to Sales Ops / Leadership** (if risk persists after 5 business days)  
   - Use the standard “Risk‑Escalation” template (subject line: *Risk – No Champion – [Account]*).  
   - Include: risk description, impact assessment (pipeline value), actions taken, and request for guidance (e.g., re‑assignment, additional resources).  

5. **Follow‑Up & Close Loop**  
   - Update the CRM with the outcome of the escalation (risk mitigated, opportunity withdrawn, or re‑qualified).  
   - Record lessons learned in the team knowledge base for future reference.  

### 4. Quick‑Reference Checklist (for immediate use)

- [ ] Champion score evaluated?  
- [ ] Compelling event identified?  
- [ ] Buyer activity logged in the last 30 days?  
- [ ] Risk documented in CRM?  
- [ ] Team notified via Slack/Teams?  
- [ ] Escalation ticket created if unresolved after 5 days?  

*Assumed: The brief is intended for internal use by Drew to guide daily prospect monitoring and to provide a clear, actionable escalation path when the three high‑impact risks appear.*

<details><summary>Log</summary>

```
[2026-05-29T23:05:00.516Z] Working as Clawbot — AI agent operator.
[2026-05-29T23:05:00.526Z] Thinking about the best approach…
[2026-05-29T23:05:00.645Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T23:05:14.310Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T23:05:14.310Z] Plan ready: 1 step — Default research plan for: As a Account Executive, spot risks (no champion, no compelling event, ghost-buyer) and escalate.

Context: Role: Custom
Title: Spot risks (no champion, no compelling event, ghost-buyer) and escalate
Description: Persona-derived starter task for "Drew".
[2026-05-29T23:05:14.316Z] Step 1 of 1: Researching "As a Account Executive, spot risks (no champion, no compelling event, ghost-buye…" — vault + web
[2026-05-29T23:05:36.847Z] All sub-agents finished in 22.5s.
[2026-05-29T23:05:36.859Z] Thinking with openai/gpt-oss-20b:free (~2 511 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T23:05:46.170Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T23:05:46.178Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T23:05:46.178Z] Step 3 of 3: Security-scanning the note
[2026-05-29T23:05:46.179Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T23:09:28.109Z] Wave 1 finished in 221.9s.
[2026-05-29T23:09:28.109Z] All sub-agents finished in 221.9s.
[2026-05-29T23:09:28.114Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T23:09:33.274Z] All sub-agents finished in 5.2s.
[2026-05-29T23:09:33.284Z] quality.check failed (score=0.21, issues: The answer does not provide any substantive claims or risk scenarios as requested in the task.; No internal documentation, examples of past escalations, criteria for flagging these risks, escalation protocol, or CRM/pipeline data is provided.) — re-synthesising with the large model
[2026-05-29T23:09:33.295Z] Thinking with openai/gpt-oss-120b:free (~3 113 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:10:06.654Z] quality rescue improved score: 0.21 → 0.9; using the rescued draft
[2026-05-29T23:10:06.654Z] peer review verdict=bad (Does not identify or explain risks; merely requests more information; Fails to provide actionable escalation steps) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T23:10:06.667Z] Thinking with openai/gpt-oss-120b:free (~3 269 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T23:10:56.432Z] retry cleared peer review (verdict=good, confidence=0.99); using retry as final answer
[2026-05-29T23:10:56.432Z] Wrote to your second brain — committing the changes.
[2026-05-29T23:10:56.914Z] Vault commit: done.
```
</details>
