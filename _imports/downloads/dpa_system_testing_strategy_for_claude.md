# DPA System Testing Strategy for Claude

## Purpose

This document tells Claude **how to test the system continuously while building it** so quality is verified phase by phase, not only at the end.

The goal is to make Claude behave like a disciplined engineer:
- write code
- write tests immediately
- run tests after each change
- fix failures before moving on
- keep regression coverage growing over time

---

## 1. Core Testing Principles

Claude must follow these rules throughout implementation:

1. **Test as you build**
   - Every new module must include tests in the same phase it is created.
   - No major component should be considered complete without passing tests.

2. **Prefer small feedback loops**
   - After each feature, run the narrowest useful test set first.
   - Then run broader integration/regression tests.

3. **Write tests before or alongside implementation**
   - For decision logic, workflows, APIs, and critical calculations, Claude should define expected behavior first.

4. **Protect against regressions**
   - Every bug fixed must get a regression test.

5. **Test both happy path and failure path**
   - Approvals, rule evaluation, API validation, and workflows must all test valid, invalid, and edge conditions.

6. **Keep tests deterministic**
   - Avoid flaky tests.
   - Mock time, IDs, external services, and random outputs where needed.

7. **Do not move to the next phase with failing tests**
   - If tests fail, Claude must fix or explicitly isolate the issue before continuing.

---

## 2. Testing Pyramid to Follow

Claude should use this testing mix:

### 2.1 Unit Tests
Use for:
- rule engine logic
- risk scoring
- validators
- utility functions
- state transitions
- retention calculations

**Goal:** very fast, high coverage, run constantly.

### 2.2 Integration Tests
Use for:
- API + database interaction
- workflow engine + rule engine interaction
- approval processing
- audit log generation
- deletion orchestration across services

**Goal:** verify components work together correctly.

### 2.3 End-to-End Tests
Use for:
- full assessment submission
- rule evaluation
- approval workflow
- final decision generation
- dashboard visibility
- deletion lifecycle flow

**Goal:** verify the real business journey works.

### 2.4 Regression Tests
Use for:
- every fixed bug
- every previously broken workflow
- critical compliance scenarios

**Goal:** ensure old problems never reappear.

### 2.5 Contract Tests
Use for:
- service-to-service APIs
- external connectors
- webhook/event payloads

**Goal:** keep integrations stable while the system evolves.

---

## 3. Best Testing Methods by System Area

## 3.1 Rule Engine Testing

This is the highest-value test target.

### Test methods
- table-driven tests
- scenario-based assertions
- boundary tests
- rule conflict tests
- precedence tests

### Claude must verify
- correct rule triggers
- correct outputs
- no unexpected rule firing
- rule priority works
- conflicting rules resolve correctly
- missing fields are handled safely

### Example scenarios
- personal data + marketing => consent required
- AI + credit scoring => high risk
- data outside EEA => trigger TIA
- hosting + public content => DSA workflow required
- retention expired => deletion workflow triggered

### Best practice
Represent rules as structured fixtures and test them in batches.

---

## 3.2 Workflow Engine Testing

### Test methods
- state machine tests
- transition tests
- approval routing tests
- SLA timer tests
- escalation tests

### Claude must verify
- workflow starts in correct state
- only valid transitions are allowed
- invalid transitions fail safely
- approvals route to the right role
- escalations happen when deadlines expire
- rejection paths terminate correctly

### Key cases
- approve
- reject
- request changes
- timeout/escalation
- multi-approver sequence
- country-specific approval path

---

## 3.3 API Testing

### Test methods
- endpoint tests
- schema validation tests
- auth tests
- idempotency tests
- negative input tests

### Claude must verify
- request validation works
- response schema is correct
- unauthorized users are blocked
- malformed payloads return proper errors
- duplicate requests do not corrupt state
- audit logs are created for critical actions

### Minimum API test coverage
- create assessment
- update assessment
- evaluate rules
- submit for approval
- approve/reject
- fetch decision history
- fetch audit logs

---

## 3.4 Database Testing

### Test methods
- migration tests
- constraint tests
- persistence tests
- cascade behavior tests
- soft delete / hard delete tests

### Claude must verify
- migrations run cleanly from scratch
- schema constraints prevent invalid records
- relationships are preserved
- retention metadata is stored correctly
- deletion actions do not corrupt audit history

### Best practice
Run tests against an isolated test database on every cycle.

---

## 3.5 Frontend Testing

### Test methods
- component tests
- form validation tests
- user-flow tests
- accessibility smoke tests

### Claude must verify
- dynamic forms render correctly
- required fields enforce validation
- branching questions appear correctly
- approval actions update UI state
- error messages appear clearly
- dashboards show correct results

### Priorities
Test the most business-critical screens first:
- assessment intake
- rule outcome display
- approval screen
- audit history screen

---

## 3.6 Audit and Logging Testing

### Test methods
- event emission tests
- immutable log tests
- traceability tests

### Claude must verify
- every key action creates an audit entry
- entries contain actor, time, action, object, outcome
- decision reasoning is recorded
- logs cannot be silently overwritten
- workflow history matches audit history

---

## 3.7 Integration Testing for External Systems

### Test methods
- mocked integration tests
- sandbox connector tests
- contract tests

### Claude must verify
- connector failures are handled gracefully
- retries behave correctly
- invalid external payloads do not break the system
- connector output is normalized before use
- external deletion or discovery requests are traceable

