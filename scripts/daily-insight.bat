@echo off
REM ============================================================
REM  Kenny - Daily Insight auto-publisher (Claude Code, no API key)
REM  Runs headless Claude Code on your Claude subscription login.
REM  Triggered by Windows Task Scheduler, daily 10:00 KST.
REM ============================================================

cd /d C:\kenny_work\000._My_company\260528_kenny_web
if not exist logs mkdir logs

REM NOTE:
REM  - No --bare flag  -> Claude Code uses your keychain/subscription login (no ANTHROPIC_API_KEY needed).
REM  - acceptEdits     -> file writes + common fs commands auto-approved.
REM  - allowedTools    -> Bash (node/git), web research, file read/write auto-approved (no prompts).

claude -p "Read scripts/daily-insight-routine.md and follow its steps exactly to publish today's TWO Korean insight posts. IMPORTANT: the two categories are NOT fixed to design/AI — compute TODAY'S category pair from the rotation table in the routine (step 2) across the four areas design/ai/plan(기획·QA)/pm(PM·사업기획), and publish one post for each category in that pair. Then git add only data/insights.json and js/insights-data.js, commit, and push to origin main. Output a one-line summary for each post published (include its category)." --permission-mode acceptEdits --allowedTools "Bash,Read,Edit,Write,WebSearch,WebFetch" >> "logs\daily-insight-%date:~-4%-%date:~4,2%-%date:~7,2%.log" 2>&1

echo Exit code: %ERRORLEVEL% >> "logs\daily-insight-%date:~-4%-%date:~4,2%-%date:~7,2%.log"
