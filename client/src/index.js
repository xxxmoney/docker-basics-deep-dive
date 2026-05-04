import {getThoughts} from "./api.js";

const appTimeout = 5 * 60 * 1000; // 5 minutes
const intervalTimeout = 2 * 1000; // 2 seconds

const appIntervalId = setInterval(async () => {
  const thoughts = await getThoughts();
  console.log(`Got thoughts: '${JSON.stringify(thoughts)}'`);
}, intervalTimeout);

await new Promise((resolve) => {
  setTimeout(() => {
    clearInterval(appIntervalId);
    resolve();
  }, appTimeout);
});

console.log('Finished')