### Best practice
Use mocks for development, then run a smaller set of connector contract tests.

---

## 4. Testing by Project Phase

## Phase 1: Architecture
Claude should test by:
- validating component boundaries logically
- checking that responsibilities are not duplicated
- mapping each requirement to a component

**Deliverable test:** architecture coverage matrix

---

## Phase 2: Data Modeling
Claude should test by:
- validating schema against use cases
- testing migrations
- inserting sample records
- verifying constraints and relationships

**Deliverable test:** schema smoke test + migration test

---

## Phase 3: Rule Engine
Claude should test by:
- creating rule fixtures
- building table-driven unit tests
- validating decision outputs for all major scenarios

**Deliverable test:** rule suite with high branch coverage

---

## Phase 4: Workflow Engine
Claude should test by:
- verifying state transitions
- simulating approvals/rejections
- testing escalation timers with mocked clocks

**Deliverable test:** state machine and routing tests

---

## Phase 5: Backend APIs
Claude should test by:
- endpoint tests
- auth tests
- integration tests with database
- error path tests

**Deliverable test:** API test suite + coverage report

---

## Phase 6: Frontend UI
Claude should test by:
- component rendering tests
- form flow tests
- major user journey tests

**Deliverable test:** UI test suite

---

## Phase 7: Integrations
Claude should test by:
- mock-based integration tests
- contract tests
- failure/retry tests

**Deliverable test:** connector reliability suite

---

## Phase 8: Compliance Logic
Claude should test by:
- validating regulatory scenarios
- ensuring rules map to requirements
- testing exceptions and special cases

**Deliverable test:** compliance scenario pack

---

## Phase 9: Audit & Logging
Claude should test by:
- confirming every critical action emits auditable events
- checking trace reconstruction from logs

**Deliverable test:** audit completeness suite

---

## Phase 10: Deployment
Claude should test by:
- smoke tests in deployed environment
- health checks
- migration-on-start validation
- environment configuration validation

**Deliverable test:** production smoke checklist

---

## 5. Test-First Scenario Packs Claude Should Maintain

Claude should keep a reusable folder of test scenarios.

## 5.1 Privacy Scenario Pack
Examples:
- consent required
- consent missing
- legitimate interest accepted
- special category data requires escalation
- retention expired
- deletion blocked by legal hold

## 5.2 DSA Scenario Pack
Examples:
- hosting service with public upload
- notice submitted
- illegal content flagged
- complaint submitted
- trusted flagger priority path
- statement of reasons generated

## 5.3 TIA Scenario Pack
Examples:
- EEA-only processing
- UK transfer
- USA transfer
- encrypted transfer with safeguards
- transfer blocked due to insufficient safeguards

## 5.4 AI Governance Scenario Pack
Examples:
- recommender system
- chatbot
- credit scoring
- biometric use
- HR decision support
- no-AI path

---

## 6. Best Way for Claude to Work in Practice

For each feature Claude builds, it should follow this loop:

1. define expected behavior
2. write or update tests
3. implement the feature
4. run unit tests
5. run integration tests if affected
6. inspect failures
7. fix failures
8. rerun tests
9. add regression tests for bugs found
10. only then move on

---

## 7. Minimum Test Commands Claude Should Maintain

Claude should maintain commands such as:

```bash
# unit tests
npm test
# or
pytest -q

# integration tests
npm run test:integration
# or
pytest tests/integration -q

# e2e tests
npm run test:e2e

# coverage
npm run test:coverage
# or
pytest --cov=src --cov-report=term-missing
```

Claude should keep these commands working throughout the project.

---

## 8. Coverage Targets

Suggested minimums:

- Rule engine: **90%+**
- Workflow engine: **85%+**
- API layer: **80%+**
- Critical frontend flows: **75%+**
- Overall MVP: focus on **critical path coverage**, not vanity numbers

Important:
Coverage is useful, but **scenario quality matters more than raw percentage**.

---

## 9. What Claude Must Test Before Marking a Phase Complete

A phase is complete only if:

- all tests for that phase pass
- no critical regression is open
- core negative paths are tested
- auditability is preserved
- outputs match requirements

---

## 10. Anti-Patterns Claude Must Avoid

Claude must avoid:

- writing code without tests for core logic
- relying only on manual reasoning instead of executable tests
- testing only happy paths
- using brittle selectors in frontend tests
- allowing flaky time-based or async tests
- moving forward with skipped failures
- mocking everything so heavily that real integration breaks are hidden

---

## 11. Best Recommended Test Stack

If using **Node.js / TypeScript**:
- Unit/Integration: **Vitest** or **Jest**
- API: **Supertest**
- E2E: **Playwright**
- Contract tests: **Pact** or schema validation
- Coverage: built-in coverage tools

If using **Python**:
- Unit/Integration: **pytest**
- API: **pytest + httpx/TestClient**
- E2E: **Playwright**
- Coverage: **pytest-cov**
- Mocking: **pytest-mock**

Database:
- PostgreSQL test instance or Docker test container

---

## 12. Final Instruction for Claude

Claude must behave as if **testing is part of implementation, not a separate phase**.

For every phase:
- create tests
- run tests
- fix issues
- expand regression suite
- then continue

The system should always remain in a **working, testable state**.

## Final Command

Follow this testing strategy while building the DPA System, and include:
- tests for every major module
- regression tests for every bug
- continuous validation after every phase
- a final end-to-end test of the complete MVP
