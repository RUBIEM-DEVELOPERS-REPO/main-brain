import { useState, useEffect, useRef } from "react";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
--bg:#0c0c12;--bg1:#13131b;--bg2:#1a1a25;--bg3:#21212f;--bg4:#2a2a3c;
--border:rgba(255,255,255,0.07);--border2:rgba(255,255,255,0.13);
--txt:#eeeef5;--txt2:#9898b8;--txt3:#55556e;--txt4:#3a3a52;
--accent:#6366f1;--acl:#818cf8;--acd:#1e1f40;--acg:rgba(99,102,241,0.15);
--green:#34d399;--gd:rgba(52,211,153,0.12);
--amber:#fbbf24;--ad:rgba(251,191,36,0.12);
--red:#f87171;--rd:rgba(248,113,113,0.12);
--indigo:#a5b4fc;--id:rgba(165,180,252,0.1);
--sky:#38bdf8;--skd:rgba(56,189,248,0.1);
--r4:4px;--r:8px;--rl:12px;--rx:18px;
--sh:0 4px 16px rgba(0,0,0,.5);--shl:0 8px 32px rgba(0,0,0,.6);
}
html,body{height:100%;background:var(--bg);color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:13.5px;line-height:1.6;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-thumb{background:var(--bg4);border-radius:10px}
.df{font-family:'Bricolage Grotesque',sans-serif}
.mono{font-family:ui-monospace,monospace}

/* Badges */
.badge{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:100px;font-size:11px;font-weight:600;letter-spacing:.02em}
.bdot{width:5px;height:5px;border-radius:50%;flex-shrink:0}
.s-created{background:var(--bg3);color:var(--txt3)}
.s-interpreting{background:var(--id);color:var(--indigo)}
.s-awaiting{background:var(--ad);color:var(--amber)}
.s-running{background:var(--acd);color:var(--acl)}
.s-completed{background:var(--gd);color:var(--green)}
.s-failed{background:var(--rd);color:var(--red)}
.s-cancelled{background:var(--bg3);color:var(--txt4)}
.s-clarifying{background:var(--ad);color:var(--amber)}
.r-low{background:var(--bg3);color:var(--txt3)}
.r-medium{background:var(--ad);color:var(--amber)}
.r-high{background:var(--rd);color:var(--red)}
.role-admin{background:var(--acd);color:var(--acl)}
.role-approver{background:var(--id);color:var(--indigo)}
.role-member{background:var(--bg3);color:var(--txt2)}
.role-viewer{background:var(--bg2);color:var(--txt3)}

/* Buttons */
.btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:var(--r4);border:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:all .18s cubic-bezier(.4,0,.2,1);white-space:nowrap}
.btn-p{background:var(--accent);color:#fff;box-shadow:0 2px 12px rgba(99,102,241,.35)}
.btn-p:hover{background:#5254e8;transform:translateY(-1px);box-shadow:0 4px 18px rgba(99,102,241,.45)}
.btn-g{background:var(--bg3);color:var(--txt2);border:1px solid var(--border2)}
.btn-g:hover{background:var(--bg4);color:var(--txt)}
.btn-d{background:var(--rd);color:var(--red);border:1px solid rgba(248,113,113,.2)}
.btn-d:hover{background:rgba(248,113,113,.2)}
.btn-ok{background:var(--gd);color:var(--green);border:1px solid rgba(52,211,153,.2)}
.btn-ok:hover{background:rgba(52,211,153,.2)}
.btn-sm{padding:5px 12px;font-size:12px}
.btn:disabled{opacity:.4;cursor:not-allowed;transform:none!important}

/* Card */
.card{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);transition:border-color .2s}
.card:hover{border-color:var(--border2)}
.cp{padding:20px}

/* App shell */
.app{display:flex;flex-direction:column;height:100vh;overflow:hidden}
.app-body{display:flex;flex:1;overflow:hidden}
.main-area{flex:1;overflow-y:auto}

/* Top nav */
.tnav{height:56px;background:var(--bg1);border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 20px;gap:12px;flex-shrink:0}
.brand{display:flex;align-items:center;gap:10px;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:15px;padding-right:18px;border-right:1px solid var(--border);margin-right:4px}
.brand-mk{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#8b5cf6);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff;box-shadow:0 2px 8px rgba(99,102,241,.4)}
.ws{display:flex;align-items:center;gap:7px;padding:6px 12px;border-radius:100px;background:var(--bg2);border:1px solid var(--border);cursor:pointer;font-size:12.5px;font-weight:500;color:var(--txt2);transition:all .15s}
.ws:hover{background:var(--bg3);color:var(--txt);border-color:var(--border2)}
.wsdot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green)}
.nr{margin-left:auto;display:flex;align-items:center;gap:8px}
.av{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--acd),#2d1f5e);border:1.5px solid var(--acd);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--acl);cursor:pointer;transition:all .15s}
.av:hover{border-color:var(--accent)}
.ibtn{width:34px;height:34px;border-radius:var(--r4);background:transparent;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--txt3);font-size:16px;transition:all .15s}
.ibtn:hover{background:var(--bg2);color:var(--txt2);border-color:var(--border2)}

/* Sidebar */
.sb{width:220px;background:var(--bg1);border-right:1px solid var(--border);display:flex;flex-direction:column;flex-shrink:0;transition:width .25s cubic-bezier(.4,0,.2,1);overflow:hidden}
.sb.col{width:60px}
.sb-inner{flex:1;padding:12px;display:flex;flex-direction:column;gap:2px;overflow:hidden}
.nt-btn{display:flex;align-items:center;gap:9px;padding:9px 12px;border-radius:var(--r);background:linear-gradient(135deg,var(--accent),#8b5cf6);color:#fff;font-size:13px;font-weight:600;cursor:pointer;margin-bottom:8px;transition:all .2s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 10px rgba(99,102,241,.3);overflow:hidden;white-space:nowrap}
.nt-btn:hover{transform:translateY(-1px);box-shadow:0 4px 16px rgba(99,102,241,.45)}
.nb{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:var(--r);cursor:pointer;font-size:13px;font-weight:500;color:var(--txt2);white-space:nowrap;overflow:hidden;transition:all .15s}
.nb:hover{background:var(--bg2);color:var(--txt)}
.nb.on{background:var(--acd);color:var(--acl);font-weight:600}
.ni{font-size:16px;flex-shrink:0;width:20px;text-align:center}
.nbadge{margin-left:auto;background:var(--ad);color:var(--amber);font-size:10px;padding:1px 6px;border-radius:100px;font-weight:700}
.sb-ft{padding:12px;border-top:1px solid var(--border);display:flex;justify-content:flex-end}
.col-btn{width:28px;height:28px;border-radius:var(--r4);background:var(--bg2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--txt3);font-size:13px;transition:all .15s}
.col-btn:hover{background:var(--bg3);color:var(--txt2)}

/* Page */
.page{padding:28px 32px;max-width:1100px}
.phd{margin-bottom:24px}
.ptitle{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:600;margin-bottom:4px}
.psub{color:var(--txt2);font-size:13px}

/* Landing */
.landing{position:fixed;inset:0;z-index:200;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}
.landing::before{content:'';position:absolute;width:700px;height:700px;background:radial-gradient(ellipse,rgba(99,102,241,.12) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-60%);pointer-events:none}
.landing.out{opacity:0;transform:scale(.98);transition:all .45s cubic-bezier(.4,0,.2,1)}
.ll{animation:fadeUp .5s .05s both;margin-bottom:44px;text-align:center}
.ll-mk{width:52px;height:52px;border-radius:16px;margin:0 auto 14px;background:linear-gradient(135deg,var(--accent),#8b5cf6);display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:700;color:#fff;box-shadow:0 4px 24px rgba(99,102,241,.4)}
.ll-t{font-family:'Bricolage Grotesque',sans-serif;font-size:26px;font-weight:700;letter-spacing:-.3px}
.ll-s{font-size:13px;color:var(--txt3);margin-top:4px}
.lbox{width:640px;max-width:calc(100vw - 40px);animation:fadeUp .5s .12s both}
.lic{background:var(--bg1);border:1px solid var(--border2);border-radius:var(--rx);padding:18px 18px 14px;transition:border-color .2s,box-shadow .2s;box-shadow:var(--sh)}
.lic:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.12),var(--sh)}
.lta{width:100%;background:transparent;border:none;outline:none;color:var(--txt);font-family:'Plus Jakarta Sans',sans-serif;font-size:14.5px;line-height:1.65;resize:none;min-height:80px}
.lta::placeholder{color:var(--txt4)}
.lfb{display:flex;align-items:center;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border);margin-top:10px}
.dpills{display:flex;gap:5px;flex-wrap:wrap}
.dp{padding:4px 10px;border-radius:100px;font-size:11.5px;font-weight:500;border:1px solid var(--border);color:var(--txt3);background:transparent;cursor:pointer;transition:all .15s;font-family:'Plus Jakarta Sans',sans-serif}
.dp:hover{border-color:var(--accent);color:var(--acl);background:var(--acd)}
.dp.on{border-color:var(--accent);color:var(--acl);background:var(--acd)}
.sbtn{width:36px;height:36px;border-radius:50%;background:var(--accent);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;flex-shrink:0;transition:all .2s;box-shadow:0 2px 10px rgba(99,102,241,.35)}
.sbtn:hover{background:#5254e8;transform:scale(1.08);box-shadow:0 4px 14px rgba(99,102,241,.5)}
.sbtn:disabled{background:var(--bg3);box-shadow:none;cursor:not-allowed;transform:none;color:var(--txt4)}
.lhints{font-size:11.5px;color:var(--txt4);display:flex;gap:16px;margin-top:10px}
.lhints kbd{background:var(--bg2);border:1px solid var(--border);border-radius:4px;padding:1px 5px;font-size:10px;color:var(--txt3)}
.sug-sec{margin-top:28px;animation:fadeUp .5s .2s both}
.sug-label{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--txt4);margin-bottom:10px}
.sug-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.sug-card{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:12px 14px;cursor:pointer;text-align:left;transition:all .18s cubic-bezier(.4,0,.2,1)}
.sug-card:hover{background:var(--bg2);border-color:var(--border2);transform:translateY(-1px)}
.sug-dom{font-size:10.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin-bottom:3px}
.sug-t{font-size:13px;font-weight:500;color:var(--txt);margin-bottom:2px;line-height:1.4}
.sug-m{font-size:11px;color:var(--txt3)}

/* Classify */
.classify{position:fixed;inset:0;z-index:300;background:var(--bg);display:flex;align-items:center;justify-content:center;animation:fadeIn .3s}
.classify::before{content:'';position:absolute;width:500px;height:500px;background:radial-gradient(ellipse,rgba(99,102,241,.1) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}
.classify.out{opacity:0;transition:opacity .4s}
.cl-panel{width:520px;max-width:calc(100vw - 40px);position:relative;z-index:1}
.cl-echo{background:var(--bg1);border:1px solid var(--border2);border-radius:var(--rl);padding:14px 16px;margin-bottom:20px;font-size:13.5px;color:var(--txt2);line-height:1.6;border-left:3px solid var(--accent);font-style:italic}
.cl-steps{display:flex;flex-direction:column}
.cl-step{display:flex;gap:14px;padding:13px 0;border-bottom:1px solid var(--border);opacity:0;transform:translateY(8px);transition:opacity .35s cubic-bezier(.4,0,.2,1),transform .35s cubic-bezier(.4,0,.2,1)}
.cl-step:last-child{border-bottom:none}
.cl-step.show{opacity:1;transform:translateY(0)}
.si{width:26px;height:26px;border-radius:50%;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;font-size:11px}
.si.idle{background:var(--bg3);color:var(--txt4)}
.si.spin{background:var(--acd);color:var(--acl);animation:pulse 1.2s infinite}
.si.ok{background:var(--gd);color:var(--green)}
.si.warn{background:var(--ad);color:var(--amber)}
.sb2{flex:1}
.sm{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--txt4);margin-bottom:2px}
.sl{font-size:13px;font-weight:500}
.sd{font-size:11.5px;margin-top:3px;font-family:ui-monospace,monospace}
.sd.blue{color:var(--acl)}.sd.green{color:var(--green)}.sd.amber{color:var(--amber)}
.cl-clfy{margin-top:16px;padding:16px;background:var(--bg1);border:1px solid rgba(251,191,36,.25);border-radius:var(--rl);animation:fadeUp .4s}
.cl-cbanner{display:flex;gap:8px;align-items:flex-start;background:var(--ad);border-radius:var(--r);padding:10px 12px;margin-bottom:14px;font-size:12.5px;color:var(--amber);line-height:1.5}
.cl-cf{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:12px;margin-bottom:8px}
.cl-cfn{font-size:11px;font-weight:700;color:var(--amber);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;font-family:monospace}
.cl-cq{font-size:12.5px;color:var(--txt2);margin-bottom:6px}
.cl-ce{font-size:11px;color:var(--txt4);font-family:monospace;margin-bottom:8px}
.cl-ci{width:100%;background:var(--bg1);border:1px solid var(--border2);border-radius:var(--r4);color:var(--txt);padding:8px 11px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;outline:none;transition:border-color .15s}
.cl-ci:focus{border-color:var(--amber)}
.cl-cta{display:flex;align-items:center;gap:10px;margin-top:18px;opacity:0;transition:opacity .4s}
.cl-cta.show{opacity:1}
.cl-cta-t{font-size:13px;color:var(--txt2)}

/* Exec config */
.ec-page{position:fixed;inset:0;z-index:250;background:var(--bg);overflow-y:auto;padding:44px 20px 60px;animation:fadeIn .35s}
.ec-page.out{opacity:0;transform:translateY(-8px);transition:all .38s cubic-bezier(.4,0,.2,1)}
.ec-inner{width:740px;max-width:100%;margin:0 auto}
.ec-bc{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--txt3);margin-bottom:28px}
.ec-bca{color:var(--acl);font-weight:500}
.ec-echo{background:var(--bg1);border:1px solid var(--border2);border-radius:var(--rl);padding:16px 18px;margin-bottom:28px;border-left:3px solid var(--accent);display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.ec-et{font-size:15px;font-weight:600;margin-bottom:6px}
.sec-title{font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--txt3);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.sec-title::after{content:'';flex:1;height:1px;background:var(--border)}
.ec-sec{margin-bottom:26px}
.mg{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.mc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:16px;cursor:pointer;position:relative;transition:all .18s cubic-bezier(.4,0,.2,1)}
.mc:hover{border-color:var(--border2);transform:translateY(-1px)}
.mc.sel{border-color:var(--accent);background:var(--acd);box-shadow:0 0 0 1px var(--accent),0 4px 14px rgba(99,102,241,.15);transform:translateY(-1px)}
.mc-rec{position:absolute;top:-1px;right:-1px;background:var(--accent);color:#fff;font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 9px;border-radius:0 var(--rl) 0 6px}
.mc-n{font-size:13.5px;font-weight:700;margin-bottom:1px}
.mc-p{font-size:11px;color:var(--txt3);margin-bottom:8px}
.mc-d{font-size:12px;color:var(--txt2);line-height:1.5;margin-bottom:10px}
.mc-pr{font-family:monospace;font-size:15px;font-weight:700;color:var(--green)}
.mc-pu{font-size:10px;color:var(--txt3)}
.mc-tags{display:flex;gap:5px;flex-wrap:wrap;margin-top:8px}
.mc-tag{font-size:10.5px;padding:2px 8px;border-radius:100px;border:1px solid var(--border);color:var(--txt3)}
.mc-tag.spd{color:var(--green);border-color:rgba(52,211,153,.3);background:var(--gd)}
.mc-tag.pwr{color:var(--indigo);border-color:rgba(165,180,252,.2);background:var(--id)}
.mc-tag.eco{color:var(--amber);border-color:rgba(251,191,36,.2);background:var(--ad)}
.br{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.bib{background:var(--bg1);border:1px solid var(--border2);border-radius:var(--rl);padding:18px;transition:border-color .2s,box-shadow .2s}
.bib:focus-within{border-color:var(--accent);box-shadow:0 0 0 2px rgba(99,102,241,.1)}
.bsym{font-size:26px;color:var(--txt4);margin-right:4px;font-weight:300}
.bamt{background:transparent;border:none;outline:none;font-family:'Bricolage Grotesque',sans-serif;font-size:32px;font-weight:300;color:var(--txt);width:150px}
.bhint{font-size:11.5px;color:var(--txt3);margin-top:8px;line-height:1.5}
.cc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:18px}
.cr{display:flex;justify-content:space-between;padding:6px 0;font-size:12.5px}
.cr+.cr{border-top:1px solid var(--border)}
.cl2{color:var(--txt2)}.cv{font-family:monospace;color:var(--txt)}
.cv.g{color:var(--green)}.cv.a{color:var(--amber)}.cv.r{color:var(--red)}
.bt{height:4px;background:var(--border);border-radius:10px;margin-top:12px;overflow:hidden}
.bf{height:100%;border-radius:10px;transition:width .4s cubic-bezier(.4,0,.2,1),background .3s}
.ms-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.ms{background:var(--bg1);border:1px solid var(--border);border-radius:var(--r);padding:11px 13px;cursor:pointer;text-align:left;transition:all .16s}
.ms:hover{background:var(--bg2);border-color:var(--border2);transform:translateY(-1px)}
.ms-d{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px}
.ms-t{font-size:12px;font-weight:500;color:var(--txt);line-height:1.4;margin-bottom:3px}
.ms-m{font-size:10.5px;color:var(--txt3)}
.ec-ft{display:flex;align-items:center;gap:10px;padding-top:20px;border-top:1px solid var(--border);margin-top:4px}
.ec-nt{margin-left:auto;font-size:11.5px;color:var(--txt3);text-align:right;max-width:260px;line-height:1.5}

/* Task thread */
.th{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rx);padding:22px 24px;margin-bottom:20px}
.tid{font-size:11.5px;color:var(--txt3);font-family:monospace;margin-bottom:6px}
.th1{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:600;margin-bottom:14px;line-height:1.4}
.mg2{display:grid;grid-template-columns:repeat(5,auto);gap:12px 24px;margin-bottom:18px}
.mi{}
.ml{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--txt4);font-weight:600;margin-bottom:3px}
.mv{font-size:12.5px}
.lc-trk{height:2px;background:var(--bg3);border-radius:10px;overflow:hidden}
.lc-fill{height:100%;border-radius:10px;background:linear-gradient(90deg,var(--accent),var(--green));transition:width .6s cubic-bezier(.4,0,.2,1)}
.lc-nodes{display:flex;justify-content:space-between;margin-top:7px}
.lc-n{font-size:9.5px;text-align:center;flex:1;color:var(--txt4)}
.lc-n.done{color:var(--green)}.lc-n.active{color:var(--acl);font-weight:600}

