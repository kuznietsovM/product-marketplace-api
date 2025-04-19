FROM node:22-alpine

WORKDIR /app

COPY tsconfig.json tsconfig.server.json package.json yarn.lock nestjs-task-def-revision1.json .
RUN yarn install

COPY src src

ENTRYPOINT yarn run start
