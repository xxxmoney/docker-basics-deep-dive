
set NET_NAME=thoughts-net
docker network inspect %NET_NAME% >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Network %NET_NAME% not found. Creating...
    docker network create %NET_NAME%
) else (
    echo Network %NET_NAME% exists
)

call .\server\run.bat
call .\client\run.bat


