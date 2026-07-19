---
type: progress
date: 2026-07-19
scope: per-user task/calendar visibility + ad-creative downloadable fix + delegated-job attribution
author: claude-code session
---

# Per-user slices everywhere + ad tasks produce downloadables

## 1. Last-two-task failures fixed (ad creative)
Both recent ad tasks ("Make a short social ad…", "make a 10/10 ad about neuroworks and give me the downloadable") direct-synthed a TEXT plan, produced no downloadable, and falsely claimed media tools were "awaiting API configuration" while image gen was live.
- New `AD_CREATIVE_RE` in agent.ts (+ direct-answer/llmTriage vetoes) → deterministic plan: media.image generates the visual.
- Media short-circuit extended: ad-shaped tasks get LLM-drafted ad copy (headline/body/CTA) THEN the deterministic image + download block appended — download link survives whatever the LLM writes, and it can't claim "not configured" (asset already on disk).
- Live-verified: copy + real 1.3 MB PNG + working ?download=1 (200, attachment header).

## 2. Chat / Tasks / Calendar leak closed
Only /api/templates/jobs filtered (staff layer); /api/tasks/jobs, /api/tasks/waiting, /api/tasks/jobs/:id (+ stream), /api/calendar/activity, /api/calendar/agenda leaked ALL users' work to every signed-in user.
- New `lib/job-visibility.ts` — single shared `filterJobsForCaller` / `canSeeJob` (moved out of templates.ts). Applied on all six surfaces. Staff detail fetch of another's job → 404 (existence not confirmed).
- Policy unchanged: machine callers (token-less loopback) + admin/superadmin see all; staff see own jobs + own-department persona work only.
- Chat history was already scoped by session user (server + per-user localStorage) — re-verified live.

## 3. Database/journal alignment (job ownership)
Delegated worker jobs persisted with NO createdByEmail and NO persona → invisible to their owner under the new slice, unattributable in the journal.
- delegateToPeer now forwards `createdByEmail`; /api/peers/delegate stamps it + the RESOLVED persona name on the worker's job before it persists.
- tasks.ts human-input continuation inherits original job's owner; /api/tasks/plan stamps caller.
- Calendar reads `rec.persona` (the actual persisted field — previously read a nonexistent `personaName` off disk records, so persisted rows had no persona in the calendar).

## Live verification (throwaway staff user, deleted after)
- Staff feeds: 0 of the 412 org jobs visible; machine + superadmin: all 412.
- Staff-initiated chat task → parent AND delegated worker job both carry owner leaktest@ + persona Milo; visible in staff tasks/reports/calendar (2 records), chat history 1 entry.
- Staff fetch of another user's job id → 404.

## State
tsc clean. Server + workers bounced (watchdog). NOT committed yet.
