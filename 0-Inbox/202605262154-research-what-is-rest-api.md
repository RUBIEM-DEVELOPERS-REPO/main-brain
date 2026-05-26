---
title: "Research: what is REST API"
created: 2026-05-26
source: clawbot-research
validator: strict
sources_kept: 2
sources_dropped: 1
---

# Research: what is REST API

**REST API (RESTful API)**  

A REST API is an *application programming interface* that follows the design principles of **Representational State Transfer (REST)**, an architectural style for building distributed hypermedia systems. It was first described in 2000 by Dr. Roy Fielding [1].

### Core idea
- **Client‑server**: A client sends a request to a server that holds the resource. The client only needs the resource’s URI; the server returns the requested representation (e.g., JSON, XML).  
- **Statelessness**: Every request must contain all information needed to process it; the server does not keep session state between requests.  
- **Uniform interface**: All requests for a given resource use the same URI pattern and standard HTTP methods (GET, POST, PUT, DELETE, etc.).  
- **Cacheability**: Responses can be marked as cacheable, improving performance and scalability.  
- **Layered system**: Intermediaries (proxies, gateways, load balancers) can exist between client and server without the client needing to know.  
- **Code‑on‑demand (optional)**: Servers may deliver executable code (e.g., JavaScript) to extend client functionality.

### Why use REST APIs?
- **Flexibility** – can be implemented in any programming language and support multiple data formats.  
- **Scalability & efficiency** – lightweight HTTP‑based communication, statelessness, and cacheability enable high‑throughput services.  
- **Interoperability** – a uniform, language‑agnostic contract makes it easy for different applications, services, databases, or micro‑services to exchange data.

In short, a REST API is a web‑based interface that lets clients manipulate resources over HTTP while adhering to the six REST constraints (uniform interface, client‑server separation, statelessness, cacheability, layered system, optional code‑on‑demand) [1].

## Web sources
1. [What Is a REST API (RESTful API)? | IBM](https://www.ibm.com/think/topics/rest-apis) _(relevance 23, http)_
2. [What is a REST API?](https://www.redhat.com/en/topics/api/what-is-a-rest-api) _(relevance 18, http)_

## Filtered sources _(1 dropped by validator)_
- ~~[https://www.reddit.com/r/learnprogramming/comments/17kkjas/what_actually_is_a_rest_api_can_someone_provide/](https://www.reddit.com/r/learnprogramming/comments/17kkjas/what_actually_is_a_rest_api_can_someone_provide/)~~ — thin-content (0 chars (min 200))

## Vault hits at time of research
_(none)_
