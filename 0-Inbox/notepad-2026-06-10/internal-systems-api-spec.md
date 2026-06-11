---
title: Internal systems — API spec (marketing/financial/research)
source: Notepad tab 109e2677
filed: 2026-06-10
tags: [imported, notepad]
---

# Internal systems — API spec (marketing/financial/research)

marketing  system https://workspace.replit.app/ & https://workspace.replit.app/apifinancial system GET /api/public/dashboardPOST /api/public/receiptsContent-Type: application/jsonx-api-key: [REDACTED]{  "vendor": "Supplier Name",  "amount": 1500,  "category": "Equipment",  "date": "2026-04-24",  "description": "Optional note"}POST /api/public/inflows{  "title": "Q2 Revenue",  "amount": 15000,  "source": "Sales",  "category": "Revenue",  "date": "2026-04-24",  "reference": "INV-001"}GET /api/publicresearch system Purpose	Method	URLSend one payload	POST	http://localhost:8000/api/webhooks/sendFan-out to many URLs	POST	http://localhost:8000/api/webhooks/broadcastPing test a receiver	POST	http://localhost:8000/api/webhooks/testVerify HMAC signature	POST	http://localhost:8000/api/webhooks/verifyInteractive API docs	GET	http://localhost:8000/docsOpenAPI schema	GET	http://localhost:8000/openapi.json
