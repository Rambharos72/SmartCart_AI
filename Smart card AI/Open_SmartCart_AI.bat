@echo off
setlocal
cd /d "%~dp0"
where php >nul 2>nul
if errorlevel 1 (
  echo PHP was not found. Install PHP with PDO SQLite, then run this launcher again.
  pause
  exit /b 1
)
start "SmartCart PHP Server" cmd /k "cd /d ""%~dp0"" && php -S 127.0.0.1:8000 -t ""%~dp0"""
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8000"
