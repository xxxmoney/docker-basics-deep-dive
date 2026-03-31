
import express from 'express';
import { StatusCodes } from 'http-status-codes';

const PORT = process.env.PORT || 666;
const app = express();

app.get('/', (request, response) => {
  response
    .status(StatusCodes.OK)
    .send('Staying alive, staying alive ah, ah-AH');
});

app.listen(PORT, () => {
  console.log(`I am running hot'n'steady on 'http://localhost:${PORT}'`);
});
