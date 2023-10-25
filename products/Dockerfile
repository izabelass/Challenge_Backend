FROM node:18-alpine

RUN mkdir -p /home/node/api/node_modules

WORKDIR /home/node/api

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build