# reflections-2026-07-11 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-11-mrh1bl0y`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-12T00:07:58.258Z
- **Batch root hash** (tamper-evident): `10e3762d376a98a126bf5202cac01379d868fdcefb4060f163c54bac5adc99c6`
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
| Cryptographic Hashing | 2 | 2 | SHA-256 per record; batch root 10e3762d376a… |
| Confidence Scoring | 2 | 2 | completeness over 8 fields |
| HITL Validation | 2 | 2 | 0 flagged below 0.6 confidence |
| Entity Resolution | 2 | 2 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-11-mrh1bl0y/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-11-mrh1bl0y/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-11-mrh1bl0y/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
