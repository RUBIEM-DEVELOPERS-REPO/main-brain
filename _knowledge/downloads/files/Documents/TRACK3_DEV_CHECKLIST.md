# Track 3: Development — System Checklist
**AI Grand Challenge 2026 | Building Functional AI-Powered Applications and Minimum Viable Products**

> **Core principle:** The product must do something real that AI makes possible — not something a spreadsheet formula or database query could do equally well.

---

## Track at a Glance

| | |
|---|---|
| **Track Focus** | Building a technically credible, AI-powered product, prototype, or MVP that responds to a defined user, institutional, market, or public-interest need |
| **Core Question** | Does it work, does it use AI appropriately, is the data position clear, and is there a real pathway to use? |
| **Primary Output** | Working prototype or technically credible MVP with architecture note, dataset statement, user interaction plan, risk note, and business model |
| **Scoring** | 100 pts total: C1 Technical (30) + C2 AI Justification (30) + C3 Dataset (20) + C4 Business Model (20) |
| **Proposal format** | PDF only, Arial/Avenir 11pt, 1.15 line spacing, 1-inch margins, max 10 pages (excl. cover + appendices) |
| **File name** | `[ProjectID]_AI4I_Proposal_Development.pdf` |

---

## 1. Product Concept and Problem Definition

- [ ] The product has a clear name
- [ ] The product is described in one or two plain-English sentences
- [ ] The target problem is clearly defined
- [ ] The intended user or beneficiary is clearly named
- [ ] The product explains why the problem matters
- [ ] The problem is a genuine public, industry, community, regulatory, or market need — not an invented scenario
- [ ] The product is framed as an AI-powered solution, not a data collection exercise or design-only output
- [ ] The submission is **not** primarily about collecting or curating data → that belongs in Track 1
- [ ] The submission is **not** primarily a visual interface or dashboard without a substantive AI product component → that belongs in Track 2
- [ ] The submission is **not** primarily a governance, compliance, audit, or pilot-readiness framework → that belongs in Track 4

> **Adjudicator test:** Can you describe the product and its user in two sentences? If not, the problem definition is not yet clear enough.

---

## 2. Strategic Alignment — Zimbabwe and National Priorities

- [ ] The product responds to a defined need in Zimbabwe or the SADC region
- [ ] The target user or beneficiary is a Zimbabwean or Southern African person, organisation, or institution
- [ ] Alignment with at least one **National AI Strategy** priority is stated and named:
  - [ ] Public sector efficiency
  - [ ] MSME and informal economy inclusion
  - [ ] Sovereign AI infrastructure
  - [ ] AI skills development
  - [ ] National data assets
- [ ] Alignment with at least one **NDS2 pillar** is stated and named:
  - [ ] Pillar 1 — Economic Growth and Stability
  - [ ] Pillar 2 — Social Development
  - [ ] Pillar 3 — Governance and Institutions
  - [ ] Pillar 4 — Infrastructure and Utilities
  - [ ] Pillar 5 — Environment and Climate
- [ ] Vision 2030 or Heritage-Based Education 5.0 connection stated where relevant
- [ ] Alignment is **specific** — naming the initiative or pillar, not a generic claim
- [ ] Product addresses at least one priority sector: fisheries, future skills, finance, tourism, agriculture, health, energy, public services, education, informal economy, or another clearly justified sector

> **Watch out:** "This product supports Zimbabwe's development" is not sufficient alignment. Name the strategy, name the pillar, explain the direct contribution.

---

## 3. AI Justification — Why AI, Why This Model

