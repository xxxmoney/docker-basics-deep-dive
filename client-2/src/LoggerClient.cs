using System.Net.Http.Json;
using System.Text.Json;

namespace Client2;

public class LoggerClient {
  private const string AppName = "client-2";

  public enum LogLevel {
    Info,
    Warning,
    Error
  }

  private readonly HttpClient client;

  public LoggerClient(string url) {
    this.client = new HttpClient() {
      BaseAddress = new Uri(url)
    };
  }

  public async Task Log(string message, LogLevel level = LogLevel.Info) {
    var response = await client.PostAsJsonAsync("/log", new {
      Message = message,
      Level = level.ToString().ToLower(),
      App = AppName
    }, new JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase });

    response.EnsureSuccessStatusCode();
  }
}
