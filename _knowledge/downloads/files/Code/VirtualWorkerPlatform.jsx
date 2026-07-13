import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg-base:    #0a0c0f;
    --bg-surface: #0f1217;
    --bg-raised:  #161b23;
    --bg-hover:   #1c2330;
    --border:     #1f2937;
    --border-lit: #2d3748;
    --text-pri:   #e2e8f0;
    --text-sec:   #94a3b8;
    --text-dim:   #4b5563;
    --accent:     #3b82f6;
    --accent-dim: #1e3a5f;
    --green:      #10b981;
    --green-dim:  #064e3b;
    --amber:      #f59e0b;
    --amber-dim:  #451a03;
    --red:        #ef4444;
    --red-dim:    #450a0a;
    --indigo:     #818cf8;
    --indigo-dim: #1e1b4b;
  }

  body {
    background: var(--bg-base);
    color: var(--text-pri);
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 13px;
    line-height: 1.5;
  }

  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg-surface); }
  ::-webkit-scrollbar-thumb { background: var(--border-lit); border-radius: 2px; }

  .mono { font-family: 'IBM Plex Mono', monospace; }

  /* STATUS BADGES */
  .badge {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 2px 8px; border-radius: 3px;
    font-size: 11px; font-weight: 500; letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .badge-dot { width: 5px; height: 5px; border-radius: 50%; }

  .badge-created    { background: #1f2937; color: #9ca3af; }
  .badge-interpreting { background: var(--indigo-dim); color: var(--indigo); }
  .badge-awaiting   { background: var(--amber-dim); color: var(--amber); }
  .badge-running    { background: var(--accent-dim); color: var(--accent); }
  .badge-completed  { background: var(--green-dim); color: var(--green); }
  .badge-failed     { background: var(--red-dim); color: var(--red); }
  .badge-cancelled  { background: #1f2937; color: #6b7280; }

  .badge-low    { background: #1f2937; color: #6b7280; }
  .badge-medium { background: var(--amber-dim); color: var(--amber); }
  .badge-high   { background: var(--red-dim); color: var(--red); }

  .badge-admin    { background: #1e3a5f; color: #60a5fa; }
  .badge-approver { background: #312e81; color: #a5b4fc; }
  .badge-member   { background: #1f2937; color: #94a3b8; }
  .badge-viewer   { background: #111827; color: #4b5563; }

  /* BUTTONS */
  .btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 14px; border-radius: 4px; border: 1px solid transparent;
    font-family: 'IBM Plex Sans', sans-serif; font-size: 12px; font-weight: 500;
    cursor: pointer; transition: all 0.15s;
  }
  .btn-primary { background: var(--accent); color: #fff; border-color: var(--accent); }
  .btn-primary:hover { background: #2563eb; }
  .btn-ghost { background: transparent; color: var(--text-sec); border-color: var(--border-lit); }
  .btn-ghost:hover { background: var(--bg-hover); color: var(--text-pri); }
  .btn-danger { background: var(--red-dim); color: var(--red); border-color: #7f1d1d; }
  .btn-danger:hover { background: #7f1d1d; }
  .btn-success { background: var(--green-dim); color: var(--green); border-color: #065f46; }
  .btn-success:hover { background: #065f46; }
  .btn-sm { padding: 4px 10px; font-size: 11px; }

  /* LAYOUT */
  .app { display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
  .app-body { display: flex; flex: 1; overflow: hidden; }

  /* TOP NAV */
  .topnav {
    height: 48px; background: var(--bg-surface); border-bottom: 1px solid var(--border);
    display: flex; align-items: center; padding: 0 16px; gap: 12px; flex-shrink: 0;
  }
  .topnav-brand {
    display: flex; align-items: center; gap: 8px;
    font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--text-pri);
    border-right: 1px solid var(--border); padding-right: 16px; margin-right: 4px;
  }
  .topnav-brand-mark {
    width: 22px; height: 22px; background: var(--accent); border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #fff;
  }
  .workspace-switcher {
    display: flex; align-items: center; gap: 6px;
    padding: 5px 10px; border-radius: 4px; border: 1px solid var(--border);
    background: var(--bg-raised); cursor: pointer; color: var(--text-pri);
    font-size: 12px; font-weight: 500;
  }
  .workspace-switcher:hover { border-color: var(--border-lit); }
  .topnav-right { margin-left: auto; display: flex; align-items: center; gap: 10px; }
  .health-dot {
    width: 7px; height: 7px; border-radius: 50%; background: var(--green);
    box-shadow: 0 0 6px var(--green);
  }
  .icon-btn {
    width: 32px; height: 32px; border-radius: 4px; border: 1px solid var(--border);
    background: var(--bg-raised); display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: var(--text-sec); font-size: 14px;
  }
  .icon-btn:hover { background: var(--bg-hover); color: var(--text-pri); }
  .avatar {
    width: 28px; height: 28px; border-radius: 4px; background: var(--accent-dim);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; color: var(--accent); cursor: pointer;
  }

  /* SIDEBAR */
  .sidebar {
    width: 200px; background: var(--bg-surface); border-right: 1px solid var(--border);
    display: flex; flex-direction: column; flex-shrink: 0; transition: width 0.2s;
    overflow: hidden;
  }
  .sidebar.collapsed { width: 48px; }
  .sidebar-nav { flex: 1; padding: 8px; display: flex; flex-direction: column; gap: 1px; }
  .nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 7px 8px; border-radius: 4px; cursor: pointer;
    color: var(--text-sec); font-size: 12px; font-weight: 500;
    white-space: nowrap; overflow: hidden; transition: all 0.1s;
    border: 1px solid transparent;
  }
  .nav-item:hover { background: var(--bg-hover); color: var(--text-pri); }
  .nav-item.active {
    background: var(--accent-dim); color: var(--accent);
    border-color: #1d4ed8;
  }
  .nav-item-icon { font-size: 15px; flex-shrink: 0; width: 18px; text-align: center; }
  .nav-item-new {
    background: var(--accent); color: #fff; justify-content: center; gap: 6px;
    margin-bottom: 8px; border-color: transparent;
  }
  .nav-item-new:hover { background: #2563eb; color: #fff; }
  .nav-badge {
    margin-left: auto; background: var(--amber-dim); color: var(--amber);
    font-size: 10px; padding: 1px 5px; border-radius: 10px; font-weight: 600;
  }
  .sidebar-collapse-btn {
    padding: 10px 8px; border-top: 1px solid var(--border);
    display: flex; align-items: center; justify-content: flex-end;
    cursor: pointer; color: var(--text-dim);
  }
  .sidebar-collapse-btn:hover { color: var(--text-sec); }

  /* MAIN CONTENT */
  .main { flex: 1; overflow-y: auto; background: var(--bg-base); }
  .page { padding: 24px; max-width: 1200px; margin: 0 auto; }
  .page-header { margin-bottom: 24px; }
  .page-title { font-size: 18px; font-weight: 600; color: var(--text-pri); margin-bottom: 4px; }
  .page-sub { color: var(--text-sec); font-size: 12px; }

  /* CARDS */
  .card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 16px;
  }
  .card-header {
    display: flex; align-items: flex-start; justify-content: space-between;
    margin-bottom: 12px;
  }
  .card-label { font-size: 10px; font-weight: 600; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--text-dim); margin-bottom: 4px; }

  /* TASK THREAD */
  .task-header { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 20px; margin-bottom: 16px; }
  .task-title { font-size: 16px; font-weight: 600; margin-bottom: 12px; }
  .task-meta-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; margin-bottom: 16px; }
  .task-meta-item {}
  .task-meta-val { color: var(--text-pri); font-size: 12px; }

  /* LIFECYCLE BAR */
  .lifecycle { display: flex; align-items: center; gap: 0; }
  .lifecycle-step {
    flex: 1; height: 3px; background: var(--border);
    position: relative; transition: background 0.3s;
  }
  .lifecycle-step.done { background: var(--green); }
  .lifecycle-step.active { background: var(--accent); }
  .lifecycle-step.pending { background: var(--border); }
  .lifecycle-nodes { display: flex; justify-content: space-between; margin-top: 6px; }
  .lifecycle-node-label { font-size: 9px; color: var(--text-dim); text-align: center; flex: 1; }
  .lifecycle-node-label.done { color: var(--green); }
  .lifecycle-node-label.active { color: var(--accent); }

  /* TIMELINE CARDS */
  .timeline { display: flex; flex-direction: column; gap: 10px; }
  .timeline-card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 14px; border-left: 3px solid var(--border);
  }
  .timeline-card.user-request { border-left-color: var(--accent); }
  .timeline-card.ai-result { border-left-color: var(--indigo); }
  .timeline-card.approval-block { border-left-color: var(--amber); }
  .timeline-card.execution { border-left-color: var(--green); }
  .timeline-card.risk { border-left-color: var(--red); }
  .timeline-card.artifact { border-left-color: #6b7280; }

  .timeline-card-header {
    display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
  }
  .timeline-type-label {
    font-size: 10px; font-weight: 600; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--text-sec);
  }
  .timeline-ts { margin-left: auto; font-size: 10px; color: var(--text-dim); font-family: 'IBM Plex Mono', monospace; }
  .timeline-actor { font-size: 10px; color: var(--text-dim); }

  /* JSON VIEWER */
  .json-viewer {
    background: var(--bg-base); border: 1px solid var(--border);
    border-radius: 4px; padding: 12px; font-family: 'IBM Plex Mono', monospace;
    font-size: 11px; color: #a5f3fc; line-height: 1.7; overflow-x: auto;
  }
  .json-key { color: #93c5fd; }
  .json-str { color: #86efac; }
  .json-num { color: #fcd34d; }
  .json-bool { color: #f9a8d4; }

  /* APPROVAL PANEL */
  .approval-panel { background: var(--bg-surface); border: 1px solid var(--amber); border-radius: 6px; overflow: hidden; }
  .approval-panel-header { background: var(--amber-dim); padding: 12px 16px; display: flex; align-items: center; gap: 8px; }
  .approval-panel-body { padding: 16px; }
  .approval-actions { display: flex; gap: 8px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); }

  /* EXECUTION PANEL */
  .run-id-bar { background: var(--bg-base); border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; display: flex; gap: 24px; }
  .run-field { display: flex; flex-direction: column; gap: 2px; }
  .run-field-label { font-size: 9px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.06em; }
  .run-field-val { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-pri); }

  .log-line { font-family: 'IBM Plex Mono', monospace; font-size: 11px; line-height: 1.8; }
  .log-line.info { color: #64748b; }
  .log-line.success { color: var(--green); }
  .log-line.warn { color: var(--amber); }
  .log-line.err { color: var(--red); }

  /* PIPELINE STEPS */
  .pipeline { display: flex; flex-direction: column; gap: 6px; margin-top: 12px; }
  .pipeline-step { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 4px; background: var(--bg-base); border: 1px solid var(--border); }
  .pipeline-step-icon { width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0; }
  .pipeline-step-icon.done { background: var(--green-dim); color: var(--green); }
  .pipeline-step-icon.running { background: var(--accent-dim); color: var(--accent); }
  .pipeline-step-icon.pending { background: var(--border); color: var(--text-dim); }
  .pipeline-step-name { font-size: 12px; flex: 1; }
  .pipeline-step-dur { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--text-dim); }

  /* ARTIFACT ROW */
  .artifact-row { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-base); }
  .artifact-icon { font-size: 18px; }
  .artifact-name { font-size: 12px; font-weight: 500; }
  .artifact-hash { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--text-dim); }
  .artifact-meta { font-size: 11px; color: var(--text-sec); }

  /* DASHBOARD */
  .stat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; margin-bottom: 24px; }
  .stat-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 16px; }
  .stat-val { font-size: 28px; font-weight: 300; font-family: 'IBM Plex Mono', monospace; color: var(--text-pri); }
  .stat-label { font-size: 11px; color: var(--text-sec); margin-top: 4px; }
  .stat-delta { font-size: 10px; color: var(--green); margin-top: 2px; }

  /* MINI BAR CHART */
  .bar-chart { display: flex; align-items: flex-end; gap: 4px; height: 60px; }
  .bar-chart-bar { flex: 1; border-radius: 2px 2px 0 0; min-height: 4px; background: var(--accent-dim); transition: background 0.2s; }
  .bar-chart-bar:hover { background: var(--accent); }

  /* AUDIT LOG */
  .audit-row { display: grid; grid-template-columns: 160px 80px 120px 1fr 100px; gap: 12px; padding: 10px 12px; border-bottom: 1px solid var(--border); font-size: 11px; }
  .audit-row:hover { background: var(--bg-hover); }
  .audit-header { background: var(--bg-surface); border-bottom: 1px solid var(--border); }

  /* TEMPLATES */
  .template-row { display: grid; grid-template-columns: 1fr 100px 80px 80px 120px auto; gap: 12px; align-items: center; padding: 12px 16px; border-bottom: 1px solid var(--border); }
  .template-row:hover { background: var(--bg-hover); }
  .template-name { font-weight: 500; font-size: 12px; }
  .template-desc { font-size: 11px; color: var(--text-sec); margin-top: 2px; }

  /* WORKER PROFILES */
  .worker-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 16px; }
  .worker-card.active-profile { border-color: var(--accent); }
  .worker-title { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
  .worker-section { margin-bottom: 12px; }
  .worker-tag { display: inline-block; padding: 2px 8px; border-radius: 3px; font-size: 11px; background: var(--bg-hover); color: var(--text-sec); border: 1px solid var(--border); margin: 2px; }
  .worker-restricted-tag { background: var(--red-dim); color: var(--red); border-color: #7f1d1d; }

  /* TASK LIST */
  .task-list-row { display: grid; grid-template-columns: 1fr 120px 80px 100px 100px; gap: 12px; align-items: center; padding: 12px 16px; border-bottom: 1px solid var(--border); cursor: pointer; }
  .task-list-row:hover { background: var(--bg-hover); }

  /* DIVIDER */
  .divider { border: none; border-top: 1px solid var(--border); margin: 16px 0; }

  /* MODAL OVERLAY */
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 100; display: flex; align-items: center; justify-content: center; }
  .modal { background: var(--bg-surface); border: 1px solid var(--border-lit); border-radius: 8px; width: 480px; max-width: 95vw; overflow: hidden; }
  .modal-header { padding: 16px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
  .modal-body { padding: 20px; }
  .modal-footer { padding: 12px 20px; border-top: 1px solid var(--border); display: flex; gap: 8px; justify-content: flex-end; }
  textarea.input-field { width: 100%; background: var(--bg-base); border: 1px solid var(--border); border-radius: 4px; color: var(--text-pri); padding: 10px; font-family: 'IBM Plex Sans', sans-serif; font-size: 12px; resize: vertical; outline: none; }
  textarea.input-field:focus { border-color: var(--accent); }

  /* NEW TASK FORM */
  .new-task-form { max-width: 680px; }
  .form-label { font-size: 11px; font-weight: 500; color: var(--text-sec); margin-bottom: 6px; display: block; }
  .form-group { margin-bottom: 16px; }
  .form-input {
    width: 100%; background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 4px; color: var(--text-pri); padding: 8px 12px;
    font-family: 'IBM Plex Sans', sans-serif; font-size: 12px; outline: none;
  }
  .form-input:focus { border-color: var(--accent); }
  select.form-input option { background: var(--bg-raised); }

  .flex { display: flex; }
  .items-center { align-items: center; }
  .gap-8 { gap: 8px; }
  .gap-12 { gap: 12px; }
  .ml-auto { margin-left: auto; }
  .mt-12 { margin-top: 12px; }
  .mt-16 { margin-top: 16px; }
  .text-sec { color: var(--text-sec); }
  .text-dim { color: var(--text-dim); }
  .font-mono { font-family: 'IBM Plex Mono', monospace; }
  .text-11 { font-size: 11px; }
  .text-12 { font-size: 12px; }
  .fw-600 { font-weight: 600; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

  /* ── LANDING PAGE ────────────────────────────────────────────────────────── */

  .landing {
    position: fixed; inset: 0;
    background: var(--bg-base);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    z-index: 200;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .landing.exiting {
    opacity: 0;
    transform: translateY(-12px);
    pointer-events: none;
  }
  /* Embedded mode — inside a modal, no fixed positioning */
  .landing.landing-embedded {
    position: static;
    background: transparent;
    display: block;
    z-index: auto;
    width: 100%;
  }
  .landing.landing-embedded .landing-input-wrap {
    animation: none;
    width: 100%;
  }

  .landing-wordmark {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 48px;
    animation: fadeUp 0.6s ease both;
  }
  .landing-wordmark-mark {
    width: 32px; height: 32px; background: var(--accent); border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; font-weight: 700; color: #fff;
    box-shadow: 0 0 24px rgba(59,130,246,0.25);
  }
  .landing-wordmark-text {
    font-size: 15px; font-weight: 600; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--text-pri);
  }
  .landing-wordmark-sub {
    font-size: 11px; color: var(--text-dim); letter-spacing: 0.04em;
    margin-top: 2px;
  }

  .landing-input-wrap {
    width: 680px; max-width: calc(100vw - 40px);
    animation: fadeUp 0.6s 0.1s ease both;
  }

  .landing-input-box {
    background: var(--bg-surface);
    border: 1px solid var(--border-lit);
    border-radius: 8px;
    padding: 16px 16px 12px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .landing-input-box:focus-within {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(59,130,246,0.08);
  }
  .landing-textarea {
    width: 100%; background: transparent; border: none; outline: none;
    color: var(--text-pri); font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px; line-height: 1.6; resize: none;
    min-height: 72px;
  }
  .landing-textarea::placeholder { color: var(--text-dim); }
  .landing-input-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 10px; padding-top: 10px;
    border-top: 1px solid var(--border);
  }
  .landing-domain-pills { display: flex; gap: 6px; flex-wrap: wrap; }
  .landing-domain-pill {
    padding: 3px 10px; border-radius: 20px; font-size: 11px;
    border: 1px solid var(--border); color: var(--text-dim);
    cursor: pointer; transition: all 0.15s; background: transparent;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .landing-domain-pill:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
  .landing-domain-pill.selected { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

  .landing-submit {
    width: 34px; height: 34px; border-radius: 5px;
    background: var(--accent); border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 16px; flex-shrink: 0;
    transition: background 0.15s, transform 0.1s;
  }
  .landing-submit:hover { background: #2563eb; transform: scale(1.05); }
  .landing-submit:disabled { background: var(--border); cursor: not-allowed; transform: none; }

  .landing-suggestions {
    margin-top: 20px; width: 680px; max-width: calc(100vw - 40px);
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .landing-suggestions-label {
    font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--text-dim); margin-bottom: 10px;
  }
  .landing-suggestion-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  }
  .landing-suggestion {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 10px 12px; cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    text-align: left;
  }
  .landing-suggestion:hover {
    border-color: var(--border-lit); background: var(--bg-raised);
  }
  .landing-suggestion-title { font-size: 12px; color: var(--text-pri); font-weight: 500; margin-bottom: 2px; }
  .landing-suggestion-sub { font-size: 11px; color: var(--text-dim); }

  /* ── CLASSIFICATION OVERLAY ──────────────────────────────────────────────── */

  .classify-overlay {
    position: fixed; inset: 0;
    background: var(--bg-base);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    z-index: 300;
    animation: fadeIn 0.3s ease both;
  }
  .classify-panel {
    width: 560px; max-width: calc(100vw - 40px);
  }
  .classify-input-echo {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 14px 16px; margin-bottom: 20px;
    font-size: 13px; color: var(--text-sec); line-height: 1.6;
    border-left: 3px solid var(--accent);
  }
  .classify-pipeline {
    display: flex; flex-direction: column; gap: 0;
  }
  .classify-step {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.35s ease, transform 0.35s ease;
  }
  .classify-step:last-child { border-bottom: none; }
  .classify-step.visible { opacity: 1; transform: translateY(0); }

  .classify-step-icon {
    width: 28px; height: 28px; border-radius: 4px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; margin-top: 1px;
  }
  .classify-step-icon.pending { background: var(--bg-raised); color: var(--text-dim); }
  .classify-step-icon.running { background: var(--accent-dim); color: var(--accent); animation: pulse 1s infinite; }
  .classify-step-icon.done    { background: var(--green-dim); color: var(--green); }
  .classify-step-icon.warn    { background: var(--amber-dim); color: var(--amber); }

  .classify-step-body { flex: 1; }
  .classify-step-label { font-size: 12px; font-weight: 500; color: var(--text-pri); }
  .classify-step-detail { font-size: 11px; color: var(--text-dim); margin-top: 3px; font-family: 'IBM Plex Mono', monospace; }
  .classify-step-detail.green { color: var(--green); }
  .classify-step-detail.amber { color: var(--amber); }
  .classify-step-detail.blue  { color: var(--accent); }

  .classify-cta {
    margin-top: 24px; display: flex; align-items: center; gap: 12px;
    opacity: 0; transition: opacity 0.4s ease;
  }
  .classify-cta.visible { opacity: 1; }
  .classify-cta-text { font-size: 12px; color: var(--text-sec); }

  /* ── EXECUTION CONFIG PAGE ───────────────────────────────────────────────── */

  .exec-config {
    position: fixed; inset: 0;
    background: var(--bg-base);
    display: flex; flex-direction: column;
    align-items: center; justify-content: flex-start;
    overflow-y: auto; z-index: 250;
    padding: 48px 20px 60px;
    animation: fadeIn 0.4s ease both;
  }
  .exec-config.exiting {
    opacity: 0; transform: translateY(-10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }
  .exec-config-inner {
    width: 720px; max-width: 100%;
  }
  .exec-config-breadcrumb {
    display: flex; align-items: center; gap: 8px;
    font-size: 11px; color: var(--text-dim); margin-bottom: 32px;
    font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.04em;
  }
  .exec-config-breadcrumb-sep { color: var(--border-lit); }
  .exec-config-breadcrumb-active { color: var(--accent); }

  .exec-config-task-echo {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-left: 3px solid var(--accent); border-radius: 6px;
    padding: 14px 16px; margin-bottom: 28px;
    display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
  }
  .exec-config-task-title { font-size: 14px; font-weight: 600; color: var(--text-pri); margin-bottom: 4px; }

  .exec-config-section { margin-bottom: 28px; }
  .exec-config-section-label {
    font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--text-dim); margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }
  .exec-config-section-label::after {
    content: ''; flex: 1; height: 1px; background: var(--border);
  }

  /* Model cards */
  .model-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .model-card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 14px 16px; cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    position: relative;
  }
  .model-card:hover { border-color: var(--border-lit); background: var(--bg-raised); }
  .model-card.selected { border-color: var(--accent); background: var(--accent-dim); }
  .model-card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 6px; }
  .model-name { font-size: 13px; font-weight: 600; color: var(--text-pri); }
  .model-provider { font-size: 10px; color: var(--text-dim); margin-top: 1px; }
  .model-price { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--green); font-weight: 600; }
  .model-price-unit { font-size: 10px; color: var(--text-dim); }
  .model-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 8px; }
  .model-tag {
    font-size: 10px; padding: 1px 7px; border-radius: 20px;
    background: var(--bg-hover); color: var(--text-dim); border: 1px solid var(--border);
  }
  .model-tag.speed   { color: var(--green); border-color: #065f46; background: var(--green-dim); }
  .model-tag.power   { color: var(--indigo); border-color: #312e81; background: var(--indigo-dim); }
  .model-tag.economy { color: var(--amber); border-color: #451a03; background: var(--amber-dim); }
  .model-card.selected .model-tag { border-color: rgba(59,130,246,0.3); }
  .model-recommended {
    position: absolute; top: -1px; right: -1px;
    background: var(--accent); color: #fff;
    font-size: 9px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    padding: 2px 8px; border-radius: 0 5px 0 4px;
  }
  .model-card.selected .model-recommended { background: #1d4ed8; }

  /* Budget section */
  .budget-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    align-items: start;
  }
  .budget-input-wrap {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 14px 16px;
  }
  .budget-input-wrap:focus-within { border-color: var(--accent); }
  .budget-currency { font-size: 22px; font-weight: 300; color: var(--text-dim); margin-right: 4px; }
  .budget-amount-input {
    background: transparent; border: none; outline: none;
    font-family: 'IBM Plex Mono', monospace; font-size: 28px; font-weight: 300;
    color: var(--text-pri); width: 160px;
  }
  .budget-sublabel { font-size: 11px; color: var(--text-dim); margin-top: 6px; }

  .budget-estimate {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 14px 16px;
  }
  .budget-estimate-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; font-size: 12px; }
  .budget-estimate-row + .budget-estimate-row { border-top: 1px solid var(--border); }
  .budget-estimate-label { color: var(--text-sec); }
  .budget-estimate-val { font-family: 'IBM Plex Mono', monospace; color: var(--text-pri); }
  .budget-estimate-val.green { color: var(--green); }
  .budget-estimate-val.amber { color: var(--amber); }
  .budget-estimate-val.red   { color: var(--red); }

  .budget-bar-track {
    height: 4px; background: var(--border); border-radius: 2px;
    margin-top: 10px; overflow: hidden;
  }
  .budget-bar-fill {
    height: 100%; border-radius: 2px; transition: width 0.3s ease, background 0.3s;
  }

  /* Suggested tasks */
  .sugg-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
  .sugg-task {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 12px; cursor: pointer;
    transition: border-color 0.15s, background 0.15s; text-align: left;
  }
  .sugg-task:hover { border-color: var(--border-lit); background: var(--bg-raised); }
  .sugg-task-domain {
    font-size: 9px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 5px;
  }
  .sugg-task-title { font-size: 12px; color: var(--text-pri); font-weight: 500; line-height: 1.4; margin-bottom: 4px; }
  .sugg-task-meta { font-size: 10px; color: var(--text-dim); }

  /* Footer actions */
  .exec-config-footer {
    display: flex; align-items: center; gap: 10px;
    padding-top: 20px; border-top: 1px solid var(--border); margin-top: 8px;
  }
  .exec-config-notice {
    font-size: 11px; color: var(--text-dim); margin-left: auto;
    max-width: 280px; text-align: right; line-height: 1.5;
  }

  /* ── PROMPT LIBRARY PAGE ─────────────────────────────────────────────────── */

  .prompt-filter-bar {
    display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;
  }
  .prompt-filter-pill {
    padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 500;
    border: 1px solid var(--border); color: var(--text-dim);
    cursor: pointer; background: transparent; font-family: 'IBM Plex Sans', sans-serif;
    transition: all 0.15s;
  }
  .prompt-filter-pill:hover { border-color: var(--border-lit); color: var(--text-sec); }
  .prompt-filter-pill.active { background: var(--accent-dim); border-color: var(--accent); color: var(--accent); }

  .prompt-type-badge {
    display: inline-flex; align-items: center;
    padding: 2px 8px; border-radius: 3px; font-size: 10px; font-weight: 600;
    letter-spacing: 0.05em; text-transform: uppercase; flex-shrink: 0;
  }
  .pt-system      { background: #1e1b4b; color: #818cf8; }
  .pt-classification { background: #1e3a5f; color: #60a5fa; }
  .pt-extraction  { background: var(--green-dim); color: var(--green); }
  .pt-drafting    { background: #312e81; color: #a5b4fc; }
  .pt-clarification { background: var(--amber-dim); color: var(--amber); }
  .pt-risk_flagging { background: var(--red-dim); color: var(--red); }
  .pt-summarization { background: #064e3b; color: #34d399; }
  .pt-role_profile_generation { background: #1c2330; color: #94a3b8; }

  .prompt-card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; overflow: hidden; margin-bottom: 10px;
    transition: border-color 0.15s;
  }
  .prompt-card:hover { border-color: var(--border-lit); }
  .prompt-card-header {
    display: flex; align-items: center; gap: 10px; padding: 12px 16px;
    cursor: pointer; user-select: none;
  }
  .prompt-card-id {
    font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    color: var(--accent); font-weight: 600; flex-shrink: 0;
  }
  .prompt-card-name { font-size: 12px; font-weight: 500; flex: 1; }
  .prompt-card-domain { font-size: 10px; color: var(--text-dim); font-family: 'IBM Plex Mono', monospace; }
  .prompt-card-chevron { color: var(--text-dim); font-size: 10px; flex-shrink: 0; transition: transform 0.2s; }
  .prompt-card-chevron.open { transform: rotate(90deg); }
  .prompt-card-body { padding: 0 16px 16px; border-top: 1px solid var(--border); }
  .prompt-section { margin-top: 12px; }
  .prompt-section-label { font-size: 10px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 6px; }

  .prompt-template-box {
    background: var(--bg-base); border: 1px solid var(--border);
    border-radius: 4px; padding: 10px 12px;
    font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    color: var(--text-sec); line-height: 1.7; white-space: pre-wrap; word-break: break-word;
  }
  .prompt-var { color: var(--amber); }
  .prompt-meta-row { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 10px; }
  .prompt-meta-field { display: flex; flex-direction: column; gap: 2px; }
  .prompt-meta-label { font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); }
  .prompt-meta-val { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-pri); }

  /* ── SCHEMA DRAWER / MODAL ───────────────────────────────────────────────── */
  .schema-overlay {
    position: fixed; inset: 0; background: rgba(10,12,15,0.8);
    z-index: 500; display: flex; align-items: flex-start; justify-content: flex-end;
    animation: fadeIn 0.2s ease both;
  }
  .schema-drawer {
    width: 520px; max-width: 100vw; height: 100vh; overflow-y: auto;
    background: var(--bg-surface); border-left: 1px solid var(--border-lit);
    display: flex; flex-direction: column;
    animation: slideInRight 0.25s ease both;
  }
  @keyframes slideInRight {
    from { transform: translateX(40px); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
  }
  .schema-drawer-header {
    padding: 16px 20px; border-bottom: 1px solid var(--border);
    display: flex; align-items: flex-start; justify-content: space-between;
    flex-shrink: 0; position: sticky; top: 0; background: var(--bg-surface); z-index: 1;
  }
  .schema-drawer-body { padding: 20px; flex: 1; }
  .schema-tab-bar { display: flex; gap: 2px; margin-bottom: 16px; background: var(--bg-base); border-radius: 5px; padding: 3px; }
  .schema-tab {
    flex: 1; padding: 6px; text-align: center; border-radius: 3px;
    font-size: 11px; font-weight: 500; cursor: pointer; color: var(--text-dim);
    transition: all 0.15s;
  }
  .schema-tab.active { background: var(--bg-surface); color: var(--text-pri); }

  /* ── DOMAIN OUTPUT CARDS ─────────────────────────────────────────────────── */
  .output-card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-left: 3px solid var(--green); border-radius: 6px; padding: 14px 16px;
  }
  .output-card-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
  .output-card-type { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--green); }
  .output-key-changes { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 5px; }
  .output-key-change { display: flex; gap: 8px; font-size: 12px; }
  .output-key-change-bullet { color: var(--green); flex-shrink: 0; }
  .output-review-focus { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
  .output-review-tag {
    font-size: 10px; padding: 2px 8px; border-radius: 3px;
    background: var(--red-dim); color: var(--red); border: 1px solid #7f1d1d;
  }
  .output-stat-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 10px; }
  .output-stat { display: flex; flex-direction: column; gap: 2px; }
  .output-stat-label { font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); }
  .output-stat-val { font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: var(--text-pri); font-weight: 600; }

  /* ── CLARIFICATION REPLY ─────────────────────────────────────────────────── */
  .clarify-reply-box {
    margin-top: 12px; border-top: 1px solid var(--border); padding-top: 12px;
  }
  .clarify-reply-label { font-size: 11px; font-weight: 500; color: var(--amber); margin-bottom: 8px; }
  .clarify-reply-fields { display: flex; flex-direction: column; gap: 8px; }
  .clarify-field-row { display: flex; gap: 8px; align-items: center; }
  .clarify-field-name { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--amber); min-width: 140px; flex-shrink: 0; }
  .clarify-field-input {
    flex: 1; background: var(--bg-base); border: 1px solid var(--border);
    border-radius: 4px; color: var(--text-pri); padding: 6px 10px;
    font-family: 'IBM Plex Sans', sans-serif; font-size: 12px; outline: none;
  }
  .clarify-field-input:focus { border-color: var(--amber); }

  /* ── CLASSIFY OVERLAY CLARIFICATION BRANCH ─────────────────────────────────── */

  .classify-clarify-section {
    margin-top: 16px; padding-top: 16px;
    border-top: 1px solid var(--border);
    animation: fadeUp 0.4s ease both;
  }
  .classify-clarify-banner {
    background: var(--amber-dim); border: 1px solid #78350f;
    border-radius: 5px; padding: 10px 14px; margin-bottom: 14px;
    font-size: 12px; color: var(--amber); line-height: 1.5;
  }
  .classify-clarify-label {
    font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--amber); margin-bottom: 10px;
  }
  .classify-clarify-field {
    background: var(--bg-raised); border: 1px solid var(--border);
    border-radius: 5px; padding: 10px 12px; margin-bottom: 8px;
  }
  .classify-clarify-field-header {
    display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
  }
  .classify-clarify-field-name {
    font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    color: var(--amber); font-weight: 600;
  }
  .classify-clarify-question {
    font-size: 12px; color: var(--text-sec); margin-bottom: 6px; line-height: 1.5;
  }
  .classify-clarify-example {
    font-size: 10px; color: var(--text-dim); font-family: 'IBM Plex Mono', monospace;
    margin-bottom: 6px;
  }
  .classify-clarify-input {
    width: 100%; background: var(--bg-base); border: 1px solid var(--border-lit);
    border-radius: 4px; color: var(--text-pri); padding: 7px 10px;
    font-family: 'IBM Plex Sans', sans-serif; font-size: 12px; outline: none;
  }
  .classify-clarify-input:focus { border-color: var(--amber); }

  /* ── PLAN PREVIEW TIMELINE CARD ─────────────────────────────────────────────── */
  .plan-preview-card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-left: 3px solid var(--indigo); border-radius: 6px; padding: 14px;
  }
  .plan-preview-header {
    display: flex; align-items: center; gap: 8px; margin-bottom: 12px;
  }
  .plan-preview-steps { display: flex; flex-direction: column; gap: 4px; }
  .plan-step-row {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 12px; border-radius: 4px;
    background: var(--bg-base); border: 1px solid var(--border);
  }
  .plan-step-num {
    width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700; background: var(--bg-hover); color: var(--text-dim);
  }
  .plan-step-num.approval { background: var(--amber-dim); color: var(--amber); }
  .plan-step-num.exec     { background: var(--accent-dim); color: var(--accent); }
  .plan-step-num.done     { background: var(--green-dim); color: var(--green); }
  .plan-step-name { font-size: 12px; flex: 1; }
  .plan-step-badge {
    font-size: 10px; padding: 2px 7px; border-radius: 3px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.04em;
  }
  .plan-step-badge.auto   { background: var(--green-dim); color: var(--green); }
  .plan-step-badge.gate   { background: var(--amber-dim); color: var(--amber); }
  .plan-step-badge.safe   { background: var(--bg-hover); color: var(--text-dim); }
  .plan-step-connector {
    width: 2px; height: 8px; background: var(--border); margin-left: 19px;
  }

  /* ── AI QUALITY DASHBOARD ────────────────────────────────────────────────────── */
  .ai-quality-row {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
    margin-bottom: 16px;
  }
  .ai-quality-card {
    background: var(--bg-surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 12px 14px;
  }
  .ai-quality-val { font-family: 'IBM Plex Mono', monospace; font-size: 22px; font-weight: 300; }
  .ai-quality-label { font-size: 11px; color: var(--text-sec); margin-top: 3px; }
  .ai-quality-sub { font-size: 10px; color: var(--text-dim); margin-top: 2px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .spinner {
    display: inline-block;
    animation: spin 0.8s linear infinite;
  }
`;

// ─── MOCK DATA ─────────────────────────────────────────────────────────────────

// ─── UI COPY (Part C — Prompt Library) ────────────────────────────────────────
const UI_COPY = {
  task_submit_hint: "Describe what you want done. The Virtual Worker will match an approved workflow and ask for missing info if needed.",
  approval_hint: "This task includes a sensitive action. Please approve to continue or reject to stop execution.",
  audit_hint: "Every action is logged for accountability and compliance.",
  low_confidence_hint: "I'm not fully confident. Please choose a workflow or provide the missing details.",
};

// ─── RISK FLAG ENUM (RISK_GLOBAL_001) ─────────────────────────────────────────
// Valid flags: external_domain | bulk_operation | high_impact_system | pii_suspected
const RISK_FLAG_META = {
  external_domain:    { label: "External domain access",     color: "var(--amber)" },
  bulk_operation:     { label: "Bulk operation",             color: "var(--amber)" },
  high_impact_system: { label: "High-impact system action",  color: "var(--red)"   },
  pii_suspected:      { label: "PII data suspected",         color: "var(--red)"   },
};

// ─── MOCK TASKS (template IDs aligned to Prompt Library) ──────────────────────
const MOCK_TASKS = [
  {
    id: "TSK-2841", title: "Generate expense summary for Feb receipts",
    status: "awaiting_approval", risk: "high",
    domain: "Finance", template: "FIN_EXPENSE_SUMMARY", templateVersion: "v1.2",
    promptId: "EXT_FIN_001", confidence: 0.97,
    aiStatus: "ok", missingFields: [],
    riskFlags: ["pii_suspected", "high_impact_system"],
    createdBy: "M. Chen", workspace: "corp-finance", createdAt: "2026-02-19T08:12:00Z",
    extractedInputs: { date_range_start: "2026-02-01", date_range_end: "2026-02-28", receipt_ids: ["RCP-881","RCP-882","RCP-890"], output_format: "pdf" },
  },
  {
    id: "TSK-2840", title: "Create support ticket — API gateway 5xx spike",
    status: "completed", risk: "medium",
    domain: "Technical Operations", template: "OPS_CREATE_TICKET", templateVersion: "v2.1",
    promptId: "EXT_OPS_001", confidence: 0.94,
    aiStatus: "ok", missingFields: [],
    riskFlags: ["high_impact_system"],
    createdBy: "A. Patel", workspace: "engineering", createdAt: "2026-02-19T07:44:00Z",
    extractedInputs: { summary: "API gateway returning 5xx on /orders endpoint", description: "Spike in 503 errors since 07:30 UTC. Suspected load balancer misconfiguration.", severity: "high", system: "api-gateway-prod", labels: ["incident","production","gateway"] },
  },
  {
    id: "TSK-2839", title: "Draft outreach email — Q1 renewal campaign",
    status: "needs_clarification", risk: "high",
    domain: "Sales & Marketing", template: "SM_DRAFT_OUTREACH_EMAIL", templateVersion: "v1.0",
    promptId: "DRF_SM_001", confidence: 0.61,
    aiStatus: "needs_clarification",
    missingFields: ["recipient_name", "company_name", "product_focus"],
    riskFlags: ["external_domain", "bulk_operation"],
    createdBy: "L. Torres", workspace: "revenue-ops", createdAt: "2026-02-19T07:30:00Z",
    extractedInputs: null,
  },
  {
    id: "TSK-2838", title: "Query shipment status — TRK-884821",
    status: "completed", risk: "low",
    domain: "Logistics", template: "LOG_SHIPMENT_STATUS", templateVersion: "v1.0",
    promptId: "EXT_LOG_001", confidence: 0.99,
    aiStatus: "ok", missingFields: [],
    riskFlags: [],
    createdBy: "R. Okonkwo", workspace: "supply-chain", createdAt: "2026-02-18T16:55:00Z",
    extractedInputs: { tracking_number: "TRK-884821", carrier: "DHL" },
  },
  {
    id: "TSK-2837", title: "Summarise pull request #1482 — auth refactor",
    status: "failed", risk: "medium",
    domain: "Developer", template: "DEV_PR_SUMMARY", templateVersion: "v1.1",
    promptId: "SUM_DEV_001", confidence: 0.88,
    aiStatus: "ok", missingFields: [],
    riskFlags: ["high_impact_system"],
    createdBy: "S. Kim", workspace: "engineering", createdAt: "2026-02-18T15:20:00Z",
    extractedInputs: { pr_title: "Refactor auth middleware to JWT", pr_description: "Replaces session-based auth with stateless JWT tokens across all services.", diff: "48 files changed, +1,204 -892" },
  },
];

// ─── MOCK APPROVALS (standard risk flags, matched template IDs) ───────────────
const MOCK_APPROVALS = [
  {
    id: "APR-441", taskId: "TSK-2841",
    action: "Generate and distribute expense summary report for February 2026",
    template: "FIN_EXPENSE_SUMMARY v1.2",
    extractedInputs: { date_range_start: "2026-02-01", date_range_end: "2026-02-28", receipt_ids: ["RCP-881","RCP-882","RCP-890"], output_format: "pdf" },
    riskFlags: ["pii_suspected", "high_impact_system"],
    requestedBy: "M. Chen", requestedAt: "2026-02-19T08:12:00Z",
    promptId: "EXT_FIN_001", confidence: 0.97,
  },
  {
    id: "APR-440", taskId: "TSK-2836",
    action: "Draft and queue outreach email to 3 renewal prospects",
    template: "SM_DRAFT_OUTREACH_EMAIL v1.0",
    extractedInputs: { recipient_segment: "Q1-renewals", tone: "professional", product_focus: "Enterprise Plan" },
    riskFlags: ["external_domain", "bulk_operation"],
    requestedBy: "D. Walsh", requestedAt: "2026-02-19T06:30:00Z",
    promptId: "DRF_SM_001", confidence: 0.82,
  },
];

// ─── MOCK TEMPLATES (all MVP templates from Prompt Library + MVP doc) ──────────
const MOCK_TEMPLATES = [
  // Finance
  { id: "FIN_EXPENSE_SUMMARY",  name: "Expense Summary Generator",      domain: "Finance",              risk: "medium", version: "v1.2", versions: 3,  policy: "Single approver",    description: "Summarises receipts into a structured expense report (PDF/Sheet)" },
  { id: "FIN_INVOICE_DRAFT",    name: "Invoice Draft Generator",         domain: "Finance",              risk: "medium", version: "v1.0", versions: 1,  policy: "Single approver",    description: "Drafts invoice from client details and line items — no payment execution" },
  { id: "FIN_BUDGET_VARIANCE",  name: "Monthly Budget Variance Summary", domain: "Finance",              risk: "low",    version: "v1.1", versions: 2,  policy: "Auto-approve",       description: "Generates variance analysis report from spreadsheet data source" },
  // Technical Operations
  { id: "OPS_INCIDENT_SUMMARY", name: "Incident Summary Generator",      domain: "Technical Operations", risk: "low",    version: "v2.0", versions: 5,  policy: "Auto-approve",       description: "Summarises monitoring logs into structured incident report" },
  { id: "OPS_CREATE_TICKET",    name: "Create Support Ticket",           domain: "Technical Operations", risk: "medium", version: "v2.1", versions: 8,  policy: "Auto-approve",       description: "Extracts Jira/ServiceNow ticket fields and creates ticket (status changes need approval)" },
  { id: "OPS_HEALTH_REPORT",    name: "Weekly System Health Report",     domain: "Technical Operations", risk: "low",    version: "v1.3", versions: 4,  policy: "Auto-approve",       description: "Compiles monitoring metrics into email summary for ops team" },
  // Sales & Marketing
  { id: "SM_LEAD_CAPTURE",      name: "Lead Capture → CRM Entry",        domain: "Sales & Marketing",    risk: "medium", version: "v3.1", versions: 9,  policy: "Approval required",  description: "Captures lead data and creates CRM entry (CRM write requires approval)" },
  { id: "SM_CAMPAIGN_SUMMARY",  name: "Campaign Performance Summary",    domain: "Sales & Marketing",    risk: "low",    version: "v1.4", versions: 5,  policy: "Auto-approve",       description: "Aggregates campaign analytics into performance summary report" },
  { id: "SM_DRAFT_OUTREACH_EMAIL","name": "Draft Outreach Email",        domain: "Sales & Marketing",    risk: "high",   version: "v1.0", versions: 1,  policy: "Approval required",  description: "Drafts professional outreach email — external send requires approval, bulk disabled" },
  // Logistics
  { id: "LOG_SHIPMENT_STATUS",  name: "Shipment Status Query",           domain: "Logistics",            risk: "low",    version: "v1.0", versions: 2,  policy: "Auto-approve",       description: "Queries logistics API for shipment status by tracking number and carrier" },
  { id: "LOG_LOW_STOCK",        name: "Inventory Low-Stock Alert",       domain: "Logistics",            risk: "low",    version: "v1.1", versions: 3,  policy: "Auto-approve",       description: "Triggers low-stock alerts based on inventory threshold rules" },
  { id: "LOG_VENDOR_COMM",      name: "Vendor Communication Draft",      domain: "Logistics",            risk: "high",   version: "v1.0", versions: 1,  policy: "Approval required",  description: "Drafts vendor communication for approval — no inventory deletion" },
  // Developer
  { id: "DEV_PR_SUMMARY",       name: "Pull Request Summary",            domain: "Developer",            risk: "low",    version: "v1.1", versions: 4,  policy: "Auto-approve",       description: "Summarises PR changes and provides risk assessment from diff" },
  { id: "DEV_DEPLOY_CHECKLIST", name: "Deployment Checklist Generator",  domain: "Developer",            risk: "medium", version: "v1.0", versions: 2,  policy: "Admin approval",     description: "Generates pre-deployment checklist — no deployment triggers" },
  { id: "DEV_CICD_STATUS",      name: "CI/CD Status Report",             domain: "Developer",            risk: "low",    version: "v1.2", versions: 3,  policy: "Auto-approve",       description: "Retrieves CI/CD pipeline status and compiles into structured report" },
];

// ─── MOCK WORKERS (full schema from A3.1 Worker Profile) ──────────────────────
const MOCK_WORKERS = [
  {
    id: "wk-finance-01",
    name: "Finance Analyst Worker",
    role_title: "Finance Analyst",
    department: "Finance",
    seniority: "mid",
    active: true,
    responsibilities: ["Expense report generation", "Invoice drafting", "Budget variance analysis", "Period close support"],
    allowed_domains: ["Finance"],
    preferred_templates: ["FIN_EXPENSE_SUMMARY", "FIN_INVOICE_DRAFT", "FIN_BUDGET_VARIANCE"],
    restricted_actions: ["payment_execution", "bank_transfer", "payroll_adjustment"],
    approval_rules_overrides: {
      always_require_approval_for: ["FIN_INVOICE_DRAFT"],
      never_require_approval_for: ["FIN_BUDGET_VARIANCE"],
    },
    communication_style: { tone: "professional", verbosity: "detailed", formats: ["report", "email"] },
  },
  {
    id: "wk-ops-01",
    name: "SRE Worker",
    role_title: "Site Reliability Engineer",
    department: "Engineering",
    seniority: "senior",
    active: false,
    responsibilities: ["Incident summary generation", "Support ticket creation", "System health reporting"],
    allowed_domains: ["Technical Operations"],
    preferred_templates: ["OPS_INCIDENT_SUMMARY", "OPS_CREATE_TICKET", "OPS_HEALTH_REPORT"],
    restricted_actions: ["db_drop", "secret_rotation", "deployment_trigger", "automatic_merge"],
    approval_rules_overrides: {
      always_require_approval_for: ["OPS_CREATE_TICKET"],
      never_require_approval_for: [],
    },
    communication_style: { tone: "direct", verbosity: "short", formats: ["bullet_summary", "email"] },
  },
];

// ─── MOCK AUDIT (with prompt IDs, confidence, standard event types) ───────────
const MOCK_AUDIT = [
  { ts: "2026-02-19T08:14:22Z", action: "APPROVAL_REQUESTED",  actor: "policy-engine",   taskId: "TSK-2841", detail: "Risk flags: pii_suspected, high_impact_system — escalated" },
  { ts: "2026-02-19T08:12:03Z", action: "RISK_FLAGS_EVALUATED", actor: "RISK_GLOBAL_001", taskId: "TSK-2841", detail: "Flags: pii_suspected, high_impact_system" },
  { ts: "2026-02-19T08:12:02Z", action: "SCHEMA_VALIDATED",    actor: "EXT_FIN_001",     taskId: "TSK-2841", detail: "4/4 fields resolved · confidence 0.97" },
  { ts: "2026-02-19T08:12:01Z", action: "TEMPLATE_CLASSIFIED", actor: "CLS_GLOBAL_001",  taskId: "TSK-2841", detail: "Template: FIN_EXPENSE_SUMMARY v1.2 · confidence 0.97" },
  { ts: "2026-02-19T08:12:00Z", action: "TASK_CREATED",        actor: "m.chen@corp",     taskId: "TSK-2841", detail: "Workspace: corp-finance · prompt: EXT_FIN_001" },
  { ts: "2026-02-19T07:52:10Z", action: "TASK_COMPLETED",      actor: "n8n-runner",      taskId: "TSK-2840", detail: "Run RUN-8820 succeeded in 88s · OPS_CREATE_TICKET" },
  { ts: "2026-02-19T07:48:01Z", action: "N8N_EXECUTION_START", actor: "n8n-bridge",      taskId: "TSK-2840", detail: "workflow_id: wf-ops-ticket-001 · idempotency: b2e1-9932" },
  { ts: "2026-02-19T07:44:00Z", action: "TASK_CREATED",        actor: "a.patel@eng",     taskId: "TSK-2840", detail: "Workspace: engineering · prompt: EXT_OPS_001" },
];

// ─── MOCK PROMPT LIBRARY (Part A of Prompt Library doc) ────────────────────────

const MOCK_PROMPTS = [
  // ── Global Prompts ───────────────────────────────────────────────────────────
  {
    id: "SYS_GLOBAL_001", type: "system", domain: "global",
    name: "Global System Rules",
    version: "1.2.0", owner: "platform-team", lastUpdated: "2026-02-10T09:00:00Z",
    hashSha256: "sha256:4f3a8b2c...e291",
    usedInTemplates: ["ALL"],
    taskPrompt: null,
    systemPrompt: "You are the AI Interpretation Layer of the Virtual Worker Platform. Your job is to (1) classify a user request to a single approved template, (2) extract structured inputs that match a provided JSON Schema exactly, and (3) request clarification when required fields are missing or confidence is low. You must never execute actions, never access credentials, never invent fields, and never output text outside JSON. Return valid JSON only.",
    variables: [],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["ok", "needs_clarification", "no_match"] },
        confidence: { type: "number", minimum: 0, maximum: 1 },
        data: { type: ["object", "null"] },
        missing_fields: { type: "array", items: { type: "string" } },
        notes: { type: "string" },
      },
      required: ["status", "confidence", "data", "missing_fields", "notes"],
    },
  },
  {
    id: "CLS_GLOBAL_001", type: "classification", domain: "global",
    name: "Template Classification",
    version: "2.0.1", owner: "platform-team", lastUpdated: "2026-02-14T11:20:00Z",
    hashSha256: "sha256:9d1e2c4f...44f1",
    usedInTemplates: ["ALL"],
    taskPrompt: "User task: {user_input}\n\nAvailable templates (id, name, description): {templates}\n\nSelect ONE best template id. If none apply, use selected_template_id=null and status=no_match. Provide confidence 0..1.\nReturn JSON only.",
    variables: ["user_input", "templates"],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["ok", "no_match"] },
        selected_template_id: { type: ["string", "null"] },
        confidence: { type: "number", minimum: 0, maximum: 1 },
        rationale: { type: "string" },
      },
      required: ["status", "selected_template_id", "confidence", "rationale"],
    },
  },
  {
    id: "CLARIFY_GLOBAL_001", type: "clarification", domain: "global",
    name: "Ask Only For Missing Fields",
    version: "1.1.0", owner: "platform-team", lastUpdated: "2026-02-12T08:00:00Z",
    hashSha256: "sha256:a5f9c2e1...c291",
    usedInTemplates: ["ALL"],
    taskPrompt: "User task: {user_input}\nSelected template: {template_id}\nMissing required fields: {missing_fields}\n\nWrite a concise clarification request asking ONLY for the missing fields. Return JSON only.",
    variables: ["user_input", "template_id", "missing_fields"],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["needs_clarification"] },
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              field: { type: "string" },
              question: { type: "string" },
              example: { type: "string" },
            },
            required: ["field", "question", "example"],
          },
        },
      },
      required: ["status", "questions"],
    },
  },
  {
    id: "RISK_GLOBAL_001", type: "risk_flagging", domain: "global",
    name: "Risk Flags From Inputs",
    version: "1.3.0", owner: "security-team", lastUpdated: "2026-02-16T14:30:00Z",
    hashSha256: "sha256:b8d2f1a9...9e12",
    usedInTemplates: ["ALL"],
    taskPrompt: "Given: template_id={template_id} and extracted_inputs={inputs}. Identify risk_flags from this list only: [external_domain, bulk_operation, high_impact_system, pii_suspected]. Return JSON only.",
    variables: ["template_id", "inputs"],
    outputSchema: {
      type: "object",
      properties: {
        risk_flags: { type: "array", items: { type: "string" } },
        risk_summary: { type: "string" },
      },
      required: ["risk_flags", "risk_summary"],
    },
  },
  {
    id: "ROLE_FROM_JD_001", type: "role_profile_generation", domain: "global",
    name: "Job Description → Worker Profile",
    version: "1.0.0", owner: "platform-team", lastUpdated: "2026-02-17T10:00:00Z",
    hashSha256: "sha256:c4e8b2d1...7f34",
    usedInTemplates: ["WORKER_PROFILE"],
    taskPrompt: "Job Description text: {jd_text}\n\nApproved templates available in this workspace: {templates}\n\nCreate a Worker Profile that matches the JD.\nRules: (1) map responsibilities to preferred_templates (only from {templates}), (2) do not invent capabilities, (3) add restricted_actions if JD includes sensitive activities, (4) keep communication_style suitable for business. Return JSON only.",
    variables: ["jd_text", "templates"],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["ok", "needs_clarification"] },
        confidence: { type: "number", minimum: 0, maximum: 1 },
        data: { $ref: "worker_profile_schema" },
        missing_fields: { type: "array", items: { type: "string" } },
        notes: { type: "string" },
      },
      required: ["status", "confidence", "data", "missing_fields", "notes"],
    },
  },
  // ── Domain Prompt Packs ───────────────────────────────────────────────────────
  {
    id: "EXT_FIN_001", type: "extraction", domain: "finance",
    name: "Extract Expense Summary Inputs",
    version: "1.2.0", owner: "finance-team", lastUpdated: "2026-02-11T09:00:00Z",
    hashSha256: "sha256:d7a3c5b9...1e82",
    usedInTemplates: ["FIN_EXPENSE_SUMMARY"],
    taskPrompt: "User task: {user_input}\nAttachments: {attachment_list}\n\nExtract inputs matching schema exactly. If required fields missing, set status=needs_clarification and list missing_fields. Return JSON only.",
    variables: ["user_input", "attachment_list"],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["ok", "needs_clarification"] },
        confidence: { type: "number" },
        data: {
          type: ["object", "null"],
          properties: {
            date_range_start: { type: "string", description: "YYYY-MM-DD" },
            date_range_end: { type: "string", description: "YYYY-MM-DD" },
            receipt_ids: { type: "array", items: { type: "string" } },
            output_format: { type: "string", enum: ["pdf", "xlsx", "csv"] },
          },
          required: ["date_range_start", "date_range_end", "receipt_ids", "output_format"],
        },
        missing_fields: { type: "array", items: { type: "string" } },
        notes: { type: "string" },
      },
      required: ["status", "confidence", "data", "missing_fields", "notes"],
    },
  },
  {
    id: "DRF_SM_001", type: "drafting", domain: "sales_marketing",
    name: "Draft Outreach Email (Approval-Gated)",
    version: "1.0.0", owner: "sales-team", lastUpdated: "2026-02-13T13:00:00Z",
    hashSha256: "sha256:e2b6d4c8...3a91",
    usedInTemplates: ["SM_DRAFT_OUTREACH_EMAIL"],
    taskPrompt: "Inputs: {inputs_json}\n\nWrite a short, professional outreach email. Do NOT claim the email was sent. Return JSON only.",
    variables: ["inputs_json"],
    outputSchema: {
      type: "object",
      properties: {
        subject: { type: "string" },
        body: { type: "string" },
        tone: { type: "string", enum: ["professional", "friendly", "direct"] },
        compliance_note: { type: "string" },
      },
      required: ["subject", "body", "tone", "compliance_note"],
    },
  },
  {
    id: "EXT_OPS_001", type: "extraction", domain: "technical_ops",
    name: "Extract Ticket Fields",
    version: "2.1.0", owner: "ops-team", lastUpdated: "2026-02-15T16:00:00Z",
    hashSha256: "sha256:f1a8e3d7...5c02",
    usedInTemplates: ["OPS_CREATE_TICKET"],
    taskPrompt: "User task: {user_input}\nSignals/Logs: {signals}\n\nExtract Jira/ServiceNow ticket fields matching schema. Return JSON only.",
    variables: ["user_input", "signals"],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["ok", "needs_clarification"] },
        confidence: { type: "number" },
        data: {
          type: ["object", "null"],
          properties: {
            summary: { type: "string" },
            description: { type: "string" },
            severity: { type: "string", enum: ["low", "medium", "high", "critical"] },
            system: { type: "string" },
            labels: { type: "array", items: { type: "string" } },
          },
          required: ["summary", "description", "severity", "system"],
        },
        missing_fields: { type: "array", items: { type: "string" } },
        notes: { type: "string" },
      },
      required: ["status", "confidence", "data", "missing_fields", "notes"],
    },
  },
  {
    id: "EXT_LOG_001", type: "extraction", domain: "logistics",
    name: "Extract Shipment Status Inputs",
    version: "1.0.0", owner: "logistics-team", lastUpdated: "2026-02-09T10:00:00Z",
    hashSha256: "sha256:a9c2f7e4...8b13",
    usedInTemplates: ["LOG_SHIPMENT_STATUS"],
    taskPrompt: "User task: {user_input}\n\nExtract tracking_number and carrier if stated. If missing, ask clarification. Return JSON only.",
    variables: ["user_input"],
    outputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["ok", "needs_clarification"] },
        confidence: { type: "number" },
        data: {
          type: ["object", "null"],
          properties: {
            tracking_number: { type: "string" },
            carrier: { type: "string" },
          },
          required: ["tracking_number"],
        },
        missing_fields: { type: "array", items: { type: "string" } },
        notes: { type: "string" },
      },
      required: ["status", "confidence", "data", "missing_fields", "notes"],
    },
  },
  {
    id: "SUM_DEV_001", type: "summarization", domain: "developer",
    name: "Summarize Pull Request",
    version: "1.1.0", owner: "engineering-team", lastUpdated: "2026-02-18T08:00:00Z",
    hashSha256: "sha256:b3e7d2c5...4a21",
    usedInTemplates: ["DEV_PR_SUMMARY"],
    taskPrompt: "PR title: {pr_title}\nPR description: {pr_description}\nDiff summary: {diff}\n\nReturn a concise summary and risk assessment. JSON only.",
    variables: ["pr_title", "pr_description", "diff"],
    outputSchema: {
      type: "object",
      properties: {
        summary: { type: "string" },
        key_changes: { type: "array", items: { type: "string" } },
        files_changed: { type: "integer", minimum: 0 },
        risk_level: { type: "string", enum: ["low", "medium", "high"] },
        review_focus: { type: "array", items: { type: "string" } },
      },
      required: ["summary", "key_changes", "files_changed", "risk_level", "review_focus"],
    },
  },
];

// ─── MOCK TEMPLATE INPUT SCHEMAS (for schema drawer per template) ───────────────

const TEMPLATE_SCHEMAS = {
  FIN_EXPENSE_SUMMARY: {
    promptId: "EXT_FIN_001",
    inputSchema: {
      date_range_start: { type: "string", format: "YYYY-MM-DD", required: true },
      date_range_end:   { type: "string", format: "YYYY-MM-DD", required: true },
      receipt_ids:      { type: "array<string>", required: true },
      output_format:    { type: "enum", values: ["pdf", "xlsx", "csv"], required: true },
    },
    outputSchema: {
      report_url: { type: "string" },
      total_amount: { type: "number" },
      currency: { type: "string" },
      line_items: { type: "array<object>" },
    },
    governanceRules: ["No payment execution", "All reports logged with source references", "Approval required if pii_suspected flag"],
  },
  FIN_INVOICE_DRAFT: {
    promptId: "EXT_FIN_002",
    inputSchema: {
      client_name:    { type: "string", required: true },
      client_email:   { type: "string", format: "email", required: true },
      line_items:     { type: "array<{description,quantity,unit_price}>", required: true },
      currency:       { type: "string", default: "USD", required: false },
      due_date:       { type: "string", format: "YYYY-MM-DD", required: false },
    },
    outputSchema: {
      invoice_draft_url: { type: "string" },
      invoice_number: { type: "string" },
      total: { type: "number" },
      compliance_note: { type: "string" },
    },
    governanceRules: ["No payment execution", "Invoice draft only — no sending without approval"],
  },
  OPS_CREATE_TICKET: {
    promptId: "EXT_OPS_001",
    inputSchema: {
      summary:     { type: "string", required: true },
      description: { type: "string", required: true },
      severity:    { type: "enum", values: ["low", "medium", "high", "critical"], required: true },
      system:      { type: "string", required: true },
      labels:      { type: "array<string>", required: false },
    },
    outputSchema: {
      ticket_id: { type: "string" },
      ticket_url: { type: "string" },
      status: { type: "string" },
    },
    governanceRules: ["Ticket creation allowed without approval", "Ticket status changes require approval", "System-altering actions require admin approval"],
  },
  SM_DRAFT_OUTREACH_EMAIL: {
    promptId: "DRF_SM_001",
    inputSchema: {
      recipient_name:    { type: "string", required: true },
      company_name:      { type: "string", required: true },
      product_focus:     { type: "string", required: true },
      tone:              { type: "enum", values: ["professional", "friendly", "direct"], required: false },
      recipient_segment: { type: "string", required: false },
    },
    outputSchema: {
      subject: { type: "string" },
      body: { type: "string" },
      tone: { type: "string" },
      compliance_note: { type: "string" },
    },
    governanceRules: ["External email send requires approval", "Bulk actions disabled", "CRM write requires approval"],
  },
  LOG_SHIPMENT_STATUS: {
    promptId: "EXT_LOG_001",
    inputSchema: {
      tracking_number: { type: "string", required: true },
      carrier:         { type: "string", required: false },
    },
    outputSchema: {
      status: { type: "string" },
      location: { type: "string" },
      estimated_delivery: { type: "string" },
      events: { type: "array<object>" },
    },
    governanceRules: ["Read-only — no inventory modifications", "No vendor communication without approval"],
  },
  DEV_PR_SUMMARY: {
    promptId: "SUM_DEV_001",
    inputSchema: {
      pr_title:       { type: "string", required: true },
      pr_description: { type: "string", required: true },
      diff:           { type: "string", required: true },
    },
    outputSchema: {
      summary: { type: "string" },
      key_changes: { type: "array<string>" },
      files_changed: { type: "integer" },
      risk_level: { type: "enum", values: ["low", "medium", "high"] },
      review_focus: { type: "array<string>" },
    },
    governanceRules: ["No automatic merges", "No deployment triggers", "Admin approval required for system-altering actions"],
  },
};

// ─── MOCK TASK OUTPUTS (domain-specific AI outputs for completed tasks) ──────────

const MOCK_TASK_OUTPUTS = {
  "TSK-2840": {
    type: "ticket_created",
    promptId: "EXT_OPS_001",
    data: { ticket_id: "JIRA-4421", ticket_url: "https://jira.corp/browse/JIRA-4421", status: "Open", summary: "API gateway returning 5xx on /orders endpoint", severity: "high", system: "api-gateway-prod" },
  },
  "TSK-2838": {
    type: "shipment_status",
    promptId: "EXT_LOG_001",
    data: { tracking_number: "TRK-884821", carrier: "DHL", status: "In Transit", location: "Frankfurt, DE", estimated_delivery: "2026-02-21", events: 4 },
  },
  "TSK-2837": {
    type: "pr_summary",
    promptId: "SUM_DEV_001",
    data: {
      summary: "Replaces session-based authentication with stateless JWT tokens across all microservices. Significant security and performance implications.",
      key_changes: ["Removed express-session middleware from 12 services", "Added jsonwebtoken library with RS256 signing", "Updated API gateway to validate JWTs at ingress", "Migrated user data from session store to JWT claims"],
      files_changed: 48,
      risk_level: "medium",
      review_focus: ["Token expiry and refresh logic", "Key rotation procedure", "Backward compatibility during rollout"],
    },
  },
};

// ─── UTILITIES ──────────────────────────────────────────────────────────────────

const STATUS_CLASS = {
  created: "badge-created", interpreting: "badge-interpreting",
  awaiting_approval: "badge-awaiting", running: "badge-running",
  completed: "badge-completed", failed: "badge-failed", cancelled: "badge-cancelled",
};
const STATUS_DOT = {
  created: "#6b7280", interpreting: "#818cf8", awaiting_approval: "#f59e0b",
  running: "#3b82f6", completed: "#10b981", failed: "#ef4444", cancelled: "#4b5563",
};
const RISK_CLASS = { low: "badge-low", medium: "badge-medium", high: "badge-high" };

function StatusBadge({ status }) {
  return (
    <span className={`badge ${STATUS_CLASS[status] || "badge-created"}`}>
      <span className="badge-dot" style={{ background: STATUS_DOT[status] }} />
      {status?.replace("_", " ")}
    </span>
  );
}
function RiskBadge({ risk }) {
  return <span className={`badge ${RISK_CLASS[risk] || "badge-low"}`}>{risk} risk</span>;
}
function RoleBadge({ role }) {
  return <span className={`badge badge-${role}`}>{role}</span>;
}
function fmtTs(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toISOString().replace("T", " ").slice(0, 16) + " UTC";
}

// ─── INJECTION STYLES ──────────────────────────────────────────────────────────

function StyleInjector() {
  return <style>{css}</style>;
}

// ─── TOP NAV ───────────────────────────────────────────────────────────────────

function TopNav({ role, workspace, setWorkspace }) {
  return (
    <nav className="topnav">
      <div className="topnav-brand">
        <div className="topnav-brand-mark">VW</div>
        <span>Virtual Worker Platform</span>
      </div>
      <div className="workspace-switcher">
        <span>⬡</span>
        <span>{workspace}</span>
        <span style={{ color: "var(--text-dim)", fontSize: 10 }}>▾</span>
      </div>
      <div className="topnav-right">
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--text-sec)" }}>
          <div className="health-dot" />
          <span>All systems nominal</span>
        </div>
        <div className="icon-btn" title="Notifications">🔔</div>
        <RoleBadge role={role} />
        <div className="avatar">MC</div>
      </div>
    </nav>
  );
}

// ─── SIDEBAR ───────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { key: "tasks", icon: "☰", label: "Tasks" },
  { key: "approvals", icon: "◈", label: "Approvals", badge: 2 },
  { key: "exec-config", icon: "⬡", label: "Run Config" },
  { key: "templates", icon: "◻", label: "Templates" },
  { key: "prompt-library", icon: "◑", label: "Prompt Library" },
  { key: "workers", icon: "⬡", label: "Worker Profiles" },
  { key: "audit", icon: "◑", label: "Audit Log" },
  { key: "dashboard", icon: "◈", label: "Dashboard" },
];

function Sidebar({ page, setPage, collapsed, setCollapsed, onNewTask }) {
  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-nav">
        {/* New Task — triggers the governed command interface */}
        <div className="nav-item nav-item-new" onClick={onNewTask}>
          <span>＋</span>
          {!collapsed && <span>New Task</span>}
        </div>
        {NAV_ITEMS.map(n => (
          <div
            key={n.key}
            className={`nav-item${page === n.key ? " active" : ""}`}
            onClick={() => setPage(n.key)}
          >
            <span className="nav-item-icon">{n.icon}</span>
            {!collapsed && <span>{n.label}</span>}
            {!collapsed && n.badge && <span className="nav-badge">{n.badge}</span>}
          </div>
        ))}
      </div>
      <div className="sidebar-collapse-btn" onClick={() => setCollapsed(!collapsed)}>
        <span>{collapsed ? "→" : "←"}</span>
      </div>
    </aside>
  );
}

// ─── LIFECYCLE BAR ─────────────────────────────────────────────────────────────
// Aligned to Conceptual Design Section 4.4 Operational Modes
const LIFECYCLE_STEPS = ["created", "interpreting", "planned", "awaiting_approval", "running", "completed"];
const LIFECYCLE_LABELS = ["Intake", "Interpret", "Plan", "Gov. Review", "Execute", "Published"];

function LifecycleBar({ status }) {
  const idx = LIFECYCLE_STEPS.indexOf(status);
  // needs_clarification sits between interpreting and planned
  const displayIdx = status === "needs_clarification" ? 1 : idx;
  return (
    <div>
      <div className="lifecycle">
        {LIFECYCLE_STEPS.slice(0, -1).map((s, i) => (
          <div key={s} className={`lifecycle-step${i < displayIdx ? " done" : i === displayIdx ? " active" : " pending"}`} />
        ))}
      </div>
      <div className="lifecycle-nodes">
        {LIFECYCLE_LABELS.map((label, i) => (
          <div key={label} className={`lifecycle-node-label${i < displayIdx ? " done" : i === displayIdx ? " active" : ""}`}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── JSON VIEWER ───────────────────────────────────────────────────────────────

function JsonViewer({ data }) {
  const lines = JSON.stringify(data, null, 2).split("\n");
  return (
    <div className="json-viewer">
      {lines.map((line, i) => {
        const colored = line
          .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
          .replace(/: "([^"]*)"/g, ': <span class="json-str">"$1"</span>')
          .replace(/: (\d+\.?\d*)/g, ': <span class="json-num">$1</span>')
          .replace(/: (true|false)/g, ': <span class="json-bool">$1</span>');
        return <div key={i} dangerouslySetInnerHTML={{ __html: colored }} />;
      })}
    </div>
  );
}

// ─── EXECUTION COMPONENT ───────────────────────────────────────────────────────
// Pipeline steps aligned to Conceptual Design Section 6.4 Functional Flow:
// Classification → Template Selection → Entity Extraction → Schema Validation →
// Policy Evaluation → (Approval) → n8n Execution → Output Capture → Audit Logging

function ExecutionPanel({ task }) {
  const [expanded, setExpanded] = useState(false);
  const isAwaiting = task.status === "awaiting_approval";
  const isFailed = task.status === "failed";
  const isClarifying = task.status === "needs_clarification";

  const steps = [
    { name: "Template classification",         prompt: "CLS_GLOBAL_001", dur: "0.8s",  state: "done"    },
    { name: "Entity extraction + schema check", prompt: task.promptId || "EXT_001",     dur: "1.4s",  state: isClarifying ? "warn" : "done" },
    { name: "Policy evaluation + risk scoring", prompt: "RISK_GLOBAL_001",              dur: "0.3s",  state: isClarifying ? "pending" : "done" },
    { name: "Approval gate",                   prompt: "governance",                   dur: "—",     state: isAwaiting ? "running" : isClarifying ? "pending" : "done" },
    { name: "n8n workflow execution",           prompt: "n8n-bridge",                  dur: isFailed ? "—" : isAwaiting ? "—" : "88s",   state: isFailed ? "err" : isAwaiting || isClarifying ? "pending" : "done" },
    { name: "Output capture + artifact store",  prompt: "execution-orchestrator",      dur: "—",     state: isFailed || isAwaiting || isClarifying ? "pending" : "done" },
    { name: "Audit log write",                  prompt: "audit-engine",                dur: "—",     state: isFailed || isAwaiting || isClarifying ? "pending" : "done" },
    { name: "Notification + publication",       prompt: "notification-service",        dur: "—",     state: isFailed || isAwaiting || isClarifying ? "pending" : task.status === "completed" ? "done" : "pending" },
  ];

  return (
    <div>
      <div className="run-id-bar">
        <div className="run-field"><span className="run-field-label">Run ID</span><span className="run-field-val">RUN-8821</span></div>
        <div className="run-field"><span className="run-field-label">Idempotency Key</span><span className="run-field-val">a3f9-c2e1-8841</span></div>
        <div className="run-field"><span className="run-field-label">Attempt</span><span className="run-field-val">#1</span></div>
        <div className="run-field"><span className="run-field-label">Started</span><span className="run-field-val">2026-02-19 08:12 UTC</span></div>
        <div className="run-field" style={{ marginLeft: "auto" }}>
          <span className="run-field-label">Status</span>
          <StatusBadge status={task.status} />
        </div>
      </div>
      <div className="pipeline">
        {steps.map(s => (
          <div className="pipeline-step" key={s.name}>
            <div className={`pipeline-step-icon ${s.state === "err" ? "err" : s.state}`}
              style={s.state === "err" ? { background: "var(--red-dim)", color: "var(--red)" } :
                     s.state === "warn" ? { background: "var(--amber-dim)", color: "var(--amber)" } : {}}>
              {s.state === "done" ? "✓" : s.state === "running" ? "◌" : s.state === "err" ? "✕" : s.state === "warn" ? "?" : "·"}
            </div>
            <span className="pipeline-step-name" style={{ color: s.state === "pending" ? "var(--text-dim)" : "var(--text-pri)" }}>
              {s.name}
            </span>
            <span className="mono text-11 text-dim" style={{ marginRight: 8 }}>{s.prompt}</span>
            <span className="pipeline-step-dur">{s.dur}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <button className="btn btn-ghost btn-sm" onClick={() => setExpanded(!expanded)}>
          {expanded ? "▲ Collapse logs" : "▼ Expand logs"}
        </button>
        {expanded && (
          <div className="json-viewer" style={{ marginTop: 8 }}>
            <div className="log-line info">[08:12:00] Task {task.id} received · workspace: {task.workspace}</div>
            <div className="log-line info">[08:12:00] CLS_GLOBAL_001 invoked · model: claude-sonnet-4-6</div>
            <div className="log-line success">[08:12:01] Template classified: {task.template} {task.templateVersion} · confidence {task.confidence}</div>
            <div className="log-line info">[08:12:01] {task.promptId} extraction invoked</div>
            {task.aiStatus === "needs_clarification"
              ? <div className="log-line warn">[08:12:02] Missing fields: {(task.missingFields||[]).join(", ")} · status: needs_clarification</div>
              : <div className="log-line success">[08:12:02] Schema validation passed · all required fields resolved</div>
            }
            {task.riskFlags?.length > 0 && (
              <div className="log-line warn">[08:12:02] RISK_GLOBAL_001: flags={task.riskFlags.join(",")} → approval gate activated</div>
            )}
            {isFailed && <div className="log-line err">[08:12:08] n8n execution error: connector timeout on GitHub API</div>}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── APPROVAL PANEL ────────────────────────────────────────────────────────────

function RiskFlagRow({ flag }) {
  const meta = RISK_FLAG_META[flag] || { label: flag, color: "var(--text-sec)" };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: meta.color }}>
      <span>⚠</span>
      <span className="mono" style={{ fontSize: 10, opacity: 0.6 }}>{flag}</span>
      <span>—</span>
      <span>{meta.label}</span>
    </div>
  );
}

function ApprovalPanel({ approval, role, onApprove, onReject }) {
  const canAct = role === "admin" || role === "approver";
  return (
    <div className="approval-panel">
      <div className="approval-panel-header">
        <span style={{ color: "var(--amber)", fontWeight: 600, fontSize: 12 }}>◈ APPROVAL REQUIRED</span>
        <span className="mono text-11 text-dim" style={{ marginLeft: "auto" }}>{approval.id} · {fmtTs(approval.requestedAt)}</span>
      </div>
      <div className="approval-panel-body">
        {/* Standard UI copy from Part C */}
        <div style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 12, padding: "8px 10px", background: "var(--bg-base)", borderRadius: 4, borderLeft: "3px solid var(--amber)" }}>
          {UI_COPY.approval_hint}
        </div>

        <div className="card-label">Action Summary</div>
        <p style={{ fontSize: 13, marginBottom: 12, color: "var(--text-pri)" }}>{approval.action}</p>

        <div className="grid-2" style={{ gap: 16, marginBottom: 12 }}>
          <div>
            <div className="card-label">Template</div>
            <span className="mono text-12">{approval.template}</span>
          </div>
          <div>
            <div className="card-label">Requested By</div>
            <span className="text-12">{approval.requestedBy}</span>
          </div>
          <div>
            <div className="card-label">Prompt ID</div>
            <span className="mono text-12 text-sec">{approval.promptId}</span>
          </div>
          <div>
            <div className="card-label">AI Confidence</div>
            <span className="mono text-12" style={{ color: approval.confidence >= 0.85 ? "var(--green)" : "var(--amber)" }}>
              {(approval.confidence * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        <hr className="divider" />
        <div className="card-label" style={{ marginBottom: 8 }}>Extracted Inputs (JSON schema validated)</div>
        <JsonViewer data={approval.extractedInputs} />

        <hr className="divider" />
        <div className="card-label" style={{ marginBottom: 6 }}>Risk Flags (RISK_GLOBAL_001)</div>
        {approval.riskFlags?.length > 0
          ? <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {approval.riskFlags.map((f, i) => <RiskFlagRow key={i} flag={f} />)}
            </div>
          : <span style={{ fontSize: 11, color: "var(--text-dim)" }}>No risk flags identified.</span>
        }

        {canAct && (
          <div className="approval-actions">
            <button className="btn btn-success" onClick={onApprove}>✓ Approve</button>
            <button className="btn btn-danger" onClick={onReject}>✕ Reject</button>
            <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--text-dim)" }}>
              {UI_COPY.audit_hint}
            </span>
          </div>
        )}
        {!canAct && (
          <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-dim)" }}>
            Approval actions require approver or admin role.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ARTIFACTS COMPONENT ───────────────────────────────────────────────────────

function ArtifactsSection() {
  const files = [
    { name: "revenue-reconciliation-Q3-2025.pdf", size: "1.4 MB", hash: "sha256:4f3a8b...c291e", by: "ai-worker", ts: "2026-02-19T08:52:00Z" },
    { name: "Q3-entity-rollup.csv", size: "86 KB", hash: "sha256:9d1e2c...44fa1", by: "ai-worker", ts: "2026-02-19T08:52:01Z" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {files.map(f => (
        <div className="artifact-row" key={f.name}>
          <span className="artifact-icon">📄</span>
          <div style={{ flex: 1 }}>
            <div className="artifact-name">{f.name}</div>
            <div className="artifact-hash">{f.hash}</div>
          </div>
          <div className="artifact-meta" style={{ textAlign: "right" }}>
            <div>{f.size}</div>
            <div style={{ color: "var(--text-dim)" }}>{f.by} · {fmtTs(f.ts)}</div>
          </div>
          <button className="btn btn-ghost btn-sm">↓ Download</button>
        </div>
      ))}
    </div>
  );
}

// ─── TASK THREAD PAGE ──────────────────────────────────────────────────────────

function TaskThreadPage({ task, role }) {
  const [rejectModal, setRejectModal] = useState(false);
  const [rejectComment, setRejectComment] = useState("");
  const [clarifyValues, setClarifyValues] = useState({});
  const [clarifySent, setClarifySent] = useState(false);
  const approval = MOCK_APPROVALS.find(a => a.taskId === task.id);

  return (
    <div className="page">
      {/* Header */}
      <div className="task-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
          <div>
            <div className="text-dim text-11 mono" style={{ marginBottom: 4 }}>{task.id}</div>
            <div className="task-title">{task.title}</div>
          </div>
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <StatusBadge status={task.status} />
            <RiskBadge risk={task.risk} />
          </div>
        </div>
        <div className="task-meta-grid">
          {[
            ["Template", <span className="mono text-12">{task.template} <span style={{ color: "var(--text-dim)" }}>{task.templateVersion}</span></span>],
            ["Domain", task.domain],
            ["Created By", task.createdBy],
            ["Workspace", <span className="mono text-12">{task.workspace}</span>],
            ["Created At", <span className="mono text-11">{fmtTs(task.createdAt)}</span>],
          ].map(([l, v]) => (
            <div className="task-meta-item" key={l}>
              <div className="card-label">{l}</div>
              <div className="task-meta-val">{v}</div>
            </div>
          ))}
        </div>
        <LifecycleBar status={task.status} />
      </div>

      {/* Timeline */}
      <div className="timeline">

        {/* User request card */}
        <div className="timeline-card user-request">
          <div className="timeline-card-header">
            <span className="timeline-type-label">User Request — Intake Mode</span>
            <span className="timeline-actor">{task.createdBy?.toLowerCase().replace(" ", ".") || "user"}@corp</span>
            <span className="timeline-ts">{fmtTs(task.createdAt)}</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-pri)", marginBottom: 8 }}>"{task.title}"</p>
          <div style={{ fontSize: 11, color: "var(--text-dim)", borderLeft: "2px solid var(--border)", paddingLeft: 8 }}>
            {UI_COPY.task_submit_hint}
          </div>
        </div>

        {/* AI classification — CLS_GLOBAL_001 output schema */}
        <div className="timeline-card ai-result">
          <div className="timeline-card-header">
            <span className="timeline-type-label">AI Classification — CLS_GLOBAL_001</span>
            <span className="timeline-actor">ai-gateway</span>
            <span className="timeline-ts">{fmtTs(new Date(new Date(task.createdAt).getTime() + 1000).toISOString())}</span>
          </div>
          <div className="grid-2" style={{ gap: 12, marginBottom: 12 }}>
            <div>
              <div className="card-label">selected_template_id</div>
              <span className="mono text-12">{task.template} <span style={{ color: "var(--text-dim)" }}>{task.templateVersion}</span></span>
            </div>
            <div>
              <div className="card-label">status</div>
              <span className="mono text-12" style={{ color: task.aiStatus === "ok" ? "var(--green)" : task.aiStatus === "needs_clarification" ? "var(--amber)" : "var(--red)" }}>
                {task.aiStatus || "ok"}
              </span>
            </div>
            <div>
              <div className="card-label">confidence</div>
              <span className="mono text-13" style={{ color: (task.confidence||0) >= 0.85 ? "var(--green)" : "var(--amber)", fontWeight: 600 }}>
                {((task.confidence||0) * 100).toFixed(1)}%
              </span>
            </div>
            <div>
              <div className="card-label">prompt_id</div>
              <span className="mono text-11 text-sec">{task.promptId || "EXT_001"}</span>
            </div>
          </div>
          {(task.confidence || 1) < 0.75 && (
            <div style={{ fontSize: 11, color: "var(--amber)", background: "var(--amber-dim)", borderRadius: 4, padding: "6px 10px", marginBottom: 10 }}>
              {UI_COPY.low_confidence_hint}
            </div>
          )}
          {task.extractedInputs && (
            <div>
              <div className="card-label" style={{ marginBottom: 6 }}>Extracted Inputs (schema validated)</div>
              <JsonViewer data={task.extractedInputs} />
            </div>
          )}
        </div>

        {/* Clarification card — CLARIFY_GLOBAL_001 */}
        {task.aiStatus === "needs_clarification" && task.missingFields?.length > 0 && (
          <div className="timeline-card" style={{ borderLeftColor: "var(--amber)" }}>
            <div className="timeline-card-header">
              <span className="timeline-type-label" style={{ color: "var(--amber)" }}>Clarification Required — CLARIFY_GLOBAL_001</span>
              <span className="timeline-actor">ai-gateway</span>
              <span className="timeline-ts">{fmtTs(new Date(new Date(task.createdAt).getTime() + 2000).toISOString())}</span>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-sec)", marginBottom: 12 }}>
              Required fields are missing from the task input. Please provide the following to proceed.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {task.missingFields.map((f, i) => (
                <div key={i} style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "10px 12px" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                    <span className="mono text-11" style={{ color: "var(--amber)" }}>field</span>
                    <span className="mono text-11 text-pri" style={{ fontWeight: 600 }}>{f}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-sec)" }}>
                    Could you provide the <strong style={{ color: "var(--text-pri)" }}>{f.replace(/_/g, " ")}</strong> for this task?
                    <span style={{ color: "var(--text-dim)", marginLeft: 6 }}>e.g. "Acme Corp", "enterprise-plan"</span>
                  </div>
                </div>
              ))}
            </div>

        {/* ── Planning Mode: Execution Plan Preview ──────────────────────────────
             CDM: ExecutionPlan { ordered steps + approval checkpoints }
             Conceptual Design §4.4 "Planning Mode: build plan preview + risk flags"
        ──────────────────────────────────────────────────────────────────────── */}
        {task.aiStatus !== "needs_clarification" && (
          <div className="plan-preview-card">
            <div className="plan-preview-header">
              <span className="timeline-type-label" style={{ color: "var(--indigo)" }}>Execution Plan — Planning Mode</span>
              <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--text-dim)", fontFamily: "IBM Plex Mono" }}>
                {fmtTs(new Date(new Date(task.createdAt).getTime() + 2500).toISOString())}
              </span>
            </div>
            <div style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 12, lineHeight: 1.5 }}>
              Ordered execution steps for <span className="mono" style={{ color: "var(--text-pri)" }}>{task.template}</span>.
              Approval checkpoints are determined by policy engine (RBAC + risk flags + template governance rules).
            </div>
            <div className="plan-preview-steps">
              {[
                { label: "Receive task + validate workspace scope",         type: "safe"     },
                { label: `${task.promptId || "domain prompt"} extraction`, type: "safe"     },
                { label: "JSON schema validation against template spec",    type: "safe"     },
                { label: "RISK_GLOBAL_001 — risk flag evaluation",          type: "safe"     },
                ...(task.risk !== "low" || (task.riskFlags?.length || 0) > 0
                  ? [{ label: "Human-in-the-loop approval gate",            type: "approval" }]
                  : []
                ),
                { label: `n8n workflow trigger — ${task.template}`,        type: "exec"     },
                { label: "Output capture + artifact storage",               type: "exec"     },
                { label: "Audit event write + notification dispatch",       type: "safe"     },
              ].map((step, i, arr) => (
                <div key={i}>
                  <div className="plan-step-row">
                    <div className={`plan-step-num ${step.type === "approval" ? "approval" : step.type === "exec" ? "exec" : ""}`}>
                      {i + 1}
                    </div>
                    <span className="plan-step-name" style={{ color: step.type === "approval" ? "var(--amber)" : "var(--text-sec)" }}>
                      {step.label}
                    </span>
                    {step.type === "approval" && <span className="plan-step-badge gate">Approval Gate</span>}
                    {step.type === "exec"     && <span className="plan-step-badge auto">n8n</span>}
                    {step.type === "safe"     && <span className="plan-step-badge safe">Internal</span>}
                  </div>
                  {i < arr.length - 1 && <div className="plan-step-connector" />}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, fontSize: 11, color: "var(--text-dim)", borderLeft: "2px solid var(--border)", paddingLeft: 8 }}>
              This plan is immutably logged prior to execution. Deviations constitute a governance event.
            </div>
          </div>
        )}

        {/* Inline reply input — user can fill in missing fields directly */}
            {!clarifySent ? (
              <div className="clarify-reply-box">
                <div className="clarify-reply-label">◈ Provide missing fields to resume</div>
                <div className="clarify-reply-fields">
                  {task.missingFields.map(f => (
                    <div key={f} className="clarify-field-row">
                      <span className="clarify-field-name">{f}</span>
                      <input
                        className="clarify-field-input"
                        placeholder={`Enter ${f.replace(/_/g, " ")}...`}
                        value={clarifyValues[f] || ""}
                        onChange={e => setClarifyValues(prev => ({ ...prev, [f]: e.target.value }))}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setClarifySent(true)}
                    disabled={task.missingFields.some(f => !clarifyValues[f])}
                  >
                    Submit Clarification
                  </button>
                  <span style={{ fontSize: 11, color: "var(--text-dim)", alignSelf: "center" }}>
                    Response will be re-classified by CLS_GLOBAL_001
                  </span>
                </div>
              </div>
            ) : (
              <div style={{ marginTop: 12, padding: "8px 12px", background: "var(--green-dim)", borderRadius: 4, fontSize: 11, color: "var(--green)", border: "1px solid #065f46" }}>
                ✓ Clarification submitted — task returned to interpretation queue
              </div>
            )}
          </div>
        )}

        {/* Risk assessment card — RISK_GLOBAL_001 */}
        {task.riskFlags?.length > 0 && (
          <div className="timeline-card risk">
            <div className="timeline-card-header">
              <span className="timeline-type-label">Risk Assessment — RISK_GLOBAL_001</span>
              <span className="timeline-actor">policy-engine</span>
              <span className="timeline-ts">{fmtTs(new Date(new Date(task.createdAt).getTime() + 2000).toISOString())}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 8 }}>
              {task.riskFlags.map((f, i) => <RiskFlagRow key={i} flag={f} />)}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-dim)" }}>
              Risk flags detected — approval gate activated per governance policy.
            </div>
          </div>
        )}

        {/* Approval block */}
        {approval && (
          <div className="timeline-card approval-block">
            <div className="timeline-card-header">
              <span className="timeline-type-label">Approval Gate — Governance Review Mode</span>
              <span className="timeline-actor">policy-engine</span>
              <span className="timeline-ts">{fmtTs(new Date(new Date(task.createdAt).getTime() + 3000).toISOString())}</span>
            </div>
            <ApprovalPanel
              approval={approval}
              role={role}
              onApprove={() => alert("Approval recorded. Audit event written per governance model.")}
              onReject={() => setRejectModal(true)}
            />
          </div>
        )}

        {/* Execution status */}
        <div className="timeline-card execution">
          <div className="timeline-card-header">
            <span className="timeline-type-label">Execution Status — n8n Bridge</span>
            <span className="timeline-actor">execution-orchestrator</span>
            <span className="timeline-ts">{fmtTs(new Date(new Date(task.createdAt).getTime() + 4000).toISOString())}</span>
          </div>
          <ExecutionPanel task={task} />
        </div>

        {/* Domain output card — shown only for completed tasks */}
        {task.status === "completed" && MOCK_TASK_OUTPUTS[task.id] && (
          <div className="timeline-card" style={{ borderLeftColor: "var(--green)", padding: 0, overflow: "hidden" }}>
            <div className="timeline-card-header" style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)" }}>
              <span className="timeline-type-label" style={{ color: "var(--green)" }}>Task Output — Publishing Mode</span>
              <span className="timeline-actor">artifact-store</span>
              <span className="timeline-ts">{fmtTs(new Date(new Date(task.createdAt).getTime() + 92000).toISOString())}</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <DomainOutputCard taskId={task.id} template={task.template} />
            </div>
          </div>
        )}

      </div>

      {/* Reject Modal */}
      {rejectModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <span style={{ fontWeight: 600, fontSize: 13 }}>Reject Approval — {approval?.id || "APR"}</span>
              <button className="btn btn-ghost btn-sm" onClick={() => setRejectModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: 12, color: "var(--text-sec)", marginBottom: 12 }}>
                Rejection reason is required and will be immutably recorded in the audit log.
              </p>
              <label className="form-label">Rejection Comment</label>
              <textarea
                className="input-field"
                rows={4}
                placeholder="State the reason for rejection..."
                value={rejectComment}
                onChange={e => setRejectComment(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setRejectModal(false)}>Cancel</button>
              <button className="btn btn-danger" onClick={() => { setRejectModal(false); alert("Rejection recorded. Audit event written."); }}>
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SCHEMA DRAWER ─────────────────────────────────────────────────────────────

function SchemaDrawer({ template, onClose }) {
  const [tab, setTab] = useState("input");
  const schema = TEMPLATE_SCHEMAS[template?.id];

  if (!template) return null;

  return (
    <div className="schema-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="schema-drawer">
        <div className="schema-drawer-header">
          <div>
            <div style={{ fontFamily: "IBM Plex Mono", fontSize: 11, color: "var(--accent)", marginBottom: 3 }}>{template.id}</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{template.name}</div>
            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <RiskBadge risk={template.risk} />
              <span className="mono text-11 text-sec">{template.version}</span>
              {schema && <span className="mono text-11 text-dim">{schema.promptId}</span>}
            </div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ flexShrink: 0 }}>✕ Close</button>
        </div>

        <div className="schema-drawer-body">
          <div className="schema-tab-bar">
            {["input", "output", "governance"].map(t => (
              <div key={t} className={`schema-tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </div>
            ))}
          </div>

          {tab === "input" && (
            <div>
              <div style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 12 }}>
                Input schema used by <span className="mono">{schema?.promptId || template.id}</span> for structured extraction. All required fields must be present before execution proceeds.
              </div>
              {schema ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {Object.entries(schema.inputSchema).map(([key, def]) => (
                    <div key={key} style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "8px 12px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 2 }}>
                          <span className="mono text-12" style={{ color: "var(--accent)" }}>{key}</span>
                          {def.required && <span style={{ fontSize: 9, color: "var(--red)", fontWeight: 700, textTransform: "uppercase" }}>required</span>}
                          {def.default !== undefined && <span style={{ fontSize: 9, color: "var(--text-dim)" }}>default: {def.default}</span>}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text-dim)" }}>
                          <span style={{ color: "var(--green)" }}>{def.type}</span>
                          {def.format && <span> · format: {def.format}</span>}
                          {def.values && <span> · [{def.values.join(", ")}]</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Schema definition not yet available for this template.</div>
              )}
            </div>
          )}

          {tab === "output" && (
            <div>
              <div style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 12 }}>
                Output schema returned by the AI after execution and stored in the artifact store.
              </div>
              {schema ? (
                <JsonViewer data={schema.outputSchema} />
              ) : (
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Output schema not yet available.</div>
              )}
            </div>
          )}

          {tab === "governance" && (
            <div>
              <div style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 12 }}>
                Governance rules applied to this template. These rules are enforced by the Policy Engine and cannot be overridden by Worker Profiles.
              </div>
              {schema?.governanceRules ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {schema.governanceRules.map((r, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, padding: "8px 12px", background: "var(--bg-base)", borderRadius: 4, border: "1px solid var(--border)" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>◈</span>
                      <span style={{ fontSize: 12, color: "var(--text-sec)" }}>{r}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: "var(--text-dim)" }}>Governance rules not defined for this template.</div>
              )}
              <hr style={{ borderColor: "var(--border)", margin: "16px 0" }} />
              <div className="card-label" style={{ marginBottom: 8 }}>Approval Policy</div>
              <div style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "8px 12px", fontSize: 12 }}>
                {template.policy}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PROMPT LIBRARY PAGE ───────────────────────────────────────────────────────

const PROMPT_TYPE_LABELS = {
  system: "System", classification: "Classification", extraction: "Extraction",
  drafting: "Drafting", clarification: "Clarification", risk_flagging: "Risk Flagging",
  summarization: "Summarization", role_profile_generation: "Role Generation",
};
const DOMAIN_LABELS = { global: "Global", finance: "Finance", technical_ops: "Tech Ops", sales_marketing: "Sales", logistics: "Logistics", developer: "Developer" };

function PromptCard({ prompt }) {
  const [open, setOpen] = useState(false);

  const templateText = prompt.taskPrompt || prompt.systemPrompt || "";
  // Highlight {variables}
  const highlighted = templateText.replace(/\{([^}]+)\}/g, '<span class="prompt-var">{$1}</span>');

  return (
    <div className="prompt-card">
      <div className="prompt-card-header" onClick={() => setOpen(!open)}>
        <span className="prompt-card-id">{prompt.id}</span>
        <span className={`prompt-type-badge pt-${prompt.type}`}>{PROMPT_TYPE_LABELS[prompt.type] || prompt.type}</span>
        <span className="prompt-card-name">{prompt.name}</span>
        <span className="prompt-card-domain">{DOMAIN_LABELS[prompt.domain] || prompt.domain}</span>
        <span className={`prompt-card-chevron${open ? " open" : ""}`}>▶</span>
      </div>

      {open && (
        <div className="prompt-card-body">
          {/* Prompt metadata (A5) */}
          <div className="prompt-meta-row">
            {[
              ["version", prompt.version],
              ["owner", prompt.owner],
              ["last_updated", fmtTs(prompt.lastUpdated).slice(0, 10)],
              ["hash_sha256", prompt.hashSha256],
              ["used_in", prompt.usedInTemplates.join(", ")],
            ].map(([l, v]) => (
              <div key={l} className="prompt-meta-field">
                <span className="prompt-meta-label">{l}</span>
                <span className="prompt-meta-val" style={l === "hash_sha256" ? { color: "var(--text-dim)", fontSize: 10 } : {}}>{v}</span>
              </div>
            ))}
          </div>

          {/* Prompt template */}
          {templateText && (
            <div className="prompt-section">
              <div className="prompt-section-label">{prompt.systemPrompt ? "System Prompt" : "Task Prompt Template"}</div>
              <div className="prompt-template-box" dangerouslySetInnerHTML={{ __html: highlighted }} />
              {prompt.variables?.length > 0 && (
                <div style={{ marginTop: 6, fontSize: 11, color: "var(--text-dim)" }}>
                  Variables: {prompt.variables.map(v => <span key={v} className="mono" style={{ color: "var(--amber)", marginRight: 6 }}>{`{${v}}`}</span>)}
                </div>
              )}
            </div>
          )}

          {/* Output schema */}
          <div className="prompt-section">
            <div className="prompt-section-label">Output JSON Schema</div>
            <JsonViewer data={prompt.outputSchema} />
          </div>
        </div>
      )}
    </div>
  );
}