- [ ] The product explains what role AI plays in the solution
- [ ] The product explains why AI is **necessary** rather than optional, cosmetic, or replaceable by a simpler approach
- [ ] A **baseline comparison** is provided: what the non-AI alternative would look like and why it is insufficient
- [ ] The AI model or method is named (e.g. `llama-3.3-70b`, `CLIP`, `Whisper`, `LangGraph`, RAG over Qdrant, fine-tuned BERT, MobileNet)
- [ ] The rationale for choosing this model is explained — why it fits the task, data, and operating environment
- [ ] Trade-offs between performance, cost, speed, explainability, and maintainability are acknowledged
- [ ] The AI does something a standard database query, lookup table, or rule-based system cannot do adequately
- [ ] The submission does **not** force AI where simpler logic would suffice
- [ ] Model limitations are acknowledged honestly: hallucination risk, data dependency, latency, cost

> ⚠️ **CRITICAL RULE:** Applications must demonstrate a clear and technically justified need for AI. Solutions that force the use of AI where simpler database queries or rule-based logic would suffice ("sledgehammer to crack a nut") will be **heavily penalised**. This is the most common reason for a low C2 score.

---

## 4. Technical Architecture

- [ ] A system architecture overview is provided (diagram, description, or structured component list)
- [ ] Main components identified: model/AI service, application layer, storage, integrations, hosting/device assumptions
- [ ] Programming language and key frameworks/libraries stated
- [ ] Model or AI service identified — whether hosted API (OpenAI, Groq, Claude, OpenRouter), locally-run open-weight model (Ollama, llama.cpp), fine-tuned, or custom-trained
- [ ] Hosting or deployment environment described — local, cloud, on-premise, device, or hybrid
- [ ] Database or storage method described — type, schema, versioning, portability
- [ ] External integrations or APIs listed with their purpose
- [ ] Security assumptions noted — credential storage, access control
- [ ] Known constraints and dependencies disclosed
- [ ] Architecture is coherent and internally consistent — components connect logically

### CCE / ZCHPC Environment (complete if using controlled compute)

- [ ] Compute and storage quota requirements stated
- [ ] Software environment specified (Docker image, conda env, or package list with lockfile)
- [ ] GPU requirements stated (or confirmed not required)
- [ ] Reproduction steps in the CCE documented

> If **not** using the CCE, state explicitly: *"This product runs on [local server / cloud / own infrastructure]. CCE is not required."*

---

## 5. Prototype or Implementation Readiness

- [ ] A working prototype, functional demo, or MVP exists — or a technically credible implementation plan is provided
- [ ] The prototype can be demonstrated, tested, or defended through a credible technical plan
- [ ] A demo URL, Git repository link, or live demonstration is available
- [ ] Git repository shows meaningful commit history — not a single-upload dump
- [ ] Code is readable and modular — not a single monolithic file
- [ ] README or documentation explains what the product does, how to run it, and what dependencies are required
- [ ] Dependencies declared in a lockfile or manifest (`package-lock.json`, `yarn.lock`, `requirements.txt`, `pyproject.toml`, or equivalent)
- [ ] At least basic unit tests or functional tests are present and pass
- [ ] Submission explains what has been built, what is still planned, and what is required to complete and validate the product
- [ ] Prototype demonstrates core AI functionality — not only the user interface

> **What counts as a working prototype:** A demo showing an agent completing a real task, a model producing a real output from real input, or an API returning a real AI-generated result. A set of UI screenshots with no working backend is **not** sufficient.

---

## 6. Dataset Statement

- [ ] All data used in the product is clearly identified
- [ ] The source of each dataset is stated
- [ ] The lawful basis for using each dataset is explained (API terms, operator consent, open licence, own data)
- [ ] Data dictionary or field list provided where applicable
- [ ] Any simulated or synthetic data is clearly disclosed
- [ ] Where synthetic data is used, the generation method, assumptions, and limitations are explained
- [ ] Any AI-generated content used as training or evaluation data is disclosed as AI-generated
- [ ] Data still required but not yet obtained is listed with an acquisition plan
- [ ] Known data quality limitations stated honestly
- [ ] Licensing and rights for all datasets declared
- [ ] Personally identifiable information (PII) or sensitive data identified and handling explained
- [ ] Data storage method described — where it lives, how it is versioned, how it can be exported
- [ ] Data provenance is traceable — adjudicators could verify the source

