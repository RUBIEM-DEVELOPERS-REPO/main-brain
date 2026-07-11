# reflections-2026-07-10 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-10-mrflrlpw`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-11T00:04:45.620Z
- **Batch root hash** (tamper-evident): `ee754a5e0bc49ff56680ea2d96811c38b8725a19fa977cc60979b39eb7075b8b`
- **Records**: 6 golden (6 raw in) · **avg confidence**: 87.5%
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
| Normalization | 6 | 6 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 6 | 6 | SHA-256 per record; batch root ee754a5e0bc4… |
| Confidence Scoring | 6 | 6 | completeness over 8 fields |
| HITL Validation | 6 | 6 | 0 flagged below 0.6 confidence |
| Entity Resolution | 6 | 6 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-10-mrflrlpw/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-10-mrflrlpw/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-10-mrflrlpw/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
