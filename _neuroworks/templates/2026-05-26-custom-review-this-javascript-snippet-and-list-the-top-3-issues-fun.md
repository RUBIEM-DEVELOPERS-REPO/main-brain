---
type: template
title: Default research plan for: Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability (custom-review-this-javascript-snippet-and-list-the-top-3-issues-fun)
slug: custom-review-this-javascript-snippet-and-list-the-top-3-issues-fun
created: 2026-05-26T21:49:20.347Z
templateId: custom-review-this-javascript-snippet-and-list-the-top-3-issues-fun
role: Custom
originTask: Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability.  Interpretation: intent=review, target="this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json".  Deliverable shape: Review format. `## Verdict` (1-2 sentence judgement), `## Strengths` (3-5 bullets), `## Issues` (3-5 bullets, severity-ordered), `## Recommendations` (numbered actions). No preamble.  **Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output: - Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items. - Named people, roles, accounts, vendors → reference each by name. - Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim. - Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section. - Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step. - Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.  If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.
---

# Default research plan for: Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability (custom-review-this-javascript-snippet-and-list-the-top-3-issues-fun)

Saved from chat: "Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability.

Interpretation: intent=review, target="this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json".

Deliverable shape: Review format. `## Verdict` (1-2 sentence judgement), `## Strengths` (3-5 bullets), `## Issues` (3-5 bullets, severity-ordered), `## Recommendations` (numbered actions). No preamble.

**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:
- Named counts ("5 steps", "top 3 risks", "4-stage loop", "3 social variants") → produce exactly that many items.
- Named people, roles, accounts, vendors → reference each by name.
- Specific dates, deadlines, scale numbers ("by 2026-06-15", "1200 employees", "$99/mo") → echo verbatim.
- Named sections / deliverable shape ("Title, Symptoms, Root cause, Resolution, Prevention" or "must-haves vs nice-to-haves") → produce each named section.
- Named steps in a process ("paging on-call → scoping impact → status page → comms → escalation → post-mortem") → cover every step.
- Output format directives ("numbered list", "table", "≤4 bullets") → honour exactly.

If the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently."

**Origin task:** Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability.

Interpretation: intent=review, target="this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json".

