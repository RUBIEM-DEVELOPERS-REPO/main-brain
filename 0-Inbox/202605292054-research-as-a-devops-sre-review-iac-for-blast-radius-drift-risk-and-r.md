---
title: "Research: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility.

Context: Role: Custom
Title: Review IaC "
created: 2026-05-29
source: clawbot-research
validator: strict
sources_kept: 0
sources_dropped: 0
---

# Research: As a DevOps / SRE, review iac for blast radius, drift risk, and reversibility.

Context: Role: Custom
Title: Review IaC for blast radius, drift risk, and reversibility
Description: Persona-derived starter task for "Devon"

**Answer – DevOps / SRE review checklist for IaC (Infrastructure‑as‑Code)**  

Because there are no vault notes or validated web sources for this specific topic, the guidance below is based on standard industry best‑practice principles. If you later add internal documentation to the vault, we can refine the checklist to match your organization’s conventions.

| Aspect | Key questions | Typical checks / actions |
|--------|---------------|--------------------------|
| **Blast radius** | *What resources could be unintentionally impacted by a change?* <br>*Can a failure affect downstream services or production traffic?* | • Identify dependencies (e.g., VPC, security groups, IAM roles). <br>• Use “least‑privilege” and “resource‑scoping” (tags, naming conventions) to limit impact. <br>• Run a **dry‑run/plan** (e.g., `terraform plan`, `pulumi preview`) and review the diff for any resources outside the intended target. <br>• Apply **canary** or **blue‑green** deployment patterns for high‑impact changes. |
| **Drift risk** | *Will the live environment diverge from the declared state?* <br>*Are there manual steps that could introduce drift?* | • Enforce **immutable** infrastructure where possible (replace rather than modify). <br>• Schedule regular **state reconciliation** (`terraform refresh`, `pulumi up --refresh`) and alert on drift. <br>• Block ad‑hoc console changes with policy‑as‑code (e.g., OPA, Sentinel). <br>• Store the IaC state in a secure, version‑controlled backend (S3 + DynamoDB lock, remote Pulumi stack). |
| **Reversibility** | *Can the change be rolled back safely and quickly?* <br>*Is there a known rollback path for each resource type?* | • Keep **versioned** IaC files in VCS; tag releases. <br>• Use **state snapshots** before applying changes (e.g., `terraform state pull` → archive). <br>• Define explicit **destroy‑or‑revert** steps in the pipeline (e.g., `terraform apply -target=...` to revert a subset). <br>• Test rollback in a staging environment; automate verification (smoke tests, health checks). |
| **General safety nets** | *How do we ensure changes are reviewed and auditable?* | • Require **peer review / PR approval** for all IaC changes. <br>• Integrate **CI checks**: linting (`tflint`, `checkov`), policy compliance, and plan diff review. <br>• Enable **audit logging** on the IaC backend and cloud provider. |

### Quick “review” workflow

1. **Plan** – Run the IaC tool’s planning command; capture the output.  
2. **Diff analysis** – Highlight any resources outside the intended scope (blast radius).  
3. **Drift check** – Compare current state to declared state; flag mismatches.  
4. **Approval** – Submit plan for peer review; enforce policy checks.  
5. **Apply with safeguards** – Use a lock (e.g., DynamoDB) and enable a rollback snapshot.  
6. **Post‑apply validation** – Run automated health checks; if failures, trigger rollback using the saved snapshot.  

---

*If you add internal guidelines or examples to the vault, I can incorporate them into a more tailored checklist.*

## Web sources
_(no sources survived validation)_

## Vault hits at time of research
_(none)_
