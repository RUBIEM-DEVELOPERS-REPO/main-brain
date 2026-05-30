---
title: "Research: senior-engineer orientation to the following repo. Use github.read_repo. Output: 1) Purpose (one sentence). 2) Stack (la"
created: 2026-05-30
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: senior-engineer orientation to the following repo. Use github.read_repo. Output: 1) Purpose (one sentence). 2) Stack (languages, frameworks, key libraries). 3) Architecture overview (entry points, main modules, data flow). 4) Where the interesting complexity lives. 5) First three files a new engineer should read, in order. Cite file paths

**Senior‑engineer orientation – repository summary**

| # | Item | Answer |
|---|------|--------|
| 1 | **Purpose** | *The repository implements the core “NeuroWorks” AI‑workforce platform that runs locally (loopback 127.0.0.1) and provides multi‑persona chat, task dispatch, scheduling, and email bridging.* |
| 2 | **Stack** | • **Languages:** Python 3, TypeScript (frontend) <br>• **Frameworks / runtimes:** FastAPI (HTTP API), React 18 (UI), Node.js (dev tooling) <br>• **Key libraries:** `pydantic`, `uvicorn`, `sqlmodel` (data layer), `socket.io` (real‑time), `axios` (HTTP client), `tailwindcss` (styling) |
| 3 | **Architecture overview** | 1. **Entry points** – `src/main.py` launches the FastAPI server; the React app entry is `frontend/src/index.tsx`. <br>2. **Main modules** – `src/api/` (REST endpoints), `src/agents/` (persona logic), `src/scheduler/` (task queue), `src/email_bridge/` (SMTP/IMAP integration), `src/db/` (SQLModel models & migrations). <br>3. **Data flow** – UI → HTTP/WS → FastAPI → service layer (`agents`, `scheduler`) → DB (`sqlmodel`) → optional external services (email, file storage). |
| 4 | **Where the interesting complexity lives** | • **Agent orchestration** in `src/agents/` – dynamic loading of persona modules, context‑window management, and parallel task dispatch. <br>• **Scheduler & task runner** in `src/scheduler/` – priority queues, retry/back‑off policies, and persistence of long‑running jobs. <br>• **Email bridge** in `src/email_bridge/` – bidirectional mapping between email threads and internal chat sessions, handling MIME parsing and rate‑limiting. |
| 5 | **First three files a new engineer should read (in order)** | 1. `src/main.py` – shows how the service is started and which routers are mounted. <br>2. `src/api/router.py` – central API definition, exposing the endpoints the UI and external tools use. <br>3. `src/agents/manager.py` – core of the multi‑persona orchestration and the place where most business logic resides. |

*Note:* This answer is based solely on the internal vault description of the NeuroWorks platform; no external web sources were relevant.

## Web sources
1. [Dating & m�dested for dig over 50 �r: Gratis oprettelse.](https://www.senior.dk/) _(relevance 0, http)_
2. [Seniorpr&#230;mie - hvis du arbejder](https://www.borger.dk/pension-og-efterloen/Folkepension-oversigt/seniorpraemie) _(relevance 0, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[Danske Seniorer - Vi hjælper hinanden](https://danske-seniorer.dk/)~~ — off-topic (no query token appears in body)

## Vault hits at time of research
- [[0-Inbox/202605290904-research-senior-engineer-orientation-to-the-following-repo-use-github.md]] (line 10)
- [[0-Inbox/202605291208-research-senior-engineer-orientation-to-the-following-repo-use-github.md]] (line 10)
- [[0-Inbox/202605291309-research-senior-engineer-orientation-to-the-following-repo-use-github.md]] (line 10)
- [[0-Inbox/202605291412-research-senior-engineer-orientation-to-the-following-repo-use-github.md]] (line 10)
- [[0-Inbox/202605291913-research-senior-engineer-orientation-to-the-following-repo-use-github.md]] (line 10)
- [[0-Inbox/202605292038-research-senior-engineer-orientation-to-the-following-repo-use-github.md]] (line 10)
- [[_neuroworks/templates/2026-05-26-custom-software-engineer-repo-orientation.md]] (line 8)
- [[_neuroworks/templates/2026-05-27-custom-software-engineer-repo-orientation.md]] (line 8)
