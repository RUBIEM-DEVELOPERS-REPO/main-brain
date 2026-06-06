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

**Top 3 issues with the function**

| # | Issue | Why it matters (correctness / security / performance) |
|---|-------|------------------------------------------------------|
| 1 | **Use of `eval` on uncontrolled input** | `eval` executes *any* Python code found in the file. If an attacker can modify the config file (or supply a path to a malicious file), they can run arbitrary code with the privileges of the process – a classic code‑injection vulnerability. |
| 2 | **No file‑handle cleanup** | `open(path).read()` leaves the file descriptor open until the interpreter’s garbage collector closes it. In long‑running services this can exhaust the OS file‑descriptor limit, causing failures to open further files. |
| 3 | **Lack of error handling & validation** | Any problem (missing file, permission error, syntax error in the config) raises an exception that bubbles up uncaught, potentially crashing the program. Moreover, the function returns whatever Python object the file contains without validating its shape, which can lead to downstream type errors. |

**Suggested quick fixes (aligned with the “Try next” guidance to add retries and sandbox risky calls)**  

1. **Replace `eval` with a safe parser** – e.g., `json.load(open(path))` for JSON configs or `yaml.safe_load` for YAML. If the config must be Python code, use `ast.literal_eval` which only evaluates literals.  
2. **Use a context manager** to ensure the file is closed:  
   ```python
   def load_config(path):
       with open(path, 'r', encoding='utf-8') as f:
           return json.load(f)          # or yaml.safe_load(f)
   ```  
3. **Add explicit error handling and optional retries** (as per the “Add automatic retries for `general‑task`” rule):  
   ```python
   import json, time

   def load_config(path, retries=2, delay=0.5):
       for attempt in range(retries + 1):
           try:
               with open(path, 'r', encoding='utf-8') as f:
                   return json.load(f)
           except (OSError, json.JSONDecodeError) as e:
               if attempt == retries:
                   raise
               time.sleep(delay)
   ```  

These changes eliminate the code‑execution risk, guarantee proper resource cleanup, and make the function more robust against transient I/O problems.

## Web sources
1. [REVIEW | English meaning - Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/review) _(relevance 12, http)_
2. [The Lagos Review - ...home of the best writings](https://thelagosreview.ng/) _(relevance 12, browser)_
3. [REVIEW Definition & Meaning - Merriam-Webster](https://www.merriam-webster.com/dictionary/review) _(relevance 10, browser)_

## Vault hits at time of research
_(none)_
