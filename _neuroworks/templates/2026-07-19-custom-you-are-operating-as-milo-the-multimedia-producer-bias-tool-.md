---
type: template
title: Image generation — text-to-image via the studio (media.image). (custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-)
slug: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-
created: 2026-07-19T08:59:44.532Z
templateId: custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-
role: Custom
originTask: (You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)  Generate an image of a simple minimalist coffee cup logo, flat vector, warm brown and cream  Interpretation: intent=answer, tone=warm.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Image generation — text-to-image via the studio (media.image). (custom-you-are-operating-as-milo-the-multimedia-producer-bias-tool-)

Saved from chat: "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Generate an image of a simple minimalist coffee cup logo, flat vector, warm brown and cream

Interpretation: intent=answer, tone=warm.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** (You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)

Generate an image of a simple minimalist coffee cup logo, flat vector, warm brown and cream

Interpretation: intent=answer, tone=warm.

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
      "tool": "media.image",
      "args": {
        "prompt": "Generate an image of a simple minimalist coffee cup logo, flat vector, warm brown and cream",
        "aspect_ratio": "1:1"
      },
      "rationale": "text-to-image studio generation",
      "label": "media.image"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Milo, the Multimedia Producer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGenerate an image of a simple minimalist coffee cup logo, flat vector, warm brown and cream\n\nInterpretation: intent=answer, tone=warm.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Content Plan**  \nHook: Start your day with a warm sip.  \nCore message: Simple elegance in every cup.  \nCall‑to‑action: Download the logo for free use.  \nFormat + length: Flat vector logo, 512 × 512 px, PNG with transparent background.\n\n**Script (narration)**  \n“Here is a clean, minimalist coffee cup logo. Warm brown and cream tones give it a friendly, inviting feel, while the flat vector style keeps it versatile for any brand.”\n\n**Voice‑over prompt**  \nProvide the script above to media.tts for a warm, friendly voice at a moderate pace.\n\n**Video prompt**  \nA static frame showing the generated logo, centered, with a subtle fade‑in over 1.5 seconds.\n\n**Music prompt**  \nSoft acoustic guitar melody, warm and mellow, low volume to sit beneath the narration.\n\n**Assembly note**  \nPlay the voice‑over over the static logo frame; duck the music under the narration; bring the music back gently at the end as the CTA appears on screen for 2 seconds.\n\n**Image generation prompt**  \n“A simple minimalist coffee cup logo, flat vector style, warm brown and cream colors, clean lines, no background, suitable for branding.”\n\n**Result**  \nThe media.image tool was invoked with the above prompt but returned an error: *OpenRouter image 404 – no endpoints found for google/gemini-2.5‑flash‑image‑preview*【1】. Consequently, no image asset was produced. The prompt is ready for rendering once the MiniMax API key (or a compatible image endpoint) is configured. All other prompts (script, voice‑over, video, music) are provided above for immediate use.",
        "sources": "[1] media.image\n{\"error\":\"OpenRouter image 404: {\\\"error\\\":{\\\"message\\\":\\\"No endpoints found for google/gemini-2.5-flash-image-preview.\\\",\\\"code\\\":404},\\\"user_id\\\":\\\"user_3Dz0CCAgvtUvEL8gBX5I1Qas5x7\\\"}\"}",
        "grounded": true
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**Content Plan**  \nHook: Start your day with a warm sip.  \nCore message: Simple elegance in every cup.  \nCall‑to‑action: Download the logo for free use.  \nFormat + length: Flat vector logo, 512 × 512 px, PNG with transparent background.\n\n**Script (narration)**  \n“Here is a clean, minimalist coffee cup logo. Warm brown and cream tones give it a friendly, inviting feel, while the flat vector style keeps it versatile for any brand.”\n\n**Voice‑over prompt**  \nProvide the script above to media.tts for a warm, friendly voice at a moderate pace.\n\n**Video prompt**  \nA static frame showing the generated logo, centered, with a subtle fade‑in over 1.5 seconds.\n\n**Music prompt**  \nSoft acoustic guitar melody, warm and mellow, low volume to sit beneath the narration.\n\n**Assembly note**  \nPlay the voice‑over over the static logo frame; duck the music under the narration; bring the music back gently at the end as the CTA appears on screen for 2 seconds.\n\n**Image generation prompt**  \n“A simple minimalist coffee cup logo, flat vector style, warm brown and cream colors, clean lines, no background, suitable for branding.”\n\n**Result**  \nThe media.image tool was invoked with the above prompt but returned an error: *OpenRouter image 404 – no endpoints found for google/gemini-2.5‑flash‑image‑preview*【1】. Consequently, no image asset was produced. The prompt is ready for rendering once the MiniMax API key (or a compatible image endpoint) is configured. All other prompts (script, voice‑over, video, music) are provided above for immediate use.",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "governance.check",
      "args": {
        "content": "**Content Plan**  \nHook: Start your day with a warm sip.  \nCore message: Simple elegance in every cup.  \nCall‑to‑action: Download the logo for free use.  \nFormat + length: Flat vector logo, 512 × 512 px, PNG with transparent background.\n\n**Script (narration)**  \n“Here is a clean, minimalist coffee cup logo. Warm brown and cream tones give it a friendly, inviting feel, while the flat vector style keeps it versatile for any brand.”\n\n**Voice‑over prompt**  \nProvide the script above to media.tts for a warm, friendly voice at a moderate pace.\n\n**Video prompt**  \nA static frame showing the generated logo, centered, with a subtle fade‑in over 1.5 seconds.\n\n**Music prompt**  \nSoft acoustic guitar melody, warm and mellow, low volume to sit beneath the narration.\n\n**Assembly note**  \nPlay the voice‑over over the static logo frame; duck the music under the narration; bring the music back gently at the end as the CTA appears on screen for 2 seconds.\n\n**Image generation prompt**  \n“A simple minimalist coffee cup logo, flat vector style, warm brown and cream colors, clean lines, no background, suitable for branding.”\n\n**Result**  \nThe media.image tool was invoked with the above prompt but returned an error: *OpenRouter image 404 – no endpoints found for google/gemini-2.5‑flash‑image‑preview*【1】. Consequently, no image asset was produced. The prompt is ready for rendering once the MiniMax API key (or a compatible image endpoint) is configured. All other prompts (script, voice‑over, video, music) are provided above for immediate use."
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
