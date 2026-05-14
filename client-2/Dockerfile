
FROM mcr.microsoft.com/dotnet/sdk:10.0 as build
WORKDIR /app
COPY Client2.csproj ./
RUN dotnet restore

# TODO: figure out why this no work for watch
#FROM mcr.microsoft.com/dotnet/runtime:10.0 as runtime
#WORKDIR /app
COPY src/ ./src/

CMD ["dotnet", "run"]
