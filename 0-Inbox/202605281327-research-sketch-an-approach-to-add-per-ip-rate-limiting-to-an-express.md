---
title: "Research: Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the sta"
created: 2026-05-28
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: Sketch an approach to add per-IP rate limiting to an Express API. Include the middleware shape, where it sits in the stack, and 3 edge cases to handle.

**Alignment check — required before responding.** The user's request names concrete elements (counts, people, dates, scale numbers, named sections, named steps, deliverable shape). The final answer MUST address each one. If N items are asked for,

**1. Middleware shape (what it looks like)**  

```js
// rate‑limit.js
const { rateLimit } = require('express-rate-limit');   // or a custom fn

// 5‑minute window, 10 requests per IP
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,          // 5 min
  max: 10,                         // ≤10 requests per window
  standardHeaders: true,           // expose RateLimit‑* headers
  legacyHeaders: false,
  handler: (req, res, /*next*/) => {   // custom response when limit hit
    res.status(429).json({
      error: 'Too many requests – try again later',
    });
  },
});

module.exports = limiter;
```

If you prefer a hand‑rolled version (useful for learning or when you need a non‑npm store), the signature is the same:

```js
function ipRateLimiter(req, res, next) {
  const ip = req.ip;
  // …track count & timestamps (in‑memory, Redis, etc.)
  // call next() or res.status(429).send(...)
}
module.exports = ipRateLimiter;
```

Both forms are **Express middleware**: a function `(req, res, next)` that either calls `next()` or ends the response.

---

**2. Where it sits in the stack**

```
app.use(cors());               // optional – runs first
app.use(express.json());       // body parsing
app.use(require('./rate-limit'))   // ← per‑IP limiter (global or /api prefix)
app.use('/api', apiRouter);    // protected routes
app.use(errorHandler);         // final error middleware
```

*Place it **before** any route handlers that you want to protect* (usually right after generic parsers).  
If you only need to guard the public API, mount it on the `/api` path instead of globally:

```js
app.use('/api', limiter, apiRouter);
```

---

**3. Three edge‑cases to handle**

| Edge case | Why it matters | Practical handling |
|-----------|----------------|--------------------|
| **a. Clients behind a NAT / shared IP** | Many legitimate users may appear from the same public IP (e.g., corporate proxies, mobile carriers). A strict low limit could lock out a whole organization. | Use a higher “burst” limit for known shared‑IP ranges or combine IP with an API‑key/user‑id when available. The `keyGenerator` option of `express-rate-limit` lets you customize the key: `keyGenerator: (req) => req.ip + ':' + (req.user?.id ?? '')`. |
| **b. Clock‑drift / burst traffic at window boundary** | When the window resets, a client can instantly fire another full quota, creating a short‑term spike. | Enable *sliding window* logic (e.g., `express-rate-limit`’s `windowMs` with `standardHeaders` plus a small `delayAfter` using `express-slow-down`) or set a short “penalty” delay after the limit is hit. |
| **c. Distributed deployment (multiple Node instances)** | In‑memory counters are isolated per process; a client could bypass the limit by hitting different instances. | Store counters in a shared store (Redis, Memcached, or a DB). The library supports a `store` option; for a custom store you can implement the required `increment`, `resetKey`, and `decrement` methods. Example from the Medium article: use `ioredis` and `redis.incr(key)` with an expiry to keep the count consistent across instances. |

---

**Putting it together – minimal working example**

```js
const express = require('express');
const { rateLimit } = require('express-rate-limit');

const app = express();

// Global JSON & CORS parsers
app.use(express.json());

// Per‑IP limiter (global)
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip,               // could add user ID here
  handler: (req, res) => res.status(429).json({ error: 'Rate limit exceeded' }),
});
app.use(limiter);   // <‑‑ sits before routes

app.get('/api/hello', (req, res) => res.send('Hello, world!'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000, () => console.log('Listening on :3000'));
```

*If you later scale to multiple servers, replace the default in‑memory store with a Redis store (see the custom‑store example in the Medium article).*

**Summary** – Define a `(req, res, next)` limiter (library‑based or custom), mount it early in the middleware chain (globally or on `/api`), and be prepared for NAT‑shared IPs, burst‑window spikes, and multi‑instance state sharing. All three points are directly supported by the patterns shown in the AppSignal guide and the Medium tutorial.

## Web sources
1. [How to Implement Rate Limiting in Express for Node.js | AppSignal Blog](https://blog.appsignal.com/2024/04/03/how-to-implement-rate-limiting-in-express-for-nodejs.html) _(relevance 25, firecrawl)_
2. [Creating a Simple API Rate Limiter with NodeJs | by Frontend Highlights | Medium](https://medium.com/@ignatovich.dm/creating-a-simple-api-rate-limiter-with-node-a834d03bad7a) _(relevance 15, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[How to Add Rate Limiting to Express APIs - OneUptime](https://oneuptime.com/blog/post/2026-02-02-express-rate-limiting/view)~~ — fetch-failed (This operation was aborted)

## Vault hits at time of research
_(none)_
