import express from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response
    .status(StatusCodes.OK)
    .send('Logging alive, logging alive ah, ah-AH');
});

app.listen(PORT, () => {
  console.log(`I am running hot'n'steady on port '${PORT}'`);
});

