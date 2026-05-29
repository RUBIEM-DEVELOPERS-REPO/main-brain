---
title: "Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (c"
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 0
sources_dropped: 0
---

# Research: As a Technical Writer, distinguish reference (look up) from how-to (recipe) from tutorial (learning) from explanation (concept). Context: R

**Reference vs. How‑to vs. Tutorial vs. Explanation**  
*(tailored for a technical‑writer working in R)*  

| Type | Goal | Typical Structure | Audience Expectation | Example in R |
|------|------|-------------------|----------------------|--------------|
| **Reference (look‑up)** | Provide *exact* information that a user can consult quickly. | • Alphabetical or searchable entries<br>• Syntax, arguments, return values<br>• Minimal prose, often tables or bullet lists | “What does `lm()` accept as arguments?” “What is the default value of `na.rm`?” | **R help pages** (`?lm`, `?read.csv`) – list of arguments, defaults, and a one‑sentence description. |
| **How‑to (recipe)** | Show *how to accomplish a specific task* with a concrete, step‑by‑step sequence. | • Prerequisites → Steps → Expected outcome<br>• Code snippets that can be copied verbatim<br>• Short “gotchas” or tips | “How do I import a CSV with a custom delimiter?” | “How to read a pipe‑delimited file: `read.table(file, sep='|')`.” |
| **Tutorial (learning)** | Guide a learner through a *broader workflow* or concept, building competence over several steps. | • Intro & motivation → Concepts → Incremental exercises → Summary<br>• Explanations interleaved with code, often with visual output | “I want to learn regression modelling from scratch.” | A multi‑page tutorial that starts with data import, explores `ggplot2`, fits a linear model, checks diagnostics, and interprets results. |
| **Explanation (concept)** | Clarify *why* something works, the underlying theory, or design rationale. | • Narrative prose, diagrams, analogies<br>• May include code as illustration, but focus is on concepts, not execution | “Why does `glm()` use a log‑link for binomial families?” | An article describing the exponential family, link functions, and maximum‑likelihood estimation. |

### How to decide which to write

1. **Ask the user’s intent** – are they looking for a fact, a concrete command, a skill, or understanding?
2. **Scope** – reference entries are *atomic*; how‑tos are *single‑task*; tutorials cover *multiple related tasks*; explanations are *conceptual* and may span many tasks.
3. **Depth vs. Brevity** – reference = brief; how‑to = concise steps; tutorial = moderate length with learning checkpoints; explanation = longer, may include background research.

### Practical tip for R documentation

- **Reference**: Use Roxygen comments (`@param`, `@return`) that generate the help pages.  
- **How‑to**: Publish short “cheat‑sheet” style posts (e.g., on R‑Studio Community) with a single code block.  
- **Tutorial**: Create a vignette or blog series that walks a user from data import to model interpretation.  
- **Explanation**: Write a “Conceptual Overview” vignette or a markdown article that discusses statistical theory, linking back to the code examples used in tutorials.

By matching the *purpose* (lookup, recipe, learning, concept) to the *structure* and *audience expectation*, you can produce clear, appropriately scoped documentation for R users.

## Web sources
_(no sources survived validation)_

## Vault hits at time of research
_(none)_
