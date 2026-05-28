---
type: job
title: Team task #10: Write 6 test cases in Gherkin style for an email-to-job inbo
slug: team-task-10-write-6-test-cases-in-gherkin-style-for-an-emai-339d26aa
created: 2026-05-28T13:37:25.834Z
jobId: 339d26aa-b69c-4f2e-8d2a-5f22ea9ef16f
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T13:35:19.193Z
finishedAt: 2026-05-28T13:37:25.834Z
---

# Team task #10: Write 6 test cases in Gherkin style for an email-to-job inbo

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:35:19.193Z
- **Finished:** 2026-05-28T13:37:25.834Z
- **Title:** Team task #10: Write 6 test cases in Gherkin style for an email-to-job inbo

## Inputs
```json
{
  "task": "(You are operating as Quinn, the QA Engineer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Write 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.",
  "teamTask": {
    "taskIndex": 9,
    "persona": "qa-engineer",
    "route": "explicit"
  },
  "personaId": "qa-engineer"
}
```

## Plan
Default research plan for: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B,

### Steps
1. ✓ Researching "6 test cases in Gherkin style for an email-to-job inbound feature, including at …" — vault + web — `research.deep` (68.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (17.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Email‑to‑Job Inbound Feature – Gherkin Test Cases

**Feature:** Process inbound candidate emails and create job‑application records.

| # | Scenario (Gherkin) |
|---|--------------------|
| 1 | **Successful creation from a well‑formed email**<br>```gherkin<br>Scenario: Create job application from a valid candidate email<br>  Given the inbound email service is running<br>  And an email with subject “Application – Software Engineer” and a PDF résumé attachment is received<br>  When the system parses the email<br>  Then a new job‑application record is created with status “Pending Review”<br>  And the candidate’s name, email address, and résumé are stored correctly<br>``` |
| 2 | **Missing résumé attachment (edge case)**<br>```gherkin<br>Scenario: Reject email without résumé attachment<br>  Given the inbound email service is running<br>  And an email with subject “Application – Designer” but no attachment is received<br>  When the system parses the email<br>  Then the email is marked as “Invalid”<br>  And a notification is sent to the sender requesting a résumé<br>``` |
| 3 | **Unsupported file type (edge case)**<br>```gherkin<br>Scenario: Reject email with non‑PDF résumé<br>  Given the inbound email service is running<br>  And an email with subject “Application – Analyst” and an attachment “resume.docx” is received<br>  When the system validates the attachment<br>  Then the email is marked as “Invalid”<br>  And an error message is sent to the sender explaining the allowed formats<br>``` |
| 4 | **Duplicate application detection**<br>```gherkin<br>Scenario: Detect duplicate application from same email address<br>  Given a job‑application record already exists for candidate@example.com<br>  And a new email with subject “Application – Product Manager” from candidate@example.com is received<br>  When the system parses the email<br>  Then the new application is rejected as a duplicate<br>  And the candidate receives a notification that an application is already in progress<br>``` |
| 5 | **Large attachment size (edge case)**<br>```gherkin<br>Scenario: Reject email with résumé larger than 10 MB<br>  Given the inbound email service is running<br>  And an email with subject “Application – Data Scientist” and a 12 MB résumé attachment is received<br>  When the system validates the attachment size<br>  Then the email is marked as “Invalid”<br>  And the sender is informed that the attachment exceeds the size limit<br>``` |
| 6 | **Non‑English subject line**<br>```gherkin<br>Scenario: Process application with non‑English subject line<br>  Given the inbound email service is running<br>  And an email with subject “Solicitud – Ingeniero de Software” and a PDF résumé attachment is received<br>  When the system parses the email<br>  Then a job‑application record is created with status “Pending Review”<br>  And the system correctly extracts the job title from the subject regardless of language<br>``` |

**Sources**  
- Gherkin style guidance and best practices: [2]  
- Example Gherkin scenarios for email processing: [3]

<details><summary>Log</summary>

```
[2026-05-28T13:35:19.193Z] team-task #10 · persona=qa-engineer · route=explicit
[2026-05-28T13:35:19.193Z] **Quinn** (QA Engineer) is on this team-task.
[2026-05-28T13:35:19.482Z] Thinking about the best approach…
[2026-05-28T13:35:19.507Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:35:21.833Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:35:21.833Z] Plan ready: 1 step — Default research plan for: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B,.
[2026-05-28T13:35:25.843Z] Step 1 of 1: Researching "6 test cases in Gherkin style for an email-to-job inbound feature, including at …" — vault + web
[2026-05-28T13:36:34.244Z] All sub-agents finished in 68.4s.
[2026-05-28T13:36:34.255Z] Thinking with openai/gpt-oss-20b:free (~3 624 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:37:08.405Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:37:08.407Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:37:08.407Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:37:08.407Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:37:08.407Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:37:10.048Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:37:25.834Z] Wave 1 finished in 17.4s.
[2026-05-28T13:37:25.834Z] All sub-agents finished in 17.4s.
[2026-05-28T13:37:25.834Z] Quality check passed (93%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
