---
type: template
title: Find the invite in downloads, read it, summarise, and email the summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-06-04T13:27:56.230Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Recent conversation (chronological):   User: "I want you to send a report for the task done yesterday to my email, arthurmagaya2@gmail.com"   User: "Send a report to my email arthurmagaya2@gmail.com about the tasks done yesterday."   You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."  Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): Look through my downloads and summarize exhibitor invite.
---

# Find the invite in downloads, read it, summarise, and email the summary. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "I want you to send a report for the task done yesterday to my email, arthurmagaya2@gmail.com"
  User: "Send a report to my email arthurmagaya2@gmail.com about the tasks done yesterday."
  You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): Look through my downloads and summarize exhibitor invite."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Recent conversation (chronological):
  User: "I want you to send a report for the task done yesterday to my email, arthurmagaya2@gmail.com"
  User: "Send a report to my email arthurmagaya2@gmail.com about the tasks done yesterday."
  You (assistant): "**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault."

Current request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like "it", "that", "the previous one", "make it shorter" against the recent turns): Look through my downloads and summarize exhibitor invite.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "fs.find_in",
      "args": {
        "folder": "downloads",
        "name": "exhibitor invite",
        "limit": 1,
        "depth": 1
      },
      "label": "Looking in your downloads for \"exhibitor invite\""
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
        "prompt": "Summarise the following exhibitor invite:\n\n$step_1.content",
        "system": "Provide a concise summary highlighting key details: event name, date, location, RSVP deadline, and any special instructions."
      },
      "label": "Thinking about it"
    },
    {
      "tool": "email.send",
      "args": {
        "to": "arthurmagaya2@gmail.com",
        "subject": "Summary of Exhibitor Invite",
        "body": "$step_2.text"
      },
      "label": "email.send"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"I want you to send a report for the task done yesterday to my email, arthurmagaya2@gmail.com\"\n  User: \"Send a report to my email arthurmagaya2@gmail.com about the tasks done yesterday.\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): Look through my downloads and summarize exhibitor invite.",
        "answer": "## Summary of Exhibitor Invitation – AI Tech Forum Summit 2026\n\nThe Artificial Intelligence Institute Africa (AIIA) has issued an invitation for participation as an exhibitor and innovation partner at the **AI Tech Forum Summit 2026** and **AI For National Transformation – Zimbabwe 2.0**.  \nKey details:\n\n- **Event dates:** 16 – 18 June 2026.  \n- **Location:** Zimbabwe (exact venue not specified).  \n- **Participation package:** Summit access, networking dinner, hotel accommodation, and exhibition space.  \n- **Exhibitor fee:** USD $300 per participant, covering all above items.  \n- **Contact for registration:** admin@aiinstituteafrica.com.  \n\nThe invitation emphasizes the opportunity to showcase products, services, and solutions to a broad audience of speakers, government ministers, industry leaders, and investors across Africa and beyond. The organizing committee looks forward to the recipient’s participation.  \n\n*The information is sourced from the downloaded document “Exhibitor invite.docx” and the summary generated by the language model.*",
        "sources": "[1] fs.find_in (name=\"exhibitor invite\")\nC:\\Users\\Arthur Magaya\\Downloads\\Exhibitor invite.docx: \n\n[2] fs.read_external (path=\"$step_0.matches.0.path\")\nDear Sir/Madam,\n\nThe Artificial Intelligence Institute Africa \\(AIIA\\) is pleased to invite you to participate as an exhibitor and innovation partner at the AI Tech Forum Summit 2026 and AI For National Transformation – Zimbabwe 2\\.0, scheduled to take place from 16 to 18 June 2026\\.\n\nThe summits will bring together notable speakers, government ministers, public figures, industry leaders, innovators, investors, and technology professionals from across Africa and beyond to discuss the future of Artificial Intelligence and digital transformation\\.\n\nAs an exhibitor, you will have the opportunity to showcase innovative products, services, and solutions while engaging with key stakeholders, business leaders, and potential partners\\.\n\nThe participation package includes summit access, networking dinner access, hotel accommodation, and exhibition space at a fee of USD $300 per participant\\.\n\nFor registration and further information, kindly contact: [admin@aiinstituteafrica\\.com](mailto:admin@aiinstituteafrica.com)\\.\n\nWe look forward to your participation\\.\n\nYours faithfully,\n\nArtificial Intelligence Institute Africa \\(AIIA\\)  \nOrganizing Committee\n\n[3] ollama.generate\n**AI Tech Forum Summit 2026 – AI For National Transformation – Zimbabwe 2.0**\n\n- **Event:** AI Tech Forum Summit 2026 & AI For National Transformation – Zimbabwe 2.0  \n- **Dates:** 16 – 18 June 2026  \n- **Location:** Zimbabwe (exact venue not specified)  \n- **RSVP/Contact:** Register via email at **admin@aiinstituteafrica.com**  \n- **RSVP Deadline:** Not specified (contact for confirmation)  \n- **Special Instructions:** Exhibitor fee is **USD $300** per participant, which covers summit access, networking dinner, hotel accommodation, and exhibition space.  \n\nPlease contact the organizing committee for further details and to secure your spot.\n\n[4] email.send\n{\"ok\":true,\"transport\":\"mailjet\",\"from\":\"arthur@rubiem.com\",\"to\":\"arthurmagaya2@gmail.com\",\"subject\":\"Summary of Exhibitor Invite\",\"sentAt\":\"2026-06-04T13:25:20.490Z\"}"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## Summary of Exhibitor Invitation – AI Tech Forum Summit 2026\n\nThe Artificial Intelligence Institute Africa (AIIA) has issued an invitation for participation as an exhibitor and innovation partner at the **AI Tech Forum Summit 2026** and **AI For National Transformation – Zimbabwe 2.0**.  \nKey details:\n\n- **Event dates:** 16 – 18 June 2026.  \n- **Location:** Zimbabwe (exact venue not specified).  \n- **Participation package:** Summit access, networking dinner, hotel accommodation, and exhibition space.  \n- **Exhibitor fee:** USD $300 per participant, covering all above items.  \n- **Contact for registration:** admin@aiinstituteafrica.com.  \n\nThe invitation emphasizes the opportunity to showcase products, services, and solutions to a broad audience of speakers, government ministers, industry leaders, and investors across Africa and beyond. The organizing committee looks forward to the recipient’s participation.  \n\n*The information is sourced from the downloaded document “Exhibitor invite.docx” and the summary generated by the language model.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"I want you to send a report for the task done yesterday to my email, arthurmagaya2@gmail.com\"\n  User: \"Send a report to my email arthurmagaya2@gmail.com about the tasks done yesterday.\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): Look through my downloads and summarize exhibitor invite.",
        "answer": "## Summary of Exhibitor Invitation – AI Tech Forum Summit 2026\n\nThe Artificial Intelligence Institute Africa (AIIA) has issued an invitation for participation as an exhibitor and innovation partner at the **AI Tech Forum Summit 2026** and **AI For National Transformation – Zimbabwe 2.0**.  \nKey details:\n\n- **Event dates:** 16 – 18 June 2026.  \n- **Location:** Zimbabwe (exact venue not specified).  \n- **Participation package:** Summit access, networking dinner, hotel accommodation, and exhibition space.  \n- **Exhibitor fee:** USD $300 per participant, covering all above items.  \n- **Contact for registration:** admin@aiinstituteafrica.com.  \n\nThe invitation emphasizes the opportunity to showcase products, services, and solutions to a broad audience of speakers, government ministers, industry leaders, and investors across Africa and beyond. The organizing committee looks forward to the recipient’s participation.  \n\n*The information is sourced from the downloaded document “Exhibitor invite.docx” and the summary generated by the language model.*"
      },
      "rationale": "auto-injected: quality score=0.63 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Find the invite in downloads, read it, summarise, and email the summary.",
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
      3
    ],
    [
      4,
      5
    ],
    [
      6
    ]
  ]
}
```
