---
type: progress
date: 2026-07-22
scope: fixed phantom "research.multiperspective 0s failures" + added hard db.query timeout
author: claude-code session
---

# research.multiperspective phantom failures + db.query hard timeout

## 1. "research.multiperspective instant 0s failures" — phantom, tool works fine
The tool is NOT broken — journal shows real runs succeeding in 62s/67s. The "0s failures" the reflection/tool-stats surfaced were PHANTOM entries:
- executePlan seeds every step as a placeholder `{ok:false, durationMs:0}`; when a step STARTS it gets a `startedAt` but stays 0ms/ok:false until it finishes.
- If the job is persisted mid-run (a delegated job's mirrored runs, or an operator CANCEL — e054e8d2/6b810f39 were yesterday's cancel-test research runs), that in-flight placeholder got journaled as "0ms ok=false".
- TWO layers let it through:
  (a) job-store.ts persist filter KEPT anything with a `startedAt`, so an interrupted-at-0ms step persisted as a failure. Tightened: keep a run only if ok===true OR it has a real error OR durationMs>0 (a genuine failure ALWAYS has an error or nonzero duration). Removed the `startedAt` clause.
  (b) reflection.ts collectJobsInWindow took the FIRST journal record per id, but the append-only journal's first record is the early (placeholder) snapshot — so it counted the phantom and MISSED the completed run's real steps. Fixed to last-record-wins (Map by id), matching tasks.ts/templates.ts.
- Net: cancelled/interrupted runs no longer poison tool stats; the reflection now reads each job's FINAL state. Decision: KEEP the tool (debugged, not retired) — it works.

## 2. db.query 180s+ hangs — hard timeout added
No timeout anywhere: a slow query / missing index / lock wait / Neon cold-start ran unbounded (journal showed 90s, then 180s+). Added NEUROWORKS_DB_QUERY_TIMEOUT_MS (default 30s):
- Native server-side caps so the DB itself kills the query + frees the connection: pg `statement_timeout` + `query_timeout` + `connectionTimeoutMillis`; mysql `MAX_EXECUTION_TIME` optimizer hint on SELECTs; (mssql via the wall-clock race).
- `withTimeout()` client wall-clock race wrapping every SQL branch — covers a connection hang before a query even runs, and any driver that ignores the native knob; on timeout it destroys the socket so nothing leaks.
- Clear error on trip: "db.query (postgres) timed out after 30s … add an index, narrow the query, or raise the timeout".
- Live-verified through the real decryption path (source.connection is stored ENCRYPTED, decrypted in load()): normal `SELECT 1` OK in ~8s (incl. Neon cold-start); `SELECT pg_sleep(35)` FAILED at 30261ms with the timeout error. Exactly the cap.
- Documented NEUROWORKS_DB_QUERY_TIMEOUT_MS + NEUROWORKS_DB_SCHEMA_CACHE_MS in .env.example.

## State
tsc clean, server+workers bounced, db.query timeout live-verified. Multiperspective fix is defensive filtering (verified by code + the journal evidence). NOT committed.