function PromptLibraryPage() {
  const [filter, setFilter] = useState("all");

  const DOMAIN_FILTERS = [
    { key: "all", label: "All" },
    { key: "global", label: "Global" },
    { key: "finance", label: "Finance" },
    { key: "technical_ops", label: "Tech Ops" },
    { key: "sales_marketing", label: "Sales" },
    { key: "logistics", label: "Logistics" },
    { key: "developer", label: "Developer" },
  ];

  const filtered = filter === "all" ? MOCK_PROMPTS : MOCK_PROMPTS.filter(p => p.domain === filter);

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Prompt Library</div>
        <div className="page-sub">
          AI prompt configurations used by the Interpretation Layer · Versioned, hashed, and auditable per prompt metadata standard (A5)
        </div>
      </div>

      {/* Info banner */}
      <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--indigo)", borderRadius: 4, padding: "10px 14px", marginBottom: 20, fontSize: 11, color: "var(--text-sec)" }}>
        <span style={{ color: "var(--indigo)", fontWeight: 600 }}>AI Gateway Rule — SYS_GLOBAL_001</span>
        <span style={{ marginLeft: 8 }}>Every AI call must include system_prompt + task_prompt + json_schema. The model must respond with valid JSON only. Prompts are selected by type + domain + template_id.</span>
      </div>

      {/* Domain filter */}
      <div className="prompt-filter-bar">
        {DOMAIN_FILTERS.map(f => (
          <button key={f.key} className={`prompt-filter-pill${filter === f.key ? " active" : ""}`} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--text-dim)", alignSelf: "center" }}>
          {filtered.length} prompt{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Prompt cards */}
      <div>
        {filtered.map(p => <PromptCard key={p.id} prompt={p} />)}
      </div>
    </div>
  );
}

