# reflections-2026-07-16 — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `reflections-2026-07-16-mro6du5t`
- **Source**: Intellinexus daily reflection
- **Sector**: operations
- **Published**: 2026-07-17T00:04:04.721Z
- **Batch root hash** (tamper-evident): `5c10ddeb275b7614698304c8be3d334e2530c0ef705bd81e466a2f2a37c692cf`
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
| Cryptographic Hashing | 5 | 5 | SHA-256 per record; batch root 5c10ddeb275b… |
| Confidence Scoring | 5 | 5 | completeness over 8 fields |
| HITL Validation | 5 | 5 | 0 flagged below 0.6 confidence |
| Entity Resolution | 5 | 5 | merged on "template" |

## Machine-ready outputs
- **ML CSV** — `_datasets/reflections-2026-07-16-mro6du5t/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/reflections-2026-07-16-mro6du5t/graph.jsonl`
- **RAG chunks** — `_datasets/reflections-2026-07-16-mro6du5t/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`date`, `template`, `total`, `succeeded`, `failed`, `success_rate`, `avg_duration_sec`, `top_failure`.
