---
type: template
title: Generate storyboard and key shot via LLM. (custom-you-are-operating-as-vince-the-video-producer-bias-tool-choi)
slug: custom-you-are-operating-as-vince-the-video-producer-bias-tool-choi
created: 2026-06-06T12:43:51.227Z
templateId: custom-you-are-operating-as-vince-the-video-producer-bias-tool-choi
role: Custom
originTask: (You are operating as Vince, the Video Producer. Bias tool choices, output shape, and depth toward this role's conventions.)  Make a 9:16 social teaser for a coffee subscription box — cozy morning vibe, ends with the brand name. Storyboard it and generate the key shot.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Generate storyboard and key shot via LLM. (custom-you-are-operating-as-vince-the-video-producer-bias-tool-choi)

Saved from chat: "(You are operating as Vince, the Video Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Make a 9:16 social teaser for a coffee subscription box — cozy morning vibe, ends with the brand name. Storyboard it and generate the key shot.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Vince, the Video Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Make a 9:16 social teaser for a coffee subscription box — cozy morning vibe, ends with the brand name. Storyboard it and generate the key shot.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "ollama.generate",
      "args": {
        "prompt": "Create a concise storyboard for a 9:16 social teaser video promoting a coffee subscription box. The vibe should be cozy, morning‑time, and end with the brand name prominently displayed. Include scene descriptions, key visual elements, camera angles, and a brief note on the key shot that will be used for final rendering.",
        "system": "Storyboard generator – output a numbered list of scenes with brief visual cues and a separate line for the key shot."
      },
      "rationale": "Generate storyboard and key shot description.",
      "label": "Thinking about it"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Vince, the Video Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nMake a 9:16 social teaser for a coffee subscription box — cozy morning vibe, ends with the brand name. Storyboard it and generate the key shot.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "## 9:16 Social Teaser Storyboard  \n*(≈ 15 s total)*  \n\n| # | Scene | Visual Cue | Camera Angle / Movement | Key Shot Note |\n|---|-------|------------|--------------------------|---------------|\n| 1 | **Morning light filters into a kitchen** | Soft amber light, window blinds, a steaming mug on a wooden counter. | Static close‑up (1–2 s) – focus on steam curling upward. | The steam subtly forms a heart shape, hinting at warmth. |\n| 2 | **Hand reaches for a coffee bag** | A hand pulls a branded subscription box bag from a shelf. | Slight dolly‑in (0.5 s) to emphasize the bag’s texture. | The box’s logo glints in the morning light. |\n| 3 | **Opening the box** | The lid lifts to reveal a neatly arranged selection of beans and a small card. | Over‑the‑shoulder shot, slow 360° rotation (1 s). | Beans spill slightly, creating a dynamic, inviting motion. |\n| 4 | **Pouring coffee** | A hand pours hot water into a French press; the liquid swirls. | Low‑angle, slow‑motion (1 s) – focus on the liquid’s golden hue. | The pour creates a ripple that mirrors the brand’s wave icon. |\n| 5 | **First sip, eyes closed** | Close‑up of a smiling face, eyes closed, enjoying the aroma. | Soft focus, slight tilt‑shift to keep the background dreamy. | The smile fades into the brand’s tagline. |\n| 6 | **Box on the counter, coffee cup beside it** | The box sits center‑stage; a latte‑art cup in front. | Static wide‑shot (1 s) – balanced composition. | Final frame: brand name and tagline appear over the box. |\n\n### Key Shot Prompt (for rendering)\n\n```\nSubject: A steaming coffee mug on a wooden counter.  \nAction: Steam curls upward, forming a subtle heart shape.  \nSetting: Cozy kitchen in early morning, soft amber light filtering through blinds.  \nCamera: Static close‑up, 1–2 s, focus on steam.  \nMood/Lighting: Warm, inviting, gentle golden glow.  \n```\n\n*Render this shot with a 9:16 aspect ratio, 16 fps, 1080 p resolution. The final frame should transition to the brand name and tagline.*",
        "sources": "[1] ollama.generate\n**Storyboard – 9:16 Social Teaser (≈15 s)**  \n\n| # | Scene | Visual Cue | Camera Angle / Movement | Key Shot Note |\n|---|-------|------------|--------------------------|---------------|\n| 1 | **Morning light filters into a kitchen** | Soft amber light, window blinds, a steaming mug on a wooden counter. | Static close‑up (1‑2 s) – focus on steam curling upward. | *Key shot*: The steam forms a subtle heart shape, hinting at warmth. |\n| 2 | **Hand reaches for a coffee bag** | A hand pulls a branded subscription box bag from a shelf. | Slight dolly‑in (0.5 s) to emphasize the bag’s texture. | *Key shot*: The box’s logo glints in the morning light. |\n| 3 | **Opening the box** | The lid lifts to reveal a neatly arranged selection of beans and a small card. | Over‑the‑shoulder shot, slow 360° rotation (1 s). | *Key shot*: Beans spill slightly, creating a dynamic, inviting motion. |\n| 4 | **Pouring coffee** | A hand pours hot water into a French press; the liquid swirls. | Low‑angle, slow‑motion (1 s) – focus on the liquid’s golden hue. | *Key shot*: The pour creates a ripple that mirrors the brand’s wave icon. |\n| 5 | **First sip, eyes close** | Close‑up of a smiling face, eyes closed, enjoying the aroma. | Soft focus, slight tilt‑shift to keep the background dreamy. | *Key shot*: The smile fades into the brand’s tagline. |\n| 6 | **Box on the counter, coffee cup beside it** | The box sits center‑stage; a latte art cup in front. | Static wide‑shot (1 s) – balanced composition. | *Key"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## 9:16 Social Teaser Storyboard  \n*(≈ 15 s total)*  \n\n| # | Scene | Visual Cue | Camera Angle / Movement | Key Shot Note |\n|---|-------|------------|--------------------------|---------------|\n| 1 | **Morning light filters into a kitchen** | Soft amber light, window blinds, a steaming mug on a wooden counter. | Static close‑up (1–2 s) – focus on steam curling upward. | The steam subtly forms a heart shape, hinting at warmth. |\n| 2 | **Hand reaches for a coffee bag** | A hand pulls a branded subscription box bag from a shelf. | Slight dolly‑in (0.5 s) to emphasize the bag’s texture. | The box’s logo glints in the morning light. |\n| 3 | **Opening the box** | The lid lifts to reveal a neatly arranged selection of beans and a small card. | Over‑the‑shoulder shot, slow 360° rotation (1 s). | Beans spill slightly, creating a dynamic, inviting motion. |\n| 4 | **Pouring coffee** | A hand pours hot water into a French press; the liquid swirls. | Low‑angle, slow‑motion (1 s) – focus on the liquid’s golden hue. | The pour creates a ripple that mirrors the brand’s wave icon. |\n| 5 | **First sip, eyes closed** | Close‑up of a smiling face, eyes closed, enjoying the aroma. | Soft focus, slight tilt‑shift to keep the background dreamy. | The smile fades into the brand’s tagline. |\n| 6 | **Box on the counter, coffee cup beside it** | The box sits center‑stage; a latte‑art cup in front. | Static wide‑shot (1 s) – balanced composition. | Final frame: brand name and tagline appear over the box. |\n\n### Key Shot Prompt (for rendering)\n\n```\nSubject: A steaming coffee mug on a wooden counter.  \nAction: Steam curls upward, forming a subtle heart shape.  \nSetting: Cozy kitchen in early morning, soft amber light filtering through blinds.  \nCamera: Static close‑up, 1–2 s, focus on steam.  \nMood/Lighting: Warm, inviting, gentle golden glow.  \n```\n\n*Render this shot with a 9:16 aspect ratio, 16 fps, 1080 p resolution. The final frame should transition to the brand name and tagline.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    }
  ],
  "summary": "Generate storyboard and key shot via LLM.",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ]
  ]
}
```
