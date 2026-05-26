# n8n Webhook Integration Guide

## 🎯 Quick Setup (5 minutes)

Connect your Virtual Worker backend to n8n workflows.

## 📋 Prerequisites

- n8n instance running and accessible
- Webhook URLs provided by your n8n admin:
  - Primary: `https://royalchrisking.app.n8n.cloud/webhook/main-command`
  - Test: `https://royalchrisking.app.n8n.cloud/webhook-test/main-command`

## 🔧 Step 1: Create a Webhook Trigger in n8n

### In n8n Workflow Editor:

1. **Create New Workflow** (or open existing)
2. **Add Node** → Search for "Webhook"
3. **Select "Webhook" Node**
4. **Configure:**
   - **Method:** `POST`
   - **Path:** `/main-command`
   - **Authentication:** None (or Basic Auth if desired)
   - **Response Mode:** `Last Node Output`

### Webhook Configuration

```
┌─────────────────────────────────┐
│    Incoming Webhook Trigger     │
├─────────────────────────────────┤
│ Method:      POST               │
│ Path:        /main-command      │
│ URL:         https://...cloud/  │
│              webhook/main-command│
│ Auth:        None               │
│ Response:    Last Node Output   │
└─────────────────────────────────┘
         ↓
    [Your Workflow]
```

## 📊 Step 2: Understand the Incoming Payload

The backend sends this data structure:

```json
{
  "reasoning": {
    "intents": ["reconciliation", "reporting", "financial"],
    "department": "Finance Department",
    "confidence": 0.9,
    "isFollowUp": false,
    "userHistory": 0
  },
  "tags": {
    "primary": "Finance Department",
    "intents": ["reconciliation", "reporting", "financial"],
    "interaction_number": 1
  },
  "prompt": "I need to reconcile the accounts for Q1...",
  "metadata": {
    "timestamp": "2026-03-05T13:09:49.811Z",
    "userId": "test-user-001",
    "backend_version": "2.0",
    "reasoning_confidence": 0.9
  }
}
```

## 🛠️ Step 3: Process the Webhook Data

### Example Workflow Structure:

```
[Webhook Trigger]
        ↓
[Resolve Department in Tags]
        ↓
[Route Based on Department]
        ├→ Finance → Finance Workflow
        ├→ HR → HR Workflow
        ├→ Sales → Sales Workflow
        └→ Other → Default Handler
        ↓
[Generate Response]
        ↓
[Return to Backend]
```

### Using the Reasoning Data

In any n8n node, reference the webhook data:

```javascript
// Access the prompt
{{ $json.prompt }}

// Access detected intents
{{ $json.reasoning.intents }}

// Access department
{{ $json.reasoning.department }}

// Access user ID
{{ $json.metadata.userId }}

// Access confidence score
{{ $json.reasoning.confidence }}
```

## 💡 Example Workflows

### Finance Department Workflow

```
Webhook Trigger
    ↓
IF: Department == "Finance Department"
    ├→ YES: Execute Finance Logic
    │   ├→ Check Intent (reconciliation/reporting/financial)
    │   ├→ Execute Corresponding Logic
    │   └→ Return Financial Response
    └→ NO: Pass to Default Handler
    ↓
Return Response
```

**Example n8n nodes:**

```
1. Webhook Node (trigger)
2. IF Statement:
   - Condition: $json.reasoning.department === "Finance Department"
3. Route to Finance Handler
4. HTTP Request or Function Node:
   - Call your finance APIs
   - Process the data
   - Return result
```

### Generic Department Router

```javascript
// In an n8n Function Node
const department = $json.reasoning.department;
const intents = $json.reasoning.intents;
const prompt = $json.prompt;

// Route logic
switch(department) {
  case 'Finance Department':
    return {
      handler: 'finance',
      intents: intents,
      prompt: prompt
    };
  
  case 'Human Resources Department':
    return {
      handler: 'hr',
      intents: intents,
      prompt: prompt
    };
  
  case 'Sales Department':
    return {
      handler: 'sales',
      intents: intents,
      prompt: prompt
    };
  
  default:
    return {
      handler: 'default',
      intents: intents,
      prompt: prompt,
      message: `Not implemented for ${department}`
    };
}
```

## 🔄 Step 4: Return Response

The backend expects a response. Simple responses:

```json
{
  "success": true,
  "result": "Your custom result",
  "message": "Processing complete"
}
```

Or include processed data:

```json
{
  "success": true,
  "department": "Finance Department",
  "action": "reconciliation_started",
  "data": {
    "taskId": "task-123",
    "status": "in_progress",
    "details": {
      "accounts": 47,
      "matching": 45,
      "discrepancies": 2,
      "startTime": "2026-03-05T13:09:52Z"
    }
  },
  "nextSteps": ["Review discrepancies", "Generate report"]
}
```

## 🧪 Step 5: Testing

### Test in n8n

1. Click **Execute Workflow**
2. Backend will see your test webhook as active
3. Send a request from backend:

```bash
curl -X POST https://royalchrisking.app.n8n.cloud/webhook-test/main-command \
  -H "Content-Type: application/json" \
  -d '{
    "reasoning": {
      "intents": ["test"],
      "department": "Test Department",
      "confidence": 1.0,
      "isFollowUp": false,
      "userHistory": 0
    },
    "prompt": "Test message",
    "metadata": {
      "timestamp": "2026-03-05T13:09:52Z",
      "userId": "test",
      "backend_version": "2.0"
    }
  }'
```

