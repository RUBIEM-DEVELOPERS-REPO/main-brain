---
type: job
title: Team task #3: Write 6 test cases (Gherkin style, incl. 2 edge cases) for:
slug: team-task-3-write-6-test-cases-gherkin-style-incl-2-edge-cas-c9a74c14
created: 2026-05-28T19:56:44.062Z
jobId: c9a74c14-35dd-4f73-8321-5b27a47a637e
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T19:55:04.419Z
finishedAt: 2026-05-28T19:56:44.061Z
---

# Team task #3: Write 6 test cases (Gherkin style, incl. 2 edge cases) for: 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T19:55:04.419Z
- **Finished:** 2026-05-28T19:56:44.061Z
- **Title:** Team task #3: Write 6 test cases (Gherkin style, incl. 2 edge cases) for: 

## Inputs
```json
{
  "task": "(You are operating as Quinn, the QA Engineer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite 6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest that summarizes a user's unread notifications\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Write 6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest that summarizes a user's unread notifications",
  "teamTask": {
    "taskIndex": 2,
    "persona": "qa-engineer",
    "route": "explicit"
  },
  "personaId": "qa-engineer"
}
```

## Plan
Default research plan for: 6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest that summarizes a user's unread notifications

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are

### Steps
1. ✓ Researching "6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest tha…" — vault + web — `research.deep` (23.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (40.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
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

<details><summary>Log</summary>

```
[2026-05-28T19:55:04.420Z] team-task #3 · persona=qa-engineer · route=explicit
[2026-05-28T19:55:04.420Z] **Quinn** (QA Engineer) is on this team-task.
[2026-05-28T19:55:04.543Z] Thinking about the best approach…
[2026-05-28T19:55:04.593Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T19:55:22.567Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T19:55:22.573Z] Plan ready: 1 step — Default research plan for: 6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest that summarizes a user's unread notifications

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are.
[2026-05-28T19:55:22.579Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T19:55:22.579Z] Step 1 of 1: Researching "6 test cases (Gherkin style, incl. 2 edge cases) for: an in-app daily digest tha…" — vault + web
[2026-05-28T19:55:46.381Z] All sub-agents finished in 23.8s.
[2026-05-28T19:55:46.389Z] Thinking with openai/gpt-oss-20b:free (~3 175 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T19:55:48.036Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T19:56:03.142Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-28T19:56:03.142Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T19:56:03.147Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T19:56:03.147Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T19:56:03.147Z] Step 3 of 3: Security-scanning the note
[2026-05-28T19:56:03.148Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T19:56:13.733Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — fetch failed
[2026-05-28T19:56:16.321Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T19:56:44.061Z] Wave 1 finished in 40.9s.
[2026-05-28T19:56:44.061Z] All sub-agents finished in 40.9s.
[2026-05-28T19:56:44.061Z] Quality check passed (92%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
