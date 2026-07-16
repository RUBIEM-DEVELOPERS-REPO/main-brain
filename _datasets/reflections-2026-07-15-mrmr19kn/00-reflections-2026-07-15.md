# reflections-2026-07-15 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-15-mrmr19kn`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-16T00:06:37.751Z
- **Batch root hash** (tamper-evident): `2b785216c7cd4c59d136b6bc1f5c71f132c9f73e01caea1f8717127e6b74b18a`
- **Records**: 4 golden (4 raw in) · **avg confidence**: 87.5%
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
| Cryptographic Hashing | 4 | 4 | SHA-256 per record; batch root 2b785216c7cd… |
| Confidence Scoring | 4 | 4 | completeness over 8 fields |
| HITL Validation | 4 | 4 | 0 flagged below 0.6 confidence |
| Entity Resolution | 4 | 4 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-15-mrmr19kn/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-15-mrmr19kn/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-15-mrmr19kn/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
