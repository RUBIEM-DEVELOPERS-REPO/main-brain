---
title: "Data Deletion Management System Brs"
imported_from: "C:/Users/Arthur Magaya/Downloads/Data Deletion Management System Brs.pdf"
imported_at: 2026-05-26T19:08:14.2538214+02:00
created: 2026-05-26
kind: pdf
size_kb: 33.5
tags: [imported, downloads, bulk-import]
---

# Data Deletion Management System Brs

Imported from `C:\Users\Arthur Magaya\Downloads\Data Deletion Management System Brs.pdf` on 2026-05-26. Original size 33.5 KB.

The full file is filed in your vault at [[_imports/downloads/Data Deletion Management System Brs.pdf]] — open it in Obsidian for the content.

## Source provenance
- Original path: `C:\Users\Arthur Magaya\Downloads\Data Deletion Management System Brs.pdf`
- Imported by: bulk-import script (downloads)
- Original preserved on the PC.

## Excerpt (first 6 000 chars, pdf) — 12 pages

Business Requirements Specification
Project Title: Data Deletion Management System (DDMS)
Version: 1.0
Prepared for: [Your Organisation]
Prepared by: ChatGPT
Reference Law: Zimbabwe Data Protection Act [Chapter 11:22]
1. Purpose
The purpose of this system is to enable the organisation to manage the deletion, erasure, retention,
restriction, and proof of disposal of personal data in a lawful, controlled, secure, and auditable manner.
The system must support compliance with the Act, including:
the requirement that data be kept no longer than necessary for the purpose collected;
the data subject’s right to deletion of false or misleading data;
controller obligations to ensure accuracy, lawful processing, and privacy;
security, accountability, and breach-related controls surrounding stored and deleted data.
2. Business Objective
The organisation requires a system that will: 1. Identify personal data eligible for deletion. 2. Process
deletion requests from data subjects and internal users. 3. Enforce retention schedules and legal holds. 4.
Maintain evidence that deletion was performed correctly. 5. Prevent unlawful deletion where records must
be retained by law, contract, litigation, public interest, research, employment, or security grounds. 6.
Reduce privacy risk caused by over-retention of personal information.
3. Background
The Act requires data controllers to ensure data is:
adequate, relevant, and not excessive;
accurate and up to date;
retained in identifiable form for no longer than necessary.
It also grants the data subject rights including:
access,
objection,
correction,
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
1

deletion of false or misleading data.
Controllers must also implement technical and organisational security measures, notify the Authority of
breaches, and demonstrate accountability.
4. Scope
4.1 In Scope
The system shall manage:
personal data deletion requests;
retention-based automatic deletion;
soft delete and hard delete workflows;
anonymisation/pseudonymisation where deletion is not legally possible;
deletion approvals and exception handling;
deletion of structured and unstructured records;
deletion audit logs and compliance reporting;
notification workflows to compliance, legal, and data owners;
deletion across databases, files, archives, backups metadata, and integrated systems.
4.2 Out of Scope
cybercrime investigation functionality;
customer analytics unrelated to deletion;
creation of legal regulations;
direct breach-response platform functionality, except deletion-related records and evidence.
5. Stakeholders
Data Protection Officer (DPO)
Compliance Team
Legal Team
IT Operations
Security Team
Business Data Owners
Customer Service / Privacy Desk
Data Subjects
Executive Management
Regulator / Authority where applicable under notification, inspection, or compliance review.
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
2

6. Business Problem Statement
The organisation currently faces risk that:
personal data is kept longer than necessary;
deletion requests are handled manually and inconsistently;
data is deleted in one system but remains in others;
no proof exists to demonstrate lawful deletion;
deletion may occur when data should be preserved for legal or operational reasons;
the organisation cannot easily demonstrate compliance to the Authority.
This creates legal, reputational, operational, and privacy risk under the Act’s retention, rights, security, and
accountability provisions.
7. Assumptions
The organisation is a data controller or acts on behalf of one.
Personal data exists in multiple business applications and repositories.
The organisation has or will define retention rules by data type.
Legal and compliance teams will define deletion exceptions.
Some data may need to be retained due to law, public interest, national security, legal claims,
employment, research, or health-related exceptions under the Act.
8. High-Level Business Requirements
BR1. Data Discovery and Classification
The system must identify and classify personal data by:
data subject;
data category;
sensitivity level;
source system;
purpose of processing;
retention period;
legal basis or exception.
BR2. Retention Management
The system must assign and enforce retention schedules so that personal data is not retained longer than
necessary for its purpose.
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
3

BR3. Deletion Request Management
The system must allow submission, review, approval, rejection, and fulfilment of deletion requests from
data subjects or authorised internal staff.
BR4. Validation of Deletion Eligibility
The system must determine whether data can be deleted immediately, must be retained, or should be
restricted/anonymised instead.
BR5. Deletion Execution
The system must support:
record-level deletion;
bulk deletion;
workflow-driven deletion;
rule-based automatic deletion;
deletion propagation across connected systems.
BR6. Exception and Legal Hold Management
The system must block deletion where records are under:
litigation hold;
investigation;
statutory retention;
contractual retention;
public interest or security exceptions;
research or health-related exceptions, where permitted by law.
BR7. Audit and Accountability
The system must keep an immutable audit trail showing:
who requested deletion;
legal basis reviewed;
approval decision;
date and time of action;
records affected;
deletion outcome;
exception rationale.
BR8. Security and Access Control
The system must ensure only authorised users can view, approve, reject, or execute deletion actions, and
must protect deletion logs and associated data with appropriate security measures.
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
4

BR9. Reporting and Compliance Monitoring
The system must produce reports for management, auditors, and the DPO on:
pending deletion requests;
completed deletions;
overdue requests;
exception cases;
retention violations;
deletion evidence.
BR10. Notification and Escalatio
