
import express from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import { getThoughts, addThought } from "./thoughts.js";
import { log } from "./logger.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response
    .status(StatusCodes.OK)
    .send('Staying alive, staying alive ah, ah-AH');
});

app.get('/thoughts', async (request, response) => {
  await log('Get thoughts request received');

  response
    .status(StatusCodes.OK)
    .json(getThoughts());
});

app.post('/thoughts', async (request, response) => {
  const { thought } = request.body;

  await log(`Post thought request received: '${thought}'`);

  if (!thought) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json({error: 'Thought is required'});
  }

  addThought(thought);

  response
    .status(StatusCodes.CREATED)
    .json({message: 'Thought added successfully'});
});

app.listen(PORT, () => {
  console.log(`I am running hot'n'steady on port '${PORT}'`);
});
