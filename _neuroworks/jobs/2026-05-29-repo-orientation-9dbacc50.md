---
type: job
title: Repo orientation
slug: repo-orientation-9dbacc50
created: 2026-05-29T20:49:52.065Z
jobId: 9dbacc50-5e8b-4300-a6bd-6da5f5b3cf31
status: succeeded
template: custom-software-engineer-repo-orientation
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T20:37:52.127Z
finishedAt: 2026-05-29T20:49:52.065Z
---

# Repo orientation

- **Status:** succeeded
- **Template:** custom-software-engineer-repo-orientation
- **Started:** 2026-05-29T20:37:52.127Z
- **Finished:** 2026-05-29T20:49:52.065Z
- **Title:** Repo orientation

## Inputs
```json
{
  "contextHint": "Role: Custom\nTitle: Repo orientation\nDescription: Read a repo and produce a senior-engineer orientation: what it does, how it's organised, where to start."
}
```

## Plan
Default research plan for: senior-engineer orientation to the following repo. Use github.read_repo. Output: 1) Purpose (one sentence). 2) Stack (languages, frameworks, key libraries). 3) Architecture overview (entry points, main modules, data flow). 4) Where the interesting complexity lives. 5) First three files a new engineer should read, in order. Cite file paths.

Context: Role: Custom
Title: Repo orientation
D

### Steps
1. ✓ Researching "senior-engineer orientation to the following repo. Use github.read_repo. Output:…" — vault + web — `research.deep` (12.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (316.3s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (37.6s)
    > auto-injected: quality score=0.44 (pass=false) — peer review for a second opinion

## Answer
## Senior‑Engineer Orientation – Pending Repository Data  

**Purpose** – *Not determinable until the repository contents are available.*  

**Stack** – *Cannot be identified without file listings or language‑specific files (e.g., `package.json`, `requirements.txt`, `Dockerfile`).*  

**Architecture Overview** – *Requires inspection of entry‑point scripts, module hierarchy, and data‑flow definitions, which are absent from the current evidence.*  

**Key Complexity Areas** – *Unknown at this stage; typically reside in integration layers, asynchronous processing, or domain‑specific algorithms, but the exact hotspots can only be pinpointed after reviewing the codebase.*  

**Initial Files to Read** – *Cannot be recommended until the repository tree is provided.*  

### Information Needed to Complete the Orientation
1. Output of `github.read_repo` (full file tree and top‑level directories).  
2. Any existing documentation files (e.g., `README.md`, `CONTRIBUTING.md`, architecture diagrams).  
3. Build or dependency manifests (`package.json`, `requirements.txt`, `pom.xml`, `go.mod`, etc.).  
4. Entry‑point definitions (e.g., `main.py`, `app.js`, `Dockerfile`, `Makefile`).  

*Providing the above will enable a concise, evidence‑backed orientation as requested.*

<details><summary>Log</summary>

```
[2026-05-29T20:37:52.137Z] Working as Clawbot — AI agent operator.
[2026-05-29T20:37:52.144Z] Thinking about the best approach…
[2026-05-29T20:37:52.185Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T20:37:57.898Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T20:37:57.898Z] Plan ready: 1 step — Default research plan for: senior-engineer orientation to the following repo. Use github.read_repo. Output: 1) Purpose (one sentence). 2) Stack (languages, frameworks, key libraries). 3) Architecture overview (entry points, main modules, data flow). 4) Where the interesting complexity lives. 5) First three files a new engineer should read, in order. Cite file paths.

Context: Role: Custom
Title: Repo orientation
D.
[2026-05-29T20:37:57.903Z] Step 1 of 1: Researching "senior-engineer orientation to the following repo. Use github.read_repo. Output:…" — vault + web
[2026-05-29T20:38:10.333Z] All sub-agents finished in 12.4s.
[2026-05-29T20:38:10.340Z] Thinking with openai/gpt-oss-20b:free (~2 698 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T20:38:19.884Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T20:38:19.888Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T20:38:19.888Z] Step 3 of 3: Security-scanning the note
[2026-05-29T20:38:19.888Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T20:43:36.165Z] Wave 1 finished in 316.3s.
[2026-05-29T20:43:36.165Z] All sub-agents finished in 316.3s.
[2026-05-29T20:43:36.171Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T20:43:37.236Z]   ⟳ Asking a peer to review the draft: transient error (attempt 1/2), retrying in 1.5s — review HTTP 503
[2026-05-29T20:43:40.688Z]   ⟳ Asking a peer to review the draft: transient error (attempt 2/2), retrying in 4.0s — review HTTP 503
[2026-05-29T20:44:13.802Z] All sub-agents finished in 37.6s.
[2026-05-29T20:44:13.818Z] quality.check failed (score=0.44, issues: The answer is not based on the provided evidence.; The answer contains unsupported claims about the lack of repository information.) — re-synthesising with the large model
[2026-05-29T20:44:13.827Z] Thinking with openai/gpt-oss-120b:free (~3 107 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:49:37.375Z] quality re-score failed (fetch failed); keeping the rescued draft anyway
[2026-05-29T20:49:37.375Z] peer review verdict=bad (No repository data provided, answer does not address task; Fails to produce required orientation) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T20:49:37.386Z] Thinking with openai/gpt-oss-120b:free (~3 255 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T20:49:51.651Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T20:49:51.651Z] Wrote to your second brain — committing the changes.
[2026-05-29T20:49:52.065Z] Vault commit: done.
```
</details>
