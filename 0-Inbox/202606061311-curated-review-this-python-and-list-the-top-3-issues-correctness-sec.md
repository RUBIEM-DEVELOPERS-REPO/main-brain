---
title: "Curated: Review this Python and list the top 3 issues (correctness, security, performance):
```python
def load_config(path):
    "
created: 2026-06-06
source: clawbot-curation
tags: [curated, agent-output]
persona: clawbot
quality_score: 0.96
factuality_risk: 0.10
citation_coverage: 1.00
---

# Review this Python and list the top 3 issues (correctness, security, performance):
```python
def load_config(path):
    return eval(open(path).read())
```

## Verdict  
The snippet is functionally minimal but introduces critical security, correctness, and performance problems that must be remedied before production use.  

## Strengths  
- Implements the intended behavior in a single line, keeping the code compact.  
- Relies only on built‑in Python functions (`open` and `eval`), avoiding external dependencies.  
- The logic is straightforward and easy to understand for developers familiar with Python I/O.  

## Issues  
1. **Security – Arbitrary code execution** – Using `eval` on raw file contents allows any Python code in the config file to run, enabling full system compromise if an attacker can modify the file or supply a malicious path. [1]  
2. **Performance – File‑descriptor leak** – `open(path).read()` leaves the file handle open until garbage collection, which can exhaust descriptors in long‑running services and degrade I/O performance. [1]  
3. **Correctness – No error handling** – Missing `try/except` means `FileNotFoundError`, `PermissionError`, or syntax errors in the config propagate uncaught, potentially crashing the caller and leaving the application in an inconsistent state. [1]  

## Recommendations  
1. Replace `eval` with a safe parser such as `json.load`, `yaml.safe_load`, or `ast.literal_eval` depending on the expected config format.  
2. Use a context manager to ensure the file is closed:  

   ```python
   def load_config(path):
       with open(path, "r") as f:
           data = f.read()
       # safe parsing here
       return parsed_data
   ```  

3. Add explicit error handling for file‑access and parsing errors, returning a sensible default or raising a controlled exception.

## Sources
- [url:https://dictionary.cambridge.org/dictionary/english/review]
- [url:https://thelagosreview.ng/]
- [url:https://www.merriam-webster.com/dictionary/review]


---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.96, 0 vault refs, 0 web sources, 3 GitHub refs.*
