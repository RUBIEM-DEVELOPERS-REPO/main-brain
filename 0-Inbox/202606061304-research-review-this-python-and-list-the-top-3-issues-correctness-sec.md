---
title: "Research: Review this Python and list the top 3 issues (correctness, security, performance):
```python
def load_config(path):
    "
created: 2026-06-06
source: clawbot-research
validator: strict
sources_kept: 3
sources_dropped: 0
---

# Research: Review this Python and list the top 3 issues (correctness, security, performance):
```python
def load_config(path):
    return eval(open(path).read())
```

**Top 3 issues in the snippet**

| # | Issue | Why it matters (correctness / security / performance) |
|---|-------|------------------------------------------------------|
| 1 | **Use of `eval` on unchecked file contents** | `eval` will execute *any* Python code found in the file. If an attacker can modify the config file (or supply a malicious path), they can run arbitrary code on the host – a critical security vulnerability. |
| 2 | **No file‑handle cleanup** | `open(path).read()` leaves the file descriptor open until the interpreter garbage‑collects it. In long‑running services this can exhaust file descriptors, degrading performance and potentially causing crashes. |
| 3 | **Lack of error handling** | Any problem (missing file, permission error, syntax error in the config) will raise an exception that bubbles up uncaught, crashing the caller. Proper validation and graceful fallback are needed for correctness and reliability. |

**Brief remediation suggestions**

1. Replace `eval` with a safe parser (e.g., `json.load`, `yaml.safe_load`, or `ast.literal_eval` if the format is a literal Python structure).  
2. Use a context manager to ensure the file is closed: `with open(path) as f: data = …`.  
3. Add try/except blocks to handle `FileNotFoundError`, `PermissionError`, and parsing errors, returning a sensible default or propagating a controlled error.  

*Note:* The provided vault and web sources contain no technical information about this code, so the analysis is based on general Python best‑practice knowledge.

## Web sources
1. [REVIEW | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/review) _(relevance 12, http)_
2. [The Lagos Review - ...home of the best writings](https://thelagosreview.ng/) _(relevance 12, browser)_
3. [REVIEW Definition & Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/review) _(relevance 10, browser)_

## Vault hits at time of research
_(none)_
