---
type: persona-profile
personaId: clawbot
personaName: Neuro
generatedAt: 2026-07-21T06:40:08.776Z
factsConsidered: 4
model: google/gemini-3.5-flash
---

## What I've learned

- Peer delegation heavily relies on `managed-worker-7473`, but these configurations require increased timeout thresholds to prevent "peer delegation timed out" errors on complex tasks.
- Database queries (`db.query`) are currently a performance bottleneck, experiencing significant latency (averaging over 31 seconds) that requires schema or index investigation.
- Workload distribution is highly concentrated, with Nova and Neuro handling over 70% of tasks; future routing should actively leverage Aria and Piers to balance the load.
- Synchronous local tools like `security.scan` and `governance.check` execute instantly (0s duration) by design, while integration tools like `connector.call` and `quality.check` show high stability with zero recent failures.
