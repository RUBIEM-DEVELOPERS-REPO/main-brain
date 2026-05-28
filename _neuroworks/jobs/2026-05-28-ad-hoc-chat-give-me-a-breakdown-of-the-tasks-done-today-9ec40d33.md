---
type: job
title: Ad-hoc: Chat, give me a breakdown of the tasks done today
slug: ad-hoc-chat-give-me-a-breakdown-of-the-tasks-done-today-9ec40d33
created: 2026-05-28T15:10:00.247Z
jobId: 9ec40d33-d70b-45ed-92af-86d50aa513db
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T15:08:53.496Z
finishedAt: 2026-05-28T15:10:00.247Z
---

# Ad-hoc: Chat, give me a breakdown of the tasks done today

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T15:08:53.496Z
- **Finished:** 2026-05-28T15:10:00.247Z
- **Title:** Ad-hoc: Chat, give me a breakdown of the tasks done today

## Inputs
```json
{
  "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nChat, give me a breakdown of the tasks done today",
  "userText": "Chat, give me a breakdown of the tasks done today",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Plan
Default research plan for: Chat, give me a breakdown of the tasks done today

### Steps
1. ✓ Researching "Chat, give me a breakdown of the tasks done today" — vault + web — `research.deep` (26.9s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (14.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.7s)
    > auto-injected: quality score=0.61 (pass=true) — peer review for a second opinion

## Answer
**How to see a “break‑down of the tasks you completed today”**

1. **Open the Search bar** in Asana (top‑right).  
2. Click **Advanced Search**.  
3. Set the following filters:  

   * **Assignee** – *Me* (or the person whose work you want to review)  
   * **Completion Date** – *Today* (you can also pick “Yesterday” or a custom range)  

4. Press **Search**.  
5. When the results appear, click the **star** icon to **save** the search.  
   *Saved searches act like a permanent view, so you can open it again without re‑creating the filter.*  

6. (Optional) In the results list you can **sort** by **Completed On** to see the exact order you finished each task.  

**Why this works**

- The Asana forum confirms that the “completed‑today” view is still possible, but you must remove the default “incomplete‑only” filter and use an advanced search with a *completionDate = today* filter. Saving the search avoids having to rebuild it each day【1†L1-L8】.  

**If you’re on the free plan**

- The free tier does not include the “Saved Search” shortcut, but you can still run the same advanced search manually each day.  

**Quick cheat‑sheet**

| Step | Action | Result |
|------|--------|--------|
| 1 | Click search bar → *Advanced Search* | Opens filter dialog |
| 2 | Set **Assignee = Me** | Limits to your tasks |
| 3 | Set **Completion Date = Today** | Shows only tasks finished today |
| 4 | Click **Search** | Displays the list |
| 5 | (Free plan) Bookmark the URL or (paid) ★ to save | Easy repeat access |

That list is your “break‑down of the tasks done today.”

<details><summary>Log</summary>

```
[2026-05-28T15:08:53.497Z] Handling this myself — no peer workers are reachable.
[2026-05-28T15:08:53.498Z] Working as Clawbot — AI agent operator.
[2026-05-28T15:08:54.531Z] Thinking about the best approach…
[2026-05-28T15:08:54.553Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T15:09:12.554Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T15:09:12.556Z] Plan ready: 1 step — Default research plan for: Chat, give me a breakdown of the tasks done today.
[2026-05-28T15:09:12.556Z] Step 1 of 1: Researching "Chat, give me a breakdown of the tasks done today" — vault + web
[2026-05-28T15:09:39.479Z] All sub-agents finished in 26.9s.
[2026-05-28T15:09:39.480Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T15:09:39.480Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T15:09:39.480Z] Step 3 of 3: Security-scanning the note
[2026-05-28T15:09:39.480Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T15:09:42.065Z]   ⟳ Quality-checking the draft: transient error (attempt 1/2), retrying in 1.5s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T15:09:44.743Z]   ⟳ Quality-checking the draft: transient error (attempt 2/2), retrying in 4.0s — OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"openai/gpt-oss-20b:free is t
[2026-05-28T15:09:54.250Z] Wave 1 finished in 14.8s.
[2026-05-28T15:09:54.250Z] All sub-agents finished in 14.8s.
[2026-05-28T15:09:54.254Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-05-28T15:09:54.254Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-28T15:09:58.908Z] All sub-agents finished in 4.7s.
[2026-05-28T15:09:58.908Z] Wrote to your second brain — committing the changes.
[2026-05-28T15:09:59.132Z] Vault commit: done.
[2026-05-28T15:09:59.139Z] Saved this workflow as a reusable template: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool.
[2026-05-28T15:09:59.139Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-05-28T15:10:00.247Z] Not filed to the vault — quality below threshold (factuality_risk=1.00, citation_coverage=0.00, persona_fit=0.00).
```
</details>
