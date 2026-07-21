---
type: progress
date: 2026-07-21
scope: inbound email allowlist made dynamic (all registered users, not just 2 hardcoded env addresses)
author: claude-code session
---

# Email allowlist — root cause of "users aren't getting emails"

## Finding
NEUROWORKS_EMAIL_ALLOWED_SENDERS gates INBOUND only (who's allowed to email neuro@rubiem.com and have it act) — it has NO effect on outbound delivery (sendEmail has no allow-list at all). Checked the registered users: 8 real org users (anesu@, arthur@aiinstituteafrica.com, admin@rubiem.com, dennis@rubiem.com, godswill@, mark@, patience@, takudzwa@) — ZERO of them were on the allow-list. Only two of the operator's own personal Gmail test addresses were. Any of those 8 users emailing the bridge was silently ignored (skippedUnauthorized, no reply) — that's the "not getting emails" the user meant.

## Fix — allowlist is now dynamic, not a static .env snapshot
New `resolveAllowedSenders(envList)` in lib/email.ts: the EFFECTIVE allow-list is the env-configured addresses UNIONED with every ACTIVE registered user's email (lazy dynamic import of users.ts to avoid any load-order/circular risk). Applied at all three points that previously read env.allowedSenders directly:
- `processInboundEmail` — the actual security gate.
- `getEmailStatus()` (now async) — reports the full effective list as `allowedSenders`, keeps the raw env list as `envAllowedSenders` for comparison. Route updated to await it.
- `startEmailBridge()` startup gate — a fresh install with zero .env addresses but a real user roster (there's always a seeded admin) now still enables inbound, instead of requiring a manual .env edit per user.

Users added/removed on the Users page take effect immediately — no .env edit, no restart needed (checked live at call time). The env list stays useful for addresses that AREN'T NeuroWorks users (external contacts, personal test inboxes).

## Live verification
GET /api/email/status → allowedSenders: 10 addresses (2 env + 8 active users), envAllowedSenders: 2 (unchanged), inboundEnabled: true.

## State
tsc clean, server+workers bounced, live-verified. Committed alongside the rest of this session's work.
