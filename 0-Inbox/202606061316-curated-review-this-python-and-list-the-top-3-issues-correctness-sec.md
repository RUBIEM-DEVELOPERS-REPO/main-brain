---
title: "Curated: Review this Python and list the top 3 issues (correctness, security, performance):
```python
def load_config(path):
    "
created: 2026-06-06
source: clawbot-curation
tags: [curated, agent-output]
persona: clawbot
quality_score: 0.85
factuality_risk: 0.30
citation_coverage: 1.00
---

# Review this Python and list the top 3 issues (correctness, security, performance):
```python
def load_config(path):
    return eval(open(path).read())
```

## Verdict  
The function is unsafe and brittle; it should be rewritten to eliminate code‑injection risk, ensure proper resource cleanup, and add error handling.

## Strengths  
- Concise one‑liner that directly returns the parsed configuration.  
- No external dependencies beyond the Python standard library.  
- Straightforward logic makes the intent immediately clear.

## Issues  
1. **Security – uncontrolled `eval`** – `eval(open(path).read())` executes any Python code in the file, enabling arbitrary code execution if the config file is tampered with or a malicious path is supplied [1].  
2. **Resource leak – missing file‑handle cleanup** – Using `open(path).read()` leaves the file descriptor open until the interpreter’s garbage collector closes it, which can exhaust file‑descriptor limits in long‑running processes [1].  
3. **Robustness – lack of error handling and validation** – I/O errors, syntax errors, or malformed content raise uncaught exceptions, potentially crashing the program, and the returned object is unvalidated, risking downstream type errors [1].

## Recommendations  
1. Replace `eval` with a safe parser (e.g., `json.load` for JSON, `yaml.safe_load` for YAML, or `ast.literal_eval` for literal‑only data).  
2. Use a context manager to guarantee the file is closed:  
   ```python
   import json  # or yaml, ast
   def load_config(path):
       with open(path, "r") as f:
           return json.load(f)   # or yaml.safe_load(f) / ast.literal_eval(f.read())
   ```  
3. Add explicit error handling and input validation to surface meaningful messages and prevent crashes, e.g., catching `FileNotFoundError`, `PermissionError`, and validation of the resulting data structure.



---

*Curated by the primary clawbot from a persona-shifter peer's output. Quality score 0.85, 0 vault refs, 0 web sources, 1 GitHub refs.*
