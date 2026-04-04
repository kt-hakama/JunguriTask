@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  dist をプレビューします（http://localhost:4173）
echo  初めてのときは先に: npm install
echo  ビルドが古いときは先に: npm run build
echo  終了: このウィンドウを閉じるか Ctrl+C
echo.
call npm run preview
pause
