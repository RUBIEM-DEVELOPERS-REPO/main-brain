# reflections-2026-07-03 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-03-mr6c1w6f`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-04T12:22:53.991Z
- **Batch root hash** (tamper-evident): `be2334280d8fabcd19d42107797455e9d534745bc37fb482818314c18a5a2b3d`
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
| Cryptographic Hashing | 3 | 3 | SHA-256 per record; batch root be2334280d8f… |
| Confidence Scoring | 3 | 3 | completeness over 8 fields |
| HITL Validation | 3 | 3 | 0 flagged below 0.6 confidence |
| Entity Resolution | 3 | 3 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-03-mr6c1w6f/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-03-mr6c1w6f/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-03-mr6c1w6f/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