### Activate for Production

1. Remove "test" mode (click Execute again)
2. Workflow must be **Active** (toggle on)
3. Use primary webhook: `https://.../webhook/main-command`
4. Now backend's retry logic will use your workflow

## 📝 Complete Example Workflow (n8n)

### Basic Echo Workflow

```
1. [Webhook Trigger]
   └─ POST /main-command

2. [JavaScript Node]
   Code:
   return {
     received_prompt: $json.prompt,
     received_department: $json.reasoning.department,
     received_intents: $json.reasoning.intents,
     timestamp: new Date().toISOString(),
     echo_status: "Success"
   };

3. [HTTP Request]
   Method: POST
   URL: http://localhost:3001/test-response
   Body: {{$json}}

4. [Set Response]
   Response: 
   {
     "success": true,
     "message": "Workflow processed successfully",
     "processed_data": {{$json}}
   }
```

### Finance Reconciliation Workflow

```
1. [Webhook Trigger]

2. [IF Node]
   - Check: $json.reasoning.intents includes "reconciliation"

3. If YES:
   [HTTP Request - Get Account Data]
   URL: http://your-api.com/accounts
   
   [Function Node - Reconcile]
   // Reconciliation logic
   
   [Return Success Response]
   
4. If NO:
   [Return Error Response]
   "Workflow expects reconciliation intent"
```

## 🚨 Error Handling

The backend handles these webhook errors:

```
1. Connection Timeout
   → Retries (configurable)
   → Falls back to test webhook
   → Returns error to frontend

2. HTTP Errors (4xx, 5xx)
   → Logs error
   → Attempts fallback
   → Returns n8n error to frontend

3. Invalid JSON Response
   → Returns raw response text
   → Frontend handles gracefully
   → Logs for debugging
```

### Making Your Workflow Robust

```
1. Always return valid JSON
2. Include "success" field
3. Provide meaningful error messages
4. Log request data for debugging
5. Handle missing fields gracefully
6. Validate input before processing
```

## 🔌 Advanced: Chaining Workflows

From your webhook workflow, call other workflows:

```javascript
// In n8n Function Node

const intents = $json.reasoning.intents;
const department = $json.reasoning.department;

// Call specific workflow
if (intents.includes('financial')) {
  // Trigger financial workflow
  return {
    workflow: 'financial-analysis',
    intents: intents,
    forward_payload: $json
  };
}
```

Then use **Webhook** node as caller to other workflows.

## 📊 Monitoring

### Check Webhook Usage

In n8n Workflow Editor:
1. Open **Executions** tab
2. Filter by webhook path: `/main-command`
3. View execution log with timestamps
4. Check request/response bodies

### Debug Payloads

Add a debug step:

```
[Webhook Trigger]
    ↓
[Execute Workflow Log]
Message: {{ JSON.stringify($json, null, 2) }}
    ↓
[Continue...]
```

## 🔐 Security Considerations

### For Production:

1. **Add Authentication**
   ```
   Webhook → Authentication: Basic Auth
   Add credentials in backend .env
   ```

2. **Validate Origin**
   ```javascript
   // In Function Node
   const validOrigins = ['localhost:3001', 'your-domain.com'];
   if (!validOrigins.includes($json.metadata.userId)) {
     throw new Error('Unauthorized');
   }
   ```

3. **Rate Limiting**
   ```
   Configure n8n workflow limits
   Implement in backend
   ```

4. **HTTPS Only**
   - Ensure all URLs use HTTPS
   - Validate SSL certificates

## 📚 n8n Resources

- [n8n Webhook Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.webhook/)
- [HTTP Request Node](https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest/)
- [JavaScript Node](https://docs.n8n.io/nodes/n8n-nodes-base.functionItem/)
- [Workflow Best Practices](https://docs.n8n.io/workflows/best-practices/)

## 🎯 Integration Checklist

- ✅ Webhook node added to workflow
- ✅ Path set to `/main-command`
- ✅ Workflow logic handles all intents
- ✅ Valid JSON response returned
- ✅ Error handling implemented
- ✅ Tested with curl/Postman
- ✅ Test webhook validates data
- ✅ Workflow activated for production
- ✅ Monitoring in place
- ✅ Documentation updated

## 🆘 Troubleshooting

### "Webhook not registered"
**Cause:** Workflow created but not enabled  
**Solution:** Click the toggle to **Activate this workflow**

### "Invalid JSON response"
**Cause:** Webhook returns non-JSON  
**Solution:** Ensure last node returns JSON or use Set Response node

### Timeout errors
**Cause:** Workflow takes >10 seconds  
**Solution:** 
- Optimize workflow logic
- Use async operations
- Increase timeout in backend (if configurable)

### Backend retries too much
**Cause:** Webhook consistently fails  
**Solution:**
1. Check workflow is active
2. Review workflow logs
3. Test manually with curl
4. Add logging/monitoring

## 📞 Need Help?

1. Test webhook independently:
   ```bash
   curl -X POST https://your-webhook-url \
     -H "Content-Type: application/json" \
     -d '{"test": "data"}'
   ```

2. Check n8n execution logs
3. Review backend logs for errors
4. Validate JSON with [JSONLint](https://jsonlint.com/)

---

**Your n8n integration is now connected to Virtual Worker backend!** 🚀

Website → Frontend → Backend → n8n Workflows
