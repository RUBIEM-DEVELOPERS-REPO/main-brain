# Integrated Company Dashboard System — Project Plan & Technical Blueprint

## 1. Project Overview

### System Name
**Integrated Company Dashboard System**

### Purpose
Build a consolidated dashboard that connects to the company’s internal systems and gives one central view of the company’s operations, including:

- Financial performance
- Marketing and social media activity
- Administrative operations
- Alerts, summaries, and agent-driven insights
- API and database connection management

The system should allow the company to add and manage connections to different internal systems, collect data automatically, normalize it, and present useful highlights through a single dashboard.

---

## 2. Core Objectives

1. **Connect multiple company systems**
   - Financial systems
   - Marketing systems
   - Social media systems
   - Admin systems
   - Internal databases
   - Custom APIs

2. **Create a central dashboard**
   - View company-wide performance from one place.
   - Show financial, marketing, and admin highlights.
   - Support executive-level summaries and operational drill-downs.

3. **Provide a connection management page**
   - Add API connections.
   - Add database connections.
   - Store credentials securely.
   - Test connections.
   - Enable or disable integrations.

4. **Use agents and Skills**
   - Agents should collect, clean, analyze, summarize, and alert on company data.
   - Skills should define repeatable workflows for each operational area.

5. **Support future expansion**
   - New systems should be easy to connect.
   - New dashboard modules should be easy to add.
   - New agent Skills should be easy to define.

---

## 3. Target Users

### Executive / Owner
Needs a high-level company view:

- Revenue
- Expenses
- Profit/loss indicators
- Cash position
- Marketing performance
- Social media growth
- Admin issues
- Alerts and risks

### Finance Team
Needs financial visibility:

- Income
- Expenses
- Receivables
- Payables
- Invoices
- Budget vs actuals
- Cash flow

### Marketing Team
Needs campaign and audience visibility:

- Leads
- Campaign performance
- Website traffic
- Social media engagement
- Ad spend
- Conversion rates

### Admin / Operations Team
Needs operational visibility:

- Tasks
- Approvals
- Staff/admin activities
- Documents
- Internal requests
- Compliance reminders

---

## 4. Main System Modules

## 4.1 Dashboard Home

The dashboard home should show a company-wide overview.

### Recommended Widgets

#### Financial Highlights
- Total revenue
- Total expenses
- Net profit / loss
- Cash balance
- Outstanding invoices
- Upcoming payments
- Month-over-month change

#### Marketing & Social Media
- Total leads
- Campaign performance
- Ad spend
- Cost per lead
- Website visits
- Social media followers
- Social media engagement
- Top-performing channels

#### Admin Operations
- Pending approvals
- Open tasks
- Completed tasks
- Overdue items
- Staff/admin workload
- Important reminders
- Internal process alerts

#### Agent Insights
- Daily company summary
- Unusual activity alerts
- Recommendations
- Data quality warnings
- Performance trends

---

## 4.2 Connections Page

This page allows users to connect external and internal systems.

### Connection Types

#### API Connections
Fields:

- Connection name
- System category: finance, marketing, admin, social, custom
- Base API URL
- Authentication type
  - API key
  - OAuth
  - Bearer token
  - Basic auth
- Credentials / tokens
- Sync frequency
- Status: active, inactive, failed
- Last sync time
- Test connection button

#### Database Connections
Fields:

- Connection name
- Database type
  - PostgreSQL
  - MySQL
  - SQL Server
  - MongoDB
  - SQLite
  - Other
- Host
- Port
- Database name
- Username
- Password / secret reference
- SSL setting
- Sync frequency
- Status
- Test connection button

#### File / Spreadsheet Connections
Optional future support:

- Google Sheets
- Excel uploads
- CSV uploads
- Cloud storage folders

---

## 4.3 Data Integration Layer

The data integration layer collects information from all connected systems.

### Responsibilities

- Pull data from APIs.
- Query connected databases.
- Schedule automatic syncs.
- Normalize different data formats.
- Detect missing or broken data.
- Store clean data in the dashboard database.
- Keep logs of each sync.

### Data Flow

```text
External Systems / Internal Systems
        ↓
Connection Manager
        ↓
Data Ingestion Jobs
        ↓
Validation & Normalization
        ↓
Central Dashboard Database
        ↓
Analytics Layer
        ↓
Dashboard UI + Agent Insights
```

---

## 4.4 Central Dashboard Database

The system should maintain its own internal database for normalized dashboard data.

