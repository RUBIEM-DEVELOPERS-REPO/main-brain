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

## State
All green. tsc clean x2, web rebuilt, workers bounced, throwaway test user deleted. Committing as the user-test-ready build.
