# DPA System Architecture Blueprint

This blueprint outlines the complete system architecture, module boundaries, data flows, and technological frameworks for the **Data Protection Automation (DPA) System**.

---

## 1. Architectural Philosophy: The Decoupled Modular Monolith

To support fast development cycles, strong type safety, and painless deployment, the DPA System is architected as a **Modular Monolith**.

### Why Modular Monolith?
*   **High Development Velocity**: Direct system calls between modules instead of asynchronous service-to-service RPC or HTTP overhead.
*   **Decoupled Boundaries**: Modules are organized with strict interfaces and data encapsulation. If a specific module (e.g., the high-load Rule Engine) needs to scale independently in the future, it can be extracted into an independent microservice with minimal code changes.
*   **Data Consistency**: Runs inside a single database transaction space, eliminating the complexity of Distributed Sagas or two-phase commits.

---

## 2. Component breakdown & Module Boundaries

The system is separated into five core domain modules. Each domain operates its own folder containing its controller, service layer, repository, and tests.

```text
src/modules/
├── assessment/     # Domain 1: Intake and form definition
├── rule-engine/    # Domain 2: Logical ruleset evaluation
├── workflow/       # Domain 3: Assurance states and SLA timers
├── collaboration/  # Domain 4: Threaded chats & evidence uploads
└── audit-log/      # Domain 5: Immutable action validation
```

### Module 1: Intake & Assessment (PIA, TIA, DSA)
*   **Responsibilities**: 
    *   Defines dynamic form questionnaire schemas (fields, types, conditional branches).
    *   Saves intake draft sessions and submitted assessments.
    *   Exposes endpoints to retrieve form layouts and fetch submission histories.
*   **Interface**: Exposes `getSubmissionById(id)` for the Rule and Workflow Engines.

### Module 2: Automated Rule & Evaluation Engine
*   **Responsibilities**:
    *   Parses completed assessments and matches them against JSON-based rules (e.g., GDPR, TIA safeguards, DSA requirements).
    *   Evaluates conditions to produce compliance flags and risk levels (Low, Medium, High).
    *   Automatically tags corresponding compliance requirements with initial statuses (e.g., triggering a TIA is auto-flagged as High Risk).
*   **Interface**: Exposes `evaluateAssessment(assessmentPayload)` which returns an array of matched rules, risk metrics, and control markers.

### Module 3: Workflow & SLA Engine
*   **Responsibilities**:
    *   Orchestrates the **Assurance Lifecycle** states: `In Discussion (Red)`, `Path to Green (Yellow)`, `Assurance Ready (Green)`, and `Not Applicable (Gray)`.
    *   Routes compliance approvals to authorized roles (e.g., DPO, Risk Management).
    *   Manages SLA countdown timers for Yellow controls and triggers background crons to auto-escalate overdue items.
*   **Interface**: Exposes `transitionStatus(controlId, nextState, actorContext)`.

### Module 4: Collaboration & Evidence Portal
*   **Responsibilities**:
    *   Enables users to leave comments, reply to threads, and assign tasks on specific compliance controls.
    *   Processes file uploads representing control verification evidence (PDF, PNG, config dumps) and links them to the compliance item.
    *   Dispatches webhooks to external collaborative systems (e.g., Slack or Teams channels).
*   **Interface**: Exposes `addComment(controlId, commentText)` and `attachEvidence(controlId, fileMeta)`.

### Module 5: Audit Log & Traceability Module
*   **Responsibilities**:
    *   Hooks into database transactions to record immutable entries for every system change.
    *   Ensures that every audit row logs: `ActorId`, `Timestamp`, `ActionTaken`, `TargetObject`, `Outcome`, and the explicit `DecisionJustification`.
    *   Provides high-performance search queries for compliance reporting and auditors.
*   **Interface**: Exposes `logEvent(eventPayload)` as a system-wide middleware/decorator.

---

## 3. System Data Flow & State Transitions

The diagram below details the journey of a compliance item from user submission to audit tracking and reporting.

