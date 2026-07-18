# reflections-2026-07-17 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-17-mrplrq1b`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-18T00:02:32.976Z
- **Batch root hash** (tamper-evident): `7711b64ac4e33c808d88657f624bf8975470c4857a1a1a22ef3316b86b04a6b8`
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
| Cryptographic Hashing | 4 | 4 | SHA-256 per record; batch root 7711b64ac4e3… |
| Confidence Scoring | 4 | 4 | completeness over 8 fields |
| HITL Validation | 4 | 4 | 0 flagged below 0.6 confidence |
| Entity Resolution | 4 | 4 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-17-mrplrq1b/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-17-mrplrq1b/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-17-mrplrq1b/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
