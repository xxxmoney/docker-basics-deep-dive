using System.Net.Http.Json;
using Newtonsoft.Json;

var appTimeout = TimeSpan.FromMinutes(5);
var intervalTimeout = TimeSpan.FromSeconds(2);

var url = Environment.GetEnvironmentVariable("API_URL");
using var client = new HttpClient() { BaseAddress = new Uri(url) };

async Task<List<string>> GetThoughts() {
  var response = await client.GetAsync("/thoughts");
  response.EnsureSuccessStatusCode();

  return await response.Content.ReadFromJsonAsync<List<string>>();
}

var cancellationTokenSource = new CancellationTokenSource();
cancellationTokenSource.CancelAfter(appTimeout);
while (!cancellationTokenSource.Token.IsCancellationRequested) {
  try
  {
    var thoughts = await GetThoughts();
    Console.WriteLine(JsonConvert.SerializeObject(thoughts));
  }
  catch (Exception e)
  {
    Console.WriteLine(e);
  }

  await Task.Delay(intervalTimeout, cancellationTokenSource.Token);
}

Console.WriteLine("Finished");

