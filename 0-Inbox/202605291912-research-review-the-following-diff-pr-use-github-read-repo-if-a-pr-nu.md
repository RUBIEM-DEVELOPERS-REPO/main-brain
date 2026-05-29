---
title: "Research: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES

**Findings**

| Area | Observation | File / Line | Recommendation |
|------|-------------|-------------|----------------|
| **Correctness** | No diff or PR identifier was supplied, so the reviewer cannot locate the changed code to assess logical correctness. | – | Request that the author provide the GitHub PR number or the raw diff text. |
| **Maintainability** | Without the actual code change, it is impossible to evaluate naming, documentation, or architectural impact. | – | Same as above – obtain the diff. |
| **Security** | No files are available to scan for insecure patterns (e.g., hard‑coded secrets, unsafe APIs). | – | Same as above. |
| **Performance** | No performance‑relevant code is visible, so no analysis can be performed. | – | Same as above. |

**Verdict**

**REQUEST‑CHANGES** – The review cannot be completed until the PR number or the full diff is provided so that `github.read_repo` can retrieve the changed files. Once the code is available, the reviewer will evaluate correctness, maintainability, security, and performance as requested.

## Web sources
1. [REVIEW | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/review) _(relevance 15, http)_
2. [Review - Wikipedia](https://en.wikipedia.org/wiki/Review) _(relevance 15, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[Verifying Connection](https://www.trustpilot.com/)~~ — bad-status (HTTP 403)

## Vault hits at time of research
- [[0-Inbox/202605290903-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[0-Inbox/202605290924-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[0-Inbox/202605291412-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[_neuroworks/jobs/2026-05-29-code-review-on-a-diff-pr-1787e254.md]] (line 24)
- [[_neuroworks/jobs/2026-05-29-code-review-on-a-diff-pr-6016a286.md]] (line 24)
- [[_neuroworks/jobs/2026-05-29-code-review-on-a-diff-pr-6b39609f.md]] (line 24)
- [[_neuroworks/templates/2026-05-26-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
