# Smoke Customers — Dataset Knowledge Pack

> Published by the ADRS data pipeline. Agents learn from this dataset via vault
> retrieval — search for its subject and the records below surface as context.

## Provenance & audit
- **Dataset id**: `smoke-customers-mr1685f0`
- **Source**: inline
- **Sector**: fintech
- **Published**: 2026-06-30T21:40:57.324Z
- **Batch root hash** (tamper-evident): `7312690bed017641ba755cc48f5d20fe0bf5690efed1507f09a849968d4fd50a`
- **Records**: 3 golden (4 raw in) · **avg confidence**: 83.3%
- **HITL review queue**: 1 record flagged below confidence threshold

## Fields
- `id`
- `name`
- `region`
- `value`

## Pipeline stages
| Stage | In | Out | Note |
|---|---|---|---|
| Normalization | 4 | 4 | canonical keys, trimmed + type-coerced values |
| Cryptographic Hashing | 4 | 4 | SHA-256 per record; batch root 7312690bed01… |
| Confidence Scoring | 4 | 4 | completeness over 4 fields |
| HITL Validation | 4 | 3 | 1 flagged below 0.6 confidence |
| Entity Resolution | 4 | 3 | merged on "id" |

## Machine-ready outputs
- **ML CSV** — `_datasets/smoke-customers-mr1685f0/dataset.csv`
- **Knowledge-graph JSONL** — `_datasets/smoke-customers-mr1685f0/graph.jsonl`
- **RAG chunks** — `_datasets/smoke-customers-mr1685f0/rag.md`

## How agents use this
The RAG chunks and this card are indexed in the vault. Any agent answering a
question in this domain retrieves the golden records as grounding. Sample fields:
`id`, `name`, `region`, `value`.
