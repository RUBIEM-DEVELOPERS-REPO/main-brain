---
type: progress
date: 2026-07-22
scope: chat progress display, sensitive-action approval gate, larger input, empty-activity-log root cause, innovation-scan broadening + inbox reading
author: claude-code session
---

# Chat progress + approval gate + activity-log split fix

Six asks in one message. All done, key paths live-verified on the running prod server (7470).

## 1. Chat shows agent progress live again
Data flowed fine (planAndExecute → onProgress patches plan/runs/phase → SSE → InlineJob),
but `ResultPanel`'s running branch short-circuited to a generic "Agent is thinking" +
TraceView. `GeneralTaskResult` already handles the `running` phase with the full live step
tracker but was only reached on success. Fix at the shared component: running/pending
general-task + custom jobs (with a plan) now render `<GeneralTaskResult job live />`, so the
step-by-step tracker shows in the chat bubble AND on Tasks/Results.

## 2. Approval gate: db.query / connector.call / email.send
Pre-execution checkpoint inside `planAndExecute` (agent.ts) — one tool-level gate catches all
three regardless of how routing built the plan. A fresh plan containing a `SENSITIVE_APPROVAL_TOOLS`
step returns `approvalRequired` instead of executing; `runJob` parks the job in
awaiting-approval carrying plan/task/personaSuffix; the existing approve endpoint replays via
`preplan` (which never reaches the checkpoint) so the approved run is exactly what was reviewed.
- chat.ts: `SENSITIVE_TASK_RE` forces sensitive-likely tasks to run LOCAL (not delegated) so
  approval lands on the primary, and bypasses Hermes (its MCP email.send isn't gated).
- Chat.tsx InlineJob: approve link shows on any awaiting-approval status (not gated on the
  initial requiresApproval prop, which is false for chat jobs that park themselves).
- BUG I introduced + fixed: on approve-replay the fresh result has no approvalRequired, but the
  stale marker survived the object-spread merge in runJob → the approved run RE-PARKED (infinite
  loop). Fixed by reading the flag off the fresh return value, not merged j.result, and clearing
  the stale marker.
- Live-verified: fire "send an email to …" → running → awaiting-approval (tools:[email.send],
  nothing sent) → approve → succeeded, no re-park, marker cleared.

## 3. Larger chat input
Chat.tsx textarea rows 1→3, min-h-[84px] max-h-64, resize-y, leading-relaxed.

## 4. Empty activity log for 2026-07-21 — ROOT CAUSE (split job store)
`job-store.ts` `JOBS_DIR` used `process.cwd()/.neuroworks/jobs` while EVERY other config module
uses `resolve(__dirname, "../../../.neuroworks")` (stable repo-root). cwd drifts with launch
(watchdog `npm start` from server/; `pnpm dev` from server/; other paths from repo-root), so job
records split across `.neuroworks/jobs` and `server/.neuroworks/jobs`. A consumer running from the
other cwd read a near-empty dir → "activity log for yesterday entirely empty" though 42 jobs ran.
- Fix: anchor `JOBS_DIR` (and context-offload STATE_ROOT, same bug) to `__dirname` repo-root.
- Migrated the full history (05-19 → 07-22, 62 files) from server/.neuroworks/jobs into repo-root.
- Live-verified: calendar.activity 07-21 → 39 distinct jobs (was empty).

## 5 + 6. Innovation scan: broaden queries + read inbox files
The scan web-searched the literal private product name → zero results, and noted "data likely in
0-Inbox files" it never read. Rewrote `innovationScanRunner`:
- SEARCH GENERICALLY — explicit "do NOT search our product/component names"; search capability
  topics with broad industry terms; if a lane returns nothing, broaden (drop qualifiers/synonyms/
  widen window) before ever reporting "zero results".
- New `gatherRecentInboxNotes()` reads recent 0-Inbox .md/.txt (last 10 days, mtime, capped),
  folded in as an "Attached documents … PRIMARY evidence" block — same proven pattern as
  dailyBriefingRunner. Verified D:/Main brain/0-Inbox resolves with notes in the 07-12→07-22 window.

## State
server tsc clean, web tsc + build clean, prod server bounced twice and healthy on 7470, all live
checks green. NOT committed (user controls commits). Bounce note: watchdog runs `npm start` from
server/ (tsx, no watch) — restart needed to load server changes; SPA from web/dist (rebuilt).
Two test jobs (email→example.com) left in the 07-22 job store; harmless.
