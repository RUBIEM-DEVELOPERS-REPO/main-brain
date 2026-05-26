# Frontend Integration Guide - Virtual Worker Backend v2.0

## 🎯 Quick Start

Connect your React frontend to the Virtual Worker backend in 5 minutes.

## 📦 Installation

### 1. Install HTTP Client
```bash
npm install axios
# or use fetch (built-in to modern browsers)
```

## 🔗 Basic Integration

### Simple Service File

Create `src/services/backendService.js`:

```javascript
// src/services/backendService.js
const API_URL = 'http://localhost:3001';

export const sendMainCommand = async (prompt, tags = {}, userId = null) => {
  try {
    const response = await fetch(`${API_URL}/main-command`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId || `user-${Date.now()}`,
        tags,
        prompt
      })
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.statusCode}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Backend call failed:', error);
    throw error;
  }
};

export const getHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('Health check failed:', error);
    return null;
  }
};

export const getAgents = async () => {
  try {
    const response = await fetch(`${API_URL}/agents`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch agents:', error);
    return [];
  }
};
```

### React Component Example

Create `src/components/CommandInput.jsx`:

```jsx
// src/components/CommandInput.jsx
import { useState } from 'react';
import { sendMainCommand } from '../services/backendService';

export function CommandInput() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await sendMainCommand(prompt, {
        primary: 'Task Router'
      });

      setResponse(result);
      setPrompt(''); // Clear input on success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="command-input">
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your request..."
          disabled={loading}
          rows={4}
        />
        <button type="submit" disabled={loading || !prompt}>
          {loading ? 'Processing...' : 'Send Command'}
        </button>
      </form>

      {response && (
        <div className="response">
          <h3>Response</h3>
          
          {/* Display Reasoning Info */}
          {response.reasoning && (
            <div className="reasoning-box">
              <h4>Reasoning Analysis</h4>
              <p><strong>Department:</strong> {response.reasoning.department}</p>
              <p><strong>Intents:</strong> {response.reasoning.intents.join(', ')}</p>
              <p><strong>Confidence:</strong> {(response.reasoning.confidence * 100).toFixed(0)}%</p>
            </div>
          )}

          {/* Display Response Data */}
          {response.success ? (
            <div className="success">
              <h4>Result</h4>
              <pre>{JSON.stringify(response.data, null, 2)}</pre>
            </div>
          ) : (
            <div className="error">
              <h4>Error</h4>
              <p>{response.data?.error || 'Unknown error'}</p>
            </div>
          )}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
```

## 🎨 Complete App Component

Create or update your main app:

```jsx
// src/App.jsx
import { useState, useEffect } from 'react';
import { CommandInput } from './components/CommandInput';
import { getHealth } from './services/backendService';

function App() {
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    checkBackendHealth();
  }, []);

  const checkBackendHealth = async () => {
    const health = await getHealth();
    if (health?.status === 'healthy') {
      setBackendStatus('healthy');
    } else {
      setBackendStatus('offline');
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Virtual Worker Command Center</h1>
        <div className={`status ${backendStatus}`}>
          Backend: {backendStatus === 'healthy' ? '🟢 Online' : '🔴 Offline'}
        </div>
      </header>

      <main>
        {backendStatus === 'healthy' ? (
          <CommandInput />
        ) : (
          <div className="error-message">
            <h2>⚠️ Backend Offline</h2>
            <p>Make sure the backend server is running:</p>
            <code>cd backend && npm start</code>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
```

## 📋 Request/Response Format

### What to Send

```javascript
{
  // Required
  "prompt": "Reconcile accounts for Q1",

  // Optional - identifies the user
  "userId": "user123",

  // Optional - tags for routing (auto-detected if omitted)
  "tags": {
    "primary": "Finance Department"
  }
}
```

### What You Get Back

```javascript
{
  "success": true,             // Operation success
  "data": { /* n8n response */ },
  "reasoning": {
    "department": "Finance Department",
    "intents": ["reconciliation", "reporting"],
    "confidence": 0.9
  },
  "timestamp": "2026-03-05T13:09:52.672Z"
}
```

## 🧠 Understanding the Reasoning Response

The backend provides reasoning data to help your frontend understand how the request was processed:

```javascript
const { reasoning } = response;

// Department: Where the request was routed
console.log(reasoning.department); // "Finance Department"

// Intents: What the user is trying to do
console.log(reasoning.intents);    // ["reconciliation", "reporting"]

// Confidence: How sure the system is (0-1)
console.log(reasoning.confidence); // 0.9 means 90% sure
```

## 🔄 Advanced: Conversation Tracking

For multi-turn conversations, track user sessions:

```javascript
// Create a unique session ID for the user
const sessionId = `user-${Date.now()}`;

// All requests from this session will be tracked on the backend
const response = await sendMainCommand(prompt, tags, sessionId);

// The backend will:
// - Track conversation history
// - Detect if this is a follow-up message
// - Maintain context across requests
```

## 🎯 Real-World Examples

### Example 1: Finance Analysis

```jsx
function FinanceModule() {
  const handleFinanceRequest = async (queryText) => {
    const response = await sendMainCommand(queryText, {
      primary: 'Account Reconciliation Agent'
    });

    if (response.reasoning.department === 'Finance Department') {
      displayFinancialAnalysis(response.data);
    }
  };

  return (
    <button onClick={() => handleFinanceRequest('Reconcile accounts')}>
      Start Reconciliation
    </button>
  );
}
```

### Example 2: Task Routing

