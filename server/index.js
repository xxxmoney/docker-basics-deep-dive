
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { getThoughts, addThought } from "./thoughts.js";

const PORT = process.env.PORT || 666;
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response
    .status(StatusCodes.OK)
    .send('Staying alive, staying alive ah, ah-AH');
});

app.get('/thoughts', (request, response) => {
  response
    .status(StatusCodes.OK)
    .json(getThoughts());
});

app.post('/thoughts', (request, response) => {
  const {thought} = request.body;

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

// TODO: test in docker, add volumes for ./data/thoughts.json, etc

app.listen(PORT, () => {
  console.log(`I am running hot'n'steady on 'http://localhost:${PORT}'`);
});
