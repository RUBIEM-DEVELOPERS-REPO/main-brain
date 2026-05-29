---
type: template
title: Conduct deep web research on NeuroWorks and capture findings. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)
slug: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
created: 2026-05-29T07:07:15.291Z
templateId: custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool
role: Custom
originTask: (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)  Give me a status report on NeuroWorks.
---

# Conduct deep web research on NeuroWorks and capture findings. (custom-you-are-operating-as-clawbot-the-ai-agent-operator-bias-tool)

Saved from chat: "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a status report on NeuroWorks."

**Origin task:** (You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)

Give me a status report on NeuroWorks.

## Saved plan

```json
{
  "steps": [
    {
      "tool": "research.deep",
      "args": {
        "query": "NeuroWorks status report",
        "depth": 3,
        "capture": true
      },
      "label": "Researching \"NeuroWorks status report\" — vault + web"
    },
    {
      "tool": "quality.check",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a status report on NeuroWorks.",
        "answer": "**NeuroWorks – Status Summary (as of 12 Dec 2025)**  \n\n| Item | Details |\n|------|---------|\n| **Product** | NeuroWorks (also known as *Natus NeuroWorks EEG*) – EEG acquisition, display, archiving, review and analysis software that works with Xltek amplifiers. It stores patient demographics and recording metadata in a Microsoft SQL Server database and uses Microsoft Word for report generation. |\n| **Vendor** | Natus Medical Inc. (no cage code) |\n| **Current VA Decision** | The technology is **approved for use** but must be operated in full compliance with VA Handbooks 6102 & 6500, VA Directives 6004, 6513, 6517 and NIST/FIPS standards. Users are required to verify compliance with their supervisor, ISSO, CIO or OI&T before implementation. The decision was entered on **30 Dec 2025** by the TRM Management Group. |\n| **Compliance Requirements** | • Follow all VA security and privacy policies (Handbooks 6102/6500, Directives 6004/6513/6517).  <br>• Protect sensitive data per NIST/FIPS standards.  <br>• Section 508 has **not** been assessed; implementers must ensure any deployed version is 508‑compliant. |\n| **Release History** | • 8.0 – 30 Nov 2013  <br>• 8.1 – 11 Nov 2015  <br>• 8.4 – 1 Jan 2016  <br>• 9.0 – 15 May 2018  <br>• 9.1 – 1 Jan 2019  <br>• 9.2 – 1 May 2020  <br>• 9.3 – 1 Nov 2022  <br>• **10.0.x – 20 Jun 2023** (latest listed release).  <br>All releases **after 14 Sep 2022** (including 9.3 and 10.0.x) are **not exempt** from VA security review. |\n| **Support / End‑of‑Life** | No vendor‑provided EOL or desupport dates are listed for any version. |\n| **Access** | VA Technical Reference Model entry: https://www.oit.va.gov/Services/TRM/ToolPage.aspx?tid=9624 (Decision date 12/30/2025). |\n| **Additional Vendor Info** | Natus’ public product page describes the same functionality and lists optional accessories for clinical EEG monitoring, but does not add new status details. 【2】 |\n\n**Key Take‑aways for VA stakeholders**\n\n1. **Approved but conditional** – NeuroWorks can be used, provided all VA security, privacy and accessibility policies are verified locally before deployment.  \n2. **Version choice matters** – Only releases **pre‑9.3 (pre‑Nov 2022)** are automatically exempt from the latest VA security review; newer releases (9.3, 10.0.x) require explicit compliance checks.  \n3. **No official EOL** – Absence of vendor‑declared end‑of‑life dates means the VA must monitor Natus announcements for future support changes.  \n\n*If further detail is needed (e.g., specific security controls, configuration guidance), consult the VA TRM “Decision” tab or contact the VA Office of Information & Technology.*",
        "sources": "[1] research.deep (query=\"NeuroWorks status report\")\n**NeuroWorks – Status Summary (as of 12 Dec 2025)**  \n\n| Item | Details |\n|------|---------|\n| **Product** | NeuroWorks (also known as *Natus NeuroWorks EEG*) – EEG acquisition, display, archiving, review and analysis software that works with Xltek amplifiers. It stores patient demographics and recording metadata in a Microsoft SQL Server database and uses Microsoft Word for report generation. |\n| **Vendor** | Natus Medical Inc. (no cage code) |\n| **Current VA Decision** | The technology is **approved for use** but must be operated in full compliance with VA Handbooks 6102 & 6500, VA Directives 6004, 6513, 6517 and NIST/FIPS standards. Users are required to verify compliance with their supervisor, ISSO, CIO or OI&T before implementation. The decision was entered on **30 Dec 2025** by the TRM Management Group. |\n| **Compliance Requirements** | • Follow all VA security and privacy policies (Handbooks 6102/6500, Directives 6004/6513/6517).  <br>• Protect sensitive data per NIST/FIPS standards.  <br>• Section 508 has **not** been assessed; implementers must ensure any deployed version is 508‑compliant. |\n| **Release History** | • 8.0 – 30 Nov 2013  <br>• 8.1 – 11 Nov 2015  <br>• 8.4 – 1 Jan 2016  <br>• 9.0 – 15 May 2018  <br>• 9.1 – 1 Jan 2019  <br>• 9.2 – 1 May 2020  <br>• 9.3 – 1 Nov 2022  <br>• **10.0.x – 20 Jun 2023** (latest listed release).  <br>All releases **after 14 Sep 2022** (including 9.3 and 10.0.x) are **not exempt** from VA security review. |\n| **Support / End‑of‑L"
      },
      "rationale": "auto-injected: score factuality, citation coverage, persona fit (evidence-aware)",
      "label": "Quality-checking the draft"
    },
    {
      "tool": "security.scan",
      "args": {
        "content": "**NeuroWorks – Status Summary (as of 12 Dec 2025)**  \n\n| Item | Details |\n|------|---------|\n| **Product** | NeuroWorks (also known as *Natus NeuroWorks EEG*) – EEG acquisition, display, archiving, review and analysis software that works with Xltek amplifiers. It stores patient demographics and recording metadata in a Microsoft SQL Server database and uses Microsoft Word for report generation. |\n| **Vendor** | Natus Medical Inc. (no cage code) |\n| **Current VA Decision** | The technology is **approved for use** but must be operated in full compliance with VA Handbooks 6102 & 6500, VA Directives 6004, 6513, 6517 and NIST/FIPS standards. Users are required to verify compliance with their supervisor, ISSO, CIO or OI&T before implementation. The decision was entered on **30 Dec 2025** by the TRM Management Group. |\n| **Compliance Requirements** | • Follow all VA security and privacy policies (Handbooks 6102/6500, Directives 6004/6513/6517).  <br>• Protect sensitive data per NIST/FIPS standards.  <br>• Section 508 has **not** been assessed; implementers must ensure any deployed version is 508‑compliant. |\n| **Release History** | • 8.0 – 30 Nov 2013  <br>• 8.1 – 11 Nov 2015  <br>• 8.4 – 1 Jan 2016  <br>• 9.0 – 15 May 2018  <br>• 9.1 – 1 Jan 2019  <br>• 9.2 – 1 May 2020  <br>• 9.3 – 1 Nov 2022  <br>• **10.0.x – 20 Jun 2023** (latest listed release).  <br>All releases **after 14 Sep 2022** (including 9.3 and 10.0.x) are **not exempt** from VA security review. |\n| **Support / End‑of‑Life** | No vendor‑provided EOL or desupport dates are listed for any version. |\n| **Access** | VA Technical Reference Model entry: https://www.oit.va.gov/Services/TRM/ToolPage.aspx?tid=9624 (Decision date 12/30/2025). |\n| **Additional Vendor Info** | Natus’ public product page describes the same functionality and lists optional accessories for clinical EEG monitoring, but does not add new status details. 【2】 |\n\n**Key Take‑aways for VA stakeholders**\n\n1. **Approved but conditional** – NeuroWorks can be used, provided all VA security, privacy and accessibility policies are verified locally before deployment.  \n2. **Version choice matters** – Only releases **pre‑9.3 (pre‑Nov 2022)** are automatically exempt from the latest VA security review; newer releases (9.3, 10.0.x) require explicit compliance checks.  \n3. **No official EOL** – Absence of vendor‑declared end‑of‑life dates means the VA must monitor Natus announcements for future support changes.  \n\n*If further detail is needed (e.g., specific security controls, configuration guidance), consult the VA TRM “Decision” tab or contact the VA Office of Information & Technology.*",
        "kind": "note"
      },
      "rationale": "auto-injected: scan answer for secrets, dodgy URLs",
      "label": "Security-scanning the note"
    },
    {
      "tool": "peer.review",
      "args": {
        "task": "(You are operating as Clawbot, the AI agent operator. Bias tool choices, output shape, and depth toward this role's conventions.)\n\nGive me a status report on NeuroWorks.",
        "answer": "**NeuroWorks – Status Summary (as of 12 Dec 2025)**  \n\n| Item | Details |\n|------|---------|\n| **Product** | NeuroWorks (also known as *Natus NeuroWorks EEG*) – EEG acquisition, display, archiving, review and analysis software that works with Xltek amplifiers. It stores patient demographics and recording metadata in a Microsoft SQL Server database and uses Microsoft Word for report generation. |\n| **Vendor** | Natus Medical Inc. (no cage code) |\n| **Current VA Decision** | The technology is **approved for use** but must be operated in full compliance with VA Handbooks 6102 & 6500, VA Directives 6004, 6513, 6517 and NIST/FIPS standards. Users are required to verify compliance with their supervisor, ISSO, CIO or OI&T before implementation. The decision was entered on **30 Dec 2025** by the TRM Management Group. |\n| **Compliance Requirements** | • Follow all VA security and privacy policies (Handbooks 6102/6500, Directives 6004/6513/6517).  <br>• Protect sensitive data per NIST/FIPS standards.  <br>• Section 508 has **not** been assessed; implementers must ensure any deployed version is 508‑compliant. |\n| **Release History** | • 8.0 – 30 Nov 2013  <br>• 8.1 – 11 Nov 2015  <br>• 8.4 – 1 Jan 2016  <br>• 9.0 – 15 May 2018  <br>• 9.1 – 1 Jan 2019  <br>• 9.2 – 1 May 2020  <br>• 9.3 – 1 Nov 2022  <br>• **10.0.x – 20 Jun 2023** (latest listed release).  <br>All releases **after 14 Sep 2022** (including 9.3 and 10.0.x) are **not exempt** from VA security review. |\n| **Support / End‑of‑Life** | No vendor‑provided EOL or desupport dates are listed for any version. |\n| **Access** | VA Technical Reference Model entry: https://www.oit.va.gov/Services/TRM/ToolPage.aspx?tid=9624 (Decision date 12/30/2025). |\n| **Additional Vendor Info** | Natus’ public product page describes the same functionality and lists optional accessories for clinical EEG monitoring, but does not add new status details. 【2】 |\n\n**Key Take‑aways for VA stakeholders**\n\n1. **Approved but conditional** – NeuroWorks can be used, provided all VA security, privacy and accessibility policies are verified locally before deployment.  \n2. **Version choice matters** – Only releases **pre‑9.3 (pre‑Nov 2022)** are automatically exempt from the latest VA security review; newer releases (9.3, 10.0.x) require explicit compliance checks.  \n3. **No official EOL** – Absence of vendor‑declared end‑of‑life dates means the VA must monitor Natus announcements for future support changes.  \n\n*If further detail is needed (e.g., specific security controls, configuration guidance), consult the VA TRM “Decision” tab or contact the VA Office of Information & Technology.*"
      },
      "rationale": "auto-injected: quality score=0.35 (pass=false) — peer review for a second opinion",
      "label": "Asking a peer to review the draft"
    }
  ],
  "summary": "Conduct deep web research on NeuroWorks and capture findings.",
  "waves": [
    [
      0
    ],
    [
      1,
      2
    ],
    [
      3
    ]
  ]
}
```
