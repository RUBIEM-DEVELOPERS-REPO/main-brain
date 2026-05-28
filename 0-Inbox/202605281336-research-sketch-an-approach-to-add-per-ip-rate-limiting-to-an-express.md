---
title: "Research: Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the sta"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the stack, and 3 edge cases to handle.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for,

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

## Web sources
1. [How to Add Rate Limiting to Express APIs](https://oneuptime.com/blog/post/2026-02-02-express-rate-limiting/view) _(relevance 24, http)_
2. [How to Implement Rate Limiting in Express for Node.js | AppSignal Blog](https://blog.appsignal.com/2024/04/03/how-to-implement-rate-limiting-in-express-for-nodejs.html) _(relevance 22, http)_
3. [Creating a Simple API Rate Limiter with NodeJs | by Frontend Highlights | Medium](https://medium.com/@ignatovich.dm/creating-a-simple-api-rate-limiter-with-node-a834d03bad7a) _(relevance 15, http)_

## Vault hits at time of research
_(none)_
