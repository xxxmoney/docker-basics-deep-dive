import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '/data/data.json');

function checkFile() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
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
