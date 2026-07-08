# reflections-2026-07-07 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-07-mrbrchg8`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-08T07:29:53.240Z
- **Batch root hash** (tamper-evident): `76594645c593d8591591320befcbe90442043ed4de6e5c3391571949f827ad80`
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
| Cryptographic Hashing | 3 | 3 | SHA-256 per record; batch root 76594645c593… |
| Confidence Scoring | 3 | 3 | completeness over 8 fields |
| HITL Validation | 3 | 3 | 0 flagged below 0.6 confidence |
| Entity Resolution | 3 | 3 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-07-mrbrchg8/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-07-mrbrchg8/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-07-mrbrchg8/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
