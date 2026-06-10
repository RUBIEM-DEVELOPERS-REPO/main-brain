---
type: job
title: Ad-hoc: Write an IT onboarding runbook for a new employee's first da
slug: ad-hoc-write-an-it-onboarding-runbook-for-a-new-employee-s-f-b49e6d40
created: 2026-06-10T10:40:33.523Z
jobId: b49e6d40-2e99-49b1-9b5d-5d2a8fa83a6a
status: succeeded
template: general-task
persona: it-support
personaName: Ivy
startedAt: 2026-06-10T10:39:24.502Z
finishedAt: 2026-06-10T10:40:33.522Z
---

# Ad-hoc: Write an IT onboarding runbook for a new employee's first da

- **Status:** succeeded
- **Template:** general-task
- **Started:** 2026-06-10T10:39:24.502Z
- **Finished:** 2026-06-10T10:40:33.522Z
- **Title:** Ad-hoc: Write an IT onboarding runbook for a new employee's first da

## Inputs
```json
{
  "task": "(You are operating as Ivy, the IT Support Specialist. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nWrite an IT onboarding runbook for a new employee's first day: accounts to provision, hardware to issue, access groups, and the security steps.\n\nInterpretation: intent=draft-other, target=\"it onboarding runbook for a new employee's first day: accounts to provision, hardware to issue, access groups, and the s\".\n\nDeliverable shape: Direct, finished prose. No \"Here's the draft\" preamble — output the content itself. Sign off with the persona's first name if it's correspondence.\n\n**Alignment check — required before responding.** Before producing the final answer, scan the user's request for CONCRETE elements and make sure each one is addressed in the output:\n- Named counts (\"5 steps\", \"top 3 risks\", \"4-stage loop\", \"3 social variants\") → produce exactly that many items.\n- Named people, roles, accounts, vendors → reference each by name.\n- Specific dates, deadlines, scale numbers (\"by 2026-06-15\", \"1200 employees\", \"$99/mo\") → echo verbatim.\n- Named sections / deliverable shape (\"Title, Symptoms, Root cause, Resolution, Prevention\" or \"must-haves vs nice-to-haves\") → produce each named section.\n- Named steps in a process (\"paging on-call → scoping impact → status page → comms → escalation → post-mortem\") → cover every step.\n- Output format directives (\"numbered list\", \"table\", \"≤4 bullets\") → honour exactly.\n\nIf the user asked for N items, produce N items. If they named items A/B/C, the output must reference A, B, AND C. Do NOT silently drop or substitute. If you cannot address one, say so explicitly with the reason — never omit silently.",
  "userText": "Write an IT onboarding runbook for a new employee's first day: accounts to provision, hardware to issue, access groups, and the security steps.",
  "save_as_template": true,
  "threadContextUsed": false,
  "priorTurnsUsed": 0,
  "assistantTurnUsed": false,
  "intent": "draft-other",
  "intentTarget": "it onboarding runbook for a new employee's first day: accounts to provision, hardware to issue, access groups, and the security steps.",
  "personaId": "it-support"
}
```

## Answer
IT ONBOARDING RUNBOOK – NEW HIRE FIRST DAY

1. Welcoming & Orientation  
   • 9:00 am – Check‑in with HR staff.  
   • 9:15 am – Welcome presentation: company vision, values, key contacts.  
   • 9:45 am – Tour of office/remote onboarding guide emailed.

2. IT Account Provisioning  
   a) Email & Collaboration  
      - Create corporate Outlook and Teams account via LDAP sync.  
      - Set mailbox quota to 30 GB.  
   b) Active Directory & VPN  
      - Add to “New Employees” OU; apply default password policy.  
      - Enroll in Cisco AnyConnect VPN profile.  
   c) Security & Compliance  
      - Assign to “Employee” security group; remove default Guest group.  
      - Enable MFA via Azure AD.  
   d) Development & Operations Systems  
      - Create personal GitHub Enterprise account linked to company profile.  
      - Add to “dev-team” GitHub organization, repo access per role.  
      - Provision AWS IAM user with “ReadOnly” role; store credentials in 1Password.  
   e) Ticketing & Help Desk  
      - Open ServiceNow ticket under “New Employee Onboarding”.  
      - Assign ticket to IT support desk; SLA 1 hr.

3. Hardware Allocation  
   • Laptop: Dell XPS 15 9560 – delivered to desk or mailed.  
   • Monitors: 2 × 27″ HDR monitors, docking station included.  
   • Accessories: Wireless keyboard, ergonomic mouse, laptop charger, external hard drive.  
   • Mobile phone: iPhone 15 Pro, SIM from Verizon; add to “Mobile Devices” group.  
   • Physical security badge: generated, activated, and photo taken.  

4. Access Groups & Permissions  
   • AD Groups  
      - Engineering – FullOrchestration, BuildServers, ProdDB.  
      - Security – NetworkMonitoring, IncidentResponse.  
      - HR – PeopleSoft, Payroll.  
      - IT Support – ServiceDesk, ServerFarm.  
   • Cloud IAM  
      - AWS – add to “Engineering” group.  
      - Azure – add to “DevOps” group.  
   • Slack/Teams Channels  
      - Channel “#new-hires”, “#engineering-general”, “#security-alerts”.  
      - Add employee as member of role‑specific channels.  

5. Security Onboarding Steps  
   a) Password & MFA  
      - Enforce password changes on first login.  
      - Register biometric or authenticator app (Microsoft Authenticator).  
   b) Device Encryption & Policies  
      - Enable BitLocker on Windows laptops.  
      - Install company VPN credential manager.  
   c) Endpoint Protection  
      - Configure Microsoft Defender; schedule baseline scans.  
      - Ensure endpoint is listed in the EDR portal.  
   d) Training & Documentation  
      - Enroll in Security Awareness training; submit completion certificate.  
      - Provide quick reference guide for password reset, phishing identification, and incident reporting.  

6. Wrap‑Up & Check‑In  
   • 3:00 pm – IT support reviews equipment, confirms all accounts active.  
   • 3:30 pm – Manager gives job‑specific equipment & project brief.  
   • 4:00 pm – HR expresses any follow‑up needs; close ticket.

Ivy

<details><summary>Log</summary>

```
[2026-06-10T10:39:24.503Z] primary executor = hermes — running through the Hermes agent
[2026-06-10T10:39:24.509Z] Dispatching to Hermes agent (model: openai/gpt-oss-20b:free)…
[2026-06-10T10:40:28.841Z] Hermes responded in 64.3s (3053 chars).
[2026-06-10T10:40:33.522Z] Quality gate: Hermes answer passed (score 0.95).
```
</details>
