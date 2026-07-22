---
type: continue-note
date: 2026-07-22
scope: delegated-path approval-gate fix — session handoff
status: CODE DONE, tsc clean, server live, NOT yet live-tested end-to-end, NOT committed
---

# CONTINUE HERE — delegated approval-gate fix

Code root: `C:\Users\Arthur Magaya\Documents\GitHub\clawbot` (NOT Digital-Force).
Server = tsx `npm start` (no watch), watchdog restarts from server/. SPA from web/dist.
Live server on 7470 already runs this fix (I restarted primary + killed worker 7473 so it respawns fresh).

## What committed already (1471c93, main, NOT pushed)
Approval gate (db.query/connector.call/email.send checkpoint in planAndExecute → park
awaiting-approval → approve replays via preplan), chat live-progress (GeneralTaskResult live),
bigger composer, split job-store fix (__dirname anchor + migrated history), innovation-scan
broaden + 0-Inbox read. All that was live-verified for the LOCAL path.

## The bug the user reported after 1471c93
"Approval gate broken + not aligning with request." Root cause found in job 60985e91
("send a welcome ... email to all human users"):
- SENSITIVE_TASK_RE MISSED that phrasing → task DELEGATED to worker 7473.
- Worker's gate fired + parked (log: "This plan includes email.send — parking for sign-off").
- But primary's delegateToPeer reported "succeeded" with runs:[] empty answer, NO approval
  surfaced, NO email → hollow silent success. delegateToPeer only treated succeeded/failed/
  rejected as terminal (awaiting-approval was not), and never forwarded approvalRequired.

## The fix (UNCOMMITTED — 3 files: agent.ts, peers.ts, chat.ts)
1. agent.ts: exported `SENSITIVE_APPROVAL_TOOLS` + new `planSensitiveTools(plan)` helper.
2. peers.ts delegateToPeer: added `awaiting-approval` to the terminal poll check + forwards
   `approvalRequired: j.result?.approvalRequired` in the returned object.
3. chat.ts:
   - imports SENSITIVE_APPROVAL_TOOLS + planSensitiveTools from agent.js.
   - Broadened SENSITIVE_TASK_RE to catch "send ... email" within 40 chars, "email all/
     everyone/each/the team/staff/all users", "welcome email" (regex harness 10/10, no false
     positives on "email marketing"/"draft an email campaign").
   - In the DELEGATED runJob closure (after persona verification, before curation): if
     `r.approvalRequired` OR (plan has sensitive tools AND none ran ok) → return an
     approvalRequired result carrying r.plan + enrichedTask + personaSuffix. runJob then parks
     the PRIMARY job; approve replays LOCALLY via preplan (primary has same primitives; outbound
     should run from audited primary). Worker's parked job is abandoned (harmless).

Two layers now: regex forces obvious sensitive tasks local (fast path), delegated handling is
the safety net for phrasings the regex misses.

## NEXT STEPS (do these)
1. LIVE-TEST end-to-end on 7470:
   - Fire chat "send a welcome email to all human users ...". Expect: now forced LOCAL (regex
     matches) → parks awaiting-approval with tools:[email.send], runs:[], NO send.
   - Also test a phrasing the regex MISSES but that plans email.send, to exercise the delegated
     safety net (needs a worker reachable — DELEGATE_ALL default spawns one). Expect primary
     re-parks, not hollow-succeed.
   - Approve → expect it replays locally → terminal (succeeded), no re-park, marker cleared.
     (Use a placeholder recipient like teststaff@example.com — placeholder guard blocks real send.)
   - curl pattern used before:
     POST /api/chat {messages:[{role:user,content:"..."}],sessionId:"..."} → poll
     GET /api/templates/jobs/:id for status/result.approvalRequired; approve via
     POST /api/templates/jobs/:id/approve.
2. If green: `git add server/src/lib/agent.ts server/src/lib/peers.ts server/src/routes/chat.ts`
   and commit (message: "fix: surface delegated sensitive-plan approvals on the primary +
   broaden sensitive-task routing"). User controls push.
3. Clean up any leftover test jobs (reject awaiting-approval test jobs so Approvals page is clean).

## Watch-outs
- delegateToBestPeer (peers.ts ~357) was NOT patched (only delegateToPeer). It's a separate
  path (pickLightestIdlePeer) — check if any sensitive flow uses it; if so apply same terminal+
  approvalRequired forwarding.
- Hermes primary path: sensitive tasks bypass Hermes (chat.ts guard) so its ungated MCP
  email.send can't fire. Confirm still holds.
- The two test email jobs to example.com from earlier are in the 07-22 job store; harmless.
