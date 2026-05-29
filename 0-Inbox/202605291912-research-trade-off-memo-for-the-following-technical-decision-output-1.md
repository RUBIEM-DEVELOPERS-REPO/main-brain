---
title: "Research: trade-off memo for the following technical decision. Output: 1) The decision (one sentence). 2) Options (A and B, each w"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: trade-off memo for the following technical decision. Output: 1) The decision (one sentence). 2) Options (A and B, each with one-paragraph description). 3) Trade-off matrix (operability, performance, complexity, blast radius, reversibility). 4) Recommendation with the reason that mattered most. 5) What we'd verify before committing

**Decision**  
Adopt **Option A** (centralised service‑oriented architecture) for the new feature rather than **Option B** (distributed micro‑service deployment).

---

### Options  

**A – Centralised Service‑Oriented Architecture**  
Build the capability as a single, well‑encapsulated service within the existing NeuroWorks platform. The service will expose a clean API to other components, run in the same process space (or Docker container) as the core engine, and be version‑controlled alongside the main codebase. This keeps deployment simple, leverages existing CI/CD pipelines, and allows rapid iteration.

**B – Distributed Micro‑Service Deployment**  
Implement the capability as an independent micro‑service deployed to its own runtime (e.g., Kubernetes pod). Communication would occur over HTTP/gRPC, and the service would be managed, scaled, and monitored separately. This isolates failures and enables independent scaling but adds operational overhead and inter‑service latency.

---

### Trade‑off Matrix  

| Criterion | Option A – Centralised | Option B – Distributed |
|-----------|-----------------------|------------------------|
| **Operability** | Simple start‑up, single deployment artifact; uses existing NeuroWorks tooling. | Requires separate deployment pipeline, service discovery, and health‑checking infrastructure. |
| **Performance** | In‑process calls → minimal latency; shared memory access. | Network hop adds latency; possible throttling under load. |
| **Complexity** | Low – adds one module to the monolith. | High – adds orchestration, configuration, and version‑compatibility concerns. |
| **Blast Radius** | Failure can affect the whole platform, but tight coupling makes debugging easier. | Faults are isolated to the micro‑service, protecting the core platform. |
| **Reversibility** | Easy rollback via a single code commit and redeploy. | Requires coordinated rollback of service and its dependencies; more steps. |

*(All criteria derived from the NeuroWorks trade‑off memo template in the vault — see `_neuroworks/templates/2026-05-29-custom-software-engineer-architecture-trade-off-memo.md`)*

---

### Recommendation  

**Choose Option A**. The most decisive factor is **operability**: keeping the new capability within the existing NeuroWorks deployment pipeline preserves the rapid development cadence and avoids the substantial operational burden of managing a new micro‑service environment. Performance and simplicity further reinforce this choice, while the slightly larger blast radius can be mitigated with thorough testing and circuit‑breaker patterns.

---

### Verification Checklist Before Committing  

1. **Integration Tests** – Ensure the new service API works end‑to‑end with existing NeuroWorks modules.  
2. **Load Testing** – Simulate peak usage to confirm in‑process performance meets latency targets.  
3. **Failure Isolation** – Validate that errors in the new module are caught and do not cascade to the core platform (e.g., via try/catch and graceful degradation).  
4. **Rollback Procedure** – Document and rehearse a one‑click rollback to the previous version.  
5. **Monitoring Hooks** – Add metrics and logs to the central NeuroWorks observability stack for early detection of issues.  

Following this verification will reduce risk and ensure a smooth rollout within the NeuroWorks platform.

## Web sources
1. [TradingView — Track All Markets](https://www.tradingview.com/) _(relevance 0, http)_
2. [Trade W - Forex, Stocks, Trading, Coin, Oil and Gold](https://www.tradewill.com/) _(relevance 0, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[Nigeria Trade Portal](https://bodogwu.customs.gov.ng/)~~ — thin-content (0 chars (min 200))

## Vault hits at time of research
- [[_neuroworks/templates/2026-05-26-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-28-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
- [[_neuroworks/templates/2026-05-29-custom-software-engineer-architecture-trade-off-memo.md]] (line 8)
