
::
:: Running the .dockerfile image
::

:: As we have built the image, we can run it as container with `docker run`
:: With parameters:
:: - `--name` - to give the container a name
:: - `-d` - detached mode, meaning the container will run in the background
:: - `-p` - for mapping of ports - `PORT_LOCAL:PORT_CONTAINER`
:: - and the name of the image as last
docker run -d --name "thoughts-api-01" -p "8080:666" "thoughts-api"

:: We can also list running containers (or even stopped)
:: `docker ps` - lists running containers
:: `docker ps -a` - lists all containers, including stopped ones

