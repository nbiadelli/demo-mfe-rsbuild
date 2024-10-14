FROM node:20

RUN apt update && apt -y install ranger

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/shell

COPY package*.json ./

RUN npm install

EXPOSE 3000 16322

CMD [ "npm", "run", "dev" ]
