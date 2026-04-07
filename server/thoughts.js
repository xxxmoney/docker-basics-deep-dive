import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const directoryPath = path.join(__dirname, '/data');
const filePath = path.join(directoryPath, 'data.json');

function checkFile() {
  if(!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]), {  });
  }
}

export function getThoughts() {
  checkFile();

  const file = fs.readFileSync(filePath);
  return JSON.parse(file);
}

export function addThought(thought) {
  checkFile();

  const thoughts = getThoughts();
  thoughts.push(thought);

  fs.writeFileSync(filePath, JSON.stringify(thoughts));
}
