# reflections-2026-07-13 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-13-mrjw260l`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-14T00:03:59.350Z
- **Batch root hash** (tamper-evident): `723a17e23d70bbd934e7a7936e71547030b6fc5a07294b693b0450d2d677e655`
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
| Cryptographic Hashing | 5 | 5 | SHA-256 per record; batch root 723a17e23d70… |
| Confidence Scoring | 5 | 5 | completeness over 8 fields |
| HITL Validation | 5 | 5 | 0 flagged below 0.6 confidence |
| Entity Resolution | 5 | 5 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-13-mrjw260l/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-13-mrjw260l/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-13-mrjw260l/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
