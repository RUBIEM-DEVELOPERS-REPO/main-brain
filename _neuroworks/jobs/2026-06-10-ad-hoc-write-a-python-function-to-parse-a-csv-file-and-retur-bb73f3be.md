---
type: job
title: Ad-hoc: Write a Python function to parse a CSV file and return per-c
slug: ad-hoc-write-a-python-function-to-parse-a-csv-file-and-retur-bb73f3be
created: 2026-06-10T18:00:07.858Z
jobId: bb73f3be-7f6a-4f31-a827-94b51d115285
status: succeeded
template: general-task
persona: clawbot
personaName: Neuro
startedAt: 2026-06-10T17:59:19.744Z
finishedAt: 2026-06-10T18:00:07.857Z
---

# Ad-hoc: Write a Python function to parse a CSV file and return per-c

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T17:59:19.744Z
- **Finished:** 2026-06-10T18:00:07.857Z
- **Title:** Ad-hoc: Write a Python function to parse a CSV file and return per-c

## Inputs
```json
{
  "task": "(You are operating as Neuro, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite a Python function to parse a CSV file and return per-column totals.\n\nInterpretation: intent=draft-other, target=\"python function\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.",
  "userText": "Write a Python function to parse a CSV file and return per-column totals.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "draft-other",
  "intentTarget": "python function",
  "personaId": "clawbot"
}
```

## Answer
```python
import csv
from typing import Dict

def column_totals(csv_path: str) -> Dict[str, float]:
    """Return the sum of numeric values for each column in a CSV file.

    Parameters
    ----------
    csv_path
        Path to the CSV file. The first row must contain column headers.
        Missing or non‑numeric cells are ignored.

    Returns
    -------
    dict
        Mapping of column name → total of numeric values in that column.
    """
    totals: Dict[str, float] = {}
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            for col, val in row.items():
                try:
                    num = float(val)
                except (ValueError, TypeError):
                    continue
                totals[col] = totals.get(col, 0.0) + num
    return totals
```

<details><summary>Log</summary>

```
[2026-06-10T17:59:19.746Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T17:59:19.846Z] Loaded the **code-writing** skill playbook for this task.
[2026-06-10T17:59:19.847Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T18:00:02.217Z] Hermes responded in 42.4s (892 chars).
[2026-06-10T18:00:07.857Z] Quality gate: Hermes answer passed (score 1.00).
```
</details>
