# Nightly reflection-action loop. Triggered by a Windows Scheduled Task
# shortly after NeuroWorks' 02:00 reflection generates. Checks for a NEW
# reflection file, and if found, invokes Claude Code headlessly (unattended,
# full tool permission) to read its "What to try next" section and action
# the fixes in the NeuroWorks repo - the same review a human would do each
# morning, just automatic.
#
# Date logic: reflection files are named for the day they COVER, not the day
# they're generated. 2026-07-10.md was generated at 2026-07-11T00:04 (just
# after midnight). This script runs at 02:30 local, so "today" at run time is
# ALWAYS one day ahead of the reflection that just landed -- the file to
# process is dated YESTERDAY relative to this script's own execution date.
#
# Idempotent: a marker file records the last reflection date actually
# processed, so re-running this script (task misfire, manual re-trigger)
# doesn't re-action the same reflection twice.

$ErrorActionPreference = "Stop"
# claude's child-process stdout/stderr is UTF-8; PowerShell 5.1's default
# console encoding doesn't match, which corrupted the raw log into spaced-out
# garbage on the first real test run (2026-07-10-raw.log). Force it.
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$ReflectionsDir = "D:\Main brain\_neuroworks\reflections"
$LoopDir        = "D:\Main brain\_neuroworks\reflection-loop"
$MarkerFile     = Join-Path $LoopDir ".last-actioned"
$PromptFile     = Join-Path $LoopDir "action-prompt.md"
$RepoDir        = "C:\Users\Arthur Magaya\Documents\GitHub\clawbot"

$reflectionDate = (Get-Date).AddDays(-1).ToString("yyyy-MM-dd")
$reflectionPath = Join-Path $ReflectionsDir "$reflectionDate.md"

if (-not (Test-Path $reflectionPath)) {
    Write-Output "[$reflectionDate] No reflection found at $reflectionPath -- nothing to action. Exiting."
    exit 0
}

$lastActioned = ""
if (Test-Path $MarkerFile) { $lastActioned = (Get-Content $MarkerFile -Raw).Trim() }
if ($lastActioned -eq $reflectionDate) {
    Write-Output "[$reflectionDate] Already actioned this reflection (marker matches) -- skipping."
    exit 0
}

if (-not (Test-Path $PromptFile)) {
    Write-Output "[$reflectionDate] ERROR: prompt file missing at $PromptFile -- cannot proceed."
    exit 1
}

$logDir = $LoopDir
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir -Force | Out-Null }
$rawLogPath = Join-Path $logDir "$reflectionDate-raw.log"

$promptBody = Get-Content $PromptFile -Raw -Encoding UTF8
# Resolve the exact reflection file path here rather than have the LLM
# recompute "today" itself -- it would hit the same off-by-one this script
# just avoided. Single source of truth for "which file" lives in this script.
$prompt = "The reflection to process today is at: $reflectionPath (covers $reflectionDate). Its summary log goes at: $logDir\$reflectionDate.log`n`n$promptBody"

Write-Output "[$reflectionDate] Reflection found -- invoking claude CLI (unattended, scoped to $RepoDir)."

Push-Location $RepoDir
try {
    # -p: non-interactive, print-and-exit. --permission-mode bypassPermissions:
    # unattended, no human is watching to approve edits/commits/pushes. Scoped
    # by CWD (repo root) -- no --add-dir, so tool access doesn't extend beyond
    # what the default working-directory grant already covers.
    # --max-budget-usd: hard financial ceiling so a runaway loop can't rack up
    # an unbounded bill overnight. First real test (2026-07-10 reflection, 4
    # items) hit a $5 cap after completing only 2 of 4 -- it did real,
    # correctly-diagnosed, tested, committed, pushed work in that budget, it
    # just wasn't enough headroom to finish. Raised to $12.
    & claude -p $prompt --permission-mode bypassPermissions --max-budget-usd 12 --output-format text --no-session-persistence *>&1 | Out-File -FilePath $rawLogPath -Encoding utf8

    $exitCode = $LASTEXITCODE
} finally {
    Pop-Location
}

# Mark this reflection as actioned regardless of exit code. Task Scheduler
# fires once daily; if the run failed partway, retrying automatically risks
# re-running a half-applied fix. A failed/partial run is visible in the raw
# log for manual follow-up instead.
Set-Content -Path $MarkerFile -Value $reflectionDate -NoNewline

Write-Output "[$reflectionDate] Done. Exit code: $exitCode. Raw log: $rawLogPath"
Write-Output "[$reflectionDate] Claude's own summary (if it completed step 6) should be at $logDir\$reflectionDate.log"
