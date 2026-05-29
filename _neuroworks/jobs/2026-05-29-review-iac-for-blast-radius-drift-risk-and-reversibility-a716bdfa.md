---
type: job
title: Review IaC for blast radius, drift risk, and reversibility
slug: review-iac-for-blast-radius-drift-risk-and-reversibility-a716bdfa
created: 2026-05-29T19:30:03.106Z
jobId: a716bdfa-9f47-4f05-bdd5-9e7e6c2aba90
status: succeeded
template: custom-devops-sre-review-iac-for-blast-radius-drift-risk-a
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T19:28:27.819Z
finishedAt: 2026-05-29T19:30:03.106Z
---

# Review IaC for blast radius, drift risk, and reversibility

- **Status:** succeeded
- **Template:** custom-devops-sre-review-iac-for-blast-radius-drift-risk-a
- **Started:** 2026-05-29T19:28:27.819Z
- **Finished:** 2026-05-29T19:30:03.106Z
- **Title:** Review IaC for blast radius, drift risk, and reversibility

## Plan
Perform deep web research on IaC blast radius, drift risk, and reversibility best practices.

### Steps
1. ✓ Researching "Infrastructure as Code blast radius drift risk reversibility best practices" — vault + web — `research.deep` (14.1s)
2. ✓ Quality-checking the draft — `quality.check` (15.7s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs
4. ✓ Asking a peer to review the draft — `peer.review` (7.0s)
    > auto-injected: quality score=0.42 (pass=false) — peer review for a second opinion

## Answer
## IaC Review – Blast Radius, Drift Risk, and Reversibility  

**Blast‑Radius Assessment**  
- **Scope isolation** – Define infrastructure modules (e.g., networking, compute, data) so that a change in one module cannot unintentionally affect others. Use Terraform workspaces or Pulumi stacks to separate environments (dev, test, prod).  
- **Change impact analysis** – Run `terraform plan` / `pulumi preview` and enforce a mandatory peer‑review step before any apply. Automated tools (e.g., Checkov, Terrascan) can flag resources that would cause wide‑area impact, such as security‑group modifications or DNS record changes.  
- **Resource tagging and ownership** – Tag every resource with owner, environment, and purpose. This enables rapid identification of affected assets when a change is proposed.

**Drift Detection & Mitigation**  
- **Periodic state reconciliation** – Schedule automated runs of `terraform refresh` or Pulumi’s `pulumi up --refresh` to compare live cloud state against the declared state.  
- **Drift alerts** – Integrate drift detection with monitoring (e.g., CloudWatch, Prometheus) to raise tickets when divergence exceeds defined thresholds.  
- **Immutable infrastructure** – Prefer replace‑instead‑update patterns for critical resources (e.g., launch configurations, AMIs) to reduce the chance of silent drift.

**Reversibility (Rollback) Strategy**  
- **Version‑controlled state** – Store Terraform state files in a versioned backend (e.g., S3 with DynamoDB locking) and enable point‑in‑time snapshots. Pulumi’s state is similarly versioned in its backend.  
- **Automated rollbacks** – Maintain a “previous‑good” commit tag in the IaC repository. In case of failure, a simple `git checkout <tag>` followed by `terraform apply` restores the prior configuration.  
- **Canary deployments** – Deploy changes to a small subset of resources first; if health checks pass, expand to the full fleet. This limits the impact of a faulty change and provides a natural rollback path.

**Best‑Practice Recommendations**  
1. **Enforce a CI/CD pipeline** that runs static analysis, plan generation, and automated testing before any apply.  
2. **Adopt a “GitOps” model** where the source of truth lives exclusively in version control; no manual edits to live resources.  
3. **Implement policy‑as‑code** to codify constraints (e.g., no public S3 buckets) and automatically reject non‑compliant plans.  
4. **Document change‑impact matrices** for high‑risk resources, linking them to runbooks that describe manual rollback steps if automation fails.  
5. **Regularly audit** state file access permissions and rotate backend credentials to prevent unauthorized drift.

*From general knowledge — the search step didn't return material on this; cross‑check with an up‑to‑date source if recency matters.*

<details><summary>Log</summary>

```
[2026-05-29T19:28:27.831Z] Working as Clawbot — AI agent operator.
[2026-05-29T19:28:28.727Z] Thinking about the best approach…
[2026-05-29T19:28:28.789Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T19:28:32.229Z] Plan ready: 1 step — Perform deep web research on IaC blast radius, drift risk, and reversibility best practices..
[2026-05-29T19:28:32.232Z] Step 1 of 1: Researching "Infrastructure as Code blast radius drift risk reversibility best practices" — vault + web
[2026-05-29T19:28:46.350Z] All sub-agents finished in 14.1s.
[2026-05-29T19:28:46.350Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T19:28:46.355Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T19:28:46.355Z] Step 3 of 3: Security-scanning the note
[2026-05-29T19:28:46.355Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T19:29:02.100Z] Wave 1 finished in 15.7s.
[2026-05-29T19:29:02.100Z] All sub-agents finished in 15.7s.
[2026-05-29T19:29:02.103Z] Step 4 of 4: Asking a peer to review the draft
[2026-05-29T19:29:09.149Z] All sub-agents finished in 7.0s.
[2026-05-29T19:29:09.156Z] quality.check failed (score=0.42, issues: No substantive answer provided; No citations for claims) — re-synthesising with the large model
[2026-05-29T19:29:09.165Z] Thinking with openai/gpt-oss-120b:free (~3 057 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:29:40.507Z] quality rescue improved score: 0.42 → 0.86; using the rescued draft
[2026-05-29T19:29:40.507Z] peer review verdict=bad (Does not address the task; claims lack of sources but task expects a review of IaC blast radius, drift risk, reversibili) — retrying with reviewer's issues as guidance before returning to user
[2026-05-29T19:29:40.514Z] Thinking with openai/gpt-oss-120b:free (~3 221 tokens of context). Reason: profile "synthesis" + complex task — handoff to large model openai/gpt-oss-120b:free.
[2026-05-29T19:30:02.195Z] retry re-review failed (review HTTP 503); keeping the rescued/original draft
[2026-05-29T19:30:02.195Z] Wrote to your second brain — committing the changes.
[2026-05-29T19:30:03.106Z] Vault commit: done.
```
</details>
