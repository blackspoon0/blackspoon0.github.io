@echo off
cd /d "%~dp0"
echo.
echo === Cleanup : old Sofa folders + old scripts ===
echo.
if not exist "_unused" mkdir "_unused"
if not exist "_unused\thumbs" mkdir "_unused\thumbs"
if not exist "_unused\web" mkdir "_unused\web"
if exist "thumbs\Personal\202609_Sofa" move /y "thumbs\Personal\202609_Sofa" "_unused\thumbs\" >nul
if exist "web\Personal\202609_Sofa"    move /y "web\Personal\202609_Sofa"    "_unused\web\" >nul
if exist "sync_names.bat"   move /y "sync_names.bat"   "_unused\" >nul
if exist "rename_files.bat" move /y "rename_files.bat" "_unused\" >nul
if exist "fix_folders.bat"  move /y "fix_folders.bat"  "_unused\" >nul

echo === Check ===
if exist "thumbs\Personal\202604_Sofa\Sofa1.jpg" (echo   sofa thumbs  OK) else (echo   sofa thumbs  FAILED)
if exist "web\Personal\202604_Sofa\Sofa1.jpg"    (echo   sofa web     OK) else (echo   sofa web     FAILED)
if exist "thumbs\Personal\202609_Sofa"            (echo   old folder   STILL THERE) else (echo   old folder   removed)
echo.
echo Done. Press any key to close.
pause >nul
