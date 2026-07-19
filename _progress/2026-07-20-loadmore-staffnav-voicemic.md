---
type: progress
date: 2026-07-20
scope: load-more pagination + staff Library removal + live-call mic fix
author: claude-code session
---

# Load-more lists, staff nav trim, live-call mic

## 1. Load-more (cap 10) across long lists
New shared `web/src/components/LoadMore.tsx` — `useLoadMore(items)` hook (10/page, auto-resets when the list shrinks e.g. filter change) + `LoadMoreButton` ("Load 10 more … (N remaining)"). Applied to:
- Tasks page task list
- Reports (ResultsIndex — also the My Work Reports tab)
- My Work "My prompts & results"
- Activity, Daily Reports, Approvals, Audit Log
Dashboard deliberately untouched.

## 2. Library hidden from staff
Layout.tsx nav gating: `nav.library = layer === "staff" ? [] : libraryNav` — staff no longer see Knowledge/Templates/Skills/Employees/Workforce/Departments/Knowledge Packs group (nav-level; matches existing watch/monitor/system gating pattern).

## 3. Live-call mic fix (voice call only worked with text)
Root cause: realtime session minted with `audio: { output: { voice } }` ONLY — no `input.turn_detection`, so the session had no voice-activity detection: mic audio streamed but the model never auto-responded; only data-channel `response.create` (the typed-prompt path) triggered replies.
- lib/voice.ts mintRealtimeSession: explicit `audio.input.turn_detection: server_vad` (threshold .5, 300ms prefix, 600ms silence) + `input.transcription: gpt-4o-mini-transcribe`.
- VoiceDiscussion.tsx: dc.onopen sends a `session.update` re-asserting server VAD (belt-and-braces), handles `conversation.item.input_audio_transcription.completed` (caller's speech shows in transcript as "🎙 …"), and reply-done now FILLS the pending "…" turn instead of appending a duplicate row.
Mint verified live post-change (200, secret returned — OpenAI accepted the config). Full speech loop needs a real browser mic to confirm.

## State
tsc clean, web rebuilt (bundle index-BhSJEjcW.js), server+workers bounced. NOT committed.
