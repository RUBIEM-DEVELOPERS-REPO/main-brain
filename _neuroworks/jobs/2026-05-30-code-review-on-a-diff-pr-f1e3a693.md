---
type: job
title: Code review on a diff/PR
slug: code-review-on-a-diff-pr-f1e3a693
created: 2026-05-30T17:46:44.311Z
jobId: f1e3a693-d157-42cd-97ee-c0c7b56d4f58
status: succeeded
template: custom-software-engineer-code-review-on-a-diff-pr
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-30T17:45:41.092Z
finishedAt: 2026-05-30T17:46:44.311Z
---

# Code review on a diff/PR

- **Status:** succeeded
- **Template:** custom-software-engineer-code-review-on-a-diff-pr
- **Started:** 2026-05-30T17:45:41.092Z
- **Finished:** 2026-05-30T17:46:44.311Z
- **Title:** Code review on a diff/PR

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Code review on a diff/PR\nDescription: Senior-engineer review of a diff or PR — correctness, maintainability, security, performance."
}
```

## Plan
Default research plan for: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES

### Steps
1. ✓ Researching "Review the following diff/PR. Use github.read_repo if a PR number is given. Outp…" — vault + web — `research.deep` (31.3s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (8.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Code‑Review Request**

I could not locate a PR number or a raw diff in the request.  
To perform a correctness, maintainability, security, and performance review, I need the following:

1. **PR identifier** (e.g., `#1234`) or a direct link to the pull request.  
2. If the PR is private, a temporary access token or a local copy of the diff.  
3. Confirmation that the repository is the one hosted on GitHub and that the default branch is `main` (or specify the target branch).  

Once I have the PR details, I will use `github.read_repo` to fetch the changes and provide a structured review with citations to specific files and lines.  

*Assumed: The user intends to review a GitHub pull request; no other context was provided.*

<details><summary>Log</summary>

```
[2026-05-30T17:45:41.122Z] Working as Clawbot — AI agent operator.
[2026-05-30T17:45:41.125Z] Thinking about the best approach…
[2026-05-30T17:45:41.335Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-30T17:45:44.637Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-30T17:45:44.637Z] Plan ready: 1 step — Default research plan for: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES.
[2026-05-30T17:45:44.657Z] Step 1 of 1: Researching "Review the following diff/PR. Use github.read_repo if a PR number is given. Outp…" — vault + web
[2026-05-30T17:46:15.949Z] All sub-agents finished in 31.3s.
[2026-05-30T17:46:15.968Z] Thinking with openai/gpt-oss-20b:free (~3 158 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-30T17:46:17.195Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-30T17:46:35.363Z] Synth recovered on retry — keeping the rescue draft.
[2026-05-30T17:46:35.363Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-30T17:46:35.368Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-30T17:46:35.368Z] Step 3 of 3: Security-scanning the note
[2026-05-30T17:46:35.368Z] Step 2 of 3: Quality-checking the draft
[2026-05-30T17:46:43.931Z] Wave 1 finished in 8.6s.
[2026-05-30T17:46:43.931Z] All sub-agents finished in 8.6s.
[2026-05-30T17:46:43.931Z] Quality check passed (78%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-30T17:46:43.931Z] Wrote to your second brain — committing the changes.
[2026-05-30T17:46:44.311Z] Vault commit: done.
```
</details>
