# reflections-2026-07-03 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-03-mr6cji6t`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-04T12:36:35.669Z
- **Batch root hash** (tamper-evident): `7c375c7c0d33dcebcf2bfab8729c62b4e1e43a3ffd76096b292819f7764c2715`
- **Records**: 3 golden (3 raw in) · **avg confidence**: 91.7%
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
| Cryptographic Hashing | 3 | 3 | SHA-256 per record; batch root 7c375c7c0d33… |
| Confidence Scoring | 3 | 3 | completeness over 8 fields |
| HITL Validation | 3 | 3 | 0 flagged below 0.6 confidence |
| Entity Resolution | 3 | 3 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-03-mr6cji6t/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-03-mr6cji6t/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-03-mr6cji6t/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
