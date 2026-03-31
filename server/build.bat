
::
:: Building and the .dockerfile
::

:: So as we have defined the .dockerfile, we now need to build it and run it
:: This is done using the `docker build` command
:: With parameters:
:: - `-t` which means tag
:: - path `.`
docker build -t "thoughts-api" "."

