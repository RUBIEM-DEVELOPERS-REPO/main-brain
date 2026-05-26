# Virtual Worker Frontend Integration Guide

## 🎯 Overview

This guide shows you how to integrate your Virtual Worker backend (v2.1) with the Replit UI builder at `https://Virtualworker-ui-builder.replit.app`.

## 📋 Prerequisites

### Backend Setup
1. **Backend v2.1** must be running on `localhost:3001`
2. **Database schema** must be created in Supabase
3. **Response formatting** must be active

### Frontend Requirements
- React (18+)
- Lucide React icons
- Modern browser with ES6 support

## 🚀 Quick Start Integration

### Option 1: Use the Standalone Demo

1. **Open your Replit app** at `https://Virtualworker-ui-builder.replit.app`
2. **Copy the contents** of `VirtualWorkerDemo.html`
3. **Paste into Replit's HTML editor**
4. **Run the app** - it will connect to your backend automatically

### Option 2: Integrate Components into Existing App

1. **Copy the component files:**
   - `src/VirtualWorkerIntegration.jsx`
   - `src/VirtualWorkerIntegration.css`

2. **Import and use in your React app:**
```jsx
import VirtualWorkerIntegration from './VirtualWorkerIntegration';
import './VirtualWorkerIntegration.css';

function App() {
  return (
    <div>
      <h1>My Virtual Worker App</h1>
      <VirtualWorkerIntegration />
    </div>
  );
}
```

## 🔧 Component API

### VirtualWorkerIntegration Props

```jsx
<VirtualWorkerIntegration
  apiUrl="http://localhost:3001"  // Backend URL (optional, defaults to localhost:3001)
  userId="custom-user-id"        // User identifier (optional, auto-generated)
/>
```

### Response Format

The component expects this response format from `/main-command`:

```json
{
  "success": true,
  "execution": {
    "status": "success|error",
    "title": "Human-readable title",
    "section": "Department section",
    "results": {
      "type": "financial|hr|sales|marketing|generic",
      "data": { /* Department-specific data */ },
      "actions": ["Action 1", "Action 2", "Action 3"]
    }
  },
  "reasoning": {
    "department": "Finance Department",
    "intents": ["reconciliation", "reporting"],
    "confidence": 0.92
  },
  "timestamp": "2026-03-05T14:23:45.123Z"
}
```

## 🎨 Customization

### Styling
The component uses CSS custom properties for theming:

```css
.virtual-worker-integration {
  --bg-base: #ffffff;
  --bg-header: #f9fafb;
  --text-pri: #1f2937;
  --text-sec: #6b7280;
  --accent: #3b82f6;
  --border: #e5e7eb;
  --green: #10b981;
  --red: #ef4444;
}
```

### Department-Specific Rendering

Add new department types by extending the `renderResults()` function:

```jsx
const renderCustomResults = (data) => (
  <div className="custom-results">
    {/* Your custom rendering logic */}
  </div>
);

// Add to switch statement
case 'custom':
  return renderCustomResults(data);
```

## 🔌 Backend Connection

### CORS Configuration
If you encounter CORS errors, add this to your backend:

```javascript
// In server.js
app.use(cors({
  origin: ['https://Virtualworker-ui-builder.replit.app', 'http://localhost:3001'],
  credentials: true
}));
```

### Network Requirements
- Replit app must be able to reach `localhost:3001` on your machine
- If running on different networks, use ngrok or similar tunneling service

## 🧪 Testing

### Test Commands

1. **Finance Test:**
```bash
curl -X POST http://localhost:3001/main-command \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Reconcile March accounts"}'
```

2. **Error Test:**
```bash
curl -X POST http://localhost:3001/main-command \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Invalid request"}'
```

### Expected Results

**Success Response:**
- Status badge shows "Success" with green checkmark
- Department-specific data displayed
- Action buttons rendered
- Confidence score shown

**Error Response:**
- Status badge shows "Failed" with red X
- Error details displayed
- Original prompt preserved

## 📊 Analytics Integration

### Track User Interactions

```jsx
const handleAction = (action) => {
  // Send to your analytics service
  analytics.track('virtual_worker_action', {
    action,
    department: execution.department,
    confidence: execution.confidence,
    timestamp: new Date().toISOString()
  });

  // Handle the action
  executeWorkflowAction(action);
};
```

### Monitor API Performance

```jsx
const startTime = Date.now();

const response = await fetch('/main-command', {...});
const data = await response.json();

const responseTime = Date.now() - startTime;

// Log performance
console.log(`API Response Time: ${responseTime}ms`);
```

## 🚨 Troubleshooting

### "Failed to fetch" Error
**Cause:** Backend not running or CORS issue
**Solution:**
1. Verify backend is running: `curl http://localhost:3001/health`
2. Check CORS settings in backend
3. Ensure Replit can reach your localhost

### "Invalid response format" Error
**Cause:** Backend not updated to v2.1
**Solution:**
1. Update backend to v2.1
2. Verify response includes `execution` field
3. Check backend logs for errors

### Actions Not Showing
**Cause:** `execution.results.actions` is empty or missing
**Solution:**
1. Check backend response includes actions array
2. Verify department-specific formatting includes actions

### Styling Issues
**Cause:** CSS conflicts or missing styles
**Solution:**
1. Import `VirtualWorkerIntegration.css`
2. Check for CSS custom property conflicts
3. Use browser dev tools to inspect elements

## 🔄 Updating from v2.0

### Breaking Changes
- `response.data` → `response.execution`
- New response structure with `results.type`
- Actions moved to `execution.results.actions`

### Migration Steps
1. Update API calls to expect new response format
2. Replace `data.data` with `data.execution`
3. Handle department-specific `results.type`
4. Update action handling for new structure

## 📚 File Structure

```
virtual-worker-frontend/
├── src/
│   ├── VirtualWorkerIntegration.jsx    # Main component
│   ├── VirtualWorkerIntegration.css    # Styles
│   └── VirtualWorkerDemo.html          # Standalone demo
├── package.json                        # Dependencies
└── README.md                          # This file
```

## 📞 Support

### Common Issues
- **Backend Connection:** Check if backend is running on port 3001
- **CORS Errors:** Add Replit domain to CORS origins
- **Response Format:** Ensure backend is v2.1 with formatting enabled
- **Database:** Verify Supabase schema is created

### Debug Mode
Enable debug logging in backend:
```javascript
// In .env
DEBUG=true
```

This will include `rawData` and `_debug` fields in responses.

---

## 🎯 Next Steps

1. ✅ **Test the integration** with the demo HTML file
2. ✅ **Customize styling** to match your Replit app theme
3. ✅ **Add action handlers** for workflow execution
4. ✅ **Implement analytics** for user behavior tracking
5. ✅ **Add error boundaries** for production use

---

**Integration Version:** 2.1  
**Compatible Backend:** v2.1+  
**Last Updated:** March 5, 2026
