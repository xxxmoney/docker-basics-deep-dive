import express from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import { log } from "./log.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response
    .status(StatusCodes.OK)
    .send('Logging alive, logging alive ah, ah-AH');
});

app.post('/log', async (request, response) => {
  const { message, level, app } = request.body;

  await log(message, level, app);

  response
    .status(StatusCodes.OK)
    .send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`I am running hot'n'steady on port '${PORT}'`);
});

