---
type: job
title: Ad-hoc: Give me my daily briefing for today: today's meetings plus a
slug: ad-hoc-give-me-my-daily-briefing-for-today-today-s-meetings--21cd87c7
created: 2026-06-10T18:22:23.215Z
jobId: 21cd87c7-559f-4dc7-830b-2544bb77ccf6
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:20:06.843Z
finishedAt: 2026-06-10T18:22:23.215Z
---

# Ad-hoc: Give me my daily briefing for today: today's meetings plus a

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:20:06.843Z
- **Finished:** 2026-06-10T18:22:23.215Z
- **Title:** Ad-hoc: Give me my daily briefing for today: today's meetings plus a

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me my daily briefing for today: today's meetings plus any open follow-ups you have on file.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Give me my daily briefing for today: today's meetings plus any open follow-ups you have on file.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Plan
Gather today’s meetings and open follow-ups, then format them into a concise briefing.

### Steps
1. ✓ calendar.activity — `calendar.activity` (1.1s)
    > Retrieve all scheduled meetings for today.
2. ✓ Searching your second brain for "follow-up" — `vault.search` (1.1s)
    > Find any open follow-up items in the vault.
3. ✓ Thinking about it — `ollama.generate` (11.0s) · model `openai/gpt-oss-20b:free`
4. ✓ Quality-checking the draft — `quality.check` (10.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
5. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
# Neuro — Briefing for 2026-06-10

## Today's shape
- **Meetings:** 0  
- **First / last commitment:** none  
- **Focus blocks:** 0

## Carryover from yesterday
- No carryover items were recorded in the vault for this date.

## Inbox — needs you
1. **Research: As a Talent Recruiter, draft outreach + follow‑up that respects candidate time** – status: open  
2. **Research: personalised follow‑up email after this sales call. Open by referencing one specific thing they said. Confirm the next step** – status: open  
3. **Multi‑perspective: insurance sales agent client record maintenance and policy renewal follow‑up** – status: open  
4. **Research: As a Account Executive, draft follow‑up emails that name the next step + a date** – status: open  
5. **Research: invoice follow‑up message. Tone: firm but polite. Reference the invoice number and original due date, state the days over** – status: open  
6. **Research: Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending follow‑ups in 0‑Inbox/, and surface a short** – status: open  
7. **UI polish landed via the impeccable critique, taste‑skill bundle installed and assessed, all‑template grader sweep run, daily reflection captured. Three real bugs surfaced that are worth fixing in a f** – status: open  
8. **Known issues / follow‑ups** – status: open

## Top 3 today
1. Draft and send the Talent Recruiter outreach email, ensuring candidate time is respected.  
2. Compose the personalised follow‑up for the recent sales call, referencing a specific discussion point and confirming the next step.  
3. Prepare the invoice follow‑up message, including invoice number, original due date, and days overdue.  

---

<details><summary>Log</summary>

```
[2026-06-10T18:20:06.844Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T18:20:06.874Z] Loaded the **daily-briefing** skill playbook for this task.
[2026-06-10T18:20:06.874Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:21:06.191Z] Hermes responded in 59.3s (66 chars).
[2026-06-10T18:21:19.808Z] Quality gate: Hermes answer didn't pass clawbot's quality.check (score 0.70) — offloading to clawbot.
[2026-06-10T18:21:19.808Z] Working as Neuro — AI agent operator.
[2026-06-10T18:21:19.825Z] Thinking about the best approach…
[2026-06-10T18:21:19.903Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-10T18:21:34.661Z] Plan ready: 3 steps — Gather today’s meetings and open follow-ups, then format them into a concise briefing..
[2026-06-10T18:21:34.672Z] Running with help from 2 peer workers (capacity 7 thinking + 8 I/O sub-agents).
[2026-06-10T18:21:34.672Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-06-10T18:21:34.672Z] Step 1 of 3: calendar.activity
[2026-06-10T18:21:34.674Z] Step 2 of 3: Searching your second brain for "follow-up"
[2026-06-10T18:21:35.772Z] Wave 1 finished in 1.1s.
[2026-06-10T18:21:35.773Z] Step 3 of 3: Thinking about it
[2026-06-10T18:21:46.742Z] All sub-agents finished in 12.1s.
[2026-06-10T18:21:46.781Z] Thinking with openai/gpt-oss-20b:free (~5 525 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-10T18:22:12.884Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-10T18:22:12.891Z] Running with help from 2 peer workers (capacity 7 thinking + 8 I/O sub-agents).
[2026-06-10T18:22:12.891Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-10T18:22:12.891Z] Step 5 of 5: Security-scanning the note
[2026-06-10T18:22:12.891Z] Step 4 of 5: Quality-checking the draft
[2026-06-10T18:22:23.166Z] Wave 1 finished in 10.3s.
[2026-06-10T18:22:23.166Z] All sub-agents finished in 10.3s.
[2026-06-10T18:22:23.166Z] Quality check passed (87%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-10T18:22:23.203Z] Saved this workflow as a reusable template: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c.
[2026-06-10T18:22:23.204Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-06-10T18:22:23.214Z] Filed to your second brain → 0-Inbox/202606101822-curated-give-me-my-daily-briefing-for-today-today-s-meetings-plus-an.md.
```
</details>
