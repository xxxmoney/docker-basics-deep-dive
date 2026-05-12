
const BASE_URL = process.env.LOGGER_URL;
const APP = 'server';

export async function log(message, level = 'info') {
  const url = `${BASE_URL}/log`;
  console.debug(`Logging message to '${url}': [${level}] ${message}`);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, level, app: APP }),
  });
  console.debug(`Received response: ${response.status} ${response.statusText}`);

  if (!response.ok) {
    throw new Error('Failed to log message: ' + response.statusText);
  }
}

