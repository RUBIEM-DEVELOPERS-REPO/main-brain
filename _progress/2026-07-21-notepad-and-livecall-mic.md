---
type: progress
date: 2026-07-21
scope: read Windows Notepad (incl. unsaved tabs) + live-call mic hardening + confirmed PC access
author: claude-code session
---

# Notepad reader + live-call mic + PC-access confirmation

## 1. "What's in my notepad" mis-routed to a filename search
Reported: agent searched fs.find_in for a file literally named "whats in my notepad" → zero matches, then asked the user for the file path. The PC access was fine; the INTERPRETATION was wrong — "notepad" is the Windows app, not a file.
- Windows 11 Notepad autosaves every tab (incl. UNSAVED) to `%LOCALAPPDATA%\Packages\Microsoft.WindowsNotepad_8wekyb3d8bbwe\LocalState\TabState\*.bin`. Format: "NP" binary header + tab text as UTF-16LE, undocumented + version-drifting, multiple tabs interleaved per file.
- New `lib/notepad.ts` — reads the store with a UTF-16LE "strings" scan (runs of (printable-ASCII, 0x00) pairs at any offset). Alignment-free, robust to the per-tab headers. Tried naive full-decode (misaligned → CJK garbage) and fixed-offset (odd-offset tabs broke) before landing on the strings scan. Verified live against real tabs (contact lists, org charts, bank details, credentials).
- New primitive `system.notepad` (readonly, Windows-only, graceful available:false elsewhere) + MCP allowlist entry.
- Routing: NOTEPAD_RE (`\bnote\s?pad\b`) → deterministic heuristicPlan branch to system.notepad (beats the generic read/summarise shapes that had funneled it to fs.find_in) + direct-answer/llmTriage vetoes.
- Live-verified: "What's in my notepad? Summarize my notepad notes" → system.notepad → real per-tab summary of nine tabs.

## SECURITY — flagged to user
The Notepad tabs contain LIVE SECRETS in plaintext: a GitHub PAT (github_pat_11BAP6...) and an Anthropic API key (sk-ant-api03-OI09Z6...), plus bank account details. The new primitive can read these on explicit operator request (loopback-only, single-user — legitimate). But those specific credentials are now sitting in an app store any local process can read → the user should ROTATE the GitHub PAT and the sk-ant key, and move secrets out of Notepad.

## 2. Live-call mic "not reading/inputting"
The 2026-07-20 server-VAD fix was correct (model is GA gpt-realtime; audio.input.turn_detection is right). Remaining likely causes were client-side and unguarded:
- Secure-context gate: getUserMedia is BLOCKED on an insecure origin. If the app is opened over http via a LAN IP/hostname (not 127.0.0.1 / localhost) the mic silently yields nothing and the call "connects but hears nothing" — the #1 real cause. Now throws a NAMED error telling the user to open http://127.0.0.1:7470.
- Mic-track validation: error out if getUserMedia returns no live audio track (ended/empty) instead of connecting to a silent call; specific messages for NotAllowed/NotFound/NotReadable.
- Remote audio element attached to the DOM (a detached new Audio() can be autoplay-blocked → reads as "silent call", easily mistaken for a mic problem).
- Surfaces the live mic device name in the transcript ("Listening on <device>") so a wrong-default-device is visible.
NOTE: WebRTC mic can't be verified headless — needs an in-browser test. If the user is on a LAN IP over http, the new guard now names the exact fix.

## 3. PC access — confirmed working
fs.find_in / fs.read_external / fs.list_external resolve real user folders (Downloads/Desktop/Documents/Music/Pictures/Videos/vault, home). Agents CAN access the PC; the notepad report was a routing bug, not an access gap.

## State
server + web tsc clean, web rebuilt, server+workers bounced. Notepad live-verified. Mic hardening shipped (needs browser test). NOT committed.
