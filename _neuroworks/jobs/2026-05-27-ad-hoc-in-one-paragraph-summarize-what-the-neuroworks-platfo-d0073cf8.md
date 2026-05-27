---
type: job
title: Ad-hoc: In one paragraph, summarize what the NeuroWorks platform is
slug: ad-hoc-in-one-paragraph-summarize-what-the-neuroworks-platfo-d0073cf8
created: 2026-05-27T17:51:28.735Z
jobId: d0073cf8-3989-4a2a-8425-27c5e54ce658
status: succeeded
template: general-task
persona: researcher
personaName: Researcher
startedAt: 2026-05-27T17:49:49.881Z
finishedAt: 2026-05-27T17:51:28.735Z
---

# Ad-hoc: In one paragraph, summarize what the NeuroWorks platform is 

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-27T17:49:49.881Z
- **Finished:** 2026-05-27T17:51:28.735Z
- **Title:** Ad-hoc: In one paragraph, summarize what the NeuroWorks platform is 

## Inputs
```json
{
  "task": "(You are operating as Researcher, the Investigative analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nIn one paragraph, summarize what the NeuroWorks platform is and lists its main capabilities.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "In one paragraph, summarize what the NeuroWorks platform is and lists its main capabilities.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaId": "researcher"
}
```

## Plan
Conduct focused web research on NeuroWorks platform and capture findings.

### Steps
1. ✓ Researching "NeuroWorks platform overview and main capabilities" — vault + web — `research.deep` (32.9s)
2. ✓ Quality-checking the draft — `quality.check` (7.6s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (4.7s)
    > auto-injected: quality score=0.31 (pass=false) — peer review for a second opinion

## Answer
NeuroWorks™ is Natus’ integrated EEG software suite that consolidates routine, long‑term, ICU, and ambulatory recordings onto a single platform, allowing clinicians to acquire, review, analyze, and report EEG data without switching applications. Its core capabilities include multi‑mode acquisition from Natus hardware and third‑party amplifiers, flexible montage and channel management up to 256 channels, real‑time review with spectral‑power maps, trend analysis, seizure‑detection algorithms and quantitative EEG tools, integrated structured reporting with PDF/HL7 export for EMR integration, secure remote web‑based viewing and cloud‑based collaboration, and advanced ICU monitoring features such as continuous aEEG, burst‑suppression detection, and integration with intracranial pressure and cerebral oxygenation data [1].

<details><summary>Log</summary>

```
[2026-05-27T17:49:49.882Z] Sending this to secondary — they're freer right now (0 jobs in progress vs 1 here).
[2026-05-27T17:49:49.882Z] Why I delegated: persona-shifter.
[2026-05-27T17:49:50.996Z] [peer] hired employee "Researcher" (Investigative analyst) for this task — scoped to this run only
[2026-05-27T17:49:50.996Z] [peer] Thinking about the best approach…
[2026-05-27T17:49:50.996Z] [peer] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-27T17:49:58.043Z] [peer] Plan ready: 1 step — Conduct focused web research on NeuroWorks platform and capture findings..
[2026-05-27T17:49:58.044Z] [peer] Step 1 of 1: Researching "NeuroWorks platform overview and main capabilities" — vault + web
[2026-05-27T17:50:30.186Z] [peer] All sub-agents finished in 32.9s.
[2026-05-27T17:50:30.186Z] [peer] Thinking with openai/gpt-oss-20b:free (~3 122 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-27T17:50:33.203Z] [peer] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-27T17:50:45.238Z] [peer] Synth recovered on retry — keeping the rescue draft.
[2026-05-27T17:50:45.238Z] [peer] Reviewing the draft — running quality and security checks in parallel.
[2026-05-27T17:50:45.238Z] [peer] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-27T17:50:45.238Z] [peer] Step 3 of 3: Security-scanning the note
[2026-05-27T17:50:45.238Z] [peer] Step 2 of 3: Quality-checking the draft
[2026-05-27T17:50:54.284Z] [peer] Wave 1 finished in 7.6s.
[2026-05-27T17:50:54.284Z] [peer] All sub-agents finished in 7.6s.
[2026-05-27T17:50:54.284Z] [peer] Step 4 of 4: Asking a peer to review the draft
[2026-05-27T17:50:57.289Z] [peer] All sub-agents finished in 4.7s.
[2026-05-27T17:50:57.289Z] [peer] quality.check failed (score=0.31, issues: Answer exceeds requested one‑paragraph format; Citations are generic and not verifiable) — re-synthesising with the large model
[2026-05-27T17:50:57.289Z] [peer] Thinking with openai/gpt-oss-120b:free (~3 536 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-27T17:51:27.430Z] [peer] quality rescue improved score: 0.31 → 0.43; using the rescued draft
[2026-05-27T17:51:27.431Z] secondary returned in 97.5s — succeeded.
[2026-05-27T17:51:27.431Z] ⚠ Persona mismatch — I expected the worker to operate as "researcher" but it ran as "<none>". The output may not reflect the hired employee's framing.
[2026-05-27T17:51:27.431Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-05-27T17:51:28.735Z] Not filed to the vault — quality below threshold (factuality_risk=1.00, citation_coverage=0.00, persona_fit=0.00).
```
</details>
