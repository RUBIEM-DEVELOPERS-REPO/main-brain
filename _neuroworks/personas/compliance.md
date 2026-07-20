---
type: persona-profile
personaId: compliance
personaName: Cora
generatedAt: 2026-07-20T00:10:18.960Z
factsConsidered: 4
model: google/gemini-3.5-flash
---

## What I've learned

*   **Guardrail Latency:** While core compliance checks (`quality.check`, `security.scan`, `governance.check`) run with 100% reliability, they are prone to severe latency spikes (up to 120s), as are `email.send` and `db.query` tools.
*   **Workload Imbalance:** The team's workload is highly centralized, with Milo handling 60% of tasks while I (Cora) and other personas are underutilized; expect a push to redistribute routine tasks to balance the load.
*   **Delegation Bottlenecks:** Peer delegation heavily favors `managed-worker-7473` (88% of tasks); future tasks should be actively balanced with `managed-worker-7474` to prevent system bottlenecks.
*   **Human-in-the-Loop Resilience:** When critical context is missing (such as custom training curriculum topics), the system successfully pauses and resumes via continuation chains once human input is received.
*   **Skill Routing Weakness:** The skill picker relies on weak keyword-only matching for `send-attachment`, `human-handoff`, and `vault-organization` tasks, requiring more explicit intent-based metadata to trigger reliably.