// ─── DOMAIN OUTPUT CARD ────────────────────────────────────────────────────────

function DomainOutputCard({ taskId, template }) {
  const output = MOCK_TASK_OUTPUTS[taskId];
  if (!output) return null;

  if (output.type === "pr_summary") {
    const d = output.data;
    return (
      <div className="output-card">
        <div className="output-card-header">
          <span className="output-card-type">AI Output — {output.promptId}</span>
          <span className="mono text-11 text-dim" style={{ marginLeft: "auto" }}>{template}</span>
        </div>
        <div className="output-stat-row">
          <div className="output-stat"><span className="output-stat-label">Files Changed</span><span className="output-stat-val">{d.files_changed}</span></div>
          <div className="output-stat"><span className="output-stat-label">Risk Level</span>
            <span className="output-stat-val" style={{ color: d.risk_level === "high" ? "var(--red)" : d.risk_level === "medium" ? "var(--amber)" : "var(--green)" }}>{d.risk_level}</span>
          </div>
        </div>
        <div style={{ fontSize: 12, color: "var(--text-sec)", marginBottom: 10, lineHeight: 1.6 }}>{d.summary}</div>
        <div className="card-label" style={{ marginBottom: 6 }}>key_changes</div>
        <ul className="output-key-changes">
          {d.key_changes.map((c, i) => (
            <li key={i} className="output-key-change">
              <span className="output-key-change-bullet">+</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="card-label" style={{ marginTop: 10, marginBottom: 4 }}>review_focus</div>
        <div className="output-review-focus">
          {d.review_focus.map((f, i) => <span key={i} className="output-review-tag">{f}</span>)}
        </div>
      </div>
    );
  }

  if (output.type === "ticket_created") {
    const d = output.data;
    return (
      <div className="output-card">
        <div className="output-card-header">
          <span className="output-card-type">AI Output — {output.promptId}</span>
          <span className="badge badge-completed" style={{ marginLeft: "auto", fontSize: 10 }}>ticket created</span>
        </div>
        <div className="output-stat-row">
          <div className="output-stat"><span className="output-stat-label">Ticket ID</span><span className="output-stat-val mono" style={{ fontSize: 13 }}>{d.ticket_id}</span></div>
          <div className="output-stat"><span className="output-stat-label">Status</span><span className="output-stat-val" style={{ color: "var(--green)", fontSize: 13 }}>{d.status}</span></div>
          <div className="output-stat"><span className="output-stat-label">Severity</span><span className="output-stat-val" style={{ color: "var(--red)", fontSize: 13 }}>{d.severity}</span></div>
        </div>
        <div style={{ fontSize: 12, color: "var(--text-sec)" }}>{d.summary}</div>
        <div style={{ marginTop: 8 }}>
          <a href="#" style={{ fontSize: 11, color: "var(--accent)", fontFamily: "IBM Plex Mono" }}>{d.ticket_url}</a>
        </div>
      </div>
    );
  }

  if (output.type === "shipment_status") {
    const d = output.data;
    return (
      <div className="output-card">
        <div className="output-card-header">
          <span className="output-card-type">AI Output — {output.promptId}</span>
          <span className="badge badge-running" style={{ marginLeft: "auto", fontSize: 10 }}>{d.status}</span>
        </div>
        <div className="output-stat-row">
          <div className="output-stat"><span className="output-stat-label">Tracking</span><span className="output-stat-val mono" style={{ fontSize: 13 }}>{d.tracking_number}</span></div>
          <div className="output-stat"><span className="output-stat-label">Carrier</span><span className="output-stat-val">{d.carrier}</span></div>
          <div className="output-stat"><span className="output-stat-label">Location</span><span className="output-stat-val">{d.location}</span></div>
          <div className="output-stat"><span className="output-stat-label">Est. Delivery</span><span className="output-stat-val">{d.estimated_delivery}</span></div>
          <div className="output-stat"><span className="output-stat-label">Events</span><span className="output-stat-val">{d.events}</span></div>
        </div>
      </div>
    );
  }

  return null;
}

// ─── TASKS LIST PAGE ───────────────────────────────────────────────────────────

function TasksPage({ setPage, setActiveTask }) {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Tasks</div>
        <div className="page-sub">All task threads in current workspace scope</div>
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div className="task-list-row audit-header" style={{ padding: "10px 16px" }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>Task</span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>Template</span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>Risk</span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>Status</span>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>Created</span>
        </div>
        {MOCK_TASKS.map(t => (
          <div className="task-list-row" key={t.id} onClick={() => { setActiveTask(t); setPage("task-thread"); }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 12 }}>{t.title}</div>
              <div className="mono text-11 text-dim">{t.id} · {t.createdBy}</div>
            </div>
            <div className="mono text-11 text-sec">{t.template}</div>
            <div><RiskBadge risk={t.risk} /></div>
            <div><StatusBadge status={t.status} /></div>
            <div className="mono text-11 text-dim">{fmtTs(t.createdAt).slice(0, 16)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APPROVALS PAGE ────────────────────────────────────────────────────────────

function ApprovalsPage({ role }) {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Approvals</div>
        <div className="page-sub">{MOCK_APPROVALS.length} pending approval requests</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {MOCK_APPROVALS.map(a => (
          <div key={a.id}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span className="mono text-11 text-dim">{a.taskId}</span>
              <span className="text-dim">·</span>
              <span style={{ fontSize: 12 }}>{a.action.slice(0, 60)}...</span>
            </div>
            <ApprovalPanel
              approval={a}
              role={role}
              onApprove={() => alert("Approved.")}
              onReject={() => alert("Reject modal would open.")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TEMPLATES PAGE ────────────────────────────────────────────────────────────

function TemplatesPage({ role }) {
  const [schemaTemplate, setSchemaTemplate] = useState(null);

  return (
    <div className="page">
      <div className="page-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div className="page-title">Templates Library</div>
          <div className="page-sub">Versioned execution templates · Click "Schema" to view input/output schemas and governance rules</div>
        </div>
        {role === "admin" && <button className="btn btn-primary">+ New Template</button>}
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div className="template-row" style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
          {["Template", "Domain", "Risk", "Version", "Approval Policy", ""].map(h => (
            <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>{h}</span>
          ))}
        </div>
        {MOCK_TEMPLATES.map(t => (
          <div className="template-row" key={t.id}>
            <div>
              <div className="template-name">{t.name}</div>
              <div className="template-desc">{t.description}</div>
              <div className="mono text-11 text-dim" style={{ marginTop: 2 }}>{t.id}</div>
            </div>
            <span className="mono text-11">{t.domain}</span>
            <RiskBadge risk={t.risk} />
            <span className="mono text-12">{t.version} <span className="text-dim">({t.versions}v)</span></span>
            <span className="text-12 text-sec">{t.policy}</span>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="btn btn-ghost btn-sm" onClick={() => setSchemaTemplate(t)}>Schema</button>
              {role === "admin" && <button className="btn btn-ghost btn-sm">Edit</button>}
            </div>
          </div>
        ))}
      </div>

      {/* Schema drawer */}
      {schemaTemplate && <SchemaDrawer template={schemaTemplate} onClose={() => setSchemaTemplate(null)} />}
    </div>
  );
}

// ─── WORKER PROFILES PAGE ──────────────────────────────────────────────────────
// Worker Profile schema aligned to Prompt Library A3.1

const SENIORITY_COLOR = { junior: "var(--text-dim)", mid: "var(--text-sec)", senior: "var(--accent)", lead: "var(--indigo)" };
const TONE_LABEL = { professional: "Professional", friendly: "Friendly", direct: "Direct" };
const VERBOSITY_LABEL = { short: "Short", medium: "Medium", detailed: "Detailed" };

function WorkersPage() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [jd, setJd] = useState("");

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setGenerated(true); }, 1800);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Worker Profiles</div>
        <div className="page-sub">
          Prompt: ROLE_FROM_JD_001 · Convert job descriptions into governed AI worker profiles with template bindings and communication style rules.
        </div>
      </div>

      {/* JD → Profile generator — ROLE_FROM_JD_001 */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
          <div className="card-label" style={{ margin: 0 }}>Generate Worker Profile from Job Description</div>
          <span className="mono text-11 text-dim" style={{ marginLeft: "auto" }}>ROLE_FROM_JD_001</span>
        </div>
        <p style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 10 }}>
          Paste a job description. The AI will map responsibilities to approved templates, set communication style, and define restricted actions. Hard safety constraints are always enforced — profiles cannot bypass RBAC or approval gates.
        </p>
        <textarea
          className="input-field"
          rows={4}
          placeholder="Paste job description text here..."
          value={jd}
          onChange={e => { setJd(e.target.value); setGenerated(false); }}
          style={{ marginBottom: 10 }}
        />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn btn-primary btn-sm" onClick={handleGenerate} disabled={!jd || generating}>
            {generating ? <><span className="spinner">◌</span> Generating...</> : "Generate Profile"}
          </button>
          {generated && (
            <span style={{ fontSize: 11, color: "var(--green)" }}>
              ✓ Profile generated · confidence 0.88 · review before activating
            </span>
          )}
        </div>
      </div>

      {/* Hard safety notice from A3.4 */}
      <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--indigo)", borderRadius: 4, padding: "10px 12px", marginBottom: 20, fontSize: 11 }}>
        <span style={{ color: "var(--indigo)", fontWeight: 600 }}>Hard Safety Boundary (A3.4)</span>
        <span style={{ color: "var(--text-sec)", marginLeft: 8 }}>
          Worker profiles can influence tone, preferred templates, and clarification behaviour. They cannot bypass RBAC, override approval gates required by policy, or enable disallowed actions.
        </span>
      </div>

      {/* Profile cards — full A3.1 schema */}
      <div className="grid-2">
        {MOCK_WORKERS.map(w => (
          <div className={`worker-card${w.active ? " active-profile" : ""}`} key={w.id}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
              <div>
                <div className="worker-title">{w.role_title}</div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2 }}>{w.department}</div>
              </div>
              <div style={{ display: "flex", gap: 6, flexDirection: "column", alignItems: "flex-end" }}>
                {w.active && <span className="badge badge-completed" style={{ fontSize: 10 }}>Active</span>}
                <span className="mono text-11" style={{ color: SENIORITY_COLOR[w.seniority] }}>{w.seniority}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="worker-section">
              <div className="card-label" style={{ marginBottom: 4 }}>Responsibilities</div>
              {w.responsibilities.map(r => (
                <div key={r} style={{ fontSize: 11, color: "var(--text-sec)", paddingLeft: 6, borderLeft: "2px solid var(--border)" }}>· {r}</div>
              ))}
            </div>

            {/* Allowed domains */}
            <div className="worker-section">
              <div className="card-label" style={{ marginBottom: 4 }}>Allowed Domains</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {w.allowed_domains.map(d => <span key={d} className="worker-tag" style={{ fontSize: 10, color: "var(--accent)", borderColor: "#1d4ed8", background: "var(--accent-dim)" }}>{d}</span>)}
              </div>
            </div>

            {/* Preferred templates */}
            <div className="worker-section">
              <div className="card-label" style={{ marginBottom: 4 }}>Preferred Templates</div>
              <div>{w.preferred_templates.map(t => <span key={t} className="worker-tag mono" style={{ fontSize: 10 }}>{t}</span>)}</div>
            </div>

            {/* Restricted actions */}
            <div className="worker-section">
              <div className="card-label" style={{ marginBottom: 4 }}>Restricted Actions</div>
              <div>{w.restricted_actions.map(t => <span key={t} className="worker-tag worker-restricted-tag mono" style={{ fontSize: 10 }}>{t}</span>)}</div>
            </div>

            {/* Approval rule overrides */}
            <div className="worker-section">
              <div className="card-label" style={{ marginBottom: 6 }}>Approval Rule Overrides</div>
              {w.approval_rules_overrides.always_require_approval_for.length > 0 && (
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: "var(--amber)" }}>Always approve: </span>
                  {w.approval_rules_overrides.always_require_approval_for.map(t => (
                    <span key={t} className="worker-tag mono" style={{ fontSize: 10, color: "var(--amber)", borderColor: "var(--amber-dim)", background: "var(--amber-dim)" }}>{t}</span>
                  ))}
                </div>
              )}
              {w.approval_rules_overrides.never_require_approval_for.length > 0 && (
                <div>
                  <span style={{ fontSize: 10, color: "var(--green)" }}>Never require: </span>
                  {w.approval_rules_overrides.never_require_approval_for.map(t => (
                    <span key={t} className="worker-tag mono" style={{ fontSize: 10, color: "var(--green)", borderColor: "var(--green-dim)", background: "var(--green-dim)" }}>{t}</span>
                  ))}
                </div>
              )}
              {w.approval_rules_overrides.always_require_approval_for.length === 0 &&
               w.approval_rules_overrides.never_require_approval_for.length === 0 && (
                <span style={{ fontSize: 11, color: "var(--text-dim)" }}>Using platform defaults.</span>
              )}
            </div>

            {/* Communication style — A3.1 schema */}
            <div className="worker-section" style={{ marginBottom: 12 }}>
              <div className="card-label" style={{ marginBottom: 6 }}>Communication Style</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <div style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "4px 10px", fontSize: 11 }}>
                  <span style={{ color: "var(--text-dim)" }}>tone: </span>
                  <span style={{ color: "var(--text-pri)" }}>{w.communication_style.tone}</span>
                </div>
                <div style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "4px 10px", fontSize: 11 }}>
                  <span style={{ color: "var(--text-dim)" }}>verbosity: </span>
                  <span style={{ color: "var(--text-pri)" }}>{w.communication_style.verbosity}</span>
                </div>
                <div style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "4px 10px", fontSize: 11 }}>
                  <span style={{ color: "var(--text-dim)" }}>formats: </span>
                  <span style={{ color: "var(--text-pri)" }}>{w.communication_style.formats.join(", ")}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 6 }}>
              {!w.active && <button className="btn btn-primary btn-sm">Activate</button>}
              {w.active  && <button className="btn btn-ghost btn-sm">Deactivate</button>}
              <button className="btn btn-ghost btn-sm">Edit</button>
              <button className="btn btn-ghost btn-sm" style={{ marginLeft: "auto" }}>View JSON</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── AUDIT LOG PAGE ────────────────────────────────────────────────────────────

