@echo off
cd /d "%~dp0"
echo.
echo === Sync thumbs / web names to images ===
echo.
if not exist "_unused" mkdir "_unused"

echo -- Designer
call :R "thumbs\Designer" "SubDe.jpg" "SubDe1.jpg"
call :R "web\Designer"    "SubDe.jpg" "SubDe1.jpg"
call :R "thumbs\Designer" "SubDe(1).jpg" "SubDe2.jpg"
call :R "web\Designer"    "SubDe(1).jpg" "SubDe2.jpg"
call :R "thumbs\Designer" "6_001.jpg" "SubDe3.jpg"
call :R "web\Designer"    "6_001.jpg" "SubDe3.jpg"
call :R "thumbs\Designer" "SubDe(3).jpg" "SubDe4.jpg"
call :R "web\Designer"    "SubDe(3).jpg" "SubDe4.jpg"
call :R "thumbs\Designer" "SubDe(2).jpg" "SubDe8.jpg"
call :R "web\Designer"    "SubDe(2).jpg" "SubDe8.jpg"

echo -- ZBRUSH
call :R "thumbs\ZBRUSH" "Tile1_End.jpg" "ZBrush1.jpg"
call :R "web\ZBRUSH"    "Tile1_End.jpg" "ZBrush1.jpg"
call :R "thumbs\ZBRUSH" "Tile2_Main Camera_005.jpg" "ZBrush2.jpg"
call :R "web\ZBRUSH"    "Tile2_Main Camera_005.jpg" "ZBrush2.jpg"
call :R "thumbs\ZBRUSH" "Zbrush2_Goal.jpg" "ZBrush2_Gathered.jpg"
call :R "web\ZBRUSH"    "Zbrush2_Goal.jpg" "ZBrush2_Gathered.jpg"
call :R "thumbs\ZBRUSH" "Rock5.jpg" "ZBrush5.jpg"
call :R "web\ZBRUSH"    "Rock5.jpg" "ZBrush5.jpg"
call :R "thumbs\ZBRUSH" "Rock5_Main Camera 1.jpg" "ZBrush5_Main1.jpg"
call :R "web\ZBRUSH"    "Rock5_Main Camera 1.jpg" "ZBrush5_Main1.jpg"
call :R "thumbs\ZBRUSH" "Rock5_Main Camera 2.jpg" "ZBrush5_Main2.jpg"
call :R "web\ZBRUSH"    "Rock5_Main Camera 2.jpg" "ZBrush5_Main2.jpg"
call :R "thumbs\ZBRUSH" "ZBrush5_Photo.jpg" "ZBrush5_ZBrush.jpg"
call :R "web\ZBRUSH"    "ZBrush5_Photo.jpg" "ZBrush5_ZBrush.jpg"

echo -- Personal\2025_PersonalObjects
call :R "thumbs\Personal\2025_PersonalObjects" "wip_01.jpg" "JewelBox.jpg"
call :R "web\Personal\2025_PersonalObjects"    "wip_01.jpg" "JewelBox.jpg"
call :R "thumbs\Personal\2025_PersonalObjects" "candlestick_wip.jpg" "candlestick_1.jpg"
call :R "web\Personal\2025_PersonalObjects"    "candlestick_wip.jpg" "candlestick_1.jpg"

echo -- Personal\202502_Sci-fi
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00070.jpg" "Scifi_1.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00070.jpg" "Scifi_1.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00074.jpg" "Scifi_2.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00074.jpg" "Scifi_2.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00078.jpg" "Scifi_3.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00078.jpg" "Scifi_3.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00076.jpg" "Scifi_4.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00076.jpg" "Scifi_4.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00124.jpg" "Scifi_5.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00124.jpg" "Scifi_5.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00081.jpg" "Scifi_6.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00081.jpg" "Scifi_6.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00066.jpg" "Scifi_7.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00066.jpg" "Scifi_7.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00068.jpg" "Scifi_8.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00068.jpg" "Scifi_8.jpg"
call :R "thumbs\Personal\202502_Sci-fi" "HighresScreenshot00123.jpg" "Scifi_9.jpg"
call :R "web\Personal\202502_Sci-fi"    "HighresScreenshot00123.jpg" "Scifi_9.jpg"

echo -- Personal\202504_Fireplace

echo -- Personal\202506_CoffeeMachine
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00178.jpg" "CoffeeMachine1.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00178.jpg" "CoffeeMachine1.jpg"
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00179.jpg" "CoffeeMachine2.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00179.jpg" "CoffeeMachine2.jpg"
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00180.jpg" "CoffeeMachine3.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00180.jpg" "CoffeeMachine3.jpg"
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00185.jpg" "CoffeeMachine_Light1.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00185.jpg" "CoffeeMachine_Light1.jpg"
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00186.jpg" "CoffeeMachine_Light2.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00186.jpg" "CoffeeMachine_Light2.jpg"
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00187.jpg" "CoffeeMachine_Light3.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00187.jpg" "CoffeeMachine_Light3.jpg"
call :R "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00188.jpg" "CoffeeMachine_Light4.jpg"
call :R "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00188.jpg" "CoffeeMachine_Light4.jpg"

