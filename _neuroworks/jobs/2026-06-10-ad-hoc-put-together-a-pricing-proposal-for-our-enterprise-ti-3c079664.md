---
type: job
title: Ad-hoc: Put together a pricing proposal for our enterprise tier at 3
slug: ad-hoc-put-together-a-pricing-proposal-for-our-enterprise-ti-3c079664
created: 2026-06-10T18:16:42.273Z
jobId: 3c079664-fb53-4c0a-a4c5-1f17b835193a
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T18:11:38.168Z
finishedAt: 2026-06-10T18:16:42.272Z
---

# Ad-hoc: Put together a pricing proposal for our enterprise tier at 3

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T18:11:38.168Z
- **Finished:** 2026-06-10T18:16:42.272Z
- **Title:** Ad-hoc: Put together a pricing proposal for our enterprise tier at 3

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nPut together a pricing proposal for our enterprise tier at 3 seat bands.",
  "userText": "Put together a pricing proposal for our enterprise tier at 3 seat bands.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "answer",
  "personaId": "clawbot"
}
```

## Plan
Find context for "pricing proposal for our enterprise tier at 3 seat bands." then draft it

### Steps
1. ✓ Searching your second brain for "pricing proposal for our enterprise tier at 3 seat bands." — `vault.search` (19.0s)
    > ground the draft in any prior context in the user's second brain — avoid fabricating meaning for unfamiliar terms
2. ✓ Looking in your Downloads, Desktop, Documents, and vault Inbox for "pricing proposal for our enterprise tier at 3 seat bands." — `fs.find_in` (0.6s)
    > check the user's PC (Downloads + Desktop + Documents + Inbox) for prior versions of this doc — runs in parallel with the vault search
3. ✓ Quality-checking the draft — `quality.check` (7.5s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
4. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
# Pricing proposal — NeuroWorks Enterprise Tier · 2026‑06‑10

## What you told us you need
- **Enterprise‑level support** for a small team (3 seat bands)
- **Scalable, secure deployment** on the customer’s local machine
- **Custom feature set** tailored to the organization’s workflow

## Three ways forward

### Option A — Core Enterprise · $3,000 / month
**Right for:** Small teams that need a stable, fully‑supported platform with essential enterprise features.

**Included**
- Deployment on the customer’s local machine (loopback 127.0.0.1)
- 24/7 on‑call support via email and chat
- Quarterly security and compliance reviews
- Access to core AI‑workforce personas (chat, task runner, email bridge)

**Not included**
- Custom persona development
- Advanced analytics dashboards
- Dedicated account manager

**Success in 90 days looks like**
- Platform running with zero critical incidents
- 95 % uptime for all core services
- User adoption rate ≥ 80 % across the 3 seat bands

### Option B — Advanced Enterprise · $5,000 / month
**Right for:** Teams that require additional customization and proactive monitoring.

**Included**
- All features of Option A
- Custom persona creation and integration
- Real‑time analytics dashboards
- Dedicated account manager

**Not included**
- On‑premise hardware procurement
- External data source integrations beyond the platform

**Success in 90 days looks like**
- 100 % adoption of custom personas
- 99 % uptime
- Monthly performance reports delivered to stakeholders

### Option C — Premium Enterprise · $8,000 / month
**Right for:** Organizations that need full control, advanced security, and priority service.

**Included**
- All features of Option B
- Dedicated security officer review
- Priority incident response (within 1 hour)
- SLA of 99.99 % uptime

**Not included**
- Physical infrastructure maintenance
- Third‑party integration beyond the platform’s API

**Success in 90 days looks like**
- Zero critical incidents
- 99.99 % uptime
- Executive dashboard with real‑time metrics

## Our recommendation
> **Option B – Advanced Enterprise** balances cost and capability for a 3‑seat band, providing the necessary customization and support while keeping the investment reasonable.

## Terms
- Payment: Monthly in advance
- Term: 12 months
- Cancellation: 30 days written notice
- Renewal: Auto‑renew, opt‑in

## Next step
- Schedule a kickoff call to finalize scope and pricing details
- Decision needed by: 2026‑07‑15
- Point of contact your side: <Name>

---

*I could not locate an existing pricing proposal in the vault or file system. The above is a draft based on typical enterprise tiers. Please confirm the desired features, pricing constraints, and any additional requirements so I can refine this proposal.*

<details><summary>Log</summary>

```
[2026-06-10T18:11:38.168Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T18:11:38.185Z] Loaded the **pricing-proposal** skill playbook for this task.
[2026-06-10T18:11:38.186Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:14:40.295Z] Hermes responded in 182.1s (3256 chars).
[2026-06-10T18:14:51.249Z] Quality gate: Hermes answer didn't pass clawbot's quality.check (score 0.71) — offloading to clawbot.
[2026-06-10T18:14:51.249Z] Working as Neuro — AI agent operator.
[2026-06-10T18:15:41.606Z] Recognised the shape — Tier 2 — your second brain, 2 steps.
[2026-06-10T18:15:41.606Z] Plan ready: 2 steps — Find context for "pricing proposal for our enterprise tier at 3 seat bands." then draft it.
[2026-06-10T18:15:41.613Z] Running with help from 2 peer workers (capacity 7 thinking + 8 I/O sub-agents).
[2026-06-10T18:15:41.613Z] Running 2 sub-agents in parallel (2 I/O + 0 thinking).
[2026-06-10T18:15:41.613Z] Step 1 of 2: Searching your second brain for "pricing proposal for our enterprise tier at 3 seat bands."
[2026-06-10T18:16:00.573Z] Step 2 of 2: Looking in your Downloads, Desktop, Documents, and vault Inbox for "pricing proposal for our enterprise tier at 3 seat bands."
[2026-06-10T18:16:01.181Z] Wave 1 finished in 19.6s.
[2026-06-10T18:16:01.181Z] All sub-agents finished in 19.6s.
[2026-06-10T18:16:01.200Z] Thinking with openai/gpt-oss-20b:free (~4 567 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-10T18:16:34.745Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-10T18:16:34.752Z] Running with help from 2 peer workers (capacity 7 thinking + 8 I/O sub-agents).
[2026-06-10T18:16:34.752Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-10T18:16:34.752Z] Step 4 of 4: Security-scanning the note
[2026-06-10T18:16:34.753Z] Step 3 of 4: Quality-checking the draft
[2026-06-10T18:16:42.257Z] Wave 1 finished in 7.5s.
[2026-06-10T18:16:42.257Z] All sub-agents finished in 7.5s.
[2026-06-10T18:16:42.257Z] Quality check passed (86%) and security is clean — peer review skipped (saves 30-90s).
[2026-06-10T18:16:42.269Z] Saved this workflow as a reusable template: custom-you-are-operating-as-neuro-the-ai-agent-operator-bias-tool-c.
[2026-06-10T18:16:42.269Z] Self-curating — no peer reachable, so I'm acting as both worker and editor for this one.
[2026-06-10T18:16:42.272Z] Filed to your second brain → 0-Inbox/202606101816-curated-put-together-a-pricing-proposal-for-our-enterprise-tier-at-3.md.
```
</details>
