---
type: template
title: Image generation — text-to-image via the studio (media.image). (custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-)
slug: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-
created: 2026-07-19T14:42:52.870Z
templateId: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-
role: Custom
originTask: (You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)  Generate an image of a blue mountain landscape at sunrise
---

# Image generation — text-to-image via the studio (media.image). (custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-)

Saved from chat: "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Generate an image of a blue mountain landscape at sunrise"

**Origin task:** (You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Generate an image of a blue mountain landscape at sunrise

## Saved plan

```json
{
  "steps": [
    {
      "tool": "media.image",
      "args": {
        "prompt": "Generate an image of a blue mountain landscape at sunrise",
        "aspect_ratio": "1:1"
      },
      "rationale": "text-to-image studio generation",
      "label": "media.image"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGenerate an image of a blue mountain landscape at sunrise",
        "answer": "Here's your image — generated with **openrouter** (google/gemini-2.5-flash-image), 1223 KB.\n\n![generated image](/api/media/image-openrouter-1784472160185.png)\n\n**[Download the image](/api/media/image-openrouter-1784472160185.png?download=1)** · saved to `C:\\Users\\Arthur Magaya\\Documents\\GitHub\\clawbot\\.neuroworks\\media\\image-openrouter-1784472160185.png`",
        "sources": "[1] media.image\n{\"path\":\"C:\\\\Users\\\\Arthur Magaya\\\\Documents\\\\GitHub\\\\clawbot\\\\.neuroworks\\\\media\\\\image-openrouter-1784472160185.png\",\"bytes\":1252348,\"filename\":\"image-openrouter-1784472160185.png\",\"provider\":\"openrouter\",\"model\":\"google/gemini-2.5-flash-image\",\"downloadUrl\":\"http://127.0.0.1:7470/api/media/image-openrouter-1784472160185.png\"}",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "Here's your image — generated with **openrouter** (google/gemini-2.5-flash-image), 1223 KB.\n\n![generated image](/api/media/image-openrouter-1784472160185.png)\n\n**[Download the image](/api/media/image-openrouter-1784472160185.png?download=1)** · saved to `C:\\Users\\Arthur Magaya\\Documents\\GitHub\\clawbot\\.neuroworks\\media\\image-openrouter-1784472160185.png`",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "governance.check",
      "args": {
        "content": "Here's your image — generated with **openrouter** (google/gemini-2.5-flash-image), 1223 KB.\n\n![generated image](/api/media/image-openrouter-1784472160185.png)\n\n**[Download the image](/api/media/image-openrouter-1784472160185.png?download=1)** · saved to `C:\\Users\\Arthur Magaya\\Documents\\GitHub\\clawbot\\.neuroworks\\media\\image-openrouter-1784472160185.png`"
      },
      "rationale": "auto-injected: check answer against accepted hard governance constraints",
      "label": "Checking against governance policies"
    }
  ],
  "summary": "Image generation — text-to-image via the studio (media.image).",
  "waves": [
    [
      1,
      2,
      3
    ]
  ]
}
```
