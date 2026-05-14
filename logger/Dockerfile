
FROM node:18-alpine
RUN apk add --no-cache curl

WORKDIR /app

COPY package.json ./

RUN npm install

COPY nodemon.json ./
COPY src/ ./src/

EXPOSE 666

CMD ["npm", "run", "start"]
