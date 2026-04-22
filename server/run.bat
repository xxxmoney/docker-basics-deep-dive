
::
:: Running the .dockerfile image
::

if "%NET_NAME%"=="" set NET_NAME=thoughts-net

:: To make this runnable again, we firstly remove any existing container with the same name, if it exists
:: We will ommit the `-f` parameter, which forces the removal (now it only remove the stopped container)
:: docker rm "thoughts-api-01"

:: As we have built the image, we can run it as container with `docker run`
:: With parameters:
:: - `--name` - to give the container a name
:: - `-d` - detached mode, meaning the container will run in the background
:: - `-p` - for mapping of ports - `PORT_LOCAL:PORT_CONTAINER`
:: - and the name of the image as last
:: We also set network - to enable communication between containers
:: We firstly need to have an existing network (is done in the ../run.bat - basically we need to have a single network for containers that we want to be able to communiate
:: In this case thoguhts-net
:: When the network is set up, calling another container uses said container's name as hostname - in this case, the server container is called "thoughts-api-01" (this will be used by the client in the url)
docker run -d --rm --name "thoughts-api-01" --network "%NET_NAME%" -p "8080:666" -v "thoughts-api-data:/app/data" "thoughts-api"
:: BTW - there is also an option to include `--rm` parameter, which would remove the container after it stops

:: Regarding the `-v` volume parameter:
:: These are volumes - they are used for persistance of data - even when the container is removed
:: - anonymous - without names, for temp data - docker handles where it is
:: - named - basically anonymous with name, docker handles where it is, but we can refer to it by name
:: - bind mount - binding a local path to a path in a container

:: We can also list running containers (or even stopped)
:: `docker ps` - lists running containers
:: `docker ps -a` - lists all containers, including stopped ones

