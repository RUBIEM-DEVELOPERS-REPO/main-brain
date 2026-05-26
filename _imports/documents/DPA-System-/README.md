# Data Protection Automation (DPA) System

An enterprise-grade **Data Protection Automation (DPA) System** designed to streamline risk assessments (PIA, TIA, DSA), evaluate automated compliance rules (GDPR, DSA, AI Governance), and manage remediation workflows using an **Assurance-Driven Compliance Framework**.

---

## 🚀 Key Features

*   📝 **Dynamic Intake & Assessments**: Branching intake forms for Privacy Impact Assessments (PIA), Transfer Impact Assessments (TIA), and Digital Services Act (DSA) compliance.
*   🧠 **Automated Rule & Risk Engine**: Evaluates regulatory rulesets to flag high-risk transfers, automated profiling, and illegal content notices.
*   🟢 **Assurance-Driven Workflows**: Tracks risk remediation through status states: `In Discussion (Red)`, `Path to Green (Yellow)`, `Assurance Ready (Green)`, and `Not Applicable (Gray)`.
*   💬 **Collaboration & Evidence Workspace**: Direct comment threads and evidence uploads on individual risk controls to ensure alignment before signoff.
*   📋 **Immutable Audit Trails**: Captures complete system logs containing Actor, Time, Action, Object, and Outcome with detailed decision justification.

---

## 🛠️ Technology Stack

*   **Frontend**: React (Vite-based) + TypeScript + Vanilla CSS
*   **Backend**: Node.js + TypeScript + Express (or Fastify)
*   **Database & ORM**: PostgreSQL + Prisma ORM
*   **Testing Suite**: Vitest (Unit/Integration), Supertest (API), Playwright (E2E)

---

## 📂 Repository Structure

The DPA System uses a **Modular Monolith** pattern inside a monorepo, grouping features by domain to ensure high decoupling and ease of scaling.

```text
DPA-System/
├── docs/                      # Architectural assets & blueprints
│   └── architecture_blueprint.md
├── backend/                   # Backend services (Node.js + TS)
│   ├── src/
│   │   ├── modules/           # Decentralized feature domains
│   │   │   ├── assessment/    # PIA, TIA, DSA dynamic intake logic
│   │   │   ├── rule-engine/   # Automated rules and risk evaluation
│   │   │   ├── workflow/      # SLA, approvals, and assurance states
│   │   │   ├── collaboration/ # Evidence uploading, commenting
│   │   │   └── audit-log/     # Immutable auditing hooks
│   │   ├── server.ts          # Server gateway & configurations
│   │   └── router.ts          # Root API routing
│   ├── prisma/                # DB schema & migrations
│   │   └── schema.prisma
│   └── package.json
├── frontend/                  # UI Application (React + Vite + TS)
│   ├── src/
│   │   ├── components/        # Sleek UI widgets (Vanilla CSS)
│   │   ├── views/             # Major pages (Intake, Heatmap Dashboard)
│   │   └── App.tsx
│   └── package.json
└── package.json               # Monorepo workspaces & build pipelines
```

---

## 🚀 Quick Start

### Prerequisites
*   Node.js (v18+)
*   Docker (for local PostgreSQL database)

### Installation
1. Clone the repository and navigate to the directory:
   ```bash
   cd DPA-System
   ```
2. Install dependencies for all workspaces:
   ```bash
   npm install
   ```
3. Set up the local PostgreSQL database and run migrations:
   ```bash
   npm run db:up
   npm run db:migrate
   ```
4. Start both the backend and frontend services in development mode:
   ```bash
   npm run dev
   ```

---

## 🧪 Testing Strategy

Following the [DPA System Testing Strategy](file:///C:/Users/Arthur%20Magaya/Downloads/dpa_system_testing_strategy_for_claude.md), the codebase enforces robust test coverage at each phase:

*   **Unit Tests**: Run vitest unit tests (e.g., rule evaluator logic).
    ```bash
    npm run test:unit
    ```
*   **Integration Tests**: Run API-to-database interaction and workflow transition tests.
    ```bash
    npm run test:integration
    ```
*   **End-to-End (E2E) Tests**: Execute Playwright journeys (full assessment to final Green signoff).
    ```bash
    npm run test:e2e
    ```
*   **Coverage Reports**: Validate that code meets core coverage thresholds (90% rule engine, 85% workflow engine).
    ```bash
    npm run test:coverage
    ```

---

## 📄 License
Enterprise proprietary asset. All rights reserved.