/* Timeline */
.tl{display:flex;flex-direction:column;gap:12px}
.tlc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:16px 18px;border-left:3px solid var(--border);transition:border-color .2s;animation:fadeUp .35s both}
.tlc:hover{border-color:var(--border2)}
.tlc.ur{border-left-color:var(--accent)}
.tlc.ac{border-left-color:var(--indigo)}
.tlc.pln{border-left-color:#8b5cf6}
.tlc.apv{border-left-color:var(--amber)}
.tlc.exc{border-left-color:var(--green)}
.tlc.ncl{border-left-color:var(--amber)}
.tl-hd{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.tl-type{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--txt3)}
.tl-actor{font-size:11px;color:var(--txt3)}
.tl-ts{margin-left:auto;font-size:11px;color:var(--txt4);font-family:monospace}

/* JSON */
.jb{background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:13px;overflow-x:auto;font-family:ui-monospace,monospace;font-size:11.5px;line-height:1.7}
.jk{color:#93c5fd}.jv{color:#86efac}.jn{color:#fcd34d}.jbo{color:#f0abfc}

/* Approval */
.apc{background:var(--bg1);border:1.5px solid rgba(251,191,36,.3);border-radius:var(--rx);overflow:hidden}
.apt{background:var(--ad);padding:13px 18px;display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(251,191,36,.15)}
.apb{padding:18px}
.apa{display:flex;gap:8px;margin-top:18px;padding-top:18px;border-top:1px solid var(--border);align-items:center}

/* Pipeline */
.rb{background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;display:flex;flex-wrap:wrap;gap:20px;margin-bottom:12px}
.rfl{font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:var(--txt4);margin-bottom:2px}
.rfv{font-family:monospace;font-size:12px}
.ppl{display:flex;flex-direction:column;gap:5px}
.pp{display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:var(--r);background:var(--bg);border:1px solid var(--border)}
.ppi{width:20px;height:20px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px}
.ppi.ok{background:var(--gd);color:var(--green)}.ppi.run{background:var(--acd);color:var(--acl);animation:pulse 1.2s infinite}
.ppi.err{background:var(--rd);color:var(--red)}.ppi.nd{background:var(--bg3);color:var(--txt4)}.ppi.wn{background:var(--ad);color:var(--amber)}
.ppn{font-size:12.5px;flex:1}
.ppp{font-family:monospace;font-size:10.5px;color:var(--txt3);margin-right:6px}
.ppd{font-family:monospace;font-size:11px;color:var(--txt4)}
.log{background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:13px;margin-top:10px}
.ll2{font-family:monospace;font-size:11.5px;line-height:1.85}
.ll2.i{color:var(--txt3)}.ll2.s{color:var(--green)}.ll2.w{color:var(--amber)}.ll2.e{color:var(--red)}

/* Plan */
.pls{display:flex;flex-direction:column;gap:5px}
.plr{display:flex;align-items:center;gap:10px;padding:8px 13px;border-radius:var(--r);background:var(--bg);border:1px solid var(--border)}
.pln2{width:22px;height:22px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:700;background:var(--bg3);color:var(--txt3)}
.pln2.gate{background:var(--ad);color:var(--amber)}.pln2.exec{background:var(--acd);color:var(--acl)}
.plsn{font-size:12.5px;flex:1}
.plb{font-size:10px;padding:2px 8px;border-radius:100px;font-weight:600}
.plb.gate{background:var(--ad);color:var(--amber)}.plb.n8n{background:var(--acd);color:var(--acl)}.plb.int{background:var(--bg3);color:var(--txt3)}
.plc{width:2px;height:6px;background:var(--border);margin-left:20px}

/* Risk */
.rf{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:var(--r4);background:var(--rd);margin-bottom:5px}
.rfc{font-family:monospace;font-size:10.5px;color:var(--red);opacity:.7}
.rft{font-size:12px;color:var(--red)}

/* Artifacts */
.ar{display:flex;align-items:center;gap:12px;padding:11px 14px;border:1px solid var(--border);border-radius:var(--r);background:var(--bg);transition:border-color .15s}
.ar:hover{border-color:var(--border2)}

/* Clarify box */
.clb{background:var(--bg);border:1px solid rgba(251,191,36,.2);border-radius:var(--rl);padding:16px;margin-top:14px}
.clbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--amber);margin-bottom:12px;display:flex;align-items:center;gap:6px}
.clr{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.clf{font-family:monospace;font-size:12px;color:var(--amber);width:160px;flex-shrink:0}
.cli{flex:1;background:var(--bg1);border:1px solid var(--border2);border-radius:var(--r4);color:var(--txt);padding:7px 11px;font-family:'Plus Jakarta Sans',sans-serif;font-size:12.5px;outline:none;transition:border-color .15s}
.cli:focus{border-color:var(--amber)}

/* Tasks list */
.tl-hdr{display:grid;grid-template-columns:1fr 140px 90px 120px 120px;gap:12px;padding:10px 18px}
.tl-row{display:grid;grid-template-columns:1fr 140px 90px 120px 120px;gap:12px;padding:13px 18px;cursor:pointer;transition:background .13s;align-items:center;border-top:1px solid var(--border)}
.tl-row:hover{background:var(--bg2)}
.tl-ch{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--txt4)}

/* Templates */
.tmpl-row{display:grid;grid-template-columns:1fr 120px 80px 80px 130px auto;gap:12px;align-items:center;padding:14px 18px;border-top:1px solid var(--border);transition:background .13s}
.tmpl-row:hover{background:var(--bg2)}

/* Workers */
.wg{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.wc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rx);padding:20px;transition:all .2s}
.wc:hover{border-color:var(--border2)}
.wc.act{border-color:var(--accent);box-shadow:0 0 0 1px var(--acd)}
.wt{font-family:'Bricolage Grotesque',sans-serif;font-size:15px;font-weight:600;margin-bottom:2px}
.wd{font-size:11.5px;color:var(--txt3);margin-bottom:14px}
.ws2{margin-bottom:12px}
.ws2l{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--txt4);margin-bottom:6px}
.wtag{display:inline-block;padding:2px 9px;border-radius:100px;font-size:11px;background:var(--bg3);color:var(--txt2);border:1px solid var(--border);margin:2px}
.wtag.res{background:var(--rd);color:var(--red);border-color:rgba(248,113,113,.2)}
.wtag.alw{background:var(--acd);color:var(--acl);border-color:rgba(99,102,241,.2)}

/* Audit */
.au-row{display:grid;grid-template-columns:155px 170px 100px 1fr;gap:12px;padding:11px 18px;font-size:12px;border-top:1px solid var(--border);align-items:center;transition:background .13s}
.au-row:hover{background:var(--bg2)}

/* Dashboard */
.sg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px}
.sc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:18px;transition:all .2s}
.sc:hover{transform:translateY(-1px);border-color:var(--border2)}
.sv{font-family:'Bricolage Grotesque',sans-serif;font-size:30px;font-weight:300}
.sl2{font-size:12px;color:var(--txt2);margin-top:4px}
.sd2{font-size:11px;color:var(--green);margin-top:2px}
.bc{display:flex;align-items:flex-end;gap:3px;height:64px}
.bb{flex:1;border-radius:3px 3px 0 0;min-height:4px;transition:all .4s;cursor:pointer}
.bb:hover{filter:brightness(1.3)}
.aq-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}
.aqc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:14px 16px}
.aqv{font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:300}
.aql{font-size:12px;color:var(--txt2);margin-top:3px}
.aqs{font-size:10.5px;color:var(--txt4);margin-top:1px}

