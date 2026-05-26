# 🚀 Virtual Worker Backend v2.0 - Quick Reference

## ⚡ Getting Started (2 minutes)

```bash
# 1. Start backend
cd backend && npm start

# 2. Test it works
node ../test-endpoint.js

# 3. See the magic
curl http://localhost:3001/health
```

Expected output: Server is healthy ✅

---

## 📡 Main Endpoint: `/main-command`

This is the **only endpoint** you need for frontend integration.

### Request Format
```json
{
  "prompt": "Your request here",
  "userId": "optional-user-id",
  "tags": { "primary": "optional-tag" }
}
```

### Response Format
```json
{
  "success": true,
  "data": { /* n8n response */ },
  "reasoning": {
    "department": "Finance Department",
    "intents": ["reconciliation", "reporting"],
    "confidence": 0.9
  },
  "timestamp": "2026-03-05T13:09:52.672Z"
}
```

---

## 🎯 Quick Commands

### Health Check
```bash
curl http://localhost:3001/health
```

### Test Main Command
```bash
curl -X POST http://localhost:3001/main-command \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Reconcile my accounts",
    "tags": { "primary": "Finance" }
  }'
```

### View All Agents
```bash
curl http://localhost:3001/agents
```

### View Session Data (Debug Mode)
```bash
DEBUG=true npm start
curl http://localhost:3001/sessions
```

---

## 🧠 What the Backend Does

### 1. Cleans Your Input
- Removes HTML tags
- Prevents XSS attacks
- Limits to 5000 characters

### 2. Understands Intent
```
Your prompt: "Reconcile accounts"
→ Detected: ["reconciliation", "financial"]
→ Department: "Finance Department"  
→ Confidence: 90%
```

### 3. Routes Intelligently
- Finance → Finance Department
- HR tasks → Human Resources  
- Sales → Sales Department
- *etc.*

### 4. Calls n8n
Sends rich context to your workflows:
```json
{
  "prompt": "cleaned text",
  "reasoning": { "intents", "department", "confidence" },
  "metadata": { "userId", "timestamp", "version" }
}
```

### 5. Returns Results
Frontend gets response + reasoning metadata

---

## 🧪 Testing Checklist

```
Endpoint Testing:
□ GET /health → 200 OK
□ GET /agents → 200 OK
□ POST /main-command → 200 OK
□ GET /sessions → 200 OK (debug mode)

Reasoning:
□ Intent detection working
□ Department routing correct
□ Confidence score present
□ Session tracking active

Sanitization:
□ HTML removed from prompts
□ XSS attempts blocked
□ Whitespace normalized

n8n Integration:
□ Primary webhook attempted
□ Fallback webhook available
□ Error handling graceful
□ Response parsed correctly
```

---

## 📊 Detected Intents

The backend recognizes these:

```
"reconciliation" ← account/data reconciliation
"reporting"      ← report generation
"task"          ← task assignment
"query"         ← data queries  
"financial"     ← money/budget related
"hr"            ← employee management
"sales"         ← customer/deals
"marketing"     ← campaigns/branding
"operations"    ← process efficiency
```

---

## 🏢 Department Routing

Automatically routed to:

```
Finance Department               → financial/reconciliation
Human Resources Department       → hr/employee
Sales Department                 → sales/customer
Marketing Department             → marketing/campaign
Operations Department            → operations/process
Risk and Compliance Department   → risk/audit/compliance
IT Department                    → tech/infrastructure
Strategy and Executive           → planning/board
```

---

## 📝 Frontend Integration (React)

### Step 1: Create Service
```javascript
// src/services/api.js
export const sendCommand = (prompt, tags = {}) => {
  return fetch('http://localhost:3001/main-command', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, tags })
  }).then(r => r.json());
};
```

