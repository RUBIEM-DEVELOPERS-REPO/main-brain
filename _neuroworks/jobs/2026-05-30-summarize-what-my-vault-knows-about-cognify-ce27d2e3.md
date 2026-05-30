---
type: job
title: summarize what my vault knows about cognify
slug: summarize-what-my-vault-knows-about-cognify-ce27d2e3
created: 2026-05-30T17:26:41.751Z
jobId: ce27d2e3-7d65-478e-9fb0-0388d3a7c216
status: succeeded
template: custom-summarize-what-my-vault-knows-about-cognify
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:26:11.928Z
finishedAt: 2026-05-30T17:26:41.750Z
---

# summarize what my vault knows about cognify

- **Status:** succeeded
- **Template:** custom-summarize-what-my-vault-knows-about-cognify
- **Started:** 2026-05-30T17:26:11.928Z
- **Finished:** 2026-05-30T17:26:41.750Z
- **Title:** summarize what my vault knows about cognify

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: summarize what my vault knows about cognify\nDescription: Saved from chat: \"summarize what my vault knows about cognify\""
}
```

### Steps
1. ✓ Searching your second brain for "Cognify" — `vault.search` (1.4s)
    > find relevant entries in the user's vault
2. ✓ Quality-checking the draft — `quality.check` (14.2s)
    > auto-injected: score factuality, citation coverage, persona fit
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (17.5s)
    > auto-injected: peer-review the draft

## Answer
## Summary of Vault Knowledge on Cognify

Cognify is a multi‑modal AI learning platform that integrates text, audio, and video inputs with AI avatars. The platform claims to compress learning time through its Knowledge Time Compression Engine (KTCE), positioning itself as a competence‑per‑hour metric for learning and development spend. It targets enterprise and educational customers and is developed by a team that also works on other AI‑driven learning tools such as RIFTS‑X and NeuroWorks. The vault contains daily notes (2026‑05‑07 to 2026‑05‑16) that reference the private GitHub repository `RUBIEM-DEVELOPERS-REPO/Cognify-v1.1-master` and a security‑scan note that summarizes the above description [vault:_clawbot/2026-05-07.md]–[vault:_clawbot/2026-05-16.md] and [vault:_clawbot/2026-05-07.md] (security scan). No additional public documentation or external sources are present in the vault.

<details><summary>Log</summary>

```
[2026-05-30T17:26:11.946Z] Replaying a saved plan — 4 steps.
[2026-05-30T17:26:11.961Z] Step 1 of 4: Searching your second brain for "Cognify"
[2026-05-30T17:26:13.381Z] Running 3 sub-agents in parallel (1 I/O + 2 thinking).
[2026-05-30T17:26:13.382Z] Step 3 of 4: Security-scanning the note
[2026-05-30T17:26:13.382Z] Step 2 of 4: Quality-checking the draft
[2026-05-30T17:26:13.382Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-30T17:26:30.911Z] Wave 2 finished in 17.5s.
[2026-05-30T17:26:30.911Z] All sub-agents finished in 18.9s.
[2026-05-30T17:26:30.941Z] Thinking with openai/gpt-oss-20b:free (~3 710 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
```
</details>