Deliverable shape: Review format. `## Verdict` (1-2 sentence judgement), `## Strengths` (3-5 bullets), `## Issues` (3-5 bullets, severity-ordered), `## Recommendations` (numbered actions). No preamble.

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
      "tool": "research.deep",
      "args": {
        "query": "Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability",
        "depth": 3,
        "capture": true
      },
      "rationale": "default fallback: search vault + web, synthesise, capture findings to 0-Inbox/",
      "label": "Researching \"Review this JavaScript snippet and list the top 3 issues: ```function getUser(id…\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability.\n\nInterpretation: intent=review, target=\"this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json\".\n\nDeliverable shape: Review format. `## Verdict` (1-2 sentence judgement), `## Strengths` (3-5 bullets), `## Issues` (3-5 bullets, severity-ordered), `## Recommendations` (numbered actions). No preamble.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Top 3 problems in the snippet**\n\n| # | Issue (focus) | Why it matters | How to fix (brief) |\n|---|---------------|----------------|--------------------|\n| 1 | **Missing error handling** – the code assumes the request succeeds and that the response body is valid JSON. Fetch only rejects on network failures; a 4xx/5xx response still resolves, and `r.json()` will throw if the payload isn’t JSON. This can crash the promise chain and leak uncaught errors to the UI. | The article on using the Fetch API notes that “the Fetch API makes using the XMLHttpRequest object easier … but does have some drawbacks where error handling is concerned” and recommends checking `response.ok` and catching JSON‑parsing errors [1]. | ```js\\nreturn fetch(`/api/u/${encodeURIComponent(id)}`)\\n  .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\\n  .then(u => u.name)\\n  .catch(err => { /* log / show fallback */ });\\n``` |\n| 2 | **Security – unsafe URL construction** – concatenating `id` directly into the URL (`'/api/u/'+id`) trusts that the caller supplies a safe value. If `id` contains characters like `../` or query delimiters, it can lead to path‑traversal or injection attacks on the server side. | Building request URLs with raw user input is a common vector for attacks; sanitising or encoding the value prevents accidental manipulation of the request path. | Use `encodeURIComponent` (or a URL‑builder) to escape the identifier: `\\`/api/u/${encodeURIComponent(id)}\\``. |\n| 3 | **Maintainability – hard‑to‑read promise chain & no async/await** – the one‑liner mixes fetch, two `.then` calls, and the return value, making debugging and future extensions (e.g., adding headers, timeout, retries) cumbersome. | A more explicit structure improves readability, eases testing, and lets you centralise common fetch logic (e.g., a wrapper that handles errors, adds auth headers, etc.). | Rewrite with `async/await` and a reusable helper: ```js\\nasync function getUser(id) {\\n  const resp = await safeFetch(`/api/u/${encodeURIComponent(id)}`);\\n  const data = await resp.json();\\n  return data.name;\\n}\\n``` where `safeFetch` implements the error handling from issue 1. |\n\n**Summary** – The snippet lacks proper error handling, builds the request URL insecurely, and is written in a terse promise style that hampers future maintenance. Addressing these three points will make the function robust, safer, and easier to evolve.  \n\n*Source: “How to Use the Fetch API (Correctly)” discusses fetch’s error‑handling pitfalls and the need for explicit response checks [1].*",
        "sources": "[1] research.deep (query=\"Review this JavaScript snippet and list the top 3 issues: ``\")\n**Top 3 problems in the snippet**\n\n| # | Issue (focus) | Why it matters | How to fix (brief) |\n|---|---------------|----------------|--------------------|\n| 1 | **Missing error handling** – the code assumes the request succeeds and that the response body is valid JSON. Fetch only rejects on network failures; a 4xx/5xx response still resolves, and `r.json()` will throw if the payload isn’t JSON. This can crash the promise chain and leak uncaught errors to the UI. | The article on using the Fetch API notes that “the Fetch API makes using the XMLHttpRequest object easier … but does have some drawbacks where error handling is concerned” and recommends checking `response.ok` and catching JSON‑parsing errors [1]. | ```js\\nreturn fetch(`/api/u/${encodeURIComponent(id)}`)\\n  .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\\n  .then(u => u.name)\\n  .catch(err => { /* log / show fallback */ });\\n``` |\n| 2 | **Security – unsafe URL construction** – concatenating `id` directly into the URL (`'/api/u/'+id`) trusts that the caller supplies a safe value. If `id` contains characters like `../` or query delimiters, it can lead to path‑traversal or injection attacks on the server side. | Building request URLs with raw user input is a common vector for attacks; sanitising or encoding the value prevents accidental manipulation of the request path. | Use `encodeURIComponent` (or a URL‑builder) to escape the identifier: `\\`/api/u/${encodeURIComponent(id)}\\``. |\n| 3 "
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**Top 3 problems in the snippet**\n\n| # | Issue (focus) | Why it matters | How to fix (brief) |\n|---|---------------|----------------|--------------------|\n| 1 | **Missing error handling** – the code assumes the request succeeds and that the response body is valid JSON. Fetch only rejects on network failures; a 4xx/5xx response still resolves, and `r.json()` will throw if the payload isn’t JSON. This can crash the promise chain and leak uncaught errors to the UI. | The article on using the Fetch API notes that “the Fetch API makes using the XMLHttpRequest object easier … but does have some drawbacks where error handling is concerned” and recommends checking `response.ok` and catching JSON‑parsing errors [1]. | ```js\\nreturn fetch(`/api/u/${encodeURIComponent(id)}`)\\n  .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\\n  .then(u => u.name)\\n  .catch(err => { /* log / show fallback */ });\\n``` |\n| 2 | **Security – unsafe URL construction** – concatenating `id` directly into the URL (`'/api/u/'+id`) trusts that the caller supplies a safe value. If `id` contains characters like `../` or query delimiters, it can lead to path‑traversal or injection attacks on the server side. | Building request URLs with raw user input is a common vector for attacks; sanitising or encoding the value prevents accidental manipulation of the request path. | Use `encodeURIComponent` (or a URL‑builder) to escape the identifier: `\\`/api/u/${encodeURIComponent(id)}\\``. |\n| 3 | **Maintainability – hard‑to‑read promise chain & no async/await** – the one‑liner mixes fetch, two `.then` calls, and the return value, making debugging and future extensions (e.g., adding headers, timeout, retries) cumbersome. | A more explicit structure improves readability, eases testing, and lets you centralise common fetch logic (e.g., a wrapper that handles errors, adds auth headers, etc.). | Rewrite with `async/await` and a reusable helper: ```js\\nasync function getUser(id) {\\n  const resp = await safeFetch(`/api/u/${encodeURIComponent(id)}`);\\n  const data = await resp.json();\\n  return data.name;\\n}\\n``` where `safeFetch` implements the error handling from issue 1. |\n\n**Summary** – The snippet lacks proper error handling, builds the request URL insecurely, and is written in a terse promise style that hampers future maintenance. Addressing these three points will make the function robust, safer, and easier to evolve.  \n\n*Source: “How to Use the Fetch API (Correctly)” discusses fetch’s error‑handling pitfalls and the need for explicit response checks [1].*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability.\n\nInterpretation: intent=review, target=\"this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json\".\n\nDeliverable shape: Review format. `## Verdict` (1-2 sentence judgement), `## Strengths` (3-5 bullets), `## Issues` (3-5 bullets, severity-ordered), `## Recommendations` (numbered actions). No preamble.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
        "answer": "**Top 3 problems in the snippet**\n\n| # | Issue (focus) | Why it matters | How to fix (brief) |\n|---|---------------|----------------|--------------------|\n| 1 | **Missing error handling** – the code assumes the request succeeds and that the response body is valid JSON. Fetch only rejects on network failures; a 4xx/5xx response still resolves, and `r.json()` will throw if the payload isn’t JSON. This can crash the promise chain and leak uncaught errors to the UI. | The article on using the Fetch API notes that “the Fetch API makes using the XMLHttpRequest object easier … but does have some drawbacks where error handling is concerned” and recommends checking `response.ok` and catching JSON‑parsing errors [1]. | ```js\\nreturn fetch(`/api/u/${encodeURIComponent(id)}`)\\n  .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\\n  .then(u => u.name)\\n  .catch(err => { /* log / show fallback */ });\\n``` |\n| 2 | **Security – unsafe URL construction** – concatenating `id` directly into the URL (`'/api/u/'+id`) trusts that the caller supplies a safe value. If `id` contains characters like `../` or query delimiters, it can lead to path‑traversal or injection attacks on the server side. | Building request URLs with raw user input is a common vector for attacks; sanitising or encoding the value prevents accidental manipulation of the request path. | Use `encodeURIComponent` (or a URL‑builder) to escape the identifier: `\\`/api/u/${encodeURIComponent(id)}\\``. |\n| 3 | **Maintainability – hard‑to‑read promise chain & no async/await** – the one‑liner mixes fetch, two `.then` calls, and the return value, making debugging and future extensions (e.g., adding headers, timeout, retries) cumbersome. | A more explicit structure improves readability, eases testing, and lets you centralise common fetch logic (e.g., a wrapper that handles errors, adds auth headers, etc.). | Rewrite with `async/await` and a reusable helper: ```js\\nasync function getUser(id) {\\n  const resp = await safeFetch(`/api/u/${encodeURIComponent(id)}`);\\n  const data = await resp.json();\\n  return data.name;\\n}\\n``` where `safeFetch` implements the error handling from issue 1. |\n\n**Summary** – The snippet lacks proper error handling, builds the request URL insecurely, and is written in a terse promise style that hampers future maintenance. Addressing these three points will make the function robust, safer, and easier to evolve.  \n\n*Source: “How to Use the Fetch API (Correctly)” discusses fetch’s error‑handling pitfalls and the need for explicit response checks [1].*"
      },
      "rationale": "auto-injected: quality score=0.51 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Default research plan for: Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability",
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