```mermaid
sequenceDiagram
    autonumber
    actor User as DPA Intake User
    actor Approver as Risk Owner / DPO
    participant Intake as Assessment Module
    participant Rule as Rule Engine
    participant Work as Workflow & SLA Engine
    participant Collab as Collaboration Module
    participant Audit as Audit Log Module
    database DB as PostgreSQL DB

    User->>Intake: Submits Assessment Form (PIA/TIA/DSA)
    Intake->>DB: Persist Assessment Submission
    Intake->>Rule: Request Evaluation
    Rule->>Rule: Execute rulesets against inputs
    Rule->>Work: Trigger Workflow Instantiation (status: RED)
    Work->>DB: Save Workflow & Initial Control Statuses
    Work-->>User: Display Intake Summary (Dashboard showing RED/YELLOW)
    
    Note over User, Collab: Step-by-step remediation of Yellow/Red items
    User->>Collab: Comment on risk controls & upload Evidence PDF
    Collab->>DB: Store comment & link evidence files
    Collab->>Work: Request transition to ASSURANCE_READY (Green)
    
    Work->>Approver: Request Sign-off Approval
    Approver->>Work: Approve Evidence (Provide signoff justification)
    Work->>Work: Transition status to ASSURANCE_READY
    Work->>Audit: Record transition & signoff justification
    Audit->>DB: Write Immutable Event Log
    Work-->>User: Refresh Dashboard (Control turns GREEN)
```

---

## 4. Technology Stack & Rationale

*   **Backend Runtime (Node.js & TypeScript)**: Node.js handles fast, parallel I/O and offers a mature packages environment. TypeScript adds strong type-safety, which guarantees compile-time checks for rule variables, database entities, and API payloads.
*   **Database (PostgreSQL)**: An ACID-compliant relational engine is necessary to enforce constraints, support secure database transactions (necessary for auditing), and store structured relations between users, rules, workflows, and logs.
*   **Database ORM (Prisma)**: Provides a declarative schema-first interface, automatic SQL migrations, and typesafe auto-generated query clients, cutting down boilerplate code.
*   **Frontend Library (React & TypeScript)**: React's component model enables highly interactive web pages. Type definitions guarantee that frontend payloads match backend API models exactly.
*   **Styling System (Vanilla CSS)**: Hand-crafted styles using standard CSS files rather than Tailwind or CSS-in-JS. This allows complete freedom to design premium, glassmorphic dark-mode dashboards with curated HSL color maps and optimized animations.
*   **Testing Stack (Vitest, Supertest, Playwright)**:
    *   *Vitest*: Fast, modern execution for unit testing rule algorithms and isolated state machine logic.
    *   *Supertest*: Direct integration testing of HTTP controllers without requiring a listening socket.
    *   *Playwright*: Full-browser end-to-end testing, simulating real mouse clicks, file uploads, and dashboard state updates.

---

## 5. Deployment & Environment Configurations

### Multi-Environment Pipeline
The DPA System utilizes three primary environments to ensure high stability:
1.  **Development**: Local workspaces utilizing automated nodemon reloading, a Docker-backed PostgreSQL service, and instant frontend hot module replacement (HMR).
2.  **Staging**: A mirrored cloud staging instance running on Kubernetes/ECS. Automated end-to-end contract tests and contract test suites execute here on every release candidate.
3.  **Production**: High-availability configuration utilizing RDS database clusters, strict environment variable injection, secure IAM boundaries, and read-only container volumes.

### Baseline Local Setup: Docker Compose
Developers launch an isolated local database server using the following baseline docker setup:

```yaml
version: '3.8'

services:
  dpa-postgres:
    image: postgres:15-alpine
    container_name: dpa_postgres
    restart: always
    environment:
      POSTGRES_USER: dpa_admin
      POSTGRES_PASSWORD: dpa_secure_password
      POSTGRES_DB: dpa_system
    ports:
      - "5432:5432"
    volumes:
      - dpa_postgres_data:/var/lib/postgresql/data

volumes:
  dpa_postgres_data:
```
