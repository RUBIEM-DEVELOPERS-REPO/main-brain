---
type: job
title: Team task #2: Write 3 short social posts (LinkedIn tone) announcing: we ha
slug: team-task-2-write-3-short-social-posts-linkedin-tone-announc-000146a3
created: 2026-06-05T13:10:34.924Z
jobId: 000146a3-672f-4c0d-a17b-373520724494
status: succeeded
template: general-task
persona: product-designer
personaName: Dani
startedAt: 2026-06-05T13:09:17.429Z
finishedAt: 2026-06-05T13:10:34.924Z
---

# Team task #2: Write 3 short social posts (LinkedIn tone) announcing: we ha

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-05T13:09:17.429Z
- **Finished:** 2026-06-05T13:10:34.924Z
- **Title:** Team task #2: Write 3 short social posts (LinkedIn tone) announcing: we ha

## Inputs
```json
{
  "task": "(You are operating as AIIA Marketing Specialist, the Marketing Specialist at AI Institute Africa. Responsibilities: write social medi. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite 3 short social posts (LinkedIn tone) announcing: we have a summit coming up, on the 16th of june make me a action plan and client lead generation approach and a financial projection for the summit\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Write 3 short social posts (LinkedIn tone) announcing: we have a summit coming up, on the 16th of june make me a action plan and client lead generation approach and a financial projection for the summit",
  "teamTask": {
    "taskIndex": 1,
    "persona": "aiia-marketing-specialist",
    "route": "explicit"
  },
  "personaId": "aiia-marketing-specialist"
}
```

## Plan
Generate marketing deliverables in a single LLM step.

### Steps
1. ✓ Thinking about it — `ollama.generate` (30.3s) · model `openai/gpt-oss-20b:free`
    > Generate all requested deliverables in one LLM call.
2. ✓ Quality-checking the draft — `quality.check` (4.8s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**LinkedIn Posts (3)**  

1. 🚀 **AI Institute Africa Summit 2024 – June 16**  
   Join us for a day of thought‑leadership, innovation and collaboration across academia, industry and government. Secure your spot now: [link] #AIinAfrica #FutureTech  

2. 🌍 **Unlock Africa’s AI Potential**  
   The AI Institute Africa Summit on June 16 will bring together the brightest minds to shape policy, drive investment and accelerate sustainable growth. Early‑bird tickets are live – grab yours today: [link] #AILeadership #AfricaTech  

3. 🔥 **Shape the Future of AI in Africa**  
   Connect, collaborate and create impact at the AI Institute Africa Summit on June 16. Limited seats – book now: [link] #AIInnovation #TechSummit  

---

## Action Plan (Summit – 16 June)

| Milestone | Responsibility | Timeline | Deliverable |
|-----------|----------------|----------|-------------|
| Finalise agenda & speakers | Summit Committee | 30‑Jan | Approved program |
| Secure venue & logistics | Operations Lead | 15‑Feb | Contract signed |
| Launch registration portal | Marketing & IT | 01‑Mar | Live site |
| Promote event (social, email, partners) | Marketing | 01‑Mar – 15‑Jun | Campaign assets |
| Confirm sponsors & partners | Partnerships | 15‑Mar | Signed agreements |
| Publish speaker bios & session details | Content Team | 01‑Apr | Website updates |
| Conduct pre‑event briefing | Event Ops | 10‑Jun | Staff & volunteer guide |
| Summit day execution | All teams | 16‑Jun | Live event |
| Post‑event debrief & reporting | All teams | 17‑Jun | Lessons‑learned report |

---

## Client Lead‑Generation Approach

1. **Targeted Outreach**  
   *Identify key industry verticals (fintech, healthtech, agritech) and high‑potential SMEs.*  
   *Send personalized LinkedIn InMail and email invites highlighting summit benefits and exclusive networking opportunities.*

2. **Partnership Amplification**  
   *Collaborate with industry associations and incubators to co‑promote the event.*  
   *Leverage their member lists for bulk invitations and co‑branded content.*

3. **Content‑Driven Lead Capture**  
   *Publish a series of pre‑summit thought‑leadership posts (whitepapers, speaker interviews) with embedded registration links.*  
   *Use gated content to capture contact details and qualify leads.*

4. **Referral Incentives**  
   *Offer discounted or complimentary passes to attendees who refer two new registrants.*  
   *Track referrals via unique promo codes.*

5. **Post‑Event Follow‑Up**  
   *Send thank‑you emails with a survey and a call‑to‑action for a post‑summit workshop or partnership proposal.*  
   *Segment leads by engagement level for tailored nurturing.*

---

## Financial Projection (Summit – 16 June)

| Category | Assumptions | Estimated Cost | Revenue | Net |
|----------|-------------|----------------|---------|-----|
| **Venue & Logistics** | Mid‑tier conference centre, 200 seats | $12,000 | – | –$12,000 |
| **Speakers & Hospitality** | 10 keynote speakers, travel & meals | $8,000 | – | –$8,000 |
| **Marketing & Promotion** | LinkedIn ads, email, content | $5,000 | – | –$5,000 |
| **Technology (registration portal, live streaming)** | SaaS + support | $3,000 | – | –$3,000 |
| **Sponsorships** | 5 mid‑tier sponsors at $4,000 each | – | $20,000 | +$20,000 |
| **Tickets** | 150 attendees at $200 each | – | $30,000 | +$30,000 |
| **Miscellaneous** | Contingency 5% of total costs | $1,500 | – | –$1,500 |
| **Total** |  | **$29,500** | **$50,000** | **+$20,500** |

*Projected net profit of $20,500, assuming all 150 tickets are sold and sponsorship targets are met.*

<details><summary>Log</summary>

```
[2026-06-05T13:09:17.429Z] team-task #2 · persona=aiia-marketing-specialist · route=explicit
[2026-06-05T13:09:17.429Z] **AIIA Marketing Specialist** (Marketing Specialist at AI Institute Africa. Responsibilities: write social medi) is on this team-task.
[2026-06-05T13:09:17.439Z] Thinking about the best approach…
[2026-06-05T13:09:17.618Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-06-05T13:09:30.488Z] Plan ready: 1 step — Generate marketing deliverables in a single LLM step..
[2026-06-05T13:09:30.493Z] Running with help from 1 peer worker (capacity 5 thinking + 7 I/O sub-agents).
[2026-06-05T13:09:30.493Z] Step 1 of 1: Thinking about it
[2026-06-05T13:10:00.804Z] All sub-agents finished in 30.3s.
[2026-06-05T13:10:00.830Z] Thinking with openai/gpt-oss-20b:free (~5 063 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-06-05T13:10:30.106Z] Reviewing the draft — running quality and security checks in parallel.
[2026-06-05T13:10:30.110Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-06-05T13:10:30.110Z] Step 3 of 3: Security-scanning the note
[2026-06-05T13:10:30.110Z] Step 2 of 3: Quality-checking the draft
[2026-06-05T13:10:34.924Z] Wave 1 finished in 4.8s.
[2026-06-05T13:10:34.924Z] All sub-agents finished in 4.8s.
[2026-06-05T13:10:34.924Z] Quality check passed (98%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
