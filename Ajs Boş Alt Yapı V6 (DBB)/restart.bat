echo off
title Hex Restarting
color d
cls
:a
pm2 restart Hex.js
goto a