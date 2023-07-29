FROM node:16

WORKDIR /usr/src/app

COPY ./frontend/package*.json .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "dev"]