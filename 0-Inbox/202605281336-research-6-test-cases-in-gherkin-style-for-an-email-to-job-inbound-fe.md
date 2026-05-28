---
title: "Research: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check —"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: 6 test cases in Gherkin style for an email-to-job inbound feature, including at least 2 edge cases.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B,

**Feature: Email‑to‑Job inbound processing**

The system receives an email from a candidate and creates a job‑application record.  
The following six Gherkin scenarios cover the happy path and two edge‑case situations.

| # | Scenario (Gherkin) |
|---|--------------------|
| 1 | **Successful creation from a well‑formed email**<br>```gherkin<br>Scenario: Create job application from a valid candidate email<br>  Given the inbound email service is running<br>  And an email with subject “Application – Software Engineer” and body containing a valid résumé attachment is received<br>  When the system parses the email<br>  Then a new job‑application record is created with status “Pending Review”<br>  And the candidate’s name, email address, and résumé are stored correctly<br>``` |
| 2 | **Missing résumé attachment** (edge case)<br>```gherkin<br>Scenario: Reject email without résumé attachment<br>  Given the inbound email service is running<br>  And an email with subject “Application – Designer” but **no attachment** is received<br>  When the system parses the email<br>  Then the email is marked as “Invalid”<br>  And a notification is sent to the sender asking for a résumé<br>``` |
| 3 | **Unsupported file type** (edge case)<br>```gherkin<br>Scenario: Reject email with non‑PDF résumé<br>  Given the inbound email service is running<br>  And an email with subject “Application – Analyst” and an attachment “resume.docx” is received<br>  When the system validates the attachment<br>  Then the email is marked as “Invalid”<br>  And a notification is sent stating “Only PDF résumés are accepted”<br>``` |
| 4 | **Duplicate application detection**<br>```gherkin<br>Scenario: Detect duplicate application from same candidate<br>  Given a job‑application record already exists for candidate “alice@example.com” for the “Product Manager” role<br>  And a new email from “alice@example.com” with subject “Application – Product Manager” and a PDF résumé is received<br>  When the system parses the email<br>  Then the existing record is updated with “Duplicate submission” flag<br>  And the sender receives a confirmation that the application was already on file<br>``` |
| 5 | **Invalid email address format** (edge case)<br>```gherkin<br>Scenario: Reject email with malformed sender address<br>  Given the inbound email service is running<br>  And an email from “bob[at]mail.com” (invalid format) is received<br>  When the system validates the sender address<br>  Then the email is marked as “Invalid”<br>  And a bounce‑back is sent indicating the address is malformed<br>``` |
| 6 | **Processing a multipart/alternative email (HTML + plain text)**<br>```gherkin<br>Scenario: Correctly extract candidate data from multipart email<br>  Given the inbound email service is running<br>  And an email with both HTML and plain‑text parts, subject “Application – QA Engineer”, and a PDF résumé is received<br>  When the system parses the email<br>  Then it extracts the candidate’s name and email from either part<br>  And creates a job‑application record with the correct details<br>``` |

**Why these scenarios?**  

* The Gherkin keywords *Feature, Scenario, Given, When, Then, And* are the core elements described in the Gherkin style overview [1].  
* Good practice is to keep each scenario focused on a single behavior (the “one scenario, one behavior” rule) [2].  
* Edge cases (missing attachment, unsupported file type, malformed sender address) are explicitly included as required.  

These six scenarios give a concise, behavior‑driven test suite for the email‑to‑job inbound feature.

## Web sources
1. [A Glance at the Gherkin Style for Acceptance Criteria and Cucumber 🥒 | by Afi Maame Dufie | Medium](https://medium.com/@afimaamedufie/a-glance-at-the-gherkin-style-acceptance-criteria-and-cucumber-b7b93fd37b36) _(relevance 20, http)_
2. [BDD 101: Writing Good Gherkin | Automation Panda](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/) _(relevance 15, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[How to Write Good Gherkin for BDD - YouTube](https://www.youtube.com/watch?v=YD7pHObAROM)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
