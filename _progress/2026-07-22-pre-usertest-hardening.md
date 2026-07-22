---
type: progress
date: 2026-07-22
scope: pre-user-testing hardening — routing audit, local-machine security gate, bug review, full smoke test
author: claude-code session
---

# Pre-user-testing hardening pass

Goal: clear bugs, tighten security, make agent routing accurate/hole-free before real multi-user testing.

## 1. Build baseline — clean
server tsc, web tsc, web build all clean.

## 2. Agent routing audit — 42 cases, 0 holes after 1 fix
Wrote a heuristicPlan unit harness (pure function, no LLM) covering every deterministic route + adversarial false-trigger cases. Found + fixed ONE real hole:
- "email jane@x.com saying X" (address right after "email", no "to") did NOT match EMAIL_SEND_RE → fell to the LLM planner. Added an `email <address>` alternative (requires a real @addr, so "email marketing"/"email campaign" still don't match). Re-verified live: routes to email.send.
Confirmed NO false triggers: "make a note of X" ≠ notepad, "add a section" ≠ schedule/email, "send me the report" ≠ media, "email marketing best practices" ≠ email.send, "draft an email campaign" ≠ email.send, one-off "schedule a meeting" ≠ schedule.create.

## 3. SECURITY — local-machine access gate (the big multi-user hole)
Found: fs.* / system.notepad / terminal primitives read the SERVER OPERATOR's own PC, but restrictions are OPT-IN — so by default ANY logged-in user (staff/member/admin) could chat "what's in my notepad" or "read C:\Users\...\.env" and exfiltrate the operator's local files + secrets (the Notepad tabs literally hold a github PAT + sk-ant key).
Fix — hard default gate, three layers:
- routes/chat.ts POST / : LOCAL_MACHINE_RE (notepad, my pc/downloads/desktop/documents, absolute Win/Unix paths, .env/.ssh/.aws dotfiles, terminal/shell/exec) → 403 for any human below superadmin. Token-less machine/loopback (operator automation) + superadmin pass.
- routes/chat.ts POST /team : same gate + the capability-restriction gate it was entirely missing.
- routes/primitives.ts : removed system.notepad from the MCP bridge allowlist (the bridge is requireLayer("admin"), so an ADMIN could have called it directly, bypassing the superadmin chat gate). The agent still uses it via findPrimitive — only the HTTP exfil path is closed.
Live-verified: staff → 403 on notepad/ssh-key/downloads/terminal (chat) AND 403 on the direct bridge call; superadmin + loopback → allowed; staff normal task ("capital of France") → allowed (no over-block); superadmin notepad job completes end-to-end.

## 4. Bug review — session changes
Re-checked the risky edits: cancel control-flow (nested if/else braces balance; verified job stays failed/Cancelled live), async email allowlist (status returns full effective list), db.query withTimeout (pg_sleep killed at 30s, no leak), job-store phantom-run filter + reflection last-record-wins. All correct.

## 5. Full live smoke test
- 15 major GET surfaces all 200 (health, email/status, tasks, templates, calendar, personas, users, data-sources, connectors, schedules, cost, security/events, quality, audit, chat/history).
- Email routing (new phrasing) → email.send ok. Cancel → stays failed/Cancelled.

## 6. Whole-system security scan (2nd pass, user-requested)
Mapped every route mount + gate. Secrets-tier (models/governance/data-sources/terminal/integrations/connectors/cost = superadmin; email/executor/primitives/users = admin) all correctly gated. Found + fixed these OPEN holes:
- **/api/dispatch-keys — NO gate at all.** Mints external machine-dispatch API keys that are origin-guard-EXEMPT (/api/v1/dispatch). A staff user could mint a key and dispatch tasks bypassing UI auth. → superadmin.
- **/api/schedules POST/PATCH/DELETE — NO gate.** A scheduled task runs LATER as machine context, bypassing the per-request local-machine gate — so a staff user could schedule "read C:\...\.env and email it to me" as an exfil bypass. → mutations require admin; local-machine task text requires superadmin (checked on inputs.task/query/prompt/topic).
- **/api/personas POST/PATCH/DELETE/activate/deactivate/refresh — NO gate.** Creating a persona injects an org-wide system prompt (integrity); activate changes global state. → admin.
- **/api/reflection/run — NO gate.** Expensive LLM trigger (cost/DoS). → admin.
- **/api/skill-forge — NO gate.** Writes org-wide agent skill playbooks (prompt-injection). Filename was already path-safe. → admin.
- **/api/tasks/plan — NO local-machine gate.** A drafted plan runs on approval. → local-machine → superadmin.
Centralized the local-machine detector into task-restrictions.ts (`isLocalMachineTask`) so chat/team/plan/schedules share ONE definition. Verified live: staff → 403 on all six; superadmin/admin pass; normal tasks unaffected.

Also confirmed no secret leakage in responses: data-sources redactConnection, integrations toPublic returns field NAMES only, api-keys listApiKeys redacts, login token is the caller's own. Infra is defensive: global Express error middleware + unhandledRejection/uncaughtException guards (a bad handler hangs one request, never crashes the fleet).

## State
All green. server tsc clean, workers bounced, all gates + routing verified live, throwaway test users deleted. Two commits: 028a4c4 (db/multiperspective/session gates) + this security pass.
