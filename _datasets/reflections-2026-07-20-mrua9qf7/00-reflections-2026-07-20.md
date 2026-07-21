# reflections-2026-07-20 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-20-mrua9qf7`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-21T06:39:28.771Z
- **Batch root hash** (tamper-evident): `4acd713b02beed5f9f55204ebfdbec76a7f5fc8af3e3b82bc50d9b8ffb87f4ae`
- **Records**: 4 golden (4 raw in) · **avg confidence**: 90.6%
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
| Normalization | 4 | 4 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 4 | 4 | SHA-256 per record; batch root 4acd713b02be… |
| Confidence Scoring | 4 | 4 | completeness over 8 fields |
| HITL Validation | 4 | 4 | 0 flagged below 0.6 confidence |
| Entity Resolution | 4 | 4 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-20-mrua9qf7/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-20-mrua9qf7/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-20-mrua9qf7/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
