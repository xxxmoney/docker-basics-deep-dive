import { getThoughts } from "./api.js";
import { log } from "./logger.js";

const appTimeout = 5 * 60 * 1000; // 5 minutes
const intervalTimeout = 2 * 1000; // 2 seconds

const appIntervalId = setInterval(async () => {
  const thoughts = await getThoughts();
  console.log(`Got thoughts: '${JSON.stringify(thoughts)}'`);
  await log(`Got thoughts count: '${thoughts.length}'`);
}, intervalTimeout);

await new Promise((resolve) => {
  setTimeout(() => {
    clearInterval(appIntervalId);
    resolve();
  }, appTimeout);
});

console.log('Finished')
