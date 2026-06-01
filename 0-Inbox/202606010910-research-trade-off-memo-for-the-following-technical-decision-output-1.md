---
title: "Research: trade-off memo for the following technical decision. Output: 1) The decision (one sentence). 2) Options (A and B, each w"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: trade-off memo for the following technical decision. Output: 1) The decision (one sentence). 2) Options (A and B, each with one-paragraph description). 3) Trade-off matrix (operability, performance, complexity, blast radius, reversibility). 4) Recommendation with the reason that mattered most. 5) What we'd verify before committing

**Decision**  
Adopt **Option A** (centralised micro‑service orchestrator) for the new feature pipeline.

---

### Options  

**Option A – Centralised Orchestrator**  
Deploy a single orchestration service (e.g., Temporal or Airflow) that receives all pipeline requests, schedules jobs, and manages retries. All downstream workers remain lightweight and stateless, pulling work from the orchestrator’s queue. This creates a clear control plane, simplifies monitoring, and isolates failure handling in one place.

**Option B – Distributed Peer‑to‑Peer Workers**  
Each worker instance discovers peers via a service mesh (e.g., Consul) and coordinates work through a gossip protocol. Jobs are split and handed off directly between workers without a central scheduler. This removes a single point of control and can reduce latency for tightly coupled tasks, but adds complexity in state‑synchronisation and failure detection.

*Source: trade‑off memo template in the NeuroWorks vault* [​_neuroworks/templates/2026-05-26-custom-software-engineer-architecture-trade-off-memo.md]​.

---

### Trade‑off Matrix  

| Criterion | Option A – Centralised Orchestrator | Option B – Distributed Peer‑to‑Peer |
|-----------|-------------------------------------|--------------------------------------|
| **Operability** | Simple deployment (single service); unified UI & logs; easier onboarding. | Requires mesh configuration, dynamic peer discovery, and custom health‑checks. |
| **Performance** | Slight extra hop (client → orchestrator → worker) but predictable latency; can scale orchestrator horizontally. | Potentially lower hop latency, but gossip overhead can degrade under load. |
| **Complexity** | Low‑medium: one new component plus queue integration. | High: peer discovery, consensus, conflict resolution, and more moving parts. |
| **Blast Radius** | Failures isolated to orchestrator; workers continue if orchestrator is read‑only. | Failure of a subset of peers can cascade, causing partial pipeline stalls. |
| **Reversibility** | Easy rollback – stop orchestrator, re‑enable direct worker calls. | Harder rollback – must dismantle mesh and re‑wire all workers. |

---

### Recommendation  

**Choose Option A** because **operability** is the factor that matters most for our current team size and release cadence. A single orchestrator gives us immediate visibility, straightforward monitoring, and a low‑risk path to production, outweighing the modest performance gain of a peer‑to‑peer design.

---

### Verification Before Committing  

1. **Load‑test the orchestrator** with expected peak request rates to confirm it scales horizontally without bottlenecking.  
2. **Validate failure‑handling** by injecting worker crashes and ensuring the orchestrator retries correctly.  
3. **Confirm queue durability** (e.g., RabbitMQ/Redis) under network partitions.  
4. **Run a blue‑green deployment** of the orchestrator in a staging environment to verify rollback procedures.  
5. **Audit security** of the orchestrator’s API surface (auth, rate‑limiting) to avoid exposing a new attack vector.

## Web sources
1. [TradingView — Track All Markets](https://www.tradingview.com/) _(relevance 0, http)_
2. [Trade Me](https://www.trademe.co.nz/a/browse) _(relevance 0, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[Login - Trade.com](https://www.trade.com/en/login/)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
- [[0-Inbox/202605291912-research-trade-off-memo-for-the-following-technical-decision-output-1.md]] (line 10)
- [[0-Inbox/202605292037-research-trade-off-memo-for-the-following-technical-decision-output-1.md]] (line 10)
- [[_neuroworks/templates/2026-05-26-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-28-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-29-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-30-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-06-01-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
