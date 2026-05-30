---
title: "Research: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something "
created: 2026-05-30
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES

**Findings**

| Category | Observation | File / Line | Suggested Change |
|----------|-------------|-------------|------------------|
| **Correctness** | No diff or PR identifier was supplied in the request, so there is nothing to analyse for functional correctness. | – | Ask the user to provide the PR number or the raw diff text. |
| **Maintainability** | Without the code change we cannot assess naming, documentation, or code‑style issues. | – | Same as above – request the missing information. |
| **Security** | No code to inspect; therefore no security implications can be evaluated. | – | Same as above. |
| **Performance** | No code to profile or review for inefficiencies. | – | Same as above. |

**Verdict:** **REQUEST‑CHANGES** – the review cannot be performed until the actual diff or PR number is supplied. Please provide the relevant GitHub PR identifier (or the raw diff) so the code can be fetched with `github.read_repo` and evaluated across the requested dimensions.

## Web sources
1. [REVIEW | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/review) _(relevance 15, http)_
2. [REVIEW Definition &amp; Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/review) _(relevance 15, http)_
3. [REVIEW definition and meaning | Collins English Dictionary](https://www.collinsdictionary.com/dictionary/english/review) _(relevance 15, browser)_

## Vault hits at time of research
- [[0-Inbox/202605290903-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[0-Inbox/202605290924-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[0-Inbox/202605291412-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[0-Inbox/202605291912-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[0-Inbox/202605292037-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[_neuroworks/templates/2026-05-26-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
- [[_neuroworks/templates/2026-05-28-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
