---
title: "Research: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check —"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 0
sources_dropped: 3
---

# Research: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B,

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

## Web sources
_(no sources survived validation)_

## Filtered sources _(3 dropped by validator)_
- ~~[Checking your browser...](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/)~~ — bad-status (HTTP 403)
- ~~[How to Write Good Gherkin for BDD - YouTube](https://www.youtube.com/watch?v=YD7pHObAROM)~~ — fetch-failed (This operation was aborted)
- ~~[A Glance at the Gherkin Style for Acceptance Criteria and Cucumber](https://medium.com/@afimaamedufie/a-glance-at-the-gherkin-style-acceptance-criteria-and-cucumber-b7b93fd37b36)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