> ⚠️ **Warning:** Scraped data without permission, unverified personal data, or data used without a lawful basis are grounds for disqualification. When in doubt, use open-licensed data, synthetic data, or your own organisational data and document it clearly.

---

## 7. User Interaction Plan

- [ ] Product has a defined user interaction method — web interface, mobile app, API, chatbot, workflow integration, CLI, or device
- [ ] User journey described: how a user enters, uses, and receives value from the product
- [ ] Interface or API demonstrated in prototype or described in sufficient detail
- [ ] Product is usable by the intended user — not only by developers or technical specialists
- [ ] Local language accessibility considered where relevant (Shona, Ndebele, or other local languages for Zimbabwean users)
- [ ] Mobile or low-bandwidth considerations addressed where target user is mobile-first or in a low-connectivity environment
- [ ] Interaction model is appropriate — chatbot where conversation adds value, API where integration adds value, interface where visual interaction adds value

---

## 8. Risk Note

- [ ] Material **technical risks** identified (model hallucination, API dependency failure, data quality degradation, latency)
- [ ] **Ethical risks** identified (bias in model outputs, cultural inappropriateness, misinformation, over-reliance on AI)
- [ ] **Data risks** identified (privacy exposure, provenance gaps, consent issues, data loss)
- [ ] **Security risks** identified (credential exposure, prompt injection, unauthorised access, unsafe code execution)
- [ ] **Adoption risks** identified (low digital literacy among target users, institutional resistance, inference cost at scale)
- [ ] Each identified risk has a mitigation or a frank acknowledgement that mitigation is still to be designed
- [ ] Risk note is candid — does not claim there are no significant risks
- [ ] Where human-in-the-loop (HITL) oversight is used, this is documented as a risk control
- [ ] Data Protection Act (Chapter 12:07) obligations addressed where personal data is processed

---

## 9. Business Model and Sustainability

- [ ] Intended users of the product are named
- [ ] Customers — those who would pay or commission — are identified (may differ from end users)
- [ ] Revenue or sustainability model described: subscription, usage-based, institutional licence, grant-funded, public good, or another clear model
- [ ] Operating costs estimated — AI inference costs, hosting, storage, support, maintenance
- [ ] Product can continue beyond the Grand Challenge without requiring ongoing grant funding to operate
- [ ] Pilot or validation pathway described: first real users, how product will be tested, what success looks like
- [ ] Licensing and IP ownership stated clearly
- [ ] Realistic route to continued use — through users, customers, institutional uptake, or public-good deployment

> **Inference cost note:** For products using cloud inference (OpenAI, Groq, Claude, etc.), estimate your per-user or per-mission cost. Adjudicators know AI inference can make a product unviable at scale. Show you have thought about this — local model deployment (Ollama), cost-tiered routing, or a pricing model that covers COGS. No cost analysis = lower C4 band.

---

## 10. Edge and Embedded AI *(complete only if applicable)*

> Skip this section and state *"Not applicable — this product runs on [local server / cloud]"* if you are not using edge or embedded AI.

- [ ] Target device or hardware environment named and specified
- [ ] Model size and format stated (e.g. GGUF 4-bit quantised, TensorFlow Lite, ONNX, Core ML)
- [ ] Memory requirements stated and shown to fit within device RAM (target: under 256MB for embedded systems)
- [ ] Inference latency estimated and shown to be appropriate (target: under 100ms per run for real-time applications)
- [ ] Offline capability described — how device operates without connectivity
- [ ] Power constraints addressed — battery, solar, grid, or low-power operation
- [ ] Output transmission method explained (SMS, API push, Bluetooth, LoRa, Wi-Fi, local display)
- [ ] Safe fallback described — what happens when model fails or device loses power
- [ ] Device has been tested or a hardware-in-the-loop validation plan is described

---

## 11. Asset and Licence Register

