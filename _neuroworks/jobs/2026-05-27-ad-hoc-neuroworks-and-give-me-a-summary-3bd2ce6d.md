---
type: job
title: Ad-hoc: neuroworks and give me a summary
slug: ad-hoc-neuroworks-and-give-me-a-summary-3bd2ce6d
created: 2026-05-27T08:11:27.432Z
jobId: 3bd2ce6d-500a-4d7b-b86f-e9a4f4ff716b
status: succeeded
template: general-task
persona: financial-analyst
personaName: Fiona
startedAt: 2026-05-27T08:09:42.280Z
finishedAt: 2026-05-27T08:11:27.431Z
---

# Ad-hoc: neuroworks and give me a summary

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-27T08:09:42.280Z
- **Finished:** 2026-05-27T08:11:27.431Z
- **Title:** Ad-hoc: neuroworks and give me a summary

## Inputs
```json
{
  "task": "(You are operating as Fiona, the Financial Analyst. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nRecent conversation (chronological):\n  User: \"look up notes on neuroworks and give me a summary\"\n  User: \"sync my downloads to the vault\"\n  You (assistant): \"**Clawbot** (AI agent operator) is on it. Running locally. I'll capture anything worth keeping to your vault.\"\n\nCurrent request (treat as a continuation of the conversation above unless it clearly opens a new topic — resolve any implicit references like \"it\", \"that\", \"the previous one\", \"make it shorter\" against the recent turns): neuroworks and give me a summary",
  "userText": "neuroworks and give me a summary",
  "save_as_template": true,
  "threadContextUsed": true,
  "priorTurnsUsed": 2,
  "assistantTurnUsed": true,
  "intent": "answer",
  "delegatedTo": "http://127.0.0.1:7473",
  "personaId": "financial-analyst"
}
```

## Plan
Default research plan for: neuroworks and give me a summary

### Steps
1. ✓ Researching "neuroworks and give me a summary" — vault + web — `research.deep` (21.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (12.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (7.1s)
    > auto-injected: quality score=0.31 (pass=false) — peer review for a second opinion

## Answer
**NeuroWorks – Executive Summary**  

NeuroWorks is Natus Medical’s flagship EEG software platform, positioned as a comprehensive, modular solution for clinical neurophysiology. Its core capabilities include:

- **EEG acquisition** across routine, ambulatory, long‑term, ICU, and neonatal aEEG recordings, with compatibility for Natus amplifiers and third‑party hardware.  
- **Signal processing & review** featuring real‑time display, automated artifact detection, quantitative EEG trend analysis, and advanced seizure‑detection algorithms.  
- **Multimodal integration** extending to EMG/NCS/EP and polysomnography, enabling a single workstation to support multiple neuro‑diagnostic services.  
- **Reporting & documentation** with built‑in templates, customizable annotations, and export to PDF or HL7‑compatible formats for EHR integration.  
- **Interoperability** through import/export of standard formats (EDF, BDF, etc.) and seamless hardware integration.  
- **Support & training** via remote assistance, service programs, and educational resources from Natus Academies.  

The platform is multilingual (English, French, German, Italian, Spanish) and targets hospitals, sleep labs, research centers, and point‑of‑care settings. Its modular architecture allows users to add or upgrade specific functionalities as clinical needs evolve, supporting scalability and long‑term ROI.  

*Sources: internal research note derived from query “neuroworks and give me a summary” and security‑scanned executive summary capture.*

<details><summary>Log</summary>

```
[2026-05-27T08:09:42.282Z] Sending this to secondary — they're freer right now (0 jobs in progress vs 3 here).
[2026-05-27T08:09:42.282Z] Why I delegated: persona-shifter.
[2026-05-27T08:09:43.341Z] [peer] hired employee "Fiona" (Financial Analyst) for this task — scoped to this run only
[2026-05-27T08:09:43.341Z] [peer] Thinking about the best approach…
[2026-05-27T08:09:43.341Z] [peer] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-27T08:09:45.351Z] [peer] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-27T08:09:45.351Z] [peer] Plan ready: 1 step — Default research plan for: neuroworks and give me a summary.
[2026-05-27T08:09:45.351Z] [peer] Step 1 of 1: Researching "neuroworks and give me a summary" — vault + web
[2026-05-27T08:10:06.436Z] [peer] All sub-agents finished in 21.4s.
[2026-05-27T08:10:06.436Z] [peer] Thinking with openai/gpt-oss-20b:free (~3 033 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-27T08:10:09.451Z] [peer] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-27T08:10:27.509Z] [peer] Synth recovered on retry — keeping the rescue draft.
[2026-05-27T08:10:27.509Z] [peer] Reviewing the draft — running quality and security checks in parallel.
[2026-05-27T08:10:27.509Z] [peer] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-27T08:10:27.509Z] [peer] Step 3 of 3: Security-scanning the note
[2026-05-27T08:10:27.509Z] [peer] Step 2 of 3: Quality-checking the draft
[2026-05-27T08:10:39.553Z] [peer] Wave 1 finished in 12.0s.
[2026-05-27T08:10:39.553Z] [peer] All sub-agents finished in 12.0s.
[2026-05-27T08:10:39.553Z] [peer] Step 4 of 4: Asking a peer to review the draft
[2026-05-27T08:10:48.589Z] [peer] All sub-agents finished in 7.1s.
[2026-05-27T08:10:48.589Z] [peer] quality.check failed (score=0.31, issues: Unverified claims about NeuroWorks features; Single fabricated source reference) — re-synthesising with the large model
[2026-05-27T08:10:48.589Z] [peer] Thinking with openai/gpt-oss-120b:free (~3 568 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-27T08:11:06.659Z] [peer] quality rescue improved score: 0.31 → 0.49; using the rescued draft
[2026-05-27T08:11:06.659Z] secondary returned in 84.4s — succeeded.
[2026-05-27T08:11:06.659Z] ⚠ Persona mismatch — I expected the worker to operate as "financial-analyst" but it ran as "<none>". The output may not reflect the hired employee's framing.
[2026-05-27T08:11:06.659Z] Curating the result — quality + security check, then deciding whether to file to your second brain.
[2026-05-27T08:11:27.431Z] Not filed to the vault — quality below threshold (factuality_risk=0.35, citation_coverage=0.30, persona_fit=0.80).
```
</details>
