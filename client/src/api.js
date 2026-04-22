
const BASE_URL = process.env.API_URL;

export async function getThoughts() {
  const url = `${BASE_URL}/thoughts`;
  console.debug(`Fetching thoughts from ${url}`);
  const response = await fetch(url);
  console.debug(`Received response: ${response.status} ${response.statusText}`);

  if (!response.ok) {
    throw new Error('Failed to get thoughts: ' + response.statusText);
  }

  return await response.json();
}

export async function addThought(thought) {
  const url = `${BASE_URL}/thoughts`;
  console.debug(`Adding thought to ${url}: ${thought}`);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ thought }),
  });
  console.debug(`Received response: ${response.status} ${response.statusText}`);

  if (!response.ok) {
    throw new Error('Failed to add thought: ' + response.statusText);
  }

  return await response.json();
}