echo -- Personal\202510_Carriage
call :R "thumbs\Personal\202510_Carriage" "Carriage.jpg" "Carriage1.jpg"
call :R "web\Personal\202510_Carriage"    "Carriage.jpg" "Carriage1.jpg"
call :R "thumbs\Personal\202510_Carriage" "Carriage(1).jpg" "Carriage2.jpg"
call :R "web\Personal\202510_Carriage"    "Carriage(1).jpg" "Carriage2.jpg"
call :R "thumbs\Personal\202510_Carriage" "Carriage(3).jpg" "Carriage3.jpg"
call :R "web\Personal\202510_Carriage"    "Carriage(3).jpg" "Carriage3.jpg"
call :R "thumbs\Personal\202510_Carriage" "Carriage(4).jpg" "Carriage4.jpg"
call :R "web\Personal\202510_Carriage"    "Carriage(4).jpg" "Carriage4.jpg"
call :R "thumbs\Personal\202510_Carriage" "Carriage(2).jpg" "Carriage5.jpg"
call :R "web\Personal\202510_Carriage"    "Carriage(2).jpg" "Carriage5.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00046.jpg" "Carriage_West1.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00046.jpg" "Carriage_West1.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00048.jpg" "Carriage_West2.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00048.jpg" "Carriage_West2.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00047.jpg" "Carriage_West3.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00047.jpg" "Carriage_West3.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00049.jpg" "Carriage_West4.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00049.jpg" "Carriage_West4.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00050.jpg" "Carriage_West5.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00050.jpg" "Carriage_West5.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00051.jpg" "Carriage_West6.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00051.jpg" "Carriage_West6.jpg"
call :R "thumbs\Personal\202510_Carriage" "HighresScreenshot00052.jpg" "Carriage_West7.jpg"
call :R "web\Personal\202510_Carriage"    "HighresScreenshot00052.jpg" "Carriage_West7.jpg"

echo -- Personal\202512_Waterwheel
call :R "thumbs\Personal\202512_Waterwheel" "Carriage.jpg" "Waterwheel1.jpg"
call :R "web\Personal\202512_Waterwheel"    "Carriage.jpg" "Waterwheel1.jpg"
call :R "thumbs\Personal\202512_Waterwheel" "Carriage(1).jpg" "Waterwheel2.jpg"
call :R "web\Personal\202512_Waterwheel"    "Carriage(1).jpg" "Waterwheel2.jpg"
call :R "thumbs\Personal\202512_Waterwheel" "Carriage(3).jpg" "Waterwheel3.jpg"
call :R "web\Personal\202512_Waterwheel"    "Carriage(3).jpg" "Waterwheel3.jpg"
call :R "thumbs\Personal\202512_Waterwheel" "Carriage(4).jpg" "Waterwheel4.jpg"
call :R "web\Personal\202512_Waterwheel"    "Carriage(4).jpg" "Waterwheel4.jpg"
call :R "thumbs\Personal\202512_Waterwheel" "Carriage(5).jpg" "Waterwheel5.jpg"
call :R "web\Personal\202512_Waterwheel"    "Carriage(5).jpg" "Waterwheel5.jpg"
call :R "thumbs\Personal\202512_Waterwheel" "Carriage(2).jpg" "Waterwheel6.jpg"
call :R "web\Personal\202512_Waterwheel"    "Carriage(2).jpg" "Waterwheel6.jpg"
call :R "thumbs\Personal\202512_Waterwheel" "Waterwheel.jpg" "Waterwheel_PBR.jpg"
call :R "web\Personal\202512_Waterwheel"    "Waterwheel.jpg" "Waterwheel_PBR.jpg"

echo -- Personal\202602_Knife
call :R "thumbs\Personal\202602_Knife" "Knife_Camera_RenderPass.jpg" "Knife_PBR1.jpg"
call :R "web\Personal\202602_Knife"    "Knife_Camera_RenderPass.jpg" "Knife_PBR1.jpg"
call :R "thumbs\Personal\202602_Knife" "Knife_Camera_RenderPass2.jpg" "Knife_PBR2.jpg"
call :R "web\Personal\202602_Knife"    "Knife_Camera_RenderPass2.jpg" "Knife_PBR2.jpg"

echo -- removing 2 leftover thumbnails (deleted originals)
call :M "thumbs\Personal\202506_CoffeeMachine" "HighresScreenshot00177.jpg"
call :M "web\Personal\202506_CoffeeMachine"    "HighresScreenshot00177.jpg"
call :M "thumbs\Personal\202602_Knife" "Knife_Camera 1.jpg"
call :M "web\Personal\202602_Knife"    "Knife_Camera 1.jpg"

call :M "." "fix_folders.bat"
call :M "." "rename_files.bat"

echo.
echo === Check ===
if exist "web\Personal\202510_Carriage\Carriage_West7.jpg" (echo   Carriage   OK) else (echo   Carriage   FAILED)
if exist "web\Personal\202502_Sci-fi\Scifi_9.jpg" (echo   Scifi      OK) else (echo   Scifi      FAILED)
if exist "web\Personal\202506_CoffeeMachine\CoffeeMachine_Light4.jpg" (echo   Coffee     OK) else (echo   Coffee     FAILED)
if exist "web\Designer\SubDe8.jpg" (echo   Designer   OK) else (echo   Designer   FAILED)
if exist "web\ZBRUSH\ZBrush5_ZBrush.jpg" (echo   ZBrush     OK) else (echo   ZBrush     FAILED)
if exist "web\Personal\2025_PersonalObjects\JewelBox.jpg" (echo   Objects    OK) else (echo   Objects    FAILED)
echo.
echo Done. Press any key to close.
pause >nul
exit /b

:R
if not exist "%~1\%~2" exit /b
ren "%~1\%~2" "%~3"
exit /b

:M
if not exist "%~1\%~2" exit /b
move /y "%~1\%~2" "_unused\" >nul
exit /b