### Suggested Core Tables

#### connections
Stores API and database connections.

Fields:

- id
- name
- type: api, database, file
- category: finance, marketing, admin, social, custom
- config_json
- secret_reference
- status
- last_sync_at
- created_at
- updated_at

#### sync_jobs
Tracks every sync job.

Fields:

- id
- connection_id
- status: pending, running, success, failed
- started_at
- completed_at
- records_processed
- error_message

#### financial_metrics
Stores normalized financial highlights.

Fields:

- id
- source_connection_id
- metric_date
- revenue
- expenses
- profit
- cash_balance
- receivables
- payables
- created_at

#### marketing_metrics
Stores marketing and campaign data.

Fields:

- id
- source_connection_id
- metric_date
- channel
- campaign_name
- spend
- impressions
- clicks
- leads
- conversions
- cost_per_lead
- created_at

#### social_metrics
Stores social media data.

Fields:

- id
- source_connection_id
- metric_date
- platform
- followers
- posts
- impressions
- engagement
- clicks
- created_at

#### admin_metrics
Stores admin and operational data.

Fields:

- id
- source_connection_id
- metric_date
- open_tasks
- completed_tasks
- overdue_tasks
- pending_approvals
- internal_requests
- created_at

#### agent_insights
Stores agent-generated insights.

Fields:

- id
- insight_type
- category
- title
- summary
- severity: info, warning, critical
- source_data_json
- created_at

---

## 5. Technical Architecture

## 5.1 Recommended Stack

### Frontend
- React / Next.js
- Dashboard UI components
- Charts and tables
- Admin settings pages

### Backend
- Node.js / NestJS or Python / FastAPI
- REST API or GraphQL API
- Authentication and permissions
- Integration workers

### Database
- PostgreSQL for primary dashboard data
- Redis for queues and caching

### Background Jobs
- BullMQ, Celery, or similar job queue
- Scheduled syncs
- Retry failed jobs
- Run agent workflows

### Agent Layer
- Agent orchestrator
- Skill-based workflows
- Data analysis and reporting
- Alerts and recommendations

### Security
- Encrypted secrets
- Role-based access control
- Audit logs
- Connection permission checks

---

## 5.2 High-Level Architecture

```text
Frontend Dashboard
   ├── Executive Overview
   ├── Finance View
   ├── Marketing View
   ├── Social Media View
   ├── Admin View
   └── Connections Page

Backend API
   ├── Auth Service
   ├── Dashboard Data API
   ├── Connection Manager
   ├── Sync Job Manager
   ├── Agent Orchestrator
   └── Alert Service

Workers
   ├── API Data Collectors
   ├── Database Data Collectors
   ├── Data Normalizers
   ├── Metric Calculators
   └── Agent Insight Generators

Storage
   ├── PostgreSQL
   ├── Redis Queue
   ├── Secrets Vault
   └── Logs / Audit Store
```

---

## 6. Agent Skills Design

The system should include reusable Skills that guide agents through specific workflows.

Recommended folder structure:

```text
skills/
├── finance-data-ingestion/
│   └── SKILL.md
├── finance-analysis/
│   └── SKILL.md
├── marketing-data-ingestion/
│   └── SKILL.md
├── marketing-performance-analysis/
│   └── SKILL.md
├── social-media-monitoring/
│   └── SKILL.md
├── admin-operations-monitoring/
│   └── SKILL.md
├── connection-diagnostics/
│   └── SKILL.md
├── dashboard-summary-reporting/
│   └── SKILL.md
└── anomaly-alerting/
    └── SKILL.md
```

---

## 6.1 Skill: Finance Data Ingestion

### File
`skills/finance-data-ingestion/SKILL.md`

### Purpose
Guide the agent when collecting financial data from finance systems, APIs, or databases.

### Responsibilities

- Identify the finance connection.
- Pull revenue, expenses, invoices, payments, and cash data.
- Validate date ranges and currency.
- Normalize data into the financial metrics schema.
- Report missing or inconsistent records.

### Draft SKILL.md

