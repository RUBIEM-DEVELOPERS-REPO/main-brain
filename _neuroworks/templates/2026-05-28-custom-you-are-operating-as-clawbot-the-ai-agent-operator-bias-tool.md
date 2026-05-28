---
type: template
title: Default research plan for: Chat, give me a breakdown of the tasks done today (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-05-28T15:09:59.137Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Chat, give me a breakdown of the tasks done today
---

# Default research plan for: Chat, give me a breakdown of the tasks done today (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Chat, give me a breakdown of the tasks done today"

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Chat, give me a breakdown of the tasks done today

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "Chat, give me a breakdown of the tasks done today",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"Chat, give me a breakdown of the tasks done today\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nChat, give me a breakdown of the tasks done today",
        "answer": "**How to see a “break‑down of the tasks you completed today”**\n\n1. **Open the Search bar** in Asana (top‑right).  \n2. Click **Advanced Search**.  \n3. Set the following filters:  \n\n   * **Assignee** – *Me* (or the person whose work you want to review)  \n   * **Completion Date** – *Today* (you can also pick “Yesterday” or a custom range)  \n\n4. Press **Search**.  \n5. When the results appear, click the **star** icon to **save** the search.  \n   *Saved searches act like a permanent view, so you can open it again without re‑creating the filter.*  \n\n6. (Optional) In the results list you can **sort** by **Completed On** to see the exact order you finished each task.  \n\n**Why this works**\n\n- The Asana forum confirms that the “completed‑today” view is still possible, but you must remove the default “incomplete‑only” filter and use an advanced search with a *completionDate = today* filter. Saving the search avoids having to rebuild it each day【1†L1-L8】.  \n\n**If you’re on the free plan**\n\n- The free tier does not include the “Saved Search” shortcut, but you can still run the same advanced search manually each day.  \n\n**Quick cheat‑sheet**\n\n| Step | Action | Result |\n|------|--------|--------|\n| 1 | Click search bar → *Advanced Search* | Opens filter dialog |\n| 2 | Set **Assignee = Me** | Limits to your tasks |\n| 3 | Set **Completion Date = Today** | Shows only tasks finished today |\n| 4 | Click **Search** | Displays the list |\n| 5 | (Free plan) Bookmark the URL or (paid) ★ to save | Easy repeat access |\n\nThat list is your “break‑down of the tasks done today.”",
        "sources": "[1] research.deep (query=\"Chat, give me a breakdown of the tasks done today\")\n**How to see a “break‑down of the tasks you completed today”**\n\n1. **Open the Search bar** in Asana (top‑right).  \n2. Click **Advanced Search**.  \n3. Set the following filters:  \n\n   * **Assignee** – *Me* (or the person whose work you want to review)  \n   * **Completion Date** – *Today* (you can also pick “Yesterday” or a custom range)  \n\n4. Press **Search**.  \n5. When the results appear, click the **star** icon to **save** the search.  \n   *Saved searches act like a permanent view, so you can open it again without re‑creating the filter.*  \n\n6. (Optional) In the results list you can **sort** by **Completed On** to see the exact order you finished each task.  \n\n**Why this works**\n\n- The Asana forum confirms that the “completed‑today” view is still possible, but you must remove the default “incomplete‑only” filter and use an advanced search with a *completionDate = today* filter. Saving the search avoids having to rebuild it each day【1†L1-L8】.  \n\n**If you’re on the free plan**\n\n- The free tier does not include the “Saved Search” shortcut, but you can still run the same advanced search manually each day.  \n\n**Quick cheat‑sheet**\n\n| Step | Action | Result |\n|------|--------|--------|\n| 1 | Click search bar → *Advanced Search* | Opens filter dialog |\n| 2 | Set **Assignee = Me** | Limits to your tasks |\n| 3 | Set **Completion Date = Today** | Shows only tasks finished today |\n| 4 | Click **Search** | Displays the list |\n| 5 | (Free plan) Bookmark the URL or (paid) ★ to save | Easy"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**How to see a “break‑down of the tasks you completed today”**\n\n1. **Open the Search bar** in Asana (top‑right).  \n2. Click **Advanced Search**.  \n3. Set the following filters:  \n\n   * **Assignee** – *Me* (or the person whose work you want to review)  \n   * **Completion Date** – *Today* (you can also pick “Yesterday” or a custom range)  \n\n4. Press **Search**.  \n5. When the results appear, click the **star** icon to **save** the search.  \n   *Saved searches act like a permanent view, so you can open it again without re‑creating the filter.*  \n\n6. (Optional) In the results list you can **sort** by **Completed On** to see the exact order you finished each task.  \n\n**Why this works**\n\n- The Asana forum confirms that the “completed‑today” view is still possible, but you must remove the default “incomplete‑only” filter and use an advanced search with a *completionDate = today* filter. Saving the search avoids having to rebuild it each day【1†L1-L8】.  \n\n**If you’re on the free plan**\n\n- The free tier does not include the “Saved Search” shortcut, but you can still run the same advanced search manually each day.  \n\n**Quick cheat‑sheet**\n\n| Step | Action | Result |\n|------|--------|--------|\n| 1 | Click search bar → *Advanced Search* | Opens filter dialog |\n| 2 | Set **Assignee = Me** | Limits to your tasks |\n| 3 | Set **Completion Date = Today** | Shows only tasks finished today |\n| 4 | Click **Search** | Displays the list |\n| 5 | (Free plan) Bookmark the URL or (paid) ★ to save | Easy repeat access |\n\nThat list is your “break‑down of the tasks done today.”",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nChat, give me a breakdown of the tasks done today",
        "answer": "**How to see a “break‑down of the tasks you completed today”**\n\n1. **Open the Search bar** in Asana (top‑right).  \n2. Click **Advanced Search**.  \n3. Set the following filters:  \n\n   * **Assignee** – *Me* (or the person whose work you want to review)  \n   * **Completion Date** – *Today* (you can also pick “Yesterday” or a custom range)  \n\n4. Press **Search**.  \n5. When the results appear, click the **star** icon to **save** the search.  \n   *Saved searches act like a permanent view, so you can open it again without re‑creating the filter.*  \n\n6. (Optional) In the results list you can **sort** by **Completed On** to see the exact order you finished each task.  \n\n**Why this works**\n\n- The Asana forum confirms that the “completed‑today” view is still possible, but you must remove the default “incomplete‑only” filter and use an advanced search with a *completionDate = today* filter. Saving the search avoids having to rebuild it each day【1†L1-L8】.  \n\n**If you’re on the free plan**\n\n- The free tier does not include the “Saved Search” shortcut, but you can still run the same advanced search manually each day.  \n\n**Quick cheat‑sheet**\n\n| Step | Action | Result |\n|------|--------|--------|\n| 1 | Click search bar → *Advanced Search* | Opens filter dialog |\n| 2 | Set **Assignee = Me** | Limits to your tasks |\n| 3 | Set **Completion Date = Today** | Shows only tasks finished today |\n| 4 | Click **Search** | Displays the list |\n| 5 | (Free plan) Bookmark the URL or (paid) ★ to save | Easy repeat access |\n\nThat list is your “break‑down of the tasks done today.”"
      },
      "rationale": "auto-injected: quality score=0.61 (pass=true) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Default research plan for: Chat, give me a breakdown of the tasks done today",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ],
    [
      3
    ]
  ]
}
```
