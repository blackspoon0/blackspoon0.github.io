@echo off
cd /d "%~dp0"
echo.
echo === Sofa folder : 202609_Sofa  --^>  202604_Sofa ===
echo.
if exist "thumbs\Personal\202609_Sofa" ren "thumbs\Personal\202609_Sofa" "202604_Sofa"
if exist "web\Personal\202609_Sofa"    ren "web\Personal\202609_Sofa"    "202604_Sofa"

if not exist "_unused" mkdir "_unused"
if exist "sync_names.bat"   move /y "sync_names.bat"   "_unused\" >nul
if exist "rename_files.bat"  move /y "rename_files.bat"  "_unused\" >nul
if exist "fix_folders.bat"   move /y "fix_folders.bat"   "_unused\" >nul

echo === Check ===
if exist "thumbs\Personal\202604_Sofa\Sofa1.jpg" (echo   thumbs  OK) else (echo   thumbs  FAILED)
if exist "web\Personal\202604_Sofa\Sofa1.jpg"    (echo   web     OK) else (echo   web     FAILED)
if exist "thumbs\Personal\202609_Sofa"            (echo   old folder still there - delete it manually) else (echo   old     removed)
echo.
echo Done. Press any key to close.
pause >nul