```md
---
name: finance-data-ingestion
description: collect, validate, and normalize financial data from connected finance systems, APIs, databases, spreadsheets, or custom internal systems for the consolidated company dashboard. Use when syncing revenue, expenses, invoices, payments, cash balances, receivables, payables, or other finance metrics.
---

# Finance Data Ingestion

## Goal
Collect financial data from approved finance connections and prepare it for the central dashboard database.

## Workflow
1. Identify the active finance connection.
2. Confirm connection type: API, database, spreadsheet, or custom source.
3. Collect relevant financial records:
   - Revenue
   - Expenses
   - Invoices
   - Payments
   - Cash balances
   - Receivables
   - Payables
4. Validate required fields:
   - Date
   - Amount
   - Currency
   - Account/category
   - Source reference
5. Normalize data into dashboard-ready metrics.
6. Flag missing, duplicate, or inconsistent records.
7. Return a sync summary with record counts, errors, and warnings.

## Output Format
Return:
- Sync status
- Source connection
- Date range
- Records processed
- Metrics created
- Errors
- Warnings
- Recommended follow-up actions
```

---

## 6.2 Skill: Finance Analysis

### File
`skills/finance-analysis/SKILL.md`

```md
---
name: finance-analysis
description: analyze financial metrics for the consolidated company dashboard. Use when generating revenue summaries, expense analysis, profit trends, cash flow highlights, invoice status, budget comparisons, financial risks, or executive finance insights.
---

# Finance Analysis

## Goal
Analyze normalized financial data and produce useful business insights.

## Workflow
1. Review the selected financial reporting period.
2. Compare current period against previous period.
3. Identify key movements in:
   - Revenue
   - Expenses
   - Profit
   - Cash balance
   - Receivables
   - Payables
4. Detect unusual changes or risks.
5. Produce concise dashboard highlights.

## Output Format
Return:
- Financial highlights
- Positive movements
- Risks or concerns
- Unusual changes
- Recommended actions
```

---

## 6.3 Skill: Marketing Data Ingestion

### File
`skills/marketing-data-ingestion/SKILL.md`

```md
---
name: marketing-data-ingestion
description: collect, validate, and normalize marketing data from connected marketing systems, advertising platforms, CRMs, analytics tools, APIs, databases, or spreadsheets for the consolidated company dashboard. Use when syncing leads, campaigns, spend, impressions, clicks, conversions, traffic, or campaign performance data.
---

# Marketing Data Ingestion

## Goal
Collect marketing data from connected systems and prepare it for dashboard reporting.

## Workflow
1. Identify active marketing connections.
2. Collect campaign and channel data:
   - Leads
   - Spend
   - Impressions
   - Clicks
   - Conversions
   - Traffic
   - Campaign names
   - Channel names
3. Validate required fields.
4. Normalize channel and campaign names.
5. Calculate derived metrics:
   - Cost per lead
   - Conversion rate
   - Click-through rate
6. Store normalized results for dashboard use.
7. Report errors and missing data.

## Output Format
Return:
- Sync status
- Channels processed
- Campaigns processed
- Metrics created
- Errors
- Warnings
```

---

## 6.4 Skill: Marketing Performance Analysis

### File
`skills/marketing-performance-analysis/SKILL.md`

```md
---
name: marketing-performance-analysis
description: analyze marketing and campaign performance for the consolidated company dashboard. Use when generating insights about leads, ad spend, conversion rates, campaign performance, customer acquisition cost, website traffic, marketing ROI, or underperforming channels.
---

# Marketing Performance Analysis

## Goal
Analyze marketing performance and identify what is working, what is wasting spend, and what needs attention.

## Workflow
1. Review selected reporting period.
2. Compare performance by channel and campaign.
3. Identify top-performing campaigns.
4. Identify weak or expensive campaigns.
5. Calculate important metrics:
   - Cost per lead
   - Conversion rate
   - Return on ad spend, where revenue data is available
   - Click-through rate
6. Highlight trends and recommended actions.

## Output Format
Return:
- Marketing highlights
- Best-performing channels
- Underperforming channels
- Spend concerns
- Growth opportunities
- Recommended actions
```

---

## 6.5 Skill: Social Media Monitoring

### File
`skills/social-media-monitoring/SKILL.md`

```md
---
name: social-media-monitoring
description: collect and analyze social media data for the consolidated company dashboard. Use when syncing or summarizing followers, posts, reach, impressions, engagement, clicks, audience growth, or social media performance across connected social platforms.
---

# Social Media Monitoring

## Goal
Track social media activity and summarize audience growth and engagement.

## Workflow
1. Identify connected social media platforms.
2. Collect social metrics:
   - Followers
   - Posts
   - Impressions
   - Reach
   - Engagement
   - Clicks
3. Compare against previous period.
4. Identify highest-performing platforms and posts.
5. Detect unusual drops or spikes.
6. Produce dashboard-ready summary.

## Output Format
Return:
- Social media highlights
- Platform comparison
- Audience growth
- Engagement summary
- Alerts
- Recommended actions
```

