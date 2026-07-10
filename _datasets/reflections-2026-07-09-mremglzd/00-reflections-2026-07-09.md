# reflections-2026-07-09 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-09-mremglzd`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-10T07:36:26.186Z
- **Batch root hash** (tamper-evident): `3198d86821bf438d8e273660746f029233bc8176576a718d2bb721d26ae71b85`
- **Records**: 2 golden (2 raw in) · **avg confidence**: 87.5%
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
| Normalization | 2 | 2 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 2 | 2 | SHA-256 per record; batch root 3198d86821bf… |
| Confidence Scoring | 2 | 2 | completeness over 8 fields |
| HITL Validation | 2 | 2 | 0 flagged below 0.6 confidence |
| Entity Resolution | 2 | 2 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-09-mremglzd/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-09-mremglzd/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-09-mremglzd/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
