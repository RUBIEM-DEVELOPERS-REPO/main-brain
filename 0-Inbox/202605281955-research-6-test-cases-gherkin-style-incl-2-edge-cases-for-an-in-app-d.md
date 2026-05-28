---
title: "Research: 6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest that summarizes a user's unread notificatio"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: 6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest that summarizes a user's unread notifications

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are

**Feature: Daily digest of unread notifications**

*As a user I want to receive an in‑app daily digest that lists all of my unread notifications so I can catch up quickly.*

---  

### Scenario 1 – Normal day with unread notifications  
**Given** the user is logged in and has 5 unread notifications (messages, mentions, and likes)  
**When** the daily‑digest job runs at 08:00 AM  
**Then** the digest screen shows a summary list containing exactly those 5 notifications, grouped by type, and each entry links to its source content  

---  

### Scenario 2 – No unread notifications  
**Given** the user is logged in and has 0 unread notifications  
**When** the daily‑digest job runs at 08:00 AM  
**Then** the digest displays the message “You have no new notifications today” and no notification items are listed  

---  

### Scenario 3 – New notifications arrive after the digest is generated  
**Given** the user has 3 unread notifications at 07:55 AM  
**When** the digest is generated at 08:00 AM  
**And** 2 additional notifications arrive at 08:05 AM  
**Then** the digest still shows only the original 3 notifications (the later ones will appear in the next day’s digest)  

---  

### Scenario 4 – User disables the daily digest (edge case)  
**Given** the user has disabled the daily‑digest setting in preferences  
**When** the scheduled digest job runs at 08:00 AM  
**Then** no digest is created and the user does not see a digest entry in the app  

---  

### Scenario 5 – Digest generation fails due to a server error (edge case)  
**Given** the user has 4 unread notifications  
**When** the daily‑digest job attempts to run but the notification service returns a 500 error  
**Then** the app logs the failure and shows a non‑intrusive banner “Unable to generate today’s digest – will retry tomorrow”  

---  

### Scenario 6 – User opens the digest while offline (edge case)  
**Given** the user has 2 unread notifications and the last successful digest was stored locally  
**When** the user opens the app without network connectivity  
**Then** the digest displays the cached summary of those 2 notifications and indicates “Last updated yesterday”  

*All scenarios follow the Gherkin “Given → When → Then” structure and each covers a single behavior, as recommended in BDD best‑practice guidance [1].*

## Web sources
1. [BDD 101: Writing Good Gherkin | Automation Panda](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/) _(relevance 9, http)_
2. [Writing User Stories With Gherkin | by Nic Werner | Medium](https://medium.com/@nic/writing-user-stories-with-gherkin-dda63461b1d2) _(relevance 5, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[How to Write Good Gherkin for BDD](https://www.youtube.com/watch?v=YD7pHObAROM)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
