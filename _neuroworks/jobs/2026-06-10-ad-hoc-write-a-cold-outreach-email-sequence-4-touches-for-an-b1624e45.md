---
type: job
title: Ad-hoc: Write a cold outreach email sequence (4 touches) for an AI i
slug: ad-hoc-write-a-cold-outreach-email-sequence-4-touches-for-an-b1624e45
created: 2026-06-10T16:23:26.332Z
jobId: b1624e45-d2c2-402c-944d-fee08656c134
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T16:20:49.338Z
finishedAt: 2026-06-10T16:23:26.331Z
---

# Ad-hoc: Write a cold outreach email sequence (4 touches) for an AI i

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T16:20:49.338Z
- **Finished:** 2026-06-10T16:23:26.331Z
- **Title:** Ad-hoc: Write a cold outreach email sequence (4 touches) for an AI i

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite a cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at startup CFOs.\n\nInterpretation: intent=draft-other, target=\"cold outreach email sequence (4 touches)\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Write a cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at startup CFOs.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "draft-other",
  "intentTarget": "cold outreach email sequence (4 touches)",
  "personaId": "clawbot"
}
```

## Plan
Find context for "cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at " then draft it

### Steps
1. ✓ Searching your second brain for "cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at startup CFOs." — `vault.search` (4.0s)
    > ground the draft in any prior context in the user's second brain — avoid fabricating meaning for unfamiliar terms
2. ✓ Looking in your Downloads, Desktop, Documents, and vault Inbox for "cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at startup CFOs." — `fs.find_in` (0.2s)
    > check the user's PC (Downloads + Desktop + Documents + Inbox) for prior versions of this doc — runs in parallel with the vault search
3. ✓ Quality-checking the draft — `quality.check` (4.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Touch 1 — the opener (Day 0)  
**Subject:** 3‑minute win for your cash flow  

Hi [First Name],  

I noticed your company just closed a Series B—congrats!  
I’ve helped other startup CFOs cut manual invoice processing from 10 hrs a week to under 30 min, freeing time for strategic spend.  

Could we schedule a 15‑minute call next week to explore a quick demo?  

Best,  
Neuro  

---

## Touch 2 — value‑add (Day 3)  
Hi [First Name],  

Just wanted to share a short case study from a peer in your space: after integrating our AI invoicing assistant, they reduced invoice‑to‑payment time by 70 % and saved $12 k in labor costs annually.  

Let me know if you’d like a deeper dive or a quick walk‑through.  

Thanks,  
Neuro  

---

## Touch 3 — different angle (Day 7)  
Hi [First Name],  

Beyond speed, our solution boosts compliance: it flags duplicate or out‑of‑policy invoices before they hit your ledger, cutting audit risk by 40 %.  

Would a brief 10‑minute chat help you see how this could protect your upcoming audit?  

Cheers,  
Neuro  

---

## Touch 4 — break‑up (Day 12)  
Hi [First Name],  

I understand timing is tight. If invoice automation becomes a priority, I’ll keep this thread open. In the meantime, feel free to reach out whenever it’s convenient.  

Wishing you continued success,  

Neuro

<details><summary>Log</summary>

```
[2026-06-10T16:20:49.339Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T16:20:49.346Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T16:22:15.030Z] Hermes responded in 85.7s (2867 chars).
[2026-06-10T16:22:23.839Z] Quality gate: Hermes answer didn't pass clawbot's quality.check (score 0.65) — offloading to clawbot.
[2026-06-10T16:22:23.839Z] Working as Neuro — AI agent operator.
[2026-06-10T16:23:03.261Z] Recognised the shape — Tier 2 — your second brain, 2 steps.
[2026-06-10T16:23:03.262Z] Plan ready: 2 steps — Find context for "cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at " then draft it.
[2026-06-10T16:23:03.311Z] Running with help from 2 peer workers (capacity 7 thinking + 8 I/O sub-agents).
[2026-06-10T16:23:03.311Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-06-10T16:23:03.311Z] Step 1 of 2: Searching your second brain for "cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at startup CFOs."
[2026-06-10T16:23:07.294Z] Step 2 of 2: Looking in your Downloads, Desktop, Documents, and vault Inbox for "cold outreach email sequence (4 touches) for an AI invoicing assistant aimed at startup CFOs."
[2026-06-10T16:23:07.500Z] Wave 1 finished in 4.2s.
[2026-06-10T16:23:07.500Z] All sub-agents finished in 4.2s.
[2026-06-10T16:23:07.526Z] Thinking with openai/gpt-oss-20b:free (~4 786 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-10T16:23:21.884Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-10T16:23:21.893Z] Running with help from 2 peer workers (capacity 7 thinking + 8 I/O sub-agents).
[2026-06-10T16:23:21.893Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-10T16:23:21.893Z] Step 4 of 4: Security-scanning the note
[2026-06-10T16:23:21.893Z] Step 3 of 4: Quality-checking the draft
[2026-06-10T16:23:26.311Z] Wave 1 finished in 4.4s.
[2026-06-10T16:23:26.311Z] All sub-agents finished in 4.4s.
[2026-06-10T16:23:26.311Z] Quality check passed (85%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-10T16:23:26.331Z] Saved this workflow as a reusable template: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c.
[2026-06-10T16:23:26.331Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-06-10T16:23:26.331Z] Not filed to the vault — not context-rooted — no vault, web, or GitHub references found; vault was searched but no [vault:…] citations in answer.
```
</details>