- [ ] Ownership of all original code disclosed (author or organisation)
- [ ] All third-party libraries and frameworks listed with licences (MIT, Apache 2.0, BSD, GPL, proprietary)
- [ ] All AI models listed — API access, open weights, or fine-tuned — with licence or terms of service
- [ ] All datasets listed with licence, source, and access method
- [ ] All external APIs listed with terms of service position
- [ ] Design assets, icons, fonts, images, or templates listed with licence
- [ ] Background IP (pre-existing) identified and ownership confirmed
- [ ] Foreground IP (created during/for the Grand Challenge) identified with proposed licence or ownership position
- [ ] POTRAZ's right to evaluate, demonstrate, and pilot the submission for public-interest purposes acknowledged
- [ ] Commercial use, procurement, or institutional adoption beyond the Grand Challenge requires a separate agreement — this is stated

---

## 12. Proposal Format Compliance

- [ ] Maximum **10 pages** (excluding cover page and technical appendices)
- [ ] **PDF format only** — Word (.docx) and other formats will be disqualified
- [ ] Font: **Avenir or Arial, 11pt, 1.15 line spacing, 1-inch margins** on all sides
- [ ] File named: `[ProjectID]_AI4I_Proposal_Development.pdf`
- [ ] **Cover page** included (not counted in page limit): Project Title, Track Name, Team Name, Lead Innovator Name, Date
- [ ] **Section 1** — Problem Definition & Strategic Alignment (1–2 pages): local problem, target user, National AI Strategy and NDS2 alignment
- [ ] **Section 2** — Technical Design & Product Logic (2–3 pages): architecture diagram, models used, API integrations, database schemas, CCE compute requirements
- [ ] **Section 3** — Deliverables & CCE Implementation Roadmap (2 pages): timeline, milestones, compute requirements, dependency manifests, CCE deployment plan
- [ ] **Section 4** — Compliance & Risk Mitigation (1–2 pages): ethical safeguards, DPA Chapter 12:07, consent mechanisms, model testing, cybersecurity
- [ ] **Section 5** — Sustainability & Future Adoption (1 page): cost projections, operating model, licensing, scaling pathway
- [ ] Online portal questionnaire completed
- [ ] Git repository link provided and repository has meaningful commit history
- [ ] Demo URL provided or live demo confirmed for Grand Challenge day

---

## Scoring Rubric — 100 Points Total

### C1: Technical Feasibility and Code Quality — 30 Points
*Architecture design, dependency stability, CCE readiness, code quality, documentation*

| Band | Points | % | What adjudicators look for |
|---|---|---|---|
| **Exemplary** | 27–30 | 90–100% | Highly modular, well-documented code. No security warnings. Lockfiles and clean dependency manifests present. Unit tests passing. Git history shows structured commits. README explains setup, run steps, dependencies. Architecture coherent and components connect logically. |
| **Proficient** | 18–26 | 60–80% | Solid codebase but lacks comprehensive docs or docstrings. Dependency manifest present but unlocked. Unit tests cover primary logic only. Git commits large and irregular. README present but incomplete. |
| **Basic** | 9–17 | 30–50% | Monolithic, difficult-to-read code. Dependency manifest missing. Testing unconfigured. Single-commit Git uploads. README absent or minimal. Architecture vague. |
| **Unsatisfactory** | 0–8 | 0–20% | Non-functional application. Code poorly written, unsafe, or copy-pasted. Fails compilation. No documentation. No tests. No meaningful Git history. |

---

### C2: AI Justification and Fit-for-Purpose — 30 Points
*Necessity and appropriateness of AI model, baseline comparison, no forced AI, trade-off acknowledgement*

