---
type: job
title: Write reference docs that are skim-able and grep-able
slug: write-reference-docs-that-are-skim-able-and-grep-able-596c377e
created: 2026-05-29T14:18:59.905Z
jobId: 596c377e-c367-4451-a3b5-c07b466f9e76
status: succeeded
template: custom-technical-writer-write-reference-docs-that-are-skim-able-
persona: clawbot
personaName: Clawbot
startedAt: 2026-05-29T14:17:03.754Z
finishedAt: 2026-05-29T14:18:59.905Z
---

# Write reference docs that are skim-able and grep-able

- **Status:** succeeded
- **Template:** custom-technical-writer-write-reference-docs-that-are-skim-able-
- **Started:** 2026-05-29T14:17:03.754Z
- **Finished:** 2026-05-29T14:18:59.905Z
- **Title:** Write reference docs that are skim-able and grep-able

## Plan
Generate a structured, skim‑able reference guide in Markdown.

### Steps
1. ✓ Thinking about it — `ollama.generate` (65.5s) · model `openai/gpt-oss-20b:free`
    > Generate the reference docs directly in the response.
2. ✓ Quality-checking the draft — `quality.check` (9.9s)
    > auto-injected: score factuality, citation coverage, persona fit (evidence-aware)
3. ✓ Security-scanning the note — `security.scan` (0.0s)
    > auto-injected: scan answer for secrets, dodgy URLs

## Answer
## Quick‑Reference Guide – Generic Software Product  
**Version:** 1.0.0 **Last Updated:** 2026‑05‑29 **Author:** Technical Writing Team  

> Use this document as a one‑page cheat sheet for installation, configuration, commands, and troubleshooting. All sections are grep‑friendly and designed for fast scanning.  

---

### 1. Overview  

| Item | Description |
|------|-------------|
| **Name** | `generic-software` |
| **Purpose** | A modular, cross‑platform application framework. |
| **Supported OS** | Linux, macOS, Windows (x64) |
| **Languages** | C++ (core), Python (plugins) |
| **License** | MIT |

**Key Features**  
- Modular architecture  
- Extensible via Python plugins  
- Built‑in HTTP/REST API  
- Configurable via YAML  

---

### 2. Installation  

#### 2.1 Prerequisites  

```bash
# Linux
sudo apt-get install -y build-essential cmake python3 python3-pip

# macOS
brew install cmake python

# Windows
# Install Visual Studio 2022 (Community) with C++ Desktop Development
# Install Python 3.12 from https://www.python.org
```

#### 2.2 Binary Release  

```bash
# Download latest release
curl -L https://github.com/example/generic-software/releases/download/v1.0.0/generic-software-1.0.0.tar.gz | tar xz

# Install to /usr/local (Linux/macOS)
sudo cp -R generic-software-1.0.0/* /usr/local/

# Windows: Extract ZIP, add `bin\` to PATH
```

#### 2.3 Build from Source  

```bash
git clone https://github.com/example/generic-software.git
cd generic-software
mkdir build && cd build
cmake .. && make
sudo make install
```

---

### 3. Configuration  

- Configuration file: `config.yaml` in the installation directory.  
- YAML schema supports `logging`, `network`, and `plugin` sections.  

```yaml
logging:
  level: INFO
  file: /var/log/generic-software.log

network:
  host: 0.0.0.0
  port: 8080

plugin:
  path: /usr/local/lib/generic-software/plugins
```

---

### 4. Common Commands  

| Command | Description |
|---------|-------------|
| `generic-software --help` | Show usage information |
| `generic-software --version` | Display version |
| `generic-software --config /path/to/config.yaml` | Run with custom config |
| `generic-software --plugin-load <name>` | Dynamically load a plugin |

---

### 5. Troubleshooting  

| Issue | Symptom | Fix |
|-------|---------|-----|
| `cannot find cmake` | Build fails on Linux | Install `cmake` via package manager |
| `Python plugin not loading` | Plugin directory empty | Verify `plugin.path` in `config.yaml` |
| `port 8080 in use` | Server fails to start | Change `network.port` or stop conflicting process |

---

<details><summary>Log</summary>

```
[2026-05-29T14:17:03.762Z] Working as Clawbot — AI agent operator.
[2026-05-29T14:17:04.436Z] Thinking about the best approach…
[2026-05-29T14:17:04.460Z] Planning with openai/gpt-oss-20b:free — profile "planning" routed to OpenRouter via config.
[2026-05-29T14:17:17.907Z] Plan ready: 1 step — Generate a structured, skim‑able reference guide in Markdown..
[2026-05-29T14:17:17.911Z] Step 1 of 1: Thinking about it
[2026-05-29T14:18:23.442Z] All sub-agents finished in 65.5s.
[2026-05-29T14:18:23.447Z] Thinking with openai/gpt-oss-20b:free (~2 484 tokens of context). Reason: profile "synthesis" routed to OpenRouter via config.
[2026-05-29T14:18:50.047Z] Reviewing the draft — running quality and security checks in parallel.
[2026-05-29T14:18:50.051Z] Running 2 sub-agents in parallel (1 I/O + 1 thinking).
[2026-05-29T14:18:50.051Z] Step 3 of 3: Security-scanning the note
[2026-05-29T14:18:50.051Z] Step 2 of 3: Quality-checking the draft
[2026-05-29T14:18:59.905Z] Wave 1 finished in 9.9s.
[2026-05-29T14:18:59.905Z] All sub-agents finished in 9.9s.
[2026-05-29T14:18:59.905Z] Quality check passed (77%) and security is clean — peer review skipped (saves 30-90s).
```
</details>
