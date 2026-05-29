---
type: job
title: Write blameless postmortems that find the system cause, not the human
slug: write-blameless-postmortems-that-find-the-system-cause-not-t-4a852e1c
created: 2026-05-29T14:24:39.418Z
jobId: 4a852e1c-3181-4b7f-a165-44e3f2d976e8
status: succeeded
template: custom-devops-sre-write-blameless-postmortems-that-find-th
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:22:25.887Z
finishedAt: 2026-05-29T14:24:39.418Z
---

# Write blameless postmortems that find the system cause, not the human

- **Status:** succeeded
- **Template:** custom-devops-sre-write-blameless-postmortems-that-find-th
- **Started:** 2026-05-29T14:22:25.887Z
- **Finished:** 2026-05-29T14:24:39.418Z
- **Title:** Write blameless postmortems that find the system cause, not the human

## Plan
Default research plan for: As a DevOps / SRE, write blameless postmortems that find the system cause, not the human

### Steps
1. ✓ Researching "As a DevOps / SRE, write blameless postmortems that find the system cause, not t…" — vault + web — `research.deep` (36.4s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (6.1s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (15.2s)
    > auto-injected: quality score=0.70 (pass=true) — peer review for a second opinion

## Answer
**Blameless post‑mortems for DevOps / SRE teams**

*Goal: surface the *system* root cause, not individual fault.*

1. **Set the cultural foundation** – shared ownership, rapid feedback loops, and automation first. These practices encourage honest data sharing and reduce human‑error variance.

2. **Collect immutable data before the meeting** – observability stack (metrics, traces, logs), change history (Git, IaC diff, deployment records), runbooks, and an incident timeline. Store all data in a read‑only location to preserve the factual record.

3. **Structure the post‑mortem document**:
   * Title & impact
   * Timeline (UTC timestamps)
   * Root‑cause analysis (5 Whys or Fishbone)
   * System‑level cause statement (single sentence)
   * Corrective actions – immediate fixes and long‑term improvements
   * Learning & follow‑up with owners, due dates, and DORA metrics.

4. **Conduct the meeting with blameless rules** – avoid “who did X,” require evidence for every claim, encourage automation questions, and document all hypotheses.

5. **Turn findings into system improvements** – add missing automation, improve observability, update CI/CD gates, and refine runbooks.

6. **Close the loop** – publish the post‑mortem within 24 h, track corrective actions against DORA metrics, and run a short retrospective after deployment.

**TL;DR Checklist**
- Gather immutable logs, metrics, and change history.
- Build a timeline → apply 5 Whys → isolate the *system* component.
- Write a single “system cause” statement; no blame on people.
- Define automated fixes and metric‑driven follow‑ups.
- Publish, track, and re‑measure with DORA metrics.

This process keeps post‑mortems factual, action‑oriented, and focused on the underlying system design rather than individual mistakes.

<details><summary>Log</summary>

```
[2026-05-29T14:22:25.895Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:22:29.276Z] Thinking about the best approach…
[2026-05-29T14:22:29.301Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:22:30.611Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-29T14:22:30.611Z] Plan ready: 1 step — Default research plan for: As a DevOps / SRE, write blameless postmortems that find the system cause, not the human.
[2026-05-29T14:22:30.615Z] Step 1 of 1: Researching "As a DevOps / SRE, write blameless postmortems that find the system cause, not t…" — vault + web
[2026-05-29T14:23:07.019Z] All sub-agents finished in 36.4s.
[2026-05-29T14:23:07.019Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:23:07.025Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:23:07.025Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:23:07.025Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:23:13.156Z] Wave 1 finished in 6.1s.
[2026-05-29T14:23:13.156Z] All sub-agents finished in 6.1s.
[2026-05-29T14:23:13.158Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T14:23:28.352Z] All sub-agents finished in 15.2s.
[2026-05-29T14:23:28.352Z] peer review verdict=needs-work (Citation placeholders (e.g., [1†L9-L12]) reference no source, potentially hallucinated) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T14:23:28.356Z] Thinking with openai/gpt-oss-120b:free (~3 896 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T14:24:39.172Z] retry verdict=needs-work and quality not improved (0.68 ≤ 0.7); keeping the rescued/original draft
[2026-05-29T14:24:39.172Z] Wrote to your second brain — committing the changes.
[2026-05-29T14:24:39.418Z] Vault commit: done.
```
</details>
