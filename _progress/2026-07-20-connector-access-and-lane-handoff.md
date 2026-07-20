---
type: progress
date: 2026-07-20
scope: fixed false "connector not set up" claims + real persona auto-handoff on scope mismatch
author: claude-code session
---

# Connector access root causes + auto-handoff

## Investigation
User reported an agent claiming "the Aiia Finance connector is not yet set up" while fabricating benchmark figures. Found TWO independent, unrelated bugs behind it.

## Bug 1 — attachments zeroed out ALL tool calls, even under the correct persona
Job 351661dc (persona: Aria, Aiia Finance Officer — CORRECT persona) ran with an attached document (a go-to-market plan draft) and the task's "Attached documents" block short-circuits the ENTIRE plan cascade straight to zero-tool direct-synth (a 2026-07-19 fix for the daily-briefing reasoning-leak bug). That's right for pure summarization, but wrong when the task ALSO asks for live figures — the synth model, with zero tool evidence, hallucinated "connector not set up" even though 3 connectors are registered and reachable.
- Fix: new `financeWithAttachments` deterministic plan in agent.ts — when attachments are present AND FINANCE_READOUT_RE matches (broadened to catch "cash flow"/"expense baselines"/"historical financial"/"live financial data"), run 2 connector.call steps (budgets, receipts) BEFORE synth.
- If those calls fail (e.g. FinanceFlow's 24h session cookie expired), a new synth branch states the REAL error plainly ("connector needs re-auth, not 'not set up'") and completes the rest of the deliverable from the attachment without inventing numbers.

## Bug 2 — wrong persona auto-picked, refused instead of handing off
Separately, a task landed on "Nova" (custom Innovation Research Analyst persona — not a finance role) via whatever was left active in the dashboard. The pre-execution lane gate (`checkLaneFit` in lib/lane.ts) has a fast heuristic table covering only the original 17 built-in personas — Nova (a custom persona) fell straight to the LLM classifier, which incorrectly let the finance task through. The task ran to completion (vault.search + 3 real connector.call — evidence it COULD reach the connector), and only the FINAL synth step refused ("outside my lane as Innovation Research Analyst... hire Aria or Fiona") — burning a full run before telling the human to manually switch personas and resend.
- Fix 1: new `AIIA_LIVE_FINANCE_SIGNAL` heuristic checked for EVERY persona (not just the 17-entry table) before the per-persona rules — catches "finance connector"/"FinanceFlow"/"live cash flow"/"historical expense baselines" phrasing regardless of which persona (built-in or customer-created) is active.
- Fix 2 (the actual ask — "must be handed to an agent that can do that task"): chat.ts's lane gate no longer just returns a refusal message. It resolves the gate's suggested hire ("Aria (Aiia Finance Officer)") to the real registered persona via new `resolveHireToPersona()` and REASSIGNS the task to them automatically — same request, same job, correct employee, zero human action required. Falls back to the old "please switch and resend" refusal only when no hire can be resolved.
- Fix 3: ROSTER_BLURB in lane.ts was stale (16 of ~34 personas) — the LLM lane-check's own hire suggestions could never name Aria, the media producers, HR, procurement, compliance, etc. Synced to the full roster.

## Live verification
- Activated Nova, submitted the exact reported task shape → response showed `laneHandoff: {fromPersona: "Nova", toPersona: "Aria", reason: "..."}`, job ran AS Aria, 3 real connector.call attempts (all executed — none silently skipped), vault.search, and a final answer that: (a) correctly identifies the forward-looking GTM-plan-DESIGN slice as Fiona's lane (accurate, not a bug), (b) honestly reports the connector's real HTTP 401 instead of inventing figures, (c) never claims "not set up".
- Confirmed via direct connector.call test that FinanceFlow's session cookie IS currently expired (documented 24h-expiry, no refresh mechanism — pre-existing known limitation, not something I can silently fix without the human re-running the login exchange on the Connectors page).

## State
tsc clean, server+workers bounced, both bugs live-verified end to end. NOT committed. Dashboard's persisted active persona was left as Nova (untouched) — the handoff is per-request only, doesn't overwrite the operator's dashboard selection.

## Follow-up investigated, not implemented: local speculative decoding
User asked about local speculative decoding via Ollama (IQ4_NL quant, 8-14B models) to cut cloud-routing cost. Checked live: Ollama 0.31.1's CLI/API has no draft-model / speculative-decoding flag at all (not exposed at this version) — nothing to wire up. Hardware also rules it out independently: no discrete GPU (AMD iGPU only), ~15GB total RAM, and only 8.7GB free disk (an 8B Q4 model alone is ~4.5-5GB; a 14B is 8-9GB — wouldn't fit alongside a draft model). Reported as infeasible on current infra rather than attempting a half-working implementation.
