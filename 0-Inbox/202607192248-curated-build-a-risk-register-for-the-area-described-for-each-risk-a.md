---
title: "Curated: Build a risk register for the area described. For each risk: a clear description, likelihood × impact score, an owner, a"
created: 2026-07-19
source: clawbot-curation
tags: [curated, agent-output]
persona: compliance
quality_score: 0.92
factuality_risk: 0.10
citation_coverage: 1.00
---

# Build a risk register for the area described. For each risk: a clear description, likelihood × impact score, an owner, and a mitigation. No orphan risks.

Topic: Read the attached document and produce a concise summary highlighting the key facts, dates, owners, and risks.

This document summarizes the compliance, strategic alignment, and risk profile of the NeuroWorks AI Digital Workforce proposal dated July 12, 2026. The structured risk register below outlines key operational and regulatory risks, mapping them to specific owners and mitigations to ensure alignment with Zimbabwean national frameworks.

```json
{
  "project_summary": {
    "title": "NeuroWorks AI Digital Workforce and Intelligent Organisation Platform",
    "track": "Track 3 Development",
    "date": "2026-07-12",
    "lead_innovators": ["Aiia", "Rubiem"],
    "key_facts": {
      "architecture": "Three-layer system (Layer 1: PostgreSQL, Qdrant, Ollama, Redis)",
      "data_sovereignty": "62.7% of inference calls run locally on consumer GPUs; AES-256-GCM encryption",
      "target_sectors": [
        "Finance (RBZ framework, EcoCash, OneMoney)",
        "Agriculture (Pfumvudza/Intwasa, GMB)",
        "Health (MOHCC, DHIS2)",
        "Education/Public Services (ZIMSEC, PRAZ, ZIMRA)"
      ]
    }
  },
  "risk_register": [
    {
      "risk_id": "RISK-01",
      "description": "Non-compliance with the Reserve Bank of Zimbabwe (RBZ) regulatory framework during financial and fintech integrations (EcoCash, OneMoney).",
      "likelihood": 3,
      "impact": 5,
      "score": 15,
      "owner": "Cora (Compliance & Risk Officer)",
      "mitigation": "Enforce mandatory Human-in-the-Loop (HITL) controls for all transactional actions and consult Logan (Contracts Reviewer) for definitive regulatory interpretations."
    },
    {
      "risk_id": "RISK-02",
      "description": "Violation of data sovereignty requirements under the Zimbabwe National AI Strategy and NDS2 due to unauthorized cloud data export.",
      "likelihood": 2,
      "impact": 4,
      "score": 8,
      "owner": "Devon (DevOps / SRE)",
      "mitigation": "Configure Ollama for local-first inference by default (retaining the verified 62.7% local GPU execution rate) and restrict cloud escalation to explicit operator opt-in."
    },
    {
      "risk_id": "RISK-03",
      "description": "Failure to meet public procurement and compliance standards set by the Procurement Regulatory Authority of Zimbabwe (PRAZ).",
      "likelihood": 3,
      "impact": 4,
      "score": 12,
      "owner": "Pia (Procurement Officer)",
      "mitigation": "Hardcode pre-execution policy checks within the NeuroWorks agent workflow to validate all procurement actions against uploaded PRAZ policy constraints."
    }
  ]
}
```



---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.92, 0 vault refs, 0 web sources, 2 GitHub refs.*
