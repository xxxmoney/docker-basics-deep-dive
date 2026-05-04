
FROM mcr.microsoft.com/dotnet/sdk:10.0 as build

WORKDIR /app

COPY Client2.csproj ./
RUN dotnet restore

COPY Program.cs ./

CMD ["dotnet", "run"]
