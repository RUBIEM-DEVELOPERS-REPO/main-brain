---
type: progress
date: 2026-07-19
scope: daily-briefing rewrite (junk output + missing innovation attachment) + Rubiem rename
author: claude-code session
---

# Daily briefing fixed + Rubiem rename

User complaint: Friday briefing email was raw model deliberation ("We need to produce a briefing… We must not include fluff… we can cite that as [1]", cut off mid-sentence) with NO innovation-scan attachment.

## Root causes (three)
1. **Reasoning leak into the deliverable.** Free-tier reasoning models (nemotron, gpt-oss, gemini-3.5-flash) shipped chain-of-thought AS the answer. Fixed at two layers:
   - openrouter.ts REASONING_MODEL_RE now also matches gpt-oss (+ earlier gemini/nemotron/glm/grok/claude adds) → 4× token budget + `<think>` strip.
   - email.ts: new `looksLikeReasoningLeak()` (≥2 meta-deliberation telltales) + `stripReasoningPreamble()` (salvage to first heading) baked into coerceEmailBody. Schedule delivery (schedules.ts) substitutes an honest "produced internal reasoning, not sending that" note instead of emailing junk. Unit-tested: junk flagged, clean briefing passes, mixed body salvaged.
2. **Innovation scan never reached synthesis.** It was injected as a bespoke "ATTACHED —" block in the task text, but synthesis trusts evidence RUNS, not raw task text (same architecture gotcha as the finance/org bugs). Rewrote dailyBriefingRunner to gather its OWN evidence (calendar.activity for the 5-day window + latest innovation-scan) and pass it as the recognised "Attached documents (user uploaded as context…)" block → routes to the direct-synth-from-attachments path.
3. **db.query hijacked the briefing.** buildDbPlan grabbed "tasks yesterday" and ran a Neon query, silently dropping the attached scan. Fixed generally: **any task carrying an "Attached documents (user uploaded as context)" block now short-circuits the whole intercept cascade (db/memory/briefing/heuristic + LLM planner + vault fallback) straight to direct synth.** An explicit evidence block IS the plan; nothing may hijack it.

Plus: persona default. Scheduled briefing with no pinned persona defaulted to whoever was org-active (HR Manager lane-refused an entire briefing 2026-07-19; Procurement slanted another). Now defaults to executive-assistant (Evie) — a briefing is EA work.

## Verified live
Ran the exact scheduled briefing 4×. Final: clean `## Focus today / ## Open loops / ## Worth knowing / ## Innovation scout` headings (no guidance echoed into headings), no reasoning leak, real activity (job descriptions, demo prep, launch materials), direct-synth path (no db.query/research.deep). Innovation scout now faithfully summarises the latest scan.

## Rubiem rename
"RUBIEM Innovations" → "RUBIEM" in email.ts footer + Settings.tsx (2 spots). src + built dist both clean of the old name; web rebuilt.

## Follow-up (NOT a briefing bug)
The latest innovation-scan job (a11672ab) is itself a FAILED scan — it says "could not identify opportunities, vault files not retrieved". The briefing now faithfully carries that, so the scout section reads thin. The scan template's own research is what's weak (web sources = generic sign-in pages, per the same OR free-tier grounding ceiling noted before). Worth a separate look at innovationScanRunner's research quality.
