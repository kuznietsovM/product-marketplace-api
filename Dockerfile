FROM node:22-alpine

WORKDIR /app

COPY tsconfig.json package.json yarn.lock .
RUN yarn install

COPY src src

ENTRYPOINT yarn run start
