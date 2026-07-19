---
type: template
title: Send the 3 newest generated images to arthurmagaya2@gmail.com. (custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-)
slug: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-
created: 2026-07-19T20:48:56.762Z
templateId: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-
role: Custom
originTask: (You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)  Send the three most recently generated images to arthurmagaya2@gmail.com  Interpretation: intent=answer, scope=count-3.  Deliverable shape: ONE numbered list containing EXACTLY 3 items. Each item is ONE or TWO short sentences. NO tables. NO nested bullets. NO preamble paragraph. NO trailing summary. Output starts with "1." on the first line.
---

# Send the 3 newest generated images to arthurmagaya2@gmail.com. (custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-)

Saved from chat: "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Send the three most recently generated images to arthurmagaya2@gmail.com

Interpretation: intent=answer, scope=count-3.

Deliverable shape: ONE numbered list containing EXACTLY 3 items. Each item is ONE or TWO short sentences. NO tables. NO nested bullets. NO preamble paragraph. NO trailing summary. Output starts with "1." on the first line."

**Origin task:** (You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Send the three most recently generated images to arthurmagaya2@gmail.com

Interpretation: intent=answer, scope=count-3.

Deliverable shape: ONE numbered list containing EXACTLY 3 items. Each item is ONE or TWO short sentences. NO tables. NO nested bullets. NO preamble paragraph. NO trailing summary. Output starts with "1." on the first line.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "media.list",
      "args": {
        "count": 3
      },
      "rationale": "locate the most recently generated images (they live in the studio media folder, not the vault)",
      "label": "media.list"
    },
    {
      "tool": "email.send",
      "args": {
        "to": "arthurmagaya2@gmail.com",
        "subject": "Requested images",
        "body": "Here are the 3 most recently generated images from the studio, attached.",
        "attach_paths": "$step_0.pathsJoined"
      },
      "rationale": "email the images as attachments",
      "label": "email.send"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSend the three most recently generated images to arthurmagaya2@gmail.com\n\nInterpretation: intent=answer, scope=count-3.\n\nDeliverable shape: ONE numbered list containing EXACTLY 3 items. Each item is ONE or TWO short sentences. NO tables. NO nested bullets. NO preamble paragraph. NO trailing summary. Output starts with \"1.\" on the first line.",
        "answer": "Sent 3 images to **arthurmagaya2@gmail.com** (mailjet) at 2026-07-19T20:48:02.319Z.\n\n- `image-openrouter-1784490755066-e24adefb-729.png` (1469 KB) — [download](/api/media/image-openrouter-1784490755066-e24adefb-729.png?download=1)\n- `image-openrouter-1784490230099-49e21bba-1b1.png` (803 KB) — [download](/api/media/image-openrouter-1784490230099-49e21bba-1b1.png?download=1)\n- `image-openrouter-1784478434256-8706e21a-7a1.png` (1414 KB) — [download](/api/media/image-openrouter-1784478434256-8706e21a-7a1.png?download=1)",
        "sources": "[1] media.list\n{\"images\":[{\"filename\":\"image-openrouter-1784490755066-e24adefb-729.png\",\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784490755066-e24adefb-729.png\",\"bytes\":1503751,\"createdAt\":\"2026-07-19T19:52:35.067Z\",\"downloadUrl\":\"http://127.0.0.1:7470/api/media/image-openrouter-1784490755066-e24adefb-729.png\"},{\"filename\":\"image-openrouter-1784490230099-49e21bba-1b1.png\",\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784490230099-49e21bba-1b1.png\",\"bytes\":822466,\"createdAt\":\"2026-07-19T19:43:50.093Z\",\"downloadUrl\":\"http://127.0.0.1:7470/api/media/image-openrouter-1784490230099-49e21bba-1b1.png\"},{\"filename\":\"image-openrouter-1784478434256-8706e21a-7a1.png\",\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784478434256-8706e21a-7a1.png\",\"bytes\":1448347,\"createdAt\":\"2026-07-19T16:27:14.251Z\",\"downloadUrl\":\"http://127.0.0.1:7470/api/media/image-openrouter-1784478434256-8706e21a-7a1.png\"}],\"paths\":[\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784490755066-e24adefb-729.png\",\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784490230099-49e21bba-1b1.png\",\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784478434256-8706e21a-7a1.png\"],\"pathsJoined\":\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.ne\n\n[2] email.send\n{\"ok\":true,\"transport\":\"mailjet\",\"from\":\"arthur@rubiem.com\",\"to\":\"arthurmagaya2@gmail.com\",\"recipients\":[\"arthurmagaya2@gmail.com\"],\"subject\":\"Requested images\",\"sentAt\":\"2026-07-19T20:48:02.319Z\",\"attachments\":[{\"filename\":\"image-openrouter-1784490755066-e24adefb-729.png\",\"bytes\":1503751},{\"filename\":\"image-openrouter-1784490230099-49e21bba-1b1.png\",\"bytes\":822466},{\"filename\":\"image-openrouter-1784478434256-8706e21a-7a1.png\",\"bytes\":1448347}]}",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "Sent 3 images to **arthurmagaya2@gmail.com** (mailjet) at 2026-07-19T20:48:02.319Z.\n\n- `image-openrouter-1784490755066-e24adefb-729.png` (1469 KB) — [download](/api/media/image-openrouter-1784490755066-e24adefb-729.png?download=1)\n- `image-openrouter-1784490230099-49e21bba-1b1.png` (803 KB) — [download](/api/media/image-openrouter-1784490230099-49e21bba-1b1.png?download=1)\n- `image-openrouter-1784478434256-8706e21a-7a1.png` (1414 KB) — [download](/api/media/image-openrouter-1784478434256-8706e21a-7a1.png?download=1)",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "governance.check",
      "args": {
        "content": "Sent 3 images to **arthurmagaya2@gmail.com** (mailjet) at 2026-07-19T20:48:02.319Z.\n\n- `image-openrouter-1784490755066-e24adefb-729.png` (1469 KB) — [download](/api/media/image-openrouter-1784490755066-e24adefb-729.png?download=1)\n- `image-openrouter-1784490230099-49e21bba-1b1.png` (803 KB) — [download](/api/media/image-openrouter-1784490230099-49e21bba-1b1.png?download=1)\n- `image-openrouter-1784478434256-8706e21a-7a1.png` (1414 KB) — [download](/api/media/image-openrouter-1784478434256-8706e21a-7a1.png?download=1)"
      },
      "rationale": "auto-injected: check answer against accepted hard governance constraints",
      "label": "Checking against governance policies"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSend the three most recently generated images to arthurmagaya2@gmail.com\n\nInterpretation: intent=answer, scope=count-3.\n\nDeliverable shape: ONE numbered list containing EXACTLY 3 items. Each item is ONE or TWO short sentences. NO tables. NO nested bullets. NO preamble paragraph. NO trailing summary. Output starts with \"1.\" on the first line.",
        "answer": "Sent 3 images to **arthurmagaya2@gmail.com** (mailjet) at 2026-07-19T20:48:02.319Z.\n\n- `image-openrouter-1784490755066-e24adefb-729.png` (1469 KB) — [download](/api/media/image-openrouter-1784490755066-e24adefb-729.png?download=1)\n- `image-openrouter-1784490230099-49e21bba-1b1.png` (803 KB) — [download](/api/media/image-openrouter-1784490230099-49e21bba-1b1.png?download=1)\n- `image-openrouter-1784478434256-8706e21a-7a1.png` (1414 KB) — [download](/api/media/image-openrouter-1784478434256-8706e21a-7a1.png?download=1)"
      },
      "rationale": "auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Send the 3 newest generated images to arthurmagaya2@gmail.com.",
  "waves": [
    [
      2,
      3,
      4
    ],
    [
      5
    ]
  ]
}
```
