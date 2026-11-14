@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js to rebuild the storefront after editing assets\app.jsx.
  pause
  exit /b 1
)
node -e "const fs=require('fs');const Babel=require('./assets/vendor/babel.min.js');const source=fs.readFileSync('./assets/app.jsx','utf8');const output=Babel.transform(source,{presets:['env',['react',{runtime:'classic'}]]}).code;fs.writeFileSync('./assets/app.compiled.js',output);"
if errorlevel 1 (
  echo Storefront build failed. Review the JSX error above.
  pause
  exit /b 1
)
echo SmartCart storefront rebuilt successfully.
