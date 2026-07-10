---
date: 2026-06-04
tags: [progress, clawbot, mailjet, mcp, dns, deliverability]
session: "mailjet MCP eval + From switch to arthur@rubiem + DNS diagnosis"
---

# Progress — 2026-06-04 (session 2)

Continuation of [[2026-06-04-progress-anchor-topic-fix-mailjet-mcp]]. Restart happened; the mailjet MCP tools are live in Claude Code (117 GET tools registered).

## Where we left off
DNS records still need to be published at the registrar (aserv.co.za) to fix domain auth. Outbound now *works* (sends accepted) using `arthur@rubiem.com`, but inbox placement still depends on DKIM/SPF landing. Clawbot dev stack restarted and verified.

## What shipped this session

### 1. Mailjet MCP — Stage 1 evaluation PASSED
Ran the "try after restart" probes via MCP. Tool surface works end-to-end. Account findings:
- **Contact lists:** 1 — `MyFirstTest` (1 subscriber). Note: cannot `Sort=SubscriberCount` (400 — invalid sort field); sort on other fields only.
- **Senders:** 2 — `arthur@rubiem.com` **Active**, `clawbot@rubiem.com` **Inactive** (unverified).
- **DNS:** `rubiem.com` → SPF **Error**, DKIM **Error** (records exist in Mailjet, fail validation).
- **Bounce stats / send stats:** 0 (account essentially empty — no real sending yet).

**Verdict:** MCP is functional, but the account has ~no data so **Stage 2 (wiring MCP into clawbot's agent) is deferred** — no campaign/list/bounce data to justify it yet. Revisit once real list+campaign activity exists. The real blocker is DNS, not tooling.

### 2. From switch → arthur@rubiem.com
`clawbot/.env` line 35: `CLAWBOT_EMAIL_FROM` changed `clawbot@rubiem.com` (Inactive → sends rejected) → `arthur@rubiem.com` (Active).
- **Verified at provider:** direct v3.1 send test returned `Status: success`, MessageID `288230413780805318`, From `arthur@rubiem.com` → `arthurmagaya2@gmail.com`. (Old From would have bounced `sender_unverified`.)
- Restarted clawbot dev stack (killed pnpm dev tree, relaunched). `/api/email/status` now reports `from: arthur@rubiem.com`, transport `mailjet`, inbound armed (allow-list: arthurmagaya2@gmail.com).
- ⚠️ "Accepted" ≠ "inbox" — without domain DKIM/SPF, Gmail will likely still spam-folder. DNS fix below is the real unlock.

## DNS diagnosis (the real blocker) — records to publish at aserv.co.za
Nameservers: ns.dns1.co.za / ns.dns2.co.za (domain managed via aserv.co.za). Published vs needed:

| Record | Host | Action |
|---|---|---|
| SPF | `@` | EDIT existing → `v=spf1 +mx +a +ip4:154.0.174.37 include:spf.mailjet.com ~all` (only one SPF allowed; current lacks the mailjet include) |
| DKIM | `mailjet._domainkey` | ADD TXT `k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqQ+yBerEle/01NmkEQC0DT6WGIzVOnYI5KLQcn1Ub7lqN1gOEfasfPoIbOhWLLnyQLsyt+auD/d06zuYADWGWaJIqDLn6DEx4tL4gT9woNMnGFEYyzjysUVn1ruBsv81+nKd9wBkCTi/SWO4OZKTE13/c9Mper4Afp3dNP2AYxheLB/EV17d3RoBjzBe4wT2pHHA3DKf3TcPpIixZ+N8h5ija8vtisxAKwIwbe/jFhqbRnSw7xiHF9wKTgkp5v6dDrGGrq5IQcknk/ffBPrTGWymaxQOm58+0MhIrH6JoXB8n8/gIVdXX3p/wvWMAw/pkOhny1/PwyJ+szUGAv/FPwIDAQAB` (split into 255-char chunks if panel rejects) |
| Ownership | `mailjet._dccb2714` | ADD TXT `dccb27148655d28d7219c4da616588dc` |
| DMARC | `_dmarc` | ADD TXT `v=DMARC1; p=none; rua=mailto:dmarc@rubiem.com` — and DELETE the misplaced `v=DMARC1; p=none;` currently on root `@` |

After publishing: re-check in Mailjet dashboard (Sender domains → Check now — MCP loaded only GET tools, no check-trigger), then re-poll `get_v3_dns` via MCP to confirm SPF/DKIM flip to OK, and re-check the `clawbot@rubiem.com` sender if it's to be revived.

## Files touched
- `clawbot/.env` — line 35 `CLAWBOT_EMAIL_FROM=arthur@rubiem.com`
- (no code changes; throwaway `_mjtest.mjs` written + removed)

## Open threads
1. **DNS records** (above) — on user's side at aserv.co.za. The one true unlock for inbox deliverability.
2. **Stage 2 MCP→clawbot wiring** — deferred until account has real data.
3. `clawbot@rubiem.com` sender — left Inactive; not needed while From=arthur.
