---
type: template
title: Find the ZBC letter in Downloads, read it, and generate a summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-04T15:28:00.776Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Recent conversation (chronological):   User: "Hello, I want you to summarize what is in the ZBC letter."   User: "Send me an email summarizing the tests done yesterday arthurmagaya2@gmail.com"   You (assistant): "Hiring **Clawbot** — AI agent operator — for this task. They'll execute on a worker and I'll review their output before anything lands in your vault. Track live progress on the Tasks page."  Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): Go into my downloads and tell me what is inside the ZBC letter.
---

# Find the ZBC letter in Downloads, read it, and generate a summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "Hello, I want you to summarize what is in the ZBC letter."
  User: "Send me an email summarizing the tests done yesterday arthurmagaya2@gmail.com"
  You (assistant): "Hiring **Clawbot** — AI agent operator — for this task. They'll execute on a worker and I'll review their output before anything lands in your vault. Track live progress on the Tasks page."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): Go into my downloads and tell me what is inside the ZBC letter."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "Hello, I want you to summarize what is in the ZBC letter."
  User: "Send me an email summarizing the tests done yesterday arthurmagaya2@gmail.com"
  You (assistant): "Hiring **Clawbot** — AI agent operator — for this task. They'll execute on a worker and I'll review their output before anything lands in your vault. Track live progress on the Tasks page."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): Go into my downloads and tell me what is inside the ZBC letter.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "fs.find_in",
      "args": {
        "folder": "downloads",
        "name": "ZBC letter",
        "limit": 1,
        "depth": 1
      },
      "label": "Looking in your downloads for \"ZBC letter\""
    },
    {
      "tool": "fs.read_external",
      "args": {
        "path": "$step_0.matches.0.path"
      },
      "label": "Reading $step_0.matches.0.path"
    },
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Summarise the content of the ZBC letter:\n\n$step_1.content",
        "system": "Provide a concise summary of the key points and any actions required."
      },
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"Hello, I want you to summarize what is in the ZBC letter.\"\n  User: \"Send me an email summarizing the tests done yesterday arthurmagaya2@gmail.com\"\n  You (assistant): \"Hiring **Clawbot** — AI agent operator — for this task. They'll execute on a worker and I'll review their output before anything lands in your vault. Track live progress on the Tasks page.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): Go into my downloads and tell me what is inside the ZBC letter.",
        "answer": "## Summary of the ZBC Letter (ZBC Invitation Letter – 14 May 2026)\n\nThe letter is an invitation from the Artificial Intelligence Institute Africa (AiIA) to the Zimbabwe Broadcasting Corporation (ZBC) to participate in the upcoming AI for National Transformation: Zimbabwe 2.0 summit. Key points include:\n\n- **Event Details**  \n  - **Name:** AI for National Transformation: Zimbabwe 2.0 – AI Tech Forum Summit  \n  - **Dates & Venue:** 16‑19 June 2026 (Harare; venue to be confirmed)  \n  - **Theme:** “Leveraging AI for Innovation, Policy, and Inclusive National Development”\n\n- **Key Guests**  \n  - Guest of Honour: Hon. Mavetera, Minister of ICT, Postal & Courier Services  \n  - Keynote Speaker: Hon. J. Muswere, Minister of Skills Audit & Development\n\n- **Organisers & Partners**  \n  - AiIA in partnership with the Ministry of ICT and Zimpapers  \n  - Media partnership with ZBC\n\n- **ZBC’s Responsibilities**  \n  1. **Confirm Participation** – Reply to AiIA by 5 June 2026 with names of reporters/crew.  \n  2. **Assign a Reporter/Producer** – Designate a senior producer (e.g., Mr. Godwin Mawuru) for logistics and accreditation.  \n  3. **Pre‑Event Coverage** – Produce at least two pieces (press release and feature) on AI’s role in Zimbabwe’s development before 12 June 2026.  \n  4. **Logistics** – Arrange transport, camera crew, and any required clearance for live‑feed or satellite uplink.  \n  5. **Post‑Event Deliverables** – (details truncated in the provided excerpt)\n\nThe letter emphasizes that ZBC staff will be accredited at no cost and requests pre‑event coverage to promote the summit. The tone is formal and collaborative, underscoring the importance of media partnership in advancing national AI initiatives.  \n\n[2] (fs.read_external)  \n[3] (ollama.generate)",
        "sources": "[1] fs.find_in (name=\"ZBC letter\")\nC:\\Users\\Arthur Magaya\\Downloads\\ZBC letter.docx: \n\n[2] fs.read_external (path=\"$step_0.matches.0.path\")\n# ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACYAUMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACimb6Ny0APopnmrT6ACikzUU0qxxMzdKAHb/elr5++Jv7bfwp+Fesy6RqevSXmoRNsli0+B7jym/29tdf8Iv2hvAfxvtZ5PCetLfyxf621dWSaL/eVq1lQqqPPyke0iepYpCRu+9zURu4k+81fPPxE/bq+Evw612XSr7X5L++ibZKumQNcJF/vMtTGlOr8AuaMD6MpxGa81+FHxz8FfGjTZbvwnrkWpiD/AFsRVkmi/wB9G+Za9IBzUSjye7IcZ84+iiigsKKKKACiiigAooooAKZvVerUO+2q9y/zUASyTxp96RVr4x/aO/4KT+Avgf4iTw9p8TeNtYil/wBOi06dfKtU/us/3Wf/AGa+Z/8AgoP+3T42j8Var8NPDWm6h4Msrdtl1qMvyXd4n+x/di/3fvV+dDu0zPLKzO7tvZ3++1AH7q/CL/got8Fvi15EX/CTr4V1N/vWOvL9n+b/AGZfuN/31X01pOq2Ws26XVjcw3du67llt5d6tX8xz/crsvAHxm8dfDF0bwv4s1TRNrb/ACrS6fyv++Pu0Af0ob1/vU7dX4i/D3/gqx8a/CCJFrE+l+LbdP8AoIW2yX/vtK9w8Mf8FofJjVde+GW9/wCJtM1P/wBlZKAP1I3\n\n[3] ollama.generate\n**Summary – ZBC Invitation Letter (14 May 2026)**  \n\n- **Event:** *AI for National Transformation: Zimbabwe 2.0* – AI Tech Forum Summit  \n- **Dates & Venue:** 16‑19 June 2026 (Harare – venue to be confirmed)  \n- **Theme:** “Leveraging AI for Innovation, Policy, and Inclusive National Development”  \n- **Key Guests:**  \n  - Guest of Honour – Hon. Mavetera, Minister of ICT, Postal & Courier Services  \n  - Keynote Speaker – Hon. J. Muswere, Minister of Skills Audit & Development  \n- **Organisers:** Artificial Intelligence Institute Africa (AiIA) in partnership with the Ministry of ICT and Zimpapers.  \n- **Media Partnership:**  \n  - ZBC staff accredited to cover the summit will **pay no attendance fee**.  \n  - ZBC is asked to **provide pre‑event coverage** (news stories, promos, social‑media teasers).  \n\n**Action Items for ZBC**\n\n1. **Confirm Participation** – Reply to AiIA (via Mica Zinduru +263 77 233 1156 or the institute line) by **5 June 2026** indicating the names of reporters/crew who will attend.  \n2. **Assign a Reporter/Producer** – Designate a senior producer (e.g., Mr. Godwin Mawuru) to coordinate logistics, accreditation, and interview requests.  \n3. **Pre‑Event Content** – Develop at least two pieces (press release + feature) on AI’s role in Zimbabwe’s development and circulate them before **12 June 2026**.  \n4. **Logistics** – Arrange transport, camera crew, and any required clearance for live‑feed or satellite uplink during the summit.  \n5. **Post‑Event Deliverables"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Summary of the ZBC Letter (ZBC Invitation Letter – 14 May 2026)\n\nThe letter is an invitation from the Artificial Intelligence Institute Africa (AiIA) to the Zimbabwe Broadcasting Corporation (ZBC) to participate in the upcoming AI for National Transformation: Zimbabwe 2.0 summit. Key points include:\n\n- **Event Details**  \n  - **Name:** AI for National Transformation: Zimbabwe 2.0 – AI Tech Forum Summit  \n  - **Dates & Venue:** 16‑19 June 2026 (Harare; venue to be confirmed)  \n  - **Theme:** “Leveraging AI for Innovation, Policy, and Inclusive National Development”\n\n- **Key Guests**  \n  - Guest of Honour: Hon. Mavetera, Minister of ICT, Postal & Courier Services  \n  - Keynote Speaker: Hon. J. Muswere, Minister of Skills Audit & Development\n\n- **Organisers & Partners**  \n  - AiIA in partnership with the Ministry of ICT and Zimpapers  \n  - Media partnership with ZBC\n\n- **ZBC’s Responsibilities**  \n  1. **Confirm Participation** – Reply to AiIA by 5 June 2026 with names of reporters/crew.  \n  2. **Assign a Reporter/Producer** – Designate a senior producer (e.g., Mr. Godwin Mawuru) for logistics and accreditation.  \n  3. **Pre‑Event Coverage** – Produce at least two pieces (press release and feature) on AI’s role in Zimbabwe’s development before 12 June 2026.  \n  4. **Logistics** – Arrange transport, camera crew, and any required clearance for live‑feed or satellite uplink.  \n  5. **Post‑Event Deliverables** – (details truncated in the provided excerpt)\n\nThe letter emphasizes that ZBC staff will be accredited at no cost and requests pre‑event coverage to promote the summit. The tone is formal and collaborative, underscoring the importance of media partnership in advancing national AI initiatives.  \n\n[2] (fs.read_external)  \n[3] (ollama.generate)",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"Hello, I want you to summarize what is in the ZBC letter.\"\n  User: \"Send me an email summarizing the tests done yesterday arthurmagaya2@gmail.com\"\n  You (assistant): \"Hiring **Clawbot** — AI agent operator — for this task. They'll execute on a worker and I'll review their output before anything lands in your vault. Track live progress on the Tasks page.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): Go into my downloads and tell me what is inside the ZBC letter.",
        "answer": "## Summary of the ZBC Letter (ZBC Invitation Letter – 14 May 2026)\n\nThe letter is an invitation from the Artificial Intelligence Institute Africa (AiIA) to the Zimbabwe Broadcasting Corporation (ZBC) to participate in the upcoming AI for National Transformation: Zimbabwe 2.0 summit. Key points include:\n\n- **Event Details**  \n  - **Name:** AI for National Transformation: Zimbabwe 2.0 – AI Tech Forum Summit  \n  - **Dates & Venue:** 16‑19 June 2026 (Harare; venue to be confirmed)  \n  - **Theme:** “Leveraging AI for Innovation, Policy, and Inclusive National Development”\n\n- **Key Guests**  \n  - Guest of Honour: Hon. Mavetera, Minister of ICT, Postal & Courier Services  \n  - Keynote Speaker: Hon. J. Muswere, Minister of Skills Audit & Development\n\n- **Organisers & Partners**  \n  - AiIA in partnership with the Ministry of ICT and Zimpapers  \n  - Media partnership with ZBC\n\n- **ZBC’s Responsibilities**  \n  1. **Confirm Participation** – Reply to AiIA by 5 June 2026 with names of reporters/crew.  \n  2. **Assign a Reporter/Producer** – Designate a senior producer (e.g., Mr. Godwin Mawuru) for logistics and accreditation.  \n  3. **Pre‑Event Coverage** – Produce at least two pieces (press release and feature) on AI’s role in Zimbabwe’s development before 12 June 2026.  \n  4. **Logistics** – Arrange transport, camera crew, and any required clearance for live‑feed or satellite uplink.  \n  5. **Post‑Event Deliverables** – (details truncated in the provided excerpt)\n\nThe letter emphasizes that ZBC staff will be accredited at no cost and requests pre‑event coverage to promote the summit. The tone is formal and collaborative, underscoring the importance of media partnership in advancing national AI initiatives.  \n\n[2] (fs.read_external)  \n[3] (ollama.generate)"
      },
      "rationale": "auto-injected: quality score=0.41 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find the ZBC letter in Downloads, read it, and generate a summary.",
  "waves": [
    [
      0
    ],
    [
      1
    ],
    [
      2
    ],
    [
      3,
      4
    ],
    [
      5
    ]
  ]
}
```
