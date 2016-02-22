

:: GLOBAL VARS
SET DESTINATION_FOLDER=C:\Users\ArgOC\Documents\MEGA\Projects\HOMEPAGE-PCANILHO\beta\trunk\
SET LOG_FILE_PATH=%DESTINATION_FOLDER%\log\LOG.TXT;
:: BACKING UP DATA TO MEGA
xcopy trunk %DESTINATION_FOLDER% /i /d /y > %DESTINATION_FOLDER%\log\LastCopiedFiles.txt
echo COPY MADE FROM: %ComputerName%/%USERNAME% AT: %DATE% %Time% >> %DESTINATION_FOLDER%\log\LastCopiedFiles.txt

IF EXIST %LOG_FILE_PATH% (
	echo ----------------------------------------------------------------- >> %LOG_FILE_PATH%
	echo COPY MADE FROM: %ComputerName%/%USERNAME% AT: %DATE% %Time%  >> %LOG_FILE_PATH%
	echo ----------------------------------------------------------------- >> %LOG_FILE_PATH%
) ELSE (
	nmake -f %LOG_FILE_PATH%
	echo ----------------------------------------------------------------- >> %LOG_FILE_PATH%
	echo COPY MADE FROM: %ComputerName%/%USERNAME% AT: %DATE% %Time% >> %LOG_FILE_PATH%
	echo ----------------------------------------------------------------- >> %LOG_FILE_PATH%
)
