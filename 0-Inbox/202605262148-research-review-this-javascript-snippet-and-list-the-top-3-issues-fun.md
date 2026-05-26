---
title: "Research: Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r =>"
created: 2026-05-26
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: Review this JavaScript snippet and list the top 3 issues: ```function getUser(id) { return fetch('/api/u/'+id).then(r => r.json()).then(u => u.name) }``` — Concentrate on error handling, security, and maintainability

**Top 3 problems in the snippet**

| # | Issue (focus) | Why it matters | How to fix (brief) |
|---|---------------|----------------|--------------------|
| 1 | **Missing error handling** – the code assumes the request succeeds and that the response body is valid JSON. Fetch only rejects on network failures; a 4xx/5xx response still resolves, and `r.json()` will throw if the payload isn’t JSON. This can crash the promise chain and leak uncaught errors to the UI. | The article on using the Fetch API notes that “the Fetch API makes using the XMLHttpRequest object easier … but does have some drawbacks where error handling is concerned” and recommends checking `response.ok` and catching JSON‑parsing errors [1]. | ```js\nreturn fetch(`/api/u/${encodeURIComponent(id)}`)\n  .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\n  .then(u => u.name)\n  .catch(err => { /* log / show fallback */ });\n``` |
| 2 | **Security – unsafe URL construction** – concatenating `id` directly into the URL (`'/api/u/'+id`) trusts that the caller supplies a safe value. If `id` contains characters like `../` or query delimiters, it can lead to path‑traversal or injection attacks on the server side. | Building request URLs with raw user input is a common vector for attacks; sanitising or encoding the value prevents accidental manipulation of the request path. | Use `encodeURIComponent` (or a URL‑builder) to escape the identifier: `\`/api/u/${encodeURIComponent(id)}\``. |
| 3 | **Maintainability – hard‑to‑read promise chain & no async/await** – the one‑liner mixes fetch, two `.then` calls, and the return value, making debugging and future extensions (e.g., adding headers, timeout, retries) cumbersome. | A more explicit structure improves readability, eases testing, and lets you centralise common fetch logic (e.g., a wrapper that handles errors, adds auth headers, etc.). | Rewrite with `async/await` and a reusable helper: ```js\nasync function getUser(id) {\n  const resp = await safeFetch(`/api/u/${encodeURIComponent(id)}`);\n  const data = await resp.json();\n  return data.name;\n}\n``` where `safeFetch` implements the error handling from issue 1. |

**Summary** – The snippet lacks proper error handling, builds the request URL insecurely, and is written in a terse promise style that hampers future maintenance. Addressing these three points will make the function robust, safer, and easier to evolve.  

*Source: “How to Use the Fetch API (Correctly)” discusses fetch’s error‑handling pitfalls and the need for explicit response checks [1].*

## Web sources
1. [How to Use the Fetch API (Correctly)](https://www.codemag.com/Article/2107031/How-to-Use-the-Fetch-API-Correctly) _(relevance 5, http)_
2. [How to FETCH data from an API using JavaScript ↩️ - YouTube](https://www.youtube.com/watch?v=37vxWr0WgQk) _(relevance 5, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[How to get Readable error response from JavaScript Fetch API? - Stack Overflow](https://stackoverflow.com/questions/40408219/how-to-get-readable-error-response-from-javascript-fetch-api)~~ — error-page (matched: /\b(?:404 (?:not found|page not found)|page not found|410 gone|forbidden access|)

## Vault hits at time of research
_(none)_
