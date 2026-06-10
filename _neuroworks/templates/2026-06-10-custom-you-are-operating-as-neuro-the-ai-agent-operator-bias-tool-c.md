---
type: template
title: Gather today’s meetings and open follow-ups, then format them into a concise briefing. (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-10T18:22:23.195Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Give me my daily briefing for today: today's meetings plus any open follow-ups you have on file.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Gather today’s meetings and open follow-ups, then format them into a concise briefing. (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me my daily briefing for today: today's meetings plus any open follow-ups you have on file.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me my daily briefing for today: today's meetings plus any open follow-ups you have on file.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "calendar.activity",
      "args": {
        "from": "today",
        "to": "today"
      },
      "rationale": "Retrieve all scheduled meetings for today.",
      "label": "calendar.activity"
    },
    {
      "tool": "vault.search",
      "args": {
        "query": "follow-up"
      },
      "rationale": "Find any open follow-up items in the vault.",
      "label": "Searching your second brain for \"follow-up\""
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "You are a concise daily briefing assistant. Using the information from the two previous steps, produce a short briefing that lists:\n- All meetings scheduled for today (include time, title, and participants if available).\n- Any open follow-up items that are on file (list title and status).\nFormat the output as a numbered list with each meeting on its own line, followed by a separate numbered list for follow-ups. Do not add any extra content.\n\nMeetings:\n$step_0.events\n\nFollow-ups:\n$step_1.matches",
        "system": "You are a concise daily briefing assistant. Output only the requested numbered lists."
      },
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me my daily briefing for today: today's meetings plus any open follow-ups you have on file.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "# Neuro — Briefing for 2026-06-10\n\n## Today's shape\n- **Meetings:** 0  \n- **First / last commitment:** none  \n- **Focus blocks:** 0\n\n## Carryover from yesterday\n- No carryover items were recorded in the vault for this date.\n\n## Inbox — needs you\n1. **Research: As a Talent Recruiter, draft outreach + follow‑up that respects candidate time** – status: open  \n2. **Research: personalised follow‑up email after this sales call. Open by referencing one specific thing they said. Confirm the next step** – status: open  \n3. **Multi‑perspective: insurance sales agent client record maintenance and policy renewal follow‑up** – status: open  \n4. **Research: As a Account Executive, draft follow‑up emails that name the next step + a date** – status: open  \n5. **Research: invoice follow‑up message. Tone: firm but polite. Reference the invoice number and original due date, state the days over** – status: open  \n6. **Research: Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending follow‑ups in 0‑Inbox/, and surface a short** – status: open  \n7. **UI polish landed via the impeccable critique, taste‑skill bundle installed and assessed, all‑template grader sweep run, daily reflection captured. Three real bugs surfaced that are worth fixing in a f** – status: open  \n8. **Known issues / follow‑ups** – status: open\n\n## Top 3 today\n1. Draft and send the Talent Recruiter outreach email, ensuring candidate time is respected.  \n2. Compose the personalised follow‑up for the recent sales call, referencing a specific discussion point and confirming the next step.  \n3. Prepare the invoice follow‑up message, including invoice number, original due date, and days overdue.  \n\n---",
        "sources": "[1] calendar.activity\n{\"from\":\"today\",\"to\":\"today\",\"days\":[]}\n\n[2] vault.search (query=\"follow-up\")\n0-Inbox/2026-05-27-progress-ui-polish-taste-skill-grader-sweep.md: UI polish landed via the impeccable critique, taste-skill bundle installed and assessed, all-template grader sweep run, \n0-Inbox/2026-05-28-neuroworks-session-report.md: ## 7. Known issues / follow-ups\n0-Inbox/202605290943-research-as-a-talent-recruiter-draft-outreach-follow-up-that-respects.md: title: \"Research: As a Talent Recruiter, draft outreach + follow-up that respects candidate time\"\n0-Inbox/202605290947-research-personalised-follow-up-email-after-this-sales-call-open-by-r.md: title: \"Research: personalised follow-up email after this sales call. Open by referencing one specific thing they said. \n0-Inbox/202605291350-multiperspective-insurance-sales-agent-client-record-maintenance-and-policy-r.md: title: \"Multi-perspective: insurance sales agent client record maintenance and policy renewal follow-up\"\n0-Inbox/202605291448-research-as-a-talent-recruiter-draft-outreach-follow-up-that-respects.md: title: \"Research: As a Talent Recruiter, draft outreach + follow-up that respects candidate time\"\n\n[3] ollama.generate\n1. No meetings scheduled for today.\n\nFollow-ups:\n1. “Research: As a Talent Recruiter, draft outreach + follow-up that respects candidate time” – status: open  \n2. “Research: personalised follow-up email after this sales call. Open by referencing one specific thing they said. Confirm the next step” – status: open  \n3. “Multi-perspective: insurance sales agent client record maintenance and policy renewal follow-up” – status: open  \n4. “Research: As a Account Executive, draft follow-up emails that name the next step + a date” – status: open  \n5. “Research: invoice follow-up message. Tone: firm but polite. Reference the invoice number and original due date, state the days over” – status: open  \n6. “Research: Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending follow-ups in 0-Inbox/, and surface a short” – status: open  \n7. “UI polish landed via the impeccable critique, taste-skill bundle installed and assessed, all-template grader sweep run, daily reflection captured. Three real bugs surfaced that are worth fixing in a f” – status: open  \n8. “Known issues / follow-ups” – status: open"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "# Neuro — Briefing for 2026-06-10\n\n## Today's shape\n- **Meetings:** 0  \n- **First / last commitment:** none  \n- **Focus blocks:** 0\n\n## Carryover from yesterday\n- No carryover items were recorded in the vault for this date.\n\n## Inbox — needs you\n1. **Research: As a Talent Recruiter, draft outreach + follow‑up that respects candidate time** – status: open  \n2. **Research: personalised follow‑up email after this sales call. Open by referencing one specific thing they said. Confirm the next step** – status: open  \n3. **Multi‑perspective: insurance sales agent client record maintenance and policy renewal follow‑up** – status: open  \n4. **Research: As a Account Executive, draft follow‑up emails that name the next step + a date** – status: open  \n5. **Research: invoice follow‑up message. Tone: firm but polite. Reference the invoice number and original due date, state the days over** – status: open  \n6. **Research: Look at the last 5 days of journal entries in _neuroworks/jobs/, any pending follow‑ups in 0‑Inbox/, and surface a short** – status: open  \n7. **UI polish landed via the impeccable critique, taste‑skill bundle installed and assessed, all‑template grader sweep run, daily reflection captured. Three real bugs surfaced that are worth fixing in a f** – status: open  \n8. **Known issues / follow‑ups** – status: open\n\n## Top 3 today\n1. Draft and send the Talent Recruiter outreach email, ensuring candidate time is respected.  \n2. Compose the personalised follow‑up for the recent sales call, referencing a specific discussion point and confirming the next step.  \n3. Prepare the invoice follow‑up message, including invoice number, original due date, and days overdue.  \n\n---",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Gather today’s meetings and open follow-ups, then format them into a concise briefing.",
  "waves": [
    [
      0,
      1
    ],
    [
      2
    ],
    [
      3,
      4
    ]
  ]
}
```
