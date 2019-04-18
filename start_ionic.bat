@echo off
cd /D %~dp0
echo Diese Eingabeforderung nicht waehrend des Running beenden
echo Please dont close Window while Ionic is running
echo Please close this command only for Shutdown
echo Ionic is starting ...

ionic serve -c

if errorlevel 1 goto error
goto finish

:error
echo.
echo Ionic konnte nicht gestartet werden
echo Ionic could not be started
pause

:finish
