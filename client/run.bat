
if "%NET_NAME%"=="" set NET_NAME=thoughts-net

:: We can pass environemnt variables with the -e flag
:: Regarding network - as mentioned in the server/run.bat, we have set up a network - so the client can use the hostname of the server name
:: So the thoughts-api-01 container is reachable at http://thoughts-api-01:666 from the client container, as they are on the same network thoughts-net
docker run -d --name "thoughts-client-01" --network "%NET_NAME%" -e "API_URL=http://thoughts-api-01:666" "thoughts-client"
