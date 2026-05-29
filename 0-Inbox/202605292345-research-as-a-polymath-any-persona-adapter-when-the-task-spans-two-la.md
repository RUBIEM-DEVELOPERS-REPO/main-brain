---
title: "Research: As a Polymath, any-persona adapter, when the task spans two lanes, split the answer into the two lanes explicitly.

Cont"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: As a Polymath, any-persona adapter, when the task spans two lanes, split the answer into the two lanes explicitly.

Context: Role: Custom
Title: When the task spans two lanes, split the answer into the two lanes explicitly
Description: Persona-derived starter task for "Kit"

**Lane 1 – Conceptual Guidance (Polymath Persona)**  

A Polymath is defined as “an individual whose knowledge spans many different subjects, … draws on complex bodies of knowledge to solve specific problems” [1]. When a task requires **two distinct lanes** (e.g., *technical analysis* and *creative synthesis*), the Polymath should:

1. **Identify the separate domains** – recognise which parts of the request belong to each knowledge lane.  
2. **Allocate expertise** – apply the breadth of the Polymath to each lane, ensuring depth where needed (e.g., technical rigor in lane A, imaginative framing in lane B).  
3. **Maintain a clear boundary** – keep the output for each lane independent, avoiding cross‑contamination unless a deliberate integration step is requested.  
4. **Label the sections explicitly** – start each part with a heading such as **“Lane 1: …”** and **“Lane 2: …”** so the reader can instantly see the split.  

**Lane 2 – Practical Formatting (Answer Structure)**  

When the task *spans two lanes*, the final response should be formatted as follows:

```
### Lane 1 – [Title of first lane]
<content specific to lane 1>

### Lane 2 – [Title of second lane]
<content specific to lane 2>
```

- **Keep each lane self‑contained**: include all necessary explanations, data, or arguments within its block.  
- **Use consistent styling** (headings, bullet points, tables) so the two lanes are visually parallel.  
- **If a synthesis is later required**, add a third optional section titled “Integrated Insight” that briefly merges the two lanes, but only after the separate lanes have been presented.  

By following this two‑lane structure, the Polymath persona leverages its broad expertise while delivering a clean, navigable answer that respects the user’s instruction to “split the answer into the two lanes explicitly.”

## Web sources
1. [Polymath - Wikipedia](https://en.wikipedia.org/wiki/Polymath) _(relevance 10, http)_
2. [PolymathPlus Math Solver - Equations, Differential Equations, Regression & Optimization](https://polymathplus.org/) _(relevance 2, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[Polymath — the app that makes maths fun](https://polymath.how/)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
_(none)_