function AuditLogPage() {
  return (
    <div className="page">
      <div className="page-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div className="page-title">Audit Log</div>
          <div className="page-sub">{UI_COPY.audit_hint} · Append-only · Workspace-scoped</div>
        </div>
        <button className="btn btn-ghost btn-sm">↓ Export</button>
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {/* Header row — 6 cols */}
        <div style={{ display: "grid", gridTemplateColumns: "150px 160px 130px 80px 80px 1fr", gap: 12, padding: "10px 16px", background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
          {["Timestamp", "Action", "Actor (Prompt)", "Task", "Confidence", "Detail"].map(h => (
            <span key={h} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-dim)" }}>{h}</span>
          ))}
        </div>
        {MOCK_AUDIT.map((e, i) => {
          const isFail  = e.action.includes("FAIL") || e.action.includes("ERROR");
          const isOk    = e.action.includes("COMPLET") || e.action.includes("VALIDATED") || e.action.includes("SCHEMA");
          const isWarn  = e.action.includes("RISK") || e.action.includes("APPROVAL");
          const actionColor = isFail ? "var(--red)" : isOk ? "var(--green)" : isWarn ? "var(--amber)" : "var(--text-sec)";
          // Parse confidence from detail if present
          const confMatch = e.detail?.match(/confidence ([\d.]+)/);
          const conf = confMatch ? parseFloat(confMatch[1]) : null;
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "150px 160px 130px 80px 80px 1fr", gap: 12, padding: "10px 16px", borderBottom: "1px solid var(--border)" }}
              className="audit-hover">
              <span className="mono text-11 text-dim">{fmtTs(e.ts).slice(0, 16)}</span>
              <span className="mono text-11" style={{ color: actionColor }}>{e.action}</span>
              <span className="mono text-11 text-sec">{e.actor}</span>
              <span className="mono text-11 text-sec">{e.taskId}</span>
              <span className="mono text-11" style={{ color: conf === null ? "var(--text-dim)" : conf >= 0.85 ? "var(--green)" : "var(--amber)" }}>
                {conf !== null ? (conf * 100).toFixed(0) + "%" : "—"}
              </span>
              <span className="text-11 text-dim">{e.detail}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: "var(--text-dim)", textAlign: "right" }}>
        Showing 8 of 4,299 events · Events cryptographically signed · Workspace: corp-finance
      </div>
    </div>
  );
}

