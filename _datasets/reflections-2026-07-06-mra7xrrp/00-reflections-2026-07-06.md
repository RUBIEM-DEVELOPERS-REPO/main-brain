# reflections-2026-07-06 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-06-mra7xrrp`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-07T05:38:47.893Z
- **Batch root hash** (tamper-evident): `1abfb9bbae04bfe294833610401faf40d1932acf244051b366a5a3a5fcd6d9f4`
- **Records**: 3 golden (3 raw in) · **avg confidence**: 87.5%
- **HITL review queue**: 0 records flagged below confidence threshold

## Fields
- `date`
- `template`
- `total`
- `succeeded`
- `failed`
- `success_rate`
- `avg_duration_sec`
- `top_failure`

## Pipeline stages
| Stage | In | Out | Note |
|---|---|---|---|
| Normalization | 3 | 3 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 3 | 3 | SHA-256 per record; batch root 1abfb9bbae04… |
| Confidence Scoring | 3 | 3 | completeness over 8 fields |
| HITL Validation | 3 | 3 | 0 flagged below 0.6 confidence |
| Entity Resolution | 3 | 3 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-06-mra7xrrp/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-06-mra7xrrp/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-06-mra7xrrp/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
