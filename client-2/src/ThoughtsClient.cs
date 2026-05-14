using System.Net.Http.Json;

namespace Client2;

public class ThoughtsClient {
  private readonly HttpClient client;

  public ThoughtsClient(string url) {
    this.client = new HttpClient() {
      BaseAddress = new Uri(url)
    };
  }

  public async Task<List<string>> GetThoughts() {
    var response = await client.GetAsync("/thoughts");
    response.EnsureSuccessStatusCode();

    return await response.Content.ReadFromJsonAsync<List<string>>();
  }

}
