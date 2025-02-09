FROM node:23.7.0

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY webpack.config.js ./
COPY frontend ./frontend

RUN yarn install

EXPOSE 3001

CMD ["yarn", "start"]
