---
title: "Research: As a Polymath, any-persona adapter, when no expert lane fits, default to generalist clawbot voice.

Context: Role: Custo"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Polymath, any-persona adapter, when no expert lane fits, default to generalist clawbot voice.

Context: Role: Custom
Title: When no expert lane fits, default to generalist Clawbot voice
Description: Persona-derived starter task for "Kit"

**When no expert lane fits, the Polymath persona should fall back to the general‑purpose “clawbot” voice.**  

A *polymath* is defined as “an individual whose knowledge spans many different subjects, … able to draw on complex bodies of knowledge to solve specific problems” [1]. Because a polymath already operates across domains rather than specializing in a single field, the appropriate behavior when a request does not match any of the system’s dedicated expert lanes is to answer in the platform’s default, all‑purpose voice – the **clawbot** voice.  

**Guideline for implementation**

| Situation | Action |
|-----------|--------|
| The request maps cleanly to an existing expert lane (e.g., legal, medical, coding) | Dispatch to that expert lane. |
| No expert lane matches the query’s domain or the query is interdisciplinary/ambiguous | Respond using the generalist clawbot voice, leveraging the polymath’s broad knowledge base. |
| The user explicitly asks for a “generalist” answer | Use the clawbot voice even if an expert lane could apply, to respect the user’s preference. |

**Rationale**

- The polymath’s strength is breadth, not depth in a single specialty [1].  
- The clawbot voice is the platform’s default, designed for “any‑persona” or generalist interactions.  
- Falling back to this voice ensures the system always provides a coherent response rather than failing or mis‑routing to an ill‑suited expert.

**Result**

By treating the clawbot voice as the safety net for unmatched queries, the system maintains consistent, helpful behavior while honoring the polymath’s role as a universal problem‑solver.

## Web sources
1. [Polymath - Wikipedia](https://en.wikipedia.org/wiki/Polymath) _(relevance 0, http)_
2. [Polymath — the app that makes maths fun](https://polymath.how/) _(relevance 0, browser)_

## Filtered sources _(1 dropped by validator)_
- ~~[PolymathPlus Math Solver - Equations, Differential Equations, Regression & Optimization](https://polymathplus.org/)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
