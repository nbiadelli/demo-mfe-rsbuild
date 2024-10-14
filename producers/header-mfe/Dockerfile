FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3091 16322

CMD [ "npm", "run", "dev" ]
