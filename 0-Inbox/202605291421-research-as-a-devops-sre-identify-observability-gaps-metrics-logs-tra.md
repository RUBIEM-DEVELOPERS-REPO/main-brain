---
title: "Research: As a DevOps / SRE, identify observability gaps — metrics, logs, traces, slos"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, identify observability gaps — metrics, logs, traces, slos

**Observability gaps for a DevOps / SRE team**  

| Observability pillar | Typical coverage | Common gaps (what’s often missing) | Why it matters for SRE |
|----------------------|------------------|-----------------------------------|------------------------|
| **Metrics** | • Business‑level KPIs (traffic, revenue)  <br>• System‑level counters (CPU, memory, request latency)  <br>• DORA delivery metrics (deployment frequency, lead time, change‑failure rate, failed‑deployment‑recovery time)【1†L31-L38】 | • **No‑SLA/SLO‑aligned metrics** – raw latency or error counts are collected, but they aren’t tied to explicit Service‑Level Objectives (SLOs) or error‑budget policies. <br>• **Sparse business‑impact metrics** – revenue‑impact, user‑journey success rates are rarely instrumented. <br>• **Missing high‑resolution histograms** – only averages are stored, making tail‑latency analysis impossible. | Without SLO‑driven metrics you cannot gauge whether reliability targets are being met or allocate error‑budget correctly. |
| **Logs** | • Centralised log aggregation (e.g., ELK, Azure Monitor) for error and audit trails. | • **Insufficient structured logging** – free‑form text makes automated querying and correlation hard. <br>• **Log‑retention gaps** – logs are rotated too aggressively, losing evidence for post‑mortems. <br>• **Lack of context enrichment** (trace IDs, user IDs, request IDs) hampers root‑cause analysis. | Unstructured or short‑lived logs increase MTTR because engineers spend time stitching together events. |
| **Traces** | • Distributed tracing for request flows across services (OpenTelemetry, Azure Application Insights). | • **Partial instrumentation** – only front‑end services emit spans; backend batch jobs or legacy components remain invisible. <br>• **No sampling strategy aligned to SLOs** – either too much data (cost) or too little (missing rare failures). <br>• **Missing correlation with logs/metrics** – trace IDs are not propagated to logs or metric tags. | Gaps in end‑to‑end visibility prevent you from seeing where latency spikes or failures originate, slowing incident response. |
| **SLOs / Error Budgets** | • Some teams track change‑failure rate and MTTR as reliability signals (DORA metrics)【1†L31-L38】. | • **No formal SLO definitions** – teams rely on informal “good enough” thresholds. <br>• **No error‑budget tracking** – without a budget you cannot prioritize reliability work vs. feature work. <br>• **SLOs not reflected in alerting** – alerts fire on raw thresholds, not on SLO breach risk. | Without explicit SLOs you cannot make data‑driven trade‑offs or communicate reliability health to stakeholders. |

### How to close the gaps  

1. **Define SLOs first** – pick latency‑percentile, availability, and error‑budget targets that map to business outcomes. Then back‑track to the metrics needed to measure them.  
2. **Instrument with structured, context‑rich logs** – include trace‑ids, request‑ids, and key business attributes (user‑segment, feature flag).  
3. **Complete trace coverage** – add OpenTelemetry agents to all services, including background workers, and configure a sampling policy that retains high‑latency or error‑prone traces.  
4. **Tie metrics to alerts via SLO‑based alerting** – use “burn‑rate” alerts that warn when the error‑budget is being consumed too fast.  
5. **Retain data appropriately** – keep high‑resolution metrics for at least 30 days, logs for 90 days (or as compliance requires), and traces for a period that supports root‑cause analysis of rare incidents.  

By systematically mapping each observability pillar to concrete, SLO‑aligned artifacts, a DevOps/SRE organization can eliminate blind spots, reduce MTTR, and keep reliability work aligned with business priorities.

## Web sources
1. [DevOps - Wikipedia](https://en.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
2. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=3bf88331aac76ac9119a9459ab546be2) _(relevance 8, http)_
3. [Što je Devops? Primjeri i karakteristike](https://informatecdigital.com/hr/%C5%A0to-je-devops-primjeri-i-zna%C4%8Dajke/) _(relevance 6, http)_

## Vault hits at time of research
_(none)_