// ─── DASHBOARD PAGE ────────────────────────────────────────────────────────────

function MiniBarChart({ data, color }) {
  const max = Math.max(...data);
  return (
    <div className="bar-chart">
      {data.map((v, i) => (
        <div key={i} className="bar-chart-bar" style={{ height: `${(v / max) * 100}%`, background: color || "var(--accent-dim)" }} />
      ))}
    </div>
  );
}

function DashboardPage() {
  const stats = [
    { label: "Tasks Created Today", val: "23", delta: "+4 vs yesterday" },
    { label: "Run Success Rate", val: "96.1%", delta: "+0.3% this week" },
    { label: "Pending Approvals", val: "2", delta: "SLA: 4h target" },
    { label: "Avg Approval Time", val: "31m", delta: "within SLA" },
    { label: "Avg Execution Duration", val: "2m 14s", delta: "−8s vs last week" },
    { label: "Active Workspaces", val: "7", delta: "" },
  ];

  const aiQuality = [
    { label: "Avg Classification Confidence", val: "93.8%", sub: "threshold: 75%", color: "var(--green)" },
    { label: "Needs Clarification Rate", val: "4.2%", sub: "6 tasks today · CLS_GLOBAL_001", color: "var(--amber)" },
    { label: "Schema Validation Failures", val: "1.1%", sub: "JSON schema enforcement", color: "var(--accent)" },
    { label: "Misclassification Rate", val: "0.8%", sub: "confirmed by approvers", color: "var(--text-sec)" },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Dashboard</div>
        <div className="page-sub">Workspace operational summary · 2026-02-19</div>
      </div>

      <div className="stat-grid">
        {stats.map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-val">{s.val}</div>
            <div className="stat-label">{s.label}</div>
            {s.delta && <div className="stat-delta">{s.delta}</div>}
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-label" style={{ marginBottom: 12 }}>Task Volume — Last 14 Days</div>
          <MiniBarChart data={[8, 12, 7, 15, 18, 11, 9, 14, 16, 20, 13, 17, 21, 23]} color="var(--accent)" />
        </div>
        <div className="card">
          <div className="card-label" style={{ marginBottom: 12 }}>AI Confidence Distribution (CLS_GLOBAL_001)</div>
          <MiniBarChart data={[2, 3, 5, 8, 12, 18, 28, 34, 40, 45, 42, 50, 38, 25]} color="var(--indigo)" />
          <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 6 }}>70–100% confidence range · 94% tasks above 85% · threshold line: 75%</div>
        </div>
      </div>

      {/* ── AI Quality Dashboard — Conceptual Design §6.2 ─────────────────────── */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <span>AI Quality — Interpretation Layer</span>
          <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span style={{ color: "var(--indigo)", fontWeight: 600 }}>SYS_GLOBAL_001 · CLS_GLOBAL_001 · RISK_GLOBAL_001</span>
        </div>
        <div className="ai-quality-row">
          {aiQuality.map(q => (
            <div className="ai-quality-card" key={q.label}>
              <div className="ai-quality-val" style={{ color: q.color }}>{q.val}</div>
              <div className="ai-quality-label">{q.label}</div>
              <div className="ai-quality-sub">{q.sub}</div>
            </div>
          ))}
        </div>

        {/* Risk flag frequency */}
        <div className="card">
          <div className="card-label" style={{ marginBottom: 12 }}>Risk Flag Frequency — RISK_GLOBAL_001 (last 30 days)</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
            {[
              { flag: "pii_suspected",       count: 341, color: "var(--red)"    },
              { flag: "high_impact_system",  count: 287, color: "var(--amber)"  },
              { flag: "external_domain",     count: 124, color: "var(--indigo)" },
              { flag: "bulk_operation",      count: 58,  color: "var(--accent)" },
            ].map(f => (
              <div key={f.flag} style={{ background: "var(--bg-base)", border: "1px solid var(--border)", borderRadius: 4, padding: "10px 12px" }}>
                <div className="mono text-11" style={{ color: f.color, marginBottom: 4 }}>{f.flag}</div>
                <div style={{ fontFamily: "IBM Plex Mono", fontSize: 20, fontWeight: 300, color: "var(--text-pri)" }}>{f.count}</div>
                <div style={{ fontSize: 10, color: "var(--text-dim)" }}>occurrences</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="card-label" style={{ marginBottom: 12 }}>Status Distribution — All Time</div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[
            ["completed", 1842, "var(--green)"],
            ["failed", 71, "var(--red)"],
            ["cancelled", 34, "#4b5563"],
            ["awaiting_approval", 2, "var(--amber)"],
            ["needs_clarification", 8, "var(--indigo)"],
            ["running", 3, "var(--accent)"],
          ].map(([label, count, color]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
              <span style={{ fontSize: 11, color: "var(--text-sec)" }}>{label.replace(/_/g, " ")}</span>
              <span className="mono text-11" style={{ color }}>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── NEW TASK PAGE ─────────────────────────────────────────────────────────────

function NewTaskPage({ setPage }) {
  const [input, setInput] = useState("");
  const [domain, setDomain] = useState("");
  const [worker, setWorker] = useState("");

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">New Task</div>
        <div className="page-sub">Describe the task in natural language. The system will classify and route to the appropriate template.</div>
      </div>
      <div className="new-task-form">
        <div className="form-group">
          <label className="form-label">Task Description</label>
          <textarea
            className="input-field"
            rows={5}
            placeholder="Describe what you need the system to do. Be specific about entities, time periods, and desired outputs..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Domain (Optional — aids classification)</label>
            <select className="form-input" value={domain} onChange={e => setDomain(e.target.value)}>
              <option value="">Auto-detect</option>
              <option>Finance</option>
              <option>Technical Operations</option>
              <option>Sales &amp; Marketing</option>
              <option>Logistics</option>
              <option>Developer</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Worker Profile (Optional)</label>
            <select className="form-input" value={worker} onChange={e => setWorker(e.target.value)}>
              <option value="">None</option>
              <option>Finance Analyst</option>
              <option>Site Reliability Engineer</option>
            </select>
          </div>
        </div>
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "var(--text-sec)" }}>
            <strong style={{ color: "var(--text-pri)" }}>Execution notes:</strong> All write-class tasks require approval by default. 
            The system will extract structured inputs and present them for review before any action is taken. 
            You will receive a notification when your task requires your attention or an approver action.
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-primary" onClick={() => setPage("tasks")} disabled={!input}>
            Submit Task
          </button>
          <button className="btn btn-ghost" onClick={() => setPage("tasks")}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ─── LANDING PAGE SUGGESTIONS ──────────────────────────────────────────────────

const SUGGESTIONS = [
  {
    title: "Generate expense summary from receipts",
    sub: "Finance · FIN_EXPENSE_SUMMARY · Medium risk",
    prompt: "Generate an expense summary report for February 2026 using the uploaded receipt files. Output format: PDF.",
    domain: "Finance",
  },
  {
    title: "Create support ticket for API 5xx spike",
    sub: "Technical Operations · OPS_CREATE_TICKET · Auto-approve",
    prompt: "Create a high-severity Jira ticket for the API gateway 5xx error spike observed since 07:30 UTC. System: api-gateway-prod.",
    domain: "Technical Operations",
  },
  {
    title: "Draft outreach email for Q1 renewal",
    sub: "Sales & Marketing · SM_DRAFT_OUTREACH_EMAIL · Approval required",
    prompt: "Draft a professional outreach email for the Q1 renewal campaign targeting enterprise prospects. Tone: professional.",
    domain: "Sales & Marketing",
  },
  {
    title: "Query shipment status — TRK-884821",
    sub: "Logistics · LOG_SHIPMENT_STATUS · Auto-approve",
    prompt: "Check the current status of shipment TRK-884821 via DHL and return delivery ETA and last scan location.",
    domain: "Logistics",
  },
];

const DOMAINS = ["Finance", "Technical Operations", "Sales & Marketing", "Logistics", "Developer"];

// Simulated classification pipeline for a given prompt
// Returns values aligned to CLS_GLOBAL_001 + RISK_GLOBAL_001 output schemas
function classifyPrompt(prompt) {
  const p = prompt.toLowerCase();
  // Finance — FIN_* templates
  if (p.includes("expense") || p.includes("receipt")) {
    return { template: "FIN_EXPENSE_SUMMARY", version: "v1.2", domain: "Finance", confidence: 0.974, risk: "medium", taskTitle: "Generate expense summary report", promptId: "EXT_FIN_001", riskFlags: ["pii_suspected"], approvalRequired: true };
  }
  if (p.includes("invoice") || p.includes("billing") || p.includes("client")) {
    return { template: "FIN_INVOICE_DRAFT", version: "v1.0", domain: "Finance", confidence: 0.931, risk: "medium", taskTitle: "Draft invoice from client details", promptId: "EXT_FIN_001", riskFlags: ["pii_suspected"], approvalRequired: true };
  }
  if (p.includes("budget") || p.includes("variance") || p.includes("q3") || p.includes("revenue") || p.includes("reconcili") || p.includes("cfo")) {
    return { template: "FIN_BUDGET_VARIANCE", version: "v1.1", domain: "Finance", confidence: 0.918, risk: "low", taskTitle: "Generate monthly budget variance summary", promptId: "EXT_FIN_001", riskFlags: [], approvalRequired: false };
  }
  // Technical Operations — OPS_* templates
  if (p.includes("incident") || p.includes("alert") || p.includes("outage") || p.includes("5xx") || p.includes("spike")) {
    return { template: "OPS_INCIDENT_SUMMARY", version: "v2.0", domain: "Technical Operations", confidence: 0.962, risk: "low", taskTitle: "Generate incident summary from logs", promptId: "EXT_OPS_001", riskFlags: ["high_impact_system"], approvalRequired: false };
  }
  if (p.includes("ticket") || p.includes("jira") || p.includes("servicenow") || p.includes("issue") || p.includes("bug")) {
    return { template: "OPS_CREATE_TICKET", version: "v2.1", domain: "Technical Operations", confidence: 0.941, risk: "medium", taskTitle: "Create support ticket with severity", promptId: "EXT_OPS_001", riskFlags: ["high_impact_system"], approvalRequired: false };
  }
  if (p.includes("health report") || p.includes("weekly") || p.includes("monitoring") || p.includes("system status")) {
    return { template: "OPS_HEALTH_REPORT", version: "v1.3", domain: "Technical Operations", confidence: 0.890, risk: "low", taskTitle: "Weekly system health report", promptId: "EXT_OPS_001", riskFlags: [], approvalRequired: false };
  }
  if (p.includes("deploy") || p.includes("hotfix") || p.includes("gateway") || p.includes("rollback")) {
    return { template: "OPS_CREATE_TICKET", version: "v2.1", domain: "Technical Operations", confidence: 0.874, risk: "high", taskTitle: "Create deployment incident ticket", promptId: "EXT_OPS_001", riskFlags: ["high_impact_system"], approvalRequired: true };
  }
  // Sales & Marketing — SM_* templates
  if (p.includes("lead") || p.includes("crm") || p.includes("salesforce") || p.includes("opportunit")) {
    return { template: "SM_LEAD_CAPTURE", version: "v3.1", domain: "Sales & Marketing", confidence: 0.918, risk: "medium", taskTitle: "Capture lead and create CRM entry", promptId: "DRF_SM_001", riskFlags: ["pii_suspected"], approvalRequired: true };
  }
  if (p.includes("campaign") || p.includes("performance") || p.includes("analytics") || p.includes("marketing")) {
    return { template: "SM_CAMPAIGN_SUMMARY", version: "v1.4", domain: "Sales & Marketing", confidence: 0.885, risk: "low", taskTitle: "Campaign performance summary", promptId: "DRF_SM_001", riskFlags: [], approvalRequired: false };
  }
  if (p.includes("outreach") || p.includes("email") || p.includes("draft") || p.includes("prospect")) {
    return { template: "SM_DRAFT_OUTREACH_EMAIL", version: "v1.0", domain: "Sales & Marketing", confidence: 0.843, risk: "high", taskTitle: "Draft outreach email for approval", promptId: "DRF_SM_001", riskFlags: ["external_domain", "bulk_operation"], approvalRequired: true };
  }
  // Logistics — LOG_* templates
  if (p.includes("shipment") || p.includes("tracking") || p.includes("carrier") || p.includes("dhl") || p.includes("fedex")) {
    return { template: "LOG_SHIPMENT_STATUS", version: "v1.0", domain: "Logistics", confidence: 0.988, risk: "low", taskTitle: "Query shipment status by tracking number", promptId: "EXT_LOG_001", riskFlags: [], approvalRequired: false };
  }
  if (p.includes("stock") || p.includes("inventory") || p.includes("low-stock") || p.includes("warehouse")) {
    return { template: "LOG_LOW_STOCK", version: "v1.1", domain: "Logistics", confidence: 0.952, risk: "low", taskTitle: "Trigger inventory low-stock alert", promptId: "EXT_LOG_001", riskFlags: [], approvalRequired: false };
  }
  if (p.includes("vendor") || p.includes("supplier") || p.includes("delivery") || p.includes("logistics")) {
    return { template: "LOG_VENDOR_COMM", version: "v1.0", domain: "Logistics", confidence: 0.883, risk: "high", taskTitle: "Draft vendor communication for approval", promptId: "EXT_LOG_001", riskFlags: ["external_domain"], approvalRequired: true };
  }
  // Developer — DEV_* templates
  if (p.includes("pull request") || p.includes("pr ") || p.includes("diff") || p.includes("merge")) {
    return { template: "DEV_PR_SUMMARY", version: "v1.1", domain: "Developer", confidence: 0.966, risk: "low", taskTitle: "Summarise pull request changes", promptId: "SUM_DEV_001", riskFlags: [], approvalRequired: false };
  }
  if (p.includes("checklist") || p.includes("pre-deploy") || p.includes("release")) {
    return { template: "DEV_DEPLOY_CHECKLIST", version: "v1.0", domain: "Developer", confidence: 0.921, risk: "medium", taskTitle: "Generate deployment checklist", promptId: "SUM_DEV_001", riskFlags: ["high_impact_system"], approvalRequired: true };
  }
  if (p.includes("ci/cd") || p.includes("cicd") || p.includes("pipeline") || p.includes("build") || p.includes("audit") || p.includes("depend") || p.includes("cve") || p.includes("monorepo")) {
    return { template: "DEV_CICD_STATUS", version: "v1.2", domain: "Developer", confidence: 0.904, risk: "low", taskTitle: "CI/CD pipeline status report", promptId: "SUM_DEV_001", riskFlags: [], approvalRequired: false };
  }
  // No match — low confidence, triggers CLARIFY_GLOBAL_001
  return { template: "gen.unclassified", version: "v1.0", domain: "General", confidence: 0.552, risk: "low", taskTitle: prompt.slice(0, 60), promptId: "CLS_GLOBAL_001", riskFlags: [], approvalRequired: false };
}

// ─── CLASSIFY OVERLAY ──────────────────────────────────────────────────────────
// Implements Section 6.4 Functional Flow from the Conceptual Design:
// Classification → Template Selection → Entity Extraction → Schema Validation
// → Policy Evaluation → (Approval if required) → n8n Execution
// Also implements CLARIFY_GLOBAL_001 branch when confidence < 0.75

function ClassifyOverlay({ prompt, onComplete }) {
  const result = classifyPrompt(prompt);
  const needsClarification = result.confidence < 0.75 || result.template === "gen.unclassified";

  // 6 steps aligned to Section 4.4 Operational Modes
  const totalSteps = needsClarification ? 4 : 6; // pause after step 3 if clarification needed
  const [stepStates, setStepStates] = useState(
    Array(6).fill("pending")
  );
  const [phase, setPhase] = useState("animating"); // "animating" | "clarifying" | "resuming"
  const [ctaVisible, setCtaVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [clarifyValues, setClarifyValues] = useState({});
  const [clarifySubmitted, setClarifySubmitted] = useState(false);

  // Clarification questions derived from CLARIFY_GLOBAL_001 schema
  const clarifyQuestions = needsClarification ? [
    { field: "intent", question: "What is the primary action you need the platform to perform?", example: "e.g. Generate expense report, Create a support ticket" },
    { field: "domain", question: "Which business domain does this task belong to?", example: "e.g. Finance, Technical Operations, Logistics" },
    { field: "output_format", question: "What format do you need the output in?", example: "e.g. PDF, CSV, email, Jira ticket" },
  ] : [];

  const steps = [
    {
      mode: "Intake Mode",
      label: "Natural language input received",
      detailDone: `${prompt.split(" ").length} words · SYS_GLOBAL_001 system rules applied`,
      detailClass: "blue", iconDone: "✓",
    },
    {
      mode: "Interpretation Mode",
      label: "Template classification — CLS_GLOBAL_001",
      detailDone: needsClarification
        ? `status: needs_clarification · confidence ${result.confidence} — below 0.75 threshold`
        : `selected_template_id: ${result.template} · confidence ${result.confidence}`,
      detailClass: needsClarification ? "amber" : "green",
      iconDone: needsClarification ? "⚠" : "✓",
    },
    {
      mode: "Interpretation Mode",
      label: `Entity extraction — ${result.promptId || "domain prompt pack"}`,
      detailDone: needsClarification
        ? `status: needs_clarification · missing_fields detected · CLARIFY_GLOBAL_001 invoked`
        : `status: ok · all required fields extracted and schema validated`,
      detailClass: needsClarification ? "amber" : "green",
      iconDone: needsClarification ? "?" : "✓",
    },
    {
      mode: "Interpretation Mode",
      label: "JSON schema validation",
      detailDone: `Schema: ${result.template} · output shape enforced · additionalProperties: false`,
      detailClass: "green", iconDone: "✓",
    },
    {
      mode: "Planning Mode",
      label: "Execution plan built — RISK_GLOBAL_001",
      detailDone: `risk_flags: [${result.riskFlags?.join(", ") || "none"}] · ${result.risk} risk · ${result.approvalRequired ? "approval gate required" : "auto-approve eligible"}`,
      detailClass: result.risk === "high" ? "amber" : result.risk === "medium" ? "blue" : "green",
      iconDone: result.risk === "high" ? "⚠" : "✓",
    },
    {
      mode: "Governance Review",
      label: result.approvalRequired ? "Task queued — awaiting approver action" : "Task queued — auto-approved, routing to n8n",
      detailDone: `task_id: TSK-2842 · idempotency_key: ${Math.random().toString(36).slice(2, 10)} · workspace: corp-finance`,
      detailClass: "blue", iconDone: "✓",
    },
  ];

  useEffect(() => {
    if (needsClarification) {
      // Animate steps 0-2 then pause for clarification
      const delays   = [200,  900,  1700];
      const completes = [600, 1300, 2200];
      delays.forEach((d, i) => {
        setTimeout(() => setStepStates(prev => { const n=[...prev]; n[i]="running"; return n; }), d);
        setTimeout(() => setStepStates(prev => { const n=[...prev]; n[i]="done"; return n; }), completes[i]);
      });
      setTimeout(() => setPhase("clarifying"), 2600);
    } else {
      // All 6 steps animate through
      const delays    = [200,  900,  1600, 2300, 3000, 3600];
      const completes = [600, 1300, 2000, 2700, 3400, 3900];
      delays.forEach((d, i) => {
        setTimeout(() => setStepStates(prev => { const n=[...prev]; n[i]="running"; return n; }), d);
        setTimeout(() => setStepStates(prev => { const n=[...prev]; n[i]="done"; return n; }), completes[i]);
      });
      setTimeout(() => setCtaVisible(true), 4100);
      setTimeout(() => { setExiting(true); setTimeout(() => onComplete(result), 500); }, 4700);
    }
  }, []);

  // After clarification is submitted, resume steps 3-5
  useEffect(() => {
    if (!clarifySubmitted) return;
    setPhase("resuming");
    const resumeDelays    = [200,  900,  1600, 2200];
    const resumeCompletes = [600, 1300, 2000, 2600];
    [3, 4, 5].forEach((stepIdx, i) => {
      setTimeout(() => setStepStates(prev => { const n=[...prev]; n[stepIdx]="running"; return n; }), resumeDelays[i]);
      setTimeout(() => setStepStates(prev => { const n=[...prev]; n[stepIdx]="done"; return n; }), resumeCompletes[i]);
    });
    setTimeout(() => setCtaVisible(true), 2800);
    setTimeout(() => { setExiting(true); setTimeout(() => onComplete(result), 500); }, 3400);
  }, [clarifySubmitted]);

  const allFilled = clarifyQuestions.every(q => clarifyValues[q.field]?.trim());

  return (
    <div className="classify-overlay" style={exiting ? { opacity: 0, transition: "opacity 0.5s ease" } : {}}>
      <div className="classify-panel">
        <div className="classify-input-echo">"{prompt}"</div>

        <div className="classify-pipeline">
          {steps.map((step, i) => {
            const state = stepStates[i];
            // Only show steps up to the current animation progress
            const isVisible = state !== "pending" || i < stepStates.findIndex(s => s === "pending");
            return (
              <div key={i} className={`classify-step${(state !== "pending" || phase === "resuming") && isVisible ? " visible" : ""}`}>
                <div className={`classify-step-icon ${
                  state === "done" && step.detailClass === "amber" ? "warn" :
                  state === "done" ? "done" : state
                }`}>
                  {state === "running" ? <span className="spinner">◌</span> :
                   state === "done" ? step.iconDone : "·"}
                </div>
                <div className="classify-step-body">
                  <div className="classify-step-label">
                    <span style={{ color: "var(--text-dim)", marginRight: 6, fontSize: 10 }}>{step.mode}</span>
                    {step.label}
                  </div>
                  {state === "done" && (
                    <div className={`classify-step-detail ${step.detailClass}`}>{step.detailDone}</div>
                  )}
                  {state === "running" && (
                    <div className="classify-step-detail">Processing...</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CLARIFY_GLOBAL_001 inline questions — shown when confidence < 0.75 */}
        {phase === "clarifying" && !clarifySubmitted && (
          <div className="classify-clarify-section">
            <div className="classify-clarify-banner">
              {UI_COPY.low_confidence_hint}
            </div>
            <div className="classify-clarify-label">CLARIFY_GLOBAL_001 — Provide Missing Fields</div>
            {clarifyQuestions.map(q => (
              <div className="classify-clarify-field" key={q.field}>
                <div className="classify-clarify-field-header">
                  <span className="classify-clarify-field-name">{q.field}</span>
                  <span style={{ fontSize: 10, color: "var(--text-dim)" }}>required</span>
                </div>
                <div className="classify-clarify-question">{q.question}</div>
                <div className="classify-clarify-example">e.g. {q.example}</div>
                <input
                  className="classify-clarify-input"
                  placeholder={q.example}
                  value={clarifyValues[q.field] || ""}
                  onChange={e => setClarifyValues(prev => ({ ...prev, [q.field]: e.target.value }))}
                />
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button
                className="btn btn-primary btn-sm"
                disabled={!allFilled}
                onClick={() => setClarifySubmitted(true)}
              >
                Submit Answers — Resume Classification
              </button>
              <span style={{ fontSize: 11, color: "var(--text-dim)", alignSelf: "center" }}>
                Response re-routed through CLS_WITH_ROLE_001
              </span>
            </div>
          </div>
        )}

        {clarifySubmitted && phase === "resuming" && (
          <div style={{ marginTop: 12, padding: "8px 12px", background: "var(--green-dim)", borderRadius: 4, fontSize: 11, color: "var(--green)", border: "1px solid #065f46", animation: "fadeUp 0.3s ease both" }}>
            ✓ Clarification received — resuming interpretation pipeline
          </div>
        )}

        <div className={`classify-cta${ctaVisible ? " visible" : ""}`}>
          <span className="spinner" style={{ color: "var(--accent)", fontSize: 16 }}>◌</span>
          <span className="classify-cta-text">
            Task <strong style={{ color: "var(--text-pri)", fontFamily: "IBM Plex Mono", fontSize: 11 }}>TSK-2842</strong> created — opening execution config...
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── LANDING PAGE ───────────────────────────────────────────────────────────────

function LandingPage({ onSubmit, embedded = false }) {
  const [input, setInput] = useState("");
  const [domain, setDomain] = useState("");
  const [exiting, setExiting] = useState(false);
  const textareaRef = useRef(null);

  const handleSubmit = () => {
    if (!input.trim()) return;
    if (!embedded) setExiting(true);
    setTimeout(() => onSubmit(input.trim()), embedded ? 0 : 400);
  };

  const handleSuggestion = (s) => {
    setInput(s.prompt);
    setDomain(s.domain);
    textareaRef.current?.focus();
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`landing${exiting ? " exiting" : ""}${embedded ? " landing-embedded" : ""}`}>

      {/* Wordmark — hidden in embedded mode */}
      {!embedded && (
        <div className="landing-wordmark">
          <div className="landing-wordmark-mark">VW</div>
          <div>
            <div className="landing-wordmark-text">Virtual Worker Platform</div>
            <div className="landing-wordmark-sub">Governed AI Task Execution · corp-finance workspace</div>
          </div>
        </div>
      )}

      {/* Input box */}
      <div className="landing-input-wrap" style={embedded ? { width: "100%" } : {}}>
        <div className="landing-input-box">
          <textarea
            ref={textareaRef}
            className="landing-textarea"
            placeholder="Describe a task — the platform will classify, route, and govern its execution..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={embedded ? 4 : 3}
            autoFocus={embedded}
          />
          <div style={{ fontSize: 11, color: "var(--text-dim)", padding: "0 0 8px", marginTop: -4 }}>
            {UI_COPY.task_submit_hint}
          </div>
          <div className="landing-input-footer">
            <div className="landing-domain-pills">
              {DOMAINS.map(d => (
                <button
                  key={d}
                  className={`landing-domain-pill${domain === d ? " selected" : ""}`}
                  onClick={() => setDomain(domain === d ? "" : d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <button
              className="landing-submit"
              onClick={handleSubmit}
              disabled={!input.trim()}
              title="Submit task (Enter)"
            >
              ↑
            </button>
          </div>
        </div>

        <div style={{ marginTop: 8, fontSize: 11, color: "var(--text-dim)", display: "flex", gap: 16 }}>
          <span>↵ Enter to submit</span>
          <span>Shift+↵ for new line</span>
          <span style={{ marginLeft: "auto" }}>All executions are governed and auditable</span>
        </div>
      </div>

      {/* Suggestions — hidden in embedded mode */}
      {!embedded && (
        <div className="landing-suggestions">
          <div className="landing-suggestions-label">Suggested tasks</div>
          <div className="landing-suggestion-grid">
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="landing-suggestion" onClick={() => handleSuggestion(s)}>
                <div className="landing-suggestion-title">{s.title}</div>
                <div className="landing-suggestion-sub">{s.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

// ─── MODEL CATALOGUE ───────────────────────────────────────────────────────────

const AI_MODELS = [
  {
    id: "claude-sonnet-4-6",
    name: "Claude Sonnet 4.6",
    provider: "Anthropic",
    priceIn: 0.003,   // per 1K input tokens
    priceOut: 0.015,  // per 1K output tokens
    displayPrice: "$0.003",
    unit: "/ 1K tokens",
    tags: [{ label: "Recommended", type: "speed" }, { label: "Fast", type: "speed" }, { label: "Governed", type: "" }],
    recommended: true,
    description: "Best balance of speed, accuracy, and cost for governed task classification and execution.",
    estTokens: 4200,
  },
  {
    id: "claude-opus-4-6",
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    priceIn: 0.015,
    priceOut: 0.075,
    displayPrice: "$0.015",
    unit: "/ 1K tokens",
    tags: [{ label: "Highest accuracy", type: "power" }, { label: "Complex tasks", type: "power" }],
    recommended: false,
    description: "Maximum reasoning depth. Ideal for high-risk tasks requiring nuanced input extraction.",
    estTokens: 5800,
  },
  {
    id: "mistral-large",
    name: "Mistral Large 2",
    provider: "Mistral AI",
    priceIn: 0.002,
    priceOut: 0.006,
    displayPrice: "$0.002",
    unit: "/ 1K tokens",
    tags: [{ label: "Economy", type: "economy" }, { label: "EU hosted", type: "" }],
    recommended: false,
    description: "Cost-efficient, EU-data-residency compliant. Suited for low-risk classification tasks.",
    estTokens: 3900,
  },
  {
    id: "llama-3-1-70b",
    name: "Llama 3.1 70B",
    provider: "Meta / Self-hosted",
    priceIn: 0.0005,
    priceOut: 0.0008,
    displayPrice: "$0.0005",
    unit: "/ 1K tokens",
    tags: [{ label: "Lowest cost", type: "economy" }, { label: "On-prem eligible", type: "" }],
    recommended: false,
    description: "Open weights, deployable on-premise. Requires validated schema accuracy before production use.",
    estTokens: 3600,
  },
];

const MVP_SUGGESTED_TASKS = [
  // Finance — 3 MVP templates from Prompt Library
  { domain: "Finance",     domainColor: "var(--green)",    title: "Generate expense summary from receipts",    template: "FIN_EXPENSE_SUMMARY",  risk: "medium", approval: "Single approver" },
  { domain: "Finance",     domainColor: "var(--green)",    title: "Draft invoice from client details",         template: "FIN_INVOICE_DRAFT",    risk: "medium", approval: "Single approver" },
  { domain: "Finance",     domainColor: "var(--green)",    title: "Monthly budget variance summary",           template: "FIN_BUDGET_VARIANCE",  risk: "low",    approval: "Auto-approve" },
  // Technical Operations
  { domain: "Tech Ops",    domainColor: "var(--accent)",   title: "Summarise incident from monitoring logs",   template: "OPS_INCIDENT_SUMMARY", risk: "low",    approval: "Auto-approve" },
  { domain: "Tech Ops",    domainColor: "var(--accent)",   title: "Create support ticket with severity",       template: "OPS_CREATE_TICKET",    risk: "medium", approval: "Auto-approve" },
  { domain: "Tech Ops",    domainColor: "var(--accent)",   title: "Weekly system health email report",         template: "OPS_HEALTH_REPORT",    risk: "low",    approval: "Auto-approve" },
  // Sales & Marketing
  { domain: "Sales",       domainColor: "var(--indigo)",   title: "Capture lead and write CRM entry",          template: "SM_LEAD_CAPTURE",      risk: "medium", approval: "Approval required" },
  { domain: "Sales",       domainColor: "var(--indigo)",   title: "Campaign performance summary",              template: "SM_CAMPAIGN_SUMMARY",  risk: "low",    approval: "Auto-approve" },
  { domain: "Sales",       domainColor: "var(--indigo)",   title: "Draft outreach email for review",           template: "SM_DRAFT_OUTREACH_EMAIL", risk: "high", approval: "Approval required" },
  // Logistics
  { domain: "Logistics",   domainColor: "var(--amber)",    title: "Query shipment status by tracking number",  template: "LOG_SHIPMENT_STATUS",  risk: "low",    approval: "Auto-approve" },
  { domain: "Logistics",   domainColor: "var(--amber)",    title: "Trigger inventory low-stock alert",         template: "LOG_LOW_STOCK",        risk: "low",    approval: "Auto-approve" },
  { domain: "Logistics",   domainColor: "var(--amber)",    title: "Draft vendor communication for approval",   template: "LOG_VENDOR_COMM",      risk: "high",   approval: "Approval required" },
  // Developer
  { domain: "Developer",   domainColor: "var(--text-sec)", title: "Summarise pull request changes + risk",     template: "DEV_PR_SUMMARY",       risk: "low",    approval: "Auto-approve" },
  { domain: "Developer",   domainColor: "var(--text-sec)", title: "Generate deployment checklist",             template: "DEV_DEPLOY_CHECKLIST", risk: "medium", approval: "Admin approval" },
  { domain: "Developer",   domainColor: "var(--text-sec)", title: "CI/CD pipeline status report",              template: "DEV_CICD_STATUS",      risk: "low",    approval: "Auto-approve" },
];

// ─── EXECUTION CONFIG PAGE ─────────────────────────────────────────────────────

function ExecutionConfigPage({ taskResult, onConfirm, onDashboard, isEmbedded = false }) {
  const [selectedModel, setSelectedModel] = useState("claude-sonnet-4-6");
  const [budget, setBudget] = useState("5.00");
  const [exiting, setExiting] = useState(false);

  const model = AI_MODELS.find(m => m.id === selectedModel) || AI_MODELS[0];

  // Estimate cost: (input tokens * priceIn + output tokens * priceOut) / 1000
  const inputTokens = model.estTokens;
  const outputTokens = Math.round(model.estTokens * 0.4);
  const estimatedCost = ((inputTokens * model.priceIn) + (outputTokens * model.priceOut)) / 1000;
  const budgetNum = parseFloat(budget) || 0;
  const headroom = budgetNum - estimatedCost;
  const budgetPct = Math.min((estimatedCost / Math.max(budgetNum, 0.001)) * 100, 100);
  const budgetColor = headroom < 0 ? "var(--red)" : headroom < estimatedCost * 0.2 ? "var(--amber)" : "var(--green)";

  const handleConfirm = () => {
    if (headroom < 0) return;
    setExiting(true);
    setTimeout(() => onConfirm({ model: selectedModel, budget: budgetNum, estimatedCost }), 400);
  };

  // For embedded (sidebar page) show up to 6 suggestions, else 9
  const suggestions = isEmbedded ? MVP_SUGGESTED_TASKS.slice(0, 6) : MVP_SUGGESTED_TASKS.slice(0, 9);

  return (
    <div className={`exec-config${exiting ? " exiting" : ""}`}
      style={isEmbedded ? { position: "static", animation: "none", padding: "24px", overflow: "visible" } : {}}>
      <div className="exec-config-inner">

        {/* Breadcrumb */}
        {!isEmbedded && (
          <div className="exec-config-breadcrumb">
            <span>VWP</span>
            <span className="exec-config-breadcrumb-sep">›</span>
            <span>New Task</span>
            <span className="exec-config-breadcrumb-sep">›</span>
            <span className="exec-config-breadcrumb-active">Configure Execution</span>
          </div>
        )}

        {/* Task echo (only in full-screen flow) */}
        {taskResult && !isEmbedded && (
          <div className="exec-config-task-echo">
            <div>
              <div className="exec-config-task-title">{taskResult.taskTitle}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <span className="mono text-11 text-dim">{taskResult.template} {taskResult.version}</span>
                <span className="text-dim">·</span>
                <RiskBadge risk={taskResult.risk} />
                <StatusBadge status="awaiting_approval" />
              </div>
            </div>
            <div style={{ flexShrink: 0, textAlign: "right" }}>
              <div className="card-label">Confidence</div>
              <div style={{ color: "var(--green)", fontFamily: "IBM Plex Mono", fontSize: 14, fontWeight: 600 }}>
                {typeof taskResult.confidence === "number" ? (taskResult.confidence * 100).toFixed(1) + "%" : taskResult.confidence}
              </div>
            </div>
          </div>
        )}

        {/* ── Model Selection ── */}
        <div className="exec-config-section">
          <div className="exec-config-section-label">AI Model Selection</div>
          <div className="model-grid">
            {AI_MODELS.map(m => (
              <div
                key={m.id}
                className={`model-card${selectedModel === m.id ? " selected" : ""}`}
                onClick={() => setSelectedModel(m.id)}
              >
                {m.recommended && <div className="model-recommended">Recommended</div>}
                <div className="model-card-header">
                  <div>
                    <div className="model-name">{m.name}</div>
                    <div className="model-provider">{m.provider}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="model-price">{m.displayPrice}</div>
                    <div className="model-price-unit">{m.unit}</div>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "var(--text-sec)", marginBottom: 6, lineHeight: 1.5 }}>
                  {m.description}
                </div>
                <div className="model-tags">
                  {m.tags.map(t => (
                    <span key={t.label} className={`model-tag ${t.type}`}>{t.label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Execution Budget ── */}
        <div className="exec-config-section">
          <div className="exec-config-section-label">Execution Budget</div>
          <div className="budget-row">
            <div className="budget-input-wrap">
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span className="budget-currency">$</span>
                <input
                  className="budget-amount-input"
                  type="number"
                  min="0"
                  step="0.50"
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                />
              </div>
              <div className="budget-sublabel">
                Maximum spend authorised for this execution run.<br />
                Task will not execute if cost exceeds this limit.
              </div>
            </div>

            <div className="budget-estimate">
              <div className="card-label" style={{ marginBottom: 8 }}>Cost Estimate</div>
              {[
                ["Model", model.name],
                ["Input tokens (est.)", inputTokens.toLocaleString()],
                ["Output tokens (est.)", outputTokens.toLocaleString()],
                ["Estimated cost", `$${estimatedCost.toFixed(4)}`],
                ["Budget remaining", headroom >= 0 ? `$${headroom.toFixed(4)}` : `−$${Math.abs(headroom).toFixed(4)}`],
              ].map(([label, val], i) => (
                <div className="budget-estimate-row" key={label}>
                  <span className="budget-estimate-label">{label}</span>
                  <span className={`budget-estimate-val${i === 3 ? "" : i === 4 ? (headroom < 0 ? " red" : headroom < estimatedCost * 0.2 ? " amber" : " green") : ""}`}>
                    {val}
                  </span>
                </div>
              ))}
              <div className="budget-bar-track">
                <div className="budget-bar-fill" style={{
                  width: `${budgetPct}%`,
                  background: budgetColor,
                }} />
              </div>
              {headroom < 0 && (
                <div style={{ marginTop: 8, fontSize: 11, color: "var(--red)" }}>
                  ⚠ Budget insufficient — increase limit to proceed.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Suggested Tasks (always visible) ── */}
        <div className="exec-config-section">
          <div className="exec-config-section-label">Suggested Tasks — MVP Templates</div>
          <div className="sugg-grid">
            {suggestions.map((t, i) => (
              <button key={i} className="sugg-task" onClick={() => {
                // Clicking a suggestion navigates back to landing to submit it
                if (onDashboard) onDashboard("suggested", t);
              }}>
                <div className="sugg-task-domain" style={{ color: t.domainColor }}>{t.domain}</div>
                <div className="sugg-task-title">{t.title}</div>
                <div className="sugg-task-meta">{t.template} · {t.approval}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Footer actions ── */}
        <div className="exec-config-footer">
          <button className="btn btn-ghost" onClick={() => onDashboard && onDashboard("dashboard")}>
            ← To Dashboard
          </button>
          {!isEmbedded && (
            <button
              className="btn btn-primary"
              onClick={handleConfirm}
              disabled={headroom < 0 || !budget}
            >
              Confirm &amp; Execute Task →
            </button>
          )}
          <div className="exec-config-notice">
            Budget and model selection are recorded in the task audit log. 
            Execution will not proceed beyond your authorised spend limit.
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── ROOT APP ──────────────────────────────────────────────────────────────────

export default function App() {
  // phase: "landing" | "classifying" | "exec-config" | "app"
  const [phase, setPhase] = useState("landing");
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [classifyResult, setClassifyResult] = useState(null);

  const [page, setPage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [activeTask, setActiveTask] = useState(MOCK_TASKS[0]);
  const [appVisible, setAppVisible] = useState(false);
  const role = "approver"; // toggle: admin | approver | member | viewer

  // User submits from landing → start classification overlay
  const handleLandingSubmit = (prompt) => {
    setPendingPrompt(prompt);
    setPhase("classifying");
  };

  // Classification completes → go to exec-config phase (budget + model selection)
  const handleClassifyComplete = (result) => {
    setClassifyResult(result);
    setPhase("exec-config");
  };

  // User confirms budget & model → build task, enter app on task-thread
  const handleExecConfirm = ({ model, budget, estimatedCost }) => {
    const result = classifyResult;
    const syntheticTask = {
      id: "TSK-2842",
      title: result.taskTitle,
      status: result.risk === "high" ? "awaiting_approval" : "running",
      risk: result.risk,
      domain: result.domain,
      template: result.template,
      templateVersion: result.version,
      createdBy: "M. Chen",
      workspace: "corp-finance",
      createdAt: new Date().toISOString(),
      executionModel: model,
      budget,
      estimatedCost,
    };
    setActiveTask(syntheticTask);
    setPage("task-thread");
    setPhase("app");
    setTimeout(() => setAppVisible(true), 80);
  };

  // Dashboard / suggestion navigation from exec-config full-screen
  const handleExecConfigNav = (dest) => {
    if (dest === "dashboard") {
      setPage("dashboard");
      setPhase("app");
      setTimeout(() => setAppVisible(true), 80);
    } else {
      // Suggestion clicked — go back to landing
      setPhase("landing");
    }
  };

  // "New Task" from sidebar opens command modal
  const [showCommandModal, setShowCommandModal] = useState(false);
  const handleNewTask = () => setShowCommandModal(true);
  const handleCommandSubmit = (prompt) => {
    setShowCommandModal(false);
    setPendingPrompt(prompt);
    setPhase("classifying");
    setAppVisible(false);
  };

  return (
    <>
      <StyleInjector />

      {/* Full-screen landing */}
      {phase === "landing" && (
        <LandingPage onSubmit={handleLandingSubmit} />
      )}

      {/* Classification animation */}
      {phase === "classifying" && (
        <ClassifyOverlay prompt={pendingPrompt} onComplete={handleClassifyComplete} />
      )}

      {/* Execution config — budget & model selection — sits between classify and app */}
      {phase === "exec-config" && (
        <ExecutionConfigPage
          taskResult={classifyResult}
          onConfirm={handleExecConfirm}
          onDashboard={handleExecConfigNav}
        />
      )}

      {/* Command modal — "New Task" from inside the app */}
      {showCommandModal && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 400,
          background: "rgba(10,12,15,0.92)",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease both",
        }}>
          <div style={{ width: 680, maxWidth: "calc(100vw - 40px)", position: "relative" }}>
            <div style={{
              fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "var(--text-dim)",
              letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span>New task — virtual worker platform</span>
              <button
                style={{ background: "none", border: "none", color: "var(--text-dim)", cursor: "pointer", fontSize: 18 }}
                onClick={() => setShowCommandModal(false)}
              >✕</button>
            </div>
            <LandingPage onSubmit={handleCommandSubmit} embedded />
          </div>
        </div>
      )}

      {/* Main app shell */}
      <div
        className="app"
        style={{
          opacity: phase === "app" && appVisible ? 1 : 0,
          transition: "opacity 0.5s ease",
          display: phase === "landing" || phase === "classifying" || phase === "exec-config" ? "none" : "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <TopNav role={role} workspace="corp-finance" />
        <div className="app-body">
          <Sidebar
            page={page}
            setPage={setPage}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            onNewTask={handleNewTask}
          />
          <main className="main">
            {page === "dashboard"   && <DashboardPage />}
            {page === "tasks"       && <TasksPage setPage={setPage} setActiveTask={setActiveTask} />}
            {page === "task-thread" && <TaskThreadPage task={activeTask} role={role} />}
            {page === "approvals"   && <ApprovalsPage role={role} />}
            {page === "exec-config" && (
              <ExecutionConfigPage
                taskResult={null}
                isEmbedded
                onConfirm={() => {}}
                onDashboard={() => setPage("dashboard")}
              />
            )}
            {page === "templates"      && <TemplatesPage role={role} />}
            {page === "prompt-library" && <PromptLibraryPage />}
            {page === "workers"     && <WorkersPage />}
            {page === "audit"       && <AuditLogPage />}
            {page === "new-task"    && <NewTaskPage setPage={setPage} />}
          </main>
        </div>
      </div>
    </>
  );
}
