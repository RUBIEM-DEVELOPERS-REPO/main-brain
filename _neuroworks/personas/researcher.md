---
type: persona-profile
personaId: researcher
personaName: Researcher
generatedAt: 2026-07-23T00:01:33.718Z
factsConsidered: 4
model: google/gemini-3.5-flash
---

## What I've learned

* **Workload Rebalancing:** The Researcher persona is currently heavily underutilized compared to Neuro; expect an operational shift to route more research-heavy tasks directly to this profile.
* **Deep Research Latency:** The `research.deep` tool is highly reliable (0% failure rate) but slow, averaging over 52 seconds and peaking near 2 minutes; plan task execution times accordingly.
* **Tooling Guardrails & Failures:** Compliance and quality guardrails (`quality.check`, `security.scan`, `governance.check`) run flawlessly, but avoid or double-check configurations for `email.send` and `fs.read_external` as they are currently experiencing high failure rates.
* **Delegation Patterns:** When delegating sub-tasks, `managed-worker-7473` is the heavily favored and trusted worker node, receiving over 70% of all delegations.
* **Active Business Context:** Key recurring domains include the AI Invoicing Assistant launch (focusing on instant creation, accounting sync, and error reduction) and IT procurement tracking (such as the $87,000 laptop TCO budget).
