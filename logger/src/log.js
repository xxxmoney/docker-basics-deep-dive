import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSONFilePreset } from 'lowdb/node'

const root = dirname(fileURLToPath(import.meta.url));
const directoryPath = path.join(root, '../data');
const filePath = path.join(directoryPath, 'db.json');

const db = await JSONFilePreset(filePath, { logs: [] })

export async function log(message, level, app) {
  console.log(`Saving log: [${level}] '${message}' (app: ${app})`);

  db.data.logs.push({ message, level, app });
  await db.write();
}