| Band | Points | % | What adjudicators look for |
|---|---|---|---|
| **Exemplary** | 27–30 | 90–100% | Complete justification of AI integration. Team proves why a baseline or rule-based system is insufficient. Model clearly appropriate for use case. Trade-offs acknowledged. No forced AI or over-engineering. |
| **Proficient** | 18–26 | 60–80% | Solid AI integration but trade-off rationales have minor gaps. Baseline comparison present but basic. Model slightly over-specified but not egregiously. Limitations partially acknowledged. |
| **Basic** | 9–17 | 30–50% | Weak AI justification. A rule-based system or SQL query could solve the problem faster and cheaper. Forced AI evident. Model selection unexplained or arbitrary. |
| **Unsatisfactory** | 0–8 | 0–20% | Fails the justification audit. Sledgehammer-to-crack-a-nut case. AI used as a marketing label without actual utility. No explanation of why AI is needed. |

---

### C3: Dataset Provenance and Synthetic Validation — 20 Points
*Data sourcing clarity, handling safety, synthetic disclosure, limitation acknowledgement*

| Band | Points | % | What adjudicators look for |
|---|---|---|---|
| **Exemplary** | 18–20 | 90–100% | Clear dataset statement: all sources, processing, field definitions, licensing. Synthetic data generation method fully disclosed and validated. Limitations stated honestly. PII handling explained. Provenance traceable. |
| **Proficient** | 12–17 | 60–80% | Dataset statement present but lacks labelling detail. Synthetic data disclosed but validation methodology missing. Most limitations acknowledged. |
| **Basic** | 6–11 | 30–50% | Weak documentation. Sourcing unclear. Synthetic data used without generation details. Licensing absent. Limitations not addressed. |
| **Unsatisfactory** | 0–5 | 0–20% | Unsafe data sources. Provenance unverified. Synthetic data undisclosed. PII not addressed. Data used without lawful basis. |

---

### C4: Business Model and Edge Feasibility — 20 Points
*Operating cost viability, user pathways, sustainability, edge/embedded constraints where applicable*

| Band | Points | % | What adjudicators look for |
|---|---|---|---|
| **Exemplary** | 18–20 | 90–100% | Viable business model detailing operating costs (including AI inference), hosting, users, customers, and revenue/sustainability model. Pilot plan with named users and success criteria. Licensing and IP clear. Edge: models fit device RAM (< 256MB) and latency verified (< 100ms). |
| **Proficient** | 12–17 | 60–80% | Solid business model but costing trade-offs vague. Inference costs not estimated. Pilot plan without clear success criteria. Edge: specs reasonable but no hardware-in-the-loop validation. |
| **Basic** | 6–11 | 30–50% | Vague model with unrealistic or absent cost estimates. No pilot plan. Sustainability assumed. Edge: hardware specs unconfigured. |
| **Unsatisfactory** | 0–5 | 0–20% | Infeasible business model. No cost analysis. No sustainability pathway. Edge: hardware requirements ignored — system fails on target device. |

---

## Final Submission Checklist

- [ ] Working prototype or technically credible MVP ready
- [ ] Technical architecture note complete
- [ ] Dataset statement complete — all sources, synthetic data, limitations documented
- [ ] User interaction plan described
- [ ] Risk note covers technical, ethical, data, security, and adoption risks
- [ ] Business model covers users, customers, operating costs, and sustainability
- [ ] Asset and licence register complete
- [ ] Proposal in PDF format, Arial/Avenir 11pt, 1.15 line spacing, max 10 pages
- [ ] File named `[ProjectID]_AI4I_Proposal_Development.pdf`
- [ ] Git repository link available with meaningful commit history
- [ ] Demo URL available or live demo confirmed for Grand Challenge day
- [ ] Online portal questionnaire completed

---

## Suggested Scoring Summary

| Criterion | Max | Your Score | Ready? |
|---|---|---|---|
| C1 — Technical Feasibility & Code Quality | 30 | | ☐ |
| C2 — AI Justification & Fit-for-Purpose | 30 | | ☐ |
| C3 — Dataset Provenance & Synthetic Validation | 20 | | ☐ |
| C4 — Business Model & Edge Feasibility | 20 | | ☐ |
| **TOTAL** | **100** | | |

---

> **Final quality test:** The product must do something real that AI makes possible — not something a spreadsheet formula or a database query could do equally well.