---

## 6.6 Skill: Admin Operations Monitoring

### File
`skills/admin-operations-monitoring/SKILL.md`

```md
---
name: admin-operations-monitoring
description: collect and analyze administrative and operational data for the consolidated company dashboard. Use when tracking tasks, approvals, requests, internal processes, workload, overdue items, compliance reminders, or admin team activity.
---

# Admin Operations Monitoring

## Goal
Monitor admin operations and surface issues that need attention.

## Workflow
1. Identify active admin systems or databases.
2. Collect operational data:
   - Open tasks
   - Completed tasks
   - Overdue tasks
   - Pending approvals
   - Internal requests
   - Reminders
3. Group items by category, owner, and urgency.
4. Detect overdue or blocked work.
5. Generate dashboard highlights and alerts.

## Output Format
Return:
- Admin highlights
- Pending approvals
- Overdue items
- Workload summary
- Risks or blockers
- Recommended actions
```

---

## 6.7 Skill: Connection Diagnostics

### File
`skills/connection-diagnostics/SKILL.md`

```md
---
name: connection-diagnostics
description: test, troubleshoot, and summarize API, database, file, and custom system connections used by the consolidated company dashboard. Use when adding a new connection, validating credentials, checking failed syncs, reviewing connection health, or diagnosing broken integrations.
---

# Connection Diagnostics

## Goal
Help verify and troubleshoot dashboard system connections.

## Workflow
1. Identify the connection type.
2. Check required configuration fields.
3. Test authentication.
4. Test basic data access.
5. Check permissions.
6. Review recent sync logs.
7. Explain the failure or confirm the connection is healthy.

## Output Format
Return:
- Connection status
- Authentication result
- Data access result
- Permission issues
- Error explanation
- Recommended fix
```

---

## 6.8 Skill: Dashboard Summary Reporting

### File
`skills/dashboard-summary-reporting/SKILL.md`

```md
---
name: dashboard-summary-reporting
description: generate executive summaries and dashboard reports from consolidated finance, marketing, social media, and admin data. Use when creating daily, weekly, monthly, or ad hoc company performance summaries from the integrated dashboard system.
---

# Dashboard Summary Reporting

## Goal
Turn dashboard metrics into a clear company performance summary.

## Workflow
1. Gather latest dashboard metrics across:
   - Finance
   - Marketing
   - Social media
   - Admin operations
2. Identify major changes since the previous period.
3. Summarize wins, risks, and items needing attention.
4. Keep the report concise and executive-friendly.
5. Include recommended next actions.

## Output Format
Return:
- Executive summary
- Financial highlights
- Marketing highlights
- Social media highlights
- Admin highlights
- Risks
- Recommended actions
```

---

## 6.9 Skill: Anomaly Alerting

### File
`skills/anomaly-alerting/SKILL.md`

```md
---
name: anomaly-alerting
description: detect unusual changes, risks, errors, or anomalies across finance, marketing, social media, admin, connection, and sync data in the consolidated company dashboard. Use when identifying spikes, drops, missing data, failed syncs, unusual spending, revenue changes, or overdue operational issues.
---

# Anomaly Alerting

## Goal
Detect unusual activity and create useful alerts.

## Workflow
1. Review current metrics against historical baselines.
2. Detect anomalies such as:
   - Revenue drops
   - Expense spikes
   - Campaign overspend
   - Lead drops
   - Social media engagement drops
   - Failed syncs
   - Overdue admin tasks
3. Classify severity:
   - Info
   - Warning
   - Critical
4. Explain the likely reason if available.
5. Recommend follow-up action.

## Output Format
Return:
- Alert title
- Category
- Severity
- What changed
- Why it matters
- Recommended action
```

---

## 7. Recommended Markdown Files

Create the following project files:

```text
README.md
PROJECT_PLAN.md
TECHNICAL_ARCHITECTURE.md
DATABASE_SCHEMA.md
API_CONNECTIONS.md
DASHBOARD_REQUIREMENTS.md
AGENT_SKILLS.md
SECURITY_AND_PERMISSIONS.md
IMPLEMENTATION_ROADMAP.md
```

---

## 7.1 README.md Draft

