# reflections-2026-07-22 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-22-mrwqxiyq`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-23T00:01:25.058Z
- **Batch root hash** (tamper-evident): `ae5e2f6b145765bec88357e78ea172825825d37aa9396a4649ef517ea2811dc3`
- **Records**: 7 golden (7 raw in) · **avg confidence**: 89.3%
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
| Normalization | 7 | 7 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 7 | 7 | SHA-256 per record; batch root ae5e2f6b1457… |
| Confidence Scoring | 7 | 7 | completeness over 8 fields |
| HITL Validation | 7 | 7 | 0 flagged below 0.6 confidence |
| Entity Resolution | 7 | 7 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-22-mrwqxiyq/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-22-mrwqxiyq/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-22-mrwqxiyq/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
