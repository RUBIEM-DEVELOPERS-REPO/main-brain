---
type: progress
date: 2026-07-21
scope: email bridge verification + fixed agent misrouting explicit sends to web search
author: claude-code session
---

# Email bridge — working; routing bug fixed

## Finding: the BRIDGE works, the AGENT ROUTING was broken
User asked to verify the email bridge (ref the earlier send-images task that hit a Mailjet 502). Tested in layers:
- /api/email/status → configured:true, running:true, outbound=mailjet, from=arthur@rubiem.com, inbound=imap polling (lastError:null).
- POST /api/email/test → ok:true (real send landed). Bridge outbound is HEALTHY.
- BUT: an explicit agent task "Send an email to arthurmagaya2@gmail.com with subject X and body Y" routed to **research.deep** (web search) and returned the {to,subject,body} as JSON — NO mail sent. Plan summary was literally "Default research plan for: Send an email to...".

## Root cause (same class as the github/finance/notepad bugs)
email.send had only an LLM-planner HINT (emailContext), no deterministic route. When the planner times out it falls to defaultVaultPlan → research.deep, and the hint never applies. An explicit, self-contained send is exactly the case that should never depend on the LLM.

## Fix
- New `EMAIL_SEND_RE` + `parseSelfContainedEmail(t)` (agent.ts): extracts recipient @address + subject (quoted or derived) + body (quoted / after body|message|saying|that says). Returns null when the body isn't literally present.
- Deterministic heuristicPlan branch: when EMAIL_SEND_RE matches AND the recipient + body are literally present → single email.send step. Evidence-needing sends ("email me a summary of X" — no literal body) return null and stay on the LLM path with the emailContext hint (unchanged).
- Direct-answer + llmTriage vetoes on EMAIL_SEND_RE (a send is always a tool task, never a chat reply).
- Live-verified: the exact failing task now → plan "Send an email to arthurmagaya2@gmail.com", email.send ok=true, honest success synth. (Two verification emails delivered.)

## Notes
- The Mailjet transient-5xx retry (added earlier this session) is intact — a one-off 502 no longer fails an otherwise-correct send.
- Inbound (IMAP poll of neuro@rubiem.com, allowed senders arthurmagaya2@ / arthurmagaya29@) is configured + polling; processed:0 so far (no inbound test message sent). Couldn't exercise inbound without a real email into the mailbox.
- Self-ref "email me" (no @address) still resolves the operator's address via the LLM path + users.lookup — untouched.

## State
tsc clean, server+workers bounced, outbound + agent-routing live-verified. NOT committed.
