---
type: job
title: Team task #2: Sketch an approach to add per-IP rate limiting to an Express
slug: team-task-2-sketch-an-approach-to-add-per-ip-rate-limiting-t-94fe144d
created: 2026-05-28T13:36:21.910Z
jobId: 94fe144d-4ff8-46eb-aa03-d8de10396d26
status: succeeded
template: general-task
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-28T13:35:19.183Z
finishedAt: 2026-05-28T13:36:21.909Z
---

# Team task #2: Sketch an approach to add per-IP rate limiting to an Express

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-05-28T13:35:19.183Z
- **Finished:** 2026-05-28T13:36:21.909Z
- **Title:** Team task #2: Sketch an approach to add per-IP rate limiting to an Express

## Inputs
```json
{
  "task": "(You are operating as Sam, the Software Engineer. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nSketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the stack, and 3 edge cases to handle.\n\n**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for, produce N. If A/B/C are named, reference A, B, AND C. Honor format directives exactly. Never silently drop or substitute — if you cannot address one, say so explicitly.",
  "userText": "Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the stack, and 3 edge cases to handle.",
  "teamTask": {
    "taskIndex": 1,
    "persona": "software-engineer",
    "route": "explicit"
  },
  "personaId": "software-engineer"
}
```

## Plan
Default research plan for: Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the stack, and 3 edge cases to handle.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for,

### Steps
1. ✓ Researching "Sketch an approach to add per-IP rate limiting to an Express API. Include the mi…" — vault + web — `research.deep` (44.7s)
    > default fallback: search vault + web, synthesise, capture findings to 0-Inbox/
2. ✓ Quality-checking the draft — `quality.check` (4.0s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
**Per‑IP rate limiting for an Express API**

---

### 1. Middleware shape  

```js
// rateLimiter.js
const Redis = require('ioredis');
const redis = new Redis();                 // shared Redis client

// configurable limits
const WINDOW_MS   = 15 * 60 * 1000; // 15 min
const MAX_REQUEST = 100;           // requests per window

module.exports = async function rateLimiter(req, res, next) {
  const ip   = req.ip;                     // Express already normalises X‑Forwarded‑For
  const key  = `rl:${ip}`;                 // Redis key per IP
  const now  = Date.now();

  // Increment the counter atomically
  const count = await redis.incr(key);

  // On first hit set the TTL to the window length
  if (count === 1) {
    await redis.pexpire(key, WINDOW_MS);
  }

  if (count > MAX_REQUEST) {
    const ttl = await redis.pttl(key);     // ms left in the window
    res.set('Retry-After', Math.ceil(ttl / 1000));
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: Math.ceil(ttl / 1000)   // seconds
    });
  }

  // optional: expose remaining quota for logging / headers
  const ttl = await redis.pttl(key);
  res.set('X-RateLimit-Limit', MAX_REQUEST);
  res.set('X-RateLimit-Remaining', MAX_REQUEST - count);
  res.set('X-RateLimit-Reset', Math.ceil((now + ttl) / 1000));

  next();
};
```

*The shape follows the classic Express middleware signature `(req, res, next)` and uses Redis for a distributed, crash‑resistant counter – the pattern recommended for production‑grade limits [3].*

---

### 2. Where it sits in the stack  

```js
const express = require('express');
const app = express();

app.use(express.json());          // body parsers, cors, etc.
app.use(require('./rateLimiter')); // <-- global per‑IP limiter
// or app.use('/api', require('./rateLimiter')); // limit only API routes

// route definitions …
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
```

*Place the limiter **after** generic parsers but **before** any route handlers so every request is counted, exactly as the “apply the rate limiter to all requests” example shows [3].*

---

### 3. Three edge‑case handling strategies  

| Edge case | Why it matters | How to handle in the middleware |
|-----------|----------------|---------------------------------|
| **Trusted internal services** (e.g., health‑checks, micro‑service calls) | They may exceed the public limit and cause self‑denial of service. | Detect a known internal IP or a secret header and bypass the limiter (`if (req.ip === '10.0.0.1') return next();`). |
| **Burst traffic from a single IP after a restart** | In‑memory counters reset on process restart, allowing a sudden surge that could overwhelm downstream services. | Because the counter lives in Redis, it survives restarts; the TTL‑based key guarantees the window continues even if the Node process crashes [3]. |
| **IPv4/IPv6 and proxy‑forwarded addresses** | `req.ip` may return the proxy address instead of the client’s real IP, breaking per‑IP limits. | Ensure Express is configured with `app.set('trust proxy', true)` so `req.ip` reflects the `X‑Forwarded‑For` header, then use that value for the Redis key [3]. |

---

### Quick checklist  

1. **Install** `ioredis` (or `redis`) and add the middleware file.  
2. **Configure** `trust proxy` if behind a load balancer.  
3. **Set** `WINDOW_MS` and `MAX_REQUEST` to match your SLA.  
4. **Add** optional response headers (`X‑RateLimit-*`) for client visibility.  

With this pattern you get a single source of truth for request counts, automatic reset after the time window, and clear handling of common edge conditions.

<details><summary>Log</summary>

```
[2026-05-28T13:35:19.183Z] team-task #2 · persona=software-engineer · route=explicit
[2026-05-28T13:35:19.183Z] **Sam** (Software Engineer) is on this team-task.
[2026-05-28T13:35:19.232Z] Thinking about the best approach…
[2026-05-28T13:35:19.500Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-28T13:35:21.827Z] Couldn't draft a tight plan in time — falling back to the standard cascade: your second brain first, then the web.
[2026-05-28T13:35:21.827Z] Plan ready: 1 step — Default research plan for: Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the stack, and 3 edge cases to handle.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for,.
[2026-05-28T13:35:25.234Z] Step 1 of 1: Researching "Sketch an approach to add per-IP rate limiting to an Express API. Include the mi…" — vault + web
[2026-05-28T13:36:09.930Z] All sub-agents finished in 44.7s.
[2026-05-28T13:36:09.936Z] Thinking with openai/gpt-oss-20b:free (~3 214 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-28T13:36:11.489Z] Synth hiccup (OpenRouter 429: {"error":{"message":"Provider returned error","code":429,"metada) — retrying once in 5s.
[2026-05-28T13:36:17.893Z] Synth retries exhausted — returning the raw research result instead.
[2026-05-28T13:36:17.893Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-28T13:36:17.893Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-28T13:36:17.893Z] Step 3 of 3: Security-scanning the note
[2026-05-28T13:36:17.893Z] Step 2 of 3: Quality-checking the draft
[2026-05-28T13:36:21.909Z] Wave 1 finished in 4.0s.
[2026-05-28T13:36:21.909Z] All sub-agents finished in 4.0s.
[2026-05-28T13:36:21.909Z] Quality check passed (87%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