### Step 2: Use in Component
```jsx
import { sendCommand } from './services/api';

function App() {
  const [result, setResult] = useState(null);
  
  const handleClick = async () => {
    const res = await sendCommand('reconcile accounts');
    setResult(res);
  };
  
  return (
    <>
      <button onClick={handleClick}>Send Command</button>
      {result && (
        <div>
          <p>Department: {result.reasoning.department}</p>
          <p>Confidence: {result.reasoning.confidence}</p>
        </div>
      )}
    </>
  );
}
```

---

## 🔧 n8n Setup (3 steps)

### 1. Create Webhook Trigger
```
New Workflow → Add Node → Webhook
Method: POST
Path: /main-command
```

### 2. Process Data
```javascript
// Use in any node:
{{ $json.prompt }}
{{ $json.reasoning.department }}
{{ $json.reasoning.intents }}
```

### 3. Return Response
```json
{
  "success": true,
  "result": "Your data here"
}
```

Done! Now activate the workflow.

---

## 🐛 Debugging

### Enable Verbose Logging
```bash
DEBUG=true npm start
node test-main-command.js
```

### Check Backend Console
```
[BACKEND] /main-command received
[CLEANING] Prompt sanitized, length: 123
[REASONING] Finance Department, 90%
[N8N] Attempting webhook...
[RESPONSE] Sending to frontend
```

### View Sessions
```bash
curl http://localhost:3001/sessions
```

---

## 💾 Implementation Files

| File | Purpose | Size |
|------|---------|------|
| `server.js` | Backend implementation | 630 lines |
| `promptLibrary.js` | Agent configs | 250+ lines |
| `test-endpoint.js` | Health check | 30 lines |
| `test-main-command.js` | Full test | 40 lines |

---

## 📚 Full Guides

| Document | Use Case |
|----------|----------|
| BACKEND_ENHANCEMENT_v2.md | Deep dive into features |
| FRONTEND_INTEGRATION_GUIDE.md | React integration |
| N8N_WEBHOOK_SETUP.md | Workflow setup |
| PROJECT_COMPLETION_STATUS.md | Full project status |

---

## 🔌 Environment Variables

```bash
# Optional - customize webhook
N8N_WEBHOOK_URL=https://your-webhook-url

# Optional - enable debug mode  
DEBUG=true

# Optional - change port
PORT=3001
```

---

## ⚠️ Common Issues

| Problem | Solution |
|---------|----------|
| Port 3001 in use | Kill: `Get-Process node \| Stop-Process -Force` |
| n8n returning 404 | Create webhook at `/main-command` and activate |
| Frontend CORS error | Backend has CORS enabled - check fetch URL |
| Wrong department | Add more keywords to intent detection |
| Session not tracked | Sessions are in-memory only - restart server clears them |

---

## 🎯 API Summary

```
GET  /health              → Status check
GET  /agents              → List all agents
GET  /sessions            → View sessions (debug)

POST /main-command        → PRIMARY ENDPOINT
POST /agents/:name        → Call agent directly
POST /finance/reconcile   → Finance tool
POST /finance/report      → Report tool
POST /database/query      → Database tool
POST /tasks/route         → Task tool
```

---

## 📈 Next Steps

1. **Run Backend** → `npm start` in backend folder
2. **Test Health** → `curl http://localhost:3001/health`
3. **Build Frontend** → Use React integration guide
4. **Setup n8n** → Create `/main-command` webhook
5. **Test Integration** → End-to-end test
6. **Deploy** → Move to production

---

## 💡 Key Points

✅ All input is automatically cleaned  
✅ Department/intent detected automatically  
✅ No agent selection needed  
✅ Confidence score provided  
✅ Session tracking built-in  
✅ Error handling graceful  
✅ n8n integration ready  

---

## 🚀 You're Ready!

Backend is running. Documentation is complete.  
Start building your frontend! 

Need help? Check the detailed guides above.

---

*Last Updated: March 5, 2026*  
*Version: 2.0 - Production Ready*
