---
type: job
title: Write blameless postmortems that find the system cause, not the human
slug: write-blameless-postmortems-that-find-the-system-cause-not-t-11ca4dc2
created: 2026-05-29T19:30:24.860Z
jobId: 11ca4dc2-de16-4640-a004-66a54c53cd03
status: succeeded
template: custom-devops-sre-write-blameless-postmortems-that-find-th
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:29:18.514Z
finishedAt: 2026-05-29T19:30:24.859Z
---

# Write blameless postmortems that find the system cause, not the human

- **Status:** succeeded
- **Template:** custom-devops-sre-write-blameless-postmortems-that-find-th
- **Started:** 2026-05-29T19:29:18.514Z
- **Finished:** 2026-05-29T19:30:24.859Z
- **Title:** Write blameless postmortems that find the system cause, not the human

## Plan
Default research plan for: As a DevOps / SRE, write blameless postmortems that find the system cause, not the human

### Steps
1. ✓ Researching "As a DevOps / SRE, write blameless postmortems that find the system cause, not t…" — vault + web — `research.deep` (49.8s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (7.4s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Blameless Post‑mortem Checklist for DevOps / SRE Teams**  
*(Focused on uncovering the *system* cause rather than blaming people)*  

| Step | What to do | Why it matters (system‑cause focus) | Evidence |
|------|------------|-------------------------------------|----------|
| **1. Trigger & Scope** | • Open the post‑mortem as soon as the incident is declared resolved.<br>• Define the exact time window, services, and components that were affected. | A clear, time‑boxed scope keeps the investigation on the technical chain of events instead of drifting into “who was on‑call”. | – |
| **2. Gather Immutable Data** | • Pull logs, metrics, traces, and alerts from monitoring, CI/CD pipelines, and infrastructure‑as‑code (IaC) repos.<br>• Export the exact configuration files (Terraform, CloudFormation, etc.) that were in effect. | Immutable artefacts let the team trace *what the system did*, not *what a person said they did*. | “Infrastructure as code … Terraform, CloudFormation …” – [2] |
| **3. Re‑create the Timeline** | • Build a chronological list of events (deployments, config changes, autoscaling actions, network failures).<br>• Use automated timeline tools where possible. | A timeline shows causal links between system actions; it removes speculation about intent. | “CI/CD pipeline … automatic testing, deployment, rollback …” – [2] |
| **4. Identify the *Root System Failure*** | • Ask “What component behaved unexpectedly?” rather than “Who changed it?”.<br>• Look for single points of failure: missing health‑checks, inadequate circuit‑breakers, race conditions, capacity limits. | The goal is a *system* cause (design, architecture, automation gap). | DevOps aims to “automate … monitoring, testing, and recovery” – [2] |
| **5. Analyse Contributing Factors** | • Document secondary issues (e.g., alert fatigue, insufficient observability, unclear runbooks).<br>• Classify them as *process* or *tool* gaps, not personal mistakes. | Highlighting systemic weaknesses prevents recurrence without assigning blame. | “DevOps culture … continuous integration, delivery, monitoring” – [2] |
| **6. Action Items – System‑Focused** | • **Fix the root cause**: patch code, adjust IaC, add redundancy, improve health‑checks.<br>• **Improve the system**: add metrics, tighten alert thresholds, enforce “fail‑fast” patterns.<br>• **Document** the change in the version‑control repo with a clear “post‑mortem fix” tag. | Each action directly strengthens the platform, keeping the narrative on *what the system lacked*. | “Automation of CI/CD, infrastructure, monitoring” – [2] |
| **7. Review & Share** | • Conduct a blameless walkthrough with all stakeholders (developers, ops, product).<br>• Publish the post‑mortem in a shared knowledge base (e.g., the NeuroWorks vault) for future reference. | Transparency builds a learning culture and prevents hidden blame. | The NeuroWorks platform encourages “knowledge vault” usage – vault note titles. |
| **8. Follow‑up Verification** | • After the fix lands, run canary or staged roll‑outs to confirm the system behaves as expected.<br>• Update monitoring dashboards to verify the new guardrails fire. | Guarantees the system change actually resolves the failure. | “Continuous integration … automatic rollback on failed test” – [2] |

### Key Principles (derived from the evidence)

1. **Automation over manual hand‑offs** – Use CI/CD pipelines, IaC, and automated roll‑backs to make the system self‑correcting rather than relying on individual actions. [2]  
2. **Observability first** – Metrics, logs, and traces are the factual basis for any post‑mortem; they keep the focus on system behaviour. [2]  
3. **Culture of learning** – DevOps is described as a “cultural philosophy” that emphasizes collaboration and continuous improvement, not finger‑pointing. [2]  
4. **Document in the knowledge vault** – The NeuroWorks platform’s vault is the authoritative source for internal processes; store the post‑mortem there to make it searchable for future incidents. [Vault notes]

### Quick Template (copy‑paste into the NeuroWorks vault)

```
# Incident <ID> – <Short Title>
**Date / Time:** <UTC>
**Services Impacted:** <list>
**Scope:** <time window, components>

## Timeline
- <timestamp> – <event> (e.g., deployment #1234 pushed)
- <timestamp> – <event> (e.g., alert fired)

## Root System Cause
- **What failed:** <component / config>
- **Why it failed:** <technical explanation>

## Contributing System Factors
- <factor 1>
- <factor 2>

## Action Items (System‑focused)
1. <Fix> – owner – due <date>
2. <Add metric / alert> – owner – due <date>
3. <Update runbook / documentation> – owner – due <date>

## Verification Steps
- <step to confirm fix>

## Lessons Learned
- <bullet points>

*All data sourced from logs, IaC, and monitoring – no individual blame assigned.*
```

Following this checklist ensures that every post‑mortem surfaces the **systemic** weaknesses that led to the outage, aligns with DevOps’s automation‑centric culture, and leverages the NeuroWorks knowledge vault as the single source of truth.

<details><summary>Log</summary>

```
[2026-05-29T19:29:18.525Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:29:19.446Z] Thinking about the best approach…
[2026-05-29T19:29:19.487Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:29:25.371Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T19:29:25.371Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, write blameless postmortems that find the system cause, not the human.
[2026-05-29T19:29:25.376Z] Step 1 of 1: Researching "As a DevOps / SRE, write blameless postmortems that find the system cause, not t…" — vault + web
[2026-05-29T19:30:15.194Z] All sub-agents finished in 49.8s.
[2026-05-29T19:30:15.194Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:30:17.012Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:30:17.012Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:30:17.012Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:30:24.433Z] Wave 1 finished in 7.4s.
[2026-05-29T19:30:24.433Z] All sub-agents finished in 7.4s.
[2026-05-29T19:30:24.433Z] Quality check passed (82%) and security is clean — peer review skipped (saves 30-90s).
[2026-05-29T19:30:24.433Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:30:24.859Z] Vault commit: done.
```
</details>
