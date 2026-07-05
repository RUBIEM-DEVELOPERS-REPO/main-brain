# reflections-2026-07-04 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-04-mr7gl3mj`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-05T07:17:34.747Z
- **Batch root hash** (tamper-evident): `ce5ee4268b0a93a6cf8e8f50f38a50a7979a4772ee8bc25879dda2e405f3d6cf`
- **Records**: 5 golden (5 raw in) · **avg confidence**: 87.5%
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
| Normalization | 5 | 5 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 5 | 5 | SHA-256 per record; batch root ce5ee4268b0a… |
| Confidence Scoring | 5 | 5 | completeness over 8 fields |
| HITL Validation | 5 | 5 | 0 flagged below 0.6 confidence |
| Entity Resolution | 5 | 5 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-04-mr7gl3mj/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-04-mr7gl3mj/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-04-mr7gl3mj/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
