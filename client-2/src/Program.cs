using Client2;
using Newtonsoft.Json;

var appTimeout = TimeSpan.FromMinutes(5);
var intervalTimeout = TimeSpan.FromSeconds(2);

var thoughtsClient = new ThoughtsClient(Environment.GetEnvironmentVariable("API_URL"));
var loggerClient = new LoggerClient(Environment.GetEnvironmentVariable("LOGGER_URL"));

var cancellationTokenSource = new CancellationTokenSource();
cancellationTokenSource.CancelAfter(appTimeout);
while (!cancellationTokenSource.Token.IsCancellationRequested) {
  try
  {
    var thoughts = await thoughtsClient.GetThoughts();
    Console.WriteLine($"Got thoughts: {JsonConvert.SerializeObject(thoughts)}");
    await loggerClient.Log($"Got thoughts count: {thoughts.Count}");
  }
  catch (Exception e)
  {
    Console.WriteLine(e);
  }

  await Task.Delay(intervalTimeout, cancellationTokenSource.Token);
}

Console.WriteLine("Finished");