```jsx
function TaskManager() {
  const handleTaskCreation = async (taskDescription) => {
    const response = await sendMainCommand(taskDescription);

    // The backend automatically detected the intent
    console.log('Detected intents:', response.reasoning.intents);
    console.log('Route to:', response.reasoning.department);

    if (response.reasoning.intents.includes('task')) {
      assignTaskToTeam(response.data);
    }
  };

  return <input onBlur={e => handleTaskCreation(e.target.value)} />;
}
```

### Example 3: Dynamic Department Routing

```jsx
function DynamicRouter() {
  const [response, setResponse] = useState(null);

  const submit = async (prompt) => {
    const res = await sendMainCommand(prompt);
    setResponse(res);

    // Let the backend decide - show appropriate UI based on department
    switch (res.reasoning.department) {
      case 'Finance Department':
        showFinanceUI();
        break;
      case 'Human Resources Department':
        showHRUI();
        break;
      case 'Sales Department':
        showSalesUI();
        break;
      // ... etc
    }
  };

  return <CommandInput onSubmit={submit} />;
}
```

## 🛠️ Styling Guide

### CSS for Reasoning Display

```css
.reasoning-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.reasoning-box h4 {
  margin-top: 0;
  margin-bottom: 12px;
}

.reasoning-box .confidence {
  font-size: 14px;
  font-weight: bold;
}

.confidence-high {
  color: #4ade80; /* green */
}

.confidence-medium {
  color: #facc15; /* yellow */
}

.confidence-low {
  color: #ef4444; /* red */
}
```

## ⚠️ Error Handling

The backend returns errors gracefully:

```javascript
const response = await sendMainCommand(prompt);

// Always check if successful
if (response.success) {
  // Use response.data
} else {
  // Handle error
  console.error(response.data.error);

  // Backend attempted n8n webhooks
  if (response.data.primaryError) {
    console.warn('Primary webhook failed:', response.data.primaryError);
  }
  if (response.data.fallbackError) {
    console.warn('Fallback webhook failed:', response.data.fallbackError);
  }
}
```

## 🔗 CORS Configuration

The backend has CORS enabled for localhost:

```javascript
// In backend/server.js
app.use(cors());
```

For production, restrict it:

```javascript
app.use(cors({
  origin: ['https://yourdomain.com'],
  credentials: true
}));
```

## 🚨 Troubleshooting

### Backend Connection Failed
```javascript
// Error: "Failed to fetch" or "CORS error"

// Solutions:
1. Verify backend is running on port 3001
2. Check browser console for specific error
3. Use curl to test manually:
   curl http://localhost:3001/health
```

### n8n Webhook Errors
```javascript
// Error: "HTTP 404: webhook not registered"

// Solutions:
1. Create n8n workflow with webhook trigger
2. Trigger webhook names "main-command"
3. Ensure workflow is active/enabled
4. Test n8n webhook with curl or Postman
```

### Session Not Tracking
```javascript
// Sessions are in-memory only
// They reset when backend restarts

// For persistence, implement:
// 1. Redis cache for session storage
// 2. Database for long-term storage
// 3. Pass userId for manual tracking
```

## 📚 API Reference Quick View

| Endpoint | Method | Use Case |
|----------|--------|----------|
| `/main-command` | POST | Primary - everything |
| `/health` | GET | Check backend status |
| `/agents` | GET | List available agents |
| `/sessions` | GET | Debug session info |
| `/finance/reconcile` | POST | Direct agent call |
| `/finance/report` | POST | Financial reports |
| `/database/query` | POST | Query interface |
| `/tasks/route` | POST | Task routing |

## 🔄 Full Example Component

```jsx
// src/components/FullExample.jsx
import { useState } from 'react';
import { sendMainCommand } from '../services/backendService';

export function FullExample() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      const result = await sendMainCommand(input);
      
      setHistory([...history, {
        prompt: input,
        response: result,
        timestamp: new Date().toLocaleTimeString()
      }]);
      
      setInput('');
    } catch (error) {
      setHistory([...history, {
        prompt: input,
        error: error.message,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="full-example">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your request..."
          disabled={loading}
        />
        <button disabled={loading || !input}>
          {loading ? '⏳ Processing' : '📤 Send'}
        </button>
      </form>

      <div className="conversation">
        {history.map((entry, idx) => (
          <div key={idx} className="message-pair">
            <div className="user-message">
              <strong>You:</strong> {entry.prompt}
            </div>
            {entry.response && (
              <div className="assistant-message">
                <strong>Backend:</strong>
                <div className="meta">
                  🏢 {entry.response.reasoning?.department}
                  {' '}|{' '}
                  💯 {(entry.response.reasoning?.confidence * 100).toFixed(0)}%
                </div>
                <div className="status">
                  {entry.response.success ? '✅ Success' : '❌ Error'}
                </div>
              </div>
            )}
            {entry.error && (
              <div className="error-message">
                <strong>Error:</strong> {entry.error}
              </div>
            )}
            <small className="timestamp">{entry.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 🎓 Next Steps

1. **Basic Integration** - Copy the service file and use in a component
2. **Add Styling** - Use the CSS examples to match your design
3. **Test** - Use the test commands at the bottom
4. **Deploy** - Update API_URL for production
5. **Monitor** - Track reasoning data and user feedback

## 🧪 Manual Testing

Test the backend directly:

```bash
# Test health check
curl http://localhost:3001/health

# Test main command
curl -X POST http://localhost:3001/main-command \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Reconcile accounts",
    "tags": {"primary": "Finance Department"}
  }'

# View agents
curl http://localhost:3001/agents
```

---

**Ready to integrate?** Start with the Basic Integration section above! 🚀