/* Prompts */
.pf{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
.pfp{padding:5px 13px;border-radius:100px;font-size:12px;border:1px solid var(--border);color:var(--txt2);background:transparent;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;transition:all .15s}
.pfp:hover{border-color:var(--border2);color:var(--txt)}
.pfp.on{background:var(--acd);border-color:var(--accent);color:var(--acl)}
.pc{background:var(--bg1);border:1px solid var(--border);border-radius:var(--rl);padding:16px 18px;margin-bottom:8px;cursor:pointer;transition:all .17s}
.pc:hover{border-color:var(--border2);background:var(--bg2)}
.pc.open{border-color:rgba(99,102,241,.3)}
.chip{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:100px;font-size:11px;font-weight:500;border:1px solid var(--border);background:var(--bg2);color:var(--txt2)}

/* Form */
.fl{font-size:12px;font-weight:600;color:var(--txt2);margin-bottom:6px;display:block}
.fi{width:100%;background:var(--bg1);border:1px solid var(--border2);border-radius:var(--r);color:var(--txt);padding:10px 13px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s}
.fi:focus{border-color:var(--accent);box-shadow:0 0 0 2px rgba(99,102,241,.1)}
select.fi option{background:var(--bg1)}
.fg{margin-bottom:16px}
textarea.fi{resize:vertical;min-height:110px}

/* Modal */
.moverlay{position:fixed;inset:0;z-index:500;background:rgba(12,12,18,.75);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;animation:fadeIn .2s}
.modal{background:var(--bg1);border:1px solid var(--border2);border-radius:var(--rx);width:460px;max-width:calc(100vw - 40px);box-shadow:var(--shl);animation:scaleIn .22s cubic-bezier(.34,1.56,.64,1)}
.mhd{padding:18px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.mbd{padding:20px}
.mft{padding:14px 20px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end}

/* Notices */
.ntc{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:10px 13px;font-size:12px;color:var(--txt2);line-height:1.55}
.ntc.ac{border-color:rgba(99,102,241,.3);border-left:3px solid var(--accent)}
.ntc.am{border-color:rgba(251,191,36,.3);border-left:3px solid var(--amber)}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
.div{border:none;border-top:1px solid var(--border);margin:16px 0}

/* Command modal overlay */
.cmdov{position:fixed;inset:0;z-index:400;background:rgba(12,12,18,.8);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;animation:fadeIn .18s}

@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes scaleIn{from{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes spin{to{transform:rotate(360deg)}}
.spin{display:inline-block;animation:spin .8s linear infinite}
`;


/* ─── MOCK DATA ──────────────────────────────────────────────────────────────── */
const MOCK_TASKS = [
  { id:"TSK-2841", title:"Generate expense summary — February 2026", status:"awaiting_approval", risk:"medium", domain:"Finance", template:"FIN_EXPENSE_SUMMARY", templateVersion:"v1.2", createdBy:"M. Chen", workspace:"corp-finance", createdAt:"2026-02-19T08:12:00Z", confidence:0.97, aiStatus:"ok", promptId:"EXT_FIN_001", missingFields:[], riskFlags:["pii_suspected"], extractedInputs:{date_range_start:"2026-02-01",date_range_end:"2026-02-28",receipt_ids:["RCP-881","RCP-882"],output_format:"pdf"} },
  { id:"TSK-2840", title:"Create support ticket — API gateway 5xx spike", status:"completed", risk:"medium", domain:"Technical Operations", template:"OPS_CREATE_TICKET", templateVersion:"v2.1", createdBy:"A. Patel", workspace:"engineering", createdAt:"2026-02-19T07:44:00Z", confidence:0.94, aiStatus:"ok", promptId:"EXT_OPS_001", missingFields:[], riskFlags:["high_impact_system"], extractedInputs:{summary:"API gateway 5xx on /orders",severity:"high",system:"api-gateway-prod"} },
  { id:"TSK-2839", title:"Draft outreach email — Q1 renewal campaign", status:"needs_clarification", risk:"high", domain:"Sales & Marketing", template:"SM_DRAFT_OUTREACH", templateVersion:"v1.0", createdBy:"L. Torres", workspace:"revenue-ops", createdAt:"2026-02-19T07:30:00Z", confidence:0.61, aiStatus:"needs_clarification", promptId:"DRF_SM_001", missingFields:["recipient_name","company_name"], riskFlags:["external_domain","bulk_operation"], extractedInputs:null },
  { id:"TSK-2838", title:"Query shipment status — TRK-884821", status:"completed", risk:"low", domain:"Logistics", template:"LOG_SHIPMENT_STATUS", templateVersion:"v1.0", createdBy:"R. Okonkwo", workspace:"supply-chain", createdAt:"2026-02-18T16:55:00Z", confidence:0.99, aiStatus:"ok", promptId:"EXT_LOG_001", missingFields:[], riskFlags:[], extractedInputs:{tracking_number:"TRK-884821",carrier:"DHL"} },
  { id:"TSK-2837", title:"Summarise pull request #1482 — auth refactor", status:"failed", risk:"medium", domain:"Developer", template:"DEV_PR_SUMMARY", templateVersion:"v1.1", createdBy:"S. Kim", workspace:"engineering", createdAt:"2026-02-18T15:20:00Z", confidence:0.88, aiStatus:"ok", promptId:"SUM_DEV_001", missingFields:[], riskFlags:["high_impact_system"], extractedInputs:{pr_title:"Refactor auth middleware to JWT",diff:"48 files changed"} },
];
const MOCK_APPROVALS = [
  { id:"APR-441", taskId:"TSK-2841", action:"Generate and distribute expense summary report for February 2026", template:"FIN_EXPENSE_SUMMARY v1.2", extractedInputs:{date_range_start:"2026-02-01",date_range_end:"2026-02-28",receipt_ids:["RCP-881","RCP-882","RCP-890"],output_format:"pdf"}, riskFlags:["pii_suspected"], requestedBy:"M. Chen", requestedAt:"2026-02-19T08:12:00Z", confidence:0.97, promptId:"EXT_FIN_001" },
  { id:"APR-440", taskId:"TSK-2836", action:"Draft and queue outreach email to 3 renewal prospects", template:"SM_DRAFT_OUTREACH v1.0", extractedInputs:{recipient_segment:"Q1-renewals",tone:"professional",product_focus:"Enterprise Plan"}, riskFlags:["external_domain","bulk_operation"], requestedBy:"D. Walsh", requestedAt:"2026-02-19T06:30:00Z", confidence:0.82, promptId:"DRF_SM_001" },
];
const MOCK_TEMPLATES = [
  { id:"FIN_EXPENSE_SUMMARY",  name:"Expense Summary Generator",      domain:"Finance",              risk:"medium", version:"v1.2", versions:3, policy:"Single approver",   description:"Summarises receipts into a structured expense report" },
  { id:"FIN_INVOICE_DRAFT",    name:"Invoice Draft Generator",         domain:"Finance",              risk:"medium", version:"v1.0", versions:1, policy:"Single approver",   description:"Drafts invoice from client details — no payment execution" },
  { id:"FIN_BUDGET_VARIANCE",  name:"Monthly Budget Variance Summary", domain:"Finance",              risk:"low",    version:"v1.1", versions:2, policy:"Auto-approve",      description:"Generates variance analysis from spreadsheet data" },
  { id:"OPS_INCIDENT_SUMMARY", name:"Incident Summary Generator",      domain:"Technical Operations", risk:"low",    version:"v2.0", versions:5, policy:"Auto-approve",      description:"Summarises monitoring logs into structured incident report" },
  { id:"OPS_CREATE_TICKET",    name:"Create Support Ticket",           domain:"Technical Operations", risk:"medium", version:"v2.1", versions:8, policy:"Auto-approve",      description:"Creates Jira/ServiceNow ticket — status changes need approval" },
  { id:"OPS_HEALTH_REPORT",    name:"Weekly System Health Report",     domain:"Technical Operations", risk:"low",    version:"v1.3", versions:4, policy:"Auto-approve",      description:"Compiles monitoring metrics into email summary" },
  { id:"SM_LEAD_CAPTURE",      name:"Lead Capture → CRM Entry",        domain:"Sales & Marketing",    risk:"medium", version:"v3.1", versions:9, policy:"Approval required", description:"Captures lead data and creates CRM entry" },
  { id:"SM_CAMPAIGN_SUMMARY",  name:"Campaign Performance Summary",    domain:"Sales & Marketing",    risk:"low",    version:"v1.4", versions:5, policy:"Auto-approve",      description:"Aggregates campaign analytics into performance report" },
  { id:"SM_DRAFT_OUTREACH",    name:"Draft Outreach Email",            domain:"Sales & Marketing",    risk:"high",   version:"v1.0", versions:1, policy:"Approval required", description:"Drafts outreach email — external send requires approval" },
  { id:"LOG_SHIPMENT_STATUS",  name:"Shipment Status Query",           domain:"Logistics",            risk:"low",    version:"v1.0", versions:2, policy:"Auto-approve",      description:"Queries logistics API for shipment status" },
  { id:"LOG_LOW_STOCK",        name:"Inventory Low-Stock Alert",       domain:"Logistics",            risk:"low",    version:"v1.1", versions:3, policy:"Auto-approve",      description:"Triggers low-stock alerts based on threshold rules" },
  { id:"DEV_PR_SUMMARY",       name:"Pull Request Summary",            domain:"Developer",            risk:"low",    version:"v1.1", versions:4, policy:"Auto-approve",      description:"Generates structured PR summary from diff" },
  { id:"DEV_DEPLOY_CHECKLIST", name:"Deployment Checklist Generator",  domain:"Developer",            risk:"medium", version:"v1.0", versions:2, policy:"Approval required", description:"Generates deployment checklist with risk gates" },
  { id:"DEV_CICD_STATUS",      name:"CI/CD Status Report",             domain:"Developer",            risk:"low",    version:"v1.2", versions:3, policy:"Auto-approve",      description:"Retrieves CI/CD pipeline status and generates summary" },
];
const MOCK_AUDIT = [
  { ts:"2026-02-19T08:14:22Z", action:"APPROVAL_REQUESTED", actor:"system",        taskId:"TSK-2841", detail:"Escalated to approval queue · APR-441 created" },
  { ts:"2026-02-19T08:12:02Z", action:"SCHEMA_VALIDATED",   actor:"EXT_FIN_001",   taskId:"TSK-2841", detail:"4/4 fields resolved · confidence 0.97" },
  { ts:"2026-02-19T08:12:01Z", action:"TEMPLATE_CLASSIFIED",actor:"CLS_GLOBAL_001",taskId:"TSK-2841", detail:"FIN_EXPENSE_SUMMARY v1.2 · confidence 0.97" },
  { ts:"2026-02-19T08:12:00Z", action:"TASK_CREATED",       actor:"m.chen@corp",   taskId:"TSK-2841", detail:"Workspace: corp-finance · 60 words" },
  { ts:"2026-02-19T07:52:10Z", action:"TASK_COMPLETED",     actor:"n8n-runner",    taskId:"TSK-2840", detail:"Run RUN-8820 succeeded in 142s" },
  { ts:"2026-02-19T07:44:00Z", action:"TASK_CREATED",       actor:"a.patel@eng",   taskId:"TSK-2840", detail:"Workspace: engineering" },
  { ts:"2026-02-19T07:31:02Z", action:"NEEDS_CLARIFICATION",actor:"CLS_GLOBAL_001",taskId:"TSK-2839", detail:"Missing: recipient_name, company_name" },
  { ts:"2026-02-19T07:30:00Z", action:"TASK_CREATED",       actor:"l.torres@rev",  taskId:"TSK-2839", detail:"Workspace: revenue-ops" },
];
const RISK_FLAG_INFO = {
  pii_suspected:      { label:"PII data suspected in scope",          color:"var(--red)"   },
  high_impact_system: { label:"High-impact system targeted",           color:"var(--amber)" },
  external_domain:    { label:"External recipient or domain",          color:"var(--amber)" },
  bulk_operation:     { label:"Bulk action — disabled in MVP",         color:"var(--red)"   },
};
const AI_MODELS = [
  { id:"claude-sonnet-4-6", name:"Claude Sonnet 4.6", provider:"Anthropic", priceIn:0.003, priceOut:0.015, display:"$0.003", unit:"/1K tokens", tags:[{l:"Recommended",t:"spd"},{l:"Fast",t:"spd"},{l:"Governed",t:""}], recommended:true, desc:"Best balance of speed, accuracy and cost for governed task execution.", estTokens:4200 },
  { id:"claude-opus-4-6",   name:"Claude Opus 4.6",   provider:"Anthropic", priceIn:0.015, priceOut:0.075, display:"$0.015", unit:"/1K tokens", tags:[{l:"Highest accuracy",t:"pwr"},{l:"Complex tasks",t:"pwr"}],        recommended:false,desc:"Maximum reasoning depth for high-risk tasks requiring nuanced extraction.", estTokens:5800 },
  { id:"mistral-large",     name:"Mistral Large 2",   provider:"Mistral AI",priceIn:0.002, priceOut:0.006, display:"$0.002", unit:"/1K tokens", tags:[{l:"Economy",t:"eco"},{l:"EU hosted",t:""}],                        recommended:false,desc:"Cost-efficient, EU data-residency compliant. Ideal for low-risk templates.", estTokens:3900 },
  { id:"llama-3-1-70b",     name:"Llama 3.1 70B",     provider:"Meta · Self-hosted", priceIn:0.0005, priceOut:0.0008, display:"$0.0005", unit:"/1K tokens", tags:[{l:"Lowest cost",t:"eco"},{l:"On-prem eligible",t:""}], recommended:false,desc:"Open weights, on-premise eligible. Validate accuracy before production use.", estTokens:3600 },
];
const MVP_TASKS = [
  {d:"Finance",    c:"var(--green)",  t:"Generate expense summary from receipts",  id:"FIN_EXPENSE_SUMMARY", a:"Single approver"},
  {d:"Finance",    c:"var(--green)",  t:"Draft invoice for client engagement",     id:"FIN_INVOICE_DRAFT",   a:"Single approver"},
  {d:"Finance",    c:"var(--green)",  t:"Monthly budget variance summary",         id:"FIN_BUDGET_VARIANCE", a:"Auto-approve"},
  {d:"Tech Ops",   c:"var(--sky)",    t:"Incident summary from monitoring logs",   id:"OPS_INCIDENT_SUMMARY",a:"Auto-approve"},
  {d:"Tech Ops",   c:"var(--sky)",    t:"Create support ticket with severity",     id:"OPS_CREATE_TICKET",   a:"Auto-approve"},
  {d:"Tech Ops",   c:"var(--sky)",    t:"Weekly system health report",             id:"OPS_HEALTH_REPORT",   a:"Auto-approve"},
  {d:"Sales",      c:"var(--indigo)", t:"Capture lead and create CRM entry",       id:"SM_LEAD_CAPTURE",     a:"Approval required"},
  {d:"Sales",      c:"var(--indigo)", t:"Campaign performance summary",            id:"SM_CAMPAIGN_SUMMARY", a:"Auto-approve"},
  {d:"Sales",      c:"var(--indigo)", t:"Draft outreach email for review",         id:"SM_DRAFT_OUTREACH",   a:"Approval required"},
  {d:"Logistics",  c:"var(--amber)",  t:"Query shipment status by reference",      id:"LOG_SHIPMENT_STATUS", a:"Auto-approve"},
  {d:"Logistics",  c:"var(--amber)",  t:"Trigger low-stock inventory alert",       id:"LOG_LOW_STOCK",       a:"Auto-approve"},
  {d:"Logistics",  c:"var(--amber)",  t:"Draft vendor communication for approval", id:"LOG_VENDOR_COMM",     a:"Approval required"},
  {d:"Developer",  c:"var(--txt2)",   t:"Summarise pull request changes",          id:"DEV_PR_SUMMARY",      a:"Auto-approve"},
  {d:"Developer",  c:"var(--txt2)",   t:"Generate deployment checklist",           id:"DEV_DEPLOY_CHECKLIST",a:"Approval required"},
  {d:"Developer",  c:"var(--txt2)",   t:"CI/CD pipeline status report",            id:"DEV_CICD_STATUS",     a:"Auto-approve"},
];

/* ─── UTILS ──────────────────────────────────────────────────────────────────── */
const SDOT={created:"#55556e",interpreting:"#a5b4fc",needs_clarification:"#fbbf24",awaiting_approval:"#fbbf24",running:"#6366f1",completed:"#34d399",failed:"#f87171",cancelled:"#3a3a52"};
const SCLS={created:"s-created",interpreting:"s-interpreting",needs_clarification:"s-clarifying",awaiting_approval:"s-awaiting",running:"s-running",completed:"s-completed",failed:"s-failed",cancelled:"s-cancelled"};
const RCLS={low:"r-low",medium:"r-medium",high:"r-high"};
const LC_STEPS=["created","interpreting","planned","awaiting_approval","running","completed"];
const LC_LABELS=["Intake","Interpret","Plan","Review","Execute","Done"];
const DOMAINS=["Finance","Technical Operations","Sales & Marketing","Logistics","Developer"];
function fmtTs(iso){if(!iso)return"—";return new Date(iso).toISOString().replace("T"," ").slice(0,16)+" UTC";}
function fmtSh(iso){if(!iso)return"—";const d=new Date(iso);return d.toLocaleDateString("en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"});}
function StatusBadge({status}){return <span className={`badge ${SCLS[status]||"s-created"}`}><span className="bdot" style={{background:SDOT[status]}}/>{status?.replace(/_/g," ")}</span>;}
function RiskBadge({risk}){return <span className={`badge ${RCLS[risk]||"r-low"}`}>{risk} risk</span>;}
function RoleBadge({role}){return <span className={`badge role-${role}`}>{role}</span>;}
function JsonViewer({data}){
  const lines=JSON.stringify(data,null,2).split("\n");
  return(<div className="jb">{lines.map((l,i)=><div key={i} dangerouslySetInnerHTML={{__html:l.replace(/"([^"]+)":/g,'<span class="jk">"$1"</span>:').replace(/: "([^"]*)"/g,': <span class="jv">"$1"</span>').replace(/: (\d+\.?\d*)/g,': <span class="jn">$1</span>').replace(/: (true|false)/g,': <span class="jbo">$1</span>')}}/>)}</div>);
}
function LifecycleBar({status}){
  const idx=status==="needs_clarification"?1:LC_STEPS.indexOf(status);
  const pct=Math.max(0,Math.min(100,(idx/(LC_STEPS.length-1))*100));
  return(<div><div className="lc-trk"><div className="lc-fill" style={{width:`${pct}%`}}/></div><div className="lc-nodes">{LC_LABELS.map((l,i)=><div key={l} className={`lc-n${i<idx?" done":i===idx?" active":""}`}>{l}</div>)}</div></div>);
}

/* ─── CLASSIFY PROMPT ────────────────────────────────────────────────────────── */
function classifyPrompt(prompt){
  const p=prompt.toLowerCase();
  if(p.includes("expense")||p.includes("receipt")) return{template:"FIN_EXPENSE_SUMMARY",version:"v1.2",domain:"Finance",confidence:0.974,risk:"medium",taskTitle:"Generate expense summary report",promptId:"EXT_FIN_001",riskFlags:["pii_suspected"],approvalRequired:true};
  if(p.includes("invoice")||p.includes("billing")) return{template:"FIN_INVOICE_DRAFT",version:"v1.0",domain:"Finance",confidence:0.931,risk:"medium",taskTitle:"Draft invoice from client details",promptId:"EXT_FIN_001",riskFlags:["pii_suspected"],approvalRequired:true};
  if(p.includes("budget")||p.includes("variance")||p.includes("revenue")||p.includes("q3")||p.includes("cfo")) return{template:"FIN_BUDGET_VARIANCE",version:"v1.1",domain:"Finance",confidence:0.918,risk:"low",taskTitle:"Generate monthly budget variance summary",promptId:"EXT_FIN_001",riskFlags:[],approvalRequired:false};
  if(p.includes("incident")||p.includes("outage")||p.includes("5xx")||p.includes("alert")) return{template:"OPS_INCIDENT_SUMMARY",version:"v2.0",domain:"Technical Operations",confidence:0.962,risk:"low",taskTitle:"Generate incident summary from logs",promptId:"EXT_OPS_001",riskFlags:["high_impact_system"],approvalRequired:false};
  if(p.includes("ticket")||p.includes("jira")||p.includes("issue")||p.includes("bug")) return{template:"OPS_CREATE_TICKET",version:"v2.1",domain:"Technical Operations",confidence:0.941,risk:"medium",taskTitle:"Create support ticket with severity",promptId:"EXT_OPS_001",riskFlags:["high_impact_system"],approvalRequired:false};
  if(p.includes("health")||p.includes("weekly")||p.includes("monitoring")) return{template:"OPS_HEALTH_REPORT",version:"v1.3",domain:"Technical Operations",confidence:0.890,risk:"low",taskTitle:"Weekly system health report",promptId:"EXT_OPS_001",riskFlags:[],approvalRequired:false};
  if(p.includes("deploy")||p.includes("hotfix")||p.includes("rollback")) return{template:"OPS_CREATE_TICKET",version:"v2.1",domain:"Technical Operations",confidence:0.874,risk:"high",taskTitle:"Create deployment incident ticket",promptId:"EXT_OPS_001",riskFlags:["high_impact_system"],approvalRequired:true};
  if(p.includes("lead")||p.includes("crm")||p.includes("salesforce")) return{template:"SM_LEAD_CAPTURE",version:"v3.1",domain:"Sales & Marketing",confidence:0.918,risk:"medium",taskTitle:"Capture lead and create CRM entry",promptId:"DRF_SM_001",riskFlags:["pii_suspected"],approvalRequired:true};
  if(p.includes("campaign")||p.includes("analytics")||p.includes("marketing")) return{template:"SM_CAMPAIGN_SUMMARY",version:"v1.4",domain:"Sales & Marketing",confidence:0.885,risk:"low",taskTitle:"Campaign performance summary",promptId:"DRF_SM_001",riskFlags:[],approvalRequired:false};
  if(p.includes("outreach")||p.includes("email")||p.includes("draft")||p.includes("prospect")) return{template:"SM_DRAFT_OUTREACH",version:"v1.0",domain:"Sales & Marketing",confidence:0.843,risk:"high",taskTitle:"Draft outreach email for approval",promptId:"DRF_SM_001",riskFlags:["external_domain","bulk_operation"],approvalRequired:true};
  if(p.includes("shipment")||p.includes("tracking")||p.includes("dhl")||p.includes("carrier")) return{template:"LOG_SHIPMENT_STATUS",version:"v1.0",domain:"Logistics",confidence:0.988,risk:"low",taskTitle:"Query shipment status by tracking number",promptId:"EXT_LOG_001",riskFlags:[],approvalRequired:false};
  if(p.includes("stock")||p.includes("inventory")||p.includes("warehouse")) return{template:"LOG_LOW_STOCK",version:"v1.1",domain:"Logistics",confidence:0.952,risk:"low",taskTitle:"Trigger inventory low-stock alert",promptId:"EXT_LOG_001",riskFlags:[],approvalRequired:false};
  if(p.includes("vendor")||p.includes("supplier")||p.includes("logistics")) return{template:"LOG_VENDOR_COMM",version:"v1.0",domain:"Logistics",confidence:0.883,risk:"high",taskTitle:"Draft vendor communication for approval",promptId:"EXT_LOG_001",riskFlags:["external_domain"],approvalRequired:true};
  if(p.includes("pull request")||p.includes("pr ")||p.includes("diff")||p.includes("merge")) return{template:"DEV_PR_SUMMARY",version:"v1.1",domain:"Developer",confidence:0.966,risk:"low",taskTitle:"Summarise pull request changes",promptId:"SUM_DEV_001",riskFlags:[],approvalRequired:false};
  if(p.includes("checklist")||p.includes("release")||p.includes("pre-deploy")) return{template:"DEV_DEPLOY_CHECKLIST",version:"v1.0",domain:"Developer",confidence:0.921,risk:"medium",taskTitle:"Generate deployment checklist",promptId:"SUM_DEV_001",riskFlags:["high_impact_system"],approvalRequired:true};
  if(p.includes("ci")||p.includes("pipeline")||p.includes("build")||p.includes("cve")) return{template:"DEV_CICD_STATUS",version:"v1.2",domain:"Developer",confidence:0.904,risk:"low",taskTitle:"CI/CD pipeline status report",promptId:"SUM_DEV_001",riskFlags:[],approvalRequired:false};
  return{template:"gen.unclassified",version:"v1.0",domain:"General",confidence:0.55,risk:"low",taskTitle:prompt.slice(0,60),promptId:"CLS_GLOBAL_001",riskFlags:[],approvalRequired:false};
}


/* ─── TOP NAV ────────────────────────────────────────────────────────────────── */
function TopNav({role,workspace}){
  return(
    <nav className="tnav">
      <div className="brand"><div className="brand-mk">VW</div><span>Virtual Worker</span></div>
      <div className="ws"><div className="wsdot"/><span>{workspace}</span><span style={{color:"var(--txt4)",fontSize:10}}>▾</span></div>
      <div className="nr">
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--txt3)"}}><div className="wsdot"/><span>All systems nominal</span></div>
        <button className="ibtn" title="Notifications">🔔</button>
        <RoleBadge role={role}/>
        <div className="av">MC</div>
      </div>
    </nav>
  );
}

/* ─── SIDEBAR ────────────────────────────────────────────────────────────────── */
const NAV=[
  {key:"dashboard",icon:"◈",label:"Dashboard"},
  {key:"tasks",icon:"☰",label:"Tasks"},
  {key:"approvals",icon:"◉",label:"Approvals",badge:2},
  {sep:true},
  {key:"templates",icon:"◻",label:"Templates"},
  {key:"workers",icon:"⬡",label:"Worker Profiles"},
  {key:"prompts",icon:"⌖",label:"Prompt Library"},
  {sep:true,key:"sep2"},
  {key:"audit",icon:"◑",label:"Audit Log"},
  {key:"exec-config",icon:"⚙",label:"Run Config"},
];
function Sidebar({page,setPage,collapsed,setCollapsed,onNewTask}){
  return(
    <aside className={`sb${collapsed?" col":""}`}>
      <div className="sb-inner">
        <div className="nt-btn" onClick={onNewTask}>
          <span style={{fontSize:16,flexShrink:0}}>＋</span>
          {!collapsed&&<span>New Task</span>}
        </div>
        {NAV.map((n,i)=>{
          if(n.sep) return !collapsed?<div key={n.key||i} style={{height:1,background:"var(--border)",margin:"6px 0"}}/>:null;
          return(
            <div key={n.key} className={`nb${page===n.key?" on":""}`} onClick={()=>setPage(n.key)}>
              <span className="ni">{n.icon}</span>
              {!collapsed&&<span>{n.label}</span>}
              {!collapsed&&n.badge&&<span className="nbadge">{n.badge}</span>}
            </div>
          );
        })}
      </div>
      <div className="sb-ft">
        <button className="col-btn" onClick={()=>setCollapsed(!collapsed)}>{collapsed?"→":"←"}</button>
      </div>
    </aside>
  );
}

/* ─── LANDING ────────────────────────────────────────────────────────────────── */
const LANDING_SUGG=[
  {title:"Generate expense summary from receipts",sub:"Finance · Medium risk",domain:"Finance",prompt:"Generate an expense summary report for February 2026 from the uploaded receipt files. Output: PDF."},
  {title:"Create ticket for API 5xx spike",sub:"Tech Ops · Auto-approve",domain:"Technical Operations",prompt:"Create a high-severity Jira ticket for the API gateway 5xx errors on /orders since 07:30 UTC. System: api-gateway-prod."},
  {title:"Draft outreach email for Q1 renewals",sub:"Sales · Approval required",domain:"Sales & Marketing",prompt:"Draft a professional outreach email for Q1 renewal prospects targeting the enterprise plan. Tone: professional."},
  {title:"Check shipment TRK-884821 status",sub:"Logistics · Auto-approve",domain:"Logistics",prompt:"Check the current status of shipment TRK-884821 via DHL and return the delivery ETA and last scan location."},
];
function LandingPage({onSubmit,embedded=false}){
  const[text,setText]=useState("");
  const[domain,setDomain]=useState("");
  const[out,setOut]=useState(false);
  const ref=useRef(null);
  const submit=()=>{
    if(!text.trim())return;
    if(!embedded){setOut(true);setTimeout(()=>onSubmit(text.trim()),380);}
    else onSubmit(text.trim());
  };
  const pick=s=>{setText(s.prompt);setDomain(s.domain);ref.current?.focus();};
  return(
    <div className={`landing${out?" out":""}`} style={embedded?{position:"static",background:"transparent",transform:"none",animation:"none"}:{}}>
      {!embedded&&(
        <div className="ll">
          <div className="ll-mk">VW</div>
          <div className="ll-t df">Virtual Worker Platform</div>
          <div className="ll-s">Governed AI Task Execution · corp-finance workspace</div>
        </div>
      )}
      <div className="lbox" style={embedded?{width:"100%"}:{}}>
        <div className="lic">
          <textarea ref={ref} className="lta" placeholder="Describe a task — the platform will classify, route, and govern its execution..." value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();submit();}}} rows={embedded?4:3} autoFocus={embedded}/>
          <div className="lfb">
            <div className="dpills">{DOMAINS.map(d=><button key={d} className={`dp${domain===d?" on":""}`} onClick={()=>setDomain(domain===d?"":d)}>{d}</button>)}</div>
            <button className="sbtn" onClick={submit} disabled={!text.trim()} title="Submit (Enter)">↑</button>
          </div>
        </div>
        {!embedded&&<div className="lhints"><span><kbd>Enter</kbd> to submit</span><span><kbd>Shift</kbd>+<kbd>Enter</kbd> new line</span><span style={{marginLeft:"auto"}}>All executions are governed &amp; auditable</span></div>}
      </div>
      {!embedded&&(
        <div className="sug-sec">
          <div className="sug-label">Suggested tasks</div>
          <div className="sug-grid">
            {LANDING_SUGG.map((s,i)=>(
              <button key={i} className="sug-card" onClick={()=>pick(s)}>
                <div className="sug-dom" style={{color:"var(--acl)"}}>{s.domain}</div>
                <div className="sug-t">{s.title}</div>
                <div className="sug-m">{s.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── CLASSIFY OVERLAY ───────────────────────────────────────────────────────── */
function ClassifyOverlay({prompt,onComplete}){
  const result=classifyPrompt(prompt);
  const needsClarify=result.confidence<0.75;
  const[states,setStates]=useState(Array(6).fill("idle"));
  const[phase,setPhase]=useState("animating");
  const[ctaVis,setCtaVis]=useState(false);
  const[out,setOut]=useState(false);
  const[clarifyVals,setClarifyVals]=useState({});
  const[clarifyDone,setClarifyDone]=useState(false);
  const clarifyQs=needsClarify?[
    {field:"intent",q:"What should the platform do?",eg:"Generate a report, create a ticket"},
    {field:"domain",q:"Which business domain does this belong to?",eg:"Finance, Technical Operations"},
    {field:"output_format",q:"What output format do you need?",eg:"PDF, CSV, Jira ticket, email"},
  ]:[];
  const steps=[
    {mode:"Intake",label:"Natural language input received",done:`${prompt.split(" ").length} words · SYS_GLOBAL_001 applied`,cls:"blue",icon:"✓"},
    {mode:"Interpretation",label:"Template classification — CLS_GLOBAL_001",done:needsClarify?`status: needs_clarification · confidence ${(result.confidence*100).toFixed(0)}% — below threshold`:`selected: ${result.template} · confidence ${(result.confidence*100).toFixed(1)}%`,cls:needsClarify?"amber":"green",icon:needsClarify?"⚠":"✓"},
    {mode:"Interpretation",label:`Entity extraction — ${result.promptId}`,done:needsClarify?"missing fields detected · CLARIFY_GLOBAL_001 invoked":"schema validated · all required fields resolved",cls:needsClarify?"amber":"green",icon:needsClarify?"?":"✓"},
    {mode:"Interpretation",label:"JSON schema validation",done:"output shape enforced · additionalProperties: false",cls:"green",icon:"✓"},
    {mode:"Planning",label:"Execution plan — RISK_GLOBAL_001",done:`risk_flags: [${result.riskFlags?.join(", ")||"none"}] · ${result.risk} · ${result.approvalRequired?"approval gate required":"auto-approve"}`,cls:result.risk==="high"?"amber":"green",icon:result.risk==="high"?"⚠":"✓"},
    {mode:"Governance",label:result.approvalRequired?"Task queued — awaiting approver":"Task queued — auto-approved, routing to n8n",done:"TSK-2842 created · workspace: corp-finance",cls:"blue",icon:"✓"},
  ];
  const animate=(indices,delays,completes,cb)=>{
    indices.forEach((si,i)=>{
      setTimeout(()=>setStates(p=>{const n=[...p];n[si]="spin";return n;}),delays[i]);
      setTimeout(()=>setStates(p=>{const n=[...p];n[si]="ok";return n;}),completes[i]);
    });
    setTimeout(cb,completes[completes.length-1]+300);
  };
  useEffect(()=>{
    if(needsClarify){
      animate([0,1,2],[200,900,1700],[600,1300,2300],()=>setPhase("clarifying"));
    } else {
      animate([0,1,2,3,4,5],[200,900,1600,2300,3000,3700],[600,1300,2000,2700,3400,4100],()=>{
        setCtaVis(true);
        setTimeout(()=>{setOut(true);setTimeout(()=>onComplete(result),420);},700);
      });
    }
  },[]);
  useEffect(()=>{
    if(!clarifyDone)return;
    setPhase("resuming");
    animate([3,4,5],[200,900,1700],[600,1300,2400],()=>{
      setCtaVis(true);
      setTimeout(()=>{setOut(true);setTimeout(()=>onComplete(result),420);},700);
    });
  },[clarifyDone]);
  const allFilled=clarifyQs.every(q=>clarifyVals[q.field]?.trim());
  return(
    <div className={`classify${out?" out":""}`}>
      <div className="cl-panel">
        <div className="cl-echo">"{prompt}"</div>
        <div className="cl-steps">
          {steps.map((s,i)=>{
            const st=states[i];
            return(
              <div key={i} className={`cl-step${st!=="idle"?" show":""}`}>
                <div className={`si${st==="ok"&&s.cls==="amber"?" warn":st==="ok"?" ok":st==="spin"?" spin":" idle"}`}>
                  {st==="spin"?<span className="spin">◌</span>:st==="ok"?s.icon:"·"}
                </div>
                <div className="sb2">
                  <div className="sm">{s.mode}</div>
                  <div className="sl">{s.label}</div>
                  {st==="ok"&&<div className={`sd ${s.cls}`}>{s.done}</div>}
                  {st==="spin"&&<div className="sd blue">Processing...</div>}
                </div>
              </div>
            );
          })}
        </div>
        {phase==="clarifying"&&!clarifyDone&&(
          <div className="cl-clfy">
            <div className="cl-cbanner"><span>⚠</span><span>Confidence below threshold. Provide the missing details so I can route this task correctly.</span></div>
            <div style={{fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--amber)",marginBottom:12}}>CLARIFY_GLOBAL_001 — Missing Fields</div>
            {clarifyQs.map(q=>(
              <div className="cl-cf" key={q.field}>
                <div className="cl-cfn">{q.field}</div>
                <div className="cl-cq">{q.q}</div>
                <div className="cl-ce">e.g. {q.eg}</div>
                <input className="cl-ci" placeholder={q.eg} value={clarifyVals[q.field]||""} onChange={e=>setClarifyVals(p=>({...p,[q.field]:e.target.value}))}/>
              </div>
            ))}
            <div style={{display:"flex",gap:8,marginTop:12}}>
              <button className="btn btn-p btn-sm" disabled={!allFilled} onClick={()=>setClarifyDone(true)}>Submit — Resume Classification</button>
              <span style={{fontSize:11.5,color:"var(--txt3)",alignSelf:"center"}}>Re-routed through CLS_WITH_ROLE_001</span>
            </div>
          </div>
        )}
        {clarifyDone&&phase==="resuming"&&(
          <div style={{marginTop:12,padding:"9px 13px",background:"var(--gd)",borderRadius:"var(--r)",fontSize:12,color:"var(--green)",border:"1px solid rgba(52,211,153,.25)",animation:"fadeUp .3s"}}>✓ Answers received — resuming interpretation pipeline</div>
        )}
        <div className={`cl-cta${ctaVis?" show":""}`}>
          <span className="spin" style={{color:"var(--acl)",fontSize:16}}>◌</span>
          <span className="cl-cta-t">Task <span style={{fontFamily:"monospace",color:"var(--txt)",fontWeight:600}}>TSK-2842</span> created — opening execution config...</span>
        </div>
      </div>
    </div>
  );
}


/* ─── EXEC CONFIG ────────────────────────────────────────────────────────────── */
function ExecConfigPage({taskResult,onConfirm,onDashboard,embedded=false}){
  const[model,setModel]=useState("claude-sonnet-4-6");
  const[budget,setBudget]=useState("5.00");
  const[exiting,setExiting]=useState(false);
  const m=AI_MODELS.find(x=>x.id===model)||AI_MODELS[0];
  const inTok=m.estTokens,outTok=Math.round(m.estTokens*0.4);
  const cost=((inTok*m.priceIn)+(outTok*m.priceOut))/1000;
  const budg=parseFloat(budget)||0;
  const head=budg-cost;
  const pct=Math.min((cost/Math.max(budg,0.001))*100,100);
  const bc=head<0?"var(--red)":head<cost*0.2?"var(--amber)":"var(--green)";
  const confirm=()=>{if(head<0)return;setExiting(true);setTimeout(()=>onConfirm({model,budget:budg,estimatedCost:cost}),380);};
  return(
    <div className={`ec-page${exiting?" out":""}`} style={embedded?{position:"static",animation:"none",padding:"28px 32px",overflow:"visible"}:{}}>
      <div className="ec-inner">
        {!embedded&&<div className="ec-bc"><span>VWP</span><span style={{color:"var(--txt4)"}}>›</span><span>New Task</span><span style={{color:"var(--txt4)"}}>›</span><span className="ec-bca">Configure Execution</span></div>}
        {taskResult&&!embedded&&(
          <div className="ec-echo">
            <div>
              <div className="ec-et">{taskResult.taskTitle}</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <span style={{fontFamily:"monospace",fontSize:11.5,color:"var(--txt3)"}}>{taskResult.template} {taskResult.version}</span>
                <span style={{color:"var(--txt4)"}}>·</span>
                <RiskBadge risk={taskResult.risk}/>
                <StatusBadge status={taskResult.approvalRequired?"awaiting_approval":"running"}/>
              </div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:10,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",marginBottom:3}}>Confidence</div>
              <div style={{fontFamily:"monospace",fontSize:18,fontWeight:700,color:"var(--green)"}}>{(taskResult.confidence*100).toFixed(1)}%</div>
            </div>
          </div>
        )}
        <div className="ec-sec">
          <div className="sec-title">AI Model Selection</div>
          <div className="mg">
            {AI_MODELS.map(mx=>(
              <div key={mx.id} className={`mc${model===mx.id?" sel":""}`} onClick={()=>setModel(mx.id)}>
                {mx.recommended&&<div className="mc-rec">Recommended</div>}
                <div className="mc-n">{mx.name}</div>
                <div className="mc-p">{mx.provider}</div>
                <div className="mc-d">{mx.desc}</div>
                <div style={{display:"flex",alignItems:"baseline",gap:4}}><span className="mc-pr">{mx.display}</span><span className="mc-pu">{mx.unit}</span></div>
                <div className="mc-tags">{mx.tags.map(tg=><span key={tg.l} className={`mc-tag ${tg.t}`}>{tg.l}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ec-sec">
          <div className="sec-title">Execution Budget</div>
          <div className="br">
            <div className="bib">
              <div style={{display:"flex",alignItems:"baseline"}}><span className="bsym">$</span><input className="bamt" type="number" min="0" step="0.50" value={budget} onChange={e=>setBudget(e.target.value)}/></div>
              <div className="bhint">Maximum spend authorised for this run.<br/>Task won't execute if cost exceeds this limit.</div>
            </div>
            <div className="cc">
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt3)",marginBottom:10}}>Cost Estimate</div>
              {[["Model",m.name,false],["Input tokens (est.)",inTok.toLocaleString(),false],["Output tokens (est.)",outTok.toLocaleString(),false],["Estimated cost",`$${cost.toFixed(4)}`,"g"],["Budget remaining",head>=0?`$${head.toFixed(4)}`:`−$${Math.abs(head).toFixed(4)}`,head<0?"r":head<cost*0.2?"a":"g"]].map(([l,v,cls])=>(
                <div className="cr" key={l}><span className="cl2">{l}</span><span className={`cv${cls?" "+cls:""}`}>{v}</span></div>
              ))}
              <div className="bt"><div className="bf" style={{width:`${pct}%`,background:bc}}/></div>
              {head<0&&<div style={{marginTop:8,fontSize:12,color:"var(--red)"}}>⚠ Budget insufficient — increase limit to proceed.</div>}
            </div>
          </div>
        </div>
        <div className="ec-sec">
          <div className="sec-title">Suggested Tasks — MVP Template Library</div>
          <div className="ms-grid">
            {MVP_TASKS.slice(0,embedded?6:9).map((t,i)=>(
              <button key={i} className="ms" onClick={()=>onDashboard&&onDashboard("suggest")}>
                <div className="ms-d" style={{color:t.c}}>{t.d}</div>
                <div className="ms-t">{t.t}</div>
                <div className="ms-m">{t.id} · {t.a}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="ec-ft">
          <button className="btn btn-g" onClick={()=>onDashboard("dashboard")}>← Dashboard</button>
          {!embedded&&<button className="btn btn-p" onClick={confirm} disabled={head<0||!budget}>Confirm &amp; Execute →</button>}
          <div className="ec-nt">Budget &amp; model are recorded in the audit log. Execution won't proceed beyond your authorised limit.</div>
        </div>
      </div>
    </div>
  );
}

/* ─── TASK THREAD ────────────────────────────────────────────────────────────── */
function ApprovalCard({approval,role,onApprove,onReject}){
  const can=role==="admin"||role==="approver";
  return(
    <div className="apc">
      <div className="apt">
        <span style={{color:"var(--amber)",fontWeight:700,fontSize:12}}>◉ APPROVAL REQUIRED</span>
        <span style={{marginLeft:"auto",fontFamily:"monospace",fontSize:11,color:"var(--amber)"}}>{approval.id} · {fmtTs(approval.requestedAt)}</span>
      </div>
      <div className="apb">
        <div className="ntc am" style={{marginBottom:14}}>Review the extracted inputs and risk flags before approving. This action is immutably recorded in the audit log.</div>
        <div style={{fontSize:13.5,fontWeight:600,marginBottom:12}}>{approval.action}</div>
        <div className="g2" style={{gap:16,marginBottom:14}}>
          {[["Template",<span style={{fontFamily:"monospace",fontSize:12}}>{approval.template}</span>],["Requested By",approval.requestedBy],["Prompt ID",<span style={{fontFamily:"monospace",fontSize:11.5,color:"var(--txt2)"}}>{approval.promptId}</span>],["AI Confidence",<span style={{fontFamily:"monospace",color:approval.confidence>=0.85?"var(--green)":"var(--amber)"}}>{(approval.confidence*100).toFixed(1)}%</span>]]
            .map(([l,v])=>(
              <div key={l}>
                <div style={{fontSize:10,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:3}}>{l}</div>
                <div style={{fontSize:13}}>{v}</div>
              </div>
            ))}
        </div>
        <div style={{marginBottom:14}}>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:8}}>Extracted Inputs — Schema Validated</div>
          <JsonViewer data={approval.extractedInputs}/>
        </div>
        <div>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:8}}>Risk Flags — RISK_GLOBAL_001</div>
          {(approval.riskFlags||[]).length>0
            ? (approval.riskFlags||[]).map(f=>{const info=RISK_FLAG_INFO[f]||{label:f,color:"var(--txt2)"};return<div key={f} className="rf"><span className="rfc">{f}</span><span className="rft">{info.label}</span></div>;})
            : <div style={{fontSize:12,color:"var(--txt3)"}}>No risk flags identified.</div>
          }
        </div>
        {can&&<div className="apa"><button className="btn btn-ok" onClick={onApprove}>✓ Approve</button><button className="btn btn-d" onClick={onReject}>✕ Reject</button><span style={{marginLeft:"auto",fontSize:11.5,color:"var(--txt3)"}}>Approval action is immutably logged</span></div>}
        {!can&&<div style={{marginTop:14,fontSize:12,color:"var(--txt3)"}}>Approval actions require approver or admin role.</div>}
      </div>
    </div>
  );
}

function ExecutionPanel({task}){
  const[logs,setLogs]=useState(false);
  const isAw=task.status==="awaiting_approval",isFail=task.status==="failed",isCl=task.status==="needs_clarification";
  const steps=[
    {name:"Template classification",prompt:"CLS_GLOBAL_001",dur:"0.8s",st:"ok"},
    {name:"Entity extraction + schema check",prompt:task.promptId||"EXT_001",dur:"1.4s",st:isCl?"wn":"ok"},
    {name:"Policy evaluation + risk scoring",prompt:"RISK_GLOBAL_001",dur:"0.3s",st:isCl?"nd":"ok"},
    {name:"Approval gate",prompt:"governance",dur:"—",st:isAw?"run":isCl?"nd":"ok"},
    {name:"n8n workflow execution",prompt:"n8n-bridge",dur:isFail||isAw?"—":"88s",st:isFail?"err":isAw||isCl?"nd":"ok"},
    {name:"Output capture + artifact storage",prompt:"execution-orchestrator",dur:"—",st:isFail||isAw||isCl?"nd":"ok"},
    {name:"Audit event write",prompt:"audit-engine",dur:"—",st:isFail||isAw||isCl?"nd":"ok"},
  ];
  return(
    <div>
      <div className="rb">
        {[["Run ID","RUN-8821"],["Idempotency Key","a3f9-c2e1-8841"],["Attempt","#1"],["Started","2026-02-19 08:12 UTC"]].map(([l,v])=>(
          <div key={l}><div className="rfl">{l}</div><div className="rfv mono">{v}</div></div>
        ))}
        <div style={{marginLeft:"auto"}}><div className="rfl">Status</div><StatusBadge status={task.status}/></div>
      </div>
      <div className="ppl">
        {steps.map(s=>(
          <div className="pp" key={s.name}>
            <div className={`ppi ${s.st}`}>{s.st==="ok"?"✓":s.st==="run"?<span className="spin">◌</span>:s.st==="err"?"✕":s.st==="wn"?"?":"·"}</div>
            <span className="ppn" style={{color:s.st==="nd"?"var(--txt4)":"var(--txt)"}}>{s.name}</span>
            <span className="ppp">{s.prompt}</span>
            <span className="ppd">{s.dur}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:10}}>
        <button className="btn btn-g btn-sm" onClick={()=>setLogs(!logs)}>{logs?"▲ Hide logs":"▼ Expand logs"}</button>
        {logs&&(
          <div className="log">
            <div className="ll2 i">[08:12:00] Task {task.id} received · workspace: {task.workspace}</div>
            <div className="ll2 i">[08:12:00] CLS_GLOBAL_001 invoked · model: claude-sonnet-4-6</div>
            <div className="ll2 s">[08:12:01] Template: {task.template} {task.templateVersion} · confidence {task.confidence}</div>
            <div className="ll2 i">[08:12:01] {task.promptId} extraction invoked</div>
            {task.aiStatus==="needs_clarification"
              ? <div className="ll2 w">[08:12:02] Missing: {(task.missingFields||[]).join(", ")} · status: needs_clarification</div>
              : <div className="ll2 s">[08:12:02] Schema validation passed · all required fields resolved</div>}
            {(task.riskFlags||[]).length>0&&<div className="ll2 w">[08:12:02] RISK_GLOBAL_001: flags={task.riskFlags.join(",")} → approval gate</div>}
            {isFail&&<div className="ll2 e">[08:12:08] n8n error: connector timeout on GitHub API</div>}
          </div>
        )}
      </div>
    </div>
  );
}

function TaskThreadPage({task,role}){
  const[rejectModal,setRejectModal]=useState(false);
  const[rejectComment,setRejectComment]=useState("");
  const[clarifyVals,setClarifyVals]=useState({});
  const[clarifySent,setClarifySent]=useState(false);
  const approval=MOCK_APPROVALS.find(a=>a.taskId===task.id);
  return(
    <div className="page">
      <div className="th">
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10}}>
          <div><div className="tid mono">{task.id}</div><div className="th1">{task.title}</div></div>
          <div style={{display:"flex",gap:8,flexShrink:0}}><StatusBadge status={task.status}/><RiskBadge risk={task.risk}/></div>
        </div>
        <div className="mg2">
          {[["Template",<span className="mono" style={{fontSize:12}}>{task.template} <span style={{color:"var(--txt3)"}}>{task.templateVersion}</span></span>],["Domain",task.domain],["Created By",task.createdBy],["Workspace",<span className="mono" style={{fontSize:12}}>{task.workspace}</span>],["Created",<span className="mono" style={{fontSize:12}}>{fmtSh(task.createdAt)}</span>]].map(([l,v])=>(
            <div className="mi" key={l}><div className="ml">{l}</div><div className="mv">{v}</div></div>
          ))}
        </div>
        <LifecycleBar status={task.status}/>
      </div>
      <div className="tl">
        {/* User request */}
        <div className="tlc ur">
          <div className="tl-hd"><span className="tl-type">User Request</span><span className="tl-actor">{(task.createdBy||"user").toLowerCase().replace(" ",".")}@corp</span><span className="tl-ts">{fmtTs(task.createdAt)}</span></div>
          <p style={{fontSize:14,color:"var(--txt)",marginBottom:8,fontStyle:"italic"}}>"{task.title}"</p>
          <div style={{fontSize:12,color:"var(--txt3)",borderLeft:"2px solid var(--border)",paddingLeft:10}}>Task submitted via Natural Language Intake. System will classify, route, and govern execution automatically.</div>
        </div>
        {/* AI Classification */}
        <div className="tlc ac">
          <div className="tl-hd"><span className="tl-type">AI Classification — CLS_GLOBAL_001</span><span className="tl-actor">ai-gateway</span><span className="tl-ts">{fmtTs(new Date(new Date(task.createdAt).getTime()+1000).toISOString())}</span></div>
          <div className="g2" style={{gap:12,marginBottom:12}}>
            {[["selected_template_id",<span className="mono" style={{fontSize:12}}>{task.template} <span style={{color:"var(--txt3)"}}>{task.templateVersion}</span></span>],["status",<span className="mono" style={{fontSize:12,color:task.aiStatus==="ok"?"var(--green)":task.aiStatus==="needs_clarification"?"var(--amber)":"var(--red)"}}>{task.aiStatus||"ok"}</span>],["confidence",<span className="mono" style={{fontSize:14,fontWeight:700,color:(task.confidence||0)>=0.85?"var(--green)":"var(--amber)"}}>{((task.confidence||0)*100).toFixed(1)}%</span>],["prompt_id",<span className="mono" style={{fontSize:11.5,color:"var(--txt2)"}}>{task.promptId||"EXT_001"}</span>]].map(([l,v])=>(
              <div key={l}><div style={{fontSize:10,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:3}}>{l}</div><div>{v}</div></div>
            ))}
          </div>
          {(task.confidence||1)<0.75&&<div className="ntc am" style={{marginBottom:12}}>Confidence below 75% threshold — CLARIFY_GLOBAL_001 invoked.</div>}
          {task.extractedInputs&&<div><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:8}}>Extracted Inputs — Schema Validated</div><JsonViewer data={task.extractedInputs}/></div>}
        </div>
        {/* Clarification */}
        {task.aiStatus==="needs_clarification"&&(task.missingFields||[]).length>0&&(
          <div className="tlc ncl">
            <div className="tl-hd"><span className="tl-type" style={{color:"var(--amber)"}}>Clarification Required — CLARIFY_GLOBAL_001</span><span className="tl-actor">ai-gateway</span><span className="tl-ts">{fmtTs(new Date(new Date(task.createdAt).getTime()+2000).toISOString())}</span></div>
            <p style={{fontSize:13,color:"var(--txt2)",marginBottom:12}}>Required fields are missing. Please provide the following to proceed.</p>
            {(task.missingFields||[]).map((f,i)=>(
              <div key={i} style={{background:"var(--bg2)",borderRadius:"var(--r)",padding:"10px 13px",marginBottom:6,border:"1px solid var(--border)"}}>
                <div className="mono" style={{fontSize:11,color:"var(--amber)",marginBottom:3,fontWeight:700}}>{f}</div>
                <div style={{fontSize:12.5,color:"var(--txt2)"}}>Provide the <strong style={{color:"var(--txt)"}}>{f.replace(/_/g," ")}</strong> for this task.</div>
              </div>
            ))}
            {!clarifySent
              ? <div className="clb">
                  <div className="clbl">◉ Provide missing fields to resume</div>
                  {(task.missingFields||[]).map(f=>(
                    <div className="clr" key={f}>
                      <span className="clf">{f}</span>
                      <input className="cli" placeholder={`Enter ${f.replace(/_/g," ")}...`} value={clarifyVals[f]||""} onChange={e=>setClarifyVals(p=>({...p,[f]:e.target.value}))}/>
                    </div>
                  ))}
                  <div style={{display:"flex",gap:8,marginTop:12}}>
                    <button className="btn btn-p btn-sm" onClick={()=>setClarifySent(true)} disabled={(task.missingFields||[]).some(f=>!clarifyVals[f])}>Submit Clarification</button>
                    <span style={{fontSize:11.5,color:"var(--txt3)",alignSelf:"center"}}>Re-classified by CLS_GLOBAL_001</span>
                  </div>
                </div>
              : <div style={{marginTop:12,padding:"9px 13px",background:"var(--gd)",borderRadius:"var(--r)",fontSize:12,color:"var(--green)"}}>✓ Clarification submitted — task returned to interpretation queue</div>
            }
          </div>
        )}
        {/* Plan preview */}
        {task.aiStatus!=="needs_clarification"&&(
          <div className="tlc pln">
            <div className="tl-hd"><span className="tl-type" style={{color:"#a78bfa"}}>Execution Plan — Planning Mode</span><span className="tl-ts">{fmtTs(new Date(new Date(task.createdAt).getTime()+2500).toISOString())}</span></div>
            <div style={{fontSize:12.5,color:"var(--txt2)",marginBottom:12,lineHeight:1.6}}>Ordered steps for <span className="mono" style={{color:"var(--txt)"}}>{task.template}</span>. Approval checkpoints set by policy engine.</div>
            <div className="pls">
              {[
                {name:"Receive task + validate workspace scope",type:"int"},
                {name:`${task.promptId||"domain prompt"} extraction`,type:"int"},
                {name:"JSON schema validation against template spec",type:"int"},
                {name:"RISK_GLOBAL_001 — risk flag evaluation",type:"int"},
                ...(task.risk!=="low"||(task.riskFlags||[]).length>0?[{name:"Human-in-the-loop approval gate",type:"gate"}]:[]),
                {name:`n8n workflow trigger — ${task.template}`,type:"exec"},
                {name:"Output capture + artifact storage",type:"exec"},
                {name:"Audit event write + notification dispatch",type:"int"},
              ].map((s,i,arr)=>(
                <div key={i}>
                  <div className="plr">
                    <div className={`pln2${s.type==="gate"?" gate":s.type==="exec"?" exec":""}`}>{i+1}</div>
                    <span className="plsn" style={{color:s.type==="gate"?"var(--amber)":s.type==="exec"?"var(--acl)":"var(--txt2)"}}>{s.name}</span>
                    {s.type==="gate"&&<span className="plb gate">Approval Gate</span>}
                    {s.type==="exec"&&<span className="plb n8n">n8n</span>}
                    {s.type==="int"&&<span className="plb int">Internal</span>}
                  </div>
                  {i<arr.length-1&&<div className="plc"/>}
                </div>
              ))}
            </div>
            <div style={{marginTop:10,fontSize:12,color:"var(--txt4)",borderLeft:"2px solid var(--border)",paddingLeft:10}}>This plan is immutably logged. Deviations constitute a governance event.</div>
          </div>
        )}
        {/* Approval */}
        {approval&&(
          <div className="tlc apv">
            <div className="tl-hd"><span className="tl-type" style={{color:"var(--amber)"}}>Approval Gate</span><span className="tl-actor">system</span><span className="tl-ts">{fmtTs(approval.requestedAt)}</span></div>
            <ApprovalCard approval={approval} role={role} onApprove={()=>alert("Approved. Audit event written.")} onReject={()=>setRejectModal(true)}/>
          </div>
        )}
        {/* Execution */}
        <div className="tlc exc">
          <div className="tl-hd"><span className="tl-type" style={{color:"var(--green)"}}>Execution Status — n8n Pipeline</span><span className="tl-actor">n8n-runner</span><span className="tl-ts">{fmtTs(new Date(new Date(task.createdAt).getTime()+3000).toISOString())}</span></div>
          <ExecutionPanel task={task}/>
        </div>
      </div>
      {rejectModal&&(
        <div className="moverlay">
          <div className="modal">
            <div className="mhd"><span style={{fontFamily:"Bricolage Grotesque",fontWeight:600,fontSize:15}}>Reject — {approval?.id}</span><button className="btn btn-g btn-sm" onClick={()=>setRejectModal(false)}>✕</button></div>
            <div className="mbd">
              <div className="ntc am" style={{marginBottom:14}}>Rejection reason is required and will be immutably recorded in the audit log.</div>
              <label className="fl">Rejection Comment</label>
              <textarea className="fi" rows={4} placeholder="State the reason for rejection..." value={rejectComment} onChange={e=>setRejectComment(e.target.value)}/>
            </div>
            <div className="mft">
              <button className="btn btn-g" onClick={()=>setRejectModal(false)}>Cancel</button>
              <button className="btn btn-d" onClick={()=>{setRejectModal(false);alert("Rejection recorded.");}}>Confirm Rejection</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/* ─── TASKS PAGE ─────────────────────────────────────────────────────────────── */
function TasksPage({setPage,setActiveTask}){
  return(
    <div className="page">
      <div className="phd"><div className="ptitle df">Tasks</div><div className="psub">All task threads in current workspace scope</div></div>
      <div className="card">
        <div className="tl-hdr">
          {["Task","Template","Risk","Status","Created"].map(h=><div key={h} className="tl-ch">{h}</div>)}
        </div>
        {MOCK_TASKS.map(t=>(
          <div className="tl-row" key={t.id} onClick={()=>{setActiveTask(t);setPage("task-thread");}}>
            <div><div style={{fontWeight:600,fontSize:13,marginBottom:2}}>{t.title}</div><div className="mono" style={{fontSize:11,color:"var(--txt3)"}}>{t.id} · {t.createdBy}</div></div>
            <div className="mono" style={{fontSize:11.5,color:"var(--txt2)"}}>{t.template}</div>
            <div><RiskBadge risk={t.risk}/></div>
            <div><StatusBadge status={t.status}/></div>
            <div className="mono" style={{fontSize:11,color:"var(--txt3)"}}>{fmtSh(t.createdAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── APPROVALS PAGE ─────────────────────────────────────────────────────────── */
function ApprovalsPage({role}){
  return(
    <div className="page">
      <div className="phd"><div className="ptitle df">Approvals</div><div className="psub">{MOCK_APPROVALS.length} pending approval requests</div></div>
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {MOCK_APPROVALS.map(a=>(
          <div key={a.id}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span className="mono" style={{fontSize:11.5,color:"var(--txt3)"}}>{a.taskId}</span>
              <span style={{color:"var(--txt4)"}}>·</span>
              <span style={{fontSize:13,color:"var(--txt2)"}}>{a.action.slice(0,70)}...</span>
            </div>
            <ApprovalCard approval={a} role={role} onApprove={()=>alert("Approved.")} onReject={()=>alert("Reject modal would open.")}/>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TEMPLATES PAGE ─────────────────────────────────────────────────────────── */
function TemplatesPage({role}){
  const DC={"Finance":"var(--green)","Technical Operations":"var(--sky)","Sales & Marketing":"var(--indigo)","Logistics":"var(--amber)","Developer":"var(--txt2)"};
  return(
    <div className="page">
      <div className="phd" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div><div className="ptitle df">Templates Library</div><div className="psub">Versioned task execution templates · MVP: 12–15 templates</div></div>
        {role==="admin"&&<button className="btn btn-p">+ New Template</button>}
      </div>
      <div className="card">
        <div className="tmpl-row" style={{borderTop:"none"}}>
          {["Template","Domain","Risk","Version","Approval Policy",""].map(h=><div key={h} style={{fontSize:10.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)"}}>{h}</div>)}
        </div>
        {MOCK_TEMPLATES.map(t=>(
          <div className="tmpl-row" key={t.id}>
            <div>
              <div style={{fontWeight:600,fontSize:13}}>{t.name}</div>
              <div style={{fontSize:11.5,color:"var(--txt3)",marginTop:2}}>{t.description}</div>
            </div>
            <div style={{fontSize:12,color:DC[t.domain]||"var(--txt2)",fontWeight:600}}>{t.domain}</div>
            <div><RiskBadge risk={t.risk}/></div>
            <div className="mono" style={{fontSize:12}}>{t.version} <span style={{color:"var(--txt4)"}}>({t.versions}v)</span></div>
            <div style={{fontSize:12.5,color:"var(--txt2)"}}>{t.policy}</div>
            <div style={{display:"flex",gap:6}}>
              <button className="btn btn-g btn-sm">View</button>
              {role==="admin"&&<button className="btn btn-g btn-sm">Edit</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── WORKERS PAGE ───────────────────────────────────────────────────────────── */
const MOCK_WORKERS=[
  {id:"wk-01",role_title:"Finance Analyst",department:"Finance & Accounting",active:true,seniority:"senior",responsibilities:["Revenue reconciliation","AP/AR reporting","Period close support"],allowed_domains:["Finance"],preferred_templates:["FIN_EXPENSE_SUMMARY","FIN_INVOICE_DRAFT","FIN_BUDGET_VARIANCE"],restricted_actions:["fin.payroll-adjust","fin.bank-transfer"],communication_style:{tone:"professional",verbosity:"medium",formats:["PDF","spreadsheet"]}},
  {id:"wk-02",role_title:"Site Reliability Engineer",department:"Platform Engineering",active:false,seniority:"lead",responsibilities:["Incident response","Infrastructure provisioning","Deployment coordination"],allowed_domains:["Technical Operations","Developer"],preferred_templates:["OPS_INCIDENT_SUMMARY","OPS_CREATE_TICKET","DEV_DEPLOY_CHECKLIST"],restricted_actions:["ops.db-drop","ops.secret-rotate"],communication_style:{tone:"direct",verbosity:"short",formats:["Jira ticket","Slack"]}},
];
function WorkersPage(){
  const[jd,setJd]=useState("");const[gen,setGen]=useState(false);const[genning,setGenning]=useState(false);
  const SC={junior:"var(--txt3)",mid:"var(--txt2)",senior:"var(--acl)",lead:"var(--indigo)"};
  const doGen=()=>{setGenning(true);setTimeout(()=>{setGenning(false);setGen(true);},1800);};
  return(
    <div className="page">
      <div className="phd"><div className="ptitle df">Worker Profiles</div><div className="psub">Configure AI worker personas · Prompt: ROLE_FROM_JD_001</div></div>
      <div className="card cp" style={{marginBottom:18}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
          <div style={{fontWeight:700,fontSize:13}}>Generate Profile from Job Description</div>
          <span className="mono" style={{fontSize:11,color:"var(--txt3)"}}>ROLE_FROM_JD_001</span>
        </div>
        <div className="ntc ac" style={{marginBottom:12}}>Worker profiles influence tone, preferred templates, and clarification behaviour. They cannot bypass RBAC, override approval gates, or enable disallowed actions. (A3.4)</div>
        <textarea className="fi" rows={4} placeholder="Paste a job description here..." value={jd} onChange={e=>{setJd(e.target.value);setGen(false);}} style={{marginBottom:10}}/>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button className="btn btn-p btn-sm" onClick={doGen} disabled={!jd||genning}>{genning?<><span className="spin">◌</span> Generating...</>:"Generate Profile"}</button>
          {gen&&<span style={{fontSize:12,color:"var(--green)"}}>✓ Profile generated · confidence 0.88 · review before activating</span>}
        </div>
      </div>
      <div className="wg">
        {MOCK_WORKERS.map(w=>(
          <div key={w.id} className={`wc${w.active?" act":""}`}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
              <div><div className="wt">{w.role_title}</div><div className="wd">{w.department}</div></div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
                {w.active&&<StatusBadge status="completed"/>}
                <span style={{fontSize:11,fontWeight:600,color:SC[w.seniority]||"var(--txt2)"}}>{w.seniority}</span>
              </div>
            </div>
            <div className="ws2"><div className="ws2l">Responsibilities</div>{w.responsibilities.map(r=><div key={r} style={{fontSize:12.5,color:"var(--txt2)",paddingLeft:8,borderLeft:"2px solid var(--border)",marginBottom:3}}>· {r}</div>)}</div>
            <div className="ws2"><div className="ws2l">Allowed Domains</div>{w.allowed_domains.map(d=><span key={d} className="wtag alw">{d}</span>)}</div>
            <div className="ws2"><div className="ws2l">Preferred Templates</div>{w.preferred_templates.map(t=><span key={t} className="wtag mono" style={{fontSize:10.5}}>{t}</span>)}</div>
            <div className="ws2"><div className="ws2l">Restricted Actions</div>{w.restricted_actions.map(t=><span key={t} className="wtag res mono" style={{fontSize:10.5}}>{t}</span>)}</div>
            <div className="ws2" style={{marginBottom:14}}>
              <div className="ws2l">Communication Style</div>
              <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
                {Object.entries(w.communication_style).map(([k,v])=>(
                  <div key={k} style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:"var(--r)",padding:"3px 10px",fontSize:12}}>
                    <span style={{color:"var(--txt4)"}}>{k}: </span><span style={{color:"var(--txt)"}}>{Array.isArray(v)?v.join(", "):v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:"flex",gap:7}}>
              {!w.active&&<button className="btn btn-p btn-sm">Activate</button>}
              {w.active&&<button className="btn btn-g btn-sm">Deactivate</button>}
              <button className="btn btn-g btn-sm">Edit</button>
              <button className="btn btn-g btn-sm" style={{marginLeft:"auto"}}>View JSON</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── AUDIT LOG ──────────────────────────────────────────────────────────────── */
function AuditLogPage(){
  const AC={TASK_COMPLETED:"var(--green)",TASK_CREATED:"var(--acl)",APPROVAL_REQUESTED:"var(--amber)",NEEDS_CLARIFICATION:"var(--amber)",SCHEMA_VALIDATED:"var(--green)",TEMPLATE_CLASSIFIED:"var(--indigo)"};
  return(
    <div className="page">
      <div className="phd" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div><div className="ptitle df">Audit Log</div><div className="psub">Immutable event log — all workspace events, append-only · Cryptographically signed</div></div>
        <button className="btn btn-g btn-sm">↓ Export</button>
      </div>
      <div className="card">
        <div className="au-row" style={{borderTop:"none"}}>
          {["Timestamp","Action","Task ID","Detail"].map(h=><div key={h} style={{fontSize:10.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)"}}>{h}</div>)}
        </div>
        {MOCK_AUDIT.map((e,i)=>(
          <div className="au-row" key={i}>
            <div className="mono" style={{fontSize:11.5,color:"var(--txt3)"}}>{fmtTs(e.ts)}</div>
            <div className="mono" style={{fontSize:11.5,fontWeight:600,color:AC[e.action]||"var(--txt2)"}}>{e.action}</div>
            <div className="mono" style={{fontSize:11.5,color:"var(--txt2)"}}>{e.taskId}</div>
            <div style={{fontSize:12,color:"var(--txt3)"}}>{e.detail}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:10,fontSize:12,color:"var(--txt4)",textAlign:"right"}}>Showing 8 of 4,299 events · Workspace: corp-finance</div>
    </div>
  );
}

/* ─── DASHBOARD ──────────────────────────────────────────────────────────────── */
function DashboardPage(){
  const stats=[
    {label:"Tasks Created Today",val:"23",delta:"+4 vs yesterday",color:"var(--acl)"},
    {label:"Run Success Rate",val:"96.1%",delta:"+0.3% this week",color:"var(--green)"},
    {label:"Pending Approvals",val:"2",delta:"SLA: 4h target",color:"var(--amber)"},
    {label:"Avg Approval Time",val:"31m",delta:"within SLA",color:"var(--green)"},
    {label:"Avg Execution Duration",val:"2m 14s",delta:"−8s vs last week",color:"var(--green)"},
    {label:"Active Workspaces",val:"7",delta:"",color:"var(--txt2)"},
  ];
  const aqMetrics=[
    {label:"Avg Classification Confidence",val:"93.8%",sub:"threshold: 75%",color:"var(--green)"},
    {label:"Needs Clarification Rate",val:"4.2%",sub:"6 tasks today · CLS_GLOBAL_001",color:"var(--amber)"},
    {label:"Schema Validation Failures",val:"1.1%",sub:"JSON schema enforcement",color:"var(--acl)"},
    {label:"Misclassification Rate",val:"0.8%",sub:"confirmed by approvers",color:"var(--txt2)"},
  ];
  const barData=[8,12,7,15,18,11,9,14,16,20,13,17,21,23];
  const confData=[2,3,5,8,12,18,28,34,40,45,42,50,38,25];
  const maxB=Math.max(...barData),maxC=Math.max(...confData);
  return(
    <div className="page">
      <div className="phd"><div className="ptitle df">Dashboard</div><div className="psub">Workspace operational summary · corp-finance · 2026-02-19</div></div>
      <div className="sg">
        {stats.map(s=>(
          <div className="sc" key={s.label}>
            <div className="sv df" style={{color:s.color}}>{s.val}</div>
            <div className="sl2">{s.label}</div>
            {s.delta&&<div className="sd2">{s.delta}</div>}
          </div>
        ))}
      </div>
      <div className="g2" style={{marginBottom:16}}>
        <div className="card cp">
          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt3)",marginBottom:14}}>Task Volume — Last 14 Days</div>
          <div className="bc">{barData.map((v,i)=><div key={i} className="bb" style={{height:`${(v/maxB)*100}%`,background:`rgba(99,102,241,${0.4+(v/maxB)*0.6})`}}/>)}</div>
        </div>
        <div className="card cp">
          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt3)",marginBottom:14}}>AI Confidence Distribution — CLS_GLOBAL_001</div>
          <div className="bc">{confData.map((v,i)=><div key={i} className="bb" style={{height:`${(v/maxC)*100}%`,background:`rgba(165,180,252,${0.3+(v/maxC)*0.7})`}}/>)}</div>
          <div style={{fontSize:11,color:"var(--txt4)",marginTop:8}}>70–100% range · 94% tasks above 85% threshold</div>
        </div>
      </div>
      <div style={{marginBottom:16}}>
        <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--txt3)",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
          <span>AI Quality — Interpretation Layer</span>
          <span style={{flex:1,height:1,background:"var(--border)"}}/>
          <span style={{color:"var(--acl)",fontWeight:600,fontSize:10}}>CLS_GLOBAL_001 · RISK_GLOBAL_001</span>
        </div>
        <div className="aq-row">
          {aqMetrics.map(q=><div key={q.label} className="aqc"><div className="aqv df" style={{color:q.color}}>{q.val}</div><div className="aql">{q.label}</div><div className="aqs">{q.sub}</div></div>)}
        </div>
      </div>
      <div className="card cp">
        <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt3)",marginBottom:14}}>Risk Flag Frequency — Last 30 Days</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
          {[["pii_suspected",341,"var(--red)"],["high_impact_system",287,"var(--amber)"],["external_domain",124,"var(--indigo)"],["bulk_operation",58,"var(--acl)"]].map(([f,c,col])=>(
            <div key={f} style={{background:"var(--bg2)",borderRadius:"var(--r)",padding:"12px 14px",border:"1px solid var(--border)"}}>
              <div className="mono" style={{fontSize:10.5,color:col,marginBottom:6}}>{f}</div>
              <div className="df" style={{fontSize:22,fontWeight:300,color:"var(--txt)"}}>{c}</div>
              <div style={{fontSize:10,color:"var(--txt4)"}}>occurrences</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── PROMPT LIBRARY ─────────────────────────────────────────────────────────── */
function PromptsPage(){
  const[filter,setFilter]=useState("all");
  const[open,setOpen]=useState(null);
  const FILTERS=[{k:"all",l:"All"},{k:"global",l:"Global"},{k:"finance",l:"Finance"},{k:"tech_ops",l:"Tech Ops"},{k:"sales",l:"Sales"},{k:"logistics",l:"Logistics"},{k:"developer",l:"Developer"}];
  const PROMPTS=[
    {id:"SYS_GLOBAL_001",type:"system",domain:"global",name:"Platform System Prompt",version:"2.0.0",hash:"sha256:a1b2c3...",desc:"Core safety rules: JSON-only output, no action execution, no credential access. Applied to every AI call.",usedIn:["ALL"]},
    {id:"CLS_GLOBAL_001",type:"classification",domain:"global",name:"Template Classifier",version:"1.4.0",hash:"sha256:d4e5f6...",desc:"Classifies user input to a single approved template. Returns selected_template_id + confidence 0–1.",usedIn:["ALL"]},
    {id:"CLARIFY_GLOBAL_001",type:"clarification",domain:"global",name:"Clarification Request Generator",version:"1.1.0",hash:"sha256:g7h8i9...",desc:"Invoked when confidence < 0.75 or required fields are missing. Returns structured questions.",usedIn:["ALL"]},
    {id:"RISK_GLOBAL_001",type:"risk_flagging",domain:"global",name:"Risk Flags From Inputs",version:"1.3.0",hash:"sha256:j0k1l2...",desc:"Identifies risk_flags: external_domain, bulk_operation, high_impact_system, pii_suspected.",usedIn:["ALL"]},
    {id:"EXT_FIN_001",type:"extraction",domain:"finance",name:"Extract Finance Inputs",version:"1.2.0",hash:"sha256:m3n4o5...",desc:"Extracts date_range, receipt_ids, output_format for finance templates.",usedIn:["FIN_EXPENSE_SUMMARY","FIN_INVOICE_DRAFT"]},
    {id:"DRF_SM_001",type:"drafting",domain:"sales",name:"Draft Outreach Email",version:"1.0.0",hash:"sha256:p6q7r8...",desc:"Drafts professional outreach email. External send requires approval gate.",usedIn:["SM_DRAFT_OUTREACH"]},
    {id:"EXT_OPS_001",type:"extraction",domain:"tech_ops",name:"Extract Ticket Fields",version:"2.1.0",hash:"sha256:s9t0u1...",desc:"Extracts Jira/ServiceNow fields: summary, description, severity, system, labels.",usedIn:["OPS_CREATE_TICKET"]},
    {id:"EXT_LOG_001",type:"extraction",domain:"logistics",name:"Extract Shipment Inputs",version:"1.0.0",hash:"sha256:v2w3x4...",desc:"Extracts tracking_number and carrier from natural language query.",usedIn:["LOG_SHIPMENT_STATUS"]},
    {id:"SUM_DEV_001",type:"summarisation",domain:"developer",name:"PR Summary Generator",version:"1.1.0",hash:"sha256:y5z6a7...",desc:"Generates structured PR summary with key_changes, files_changed, risk_level, review_focus.",usedIn:["DEV_PR_SUMMARY"]},
  ];
  const filtered=filter==="all"?PROMPTS:PROMPTS.filter(p=>p.domain===filter);
  const TC={system:"var(--red)",classification:"var(--indigo)",clarification:"var(--amber)",risk_flagging:"var(--red)",extraction:"var(--acl)",drafting:"var(--green)",summarisation:"var(--sky)"};
  return(
    <div className="page">
      <div className="phd"><div className="ptitle df">Prompt Library</div><div className="psub">AI prompt configurations · Versioned, hashed, auditable</div></div>
      <div className="ntc ac" style={{marginBottom:18}}>
        <span style={{color:"var(--acl)",fontWeight:700}}>AI Gateway Rule — SYS_GLOBAL_001</span>
        <span style={{marginLeft:8,color:"var(--txt2)"}}>Every AI call must include system_prompt + task_prompt + JSON schema. Model must respond with valid JSON only.</span>
      </div>
      <div className="pf">
        {FILTERS.map(f=><button key={f.k} className={`pfp${filter===f.k?" on":""}`} onClick={()=>setFilter(f.k)}>{f.l}</button>)}
        <span style={{marginLeft:"auto",fontSize:12,color:"var(--txt3)",alignSelf:"center"}}>{filtered.length} prompts</span>
      </div>
      {filtered.map(p=>(
        <div key={p.id} className={`pc${open===p.id?" open":""}`} onClick={()=>setOpen(open===p.id?null:p.id)}>
          <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                <span className="mono" style={{fontSize:12,fontWeight:700,color:TC[p.type]||"var(--txt2)"}}>{p.id}</span>
                <span className="chip" style={{fontSize:10}}>{p.type}</span>
                <span className="mono" style={{fontSize:10.5,color:"var(--txt4)",marginLeft:"auto"}}>{p.version}</span>
              </div>
              <div style={{fontWeight:600,fontSize:13,marginBottom:3}}>{p.name}</div>
              <div style={{fontSize:12.5,color:"var(--txt2)"}}>{p.desc}</div>
            </div>
            <span style={{color:"var(--txt4)",fontSize:16,flexShrink:0}}>{open===p.id?"▲":"▼"}</span>
          </div>
          {open===p.id&&(
            <div style={{marginTop:14,borderTop:"1px solid var(--border)",paddingTop:14}}>
              <div className="g2" style={{gap:12}}>
                <div><div style={{fontSize:10,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:4}}>SHA-256 Hash</div><div className="mono" style={{fontSize:11.5,color:"var(--txt2)"}}>{p.hash}</div></div>
                <div><div style={{fontSize:10,textTransform:"uppercase",letterSpacing:"0.07em",color:"var(--txt4)",fontWeight:700,marginBottom:4}}>Used In Templates</div><div style={{display:"flex",gap:4,flexWrap:"wrap"}}>{p.usedIn.map(t=><span key={t} className="chip mono" style={{fontSize:10}}>{t}</span>)}</div></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── ROOT APP ───────────────────────────────────────────────────────────────── */
export default function App(){
  const[phase,setPhase]=useState("landing");
  const[prompt,setPrompt]=useState("");
  const[classResult,setClassResult]=useState(null);
  const[page,setPage]=useState("dashboard");
  const[collapsed,setCollapsed]=useState(false);
  const[activeTask,setActiveTask]=useState(MOCK_TASKS[0]);
  const[appVis,setAppVis]=useState(false);
  const[cmdModal,setCmdModal]=useState(false);
  const role="approver";

  const goApp=(pg,task)=>{
    if(task)setActiveTask(task);
    setPage(pg);
    setPhase("app");
    setTimeout(()=>setAppVis(true),80);
  };
  const handleLandingSubmit=p=>{setPrompt(p);setPhase("classifying");};
  const handleClassifyDone=result=>{setClassResult(result);setPhase("exec-config");};
  const handleExecConfirm=({model,budget,estimatedCost})=>{
    const r=classResult;
    const t={
      id:"TSK-2842",title:r.taskTitle,
      status:r.approvalRequired?"awaiting_approval":"running",
      risk:r.risk,domain:r.domain,
      template:r.template,templateVersion:r.version,
      createdBy:"M. Chen",workspace:"corp-finance",
      createdAt:new Date().toISOString(),
      confidence:r.confidence,aiStatus:"ok",
      promptId:r.promptId,missingFields:[],riskFlags:r.riskFlags||[],
      extractedInputs:{model,budget:`$${budget}`,estimated_cost:`$${estimatedCost.toFixed(4)}`},
    };
    goApp("task-thread",t);
  };
  const handleExecNav=dest=>{
    if(dest==="dashboard")goApp("dashboard");
    else setPhase("landing");
  };
  const handleCmdSubmit=p=>{setCmdModal(false);setPrompt(p);setPhase("classifying");setAppVis(false);};

  return(
    <>
      <style>{STYLES}</style>

      {phase==="landing"&&<LandingPage onSubmit={handleLandingSubmit}/>}
      {phase==="classifying"&&<ClassifyOverlay prompt={prompt} onComplete={handleClassifyDone}/>}
      {phase==="exec-config"&&<ExecConfigPage taskResult={classResult} onConfirm={handleExecConfirm} onDashboard={handleExecNav}/>}

      {cmdModal&&(
        <div className="cmdov">
          <div style={{width:680,maxWidth:"calc(100vw - 40px)",position:"relative"}}>
            <div style={{fontFamily:"monospace",fontSize:10,color:"var(--txt3)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span>New task — virtual worker platform</span>
              <button style={{background:"none",border:"none",color:"var(--txt3)",cursor:"pointer",fontSize:18}} onClick={()=>setCmdModal(false)}>✕</button>
            </div>
            <LandingPage onSubmit={handleCmdSubmit} embedded/>
          </div>
        </div>
      )}

      <div
        className="app"
        style={{
          opacity:phase==="app"&&appVis?1:0,
          transition:"opacity 0.5s ease",
          display:phase==="app"?"flex":"none",
          flexDirection:"column",
          height:"100vh",
        }}
      >
        <TopNav role={role} workspace="corp-finance"/>
        <div className="app-body">
          <Sidebar
            page={page}
            setPage={setPage}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            onNewTask={()=>setCmdModal(true)}
          />
          <main className="main-area">
            {page==="dashboard"   &&<DashboardPage/>}
            {page==="tasks"       &&<TasksPage setPage={setPage} setActiveTask={setActiveTask}/>}
            {page==="task-thread" &&<TaskThreadPage task={activeTask} role={role}/>}
            {page==="approvals"   &&<ApprovalsPage role={role}/>}
            {page==="exec-config" &&<ExecConfigPage taskResult={null} embedded isEmbedded onConfirm={()=>{}} onDashboard={()=>setPage("dashboard")}/>}
            {page==="templates"   &&<TemplatesPage role={role}/>}
            {page==="prompts"     &&<PromptsPage/>}
            {page==="workers"     &&<WorkersPage/>}
            {page==="audit"       &&<AuditLogPage/>}
          </main>
        </div>
      </div>
    </>
  );
}
