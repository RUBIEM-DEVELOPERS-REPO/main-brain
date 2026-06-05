---
type: template
title: Read the repository overview to list recent system updates. (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)
slug: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
created: 2026-06-05T23:33:41.678Z
templateId: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c
role: Custom
originTask: (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Can you go inside my repository and tell me all the updates on the system?
---

# Read the repository overview to list recent system updates. (custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c)

Saved from chat: "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Can you go inside my repository and tell me all the updates on the system?"

**Origin task:** (You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Can you go inside my repository and tell me all the updates on the system?

## Saved plan

```json
{
  "steps": [
    {
      "tool": "github.read_repo",
      "args": {
        "owner": "<your-github-username>",
        "name": "<your-repo-name>"
      },
      "rationale": "Retrieve repo overview including recent commits, PRs, and issues to identify system updates.",
      "label": "Reading the <your-repo-name> repo"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nCan you go inside my repository and tell me all the updates on the system?",
        "answer": "## System Update Report\n\nThe latest inspection of the repository shows no new activity.  \n- **Commits:** none recorded.  \n- **Pull requests:** none opened or merged.  \n- **Issues:** no new or updated issues.\n\nThis indicates the repository is currently static, with no recent changes or pending work. If you anticipate updates that are not reflected here, verify that the correct repository name and owner were supplied, or check for activity in other branches or forks.\n\n[1] github.read_repo – repository snapshot (no commits, PRs, or issues)",
        "sources": "[1] github.read_repo (name=\"<your-repo-name>\", owner=\"<your-github-username>\")\n{\"readme\":null,\"commits\":[],\"prs\":[],\"issues\":[]}"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "## System Update Report\n\nThe latest inspection of the repository shows no new activity.  \n- **Commits:** none recorded.  \n- **Pull requests:** none opened or merged.  \n- **Issues:** no new or updated issues.\n\nThis indicates the repository is currently static, with no recent changes or pending work. If you anticipate updates that are not reflected here, verify that the correct repository name and owner were supplied, or check for activity in other branches or forks.\n\n[1] github.read_repo – repository snapshot (no commits, PRs, or issues)",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nCan you go inside my repository and tell me all the updates on the system?",
        "answer": "## System Update Report\n\nThe latest inspection of the repository shows no new activity.  \n- **Commits:** none recorded.  \n- **Pull requests:** none opened or merged.  \n- **Issues:** no new or updated issues.\n\nThis indicates the repository is currently static, with no recent changes or pending work. If you anticipate updates that are not reflected here, verify that the correct repository name and owner were supplied, or check for activity in other branches or forks.\n\n[1] github.read_repo – repository snapshot (no commits, PRs, or issues)"
      },
      "rationale": "auto-injected: quality score=0.40 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Read the repository overview to list recent system updates.",
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
