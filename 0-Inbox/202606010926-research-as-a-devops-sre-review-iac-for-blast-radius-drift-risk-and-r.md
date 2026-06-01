---
title: "Research: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility"
created: 2026-06-01
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility

**How a DevOps / SRE can review IaC for *blast radius*, *drift risk*, and *reversibility***  

| Review Dimension | What to look for | Practical checks | Why it matters |
|------------------|------------------|------------------|----------------|
| **Blast radius** | The maximum impact a single change can cause if it’s applied incorrectly. | • Scope resources in each module – keep them as small as possible (e.g., one VPC per module, separate DB‑instance modules). <br>• Use **resource‑level targeting** (`-target` in Terraform) only for emergency fixes; avoid broad `apply` on whole state. <br>• Apply **policy as code** (OPA, Sentinel) that flags resources that would affect > N instances or cross‑account boundaries. | Limits outage scope; a faulty change won’t cascade to unrelated services. |
| **Drift risk** | Divergence between the declared IaC state and the actual live infrastructure. | • Run **regular drift detection** (`terraform plan -detailed-exitcode`, CloudFormation drift detection, Azure Resource Graph queries). <br>• Enforce **immutable infrastructure** – replace rather than modify long‑lived resources (e.g., use new AMI IDs instead of in‑place updates). <br>• Store **state files securely** (remote backend with versioning) and enable **state locking** to prevent concurrent drift. | Prevents “unknown‑state” bugs that can cause security gaps or performance regressions. |
| **Reversibility** | Ability to roll back a change cleanly if it introduces problems. | • Commit every IaC change to **version control** and tag releases. <br>• Maintain **change‑sets** (Terraform workspaces, CloudFormation change‑sets) that can be previewed before apply. <br>• Automate **destroy‑and‑re‑apply** pipelines for non‑critical resources, and keep **backup snapshots** for stateful services (RDS snapshots, disk images). | Guarantees fast recovery (Mean Time to Recover) and reduces change‑failure rate. |

### Suggested Review Workflow  

1. **Pre‑merge lint & policy check** – run static analysis (e.g., `tflint`, `checkov`) and policy‑as‑code tests.  
2. **Impact analysis** – generate a dependency graph (Terraform graph, CloudFormation `--graph`) to see which downstream resources would be touched.  
3. **Dry‑run** – `plan` with `-out=plan.out`; review the diff for any resources outside the intended scope (blast radius).  
4. **Drift detection** – schedule a nightly job that runs `plan -detailed-exitcode`; alert if exit code 2 (drift) appears.  
5. **Apply in a controlled environment** – first to a **sandbox** or **canary** environment; verify that the state matches expectations.  
6. **Post‑apply verification** – run automated tests (smoke, integration) and confirm that no unintended resources were created/modified.  
7. **Rollback readiness** – keep the previous state file version and a reversible change‑set; if the apply fails, execute `terraform apply previous_plan.out` or run the stored destroy‑and‑re‑apply script.  

### Evidence  

The only vault entries that directly reference this task are the two research notes titled “Research: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility” (found in `0-Inbox/202605292054-research-as-a-devops-sre-review-iac-for-blast-radius-drift-risk-and-r.md` and `0-Inbox/202605301803-research-as-a-devops-sre-review-iac-for-blast-radius-drift-risk-and-r.md`) [Vault]. No further details are provided, so the checklist above synthesizes standard IaC best‑practices that align with the research intent.  

*If you need more specific guidance drawn from the vault’s internal notes, let me know and I can pull the exact excerpts.*

## Web sources
1. [DevOps Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/devops/devops-tutorial/) _(relevance 11, http)_
2. [DevOps - Wikipedia](https://en.wikipedia.org/wiki/DevOps) _(relevance 10, http)_
3. [Azure DevOps | Microsoft Azure](https://azure.microsoft.com/en-us/products/devops/?msockid=1ce71c8fb291648f330a0be4b3086592) _(relevance 7, http)_

## Vault hits at time of research
- [[0-Inbox/202605292054-research-as-a-devops-sre-review-iac-for-blast-radius-drift-risk-and-r.md]] (line 2)
- [[0-Inbox/202605301803-research-as-a-devops-sre-review-iac-for-blast-radius-drift-risk-and-r.md]] (line 2)
