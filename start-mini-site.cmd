@echo off
setlocal
cd /d "%~dp0"

echo [1/3] Checking dependencies...
if not exist "node_modules" (
  echo Installing Node dependencies...
  call npm.cmd install
  if errorlevel 1 goto :error
)

echo [2/3] Building mini-site...
call npm.cmd run build:mini-site
if errorlevel 1 goto :error

echo [3/3] Starting local server on http://127.0.0.1:8010 ...
echo Press Ctrl+C to stop.
call npm.cmd run serve:mini-site
if errorlevel 1 goto :error

goto :eof

:error
echo.
echo Failed to start the mini-site.
exit /b 1