```md
# Integrated Company Dashboard System

This system consolidates company data from financial, marketing, social media, and administrative systems into one central dashboard.

## Main Features

- API and database connection management
- Financial highlights
- Marketing and social media reporting
- Admin operations monitoring
- Agent-generated insights
- Alerts and anomaly detection
- Executive dashboard summaries

## Main Modules

- Dashboard Home
- Connections Page
- Finance Module
- Marketing Module
- Social Media Module
- Admin Module
- Agent Insights Module
- Settings and Permissions

## Goal
Give the company one reliable place to view how the business is running.
```

---

## 7.2 PROJECT_PLAN.md Draft

```md
# Project Plan

## Phase 1: Discovery and Requirements

- Define all source systems.
- Define dashboard KPIs.
- Define user roles.
- Define connection types.
- Define security requirements.

## Phase 2: Core Platform

- Build authentication.
- Build dashboard layout.
- Build connections page.
- Build backend API.
- Set up dashboard database.

## Phase 3: Data Integrations

- Add API connection support.
- Add database connection support.
- Build sync jobs.
- Build normalization workflows.
- Build sync logs.

## Phase 4: Dashboard Modules

- Finance dashboard
- Marketing dashboard
- Social media dashboard
- Admin dashboard
- Executive overview

## Phase 5: Agent Layer

- Add finance ingestion skill.
- Add marketing ingestion skill.
- Add admin monitoring skill.
- Add dashboard summary skill.
- Add anomaly alerting skill.

## Phase 6: Testing and Launch

- Test integrations.
- Test dashboard metrics.
- Test permissions.
- Test sync failures.
- Launch internal beta.

## Phase 7: Improvements

- Add more connectors.
- Add more automation.
- Add forecasting.
- Add custom reports.
```

---

## 7.3 TECHNICAL_ARCHITECTURE.md Draft

```md
# Technical Architecture

## Overview

The system uses a frontend dashboard, backend API, background workers, central database, connection manager, and agent layer.

## Components

### Frontend
Displays dashboards, charts, tables, settings, and connection management.

### Backend API
Handles authentication, dashboard data, connections, sync jobs, and agent requests.

### Workers
Run scheduled data syncs, data normalization, metric calculations, and agent analysis.

### Database
Stores normalized metrics, connection metadata, sync logs, users, roles, and agent insights.

### Agent Layer
Uses Skills to analyze data, generate summaries, detect anomalies, and recommend actions.

## Data Flow

Source systems connect through the connection manager. Workers collect and normalize data. The database stores dashboard-ready metrics. The dashboard and agents consume the normalized metrics.
```

---

## 8. Implementation Roadmap

## MVP Scope

### Must Have
- User login
- Dashboard home
- Connections page
- Add API connection
- Add database connection
- Test connection
- Manual sync
- Finance highlights
- Marketing highlights
- Admin highlights
- Agent summary panel

### Should Have
- Scheduled syncs
- Sync logs
- Alerts
- Role-based permissions
- Social media metrics
- Export reports

### Later
- Forecasting
- Custom dashboard builder
- Natural language dashboard questions
- Advanced anomaly detection
- Mobile app
- More integration templates

---

## 9. Suggested First Build Order

1. Build the database schema.
2. Build authentication and roles.
3. Build the connections page.
4. Build API/database connection testing.
5. Build manual sync jobs.
6. Build normalized metrics tables.
7. Build dashboard home.
8. Add finance widgets.
9. Add marketing/social widgets.
10. Add admin widgets.
11. Add agent summary reporting.
12. Add anomaly alerts.

---

## 10. Open Decisions

These need to be finalized before implementation:

1. What technology stack should be used?
2. Which financial system will be connected first?
3. Which marketing system will be connected first?
4. Which admin system will be connected first?
5. Should the system be single-company only or support multiple companies?
6. Should users be able to create custom dashboard widgets?
7. Should data sync run in real time, hourly, daily, or manually?
8. Where should secrets be stored?
9. What user roles are required?
10. What alerts should be sent by email, WhatsApp, Slack, or inside the app?

---

## 11. Recommended Next Step

Start with the MVP technical files:

1. `README.md`
2. `PROJECT_PLAN.md`
3. `TECHNICAL_ARCHITECTURE.md`
4. `DATABASE_SCHEMA.md`
5. `API_CONNECTIONS.md`
6. `AGENT_SKILLS.md`

Then create the first working module:

**Connections Page + Connection Testing + Manual Sync**

This is the foundation because the whole system depends on being able to connect to finance, marketing, social media, and admin systems reliably.

