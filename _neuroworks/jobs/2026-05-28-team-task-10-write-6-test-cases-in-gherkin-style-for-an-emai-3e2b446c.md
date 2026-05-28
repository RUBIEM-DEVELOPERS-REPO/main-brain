---
type: job
title: Team task #10: Write 6 test cases in Gherkin style for an email-to-job inbo
slug: team-task-10-write-6-test-cases-in-gherkin-style-for-an-emai-3e2b446c
created: 2026-05-28T13:27:53.936Z
jobId: 3e2b446c-f198-49f8-89e1-5e899972cdd5
status: succeeded
template: general-task
persona: none
personaName: 
startedAt: 2026-05-28T13:26:08.885Z
finishedAt: 2026-05-28T13:27:53.936Z
---

# Team task #10: Write 6 test cases in Gherkin style for an email-to-job inbo

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:26:08.885Z
- **Finished:** 2026-05-28T13:27:53.936Z
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
1. ✓ Researching "6 test cases in Gherkin style for an email-to-job inbound feature, including at …" — vault + web — `research.deep` (69.5s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (12.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✗ Asking a peer to review the draft — `peer.review` (10.3s)
    > auto-injected: quality score=0.74 (pass=true) — peer review for a second opinion
    error: review HTTP 503

## Answer
Below are six Gherkin‑style test cases for the **email‑to‑job inbound** feature. They cover the core happy‑path flow and include two edge‑case scenarios (invalid attachment type and oversized email).  

| # | Feature | Scenario | Gherkin Steps |
|---|---------|----------|---------------|
| 1 | **Create job from a valid email** | A recruiter sends a correctly formatted email with a PDF attachment that contains the job description. | ```gherkin\nFeature: Email‑to‑Job inbound\n  As a recruiter\n  I want to create a new job posting by emailing a specific address\n  So that the system automatically extracts the details.\n\nScenario: Successful job creation from a valid email\n  Given the system is listening on inbound@jobs.example.com\n  When a recruiter sends an email with subject "Senior Engineer – New York"\n    And the email body contains required fields (title, location, salary, description)\n    And a PDF attachment named "JobDescription.pdf"\n  Then a new job record is created\n    And the job status is set to “Draft”\n    And the attachment is stored and linked to the job\n``` |
| 2 | **Missing required field** | The email body omits the salary line. | ```gherkin\nScenario: Email missing a required field\n  Given the system receives an email with subject "Product Manager – Remote"\n    And the body contains title and location but no salary\n  When the email is processed\n  Then the job is not created\n    And an error notification is sent to the sender indicating the missing salary field\n``` |
| 3 | **Unsupported attachment type (edge case)** | The email includes a .exe file instead of a supported document. | ```gherkin\nScenario: Email with unsupported attachment type\n  Given an email is received with a .exe attachment\n  When the attachment is validated\n  Then the job creation is aborted\n    And the sender receives a rejection message stating “Unsupported attachment type – only PDF, DOCX, or TXT are allowed.”\n``` |
| 4 | **Oversized email (edge case)** | The total size of the email (including attachments) exceeds the 10 MB limit. | ```gherkin\nScenario: Email exceeds size limit\n  Given an email with total size 12 MB is received\n  When the size check runs\n  Then processing stops\n    And the sender is notified that the email is too large and to resend with smaller attachments\n``` |
| 5 | **Duplicate job detection** | An email is sent that matches an existing job (same title and location). | ```gherkin\nScenario: Duplicate job detection\n  Given a job titled "Data Analyst – Chicago" already exists in the system\n  When a new email with the same title and location is processed\n  Then the system flags the email as a duplicate\n    And no new job is created\n    And the sender receives a warning about the duplicate\n``` |
| 6 | **Email from unauthorized address** | The sender’s email domain is not on the whitelist. | ```gherkin\nScenario: Unauthorized sender\n  Given the whitelist contains only @company.com addresses\n  When an email from user@external.com arrives\n  Then the email is rejected\n    And the sender receives a message stating “Your domain is not authorized to create jobs via email.”\n```  

These six scenarios satisfy the request: three normal flows (1, 2, 5), two edge cases (3, 4), and one security‑related validation (6). They can be directly used in a BDD test suite (e.g., Cucumber, Behave) to verify the email‑to‑job inbound functionality.

<details><summary>Log</summary>

```
[2026-05-28T13:26:08.885Z] team-task #10 · persona=qa-engineer · route=explicit
[2026-05-28T13:26:08.885Z] **Quinn** (QA Engineer) is on this team-task.
[2026-05-28T13:26:09.092Z] Thinking about the best approach…
[2026-05-28T13:26:09.111Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:26:11.120Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:26:11.121Z] Plan ready: 1 step — Default research plan for: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B,.
[2026-05-28T13:26:11.125Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:26:11.125Z] Step 1 of 1: Researching "6 test cases in Gherkin style for an email-to-job inbound feature, including at …" — vault + web
[2026-05-28T13:27:20.628Z] All sub-agents finished in 69.5s.
[2026-05-28T13:27:20.642Z] Thinking with openai/gpt-oss-20b:free (~3 624 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:27:25.144Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T13:27:31.262Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-28T13:27:31.262Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:27:31.266Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:27:31.266Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:27:31.266Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:27:31.266Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:27:32.326Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:27:35.164Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T13:27:43.643Z] Wave 1 finished in 12.4s.
[2026-05-28T13:27:43.643Z] All sub-agents finished in 12.4s.
[2026-05-28T13:27:43.645Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T13:27:43.646Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-28T13:27:44.755Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-28T13:27:48.034Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-28T13:27:53.936Z]   ✗ Asking a peer to review the draft: review HTTP 503
[2026-05-28T13:27:53.936Z] First wave had no successful sub-agents — stopping early. I'll summarise what was tried and why it didn't land.
[2026-05-28T13:27:53.936Z] All sub-agents finished in 10.3s.
```
</details>
