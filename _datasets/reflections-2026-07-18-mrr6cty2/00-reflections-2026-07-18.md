# reflections-2026-07-18 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-18-mrr6cty2`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-19T02:26:36.314Z
- **Batch root hash** (tamper-evident): `36b7fd37427a84d60a520436d73e7dbe8b793568b5a961ade8b6964ec563b098`
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
| Cryptographic Hashing | 3 | 3 | SHA-256 per record; batch root 36b7fd37427a… |
| Confidence Scoring | 3 | 3 | completeness over 8 fields |
| HITL Validation | 3 | 3 | 0 flagged below 0.6 confidence |
| Entity Resolution | 3 | 3 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-18-mrr6cty2/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-18-mrr6cty2/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-18-mrr6cty2/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
