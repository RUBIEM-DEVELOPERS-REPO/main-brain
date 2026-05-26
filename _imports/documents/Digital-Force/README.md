# ASMIA — Autonomous Social Media Intelligence Agency

> AI-powered Social Media Operating System for **AI Institute Africa**

## Architecture

- **Frontend**: Next.js 14 (App Router)
- **Backend**: FastAPI (Python)
- **LLM**: Groq (multi-model with fallback)
- **Vector DB**: Qdrant (semantic memory)
- **Publishing**: Zernio API (multi-platform)
- **Database**: SQLite (dev) → PostgreSQL (production)

## Quick Start

### Backend

```bash
cd backend
pip install -r requirements.txt
cp ../.env.example ../.env  # Then fill in your API keys
uvicorn main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### API Docs

Once the backend is running, visit: `http://localhost:8000/docs`

## Project Structure

```
ASMIA/
├── backend/          # FastAPI + all service modules
│   ├── api/          # REST endpoints
│   ├── auth/         # JWT + encryption
│   ├── schemas/      # Pydantic models
│   └── services/     # Core business logic
│       ├── memory/       # Qdrant integration
│       ├── models/       # Groq model router
│       ├── strategy/     # Content strategy engine
│       ├── content/      # Content generation
│       ├── visual/       # Image/carousel generation
│       ├── scoring/      # Confidence scoring
│       ├── guardrails/   # Safety checks
│       ├── approval/     # Approval workflow
│       ├── publisher/    # Zernio integration
│       ├── scheduler/    # Queue engine
│       ├── analytics/    # Performance tracking
│       ├── learning/     # RL feedback loop
│       └── orchestrator/ # Autonomous agent loop
├── frontend/         # Next.js admin dashboard
└── .env.example      # Environment template
```

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `GROQ_API_KEY` — Groq LLM access
- `QDRANT_API_KEY` — Vector memory
- `ZERNIO_*_API_KEY` — Platform publishing
- `JWT_SECRET_KEY` — Auth security
