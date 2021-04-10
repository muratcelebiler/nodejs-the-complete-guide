FROM node:15.14.0-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash

COPY ./src /app
WORKDIR /app

RUN npm install

CMD ["npm", "start"]