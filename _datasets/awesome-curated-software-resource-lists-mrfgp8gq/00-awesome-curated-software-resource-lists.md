# Awesome — Curated Software & Resource Lists — Dataset Knowledge Pack

> Published by the Intellinexus data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `awesome-curated-software-resource-lists-mrfgp8gq`
- **Source**: github:sindresorhus/awesome
- **Sector**: general
- **Published**: 2026-07-10T21:42:57.050Z
- **Batch root hash** (tamper-evident): `eb1b0fe4a363a372aba11832104c2e8c287858746c3725cf35f02728536dc5c9`
- **Records**: 682 golden (682 raw in) · **avg confidence**: 93.8%
- **HITL review queue**: 0 records flagged below confidence threshold

## Fields
- `category`
- `name`
- `url`
- `description`
- `nested`

## Pipeline stages
| Stage | In | Out | Note |
|---|---|---|---|
| Normalization | 682 | 682 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 682 | 682 | SHA-256 per record; batch root eb1b0fe4a363… |
| Confidence Scoring | 682 | 682 | completeness over 5 fields |
| HITL Validation | 682 | 682 | 0 flagged below 0.6 confidence |
| Entity Resolution | 682 | 682 | merged on "url" |

## Machine-ready outputs
- **ML CSV** — `_datasets/awesome-curated-software-resource-lists-mrfgp8gq/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/awesome-curated-software-resource-lists-mrfgp8gq/graph.jsonl`
- **RAG chunks** — `_datasets/awesome-curated-software-resource-lists-mrfgp8gq/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`category`, `name`, `url`, `description`, `nested`.
