---
date: 2026-06-04
tags: [progress, clawbot, neuroworks, mcp, mailjet]
session: "anchor-topic fix + mailjet MCP stage 1"
---

# Progress — 2026-06-04

## Where we left off
About to restart Claude Code so the new **mailjet MCP server** entry in `~/.claude.json` is picked up. After restart, evaluate the tool surface with a couple of prompts (see "Try after restart" below), then decide whether to do Stage 2 (wire MCP into clawbot's agent).

## What shipped this session

### 1. Agent context-following fix (server-side)
**Symptom:** "look through my downloads and summarize what you see about a AIIA / AIIA and what they do" returned "no AIIA files exist" — despite Downloads containing `AIIA Reference Letter.pdf`, `AIIA-The-Future-of-Learning.pptx`, `AIIA_API_Connectivity_Tunnel.zip`, etc.

**Root cause:** when the LLM planner times out, `defaultVaultPlan` fallback ran with needle `"look through and what you see about aiia AIIA and what they do"` — every token must appear in the filename for `fs.find_in` to match → 0 hits → synth fabricated the "no files" answer.

**Fix:** added `extractAnchorTopic()` helper in `server/src/lib/agent.ts` (just above `defaultVaultPlan`). Priority ladder when building the needle:
1. Quoted phrase — `"Q4 board update"` → `Q4 board update`
2. `"about / regarding / concerning X"` — stops at conjunctions/punctuation
3. `"called / named / titled X"` (lazy match)
4. ALL-CAPS acronyms (2-6 chars, dedupe, skip generic ones)

**Verified:** re-ran the original failing task. needle `"AIIA"` → 10 matches → real summary of Artificial Intelligence Institute Africa with full board roster + contact info from the actual PDF.

### 2. AirLLM integration — deferred
User raised `pip install airllm` (huge models on tiny GPUs via layer-by-layer inference). Set aside for later. Saved as memory `project_airllm_deferred.md`. Revisit for private heavy-synth use cases; don't relitigate the latency tradeoff when it comes back up.

### 3. Mailjet MCP — Stage 1 complete
Cloned `mailgun/mailjet-mcp-server` to `C:\Users\Arthur Magaya\Documents\GitHub\mailjet-mcp-server\`.

- Deps installed (`pnpm install` clean): `@modelcontextprotocol/sdk`, `js-yaml`, `zod`
- Composite credential `key:secret` written to `mailjet-mcp-server/.env.local` (gitignored). **Never written into `.claude.json`.**
- Registered in `~/.claude.json` → `mcpServers.mailjet`:
  ```json
  "mailjet": {
    "args": [
      "--env-file=c:\\Users\\Arthur Magaya\\Documents\\GitHub\\mailjet-mcp-server\\.env.local",
      "c:\\Users\\Arthur Magaya\\Documents\\GitHub\\mailjet-mcp-server\\src\\mailjet-mcp.js"
    ],
    "command": "node",
    "type": "stdio"
  }
  ```
  Uses Node's `--env-file` so the credential stays in `.env.local`, not in user config.
- Boot-verified outside Claude Code: returns `serverInfo: { name: "mailjet", version: "1.0.0" }` and **117 tools** over stdio.

**Tool surface (auto-generated from Mailjet v3 OpenAPI):** contacts, contact lists, segments, campaigns, drafts, templates, newsletters, statistics (open/click/bounce/geo/domain), API keys, senders, DNS, parse routes, workflows, A/X tests, batch jobs, widgets. ~150 ops total in YAML, 117 currently registered.

Complements (does NOT replace) the existing `email.send` primitive that uses Mailjet v3.1 send via HTTPS.

## Try after restart
- "List my Mailjet contact lists, biggest first"
- "Show me bounce stats for the last 7 days"
- "Who's on my sender list and which domains are DNS-verified?"
- "How many emails were sent yesterday and what was the open rate?"

## Stage 2 decision (after evaluation)
**If useful** → build clawbot MCP client subsystem (~300-500 LoC):
1. Add `@modelcontextprotocol/sdk` (client) to clawbot/server
2. MCP client lifecycle manager: spawn mailjet-mcp-server child, hold stdio transport, handle crash/restart
3. On clawbot boot: call `tools/list`, register each as a primitive (`mcp.mailjet.<op>`) with proxy handler
4. Planner nudge: "list my contacts" / "show bounce rates" → route to the right MCP tool

**If not useful** → leave as Claude Code-only tool. Standing `email.send` primitive keeps handling outbound from clawbot's agent runtime.

## Files touched
- `server/src/lib/agent.ts` — added `extractAnchorTopic()` helper, wired it into the local-FS branch of `defaultVaultPlan`
- `~/.claude.json` — added `mcpServers.mailjet` entry
- `Documents/GitHub/mailjet-mcp-server/.env.local` — composite Mailjet credential (gitignored)

## Open thread — Mailjet DNS for outbound deliverability
Still on user's side (from previous session, unchanged):
- SPF on `rubiem.com` needs `include:spf.mailjet.com`
- DKIM at `mailjet._domainkey.rubiem.com` missing
- DMARC at `_dmarc.rubiem.com` missing

Until those land, outbound mail to free-email providers (Gmail etc.) will go to spam or get dropped. The new MCP server doesn't change this — it's the same domain auth issue.
