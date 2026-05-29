---
type: job
title: Code review on a diff/PR
slug: code-review-on-a-diff-pr-b87722d6
created: 2026-05-29T20:41:24.215Z
jobId: b87722d6-92cf-4f58-8f37-f03442afeba7
status: succeeded
template: custom-software-engineer-code-review-on-a-diff-pr
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:36:44.582Z
finishedAt: 2026-05-29T20:41:24.215Z
---

# Code review on a diff/PR

- **Status:** succeeded
- **Template:** custom-software-engineer-code-review-on-a-diff-pr
- **Started:** 2026-05-29T20:36:44.582Z
- **Finished:** 2026-05-29T20:41:24.215Z
- **Title:** Code review on a diff/PR

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Code review on a diff/PR\nDescription: Senior-engineer review of a diff or PR — correctness, maintainability, security, performance."
}
```

## Plan
Default research plan for: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES.

Context: Role: Custom
Title: Code review on a diff/PR
Description: Senior-enginee

### Steps
1. ✓ Researching "Review the following diff/PR. Use github.read_repo if a PR number is given. Outp…" — vault + web — `research.deep` (14.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (209.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (18.4s)
    > auto-injected: quality score=0.64 (pass=false) — peer review for a second opinion

## Answer
## Correctness
No code diff or PR information was supplied, so correctness cannot be evaluated.

## Maintainability
Without the repository context or specific file changes, maintainability cannot be assessed.

## Security
No files or line numbers are available for security review.

## Performance
Performance implications cannot be judged without the code context.

---

**Verdict:** **REQUEST‑CHANGES** – Please provide the repository identifier (owner/repo) and the PR number, or paste the raw diff, so a detailed review covering correctness, maintainability, security, and performance can be performed. [1]

<details><summary>Log</summary>

```
[2026-05-29T20:36:44.607Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:36:44.616Z] Thinking about the best approach…
[2026-05-29T20:36:44.704Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:36:45.861Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:36:45.863Z] Plan ready: 1 step — Default research plan for: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES.

Context: Role: Custom
Title: Code review on a diff/PR
Description: Senior-enginee.
[2026-05-29T20:36:45.873Z] Step 1 of 1: Researching "Review the following diff/PR. Use github.read_repo if a PR number is given. Outp…" — vault + web
[2026-05-29T20:37:00.587Z] All sub-agents finished in 14.7s.
[2026-05-29T20:37:00.603Z] Thinking with openai/gpt-oss-20b:free (~3 279 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:37:07.115Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:37:07.120Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:37:07.120Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:37:07.120Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:40:37.026Z] Wave 1 finished in 209.9s.
[2026-05-29T20:40:37.026Z] All sub-agents finished in 209.9s.
[2026-05-29T20:40:37.030Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:40:55.470Z] All sub-agents finished in 18.4s.
[2026-05-29T20:40:55.476Z] quality.check failed (score=0.64, issues: No code diff or PR information was provided; The request to call `github.read_repo` cannot be fulfilled without a repository URL or PR number) — re-synthesising with the large model
[2026-05-29T20:40:55.491Z] Thinking with openai/gpt-oss-120b:free (~3 657 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:41:23.810Z] quality rescue improved score: 0.64 → 0.8; using the rescued draft
[2026-05-29T20:41:23.810Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:41:24.215Z] Vault commit: done.
```
</details>
