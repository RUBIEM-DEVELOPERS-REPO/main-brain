---
title: "Research: As a DevOps / SRE, identify observability gaps — metrics, logs, traces, slos.

Context: Role: Custom
Title: Identify obs"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, identify observability gaps — metrics, logs, traces, slos.

Context: Role: Custom
Title: Identify observability gaps — metrics, logs, traces, SLOs
Description: Persona-derived starter task for "Devon"

**Observability gaps to surface for a DevOps / SRE team**  

| Area | Typical coverage | Common gaps (what’s often missing) | Why it matters |
|------|------------------|-----------------------------------|----------------|
| **Metrics** | System‑level (CPU, memory, disk, network) and application‑level counters (request rate, latency, error rate). | • No business‑level KPIs (e.g., revenue per request). <br>• Sparse custom‑app metrics (e.g., queue depth, cache hit‑ratio). <br>• Lack of high‑resolution (sub‑second) data for bursty services. | Without business‑oriented and fine‑grained metrics you cannot correlate technical health to user impact or detect short‑lived spikes that cause outages. |
| **Logs** | Centralised log aggregation (e.g., via ELK, Loki) for error and audit events. | • Inconsistent log format / missing structured fields (service, request‑id). <br>• Log retention too short for post‑mortem analysis. <br>• No correlation IDs across services → difficult to trace a request end‑to‑end. | Unstructured or short‑lived logs hinder root‑cause analysis and compliance reporting. |
| **Traces** | Distributed tracing (OpenTelemetry, Jaeger, Zipkin) for request flows. | • Partial instrumentation (only front‑end or only a subset of micro‑services). <br>• Missing latency breakdowns for background jobs / batch pipelines. <br>• No sampling strategy → either too much data (cost) or too little (visibility). | Gaps in tracing leave blind spots in the call graph, making it hard to pinpoint latency bottlenecks or failure propagation. |
| **SLOs / Error Budgets** | Defined service‑level objectives for availability, latency, error rate; monitored via alerts. | • No SLOs for non‑functional aspects (e.g., data freshness, cost, security). <br>• Absence of error‑budget burn‑rate dashboards. <br>• SLOs not tied to business outcomes → stakeholders cannot gauge impact. | Without comprehensive SLOs you cannot drive reliable release cadence or negotiate trade‑offs with product owners. |

### How to discover these gaps  

1. **Audit existing tooling** – list every metric source, log shipper, tracer, and SLO dashboard. Compare against the checklist above.  
2. **Run a “gap‑walk” with stakeholders** – ask developers, product owners, and security leads what they *cannot* currently observe (e.g., “I need a metric for cache eviction rate”).  
3. **Validate data quality** – verify that logs contain a request‑id, that metrics have proper labels, and that traces are end‑to‑end for at least one critical user journey.  
4. **Check retention & sampling policies** – ensure logs are kept long enough for post‑mortems and that trace sampling balances cost vs. coverage.  
5. **Map SLOs to business goals** – confirm each SLO has a clear owner, a target, and a measurable error‑budget burn‑rate view.

### Quick win checklist  

- Add **structured fields** (service, env, request‑id) to all logs.  
- Instrument **missing services** with OpenTelemetry and enable a **single trace ID** propagation.  
- Define at least one **business‑level metric** (e.g., “successful checkout per minute”).  
- Create an **error‑budget burn‑rate chart** for each critical SLO.  

Addressing these gaps will give the team a complete observability stack—metrics, logs, traces, and SLOs—that supports rapid detection, root‑cause analysis, and reliable service delivery.

## Web sources
1. [DevOps — Вікіпедія](https://uk.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [Хто такий DevOps і що потрібно знати для роботи на цій позиції | DOU](https://dou.ua/lenta/articles/devops-engineer-career/) _(relevance 10, http)_
3. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=120407aebf1868b60ee910c6be0f69d7) _(relevance 9, http)_

## Vault hits at time of research
_(none)_
