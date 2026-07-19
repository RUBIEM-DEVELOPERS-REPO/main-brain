---
type: progress
date: 2026-07-19
scope: agents can find+email generated media, write calendar events, create schedules; chat context verified
author: claude-code session
---

# Agents interact with the system: media, calendar, schedules

## Failure fixed: "send me the 3 most recently generated images"
Agent searched vault + local storage, honestly found nothing (generated media lives in .neuroworks/media, invisible to vault.search/fs.find_in), then claimed "no email transmission mechanism" while email.send was live.
- New primitive `media.list` (studio-image.ts listGeneratedImages) — newest generated images with absolute paths + download URLs + `pathsJoined` for chaining.
- New SEND_MEDIA_RE deterministic plan (ahead of the image-gen branch so "email the image we made" doesn't REGENERATE): media.list → email.send {attach_paths: "$step_0.pathsJoined"} when a literal address is present; mediaSendContext planner hint otherwise.
- email.ts: one retry on transient Mailjet 5xx/timeout (live 502 failed an otherwise-correct send).
- Deterministic send-media synth short-circuit: success → recipient + attached files; failure → real error + download links (the LLM synth had lane-refused "outside my lane as a Multimedia Producer" over the 502).
- Live-verified: 3 PNGs emailed to arthurmagaya2@gmail.com.

## Calendar + schedule write access
- `calendar.add_event` {date, title} → dated memory fact; /api/calendar/agenda now returns `events` and CalendarPage renders an Events section. Live-verified via chat.
- `schedule.create/list/delete` primitives wrap lib/schedules. scheduleContext planner hint + deterministic heuristicPlan parse for "create a schedule called X: every weekday at HH:MM <task>" (hour/ampm, weekday/day-name → daysOfWeek, deliver_email from address, work text = after the time phrase, email clause stripped so fires don't double-send). Live-verified: "Weekday task digest" weekdays@08:00 → arthur@rubiem.com.
- All new primitives added to the MCP allowlist.

## Bugs caught while verifying
- schedules.ts cache had NO cross-process freshness: a worker's schedule.create wrote the shared file but the primary's cache stayed stale — schedule neither listed nor would ever FIRE. load() now re-reads on mtime change; persist() stamps mtime.
- Strip-regex `[^.]*$` couldn't cross the dots in an email address → email clause stayed in the schedule task (would have double-sent). → `[\s\S]*$`.
- PS 5.1 `Out-File -Encoding utf8` writes a BOM → JSON.parse failed → all schedules vanished. Loader now strips BOM; file rewritten BOM-less.

## Chat context
Verified present: buildEnrichedTask includes recent user turns + last assistant turn by default (opt-out via NEW_TOPIC), enriched task flows to delegated workers too.

## State
tsc clean, web rebuilt, server+workers bounced. NOT committed.
