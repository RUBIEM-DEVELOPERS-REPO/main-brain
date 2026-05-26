---
title: "scraper_hub_brs_project_plan"
imported_from: "C:/Users/Arthur Magaya/Downloads/scraper_hub_brs_project_plan.docx"
imported_at: 2026-05-26T19:08:14.2538214+02:00
created: 2026-05-26
kind: docx
size_kb: 47.8
tags: [imported, downloads, bulk-import]
---

# scraper_hub_brs_project_plan

Imported from `C:\Users\Arthur Magaya\Downloads\scraper_hub_brs_project_plan.docx` on 2026-05-26. Original size 47.8 KB.

The full file is filed in your vault at [[_imports/downloads/scraper_hub_brs_project_plan.docx]] — open it in Obsidian for the content.

## Source provenance
- Original path: `C:\Users\Arthur Magaya\Downloads\scraper_hub_brs_project_plan.docx`
- Imported by: bulk-import script (downloads)
- Original preserved on the PC.

## Excerpt (first 6 000 chars, docx)

__SCRAPER HUB SYSTEM__

__Business Requirements Specification and Project Plan__

__Technology stack__

Python, Playwright, PostgreSQL, REST API, scheduler, admin UI

__Primary purpose__

Continuously collect market\-facing pricing, product, tariff, fee, and plan data from Zimbabwean websites

__Mandatory features__

Manual URL scraping, data review page, outbound integration endpoint, audit trail, and monitoring

__Delivery posture__

MVP first, then scale to category\-specific extractors and integrations

__Prepared for: Scraper hub system initiative  
__This document combines the business requirements specification \(BRS\) and an execution\-ready project plan for a centralized scraping platform that supports automated crawls, manual ad hoc scraping, curated data display, and outbound delivery to downstream systems\.

# 1\. Executive summary

The proposed Scraper Hub System is a centralized web data acquisition platform that automatically and manually collects public pricing, product, tariff, fees, plan, and policy information from selected Zimbabwean telecom, banking, insurance, hospitality, education, utilities, solar, and transport websites\. The system will use Playwright for browser automation, Python for orchestration and extraction logic, and PostgreSQL for operational storage and history management\.

The platform is intended to solve three business problems at once: fragmented data collection, lack of traceability when public websites change, and slow distribution of updates to downstream systems\. The solution will therefore include scheduled scraping jobs, manual URL scraping, a web page for browsing scraped data, and an integration endpoint that publishes normalized records to other systems\.

# 2\. Business goals and objectives

• Create one controlled hub for collecting publicly available commercial and reference data from target websites\.

• Reduce manual monitoring effort for price changes, product launches, fee adjustments, and tariff updates\.

• Capture historical snapshots so that changes over time can be audited and compared\.

• Enable business users or analysts to trigger manual scraping of an arbitrary URL within approved rules\.

• Provide a simple user interface for viewing raw and normalized scraped data\.

• Expose a secure endpoint to push or deliver validated information to downstream systems\.

# 3\. Scope

In scope for MVP:

• Source registration for predefined websites and source categories\.

• Playwright\-based scraping for HTML pages, dynamic pages, and simple pagination flows\.

• Extractor templates for tariffs, bundles, plans, fees, rates, product summaries, and service metadata\.

• Manual URL scraping via admin UI or authenticated API\.

• Data storage for raw payloads, extracted fields, normalized records, screenshots, and run logs\.

• A data viewer page with search, filters, source drill\-down, run history, and record comparison\.

• An outbound API or webhook\-style endpoint to send selected normalized information to external systems\.

• Scheduling, retries, failure alerts, and audit logs\.

Out of scope for MVP \(planned later or optional\):

• Circumventing hard anti\-bot controls or solving captchas without approved human intervention\.

• Scraping authenticated customer\-private content\.

• Machine\-learning document understanding as a first release dependency\.

• Large\-scale distributed crawling across thousands of domains\.

# 4\. Source landscape and acquisition model

The source list supplied for the project spans multiple sectors\. The acquisition model should treat each source as a registered asset with sector, subcategory, URL, extraction profile, schedule, and validation rules\.

__Sector__

__Primary sources__

__Typical data__

__Scraping notes__

Telecoms

Econet, NetOne, Telecel

Bundles, voice rates, tariff tables, promo plans

Mostly structured HTML with dynamic blocks

Banking

CBZ, FBC, Stanbic, ZB, NMB, Ecobank

Products, fees, account info, loans, rate and product pages

Mixed corporate CMS sites, some deeper subpages

Insurance

Old Mutual, NICO, Zimnat, Fidelity Life, Britam

Personal products, pricing, benefits, policy summaries

May require category traversal and product cards

Hotels

Hotel sites and Booking\.com

Room or accommodation rates, package content, hotel metadata

Aggregator pages are more dynamic and may need cautious rate extraction

Schools and universities

Ministry, school sites, UZ, NUST, MSU, GZU

Fee pages, admissions content, notices

Many education pages may move content into PDF notices

Utilities and solar

ZESA, ZINWA, ZERA, providers

Tariffs, policy pages, product listings

Strong candidate for mixed HTML and document scraping

Mobility and transport

ZIMRA, ZUPCO and others

Fees, route information, transport charge notices

May rely on notice pages and downloadable files

# 5\. Assumptions and design principles

• The platform will only collect information that is publicly accessible and legally permitted for the organization to use\.

• Different sites will require different extraction strategies; therefore the system must separate crawling from extraction rules\.

• Website layouts will change, so selector versioning, screenshots, run replay, and alerts are mandatory design elements\.

• Some pages will contain tables, cards, accordions, tabs, or downloadable PDFs\. The system must support at least HTML\-first extraction and a document fallback path\.

• All important changes should be historized, not overwritten, so downstream systems can consume the latest state while analysts keep access to prior states\.

# 6\. Stakeholders and user roles

__Role__

__Responsibilities__

Business owner

Sets scope priorities, approves categories and acceptance criteria

Operations analyst

Reviews runs, triggers manual scraping, checks extracted records

Data consumer / downstream system owner

Consumes outbound API payloads or pushed updates

Administrator

Manages sources, schedules, credent
