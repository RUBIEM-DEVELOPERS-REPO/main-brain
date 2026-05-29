---
title: "Research: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Review the following diff/PR. Use github.read_repo if a PR number is given. Output sections (only if you have something to say): Correctness / Maintainability / Security / Performance. For each finding, cite the file + line and propose the change. End with a verdict: APPROVE / APPROVE-WITH-CHANGES / REQUEST-CHANGES

**Verdict:** **REQUEST‑CHANGES** – the review cannot be performed because the necessary repository/PR information was not provided.

*Reasoning:*  
The task requires loading the changed files of a specific pull‑request (using `github.read_repo`) and then analysing those files for correctness, maintainability, security, and performance issues. No PR number or repository URL was supplied in the prompt, and the only available evidence consists of dictionary entries for the word “review,” which do not contain any code or diff information. Without the actual code changes, no concrete findings or recommendations can be made.

**Next steps:**  
Provide the GitHub repository identifier and the pull‑request number (or the raw diff) so that `github.read_repo` can retrieve the modified files. Once the code is available, a detailed review can be performed.

## Web sources
1. [&#1055;&#1077;&#1088;&#1077;&#1074;&#1086;&#1076; REVIEW &#1089; &#1072;&#1085;&#1075;&#1083;&#1080;&#1081;&#1089;&#1082;&#1086;&#1075;&#1086; &#1085;&#1072; &#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;: Cambridge Dictionary](https://dictionary.cambridge.org/ru/%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%B0%D0%BD%D0%B3%D0%BB%D0%BE-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/review) _(relevance 13, http)_
2. [Review - перевод, транскрипция, произношение, примеры](https://wooordhunt.ru/word/review) _(relevance 11, http)_
3. [Review - Перевод на русский - примеры английский | Reverso Context](https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/Review) _(relevance 10, browser)_

## Vault hits at time of research
- [[0-Inbox/202605290903-research-review-the-following-diff-pr-use-github-read-repo-if-a-pr-nu.md]] (line 10)
- [[_neuroworks/jobs/2026-05-29-code-review-on-a-diff-pr-6b39609f.md]] (line 24)
- [[_neuroworks/templates/2026-05-26-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
- [[_neuroworks/templates/2026-05-28-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
- [[_neuroworks/templates/2026-05-29-custom-software-engineer-code-review-on-a-diff-pr.md]] (line 8)
