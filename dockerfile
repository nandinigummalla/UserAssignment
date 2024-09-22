FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

RUN apk add --no-cache build-base

RUN npm cache clean --force && npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


