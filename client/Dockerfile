
FROM node:18-alpine

WORKDIR /app

COPY package.json ./
#COPY package-lock.json ./

RUN npm install

COPY src/ ./src/

CMD ["npm", "run", "start"]

