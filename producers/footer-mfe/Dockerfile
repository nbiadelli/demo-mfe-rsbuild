FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3093 16322

CMD [ "npm", "run", "dev" ]
